---
layout: post
status: publish
published: true
title: PHP algorithm for consistent random colors
author:
  display_name: David
  login: admin
  email: david@sqroot.eu
  url: http://sqroot.eu
author_login: admin
author_email: david@sqroot.eu
author_url: http://sqroot.eu
wordpress_id: 866
wordpress_url: http://sqroot.eu/?p=866
date: '2011-08-05 15:06:18 +0300'
date_gmt: '2011-08-05 13:06:18 +0300'
categories:
- PHP
tags:
- php
- code
- function
- random color
- snippet
comments: []
---
<p>Here&#039;s a PHP function that returns 2 random, but (mostly) constant HEX color codes.</p>
<p>The function takes a single parameter - a string - and returns an array with 2 colors.</p>
<pre>   /**
     * A function that returns a random background and font color.
     * The output is constant as long as the input string remains unchanged.
     * @author Ando Roots
     * @date August 2011
     * @copyright Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License
     * @link http://sqroot.eu
     * @static
     * @param string $string A random input string that determines the output colors.
     * @return array 2 colors, index 0 being random background color, index 1 gray font color,
     * it&#039;s darkness dependant on the first color.
     * Example: array(2) { [0]=&gt; string(7) &quot;#62FFD5&quot; [1]=&gt; string(6) &quot;#9D02A&quot; }
     */
    public static function color($string = &#039;test&#039;) {
        $colors = array();
        $color = array(0, 0, 0);

        // Prepare the input string.
        $string = preg_replace(&#039;/[^0-9]/&#039;, &#039;&#039;, md5($string));

        // Determine it&#039;s length
        if (strlen($string) &gt; 8) {
            $length = 3;
        } elseif (strlen($string) &gt; 5) {
            $length = 2;
        } elseif (strlen($string) &gt; 2) {
            $length = 1;
        } else {
            // Use time if all else fails
            $length = 3;
            $string = strrev(time());
        }

        // Generate background color
        $hex = &#039;#&#039;;
        foreach ($color as $i =&gt; $c) {
            $color[$i] = (int)substr($string, $i * $length, $length);
            if ($color[$i] &gt; 255) {
                $color[$i] = 255;
            }
            $hex .= dechex($color[$i]);
        }
        $colors[] = strtoupper($hex);

        // Generate font color
        $hex = &#039;#&#039;;
        $darkness = abs(255- round(array_sum($color) / 3));
        $hex .= dechex($darkness).dechex($darkness).dechex($darkness);
        $colors[] = strtoupper($hex);

        return $colors;
    }</pre>
