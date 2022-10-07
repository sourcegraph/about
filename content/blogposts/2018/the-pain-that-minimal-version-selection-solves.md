---
title: 'Resolve Go dependencies with minimal version selection'
externalTitle: 'How to resolve Go dependencies'
authors:
  - name: Nick Snyder
    url: https://twitter.com/nickdsnyder
publishDate: 2018-08-30T17:00-07:00
description: 'Minimal version selection can help resolve Go dependencies. Learn how to use this methodology to produce high-fidelity builds by default.'
externalDescription: 'Minimal version selection can help resolve Go dependencies. Learn how to use this methodology to produce high-fidelity builds by default.'
tags: [
  "blog"
]
slug: the-pain-that-minimal-version-selection-solves
heroImage: https://images.ctfassets.net/le3mxztn6yoo/7Gbpa546asA62wmquWA6W2/46715d41c2fc5d28f4acd359d1d37a0c/mvs.png
published: true
---

[Minimal version selection](https://research.swtch.com/vgo-mvs) is an idea that Russ Cox proposed for how to resolve the dependencies of [Go modules](https://github.com/golang/go/wiki/Modules). When installing or updating dependencies, minimal version selection always selects the minimal (oldest) module version that satisfies the overall requirements of a build.

Minimal version selection has a lot of nice properties:

- It is simple to understand and implement.
- It is fast to compute because it avoids solving [Version-SAT](https://research.swtch.com/version-sat), which is [NP-Complete](https://en.wikipedia.org/wiki/NP-completeness).
- It produces high-fidelity builds by default because the Go dependencies that a user builds are as close as possible to the ones the author developed against.

Many other popular dependency managers, like NPM, prefer to install the _latest_ version of dependencies by default. I will share a recent real-world example of the kind of pain that minimal version selection prevents.

## Background

Sourcegraph recently [open sourced our browser extensions](/blog/sourcegraph-browser-extensions-are-now-open-source), but before we could, I needed to remove a transitive Go dependency on our private icons NPM package that contains licensed assets.

Before:

```text
github.com/sourcegraph/browser-extensions (open source)
└─┬ @sourcegraph/codeintellify@3.5.3 (open source)
  └── @sourcegraph/icons@1.15.0 (private)
```

Codeintellify provides hovertooltips on code. Both our web app and our browser extensions depend on it.

The task of removing codeintellify's dependency on our private icons repository was straightforward because it was only using a single loading spinner. All I needed to do was create [a NPM package for our open source loading spinner](https://github.com/sourcegraph/react-loading-spinner), [update codeintellify to use the new package](https://github.com/sourcegraph/codeintellify/pull/33), and finally update the browser extension to depend on the lastest version of codeintellify: 3.6.0

After:

```text
github.com/sourcegraph/browser-extensions (open source)
└─┬ @sourcegraph/codeintellify@3.6.0 (open source)
  └── @sourcegraph/react-loading-spinner@0.0.6 (open source)
```

Everything worked; mission accomplished!

## Pain

[Renovate Bot](https://renovatebot.com/) noticed that there was a new version of codeintellify so it helpfully created a pull request to update our main repository to codeintellify 3.6.0.

![diff](//images.ctfassets.net/le3mxztn6yoo/1WvaXnaw6sswcEWi4AAYak/e9bb9861c6edd7f8787b3633c79655a8/diff.png)

After CI passed, another engineer merged the pull request. Soon thereafter, our end-to-end tests (that only run on master after deploying to our staging environment) started failing because hover tooltips, a core feature of Sourcegraph, were broken.

![error](//images.ctfassets.net/le3mxztn6yoo/3hguLE62tiwS4gGac2qkiQ/2f2ccebe4540d6789d36ef0f79277952/error.png)

Fortunately, the end-to-end test failure blocked this from being deployed to sourcegraph.com.

Since I was asleep at the time, and the breakage was apparently caused by codeintelify 3.6.0 (and transitively, me), my teammate just reverted the commit.

When I arrived to work the next day, I was confused. What could have possibly gone wrong?

- Everything had worked fine when I integrated this library in our browser extensions.
- There is not much opportunity to subtly break the site with 18 lines of CSS and 10 lines of TypeScript.
- The error message didn't make any sense, and wasn't related to anything I had done!

After scratching my head for a bit, I went back to look at the diff and realized that GitHub had helpfully auto-collapsed `package-lock.json`. Of course I don't need to see that; it is for machines, right?

I expanded the diff and my heart sank.

![package-lock](//images.ctfassets.net/le3mxztn6yoo/51SpsPKFgQOE4QImMK0Wyc/dfb7cd0361006e3a1f9be166d5e55236/package-lock.png)

NPM had "helpfully" seen that there was a new patch release of sanitize-html and upgraded to the new version **even though sanitize-html had no relationship to the package that Renovate was updating**.

Worse, that "patch" version of sanitize-html was completely broken ([#241](https://github.com/punkave/sanitize-html/issues/241), [#242](https://github.com/punkave/sanitize-html/issues/242)).

## Reflection

I was upset. Not with sanitize-html though; people make mistakes. In fact, I assume that people will make mistakes (in this case the mistake was [quickly fixed in 1.18.4](https://github.com/punkave/sanitize-html/pull/244), and I was able to move on with my life).

I was upset because the design of NPM assumes things that just aren't true in general:

- People don't make mistakes.
- People perfectly understand and apply [semantic versioning](https://semver.org/) (see also: [compatible versioning](https://github.com/staltz/comver#why-use-compatible-versioning)).
- Having the ecosystem converge to the latest dependency versions as fast as possible is more important that the stability of individual projects.

To the contrary, I expect NPM and tools like it to:

- Assume that people (including myself) will make mistakes and do as much as possible to guard against those mistakes.
- Optimize for _working_ dependencies (i.e. the ones I am already using and have tested), not the _latest_ dependencies.
- Not update a dependency unless I explicitly ask it to ([#1156](https://npm.community/t/impossible-to-update-single-package-without-updating-its-dependencies/1156), [#2348](https://github.com/renovatebot/renovate/issues/2348)).
- Make lockfiles less cumbersome. Lockfiles should:
  - Work cross-platform ([#1129](https://npm.community/t/package-lock-json-keeps-changing-between-platforms-and-runs/1129), [#1454](https://npm.community/t/package-lock-json-changes-from-one-npm-install-to-the-next/1454)).
  - Not [change frequently](https://stackoverflow.com/questions/47638381/why-did-package-lock-json-change-the-integrity-hash-from-sha1-to-sha512).

This experience was the most benign manifestation of this problem. It would have been worse if any or all of the following were true:

- My change was more complicated.
- The aggregate diff between codeintellify 3.5.3 and 3.6.0 included other changes that weren't mine.
- The aggregate diff between sanitize-html 1.18.2 and 1.18.3 was larger.
- sanitize-html didn't quickly release a patch to fix the issue.
- sanitize-html had transitive dependencies that were also updated.
- NPM had updated more than one unrelated package.
- Tests didn't catch the regression and my change was deployed to production.

I am happy that this class of dependency problem won't exist with Go modules, and I hope that other package managers evolve to solve these problems.

## Thanks

Special thanks to Felix ([@felixfbecker](https://twitter.com/felixfbecker)) for ensuring that end-to-end tests must pass on staging before deploying to sourcegraph.com, discussing minimal version selection with me, authoring [a tool to create new NPM packages with the right boilerplate](https://github.com/sourcegraph/create), searching for workarounds to get the behavior I want out of npm, and ultimately filing detailed issues to drive change in the ecosystem ([#1156](https://npm.community/t/impossible-to-update-single-package-without-updating-its-dependencies/1156), [#2348](https://github.com/renovatebot/renovate/issues/2348)).

## More posts like this 

- [The Nine Circles of Dependency Hell (and a roadmap out)](https://about.sourcegraph.com/blog/nine-circles-of-dependency-hell/)
- [How not to break a search engine or: What I learned about unglamorous engineering](https://about.sourcegraph.com/blog/how-not-to-break-a-search-engine-unglamorous-engineering/)
- [Optimizing a code intelligence commit graph](https://about.sourcegraph.com/blog/optimizing-a-code-intel-commit-graph/)
