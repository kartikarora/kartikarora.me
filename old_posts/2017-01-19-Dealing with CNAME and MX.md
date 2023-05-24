---
layout: post
section-type: post
title: "Dealing with CNAME and MX"
category: System Admin
tags: [ 'sysadmin', 'dns', 'cname', 'mx', 'website', 'domain' ]
permalink: /old-blog/dealing-cname-mx
---

Alright so, this is something I encountered a few hours back. I've been fiddling with the DNS records of one my domains, shifting my host and stuff. 

The domain in discussion has A records setup, pointing to [GitHub Pages](https://pages.github.com/), a few CNAME and TXT records for domain verification for [Mailgun](https://mailgun.com/) and two MX records for the email provider.
I bought an SSL certificate for the domain, and in order to make it work, I had to shift the hosting away from GitHub Pages to a new host which allowed uploading an SSL certificate. And thus, it required to change the DNS records.
The apex domain and the `www` sub-domain both pointed to GitHub Pages via the A records, but the hosting required me to point the apex domain and the `www` to a URL using CNAME records.

So, I configured the DNS, everything up and running, I am happy with the swanky new `https` before my domain. Fast forward two days, I notice that I have not been receiving mails on any of the 9 email ids on that account. Neither is Mailgun able to deliver customer service emails!
Contacting the support forums of the hosting and Milgun did not help. So I did a little bit of research and found the most of the email servers skip the MX records if a CNAME record is present on the apex domain.
Moreover section 3.6.2 of [RFC1034](http://www.faqs.org/rfcs/rfc1034.html) states:

> If a CNAME RR is present at a node, no other data should be present; this ensures that the data for a canonical name and its aliases cannot be different.

Boom, what do I do now? I would have to move to another host, or back to GitHub Pages, and I would have lost money on both the new hosting and the SSL certificate. But there had to be someway to overcome this.
After a few hours of searching the vast depths of the Internet, I found the A records for the hosting, which were not documented. And I quickly jumped to change the records, checked 3 or 4 DNS propagation checking tools and within the hour the site was up and I got all the pending mails!
   
Lesson learnt, do not mix up MX and CNAME on the apex domain! And I should probably sleep now!