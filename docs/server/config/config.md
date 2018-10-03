---
layout: markdown
title: Configuration overview
permalink: docs/config
---

Sourcegraph is configured by a site configuration JSON file. To view and edit your site configuration on the web-based site admin, go to the configuration page by clicking **Admin** in the top right of any page, and going to **Configuration** in the left side menu. (The URL is `https://sourcegraph.example.com/site-admin/configuration`.)

In Sourcegraph Data Center, edit the `config.json` file and then follow the [update steps](https://github.com/sourcegraph/deploy-sourcegraph/blob/docs-update/docs/update.md) to apply the new configuration. (Data Center admins can use the web-based site config editor described above for syntax/schema validation, but configuration changes can't be applied on the web.)

<div style="padding-bottom:67.1%;height:0;position:relative;overflow:hidden">
    <img src="/docs/server/Admin.png" width="800" class="flex br2 ba pa2 b--light-8 mv4 center"/>
</div>

---

## Next steps

See [all site configuration options](/docs/config/site), or read walkthroughs of common configuration use cases:

- [Add repositories to search from your code host](/docs/config/repositories)
- [Add user authentication providers (SSO)](/docs/config/authentication)
- [Configure search scopes](/docs/search/scopes)
- [Integrate with Phabricator](/docs/config/phabricator)
- [Add organizations](/docs/config/organizations)
- [Add a TLS/SSL certificate](/docs/config/tlsssl)
- [Use a custom domain](/docs/config/custom-domain)
- [Updating Sourcegraph Server](/docs/server/update)
