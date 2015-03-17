---
layout: post
status: publish
published: true
title: Web App Pre-Launch Checklist
author:
  display_name: David
  login: admin
  email: david@sqroot.eu
  url: http://sqroot.eu
author_login: admin
author_email: david@sqroot.eu
author_url: http://sqroot.eu
wordpress_id: 2639
wordpress_url: http://sqroot.eu/?p=2639
date: '2012-08-11 13:54:16 +0300'
date_gmt: '2012-08-11 10:54:16 +0300'
categories:
- PHP
tags:
- php
- app
- checklist
- launch
comments:
- id: 621
  author: 'Reading Material For People New To PHP / Kohana | SQroot :: Don&#039;t
    be negative!'
  author_email: ''
  author_url: http://sqroot.eu/2012/12/reading-material-for-people-new-to-php-kohana/
  date: '2012-12-14 01:15:52 +0200'
  date_gmt: '2012-12-13 23:15:52 +0200'
  content: "[...] http://sqroot.eu/2012/08/web-app-pre-launch-checklist/ - Before
    deploying your next project&#8230; [...]"
---
<div>This is my checklist for deploying PHP / Kohana based web application projects.</div>
<h2>Pre-develop</h2>
<div>
<ol>
<li>Will the layout be responsive or fixed?</li>
<li>How to address the user (informal / formal)</li>
<li>URL scheme - readable, semantic, short</li>
</ol>
</div>
<h2><span style="line-height: 13px;">Frontend</span></h2>
<h3>Markup</h3>
<ol>
<li><span style="line-height: 13px;">Does it have a favicon?</span></li>
<li><span style="line-height: 13px;">Does it have a &lt;title&gt; tag that changes for every page?</span></li>
<li><span style="line-height: 13px;">Does it have &lt;meta&gt; author, description, charset?</span></li>
<li><span style="line-height: 13px;">Did you <a href="https://browserling.com/">test the layout</a> with IE 7, 8, 9, Opera, Firefox, Chrome?</span></li>
<li><span style="line-height: 13px;">Did you test it with common screen resolutions?</span></li>
<li><span style="line-height: 13px;">Does the main logo link to the front page?</span></li>
<li><span style="line-height: 13px;">Does the HTML validate?</span></li>
<li><span style="line-height: 13px;">Does it have (Google) Analytics?</span></li>
<li><span style="line-height: 13px;">Did you optimize and concatenation script, style and image (thumbs!) resource?</span></li>
<li><span style="line-height: 13px;">Does it have a print stylesheet?</span></li>
</ol>
<h3><span style="line-height: 13px;">User Experience</span></h3>
<ol>
<li>Did you go over all the texts, tooltips, instructions one more time? Can they be made <a href="http://developer.android.com/design/style/writing.html">more specific and shorter</a>?</li>
<li>Does it have an informative 404 page?</li>
<li>Do you have informative help texts?</li>
<li>Are you validating forms with JS?</li>
</ol>
<h2><span style="line-height: 13px;">Backend</span></h2>
<div>
<ol>
<li>Are system-level folders, resources protected (.htaccess)?</li>
<li>Does it have a separate database username?</li>
<li>Are events logged?</li>
<li>Can it do self-diagnosis and notification on critical errors?</li>
<li>Did you protect against unauthorized usage (permission checks on certain actions)?</li>
</ol>
</div>
<h3>Database</h3>
<div>
<ol>
<li>Is the database indexed?</li>
<li>Is the database documented (ERD, comments)?</li>
</ol>
</div>
<div><span style="line-height: 13px;">Resources</span></div>
<div>
<ul>
<li><a href="http://www.smashingmagazine.com/2009/04/07/15-essential-checks-before-launching-your-website/">http://www.smashingmagazine.com/2009/04/07/15-essential-checks-before-launching-your-website/</a></li>
<li><a href="http://www.boxuk.com/blog/the-ultimate-website-launch-checklist">http://www.boxuk.com/blog/the-ultimate-website-launch-checklist</a></li>
</ul>
</div>
