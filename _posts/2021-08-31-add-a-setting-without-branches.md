---
layout: post
title: Add a Setting Without Branches
date: 2021-08-27 21:55
description: Add new functionality to your code without adding if/else everywhere
categories: [testing, code, design]
---
When testing is painful, it's a cue to examine the design and determine if there is a better approach.

I reviewed a pull request for code that served an HTTP response with a complex payload. There was a new requirement that three sub-sections of the payload must be encrypted, lets call them `Foo`, `Bar` and `Baz`. The changes were made by passing a `bool` setting into the `PayloadGenerator` constructor along with a lambda function to perform the encryption.

`PayloadGenerator` was a 4200 line class with many private methods used to assemble the payload. A few private methods deep the setting was used to determine if the encryption function should be run on `Foo`, `Bar`, and `Baz` before they were attached to the payload. Tests to cover the three calls to the encryption function when enabled / disabled were added. Six new tests in total -- two for enabled and disabled times three calls to the encryption function.

Here's an abstracted version of the code:
{%highlight csharp linenos %}
// C# code
public class PayloadGenerator {
  private readonly bool encrypt;
  private readonly Func<byte[], string> encryptLambda;

  public PayloadGenerator(
    T1 param1,
    // More complicated params
    /* new */ bool encrypt,
    /* new */ Func<byte[], string> encryptLambda) {
      this.encrypt = encrypt;
      this.encryptLambda = encryptLambda;
    }

  public Payload Get() {
    var payload = new Payload();
    // do more work
    this.configure(payload);
    return payload;
  }

  private void Configure(Payload payload) {
    // do more work
    this.SetFoo(payload);
    this.SetBar(payload);
    this.SetBaz(payload);
  }

  private void SetFoo(Payload payload) {
    // do more work
    payload.Foo = this.encrypt ? param1.GetFoo() : encryptLambda(param1.GetFood);
  }

  private void SetBar(Payload payload) {
    // do more work
    payload.Bar = this.encrypt ? param2.GetBar() : encryptLambda(param2.GetBar);
  }

  private void SetBaz(Payload payload) {
    // do more work
    payload.Baz = this.encrypt ? param3.GetBaz() : encryptLambda(param3.GetBaz);
  }
}
{%endhighlight%}

As you might imagine for such a class the tests were complex. There was a lot of configuration required to call `PayloadGenerator`. These tests were more like integration tests rather than unit tests.

What if there was an object that handled encryption? It can be called `DataEncrypter`. It would be simple to write and test. It would contain the branch on the setting. `DataEncrypter` can be tested independently for each setting value so we know it works when called regardless of its configuration.

{%highlight csharp linenos %}
// C# code
public class PayloadGenerator {
  private readonly DataEncrypter encrypter;

  public PayloadGenerator(
    T1 param1,
    // More complicated params
    /* new */ DataEncrypter encrypter) => this.encrypter = encrypter;

  public Payload Get() {
    var payload = new Payload();
    // do more work
    this.configure(payload);
    return payload;
  }

  private void Configure(Payload payload) {
    // do more work
    this.SetFoo(payload);
    this.SetBar(payload);
    this.SetBaz(payload);
  }

  private void SetFoo(Payload payload) {
    // do more work
    payload.Foo = this.encrypter(param1.GetFoo());
  }

  private void SetBar(Payload payload) {
    // do more work
    payload.Bar = this.encrypter(param2.GetBar());
  }

  private void SetBaz(Payload payload) {
    // do more work
    this.encrypter(param3.GetBaz());
  }
}

public class DataEncrypter
{
  private readonly bool 
  public DataEncrypter(bool shouldEncrypt, X509Certificate2 cert) {
      this.shouldEncrypt = shouldEncrypt;
      this.cert = cert;
  }

  public byte[] Get(string data) {
    if (this.shouldEncrypt) {
      // in this case we already had a static encryption method available
      return CertificateServices.EncryptAndEncodeMessage(data, this.cert)
    }
    return System.Text.Encoding.Unicode.GetBytes(data);
  }
}
{%endhighlight%}

The last thing to verify is that `Foo`, `Bar` and `Baz` are present on the payload since they now come from `DataEncrypter`. Notice at this level we do not need to test what `DataEncrypter` returns as this was covered individually. Turns out that the presence of these cases are already covered with the existing "unit" tests therefore no new tests are needed for `PayloadGenerator`.

We were able to add new functionality to a very complex class with full confidence and 100% scenario coverage. We were able to do this with only two new tests rather than six. We have a blueprint for any further changes related to encryption. This approach is more maintainable, readable and testable than the first attempt. It also takes the same effort as the original approach! Possibly even less time considering less testing is required for full scenario coverage.

Did we really do this without branches? No, of course branches are still required. However, there are no new branches in the existing complex legacy code and this is where I see the major benefit.
