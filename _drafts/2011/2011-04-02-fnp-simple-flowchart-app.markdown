---
layout: post
status: publish
published: true
title: 'FNP: Simple Flowchart App'
author:
  display_name: David
  login: admin
  email: david@sqroot.eu
  url: http://sqroot.eu
author_login: admin
author_email: david@sqroot.eu
author_url: http://sqroot.eu
wordpress_id: 663
wordpress_url: http://sqroot.eu/?p=663
date: '2011-04-02 01:13:20 +0300'
date_gmt: '2011-04-01 23:13:20 +0300'
category:
- Coding
- Friday Night Project
tags:
- programming
- html
- php
- Ruby
- Flowchart
- Languages
comments: []
---

So, it's friday again, the night of partying and alcohol consuming, or in some cases, coding. Here is another one of my FNP (Friday Night Projects), in this case, a simple example on how (not?) to write a simple <a class="zem_slink" title="Flowchart" href="http://en.wikipedia.org/wiki/Flowchart" rel="wikipedia">flowchart</a> app.


At first, the idea was to do it in <a class="zem_slink" title="Ruby (programming language)" href="http://en.wikipedia.org/wiki/Ruby_%28programming_language%29" rel="wikipedia">Ruby</a>, for learning purposes, and in much larger scale. Users would get a quick signup and the ability to <a class="zem_slink" title="Create, read, update and delete" href="http://en.wikipedia.org/wiki/Create%2C_read%2C_update_and_delete" rel="wikipedia">CRUD</a> (Create, Retrieve, Update, Delete) flowcharts... but I gave up on that and chose to write only the <a class="zem_slink" title="User interface" href="http://en.wikipedia.org/wiki/User_interface" rel="wikipedia">UI</a> part with minimal <a class="zem_slink" title="PHP" href="http://en.wikipedia.org/wiki/PHP" rel="wikipedia">PHP</a> backing. The code is meant to support only one flowchart and the data is hardcoded in PHP (you could ditch the JSON and put it in the HTML too if you wanted to).


The project includes some <a class="zem_slink" title="Cascading Style Sheets" href="http://en.wikipedia.org/wiki/Cascading_Style_Sheets" rel="wikipedia">CSS</a> and image files, a PHP script that outputs <a class="zem_slink" title="JSON" href="http://en.wikipedia.org/wiki/JSON" rel="wikipedia">JSON</a> data with flowchart questions+answers and a <a class="zem_slink" title="HTML" href="http://en.wikipedia.org/wiki/HTML" rel="wikipedia">HTML</a> template with minimal <a class="zem_slink" title="JQuery" href="http://en.wikipedia.org/wiki/JQuery" rel="wikipedia">jQuery</a> code to retrieve JSON from the PHP file.


<a href="http://www.maxim.com/amg/humor/stupid-fun/83602/how-men-women-argue.html">How Men And Women Argue</a> was chosen as a base to work on. Total time spent: ~2hrs. The questions and answers are in a PHP array (ideally you'd want to involve a database for that). The code (excluding used 3rd party CSS) is released under <a href="http://philsturgeon.co.uk/code/dbad-license">Don't be a Dick Public Licence</a>.


So, without further ado...

<h4><a href="http://sqroot.eu/wp-content/uploads/file/flowchart.zip">Download the Project Files</a></h4>
<div class="zemanta-pixie" style="margin-top: 10px;height: 15px"><img class="zemanta-pixie-img" style="border: none;float: right" src="" alt="" /></div>
