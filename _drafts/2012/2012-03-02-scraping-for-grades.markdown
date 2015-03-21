---
layout: post
status: publish
published: true
title: Scraping for grades
author:
  display_name: David
  login: admin
  email: david@sqroot.eu
  url: http://sqroot.eu
author_login: admin
author_email: david@sqroot.eu
author_url: http://sqroot.eu
excerpt: 'The student information system (ÕIS) our college is using satisfies most
  (if not all) the requirements presented to it. Still, I found a fault: there''s
  no API and I wanted to get notified ASAP when a new grade is added.'
wordpress_id: 1352
wordpress_url: http://sqroot.eu/?p=1352
date: '2012-03-02 15:31:17 +0200'
date_gmt: '2012-03-02 13:31:17 +0200'
category:
- IT College
- Coding
tags:
- html
- Ruby
- school
- mechanizer
- scripting
comments: []
---

[caption id="attachment_1353" align="aligncenter" width="300" caption="itk_grade.rb output"]<a href="http://sqroot.eu/wp-content/uploads/2012/03/david@tardis-Desktop_011.png"><img class="size-medium wp-image-1353 " style="margin-top: 10px;margin-bottom: 10px" src="http://sqroot.eu/wp-content/uploads/2012/03/david@tardis-Desktop_011-300x186.png" alt="itk_grade.rb output" width="300" height="186" /></a>[/caption]

<p style="text-align: justify">The student information system (ÕIS) our college is using satisfies most (if not all) the requirements presented to it. Still, I found a fault: there's no API and I wanted to get notified ASAP when a new grade is added.

<p style="text-align: justify">Some background: I recently started a wonderful online learning course: SAAS-class.org (<a href="https://www.coursera.org/saas/class">https://www.coursera.org/saas/class</a>) where I got the opportunity &amp; incentive to dive into Ruby (on Rails).

<p style="text-align: justify">So, my first ever Ruby class was born. The code uses Mechanize to log into the grade system, navigates to the correct page and scrapes the grades into an Hash structure. The end user can basically just do this:


&nbsp;

<pre>require "itk_grades"

# Create instance and save login data
ITK = ITKGrades.new("user", "pass")

# Fetch &amp; scrape grades from ÕIS.
ITK.fetch

#ITK.grades # Returns a hash of all grades

# Print all grades
ITK.print</pre>

You can see the full code over @ <a href="https://gist.github.com/1944799">GitHub</a> or the college <a href="https://wiki.itcollege.ee/index.php/ITKGrades.rb">Wiki</a> (in Estonian).

