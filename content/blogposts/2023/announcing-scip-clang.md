# Announcing scip-clang: a new SCIP indexer for C and C++

[scip-clang](https://github.com/sourcegraph/scip-clang) is our new indexer
for C and C++ code written from the ground up to natively emit [SCIP](https://github.com/sourcegraph/scip)
and especially support the wide range of language features present in C++.

scip-clang is now available in beta, and replaces our older indexer lsif-clang.
We've successfully indexed large codebases such as Chromium with scip-clang.

Here's a quick demo showcasing some features:

{/* TODO: Add demo here */}

scip-clang supports a superset of the functionality of lsif-clang.
The main additions are:

- scip-clang is more fault-tolerant: Indexing failures, such as crashes,
  when processing a single translation unit, do not affect indexing
  for other translation units.
- scip-clang natively supports code navigation for `#include` pragmas and macros.
- scip-clang is based on Clang 16 instead of Clang 11.
  It consumes Clang as a library rather than as a fork,
  making it easy to update the version of Clang used in the future.

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

Please [try out scip-clang](https://github.com/sourcegraph/scip-clang),
and let us know if you run into issues,
or if you have feedback for improvement.

As with our other indexers, open source maintainers are also welcome
to use scip-clang to index their projects
and upload indexes to Sourcegraph.com
to benefit from precise code navigation for C and C++.

## A word about performance

scip-clang requires a traversal of the abstract syntax tree
after type-checking the code, so that type information is available.

Compared to a baseline of type-checking all translation units in parallel,
scip-clang takes about 30% more time.

In the future, we will be able to reduce this overhead in two ways:
- [Optimizing the release build](https://github.com/sourcegraph/scip-clang/issues/27)
  by using well-known techniques such as ThinLTO and PGO.
- [Parallelizing the index merging step](https://github.com/sourcegraph/scip-clang/issues/139),
  which combines information about forward declarations
  and project-external symbols across translation units.
  Depending on codebase size and core count,
  about 10%-40% of the overall indexing time is spent in index merging.

Compared to our indexer lsif-clang, scip-clang takes about 80%-90%
more time to index the same codebase. The reason for this is that lsif-clang
avoids type-checking many declarations, such as compiler-synthesized ones,
since they are not indexed.
We're interested in [surfacing information about synthesized declarations](https://github.com/sourcegraph/scip/issues/117#issuecomment-1422654456) in the future,
so it may not make sense to perform this same optimization in scip-clang,
only to remove it at a later stage.

We hope that the improved robustness and
higher quality code navigation with scip-clang
make up for the loss in performance for current lsif-clang adopters.

## What's next

In the coming months, we're looking to bring scip-clang up to parity
with our other indexers. In particular, we'll be adding support for
[cross-repo navigation](https://github.com/sourcegraph/scip-clang/issues/184),
as well as proper handling for
complex language features like [template specializations](https://github.com/sourcegraph/scip-clang/issues/278).