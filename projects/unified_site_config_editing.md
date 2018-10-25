# Unified site config editing and management console

Sourcegraph 3.0 improves and unifies the process for configuring Sourcegraph in our Docker and Kubernetes deployments. 

Sourcegraph 3.0 adds a failsafe management console to edit critical configuration options. Before, all site configuration was a single JSON file. This included innocuous options like adding a GitHub token, and dangerous options like TLS_CERT that could potentially lock you out of your server. We’re separating these dangerous options in a new management console that’s available even if you misconfigure your instance. 

Sourcegraph 3.0 will 

In our Docker deployment, you can currently edit the configuration directly in our web UI with tooltips and auto completion, but in our Kubernetes deployment you needed to edit a file and re-deploy the whole cluster’s configuration. In Sourcegraph 3.0, Kubernetes deployments can now edit the site configuration inside of the application with tooltips and auto completion. This’ll be accomplished by moving the site configuration from a plain file to our Postgres database. When you upgrade to 3.0, this migration will happen without the need for manual intervention. 


TODO: This work lays the foundation for having the ability to perform automatic schema migrations for your configuration, as well as integrating better secrets management 

TODO: what is the migration path?


## Rough plan

- Have all non-`frontend` services query `frontend` for the current site config over the network
  - Can remove site config `configMaps` from all deployments besides `frontend`
- Need to land both of these at the same time 
  - Have `frontend` store the site configuration in postgres
    - Allows us to remove site config `configMap` completely from all deployments
  - Move "dangerous" site config options into separate management interface
  
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
