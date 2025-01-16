---
title: 'IPFS: The Permanent Web'
authors:
  - name: Juan Benet
publishDate: 2016-05-30T12:39-07:00
tags: [
  "blog"
]
slug: ipfs-the-permanent-web-by-juan-benet
heroImage: https://images.ctfassets.net/le3mxztn6yoo/1fNup8iuU2QgGIwAgW8Ewq/cbe19d0788e06e89350e22e06127fdc9/0-RsrS68m6tNt9Yazz.jpeg
published: true
---



[Juan Benet](http://juan.benet.ai/) ([@juanbenet](https://twitter.com/juanbenet)) spoke at the [Sourcegraph Hacker Meetup](http://www.meetup.com/Sourcegraph-Hacker-Meetup/) about his project, “IPFS: The Permanent Web” ([slides](https://speakerdeck.com/jbenet/ipfs-the-permanent-web-at-sourcegraph) and [video](https://www.youtube.com/watch?v=Fa4pckodM9g)). [IPFS](https://github.com/jbenet/ipfs) is a bold attempt at evolving the Internet's infrastructure. Here's how Juan describes it to [Sourcegraph](https://sourcegraph.com):

> _IPFS is a global, versioned, peer-to-peer file system. It combines good ideas from_ [_Git_](http://git-scm.com/)_,_ [_BitTorrent_](http://en.wikipedia.org/wiki/BitTorrent)_,_ [_Kademlia_](http://en.wikipedia.org/wiki/Kademlia)_, and_ [_SFS_](http://en.wikipedia.org/wiki/Self-certifying_File_System)_. You can think of it like a single BitTorrent swarm, exchanging Git objects, making up the web. IPFS provides an interface much simpler than HTTP, but has permanence built in. You can also use it to mount the world at /ipfs._

So far, IPFS has 2 implementations: [go-ipfs](https://github.com/jbenet/go-ipfs) and [node-ipfs](https://github.com/jbenet/node-ipfs).

Let's dig a bit deeper into IPFS and how it could be used.

<iframe width="640" height="480" src="https://www.youtube-nocookie.com/embed/Fa4pckodM9g"frameBorder="0"allowFullScreen></iframe>

### The Permanent Web

IPFS envisions a world where any resource is available via a locally mounted filesystem at paths like:

<pre name="fdaf" id="fdaf" className="graf graf--pre graf-after--p"># a mutable path
/ipns/my.host.com/some/file.txt</pre>

<pre name="d756" id="d756" className="graf graf--pre graf-after--pre"># or a permanent path
/ipfs/QmaKtFK3wiq9z2LmhMKgoXvuB4XDeY5Xrac8vVBLPjc9CX/some/file.txt</pre>

But this file doesn't necessarily reside on the local disk. Instead, it exists in IPFS, a global distributed storage system. IPFS makes files in this namespace:

*   **highly available**, so they can be fetched from any host that stores and is willing to provide the data, not just their originator or owner
*   **fast to access**, so you can treat the /ipns and /ipfs filesystems as local storage instead of remote servers, as in HTTP. In fact, nodes chose which files they store locally
*   **trusted**, like in git where you can trust files in a commit if you trust the commit ID
*   **signed**, so you can attest that you published a certain file at a certain path
*   [**Merkle**](http://en.wikipedia.org/wiki/Merkle_tree)**-linked**, so you can version and back up everything, and so you can create a link structure like the web

To achieve these goals, IPFS synthesizes many successful techniques from the last 15 years of distributed systems research. Central to the IPFS design is the [Merkle](http://en.wikipedia.org/wiki/Merkle_tree) DAG, a data structure that represents all the files. It's like Git's blob, tree, and commit, except IPFS has a more flexible model: you can define what your link structure is and how it works. This means you can implement Git on top, or a Blockchain like Bitcoin, or linked web pages.

Juan also discussed a list of use cases for IPFS:

1.  Mounted global filesystem, under /ipfs (permanent) and /ipns (mutable)
2.  Mounted personal sync folder that automatically versions, publishes, and backs up any writes (like a versioned, distributed Dropbox)
3.  Encrypted file or data sharing system
4.  Distributing mutable content (BitTorrent + Git)
5.  Blockchain data structures
6.  Versioned package manager for all software (see [this discussion](https://github.com/jbenet/random-ideas/issues/19))
7.  Booting a virtual machine from the network
8.  Booting a VM _from a hash_ (trust your system is at that particular state)
9.  Databases (applications write directly to the Merkle DAG data model, getting all the versioning, caching, and distribution that IPFS provides)
10.  Linked (and encrypted) communications platform
11.  Integrity-checked CDN for large static files (without SSL)
12.  Encrypted CDN
13.  The Permanent Web, where links do not die

[Watch the talk](https://www.youtube.com/watch?v=Fa4pckodM9g), and check out the [IPFS paper](http://static.benet.ai/t/ipfs.pdf) for more details.

### Getting involved with IPFS

IPFS is an open source, MIT-licensed project. You can use the ideas and the implementations for whatever you want. It's still early, so the implementations are not complete. You should follow [@juanbenet](https://twitter.com/juanbenet) and check out the IPFS spec and open source implementations. Watch or star these repositories on GitHub to follow along:

*   [ipfs protocol](https://github.com/jbenet/ipfs)
*   [go-ipfs](https://github.com/jbenet/go-ipfs)
*   [node-ipfs](https://github.com/jbenet/node-ipfs)

Also, you can join #ipfs on irc.freenode.org.

![0-RsrS68m6tNt9Yazz](//images.contentful.com/le3mxztn6yoo/1fNup8iuU2QgGIwAgW8Ewq/cbe19d0788e06e89350e22e06127fdc9/0-RsrS68m6tNt9Yazz.jpeg)

Juan has a compelling vision for a future where the Internet is more efficient, robust, and safe. He has been thinking about these things for almost a decade, and he's now turning all that thought into action. We're excited to follow IPFS!

![0*WI7qlbYs2O4QSqhx](//images.contentful.com/le3mxztn6yoo/6gke9EbKuWSwk0iiGuKUmw/8fc034ccb6af29dbc49ace942faca848/0_WI7qlbYs2O4QSqhx.png)
