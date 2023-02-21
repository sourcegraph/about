---
title: 'Indexing and vetting Rust’s open source supply chain'
authors:
  - name: Justin Dorfman
    url: https://twitter.com/jdorfman
publishDate: 2023-02-19T10:00-07:00
description: 'We have been working with a small team led by Bobby Holley at Mozilla on a project called cargo vet, which is a tool to help projects ensure that third-party Rust dependencies have been audited by a trusted entity.'
tags: [blog]
slug: 'indexing-vetting-rust-cargo-vet-mozilla'
published: true
---

![alt_text](https://storage.googleapis.com/sourcegraph-assets/blog/image4-cargo-vet.jpg "image_tooltip")

Our CTO Beyang Liu [wrote a blog post](https://about.sourcegraph.com/blog/why-index-the-oss-universe) about Sourcegraph’s ambitions to index the OSS universe. We have some updates we would like to share with you. 

1. Indexing the Rust community’s crate registry.
2. Partnering with Mozilla to help secure the Rust open source supply chain.

### The index

The Rust team launched crates.io in 2014. Fast forward to today, there are over 100,000+ crates available in the registry, totaling over 20 billion downloads. Rust first appeared on Stack Overflow’s yearly survey in 2019 under “most popular technologies.” The latest (2022) has it right behind Go. The bottom line: Rust is growing in popularity, and we will grow with it.

![alt_text](https://storage.googleapis.com/sourcegraph-assets/blog/image2-cargo-vet.png "image_tooltip")

We started indexing Rust crates [back in June](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/compare/a284c73e0f0118892066663063a531aff92cf838...20d07c3ec6d0d8fdaadb31e8b4c65ba3490ec2ce?utm_source=chrome-extension&utm_campaign=open-diff-on-sourcegraph#diff-5f4c066d3b85421b8da8afcec9970eb4) of last year, enabling [precise code navigation](https://docs.sourcegraph.com/code_navigation/explanations/precise_code_navigation) for Rust, including across crates What’s great about this index is that it [updates on the fly](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/compare/1f0ebb0ac86d41cb4585dce369aed914aea061a7...e92d876e1c6beae6084e65aa536853cdf0231950?utm_source=chrome-extension&utm_campaign=open-diff-on-sourcegraph&visible=1#diff-f5943471085b96822f6e7b8df5066ab5). For instance, if you compare two versions of a Rust library and a certain version number hasn’t been indexed yet, we will asynchronously download the crate and display the revisions between the two versions once it is ready.

#### Searching crates (examples):

To search the 100k+ crates in our index, you must begin each query with `repo:^crates` for example:

1. [Show crates with `syn` in the repo name](https://sourcegraph.com/search?q=context:global+repo:%5Ecrates+syn+count:100&patternType=lucky&sm=0&groupBy=repo)
2. [Compare changes across versions of `libc`](https://sourcegraph.com/crates/libc/-/compare/...v0.2.138)
3. [Display crates with a license](https://sourcegraph.com/search?q=context:global+repo:%5Ecrates+repo:contains.file%28LICENSE%29+count:100&patternType=standard&sm=0&groupBy=repo)


![alt_text](https://storage.googleapis.com/sourcegraph-assets/blog/image3-cargo-vet.jpg "image_tooltip")

### Vetting the cargo

We have been working with a small team led by [Bobby Holley](https://twitter.com/bhology) at Mozilla on a project called [cargo vet](https://mozilla.github.io/cargo-vet/index.html), which is a tool to help projects ensure that third-party Rust dependencies have been audited by a trusted entity.

Open source supply chain security has become a hot topic of late, and we are all for it. When it comes to FOSS supply chain security, we as a community have been sleeping at the wheel for too long. It wasn’t until incidents like Heartbleed and Log4Shell that developers began thinking twice about installing a dependency. 


    _“Low-friction reuse of third-party components — via systems like crates.io or npm — is an essential element of modern software development. Unfortunately, it also widens the set of actors who can introduce a security vulnerability into the final product.” – [Motivation of cargo vet](https://mozilla.github.io/cargo-vet/motivation.html#security-risks-of-third-party-code)_


#### Using the cargo vet Sourcegraph integration

After walking the developer through the process of determining what to audit, cargo vet presents the relevant artifacts for inspection on Sourcegraph. Here is how you can do that with the popular rust crate syn.

**Install the cargo vet subcommand:** 

```
cargo install cargo-vet
```

**Next, choose/clone a Rust project:**

```
git clone https://github.com/dtolnay/syn
cd syn/
```

**Then run:**

```
cargo metadata
cargo vet init
cargo vet diff --mode sourcegraph syn 1.0.107 1.0.106
# (press ENTER/return to open in your browser)
```

![alt_text](https://storage.googleapis.com/sourcegraph-assets/blog/image1-cargo-vet.gif "image_tooltip")

### Closing thoughts

To secure the FOSS supply chain, we all need to work together. Building tools that help prevent the further spreading of vulnerable software will help sustain our digital infrastructure and bring more innovation that moves us forward as a society.

If you run an open source project that could benefit from a Sourcegraph integration similar to cargo vet, we want to hear about it. Join our Discord, and let’s talk.

---

_Thanks to the following people for helping with this post: Fabiana Castellanos, Varun Gandhi, Camden Cheek, Noah Santschi-Cooney_

#### About the author

Justin Dorfman is Sourcegraph’s Open Source Program Manager and is responsible for fostering the adoption of code intelligence in the open source community. You can chat with Justin on Twitter [@jdorfman](https://twitter.com/jdorfman) or our community Discord.