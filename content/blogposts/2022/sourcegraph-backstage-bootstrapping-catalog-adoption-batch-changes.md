---
title: 'Sourcegraph and Backstage: Bootstrapping Backstage Catalog Adoption with Sourcegraph Batch Changes'
description: How to use Sourcegraph batch changes to rapidly bootstrap a Backstage catalog
authors:
  - name: Taras Mankovski
    url: https://frontside.com
  - name: Min Kim
    url: https://frontside.com
  - name: Malo Marrec
    url: https://sourcegraph.com
  - name: Joel Kwartler 
    url: https://sourcegraph.com
publishDate: 2022-10-20T00:00
tags: [blog]
slug: sourcegraph-backstage-bootstrapping-catalog-adoption-batch-changes
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png
published: true
---

One of the most common questions from early adopters of [Backstage](https://backstage.io/) is "how do we get developers to start using the software catalog?" Those asking this question find themselves in a chicken and egg situation - developers need a populated software catalog in order to get value from Backstage, but Backstage requires developers to start using the software catalog to populate it. How do you break this cycle?

In this blog post, we'll describe a two-stage approach that helps Backstage adopters get traction for their software catalog:

1. Using a script to generate a single multi-document YAML file of every repository to populate the software catalog - for the purpose of visually demonstrating its proof of concept
1. Using Sourcegraph Batch Changes to kick off and keep track of the entire onboarding process of developers and their repositories to Backstage for the whole organization

Before we can start populating the catalog, we need a source of data that will be useful for our starting point. One place to start is to populate the catalog with repositories from your version control system. For this tutorial we'll be using GitHub but a similar approach should work for other repository hosts. GitHub provides a [CLI](https://cli.github.com) that we can use to get a list of all of the repositories in the organization and some information about them. We'll use the following command for our example to generate a list of repositories with some useful fields:

```bash
gh repo list <org_name> \
  --limit=1000 \
  --json=description,url,name,owner \
  --template=<output_template>
```


The [`--template` flag](https://cli.github.com/manual/gh_help_formatting) can be used to control what the result will look like. It uses the Go template format with a limited number of output functions so this approach might not scale for complex formatting. The default formatter will be sufficient for this tutorial but you may need to find another formatter.

### Using a multi-document YAML file

The Backstage catalog has a mechanism for ingesting catalog components from files. This mechanism is used to read `catalog-info.yaml` files and keep the catalog up to date. You can find documentation about it in the [Static Location Configuration](https://backstage.io/docs/features/software-catalog/configuration#static-location-configuration) section of Backstage's documentation. 

The static location configuration requires a URL that contains metadata of a component. You can see a bunch of static locations configured in [Backstage's demo app](https://github.com/backstage/demo/blob/master/app-config.yaml#L42-L71). 

It may not be obvious that this can be used to import multiple components from a single file by using a multi-document YAML. A multi-document YAML file uses a `---` separator to break up the document. You can use this to create a file that contains multiple catalog components. Here is an example of such a document:

```yml
apiVersion: backstage.io/v1alpha1
kind: Component
metadata:
  name: backstage
  description: |
		Backstage is an open-source developer portal that puts the developer experience first.
  annotations:
		github.com/project-slug: backstage/backstage
spec:
  type: library
  owner: CNCF
  lifecycle: experimental
---
apiVersion: backstage.io/v1alpha1
kind: Component
metadata:
  name: demo
  description: An example deployment of a Backstage application.
  annotations:
		github.com/project-slug: backstage/demo
spec:
  type: website
  owner: backstage/maintainers
  lifecycle: experimental
---
```
Now, we can use the generated `components.yaml` file with a static location to ingest all of these components into Backstage. To make this file available to your Backstage instance, you could commit this file to a repository and reference the URL of the file for your catalog location:

```yml
# app-config.yaml
  catalog:
	locations:
  	- type: url
    	target: https://github.com/my-org/my-repo/blob/main/components.yaml
```

Backstage will read this file and create a component for each YAML document in your `components.yaml` file. Backstage will automatically update when this file is changed. So if a repository is deleted or a new one is created, or say if you need to update the descriptions of components, you just need to rerun the same script and push the new `components.yaml` file.

This approach can be an easy and quick way to populate your catalog. You could even automate updating the catalog by creating a GitHub Actions workflow that will trigger on a cron to rerun this script and push the updated file into the repository. You can also do this with Sourcegraph Code Monitors, which we'll dicuss in the next blog post. 

Bootstrapping the catalog with a multi-document YAML file generated from a script works well as a proof of concept, but it becomes inconvenient when you have users who want to manage the metadata of their catalog components. Once you are done demonstrating this proof of concept, you can go ahead and remove the location of the multi-document YAML file:

```diff
# app-config.yaml
  catalog:
	locations:
-  	- type: url
-    	  target: https://github.com/my-org/my-repo/blob/main/components.yaml
```

### Using Sourcegraph to open pull requests

Backstage Software catalog is designed to empower developers to own the metadata of the components they use. It provides a GitOps-friendly way of pulling component metadata from repositories into the catalog's database. Information like the component's name, owner, type, and other metadata can be described via the `catalog-info.yaml` file. Developers can edit this file in their repository and Backstage will automatically read the changed file to update the metadata in the database.

To avoid the chicken-and-egg problem while setting up Backstage, we can bootstrap the creation of `catalog-info.yaml` files with Sourcegraph's [`Batch Changes`](https://docs.sourcegraph.com/batch_changes). Sourcegraph will automatically open pull requests against every repository to add a `catalog-info.yaml` file.

The benefit of this approach is that repository owners can either just merge the pull request without additional work. Or, even if they want to change the description, add links, or update the owners listed in the `catalog-info.yaml` file before merging the pull request, at least the pull request was started. 

Moreover, Sourcegraph Batch Changes let you track all PRs to completion. So, if you want to open PRs against all repos but don't know the ownership information, you can start the process, then use the dashboard to figure out who you need to follow up with to make sure everything gets merged. 

Let's see what this batch change would look like. Sourcegraph's Batch Changes are described by a spec that consist of three main parts:

* A search query
* Steps to execute to generate the diff
* A pull request template

Here’s an example of a batch change spec for adding `catalog-info.yaml` files to your repositories:

```yml
name: generate-catalog-infos-for-backstage
description: Batch change to add repositories to the Backstage catalog

# All repos from a given codehost
on:
  - repositoriesMatchingQuery: repo:github\.com

steps:
  # Run comby over the search results in each repository:
  - run: |
  	apk add github-cli;
  	gh auth login -h github.com;
  	gh repo view sourcegraph/sourcegraph --json=description,url,name,owner,nameWithOwner,languages > tmp.json;
  	python /tmp/create-catalog.py;
  	rm tmp.json
	container: python:3-alpine
	files:
  	/tmp/create-catalog.py: |
    	import json
    	TEMPLATE ="""kind: Component
    	metadata:
      	name: {}
      	description: |
        	{}
      	links:
      	- title: Repository
        	url: {}
      	annotations:
        	github.com/project-slug: {}
    	"""
    	with open('tmp.json','r') as f:
        	metadata = json.load(f)
        	with open('catalog-info.yml','w+') as out:
            	out.write(TEMPLATE.format(metadata["name"],metadata["description"],metadata["url"],metadata["nameWithOwner"]))
	# Make sure to set GH_TOKEN in your local shell
	# Note: setting env variables/secrets is not yet available when running server-side. Coming soon!
	env:
  	- GH_TOKEN
changesetTemplate:
  title: Add this repository to Backstage
  body: |
		This pull request includes a `catalog-info.yaml` which allows you to specify the metadata of this repository for the [Backstage Software Catalog](https://backstage.io/docs/features/software-catalog/software-catalog-overview). You can learn more about the `catalog-info.yaml` file [here](https://backstage.io/docs/features/software-catalog/descriptor-format).
		Once this pull request is merged, please register your component in [Backstage](https://<your-backstage-app-URL>/catalog-import).
  branch: add-catalog-info
  commit:
		message: Add repo to Backstage service catalog
```

Let's zoom in on the steps section. A batch change works by running any number of steps to generate a diff. Each step corresponds to running a container on the target code. This spec has a single step that will install the GitHub CLI to get the metadata we need about the repo then run a small python script to format it.

We use a few utilities to keep things clean:

- We need to authenticate to run the GitHub CLI - this is done by setting an environment variable with [env](https://docs.sourcegraph.com/batch_changes/references/batch_spec_yaml_reference#steps-env) and assumes that `GH_TOKEN` is available locally when running the spec.
- To keep things cleaner, we provide the script as a separate [file](https://docs.sourcegraph.com/batch_changes/references/batch_spec_yaml_reference#steps-files) that will be mounted on the container at runtime.

Running this spec in Sourcegraph Batch Changes will create pull requests to add a `catalog-info.yaml` to all the repositories matching the search query. You can keep track to ensure those pull requests get merged from the Sourcegraph [Batch Changes dashboard](https://docs.sourcegraph.com/batch_changes/explanations/introduction_to_batch_changes#overview).

Lastly, once a pull request is merged to introduce `catalog-info.yaml`, a developer must then go register the component. One way a component can be manually registered is by going directly to `https://<my-backstage-app-URL>/catalog-import`:

<Figure 
  src="https://storage.googleapis.com/sourcegraph-assets/blog/sourcegraph-backstage-blogpost/backstage-catalog-register.png "
  alt="Screenshot of the backstage catalog component registration UI"
/>

### Next: fully automate component registration 

In the next blog post, we go over [how the component registration can be fully automated by creating a Backstage entity provider with Sourcegraph's search API](../blog/sourcegraph-backstage-search-api-create-entity-provider-for-backstage). 

<div className="mt-6" />
## About the authors

_Taras Mankovski and Min Kim are respectively the CEO and technical fellow at [The Frontside Software, Inc](https://frontside.com/), a Backstage Professional Services Partner and DX Consulting Company. Malo and Joel are product managers at Sourcegraph._