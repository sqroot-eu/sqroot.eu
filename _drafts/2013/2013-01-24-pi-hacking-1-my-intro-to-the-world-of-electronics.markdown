---
layout: post
status: publish
published: true
title: 'Pi Hacking #1: My Intro To The World Of Electronics'
author:
  display_name: David
  login: admin
  email: david@sqroot.eu
  url: http://sqroot.eu
author_login: admin
author_email: david@sqroot.eu
author_url: http://sqroot.eu
excerpt: "...in which Ando shares his first experience with the Raspberry Pi and a
  breadboard of LED-s: how you can get started with making real-world stuff in under
  a day."
wordpress_id: 2845
wordpress_url: http://sqroot.eu/?p=2845
date: '2013-01-24 22:54:10 +0200'
date_gmt: '2013-01-24 20:54:10 +0200'
category:
- Python
- Friday Night Project
- Hardware
tags:
- python
- raspberry pi
- electronics
- breadboard
- making
- led
comments: []
---

A box of <a href="http://raspberrypi.org">Raspberry Pi</a>-s arrived to my workplace near the end of December 2012. They were small and cute and I was hooked.


<a href="http://sqroot.eu/wp-content/uploads/2013/01/IMG_20121204_114356.jpg"><img class="alignnone size-thumbnail wp-image-2847" title="Raspberry Pi arriving to my workplace" alt="Raspberry Pi arriving to Diara" src="http://sqroot.eu/wp-content/uploads/2013/01/IMG_20121204_114356-150x150.jpg" width="150" height="150" /></a>


An order for a personal instance of the Pi was sent shortly after, along with a wishlist of basic electronic play-things from <a href="http://adafruit.com">Adafruit Industries</a>. Total cost - around 100€ (shipping + components + Pi). I had never handled hardware before and my knowledge of physics sucks, but the Pi and Adafruit ready-to-use components and tutorials have brought the entry-barrier really low. I though I could manage.<a id="more"></a><a id="more-2845"></a>


<a href="http://sqroot.eu/wp-content/uploads/2013/01/2013-01-04-14.jpg"><img class="alignnone size-medium wp-image-2849" alt="Shipment from Limor Fried!" src="http://sqroot.eu/wp-content/uploads/2013/01/2013-01-04-14-300x225.jpg" width="300" height="225" /></a>

<h2>Learning to soldier</h2>

The <a href="http://adafruit.com/products/914">Adafruit Pi Cobbler Breakout Kit</a> <a href="http://learn.adafruit.com/adafruit-pi-cobbler-kit/overview">needed soldiering</a> - and I didn't have the tools nor the knowledge. The<a href="http://robot.itcollege.ee/"> robotics club</a> of <a href="http://itcollege.ee">The Estonian Information Technology College</a> was willing to help. My buddy Mikk taught me soldiering and under two hours I had an assembled cobbler (and a 7-digit LCD display backback) - yay!


<a href="http://sqroot.eu/wp-content/uploads/2013/01/soldiered-cobbler.jpg"><img class="size-thumbnail wp-image-2851 alignleft" alt="Soldiered Pi Cobbler Kit" src="http://sqroot.eu/wp-content/uploads/2013/01/soldiered-cobbler-150x150.jpg" width="150" height="150" /></a><a href="http://sqroot.eu/wp-content/uploads/2013/01/checking-the-board.jpg"><img class="size-thumbnail wp-image-2852 alignleft" alt="My buddy Mikk, making sure the soldiering is OK" src="http://sqroot.eu/wp-content/uploads/2013/01/checking-the-board-150x150.jpg" width="150" height="150" /></a>

<h2 style="clear: both;">Switching LED-s on and off</h2>

The nicest thing about the Raspberry Pi is that it's just Linux. You can run Python and nano and <em>cat</em> <em>/etc/crontab</em> on it. The GPIO and its library make programmatic control easy.


My first Pi project was to light LED-s from Python. I followed Adafruit tutorial: "<a href="http://learn.adafruit.com/raspberry-pi-e-mail-notifier-using-leds/python-script">Raspberry Pi E-mail Notifier Using LEDs</a>", but changed the script to just blink red/green LED-s. <a href="https://gist.github.com/4627503">The script</a> is run via cron once every ten minutes and the LED-s blink on and off.


[caption id="attachment_2846" align="alignnone" width="150"]<a href="http://sqroot.eu/wp-content/uploads/2013/01/pi-with-two-leds.jpg"><img class="size-thumbnail wp-image-2846" alt="Raspberry Pi with two LED-s on a breadboard" src="http://sqroot.eu/wp-content/uploads/2013/01/pi-with-two-leds-150x150.jpg" width="150" height="150" /></a> Raspberry Pi with two LED-s on a breadboard[/caption]

<h2>Fun with 7-segment, 4-digit LCD-s</h2>

Next tutorial: <a href="http://learn.adafruit.com/matrix-7-segment-led-backpack-with-the-raspberry-pi/overview">Matrix and 7-Segment LED Backpack with the Raspberry Pi</a> taught how to connect a the wonderful 4-digit, 7-segment display to the Raspberry Pi. Some tinkering with the software, quick connection via the breadboard cables and voila - we have a working clock demo.


<a href="http://sqroot.eu/wp-content/uploads/2013/01/clock-demo.jpg"><img class="alignleft size-thumbnail wp-image-2859" alt="Clock demo" src="http://sqroot.eu/wp-content/uploads/2013/01/clock-demo-150x150.jpg" width="150" height="150" /></a>

<div style="clear: both;"></div>
<h2>The WebIDE</h2>

<a href="http://sqroot.eu/wp-content/uploads/2013/01/pi-webide.png"><img class="alignleft size-thumbnail wp-image-2860" alt="Raspberry Pi Web IDE" src="http://sqroot.eu/wp-content/uploads/2013/01/pi-webide-150x150.png" width="150" height="150" /></a>


The guys at Adafruit have a <a href="http://learn.adafruit.com/debugging-with-the-raspberry-pi-webide">web-based IDE</a> for the Pi. Haven't tried it out yet, but this should make prototyping even easier.

<h2>Summary</h2>

The Raspberry Pi is a wonderful tool for learning. I managed to build my first simple project in three hours, having never done any robotics or hardware programming before. As for the future: I'd like to make something to help with my day-job. Something involving LED-s, buttons, 7-digit displays and Git/Jenkins servers. Read more about it soon-ish.

<h2></h2>
