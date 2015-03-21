---
layout: post
status: publish
published: true
title: 3 Reasons Why You Should Support Standardized Markdown
author: David
author_login: admin
author_email: david@sqroot.eu
author_url: http://sqroot.eu
excerpt: Supporting a standardized version of Markdown makes the life of your API
  consumers and end-users easier. Please do it!
wordpress_id: 4247
wordpress_url: http://sqroot.eu/?p=4247
date: '2015-02-02 18:21:16 +0200'
date_gmt: '2015-02-02 16:21:16 +0200'
category:
- Opinions
- Coding
tags:
- programming
- markdown
- standards
comments: []
---

I'm working on a software project that integrates with a web-based instant messaging service. One of the tasks involved is formatting text using their version of Markdown, which doesn't conform to the <a href="http://commonmark.org">industry-accepted specification</a>.


Being annoyed with that (and with the fact that I have to implement their specification myself, instead of using a readily-available library), I decided to list some reasons why I think they are in the wrong.<br />
<a id="more"></a><a id="more-4247"></a>

<h2>#1: Your integration partners can use existing parser libraries</h2>

Open source is cool: there are readily available solutions for common problems. You need to transform Markdown into HTML? HTML into Markdown? Easy! Search for Markdown in your package manager (<a href="https://packagist.org/search/?q=markdown">Composer</a>, <a href="https://www.npmjs.com/search?q=markdown">npm</a>, <a href="https://rubygems.org/search?utf8=%E2%9C%93&amp;query=markdown">gem</a> etc), install the dependency and do something like


markdown.toHTML( "Hello &#42;World*!" )


Few lines of code and no hassle. Custom vendor syntax would require developers to first write a parser library for your particular product only. Extra development time, extra support (bugs and API upgrades) and extra money spent on things other than the actual product.

<h2>#2: Out-of-the-box support from third party applications</h2>

Many platforms, libraries and applications already support Markdown. Should it happen that their output becomes your input (or the other way around), you might find that it works out of the box. No need for a custom adapter script.

<h2>#3: No need to write a language specification</h2>

Many developers and end-users are already familiar with the Markdown specification. You don't have to write (and maintain) a lengthy Text Formatting Specification document, then teach it to all of your consumers (teaching non-technical folk a new language syntax can be a daunting task!). Following an accepted standard means you don't have to reinvent the wheel.

<h2>#4 (free point, yay!): Implementing Markdown support might be quite easy</h2>

Depending on your product, it might be possible to include support for Markdown the same way your consumers do: by using an existing library. You could pass incoming messages through a parser library and get full Markdown support out of the box without having to do the hard work. Win-win!

<hr />

By the way: this very blog post is written and formatted purely with Markdown.

<h1>Links</h1>
<ul>
<li><a href="http://commonmark.org">CommonMark Spec</a></li>
<li><a href="http://daringfireball.net/projects/markdown/syntax">Daring Fireball, Markdown spec</a></li>
</ul>
