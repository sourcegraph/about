---
title: The future of code search
description: We raised a $125M Series D to bring really great code search to every developer in the world. With this new funding, we're prioritizing innovations that will push the frontier of developer experience.
authors:
  - name: Beyang Liu
    url: https://twitter.com/beyang
publishDate: 2021-07-13T00:00-07:00
tags: [blog]
slug: the-future-of-code-search
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png
socialImage: https://about.sourcegraph.com/blog/announcing-sourcegraphs-series-d-round.jpg
published: true
---

We just [raised a $125M Series D](/blog/announcing-sourcegraphs-series-d-round/) (led by Andreessen Horowitz) at a $2.625B valuation to bring great code search to every developer. This major milestone was made possible by the hard work of our amazing team members and by the hundreds of thousands of people who now use Sourcegraph.

Though we have a lot more users than we did even a year ago, the proportion of developers who understand the value of great code search and the impact it can have on dev productivity and happiness is still relatively small. We'd like to take this moment to share why we think code search will become ubiquitous and highlight some of the things we've been working on at Sourcegraph to make it so.

## The impact of great code search: dev happiness

Forward-thinking software organizations have long appreciated the value of code search that extended beyond the boundaries of the editor and dev environment. Organizations like [Bell Labs in the 1980s, Sun Microsystems and Linux in the 1990s, and Mozilla, Google, and Facebook in the 2000s](https://www.youtube.com/watch?v=J4lArxTWiIY) built code search engines for their own teams to make their massive codebases accessible to every developer and enable permissionless knowledge sharing.

These days, every company is becoming a software company, and everyone is reaching the scale of code where the need for search becomes apparent. The world of open source has exploded and the number of dependencies pulled into the average codebase has ballooned. There may no longer be such a thing as a small codebase—even boilerplate starter projects often require dozens of dependencies from the get-go. All these become part of the overall codebase, which developers must understand if they are to effectively build, test, debug, and deploy the code into production.

We could try to boil developer productivity down to a scientific-sounding set of numerical metrics, but all such measures we've encountered seem deeply flawed in a way that confuses the creative essence of programming with the spreadsheet mechanics of a widget factory.

When we think about developer productivity, we think of developer happiness. The value that great code search brings to organizations—in the form of human time saved, reduced downtime, collaborative knowledge transfer, and a faster pace of iteration and innovation—traces directly back to the delight and joy we bring to developers' day-to-day lives.

Think back to those moments when you first fell in love with programming. You sat down at a computer—maybe it was an [old Apple Macintosh](https://slack.org/why-i-love-code) or a [TI-83 graphing calculator](https://medium.com/on-the-nature-of-certain-things/the-way-we-code-f4bb791c8d18)—and got lost in hours of magical focus: thinking, tinkering, and tweaking your program until it was just right. At some point, you probably reached a flow state, that state of mind where all the context you need is mentally at hand, like it's paged into your brain's L1 cache, and you're free to focus on the most creative and imaginative parts of the job. You were coding at the speed of thought.

We're building Sourcegraph to bring you back to that feeling every single day. The hard part is getting there. [Devs spend 10x the time reading code as they do writing it](https://www.goodreads.com/quotes/835238-indeed-the-ratio-of-time-spent-reading-versus-writing-is). And the reading is often much less fun than the writing is—you're not sure where to start, you're down yet another rabbithole, you're managing multiple editor windows and browser tabs, you feel tethered to the familiar parts of the code. Who among us has never looked at a library function and thought, "Thar be dragons!"

Great code search illuminates all corners of the world of code and brings that universe of shared human knowledge to the fingertips that type out the search query. It encompasses code navigation and other contextual information that makes code easier to grok. It makes the entirety of your code—the code you wrote, the code your teammates wrote, all the code in your company, and all the code in open source, in any language, on any code host—immediately accessible. The most developer-forward organizations have been using it for years. We're bringing it to every developer and [every single person](https://slack.org/why-i-love-code#coding-for-all).

## Building great code search for everyone

How are we doing that? Well, we've taken great inspiration from a variety of sources—other code search engines (Livegrep, OpenGrok, Hound, Google Code Search, and Zoekt to name a few) built by amazing developers, the feedback of our early users and customers who shared our conviction in the value of code search, and our own intuition and direct experience as developers with a passion for building, collaborating, and educating. Looking toward the future, here are the areas where we're planning to invest to push the frontiers of code search and put it in the hands of everyone:

1. Global scale at instant speed
1. Accessible design that is both intuitive and expressive
1. Cross-language compiler-accurate code navigation
1. Developer-driven insights and change management
1. Open extensibility, compatibility, and integrations

## Global scale at instant speed

We think that really good code search needs to index the complete world of knowledge the user is hoping to explore, and it needs to be really, really fast. The utility of search drops exponentially with every additional second you have to wait for results.

- We've grown our public search index by 4x this year, and we're planning to grow this by much, much more. [Try it out now](https://sourcegraph.com/search).
- As we scale, we're aiming to keep latency below 1s.
- We've improved our search ranking to ensure the most relevant results show up at the top as we search over a larger set of code.
- We plan to grow our index even more with the aim of reaching every open-source repository with one star or more on GitLab or GitHub.
- [You can now add any public repository](https://sourcegraph.com/user/settings/repositories) to Sourcegraph.

## Accessible design that combines expressivity and intuition

Our focus on design encompasses both visual elements and the syntax of the query language. We believe it's important to make both accessible to new users who may be unfamiliar with code search while enabling a high degree of expressivity.

![refined search results design screenshot](https://sourcegraphstatic.com/blog/redesign/r_search_results.png)

- [Last month, we shipped a major redesign that made search results easier to scan and search queries easier to refine and filter](https://about.sourcegraph.com/blog/introducing-sourcegraphs-new-ui/)
- The [query language](https://docs.sourcegraph.com/code_search/reference/language) and [syntax](https://docs.sourcegraph.com/code_search/reference/queries) are super expressive, with filtering by repository, file pattern, language, language semantics, and nestable AND, OR, and NOT expressions.
- Built-in shorthands exist for common conditions like `repo:contains.file` and `repo:contains.content`.
- Pattern matching goes beyond regular expressions with [structural search](https://docs.sourcegraph.com/code_search/reference/structural).
- Autocompletion in the query bar helps you discover and learn all of the above.

## Cross-language compiler-accurate code navigation

We have a "Ctags++" level of code navigation for every major programming language. We aim to achieve compiler-accurate code navigation in every language soon through the use of language servers and LSIF indexers. We want to make it so you never have to set up a development environment again in order to get hover tooltips, jump-to-definition, or references working.

<Figure 
  src="https://sourcegraphstatic.com/precise-xrepo-j2d.gif" 
  alt="Cross-repository jump to definition"
/>

- Sourcegraph will understand every language at the level a compiler or typechecker does. For starters, we've focused on Go, Java, TypeScript, and JavaScript, with more languages coming soon. For now, we have the best automatic language-aware code navigation in every programming language.
- We're building the "Global Graph of Code" that connects every repository and library package in the world through imports, function calls, and symbol references. It should all "just work" like hyperlinks on the web.
- We plan to show real usage examples pulled from actual public code for every single function in the world.

## Developer-driven insights and change management

We want to enable developers to explore their code as a dataset and track useful and actionable metrics like code coverage, the quantity of dead code or TODOs, the progress of big migrations and deprecations, and the prevalence of anti-patterns. We also want to make large-scale changes that may address the issues that underlie these metrics much easier.

- [Batch changes](https://docs.sourcegraph.com/batch_changes/explanations/permissions_in_batch_changes) turn Sourcegraph into find _and_ replace, and greatly alleviate the pain of shepherding large refactors with many code reviewers.

## Open extensibility, compatibility, and integrations

Sourcegraph works with every major code host (GitHub, GitLab, Bitbucket, AWS CodeCommit, Google Cloud Source Repositories, and more, cloud or on-prem) and most common SCMs (Git, SVN, Perforce, with more coming soon). We want to make code accessible wherever it is hosted.

![Sourcegraph extensions screenshot](https://sourcegraphstatic.com/blog/redesign/r_extensions.png)

- Sourcegraph extensions incorporate third-party dev tools into Sourcegraph's UI. Current extensions include Codecov, Datadog, Sentry, and Lightstep, as well as useful utility extensions like git-extras, css-stacking-contexts, and open-in-your-favorite-editor.
- The [Sourcegraph browser extension](https://docs.sourcegraph.com/integration/browser_extension) enables advanced jump-to-definition and references in most major code hosts and code review tools (GitHub PRs, GitLab MRs, Bitbucket, and Phabricator).
- Sourcegraph is open core. Our core application is open source. Our paid product includes enterprise-specific features, and any individual developer can run their own instance for free.
- Future extension ideas include deeper editor integrations and embeddable interactive code snippets, and we love hearing additional ideas from users and customers.

All this is the tip of the iceberg of what we have planned. Our latest fundraise allows us to make faster progress toward shipping these features to developers everywhere and focus on our long-term mission. We believe great code search should be available to every developer in the world. If you'd like to help us build this future [as a member of our team](https://github.com/sourcegraph/careers), want to give us product feedback, or would like help bringing Sourcegraph into your organization, [hit us up](https://twitter.com/sourcegraph)!

<Figure
  src="/blog/SG-signup-QR.png" 
  alt="Sourcegraph Sign Up QR Code"
/>

### About the author

_Beyang Liu is the CTO and co-founder of Sourcegraph. Beyang studied Computer Science at Stanford, where he published research in probabilistic graphical models and computer vision at the Stanford AI Lab. You can chat with Beyang on Twitter [@beyang](https://twitter.com/beyang) or our community [Discord](https://discord.com/invite/vqsBW8m5Y8)._
