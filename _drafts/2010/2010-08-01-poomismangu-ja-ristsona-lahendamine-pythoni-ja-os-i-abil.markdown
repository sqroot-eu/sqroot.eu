---
layout: post
status: publish
published: true
title: Poomismängu ja ristsõna lahendamine Pythoni ja ÕS-i abil
author:
  display_name: David
  login: admin
  email: david@sqroot.eu
  url: http://sqroot.eu
author_login: admin
author_email: david@sqroot.eu
author_url: http://sqroot.eu
excerpt: Tegin Pythonis programmi EKI ÕS-ist sõnade pärimiseks. Programm aitab lahendada
  ristsõnu ja poomismänge (hangman).
wordpress_id: 93
wordpress_url: http://sqroot.eu/?p=93
date: '2010-08-01 18:26:36 +0300'
date_gmt: '2010-08-01 18:26:36 +0300'
categories:
- Linux
- Python
tags:
- python
- eki
- mäng
- "õs"
- ristsõna
comments: []
---
<h2><span style="font-size: medium;"><span class="Apple-style-span" style="font-size: 16px;">Vana postitus. Uus sisestus <a href="http://sqroot.eu/2010/08/eki-otsing/">on siin</a>.</span></span></h2>
<p>&nbsp;</p>
<p>Tegin Pythonis programmi EKI ÕS-ist sõnade pärimiseks. Programm aitab lahendada ristsõnu ja poomismänge (hangman).</p>
<p><a href="http://sqroot.eu/wp-content/uploads/2010/08/Selection_T_001.jpeg"><img class="aligncenter size-medium wp-image-94" src="http://sqroot.eu/wp-content/uploads/2010/08/Selection_T_001-300x123.jpg" alt="" width="300" height="123" /></a></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>Otsingu alustamiseks tuleb sisestada sõna, asendades puuduvad tähed küsimärkidega või *-ga (suvaline arv tähti). Lähemalt vaata <a href="http://www.eki.ee/dict/qs2006/index.cgi">kiirspikkrist</a></p>
<p>Poomismängu režiim üritab välja praakida sõnu, mis vastuseks ei sobiks (kui otsing on kal?, siis kala ei sobi, sest "a" tähte on juba pakutud)</p>
<p>Windowsi kasutajatele: vajalik on <a href="http://www.python.org/download/">paigaldada arvutisse Python</a>.</p>
<p>Juhend Linuxile: kopeeri allpool olev kood tekstiredaktorisse ning salvesta nimega 'poomine.py'. Anna failile käivitusõigused (parem hiireklikk -&gt; omadused), või käivita käsuga python /home/kasutajanimi/faili-asukoht/poomine.py</p>
<h3>Programmi lähtekood:</h3>
<p>&nbsp;</p>
<p>&nbsp;</p>
