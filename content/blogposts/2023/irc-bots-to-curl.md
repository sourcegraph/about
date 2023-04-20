---
title: IRC bots to cURL - In conversation with Daniel Stenberg
description: cURL is an open-source project that helps virtually every user on the internet transfer data every day. We interviewed its creator, Daniel Stenberg.
authors:
  - name: Justin Dorfman
    url: https://twitter.com/jdorfman
  - name: Beyang Liu
    url: https://twitter.com/beyang
publishDate: 2023-04-01T00:00
tags: [blog]
slug: curl-daniel-stenberg 
heroImage:
socialImage:
published: true
---

cURL is an open-source project that helps virtually every user on the internet transfer data every day.

We [chatted with Daniel Stenberg](https://about.sourcegraph.com/podcast/daniel-stenberg), founder and lead developer of curl, about his early introduction to programming through the Swedish demoscene and building bots to defend IRC channels, the history of curl, and his involvement in protocol specifications.

<YouTube
  id="ZLtqHFxEDm8"
  showTitle={true}
/>

Here are some of our favorite takeaways from the interview.

## BASIC, a Commodore 64, and the Swedish demoscene

Daniel was first introduced to the world of computers by a friend who owned a Commodore 64 and "teased me into what programming and working with computers could be like," he says. He got his own Commodore 64 at 14 years old and used it to teach himself BASIC programming. "I was fascinated by the ability to command the computer to do what I wanted to do."

"I was hooked really, really quickly," Daniel says. He started out making games but soon got into the Swedish [demoscene](https://en.wikipedia.org/wiki/Demoscene), creating audiovisual presentations to share with other demo groups. "It was mostly a show-off thing," he explains. "You would try to do something fun that made some cool graphic tricks."

The Commodore 64 graphics chip was mostly undocumented and learning to create demos on the platform depended on collaboration and experimentation. "It was a sort of an adventure into the wild."

[![The Last Traktor III by Horizon](https://i.ritzastatic.com/images/ed85ed035c454a09886deb2a7ccf4bb1/demo.jpg)](https://www.youtube.com/watch?v=nbGB8odsLJ0)

With his brother and a couple of friends, Daniel formed a demo group called Horizon and attended demo meetings around Sweden.

But "I got a bit bored by doing those demo things after a while," Daniel says."Because at some point, you feel that you've reached the end of what you can do." When Commodore shipped the Amiga in the late 80s, he made the switch. Demos and graphics tricks weren't as much fun on the Amiga. "It was a completely different universe," Daniel says. "It was like removing all the fences and there were no limits anymore."

Instead, Daniel started learning C with the intention of building his own text editor.

## ProtoDevOps at IBM

Following his mandatory military service, Daniel postponed his plans for university to take up a position at IBM setting up, customizing, and installing [IBM RS/6000](https://en.wikipedia.org/wiki/IBM_RS/6000) machines for customers. "They were huge!" he says. "Like small closets, usually powerful machines with powerful hardware, and they ran AIX then. So they were really IBM's Unix machines."

Set up of the RS/6000 was a manual process, so Daniel and his colleagues took to writing tools to automate their operations work, like an early version of DevOps, giving Daniel a chance to get more familiar with C programming and fuelling his personal programming project, toying with the Amiga. "At my work," he says, "I realized the world of open source, command lines, Unix, Emacs, C code, man pages. I learned Emacs and that got me  inspired for my text editor."

## Building his own text editor because Vim didn't exist, Emacs was too advanced, vi was too basic

The Amiga was powerful, but not powerful enough to run Emacs—at least, not fast enough for Daniel's use. 

While vi was light enough to run on his Amiga, it lacked the features Daniel had become accustomed to while using Emacs on the Unix machines at work, like auto-indentation.

To squeeze every bit of performance from the Amiga he could, Daniel created his own text editor, FrexxEd, which was scriptable using a programming language he wrote called FPL, Frexx Programming Language. "It was very stupid," Daniel admits of FPL. "It was very C-like. It was more or less like interpreted C." But Daniel and a friend released FrexxEd as shareware and eventually had a few hundred paying users. "We had fun," he says.

In 1993, Daniel started working as a software developer. "I got a real programming gig," he says. His interest in the Amiga gave way to network programming for Unix.

## Early days of the internet: Building IRC bots

During his time at IBM, colleagues had introduced Daniel to Archie (a search engine that indexed FTP servers), Gopher (an early internet protocol that eventually lost to HTTP), and email.

When he started using IRC, Daniel realized the true power of the internet to connect people. Through his use of IRC, he saw how the network enabled collaboration, and witnessed the birth of the web with the release of the first web browsers.

IRC channels back then were susceptible to spam and griefing, which required the development of defense bots to manage channels. Daniel started helping friends with their IRC bots, which allowed him to gain experience with C on Unix.

"We were all enthusiasts," Daniel says of IRC in the 90s. It was "More open protocols, people running servers for the good of their heart, for the fun of it, because they could do it." But Daniel is not nostalgic for the early days of the internet. "It has mostly evolved to the better," he says. Commoditization and commercial backing eventually made the network accessible to all. "It's a necessary way to move forward."

One day, Daniel got it into his head to create a bot to do currency conversions for him. "I just need to download some currency rates every now and then, you know? And make the bot do that." He found an HTTP site hosting currencies and used an early search engine—"I guess I used AltaVista, I don't remember actually."—to find a tool his bot could use to download data over HTTP.

Daniel found httpget, a tiny tool that was first released in November 1996 by Brazilian developer Rafael Sagula: "300 lines of code, perfect." 

## The birth of curl

httpget "worked almost the way I wanted it to." Daniel says. "So, you know, I fixed it and sent an email back to the guy." Daniel made a few more small changes to httpget, emailing patches to Rafael as diff files each time.

After a few rounds of changes, Rafael suggested Daniel should maintain httpget. "So I became the maintainer of httpget in late 1996."

httpget quickly became a popular tool for downloading data over HTTP after Daniel added it to his web page, "And pretty soon people actually started to submit patches in the same style." Daniel started using version control—first RCS then VCS. "After a while, I found a currency site using Gopher, so I added Gopher support."

httpget now supported two protocols, "but then it couldn't be httpget anymore." So Daniel renamed the tool urlget and changed it "so that it actually worked on URLs, HTTP, and Gopher." By 1998, urlget supported FTP upload, "it wasn't GET anymore. It was doing PUT as well. So it couldn't be urlget."

In March 1998, Daniel renamed his tool again and the first version of curl was released.

When SourceForge was created in 1999, curl's popularity and contributions took off.

## curl vs. Wget

About two years after starting his work on curl, Daniel became aware of a similar project called Wget. Users often compare curl to Wget.

While there is some feature overlap, for instance, both can be used to download files over HTTP, Daniel points out that the projects focus on different problems.

curl's focus is on protocols, with support for over 27 different protocols today, while Wget supports only HTTP, HTTPS, and FTP.

Wget can interpret HTML and recursively download websites, whereas curl does not understand web content at all.

## Contributing to the evolution of web standards

When Daniel started working on httpget, he was unfamiliar with the HTTP specification. It was only when he wanted to expand curl's support for HTTP/1.1 that he realized he could read the specifications. "It took me a long time," he says, "until I actually realized that this is something I can have a say in."

Daniel was introduced to the Internet Engineering Task Force (IETF) and the HTTP Working Group (HTTPbis) and he joined the HTTPbis mailing list. "It was like a gold mine," he says. "I learned that I could also contribute and speak my mind" about how protocols are made.

Daniel continues to be an active member of the IETF. He contributed to the working groups for Speedy, which became HTTP/2, and QUIC, which is expected to become HTTP/3.

## Working at Mozilla

Daniel's day job had little overlap with his open-source work on curl. During the day, he worked "usually as a consultant doing embedded Linux systems", and he spent his free time working on curl.

At the end of 2013, Daniel was ending a project and he reached out to his community. "I asked, 'Is there anyone who has a new gig for me?' And I got an offer to start at Mozilla." He joined the networking team at Mozilla in 2014: "Now I could work with HTTP, networking, cookies, DNS, TCP, and all of that during day and during night, and actually had permission to do some curl stuff during work hours as well. So yeah, that was great. And everything was open source too. So that was really my first full-time open-source work. That was awesome."

The work involved all the things Daniel was familiar with from developing curl, but in a browser context. "It was quite a steep learning curve," he says. "It's messier, more threads, more objects, a lot more code, a lot more developers, a lot more bugs, a lot more complicated situations." But he learned a lot and met a lot of great people there.

Mozilla had around 20 million lines of code back then, "It's a tricky codebase to work with, to put it mildly." He recalls using Mozilla's [SearchFox](https://searchfox.org/) code-search engine, saying, "A good code-search tool is essential to finding your way around."

## Full-time curl

Daniel is still actively coding today, working on curl and doing commercial curl support full-time since 2019. "Mostly debugging," he says, "but I guess that's included in coding." He describes himself as a traditionalist when it comes to day-to-day developer tools. He prefers programming in C, using Make, Configure, GDB, Emacs, and terminals.

When it comes to Emacs, he prefers a mostly vanilla setup, to keep his editing experience portable across his many computers.

He recently shared his home office setup on Hacker Stations: [Daniel Stenberg and the home of curl in Stockholm, Sweden](https://hackerstations.com/setups/daniel_stenberg/). Considering how many machines he's using, we understand his need for portability.

## ELI5: What are the major changes between HTTP/1 and HTTP/2, and between HTTP/2 and HTTP/3?

Daniel explains that with HTTP/1, each request used a TCP connection, which does not work well for browsers that often download multiple files in parallel.

With HTTP/2, multiple requests can share the same connection. This improves latency and doesn't waste connections, but performs poorly over high-latency or lossy networks.

When one packet from one of up to a hundred HTTP/2 streams on a connection fails, all streams on the connection need to wait for the lost packet to be retransmitted. For lossy networks, HTTP/2 can perform worse than HTTP/1.

The development of HTTP/3 aims to address this issue, by using UDP instead of TCP, and adding a new transport layer called QUIC. Not to be confused with an earlier version invented by Google, IETF's QUIC is a TCP-like protocol implemented over UDP.

HTTP/3 is similar to HTTP/2 in that multiple requests or streams can share a single connection. But by using QUIC, failure is not as wide-reaching as in HTTP/2's TCP connections.

In QUIC, if a packet fails, only the stream that the packet is part of needs to wait for the failed packet. Other streams on the same connection can continue uninterrupted.

HTTP/3 is already supported by Google Chrome and Firefox, and will soon be added to Safari and Edge. Up to 25% of the web is already served over HTTP/3, including popular sites such as Google and Facebook, and big content delivery networks such as Cloudflare and Fastly.

Adding HTTP/3 support is a complex undertaking and is progressing well for curl, which supports HTTP/3 in recent builds.

## Get involved in cURL

curl is evolving and under active development, with new features constantly being added. As an open-source project, Daniel welcomes your collaboration.

### Contributing code or technical knowledge

Visit the cURL project website to [find out how you can help](https://curl.se/docs/help-us.html). 

### Donate to the cURL project

Even though the project is open-source, cURL still has expenses, including a paid bug-bounty program and annual conferences.

We encourage individuals and commercial users to [donate](https://curl.se/donation.html) to this active and impactful project.

### Commercial support

Daniel, through a company called wolfSSL, offers [commercial support](https://curl.se/support.html) for curl users. If you're considering using curl in critical applications or need help on specific aspects of curl, get support from the founder and maintainer himself.

### Join a live development stream or release presentation

To get a glimpse of how Daniel works, follow [curlhacker](https://www.twitch.tv/curlhacker) on Twitch, where he often live streams curl development, presents releases, and discusses curl-related topics. If you missed a stream, you can find recordings of past streams on [Daniel's YouTube channel](https://www.youtube.com/@DanielStenberg).

## Tour de Source: curl

[![Tour de Source: curl logo](https://i.ritzastatic.com/images/713b2a9632b946fd811c52ed349ec3e6/tour-de-source-curl.jpg)](https://sourcegraph.com/notebooks)

Follow along as we explore the curl codebase in our [Sourcegraph Tour de Source: curl](https://sourcegraph.com/notebooks) notebook.

## Further reading

- [cURL project](https://curl.se/): The cURL website.
- [@bagder@mastodon.social](https://mastodon.social/@bagder): Daniel's Mastodon profile.
- [@bagder](https://twitter.com/bagder): Daniel on Twitter.
- [curl in GitHub](https://github.com/curl/curl): The curl repository, issues, and discussions.
- [curl on Sourcegraph](https://sourcegraph.com/github.com/curl/curl): Explore the curl source on Sourcegraph.
- [Tour de Source: curl](https://sourcegraph.com/notebooks): Our deep dive into the curl code base.
