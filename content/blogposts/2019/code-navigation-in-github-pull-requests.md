---
title: Code navigation in GitHub pull requests
authors:
  - name: Quinn Slack
    url: https://twitter.com/sqs
publishDate: 2019-12-09T10:00-08:00
tags: [blog]
slug: code-navigation-in-github-pull-requests
heroImage: https://sourcegraphstatic.com/code-navigation-in-github-pull-requests-typescript-hover-hero.png
published: true
---

Code navigation helps you review code in GitHub pull requests more quickly and effectively.

- **Hovers** show you documentation and type information for symbols.
- **Go to definition** jumps you to where a function (or other symbol) is defined.
- **Find references** lists everywhere a function (or other symbol) is called or used.

Here's what it looks like:

<Figure 
   src="https://sourcegraphstatic.com/code-navigation-in-github-pull-requests-typescript-hover.png" 
   alt="GitHub pull request demonstrating code navigation to help review code."
/>

How does it help? Suppose you're reviewing a pull request that calls a function you don't recognize. You'll be able to quickly answer:

- What does the function do, and are the arguments correct? Hover over it to see its documentation and signature.
- Does the function expect its inputs to be sanitized? Go to its definition and find out by reading the source code.
- Are we already calling this function? If so, are there any helper functions we could reuse? Any usage patterns we should follow for consistency? Find references to the function to get these answers.

## Set it up

You'll need to use Sourcegraph because [GitHub's code navigation](https://help.github.com/en/github/managing-files-in-a-repository/navigating-code-on-github) doesn't work in pull requests. GitHub has no public plans to add support, but if it does, switching should be easy because Sourcegraph's underlying [code intelligence](https://docs.sourcegraph.com/code_intelligence) for [20+ languages](https://sourcegraph.com/extensions?query=category%3A%22Programming+languages%22) is open source, uses open standards (including Microsoft's LSP and [LSIF](https://docs.sourcegraph.com/code_intelligence/explanations/precise_code_intelligence)), and is [vendor neutral](https://about.gitlab.com/blog/2019/11/12/sourcegraph-code-intelligence-integration-for-gitlab/).

#### First: try it on a public repository (~1min)

1. Install the [Sourcegraph browser extension](https://docs.sourcegraph.com/integration/browser_extension).
1. Visit a pull request in any public repository, such as:
   - [dgrijalva/jwt-go#152 (Go)](https://github.com/dgrijalva/jwt-go/pull/152/files#diff-f615844d3497ff38db57e459d6ef657bL48)
   - [sindresorhus/got#917 (TypeScript)](https://github.com/sindresorhus/got/pull/917/files#diff-02301bc46e8b878f10e9a8339efb7de7R176)
   - [paiden/Nett#76 (C#)](https://github.com/paiden/Nett/pull/76/files#diff-e969e1315b2cb01bab80b2860be0d87eR52)
1. Hover over a symbol in the pull request and press **Go to definition** or **Find references**.

#### Next: set it up for private code (~10min)

Next, run a Sourcegraph server yourself to use code navigation for your organization's private code (without sending any code to Sourcegraph).

1. Follow the [Sourcegraph `docker run` quickstart guide](http://docs.sourcegraph.com/#quickstart) and add a GitHub external service with your private repositories.
1. In your browser toolbar, open the Sourcegraph options menu by pressing the Sourcegraph icon (<img src="https://about.sourcegraph.com/sourcegraph-mark.png" width="28" height="28" style={{border: 0}} alt="Sourcegraph icon" />) and set the **Sourcegraph URL** to `http://localhost:7080` (the URL of your Sourcegraph instance).
1. Visit a code file or pull request in a GitHub private repository.
   - Using GitHub Enterprise Server? You'll need to [grant permissions on its domain](https://docs.sourcegraph.com/integration/github#browser-extension).
1. Hover over a symbol and press **Go to definition** or **Find references**.

That's it! Now [deploy Sourcegraph for your team](https://docs.sourcegraph.com/admin) so everyone at your organization can use it.

Any other questions? [File an issue](https://github.com/sourcegraph/sourcegraph/issues) or [contact us](https://about.sourcegraph.com/contact).

### About the author

_Quinn Slack is the CEO and co-founder of Sourcegraph, the code intelligence platform for dev teams and making coding more accessible to more people. Prior to Sourcegraph, Quinn co-founded Blend Labs, an enterprise technology company dedicated to improving home lending and was an egineer at Palantir, where he created a technology platform to help two of the top five U.S. banks recover from the housing crisis. Quinn has a BS in Computer Science from Stanford, you can chat with him on Twitter [@sqs](https://twitter.com/sqs)._
