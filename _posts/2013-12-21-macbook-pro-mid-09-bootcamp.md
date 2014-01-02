---
layout: post
title: "Boot Camping MacBook Pro Mid '09 (64-bit Windows 8)"
date: 2013-12-22 00:00:00
header-text:
active-tab: blog
---

###What's the problem anyway?!
Although the hardware inside the mid '09 MacBook Pro (especially mine with a SSD and extra RAM) is entirely sufficient for running Windows 8 Apple does not officially support it! Why? There’s a lot of speculation but no one really knows for sure. So given Apple’s lack of official support, there are several ways online I found on how to get Windows 8 up and running. However, almost all of them were about 32 bit versions of Windows 8 and I only have a 64 bit version available to me.

The following is how I went about getting Windows 8.1 64 bit up and running on my mid ’09 MacBook Pro.

Principally, I found this [article](https://discussions.apple.com/thread/4897066) to be helpful. It discusses how to install a 32 bit version of Windows 8 on your MacBook.

###How I made 64 bit Windows 8 happen
First, I used the Boot Camp Assistant with a Windows 7 install disc to allow me to partition my drive. Next, when I restarted it asks to reformat the drive that Windows will be installed on. Be sure to format the correct partition, it should have ‘bootcamp’ appended to it’s name. After doing a full install of Windows 7 I proceeded to upgrade by putting the Windows 8 install disc in and running through the normal upgrade process. I am now aware of the trick mentioned in the above cited article to circumvent the full install of Windows 7. However, when I did the process initially I was not and thought this was the only way. 

When Windows 8 was fully installed and booted I noticed a few things were not working properly. The trackpad support was terrible; right clicking was impossible as was two finger scrolling. The computer seemed to have very poor power management and the bottom got incredibly hot. Additionally, there was no sound.

I did all the required software updates and also installed Windows 8.1 via the Windows store. The nVidia GeForce 9400m graphics card had a native driver available for download from Windows Update which I installed and it seems to work well.

Both Boot Camp drivers v.4 and v.5 did not work when I tried to install them on Windows 8. I was left without proper trackpad support and the computer was still running pretty hot, even while idling. 

I stumbled across a few forum discussions about [trackpad++](http://trackpad.powerplan7.com). Trackpad++ brings trackpad support to Windows Boot Camped Mac’s, but only for Mac’s with built-in trackpads (i.e. the external one doesn’t work). After installing trackpad++ all normal functionality was restored including two finger right click and two finger scrolling.

A word of caution: trackpad++ does not work for 64 bit machines unless you install [power plan](http://www.powerplan7.com/home.htm) (from the same developer) first. Also, the first install of trackpad++ failed for me. It told me to restart and try again twice before it actually worked but it did work eventually.

Next to tackle the heat issue, I tried several programs that were supposed to give you control over the built in exhaust fan. The one that worked the best is called ‘Mac Fan Control’. It displays accurate temperature readings for the many sensors in your Mac and even allows you to set your own range of fan speeds. I have mine set to begin increasing when the CPU reaches 118F and hit maximum speed when the CPU reaches 132F. This extra fan control helped significantly to reduce the temperature of the machine.


Finally to get the sound working I installed the drivers from this [site](http://realitypod.com/2010/07/macbook-pro-no-sound-in-windows-7-final-fix/). It was a quick install and the sound worked without a reboot!

###Overall Evaluation
The mid ’09 MacBook Pro runs Windows 8 pretty well! I wish Apple would officially support it! The only real issue I have noticed so far is the battery life. In Mac OS X Mavericks, I get around six hours of battery life\*. In Windows 8 I see around two and a half. Mavericks could be just that more efficient than Windows (maybe with the new [timer coalescing etc…](https://www.apple.com/media/us/osx/2013/docs/OSX_Mavericks_Core_Technology_Overview.pdf). Or the extra power usage is simply a byproduct of poorly implemented drivers and lack of drivers for some parts of the machine (I don’t have the bluetooth module or webcam working).

For the most part, I’m just thankful it’s working decently well without official support from Apple. I love Mac’s and have used one as my primary computer since ’06. But being a recently hired Microsoft intern I feel it would be good for me to use Windows a bit more and get used to the environment.

\*I’m a pretty light user. I usually have the screen brightness way down, I don’t use bluetooth and I usually am not doing anything computationally intensive.I got ten and a half hours once out of my MacBook Air 13”!
