---
title: "Strange Loop 2019 - Riding the stream processing wave"
description: "At LinkedIn, we run several thousands of stream processing applications which, coupled with our scale, has exposed us to some unique challenges. We will talk about the 3 kinds of applications that have made the most impact on our stream processing platform.  Machine Learning applications are driving some of the latest innovations for streaming. The current trend is to train a model in batch environments and do inference in online environments. We built some native capabilities such as \"side-inputs\" for handling large state, while allowing features to be continuously pushed from offline grids to streaming environments. Data Scientists prefer DSL's for feature generation and access. Consequently, we built the ability to convert a machine learning DSL to a streaming job and use it for feature engineering. We will talk about this capability and how this can be extended to convert Hive, Pig or other custom DSL to streaming applications.  We have observed the emergence of applications that are moving from batch processing mode to nearline processing mode as well as operating on both batch (HDFS) and streaming (Kafka) datasets (e.g Experimentation). At LinkedIn, we use Samza for stream processing, and Samza applications can achieve offline-online convergence of stream and batch processing by simply switching the streaming input systems like Kafka with HDFS-based input. Apache Beam integration for Samza enables the capability to execute in different environments. Streaming applications now maintain very large local state, and during deployments, application or node failures it is critical to restore this state to its previous version. We will talk about the impact of these failures on large stateful applications and some of the recent improvements we have made in host affinity, state restore and our new standby container solution."
authors:
  - name: Ackerley Tng
    url: https://github.com/ackerleytng
publishDate: 2019-09-13T00:00-14:30
tags: [
  strange-loop
]
slug: strange-loop-2019-riding-the-stream-processing-wave
heroImage: https://about.sourcegraph.com/blog/strange-loop-thumbnail-square-v2.jpg
published: true

---

<div className="container p-0 liveblog-presenters d-flex w-100 text-center">
  <div className="row m-0 w-100">
      <p className=" mr-12 m-0 w-100">
        <span className="liveblog-presenters__name">Samarth Shetty</span>
      </p>
  </div>
</div>

---

## Overview

At LinkedIn, we run several thousands of stream processing applications which, coupled with our scale, has exposed us to some unique challenges. We will talk about the 3 kinds of applications that have made the most impact on our stream processing platform.  Machine Learning applications are driving some of the latest innovations for streaming. The current trend is to train a model in batch environments and do inference in online environments. We built some native capabilities such as \"side-inputs\" for handling large state, while allowing features to be continuously pushed from offline grids to streaming environments. Data Scientists prefer DSL's for feature generation and access. Consequently, we built the ability to convert a machine learning DSL to a streaming job and use it for feature engineering. We will talk about this capability and how this can be extended to convert Hive, Pig or other custom DSL to streaming applications.  We have observed the emergence of applications that are moving from batch processing mode to nearline processing mode as well as operating on both batch (HDFS) and streaming (Kafka) datasets (e.g Experimentation). At LinkedIn, we use Samza for stream processing, and Samza applications can achieve offline-online convergence of stream and batch processing by simply switching the streaming input systems like Kafka with HDFS-based input. Apache Beam integration for Samza enables the capability to execute in different environments. Streaming applications now maintain very large local state, and during deployments, application or node failures it is critical to restore this state to its previous version. We will talk about the impact of these failures on large stateful applications and some of the recent improvements we have made in host affinity, state restore and our new standby container solution.

---

## Introduction

Processing at LinkedIn began with just a few hundred jobs, but today LinkedIn processes a couple of trillion of messages per day, and the number of jobs is still growing.

## Scale of processing at LinkedIn

LinkedIn performs stream processing of messages using [Apache Samza](https://samza.apache.org), at the scale of (per day)

+ ~4k jobs
+ 20k+ containers
+ ~2e12 messages

LinkedIn believes that low latencies lead to better user engagement. Hence, their real time targeting platform (feeding into a notification platform) requires low latency and needs to process at high QPS.

Streaming is particularly difficult when it also involves stateful processing, and this is worse when state is large. An example of large state would be features generated offline that are used for scoring in nearline.

Here's an idea of the size of local state for jobs at LinkedIn:

+ 50% of containers have state < 0.5GB
+ 95% of containers have state < 36GB
+ Long tail: maximum size of container state is ~150GB

and the size of these local states are only expected to rise.

## Samza and state management

Samarth described how LinkedIn explored different options to solve the problem of providing durability for local state,

1. Beginning with saving local state
2. Proceeding to host affinity
3. And standby containers

Storage of local state is a built-in feature of Samza. Each Samza task can be associated with its own instance of a local database. This local state can be in-memory or on disk. This state is computed or ingested from a remote source. A typical use case would be a stream-table join, for example, enriching a stream with additional information from another database.

#### 1. Log-compacting and Checkpointing Local state in a Samza Task

The local state in the Samza task could be bootstrapped from change data capture, say from a database or a Kafka stream. Caching the data in the Samza task is 100x faster than querying remote state and provides 30x throughput gains. Durability was provided by backing up the local state in a log-compacted topic in Kafka, incrementally checkpointing the state to save just the deltas.

When applications fail, the local state can be recomputed by combining the log-compacted Kafka topic and the newer entries in the change capture stream in a new Samza container. This, however, was still too slow. For large state, recovery can take up to an hour, constrained by Kafka quotas and hardware bottlenecks.

#### 2. Host affinity

Host affinity can solve the problem of pulling in checkpointed data, assuming that an on-disk state snapshot could be used. This would work if the containers were restarted on the same host, since only catch-up from the change capture stream would be required.

However, host affinity is not guaranteed, leading to hugely varying recovery times. Host contention could require a full state restore.

Besides, host failures are possible too, which will cause even longer recover times.

#### 3. Standby containers

In this third option, LinkedIn trades off resource for performance, by having an active and a standby container for a job.

The standby container keeps a copy of application state, but only the active container actually processes messages. In case of container failure, the standby container takes over.

With this approach, restore time is bounded to the frequency of the container heartbeats, since the lack of heartbeats are the signal for transitioning to the standby container. This results in a bounded restore time of 5 mins. This is ~20x faster for large state stores of sizes upwards of 200GB.

## Simplifying feature management using Frame in streams

LinkedIn uses [Frame](https://www.slideshare.net/DavidStein1/frame-feature-management-for-productive-machine-learning) to abstract away all the details of data sources behind a single string.

Just by specifying something like `com.linkedin.member.profile.Title`, both streaming and batch jobs alike can access the required data sources. This allows data scientists to ride on streams by making it really easy to refer to an existing feature, or to combine features.

## References

Slides are available [here](https://www.slideshare.net/SamarthShetty2/riding-the-stream-processing-wave-strange-loop-2019).
