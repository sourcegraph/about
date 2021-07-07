# How [gitserver](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/tree/cmd/gitserver) works

- [How gitserver works](#how-gitserver-works)
  - [Miscellaneous](#miscellaneous)
    - [Production instances](#production-instances)
    - [Command timeouts](#command-timeouts)
    - [Cleanup tasks](#cleanup-tasks)
    - [Useful metrics](#useful-metrics)

## Miscellaneous

### Production instances

There are currently [20 gitserver instances](https://sourcegraph.com/github.com/sourcegraph/deploy-sourcegraph-dot-com@ec7effbc9491e3ee0c77c3d70ac3f2eb8cb34837/-/blob/base/frontend/sourcegraph-frontend.Deployment.yaml?L104-105) in production. This is a static list made available via the `SRC_GIT_SERVERS` environment variable.

At the moment, we shard repositories across gitserver instances using a [modular hashing strategy](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/blob/internal/gitserver/client.go?L118-124) based on the repository name. This is the responsibility of the [gitserver client](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/blob/internal/gitserver/client.go).

A modular hashing strategy has two important implications: repositories can only reside on exactly one gitserver, and a substantial number of repositories need to be relocated to another gitserver if the membership list changes.

In the future, we will shift to a [consistent hashing strategy](https://en.wikipedia.org/wiki/Consistent_hashing) that will provide high availability to repositories and minimize expensive moves. That will also allow us to have a more dynamic set of gitserver instances at any time.

### Command timeouts

There are two different command timeout checks in gitserver: the [short timeout](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/blob/cmd/gitserver/server/server.go?L177-200) and the [long timeout](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/blob/cmd/gitserver/server/server.go?L221-224). Note that some commands are expected to take a considerable amount of time, especially when executed against large monorepos (some of which can be multiple TB in size).

### Cleanup tasks

Each gitserver instance will perform various [background cleanup tasks](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/blob/cmd/gitserver/server/cleanup.go?L76-85) to ensure that repositories remain healthy, or are removed if they are found to be corrupt.

Additionally, gitserver may remove repositories if the instance's disk is under heavy pressure. The [least recently used](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/blob/cmd/gitserver/server/cleanup.go?L436-442) repositories will be removed first, until a [sufficient amount of space](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/blob/cmd/gitserver/server/cleanup.go?L370-434) has been reclaimed.

### Useful metrics

We track a variety of metrics in gitserver that you'll want to familiarize yourself with. For example:

- [Command execution](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/blob/cmd/gitserver/server/server.go?L1526-1546)
- [Repository management](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98f/-/blob/cmd/gitserver/server/server.go?L347-358)
- [Cleanup tasks](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/blob/cmd/gitserver/server/cleanup.go?L52-72)
