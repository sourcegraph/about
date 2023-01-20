---
title: 'Code Search at Google: The Story of Han-Wen and Zoekt'
authors:
  - name: Beyang Liu
    url: https://twitter.com/beyang
  - name: Justin Dorfman
    url: https://twitter.com/jdorfman
publishDate: 2022-12-15T10:00-07:00
description: 'At Sourcegraph, we’re inspired by developers that make a difference. Han-Wen Nienhuys, creator of Zoekt, an open source search engine for code based on Google’s internal Code Search tool, is one of those inspiring developers.'
tags: [blog]
slug: 'zoekt-creating-internal-tools-at-google'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/blog-building-foundation-code-search.jpg
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/blog-building-foundation-code-search.jpg
---

At Sourcegraph, we’re inspired by developers that make a difference, and creating and perfecting the internal tools they use every day is one way developers can have a significant impact. We should know: Sourcegraph itself was partly inspired by the internal code search tool at Google.

### Building the foundation of code search

Han-Wen Nienhuys, creator of Zoekt, an open source search engine for code based on Google’s internal Code Search tool, is one of those inspiring developers. Han-Wen has worked on developer productivity and dev tools at Google for nearly 15 years, including many of Google's famed internal tools, including: 

* Piper, a large-scale version control system.
* Bazel, a large-scale distributed build system.
* Gerrit, an open source code review tool. 

Sourcegraph uses Zoekt as the primary search backend for indexed search. Every Sourcegraph instance has a Zoekt instance inside of it. It is super fast and incredibly performant to use.

