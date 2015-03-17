---
layout: post
status: publish
published: true
title: ".NET Course 2: The Revenge of C#"
author:
  display_name: David
  login: admin
  email: david@sqroot.eu
  url: http://sqroot.eu
author_login: admin
author_email: david@sqroot.eu
author_url: http://sqroot.eu
wordpress_id: 702
wordpress_url: http://sqroot.eu/?p=702
date: '2011-04-12 19:52:43 +0300'
date_gmt: '2011-04-12 17:52:43 +0300'
categories:
- IT College
- Coding
tags:
- NET
- c#
- visual studio
comments: []
---
<p>&nbsp;</p>
<pre>using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ConsoleApplication1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(&quot;Pythagoras.&quot;);
            Console.Write(&quot;Kaatet 1: &quot;);
            double a = Double.Parse(Console.ReadLine());
            Console.Write(&quot;Kaatet 2: &quot;);
            double b = Double.Parse(Console.ReadLine());
            double c = Math.Sqrt((a*a) + (b*b));
            Console.Write(&quot;H&uuml;potenuus: &quot;);
            Console.WriteLine(c.ToString());
        }
    }
}

</pre>
<p><a href="http://sqroot.eu/wp-content/uploads/2011/04/Rateonline.png"><img alt="" class="aligncenter size-medium wp-image-701" src="http://sqroot.eu/wp-content/uploads/2011/04/Rateonline-300x181.png" style="width: 300px;height: 181px;border-width: 1px;border-style: solid;margin: 10px" /></a></p>
<p><a href="http://sqroot.eu/wp-content/uploads/2011/04/Activate.png"><img alt="" class="aligncenter size-medium wp-image-705" src="http://sqroot.eu/wp-content/uploads/2011/04/Activate-300x236.png" style="width: 300px;height: 236px;border-width: 1px;border-style: solid;margin: 10px" /></a></p>
<p>Teemad:</p>
<ul>
<li>Objektid, klassid, nende k&auml;itumine m&auml;lus</li>
<li>Meetodid, andmet&uuml;&uuml;bid</li>
<li>Method overloading, operator overloading</li>
<li>Konstruktor, destruktor</li>
<li>private, public, protected</li>
<li>Inheritance (&quot;p&auml;rimine&quot;)</li>
<li>Overriding</li>
<li>Setters, getters</li>
<li>Abstract classes</li>
</ul>
