---
title: "Sourcegraph 5.0"
publishDate: 2023-03-23T10:00-07:00
description: "Announcing Sourcegraph 5.0. The latest release includes 20+ updates and introduces Cody, the AI programming assistant."
tags: [blog, release]
slug: "release/5.0"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-post/5.0/sourcegraph-5-0-hero.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-post/5.0/sourcegraph-5-0-hero.png
changelogItems:
---

We're headed towards a future with a lot more people and AIs writing a lot more code. With today's tools, this will be a mess. But with the right tools, this can lead to the most sustained period of human advancement.

We're building the right tools for the future of code. Sourcegraph is a code intelligence platform, which is a combination of 3 things:
* **The graph of code**, which means all the relevant code plus code navigation, dep graph, ownership, runtime, logging, tracing, deployment, and more.
* **Workflows** to help devs write a new feature faster, fix bugs/vulns faster, and do refactors/migrations faster.
* **Large language models** that read the relevant parts of the code graph to combine general intuition with specific data to power these workflows.
<br/>

<Figure
    src="https://storage.googleapis.com/sourcegraph-assets/blog/5.0/cip-diagram.png"
    alt="Code intelligence platform diagram"
  /><br/>

"Source_graph_"? "The graph of code"? Yes, we've known the graph of code would be incredibly valuable ever since we started Sourcegraph in 2013. We didn't predict something like LLMs would come so quickly, but we've been hoping for this moment for the last 10 years.

Today, we're making another big step toward this vision with Sourcegraph 5.0, which introduces:
* **Cody**, our AI assistant that feeds context from Sourcegraph's code graph to the LLM to answer your questions about your own entire codebase;
* **Own**, which adds code ownership information to the code graph;
* **App**, which runs Sourcegraph as a local desktop app so any dev can start using it quickly;
* and much more. 

<br/>
Read on to discover everything included in Sourcegraph 5.0.
<br/>

<Badge link="/cody" text="AI" color="blue" size="small" />
#### Cody, your code-aware programmer's assistant

Cody is an AI coding assistant that can find, explain, and write code. Cody can answer questions about both general programming topics and your specific codebase from right inside your editor. Cody is powered by Sourcegraph's graph of code intelligence, so unlike other coding assistants, it knows about your codebase and not just about open source code.

We're releasing Cody as experimental in 5.0, with general availability coming in a future release. [Learn more about Cody](https://about.sourcegraph.com/cody) and [sign up for access to Cody](https://sourcegraph.typeform.com/cody-signup).

<br/>

<Badge link="/own" text="Code Ownership" color="green" size="small" />
#### Sourcegraph Own preview

Sourcegraph Own manages code ownership for your entire codebase across every repository and code host. React to incidents faster and increase productivity by making it easy to find who owns any code quickly.

