---
layout: post
status: publish
published: true
title: Time-coded email service
author:
  display_name: David
  login: admin
  email: david@sqroot.eu
  url: http://sqroot.eu
author_login: admin
author_email: david@sqroot.eu
author_url: http://sqroot.eu
wordpress_id: 869
wordpress_url: http://sqroot.eu/?p=869
date: '2011-08-06 19:26:05 +0300'
date_gmt: '2011-08-06 17:26:05 +0300'
category:
- Python
- Coding
tags:
- python
- GUI
- design
- Email
- project
- service
comments: []
---

Spy movies sometimes include a clever deadman's switch someone set up to activate in the event of their capture and/or death.


My recent idea (while not a new one, but a quick googling didn't turn anything similar up) is just that.


A service that lets you prepare an e-mail and then lies in wait for the moment to send it. Sending the e-mail is delayed as long as the individual keeps regular check-ins with the system.


The project has only the GUI at the moment, I'm planning on writing the backend in Python (GAE), because Heroku's e-mailing limitations look too complex and I want to try something different from PHP.


Update:


I started writing the backend code in Python. An unfortunate surprise was how messy type juggling was in Python. Maybe I'm not doing it right, but I expected more elegance.

<p style="text-align: center;"><a href="http://sqroot.eu/wp-content/uploads/file/snapshot1.png"><img style="width: 300px; height: 305px; margin: 10px;" alt="" src="http://sqroot.eu/wp-content/uploads/file/snapshot1.png" /></a>

