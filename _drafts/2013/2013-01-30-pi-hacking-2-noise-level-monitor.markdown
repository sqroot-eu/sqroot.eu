---
layout: post
status: publish
published: true
title: 'Pi Hacking #2: Noise Level Monitor'
author:
  display_name: David
  login: admin
  email: david@sqroot.eu
  url: http://sqroot.eu
author_login: admin
author_email: david@sqroot.eu
author_url: http://sqroot.eu
excerpt: 'My second Raspberry Pi / hardware project: a noise level monitor with a
  LED display.'
wordpress_id: 2862
wordpress_url: http://sqroot.eu/?p=2862
date: '2013-01-30 00:54:46 +0200'
date_gmt: '2013-01-29 22:54:46 +0200'
category:
- Python
- Friday Night Project
- Hardware
tags:
- python
- project
- breadboard
- raspberry
- pi
comments: []
---

My second Pi hacking project: a noise monitor. The setup uses a <a href="http://learn.adafruit.com/adafruit-led-backpack/0-dot-56-seven-segment-backpack">7-segment, 4-digit LED backpack from Adafruit</a>, a red LED, USB mic and some clever/simple Python code.


Ambient noise is measured from the USB mic via a python ALSA interface. The measured level is displayed on the LED screen (up to 4 digits). Measurement is done in 0.01 second intervals, but the display only changes when a set threshold and time is exceeded. When the noise exceeds a set point, the red LED lights to indicate a noisy environment.


Setting up the 4-digit display was amazingly simple. Seriously. One only has to buy and soldier the backpack (leaving the heavy work to Adafruit), connect it to the Pi and call set_digit() from python to change the display state. Amazing.


It truly is. The Pi and ready-made components and tutorials enabled me to go from zero to this in just under a day of continuous learning.


<a href="https://gist.github.com/4647548">Here is the link to the Python code


</a>