We are launching a preview of Sourcegraph Own as an experimental feature and will iterate over the coming months to deliver our full roadmap vision to every customer. [Read more in the full announcement for Sourcegraph Own.](https://about.sourcegraph.com/blog/announcing-sourcegraph-own)

<Video 
  source={{
    webm: 'blog/announcing-own',
    mp4: 'blog/announcing-own'
  }}
  loop={true}
  title="An example of looking at ownership data in Sourcegraph"
/>

<a href="https://docs.sourcegraph.com/own" className="not-italic flex items-center mb-sm">Docs<OpenInNewIcon className="ml-xxs" size={18} /></a>
<br/>

<Badge link="/code-search" text="Code Search" color="cerise" size="small" />
#### Improved code exploration experience

In 5.0, we’re introducing a number of exciting code exploration experience improvements.

We shipped the CodeMirror editor as the default blob viewer. This new editor is much more efficient with large files, making it easier and faster than ever to explore code. It also has great extensibility potential, enabling us to ship more IDE-like code exploration features in the future.

We've also enhanced the blob view by adding keyboard navigation. This means you can move around your codebase quickly and efficiently without ever taking your hands off the keyboard. We’ve also added keyboard shortcuts for switching between the code editor, files, and symbols trees. You can turn this on using the `blob-page-switch-areas-shortcuts` feature flag.

We're also shipping file and symbol trees with drastically improved accessibility and a slick browsing experience.

Plus, we've made a number of improvements to the repo and directory pages. We're now rendering the README file in the directory so you can get a quick overview of what's inside. We've also added a linear file browser, which shows diff stats over the past month, so you can quickly see what's changed recently. And we're now showing recent commits and contributors, so you can get a sense of who's been working on the codebase.

Finally, we've made some improvements to the Git blame decorations. We've improved the design and now show the file in the previous revision. Where possible, we're linking to GitHub issues and pull requests, so you can quickly jump to relevant discussions.

All of these improvements add up to a more streamlined, efficient, and powerful code exploration experience. We're excited to see how they'll help our users better understand and work with the codebase!

<br/>
<Video
  source={{
    webm: 'blog/keyboard-nav',
    mp4: 'blog/keyboard-nav'
  }}
  loop={true}
  title="New keyboard navigation experience in Sourcegraph"
/>
<br/><br/>

<Badge link="/code-search" text="Code Search" color="cerise" size="small" />
#### A completely re-imagined search input

The search input has been redesigned to greatly improve usability. New contextual suggestions help users learn the Sourcegraph query language as they search. These powerful suggestions react to the user’s current query to suggest related filters. How suggestions are displayed has been unified across contexts and filters, and the history mode has been integrated directly into input. Finally, improved and expanded keyboard shortcuts also make navigation much easier.

<br/>
<div className="mb-sm">
  <Figure
    src="https://storage.googleapis.com/sourcegraph-assets/blog/5.0/reimagined-search-input.png"
    alt="The new search UI"
  />
</div><br/>

<Badge link="/code-search" text="Code Search" color="cerise" size="small" />
#### Intelligent search ranking

Previously, Sourcegraph ordered search results in a simple way that could make it hard to find the most relevant files. In version 5.0, we're releasing two significant improvements to search ranking:

- Search results are no longer grouped by repository. Instead, we return the most relevant files first. This helps prevent users from requiring workarounds to find what they’re looking for, for example updating the search to exclude certain repositories.
- Search now incorporates a "file importance" score to help boost high-quality, commonly-used files. This score is based on the code dependency graph and is only available when precise code intelligence is enabled.
<br/>

These improvements are being released together as a limited beta in 5.0. You can reach out to your account team if you're interested in the beta.

<br/>

<Badge link="/code-search" text="Code Intelligence" color="cerise" size="small" />
#### Improved auto-indexing setup experience

We've made significant improvements to Sourcegraph's auto-indexing setup experience to make it easier for users to enable precise code intelligence. Previously, the configuration options were somewhat opaque and could be intimidating for users to configure, even for engineers at Sourcegraph.

In the 5.0 release, we've redesigned the auto-indexing configuration pages to be more intuitive and self-documenting. We've added helpful descriptions and visualizations to make the options and their impacts more understandable. We've also added new dashboards so users can monitor the code intelligence coverage for their repositories and instances:

- Repository code intelligence coverage dashboard: See the coverage status for a specific repository, including which files/directories are indexed and which are pending indexing. Easily trigger re-indexing of specific paths or the entire repository.
- Instance code intelligence coverage dashboard (for site administrators): Get an overview of indexing coverage across all repositories in the instance. See repositories with low coverage and trigger indexing jobs to improve coverage.
<br/>

Additionally, we've added more "code intelligence health" indicators to the Sourcegraph UI so users can quickly see if their code intelligence is up-to-date or if there are any issues they can address.

These improvements make it easier to enable precise code intelligence on Sourcegraph and ensure users can rely on the best possible coding experience. Give the new auto-indexing setup experience a try, and monitor your code intelligence coverage/health with the new dashboards. As always, we welcome your feedback!

<br/>

<Badge link="/batch-changes" text="Batch Changes" color="blue" size="small" />
#### Integrate Batch Changes with other tools with outgoing webhooks

Batch Changes enables you to apply and track code changes across many repositories and code hosts. In many pipelines, opening and merging changesets requires interacting with other tools: ticketing, custom automation for reviews, etc. Now, outgoing webhooks for Batch Changes let you send batch change and changeset events out to third-party systems automatically.

Site admins can configure outgoing webhooks from admin settings under "Batch Changes" > "Outgoing webhooks." Supported events are listed in [docs](https://docs.sourcegraph.com/admin/config/webhooks/outgoing#supported-event-types).

<br/>
<div className="mb-sm">
  <Figure
    src="https://storage.googleapis.com/sourcegraph-assets/blog/5.0/outgoing-webhooks.png"
    alt="Outgoing webhooks configuration"
  />
</div>

<a href="https://docs.sourcegraph.com/admin/config/webhooks/outgoing" className="not-italic flex items-center mb-sm">Docs<OpenInNewIcon className="ml-xxs" size={18} /></a>
<br/>

<Badge link="/batch-changes" text="Batch Changes" color="blue" size="small" />
#### Limit access to batch changes

In most companies, Batch Changes can be made available to all devs: batch changes respect code host permissions and only let users open changesets against code they have access to. However, some customers require tighter controls to meet the security and compliance standards of their industry. To meet these needs, we're introducing a role-based access control (RBAC) system to Sourcegraph to enable more granular controls for who can create batch changes.

Site admins can limit access to approved users from admin settings under “Site admin” > “Users & auth” > “Roles” by:

- Creating custom user roles with Batch Changes permissions
- Revoking default role permissions
- Assigning designated users to Batch Changes-enabled roles
<br/>

While the RBAC system is limited to batch changes for now, the system will soon be expanded to cover additional areas of Sourcegraph as well.

<br/>
<Video 
  source={{
    webm: 'blog/5.0/batch-changes-rbac',
    mp4: 'blog/5.0/batch-changes-rbac'
  }}
  loop={true}
  title="RBAC for Batch Changes"
/>
<br/>

<a href="https://docs.sourcegraph.com/admin/access_control" className="not-italic flex items-center mb-sm">Docs<OpenInNewIcon className="ml-xxs" size={18} /></a>
<br />

<Badge text="Code Insights" link="/code-insights" color="green" size="small" />
#### Improved Code Insights support for instances with a large number of repositories

Code insights provide precise answers about the trends and composition of your codebase, transforming it into a queryable database.  

Previously, users had to create insights over either a few named repositories or all of their repositories. Running insights over all repositories could often take an impractical amount of time to process. Now, with the new repository selection, users can target their insights to the exact scope of repositories that is relevant to them. Additionally, administrators can now monitor the processing of insights and, when necessary, reprioritize or retry them from within the site admin section.

<a href="https://docs.sourcegraph.com/code_insights" className="not-italic flex items-center mb-sm">Docs<OpenInNewIcon className="ml-xxs" size={18} /></a>
<br />

<Badge link="https://docs.sourcegraph.com/admin/external_service" text="Code Hosts" color="violet" size="small" />
#### Impoved Gerrit support with repository permissions

Gerrit connections now have their own dedicated code host connection option as opposed to the “Generic Git Host” connection that had to be used before. Along with this, Gerrit connections can also be configured to require user authentication, which will require users to provide Gerrit credentials in order to search and browse Gerrit code.

<a href="https://docs.sourcegraph.com/admin/external_service/gerrit" className="not-italic flex items-center mb-sm">Docs<OpenInNewIcon className="ml-xxs" size={18} /></a>
<br />

<Badge link="https://docs.sourcegraph.com/admin/external_service" text="Code Hosts" color="violet" size="small" />
#### Improved support for the Azure DevOps code host

Sourcegraph customers will now be able to bring their Azure DevOps repositories into their Sourcegraph instance. Sourcegraph will sync specified repositories from the customers’ Azure DevOps organizations or projects and also respect and enforce permissions from Azure DevOps, ensuring that only users with access rights to repositories are allowed to access them. Batch Changes will now also support Azure DevOps code hosts and repositories.

<a href="https://docs.sourcegraph.com/admin/external_service/azuredevops" className="not-italic flex items-center mb-sm">Docs<OpenInNewIcon className="ml-xxs" size={18} /></a>
<br />

<Badge link="https://docs.sourcegraph.com/admin/external_service" text="Code Hosts" color="violet" size="small" />
#### Improved rate limiting for GitHub and GitLab

We've made changes to how we handle GitHub and GitLab rate limits. Previously, all GitHub requests would be limited to 5,000 requests per hour (i.e., even if there were 1,000 users on the instance, the total number of requests would not exceed 5,000/hour).

Now we use feedback from the code host to provide rate limiting using each individual user's own rate limit. This greatly speeds up our permissions syncing process. Customers might see an increase in the number of requests to the code host, but these will not exceed the code host's own imposed rate limits. Further, this does not override the custom rate limit that administrators can configure in the site config. If that custom rate limit is slower than that of GitHub, it will take precedence.

<a href="https://docs.sourcegraph.com/admin/external_service/github" className="not-italic flex items-center mb-sm">Docs<OpenInNewIcon className="ml-xxs" size={18} /></a>
<br />

<Badge link="" text="Admin" color="violet" size="small" />
#### Permissions center

The permissions center brings new tools for site admins and users to understand their repository permissions. To ensure developers only see code they have access to, Sourcegraph syncs permissions directly from users’ various code hosts via a continuous background process.

Historically, debugging repository permissions was time-consuming, confusing, and often impossible, as admins were required to access the production DB to debug. The permission center is a new way for admins to understand and work with how permissions are handled across Sourcegraph storing authorization data, all powered by a more scalable database-backed architecture.

The permission center provides a bird’s eye view of who can access code and why, what recently changed with permissions and when, how many permissions were added/removed,  and what's the reason for the permissions sync. It provides extensive observability and debugability for both the current and historical state of permissions within an instance.

<a href="https://docs.sourcegraph.com/admin/permissions/syncing" className="not-italic flex items-center mb-sm">Docs<OpenInNewIcon className="ml-xxs" size={18} /></a>
<br />

<Badge link="https://docs.sourcegraph.com/admin/" text="Admin" color="violet" size="small" />
#### Request account for unauthenticated users

It can be hard for administrators to control inbound requests for account creation when rolling out an instance of Sourcegraph. Our new request account feature streamlines this process by allowing unauthenticated users to request an account if sign-up is disabled. 

Users without an account can now click a “Request access” link on the sign-up page to complete the request form which is then sent to administrators to approve or reject. Submitting this form will alert administrators about account requests to ensure they maintain full control over who can access their instance while helping gauge interest for Sourcegraph within their organization.

A new analytics data point has been added to the “Analytics / Users” page, indicating the number of account requests made during a given period of time. This data can help administrators understand how many people are interested in accessing their instance.

This feature is experimental and enabled by default. However, it can be explicitly disabled by adding `accessRequests.enabled: false` to the site configuration experimental features settings.
<br />

<Badge link="https://docs.sourcegraph.com/admin/" text="Admin" color="violet" size="small" />
#### SCIM support

Sourcegraph now supports the [SCIM protocol](https://www.simplecloud.info/), an open industry standard for automating user provisioning and de-provisioning.

SCIM (System for Cross-domain Identity Management) allows users to connect their identity provider (like [Okta](https://developer.okta.com/docs/concepts/scim/) or [Azure AD](https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/sync-scim)) to Sourcegraph and automatically sync user accounts. When a new employee is onboarded, their Sourcegraph account is automatically created. When they leave the organization, their access is promptly revoked.

Before SCIM support, admins had to create and delete Sourcegraph user accounts manually. Now they can automate these tedious, error-prone tasks, meeting compliance requirements and reducing the risk of outdated user accounts. SCIM support is launching in beta with initial availablity for user provisioning (groups coming soon!). We have tested compatibility with Okta and Azure AD, and support full CRUD operations. 

With SCIM, you can eliminate ghost accounts and compliance headaches.

<a href="https://docs.sourcegraph.com/admin/scim" className="not-italic flex items-center mb-sm">Docs<OpenInNewIcon className="ml-xxs" size={18} /></a>
<br />
