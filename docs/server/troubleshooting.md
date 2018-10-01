---
layout: markdown
title: Troubleshooting
permalink: docs/troubleshooting
---

This page documents commonly-faced or unresolved issues and their suggested solutions.

## File system performance on Docker for Mac

There is a [known issue](https://github.com/docker/for-mac/issues/77) in Docker for Mac that causes slower than expected file system performance on volume mounts, which impacts the performace of search and cloning.

To achieve better performance, you can do any of the following:

- For better clone performance, clone the repository on your host machine and then [add it to Sourcegraph Server](/docs/config/repositories#add-repositories-already-cloned-to-disk).
- Try adding the `:delegated` suffix the data volume mount. [Learn more](https://github.com/docker/for-mac/issues/1592).
  ```
  --volume ~/.sourcegraph/data:/var/opt/sourcegraph:delegated
  ```
- Run Sourcegraph Server on Linux, or use the [Data Center](https://github.com/sourcegraph/deploy-sourcegraph) deployment option for even larger scale on Kubernetes.
