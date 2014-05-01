---
layout: post
title:  "The tech behind this blog"
date:   2013-07-21 09:59:05
categories: tech blog
header-text:
active-tab: blog
---

Before I explain the tech stack used to construct this site, I'll explain my requirements to better frame the situation.

###Requirements
1. Modularity
2. Template based (plain HTML template)
3. A flat blog

###Modularity
This one just makes sense, if you need to change a link in the nav you don't want to go into every single file and change the nav link. You want to update it once and have that change reflected on all pages. Unfortunately, I used maintain my website as individual HTML files with the header, nav, and footer copied and pasted to each file. This solution worked fine for my website when I only had 3 pages as my website because larger this approach was miserable to maintain.

###Template Based
I’m an engineer by trade, not a designer. I greatly respect web designers and I simply do not have that talent. When I need to design a website, I always use a plain HTML/CSS template. There are tons of beautiful free designs out there (you're looking at one right now). I usually significantly modify the templates I use, but at their core they’re still templates.

###Flat Blog
I wanted to establish some type of blog on my site, however I did not want to bother with the trouble of setting up a database and using Wordpress or some other blogging software. I looked at a few flat file blogging platforms however they were overkill for what I wanted to do. I also wanted my blog to fit in stylistically with my currently existing site, and integrating my existing HTML/CSS based site into a Wordpress theme seemed like way too much work.

###Solution => Jekyll
Jekyll is the glue that holds this website together. It allows me to maintain separate files that contain the header and footer for my site. Additionally, I can control things like nav item highlighting for active tabs through the YAML front matter. Jekyll does not complicate things by using a database or a bunch of PHP. All of my posts are stored locally and you can even use version control on the posts. You can view the raw source for this site on [github](http://github.com/AlexVallejo/personal-site/).

###Hosting
This site is currently hosted on Go Daddy but I plan to move to github pages eventually. Go Daddy cost me $60 for 2 years and although this is relatively inexpensive github pages has all the features I need and it’s free! Plus as an added bonus I can deploy with a simple `git push`.

--Alex

