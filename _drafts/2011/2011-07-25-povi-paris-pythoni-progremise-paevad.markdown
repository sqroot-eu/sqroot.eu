---
layout: post
status: publish
published: true
title: Povi Päris Pythoni Progremise Päevad
author:
  display_name: David
  login: admin
  email: david@sqroot.eu
  url: http://sqroot.eu
author_login: admin
author_email: david@sqroot.eu
author_url: http://sqroot.eu
excerpt: |
  <p>Povi &otilde;petab Pythonit progema! Kooli&otilde;pilastele-&otilde;petajatel?e ja Povisse praktikale tulevatele &uuml;li&otilde;pilastele tasuta!</p>
  <p>&nbsp;</p>
  <h3>Day #1: My solutions</h3>
  <p>&nbsp;</p>
  <p><a href="http://lauri.vosandi.eu/wiki/?page=exercise-apache">Apache log analyzer</a></p>
  <pre>#!/usr/bin/python
  # -*- coding: utf-8 -*-
  __author__ = &#039;Ando&#039;

  print &quot;Apache log analyzer&quot;

  lines = 0

  os = {&#039;win&#039;: 0,
        &#039;linux&#039;: 0,
        &#039;mac&#039;: 0,
        &#039;unknown&#039;: 0
  } # 3 major OS-s

  percentages = {&#039;win&#039;: 0,
                 &#039;linux&#039;: 0,
                 &#039;mac&#039;: 0,
                 &#039;unknown&#039;: 0
  } # Holds the percentages

  fail = &#039;/var/log/apache2/access.log&#039;
  print &quot;Logfile is &quot;, fail

  for line in open(fail, &#039;r&#039;).readlines():
      if (line.find(&#039;Linux&#039;) != -1):
          os[&#039;linux&#039;] += 1
      elif (line.find(&#039;Windows&#039;) != -1):
          os[&#039;win&#039;] += 1
      elif (line.find(&#039;Mac&#039;) != -1):
          os[&#039;mac&#039;] += 1
      else:
          os[&#039;unknown&#039;] += 1
      lines += 1

  print &quot;Number of log entries:&quot;, lines
  print &quot;&quot;

  for name in os:
      if (os[name] &gt; 0 and lines &gt; 0):
          percentages[name] = (os[name]*1.0 / lines*1.0) * 100

      print name.upper() + &#039;, %i times, %f%%&#039; % (os[name], percentages[name])

  print &quot;nEND&quot;</pre>
wordpress_id: 850
wordpress_url: http://sqroot.eu/?p=850
date: '2011-07-25 11:42:31 +0300'
date_gmt: '2011-07-25 09:42:31 +0300'
categories:
- Uncategorized
tags: []
comments: []
---
<p>Povi &otilde;petab Pythonit progema! Kooli&otilde;pilastele-&otilde;petajatel?e ja Povisse praktikale tulevatele &uuml;li&otilde;pilastele tasuta!</p>
<p>&nbsp;</p>
<h3>Day #1: My solutions</h3>
<p>&nbsp;</p>
<p><a href="http://lauri.vosandi.eu/wiki/?page=exercise-apache">Apache log analyzer</a></p>
<pre>#!/usr/bin/python
# -*- coding: utf-8 -*-
__author__ = &#039;Ando&#039;

print &quot;Apache log analyzer&quot;

lines = 0

os = {&#039;win&#039;: 0,
      &#039;linux&#039;: 0,
      &#039;mac&#039;: 0,
      &#039;unknown&#039;: 0
} # 3 major OS-s

percentages = {&#039;win&#039;: 0,
               &#039;linux&#039;: 0,
               &#039;mac&#039;: 0,
               &#039;unknown&#039;: 0
} # Holds the percentages

fail = &#039;/var/log/apache2/access.log&#039;
print &quot;Logfile is &quot;, fail

for line in open(fail, &#039;r&#039;).readlines():
    if (line.find(&#039;Linux&#039;) != -1):
        os[&#039;linux&#039;] += 1
    elif (line.find(&#039;Windows&#039;) != -1):
        os[&#039;win&#039;] += 1
    elif (line.find(&#039;Mac&#039;) != -1):
        os[&#039;mac&#039;] += 1
    else:
        os[&#039;unknown&#039;] += 1
    lines += 1

print &quot;Number of log entries:&quot;, lines
print &quot;&quot;

for name in os:
    if (os[name] &gt; 0 and lines &gt; 0):
        percentages[name] = (os[name]*1.0 / lines*1.0) * 100

    print name.upper() + &#039;, %i times, %f%%&#039; % (os[name], percentages[name])

print &quot;nEND&quot;</pre>
<p><a id="more"></a><a id="more-850"></a></p>
<p><a href="http://lauri.vosandi.eu/wiki/?page=exercise-openssh">Openssh r&uuml;nnak</a></p>
<pre>#!/usr/bin/python
# -*- coding: utf-8 -*-
__author__ = &#039;Ando&#039;

fail = &#039;auth.log&#039;
print &quot;Anal&uuml;&uuml;sin SSH logifaili&quot;, fail
print &quot;&quot;

counter = {} # Holds the IP addresses and request counts

for line in open(fail, &#039;r&#039;): # Read logfile line by line
    if (&#039;Failed&#039; in line and &#039;from&#039; in line):
        ip = line[line.find(&#039;from &#039;):line.find(&#039; port&#039;)] # Get the IP address of the attacker

        # Increase counter for that IP
        if (ip in counter):
            counter[ip] += 1
        else:
            counter[ip] = 1

# Print the results
for item in sorted(counter, key=counter.get):
    print &quot;Aadressilt %s r&uuml;nnakuid %i&quot; % (item, counter[item])

print &quot;nEND&quot;
</pre>
<p><a href="http://lauri.vosandi.eu/wiki/?page=exercise-samba">Simple SAMBA conf</a></p>
<pre>#!/usr/bin/python
# -*- coding: utf-8 -*-
__author__ = &#039;Ando&#039;

import sys
import os
import ConfigParser

# Reads and modifies smb.conf file
CONFIG_FILE = &#039;smb.conf&#039;
NEW_FILE = &#039;new_smb.conf&#039;

if (len(sys.argv) == 1):
    print &quot;USAGE: ./smb.py add|show folder_path&quot;
    exit()

# This can be easily expanded
action = &#039;show&#039;
if (sys.argv[1] == &#039;add&#039;):
    action = &#039;add&#039;

print &quot;Reading config file&quot;, CONFIG_FILE
config = ConfigParser.RawConfigParser()
config.read(CONFIG_FILE)

# Add a new section to the config file
if (action == &#039;add&#039;):
    try:
        folder_name = sys.argv[2].split(&#039;/&#039;)[-1] # Get the last name in the path
        config.add_section(folder_name)
        config.set(folder_name, &#039;browsable&#039;, &#039;true&#039;)
        config.set(folder_name, &#039;read only&#039;, &#039;false&#039;)
        config.set(folder_name, &#039;path&#039;, sys.argv[2])

        # Write the new file
        with open(NEW_FILE, &#039;w+&#039;) as configfile:
            config.write(configfile)

        print &quot;Wrote new config to&quot;, NEW_FILE

        # Restart SMBD
        print &quot;Restarting smbd...&quot;
        result = os.popen(&#039;service smbd restart&#039;).read() # Try to restart Samba

        if (&#039;start/running&#039; in result):
            print &quot;SAMBA sucesfully restarted with the new settings!&quot;
        else:
            print &quot;nSAMBA restart failed, must be root!&quot;

    except IndexError:
        pass

# List all share sections
else:
    for folder in config.sections():
        print &quot;Found shared folder&quot;, folder

print &quot;END&quot;</pre>
<p><a href="http://lauri.vosandi.eu/wiki/?page=exercise-parted">GParted</a></p>
<pre>#!/usr/bin/python
# -*- coding: utf-8 -*-
__author__ = &#039;Ando&#039;

import parted

print &quot;Listing disks and partitions on this machine&quot;
print &quot;&quot;

devices = parted.getAllDevices()

for device in devices:
    disk = parted.Disk(device)

    print &quot;* %i GB device &#039;%s&#039;&quot; % (device.getSize(unit=&#039;GB&#039;), device.model)
    for partition in disk.partitions:

        type = &#039;Unknown&#039;
        try:
            type = partition.fileSystem.type
        except:
            pass

        print &quot;t* 33[95m%i33[0m GB t33[94m%s33[0m 33[91m%s33[0m&quot; % (partition.getSize(unit=&#039;GB&#039;), type, partition.path)
print &quot;END&quot;
</pre>
