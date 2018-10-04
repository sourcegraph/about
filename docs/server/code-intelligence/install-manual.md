---
layout: markdown
title: Installing code intelligence on Sourcegraph Server manually
permalink: docs/code-intelligence/install-manual
---

These instructions walk you through adding [code intelligence](/docs/code-intelligence) to Sourcegraph Server manually.

**Most users will never need to follow these steps, and instead should rely on the [default automatic installation](/docs/code-intelligence/install).**

For more information, see "[Installing code intelligence on Sourcegraph](/docs/code-intelligence/install)".

## Manual installation

Generally you do not ever need to perform manual installation of code intelligence. Language servers are automatically downloaded, set up, and configured when you add a repository with a language that we support. If, however, you are using a modified `docker run` command rather than the one we recommend (for example, if you have removed the Docker socket pass-through flag), you can use the following steps to configure code intelligence manually:

### Create the network

Start by creating a Docker [user-defined network](https://docs.docker.com/engine/userguide/networking/configure-dns/). This is needed so the Sourcegraph Server container can communicate with the desired language servers over the local network.

```
docker network create --driver bridge lsp
```

### Stop the sourcegraph/server container

If you're already running the `sourcegraph/server` Docker image (as described in the [quickstart](/docs)), kill it now (with `Ctrl+C` or `docker rm`). Your data and configuration is preserved on the volumes, and you'll start the server again in the next step.

### Run the sourcegraph/server container with the network

Now, run the `sourcegraph/server` Docker image as described in the [quickstart](/docs), but with two additional flags: `--network=lsp` and `--name=sourcegraph`:

<pre class="pre-wrap"><code>docker run<span class="virtual-br"></span> --publish 7080:7080 --rm<span class="virtual-br"></span> --network=lsp --name=sourcegraph<span class="virtual-br"></span> --volume ~/.sourcegraph/config:/etc/sourcegraph<span class="virtual-br"></span> --volume ~/.sourcegraph/data:/var/opt/sourcegraph<span class="virtual-br"></span> sourcegraph/server:<server-version-number /><span class="virtual-br"></span></code></pre>

### Run the language server containers

Next, run the language servers for the languages you want to use with code intelligence. The commands for each supported language are listed below.

###### Go

<pre class="pre-wrap"><code>docker pull sourcegraph/codeintel-go<br/>docker run --rm --network=lsp --name=go<span class="virtual-br"></span> -e SRC_GIT_SERVERS='sourcegraph:3178'<span class="virtual-br"></span> sourcegraph/codeintel-go</code></pre>

##### TypeScript and/or JavaScript

```sh
docker pull sourcegraph/codeintel-typescript

docker run --rm --network=lsp --name=typescript sourcegraph/codeintel-typescript
```

##### Python

```sh
docker pull sourcegraph/codeintel-python

docker run --rm --network=lsp --name=python sourcegraph/codeintel-python
```

##### Java

```sh
docker pull sourcegraph/codeintel-java

docker run --rm --network=lsp --name=java sourcegraph/codeintel-java
```

##### PHP

```sh
docker pull sourcegraph/codeintel-php

docker run --rm --network=lsp --name=php sourcegraph/codeintel-php
```

### Configure Sourcegraph to connect to the language servers

Finally, configure Sourcegraph to use these language servers. In [site configuration](/docs/config), set the `langservers` field to the appropriate languages and addresses of the running servers.

If you followed the instructions above, the addresses and port numbers for all language servers are shown below. In your configuration, only include the entries for the language servers you're actually running.

```json
{
  // ...
  "langservers": [
    {
      "language": "go",
      "address": "tcp://go:4389"
    },
    {
      "language": "python",
      "address": "tcp://python:2087"
    },
    {
      "language": "typescript",
      "address": "tcp://typescript:2088"
    },
    {
      "language": "javascript",
      "address": "tcp://typescript:2088"
    },
    {
      "language": "php",
      "address": "tcp://php:2088"
    },
    {
      "language": "java",
      "address": "tcp://java:2088"
    }
  ]
  // ...
}
```

---

## Next steps

To get code intelligence on your code host and/or code review tool, follow the instructions in our [integrations documentation](/docs/integrations).
