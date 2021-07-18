# How [repo-updater](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/tree/cmd/repo-updater) works
- [How repo-updater works](#how-repo-updater-works)
  - [Purpose](#purpose)
    - [Overview](#overview)
  - [Miscellaneous](#miscellaneous)
    - [General dependencies](#general-dependencies)
    - [Cloud-specific dependencies](#cloud-specific-dependencies)

## Purpose

TODO

### Overview

TODO

## Miscellaneous

### General dependencies

Before repo-updater can begin accepting work, it needs to check that [frontend](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/blob/cmd/repo-updater/shared/main.go?L111-114) and [all gitserver instances](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/blob/cmd/repo-updater/shared/main.go?L116-119) are running and responsive to pings. These checks are implemented by our [internal API client](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/blob/internal/api/internal_client.go?L39-81) and our [gitserver client](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/blob/internal/gitserver/client.go?L445-458) respectively.

> See ["How gitserver works: Production instances"](how-gitserver-works.md#production-instances) for more information.

### Cloud-specific dependencies

If repo-updater is running in [sourcegraph.com mode](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/blob/cmd/repo-updater/shared/main.go?L188-231), it will verify that certain [external services](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/blob/internal/types/types.go?L452-466) (specifically GitHub and GitLab) are properly configured. This is a requirement for us to be able to [automatically add](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/blob/cmd/frontend/backend/repos.go?L63-97) repositories from those external services when users browse to them.
