---
title: "Sourcegraph 5.0"
publishDate: 2023-03-23T10:00-07:00
description: "Announcing Sourcegraph 5.0. The latest release includes 20+ updates, including updates to Sourcegraph's speed, security, and scalability."
tags: [blog, release]
slug: "release/5.0"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-post/5.0/sourcegraph-5-0-hero.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-post/5.0/sourcegraph-5-0-hero.png
changelogItems:
---

Sourcegraph 5.0 includes more than 20 updates and new features. 5.0 continues to build on Sourcegraph as a code intellingence platform while also improving the speed and scale of Sourcegraph's core features. 5.0 also introduces AI to the code intelligence plaform with the private beta of [Cody](https://about.sourcegraph.com/cody), the new code-aware programming assistant. 

In addition to the new features included in 5.0, we are also releasing [the Sourcegraph app](https://about.sourcegraph.com/app). The app is a fast, lightweight version of Sourcegraph that can be downloaded and installed locally in minutes. It's the best way for new users to get started with Sourcegraph for free and run it on their local machine alongside their IDE.

Read on to discover everything included in Sourcegraph 5.0.
<br/>

<Badge link="/cody" text="AI" color="blue" size="small" />
#### Cody, your code-aware programmer's assistant

Cody is an AI coding assistant that can find, explain, and write code. It reads your codebase and feeds the right context to the LLM to answer questions about your entire codebase, instead of being limited to just a couple files. 

Cody can answer questions about both general programming topics and your specific codebase from right inside your editor. We're releasing Cody in private beta for 5.0 with general availability coming in a future release. [Learn more about Cody](https://about.sourcegraph.com/cody) or [join the Cody private beta waitlist.](https://sourcegraph.typeform.com/to/pIXTgwrd)

<br/>

<Badge link="/own" text="Code Ownership" color="green" size="small" />
#### Sourcegraph Own preview

Sourcegraph Own manages code ownership for your entire codebase across every repository and code host. React to incidents faster and increase productivity by making it easy to find who owns any code quickly.

We are launching a preview of Sourcegraph Own as an experimental feature and will iterate over the coming months to deliver our full roadmap vision to every customer. [Read more in the full announcement for Sourcegraph Own](https://about.sourcegraph.com/blog/inroducing-sourcegraph-own).

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

First and foremost, we've shipped the CodeMirror editor as the default blob viewer. This new editor is much more efficient with large files, making it easier and faster than ever to explore code. It also has great extensibility potential, enabling us to ship more IDE-like code exploration features in future.

We've also enhanced the blob view by adding keyboard navigation. This means you can move around yiour codebase quickly and efficiently without ever having to take your hands off the keyboard. We’ve also added keyboard shortcuts for switching between the code editor, files, and symbols trees. You can turn this on using the `blob-page-switch-areas-shortcuts` feature flag.

We're also shipping file and symbols trees with drastically improved accessibility and a slick browsing experience.

Plus, we've made a number of improvements to the repo and directory pages. We're now rendering the README file in the directory so you can get a quick overview of what's inside. We've also added a linear file browser, which shows diff stats over the past month, so you can quickly see what's changed recently. And, we're now showing recent commits and contributors, so you can get a sense of who's been working on the codebase.

Finally, we've made some improvements to the git blame decorations. We've improved the design and now show the file in the previous revision. Where possible, we're linking to GitHub issues and pull requests, so you can quickly jump to relevant discussions.

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

The search input has been redesigned to greatly improve usability. New contextual suggestions help users learn the Sourcegraph query language as they search. These powerful suggestions react to the user’s current query to suggest related filters. How suggestions are displayed has been unified across contexts and filters, and the history mode has been integrated directly in input. Lastly, improved and expanded keyboard shortcuts also make navigation much easier.

<br/>
<div className="mb-sm">
  <Figure
    src="https://storage.googleapis.com/sourcegraph-assets/blog/5.0/reimagined-search-input.png"
    alt="The new search UI"
    catpion="A re-imagined search input."
  />
</div><br/>

<Badge link="/code-search" text="Code Intelligence" color="cerise" size="small" />

<Badge link="/code-search" text="Code Search" color="cerise" size="small" />
#### Intelligent search ranking

Previously, Sourcegraph ordered search results in a simple way that could make it hard to find the most relevant files. In version 4.6, we're releasing two significant improvements to search ranking:

- Search results are no longer grouped by repository. Instead, we return the most relevant files first. This helps prevent users from requiring workarounds to find what they’re looking for, for example updating the search to exclude certain repositories.
- Search now incorporates a "file importance" score to help boost high quality, commonly-used files. This score is based on the code dependency graph, and is only available when precise code intelligence is enabled.
<br/>

These improvements are being released together as a limited beta in 5.0. You can reach out to your account team if you're interested in the beta.

<br/>

#### Improved auto-indexing setup experience

We've made significant improvements to Sourcegraph's auto-indexing setup experience to make it easier for users to enable precise code intelligence. Previously, the configuration options were somewhat opaque and could be intimidating for users to configure, even for engineers at Sourcegraph.

In the 5.0 release, we've redesigned the auto-indexing configuration pages to be more intuitive and self-documenting. We've added helpful descriptions and visualizations to make the options and their impacts more understandable. We've also added new dashboards so users can monitor the code intelligence coverage for their repositories and instances:

- Repository code intelligence coverage dashboard: See the coverage status for a specific repository, including which files/directories are indexed and which are pending indexing. Easily trigger re-indexing of specific paths or the entire repository.
- Instance code intelligence coverage dashboard (for site administrators): Get an overview of indexing coverage across all repositories in the instance. See repositories with low coverage and trigger indexing jobs to improve coverage.

Additionally, we've added more "code intelligence health" indicators to the Sourcegraph UI so users can quickly see if their code intelligence is up-to-date or if there are any issues they can address.

These improvements make it easier to enable precise code intelligence on Sourcegraph and ensure users can rely on the best possible coding experience. Give the new auto-indexing setup experience a try and monitor your code intelligence coverage/health with the new dashboards. As always, we welcome your feedback!

<br/>

<Badge link="/batch-changes" text="Batch Changes" color="blue" size="small" />
#### Keep everyone in the loop with outgoing webhooks for batch changes

Batch Changes enables you to efficiently generate and manage multiple changesets at once. Creating changesets is the first hurdle to get over, but getting those changes merged and keeping stakeholders in the loop is sometimes an even bigger challenge. A key part of this is alerting repository owners about incoming changes in the context of their existing tools and workflows.
Outgoing webhooks for Batch Changes provide a standardized way to get this information into your other tools with minimal additional work. Site admins can configure outgoing webhooks from admin settings under "Batch Changes" > "Outgoing webhooks."

Available events include:

- When a batch change is applied, closed, or deleted
- When a changeset is published, updated, or closed
- When there is an error publishing or updating a changeset

<br/>
<div className="mb-sm">
  <Figure
    src="https://storage.googleapis.com/sourcegraph-assets/blog/5.0/outgoing-webhooks.png"
    alt="Outgoing webhooks configuration"
    catpion="Outgoing webhooks configuration"
  />
</div>

<br/>
<a href="https://docs.sourcegraph.com/admin/config/webhooks/outgoing" className="not-italic flex items-center mb-sm">Docs<OpenInNewIcon className="ml-xxs" size={18} /></a>

<Badge link="/batch-changes" text="Batch Changes" color="blue" size="small" />
#### Limit access to batch changes to designated users

While batch changes enable efficient bulk creation of changesets, some customers require tighter controls to meet the security and compliance standards of their industry. To meet these needs, we're introducing a role-based access control (RBAC) system to Sourcegraph to enable more granular controls for who can access batch changes.
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

Code insights provide precise answers about the trends and composition of your codebase, tranforming it into a queryable database.  Previously, users had to create insights over either a few named repositories or all of their repositories, and running insights over all repositories could often take an impractical amount of time to process. Now, with the new repository selection, users can target their insights to the exact scope of repositories that is relevant to them. Additionally, administrators can now monitor the processing of insights and, when necessary, reprioritize or retry them from within the site admin section.

<a href="https://docs.sourcegraph.com/code_insights" className="not-italic flex items-center mb-sm">Docs<OpenInNewIcon className="ml-xxs" size={18} /></a>
<br />

<Badge link="https://docs.sourcegraph.com/admin/external_service" text="Code Hosts" color="violet" size="small" />
#### Impoved Gerrit support with user permissions

Gerrit connections now have their own dedicated code host connection option as opposed to the “Generic Git Host” connection that had to be used before. Along with this, Gerrit connections can now also enable authorization, which will mark all repositories from that connection as private and require users to authenticate using Gerrit credentials and verify that they have permission to view that repository on Gerrit if they want to be able to view it on Sourcegraph.

<a href="https://docs.sourcegraph.com/admin/external_service/gerrit" className="not-italic flex items-center mb-sm">Docs<OpenInNewIcon className="ml-xxs" size={18} /></a>
<br />

<Badge link="https://docs.sourcegraph.com/admin/external_service" text="Code Hosts" color="violet" size="small" />
#### Improved support for the Azure DevOps code host

Sourcegraph customers will now be able to bring their Azure DevOps repositories into their Sourcegraph instance. Sourcegraph will sync specified repositories from the customers’ Azure DevOps organizations or projects also respect and enforce permissions from Azure DevOps, ensuring that only users with access rights to repositories are allowed to access them. Batch Changes will now also support Azure DevOps code hosts and repositories.

<a href="https://docs.sourcegraph.com/admin/external_service/azuredevops" className="not-italic flex items-center mb-sm">Docs<OpenInNewIcon className="ml-xxs" size={18} /></a>
<br />

<Badge link="https://docs.sourcegraph.com/admin/external_service" text="Code Hosts" color="violet" size="small" />
#### Improved rate limiting for GitHub and GitLab

We've made changes to how we handle GitHub and GitLab rate limits. Previously, all GitHub requests would be limited to 5,000 requests per hour (i.e. even if there were 1,000 users on the instance, the total number of requests would not exceed 5,000/hour).

Now we use feedback from the code host to do rate limiting using each individual user's own rate limit. This greatly speeds up our permissions syncing process. Customers might see an increase in the number of requests to the code host, but these will not exceed the code host's own imposed rate limits.

This does not override the custom rate limit that customers can configure in the site config. If that custom rate limit is slower than that of GitHub, it will take precedence.

<a href="https://docs.sourcegraph.com/admin/external_service/github" className="not-italic flex items-center mb-sm">Docs<OpenInNewIcon className="ml-xxs" size={18} /></a>
<br />

<Badge link="" text="Admin" color="violet" size="small" />
#### Permissions center

The permissions center brings new tools for site admins and users to understand their repository permissions. To ensure developers only see code they have access to, Sourcegraph syncs permissions directly from users’ various code hosts via a continuous background process.

Historically, debugging repository permissions was time-consuming, extremely confusing, and often not possible as admins were required to access the production DB to debug. The permission center is a new way for admins to understand and work with how permissions are handled across Sourcegraph storing authorization data, all powered by a more scalable database-backed architecture.

The permission center provides a bird’s eye view of who can access code and why, what recently changed with permissions and when, how many permissions were added/removed and what's the reason for the permissions sync. It provides extensive observability and debugability for both current and historical state of permissions within an instance.

<a href="https://docs.sourcegraph.com/admin/permissions/syncing" className="not-italic flex items-center mb-sm">Docs<OpenInNewIcon className="ml-xxs" size={18} /></a>
<br />

<Badge link="https://docs.sourcegraph.com/admin/" text="Admin" color="violet" size="small" />
#### Account requests for unauthenticated users

Our new account requests feature allows unauthenticated users to request an account if sign up is disabled. Administrators now have the ability to approve or reject requests manually, giving them full control over who can access their instance.

- Users without an account can now click a “Request access” link on the sign up page to complete the request form. Submitting this form will alert administrators about account requests.
- Administrators will be notified of the number of new requests waiting for review via an “Account requests” notification button in their Sourcegraph navigation bar. This notification button is not shown if there are no pending requests.
- Once a request is approved, a new user is created in one of the following ways depending on SMTP configuration:
  - If SMTP is configured, an email with a reset password link is sent to the user.
  - If SMTP is not configured, administrators must manually send a reset password link to the user from the “Users & auth / Account requests” admin page.
- Administrators can also choose to reject a request. In this case, all new account requests from a previously rejected email will be ignored.
<br/>

A new analytics data point has been added to the “Analytics / Users” page indicating the number of account requests made during a given period of time. This data can help administrators understand how many people are interested in accessing their instance.

This feature is experimental and enabled by default. However, it can be explicitly disabled by adding `accessRequests.enabled: false` to the site configuration experimental features settings.
<br />

<Badge link="https://docs.sourcegraph.com/admin/" text="Admin" color="violet" size="small" />
#### SCIM support

Sourcegraph now supports the [SCIM protocol](https://www.simplecloud.info/), an open industry standard for automating user provisioning and deprovisioning.

SCIM (System for Cross-domain Identity Management) allows users to connect their identity provider (like [Okta](https://developer.okta.com/docs/concepts/scim/) or [Azure AD](https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/sync-scim)) to Sourcegraph and automatically sync user accounts. When a new employee is onboarded, their Sourcegraph account is automatically created. When they leave the organization, their access is promptly revoked.

Before SCIM support, IT admins had to manually create and delete Sourcegraph user accounts. Now they can automate these tedious, error-prone tasks, meeting compliance requirements and reducing the risk of outdated user accounts.

SCIM support is initially available for user provisioning (groups coming soon!). We have tested compatibility with Okta and Azure AD, and support full CRUD operations.

With SCIM, you can eliminate the ghost accounts and compliance headaches. [Learn more in our docs](https://docs.sourcegraph.com/admin/scim) and enable SCIM for your team.

<a href="https://docs.sourcegraph.com/admin/scim" className="not-italic flex items-center mb-sm">Docs<OpenInNewIcon className="ml-xxs" size={18} /></a>
<br />
