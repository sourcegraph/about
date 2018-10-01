---
layout: markdown
title: Updating Sourcegraph Server
permalink: docs/server/update
---

<div class="alert alert-info">

This documentation is for Sourcegraph Server. For Sourcegraph Data Center, see "[Updating Sourcegraph Data Center](https://github.com/sourcegraph/deploy-sourcegraph/blob/docs-update/docs/update.md)".

</div>

A new version of Sourcegraph is released every month (with patch releases in between, released as needed). Check the [Sourcegraph blog](/blog) or the site admin updates page to learn about updates.

To update, just use the newer `sourcegraph/server:N.N.N` Docker image (where `N.N.N` is the version number) in place of the older one, using the same Docker volumes. Your server's data will be migrated automatically if needed.

You can always find the version number of the latest release at [about.sourcegraph.com](https://about.sourcegraph.com) in the `docker run` command's image tag.

- As a precaution, before updating, we recommend backing up the contents of the Docker volumes used by Sourcegraph.
- If you need zero-downtime updates, use the [Data Center deployment option](https://github.com/sourcegraph/deploy-sourcegraph).
- There is currently no automated way to downgrade to an older version after you have updated. [Contact support](/contact) for help.
