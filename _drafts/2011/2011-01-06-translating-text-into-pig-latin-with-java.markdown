---
layout: post
status: publish
published: true
title: Translating text into Pig Latin with Java
author:
  display_name: David
  login: admin
  email: david@sqroot.eu
  url: http://sqroot.eu
author_login: admin
author_email: david@sqroot.eu
author_url: http://sqroot.eu
wordpress_id: 499
wordpress_url: http://sqroot.eu/?p=499
date: '2011-01-06 01:19:27 +0200'
date_gmt: '2011-01-05 23:19:27 +0200'
categories:
- Coding
tags:
- java
- pig latin
- program
- translate
comments: []
---
<p>I have a beginner level <a class="zem_slink" href="http://www.oracle.com/technetwork/java/" rel="homepage" title="Java (programming language)">Java</a> exam coming up tomorrow and I&#039;m doing some last-minute studying. Here&#039;s a primitive Java program I wrote to translate <a class="zem_slink" href="http://en.wikipedia.org/wiki/English_language" rel="wikipedia" title="English language">English</a> text into <a class="zem_slink" href="http://en.wikipedia.org/wiki/Pig_Latin" rel="wikipedia" title="Pig Latin">Pig Latin</a>. It has some obvious shortcomings like lacking validity checks and inability to handle symbols.</p>
<p>The program is <a class="zem_slink" href="http://en.wikipedia.org/wiki/Text-based_%28computing%29" rel="wikipedia" title="Text-based (computing)">text based</a> only. It asks for a file, reads it, loops over individual words and outputs and writes the resulting translation.</p>
<p><script src="https://gist.github.com/2657000.js?file=Stuffy.java"></script></p>
