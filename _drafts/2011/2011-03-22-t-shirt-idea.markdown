---
layout: post
status: publish
published: true
title: T-shirt idea?
author:
  display_name: David
  login: admin
  email: david@sqroot.eu
  url: http://sqroot.eu
author_login: admin
author_email: david@sqroot.eu
author_url: http://sqroot.eu
wordpress_id: 639
wordpress_url: http://sqroot.eu/?p=639
date: '2011-03-22 00:09:02 +0200'
date_gmt: '2011-03-21 22:09:02 +0200'
category:
- PHP
tags:
- php
- fun
- t-shirt
comments: []
---
<pre>&lt; ?
include(&#039;World.php&#039;);
$world = new World();
$world-&gt;me-&gt;profession = &#039;PROGRAMMER&#039;;

foreach ($world-&gt;day as $day) {
    $world-&gt;me-&gt;write_code($day);
    $world-&gt;me-&gt;drink_coffee(4);
    if ($world-&gt;me-&gt;had_fun) {
        $world-&gt;me-&gt;have_sex(rand(1, 6));
    } else {
        $world-&gt;me-&gt;profession = &#039;WAITER&#039;;
    }
}
?&gt;
</pre>
<pre>&lt; ?

class World {
    public $day = array();
    public $me;

    public function World() {
        for ($i=1; $i &lt;= 365; $i++) {
            $this-&gt;day[] = $i;
        }
        $this-&gt;me = new Me();
    }

}

class Me {

    public $had_fun = TRUE;
    public $profession;

    public function drink_coffee($number) {
        
    }

    public function have_sex($times) {
        return FALSE;
    }

    public function write_code($day) {
        echo &quot;Day #$day of a &quot;.$this-&gt;profession.&quot;: Wrote code, had coffe, had fun AND some sex.
&quot;;
    }
}

?&gt;
</pre>
