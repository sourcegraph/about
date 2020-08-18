# Environment

This page describes our different cloud environments.

## Google Cloud

We utilize multiple Google Cloud projects and folders to organize our workloads and manage access control.


### Root Projects

- **Sourcegraph**: Services for sourcegraph.com.
- **sourcegraph-code-intel**: Services for Code Intel code execution.
- **sourcegraph-managed-**: There are multiple `-managed` projects, one for each our managed deployments.
- **TelligentSourcegraph**: Data pipeline and storage for pings and Cloud event logging.
- **Sourcegraph Auxiliary**: Testing clusters and deployments.
- **Universities**: Sourcegraph instances for universities. (Deprecated)
- **sourcegraph-interviews**: Shared project for interviews

### Folders
Dynamic or temporary projects are created in the folders listed below.

- **Engineers Projects**: Contains multiple engineers project. All projects must be prefixed with `$name-`.

---

- **sourcegraph-testing**: Testing clusters and deployments. (Delete or not?)
- **sourcegraph-calend**: ???
- **sourcegraph-orgtool**: ???
- **Quickstart**: ???
- **Gmail**: ???
- **Release**: ???
