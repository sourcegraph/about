---
title: 'Cross-repository precise code navigation for C and C++'
authors:
  - name: Varun Gandhi
    url: https://github.com/varungandhi-src
publishDate: 2023-06-12T10:00-07:00
description: 'Sourcegraph now supports cross-repository precise code navigation for C and C++ for code indexed by scip-clang.'
tags: [blog]
slug: 'c-cpp-cross-repo'
published: true
---

We're excited to announce cross-repository precise code navigation support
for C and C++ in [scip-clang](https://sourcegraph.com/github.com/sourcegraph/scip-clang).
This feature addition brings scip-clang up to parity with our other SCIP indexers,
and provides best-in-class online code navigation for C++ codebases spread out across
multiple repositories.

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

<!-- TODO: Should we mention Boost? On one hand, it's an easily recognizable name,
  and I indexed the different libraries in it, but the caveat is that some headers were not
  indexed because the compilation database generated was incomplete,
  because not all code in Boost is buildable by CMake,
  and I used CMake to generate the compilation database,
  since Boost's official build system B2 doesn't seem to support emitting
  a compilation database.
-->

Cross-repository code navigation works for all features supported by scip-clang,
such as types, methods, macros, forward declarations etc.

The primary change required to benefit from cross-repository code navigation
is supplying an extra package map file in JSON format, which describes:
- The root directories for third-party packages, so that scip-clang
  can correctly translate on-disk paths to paths in Sourcegraph.
- Package name and version information, so that scip-clang can correctly
  identify which symbol belongs to which package.

The package map JSON format offers a flexible way
of providing package information that can be targeted
by different build systems and package managers.

<!-- TODO: Better wording? Omit? -->
Ideally, scip-clang would automatically infer package information from file system layout,
but the large variety in build systems and package management strategies
in the C and C++ ecosystems make this approach unfeasible in general.

More details about the package map format, including examples,
can be found in the [scip-clang documentation](https://sourcegraph.com/github.com/sourcegraph/scip-clang/blob/main/docs/CrossRepo.md).

<!-- Not sure how much detail I should provide on the problem
  with deep dependency trees and the point about feedback being
  needed on helping prioritize what to work on next.

## Next steps

Quadratic scaling for deep dependency trees due to forward declarations.
https://github.com/sourcegraph/scip-clang/blob/main/docs/CrossRepo.md#limitations
-- Looking for feedback on suitable solution

One of the other sources of complexity is the presence of different
standard libraries for C and C++. Not only do these vary across platforms,
but even on Linux, there are different standard libraries for each language:
glibc and musl being the most popular for C,
and libstdc++ and libc++ being the popular ones for C++.

-->