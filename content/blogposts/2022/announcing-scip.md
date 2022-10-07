---
title: 'SCIP - a better code indexing format than LSIF'
description: We are excited to announce SCIP, a new indexing format that we are using at Sourcegraph to index programming languages to power code navigation features such as "Go to definition" and "Find references."
authors:
  - name: Ólafur Páll Geirsson
    url: https://twitter.com/olafurpg
publishDate: 2022-06-08T18:00+02:00
tags: [blog]
slug: announcing-scip
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/announcing-scip.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/announcing-scip.png
published: true
---

![SCIP - a better code indexing format than LSIF](https://storage.googleapis.com/sourcegraph-assets/blog/announcing-scip.png)

We are excited to announce SCIP, a new indexing format that we are using at Sourcegraph to index programming languages to power code navigation features such as “Go to definition” and “Find references.” We have been using another format called LSIF (Language Server Index Format) for this purpose and in this blog post we want to share the challenges we faced by using LSIF and how that led us to create SCIP. Code navigation is a critical component of the user experience on Sourcegraph and the underlying code navigation data, the main topic of this blog post, is also a building block for a suite of other products under Sourcegraph’s offering as a code intelligence platform.

This blog post is technical and primarily aimed at authors of developer tools that produce or consume metadata about programming languages. If you’re a Sourcegraph user and want to jump straight to trying out precise code navigation with scip-typescript (for TypeScript and JavaScript) or scip-java (for Java, Scala, and Kotlin), you can read more in their respective announcements, [here](announcing-scip-typescript) and [here](https://github.com/sourcegraph/scip-java/releases/tag/v0.8.0).

> Note on the name: SCIP is pronounced the same way as “skip” and it’s a recursive acronym that stands for “SCIP Code Intelligence Protocol.” SCIP is also a purposeful nod to SICP (Structure and Interpretation of Programs), a book about analyzing programs.

## Background: Precise code navigation and why we use LSIF

Sourcegraph code navigation such as “Go to definition” comes in two flavors: search-based and precise. Search-based code navigation is available out-of-the-box. It is fast and always available, but it can occasionally return false-positive and false-negative results. Precise code navigation, on the other hand, requires custom configuration to set up, but the results are compiler-accurate and work across repositories. Both search-based and precise code navigation are useful in their own ways. While search-based is less powerful, it is a quick and convenient solution. Precise is more powerful, but it also requires more upfront investment to configure.

Search-based code navigation is powered by tools like ctags and tree-sitter and precise code navigation at Sourcegraph has been powered by LSIF. Precise language indexers first write LSIF to disk, and then users upload the LSIF to our Sourcegraph backend, which processes the LSIF index before storing it in our database. The final result of this pipeline is that users benefit from compiler-accurate code navigation on Sourcegraph that works across multiple repositories.

## Challenges of scaling up LSIF

We have created dozens of LSIF indexers ranging from prototype quality to production quality. Among our most established indexers we support Go, Java, Scala, Kotlin, TypeScript, and JavaScript.

We are also using LSIF at scale. At the time of this writing, over 45k repositories on [sourcegraph.com](https://www.sourcegraph.com) have precise code navigation enabled and we process, on average, more than 4k LSIF uploads per day.

As our usage of LSIF has grown, we have encountered several limitations of the protocol:

- Slow development velocity caused by the lack of static types. LSIF doesn’t come with a machine-readable schema, and the dynamic graph structure makes it difficult to encode LSIF payloads as a simple set of structs or classes in most programming languages.
- Slow performance caused the need to hold large in-memory data structures when writing or reading the graph encoding of LSIF payloads.
- Difficulty of manually debugging raw LSIF payloads caused by the heavy usage of opaque ID numbers to encode the graph structure.
- Complexity of implementing incremental indexing, which becomes necessary for large codebases. The heavy usage of opaque global IDs imposes an ordering constraint on how symbols (or ‘resultSet’) get added to the index, making it tricky to deal with cyclic dependencies in files, among other common situations. Globally incrementing IDs make it difficult, as well, to update an existing index with new information for only a subset of the documents.

Most of these issues boil down to the graph encoding of LSIF, which heavily relies on opaque ID numbers to connect edges and vertices. To address these problems, we created SCIP as a Protobuf schema that is centered around human-readable string IDs for symbols replacing the concept of ‘monikers’ and ‘resultSet’.

## SCIP: faster, smaller, simpler language indexers

The SCIP Protobuf schema is [available in the sourcegraph/scip](https://sourcegraph.com/github.com/sourcegraph/scip/-/blob/scip.proto) repository and includes comprehensive documentation on how to encode relationships between symbols and source locations. The design of SCIP is heavily inspired by [SemanticDB](https://scalameta.org/docs/semanticdb/specification.html), another code indexing format that was pioneered in the Scala ecosystem.

We are already using SCIP in our indexers scip-typescript (which supports TypeScript and JavaScript), and scip-java (which supports Java, Scala, and Kotlin). After we started using SCIP, we experienced a wide range of benefits:

- Faster development time to implement new language indexers thanks to multiple quality-of-life improvements when working with SCIP compared to LSIF. These improvements include having static types from the Protobuf schema, giving us rich code completions in the editor and reducing the risk of runtime errors caused by typos. We also experienced more ergonomic debugging thanks to being centered around human-readable symbols instead of opaque numeric IDs, and reduced need to bookkeep unnecessary abstractions like import/export monikers that silently break navigation if you get it wrong.
- The indexers have better runtime performance. For example, we experienced a 10x speedup in our CI when replacing lsif-node with scip-typescript (although note that the speedup is not attributed to protocol differences alone).
- The resulting index file takes less disk space. We’re observing that LSIF indexes are on average 4x larger when gzip compressed compared to the equivalent SCIP payloads. Uncompressed LSIF payloads are ~5x larger.
- The indexers are easier to test. We have built a snapshot testing utility on top of SCIP that we’re reusing across indexers. Snapshot testing with LSIF payloads, in contrast, has been [painful](https://github.com/sourcegraph/scip/pull/27/files#diff-9c76847e0d19bedf4d9afbdfbe5e11046b73d78c80437d6adf7c6e7704052c66R23) in our experience.

Don Stewart, an engineer at Meta, has integrated SCIP with [Glean](https://glean.software), the system that’s used at Meta for collecting, deriving, and querying facts about code. Don shared on Twitter that SCIP is “8x smaller, and can be processed 3x faster” in comparison with LSIF.

<br/>
<blockquote className="twitter-tweet"><p lang="en" dir="ltr">Fri-yayy so hacked up native <a href="https://twitter.com/sourcegraph?ref_src=twsrc%5Etfw">@sourcegraph</a> SCIP support for TypeScript repos in Glean. The SCIP data is protobuf-encoded and typed, so compared to LSIF its about 8x smaller, and can be processed 3x faster. The mapping into Glean is ~550 loc, vs 1500 for LSIF. <br/><br/>Example queries: <a href="https://t.co/AZIRqVURLR">pic.twitter.com/AZIRqVURLR</a></p>&mdash; Don Stewart (@donsbot) <a href="https://twitter.com/donsbot/status/1530069211032465408?ref_src=twsrc%5Etfw">May 27, 2022</a></blockquote> 
<script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
<br/>

Going forward, we anticipate SCIP additionally unblocks the following use-cases that we previously struggled to support with LSIF:

- **Incremental indexing**: once implemented, SCIP users will experience shorter waiting time for precise code navigation to become available on Sourcegraph after a git push because our backend only needs to index the files that have changed instead of the entire repository on every commit.
- **Cross-language navigation**: once implemented, SCIP users will, for example, be able to navigate between Protobuf and generated Java/Go Protobuf bindings, helping them find relevant code examples that were previously unavailable with both search-based and precise code navigation.

We’re planning to use SCIP for all new indexers going forward. If you’re writing an LSIF indexer and want to target Sourcegraph, we recommend using SCIP instead of LSIF. If you’re writing a tool that consumes LSIF then we encourage you to consider consuming SCIP instead to enjoy the same benefits that we have from making the switch. Don’t hesitate to reach out [on GitHub](https://github.com/sourcegraph/scip) and ask for help if you have any questions.

## Compatibility with LSIF

While we are excited to grow our usage of SCIP, we care deeply about compatibility with the existing LSIF ecosystem and will continue to accept LSIF uploads on Sourcegraph. Any tool that consumes LSIF can also consume SCIP by running our [`scip`](https://github.com/sourcegraph/scip) command-line tool that converts a SCIP payload into an LSIF v0.4.3 payload. In fact, we use this compatibility layer ourselves at the moment when uploading SCIP indexes to Sourcegraph because our backend still only processes LSIF.

## Index TypeScript and Java with SCIP today

To pair with this announcement, we are releasing two new SCIP indexers:

- **scip-typescript**: TypeScript and JavaScript indexer built on top of the TypeScript typechecker. [Learn more about using this indexer here](announcing-scip-typescript).
- **scip-java**: Java, Scala, and Kotlin indexer built on top of compiler plugins for each respective language. [Learn more about using this indexer here](https://github.com/sourcegraph/scip-java/releases/tag/v0.8.0).

You can use the indexers above to enable precise code intelligence in Sourcegraph for their respective languages, or to simply migrate from LSIF to SCIP.

We are also working on a SCIP Python indexer, which we plan to release very soon. Give these indexers a try to get started with SCIP, and don’t hesitate to reach out [on GitHub](https://github.com/sourcegraph/scip) and ask for help if you have any questions.
