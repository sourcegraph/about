---
title: 'Interact with Sourcegraph from the command line faster with Fig'
description: "Sourcegraph teamed up with Fig to enhance 'src' the CLI that allows you to search code and more from your terminal."
authors:
  - name: Justin Dorfman
    url: https://twitter.com/jdorfman
publishDate: 2022-04-21T11:25-07:00
tags: [blog]
slug: why-fig-autocomplete-is-awesome
heroImage:
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/042222-fig-blog-post-social-og.png
published: true
---

![](https://storage.googleapis.com/sourcegraph-assets/blog/042122-fig-blog-post-screenshot-transparent-updated.png)

We are really excited to announce our latest [integration with Fig](https://fig.io/manual/src)! For those of you who don't know about Fig, it is a tool that adds IDE-style autocomplete to your existing terminal (currently on macOS.)

When I was onboarding at Sourcegraph one of my todos was to install and learn how to use `src`, a [command-line interface to Sourcegraph](https://docs.sourcegraph.com/cli). The installation was straightforward, but I couldn't remember all of the different subcommands so I found myself typing `src --help` and [hitting the up arrow](https://www.commitstrip.com/en/2017/02/28/definitely-not-lazy/?) a lot.

Then I remembered Zeno Rocha [tweeting about Fig](https://twitter.com/zenorocha/status/1432709006854869002) and I thought this might be a good opportunity to write an integration. After demoing the proof of concept to my team I got a lot of great feedback and decided to make a [pull request](https://github.com/withfig/autocomplete/pull/1081) to Fig on GitHub.

## Let's see this in action!

I'm in the process of creating a budget for sponsoring the dependencies that Sourcegraph uses via Open Collective. Here is a real-world example of how I accomplish that.

<div style={{position: 'relative', paddingBottom: '51.13908872901679%', height: 0}}>
    <iframe
        src="https://www.loom.com/embed/46094880c87844958d74ef28b1d76719"
        frameBorder="0"
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen
        style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>
    </iframe>
</div>

### Want to try it out?

We got you covered. Install `src` (no login required):

```shell
# via Curl
curl -L https://sourcegraph.com/.api/src-cli/src_darwin_amd64 -o /usr/local/bin/src
chmod +x /usr/local/bin/src

# via Brew
brew install sourcegraph/src-cli/src-cli
```

Next, [download Fig](https://fig.io/invite/?code=DQnRfmaxLn) and open/restart your terminal.

Then type `src` and you should see an IDE-style autocomplete with subcommands and options.

Let us know what you think on [Twitter](https://twitter.com/intent/tweet?url=https%3A%2F%2Fabout.sourcegraph.com%2Fblog%2Fwhy-fig-autocomplete-is-awesome%2F&text=See%20why%20@sourcegraph%20thinks%20@fig%20is%20awesome%21) or our [Community Slack](https://srcgr.ph/jd-sourcegraph-slack-invite).

Last but not least, a huge thanks to the Fig team ◧ especially [Federico Ciardi](https://twitter.com/fedeci_) for their help. We look forward to working together again!

---

_Thanks to the following people for helping with this post: Rebecca Dodd, Eric Fritz, and Stephen Gutekanst._

#### About the author

Justin Dorfman is Sourcegraph's Open Source Program Manager and is responsible for
fostering the adoption of code intelligence in the open source community. You can chat with Justin on Twitter [@jdorfman](https://twitter.com/jdorfman) or our community [Discord](https://discord.com/invite/vqsBW8m5Y8)

### More posts like this

- [No Secrets! Quickly find sensitive files in your GitHub repo](https://about.sourcegraph.com/blog/no-more-secrets)
