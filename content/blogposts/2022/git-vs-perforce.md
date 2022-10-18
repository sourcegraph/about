---
title: 'Git vs. Perforce: how Salesforce Engineering helped Sourcegraph scale to one of the largest monorepos'
authors:
  - name: Beyang Liu
    url: https://twitter.com/beyang
publishDate: 2022-10-05T10:00-07:00
description: 'Sourcegraph is committed to making all the code in your organization discoverable, useful, and valuable. Here is how we helped Salesforce and how they helped us in return.'
tags: [blog]
slug: 'git-vs-perforce-salesforce-scalability-and-performance'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/blog-perforce-salesforce-hero-101822.jpg
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/blog-perforce-salesforce-og-101822.jpg
---

Salesforce uses Perforce to track and manage its code at scale: The massive Salesforce codebase consists of 1.1 million change lists, 2.2 million files just at `HEAD`, and a total history of 1.1 TB. Four additional feature freeze branches are copies of `main`, each with patches applied on top of it.

Wait a minute, Sourcegraph indexes Perforce? The answer is yes—in an age when most popular commercial code hosts don't even support Perforce (or anything that's not Git), Sourcegraph is committed to making *all* the code in your organization discoverable, useful, and valuable.

At the time of initial engagement, however, our Perforce support was basic. The Salesforce engineering team, however, was intent on evaluating Sourcegraph against their main corpus, stored in one Perforce depot (the analog of a Git repository), and we worked with them closely to ensure Sourcegraph would work for their environment and scale. This is the story of the partnership that resulted in a 100x improvement in Perforce-to-Git conversion, a new open-source command line tool, and the successful indexing of one of the largest software organizations in the world.

## Sourcegraph takes the challenge

Sourcegraph aims to be the Google for code: A one-stop-shop to search all your code and dependencies in one place.

Though we started with Git, today, we index a lot of code outside of Git, including package repositories like NPM, PyPI, and Maven, and non-Git code hosts like Perforce. Perforce is used by many large enterprises and game development companies due to its ability to scale and handle large asset files.

Salesforce wasn't our first Perforce customer, but it was our first Perforce customer at such a massive scale. Initially, we converted their entire Perforce depot to a Git repository using [git-p4](https://sourcegraph.com/github.com/git/git@master/-/blob/git-p4.py), the standard open-source tool for converting from Perforce to Git. This worked as a proof of concept, but it took 16 days to convert the main branch alone and there were 5 development  branches—that would have taken 80 days just for the initial clones to complete, without even accounting for search indexing!

