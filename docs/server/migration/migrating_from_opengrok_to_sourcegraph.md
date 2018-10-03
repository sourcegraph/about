---
layout: markdown
title: Migrating from Oracle OpenGrok to Sourcegraph for code search
permalink: docs/migration/oracle-opengrok-to-sourcegraph
---

You can migrate from Oracle's [OpenGrok](https://oracle.github.io/opengrok/) to [Sourcegraph](https://about.sourcegraph.com) for code search by following the steps in this document.

- [Background](#background)
- [Migration guide](#migration-guide)
  1.  [Deploying Sourcegraph](#deploying-sourcegraph)
  1.  [Configuring repositories](#configuring-repositories)
  1.  [Configuring user authentication](#configuring-user-authentication)
  1.  [Rolling out Sourcegraph organization-wide](#rolling-out-sourcegraph-organization-wide)

## Background

Sourcegraph is a self-hosted code search and intelligence tool that helps developers find, review, understand, and debug code. Organizations that switch from OpenGrok to Sourcegraph typically cite the following reasons:

- Sourcegraph supports [searching any revision](https://about.sourcegraph.com/docs/search) (not just specific branches) and does not require waiting for periodic reindexing.
- Sourcegraph's [query syntax](https://about.sourcegraph.com/docs/search/query-syntax), user interface, and [integrations](https://about.sourcegraph.com/docs/integrations) are superior and easier to use.
- Sourcegraph's [code intelligence](https://about.sourcegraph.com/docs/code-intelligence), has better language support (hover tooltips, definitions, references, implementations, etc.) and is based on the Language Server Protocol standard.
- The [Sourcegraph API](https://about.sourcegraph.com/docs/features/api) is more powerful, better documented, and easier to use than OpenGrok's API.
- Sourcegraph scales to more repositories/users and supports Kubernetes-based clustered/high-availability deployments better (with the [Data Center deployment option](https://about.sourcegraph.com/docs/datacenter)).

Both Sourcegraph and OpenGrok are self-hosted, and your code never touches Sourcegraph's (or Oracle's) servers.

One key feature of OpenGrok that Sourcegraph lacks is support for Subversion, Mercurial, CVS, and Perforce repositories. Sourcegraph only supports Git repositories.

Oracle releases OpenGrok under the open-source CDDL license and does not (currently) have any monetization plans for it. Sourcegraph is a commercial product, with a free tier and [paid premium features](https://about.sourcegraph.com/pricing) available.

Every organization's needs are different. [Install and use Sourcegraph for free](https://about.sourcegraph.com/docs) to see if it's right for your organization.

For more information about Sourcegraph, see:

- "[What is Sourcegraph?](https://about.sourcegraph.com/docs/search/query-syntax)"
- "[Code search overview](https://about.sourcegraph.com/docs/search)"
- Live examples on public code: [Sourcegraph tour](https://about.sourcegraph.com/docs/tour)

## Migration guide

Migrating from Oracle OpenGrok to Sourcegraph consists of 4 steps:

1.  [Deploying Sourcegraph](#deploying-sourcegraph)
1.  [Configuring repositories](#configuring-repositories)
1.  [Configuring user authentication](#configuring-user-authentication)
1.  [Rolling out Sourcegraph organization-wide](#rolling-out-sourcegraph-organization-wide)

The following sections guide you through the migration process.

### Deploying Sourcegraph

You can deploy Sourcegraph in 2 ways:

- [Sourcegraph Server](https://about.sourcegraph.com/#data-center): single-server deployment from the `sourcegraph/server` Docker image
- [Sourcegraph Data Center](https://about.sourcegraph.com/#data-center): cluster deployment using Kubernetes for 1,000s of repositories/users

The fastest way to try it is to run Sourcegraph Server locally [with the quickstart instructions](https://about.sourcegraph.com/docs).

Choose a deployment option and follow the instructions. When you've signed into your Sourcegraph instance as a site admin, continue to the next section.

### Configuring repositories

Sourcegraph and Oracle OpenGrok differ in how they access repositories:

- **"Passive":** OpenGrok reads all repositories underneath the `SRC_ROOT` path on disk. You place repositories there and configure the [sync.py tool](https://github.com/oracle/opengrok/wiki/Repository-synchronization) to fetch updates.
- **"Active":** Sourcegraph automatically handles cloning and updating repositories from [code hosts (GitHub, GitLab, Bitbucket Server, AWS CodeCommit, etc.](https://about.sourcegraph.com/docs/config/repositories) or [specified by Git clone URL](https://about.sourcegraph.com/docs/config/repositories#sync-repositories-from-any-code-host).

Sourcegraph's "active" model lets it:

- serve fresher repository data (to search and browse just-`git push`ed data);
- synchronize the list of repositories on the code host (so that newly added repositories are searchable/browseable)
- offer code host integrations and "View file on code host" links

Sourcegraph also partially supports the "passive" model like OpenGrok, but it's not recommended because you lose these benefits. To use it anyway, see "[Add repositories already cloned to disk](https://about.sourcegraph.com/docs/config/repositories#add-repositories-already-cloned-to-disk)".

To configure which repositories Sourcegraph will make available for searching and browsing:

- For repositories on popular code hosts, use the **Quick configure** actions on your Sourcegraph instance's site admin "Site configuration" page.
- For other repositories and for more information, see "[Add repositories](https://about.sourcegraph.com/docs/config/repositories)" in the Sourcegraph documentation.

When you've added repositories and confirmed that you can search and browse them, continue to the next section.

### Configuring user authentication

<div class="alert alert-info">

Single sign-on integrations are a [paid upgrade](/pricing). [Buy SSO.](/contact/sales)

</div>

Like Oracle OpenGrok, Sourcegraph is self-hosted. You control who can access it. Sourcegraph supports many user authentication and security options:

- [OpenID Connect user authentication](https://about.sourcegraph.com/docs/config/authentication#openid-connect) and [SAML user authentication](https://about.sourcegraph.com/docs/config/authentication#saml) (for Google/G Suite accounts, Okta, OneLogin, etc.)
- [HTTP user authentication proxies](https://about.sourcegraph.com/docs/config/authentication#http-authentication-proxies)
- [Builtin username-password authentication](https://about.sourcegraph.com/docs/config/authentication#builtin-authentication)
- [TLS/SSL](https://about.sourcegraph.com/docs/config/tlsssl) via provided certs/keys, Let's Encrypt, or a reverse proxy

For more information, see the following Sourcegraph documentation pages:

- "[User authentication](https://about.sourcegraph.com/docs/config/authentication)"
- "[TLS/SSL](https://about.sourcegraph.com/docs/config/authentication)"

### Rolling out Sourcegraph organization-wide

After you've set Sourcegraph up, it's time to share it with your organization. Successful roll-outs of Sourcegraph typically involve the following steps.

- Send a message (in team chat or email) announcing Sourcegraph:

  > I set up Sourcegraph as a possible alternative to OpenGrok for code search. [Describe the perceived benefits vs. OpenGrok that are most relevant to your organization.]
  >
  > Try it:
  >
  > - Search: [URL to an example search results page on your Sourcegraph instance]
  > - Code browsing: [URL to a code file page on your Sourcegraph instance]
  >
  > [Include screenshots of your Sourcegraph instance here]
  >
  > Post feedback at https://github.com/sourcegraph/issues [change if needed]

- Create an internal document based on the [Sourcegraph tour](https://about.sourcegraph.com/docs/tour), substituting links to and names of your organization's code. This explains how Sourcegraph helps developers perform common tasks better.
- Encourage installation of the [browser extension](https://about.sourcegraph.com/docs/features/browser-extension) to get Sourcegraph code intelligence and search in your organization's existing code host.
- Roll out the Chrome extension using [G Suite automatic installation](https://about.sourcegraph.com/docs/features/browser-extension/#automatically-install-with-g-suite) to everyone in your organization.
- Check the access logs for OpenGrok to see what users search for. Try searching for the same things on Sourcegraph, and ensure that you get the expected results. (Note: Sourcegraph's [search query syntax](https://about.sourcegraph.com/docs/search/query-syntax) differs from OpenGrok's.)
- Monitor your Sourcegraph instance's site admin "Analytics" page to see who's using it. Ask them for specific feedback. Also seek feedback from the most frequent users of OpenGrok.

If there are any blockers preventing your organization from switching to Sourcegraph, we'd love to hear from you so we can address them.

Let us know how we can help! [File an issue](https://github.com/sourcegraph/issues) with feedback/problems/questions, or [contact us directly](https://about.sourcegraph.com/contact).
