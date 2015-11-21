---
layout: post
section-type: post
title: "[LINUX] Top Commands List"
category: linux
tags: [ 'linux', 'commands' ]
---

Here's a terminal command to know the *top 10* commands you use. Gives you a sense of what you really do on the machine!

<pre><code data-trim="shell">
history | awk 'BEGIN {FS="[ \t]+|\\|"} {print $3}' | sort | uniq -c | sort -nr | head
</code></pre>

Just copy and paste in on your terminal and press enter.

I haven't tried it on a Mac, but it should work since its uses [POSIX](https://en.wikipedia.org/wiki/POSIX) too.
My top 10 commands (just before putting this up) are

<pre><code data-trim="shell">
718 git
242 sudo
138 exit
 93 cd
 89 gcc
 75 java
 72 ls
 70 javac
 56 g++
 54 ./a.out
</code></pre>

Stay tuned for more such terminal tricks and do share your top 10 commands in the comments below!