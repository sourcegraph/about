---
title: 'How to make your open source project thrive'
authors:
  - name: Andrey Petrov
publishDate: 2016-06-21T00:00-07:00
tags: [
  "blog"
]
slug: how-to-make-your-open-source-project-thrive-with-andrey-petrov
description: 'How do you make your open-source project stand out?'
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png
published: true
---



_Andrey Petrov (_[_@shazow_](https://twitter.com/shazow)_) spoke at the_ [_Sourcegraph_](https://sourcegraph.com) _office about lessons learned from his successes and “many failures” (his phrase) creating open source projects. Andrey is author of the popular_ [_urllib3_](https://github.com/shazow/urllib3) _library (_[_explore urllib3 on Sourcegraph_](https://sourcegraph.com/github.com/shazow/urllib3/-/def/PipPackage/urllib3/-/urllib3/connection.py/connection.HTTPSConnection.HTTPSConnection)_) and several other popular open source libraries. During the day, he works at Briefmetrics and he’s also a YC alum, ex-Googler, and a cat person. He writes mostly in Python, JavaScript, and Go._

There are many benefits to open-sourcing your code. Here are just a few:

*   It’s a good way to get free, replicated backups of your code.
*   It makes it easy to link to and ask for help.
*   It helps give you a bigger footprint of influence in the programming world.
*   It lets you get the most out of sunk costs.

you've invested a lot of time and effort into your code. Open-sourcing it makes it available and reusable. Employees come and go, as do companies, but open source code will always be available to you and others who find it useful.

Open-sourcing has many benefits, but there's a lot of open source code out there already. How do you make your project stand out? Here’s Andrey’s 4 steps you can use to build great open source software.

**_Read on for more, or watch the video and slides._**

<iframe width="854" height="480" src="https://www.youtube-nocookie.com/embed/ScUIlbHnxGI"frameBorder="0"allowFullScreen></iframe>

<script async className="speakerdeck-embed" data-id="0afd670b6a6b4f3fb8ed1d4897892084" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>

### Step 1: Define what success looks like

Andrey is the creator of [urllib3](https://github.com/shazow/urllib3), a HTTP library written in Python that is used by millions of people everyday, has 785 stars on GitHub, and has been growing since its creation in 2008\. Andrey has another project, [ssh-chat](https://github.com/shazow/ssh-chat), that has 1560 stars on GitHub, but is only used by ~15 people today. So which project is more “successful?” In order to answer that question, Andrey described how defining success at the beginning of project will help you understand if it’s successful or not.

The beginning of every open source project looks like this:

1.  Build something. Anything.
2.  Get frustrated with the hardest parts, build libraries and tools to help.
3.  Discard the original project to focus on the libraries, which become your new project.
4.  Go back to step 2 and repeat.

The story of [urllib3](https://github.com/shazow/urllib3) begins with the problem of trying to upload billions of images to S3 in 2008\. Using existing Python libraries, this would have taken 3+ weeks because there was no good concurrency support. You could use s3funnel, a multithreaded S3 client, but managing threads is painful. You could use a worker pool in s3funnel, instead, but existing HTTP libraries didn't re-use connections and most solutions weren't threadsafe or lacked multipart (filepost) encoding. Enter [urllib3](https://github.com/shazow/urllib3).

In Andrey’s words, “The solution space [in engineering] is about building something and solving a problem. For [urllib3](https://github.com/shazow/urllib3), the space was really small and the solution to other things were really useful, and that’s what made it successful.”

**When defining a project’s goals, think about how solving a small problem can make a large impact.**

Another form of “success” in open source is exemplified by ssh-chat, an encrypted chat-over-SSH program written in Go. Andrey started ssh-chat as a weekend project. One of the main factors in the project’s success was having a thorough README from the start. As Andrey puts it, “Having a great README is basically 80% of the work to success. You need to be able to answer three questions for your contributors: who else uses it, for what, and where I can get more help?”

But obviously, just creating an awesome README wasn’t enough to ensure the impressive growth of ssh-chat. To make it thrive, it needed more traction.

### Step 2: Recruit core contributors

“If you build it… they may not come” should be the rallying cry of all open source work. As proof of this, Andrey embedded a bounty in the code of one of his projects, promising $5 to anyone who issued a simple pull request to remove the file. As of today, no one has yet claimed the free money.

![0*gLB0yzcjNA08AoiQ](//images.contentful.com/le3mxztn6yoo/6lX1TqXVPUY6Cy88CAQa0K/1f8a22a2601ed6a14c34d6d4d8324507/0_gLB0yzcjNA08AoiQ.png)

To spread the word about ssh-chat, Andrey started asking for help, asking for improvements, and finding ways to bring more people into the project. In order to help build interest, Andrey reached out to people on Twitter and offered free Go programming lessons in exchange for opening pull requests. This overcame the initial inertia of getting a few people involved and interested in the project. These early contributors eventually became champions of ssh-chat and started answering questions on Stack Overflow.

Another component of building and maintaining open source projects is learning to be inclusive. “Accepting pull requests very generously and very graciously” was a key step toward building more community interest and is something that many open source authors miss in the beginning. And asking specific people to make a pull request was much more effective than making more generalized asks of his Twitter followers.

### Step 3: Market and promote your project

In general, programmers tend not to be self-promoting types, so actively marketing and promoting an open source project doesn’t come naturally. With this in mind, Andrey identified ways that programmers can promote their projects without being self-aggrandizing.

One approach is to write interesting blog posts about your projects to provide clearer context of the project’s story and mission. [Medium](http://medium.com/) is a great platform for sharing in the technology community and has more potential readers than a self-hosted blog.

Other opportunities for connecting with contributors that worked for urllib3 and ssh-chat included:

1.  Answer questions on Stack Overflow (set up alerts on Stack Overflow for specific topics)
2.  Participate in discussions on [Hacker News](https://news.ycombinator.com), [reddit.com/r/programming](https://www.reddit.com/r/programming/), etc.
3.  Sell to other open source projects and establish partnerships with them. “The only reason urllib3 is the most popular third-party Python library today is because it’s part of [requests](https://github.com/kennethreitz/requests).”
4.  Feed the non-trolls: Getting upvotes on your announcement post is only half the equation. More activity and discussion yields more people clicking on it and more updates, so if you respond to almost every comment, then that’s 2x as many comments. Think about it — would you be more inclined to click a link with just 1 comment or 7 comments?

![0*c98pWcp-MOm0xUNv](//images.contentful.com/le3mxztn6yoo/65KBxv9fDGaUi0y4wKkwCm/81e60e74f9fc70e7094e266f3c986b9f/0_c98pWcp-MOm0xUNv.png)

### Step 4: Profit?

“We want to be like Docker!” is a common refrain you hear nowadays. Well don’t we all?

Two things helped Docker develop into a widely adopted open source project:

1.  It’s very well funded.
2.  It has thousands of contributors helping for free.

One of the key insights behind Docker’s success is that they didn't over-focus on the business model until the OSS project was insanely popular. So how can you replicate this? Enter the “corp’en source model” — where en source work becomes the core competency and business of a corporation.

**The Corp’en source model**

Some of the most well-known companies that embrace corp-en source include:

1.  Docker (via an open core)
2.  Gratipay (via dogfooding their own product to receive revenue)
3.  NGINX (via consulting and support)
4.  Mozilla (via advertising)
5.  GnuPG (via charity and grants)

**So how do you monetize your contributions as a free agent?**

Well, you don’t. Not directly, at least.

Despite widespread adoption of urllib3, Andrey shared that he only received $5 from a single user (which he appreciates!), proving that widespread adoption of a project does not necessarily provide a sustainable revenue model to justify the time and effort.

Some companies, like Stripe and Sourcegraph are sponsoring open source work.

*   [Stripe’s open source retreat](https://medium.com/@shazow/urllib3-stripe-and-open source-grants-edb9c0e46e82)
*   [Sourcegraph’s](https://sourcegraph.com) open source fellowships

### Open source: just do it and do it right

Open source is incredibly valuable and rewarding, but to do it successfully, you gotta hustle.

In this case, much of the work that went into building urlib3 meant focusing on a small, but common challenge, writing a great README, reaching out to people to contribute, and promoting the project through blog posts. It’s also worth mentioning that it took some time for each of these projects to gain traction and Andrey’s commitment to improving the project over time helped build his reputation and respect within the programming community.

In short, here’s how to make an open source project thrive:

1.  Define a small solution space that affects a lot of people.
2.  Write a great README and recruit people who can and will help build it with you.
3.  Market and promote the project with blog posts and social media activity.
4.  Identify and reach out to companies who will benefit from your work.

**_For more from Andrey, follow him_** [**_@shazow_**](http://twitter.com/shazow) **_on Twitter or check out his GitHub profile_** [**_shazow_**](https://github.com/shazow)**_, and be sure to check out his awesome projects,_** [**_urllib3_**](https://github.com/shazow/urllib3) **_and_** [**_ssh-chat_**](https://github.com/shazow/ssh-chat)**_._**

**_Special thanks to Andrey and his wife,_** [**_Tracy Osbor_**](http://www.limedaring.com/)**_n, for making the long drive to give this talk! Check out Tracy’s book on Django development,_** [**_Hello Web App_**](https://hellowebapp.com/)**_._**
