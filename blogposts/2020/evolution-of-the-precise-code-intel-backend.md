---
title: "Evolution of the precise code intel backend"
description: This post reflects on the high-level technical changes as the precise code intel services providing the feature matured through additional features, changing environment requirements, hardening, performance improvements, refactoring, and one major rewrite in a different language. 
author: Eric Fritz
authorUrl: https://eric-fritz.com
publishDate: 2020-06-17T10:00-07:00
tags: [blog]
slug: evolution-of-the-precise-code-intel-backend
heroImage: /blog/big-brain.png
published: true
---

On July 12, Sourcegraph's LSIF-based precise code intelligence will have received its first commit a year ago.

<div class="text-center">
    <strong>🎉 Happy 🎉 Almost 🎉 Birthday 🎉</strong>
</div>

Sourcegraph's [precise code intelligence features](https://docs.sourcegraph.com/user/code_intelligence/lsif) are driven by user-uploaded LSIF indexes created in their own build and continuous integration systems. When browsing code that has been indexed, all hover tooltips, definition, and reference results are _precise_ rather than heuristic (based off of search results, which is the no-configuration default).

This post reflects on the high-level technical changes as the precise code intel services providing the feature matured through additional features, changing environment requirements, hardening, performance improvements, refactoring, and one major rewrite in a different language. These changes span +324k/-277k lines of code over 527 commits.

