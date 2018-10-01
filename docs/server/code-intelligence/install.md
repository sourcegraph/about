---
layout: markdown
title: Installing code intelligence on Sourcegraph
permalink: docs/code-intelligence/install
---

These instructions walk you through adding [code intelligence](/docs/code-intelligence) to Sourcegraph. (Running Sourcegraph Data Center? See the [Data Center code intelligence instructions](https://github.com/sourcegraph/deploy-sourcegraph/blob/master/docs/install.md#add-language-servers-for-code-intelligence).)

## Automatic installation (default)

As of Sourcegraph 2.7, language servers are automatically started for supported languages that we detect in repositories that you have added.

If you do not wish to use code intelligence, you can disable language servers in the **Code intelligence** section of the site admin area.

## Manual Installation

If you do not want to give Sourcegraph access to the Docker socket, then you may [install code intelligence manually](/docs/code-intelligence/install-manual).

---

## Next steps

To get code intelligence on your code host and/or code review tool, follow the instructions in our [integrations documentation](/docs/integrations).
