---
layout: post
status: publish
published: true
title: Geeky fun with terminals
author:
  display_name: David
  login: admin
  email: david@sqroot.eu
  url: http://sqroot.eu
author_login: admin
author_email: david@sqroot.eu
author_url: http://sqroot.eu
wordpress_id: 771
wordpress_url: http://sqroot.eu/?p=771
date: '2011-05-09 12:36:12 +0300'
date_gmt: '2011-05-09 10:36:12 +0300'
category:
- Linux
tags:
- bash
- mint
- shell
comments: []
---

<a class="zem_slink" href="http://en.wikipedia.org/wiki/Linux_Mint" rel="wikipedia" title="Linux Mint">Linux Mint</a> prints out an awesome fortune-greeting message every time a new <a class="zem_slink" href="http://en.wikipedia.org/wiki/Terminal_emulator" rel="wikipedia" title="Terminal emulator">terminal window</a> is opened.


However, being a big fan of books, but not really M. Twain, I decided to swap my fortunes to quotes from S. Meyer&#039;s books.


For that, I created a new file based on /usr/bin/mint-fortune that grabs a random line from my textfile with Twilight quotes.


I replaced the default mint command in /etc/bash.bashrc&nbsp; with my own, installed the quotes and printer files and... voila!


So now you know what I do in lectures when it gets especially boring.


<a href="http://sqroot.eu/wp-content/uploads/2011/05/snapshot1.png"><img alt="" class="aligncenter size-medium wp-image-772" src="http://sqroot.eu/wp-content/uploads/2011/05/snapshot1-300x145.png" style="width: 300px;height: 145px" /></a>


<strong>/usr/bin/twilight-greeter identical to /usr/bin/mint-fortune except the last line.</strong>

<pre>#!/bin/bash
RANGE=3
number=$RANDOM
let &quot;number %= $RANGE&quot;
case $number in
        0)
                cow=&quot;moose&quot;
                ;;
        1)
                cow=&quot;tux&quot;
                ;;
        2)
                cow=&quot;koala&quot;
                ;;
esac

RANGE=2
number=$RANDOM
let &quot;number %= $RANGE&quot;
case $number in
        0)
                command=&quot;/usr/games/cowsay&quot;
                ;;
        1)
                command=&quot;/usr/games/cowthink&quot;
                ;;
esac

shuf -n 1 /usr/share/twilight_quotes.txt | $command -f $cow</pre>
<div class="zemanta-pixie" style="margin-top: 10px;height: 15px"><img alt="" class="zemanta-pixie-img" src="" style="border: medium none;float: right" /></div>
