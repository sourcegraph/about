---
title: 'Toward a URL for every function in the world'
authors:
  - name: Quinn Slack
    url: https://twitter.com/sqs
publishDate: 2016-11-01T00:00-07:00
tags: [
  "blog"
]
slug: toward-a-url-for-every-function-in-the-world
heroImage: https://images.ctfassets.net/le3mxztn6yoo/47219SjMUUCyUmae0mUaiq/77c4ca8dd8899369c758225af610282d/1_qwvlhN_OxHQH_aLVAkqBzw.png
published: true
---



What’s the best semantic and future-proof way to link to a piece of code? There's been some interesting [discussion](https://news.ycombinator.com/item?id=8046710) about [the right way](http://andrew.yurisich.com/work/2014/07/16/dont-link-that-line-number/), and it’s something we think about a lot at [Sourcegraph](https://sourcegraph.com) as we build a better way for developers to discover and understand code.

The consensus is that when you’re linking to a file, you should refer to a specific commit ID, not a branch or tag, so that the link works even if the file’s lines change. (On GitHub and [Sourcegraph](https://sourcegraph.com/github.com/golang/go/-/def/GoPackage/fmt/-/Fprintf), you can change the URL to refer to an absolute commit ID by pressing “y”.)

**But let’s take a step back.** Linking to line numbers in code is useful when you want to point out a specific error or implementation technique: “Hey, check line 132 of app.go. You’re not closing the response body.”

Most of the time, though, you actually want to **link to a specific definition by name**:

*   “Hey, I think you should just use [json.MarshalIndent](https://sourcegraph.com/github.com/golang/go/-/def/GoPackage/encoding/json/-/MarshalIndent) here instead.”
*   “Change this to use [text.WrapWords](https://sourcegraph.com/github.com/kr/text/-/def/GoPackage/github.com/kr/text/-/WrapWords).”


![1*qwvlhN OxHQH aLVAkqBzw](//images.contentful.com/le3mxztn6yoo/47219SjMUUCyUmae0mUaiq/77c4ca8dd8899369c758225af610282d/1_qwvlhN_OxHQH_aLVAkqBzw.png)

Where do you think <a href='https://sourcegraph.com/github.com/golang/go/-/info/GoPackage/fmt/-/Printf'>this</a> leads?

In these cases, linking to the line number on GitHub means your link will quickly either become outdated (if you link to a branch) or will refer to an older version of the definition (if you link to a full commit ID).

[Sourcegraph](https://sourcegraph.com) makes it possible to actually link to a definition with a **URL for every function**. These URLs **always refer to the latest definition** and **won’t break if the file is edited**, unlike links to a specific line number. You can also hack these URLs to quickly view other definitions (because the naming scheme is consistent and meaningful).

![1*FNueXlBj3w3TDrBGCVGHOw](//images.contentful.com/le3mxztn6yoo/6RHjnUG01iYqWkC0UwYgSk/a07a58db31191f65d6eb193e30ddcf2a/1_FNueXlBj3w3TDrBGCVGHOw.png)

<a href='https://sourcegraph.com/github.com/golang/go/-/info/GoPackage/fmt/-/Printf'>A semantic URL to fmt.Printf on Sourcegraph</a>

These URLs also show other useful information about the definition: its type signature (with type inference for dynamic languages), usage examples, authors, users, etc. And you can link directly into source, as well:

![1*c2g eZRzYBHm2FhJaQ1Amg](//images.contentful.com/le3mxztn6yoo/1sMZNjBenmgyU6gSWaUwAm/c945535d8cb4b85d6348c614f54088f1/1_c2g_eZRzYBHm2FhJaQ1Amg.png)

<a href='https://sourcegraph.com/github.com/golang/go/-/def/GoPackage/encoding/json/-/MarshalIndent'>The source code of a Go function, MarshalIndent, on Sourcegraph</a>

Lots of open source projects already use these Sourcegraph URLs to refer to specific functions in their docs and bug trackers ([Django](https://code.djangoproject.com/ticket/22000), for example).

Here are some **examples of named URLs**:

*   Go: [https://sourcegraph.com/**github.com/golang/go**/-/def/GoPackage/**encoding/json**/-/**MarshalIndent**](https://sourcegraph.com/github.com/golang/go/-/def/GoPackage/encoding/json/-/MarshalIndent)
*   Go: [https://sourcegraph.com/**github.com/kr/text**/-/def/GoPackage/github.com/kr/text/-/**WrapWords**](https://sourcegraph.com/github.com/kr/text/-/def/GoPackage/github.com/kr/text/-/WrapWords)

**To get the named URL to a function** on [Sourcegraph](https://sourcegraph.com):

1.  [Sign up for Sourcegraph](https://sourcegraph.com) if you haven’t already (currently, global code search is only available to signed-in users).
2.  Search for the function you want to link to.
3.  Click on the result.
4.  Copy the URL in the address bar.

That’s it. You can also use the [Sourcegraph Chrome extension](https://docs.sourcegraph.com/integration/browser_extension) to make it easy to jump to any function’s URL when you’re on GitHub.

To refer to a function at a specific point in time, you can add an explicit commit ID by pressing “y”.

#### Known issues

There are a few problems with using named URLs, but they don’t prevent them from being useful today.

*   You can only refer to functions written in languages that [Sourcegraph](https://sourcegraph.com) is able to semantically analyze (currently Go —Python, JavaScript, TypeScript, Java, and more languages are coming soon).

We’re working on improving these things and [more](https://sourcegraph.com/about).

#### Next steps

Next time you need to link to code, link to it on [Sourcegraph](https://sourcegraph.com) so your links refer to named definitions, not just files and lines. **Here’s one to try first:** [**func MarshalIndent**](https://sourcegraph.com/github.com/golang/go/-/def/GoPackage/encoding/json/-/MarshalIndent)**.**

### About the author

_Quinn Slack is the CEO and co-founder of Sourcegraph, the code intelligence platform for dev teams and making coding more accessible to more people. Prior to Sourcegraph, Quinn co-founded Blend Labs, an enterprise technology company dedicated to improving home lending and was an egineer at Palantir, where he created a technology platform to help two of the top five U.S. banks recover from the housing crisis. Quinn has a BS in Computer Science from Stanford, you can chat with him on Twitter [@sqs](https://twitter.com/sqs)._
