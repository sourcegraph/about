---
title: 'Planned unavailability of Java and PHP language servers on Sourcegraph.com'
authors:
  - name: Quinn Slack
    url: https://twitter.com/sqs
publishDate: 2018-11-29T12:00-07:00
tags: [
  "blog"
]
slug: java-php-experimental_language_servers-temporarily-unavailable
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png
published: true
---

Code intelligence for Java and PHP (and other experimental languages) will be temporarily unavailable for public code on [Sourcegraph.com](https://sourcegraph.com) starting Friday, November 30, as we transition to a new, more extensible way of adding language support using [Sourcegraph extensions](https://docs.sourcegraph.com/).

**Only public code on Sourcegraph.com is affected; self-hosted instances of Sourcegraph are not affected.** In addition to Java and PHP, the affected experimental languages are Bash, Clojure, C++, C#, Ruby, Lua, OCaml, Rust, and R.

Go, TypeScript/JavaScript, and Python continue to work and are not affected. In fact, those languages now have better, faster support because they use the new architecture.

We will also enable [basic code intelligence](https://sourcegraph.com/extensions/sourcegraph/basic-code-intel) on Sourcegraph.com, which provides best-effort (heuristic- and parser-based) code intelligence for all languages. To use it, [enable the extension](https://sourcegraph.com/extensions/sourcegraph/basic-code-intel), select **Fuzzy** (not **Precise**) in the file header, and then hover on a token to go to definition or find references.

### Why are these languages being temporarily removed from Sourcegraph.com?

Temporarily removing these languages lets us fully switch over to the new [Sourcegraph extension-based](https://docs.sourcegraph.com/extensions) architecture for language support. The new scheme makes it much easier for us (and others) to add more and better language support using [existing language servers](https://langserver.org/).

We apologize to users who used code intelligence for the affected languages on Sourcegraph.com for open source code, and we commit to bringing them back better than before. Because [Sourcegraph is open source](https://github.com/sourcegraph/sourcegraph) and you can run your own self-hosted Sourcegraph instance, there is a free and open source workaround to still get support for these languages.

### How do I get code intelligence for the affected languages?

The [basic code intelligence](https://sourcegraph.com/extensions/sourcegraph/basic-code-intel) extension may suffice for your needs. You can enable it and use it on Sourcegraph.com for all languages.

Otherwise, you can [run a self-hosted instance of Sourcegraph 2.13](https://docs.sourcegraph.com/#quickstart) to get language support for the removed languages. You'll just need to add repositories to your instance and ensure it is running the language servers for your desired languages. To get code intelligence on your code host (e.g., GitHub), connect your [Sourcegraph browser extension](https://docs.sourcegraph.com/integration/browser_extension) to your Sourcegraph instance.

### When will these languages be re-added to Sourcegraph.com?

In the coming weeks and months, depending on the language. Our top priorities are Java and PHP (as well as introducing Swift support).

See the [Sourcegraph roadmap](https://handbook.sourcegraph.com/direction) for a timeline of when these languages will be added back. If you don't see a language listed yet, we don't have a date to re-add it. If you'd like to contribute language support, let us know. We are [hiring software engineers](https://github.com/sourcegraph/careers), or we can sponsor you as a part-time contributor.

### About the author

_Quinn Slack is the CEO and co-founder of Sourcegraph, the code intelligence platform for dev teams and making coding more accessible to more people. Prior to Sourcegraph, Quinn co-founded Blend Labs, an enterprise technology company dedicated to improving home lending and was an egineer at Palantir, where he created a technology platform to help two of the top five U.S. banks recover from the housing crisis. Quinn has a BS in Computer Science from Stanford, you can chat with him on Twitter [@sqs](https://twitter.com/sqs)._
