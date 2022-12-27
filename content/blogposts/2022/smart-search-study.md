---
title: "Helping users find code by automatically running alternative queries"
description: "Discover how we made code search better by helping developers find and click on results that they would not normally see otherwise."
authors:
  - name: Rijnard van Tonder
    url: https://twitter.com/rvtond
publishDate: 2022-12-08T00:00
tags: [blog]
slug: smart-search-study
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png
published: true
---

When a user searches for `func.*test` should we automatically assume this
pattern is a regular expression? It could make sense, since `.*` is a common
pattern to match any number of characters. How about if the user searched for
`import javax.swing.*` instead? This time, the user might actually be searching
for the exact string to find wildcard imports statements. So maybe that `.*`
is meant to find the string literally, not as a regular expression pattern.
This is just one of many examples where it is difficult to discover user
_intent_ based purely on query syntax. A good query language will offer ways to
explicitly disambiguate intent (e.g., use quotes or escape sequences) but this
takes time to learn and can get in a user's way.

Sourcegraph and other search engines today will suggest query alternatives
based on rules. For example, you might see the suggestion if the user maybe
meant to use a regular expression: 

<blockquote style={{borderLeft: "3px solid rgba(1, 1, 1, .1)"}}>
&nbsp;&nbsp;&nbsp;   Did you mean `/func.*test/`? 
</blockquote>

Helpful, but can we do better? One limitation with this kind of suggestion
is that it typically results from a static rule. We don't actually run the query, nor check
that the suggestion actually returns results. Suggestions are hopeful: if
a user clicks on one they _may_ see useful results, or they may not. What
would a solution look like where the user doesn't jump through additional hoops like reading the suggestions and
clicking on them to hopefully see results? A [previous Google code search study](https://research.google/pubs/pub43835/) shows that users frequently
reformulate queries to arrive at results. In our experience, query
reformulation is one sign that results might not be matching up with a user's
original intent.

#### Automatically running alternative queries

We've found that users often see "No results" for their query due to common
pitfalls. Perhaps they meant to use regular expressions, or they don't want the
ordering of terms in the query to matter, or they want to search literally for
punctuation like quotes. Instead of merely suggesting ways to remedy syntax,
Sourcegraph 4.2 now includes a new feature called Smart Search that automatically runs and reports
results of alternative queries. The main goal is to show potentially useful
results when a query is susceptible to common pitfalls instead of "No results". Below is a screenshot in action.

<img
  src="https://storage.googleapis.com/sourcegraph-assets/about.sourcegraph.com/blog/2022/smart-search-example.png"
  alt="Smart Search example"
/>

In this example, the query `go␣buf␣byte␣parser` was first searched literally.
The exact string didn't find any results, and Sourcegraph would normally just
report "No results". With Smart Search enabled, we make a guess that the user
might have meant `go` to refer to the desired language, so we convert `go` to a `lang:Go` filter. We
also convert remaining patterns to the expression `buf AND byte AND parser` to
find files contain all of the terms, in any order. Smart Search immediately
shows results for this newly generated query, and the number of results found. 

We found a combination of key parts make this idea work well in practice:

- Only run Smart Search when the original query finds no results. Otherwise, we
  risk drastically changing behavior that users are already accustomed
  to.

- Only report generated queries and their associated results if there really
  are results. That is, if a query suggestion appears, it guarantees that
  results exist for the associated query.

- Make the behavior togglable in the UI <span style={{display: "inline-flex", verticalAlign: "middle", margin: "2px", height: "18px"}}><img style={{width: "18px", height: "18px", margin: "0px"}} src="https://storage.googleapis.com/sourcegraph-assets/about.sourcegraph.com/blog/2022/smart-search-bar-lightning.png"/></span>. It should be possible to deactivate Smart Search because it is sometimes useful to check the _absence_ of particular results, like bad coding patterns.

- Use a fixed set of transformation rules to generate queries for common pitfalls and cap the number of generated queries and result set size. This ensures we don't run an excessive amount of additional searches and impact overall performance.

#### How we measured effectiveness

Before shipping Smart Search, we gauged its potential impact on search performance and usability. We ran an A/B test on our public [Sourcegraph.com](https://sourcegraph.com/search) instance for 5 weeks across more than 10,000 unique users and collected anonymized, aggregate data on search result click rate. Half of the users received Sourcegraph with Smart Search enabled and the other half without. Here are our main results (find more details in the [full study preprint](https://arxiv.org/pdf/2212.03459.pdf)).

- Users are **22%** more likely to click on a search result at all on any given
  day, compared to the baseline. Below is a cumulative distribution function
  showing the breakdown of users who click on a result at all on a given day,
  and the relative improvement when running alternative queries.

<img
  style={{marginTop: "20px", marginBottom: "20px"}}
  src="https://storage.googleapis.com/sourcegraph-assets/about.sourcegraph.com/blog/2022/smart-search-click-result.png"
  alt="Smart Search click improvement result"
/>

- Of the rules tested, users most frequently benefit from patterns that are
  separated by `AND` operators versus literal search. Second, users benefit
  from patterns that could be quoted/unquoted without needing to manually
  escape punctuation. Results still get clicked for patterns converted to
  regular expressions or language filters (an absolute improvement over "No
  results"), though less frequently.

<img
  style={{marginTop: "20px", marginBottom: "20px", width: "60%"}}
  src="https://storage.googleapis.com/sourcegraph-assets/about.sourcegraph.com/blog/2022/smart-search-rule-click-distro-3.png"
  alt="Smart Search rule click distribution"
/>

- On average **22%** of all users trigger Smart Search on a given day on one
  or more of their queries. On average **12%** of all searches trigger Smart
  Search.

#### Bottom line

Evaluating alternative queries generally leads to users finding relevant
results more often (<span style={{color: "#2c8c2c"}}>+22%</span> result click
rate) with no extra interaction required (users don't need to read or click on
query suggestions). There is some performance overhead:
additional searches are run on average <span style={{color: "#bf3a00"}}>12%</span> of the time. In
our experience we find the overhead is worth the cost of improving code search ergonomics.

See the [preprint of the full study](https://arxiv.org/pdf/2212.03459.pdf) for more details. The [Smart Search feature documentation](https://docs.sourcegraph.com/code_search/explanations/features#smart-search) contains up-to-date descriptions of the feature in Sourcegraph as it evolves.
