---
title: 'No Secrets: Quickly Find Sensitive Files in your GitHub Repo'
description: "With the growing volume of secrets ending up in public GitHub repositories, we tried to think of an easy, frictionless way to give developers who use GitHub peace of mind."
author: Justin Dorfman
authorUrl: https://twitter.com/jdorfman
publishDate: 2022-05-24T11:25-07:00
tags: [blog]
slug: shush-no-secrets
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/blog-no-secrets.jpg
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/blog-no-secrets.jpg
published: true
---

A[ 2021 GitGuardian report](https://res.cloudinary.com/da8kiytlc/image/upload/v1615208698/StateofSecretSprawlReport-2021.pdf) found that over two million secrets were detected in public GitHub repositories and the amount of publicly available secrets is growing 20% year over year.

Code security is one of many [use cases](https://about.sourcegraph.com/use-cases) Sourcegraph helps organizations with. We have [written about eliminating secrets](https://about.sourcegraph.com/blog/eliminate-secrets-from-codebase-with-universal-code-search/) (API keys, private keys, etc) from codebases in the past but after reading the above report, we decided it was time to revisit the topic–this time, with a new tool. 

With the growing volume of secrets ending up in public GitHub repositories, we tried to think of an easy, frictionless way to give developers who use GitHub peace of mind. That is why we created [No Secrets!](http://no-secrets.io/)

No Secrets! is a bookmarklet that works on any modern browser. Once installed (button dragged to bookmarks bar), you can go to any public GitHub repository and click “🤫 No Secrets!” which will load the Sourcegraph search console and find all types of secrets ranging from the AWS API to YouTube’s OAuth credentials. You can then edit that search to create your own custom console search.

<div style={{position: 'relative', paddingBottom: '51.13908872901679%', height: 0}}>
    <iframe
        src="https://www.loom.com/embed/2661d749bc8e4e7f9321cb62b284c541"
        frameborder="0"
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen
        style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>
    </iframe>
</div>

##

No Secrets! is a great way to get started but to truly protect your secrets, you need to automate this process. There are a number of [different apps](https://github.com/marketplace?type=&verification=&query=secrets+) in the GitHub marketplace that will help. We use [Code monitoring](https://docs.sourcegraph.com/code_monitoring) because we love to dog food. Here are some triggers you can set up to send an email, Slack message, or call a webhoook:

* [AWS API Key](https://sourcegraph.com/code-monitoring/new?trigger-query=%28%28%3F%3AA3T%5BA-Z0-9%5D%7CAKIA%7CAGPA%7CAIDA%7CAROA%7CAIPA%7CANPA%7CANVA%7CASIA%29%5BA-Z0-9%5D%7B16%7D%29+type%3Adiff+select%3Acommit.diff.added+patternType%3Aregexp+repo%3A&description=No+Secrets%21+-+AWS+API+Key)
* [GCP API Key](https://sourcegraph.com/code-monitoring/new?trigger-query=AIza%5B0-9A-Za-z%5C%5C-_%5D%7B35%7D+type%3Adiff+select%3Acommit.diff.added+patternType%3Aregexp+repo%3A&description=No+Secrets%21+-+GCP+API+Key)
* [Mailgun API Key](https://sourcegraph.com/code-monitoring/new?trigger-query=key-%5B0-9a-zA-Z%5D%7B32%7D+type%3Adiff+select%3Acommit.diff.added+patternType%3Aregexp+repo%3A&description=No+Secrets%21+-+Mailgun+API+Key)
* [RSA Private Key](https://sourcegraph.com/code-monitoring/new?trigger-query=-----BEGIN+RSA+PRIVATE+KEY-----+type%3Adiff+select%3Acommit.diff.added+patternType%3Aregexp+repo%3A&description=No+Secrets%21+-+RSA+Private+Key)
* [Stripe API Key](https://sourcegraph.com/code-monitoring/new?trigger-query=sk_live_%5B0-9a-zA-Z%5D%7B24%7D+type%3Adiff+select%3Acommit.diff.added+patternType%3Aregexp+repo%3A&description=No+Secrets%21+-+Stripe+API+Key)
* [Twitter Bearer Token](https://sourcegraph.com/code-monitoring/new?trigger-query=A%7B22%7D%5B0-9a-zA-Z%5D.%7B89%7D+type%3Adiff+select%3Acommit.diff.added+patternType%3Aregexp+repo%3A&description=No+Secrets%21+-+Twitter+Bearer+Token)
* [YouTube OAuth](https://sourcegraph.com/code-monitoring/new?trigger-query=%5B0-9%5D%2B-%5B0-9A-Za-z_%5D%7B32%7D%5C%5C.apps%5C%5C.googleusercontent%5C%5C.com+type%3Adiff+select%3Acommit.diff.added+patternType%3Aregexp+repo%3A&description=No+Secrets%21+-+YouTube+OAuth)

[GitHub scans repositories](https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning) for known types of secrets to prevent fraudulent use of secrets that were committed accidentally but they are limited to services they have [partnered with](https://docs.github.com/en/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-partner-patterns). No Secrets! is [open source](https://github.com/sourcegraph-community/no-secrets) so feel free to add any patterns (in regex syntax) to the [search console query](https://github.com/sourcegraph-community/no-secrets/blob/main/sourcegraph-console-query.txt).

🍻 Cheers to no more secrets in your public repositories! Join the discussion on Hacker News.

_Thanks to the following people for helping with this post: Beyang Liu, André Eleuterio, and Nick Moore._
