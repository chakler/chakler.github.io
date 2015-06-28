---

title: Things I've learned from a trip to China
date: 28th June, 2014
peek: I was in Xiamen, China last June for a business meeting, as usual I brought with me my trustworthy Macbook Pro for working on some codes (primarily this site) and some occasional impromptu designs. What happened is I nearly gave up on coding my site.

---

I was in Xiamen, China last June for a business meeting, as usual I brought with me my trustworthy Macbook Pro for working on some codes (primarily this site*) and some occasional impromptu designs. What happened is I nearly gave up on coding my site. Why? Because of the [**Golden Shield Project**](http://en.wikipedia.org/wiki/Golden_Shield_Project), which also known as **The Great Firewall of China**.

****

## The first thing that hit me was the lack of Google in China.

As we all know, China is not a Google-Friendly country. My usual coding practice is to load the jQuery file from the Google CDN during production (no reason at all, just my preference). When I saw my local production site isn’t loading properly, I knew something’s happening. “Easy!” I said, I downloaded the latest copy of jQuery, put it inside the directory and edited the function.php. Ding! Site’s working, and now I’m going to work on the admin page, yet some other problem happened.

****

## The second thing that hit me was still the lack of Google in China.

The Dashboard loads abnormally slow, it takes you around a minute to load a single page. One time I’m pissed and I hit the little X button to stop the site from loading, then all of a sudden the site just showed up.

I knew something’s not loading up properly again, so I check the console. Turns out WordPress is using Open Sans as it’s default typeface and the fonts are served from Google fonts. Again, as we all know, China is not a Google-Friendly country. So your solution is either,

1. Click the stop loading button every time when you think the page is loaded. Or,
2. Download and install this lovely WordPress plugin called [Disable Google Fonts](https://wordpress.org/plugins/disable-google-fonts/) by [Milan Dinić](http://blog.milandinic.com/).

Also, if you’re developing a site with WordPress, the same problem applies to the WordPress Codex. You’ll have no other options but to do the solution 1.

****

## The third thing that hit me was the lack of Facebook in China. Yes, even Facebook is blocked in China.

[PWDO](http://pwdo.org "Philippine Web Designers Organization") peep usually discuss stuffs on Facebook, so no Facebook means no communication and no communication means I can’t work on stuffs that I should be working on. I was “virtually uncontactable” during my stay in Xiamen, no Facebook message (you can occasionally receive message though, just receive), no Google Hangouts since no Google. So what’s working in China? Here’s a few of them,

- WeChat
- Skype
- iMessage

But here’s the deal, let’s say you’re in China now and you realize all the communication problems, you now want to install WeChat or Skype on your Android phone, You just can’t. Don’t you remember we don’t have Google in China? No Google Play Store for you then. So if you’re going to China, please do install the three apps stated above before you leave.

****

The overall experience is not really that bad, these problems challenges are just something that we’ll have to face as a developer as usual. All you need to do is to find some workarounds or alternatives to your original tool set, like Yahoo or even Baidu for search instead of Google and Skype instead of Facebook message or Google Hangouts. It may take you some time, but not really that much.

If i’ll have to conclude this post in one sentence, it’ll be:

> Never rely on/use Google if you’re dealing with China.

\* _The site I'm pertaining to here is the first design of [ACLR.CO](http://themissingbulb.com/aclr), it was built with WordPress. So no, it doesn't pertain to this site which you're currently reading._
