---
layout: post
status: publish
published: true
title: 'Python: Check that your projects are still alive'
author:
  display_name: David
  login: admin
  email: david@sqroot.eu
  url: http://sqroot.eu
author_login: admin
author_email: david@sqroot.eu
author_url: http://sqroot.eu
excerpt: A python script to verify and notify whether a given list of sites returns
  HTTP status code 200.
wordpress_id: 1251
wordpress_url: http://sqroot.eu/?p=1251
date: '2012-01-06 13:28:51 +0200'
date_gmt: '2012-01-06 11:28:51 +0200'
categories:
- Python
- Coding
tags:
- python
- script
- programming
- GitHub
- automation
- Cron
- http
- tool
comments: []
---
<p><a href="http://sqroot.eu/wp-content/uploads/2012/01/Selection_026.png"><img class="alignleft size-medium wp-image-1254" style="margin: 10px" src="http://sqroot.eu/wp-content/uploads/2012/01/Selection_026-300x244.png" alt="" width="300" height="244" /></a></p>
<p style="text-align: justify">I wrote the following Python script to solve my need to verify all my projects are still up and running. The program itself is simple: given a list of URL-s check that all of them return HTTP status code 200 (OK). On any other status (mainly 500) send a report to the admin.</p>
<p style="text-align: justify">Best used via crontab every... minutes.</p>
<p style="text-align: justify">Install: Copy both files to a directory (~/bin works well) and check that dependencies (imports) are satisfied. Configure via http_check.yaml, optionally adding custom actions to http_ok() and http_error() functions inside the main script file.</p>
<div style="clear: both"></div>
<h4 style="text-align: center"><a href="https://gist.github.com/1570204">Link to the source (GitHub)</a></h4>
<p>&nbsp;<code> </code></p>
