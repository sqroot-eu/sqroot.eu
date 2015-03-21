---
layout: post
status: publish
published: true
title: Another reason to distrust open WiFi
author:
  display_name: David
  login: admin
  email: david@sqroot.eu
  url: http://sqroot.eu
author_login: admin
author_email: david@sqroot.eu
author_url: http://sqroot.eu
wordpress_id: 1014
wordpress_url: http://sqroot.eu/?p=1014
date: '2011-09-01 22:44:10 +0300'
date_gmt: '2011-09-01 20:44:10 +0300'
category:
- Writings
tags:
- google
- facebook
- privacy
- security
- Wi-Fi
- https
- network
- wep
comments: []
---
<h2 id="internal-source-marker_0.7355551828509999">Foreword</h2>
<p dir="ltr" style="text-align: justify">I connected to a wireless open network in a very busy part of Tallinn just moments ago. Something unexpected happened that made me once again thank <a class="zem_slink" href="http://en.wikipedia.org/wiki/Tux" rel="wikipedia" title="Tux">Tux</a> I&rsquo;m slightly paranoid.

<div style="float:right">
<div>
<div class="zemanta-img zemanta-action-dragged" style="margin: 1em">
<div class="mceTemp">
<dl>
<dt><a href="http://www.flickr.com/photos/38284869@N06/5663291297"><img alt="wifi" src="http://sqroot.eu/wp-content/uploads/2012/04/5663291297_a68754c0a6_m.jpg" /></a></dt>
<dd>Image by miniyo73 via Flickr</dd>
</dl></div>

&nbsp;


&nbsp;


</div>

</div>
</div>
<p dir="ltr" style="text-align: justify">As you undoubtedly should know, <a class="zem_slink" href="http://en.wikipedia.org/wiki/Wireless_network" rel="wikipedia" title="Wireless network">wireless networks</a> - especially open and weak (<em><a class="zem_slink" href="http://en.wikipedia.org/wiki/Wired_Equivalent_Privacy" rel="wikipedia" title="Wired Equivalent Privacy">WEP</a> encrypted</em>) ones are dangerous. Dangerous in a sense that everything you send over a network is as visible as if you were giving a lecture. Think it over.


No-one (<em>except maybe Google</em>) cares that you search for restaurant reviews. But what about sensitive information like sent passwords or any other kind of data I have access to, such as...

<p dir="ltr" style="text-align: justify">I was taught the basic skills on how to intercept digital data that&rsquo;s traveling between networks on the first semester of the freshmen year. In fact, any <a href="http://en.wikipedia.org/wiki/Script_kiddie">kiddie</a> could pull it off. Because of that knowledge, I tend to avoid logging in to anything unencrypted during my stay outside the pseudo-safety of my home network.

<ul style="clear:both">
<li>Login information (<em>Facebook, mail, blog, travel, ANY kind of site</em>)</li>
<li><a class="zem_slink" href="http://en.wikipedia.org/wiki/Instant_messaging" rel="wikipedia" title="Instant messaging">IM</a> message sessions</li>
<li>Vulnerable services running on the machine (<em>file server</em>)</li>
</ul>
<h2>Some More Background</h2>
<p dir="ltr" style="text-align: justify">As you might (<em>not!</em>) know, Facebook only just recently added a <a href="http://mashable.com/2011/01/27/facebook-https/">very important security feature</a> (<em>of course, you have to opt in for it - funny, usually one <a href="http://www.google.com/search?q=facebook+opt+out">has to opt out </a>of new &lsquo;features&rsquo;</em>). Enabling secure(r) browsing means that the communication channel between your computer and the Facebook server is unreadable to the dude sitting behind the next table.

<p dir="ltr" style="text-align: justify">I&rsquo;m sure you have connected to a free WiFi hotspot and seen the default welcome page that seems impassable unless you click on the &ldquo;Yes, I take full responsibility for my actions while in your network&rdquo; button. That&#039;s all warm and fuzzy, but it&#039;s also possible to configure the welcome page like so that it redirects you to a website of the owner&rsquo;s choosing after you click on the button. That&rsquo;s usually the companies website.

<h2 style="text-align: justify">So what the hell happened?</h2>
<p dir="ltr" style="text-align: justify">With that background comes the main point of the post. The network I connected to had decided that the redirect page (<em>after I click &ldquo;Agree, let me use your WiFi&rdquo;</em>) should be their Facebook page. Okay, all well and good.

<p dir="ltr" style="text-align: justify">Except...

<p dir="ltr" style="text-align: justify">Remember that the connection to Facebook is not encrypted by default? And since I was already logged in from earlier, the data would have moved openly across several network hops, for everyone with motive to see, capture and/or modify.

<p dir="ltr" style="text-align: justify">Even if I weren&rsquo;t already logged in, extensions like <a class="zem_slink" href="http://www.lastpass.com" rel="homepage" title="LastPass">LastPass</a> do that automatically. As if the initial request weren&rsquo;t enough, there are loads of hidden background queries to and from the Facebook server - the chat window, friends online, notifications... all moving over the unsecured <a class="zem_slink" href="http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol" rel="wikipedia" title="Hypertext Transfer Protocol">HTTP</a>, wireless.

<p dir="ltr" style="text-align: justify">Not scared? You should be. Identity theft could sound like an obscure idea, but think of what you&rsquo;d do if you had a day to live and no responsibility for your actions. You&rsquo;d probably rob a bank or something.

<h2>Wrap</h2>
<p dir="ltr" style="text-align: justify">Weren&#039;t it a beautiful world of rainbows and butterflies if everyone knew at least a little about the threats in (<em>open</em>) networks? If you must check in with your digital social life, opt in/<a href="http://nakedsecurity.sophos.com/2011/01/28/how-to-enable-httpsssl-encryption-to-secure-your-facebook-account/"><strong>enable the goddamn encryption</strong></a>. It&rsquo;s a one-shot deal, doesn&rsquo;t cost you anything and is a hell of a lot better than explaining to Tim that you are not &ldquo;It&rsquo;s complicated&rdquo; with his wife.

<p dir="ltr" style="text-align: justify">Also, a note to the unnamed coffee shop - please don&rsquo;t pull stunts like that - throw the visitor to the wolves... or at least give a five second warning or something!

<p dir="ltr" style="text-align: justify">&nbsp;

<p dir="ltr" style="text-align: justify"><em>P.S I&rsquo;d like to know more about what Facebook actually does when the user is idle - what type of queries move between the server and the client. Please leave a comment below if you know something about it.</em><img alt="" class="zemanta-pixie-img" src="" style="border: medium none;float: right" />

