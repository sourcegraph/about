---
title: "Why we're friends, not competitors, with code hosts"
authors:
  - name: Quinn Slack
    url: https://twitter.com/sqs
description: Some people assume that Sourcegraph competes with GitHub, GitLab, Bitbucket, and other code hosts. This is wrong! In fact, we need code hosts to exist, and code hosts benefit from the existence of a good, vendor-neutral code search tool. Here's why.
publishDate: 2021-04-06T10:00-07:00
tags: [blog, code search]
slug: why-we're-friends-with-code-hosts
published: true
---

Some people assume that Sourcegraph competes with GitHub, GitLab, Bitbucket, and other code hosts. This is wrong! In fact, we need code hosts to exist, and code hosts benefit from the existence of a good, vendor-neutral code search tool (like Sourcegraph). Here's why.

(For context: [Sourcegraph Universal Code Search](https://about.sourcegraph.com) is vendor-neutral code search. It helps developers search, understand, and automate code across all repositories and code hosts. You can [run it internally inside your company](https://docs.sourcegraph.com) or [use it for public code](https://sourcegraph.com/search). Many [well-known companies](https://about.sourcegraph.com/customers/) use Sourcegraph.)

## The state of the code host market

First, some background on the state of the code host market.

**Code hosting is a fragmented market.** No single code host has anywhere near a monopoly (except GitHub in open source). We see this market fragmentation first-hand across our customers at Sourcegraph. You can also see it in Stack Overflow's 2020 survey where [39% of professional devs say they use GitLab](https://insights.stackoverflow.com/survey/2020#technology-collaboration-tools-professional-developers2) (82% say they use GitHub, but that includes a large number of devs who use GitHub for open-source code and a different code host for their company's internal code).

**We believe no single code host will ever become a monopoly.** Code host market fragmentation is here to stay. It's a huge market, so there's plenty of room for all of today's code hosts to keep growing and earning tons of revenue for years to come. We have great admiration for the teams building all the major code hosts; we don't expect them to stop competing and cede market share to their competitors. And someone out there is probably hacking on a new version control system or code host that will make today's stuff look old-fashioned.

**Large companies have (and will always have) code scattered across many code hosts.** Underlying this market dynamism are two key differences between code hosts and other business apps:

1. Developers have major influence over the tools they use.
2. Code hosts are necessarily interoperable because of the open-standards nature of code and version control systems.

These factors make it much harder and less valuable for a company to strictly enforce usage of a single code host (compared to that of other business apps).

Other practical matters also factor in. After an acquisition, it can take months or years to merge codebases. Security or scalability might require spinning up multiple separate code host instances. Or sometimes a rogue dev team might just strongly prefer a different code host, and it's not worth stopping them.

## Why Sourcegraph won't become a code host

Bringing Universal Code Search to every dev and company is very valuable by itself. Many devs have never used really good code search, but when they do, they find it impossible to live without. Multiply that impact by millions of devs, and that's enough to [build a big business](https://about.sourcegraph.com/blog/series-c-with-sequoia/) that keeps our [awesome team](https://handbook.sourcegraph.com/company/team) excited for many years to come. (For the purposes of this argument, you don't need to agree with our optimistic business outlook, just that we genuinely believe in it.) So, we don't want to build a code host because we're plenty satisfied by building Universal Code Search.

And, thankfully, we don't need to build a code host. Many great code hosts already exist with nice APIs that Sourcegraph can integrate with, and, of course, the underlying repositories are in Git or other open-standards, open-source version control systems. We can build code search on top of code hosts and search across all of them instead of needing to reinvent a code host from the ground up just to add on a single feature. This may seem obvious, but it's actually quite rare in a world where most apps and platforms don't use open standards. The fiercely competitive nature of the code host market and the advocacy of devs deserve credit here for keeping code hosts open and interoperable.

If we ever did make Sourcegraph a code host, it would actually hurt us because many devs would assume that we'd privilege Sourcegraph-hosted code and degrade our support for code on other code hosts in the same way that people distrust Google when it favors results from Google-owned sites. Being universal across all code hosts is a huge part of our value prop, and we couldn't afford to lose that.

So, we'll stay focused on building Universal Code Search and have no reason to build yet another code host.

## Why code hosts don't compete with Sourcegraph

Now, in the other direction: why wouldn't each code host just make really good built-in code search? For example, why doesn't GitHub code search crush Sourcegraph?

Really good code search is tough to build. It needs to handle massive scale (and keep in mind that historical versions of code matter, so you can't just index the latest version). It needs to understand the structure and semantics of code. And it needs to deeply integrate with many other tools in the dev workflow, including code hosts, editors, runtime tools, user authn/authz directories, and more. All of this complexity needs to be hidden behind a super simple, Google-like search box so devs can find what they need in a few seconds. For code hosts, building really good code search is much harder than any other feature.

But, you might say, if code search is so valuable, then why don't code hosts build it anyway? Because code search isn't very valuable if it's limited to code on a single code host. Recall from above that most of their big customers have code scattered across many code hosts, so better built-in code search wouldn't earn code hosts much additional revenue (and it wouldn't earn market share because it'd only be valuable in companies that were already fully bought in). What if it searched code across multiple code hosts (such as if GitHub's code search also searched code really well on GitLab, Bitbucket, Perforce, etc.)? The market share leader is unlikely to ever offer this, it'd be a ton of additional work, and even then, users are skeptical of "universal" search from a biased vendor.

Code hosts are also reluctant to offer the high degree of extensibility with third-party tools that's needed for really good code search for UX and strategic reasons. For example, when you're debugging a production incident using code search, you want to see live logs and errors emitted from each line or method as you read through code which means your code search tool needs to integrate with your production logging and tracing systems. So many kinds of tools have useful contextual information about code: CI/CD, deployment, package management, tracing, security scanning, dependency management, linting, logging, and so on. To integrate with all of these things and show context where it's needed, code search tools need to be ridiculously extensible, with an extension API like that of an editor or IDE (such as the [Sourcegraph extension API](https://docs.sourcegraph.com/extensions)). Code hosts generally choose consistency over hackability, and that's probably the right choice for users (who have completely different needs from a code host versus a code search tool).

Of course, code hosts do offer basic code search today. It's the kind of code search that you use when necessary, but not the [really good kind of code search that you joyfully use 20 times daily while coding](https://engineeringblog.yelp.com/2019/11/winning-the-hackathon-with-sourcegraph.html#shipping-code-faster-with-sourcegraph). Likewise, on the web, many websites offer basic site search, but there are diminishing returns to better single-site search because it's hard to be better than Google. For example, when you're looking up API docs, you probably use Google's web search rather than first going to the API docs site and using its built-in search.

We expect code hosts to improve their code search over time. But there will always be a big role for a universal code search tool like Sourcegraph in the same way that Google is still the most useful and frequently used search engine, even as Amazon, Wikipedia, Twitter, etc., have all invested a lot into making their own site-specific searches better.

### About the author

_Quinn Slack is the CEO and co-founder of Sourcegraph, the code intelligence platform for dev teams and making coding more accessible to more people. Prior to Sourcegraph, Quinn co-founded Blend Labs, an enterprise technology company dedicated to improving home lending and was an egineer at Palantir, where he created a technology platform to help two of the top five U.S. banks recover from the housing crisis. Quinn has a BS in Computer Science from Stanford, you can chat with him on Twitter [@sqs](https://twitter.com/sqs)._
