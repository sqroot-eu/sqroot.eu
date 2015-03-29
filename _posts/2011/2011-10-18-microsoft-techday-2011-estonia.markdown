---
layout: post
status: publish
published: true
title: Microsoft TechDay 2011 Estonia
author:
  display_name: David
  login: admin
  email: david@sqroot.eu
  url: http://sqroot.eu
author_login: admin
author_email: david@sqroot.eu
author_url: http://sqroot.eu
excerpt: '<p style="text-align: justify">This post contains notes from the first half
  of <a href="http://www.techday.ee/">Microsoft TechDay 2011 Estonia</a>.
'
wordpress_id: 1190
wordpress_url: http://sqroot.eu/?p=1190
date: '2011-10-18 16:56:10 +0300'
date_gmt: '2011-10-18 14:56:10 +0300'
category:
- Events
- Featured
tags:
- Firefox
- Microsoft
- opera
- safari
- html
- javascript
- Google Chrome
- Featured
- HTML5
- Cascading Style Sheets
- css3
- Internet Explorer 9
- talk
- Windows Phone 7
comments: []
---
<p style="text-align: justify">This post contains notes from the first half of <a href="http://www.techday.ee/">Microsoft TechDay 2011 Estonia</a>.

<h2 style="text-align: justify">Developer's Keynote: Next Generation Apps! Developing for Services and Devices</h2>

Cloud is the way to go. We started with the mainframes and have reached an era where the trend is the cloud and virtualization. Software- and Planform As A Service is the new vision.


We can bill you elastically. <a class="zem_slink" title="Service level agreement" href="http://en.wikipedia.org/wiki/Service_level_agreement" rel="wikipedia">SLA</a>-driven architecture and extreme standardization.<br />
10-15% of failed <a class="zem_slink" title="Hard disk drive" href="http://en.wikipedia.org/wiki/Hard_disk_drive" rel="wikipedia">HDD</a>-s on a stack of server machines is an acceptable loss; we only interfere when we reach a critical level. We try to keep the human factor in a data center as low as possible with one person maybe managing 10 000 servers.<br />
The cloud is a big oppurtunity. We need the cloud to connect different devices from watches to PC-s. We're providing software for both the public and the private cloud. Put stuff that needs bursts of performance in the public cloud. We give you a secure and standard-compliant platform to run your application.<br />
We don't believe everything will be moved to the cloud, the future will be a kind of a hybrid. We'd like to open up the [Azure] platform because there are other technologies besides Microsoft's out there who could benefit from it.

<h4>Azure security:</h4>
<ul>
<li>Confidential and isolated data</li>
<li>Data integrity - we duplicate and geo-replicate your data</li>
<li>SLA availability</li>
<li>Accountability: logs</li>
</ul>

When you become the next Facebook overnight...you need the cloud to scale your app on-demand.

<h3>Kinect demos</h3>
<ul>
<li>Hardware: RGB and Depth camera</li>
<li>Can "see" human figures and tell apart different, overlapping persons.</li>
<li>Can also do tricks with voice recognition!</li>
</ul>

Demo: moving skeleton with joints recognized. <em>Error: SkeletonDemo has stopped working. [System malfunction for ~8 minutes]</em>


Windows phone philosophy: People vs. Icons. We put people first.

<h3><a class="zem_slink" title="Windows Phone 7" href="http://en.wikipedia.org/wiki/Windows_Phone_7" rel="wikipedia">Windows Phone</a> 7 features demo</h3>

Porting apps to Phone 7 with .NET and Visual Studio is easy! We have a full infrastructure for PUSH notifications. We need to build social apps.


