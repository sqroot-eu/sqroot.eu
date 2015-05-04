---
title: 'Pi Hacking #3'
subtitle: ETV Viewers Count
category: Hardware
tags:
- python
- api
- raspberry pi
- err
- etv
---

Just for fun and practice - wouldn't it be cool to have a 4-digit, 7-segment LED display that shows the number of online visitors to... something?

A nice candidate for the data provider was <a href="http://etv.ee">ETV</a>, a national public television station that's <a href="http://otse.err.ee/etv/">viewable online</a>. Its web interface refreshes the viewer count via HTTP queries to an <a href="otse.err.ee/xml/live-etv.html">internal JS API</a> that suits our needs quite well.

<a href="http://learn.adafruit.com/adafruit-led-backpack/0-dot-56-seven-segment-backpack">Hooking up the LED display backpack</a> was easy. Some quick Python code to do the parsing and display... and we have a nice physical, real-time counter to see how many people are watching the channel at the moment.

<script src="https://gist.github.com/anroots/4698881.js"></script>
