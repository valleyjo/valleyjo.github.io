---
layout: post
title: MacBook Pro mid ’09 Bootcamp Driver Install
date: 2013-12-22 00:00:00
header-text:
active-tab: blog
---

###Source of the problem
Although the hardware inside the mid '09 MacBook Pro (especially mine with a SSD and extra RAM) is entirely sufficient for running Windows 8 Apple does not officially support it! Why? I have no idea. So given Apple’s lack of official support, there are several ways online I found on how to get Windows 8 up and running.

Principally, I found this [post](https://discussions.apple.com/thread/4897066) to be helpful. It guided me through the entire process except the end where you need to install the bootcamp drivers.

###Installing the boot camp drivers
When you run the bootcamp driver install discussed in the post referenced above Windows won't allow you to run the installer. Windows informs you that it requires elevated privileges to run the .msi file. When you right click the installer there is no “run as administrator” context menu option. In order to enable the run as administrator option, you need to make a simple modification to the registry. The post on the Apple forum talks about modifying the registry, but it the method it provided didn’t work for me. Instead I used the method outlined [here](http://dottech.org/144073/how-to-install-or-run-msi-files-as-admin-in-windows-8-and-8-1-guide/).

After updating the registry I was able to install the bootcamp drivers as the post described and everything was good to go.

###Heating problems
I noticed that my Macbook was getting really hot while running Windows. The fan only started to speed up when the CPU was hitting around 80˚ C, which in my opinion is much too hot for normal operation. I installed [Macs Fan Control](http://www.crystalidea.com/macs-fan-control) to set up custom controls for the fan. I have the fan speed set to scale from 45-55. Using Macs Fan Control my machine operates under much cooler temperatures.

I hope this helps resolve any problems people encounter while following the post on the Apple forums!

—Alex
