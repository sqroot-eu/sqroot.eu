---
layout: post
status: publish
published: true
title: The most brilliant python script ever written
author:
  display_name: David
  login: admin
  email: david@sqroot.eu
  url: http://sqroot.eu
author_login: admin
author_email: david@sqroot.eu
author_url: http://sqroot.eu
wordpress_id: 63
wordpress_url: http://sqroot.eu/?p=63
date: '2010-07-20 21:36:15 +0300'
date_gmt: '2010-07-20 21:36:15 +0300'
categories:
- Python
tags:
- python
- script
- toy
comments: []
---
<pre>
#!/usr/bin/python -tt

# The most brilliant (Python) script ever created.
# Fun for the whole family.

import sys

def main():
  
  print ''
  dumbUser = 1

# Ask the user if (s)he's dumb
  while(dumbUser):
    answer = raw_input('Are you dumb? ')
    if answer == 'yes':
      sys.exit(0)

if __name__ == '__main__':
  main()

</pre>
