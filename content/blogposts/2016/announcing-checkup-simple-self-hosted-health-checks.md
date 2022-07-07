---
title: 'Announcing Checkup: simple, self-hosted health checks'
authors:
  - name: Beyang Liu
    url: https://twitter.com/beyang
publishDate: 2016-06-08T11:31-07:00
tags: [
  "blog"
]
slug: announcing-checkup-simple-self-hosted-health-checks
heroImage: https://images.ctfassets.net/le3mxztn6yoo/5Ii4dXpUuAEKgG0oE0EmA8/fc1630a53930c3cee13dcb41d3a4c69e/0_AEcci4InW9CYuloX.jpg
published: true
---



Today, [Sourcegraph](https://sourcegraph.com/) is excited to announce [Checkup](https://sourcegraph.github.io/checkup), a simple tool that lets you easily create distributed, self-hosted health checks and status pages.

![0*bR4H1dPKkhf6T-hC](//images.contentful.com/le3mxztn6yoo/4jSGfFdxpSoQEC844kuOEG/40800810deee24a0b65adf6c0a3edd6c/0_bR4H1dPKkhf6T-hC.png)

The Checkup status page works out of the box

Monitoring uptime is a crucial part of running any web service. It lets you sleep well at night knowing that you’ll be notified if an outage occurs. There are many existing SaaS health check services that offer a range of features, but when we tried them at Sourcegraph, we found none that fully met our needs. Here were a few of the pain points:

*   **Clunky GUIs:** Most uptime services force you to define health checks using a GUI. We’ve found these are often clunky and slow. Ironically, one tool we used to ensure our page loads didn't exceed hundreds of milliseconds itself took 7+ seconds to load.
*   **You forget to update your health checks.** Someone changes a URL, deploys the change without updating the check, and the on-call engineer is paged that the site is down.
*   **Internal services:** You can’t use SaaS health checkers for internal services that aren’t accessible via the public Internet.
*   **Uptime services go down!** A lot of the newer offerings on the market experience downtime themselves and when they do, there's no record of what happened with your site during the outage.

### (╯°□°)╯︵ ┻━┻

At Sourcegraph, we grew tired of fighting our health checks to accomplish tasks we thought should have been straightforward. Why did we have to define our checks using a thick JavaScript web client or some clunky API? Why couldn’t they be defined in a simple config file and perhaps even versioned with the code itself?

We talked to [Matt Holt](https://twitter.com/mholt6), creator of the [Caddy web server](https://caddyserver.com), and found we weren't alone. So we decided to sponsor Matt to create a tool that would do health checks the way we thought they should be done as developers.

### Health checks should be as easy as unit tests

Health checks should be as easy to create and maintain as unit tests. We wanted an interface that lets you easily say, “Here are a bunch of URLs I want to test. Here’s the expected behavior for each.” It seemed to us that the best interface for declaring these was not a GUI that forced you to point and click, but a config file. Here’s an example **checkup.json**:

```json
{
     "checkers": [{
         "type": "http",
         "endpoint_name": "Website",
         "endpoint_url": "https://sourcegraph.com",
         "attempts": 5
     }],
     "storage": {
         "provider": "s3",
         "access_key_id": "&lt;yours&gt;",
         "secret_access_key": "&lt;yours&gt;",
         "bucket": "&lt;yours&gt;"
     }
}
```

You simply specify a list of endpoints in JSON and provide Checkup access to an S3 bucket. (Checkup can automatically provision this for you if you’re not familiar with the AWS control panel.)

Then all you need to do to check the health of your endpoints is run

```shell
**$ checkup**
== Website - https://sourcegraph.com
  Threshold: 0
        Max: 136.296933ms
        Min: 37.716659ms
     Median: 51.626374ms
       Mean: 65.212206ms
        All: [{54.489828ms } {45.93124ms } {51.626374ms } {136.296933ms } {37.716659ms }]
 Assessment: healthy
 ```

You can have Checkup upload this data to your S3 bucket with

```shell
$ checkup --store
```

or have it run every 10 minutes with

```shell
$ checkup every 10m
^C
```

And with Checkup and Caddy, you get a nice, simple status page like the one above that works out of the box and pulls data live from your S3 bucket.

### Health checks everywhere

![0*AEcci4InW9CYuloX](//images.contentful.com/le3mxztn6yoo/5Ii4dXpUuAEKgG0oE0EmA8/fc1630a53930c3cee13dcb41d3a4c69e/0_AEcci4InW9CYuloX.jpg)

Because running your health checks is just a simple terminal command, you can now run them in development and CI — just like unit tests. Oftentimes, endpoints fail simply because someone on the team pushed a bug. Now you can use your health checks to catch these errors in the testing phase.

To get geographically distributed checks, you simply run Checkup from multiple AWS regions. Checkup works smoothly on the cheapest EC2 micro instances. Checkup can easily be extended to work with other cloud computing providers or even custom storage services your company uses internally. The [code is open source](https://sourcegraph.com/github.com/sourcegraph/checkup/-/def/GoPackage/github.com/sourcegraph/checkup/-/Checkup), [well-documented](https://godoc.org/github.com/sourcegraph/checkup), and [pull requests are welcome](https://github.com/sourcegraph/checkup).

We’re releasing [Checkup](https://sourcegraph.github.io/checkup/), because we think it will save a lot of time and frustration for many engineers. We hope others will find it useful and extend it so that together we can make uptime monitoring simpler and more hassle-free. [Try it out](https://github.com/sourcegraph/checkup/releases) and [let us know what you think](https://twitter.com/sourcegraph)!

### About the author

_Beyang Liu is the CTO and co-founder of Sourcegraph. Beyang studied Computer Science at Stanford, where he published research in probabilistic graphical models and computer vision at the Stanford AI Lab. You can chat with Beyang on Twitter [@beyang](https://twitter.com/beyang) or our community [Discord](https://discord.com/invite/vqsBW8m5Y8)._
