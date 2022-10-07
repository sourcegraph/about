---
title: 'Sourcegraph 3.2: (Mostly) no new features - Improved stability, setup, and documentation'
authors:
  - name: Ryan Blunden
    url: https://twitter.com/ryan_blunden
publishDate: 2019-03-20T05:59-06:00
tags: [
  blog
]
slug: sourcegraph-3.2
heroImage: https://user-images.githubusercontent.com/133014/54649997-a2829880-4a69-11e9-862a-cfa84df3d9de.png
published: true
description: 'Sourcegraph 3.2: (Mostly) no new features - Improved stability, setup, and documentation'
---

<Figure
  src="https://user-images.githubusercontent.com/133014/54649997-a2829880-4a69-11e9-862a-cfa84df3d9de.png" 
  alt="My top feature request is: no new features. Just fix what's broken"
  caption={<>Credit: <a href="https://twitter.com/rstevens">Rich Stevens</a></>}
/>

*Sourcegraph is an open source, self-hosted, cross-repository code search and navigation tool, with an efficient web interface and "feels-like-native" integration into your code host. [Install or upgrade Sourcegraph](#install-or-upgrade).*

[Developing Sourcegraph in the open](https://handbook.sourcegraph.com/company#open-company) with a [public product roadmap](https://handbook.sourcegraph.com/direction), and having a product used by tons of developers, means we receive a constant stream of feedback. A clear theme emerged:

<figcaption>“Improving x feature would help me more than adding new features.”</figcaption>

Seemingly small improvements can deliver huge productivity gains to engineers at companies such as Uber,  Lyft, and Yelp, which have hundreds or thousands of developers using Sourcegraph to search and navigate thousands of repositories every day.

That’s why this release focuses on productivity and stability improvements that every Sourcegraph user can benefit from.

- [Onboarding flow for site admins and users](#onboarding-flow-for-site-admins-and-users)
- [Easier deployment to EC2 and DigitalOcean](#easier-deployment-to-ec2-and-digitalocean)
- [Better SSL documentation](#better-ssl-documentation)
- [Integrations refactoring and improvements](#integrations-refactoring-and-improvements)
- [Code intelligence improvements](#code-intelligence-improvements)
- [Changelog](#changelog)

## Onboarding flow for site admins and users

<div className="container">
  <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
    <iframe src="https://player.vimeo.com/video/325481465?color=0CB6F4&amp;title=0&amp;byline=0&amp;portrait=0&autoplay=1&loop=1" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
  </div>
  <p style={{textAlign: 'center'}}><a href="https://vimeo.com/325481465" target="_blank">View on Vimeo</a></p>
</div>

Getting your team on Sourcegraph is now easier thanks to the onboarding guide in the top navigation bar.

Site admins are guided through the steps to connect their repositories on their Sourcegraph instance and set up user authentication so it's ready to share.

Users are guided through performing their first search and code navigation actions.

## Easier deployment to EC2 and DigitalOcean

<div className="container">
  <div style={{padding:'56.25% 0 0 0',position:'relative'}}>
    <iframe src="https://player.vimeo.com/video/325473911?color=0CB6F4&amp;title=0&amp;byline=0&amp;portrait=0&autoplay=1&loop=1" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
  </div>
  <p style={{textAlign: 'center'}}><a href="https://vimeo.com/325473911" target="_blank">View on Vimeo</a></p>
</div>

<div className="container">
  <div style={{padding:'56.25% 0 0 0',position:'relative'}}>
    <iframe src="https://player.vimeo.com/video/321525296?color=0CB6F4&amp;title=0&amp;byline=0&amp;portrait=0&autoplay=1&loop=1" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
  </div>
  <p style={{textAlign: 'center'}}><a href="https://vimeo.com/321525296" target="_blank">View on Vimeo</a></p>
</div>

You can [run Sourcegraph locally with a single Docker command](https://docs.sourcegraph.com/#quickstart-guide), but what about when you want to share Sourcegraph with your team?

We’ve made it easier to deploy Sourcegraph to your preferred cloud environments:

 - For AWS EC2: Use the [AWS EC2 Terraform plan](https://github.com/sourcegraph/deploy-sourcegraph-aws)
- For DigitalOcean: Use the [Sourcegraph listing in the Digital Ocean marketplace](https://marketplace.digitalocean.com/apps/sourcegraph?action=deploy&refcode=48dfb3ccb51c) for 1-click deployments
- For all environments: [Better configuration documentation](https://docs.sourcegraph.com/admin/nginx)

## Better SSL documentation

Our [NGINX SSL configuration documentation](https://docs.sourcegraph.com/admin/nginx) has been revised and improved, plus there's now a [guide for creating self-signed certificates](https://docs.sourcegraph.com/admin/ssl_https_self_signed_cert_nginx) and how to get them [trusted by your browser](https://docs.sourcegraph.com/admin/ssl_https_self_signed_cert_nginx#5-getting-the-self-signed-certificate-to-be-trusted-valid-on-external-instances).

The 3.3 release will bring even more documentation improvements such as a new theme and better documentation for administrators first setting up a Sourcegraph instance.

## Integrations refactoring and improvements

[Sourcegraph integrations](https://docs.sourcegraph.com/integration), such as our browser extension which brings hover tooltips and code navigation to GitHub, amplify the value that developers get from Sourcegraph every day.

Parts of our codebase are undergoing a large scale refactor, enabling existing extensions to receive enhancements faster, while adding new integrations becomes easier and quicker.

We’re also investing heavily in constantly running end-to-end tests to catch bugs sooner (when for example, a code host changes their DOM), and to ensure consistency of features across integrations such as cross repository jump-to-definition on GitHub, GitLab and BitBucket server.

Much of 3.2 is building the foundation upon which these improvements can be made and 3.3 is where the benefits of these changes will start to be seen.

## Code intelligence improvements

<div className="container">
  <div style={{padding:'56.25% 0 0 0',position:'relative'}}>
    <iframe src="https://player.vimeo.com/video/325480377?color=0CB6F4&amp;title=0&amp;byline=0&amp;portrait=0&autoplay=1&loop=1" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
  </div>
  <p style={{textAlign: 'center'}}><a href="https://vimeo.com/325480377" target="_blank">View on Vimeo</a></p>
</div>

Hover tooltips and jump-to-definition continue to be quicker and more efficient as you can see in the below demo of navigating around the Linux repository on Sourcegraph.com.

## Changelog

### Added

- Sourcegraph can now automatically use the system's theme.
  To enable, open the user menu in the top right and make sure the theme dropdown is set to "System".
  This is currently supported on macOS Mojave with Safari Technology Preview 68 and later.
- The `github.exclude` setting was added to the [GitHub external service config](https://docs.sourcegraph.com/admin/external_service/github#configuration) to allow excluding repositories yielded by `github.repos` or `github.repositoryQuery` from being synced.

### Changed

- Symbols search is much faster now. After the initial indexing, you can expect code intelligence to be nearly instant no matter the size of your repository.
- Massively reduced the number of code host API requests Sourcegraph performs, which caused rate limiting issues such as slow search result loading to appear.
- The [`corsOrigin`](https://docs.sourcegraph.com/admin/config/site_config) site config property is no longer needed for integration with GitHub, GitLab, etc., via the [Sourcegraph browser extension](https://docs.sourcegraph.com/integration/browser_extension). Only the [Phabricator extension](https://github.com/sourcegraph/phabricator-extension) requires it.

### Fixed

- Fixed a bug where adding a search scope that adds a `repogroup` filter would cause invalid queries if `repogroup:sample` was already part of the query.
- An issue where errors during displaying search results would not be displayed.

### Removed

- The `"updateScheduler2"` experiment is now the default and it's no longer possible to configure.

The [changelog for this and previous releases](https://github.com/sourcegraph/sourcegraph/blob/main/CHANGELOG.md) is available on GitHub.

## Thank you

Thank you to the many people who contributed to make Sourcegraph better since the last release!


- [@leoluk](https://github.com/leoluk)
- [@neongreen](https://github.com/neongreen)
- [@kamadoatfluid](https://github.com/kamadoatfluid)
- [@vyzaldysanchez](https://github.com/vyzaldysanchez)
- [@Warchant](https://github.com/Warchant)
- [@wrakky](https://github.com/wrakky)
- [@mjhogan](https://github.com/mjhogan)
- [@zapp42](https://github.com/zapp42)
- [@khoslaventures](https://github.com/khoslaventures)
- [@VeselaHouba](https://github.com/VeselaHouba)
- [@xvello](https://github.com/xvello)
- [@c-edw](https://github.com/c-edw)
- [@goddardcm](https://github.com/goddardcm)
- [@asinwang](https://github.com/asinwang)
- [@wukkuan](https://github.com/wukkuan)
- [@ruhullahshah](https://github.com/ruhullahshah)
- [@saurabh-hirani](https://github.com/saurabh-hirani)
- [@AndreKR](https://github.com/AndreKR)
- [@yevbar](https://github.com/yevbar)
- [@akshetpandey](https://github.com/akshetpandey)
- [@wangbinyq](https://github.com/wangbinyq)
- [@KGmajor](https://github.com/KGmajor)
- [@techman84](https://github.com/techman84)
- [@cosmonot1](https://github.com/cosmonot1)
- [@terinjokes](https://github.com/terinjokes)
- [@CH-JosephBironas](https://github.com/CH-JosephBironas)

## Install or upgrade

Ready to install? [Install Sourcegraph 3.2](https://docs.sourcegraph.com/)

Upgrading from 2.x or 3.0? [See the migration guide](https://docs.sourcegraph.com/admin/migration/3_0)

---

From the entire Sourcegraph team ([@sourcegraph](https://twitter.com/sourcegraph)), happy coding!
