---
layout: post
status: publish
published: true
title: 'Remote control / self-destruct attempt #2'
author:
  display_name: David
  login: admin
  email: david@sqroot.eu
  url: http://sqroot.eu
author_login: admin
author_email: david@sqroot.eu
author_url: http://sqroot.eu
wordpress_id: 569
wordpress_url: http://sqroot.eu/?p=569
date: '2011-02-12 23:01:33 +0200'
date_gmt: '2011-02-12 21:01:33 +0200'
categories:
- Coding
tags:
- python
- fortumo
- bash
- remote control
comments: []
---
<p>I took another crack at my geeky idea - creating a remotely activated self destruct script. (Python / shell)</p>
<p><strong>How it works:</strong>&nbsp;SMS -&gt; PHP controller script with my message in GET request -&gt; Message stored in file -&gt; Periodic controller script running in PC -&gt; if file contains something, execute and reset it.</p>
<p>The &quot;Self destruct&quot; isn&#039;t quite fancy, basically it just wipes the MBR.</p>
<p><a href="http://sqroot.eu/wp-content/uploads/2011/02/run_program.sh.zip">Download the project files here</a></p>
