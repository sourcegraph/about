
---
title: 'New C++ precise code intelligence solution'
author: 'Garo Brik'
publishDate: 2020-07-20T00:00-07:00
tags: ["blog"]
slug: indexed-non-master-branches

---
## New C++ precise code intelligence solution (#[10175](https://github.com/sourcegraph/sourcegraph/issues/10175))

Developer: [Garo Brik](https://github.com/gbrik)

As part of our ongoing effort to extend precise code intelligence to as many languages as possible, we’ve developed [lsif-clang](https://github.com/sourcegraph/lsif-clang), a new LSIF indexer based on the [clangd language server](https://clangd.llvm.org/). This means that customers using C and C++ now have access to precise code intelligence. This improves on the work we did with [lsif-cpp](https://github.com/sourcegraph/lsif-cpp) in several ways:

*   Hovers: You’ll now see hover text, including type signatures and documentation when hovering symbols on C++ files.
*   More language support: clang doesn't just compile C++, and we're hoping to continue leveraging project's capabilities to extend LSIF support to more languages.
*   Performance gains: Because lsif-cpp was implemented by way of compiler plugin, the entire compiler pipeline had to be run to generate the index. With our new architecture, we only run the compiler frontend, which saves a lot of effort. We also directly emit the LSIF json rather than outputting to an intermediate format and converting after the fact. The exact savings are going to vary a lot depending on the codebase, because “only the compiler frontend” can mean a lot of things in C++, but many users should see big gains!
*   Standardised setup: lsif-clang determines how to compile your project based on a compile_commands.json database. This format is already in wide use, with tools to generate it for cmake, bazel, and make based projects, and this standardisation will make setting up the indexer a lot easier.

lsif-clang is a fork of [clangd](https://clangd.llvm.org/), and leverages the huge body of work that has already gone into efficient indexing of C++ projects. All the credit goes to the contributors who wrote clangd, we’ve simply added LSIF as an output format.

This project is still quite young, and we’re going to iterate on it quickly in the next little while. There will inevitably be some kinks with platform compatibility to iron out. It’s not guaranteed that lsif-clang wil be a better fit than lsif-cpp for every project since the C++ build ecosystem is so fragmented, so lsif-cpp will still be available indefinitely.
