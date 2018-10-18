---
layout: markdown
title: Sourcegraph site configuration options
permalink: docs/config/site
---
This page lists site configuration options for Sourcegraph.
    

Configure your Sourcegraph instance on the **Configuration** page in the site admin area.
    For more information, see ["Configuration overview"](/docs/config).

- [auth.userOrgMap](#authuserorgmap-object)

- [log](#log-object)

- [siteID](#siteid-string)

- [appURL](#appurl-string)

- [dontIncludeSymbolResultsByDefault](#dontincludesymbolresultsbydefault-boolean)

- [disableBuiltInSearches](#disablebuiltinsearches-boolean)

- [experimentalFeatures](#experimentalfeatures-object)

- [tls.letsencrypt](#tlsletsencrypt-string-enum)

- [tlsCert](#tlscert-string)

- [tlsKey](#tlskey-string)

- [httpToHttpsRedirect](#httptohttpsredirect)

- [httpStrictTransportSecurity](#httpstricttransportsecurity)

- [corsOrigin](#corsorigin-string)

- [disableBrowserExtension](#disablebrowserextension-boolean)

- [disableAutoGitUpdates](#disableautogitupdates-boolean)

- [disablePublicRepoRedirects](#disablepublicreporedirects-boolean)

- [phabricator](#phabricator-array)

- [git.cloneURLToRepositoryName](#gitcloneurltorepositoryname-array)

- [github](#github-array)

- [githubClientID](#githubclientid-string)

- [githubClientSecret](#githubclientsecret-string)

- [gitlab](#gitlab-array)

- [awsCodeCommit](#awscodecommit-array)

- [bitbucketServer](#bitbucketserver-array)

- [gitolite](#gitolite-array)

- [gitMaxConcurrentClones](#gitmaxconcurrentclones-integer)

- [repos.list](#reposlist-array)

- [reviewBoard](#reviewboard-array)

- [lightstepAccessToken](#lightstepaccesstoken-string)

- [lightstepProject](#lightstepproject-string)

- [useJaeger](#usejaeger-boolean)

- [noGoGetDomains](#nogogetdomains-string)

- [blacklistGoGet](#blacklistgoget-array)

- [repoListUpdateInterval](#repolistupdateinterval-integer)

- [searchScopes](#searchscopes-siteconfigsearchscope)

- [htmlHeadTop](#htmlheadtop-string)

- [htmlHeadBottom](#htmlheadbottom-string)

- [htmlBodyTop](#htmlbodytop-string)

- [htmlBodyBottom](#htmlbodybottom-string)

- [licenseKey](#licensekey-string)

- [maxReposToSearch](#maxrepostosearch-integer)

- [executeGradleOriginalRootPaths](#executegradleoriginalrootpaths-string)

- [privateArtifactRepoID](#privateartifactrepoid-string)

- [privateArtifactRepoURL](#privateartifactrepourl-string)

- [privateArtifactRepoUsername](#privateartifactrepousername-string)

- [privateArtifactRepoPassword](#privateartifactrepopassword-string)

- [parentSourcegraph](#parentsourcegraph-object)

- [auth.provider](#authprovider-string-enum)

- [auth.providers](#authproviders-array)

- [auth.allowSignup](#authallowsignup-boolean)

- [auth.disableAccessTokens](#authdisableaccesstokens-boolean)

- [auth.accessTokens](#authaccesstokens-object)

- [auth.public](#authpublic-boolean)

- [auth.openIDConnect](#authopenidconnect-openidconnectauthprovider)

- [auth.saml](#authsaml-samlauthprovider)

- [auth.sessionExpiry](#authsessionexpiry-string)

- [auth.userIdentityHTTPHeader](#authuseridentityhttpheader-string)

- [email.smtp](#emailsmtp-smtpserverconfig)

- [email.imap](#emailimap-imapserverconfig)

- [email.address](#emailaddress-string)

- [update.channel](#updatechannel-string-enum)

- [langservers](#langservers-array)

- [extensions](#extensions-object)

- [discussions](#discussions-object)

- [settings](#settings-object)

- [GitHubConnection](#githubconnection-object)

- [GitLabConnection](#gitlabconnection-object)

- [BitbucketServerConnection](#bitbucketserverconnection-object)

- [AWSCodeCommitConnection](#awscodecommitconnection-object)

- [GitoliteConnection](#gitoliteconnection-object)

- [CloneURLToRepositoryName](#cloneurltorepositoryname-object)

- [Repository](#repository-object)

- [BuiltinAuthProvider](#builtinauthprovider-object)

- [OpenIDConnectAuthProvider](#openidconnectauthprovider-object)

- [SAMLAuthProvider](#samlauthprovider-object)

- [HTTPHeaderAuthProvider](#httpheaderauthprovider-object)

- [AuthProviderCommon](#authprovidercommon-object)

- [SMTPServerConfig](#smtpserverconfig-object)

- [IMAPServerConfig](#imapserverconfig-object)

- [SiteConfigSearchScope](#siteconfigsearchscope-array)


<hr />

# Reference

The available configuration options for Sourcegraph are listed below:

<br/>

## `auth.userOrgMap` (object)

Ensure that matching users are members of the specified orgs (auto-joining users to the orgs if they are not already a member). Provide a JSON object of the form `{"*": ["org1", "org2"]}`, where org1 and org2 are orgs that all users are automatically joined to. Currently the only supported key is `"*"`.

<br/>

## `log` (object)

Configuration for logging and alerting, including to external services.

Properties of the `log` object:

### `sentry` (object)

Configuration for Sentry

Properties of the `sentry` object:

#### `dsn` (string)

Sentry Data Source Name (DSN). Per the Sentry docs (https://docs.sentry.io/quickstart/#about-the-dsn), it should match the following pattern: '{PROTOCOL}://{PUBLIC_KEY}@{HOST}/{PATH}{PROJECT_ID}'.

Additional restrictions:

* Regex pattern: `^https?://`

<br/>

## `siteID` (string)

The identifier for this site. A Sourcegraph site is a collection of one or more Sourcegraph instances that are all part of the same logical site. If the site ID is not set here, it is stored in the database the first time the server is run.

<br/>

## `appURL` (string)

Publicly accessible URL to web app (e.g., what you type into your browser).

<br/>

## `dontIncludeSymbolResultsByDefault` (boolean)

Set to `true` to not include symbol results if no `type:` filter was given

<br/>

## `disableBuiltInSearches` (boolean)

Whether built-in searches should be hidden on the Searches page.

<br/>

## `experimentalFeatures` (object)

Experimental features to enable or disable. Features that are now enabled by default are marked as deprecated.

Properties of the `experimentalFeatures` object:

### `updateScheduler` (string, enum)

Enables or disables a newer update scheduling algorithm which attempts to prioritize frequently-updated repositories, and throttles automatic updates to limit congestion.

This property must be one of the following enum values:

- `enabled`
- `disabled`

Default: `"enabled"`

### `jumpToDefOSSIndex` (string, enum)

Enables or disables consulting the OSS package index on Sourcegraph.com for cross repository jump to definition. When enabled Sourcegraph.com will receive Code Intelligence requests when they fail to resolve locally. NOTE: disablePublicRepoRedirects must not be set, or should be set to false.

This property must be one of the following enum values:

- `enabled`
- `disabled`

Default: `"disabled"`

### `canonicalURLRedirect` (string, enum)

Enables or disables redirecting to the canonical URL (underneath the "appURL") for incoming HTTP requests. This experiment is intended to be enabled for all instances as of Sourcegraph 2.9.

This property must be one of the following enum values:

- `enabled`
- `disabled`

Default: `"disabled"`

### `configVars` (string, enum)

Enables or disables the interpolation of variables in string values in the site configuration JSON data.

If set to "enabled", all string values (except for JSON object property names) are interpolated, replacing ${var} or $var in the string with the value of the referenced environment variable (or the empty string if undefined).

This property must be one of the following enum values:

- `enabled`
- `disabled`

Default: `"disabled"`

### `multipleAuthProviders` (string, enum)

Enables or disables the use of multiple authentication providers and a publicly accessible web page displaying authentication options for unauthenticated users.

Only applies to Sourcegraph Enterprise Starter and Sourcegraph Enterprise.

This property must be one of the following enum values:

- `enabled`
- `disabled`

Default: `"enabled"`

### `discussions` (string, enum)

Enables the code discussions experiment.

This property must be one of the following enum values:

- `enabled`
- `disabled`

Default: `"disabled"`

<br/>

## `tls.letsencrypt` (string, enum)

Toggles ACME functionality for automatically using a TLS certificate issued by the Let's Encrypt Certificate Authority.
The default value is auto, which uses the following conditions to switch on:
 - tlsCert and tlsKey are unset.
 - appURL is a https:// URL
 - Can successfully bind to port 443

This property must be one of the following enum values:

- `auto`
- `on`
- `off`

Default: `"auto"`

<br/>

## `tlsCert` (string)

The contents of the PEM-encoded TLS certificate for the web server (for the web app and API).

See [https://about.sourcegraph.com/docs/config/tlsssl/](/docs/config/tlsssl/) for more information.

Additional restrictions:

* Regex pattern: `^-----BEGIN CERTIFICATE-----
`

<br/>

## `tlsKey` (string)

The contents of the PEM-encoded TLS key for the web server (for the web app and API).

See [https://about.sourcegraph.com/docs/config/tlsssl/](/docs/config/tlsssl/) for more information.

Additional restrictions:

* Regex pattern: `^-----BEGIN `

<br/>

## `httpToHttpsRedirect`

Redirect users from HTTP to HTTPS. Accepted values are "on", "off", and "load-balanced" (boolean values true and false are also accepted and equivalent to "on" and "off" respectively). If "load-balanced" then additionally we use "X-Forwarded-Proto" to determine if on HTTP.

Default: `"off"`

<br/>

## `httpStrictTransportSecurity`

The value of the HTTP Strict-Transport-Security (HSTS) header sent by Sourcegraph, if non-empty

Default: `"max-age=31536000"`

<br/>

## `corsOrigin` (string)

Value for the Access-Control-Allow-Origin header returned with all requests.

<br/>

## `disableBrowserExtension` (boolean)

Disable incoming connections from the Sourcegraph browser extension.

Default: `false`

<br/>

## `disableAutoGitUpdates` (boolean)

Disable periodically fetching git contents for existing repositories.

Default: `false`

<br/>

## `disablePublicRepoRedirects` (boolean)

Disable redirects to sourcegraph.com when visiting public repositories that can't exist on this server.

<br/>

## `phabricator` (array)

JSON array of configuration for Phabricator hosts. See Phabricator Configuration section for more information.

The object is an array with all elements of the type `object`.


The array object has the following properties:

* `url` (string)
  URL of a Phabricator instance, such as https://phabricator.example.com

* `token` (string)
  API token for the Phabricator instance.

* `repos` (array)
  The list of repositories available on Phabricator.
  The object is an array with all elements of the type `object`.
  
The array object has the following properties:
  * #### `path` (string, required)
  Display path for the url e.g. gitolite/my/repo
  * #### `callsign` (string, required)
  The unique Phabricator identifier for the repository, like 'MUX'.

<br/>

## `git.cloneURLToRepositoryName` (array)

JSON array of configuration that maps from Git clone URL to repository URI. Sourcegraph automatically resolves remote clone URLs to their proper code host. However, there may be non-remote clone URLs (e.g., in submodule declarations) that Sourcegraph cannot automatically map to a code host. In this case, use this field to specify the mapping. The mappings are tried in the order they are specified and take precedence over automatic mappings.

The object is an array with all elements of the type [`CloneURLToRepositoryName`](#cloneurltorepositoryname-object).

<br/>

## `github` (array)

JSON array of configuration for GitHub hosts. See GitHub Configuration section for more information.

The object is an array with all elements of the type [`GitHubConnection`](#githubconnection-object).

<br/>

## `githubClientID` (string)

Client ID for GitHub.

<br/>

## `githubClientSecret` (string)

Client secret for GitHub.

<br/>

## `gitlab` (array)

JSON array of configuration for GitLab hosts.

The object is an array with all elements of the type [`GitLabConnection`](#gitlabconnection-object).

<br/>

## `awsCodeCommit` (array)

JSON array of configuration for AWS CodeCommit endpoints.

The object is an array with all elements of the type [`AWSCodeCommitConnection`](#awscodecommitconnection-object).

<br/>

## `bitbucketServer` (array)

JSON array of configuration for Bitbucket Server hosts.

The object is an array with all elements of the type [`BitbucketServerConnection`](#bitbucketserverconnection-object).

<br/>

## `gitolite` (array)

JSON array of configuration for Gitolite hosts.

The object is an array with all elements of the type [`GitoliteConnection`](#gitoliteconnection-object).

<br/>

## `gitMaxConcurrentClones` (integer)

Maximum number of git clone processes that will be run concurrently to update repositories.

Default: `5`

<br/>

## `repos.list` (array)

JSON array of configuration for external repositories.

The object is an array with all elements of the type [`Repository`](#repository-object).

<br/>

## `reviewBoard` (array)

JSON array of configuration for Review Board.

The object is an array with all elements of the type `object`.


The array object has the following properties:

* `url` (string)
  URL to Review Board homepage.

<br/>

## `lightstepAccessToken` (string)

Access token for sending traces to LightStep.

<br/>

## `lightstepProject` (string)

The project ID on LightStep that corresponds to the `lightstepAccessToken`, only for generating links to traces. For example, if `lightstepProject` is `mycompany-prod`, all HTTP responses from Sourcegraph will include an X-Trace header with the URL to the trace on LightStep, of the form `https://app.lightstep.com/mycompany-prod/trace?span_guid=...&at_micros=...`.

<br/>

## `useJaeger` (boolean)

Use local Jaeger instance for tracing. Kubernetes cluster deployments only.

After enabling Jaeger and updating your Kubernetes cluster, `kubectl get pods`
should display pods prefixed with `jaeger-cassandra`,
`jaeger-collector`, and `jaeger-query`. `jaeger-collector` will start
crashing until you initialize the Cassandra DB. To do so, do the
following:

1. Install [`cqlsh`](https://pypi.python.org/pypi/cqlsh).
1. `kubectl port-forward $(kubectl get pods | grep jaeger-cassandra | awk '{ print $1 }') 9042`
1. `git clone https://github.com/uber/jaeger && cd jaeger && MODE=test ./plugin/storage/cassandra/schema/create.sh | cqlsh`
1. `kubectl port-forward $(kubectl get pods | grep jaeger-query | awk '{ print $1 }') 16686`
1. Go to http://localhost:16686 to view the Jaeger dashboard.

<br/>

## `noGoGetDomains` (string)

List of domains in import paths to NOT perform `go get` on, but instead treat as standard Git repositories. Separated by ','.

For example, if your code imports non-go-gettable packages like `"mygitolite.aws.me.org/mux.git/subpkg"` you may set this option to `"mygitolite.aws.me.org"` and Sourcegraph will effectively run `git clone mygitolite.aws.me.org/mux.git` instead of performing the usual `go get` dependency resolution behavior.

<br/>

## `blacklistGoGet` (array)

List of domains to blacklist dependency fetching from. Separated by ','.

Unlike `noGoGetDomains` (which tries to use a hueristic to determine where to clone the dependencies from), this option outright prevents fetching of dependencies with the given domain name. This will prevent code intelligence from working on these dependencies, so most users should not use this option.

The object is an array with all elements of the type `string`.

<br/>

## `repoListUpdateInterval` (integer)

Interval (in minutes) for checking code hosts (such as GitHub, Gitolite, etc.) for new repositories.

Default: `1`

<br/>

## `searchScopes` ([SiteConfigSearchScope](#siteconfigsearchscope-object))

<br/>

## `htmlHeadTop` (string)

HTML to inject at the top of the `<head>` element on each page, for analytics scripts

<br/>

## `htmlHeadBottom` (string)

HTML to inject at the bottom of the `<head>` element on each page, for analytics scripts

<br/>

## `htmlBodyTop` (string)

HTML to inject at the top of the `<body>` element on each page, for analytics scripts

<br/>

## `htmlBodyBottom` (string)

HTML to inject at the bottom of the `<body>` element on each page, for analytics scripts

<br/>

## `licenseKey` (string)

The license key associated with a Sourcegraph product subscription, which is necessary to activate Sourcegraph Enterprise functionality. To obtain this value, contact Sourcegraph to purchase a subscription.

<br/>

## `maxReposToSearch` (integer)

The maximum number of repositories to search across. The user is prompted to narrow their query if exceeded. The value -1 means unlimited.

Default: `500`

<br/>

## `executeGradleOriginalRootPaths` (string)

Java: A comma-delimited list of patterns that selects repository revisions for which to execute Gradle scripts, rather than extracting Gradle metadata statically. **Security note:** these should be restricted to repositories within your own organization. A percent sign ('%') can be used to prefix-match. For example, `git://my.internal.host/org1/%,git://my.internal.host/org2/repoA?%` would select all revisions of all repositories in org1 and all revisions of repoA in org2.
Note: this field is misnamed, as it matches against the originalRootURI LSP initialize parameter, rather than the no-longer-used originalRootPath parameter.

<br/>

## `privateArtifactRepoID` (string)

Java: Private artifact repository ID in your build files. If you do not explicitly include the private artifact repository, then set this to some unique string (e.g,. "my-repository").

<br/>

## `privateArtifactRepoURL` (string)

Java: The URL that corresponds to privateArtifactRepoID (e.g., http://my.artifactory.local/artifactory/root).

<br/>

## `privateArtifactRepoUsername` (string)

Java: The username to authenticate to the private Artifactory.

<br/>

## `privateArtifactRepoPassword` (string)

Java: The password to authenticate to the private Artifactory.

<br/>

## `parentSourcegraph` (object)

URL to fetch unreachable repository details from. Defaults to "https://sourcegraph.com"

Properties of the `parentSourcegraph` object:

### `url` (string)

Default: `"https://sourcegraph.com"`

<br/>

## `auth.provider` (string, enum)

The authentication provider to use for identifying and signing in users. Defaults to "builtin" authentication.

DEPRECATED: Use "auth.providers" instead. During the deprecation period (before this property is removed), provider set here will be added as an entry in "auth.providers".

This property must be one of the following enum values:

- `builtin`
- `openidconnect`
- `saml`
- `http-header`

Default: `"builtin"`

<br/>

## `auth.providers` (array)

The authentication providers to use for identifying and signing in users.

Only one authentication provider is officially supported at the moment. Multiple providers can be specified, but the support is experimental. If you set the deprecated field "auth.provider", then that value is used as the authentication provider, and you can't set another one here.

The elements of the array must match *exactly one* of the following types:

####[BuiltinAuthProvider](#builtinauthprovider-object)

####[SAMLAuthProvider](#samlauthprovider-object)

####[OpenIDConnectAuthProvider](#openidconnectauthprovider-object)

####[HTTPHeaderAuthProvider](#httpheaderauthprovider-object)

<br/>

## `auth.allowSignup` (boolean)

Allows new visitors to sign up for accounts. The sign-up page will be enabled and accessible to all visitors.

SECURITY: If the site has no users (i.e., during initial setup), it will always allow the first user to sign up and become site admin **without any approval** (first user to sign up becomes the admin).

Requires auth.provider == "builtin"

DEPRECATED: Use "auth.providers" with an entry of the form {"type": "builtin", "allowSignup": true} instead.

Default: `false`

<br/>

## `auth.disableAccessTokens` (boolean)

DEPRECATED. Use "auth.accessTokens.restrict" with value "disable" instead.

Prevents users from creating access tokens, which enable external tools to access the Sourcegraph API with the privileges of the user.

Default: `false`

<br/>

## `auth.accessTokens` (object)

Settings for access tokens, which enable external tools to access the Sourcegraph API with the privileges of the user.

Properties of the `auth.accessTokens` object:

### `allow` (string, enum)

Allow or restrict the use of access tokens. The default is "all-users-create", which enables all users to create access tokens. Use "none" to disable access tokens entirely. Use "site-admin-create" to restrict creation of new tokens to admin users (existing tokens will still work until revoked).

This property must be one of the following enum values:

- `all-users-create`
- `site-admin-create`
- `none`

Default: `"all-users-create"`

<br/>

## `auth.public` (boolean)

Allows anonymous visitors full read access to repositories, code files, search, and other data (except site configuration).

SECURITY WARNING: If you enable this, you must ensure that only authorized users can access the server (using firewall rules or an external proxy, for example).

Requires usage of the builtin authentication provider.

Default: `false`

<br/>

## `auth.openIDConnect` ([OpenIDConnectAuthProvider](#openidconnectauthprovider-object))

<br/>

## `auth.saml` ([SAMLAuthProvider](#samlauthprovider-object))

<br/>

## `auth.sessionExpiry` (string)

The duration of a user session, after which it expires and the user is required to re-authenticate. The default is 90 days. There is typically no need to set this, but some users may have specific internal security requirements.

The string format is that of the Duration type in the Go time package (https://golang.org/pkg/time/#ParseDuration). E.g., "720h", "43200m", "2592000s" all indicate a timespan of 30 days.

Note: changing this field does not affect the expiration of existing sessions. If you would like to enforce this limit for existing sessions, you must log out currently signed-in users. You can force this by removing all keys beginning with "session_" from the Redis store:

* For deployments using `sourcegraph/server`: `docker exec $CONTAINER_ID redis-cli --raw keys 'session_*' | xargs docker exec $CONTAINER_ID redis-cli del`
* For cluster deployments: 
  ```
  REDIS_POD="$(kubectl get pods -l app=redis-store -o jsonpath={.items[0].metadata.name})";
  kubectl exec "$REDIS_POD" -- redis-cli --raw keys 'session_*' | xargs kubectl exec "$REDIS_POD" -- redis-cli --raw del;
  ```


Default: `"2160h"`

<br/>

## `auth.userIdentityHTTPHeader` (string)

The name (case-insensitive) of an HTTP header whose value is taken to be the username of the client requesting the page. Set this value when using an HTTP proxy that authenticates requests, and you don't want the extra configurability of the other authentication methods.

Requires auth.provider=="http-header".

DEPRECATED: Use "auth.providers" with an entry of the form {"type": "http-header", "usernameHeader": "..."} instead.

<br/>

## `email.smtp` ([SMTPServerConfig](#smtpserverconfig-object))

<br/>

## `email.imap` ([IMAPServerConfig](#imapserverconfig-object))

<br/>

## `email.address` (string)

The "from" address for emails sent by this server.

Default: `"noreply@sourcegraph.com"`

<br/>

## `update.channel` (string, enum)

The channel on which to automatically check for Sourcegraph updates.

This property must be one of the following enum values:

- `release`
- `none`

Default: `"release"`

<br/>

## `langservers` (array)

Language server configuration.

The object is an array with all elements of the type `object`.


The array object has the following properties:

* `language` (string, required)
  Name of the language mode for the language server (e.g. go, java)

* `address` (string)
  TCP address of the language server. Required (except for Sourcegraph cluster deployments).
  Additional restrictions:
  * Regex pattern: `^tcp://`

* `initializationOptions` (object)
  LSP initialization options. This object will be set as the `initializationOptions` field in LSP initialize requests (https://microsoft.github.io/language-server-protocol/specification#initialize).

* `disabled` (boolean)
  Whether or not this language server is disabled.
  Default: `false`

* `metadata` (object)
  Language server metadata. Used to populate various UI elements.
  Properties of the `metadata` object:
  #### `experimental` (boolean)
  Whether or not this language server should be considered experimental. Has no effect on behavior, only effects how the language server is presented e.g. in the UI.
  #### `homepageURL` (string)
  URL to the language server's homepage, if available.
  #### `issuesURL` (string)
  URL to the language server's open/known issues, if available.
  #### `docsURL` (string)
  URL to the language server's documentation, if available.

<br/>

## `extensions` (object)

Configures Sourcegraph extensions.

Properties of the `extensions` object:

### `disabled` (boolean)

Disable all usage of extensions.

Default: `false`

### `remoteRegistry`

The remote extension registry URL, or `false` to not use a remote extension registry. If not set, the default remote extension registry URL is used.

The object must be one of the following types:

- `string`
- `boolean`

### `allowRemoteExtensions` (array)

Allow only the explicitly listed remote extensions (by extension ID, such as "alice/myextension") from the remote registry. If not set, all remote extensions may be used from the remote registry. To completely disable the remote registry, set `remoteRegistry` to `false`.

Only available in Sourcegraph Enterprise.

The object is an array with all elements of the type `string`.

<br/>

## `discussions` (object)

Configures Sourcegraph code discussions.

Properties of the `discussions` object:

### `abuseProtection` (boolean)

Enable abuse protection features (for public instances like Sourcegraph.com, not recommended for private instances).

Default: `false`

### `abuseEmails` (array)

Email addresses to notify of e.g. new user reports about abusive comments. Otherwise emails will not be sent.

The object is an array with all elements of the type `string`.

Default:

```
[]
```

<br/>

## `settings` (object)

Site settings hard-coded in site configuration.

DEPRECATED: Specify site settings in the site admin global settings page instead of hard-coding them in the site configuration file. This makes it possible to change site settings without redeploying for cluster deployments.

Properties of the `settings` object:

### `search.scopes` ([SiteConfigSearchScope](#siteconfigsearchscope-object))

### `search.repositoryGroups` (object)

Named groups of repositories that can be referenced in a search query using the repogroup: operator.

<hr style="border: 0;border-bottom: 2px black solid;" />



# Types

## `GitHubConnection` (object)

Properties of the `GitHubConnection` object:

### `url` (string)

URL of a GitHub instance, such as https://github.com or https://github-enterprise.example.com

Additional restrictions:

* Regex pattern: `^https?://`

### `gitURLType` (string, enum)

The type of Git URLs to use for cloning and fetching Git repositories on this GitHub instance.

If "http", Sourcegraph will access GitLab repositories using Git URLs of the form http(s)://github.com/myteam/myproject.git (using https: if the GitHub instance uses HTTPS).

If "ssh", Sourcegraph will access GitHub repositories using Git URLs of the form git@github.com:myteam/myproject.git. See the documentation for how to provide SSH private keys and known_hosts: [https://about.sourcegraph.com/docs/config/repositories#repositories-that-need-https-or-ssh-authentication](/docs/config/repositories#repositories-that-need-https-or-ssh-authentication).

This property must be one of the following enum values:

- `http`
- `ssh`

Default: `"http"`

### `token` (string, required)

A GitHub personal access token with repo and org scope.

Additional restrictions:

* Regex pattern: `^[^<>]+$`

### `certificate` (string)

TLS certificate of a GitHub Enterprise instance.

Additional restrictions:

* Regex pattern: `^-----BEGIN CERTIFICATE-----
`

### `repos` (array)

An array of repository "owner/name" strings specifying which GitHub or GitHub Enterprise repositories to mirror on Sourcegraph.

The object is an array with all elements of the type `string`.

### `repositoryQuery` (array)

An array of strings specifying which GitHub or GitHub Enterprise repositories to mirror on Sourcegraph. The valid values are:

- `public` mirrors all public repositories for GitHub Enterprise and is the equivalent of `none` for GitHub

- `affiliated` mirrors all repositories affiliated with the configured token's user:
	- Private repositories with read access
	- Public repositories owned by the user or their orgs
	- Public repositories with write access

- `none` mirrors no repositories (except those specified in the `repos` configuration property or added manually)

If multiple values are provided, their results are unioned.

If you need to narrow the set of mirrored repositories further (and don't want to enumerate the set in the "repos" configuration property), create a new bot/machine user on GitHub or GitHub Enterprise that is only affiliated with the desired repositories.

The object is an array with all elements of the type `string`.

Default:

```
[
  "public",
  "affiliated"
]
```

### `repositoryPathPattern` (string)

The pattern used to generate the corresponding Sourcegraph repository path for a GitHub or GitHub Enterprise repository. In the pattern, the variable "{host}" is replaced with the GitHub host (such as github.example.com), and "{nameWithOwner}" is replaced with the GitHub repository's "owner/path" (such as "myorg/myrepo").

For example, if your GitHub Enterprise URL is https://github.example.com and your Sourcegraph URL is https://src.example.com, then a repositoryPathPattern of "{host}/{nameWithOwner}" would mean that a GitHub repository at https://github.example.com/myorg/myrepo is available on Sourcegraph at https://src.example.com/github.example.com/myorg/myrepo.

Default: `"{host}/{nameWithOwner}"`

### `initialRepositoryEnablement` (boolean)

Defines whether repositories from this GitHub instance should be enabled and cloned when they are first seen by Sourcegraph. If false, the site admin must explicitly enable GitHub repositories (in the site admin area) to clone them and make them searchable on Sourcegraph. If true, they will be enabled and cloned immediately (subject to rate limiting by GitHub); site admins can still disable them explicitly, and they'll remain disabled.

<hr />



## `GitLabConnection` (object)

Properties of the `GitLabConnection` object:

### `url` (string, required)

URL of a GitLab instance, such as https://gitlab.example.com or (for GitLab.com) https://gitlab.com

Default: `"https://gitlab.com"`

Additional restrictions:

* Regex pattern: `^https?://`

### `token` (string, required)

A GitLab personal access token with "api" scope.

Additional restrictions:

* Regex pattern: `^[^<>]+$`

### `gitURLType` (string, enum)

The type of Git URLs to use for cloning and fetching Git repositories on this GitLab instance.

If "http", Sourcegraph will access GitLab repositories using Git URLs of the form http(s)://gitlab.example.com/myteam/myproject.git (using https: if the GitLab instance uses HTTPS).

If "ssh", Sourcegraph will access GitLab repositories using Git URLs of the form git@example.gitlab.com:myteam/myproject.git. See the documentation for how to provide SSH private keys and known_hosts: [https://about.sourcegraph.com/docs/config/repositories#repositories-that-need-https-or-ssh-authentication](/docs/config/repositories#repositories-that-need-https-or-ssh-authentication).

This property must be one of the following enum values:

- `http`
- `ssh`

Default: `"http"`

### `certificate` (string)

TLS certificate of a GitLab instance.

Additional restrictions:

* Regex pattern: `^-----BEGIN CERTIFICATE-----
`

### `projectQuery` (array)

An array of strings specifying which GitLab projects to mirror on Sourcegraph. Each string is a URL query string for the GitLab projects API, such as "?membership=true&search=foo".

The query string is passed directly to GitLab to retrieve the list of projects. The special string "none" can be used as the only element to disable this feature. Projects matched by multiple query strings are only imported once. See https://docs.gitlab.com/ee/api/projects.html#list-all-projects for available query string options.

The object is an array with all elements of the type `string`.

Default:

```
[
  "?membership=true"
]
```

### `repositoryPathPattern` (string)

The pattern used to generate a the corresponding Sourcegraph repository path for a GitLab project. In the pattern, the variable "{host}" is replaced with the GitLab URL's host (such as gitlab.example.com), and "{pathWithNamespace}" is replaced with the GitLab project's "namespace/path" (such as "myteam/myproject").

For example, if your GitLab is https://gitlab.example.com and your Sourcegraph is https://src.example.com, then a repositoryPathPattern of "{host}/{pathWithNamespace}" would mean that a GitLab project at https://gitlab.example.com/myteam/myproject is available on Sourcegraph at https://src.example.com/gitlab.example.com/myteam/myproject.

Default: `"{host}/{pathWithNamespace}"`

### `initialRepositoryEnablement` (boolean)

Defines whether repositories from this GitLab instance should be enabled and cloned when they are first seen by Sourcegraph. If false, the site admin must explicitly enable GitLab repositories (in the site admin area) to clone them and make them searchable on Sourcegraph. If true, they will be enabled and cloned immediately (subject to rate limiting by GitLab); site admins can still disable them explicitly, and they'll remain disabled.

<hr />



## `BitbucketServerConnection` (object)

Properties of the `BitbucketServerConnection` object:

### `url` (string, required)

URL of a Bitbucket Server instance, such as https://bitbucket.example.com

Additional restrictions:

* Regex pattern: `^https?://`

### `token` (string)

A Bitbucket Server personal access token with Read scope. Create one at https://[your-bitbucket-hostname]/plugins/servlet/access-tokens/add.

For Bitbucket Server instances that don't support personal access tokens (Bitbucket Server version 5.4 and older), specify user-password credentials in the "username" and "password" fields.

Additional restrictions:

* Regex pattern: `^[^<>]+$`

### `username` (string)

The username to use when authenticating to the Bitbucket Server instance. Also set the corresponding "password" field.

For Bitbucket Server instances that support personal access tokens (Bitbucket Server version 5.5 and newer), it is recommended to provide a token instead (in the "token" field).

### `password` (string)

The password to use when authenticating to the Bitbucket Server instance. Also set the corresponding "username" field.

For Bitbucket Server instances that support personal access tokens (Bitbucket Server version 5.5 and newer), it is recommended to provide a token instead (in the "token" field).

### `gitURLType` (string, enum)

The type of Git URLs to use for cloning and fetching Git repositories on this Bitbucket Server instance.

If "http", Sourcegraph will access Bitbucket Server repositories using Git URLs of the form http(s)://bitbucket.example.com/scm/myproject/myrepo.git (using https: if the Bitbucket Server instance uses HTTPS).

If "ssh", Sourcegraph will access Bitbucket Server repositories using Git URLs of the form ssh://git@example.bitbucket.com/myproject/myrepo.git. See the documentation for how to provide SSH private keys and known_hosts: [https://about.sourcegraph.com/docs/config/repositories#repositories-that-need-https-or-ssh-authentication](/docs/config/repositories#repositories-that-need-https-or-ssh-authentication).

This property must be one of the following enum values:

- `http`
- `ssh`

Default: `"http"`

### `certificate` (string)

TLS certificate of a Bitbucket Server instance.

Additional restrictions:

* Regex pattern: `^-----BEGIN CERTIFICATE-----
`

### `repositoryPathPattern` (string)

The pattern used to generate the corresponding Sourcegraph repository path for a Bitbucket Server repository.

 - "{host}" is replaced with the Bitbucket Server URL's host (such as bitbucket.example.com)
 - "{projectKey}" is replaced with the Bitbucket repository's parent project key (such as "PRJ")
 - "{repositorySlug}" is replaced with the Bitbucket repository's slug key (such as "my-repo").

For example, if your Bitbucket Server is https://bitbucket.example.com and your Sourcegraph is https://src.example.com, then a repositoryPathPattern of "{host}/{projectKey}/{repositorySlug}" would mean that a Bitbucket Server repository at https://bitbucket.example.com/projects/PRJ/repos/my-repo is available on Sourcegraph at https://src.example.com/bitbucket.example.com/PRJ/my-repo.

Default: `"{host}/{projectKey}/{repositorySlug}"`

### `excludePersonalRepositories` (boolean)

Whether or not personal repositories should be excluded or not. When true, Sourcegraph will ignore personal repositories it may have access to. See [https://about.sourcegraph.com/docs/config/repositories/#excluding-personal-repositories](/docs/config/repositories/#excluding-personal-repositories) for more information. Default: false.

### `initialRepositoryEnablement` (boolean)

Defines whether repositories from this Bitbucket Server instance should be enabled and cloned when they are first seen by Sourcegraph. If false, the site admin must explicitly enable Bitbucket Server repositories (in the site admin area) to clone them and make them searchable on Sourcegraph. If true, they will be enabled and cloned immediately (subject to rate limiting by Bitbucket Server); site admins can still disable them explicitly, and they'll remain disabled.

<hr />



## `AWSCodeCommitConnection` (object)

Properties of the `AWSCodeCommitConnection` object:

### `region` (string, enum, required)

The AWS region in which to access AWS CodeCommit. See the list of supported regions at https://docs.aws.amazon.com/codecommit/latest/userguide/regions.html#regions-git.

This property must be one of the following enum values:

- `ap-northeast-1`
- `ap-northeast-2`
- `ap-south-1`
- `ap-southeast-1`
- `ap-southeast-2`
- `ca-central-1`
- `eu-central-1`
- `eu-west-1`
- `eu-west-2`
- `sa-east-1`
- `us-east-1`
- `us-east-2`
- `us-west-1`
- `us-west-2`

Default: `"us-east-1"`

Additional restrictions:

* Regex pattern: `^[a-z\d-]+$`

### `accessKeyID` (string, required)

The AWS access key ID to use when listing and updating repositories from AWS CodeCommit. Must have the AWSCodeCommitReadOnly IAM policy.

### `secretAccessKey` (string, required)

The AWS secret access key (that corresponds to the AWS access key ID set in `accessKeyID`).

### `repositoryPathPattern` (string)

The pattern used to generate a the corresponding Sourcegraph repository path for an AWS CodeCommit repository. In the pattern, the variable "{name}" is replaced with the repository's name.

For example, if your Sourcegraph instance is at https://src.example.com, then a repositoryPathPattern of "awsrepos/{name}" would mean that a AWS CodeCommit repository named "myrepo" is available on Sourcegraph at https://src.example.com/awsrepos/myrepo.

Default: `"{name}"`

### `initialRepositoryEnablement` (boolean)

Defines whether repositories from AWS CodeCommit should be enabled and cloned when they are first seen by Sourcegraph. If false, the site admin must explicitly enable AWS CodeCommit repositories (in the site admin area) to clone them and make them searchable on Sourcegraph. If true, they will be enabled and cloned immediately (subject to rate limiting by AWS); site admins can still disable them explicitly, and they'll remain disabled.

<hr />



## `GitoliteConnection` (object)

Properties of the `GitoliteConnection` object:

### `prefix` (string, required)

Repository URI prefix that will map to this Gitolite host. This should likely end with a trailing slash. E.g., "gitolite.example.com/".

### `host` (string, required)

Gitolite host that stores the repositories (e.g., git@gitolite.example.com).

### `blacklist` (string)

Regular expression to filter repositories from auto-discovery, so they will not get cloned automatically.

### `phabricatorMetadataCommand` (string)

Bash command that prints out the Phabricator callsign for a Gitolite repository. This will be run with environment variable $REPO set to the URI of the repository and used to obtain the Phabricator metadata for a Gitolite repository. (Note: this requires `bash` to be installed.)

<hr />



## `CloneURLToRepositoryName` (object)

Describes a mapping from clone URL to repository name. The `from` field contains a regular expression with named capturing groups. The `to` field contains a template string that references capturing group names. For instance, if `from` is "^../(?P<name>\w+)$" and `to` is "github.com/user/{name}", the clone URL "../myRepository" would be mapped to the repository name "github.com/user/myRepository".

Properties of the `CloneURLToRepositoryName` object:

### `from` (string, required)

A regular expression that matches a set of clone URLs. The regular expression should use the Go regular expression syntax (https://golang.org/pkg/regexp/) and contain at least one named capturing group. The regular expression matches partially by default, so use "^...$" if whole-string matching is desired.

### `to` (string, required)

The repository name output pattern. This should use `{matchGroup}` syntax to reference the capturing groups from the `from` field.

<hr />



## `Repository` (object)

Properties of the `Repository` object:

### `type` (string, enum)

Type of the version control system for this repository, such as "git"

This property must be one of the following enum values:

- `git`

Default: `"git"`

### `url` (string, required)

Clone URL for the repository, such as git@example.com:my/repo.git

### `path` (string, required)

Display path on Sourcegraph for the repository, such as my/repo

Additional restrictions:

* Regex pattern: `^[\w_]`

### `links` (object)

Properties of the `links` object:

#### `repository` (string)

URL specifying where to view the repository at an external location e.g. "https://example.com/myrepo"

#### `commit` (string)

URL template for specifying how to link to commits at an external location. Use "{commit}" as a placeholder for a given commit ID e.g. "https://example.com/myrepo/view-commit/{commit}"

#### `tree` (string)

URL template for specifying how to link to paths at an external location. Use "{path}" as a placeholder for a given path and "{rev}" as a placeholder for a given revision e.g. "https://example.com/myrepo@{rev}/browse/{path}"

#### `blob` (string)

URL template for specifying how to link to files at an external location. Use "{path}" as a placeholder for a given path and "{rev}" as a placeholder for a given revision e.g. "https://example.com/myrepo@{rev}/browse/{path}"

<hr />



## `BuiltinAuthProvider` (object)

Configures the builtin username-password authentication provider.

Properties of the `BuiltinAuthProvider` object:

### `type` (string, required)

Constant value: `"builtin"`

### `allowSignup` (boolean)

Allows new visitors to sign up for accounts. The sign-up page will be enabled and accessible to all visitors.

SECURITY: If the site has no users (i.e., during initial setup), it will always allow the first user to sign up and become site admin **without any approval** (first user to sign up becomes the admin).

Default: `false`

<hr />



## `OpenIDConnectAuthProvider` (object)

Configures the OpenID Connect authentication provider for SSO.

Properties of the `OpenIDConnectAuthProvider` object:

### `type` (string, required)

Constant value: `"openidconnect"`

### `displayName`

### `issuer` (string, required)

The URL of the OpenID Connect issuer.

For Google Apps: https://accounts.google.com

Additional restrictions:

* Regex pattern: `^https?://`

### `clientID` (string, required)

The client ID for the OpenID Connect client for this site.

For Google Apps: obtain this value from the API console (https://console.developers.google.com), as described at https://developers.google.com/identity/protocols/OpenIDConnect#getcredentials

Additional restrictions:

* Regex pattern: `^[^<]`

### `clientSecret` (string, required)

The client secret for the OpenID Connect client for this site.

For Google Apps: obtain this value from the API console (https://console.developers.google.com), as described at https://developers.google.com/identity/protocols/OpenIDConnect#getcredentials

Additional restrictions:

* Regex pattern: `^[^<]`

### `requireEmailDomain` (string)

Only allow users to authenticate if their email domain is equal to this value (example: mycompany.com). Do not include a leading "@". If not set, all users on this OpenID Connect provider can authenticate to Sourcegraph.

Additional restrictions:

* Regex pattern: `^[^<@]`

<hr />



## `SAMLAuthProvider` (object)

Configures the SAML authentication provider for SSO.

Note: if you are using IdP-initiated login, you must have *at most one* SAMLAuthProvider in the `auth.providers` array.

Properties of the `SAMLAuthProvider` object:

### `type` (string, required)

Constant value: `"saml"`

### `displayName`

### `serviceProviderIssuer` (string)

The name of this SAML Service Provider, which is used by the Identity Provider to identify this Service Provider. It defaults to https://sourcegraph.example.com/.auth/saml/metadata (where https://sourcegraph.example.com is replaced with this Sourcegraph instance's "appURL"). It is only necessary to explicitly set the issuer if you are using multiple SAML authentication providers.

### `identityProviderMetadataURL` (string)

The SAML Identity Provider metadata URL (for dynamic configuration of the SAML Service Provider).

Additional restrictions:

* Regex pattern: `^https?://`

### `identityProviderMetadata` (string)

The SAML Identity Provider metadata XML contents (for static configuration of the SAML Service Provider). The value of this field should be an XML document whose root element is `<EntityDescriptor>` or `<EntityDescriptors>`.

### `serviceProviderCertificate` (string)

The SAML Service Provider certificate in X.509 encoding (begins with "-----BEGIN CERTIFICATE-----"). This certificate is used by the Identity Provider to validate the Service Provider's AuthnRequests and LogoutRequests. It corresponds to the Service Provider's private key (`serviceProviderPrivateKey`).

Additional restrictions:

* Regex pattern: `^(-----BEGIN CERTIFICATE-----
|\$)`

### `serviceProviderPrivateKey` (string)

The SAML Service Provider private key in PKCS#8 encoding (begins with "-----BEGIN PRIVATE KEY-----"). This private key is used to sign AuthnRequests and LogoutRequests. It corresponds to the Service Provider's certificate (`serviceProviderCertificate`).

Additional restrictions:

* Regex pattern: `^(-----BEGIN PRIVATE KEY-----
|\$)`

### `nameIDFormat` (string)

The SAML NameID format to use when performing user authentication.

Default: `"urn:oasis:names:tc:SAML:2.0:nameid-format:persistent"`

Additional restrictions:

* Regex pattern: `^urn:`

### `signRequests` (boolean)

Sign AuthnRequests and LogoutRequests sent to the Identity Provider using the Service Provider's private key (`serviceProviderPrivateKey`). It defaults to true if the `serviceProviderPrivateKey` and `serviceProviderCertificate` are set, and false otherwise.

### `insecureSkipAssertionSignatureValidation` (boolean)

Whether the Service Provider should (insecurely) accept assertions from the Identity Provider without a valid signature.

Default: `false`

<hr />



## `HTTPHeaderAuthProvider` (object)

Configures the HTTP header authentication provider (which authenticates users by consulting an HTTP request header set by an authentication proxy such as https://github.com/bitly/oauth2_proxy).

Properties of the `HTTPHeaderAuthProvider` object:

### `type` (string, required)

Constant value: `"http-header"`

### `usernameHeader` (string, required)

The name (case-insensitive) of an HTTP header whose value is taken to be the username of the client requesting the page. Set this value when using an HTTP proxy that authenticates requests, and you don't want the extra configurability of the other authentication methods.

Requires auth.provider=="http-header".

<hr />



## `AuthProviderCommon` (object)

Common properties for authentication providers.

Properties of the `AuthProviderCommon` object:

### `displayName` (string)

The name to use when displaying this authentication provider in the UI. Defaults to an auto-generated name with the type of authentication provider and other relevant identifiers (such as a hostname).

<hr />



## `SMTPServerConfig` (object)

The SMTP server used to send transactional emails (such as email verifications, reset-password emails, and notifications).

Properties of the `SMTPServerConfig` object:

### `host` (string, required)

The SMTP server host.

### `port` (integer, required)

The SMTP server port.

### `username` (string)

The username to use when communicating with the SMTP server.

### `password` (string)

The username to use when communicating with the SMTP server.

### `authentication` (string, enum, required)

The type of authentication to use for the SMTP server.

This property must be one of the following enum values:

- `none`
- `PLAIN`
- `CRAM-MD5`

### `domain` (string)

The HELO domain to provide to the SMTP server (if needed).

<hr />



## `IMAPServerConfig` (object)

Optional. The IMAP server used to retrieve emails (such as code discussion reply emails).

Properties of the `IMAPServerConfig` object:

### `host` (string, required)

The IMAP server host.

### `port` (integer, required)

The IMAP server port.

### `username` (string)

The username to use when communicating with the IMAP server.

### `password` (string)

The username to use when communicating with the IMAP server.

<hr />



## `SiteConfigSearchScope` (array)

Predefined search scopes

<hr />

