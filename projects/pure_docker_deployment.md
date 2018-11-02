# Deploying Sourcegraph to a non-Kubernetes clusters

For cluster deployments of Sourcegraph, our recommendation historically has been to install Sourcegraph on Kubernetes. We [provide the required YAML](https://github.com/sourcegraph/deploy-sourcegraph) and you simply need to `kubectl apply` it to your Kubernetes cluster.

But, not everyone uses Kubernetes. There are various container management platforms out there: Netflix's [Titus](https://netflix.github.io/titus/) and Apache's [Mesos](http://mesos.apache.org/documentation/latest/docker-containerizer/), to name a few (and that's not including custom-rolled ones that various companies use internally!)

Today, we're proud to announce a new option: deployment of Sourcegraph to non-Kubernetes clusters!

We want Sourcegraph to be deployable anywhere -- and with ease. So we've been hard at work simplifying our deployment model, and making it easier than ever to take Sourcegraph's Docker images and deploy them on your own container infrastructure.

Sourcegraph can now be deployed with _just Docker_, and with absolutely minimal configuration needed. There is a single configuration file, and each service just specifies a few environment variables indicating how to connect to other services.

If you're interested in rolling out a Sourcegraph cluster deployment on your own container infrastructure, head on over to the [pure-Docker Sourcegraph cluster deployment reference](https://github.com/sourcegraph/deploy-sourcegraph-docker) to get started!

Our hope is that by releasing this, anyone will be able to run a Sourcegraph cluster on their own container infrastructure easily. If you have any questions or run into trouble, feel free to [open an issue](https://github.com/sourcegraph/deploy-sourcegraph-docker/issues/new) or contact us (support@sourcegraph.com), we are happy to help!
