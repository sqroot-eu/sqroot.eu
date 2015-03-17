---
layout: post
status: publish
published: true
title: A Bit Pissed About Kohana Affairs
author:
  display_name: David
  login: admin
  email: david@sqroot.eu
  url: http://sqroot.eu
author_login: admin
author_email: david@sqroot.eu
author_url: http://sqroot.eu
excerpt: "... in which I express my frustration about the state of Kohana modules
  - or lack thereof."
wordpress_id: 2921
wordpress_url: http://sqroot.eu/?p=2921
date: '2013-02-11 23:07:42 +0200'
date_gmt: '2013-02-11 21:07:42 +0200'
categories:
- Coding
- PHP
tags:
- php
- coding
- kohana
- framework
- opinion
- web
- open letter
- community
comments: []
---
<p><a href="http://kohanaframework.org">The Kohana Framework</a> is great, it's been my constant and extremely capable companion for years. I can prototype stuff quickly and flexibly, I have the tools I need, but the framework manages to stay lightweight. Still, I am a bit crossed at the community.</p>
<p>There are <a href="http://kohana-modules.com">many useful modules</a> that extend Kohana, except maybe the two I miss most at the moment: a module to manage static JS and CSS assets and something to make working with <a href="http://waher.net/archives/1158">API-centric systems</a> fun and elegant. I found some <a href="http://ivank.github.com/blog/2011/11/kohana-assets-done-right/">[1]</a> <a href="https://github.com/coreyworrell/Kohana-Assets">[2]</a> examples, but nothing I'd have had much faith in or that looked easy to use.</p>
<p>More specifically, I needed a way to auto-load scripts based on convention-over-configuration rules (script path matches dir/controller/action) and to include specific presets of libraries with some views. For the API part, I'm trying to consume the API as the core of my system. That means support for good authentication, authorization, encoding, versioning and yes, REST-ish (not entirely) mechanisms.</p>
<p>On why I did not accept the existing "solutions"... It might just be the documentation - granted, Kohana has problems in that field, too. Still, are you trying to claim that there exist no such modules that satisfy my (in my humble opinion) quite basic needs?</p>
<p>I'm using my own Assets manager and API modules at the moment, but ideally, I'd like to move on to something with enough community support. Something quality-ish. Something I don't have to spend time in to re-invent.</p>
<p>Please, Kohana people: the framework has potential, I wouldn't be using, <a href="http://git.diara.ee/khk-independent/wiki/Home">teaching</a> and advocating its use otherwise... but, please: let's focus on getting the documentation in order and making sure the basics are well-satisfied in the form of good, supported modules.</p>
<p>In my own part, I'll do what I can to make that happen.</p>
<p>P.S! PSR shows promise, too.</p>