We were itching to expand our limited Perforce support to become a truly universal code-search tool, so when [Twarit Waikar](https://twitter.com/twaritw) and his team at Salesforce approached us to collaborate on a robust solution to improve performance at scale while incorporating Perforce, we jumped at the chance.

# Git vs Perforce: why do companies use Perforce?

Git has become the most common version control system in the last decade, but it’s not the only way. The biggest reasons companies might choose to use Perforce over Git include:

* **Handling large files:** Git works best with smaller files, which source code files usually are. Git LFS (Large File System) does provide support for larger files (Large File System), but it doesn't meet the needs of many organizations that deal with many large asset files (e.g., chunky 3D models and multimedia prevalent in gaming) and like to version them together with source.
* **Centralization:** Perforce is **centralized** while Git is **decentralized**. With Git, every developer has a complete copy of the codebase locally. This is often an advantage, but not always. For example, it can be inefficient for large changes as every change has to be copied many times to each developer’s machine.

The Perforce data model is very different from Git’s. You can find a good [introduction to how Perforce works](https://www.perforce.com/manuals/intro/) on the website.

## Solving scale

git-p4.py was written over 15 years ago, in Python 2. It is bound to a single thread and it works by shelling out to the Git and Perforce command line tools and parsing the output. This involves many I/O operations, which are very slow.

Even according to the git-p4.py documentation, it is not suitable for any Perforce depot that is larger than 1GB.

Because it is single-threaded, the tool is blocked most of the time. The network calls to download data from Perforce and the actual conversion process are done sequentially, which means either the networking resources or the compute resources are idle at any given time.

Sourcegraph engineers worked on improving the existing git-p4 implementation, while Salesforce worked on building p4-fusion from the ground up. It soon became clear that starting over was the correct approach. Even though we achieved significant speedups by adding multi-threaded support to git-p4.py, the underlying excessive file I/O operations remained a performance bottleneck.

Out of the Salesforce-Sourcegraph partnership, p4-fusion was born.

## Performance at scale: Introducing p4-fusion

[p4-fusion](https://github.com/salesforce/p4-fusion) is a CLI written in C++ that converts Perforce depots to Git repositories. An open source tool licensed under the BSD 3-Clause License, it’s a solution that mitigates all the git-p4.py performance issues we’ve encountered.

Production proven to handle depots over 1 TB in size, p4-fusion’s significant performance improvements are due to the P4API, custom Threadpool, and GitAPI components.

We compared the performance of git-p4.py, the Sourcegraph-improved version of git-p4.py, and p4-fusion by converting over 3000 decently sized change lists (CLs) with each tool.

<table>
  <tr>
   <td>
    <strong>Tool</strong>
   </td>
   <td>
    <strong>Performance</strong>
   </td>
   <td>
    <strong>Time</strong>
   </td>
  </tr>
  <tr>
   <td>
    Git/git-p4.py
   </td>
   <td>
    1x
   </td>
   <td>
    42m 23s
   </td>
  </tr>
  <tr>
   <td>
    Sourcegraph/git-p4.py
   </td>
   <td>
    32x
   </td>
   <td>
    1m 19s
   </td>
  </tr>
  <tr>
   <td>
    Salesforce/p4-fusion
   </td>
   <td>
    98x
   </td>
   <td>
    0m 26s
   </td>
  </tr>
</table>

Using p4-fusion, conversion time was reduced from 42 minutes to just under 30 seconds, a speed boost of nearly 100x.

This meant that cloning Salesforce’s main Perforce branch could be done in 4 to 5 days instead of 16, and feature freeze branches between 30 minutes and 6 hours depending on size. Whereas the average time between a new CL being checked in and the CL appearing in Sourcegraph was previously 2 to 3 minutes, with p4-fusion the CL appears in 15 to 30 seconds.

![](https://storage.googleapis.com/sourcegraph-assets/blog/blog-perforce-salesforce-depot-101822.jpg)

## How does it work?

Here's a high-level overview of how p4-fusion operates:

![](https://storage.googleapis.com/sourcegraph-assets/blog/soucegraph-salesforce-git-vs-perforce-high-level-design.png)

### P4API

The P4API component accounted for the largest improvement in performance by solving the first bottleneck in the network I/O. Designed for multithreading, the P4API issues Perforce server API calls and handles stored data completely in memory, so there is no disk I/O while downloading CLs.

The p4-fusion algorithm selects the change lists on the Perforce server, identifying all the changes that need to be dragged over. However, this is not a completely naive mass migration. It is done smartly by bringing over only those specific change lists that need to be cloned rather than a complete duplication, lending itself to a more lean, efficient operation.

### ThreadPool

Next, the p4-fusion algorithm starts downloading those files that have been changed via async “fire and forget” calls to the ThreadPool, which means it can return as soon as a call is made and tasks can be queried later when they are complete. Tasks can be sent in parallel, typically P4 print calls on files that have been changed in a change list.

The custom ThreadPool component can manage over 100 threads on 8 CPU cores. It relies on wake-ups rather than wasting CPU cycles with polling, and uses conditional variables to avoid spurious wake-ups. Performance is further enhanced by reusing TCP sockets to the Perforce server between commands.

ThreadPool is responsible for allocating the jobs on its various threads.

### GitAPI

Finally, for each change list, the files are downloaded and the change list committed to the Git repository in sequence. GitAPI ensures that Git objects are created without any extra data processing, and skips writing the Git index to the disk entirely, solving the final disk I/O bottleneck of git-p4.py’s process and delivering the second largest boost to performance.

See the [excellent p4-fusion README](https://sourcegraph.com/github.com/salesforce/p4-fusion@master/-/blob/README.md) for additional details, as well as documentation for how to use the tool yourself. It's worth checking out if you're doing a Perforce-to-Git migration or want to enable integrations for your Perforce depot from Git-oriented tooling.

## Performance through collaboration

Credit goes to [Twarit](https://twitter.com/twaritw) and his team, who are still improving p4-fusion. Having addressed the network I/O bottleneck, the next bottleneck is disk usage. This is not a bad problem to have since it can be mitigated easily by upgrading the underlying hardware to provide better disk I/O speeds. In addition, there is an optimization to include only metadata for binaries, which should be searchable in Sourcegraph, while excluding binary file contents, which aren't useful in the context of code search.

We're excited about the scalability, speed, and reliability of p4-fusion, and particularly about having an effective way to convert Perforce depots into Git repositories while comprehensively indexing them. Devs at Salesforce can now directly search for potential issues using Sourcegraph, rather than wasting time going through change lists or using multiple tools to track down those issues.

At Sourcegraph, we’re proud of the tools we have created for the developer community. But there is something special about building these tools in collaboration with our customers. We pride ourselves on being a developer-led, customer-centric organization. [Hit us up](https://discord.gg/n43FxnCdTz) if you'd like to chat about scalable code search, code intelligence, or making big codebases nicer to work in.

---
<br />

Special thanks to _Twarit Waikar, Mike McLaughlin, Sarah McGregor, Gareth Dwyer, Josh Goldberg, and Justin Dorfman_

### More posts like this

* [Revisiting the design approach to the Zig programming language](https://about.sourcegraph.com/blog/zig-programming-language-revisiting-design-approach)
* [A dev's thoughts on developer productivity](https://about.sourcegraph.com/blog/developer-productivity-thoughts)

<p class="mt-3 mb-3">
<a href="https://sourcegraph.substack.com/p/subscribe" class="btn btn-primary mr-1 mb-1">Subscribe to technical posts</a>
&nbsp;
<a href="https://discord.gg/n43FxnCdTz" class="btn btn-primary">Join our Discord</a>
</p>
