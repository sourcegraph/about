---
title: 'More powerful code search on Sourcegraph'
authors:
  - name: Quinn Slack
    url: https://twitter.com/sqs
publishDate: 2017-11-01T00:00-07:00
tags: [
  "blog"
]
slug: more-powerful-code-search-on-sourcegraph
heroImage: https://images.ctfassets.net/le3mxztn6yoo/38oAzef5facQ0eeGESkUCy/53de2ea85149ed5d13c682035624c7fc/new-query-syntax.png
published: true
---

Today, we're releasing more powerful code search on Sourcegraph.com and Sourcegraph. You can use operators such as **repo:** and **file:** to restrict your search to certain repositories and files (by regular expression match on their name).

For example, **repo:foo** will restrict your query to repositories whose name contains “foo,” and likewise for **file:bar**.

Search scopes make it easier to quickly search only among the code you care about, such as all JavaScript files or only non-vendored code.

<Figure 
  src="//images.contentful.com/le3mxztn6yoo/Fko76K31Ic6q0KC8IKEue/7e0dff2bb462e5cc4d60d1e5a3a3505d/search-demo.gif" 
  alt="Search scopes demo, a more powerful code search on Sourcegraph"
/>

Try it out at [sourcegraph.com/search](https://sourcegraph.com/search) or on a [self-hosted Sourcegraph instance](https://docs.sourcegraph.com/#quickstart) now.

Use the search fields on the homepage to construct your query the first few times.

As you continue using it, you can express your query more quickly by using the operators (**repo:** and **file:**, etc.) in the main search box. Here are some sample queries (across a sample set of open source projects) to get you started:

* Search non-vendored files for “open file”: [**repogroup:sample -file:vendor/ -file:node_modules/ open file**](https://sourcegraph.com/search?q=open+file&sq=repogroup:sample+-file:vendor/+-file:node_modules/)
* Search repositories named “mux” in test files for “new route”: [**repogroup:sample file:(test|spec) repo:mux new route**](https://sourcegraph.com/search?q=repo:mux+new+route&sq=repogroup:sample+file:%28test%7Cspec%29)
* Search for occurrences of `partial<` in TypeScript files: [**`repogroup:sample file:\.ts$ partial<`**](https://sourcegraph.com/search?q=file:%5C.ts+partial%3C&sq=repogroup:sample)

Let us know what you think on Twitter ([@sourcegraph](https://twitter.com/sourcegraph)). To get advanced code search for your company's code, [install Sourcegraph](https://docs.sourcegraph.com).

p.s. One other minor improvement: You can now select multiple lines (and share a link to multiple lines) by shift-clicking on a line number to expand the selection when you're viewing a code file.

### About the author

_Quinn Slack is the CEO and co-founder of Sourcegraph, the code intelligence platform for dev teams and making coding more accessible to more people. Prior to Sourcegraph, Quinn co-founded Blend Labs, an enterprise technology company dedicated to improving home lending and was an egineer at Palantir, where he created a technology platform to help two of the top five U.S. banks recover from the housing crisis. Quinn has a BS in Computer Science from Stanford, you can chat with him on Twitter [@sqs](https://twitter.com/sqs)._