<em>[Demo for simple PUSH system. Doesn't work, reason unknown.]</em>


There is a lot of cool stuff you can do with HTML5. Microsoft has invested heavily in the tools to help you build HTML5 and having them will be critical to your success.


Question from the audience. Answer: Estonia support for the Phone 7 will come, but unfortunaly I can not tell you exactly when.

<blockquote>
[Remarque from a live demo]: Whoever reads the <a class="zem_slink" title="Software license agreement" href="http://en.wikipedia.org/wiki/Software_license_agreement" rel="wikipedia">EULA</a>? Let's make the lawyers happy.
</blockquote>

FabriCamp demo - scalable Azure infrastructure deployment.<em> [The demo doesn't succeed, several error messages].</em>

<h2>Developer Session #1: HTML5 - Myth and Reality. How industry is changing and why?</h2>

A brief history of <a class="zem_slink" title="HTML" href="http://en.wikipedia.org/wiki/HTML" rel="wikipedia">HTML</a> from 1997. Static pages, Netscape browser design. Because of plugins like flash and Silverlight we, the browser vendors, decided to sit down and work on a new version of HTML. We want to use the <a class="zem_slink" title="Graphics processing unit" href="http://en.wikipedia.org/wiki/Graphics_processing_unit" rel="wikipedia">GPU</a> for graphics acceleration. Javascript performance has increased dramatically since the beginning [of the Internet].<br />
The web and expectations have changed, but HTML hadn't. That's the reason for HTML5.

<h3>Some features:</h3>
<ul>
<li>new doctype</li>
<li>binary attributes</li>
<li>structured tags are not required</li>
<li>quotes on attributes are now optional</li>
<li>obsolete elements (applet, center, font, marquee). They work...but please - please don't use them in new sites! Use the HTML5 logo if you support it, not because it's fun!</li>
<li>New life to old elements (i, ol, em, small...)</li>
<li>New semantic elements (canvas, audio, video, footer, header...)</li>
<li>Native support for audio, video <span style="text-decoration: underline">and more</span></li>
</ul>

Open technologies - open standards, not owned by any company


<span style="text-decoration: underline">Myth #2 : HTML5 is a product by Apple/Google.... - </span>Nop!


We all love HTML5 - Opera, Safari, IE, Mozilla, <a class="zem_slink" title="Google Chrome" href="http://www.google.com/chrome" rel="homepage">Chrome</a> &amp; more


Microsoft is commited to supporting HTML5 in all of their products.


Favourite browser for everyday usage in order from most to least<em>(raise hands)</em>: Chrome <em>(half the hall)</em>, Firefox, IE, Opera


Demo of particle rendering on canvas (<a href="http://ie.microsoft.com/testdrive/Performance/Paintball/">paintball on ietestdrive.com</a>): <a class="zem_slink" title="Internet Explorer 9" href="http://en.wikipedia.org/wiki/Internet_Explorer_9" rel="wikipedia">IE 9</a> really fast, Chrome about 10fps? Using canvas is very simple, you can draw anything!


<span style="text-decoration: underline">Myth #3: ACID3/html5test/... - quality of standard measurement</span> - Nop, they measure how a feature is implemented in a browser. MS claim: ACID3 is not a real test, we don't like it. Two weeks ago IE9 got 100/100 after the test was changed, Chrome (version 14) got 99/100. Still we tell you it's not a real measurement of HTML5 implementation.


<span style="text-decoration: underline">Myth #4 - HTML5 is ready</span> - Every <a class="zem_slink" title="World Wide Web Consortium" href="http://en.wikipedia.org/wiki/World_Wide_Web_Consortium" rel="wikipedia">W3C standard</a> must complete 6 steps. We're almost done, but it's not yet a real standard. We are very careful about draft status specifications in Microsoft so we won't implement them. Chrome.angrybirds.com isn't REALLY done in HTML? Disable flash plugin and you'll see... The whole game is much faster in IE than in Chrome, by the way...


<span style="text-decoration: underline">Myth #5 - HTML5 is not ready</span> - Well, true, but you CAN use it already! Example: <a href="http://doodlegod.com">doodlegod.com</a>, all done in HTML5! Yup, even sound!

<blockquote>
"Developers can use HTML5 now and we encourage them to do so" - Ian Jacobs, W3C
</blockquote>

<span style="text-decoration: underline">Myth #6 HTML5 = CSS3, SVG...</span> - They are actually separate specifications

<h4><a class="zem_slink" title="Cascading Style Sheets" href="http://en.wikipedia.org/wiki/Cascading_Style_Sheets" rel="wikipedia">CSS 3</a> features:</h4>
<ul>
<li>custom font import</li>
<li>media queries</li>
<li>background manipulation</li>
<li>new selectors</li>
<li>HSLA colors</li>
<li>transparent elements</li>
<li>...and more!</li>
</ul>

<span style="text-decoration: underline">Myth #7: HTML5 is only for desktops </span>- Not no! Mobile devices, user interfaces etc<br />
<span style="text-decoration: underline"> Myth #8: HTML5 is only for browsers -</span> See above<br />
<span style="text-decoration: underline"> Myth #9: All codecs are equally great -</span> Legal issues? Implementation status?


<strong>Let's kill IE6 together! Please kill it! 9% still use it. <a href="http://ie6countdown.com">http://ie6countdown.com</a></strong>


<a href="http://buildmypinnedsite.com/">http://buildmypinnedsite.com/ </a>- give websites Windows 7 taskbar integration (pinning).

<h2>HTML is the future of the Web.</h2>
<div class="zemanta-pixie" style="margin-top: 10px;height: 15px"><img class="zemanta-pixie-img" style="border: none;float: right" src="" alt="" /></div>
