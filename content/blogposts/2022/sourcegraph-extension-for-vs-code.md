---
title: 'How I use the Sourcegraph extension for VS Code'
description: 'Sourcegraph's extension for Visual Studio Code allows you to search millions of open source repositories without cloning them to your local machine or leaving your IDE. Here's how one engineering manager integrates it into his workflow.'
authors:
  - name: Murat Sutunc
publishDate: 2022-02-08T00:00-07:00
tags: [blog]
slug: ways-to-use-sourcegraph-extension-for-vs-code
heroImage: https://sourcegraphstatic.com/blog/vs-code-extension/sourcegraph-vs-code-extension.png
socialImage: https://sourcegraphstatic.com/blog/vs-code-extension/sourcegraph-vs-code-extension.png
published: true
---

![Explore millions of open source repositories right from your IDE](https://sourcegraphstatic.com/blog/vs-code-extension/sourcegraph-vs-code-extension.png)

My name is [Murat Sutunc](https://handbook.sourcegraph.com/team#murat-sutunc), and I'm the Engineering Manager for the Growth and Integrations team at Sourcegraph. Our team currently owns the initial user journey, growth-oriented projects, our code host and third-party integrations (including our IDE and browser extensions), and Sourcegraph extensions. As someone who does a lot of code reviews and occasionally jumps in to fix small issues, I wanted to share with everyone how I use my favorite IDE (VS Code!) and Sourcegraph together.

<Alert>
  <span>TL;DR 👉 The Sourcegraph VS Code extension is a really powerful tool that lets you search your code and 2M+ open source repositories, all from your IDE! It's available on <a href="https://marketplace.visualstudio.com/items?itemName=sourcegraph.sourcegraph">the marketplace</a>—no account needed, give it a try!</span>
</Alert>

### Finding reusable code to fix issues

Now and then, I jump in to help our team with some issues that are not on the critical path. For those unfamiliar, I think it's fair to say [Sourcegraph's codebase is sizeable](https://github.com/sourcegraph). It still fits on my laptop hard drive, but it's large enough to tire IDEs when indexing. On top of our large main repository, we have several hundred additional repositories, and quickly finding what I'm looking for can be challenging.

When working on a plugin issue, I first start with the repository that the issue is filed against. Once I familiarize myself with the issue, I tend to fire up VS Code to work on my solution. Frequently I run into cases where I remember solving a similar issue before but cannot remember how I solved it at the time. One such example is when I needed to write some code involving the [rxjs](https://rxjs.dev/) library but forgot the exact syntax because I'm not very familiar with the library.

I ran the following search query to find all Sourcegraph extensions we have (repository name pattern is sourcegraph-extension-name) which make use of the rxjs library:

```text
repo:^github\.com/sourcegraph/sourcegraph-.+$  /import .+ from 'rxjs'/
```

<video loop autoPlay muted playsInline>
  <source src="https://storage.googleapis.com/sourcegraph-assets/blog/vs-code-extension/vs-code-regex-usecase.webm" type="video/webm" data-cookieconsent="ignore" />
  <source src="https://storage.googleapis.com/sourcegraph-assets/blog/vs-code-extension/vs-code-regex-usecase.mp4" type="video/mp4" data-cookieconsent="ignore" />
</video>

Using this regex and the Sourcegraph Extension, I was able to find the code I was looking for without leaving my IDE and get distracted by tons of other tabs that I have open in Chrome. I can quickly reuse that code to solve my issue without reinventing the wheel, too.

### Researching and fixing vulnerabilities

Code search is really useful for error researching as well. You might have heard of the [log4j vulnerability](/blog/log4j-log4shell-0-day/) that was recently in the news. In such widely impactful security vulnerabilities, it's really important to move as fast as possible. Luckily, in our case, the security team was able to identify the packages that were potentially affected. All we had to do was to build a search query. In this case, we used the language filter to make sure we searched for gradle files and made sure to include the log4j import statement along with the affected versions:

```text
gradle org\.apache\.logging\.log4j ['"] 2\.(0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16)(\.[0-9]+)
```

As you can see in the video below, the global search returns several repositories that require further investigation. I finally changed the search context to Sourcegraph to narrow down my search scope to find all the repositories affecting our organization.

<video loop autoPlay muted playsInline>
  <source src="https://storage.cloud.google.com/sourcegraph-assets/blog/vs-code-extension/vscode-log4j.webm" type="video/webm" data-cookieconsent="ignore" />
  <source src="https://storage.cloud.google.com/sourcegraph-assets/blog/vs-code-extension/vscode-log4j.mp4" type="video/mp4" data-cookieconsent="ignore" />
</video>

I hope you find these workflows useful. The extension has become a handy part of my day-to-day flow, especially for finding code to reuse or to quickly find and resolve vulnerabilities without leaving my IDE. Plus, the extension allows you to search Sourcegraph's index of millions of OSS repositories (without needing an account), so you can search for code examples, libraries, and best practices without ever leaving your IDE.

If you have questions or suggestions, you can reach out to me on Twitter ([@muratsutunc](http://twitter.com/muratsutunc)). You can [download the Sourcegraph VS Code extension from this link](https://marketplace.visualstudio.com/items?itemName=sourcegraph.sourcegraph). Happy hacking!
