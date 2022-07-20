---
title: 'How NativeScript Onboards New Open Source Contributors'
authors:
  - name: Justin Dorfman
    url: https://twitter.com/jdorfman
publishDate: 2022-07-20T10:00-07:00
description: 'Developer onboarding is one of those things that can be overlooked when growing an open source community. The team behind NativeScript has been hard at work onboarding developers who want to contribute to the project and ensuring that they do so in a scalable and consistent way.'
tags: [blog, ospo]
slug: 'how-nativeScript-onboards-new-open-source-contributors'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/nativescript-open-source-onboarding-blog-hs.jpg
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/nativescript-open-source-onboarding-blog-hs.jpg
---

![](https://storage.googleapis.com/sourcegraph-assets/blog/nativescript-open-source-onboarding-blog-hs.jpg)

From my experience working with open source projects over the years, I noticed many of them (including popular ones) don't have an onboarding process. I get it, it's a lot of work, and when you have 300+ issues to triage over the weekend, that’s the last thing on your mind.

The team behind [NativeScript](https://nativescript.org/), on the other hand, has been hard at work onboarding developers who want to contribute to the project and ensuring that they do so in a scalable and consistent way.

In this article, we’ll explore the project a little and look at how the onboarding process works because there are some broader lessons to learn for all of us working within open source software when it comes to community building and operational best practices.

### What is NativeScript?

At its core, NativeScript allows developers to directly access native platform APIs from JavaScript. Before NativeScript, this was a bit clunky, and it’s been a breath of fresh air to see just how streamlined the process can now be thanks to it. 

The resulting experience minimizes language switching and IDE jumping – a huge improvement for the developers who rely on these modalities.

The project is part of the [OpenJS Foundation](https://openjsf.org/), the neutral home for JavaScript, and it finds itself in excellent company with some other awesome projects of various types. 

When you look at the roadmap, it’s easy to see why this project has garnered its reputation. The continued effort to improve core underlying infrastructure is worth its weight in gold for anyone who wants to leverage JavaScript APIs to enhance their projects.

**_"The team has mentioned that having more hands-on sessions with regular contributors and maintainers would further improve the process because it helps to scale the understanding of the general process – which in turn speeds up the merging of contributions for future releases."_**

### What Does the Onboarding Process Look Like for Developers?

The current cadence for contributors is about 10-15 people per month outside of the [core team](https://github.com/orgs/NativeScript/people). While some are regular, there is also a healthy turnaround of new contributors – all of which need to be onboarded effectively to maintain consistency across the codebase. The team has acknowledged just how important a seamless onboarding process is, especially as things grow and expand.

The onboarding itself is quite a quick and painless process with most of it being self-driven. The majority of contributors do so via their own forks and this tends to take care of itself. However, when a contributor starts to be more active on a regular basis, the team will chat to them about [guidelines](https://docs.nativescript.org/#bring-your-own:~:text=making%20code%20changes-,Guidelines,-%23) and [best practices](https://docs.nativescript.org/best-practices/) that will help to bring them into alignment with the wider project conventions. Typically this will happen using Slack, GitHub, Discord, email, and Zoom as needed.

![](https://storage.googleapis.com/sourcegraph-assets/blog/nativescript-nathan-walker-discord.png)

<center>
_Nathan Walker, NativeScript maintainer, is helping out a new contributor in Discord._
</center>

The reason for this is that it helps to be proactive about the code conventions ahead of time, rather than trying to fix things later. The more coherent and consistent the initial contributions are, the less time and effort are wasted later on down the line.

The team has mentioned that having more hands-on sessions with regular contributors and maintainers would further improve the process because it helps to scale the understanding of the general process – which in turn speeds up the merging of contributions for future releases. In addition, a recorded session would also help to disburse some of the key information more widely.

**_"Unfortunately, those who don’t pay attention to these conventions make things much more difficult than they need to be."_**

### What Makes for a Successful Contribution?

NativeScript has a wide range of use cases, and contributions that show a nuanced understanding of these are the most valuable. Typically this requires the contributor to take special care of the existing conditions in the code and leverage the functionality to create something new. Unfortunately, those who don’t pay attention to these conventions make things much more difficult than they need to be.

Taking some time here to align a contribution with the existing code style is a surefire way to be helpful and useful – and it's something that is greatly appreciated by the NativeScript team.

**_"a crucial part of scaling the impact of the project and ensuring that it receives the attention it needs to continue to be an impactful part of the JavaScript ecosystem."_**

### What About the Path Towards Becoming a Maintainer?

Over the past 3-4 years, the team has seen more and more contributors becoming regular maintainers for the NativeScript project. This is great to see for a 10-year-old project, and it bodes well for its future. While the project was part of [Progress](https://www.progress.com/nativescript), there were a number of [nStudio](https://blog.nativescript.org/the-next-chapter-for-nativescript-nstudio/) developers who played an active role, and they took over the responsibility of being sole maintainers when Progress passed the project back to the community.

nStudio did a great job before bringing the project to the OpenJS Foundation to help build out more community stewardship. In the past year, three new community contributors have been part of the [Technical Steering Committee](https://github.com/NativeScript/management/blob/master/nativescript-governance.md) (TSC) and are actively involved in maintaining the project.

As things continue to grow and gather steam, we expect to see more maintainers emerge to continue the great work that has been done so far. This is a crucial part of scaling the impact of the project and ensuring that it receives the attention it needs to continue to be an impactful part of the JavaScript ecosystem.

### Conclusion

Developer onboarding is one of those things that can be overlooked when growing an open source community – but you do so at your peril. By setting a precedent upfront and helping to bring new contributors into your ecosystem, you are investing in the future of your project in a very sustainable way.

If you need help with onboarding at work, [read this guide](https://about.sourcegraph.com/guides/dev-onboarding-how-is-it-unique?utm_source=nativescript-blog-set-up-demo&utm_medium=nativescript-blog).

---

_Thanks to the following people for helping with this post: Jory Burson, Nathan Walker, Marcos Placona, and Fabiana Castellanos._

#### About the author

Justin Dorfman is Sourcegraph’s Open Source Program Manager and is responsible for
fostering the adoption of code intelligence in the open source community. You can chat with Justin on Twitter [@jdorfman](https://twitter.com/jdorfman) or our community [Discord](https://discord.com/invite/vqsBW8m5Y8)

### More posts like this

- [How we analyzed hundreds of repositories to ensure they had open source licenses](https://about.sourcegraph.com/blog/batch-changes-ospo)
- [No Secrets! Quickly find sensitive files in your GitHub repo](https://about.sourcegraph.com/blog/no-more-secrets)