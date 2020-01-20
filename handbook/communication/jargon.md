# Jargon file

This page is a collection of terms and phrases (roughly categorized) which have a specific internal meaning. This list should be treated as a living document and should be updated when new terms come into use, when old terms are given a new or altered meaning, and when old terms are met with confusion (e.g during onboarding).

Some terms in this document may only be useful for internal communication. For concepts which are also user-facing, the public description should be used over any alternate internal description.

## General terminology

This section contains terminology that was defined outside of and is not specific to Sourcegraph, but is used to describe Sourcegraph features and technology.

### Code intelligence

- **Language Servers** are a long-running program that performs semantic analysis over code and answers code intelligence queries (e.g. find definitions, find refrences, get hover text) from clients.
- **Language Server Protocol (LSP)** is the RPC-based protocol used between Language Servers and clients.
- **Language Server Index Format (LSIF)** is a specification by Microsoft that captures a subset of data returned by queries to a language server. It allows queries to be answered without running a language server.

## Sourcegraph-specific

This section contains terminology that is defined within Sourcegraph or is specific to a Soucegraph feature or technology.

### Code intelligence

- **Precise code intelligence** (find definitions, find references, get hover text) is provided by semantic analysis over source code (currently LSIF or LSP). Answers provided by code intelligence can assumed to be correct.
- **Search-based code intelligence** (find definitions, find references, get hover text) is provided by the basic code intelligence extension and is powered by code search. It uses heuristics (file extensions, import parsing) to prune the result set of obviously incorrect search results. This type of code intelligence can have many false positive results. This type of code intelligence used to be referred to internally as _basic_ or _fuzzy code intelligence_.
