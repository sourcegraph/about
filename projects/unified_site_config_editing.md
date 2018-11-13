# Unified site config editing and management console

NOTE: This has not yet been updated to reflect the changes in https://github.com/sourcegraph/sourcegraph/issues/965. That issue is canonical.

Sourcegraph 3.0 improves and unifies the process for configuring Sourcegraph in our Docker and Kubernetes deployments. 

Sourcegraph 3.0 adds a failsafe management console to edit critical configuration options. Before, all site configuration was a single JSON file. This included innocuous options like adding a GitHub token, and dangerous options like TLS_CERT that could potentially lock you out of your server. We’re separating these dangerous options in a new management console that’s available even if you misconfigure your instance. Right now, the managment console's editor is a simple plain-text one (plain monospace font editor, save button, warning banner for syntax+schema errors). We will upgrade it to a VSCode setting's UI-like interface in a future release. 

In our Docker deployment, you can currently edit the configuration directly in our web UI with tooltips and auto completion, but in our Kubernetes deployment you needed to edit a file and re-deploy the whole cluster’s configuration. In Sourcegraph 3.0, Kubernetes deployments can now edit the site configuration inside of the application with tooltips and auto completion. This’ll be accomplished by moving the site configuration from a plain file to our Postgres database. When you upgrade to 3.0, this migration will happen without the need for manual intervention. 

Note: Since Sourcegraph 3.0 is a preview release, we won't support migrating configurations from Sourcegraph 2.x to Sourcegraph 3.0. We will address this before the 3.x series becomes final. 

TODO: This work lays the foundation for having the ability to perform automatic schema migrations for your configuration, as well as integrating better secrets management 


## Rough plan

- [X] Have all non-`frontend` services query `frontend` for the current site config over the network
  - [X] Can remove site config `configMaps` from all deployments besides `frontend`
- [x] @geoffrey Break up the schema into separate schema.SiteConfiguration AND schema.DangerousConfiguration
- [ ] @slimsag Update pkg/conf to use a unified UnifiedSiteConfiguration type which contains schema.SiteConfiguration AND schema.DangerousConfiguration and OtherConfiguration
    - Update pkg/conf call sites to reference new `conf.Get().Dangerous` fields
    - Figure out how to update defaults for the site configuration (inside of init we do this in some locations?)
    - cmd/server creates a default site config file, this will need to be changed to a DB call somehow
- [X] @geoffrey Create a DB layer for storing and fetching the site config and dangerous config (using strings to retain whitespace/comments)
- [X] @geoffrey Implement conf.UpdateDangerousConfiguration (what Quinn's management console will call)
- [ ] @geoffrey Management console UI
- [ ] @geoffrey Deploy management console as a separate service (creating binary, docker image, Kubernetes deployment yaml, etc). *Waiting on above parts for full implementation, but [here is a WIP PR](https://github.com/sourcegraph/deploy-sourcegraph/pull/140).*

Follow ups after 3.0 preview:

- Ensure that cmd/server tries to internally restart the frontend process (may die, user will fix via mgmt console, then needs to try to restart itself)
- Add restarting logic to kill frontend pods/process when options that require restart are changed in mgmt console
<!--

Site config keys that should be ONLY visible and editable in the mgmt console:
- log
- appURL
- tls.letsencrypt
- tlsCert
- tlsKey
- httpToHttpsRedirect
- httpStrictTransportSecurity
- useJaeger
- lightstepAccessToken
- lightstepProject
- htmlHeadTop
- htmlHeadBottom
- htmlBodyTop
- htmlBodyBottom
- licenseKey
- auth.providers [auth.provider will be removed]
- auth.allowSignup
- MAYBE: auth.accessTokens [auth.disableAccessTokens will be removed]
- auth.public
[auth.openIDConnect, auth.saml, auth.userIdentityHTTPHeader are deprecated and will be removed]
- update.channel


Other notes:

Site config updating is clunky (Nov 5 release)
K8s deployment can’t edit site config from UI
Critical site config that can break the app (e.g. app url, authentication, tls config, etc.) stored elsewhere. Non critical site config is editable in UI (both k8s deploy and Server).
Solves: secrets in site config are sketchy by storing info in db to give us ability to control access

-->
