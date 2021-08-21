---
layout: post
title: An alternative to returning Dictionary
date: 2021-08-13 15:10:00
description: A case sensitivity bug breaks the service. How can we write more testable code?
categories: [code,testing,design]
---
Should you really be passing that dictionary / hashmap between classes or if it should be a first class collection? Let me share a cautionary tale.

My team had a bug where a core scenario broke due to a case sensitivity error. The code with the bug was a private inner function:
{% highlight csharp linenos %}
// C#
private async Task<Dictionary<string, byte[]>> GetBytesForIdsAsync(List<Guid> ids)
{
  // (1) Use the client to get the payload
  List<ByteMessage> messages = await this.client.GetBytesForIdsAsync(ids);
  var idByteMap = new Dictionary<string, byte[]>();
  var retrievedIds = new List<string>(ids.Count);
 
  // (2) Parse the payloads and add to the map
  // (3) Save the retrieved Ids for logging
  foreach (ByteMessage message in messages)
  {
    byte[] payload = Convert.FromBase64String(
      Encoding.UTF8.GetString(message.Content));
 
    idByteMap.Add(message.Id, payload);
    retrievedIds.Add(message.Id);
  }
 
  // (4) log the list of IDs requested and retrieved
  this.Log(
    $"Requested Ids: '{string.Join(',', secretIds)}'; Retrieved Ids: '{string.Join(','. retrievedIds)}'");
 
  return idByteMap;
}
{% endhighlight %}

The dictionary was accessed with a key in lower case while `ByteMessage.Id` on line 16 was upper case. Therefore, the byte payload was “missing” which broke the scenario.

Two easy fixes are apparent:
1. Use `StringComparer.OrginalIgnoreCase` as a constructor parameter for the Dictionary
2. Use `Guid` as the key type rather than `string`

#2 is a poor solution because the code that accesses this Dictionary does so with a string. This would require adding even more test cases each time the Dictionary is accessed to handle cases where Guid.Parse fails.

While both would solve this bug, they don’t address the root of the problem: **testability**.

This code is very difficult to test. Since it’s a private function, one must test it through the calling public function. For each unit test in `GetBytesForIdsAsync` one must perform all the setup required for the calling function. In this case it involved configuring several non-trivial parameters and mocking the client. All of this is in addition to the other unit tests required for the calling function.

Understandably, no one wants to do this much work to unit test. The result is that many scenarios in `GetBytesForIdsAsync` remain untested. In fact, only 1/7 test cases was tested properly which explains why failure occurred.

How can this code be refactored to be more testable? Let’s try using a first class collection.

{% highlight csharp linenos %}
// C#
private async Task<ByteCollection> GetBytesForIdsAsync(List<Guid> ids)
{
  // (1) Use the client to get the payload
  List<ByteMessage> messages = await this.client.GetBytesForIdsAsync(ids);
 
  // (2) Parse the payloads and add to the map
  // (3) Save the retrieved Ids for logging
  var result = new ByteCollection(messages);
 
  // (4) log the list of IDs requested and retrieved
  this.Log(
    $"Requested Ids: {string.Join(',', secretIds)}; Retrieved Ids: {result}");
 
  return result;
}
{% endhighlight %}

The implementation of `ByteCollection` is an exercise for the reader. Providing an implementation for `this[sting key]` allows the `ByteCollection` to function similarly to a regular dictionary (ex: `byteCollection[myKey] = newValue`).

There are several key advantages to this approach:

1. All tests cases can be performed directly on `ByteCollection`
2. All tests are very simple – no mocks or non-trivial parameter setup
3. A common and well-tested access pattern via `this[string key]`
  1. No additional tests needed when `ByteCollection` is accessed to test errors
4. ByteCollection is the right place to add more functionality in the event it becomes required
5. Readability is increased because each line in `GetBytesForIdsAsync` now operates on a similar level of abstraction

A combination of #1 and #2 leads to easily covering all seven unit test cases. As one focuses directly on these small test cases, one is much more likely to consider the case sensitivity issue. It’s easy to forget the case sensitivity edge case when attempting to test functionality several levels deep in private methods.

If you find yourself passing a dictionary between classes, ask yourself if a first class collection wrapping the dictionary will increase testability and readability.
