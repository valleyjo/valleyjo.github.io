---
layout: page
title: Blog
permalink: /blog/
---
I write for a few reasons. If I had trouble finding resources on something, I might write about it here with a hope that I can help someone in the future. If it's something I'm passionate about, I also might write about it here. Lastly, I think writing is a way to clarify your thoughts and exposing that publicly is a push to produce something of quality rather than a few bulleted lists.

You can look by category <a href="{{ site.baseurl }}/categories/">here</a>.

<ul class="listing">
{% for post in site.posts %}
  {% capture y %}{{post.date | date:"%Y"}}{% endcapture %}
  {% if year != y %}
    {% assign year = y %}
    <li class="listing-seperator">{{ y }}</li>
  {% endif %}
  <li class="listing-item">
    <time datetime="{{ post.date | date:"%Y-%m-%d" }}">{{ post.date | date:"%Y-%m-%d" }}</time>
    <a href="{{ site.baseurl }}{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a>
  </li>
{% endfor %}
</ul>
