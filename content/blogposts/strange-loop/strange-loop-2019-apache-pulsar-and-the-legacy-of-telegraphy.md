---
title: "Strange Loop 2019 - Apache Pulsar and the Legacy of Telegraphy"
description: "The Wireless Telegraph was invited in the 1890s and quickly spread to be the dominant method of peer-to-peer communication throughout the 19th century. As a method of communication, the Telegraph allowed for a secure, Intercontinental, high-throughput and extensible message transmission. Toward the end of its popularity, Telegraphs were a broadcast protocol (one sender to many recipients), and their utility skyrocketed. The design considerations and engineering of the Telegraph are seen in contemporary messaging systems, especially Apache Pulsar. This talk covers the design considerations required to enabled globally distributed, low-latency applications to run on top of Apache Pulsar. From the storage model to replication and deployment, I explore each of these design decisions and how they contrast with the design of wireless telegraphy. The talk concludes with a demo of Apache Pulsar functions and Pulsar SQL, displaying the extensibility of Pulsar. Attendees can expect to learn a brief history of wireless telegraphy and a deep understanding of the design of Apache Pulsar."
authors:
  - name: Sebastian Murphy
    url: https://www.linkedin.com/in/sebastian-murphy-882a6716
publishDate: 2019-09-13T00:00-13:30
tags: [
  strange-loop
]
slug: strange-loop-2019-apache-pulsar-and-the-legacy-of-telegraphy
heroImage: https://about.sourcegraph.com/blog/strange-loop-thumbnail-square-v2.jpg
published: true

---

<div className="container p-0 liveblog-presenters d-flex w-100 text-center">
  <div className="row m-0 w-100">
      <p className=" mr-12 m-0 w-100">
        <span className="liveblog-presenters__name">Jowanza Joseph</span>
        <a href="https://twitter.com/Jowanza" target="_blank" title="Twitter"><i className="fa fa-twitter pr-2"></i></a>
        <a href="https://github.com/josep2" target="_blank" title="GitHub"><i className="fa fa-github pr-2"></i></a>
        <a href="https://www.jowanza.com" target="_blank" title="Speaker's site"><i className="fa fa-globe pr-2"></i></a>
      </p>
  </div>
</div>

---

## Overview

The Wireless Telegraph was invited in the 1890s and quickly spread to be the dominant method of peer-to-peer communication throughout the 19th century. As a method of communication, the Telegraph allowed for a secure, Intercontinental, high-throughput and extensible message transmission. Toward the end of its popularity, Telegraphs were a broadcast protocol (one sender to many recipients), and their utility skyrocketed. The design considerations and engineering of the Telegraph are seen in contemporary messaging systems, especially Apache Pulsar. This talk covers the design considerations required to enabled globally distributed, low-latency applications to run on top of Apache Pulsar. From the storage model to replication and deployment, I explore each of these design decisions and how they contrast with the design of wireless telegraphy. The talk concludes with a demo of Apache Pulsar functions and Pulsar SQL, displaying the extensibility of Pulsar. Attendees can expect to learn a brief history of wireless telegraphy and a deep understanding of the design of Apache Pulsar.

---

# Introduction

Jowanza is a software engineer located in Salt Lake City, Utah and currently employed by Pluralsight. Aside from working
apache pulsar he enjoys Cycling, Model Rocketry and not Snowboarding.

In his talk Jowanza discussed the history of the telegraph and used that as a way to introduce apache pulsar.

References:  
[The Victorian Internet](https://www.amazon.com/Victorian-Internet-Remarkable-Nineteenth-line/dp/162040592X) by Tom Standage  
[Apache Pulsar](https://pulsar.apache.org/)

# The Telegraph

The telegraph allowed Victorian era users to send what is equivalent to the modern day txt/sms message.
Much like writing a letter, the telegraph allowed a person to send a message to a recipient. Unlike a letter, however
this transmission was sent electronically using a system of wires. This allowed a user to send a message quickly from one coast of the united states to the other, or even transcendentally to countries such as Britain. 

Although it provided many benefits, telegraphs suffered from a number of problems which included the following. 

 - Transmission Cost - In some cases it was prohibitively to send a telegraph.

- Security - Telegraph messages were sent using morse code which is not at all secure. This allowed anyone who was interested, usually switchboard operators, to read any message as it was routed through the network. 

- Delivery Guarantee - Any problems in the network could lead to potentially unreceived messages. Some early telegraph users opted to also mail a latter, in case the telegraph was never properly received. In some cases the telegraph network would provide an `at-least once` guarantee, which usually involved resending the message. 

- Data Storage - There was none. The only way to for a user to retrieve previously sent or received messages was to write them down and save them.

- Mutli-Casting - To multicast a message with an electronic telegraph, you would need to send the message to multiple times, addressing a different receipt with each message. Later with the advent of wireless telegraphs, multiple parties could receive the message by listening to the same radio frequency.


# Apache Pulsar

Apache pulsar is a distributed pub-sub system that is part of the apache software foundation and originally developed by yahoo. It is designed to be geographically distributed between different data centers and regions.

# Basic Architecture

Apache pulsar has three main components.

 - ZooKeeper - Used to handle the distributed coordination in pulsar

 - Pulsar Nodes - Users interact with these nodes

 - BookKeeper - Nodes that store the pulsar data. Unlike other distributed pub-sub systems the data is not stored on the same nodes that the users interact with. 

# Problems Addressed 

Pulsar addresses many of the problems that affected the original telegraph and provides solutions in most cases.

 - Data Storage - Unlike the the telegraph which had none, pulsar uses an immutable log that maintains messages. Previous messages sent across the message can be easily retrieved. Since pulsar stores it's data in separate nodes storage can be scaled out separately from the user facing nodes, or vice-versa. Pulsar treats BookKeeper as hot storage. Tiered storage can be used to offload data as time goes on. A typical use case would be Book Keeper (Hot) -> S3 (Warm) -> Glacier (Cold). Pulsar manages this automatically.  
   Pulsar uses a schema registry to control the injest of data. Messages are checked against the registry and written to BookKeeper if the checks pass. The most common way to encode the schema is with AVRO or JSON. AVRO is more common because unlike JSON, AVRO schemas can be evolved. 

 - Multi-casting  - Pulsar can communicate the same message to multiple consumers. It also supports multiple producers sending data to the same topic. Multiple consumers can subscribe to one or more topics. You an image this working similar to group messaging system such as slack where one person can send a message to multiple parties, and multiple parties can send messages to said user.

 - Security - Out of the box pulsar support ssl encryption. Other security mechanisms are also supported 

 - Delivery Guarantee - Unlike telegraphy pulsar does provide a number of delivery guarantees. Pulsar supports both `at-least once` and `exactly-once` delivery. Exactly once adds more latency than the former so you should examine your use cases before deciding to enabling this guarantee on a topic.

# Stream Processing

Pulsar supports a number of stream features that can be added to the cluter, like lego bricks. Pulsar-sql  allows users to perform sql functions on topics. This will work even when the topic is stored across multiple systems such as s3 and glacier. 

Pulsar alternatively supports Pulsar functions, which are native serverless functions. Currently functions can only have one input topic and one output topic.  These functions run on the pulsar nodes, though docker support has been added recently. Currently java, python and go are the only supported languages.

