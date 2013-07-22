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
- 1) Modularity
- 2) A blog
- 3) Template based (plain HTML template)

###Modularity
This one just makes sense, if you need to change a link in the nav you dont want to go into every single file and change the nav link. You want to update it once and have that change reflected on all pages.

###Blog
I did want to establish some type of blog on my site, however I did not want to bother with the trouble of setting up a database with my hosting provider and using wordpress or some other blogging software. I looked at a few flat database designs however they were also overkill for what I wanted to do.

###Template Based
I had this wonderful template you see here and I wanted to blog within this template. I wanted my blog to have the same look and feel as the rest of my website and creating a custom wordpress theme just to do that was certainly not worth the extra work.

###Solution => Jekyll
Jekyll is the glue that holds this website together. It allows me to maintain seperate files that contain the header and footer for my site. Additionally, I can control things like nav item selection using Jekyll and the YAML front matter. There is not much going on here in terms of complexity. Accordingly, Jekyll serves the entire site as static HTML files which is great for speed.