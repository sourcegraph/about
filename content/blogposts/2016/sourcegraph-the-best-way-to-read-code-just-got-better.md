---
title: 'Sourcegraph: the best way to read code just got better'
authors:
  - name: Quinn Slack
    url: https://twitter.com/sqs
publishDate: 2016-10-04T00:00-07:00
tags: [
  "blog"
]
slug: sourcegraph-the-best-way-to-read-code-just-got-better
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png
published: true
---



Today, we’re announcing a new edition of [Sourcegraph](https://sourcegraph.com) that makes it even faster and easier to answer your everyday programming questions. If you code in Go, [check it out now](https://sourcegraph.com/github.com/golang/go/-/blob/src/net/http/request.go#L690). If you use another language, [sign up for the beta](https://sourcegraph.com/beta) — we’ll have news for you in the next couple of weeks!

If you’re new to Sourcegraph, you can think of it as an online code browser that feels like your favorite IDE. But instead of your local workspace, we’ve already indexed all the Go code in the world. It makes figuring out how to use libraries and understanding existing code a breeze. Here’s what some well-known members of the Go open source community are saying:

> “Sourcegraph is so intuitive that you soon forget you have it, but so useful that if you use GitHub without it, it just feels like all your favorite features are missing.” — [**Francesc Campoy**](https://twitter.com/francesc), [developer advocate](https://talks.golang.org/2016/state-of-go.slide#1) on the Go core team

> “I use Sourcegraph to become more familiar and productive with new libraries really fast. It makes reading code a breeze.” — [**Matt Holt**](https://twitter.com/mholt6), author of the popular [Caddy web server](https://caddyserver.com/)

> “Sourcegraph’s Chrome extension has become indispensable for browsing open source code.” — [**Alan Shreve**](https://twitter.com/inconshreveable), creator of [ngrok](https://ngrok.com/) and [equinox.io](https://equinox.io/)

And today, it gets even better.

[![](https://cdn-images-1.medium.com/max/1000/1*2z6i2J80rgW2he1LkNECBg.png)](https://sourcegraph.com/github.com/golang/go/-/blob/src/net/http/request.go#L690)The new Sourcegraph looks fast and is fast.

We’ve listened to the feedback of thousands of developers using Sourcegraph for both open source and private code. Sourcegraph is now smarter, faster, and re-designed from the ground up to address the most common pains of reading and understanding code. How exactly?

*   **Fast code browsing**: Jump-to-def, find-refs, and symbol search are now super fast and reliable—still without any configuration required.
*   **A redesigned UI** targets the most common tasks and puts every function, class, and important variable just a few keystrokes away.
*   **It _just works_** on a lot more repositories, public and private, which means you won’t have to fall back to context-switching to other tools.

All these features are live now, so [go check it out](https://sourcegraph.com). If you use a language other than Go, [stay tuned](https://sourcegraph.com/beta) — we’ll have some news for you in the next couple of weeks.

### Faster and easier to use than ever before

Here’s the whirlwind tour of usability and performance improvements that we’re shipping today.

Jumping to definition used to take a second or longer. Now it feels almost instant, even if the definition lives in another repository. And if you want to view the def without losing your place in the current file, you can sneak a peek:

[![](https://cdn-images-1.medium.com/max/1000/1*YKL6ATBcOKIDiXYUsUdGEQ.png)](https://sourcegraph.com/github.com/golang/go/-/blob/src/net/http/request.go#L690)Jump to (or peek at) a definition.

Mouse-over tooltips are a lot speedier, too. Hover over any token for additional context like type signatures and docs.

[![](https://cdn-images-1.medium.com/max/1000/1*Vk6X1iUny_jkuspHJNkiAw.png)](https://sourcegraph.com/github.com/golang/go/-/blob/src/net/http/request.go#L690)Hover over for context.

If you want to see how something is used, you can quickly find and flip through all references. The interface is quick and clean:

[![](https://cdn-images-1.medium.com/max/1000/1*e31UMNeXH2iZjneS2bbUkg.png)](https://sourcegraph.com/github.com/golang/go/-/blob/src/net/http/request.go#L690)Find refs.

There's a new quick-launch bar that lets you jump to any symbol or file faster than you can say “global graph of code.” Activate it by clicking “Search” in the upper-right corner or just by typing “/” on any page.

![1*kqiD7GzlN5OIrZpjYvNiEQ](//images.contentful.com/le3mxztn6yoo/5gZ2HHuMMMuKgO0muUoWE2/dace479f83af5083e4cd5d8ac1e026ad/1_kqiD7GzlN5OIrZpjYvNiEQ.png)

Jump to any symbol or file. Activate it with the “/” hotkey.

The same quick-launch bar lets you jump to any repository, so you can quickly hop across different codebases. This is perfect for teams that version microservices in separate repositories or depend on a lot of open source libraries.

![1*wpxr W1t4Sc9bypF0nr6yg](//images.contentful.com/le3mxztn6yoo/6wM2TW2kRa6SUSmouqgk86/0750c5b9ada72248f3171d40d8fc26a3/1_wpxr_W1t4Sc9bypF0nr6yg.png)

Jump to any repository. Activate it with the “/” hotkey."

You can [sign up and auth your private code](https://sourcegraph.com/join) or try it out on any of these open source repositories:

*   [Go standard library](https://sourcegraph.com/github.com/golang/go/-/blob/src/fmt/print.go#L189)
*   [Docker](https://sourcegraph.com/github.com/docker/docker/-/blob/cmd/docker/docker.go#L68): the open source container engine
*   [Caddy web server](https://sourcegraph.com/github.com/mholt/caddy/-/blob/caddy.go#L773:6): HTTP/2 web server with automatic HTTPS
*   [Gogs](https://sourcegraph.com/github.com/gogits/gogs/-/blob/models/repo.go#L153:6): open source Git repository host
*   [Syncthing](https://sourcegraph.com/github.com/syncthing/syncthing/-/blob/cmd/syncthing/main.go#L283): continuous file synchronization
*   [Grafana](https://sourcegraph.com/github.com/grafana/grafana/-/blob/pkg/cmd/grafana-cli/main.go): gorgeous metric vizualizations and dashboards
*   [Hugo](https://sourcegraph.com/github.com/spf13/hugo/-/blob/main.go#L24): fast and flexible static site generator
*   [etcd](https://sourcegraph.com/github.com/coreos/etcd/-/blob/etcdserver/v3_server.go#L145): distributed, reliable key-value store
*   [InfluxDB](https://sourcegraph.com/github.com/influxdata/influxdb/-/blob/cmd/influx/main.go#L36): timeseries database
*   [Cayley](https://sourcegraph.com/github.com/cayleygraph/cayley/-/blob/cmd/cayley/cayley.go#L155): graph database based on Google’s Knowledge Graph
*   [Drone CI](https://sourcegraph.com/github.com/drone/drone/-/blob/client/client.go#L11): open source CI platform

### Save time, code more

Thank you to all the members of the Go community who’ve supported us along the way with feedback, bug reports, and word-of-mouth evangelism.

Whether you’re new to Sourcegraph or are among the tens of thousands of programmers who already use it, this new edition will let you spend less time making sense of code and more time writing it. [So check it out now](https://sourcegraph.com/github.com/golang/go/-/blob/src/bytes/buffer.go#L17) and [let us know what you think](https://twitter.com/sourcegraph)!

[![](https://cdn-images-1.medium.com/max/800/1*Hw9u6TmGEpKxyBW_WApmrw.png)](https://sourcegraph.com)

### About the author

_Quinn Slack is the CEO and co-founder of Sourcegraph, the code intelligence platform for dev teams and making coding more accessible to more people. Prior to Sourcegraph, Quinn co-founded Blend Labs, an enterprise technology company dedicated to improving home lending and was an egineer at Palantir, where he created a technology platform to help two of the top five U.S. banks recover from the housing crisis. Quinn has a BS in Computer Science from Stanford, you can chat with him on Twitter [@sqs](https://twitter.com/sqs)._
