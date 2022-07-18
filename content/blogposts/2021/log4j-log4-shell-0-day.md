---
title: 'Log4j Log4Shell 0-day: find, fix, and track affected code'
description: "The steps to identify and fix/mitigate the log4j Log4Shell 0-day (CVE-2021-44228) in your code have been widely reported. But they're manual and tedious, and it's hard to track the progress of fixes/mitigations across all your code. Here's how code search can help find, fix, and track code affected by the log4j 0-day."
authors:
  - name: Quinn Slack
    url: https://twitter.com/sqs
publishDate: 2021-12-13T11:25-07:00
tags: [blog]
slug: log4j-log4shell-0-day
heroImage:
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/log4j/log4j-track-progress-prs.png
published: true
---

<Alert>
      <span><strong>Update as of 17:20 UTC on Dec 18:</strong> The <a href="https://logging.apache.org/log4j/2.x/security.html#CVE-2021-45105">latest advice is to patch all the way up to 2.17.0</a>. We have updated all queries and configurations in this post to reflect this recommendation.</span>
</Alert>
<Alert>
      <span><strong>Update as of 23:30 UTC on Dec 14:</strong> The  <a href="https://logging.apache.org/log4j/2.x/security.html#CVE-2021-45046">latest advice is to patch all the way up to 2.16.0</a>. We have updated all queries and configurations in this post to reflect this recommendation.</span>
</Alert>

