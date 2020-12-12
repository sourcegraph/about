# Debugging

In order to debug the services we deploy you should understand the environment they are deployed on.

This guide will allow you to debug one of our running services in the **dogfood** deployment which mimics our customer environment. All of our services here run on a Kubernetes cluster.

- [Debugging](#debugging)
----[Gain-access-to-the-cluster](./tutorial.md#gain-access-to-the-cluster)


## Intro to crictl

[Kubernetes Docs](https://kubernetes.io/docs/tasks/debug-application-cluster/crictl/)

When debugging pods on the node itself you should prefer `critctl` from <https://github.com/kubernetes-sigs/cri-tools/releases>.
This tool works with all OCI container runtime. Kubernetes supports several container runtime and docker is not the only one.
