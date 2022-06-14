---
title: 'Sourcegraph 3.41 release'
publishDate: TODO
description: TODO
tags: [blog, release]
slug: 'release/3.41'
published: false
heroImage: TODO
socialImage: TODO
changelogItems: TODO
---

<!-- <div className="alert alert-primary" role="alert" style={{maxWidth:'650px', alignItems:'center', margin: 'auto auto 20px auto'}}>
      <strong>Update as of May 31:</strong> Patch 3.40.1 has been released, which fixes the issue below. We recommend GitLab users upgrade to this patch. In the unlikely event you still see GitLab repositories missing, you can log out of Sourcegraph via GitLab and then log back in to refresh your OAuth token.
      <br/>
      <strong>May 24:</strong> GitLab 15.0 no longer supports OAuth tokens that don’t expire, which can cause authorization between Sourcegraph and GitLab to fail. We are working to fix compatibility with GitLab 15.0 (and support expiring OAuth tokens) in an upcoming patch.
</div>
 -->
 
Sourcegraph 3.41 is now available! Here are some highlights from this release:


## Batch Changes

### Running batch changes server-side is moving to Beta

Until now, you had to run `src-cli` locally to create your batch changes. `src-cli` pulls repo archives through Sourcegraph, and runs your batch spec to create diffs. For large amounts of repositories or resource-intensive code rewrites, running `src-cli` locally could take an impractical amount of time or be brittle.

Today, we're announcing that you can now run [batch changes server-side (beta)](https://docs.sourcegraph.com/batch_changes/explanations/server_side). 

Setting up running batch changes server-side allows to:
- Run large-scale or resource intensive batch changes without clogging your local machine.
- Run large batch changes faster by distributing them across an autoscaled pool of compute instances
- Get a better debugging experience, with logs being streamed directly into Sourcegraph.
- Trade-off a little more setup for the Spurcegraph admin, against a lot less setup for users (no local `src-cli`)

This is the outcome of months of iteration on the experimental version of the feature, and we're grateful to early users for their feedback!

This feature requires to setup [executors](https://docs.sourcegraph.com/admin/executors) (much like CI agents), which Sourcegraph will use to offload expensive tasks. Executors can also be used to run Code Intelligence [auto-indexing](https://docs.sourcegraph.com/code_intelligence/how-to/enable_auto_indexing) (experimental).

<!-- TODO: asset welcome right after deployment on demo -->

###  Batch specs can now mount local files on steps containers (experimental)

As we improve Batch Changes, we're heavily focusing on making it easy to write and debug batch specs. Iteration time needs to be as small as possible, so that users can quickly put together a spec, run it, see results, and quickly improve on it.

Many users have custom tooling or scripts that they run as batch changes steps. The only way to do that until now was to bake those scripts into the step container, or to copy paste the scripts directly in the spec using [steps.files](https://docs.sourcegraph.com/batch_changes/references/batch_spec_yaml_reference#steps-files). Both options slow down iterating on batch changes, requiring either to rebuild the container at each modification, or to copy paste code inside YAML.

Now you can directly mount files or directories on the batch change container using [steps.mount](https://docs.sourcegraph.com/batch_changes/references/batch_spec_yaml_reference#steps-mount). This is an experimental feature that's only supported when running batch changes locally. Lots of improvements are on the way ([issue](https://github.com/sourcegraph/sourcegraph/issues/14851)).

We're committed to making iterating on batch changes as fast as possible. Feedback welcome on what slows you down!
