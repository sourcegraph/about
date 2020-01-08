# Deployments

We maintain multiple deployments of Sourcegraph:

- sourcegraph.com is our production deployment for open source code. It is the [dot-com Kubernetes cluster on GCP](https://console.cloud.google.com/kubernetes/clusters/details/us-central1-f/dot-com?project=sourcegraph-dev).
- sourcegraph.sgdev.org is our private deployment of Sourcegraph that contains our private code. It is the [dogfood cluster on GCP](https://console.cloud.google.com/kubernetes/clusters/details/us-central1-a/dogfood?project=sourcegraph-dev).
- k8s.sgdev.org is a dogfood deployment that replicates the scale of our largest customers. It is the [dogfood-full-k8s cluster on GCP](https://console.cloud.google.com/kubernetes/clusters/details/us-central1-a/dogfood-full-k8s?project=sourcegraph-dev).

## Deploying to sourcegraph.com

The configuration for sourcegraph.com is in [deploy-sourcegraph-dot-com](https://github.com/sourcegraph/deploy-sourcegraph-dot-com). 

Here is how commits on `master` in [sourcegraph/sourcegraph](https://github.com/sourcegraph/sourcegraph) eventually get deployed to sourcegraph.com:

1. Every commit on `master` in [sourcegraph/sourcegraph](https://github.com/sourcegraph/sourcegraph) pushes updated Docker images for all of our services.
1. [Renovate](https://app.renovatebot.com/dashboard#github/sourcegraph/deploy-sourcegraph-dot-com) checks for updated Docker images about every hour and [opens and merges a PR](https://github.com/sourcegraph/deploy-sourcegraph-dot-com/pulls?utf8=%E2%9C%93&q=is%3Apr+author%3Aapp%2Frenovate) to update the image tags in [deploy-sourcegraph-dot-com](https://github.com/sourcegraph/deploy-sourcegraph-dot-com).
1. This configuration is deployed to sourcegraph.com on every commit to the `master` branch of [deploy-sourcegraph-dot-com](https://github.com/sourcegraph/deploy-sourcegraph-dot-com) in CI.

If you want to manually expedite a deploy, you can manually create and merge a PR that updates the Docker image tags in [sourcegraph/deploy-sourcegraph-dot-com](https://github.com/sourcegraph/deploy-sourcegraph-dot-com).