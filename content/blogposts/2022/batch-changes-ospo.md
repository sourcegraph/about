---
title: 'How we analyzed hundreds of repositories to ensure they had open source licenses'
authors:
  - name: Justin Dorfman
    url: https://twitter.com/jdorfman
publishDate: 2022-06-28T10:00-07:00
description: 'We’re excited to announce that our Open Source Program Office (OSPO) is now up and running!. One of my first tasks was making sure our open source software is in compliance with the Open Source Definition (OSD).'
tags: [blog]
slug: 'batch-changes-ospo'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/ospo-batch-changes-hero_social.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/ospo-batch-changes-hero_social.png
---

We’re excited to announce that our Open Source Program Office (OSPO) is now up and running! One of my first tasks was making sure [our open source software](https://sourcegraph.com/notebooks/Tm90ZWJvb2s6OTQ0) is in compliance with the Open Source Definition ([OSD](https://opensource.org/osd)).

As of June 2022, we have 428 public repositories, but 75 (over 17%) active repos were missing a license.

This wasn’t a great state of affairs, as other devs may need to know the license before using/incorporating our software into their workflows.

![License not Found](https://storage.googleapis.com/sourcegraph-assets/blog/ospo-batch-changes-image1a.jpg)

<p class="text-center">
    <i>I kept seeing “license not specified” which alarmed me.</i>
</p>

I started to review the repo list manually and realized “Hey, wait a minute, I think we have a tool that does this!” What a perfect opportunity to use our [Batch Changes](https://sourcegraph.com/batch-changes) feature.

To add the missing licenses to all the repos, I [created a YAML file](https://sourcegraph.com/notebooks/Tm90ZWJvb2s6MTIxOQ==) with the following:

<div className="container">
  <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
    <iframe src="https://sourcegraph.com/embed/notebooks/Tm90ZWJvb2s6MTIxOQ==" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
  </div>
</div>

<p>&nbsp;</p>

The magic starts on line 5, which uses our [code search](https://sourcegraph.com/search) engine to find our Github repos without a file named “LICENSE”.

```yaml
  - repositoriesMatchingQuery: repo:^github\.com/sourcegraph/ -repohasfile:^LICENSE
```

From there, line 8 copies the Apache license file.

```yaml
  - run: cat /tmp/apache2.txt > LICENSE
```

Once it’s in the repo, lines 187-192 commit the change to the “add-license” branch, with a prefilled commit message.

```yaml
changesetTemplate:
  title: Add Apache 2.0 License
  body: This is a batch change to make this open source project OSI/OSD compliant.
  branch: add-license # Push the commit to this branch.
  commit:
    message: Add Apache 2.0 License
```

It’s a few minutes of work to create and test the script, but it saved me hours of manual effort.

### Demo

There’s two ways to use Batch Changes:

1. Use [src (our CLI tool)](https://sourcegraph.com/github.com/sourcegraph/src-cli)
2. Use our [web app](https://docs.sourcegraph.com/batch_changes/explanations/introduction_to_batch_changes)

For this demo, we’ll use the web app.

After adding the YAML file to the Batch spec, you can kick off a Workspace preview and see the repos that match the query (e.g., those without a LICENSE file):

![Batch Spec](https://storage.googleapis.com/sourcegraph-assets/blog/ospo-batch-changes-image2.gif)

<p class="text-center">
    <i>Batch spec / Workspaces preview</i>
</p>

We can click “Run Batch Spec”, which takes us to the execution step.

![Run Batch Spec](https://storage.googleapis.com/sourcegraph-assets/blog/ospo-batch-changes-image3.jpg)

This shows you the change that will be made to each repo. When we click a specific entry, we’ll see its Changeset template:

![Changeset template](https://storage.googleapis.com/sourcegraph-assets/blog/ospo-batch-changes-image4.jpg)

The last step is kicking off the automated Pull Requests. What’s convenient is that you don’t need to run all the Changesets at once – you can pick and choose.

For example, if you had 130 repos to change, but what if needed to prioritize the LSIF repos? You’d simply search “lsif”, select the repos you wanted, and click “Publish changesets”.

![Publish changesets](https://storage.googleapis.com/sourcegraph-assets/blog/ospo-batch-changes-image5.jpg)

<p class="text-center">
    <i>Select and Publish changesets</i>
</p>

![Publish changesets](https://storage.googleapis.com/sourcegraph-assets/blog/ospo-batch-changes-image6.jpg)

<p class="text-center">
    <i>Automated Pull Requests Statuses for selected LSIF repos</i>
</p>

Once the Changesets run, your inbox will start blowing up with the updates.

![Publish changesets](https://storage.googleapis.com/sourcegraph-assets/blog/ospo-batch-changes-image7.jpg)

<p class="text-center">
    <i>Success!</i>
</p>

### Conclusion

This is just one of many things you can do with Batch Changes – check out [https://github.com/sourcegraph/batch-change-examples](https://github.com/sourcegraph/batch-change-examples) for more examples. Over time, we’ll highlight popular use cases that have been useful.

If you have any questions, I’ll be hanging out in [our Discord](https://discord.gg/rDPqBejz93).

---

_Thanks to the following people for helping with this post: Erik Seliger, Daniel Marques, Malo Marrec, Kalid Azad, Marcos Placona, Fabiana Castellanos, and Tammy Zhu._

#### About the author

Justin Dorfman is Sourcegraph’s Open Source Program Manager and is responsible for
fostering the adoption of code intelligence in the open source community. You can chat with Justin on Twitter [@jdorfman](https://twitter.com/jdorfman) or our community [Discord](https://discord.com/invite/vqsBW8m5Y8)

### More posts like this

- [Interact with Sourcegraph from the command line faster with Fig](https://about.sourcegraph.com/blog/why-fig-autocomplete-is-awesome)
- [No Secrets! Quickly find sensitive files in your GitHub repo](https://about.sourcegraph.com/blog/no-more-secrets)

<iframe height="0" frameborder="0">
    <img referrerpolicy="no-referrer-when-downgrade" src="https://static.scarf.sh/a.png?x-pxid=a18bf656-9e70-4ab1-b2a5-1440b6646e1f" />
</iframe>