[We chatted with Han-Wen](https://about.sourcegraph.com/podcast/han-wen-nienhuys) to hear Zoekt’s origin story.


### Internal tools: Making developers’ day-to-day work easier

Zoekt is the byproduct of Han-Wen’s extensive experience developing internal tooling at Google, a career that started in 2006 with a last-minute 5 am flight to a Google recruitment conference in Brazil, leading to a position in the Google Brazil office.

The Brazil office was small – “Google was still the underdog,” Han-Wen says – but he found the organization exciting, and liked how original and rebellious everything felt.

The team Han-Wen joined was working on a gigantic system serving ads to Orkut, a social media platform that was hugely popular in Brazil and India, and MySpace.

The system was complex and needed to be efficient, as almost every page of the internet would be served by these ads coming from Google. The ad-serving product grew quickly, and Han-Wen and his fellow developers needed to keep up with the traffic and with new features. But Han-Wen was frustrated by the compilation times of the system: a single unit test could take up to a minute to compile, and developers were held back by the waiting.

The Brazil office used Perforce, a version control system with a centralized server. Changes to a file on Perforce couldn’t be made by simply opening a file and typing. First, the central server had to be notified with a `p4 edit` command, which would then update the metadata. The server was frequently overloaded, and poor network connectivity in the Brazil office didn’t help the situation. Han-Wen found Perforce “agonizing to use.” 

Han-Wen looked at this internal tooling and thought to himself, “I can do something better here.”  And so his adventure in internal tooling began.

Having previously worked with Git, Han-Wen’s tooling solution was to build a Git wrapper around the Perforce installation. “I built it for myself at first,” he says. The wrapper took advantage of the fact that if all the logic is handled by the server, the data could be moved to the client. This allowed Han-Wen to code against the local import of the source code in Git, and when he was done, he could press a button to make a Perforce change out of the local edit. “It could do this in the background,” he says, “so I could work on more interesting things.”

“Before I knew it,” Han-Wen says, “there were hundreds of users” of his wrapper. At the height of its popularity, 25% of Google’s developers used Han-Wen’s tool, and he used their feedback and ideas to improve it.


### Becoming an expert in Perforce by trying to avoid it

Ironically, by building his Git wrapper to avoid using Perforce, Han-Wen became something of a Perforce expert—skills that made him the perfect hire for the Piper team.

At the time, Google’s version control system Piper looked quite like Perforce to the user, but it was actually reimplemented from scratch. In essence, Piper exposed a Perforce interface to the user, so that users wouldn’t have to switch their Perforce habits, but under the hood it was completely different in order to scale to Google's massive monorepo. 

Han-Wen relocated to Google’s Munich office to work on internal tooling with the Piper team, where he continued to develop his Git wrapper—“It was a perfect 20% project,” he says. While there, Han-Wen became involved in pitching the idea of open sourcing Google’s build system, and before long, he joined the Bazel team to work on the project. When he switched teams, the Git wrapper was left with the Piper team. “It’s quite special,” Han-Wen says, “to create a 20% project and then leave it with another team.” 


### Open sourcing Google’s build system

Moving teams brought some valuable lessons. Han-Wen had previously used Google’s build system as a consumer, and from that point of view, the product seemed well put together and polished. 

In reality, Han-Wen found that there was a lot of technical debt behind the scenes: years of scrappy building meant the software was under-documented, tests and sections of code were commented out, and there was a lot that needed to be put in order before open sourcing. “And it was my job to clean it up,” he says. On top of this, Han-Wen had to learn Java on the fly. “It was a lot of very, very hard work.”

Untangling the build system from its Google internals burned Han-Wen out, and he decided it was time to work on something different. “The Git guy” at Google was Shawn Pierce, who had been working on Gerrit, Google’s open source code review tool, for seven years with the aim of providing open source tooling for Android developers. Han-Wen had known Pierce for years through working on the Git wrapper and admired his vision and commitment. So when Pierce asked Han-Wen to see if he could build a code search tool for Gerrit, Han-Wen leaped at the chance and joined the Gerrit team.


### Taking the bull by the horns

Han-Wen’s years of experience with Git were put to good use on the project.

Since Google’s Code Search team was also in Munich in those days, Han-Wen started by talking to them. One of the developers on the team explained how code search is built and the algorithms it involves, but warned Han-Wen that implementing code search from scratch is a lot of work. Maybe, the code search developer suggested, the better approach would be to open source the internal code search.

Han-Wen says, “If you say to me, ‘Han-Wen, this is way too difficult. You're not going to be able to do that.’ That is waving a red flag to a bull and that's why I thought, I'm going to prove you wrong. I'm going to prove that this is actually really easy.”

The first version of Han-Wen’s code search tool was implemented within a week or two. “If you go back in the history of Zoekt,” he says, “you can still find it.” The basic idea was very simple, but it worked and it was super fast. Han-Wen was hooked: The problem was interesting and he was immediately charged with ideas to make it fancier and faster.

Han-Wen immersed himself in the project. He learned Go, studied the algorithms, and used his spare moments to plan out the next steps for improving the tool. “I got it to a point that it was really working quite well,” he says. “I got my friends from the Bazel team to host me an instance. There's `cs.bazel.build` and if you go there, there's an instance running Zoekt, and I use that fairly regularly to search code.”

“If you look at the history of commits,” Han-Wen says, “you can see that probably a lot of them were written either on Tuesday evenings or on Wednesday mornings.” In the early days of Han-Wen’s code search project, his wife was studying for her PhD in Erlangen, an hour and a half’s train journey away. “During the week,” he says, “I really, really missed her.” So every Tuesday, Han-Wen would take the evening train to visit his wife in Erlangen, have dinner with her, then take the train back to Munich on Wednesday morning. “You can't work on Google internal stuff on the train,” Han-Wen explains, “because you don't know who's behind. But you can work on open source.”

During the week, while working on his other Google projects, Han-Wen would have all these ideas about how to improve his code search tool. Come Tuesday, an idea would have been brewing in his head and would be ready. “I only had to type it out. And then I would try to finish it before the train reached its destination.”


### Sourcegraph and Zoekt: The dream team

The tool Han-Wen developed on the train eventually became the Zoekt code search tool. Early adopters of the Zoekt precursor included Google’s Bazel and Gerrit teams and a Swedish company that makes security cameras—“They told me they would name a street on their campus in honor of me if I would make it work for them.” Han-Wen still occasionally gets bug reports from users.

As Sourcegraph adopted Zoekt as its backend for indexed code search, we also began submitting more patches to upstream. Eventually Han-Wen started looking for someone to take over maintainership of the project, and we volunteered and committed to maintaining Zoekt's status as a 100% open-source project. Sourcegraph [accepted maintainership of Zoekt](https://about.sourcegraph.com/blog/sourcegraph-accepting-zoekt-maintainership) in late 2021.

Tools like Zoekt and Google’s Code Search empower developers to use a single portal to search all over a codebase for the code they need—an experience that the team at Sourcegraph strives to bring to every developer, whatever codebase they’re working on, wherever they are in the world.

<YouTube
  title="Building the foundation of code search with Han-Wen Nienhuys, creator of Zoekt" 
  id="qOKDQT7-PJk"
  showTitle={true}
/>