---
layout: post
status: publish
published: true
title: ATtiny85 Melody Module
author:
  display_name: David
  login: admin
  email: david@sqroot.eu
  url: http://sqroot.eu
author_login: admin
author_email: david@sqroot.eu
author_url: http://sqroot.eu
excerpt: This is a small Arduino / ATtiny85 project I built as a practical joke (also
  my very first 100% successfully completed PCB).
wordpress_id: 3834
wordpress_url: http://sqroot.eu/?p=3834
date: '2014-02-28 14:23:07 +0200'
date_gmt: '2014-02-28 12:23:07 +0200'
category:
- Hardware
tags:
- electronics
- hardware
- attiny85
- arduino
- pcb
comments:
- id: 2714
  author: Martin Vahi
  author_email: martin.vahi@softf1.com
  author_url: ''
  date: '2014-03-02 01:56:00 +0200'
  date_gmt: '2014-03-01 23:56:00 +0200'
  content: "A have an idea. (May be a stupid one.) The resistance of an inductive
    \nload correlates positively with frequency, e.g. the higher the \nfrequency,
    the higher the resistance. The Pulse Width Modulation based \napproach to current/power
    regulation uses pretty high frequencies, \nprobably even the rectangular signal
    has a frequency of multiple hundred\n kHz, not to mention the spectrum of the
    rectangular signals themselves.\n\nTo\n make a long story short, You'll probably
    get far louder voice from the \nspeaker, if You \"short-circuit\" the speaker's
    inputs with a capacitor. I\n would try with 20 micro Farads and then experimentally
    see, what size \nworks the best. Another trick to try is to drive the speaker
    with more \nthan one output to get more current out of the microcontroller.\n\nI\n
    do not have a faintest idea, if it works, but I if I ran out of the \nPWD-pins,
    I would try to simulate PWD on one of the plain IO pins.\n\nEasier said than done.
    :-D"
- id: 2717
  author: BoxOfWords &#8211; Arduino-Based Suggestion Generator for Improvisers &mdash;
    SQRoot
  author_email: ''
  author_url: http://sqroot.eu/2014/06/boxofwords-arduino-based-suggestion-generator-for-improvisers/
  date: '2014-06-19 08:53:06 +0300'
  date_gmt: '2014-06-19 05:53:06 +0300'
  content: "[&#8230;] the PCB was a challenge on its own. I&#8217;ve tried to make
    a PCB before, failed twice, succeeded once. The task involves working with delicate
    parts, lots of small wires and tin. There&#8217;s always a [&#8230;]"
---

The project is a tinderbox-sized PCB with a microprocessor and a piezo buzzer. When a trigger (a reed switch) is activated, a preprogrammed melody is played.


<em>In the army, we have private Te, whose "theme song" is considered to be the theme from Mario, the video game. My evil plan is to install the device under his closet so that when he opens it, a magnet under the door moves away from the reed switch and the device activates.</em>


<a id="more"></a><a id="more-3834"></a>

<h1>Hardware</h1>

The circuit itself is nothing complicated. The IC gets 3V from the battery and runs in standby mode. The trigger pin (2) is connected to a reed switch, the buzzer to the first PWM pin (5). There is a on-off switch (which actually works as a resistor (?!), passing 2.6V when OFF and 3.0V when ON). The loudness of the sound can be regulated with a trimpot. Three header pins pass out (or in) power, ground and the trigger.


<a href="http://sqroot.eu/wp-content/uploads/2014/02/MelodyModule_Schematic.png"><img src="http://sqroot.eu/wp-content/uploads/2014/02/MelodyModule_Schematic.png" alt="Schematic" width="500" /></a>

<h1>Optimizing Power Usage</h1>

I read <a href="http://www.openhomeautomation.net/arduino-battery">How to Run an Arduino for Years on a Battery</a> and wanted to try it out. After all, what use is a project that dies after the first day of operation?


I coded the IC to check the trigger pin every second (<code>delay(1000);</code>). This way, the circuit drew 4.5 mA of power (in average) and taking into account the capacity of the CR2032 battery - 225mAh - <a href="http://www.digikey.com/us/en/mkt/calculators/battery-life.html">I calculated</a> it to last about 35 hours. Not a whole lot.


Including the <a href="https://github.com/jcw/jeelib">JeeLib</a> library and doing <code>Sleepy::loseSomeTime(1000);</code> instead of <code>delay(1000);</code> reduced the power draw to 0.008 mA (!!!), giving me approximately <strong>27 months of standby battery life</strong>.


The circuit draws 5mA of power while active (playing the melody).


I wonder whether I made a calculation mistake somewhere. 56 148% improvement with three lines of code? Unreal.

<hr />

The project files are available <a href="https://github.com/anroots/attiny85-melody-module">@ GitHub</a>.


<iframe width="420" height="315" src="//www.youtube.com/embed/_KI-yGdVnyY" frameborder="0" allowfullscreen></iframe>

