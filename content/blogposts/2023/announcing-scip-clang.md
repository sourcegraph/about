---
title: 'Announcing scip-clang: a new SCIP indexer for C and C++'
authors:
  - name: Varun Gandhi
    url: https://github.com/varungandhi-src
publishDate: 2023-05-15T10:00-07:00
description: 'scip-clang is our new SCIP indexer for C and C++ supporting precise code navigation in Sourcegraph, supporting a wide variety of language features.'
tags: [blog]
slug: 'announcing-scip-clang'
published: true
---

[scip-clang](https://github.com/sourcegraph/scip-clang) is our new indexer
for C and C++ code written from the ground up to natively emit [SCIP](https://github.com/sourcegraph/scip)
and especially support the wide range of language features present in C++.

For teams using C and C++,
indexing your code with scip-clang can provide
a significantly improved code navigation experience in Sourcegraph,
similar to editors like VS Code (based on clangd) and CLion.
scip-clang's precise code navigation is aware of build configurations,
macros, and type information.
Some examples of when this is particularly useful:
- Navigating class hierarchies, such as those using virtual functions
  with overriding, or the
  [Curiously Recurring Template Pattern](https://en.wikipedia.org/wiki/Curiously_recurring_template_pattern).
  In such cases, identically named methods appear in multiple class
  definitions, leading to false positives with search-based code navigation.
- Different C++ container types often use identical method names
  like `find` and `contains`, which may have multiple overloads.
  Precise code navigation enables accurately navigating
  to the correct method overload in the correct type
  without false positives.
- Understanding whether a definition comes from inside a macro expansion.
  In such cases, since the definition is not explicitly available
  in the source, it is not accessible to search-based code navigation.
  However, precise code navigation can accurately point to the macro expansion.

You can explore precise code navigation powered by scip-clang in the following repositories:[^1]
[Chromium](https://sourcegraph.com/github.com/chromium/chromium@b21c706/-/blob/base/atomic_ref_count.h?L19:7-19:21#tab=references) (C++),
[LLVM](https://sourcegraph.com/github.com/llvm/llvm-project@39a0677/-/blob/llvm/include/llvm/Support/raw_ostream.h?L52:7-52:18#tab=references) (C++),
[Postgres](https://sourcegraph.com/github.com/postgres/postgres@63932a6d38e5dfa6df2a51a04b7314ec1e4d3de7/-/blob/src/backend/optimizer/plan/setrefs.c?L289:21-289:32#tab=references) (C).
![Precise code nav in Chromium](https://github.com/sourcegraph/scip-clang/assets/93103176/55ec1429-eef0-4b7d-a99a-0c3c6af23e92)

[^1]: The code was indexed using default build settings on Linux, so it may lack precise code graph data for platform-specific code like Android, macOS, Windows etc.

Here's a quick demo showcasing some features in action:

<div style={{position: 'relative', paddingBottom: '77.14285714285715%', height: 0}}>
  <iframe
      src="https://www.loom.com/embed/9b3da67e5c984ffa9ecb9cda3610df08"
      frameBorder="0"
      allowFullScreen={true}
      style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>
  </iframe>
</div>
<br/>

scip-clang supports a superset of the functionality of lsif-clang.
The main additions are:

- scip-clang is more fault-tolerant: Indexing failures, such as crashes,
  when processing a single translation unit, do not affect indexing
  for other translation units.
- scip-clang natively supports code navigation for `#include` pragmas and macros.
- scip-clang is based on Clang 16 instead of Clang 11.
  It consumes Clang as a library rather than as a fork,
  making it easy to update the version of Clang used in the future.
<br/>

Additional quality-of-life improvements include:

- scip-clang infers paths to standard headers for GCC and Clang
  from the compilation database without requiring extra command-line flags.
- scip-clang binaries are available for both Linux and macOS.
- Despite supporting more features, thanks to SCIP, index sizes
  (both compressed and uncompressed) are about
  10%-20% the size of the corresponding LSIF indexes.
  This translates to faster uploads, a lower likelihood of upload errors,
  and reduced risk of out-of-memory when the Sourcegraph backend
  processes an index.
- scip-clang uses incremental parsing for compilation databases,
  reducing the risk of out-of-memory errors on ingestion.
<br/>

scip-clang is now available in beta.
Please [try it out](https://github.com/sourcegraph/scip-clang#quick-start),
and let us know if you run into issues,
or if you have feedback for improvement.
As with our other indexers, open source maintainers are welcome
to use scip-clang to index their projects
and upload indexes to Sourcegraph.com
to benefit from precise code navigation for C and C++.

## A word about performance
<br/>
scip-clang requires a traversal of the abstract syntax tree
after type-checking the code, so that type information is available.

Two possible baselines are comparing to purely type-checking
all translation units in parallel, and comparing to a fast build
(no debug information and no optimizations).

We've shown the current performance numbers below for two
different configurations:
1. Project 1 with 480K SLOC (26M SLOC after preprocessing), tested on a 22 core machine
2. Project 2 with 2.75M SLOC (460M SLOC after preprocessing), tested on an 88 core machine

|  Operation              | Normalized time (config 1) | Normalized time (config 2) |
|:-----------------------:|---------------------------:|---------------------------:|
| Type-checking only      |                       1.00 |                       1.00 |
| From-scratch fast build |                       1.70 |                       2.30 |
| scip-clang indexing     |                       1.29 |                       1.52 |
| lsif-clang indexing     |                       0.84 |                       1.02 |

Compared to a baseline of type-checking all translation units in parallel,
scip-clang takes about 30%-50% more time.

In the future, we will be able to reduce this overhead in two ways:
- [Optimizing the release build](https://github.com/sourcegraph/scip-clang/issues/27)
  by using well-known techniques such as profile-guided optimization,
  and changing the default allocator.
- [Parallelizing the index merging step](https://github.com/sourcegraph/scip-clang/issues/139),
  which combines information about forward declarations
  and project-external symbols across translation units.
<br/>

With these optimizations, indexing should take less than 10%
extra time compared to type-checking.

Perhaps more surprising is the difference between lsif-clang
and scip-clang, where scip-clang takes about 50% more time.
The reason for this is that lsif-clang
avoids type-checking many declarations,
such as compiler-synthesized ones, since they are not indexed.
We're interested in [surfacing information about synthesized declarations](https://github.com/sourcegraph/scip/issues/117#issuecomment-1422654456) in the future,
so it may not make sense to perform this same optimization in scip-clang,
only to remove it at a later stage. 

We hope that the improved robustness and
higher quality code navigation with scip-clang
make up for the loss in performance for current lsif-clang adopters.

## The road ahead
<br/>
In the coming months,
we'll be adding support for
[cross-repo navigation](https://github.com/sourcegraph/scip-clang/issues/184),
as well as proper handling for complex language features
like [template specializations](https://github.com/sourcegraph/scip-clang/issues/278).
This will bring scip-clang up to parity
with our other indexers in terms of language support.

With respect to performance,
the bigger elephant in the room is incrementality.
Many large codebases utilize caching and incrementality
via build systems like Bazel
to keep up with high commit velocity.

In an ideal world, the indexer would be able to leverage
the incrementality from the build system to only reindex changed code.
For large codebases, this would bring indexing time from 1-2 hours
on a high core count machine to within a few minutes for most changes,
making it possible to index every commit.
Supporting [incremental indexing](https://github.com/sourcegraph/scip-clang/issues/183)
is also on our roadmap.
