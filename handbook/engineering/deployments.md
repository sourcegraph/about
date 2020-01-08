# Deployments

We maintain multiple deployments of Sourcegraph:

- sourcegraph.com is our production deployment for open source code.
  - [dot-com Kubernetes cluster on GCP](https://console.cloud.google.com/kubernetes/clusters/details/us-central1-f/dot-com?project=sourcegraph-dev)
  - [Kubernetes configuration](https://github.com/sourcegraph/deploy-sourcegraph-dot-com)
  - [How code is deployed to sourcegraph.com](https://github.com/sourcegraph/deploy-sourcegraph-dot-com/blob/release/README.info.md#deploy-your-changes-to-sourcegraphcom)
- sourcegraph.sgdev.org is our private deployment of Sourcegraph that contains our private code.
  - [dogfood cluster on GCP](https://console.cloud.google.com/kubernetes/clusters/details/us-central1-a/dogfood?project=sourcegraph-dev)
  - [Kubernetes configuration](https://github.com/sourcegraph/infrastructure/tree/master/kubernetes/dogfood)
- k8s.sgdev.org is a dogfood deployment that replicates the scale of our largest customers.
  - [dogfood-full-k8s cluster on GCP](https://console.cloud.google.com/kubernetes/clusters/details/us-central1-a/dogfood-full-k8s?project=sourcegraph-dev)
  - [Kubernetes configuration](https://github.com/sourcegraph/deploy-sourcegraph-dogfood-k8s)
