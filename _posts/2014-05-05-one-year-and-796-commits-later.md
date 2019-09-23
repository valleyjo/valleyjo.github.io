---
layout: post
title: "One year and 796 commits later…"
date: 2014-5-5 00:16:05
categories: junior developer lessons
header-text:
active-tab: blog
---

# ...From college student to junior developer

## Command Line Interface
A year ago I found the command line to be incredibly intimidating. A few power user tweaks I found online in the past required command line use; I’d just copy and paste the lines into the terminal with no idea what they were doing (could have been `sudo rm -rf /` for all I knew). My exploration of the command line environment began with git. While I was trying (and failing) to teach myself rails, part of the [tutorial](http://www.railstutorial.org/book) I used talked about the basic git commands that are used throughout the tutorial. At first, I would edit my ruby code in Sublime and switch to terminal to commit. More experience with this work flow eventually built up my confidence enough to do more in the command line such as changing directories and removing files.

My [roommate](http://www.drewland.me) had an internship with [4moms](http://www.4moms.com) who, as a company, maintains a dotfiles repo. I cloned that repo and began using iTerm as my terminal emulator. I felt like a boss using my customized bash profile! Several months later, I discovered Zach Holman’s dotfiles repo that I then forked and customized to a small degree. Zach’s dotfiles combined with maximum-awesome make for a great command line environment! Maximum-awesome makes vim much more functional, so much so that it nearly replaced my IDE’s. I began using vim and git for all of my school projects, which gave me even more experience in the CLI. By the end of a semester I went from clueless to teaching friends how to customize their own environments.

Fast forward a bit more and I’m now more functional in the command line than a GUI. Go figure.

## Q: VCS - variable code syntax?
A: Nope, not even close. Version Control System.

Before I started my summer internship at KIT Solutions, Inc. I had no idea what a version control system was. My method of version control was saving a copy of a working code file under a different name; oh how I miss the old days of `bad_code_2.java`.

The knowledge of version control systems I picked up from my summer internship formed the groundwork for my understanding of git. As I mentioned before, using git for school projects made me accustomed to using a VCS. I firmly believe that collegiate education should incorporate the usage of version control systems! Excluding one class in CS 1699, everything I learned about git I taught myself! Git saved my school projects probably more than it should have! One quickly learns why frequent and small commits with well written messages are so valuable.

## Dynamic Web Pages
Before KIT I had no clue web frameworks even existed meanwhile they provide the backbone for most of the websites I’ve ever visited. Initially, ASP.NET MVC was difficult to grasp. After some practice, it seemed like the only way to do things in a web environment! Why would you *not* use a MVC framework? After I had some experience with .NET MVC I started teaching myself rails in my free time. When school started back up again, I ran out of time to learn rails so I put it on the back burner for a bit.

My roommate and I inherited a legacy 10,000 line PHP [project](http://github.com/pitt-delta-chi/pittdeltachi.com-PHP) where I saw how a dynamic site without a framework operates. This project is a mess and has no separation of concerns. I contemplated making a minimal framework in PHP and trying to fit the existing code into the framework. I even came up with a few implementation solutions, but in the end I realized it was much more trouble than it was worth.

We made around 130 commits to this project before we realized that it would be best to ditch it and rebuild it in rails. I’m tempted to say that we wasted our time building out that project but I got intimately familiar with how various layers of the stack interact. When I returned to rails for the second time things made a lot more sense. The knowledge I gained while working on that PHP project helped me to understand a *little* more about how rails works which of course makes me a better rails developer!

## Code is broken until proven otherwise?
Software engineering is all about pounding out lines of code, right? What do you mean we have to test the code?

My first experience with automated testing was through the Rails Tutorial I mentioned earlier. Before that, who knew you had to test the code you wrote. My first unit tests were quite rough but writing more was all I needed to start to understand what was going on. Pretty soon I was writing unit tests for my school projects!

My university announced that it was starting a software testing course, [CS 1699](http://www.github.com/laboon/cs1699), and I eagerly signed up for the first run of the course! Taught by Bill Laboon, an industry hardened tester and developer, the course surveyed many areas of software testing.

My knowledge of testing I gained outside the classroom combined with the knowledge from CS 1699 shaped me into deadly tester for my age and experience. I have now written hundreds of tests spanning unit tests, integration tests and smoke tests among others.

As a developer, I think the most important lesson to take away from this testing stuff is how important it is to write testable code! Coincidentally, testable code also tends to be “good” code; it’s a twofer folks.

## Ready for the big time?
As ready as I’ll ever be. I’ve made heaps (get it?) of mistakes over the past year and 796 commits. However, now I feel comfortable calling myself a junior developer! I recognize the limits of my comprehension but I’m ready to stretch those limits.

—Alex
