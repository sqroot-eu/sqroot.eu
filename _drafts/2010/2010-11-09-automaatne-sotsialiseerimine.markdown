---
layout: post
status: publish
published: true
title: Automaatne sotsialiseerimine
author:
  display_name: David
  login: admin
  email: david@sqroot.eu
  url: http://sqroot.eu
author_login: admin
author_email: david@sqroot.eu
author_url: http://sqroot.eu
excerpt: Otsustasin kirjutada programmijupi, mis minu eest "viisakalt" MSN-is juttu
  räägiks.
wordpress_id: 429
wordpress_url: http://sqroot.eu/?p=429
date: '2010-11-09 22:59:50 +0200'
date_gmt: '2010-11-09 20:59:50 +0200'
category:
- Python
tags:
- python
- bot
- dbus
- pidgin
comments: []
---
<p>Otsustasin kirjutada programmijupi, mis minu eest "viisakalt" MSN-is juttu räägiks.</p>
<p>Kasutasin Ubuntut, Pidgin'it ja Python'it. Pidgini plussiks on mitme protokolli toetus ja dBus, mis asja võimalikuks teeb.</p>
<p>Tekstide genereerimisega aitas http://solvangud.ee, sealt sai vastused tekstifaili salvestatud. Uue sõnumi saabudes valib Python tekstifailist sobiva vastuse (tegin isegi veidi semi-semantilist võrdlemist lähtetekstiga) ning vastab minu nimel.</p>
<p>Idee: kasutada tekstifaili asemel suvalist lähtekoodifaili. Kood pole põhjalikult testitud.</p>
<p><span class="Apple-style-span">Enne käivitamist tuleb samasse kausta teha fail solvangud.txt ning igale reale paigutada üks lause, mida robot vastama hakkab.</span><br />
<script src="https://gist.github.com/2656981.js?file=insult.py"></script></p>
