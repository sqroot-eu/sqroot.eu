---
layout: post
status: publish
published: true
title: thepledgeboard.com
author:
  display_name: David
  login: admin
  email: david@sqroot.eu
  url: http://sqroot.eu
author_login: admin
author_email: david@sqroot.eu
author_url: http://sqroot.eu
wordpress_id: 442
wordpress_url: http://sqroot.eu/?p=442
date: '2010-11-12 22:27:46 +0200'
date_gmt: '2010-11-12 20:27:46 +0200'
categories:
- Friday Night Project
tags:
- facebook
- web 2.0
- 43 Things
- AJAX
- Facebook Platform
- pledge
- pledge board
- social media
- YouTube
comments: []
---
<p>So I saw a certain movie which had the following part in it: in order to get accepted into a college fraternity, the newbies had to complete 50 tasks. It was proudly called The Pledge Board.</p>
<p>After doing some some digging (not a lot) in The Net I was left disappointed: all that amazing technology (<a class="zem_slink" href="http://en.wikipedia.org/wiki/Web_2.0" rel="wikipedia" title="Web 2.0">Web 2.0</a>, <a class="zem_slink" href="http://en.wikipedia.org/wiki/Social_media" rel="wikipedia" title="Social media">Social Media</a> (&amp; social networking), <a class="zem_slink" href="http://en.wikipedia.org/wiki/Server-side_scripting" rel="wikipedia" title="Server-side scripting">Server-side scripting</a>...) and no similar place on the web?</p>
<hr />
<p><strong><span style="font-size: 14px">The Goal: Build a site that let&#039;s a taskmaster create a custom Pledge Board, add some participants and follow their progress (FB integration).</span></strong></p>
<hr />
<p>The idea - let&#039;s call it ThePledgeBoard.com&nbsp;- uses two major, existing services - why reinvent the wheel? Facebook serves as the social component while&nbsp;<a href="http://43things.com">43things.com</a>&nbsp;does the heavy lifting. The purpose of the site is to unify them and do some customization to suit our needs. Let me start by explaining how the service works.</p>
<p>Users authenticate via <a class="zem_slink" href="http://en.wikipedia.org/wiki/Facebook_Platform" rel="wikipedia" title="Facebook Platform">Facebook Connect</a> and are allowed to create a new taskboard or join an excisting one. By default, a new board should be populated with 10-20 most popular tasks (the site should keep track on them with a <a class="zem_slink" href="http://en.wikipedia.org/wiki/SQL" rel="wikipedia" title="SQL">SQL database</a>). Some fancy <a class="zem_slink" href="http://en.wikipedia.org/wiki/Ajax_%28programming%29" rel="wikipedia" title="Ajax (programming)">AJAX</a> and <a class="zem_slink" href="http://en.wikipedia.org/wiki/JQuery" rel="wikipedia" title="JQuery">jQuery</a> effects are optional. The actual tasks are managed by<a href="http://www.43things.com/about/view/web_service_api"> 43Things API</a>&nbsp;(which also uses FB Connect for identification).&nbsp;</p>
<p>Once the taskboard is complete, the creator invites some people to complete it - as a team or single-handedly. Again, FB makes this easy. When the user has finished a task he can check it as complete and post proof (a photo) to 43things/FB. A story is posted on the user&#039;s wall. The interaction with the services should be managed by the site.&nbsp;</p>
<p>So that&#039;s the basic principle. I haven&#039;t thought everything through, but that leaves all the more to Your imagination.&nbsp;</p>
<div class="zemanta-pixie" style="margin-top:10px;height:15px"><a class="zemanta-pixie-a" href="http://www.zemanta.com/" title="Enhanced by Zemanta"><img alt="Enhanced by Zemanta" class="zemanta-pixie-img" src="" style="border:none;float:right" /></a></div>
