---
title: 'Cross-repository precise code navigation for C and C++'
authors:
  - name: Varun Gandhi
    url: https://github.com/varungandhi-src
publishDate: 2023-06-14T15:00-07:00
description: 'Sourcegraph now supports cross-repository precise code navigation for C and C++ for code indexed by scip-clang.'
tags: [blog]
slug: 'c-cpp-cross-repo'
published: true
---

We're excited to announce cross-repository precise code navigation support
for C and C++ in [scip-clang](https://sourcegraph.com/github.com/sourcegraph/scip-clang).
We [initially released scip-clang last month](https://about.sourcegraph.com/blog/announcing-scip-clang),
and this feature addition brings scip-clang up to parity with our other SCIP indexers,
providing best-in-class online code navigation
for C++ codebases spread out across multiple repositories.

Here is a demo showcasing how it works:

<div style={{position: 'relative', paddingBottom: '75.73632538569424%', height: 0}}>
  <iframe
      src="https://www.loom.com/embed/6db0a2dbfe47401b95d3e3f5cbb7bb51"
      frameBorder="0"
      allowFullScreen={true}
      style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>
  </iframe>
</div>
<br/>

Cross-repository code navigation works for all features supported by scip-clang,
such as [types](https://sourcegraph.com/github.com/sourcegraph/scip-clang@v0.2.0/-/blob/indexer/Indexer.h?L167:9-167:22#tab=references),
[methods](https://sourcegraph.com/github.com/sourcegraph/scip-clang@v0.2.0/-/blob/indexer/Indexer.cc?L68:23-68:30#tab=references),
[macros](https://sourcegraph.com/github.com/boostorg/assert@boost-1.82.0/-/blob/include/boost/assert.hpp?L60:10-60:22#tab=references),
[forward declarations](https://sourcegraph.com/github.com/sourcegraph/scip-clang@v0.2.0/-/blob/indexer/Indexer.h?L39:7-39:11#tab=references) etc.

The primary change required to benefit from cross-repository code navigation
is supplying an extra package map file in JSON format, which describes:
- The root directories for third-party packages, so that scip-clang
  can correctly translate on-disk paths to paths in Sourcegraph.
- Package name and version information, so that scip-clang can correctly
  identify which symbol belongs to which package.

The package map JSON format offers a flexible way
of providing package information that can be targeted
by different build systems and package managers.
We decided to go with this approach as
the large variety in C and C++ build tooling
makes it difficult for scip-clang to automatically
infer package information from file system layout.

More details about the package map format, including examples,
can be found in the [scip-clang documentation](https://sourcegraph.com/github.com/sourcegraph/scip-clang/-/blob/docs/CrossRepo.md).

Please try out the new cross-repository code navigation
and let us know what you think!
