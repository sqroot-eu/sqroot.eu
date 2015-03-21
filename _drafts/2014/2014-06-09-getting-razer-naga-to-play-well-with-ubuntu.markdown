---
layout: post
status: publish
published: true
title: Getting Razer Naga To Play Well With Ubuntu
author:
  display_name: David
  login: admin
  email: david@sqroot.eu
  url: http://sqroot.eu
author_login: admin
author_email: david@sqroot.eu
author_url: http://sqroot.eu
excerpt: A quick tip on how to get Razer Naga working with Ubuntu
wordpress_id: 4105
wordpress_url: http://sqroot.eu/?p=4105
date: '2014-06-09 13:29:36 +0300'
date_gmt: '2014-06-09 10:29:36 +0300'
category:
- Linux
- Hardware
tags:
- linux
- mouse
- udev
- razer
- driver
comments: []
---

I have a <a href="http://www.razerzone.com/gaming-mice/razer-naga/">Razer Naga</a> gaming mouse which, unfortunately, doesn't work well out of the box with Linux / Ubuntu. Here's how you can remedy the problem somewhat.


Install <a href="http://bues.ch/cms/hacking/razercfg.html">Razer device configuration tool</a>. The instructions are on the project page, the install is not overly difficult. This gives you the power to tinker with various mouse settings, most importantly the scan resolution (mouse cursor movement speed).


<a href="http://sqroot.eu/wp-content/uploads/2014/06/Razer-device-configuration_001.png"><img class="alignnone size-medium wp-image-4108" src="http://sqroot.eu/wp-content/uploads/2014/06/Razer-device-configuration_001-239x300.png" alt="Razer device configuration tool" width="239" height="300" /></a>


I also ran into a problem where the scan resolution would reset itself to 1000 each time I disconnected the mouse (including putting the system to sleep). The default udev rule installed by razercfg did not work, so I modified it to use a custom script. If you're new to udev, read <a href="http://hackaday.com/2009/09/18/how-to-write-udev-rules/">How To Write udev Rules</a>.


<script src="https://gist.github.com/anroots/259cdb7c6e28b36ca711.js"></script>

