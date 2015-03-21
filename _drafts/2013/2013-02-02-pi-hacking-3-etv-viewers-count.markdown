---
layout: post
status: publish
published: true
title: 'Pi Hacking #3: ETV Viewers Count'
author:
  display_name: David
  login: admin
  email: david@sqroot.eu
  url: http://sqroot.eu
author_login: admin
author_email: david@sqroot.eu
author_url: http://sqroot.eu
excerpt: A quick Raspberry Pi project to show the number of ETV viewers on a 7-segment
  display.
wordpress_id: 2868
wordpress_url: http://sqroot.eu/?p=2868
date: '2013-02-02 21:28:43 +0200'
date_gmt: '2013-02-02 19:28:43 +0200'
category:
- Friday Night Project
- Hardware
tags:
- python
- api
- raspberry pi
- err
- etv
comments: []
---

Just for fun and practice - wouldn't it be cool to have a 4-digit, 7-segment LED display that shows the number of online visitors to... something?


A nice candidate for the data provider was <a href="http://etv.ee">ETV</a>, a national public television station that's <a href="http://otse.err.ee/etv/">viewable online</a>. Its web interface refreshes the viewer count via HTTP queries to an <a href="otse.err.ee/xml/live-etv.html">internal JS API</a> that suits our needs quite well.


<a href="http://learn.adafruit.com/adafruit-led-backpack/0-dot-56-seven-segment-backpack">Hooking up the LED display backpack</a> was easy. Some quick Python code to do the parsing and display... and we have a nice physical, real-time counter to see how many people are watching the channel at the moment.


<a href="https://gist.github.com/4698881">See the Python code in Github</a>

