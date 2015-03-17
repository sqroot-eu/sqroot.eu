---
layout: post
status: publish
published: true
title: Continuous Development Is Better Than Chunks That Never Happen
author:
  display_name: David
  login: admin
  email: david@sqroot.eu
  url: http://sqroot.eu
author_login: admin
author_email: david@sqroot.eu
author_url: http://sqroot.eu
excerpt: 'Many companies develop software with the waterfall model: you do it once
  and then forget about it. The client gets what he asked for and walks away. The
  problem - software evolves while the project does not. Few years in cryogenics and
  the code is non-upgradable and a legacy system that no-one wants to use. So what
  can we do about it?'
wordpress_id: 2824
wordpress_url: http://sqroot.eu/?p=2824
date: '2013-01-20 00:27:38 +0200'
date_gmt: '2013-01-19 22:27:38 +0200'
categories:
- Opinions
tags:
- development
- work
- customer
- business
- money
comments: []
---
<p>I wanted to take a moment to rant about the way we develop (web application) projects.</p>
<p>Suppose you work in a small software development company with several clients, where the workflow looks something like this:</p>
<blockquote><p>New Project -&gt; Develop Project -&gt; Deploy Project -&gt; New Project</p></blockquote>
<p>Makes sense? Construction of houses - yes. Software development - not so much.</p>
<p>The above process doesn't have a working maintenance and development phase. Sure, you fix the occasional bug or two, but that's not enough. Technology changes frighteningly fast. We didn't have <a title="Twitter Bootstrap Website" href="twitter.github.com/bootstrap">Bootstrap</a> two years ago, yet by now it has conquered the web. Projects with any kind of vision should be continuously developed, refactored, upgraded and tinkered with. New technology (where appropriate) should replace the old, more features could be added to improve the system. Instead, we just drop the code in production and leave it in cryogenics for years - and when the inevitable time comes to upgrade your PHP to version 5 the ship has sailed - it's cheaper to rebuild the project from scratch.<a id="more"></a><a id="more-2824"></a></p>
<p>Why do we not exercise our projects after the initial development? The reason, of course, is money - or lack thereof. Smart, tech-savy customers realize the need to keep up with technological advances, the benefit of improving the existing system and are willing to pay. Unfortunately for the development company, money is money... and sometimes, more often than not, you'll have to deal with people who just don't see it that way.</p>
<p>To be fair - not every project needs constant tinkering. I'm speaking mainly about information system with a large degree of visibility and constantly changing business environment.</p>
<p>I'd like to say that this is a purely business problem and the reason we have the sales department. Sadly, no. In my opinion, the problem boils down to...</p>
<ul>
<li><span style="line-height: 13px;" data-mce-mark="1">Culture - nationality and the state of software development in the area</span></li>
<li>The developers not being able to "dumb it down", speak the users language and/or "sell it" to the management</li>
<li>Not being able to produce examples from the real world</li>
<li>"Old fashioned" clients who want to pay a fixed amount for their sandwich and <span style="text-decoration: underline;" data-mce-mark="1">no more</span> - waterfall vs agile</li>
</ul>
<p>Overcoming those obstacles is a team effort and needs the support of everyone involved, including the client - who should be educated by the team as to why it's actually more cost-saving / efficient / easier to work in incremental steps and spread the cost over time.</p>
<p>Many of the projects I've worked with deserve additional development - be it more features or improving the existing parts that were overlooked during initial development: efficiency, code smells and ease of use. When you're on the open market it's often the non-functional requirements that determine who gets paid.</p>
