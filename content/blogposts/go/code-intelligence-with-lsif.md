---
title: 'Code intelligence with LSIF'
authors:
  - name: Chris Wendt
publishDate: 2019-09-10T00:00-07:00
tags: [
  "blog"
]
slug: code-intelligence-with-lsif
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png
published: true
description: 'Code intelligence with LSIF'
---

<Alert type="info">
  Want to use LSIF for precise code intelligence on Sourcegraph? See "[LSIF: Fast and precise code intelligence (Sourcegraph documentation)](https://docs.sourcegraph.com/code_intelligence/explanations/precise_code_intelligence)".
</Alert>

Since the [last code intelligence update](https://about.sourcegraph.com/blog/improving-language-support-in-2019), we have shifted our efforts away from improving language servers. We found that language servers were hard to develop due to the number of build and dependency systems per language, hard to deploy and connect to a Sourcegraph instance, and hard to make fast enough to meet our user's expectations. The Sourcegraph 3.0 release in February included [zero configuration code intelligence for the 20+ most popular languages](https://github.com/sourcegraph/sourcegraph-basic-code-intel) based on ctags and text search. This has provided a much better default experience for Sourcegraph customers, but there is one limitation: results are imprecise unless a customer configures a language server.

Now, we are working on a new way of providing code intelligence that’s both fast and precise. The idea is to use compiler frontends to precompute code intelligence data in a project-specific build environment and then upload that data to Sourcegraph. This has a lot of benefits:

- Precision and correctness: code analysis is performed in the proper build environment for the project using the same compiler frontend as your normal build.
- Fast: since the code intelligence data is precomputed, go to definition and find references are essentially table lookups.
- Precedent: this is how the largest software companies provide code intelligence to their employees.

Here’s what the setup process will look like:

- Add a step to your CI that runs on each commit or daily (depending on the repository size)
- In that step, generate code intelligence data and upload it to Sourcegraph (this is similar to other build artifacts such as code coverage information)

What format is that code intelligence data in? We are using [LSIF](https://github.com/Microsoft/language-server-protocol/blob/master/indexFormat/specification.md) (Language Server Index Format), which is a graph of code intelligence information such as definitions, references, hover documentation, similar in spirit to [Kythe](https://kythe.io). The graph is comprised of vertices for each definition/reference/hover and edges that connect references to definitions.

To learn more, check out our lightning talk about LSIF from GopherCon 2019:

<div className="text-center">
	<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/fMIRKRj_A88"frameBorder="0" allow="accelerometer; autoPlay; encrypted-media; gyroscope; picture-in-picture"allowFullScreen></iframe>
</div>

We have found that developing LSIF indexers is much easier than language servers. A one-shot command line tool that runs in the proper build environment and writes data to file is simpler than implementing a long lived remote LSP server. In the few weeks that we’ve been working on LSIF support we have been able to create new LSIF exporters for [Go](https://github.com/sourcegraph/lsif-go), [Python](https://github.com/sourcegraph/lsif-py), and [C/C++](https://github.com/sourcegraph/lsif-cpp). Microsoft has also already created LSIF exporters for [TypeScript](https://github.com/microsoft/lsif-node) and [Java](https://github.com/microsoft/lsif-java).

We are looking forward to working with customers to start producing LSIF data in their build pipelines so that they can enjoy the benefits of fast precise code intelligence.

If you are interested to work on code intelligence at Sourcegraph, [we're hiring](https://hire.withgoogle.com/public/jobs/sourcegraphcom/view/P_AAAAAADAAADP_pY7jAAAXU?trackingTag=sourcegraphCodeIntelBlog)!
