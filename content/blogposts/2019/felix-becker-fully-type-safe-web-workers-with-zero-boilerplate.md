---
title: Fully type-safe Web Workers with zero boilerplate
authors:
  - name: Felix Becker
    url: https://github.com/felixfbecker
publishDate: 2019-12-18T10:00-07:00
tags: [blog]
slug: felix-becker-fully-type-safe-web-workers-with-zero-boilerplate
description: 'TypeScript and ECMAScript have some of the most beautiful constructs and syntaxes to do parallel, non-blocking programming—but unfortunately, only for standard APIs like fetch in the browser or file IO in Node. When implementing anything CPU-bound in TypeScript, offloading it into a different, parallel execution context and exposing an equally type-safe and flexible API for it is non-trivial.'
heroImage: /blog/felix-avatar.jpg
published: true
---

<p style={{textAlign: 'center'}}>
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/sSkx5SVc2OA" frameBorder="0" allow="accelerometer; autoPlay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
</p>

TypeScript and ECMAScript have some of the most beautiful constructs and syntaxes to do parallel, non-blocking programming—but unfortunately, only for standard APIs like fetch in the browser or file IO in Node. When implementing anything CPU-bound in TypeScript, offloading it into a different, parallel execution context and exposing an equally type-safe and flexible API for it is non-trivial.

At the [2019 TSConf pre-meetup in Seattle](https://www.meetup.com/seattle-ts/events/264757065/), I presented the different options for implementing parallel APIs in userland, starting from any-typed message passing, to utilizing advanced TypeScript features such as mapped types, conditional types and function parameter tuple types to support remote procedure calls, fully-flexible property access, and live references to mutable objects.

After watching this talk, you'll have learned how to implement truly-parallel CPU-bound APIs in userland, and how to expose them to other threads, Node processes or even over the network in a fully type-safe manner, all with zero boilerplate code.