I may not _strictly_ be able to call this post a work of [software archaeology](https://en.wikipedia.org/wiki/Software_archaeology) (since it's only a year old, it's actively used, not a legacy codebase, the primary author is still here to talk about it, and it isn't completely undocumented). It may be more accurate to call it a [historiographical artifact](https://en.wikipedia.org/wiki/Historiography), but dinosaurs are cooler than books so welcome to the dig site.

## Provenance

**PR**: [Add LSIF support (#4799)](https://github.com/sourcegraph/sourcegraph/pull/4799)

Chris Wendt wrote the initial draft of the service as a simple TypeScript express server proxied by the frontend service's HTTP API. This kept the number of public services low and kept request authenticate flow to a single code path. The express server would accept raw LSIF input and store it on disk, unchanged. Queries to the lsif-server through a proof of concept LSIF-specific [extension](https://docs.sourcegraph.com/extensions) would read the raw LSIF data for that repository, parse it into memory, and walk the graph to construct the appropriate response.

![architecture diagram](https://storage.googleapis.com/sourcegraph-assets/lsif-arch-1.png)

The choice of TypeScript was a natural one at the time: the (then called) codenav team consisted of what would later become the web and the code intelligence teams. TypeScript was a major core competency of the team, and there was an additional benefit of being able to reuse code from the [server](https://github.com/microsoft/vscode-lsif-extension/tree/d9d4f25ffcd735d6a45bdfe0f3c811cf4bb376e0/server/src) package in an unpublished Visual Studio Code [extension](https://github.com/microsoft/vscode-lsif-extension) to jump start the service with a functional consumer of the LSIF protocol (which was only 0.4.0 at this point in time).

This code, and the manner in which it was written, was absolutely the golden standard of an MVP. It did exactly what it needed to in order to solicit feedback from users and find its place in the universe of possible features. As all such minimum implementations should be, it lacked attention to scalability, performance, and robustness (because you do **not** spent that energy on a feature that is immediately scrapped).

I would begin my journey at Sourcegraph as a member of the codenav team ten days after this PR was opened. Around this time, Sourcegraph had made the decision to de-prioritize the work on language servers in support of building out an infrastructure to enable precise code intelligence supported by LSIF indexes. The [LSIF announcement blog post](/blog/code-intelligence-with-lsif) outlines some of the reasons we choose to shift our focus. This allowed us to budget the effort into improving scalability, performance, and robustness of the service while extending its feature set to eventually subsume what language servers were currently providing.

## Commit to a storage format

**PR**: [SQLite backend (#5332)](https://github.com/sourcegraph/sourcegraph/pull/5332)

The first issue to tackle was choosing how to represent LSIF data within the service. The MVP simply kept the raw LSIF input on disk, parsing it into memory on demand. Not every query would parse the LSIF input from scratch - there was an LRU cache that would allow multiple requests to hit the same LSIF index without re-parsing. However, LSIF indexes can be **very** large. The time to read these indexes into memory in the first place was non-negligible, and storing even a few large indexes in memory was likely to cause an OOM crash.

We needed to find a way to query only the portion of the index we needed to answer a query, and we needed to find a way to do it efficiently. We decided to convert the raw LSIF data into an internal protocol-oblivious format on upload, giving us complete control over the storage format. Having control of the storage format allowed it to be designed efficiently for the proposed access patterns:

- get definitions for a source range
- get references for a source range
- get the hover text for a source range

After several round-trip design discussions, we reduced our backend choices between:

- [SQLite](https://www.sqlite.org/index.html), an embedded file-based SQL database engine, and
- [Dgraph](https://dgraph.io/), a distributed graph database built on top of an LSM-tree-based database [BadgerDB](https://github.com/dgraph-io/badger).

In order to prove or disprove the performance of one storage format over the other, we built two versions of the backend (the Dgraph backend implementation can be found [here](https://github.com/sourcegraph/sourcegraph/pull/5333)). Benchmarks showed that the (upload) performance of the SQLite backend scaled linearly (a factor of 2.2x and 2.8x), where the Dgraph backend scaled linearly (with a factor of 25x) with input size. There were likely multiplying factors that increased this performance discrepancy, including lack of experience with graph databases, no operational experience with Dgraph, and a bad choice of graph schema.

We choose to run with SQLite due to its higher initial performance, familiarity, and easy operational properties. SQLite is still the on-disk format for code intelligence bundles in Sourcegraph.

After this change, raw LSIF uploads were processed immediately into a SQLite file which is stored on disk, and queries need only to access the documents containing the target source range. Standard SQL design and tricks apply here.

## Process uploads asynchronously

**PR**: [LSIF: Split server and worker (#5525)](https://github.com/sourcegraph/sourcegraph/pull/5525)

After the previous change, raw LSIF data was no longer parsed in the query path but at upload time. However, the upload is still an HTTP request that is subject to the properties, rules, and whims of [OSI layer 5](https://en.wikipedia.org/wiki/OSI_model) and below. The conversion process itself is heavy and hasn't received much love in terms of optimization - processing large files would take longer than some client, server, and/or proxy timeouts, and would end up disconnecting upload requests for even moderately sized payloads.

It was still very easy to crash the entire process by uploading a large file, which it still had to read into memory during conversion. Because conversion happens within an HTTP handler, it was also easy to crash the lsif-server by uploading multiple small files, the sum of which exceed the memory resources allotted to the lsif-server.

The solution we chose was to extract the processing work from the express server into another service which pulls work off of a shared queue. Upload operations became fast as it only required the transfer of the payload to hit disk and not be fully converted. Processing one upload at a time ensured that a series of uploads would not crash the system, and processing large uploads could be remedied by increasing the memory allocated to the lsif-worker process. The lsif-worker is known today as the precise-code-intel-worker.

![architecture diagram](https://storage.googleapis.com/sourcegraph-assets/lsif-arch-2.png)

As a choice of shared queue, we went with [node-resque](https://github.com/actionhero/node-resque), which is a Node.js port of the [resque](https://github.com/resque/resque) library popular in the Rails ecosystem. This library uses Redis to store the job data, which was already a component of our stack. Alternative choices included using Postgres (which was a component of our stack but guarded by a small list of services), using some sort of local [IPC](https://en.wikipedia.org/wiki/Inter-process_communication) (which would prevent us from scaling the lsif-server and lsif-workers independently in the future), and using an AMQP server (which was not yet an existing component in our stack).

## Store cross-repo data in Postgres

**PR**: [LSIF: Cross-repository database to target Postgres (#5740)](https://github.com/sourcegraph/sourcegraph/pull/5740)

Up until this point, we were storing converted LSIF index data in SQLite databases one-to-one: each uploaded LSIF index became a single database on-disk. In order to support cross-repository queries (jump to remote definition, find references across repositories) we had an additional `xrepo.db` database that allowed us to look up indexes by the versioned packages that they provide and the versioned packages on which they depend.

So far, we had one instance of the lsif-server and one instance of the lsif-worker, both deployed in the same Docker container so that both processes could share the same persistent disk space. In order to break these services apart and scale horizontally, we needed to migrate the data owned by `xrepo.db` out of SQLite, which does not allow concurrent writes from multiple processes. Moving this data into our existing Postgres instance was easy: both the beginning and end states defined a few simple tables and didn't require any fancy tricks. 

![architecture diagram](https://storage.googleapis.com/sourcegraph-assets/lsif-arch-3.png)

The unknown scale of additional writes concerned us. Would it cause operational issues or affect the performance of unrelated parts of the application? To be safe, we kept the table spaces disjoint (prefixed table names, no foreign keys to existing tables) and planned to support migrating this database into a second Postgres instance. This required us doing some nasty trickery with [db_link](https://github.com/sourcegraph/sourcegraph/blob/d1cffed06e58a90082243601d936279214547e30/migrations/1528395594_create_lsif_database.up.sql) in order to run migrations, which we found quite painful and [eventually reverted](https://github.com/sourcegraph/sourcegraph/pull/5935). Some back-of-the-envelope calculations showed that the load wouldn't overwhelm Postgres (which is difficult to do anyway - Postgres is quite the beast). Thankfully, these calculations turned out to be correct.

## Choose a new queueing library

**PR**: [LSIF: Replace node-resque with bull (#6062)](https://github.com/sourcegraph/sourcegraph/pull/6062)

This change updates the interface to the job queue to use [bull](https://github.com/OptimalBits/bull) instead of [node-resque](https://github.com/actionhero/node-resque). This was not a major architectural change, but updating the library did remove some operational issues we were experiencing with stuck workers and lost jobs. Switching to the new library also unlocked some additional features such as running jobs on a schedule à la cron and being able to list the jobs in a particular state (and with the magic of Redis's [EVAL](https://redis.io/commands/eval) command, [searching within job payloads for text matching a query](https://github.com/sourcegraph/sourcegraph/blob/d323af7360dadd40aee35de3476a7577c1f726f1/lsif/src/search-jobs.lua)).

Additional relevant PRs:

- [LSIF: Add machinery for repeated/scheduled jobs (#6067)](https://github.com/sourcegraph/sourcegraph/pull/6067)
- [LSIF: Add scheduled job to clean old job data (#6136)](https://github.com/sourcegraph/sourcegraph/pull/6136)
- [LSIF: Endpoints for jobs in lsif-server (#6227)](https://github.com/sourcegraph/sourcegraph/pull/6227)

## Store job data in Postgres

**PRs**: 
- [LSIF: Dequeue from postgres (#6879)](https://github.com/sourcegraph/sourcegraph/pull/6879)
- [LSIF: Enqueue jobs to postgres (#6877)](https://github.com/sourcegraph/sourcegraph/pull/6877)
- [LSIF: Remove dead LSIF jobs code (#6880)](https://github.com/sourcegraph/sourcegraph/pull/6880)

The evolution of the job queue continues. This change updates the interface over enqueueing/dequeueing jobs to target Postgres instead of Redis. This reduces a lot of complexity. Both the lsif-server and lsif-worker no longer rely on Redis, which was used as an ephemeral and truncatable cache in all other parts of the application. All of the custom Lua scripts that reach into the data owned by Bull could be reduced into a few SQL statements.

![architecture diagram](https://storage.googleapis.com/sourcegraph-assets/lsif-arch-4.png)

Reducing the number of services in which mutations occur during a transaction is always a win. This change allowed us to re-use existing Postgres transactions for the job queue as well. It's no longer possible to commit a Postgres transaction on successful conversion yet fail to mark the job as resolved in the queue, as modifying the queue can now be done as part of the transaction.

## Add GraphQL resolvers

**PR**: [LSIF: Add LSIF intelligence GraphQL resolvers (#7021)](https://github.com/sourcegraph/sourcegraph/pull/7021)

At this point, the lsif-server was accessible only by an undocumented proxy in the frontend. This proxy was used to both accept upload payloads, and to query the definitions, references, and hover text of particular source ranges. The only consumers of this API were Sourcegraph-authored language extensions ([sourcegraph/go](https://sourcegraph.com/extensions/sourcegraph/go), [sourcegraph/typescript](https://sourcegraph.com/extensions/sourcegraph/typescript)).

![architecture diagram](https://storage.googleapis.com/sourcegraph-assets/lsif-arch-5.png)

This data is much more useful than simply powering jump-to-def and is wasted behind an undocumented API. This change made the same data visible outside of the extension through the GraphQL API. This not only opened up queries to be used by other Sourcegraph features (such as [Campaigns](https://docs.sourcegraph.com/user/campaigns) and the currently in-progress Code Insights), but to Sourcegraph-external extension authors and to any user that wants to run ad-hoc queries. As the data we gather through LSIF indexes continues to grow (we've recently added support for [diagnostics](https://github.com/sourcegraph/sourcegraph/pull/11233)), so does the universe of possible uses. We're excited to discover what uses of this data lies ahead.

## "Just add threads"

**PR**: [LSIF: Replicate worker within container (#8951)](https://github.com/sourcegraph/sourcegraph/pull/8951)

At this point, the lsif-server and lsif-worker were bundled within the [same container](https://github.com/sourcegraph/sourcegraph/blob/7443d5f7bcbe0ec038a2f2602aec34558f79284c/cmd/lsif-server/Dockerfile). We decided to [prefork](https://www.cs.ait.ac.th/~on/O/oreilly/perl/cookbook/ch17_13.htm) the number of worker processes running in the container, increasing the number of uploads that could be processed at one time.

This is a rudimentary way to scale horizontally, as the resources are still limited to the physical nodes and there is no isolation between workers: if one worker is processing a particular large upload, it can cause the other processes to run out of memory. All of the workers will crash at once and take the lsif-server process down with them.

![architecture diagram](https://storage.googleapis.com/sourcegraph-assets/lsif-arch-6.png)

At this point it was a reasonable tradeoff, and gave us some quick wins with increased processing throughput. This particular change also helped us get past some issues we were having in our [Sourcegraph.com](https://sourcegraph.com) deployment, which was suffering from [head-of-line blocking](https://en.wikipedia.org/wiki/Head-of-line_blocking).

## Introduce the bundle manager

**PR**: [LSIF: RFC127-1: Add API between backend and database (#9179)](https://github.com/sourcegraph/sourcegraph/pull/9179)

The plan, all along, was to scale the lsif-server and lsif-worker instances horizontally when necessary (the workers were likely needed to scale first as they do the most CPU and memory-intensive work). Unfortunately, I had misunderstood the capabilities of Kubernetes persistent volumes: I was assuming that the disk could be mounted as [RWX](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#access-modes), or read-write-many, over multiple nodes. As it turns out, this access mode is only supported by a few volume plugins (Azure, CephFS, Glusterfs, and NFS to name a few). The GCEPersistentDisk plugin, which we use for our [Sourcegraph.com](https://sourcegraph.com) deployment, does not support this access mode.

Well, shoot.

Our path forward was to add [another level of indirection](https://en.wikipedia.org/wiki/Fundamental_theorem_of_software_engineering), which is honestly the solution to _most_ problems. This change introduces a new lsif-dump-manager, known today as the precise-code-intel-bundle-manager, the service that owns the persistent disk. 

![architecture diagram](https://storage.googleapis.com/sourcegraph-assets/lsif-arch-7.png)

This frees any responsibility of reading or writing to the disk from the lsif-server and the lsif-worker, making them free to scale horizontally and statelessly. Scaling the dump managers themselves is a different problem, but one we have some experience with already due to the sharded nature of our gitservers.

## Rewrite services in Go

**PRs**:
- [Rewrite precise-code-intel-api-server in Go (#9703)](https://github.com/sourcegraph/sourcegraph/pull/9703/)
- [Rewrite precise-code-intel-bundle-manager in Go (#9586)](https://github.com/sourcegraph/sourcegraph/pull/9586/)
- [Rewrite precise-code-intel-worker in Go (#10105)](https://github.com/sourcegraph/sourcegraph/pull/10105)

At this point, the code nav team had been split into the web and code intel for some time. After a few changes in the code intel team's membership, we gained a _lot_ of Go talent and lost a bit of TypeScript talent. We no longer had the same core competencies, and it made sense from both an organizational and architectural standpoint to rewrite the existing TypeScript backend code in order to unify it with the greater Sourcegraph codebase.

We decided to _slowly_ rewrite each of the services into Go. Our high-level plan was to first extract the CPU-bound work done by the lsif-server into a high-performance Go process which could be called by the existing worker code (this is similar to the [strangler fig](https://martinfowler.com/bliki/StranglerFigApplication.html) pattern of refactoring). This part of the stack seemed to benefit the most from a rewrite, and allowed us to use existing knowledge to aggressively optimize Go rather than having to learn low-level optimization techniques for Node.js environments. Eventually, more and more of the worker would fall into the Go code's event horizon, and eventually the entire worker would be replaced.

But actions don't always occur as they're planned.

Turns out it's pretty easy to write the same system in a language you know well after fixing all the bugs in a different language, and I just rewrote all three services in a single pass. The resulting code wasn't particularly idiomatic as it really was meant to be a fast, behaviorally-equivalent translation into the target language. Constant, small refactorings have been occurring since the rewrite in order to shape the code into something more appropriate for the new environment.

This has unlocked a large number of performance improvement opportunities, the results of which will be detailed in the Sourcegraph 3.17 release announcement. The technical details are described in a blog post on [performance improvements for precise code intel](/blog/performance-improvements-in-precise-code-intel).

## Remove the API server

**PRs**: 
- [codeintel: Call handleEnqueue from lsifserver proxy (#10871)](https://github.com/sourcegraph/sourcegraph/pull/10871)
- [codeintel: Call query methods from from lsifserver client (#10872)](https://github.com/sourcegraph/sourcegraph/pull/10872)
- [Remove precise-code-intel-api-server service (#10906)](https://github.com/sourcegraph/sourcegraph/pull/10906)

After rewriting the services in Go, the lsif-server process maintained no local state, and queries to it no longer crossed a language boundary. There was little reason to keep the service separate. The client used by the frontend's HTTP API and GraphQL resolvers was able to directly perform the same functions as the old server's HTTP handlers, and the newly unused HTTP server/routing code could be dropped. 

![architecture diagram](https://storage.googleapis.com/sourcegraph-assets/lsif-arch-8.png)

This change is discussed in more detail in a blog post on [performance improvements for precise code intel](/blog/performance-improvements-in-precise-code-intel/#collapse-network-boundaries).

<style>
  /* Images in this post have natural borders
     Make <p><img></p> snuggle up nice and close to the surrounding text */
  .blog-post__body img { box-shadow: none; margin: -16px auto; }
</style>
