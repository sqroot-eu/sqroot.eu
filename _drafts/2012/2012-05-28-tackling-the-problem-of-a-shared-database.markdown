---
layout: post
status: publish
published: true
title: Tackling the problem of a shared database
author:
  display_name: David
  login: admin
  email: david@sqroot.eu
  url: http://sqroot.eu
author_login: admin
author_email: david@sqroot.eu
author_url: http://sqroot.eu
excerpt: We (my company) have several small web apps, all made for the same client,
  all using some portion of shared data (data that's the same within the context of
  the client's business). So each app has it's own Employees table, Objects table,
  Prices table... and in most cases the data is identical.
wordpress_id: 2529
wordpress_url: http://sqroot.eu/?p=2529
date: '2012-05-28 13:05:55 +0300'
date_gmt: '2012-05-28 10:05:55 +0300'
categories:
- Coding
tags:
- api
- database
- database design
- web service
- shared database
comments: []
---
<p>The following is a description of a database design problem I'm currently trying to solve.</p>
<p><strong>Background</strong></p>
<p>We (my company) have several small web apps, all made for the same client, all using some portion of shared data (data that's the same within the context of the client's business). So each app has it's own Employees table, Objects table, Prices table... and in most cases the data is identical.</p>
<p>The problem is that if a new employee is hired by the client all web apps need manual data update and that's costly in terms of human resources.</p>
<p><strong>The solution</strong></p>
<p>Use a central database, "guarded" by a web service for authentication, authorization, logging.</p>
<p>Each smaller app would then still have it's own employee, objects, prices table, but they would hold only values that are specific for that app and can not be put into the central database. The tables would also hold a reference (PK) for the corresponding row in the central database.</p>
<p>The smaller apps would then make a query to the web service each time they need data about some shared row.</p>
<p>CRUD operations would go through the web service.</p>
<p><strong>The problem</strong></p>
<p>Is this really how it's done? How could one do that better?</p>
<p>Another problem is with queries: now it's impossible to put any shared columns to a single SQL statement (WHERE x=y)</p>
<p>Alternatives I've considered:</p>
<ul>
<li>Hold a full copy of this shared data in each of the smaller apps, but sync any changes to the central database (and other apps). Also sync changes from the central database. What if sync is interrupted? = inconsistent data</li>
<li>Put ALL the shared data to the central database. Would not work for relational databases.</li>
</ul>
<p>Any references to articles, blog posts discussing this are appreciated.</p>
