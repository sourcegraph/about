# Session 1: Sourcegraph 101

This session teaches users basic functionality and use cases. 

The structure below is designed for a [training session](../index.md), but the Sourcegraph 101 [demo flow](#demo-flow) can be used for initial sales demos, partner demos, and any other situation where basic product training is needed.

## Structure

|Section  |Presenter  |Timing  |Description  |
|---|---|---|---|
|Introductions  |Sourcegraph AE  |10 mins.  |Quick introduction to Sourcegraph, Universal Code Search, and who we are. Slides: TBD |
|Demo  |Sourcegraph CE  |20–25 mins.  |See the [demo flow](#demo-flow) below. |
|Internal champion pitch  |Customer champion  |5–10 mins.  |The internal champion provides a quick overview of why they brought in Sourcegraph and what real use cases they've found Sourcegraph provides. |
|Q&A  |Sourcegraph CE  |-  |End users can ask Sourcegraph questions about the product, use cases, and more. |

## Demo flow

**Set the stage with an initial search**
- Start on https://about.sourcegraph.com, scroll down to the "case studies" section, and call out one or two that are most relevant to the prospect or customer in attendance.
- Describe a use case:
  >I'm a developer at Uber, Lyft, Yelp, etc., and I am building a new service. I need to add authentication, and I know we do this elsewhere in the codebase, so let me run a search for it...
- Show that the user has the Sourcegraph browser extension installed, and can type `src` + <kbd>tab</kbd> to start a search.
- Type "repo:sourcegraph/sourcegraph new auth provider" and hit <kbd>enter</kbd>.

**Show how Sourcegraph search is different**
- Ensure that the extension took you to Sourcegraph.com, that the regular expression toggle is activated (`.*`) and that results show up.
- Describe the Sourcegraph code search experience:
  >Unlike GitHub, Bitbucket, and GitLab, we recognize that you're probably not going to get to the specific answer you want on the first search you run. Sourcegraph provides the ability to filter your search down quickly from there, automatically suggesting repository filters...
- On the row with a list of repositories, click on `github.com/sourcegraph/sourcegraph`.
- Note that the first result is our CHANGELOG.md, and continue:
  >...And I'm not looking for markdown, so Sourcegraph automatically recommends language filters, letting me filter to Go lang files only...
- Click on the `lang:go` automatic filter here. Note that the new results include a test file (i.e., a file name ending in `_test.go`), and continue:
  >...And since I don't care about tests, Sourcegraph recommends I filter them out.
- Click on the `-file:_test\.go$` filter here.
  >...You can see what's happening with this filter — I'm excluding any file paths that end with `_test.go`. We provide full regular expression support for your text search itself, and each search filter.
  >
  >At this point, with only a few results left, I can find the usage example I was looking for.
- Scroll down and click on any file that contains a potentially relevant symbol here. Good examples are any of the `authz.go` files, which contain the `NewAuthzProvider` symbol.

**Show code browsing on the web like you're in a perfectly-configured IDE**

More to come
