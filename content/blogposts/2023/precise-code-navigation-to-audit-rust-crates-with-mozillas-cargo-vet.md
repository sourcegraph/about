---
title: 'Precise code navigation to audit Rust crates with Mozilla’s Cargo Vet'
authors:
  - name: Justin Dorfman
    url: https://twitter.com/jdorfman
publishDate: 2023-04-18T10:00-07:00
description: 'How we indexed all public rust crates to help secure the Rust ecosystem with Mozilla'
tags: [blog]
slug: 'precise-code-navigation-to-audit-rust-crates-with-mozillas-cargo-vet'
published: true
heroImage: 
socialImage: 
---


At Sourcegraph, we're on a mission to create a world where everyone can code. We believe that helping developers understand and trust their dependencies is an important step in this process.

In this post, we'll look at how Sourcegraph created a complete and up-to-date index of all public Rust crates and how we partnered with Mozilla on a project to help secure the Rust ecosystem.

## We indexed all the crates

![A man loading a new crate onto a box of existing crates](https://i.ritzastatic.com/images/c7b16392581342cd9bf5c667ab4f3a99/loading-cargo.png)

Sourcegraph maintains a complete and precise index of all versions of all available Rust crates. The number has grown since, but back when we first completed our index, the index covered 727,538 versions across 103,939 crates.

As of 2023, crates.io boasts over 111,000 Rust packages and has recorded over 30 billion downloads since its inception in 2014. The growth of this impressive registry [shows no signs of slowing down](https://lib.rs/stats).

Our experience with npm taught us that the size of a language's package registry isn't an indication of the community's health. In fact, an extensive registry can sometimes reflect a lack of trust within the ecosystem.

When package maintainers and users find it difficult to navigate and trust third-party code, the answer is almost always more code and new packages. This proliferation makes it hard for newcomers to pick up and use packages without extensive research and comparison, which further perpetuates the problem.

We believe that enabling trust should be a key focus of any package registry and trusting third-party code starts with tools that make it easier to find, read, and understand code.

This is why we created a precise index of all versions of all Rust crates.

## How Sourcegraph's Rust index works

Sourcegraph indexes Rust packages by mirroring the versions installed by Cargo, the Rust package manager. This ensures that the indexed code matches what you would download and use in your projects.

Sourcegraph then compiles the Rust code using [rust-analyzer](https://github.com/rust-lang/rust-analyzer), saving the output as SCIP index files.

[SCIP](https://github.com/sourcegraph/scip), pronounced "skip", was developed at Sourcegraph as a successor to LSIF. The name is recursive: SCIP Code Intelligence Protocol, which demonstrates that we're not only real programmers but also masters of lighthearted wit.

You can read more about why we built SCIP on our [announcement blog post](https://about.sourcegraph.com/blog/announcing-scip) but in short, SCIP is faster than LSIF, easier to work with, and enables incremental updates to our indexes. This last point is important because, unlike with LSIF, we can now patch an index with only the changes when a new version of a crate is published. This helps us to continually keep our index up to date, with new versions appearing in search results shortly after being published.

## Precise code navigation

Our complete Rust index enables us to create precise code navigation across the entire dependency tree of a Rust package.

For instance, clicking on the `Receiver` symbol in the `rust-analyzer` crate on Sourcegraph opens a popup with a link to this struct's definition in the `crossbeam` crate's code.

![Screenshot of Sourcegraph precise code navigation with jump-to-definition across repositories](https://i.ritzastatic.com/images/679830a016014146a5cee957cdbea68d/precise-popup-annotated.png)

Sourcegraph also allows you to list and navigate references to Rust symbols. Continuing our example, when you click on the `Receiver` struct in the `crossbeam` crate's code, you'll see a button to find references to this struct. Click this button to open a list of all the known references to `Receiver`.

![Screenshot of Sourcegraph precise code navigation with references across repositories](https://i.ritzastatic.com/images/3438ae920fb64516a46b0dee08425a8f/references-annotated.png)

Precise navigation allows us to accurately link to the exact references and definitions for symbols.

## Adding precise code navigation to your Sourcegraph instance

On-premises and dedicated Sourcegraph users can control how their Rust projects are indexed and which dependencies to include in their indexes. The simplest way to do this is to run our GitHub action that compiles Rust code to SCIP and uploads the index files to your Sourcegraph instance.

Uploaded index files are processed asynchronously from a queue. Each upload has an attached state that can change over time as work associated with that data is performed. For more about these states and possible outcomes of an index upload, see our [documentation on uploads](https://docs.sourcegraph.com/code_navigation/explanations/uploads).

Users can configure Sourcegraph to sync [Rust dependencies](https://docs.sourcegraph.com/admin/external_service/rust) from any Cargo repository.

## Searching crates

You can use Sourcegraph to search our index of Rust crates by adding `repo:^crates` to your search queries.

For example:

1. [Show crates with `rust` in the repo name](https://sourcegraph.com/search?q=context:global+repo:%5Ecrates/.*rust.*%24+count:4000&patternType=regexp&sm=0&groupBy=repo)
2. [Compare changes across versions of `libc`](https://sourcegraph.com/crates/libc/-/compare/...v0.2.138)
3. [Display crates with a license](https://sourcegraph.com/search?q=context:global+repo:%5Ecrates+repo:contains.file%28LICENSE%29+count:100&patternType=standard&sm=0&groupBy=repo)

![A warehouse showing people packing crates with a counter on the wall showing over 20 billion downloads](https://i.ritzastatic.com/images/495088bec6784c91aa08e37288e26700/vetting-cargo.jpg)

## Vetting the cargo

We've been collaborating with a team at Mozilla led by [Bobby Holley](https://twitter.com/bhology) on a project called [Cargo Vet](https://mozilla.github.io/cargo-vet/). This tool helps projects ensure that their third-party Rust dependencies have been audited by entities they trust.

Cargo Vet makes it simple to audit only the necessary dependencies for a project. When dependencies need to be audited, Cargo Vet links to crates and diff views on Sourcegraph with precise code navigation.

Open-source supply chain security has become a hot topic of late and we are all for it. When it comes to FOSS supply chain security, we as a community have been sleeping at the wheel for too long. It wasn’t until incidents like Heartbleed and Log4Shell that developers began thinking twice about installing a dependency.

As Bobby and his team say in their [motivation for Cargo Vet](https://mozilla.github.io/cargo-vet/motivation.html):

> Low-friction reuse of third-party components—via systems like crates.io or npm—is an essential element of modern software development. Unfortunately, it also widens the set of actors who can introduce a security vulnerability into the final product.

## Using the Cargo Vet Sourcegraph integration

After walking the developer through the process of determining what to audit, Cargo Vet presents the relevant artifacts for inspection on Sourcegraph. Here is how you can do that with the popular Rust crate Syn.

Install `cargo vet`:

```bash
cargo install cargo-vet
```

Next, choose/clone a Rust project:

```bash
git clone https://github.com/dtolnay/syn
cd syn/
```

Then run:

```bash
cargo metadata
cargo vet init
cargo vet diff --mode sourcegraph syn 1.0.107 1.0.106
# (press ENTER/return to open in your browser)
```

![Animation showing how to use cargo-vet](https://i.ritzastatic.com/images/1d2a924b5de54505bff8dba6d5a61b6c/cargo-vet.gif)

## Closing thoughts

To secure the FOSS supply chain, we all need to work together. Building tools that help prevent the further spreading of vulnerable software will help sustain our digital infrastructure and bring more innovation that moves us forward as a society.

If you run an open-source project that could benefit from a Sourcegraph integration similar to Cargo Vet, we want to hear about it. Join our Discord and let’s talk.

<hr>

Thanks to the following people for helping with this post: *Fabiana Castellanos, Varun Gandhi, Camden Cheek, Noah Santschi-Cooney*

About the author<br>Justin Dorfman is Sourcegraph’s Open Source Program Manager and is responsible for fostering the adoption of code intelligence in the open source community. You can chat with Justin on Twitter [@jdorfman](https://twitter.com/jdorfman) or our [community Discord](https://about.sourcegraph.com/community).
