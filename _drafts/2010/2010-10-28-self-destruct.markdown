---
layout: post
status: publish
published: true
title: Self Destruct
author:
  display_name: David
  login: admin
  email: david@sqroot.eu
  url: http://sqroot.eu
author_login: admin
author_email: david@sqroot.eu
author_url: http://sqroot.eu
wordpress_id: 440
wordpress_url: http://sqroot.eu/?p=440
date: '2010-10-28 21:02:41 +0300'
date_gmt: '2010-10-28 19:02:41 +0300'
categories:
- Friday Night Project
tags:
- linux
- python
- idea
- unix
- utility
comments: []
---
<p><a href="http://sqroot.eu/wp-content/uploads/file/Main(1).png"><img alt="" src="http://sqroot.eu/wp-content/uploads/file/Main(1).png" style="margin-left: 10px;margin-right: 10px;margin-top: 10px;margin-bottom: 10px;width: 250px;height: 167px" /></a></p>
<p>This idea has been stuck on my head ever since I saw a certain spy movie. I haven&#039;t found any similar software in the Net so far.</p>
<p>An <a class="zem_slink" href="http://www.unix.org" rel="homepage" title="Unix">Unix</a> program, ideally in <a class="zem_slink" href="http://www.python.org/" rel="homepage" title="Python (programming language)">Python</a>, that can be activated with a hotkey. Ideal for spys, superhero sidekicks (Chloe Sullivan!) and any paranoid individual. The main goal is to make the PC unusable <strong>very quickly</strong> and securely wipe all data.</p>
<p>The first can be achieved by overriding the <a class="zem_slink" href="http://en.wikipedia.org/wiki/Master_boot_record" rel="wikipedia" title="Master boot record">MBR</a> and disabling all input. The program should achieve the first goal in a matter of seconds. The rest can take some time in the hope that the potential threat doesn&#039;t realize the data is being destroyed. It should then proceed to format the harddrives&nbsp;and then start writing them over with random data. 2 passes should be sufficient. The final (3rd) pass should write only 0-s to make the disks appear to be untouched. Finally the PC should shut down/restart.</p>
<p>But how does one wipe the OS while still using it? If the wiper is located on a external media (a bootable <a class="zem_slink" href="http://en.wikipedia.org/wiki/USB_flash_drive" rel="wikipedia" title="USB flash drive">thumb drive</a>), the process would be too slow. Imagine the situation: our vigilante get an intruder alert, giving her 30 seconds to flee the premises. And the bad guys find her waiting for the system to reboot so that the wiper program could be activated. Not good.</p>
<p>Any thoughts on how to make this happen are welcome in the comments section.</p>
