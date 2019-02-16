---
layout: post
section-type: post
title: "[RE-POST] How to get rid of svchost.exe (netsvcs)"
category: tech
tags: [ 'repost', 'svchost', 'netsvcs', 'windows', 'tutorial' ]
permalink: /blog/SVCHOST-NETSVCS
---

I had a *blog* back in 2012, based on <i class="fa fa-wordpress"></i> (self hosted). It was called **Chipset Unplugged** :stuck_out_tongue: but I had to shut it down because it got too many spam comments. One of the most popular posts on it was ***How to get rid of svchost.exe (netsvcs)***. The video has more than 80,000 views now :smile:
For the sake of old times I'm gonna repost it here.

<iframe width="640" height="360" src="https://www.youtube.com/embed/torGnOPPDgw" frameborder="0" allowfullscreen></iframe>
<br> 

You might have noticed that at times your *net is working very slow* and even after closing all the applications the router's LED keeps on blinking!
Don't worry, cause if you're using **Windows Vista, Win 7, Win 8 or Win 8.1**, its most likely not a malware!


1. Press <i class="fa fa-windows"></i> + R to open up the `Run` dialog box
2. Type `%windir%/system32/perfmon.exe /res` in the window and press OK
3. Click on the **`Network`** tab in the Resource Monitor dialog which just opened up
4. You will notice the process `scvhost.exe (netsvcs)` eating up a lot of bandwidth
5. Click on the check box on its left and then click on the **`CPU`** tab to select it
6. Under **Services**, you will notice something called **<a href="https://en.wikipedia.org/wiki/Background_Intelligent_Transfer_Service">BITS</a>**, right click on it and select `Stop Service`
7. You will immediately notice that the bandwidth being used by the process has started dropping

BITS might be behaving like this because of some bug, but definitely not a malware. I did this for 3-4 days and after that the issue was gone. Now of course I've shifted to **Linux**, so I don't have this problem.

You might have to repeat this multiple times since BITS tends to restart whenever the network appears to be free.

### NOT TESTED ON WINDOWS 10

<br>