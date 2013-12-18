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
This one just makes sense, if you need to change a link in the nav you dont want to go into every single file and change the nav link. You want to update it once and have that change reflected on all pages. Unfortunatly, I used to have my website set up in this way. This solution worked fine for my website when I only had 3 pages but this solution is clearly not scaleable.

###Flat Blog
I did want to establish some type of blog on my site, however I did not want to bother with the trouble of setting up a database and using wordpress or some other blogging software. I looked at a few flat file blogging platforms however they were overkill for what I wanted to do. I also wanted my blog to fit in with the rest of my site, and integrating my existing HTML/CSS based site into a wordpress theme seemed like way too much work.

###Template Based
I code. I do not do web design. I greatly respect web designers and I simply do not have that talent. When I need to design a website, I always use a plan HTML/CSS template. There are tons of beautiful free designs out there (you're using one right now). I usually significantly modify the templates I use, but at the core they are still templates.

###Solution => Jekyll
Jekyll is the glue that holds this website together. It allows me to maintain seperate files that contain the header and footer for my site. Additionally, I can control things like nav item highlighting for active tabs. There is not much going on here in terms of complexity. Jekyll does not complicate things by using a database or a bunch of PHP. All of your posts are stored locally and you can even use version control if you so desire!