The steps to identify and fix/mitigate the [log4j 0-day (CVE-2021-44228)](https://nvd.nist.gov/vuln/detail/CVE-2021-44228) ("Log4Shell") in your code have been widely reported ([1](https://www.lunasec.io/docs/blog/log4j-zero-day/) [2](https://logging.apache.org/log4j/2.x/security.html) [3](https://www.reddit.com/r/blueteamsec/comments/rd38z9/log4j_0day_being_exploited/)). But the steps are manual and tedious, and it's hard to track the progress of fixes/mitigations across all your code. To help, we're publishing queries, scripts, and instructions for using code search to:

- Find everywhere log4j is used across all your code
- Automate PRs to fix/mitigate the log4j 0-day across all your code
- Track progress of applying fixes/mitigations for the log4j 0-day

We've documented how to do these things in Sourcegraph below and will be adding instructions (where possible) soon for other code search tools.

## Find everywhere log4j is used across all your code

Run these queries on Sourcegraph to quickly determine which projects directly depend on vulnerable versions of log4j. The following links show results on Sourcegraph Cloud across 2M public repositories.

- Direct dependencies on vulnerable log4j versions specified in common build systems:
  - [Gradle](https://sourcegraph.com/search?q=context:global+lang:gradle+org%5C.apache%5C.logging%5C.log4j%5B%27%22%5D+2%5C.%280%7C1%7C2%7C3%7C4%7C5%7C6%7C7%7C8%7C9%7C10%7C11%7C12%7C13%7C14%7C15%7C16%29%28%5C.%5B0-9%5D%2B%29&patternType=regexp)
  - [Maven](https://sourcegraph.com/search?q=context:global+file:pom.xml+%3Clog4j%5C.version%3E2%5C.%280%7C1%7C2%7C3%7C4%7C5%7C6%7C7%7C8%7C9%7C10%7C11%7C12%7C13%7C14%7C15%7C16%29%28%5C.%5B0-9%5D%2B%29%3C/log4j%5C.version%3E&patternType=regexp)
  - [Ivy](https://sourcegraph.com/search?q=context:global+file:ivy.xml+org%3D%22org%5C.apache%5C.logging%5C.log4j%22+rev%3D%222%5C.%280%7C1%7C2%7C3%7C4%7C5%7C6%7C7%7C8%7C9%7C10%7C11%7C12%7C13%7C14%7C15%7C16%29%28%5C.%5B0-9%5D%2B%29%22&patternType=regexp)
  - [sbt (Scala)](https://sourcegraph.com/search?q=context:global+file:%5C.sbt%24+%22org.apache.logging.log4j%22+%25+%222%5C.%280%7C1%7C2%7C3%7C4%7C5%7C6%7C7%7C8%7C9%7C10%7C11%7C12%7C13%7C14%7C15%7C16%29%28%5C.%5B0-9%5D%2B%29&patternType=regexp)
  - [Bazel](https://sourcegraph.com/search?q=context:global+lang:bazel+org%5C.apache%5C.logging%5C.log4j:+2%5C.%280%7C1%7C2%7C3%7C4%7C5%7C6%7C7%7C8%7C9%7C10%7C11%7C12%7C13%7C14%7C15%7C16%29%28%5C.%5B0-9%5D%2B%29&patternType=regexp)
- Broader queries (with more false positives):
  - [Any file containing `org.apache.logging.log4j` followed by a vulnerable version number](https://sourcegraph.com/search?q=context:global+org%5C.apache%5C.logging%5C.log4j+2%5C.%280%7C1%7C2%7C3%7C4%7C5%7C6%7C7%7C8%7C9%7C10%7C11%7C12%7C13%7C14%7C15%7C16%29%28%5C.%5B0-9%5D%2B%29&patternType=regexp)
  - [All files](https://sourcegraph.com/search?q=context:global+org.apache.logging.log4j&patternType=regexp&case=yes) or [all repositories](https://sourcegraph.com/search?q=context:global+org.apache.logging.log4j+select:repo&patternType=regexp&case=yes) that contain `org.apache.logging.log4j`
  - [All files](https://sourcegraph.com/search?q=context:global+log4j&patternType=literal) or [all repositories](https://sourcegraph.com/search?q=context:global+log4j+select:repo&patternType=literal) that contain `log4j`

### To search across your organization's private code:

- On [Sourcegraph Cloud](https://sourcegraph.com), run the queries linked above in your user search context (<code>context:<i>@username</i></code>), after you've synced all of the org repositories you want to search (in **Settings > Account > Your repositories**).
- On a [self-hosted Sourcegraph instance](https://docs.sourcegraph.com/#quick-install), copy and paste those queries above into the search box on your instance. After pasting, ensure the `.*` (regexp search) button is on for queries that contain regular expressions.

Once you've found where vulnerable log4j dependency versions are used, you can:

- Automate the creation of pull requests to fix/mitigate the issues (see the next section).
- Share the search URLs with your team to work on eliminating all unsafe deps (getting to "0 results"). With Code Insights, you also get line charts of the progress (see below).
- Get the raw dataset of all results: export the results to CSV or a spreadsheet with the [sourcegraph/search-export extension](https://sourcegraph.com/extensions/sourcegraph/search-export), or use the [Sourcegraph GraphQL API](https://docs.sourcegraph.com/api/graphql) or [`src` CLI](https://github.com/sourcegraph/src-cli#readme).
- Use a [search notebook](https://sourcegraph.com/github.com/sourcegraph/notebooks/-/blob/log4j.snb.md) to compile all of the queries your team is using to identify potentially vulnerable code.

Although code search is a fast and versatile tool for assessing the impact of a novel vulnerability, it's not perfect. Here are some limitations:

- These build systems have no convention for dependency lockfiles, so the above queries won't find projects where log4j is a transitive (indirect) dependency (because there's no file committed to Git that lists the fully resolved dependencies and versions). See the next section for how Sourcegraph can invoke your build tool to get a precise set of transitive dependencies (and then automate PRs to fix/mitigate the issue).
- The queries above won't find other indirect usage of log4j, such as a test script that downloads and runs other programs that use log4j. There's no general way to find and fix that type of issue. However, if you know what to look for (such as specific old versions of Elasticsearch that use vulnerable log4j versions), then code search is quite helpful.

## Automate PRs to fix/mitigate the log4j 0-day across all your code

Use the following [batch change](https://docs.sourcegraph.com/batch_changes) specs to programmatically create GitHub pull requests (or GitLab merge requests) to apply the following fixes/mitigations across all of your code:

- [upgrade-log4j-gradle](https://github.com/sourcegraph/log4j-cve-code-search-resources/tree/main/batch-changes): Force usage of safe log4j dependency versions (including for transitive dependencies) in all Gradle projects that use affected log4j dependency versions.
- [detect-log4j-gradle](https://github.com/sourcegraph/log4j-cve-code-search-resources/tree/main/batch-changes): Detect Gradle projects (using `build.gradle` files) that use affected log4j dependency versions and open a pull request with a `fixme` file.
- [detect-log4j-maven](https://github.com/sourcegraph/log4j-cve-code-search-resources/tree/main/batch-changes): Detect Maven projects (using `pom.xml` files) that use affected log4j dependency versions and and open a pull request with a `fixme` file.
- We'll be adding more (and let us know if you have specific requests). You can also customize the existing specs for your needs, or [write your own batch change spec](https://docs.sourcegraph.com/batch_changes).

After you preview and create a batch change, you can see all of the pull requests and track their progress:

![Track progress of pull requests](https://storage.googleapis.com/sourcegraph-assets/blog/log4j/log4j-track-progress-prs.png)

Here's a video walkthrough of how to use Batch Changes to fix/mitigate log4j vulnerabilities in your code:

<div style={{position:'relative', paddingBottom:'45.18828451882845%', height: 0}}><iframe src="https://www.loom.com/embed/84807e1388ce4a5383df7fe5174ed2d7"frameBorder="0" webkitallowfullscreen mozallowfullscreenallowFullScreen style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}></iframe></div>

### To use Batch Changes on your organization's private code:

This feature requires [a self-hosted Sourcegraph instance](https://docs.sourcegraph.com/#getting-started) and is usually part of an enterprise plan. We’re giving out temporary license keys to use Batch Changes for log4j-related fixes. Email [log4j-incident-response-help@sourcegraph.com](mailto:log4j-incident-response-help@sourcegraph.com) and we'll reply quickly with a temporary key.

## Track progress of applying fixes/mitigations for the log4j 0-day across all your code

If you have a lot of projects that need to be patched, and a lot of people working in parallel to apply patches, it's important to know:

- Which projects are still vulnerable?
- How many applications have been patched so far?
- Who's applying the patches, and what are the actual diffs?

Given any search query (such as the ones linked at the top of the post), you can use Code Insights to automatically track progress and changes over time. You can also drill into any data point to see the commits that were responsible for the changes. Unlike manually tracking progress in an issue tracker or spreadsheet, this takes no time to maintain and is always up to date.

![Track progress of pull requests](https://storage.googleapis.com/sourcegraph-assets/blog/log4j/log4j-code-insights.png)

### To get this code insight on your organization's private code:

1. This feature requires [a self-hosted Sourcegraph instance](https://docs.sourcegraph.com/#getting-started) and is usually part of an enterprise plan. We’re giving out temporary license keys to use Code Insights for log4j-related fixes. Email [log4j-incident-response-help@sourcegraph.com](mailto:log4j-incident-response-help@sourcegraph.com) and we'll reply quickly with a temporary key.
1. Go to **Insights > Create new insight > Create search insight**.
1. Select the specific repositories in which to measure progress (or all repositories).
1. Add the 3 data series shown in the screenshot above. The queries used above are defined as follows, but you can customize them as needed (using the query links at the start of this post for inspiration):
   - **Vulnerable log4j versions** = `lang:gradle org\.apache\.logging\.log4j['"] 2\.(0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16)(\.[0-9]+) patterntype:regexp`
   - **Upgraded log4j versions** = `lang:gradle org\.apache\.logging\.log4j['"] 2\.(17)(\.[0-9]+) patterntype:regexp`
   - **formatMsgNoLookups** = `-Dlog4j2.formatMsgNoLookups=true`
1. Give the insight a name and save it.

## Getting started with Sourcegraph

Free accounts on [Sourcegraph Cloud](https://sourcegraph.com) allow you to search your org private code from GitHub.com and GitLab.com. You can choose which orgs and repositories to sync when signing up or later by visiting **Settings > Account > Your repositories**.

To use Batch Changes and Code Insights to apply mass fixes and track progress, or if you want to run it on your own laptop or infrastructure, [set up a self-hosted Sourcegraph instance](https://docs.sourcegraph.com/#getting-started). These features are usually part of an enterprise plan, but we're giving out temporary license keys to use these features for log4j-related fixes. Email [log4j-incident-response-help@sourcegraph.com](mailto:log4j-incident-response-help@sourcegraph.com) and we'll reply quickly with a temporary key.

---

_Thanks to the following people for helping with this post: Olaf Geirsson, Rebecca Dodd, Thorsten Ball, Erica Lindberg, Malo Marrec, Victoria Yunger, Beyang Liu. We welcome [edits to this post](https://github.com/sourcegraph/about/tree/main/blogposts/2021/log4j-log4-shell-0-day.md)._

### About the author

_Quinn Slack is the CEO and co-founder of Sourcegraph, the code intelligence platform for dev teams and making coding more accessible to more people. Prior to Sourcegraph, Quinn co-founded Blend Labs, an enterprise technology company dedicated to improving home lending and was an egineer at Palantir, where he created a technology platform to help two of the top five U.S. banks recover from the housing crisis. Quinn has a BS in Computer Science from Stanford, you can chat with him on Twitter [@sqs](https://twitter.com/sqs)._
