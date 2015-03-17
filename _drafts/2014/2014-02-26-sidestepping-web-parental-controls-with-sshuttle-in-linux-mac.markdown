---
layout: post
status: publish
published: true
title: Sidestepping Web Parental Controls With Sshuttle In Linux / Mac
author:
  display_name: David
  login: admin
  email: david@sqroot.eu
  url: http://sqroot.eu
author_login: admin
author_email: david@sqroot.eu
author_url: http://sqroot.eu
excerpt: sshuttle is an easy way to get around web censorship when you don't have
  a 'real' VPN at hand.
wordpress_id: 3824
wordpress_url: http://sqroot.eu/?p=3824
date: '2014-02-26 11:42:59 +0200'
date_gmt: '2014-02-26 09:42:59 +0200'
categories:
- Uncategorized
tags:
- VPN
- sshuttle
- proxy
- censorship
- wifi
- router
- dns
comments: []
---
<p>I was travelling in a bus with free WiFi and needed some music. My go to solution? Youtube. Surprisingly, the bus company had blocked the domain, probably to avoid freeloaders like me overloading the network.</p>
<p><img src="http://sqroot.eu/wp-content/uploads/2014/02/youtube_blocked.jpg" alt="Youtube, blocked" /></p>
<p>Since I don't like censorship and thought streaming music (without video) to be fair use, I took it as a challenge.</p>
<p>Here's how you can bypass domain blocks without a personal <a href="http://visual.ly/what-consumer-vpn">VPN</a> (you should get a VPN). You'll need...<br />
<a id="more"></a><a id="more-3824"></a></p>
<ol>
<li>Some basic knowledge of the command line.</li>
<li>Software: <a href="https://github.com/apenwarr/sshuttle">apenwarr / sshuttle</a> (a transparent proxy server)</li>
<li>SSH access to a remote server. Tip: lots of universities provide students with SSH accounts.</li>
</ol>
<h1>A poor mans VPN</h1>
<p>Download and run sshuttle. The guide is in the README of the GitHub repository, but it should go somewhere along the lines of...</p>
<pre><code>$ git clone https://github.com/apenwarr/sshuttle.git
$ cd sshuttle
$ ./sshuttle --dns -r anroots@enos.itcollege.ee 0/0
</code></pre>
<p>The <code>--dns</code> flag is important. Replace <code>anroots@enos.itcollege.ee</code> with your login and server and enjoy unfiltered access.</p>
<p><img src="http://sqroot.eu/wp-content/uploads/2014/02/youtube_unblocked.jpg" alt="Youtube, unblocked" /></p>
