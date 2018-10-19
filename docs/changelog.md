---
layout: markdown
title: Sourcegraph Changelog
permalink: changelog
---

# Changelog

All notable changes to Sourcegraph Server and Data Center are documented in this file.

## 2.12.0

### Changed

- Reduced the size of in-memory data structures used for storing search results. This should reduce the backend memory usage of large result sets.
- Code intelligence is now provided by [Sourcegraph extensions](https://github.com/sourcegraph/sourcegraph-extension-api). The extension for each language in the site configuration `langservers` property is automatically enabled.
- Support for multiple authentication providers is now enabled by default. To disable it, set the `experimentalFeatures.multipleAuthProviders` site config option to `"disabled"`. This only applies to Sourcegraph Enterprise.
- When using the `http-header` auth provider, valid auth cookies (from other auth providers that are currently configured or were previously configured) are now respected and will be used for authentication. These auth cookies also take precedence over the `http-header` auth. Previously, the `http-header` auth took precedence.
- Bitbucket Server username configuration is now used to clone repositories if the Bitbucket Server API does not set a username.
- Code discussions: On Sourcegraph.com / when `discussions.abuseProtection` is enabled in the site config, rate limits to thread creation, comment creation, and @mentions are now applied.

### Added

- Search syntax for filtering archived repositories. `archived:no` will exclude archived repositories from search results, `archived:only` will search over archived repositories only. This applies for GitHub and GitLab repositories.
- A Bitbucket Server option to exclude personal repositories in the event that you decide to give an admin-level Bitbucket access token to Sourcegraph and do not want to create a bot account. See https://about.sourcegraph.com/docs/config/repositories/#excluding-personal-repositories for more information.
- Site admins can now see when users of their Sourcegraph instance last used it via a code host integration (e.g. Sourcegraph browser extensions). Visit the site admin Analytics page (e.g. https://sourcegraph.example.com/site-admin/analytics) to view this information.
- A new site config option `extensions.allowRemoteExtensions` lets you explicitly specify the remote extensions (from, e.g., Sourcegraph.com) that are allowed.
- Pings now include a total count of user accounts.
- A new site config option `git.cloneURLToRepositoryName` specifies manual mapping from Git clone URLs to Sourcegraph repository names. This is useful, for example, for Git submodules that have local clone URLs.

### Fixed

- Files with the gitattribute `export-ignore` are no longer excluded for language analysis and search.
- "Discard changes?" confirmation popup doesn't pop up every single time you try to navigate to a new page after editting something in the site settings page anymore.
- Fixed an issue where Git repository URLs would sometimes be logged, potentially containing e.g. basic auth tokens.
- Fixed date formatting on the site admin Analytics page.
- File names of binary and large files are included in search results.
- Slack notifications for saved searches have been fixed.

### Removed

- The deprecated environment variables `SRC_SESSION_STORE_REDIS` and `REDIS_MASTER_ENDPOINT` are no longer used to configure alternative redis endpoints. For more information view the [External Database](https://about.sourcegraph.com/docs/config/external-database) documentation.

## 2.11.0

### Added

- Support for ACME "tls-alpn-01" challenges to obtain LetsEncrypt certificates. Previously Sourcegraph only supported ACME "http-01" challenges which required port 80 to be accessible.
- gitserver periodically removes stale lock files that git can leave behind.
- Commits with empty trees no longer return 404.
- Clients (browser/editor extensions) can now query configuration details from the `ClientConfiguration` GraphQL API.
- The config field `auth.accessTokens.allow` allows or restricts use of access tokens. It can be set to one of three values: "all-users-create" (the default), "none" (all access tokens are disabled), and "site-admin-create" (access tokens are enabled, but only site admins can create new access tokens). The field `auth.disableAccessTokens` is now deprecated in favor of this new field.
- A webhook endpoint now exists to trigger repository updates. For example, `curl -XPOST -H 'Authorization: token $ACCESS_TOKEN' $SOURCEGRAPH_ORIGIN/.api/repos/$REPO_URI/-/refresh`.
- Git submodules entries in the file tree now link to the submodule repository.

### Fixed

- An issue / edge case where the Code Intelligence management admin page would incorrectly show language servers as `Running` when they had been removed from Docker.
- Log level is respected in lsp-proxy logs.
- Fixed an error where text searches could be routed to a faulty search worker.
- Gitolite integration should correctly detect names which Gitolite would consider to be patterns, and not treat them as repositories.
- repo-updater backs off fetches on a repo that's failing to fetch.
- Attempts to add a repo with an empty string for the name are checked for and ignored.
- Fixed an issue where non-site-admin authenticated users could modify global settings (not site configuration), other organizations' settings, and other users' settings.
- Search results are rendered more eagerly, resulting in fewer blank file previews
- An issue where automatic code intelligence would fail to connect to the underlying `lsp` network, leading to `dial tcp: lookup lang on 0.0.0.0:53: no such host` errors.
- More useful error messages from lsp-proxy when a language server can't get a requested revision of a repository.
- Creation of a new user with the same name as an existing organization (and vice versa) is prevented.

## 2.10.4

### Fixed

- Fixed an issue that caused the frontend to return a HTTP 500 and log an error message like:
  ```
  lvl=eror msg="ui HTTP handler error response" method=GET status_code=500 error="Post http://127.0.0.1:3182/repo-lookup: context canceled"
  ```

## 2.10.3

### Fixed

- The SAML AuthnRequest signature when using HTTP redirect binding is now computed using a URL query string with correct ordering of parameters. Previously, the ordering was incorrect and caused errors when the IdP was configured to check the signature in the AuthnRequest.

## 2.10.2

### Fixed

- SAML IdP-initiated login previously failed with the IdP set a RelayState value. This now works.

## 2.10.1

### Changed

- Most `experimentalFeatures` in the site configuration now respond to configuration changes live, without requiring a server restart. As usual, you will be prompted for a restart after saving your configuration changes if one is required.
- Gravatar image avatars are no longer displayed for committers.

## 2.10.0

### Changed

- In the file tree, if a directory that contains only a single directory is expanded, its child directory is now expanded automatically.

### Fixed

- Fixed an issue where Sourcegraph Server would not start code intelligence containers properly when the Sourcegraph Server container was shut down non-gracefully.
- Fixed an issue where the file tree would return an error when navigating between repositories.

## 2.9.4

### Changed

- Repo-updater has a new and improved scheduler for periodic repo fetches. If you have problems with it, you can revert to the old behavior by adding `"experimentalFeatures": { "updateScheduler": "disabled" }` to your `config.json`.
- A once-off migration will run changing the layout of cloned repos on disk. This should only affect installations created January 2018 or before. There should be no user visible changes.
- Experimental feature flag "updateScheduler" enables a smarter and less spammy algorithm for automatic repository updates.
- It is no longer possible to disable code intelligence by unsetting the LSP_PROXY environment variable. Instead, code intelligence can be disabled per language on the site admin page (e.g. https://sourcegraph.example.com/site-admin/code-intelligence).
- Bitbucket API requests made by Sourcegraph are now under a self-enforced API rate limit (since Bitbucket Server does not have a concept of rate limiting yet). This will reduce any chance of Sourcegraph slowing down or causing trouble for Bitbucket Server instances connected to it. The limits are: 7,200 total requests/hr, with a bucket size / maximum burst size of 500 requests.
- Global, org, and user settings are now validated against the schema, so invalid settings will be shown in the settings editor with a red squiggly line.
- The `http-header` auth provider now supports being used with other auth providers (still only when `experimentalFeatures.multipleAuthProviders` is `true`).
- Periodic fetches of Gitolite-hosted repositories are now handled internally by repo-updater.

### Added

- The `log.sentry.dsn` field in the site config makes Sourcegraph log application errors to a Sentry instance.
- Two new repository page hotkeys were added: <kbd>r</kbd> to open the repositories menu and <kbd>v</kbd> to open the revision selector.
- Repositories are periodically (~45 days) recloned from the codehost. The codehost can be relied on to give an efficient packing. This is an alternative to running a memory and CPU intensive git gc and git prune.
- The `auth.sessionExpiry` field sets the session expiration age in seconds (defaults to 90 days).

### Fixed

- Fixed a bug in the API console that caused it to display as a blank page in some cases.
- Fixed cases where GitHub rate limit wasn't being respected.
- Fixed a bug where scrolling in references, history, etc. file panels was not possible in Firefox.
- Fixed cases where gitserver directory structure migration could fail/crash.
- Fixed "Generate access token" link on user settings page. Previously, this link would 404.
- Fixed a bug where the search query was not updated in the search bar when searching from the homepage.
- Fixed a possible crash in github-proxy.
- Fixed a bug where file matching for diff search was case sensitive by default.

### Removed

- `SOURCEGRAPH_CONFIG` environment variable has been removed. Site configuration is always read from and written to disk. You can configure the location by providing `SOURCEGRAPH_CONFIG_FILE`. The default path is `/etc/sourcegraph/config.json`.

## 2.9.3

### Changed

- The search results page will merge duplicated lines of context.
- The following deprecated site configuration properties have been removed: `github[].preemptivelyClone`, `gitOriginMap`, `phabricatorURL`, `githubPersonalAccessToken`, `githubEnterpriseURL`, `githubEnterpriseCert`, and `githubEnterpriseAccessToken`.
- The `settings` field in the site config file is deprecated and will not be supported in a future release. Site admins should move those settings (if any) to global settings (in the site admin UI). Global settings are preferred to site config file settings because the former can be applied without needing to restart/redeploy the Sourcegraph server or cluster.

### Fixed

- Fixed a goroutine leak which occurs when search requests are canceled.
- Console output should have fewer spurious line breaks.
- Fixed an issue where it was not possible to override the `StrictHostKeyChecking` SSH option in the SSH configuration.
- Cross-repository code intelligence indexing for non-Go languages is now working again (originally broken in 2.9.2).

## 2.9.1

### Fixed

- Fixed an issue where saving an organization's configuration would hang indefinitely.

## 2.9.0

### Changed

- Hover tooltips were rewritten to fix a couple of issues and are now much more robust, received a new design and show more information.
- The `max:` search flag was renamed to `count:` in 2.8.8, but for backward compatibility `max:` has been added back as a deprecated alias for `count:`.
- Drastically improved the performance / load time of the Code Intelligence site admin page.

### Added

- The site admin code intelligence page now displays an error or reason whenever language servers are unable to be managed from the UI or Sourcegraph API.
- The ability to directly specify the root import path of a repository via `.sourcegraph/config.json` in the repo root, instead of relying on the heuristics of the Go language server to detect it.

### Fixed

- Configuring Bitbucket Server now correctly suppresses the the toast message "Configure repositories and code hosts to add to Sourcegraph Server."
- A bug where canonical import path comments would not be detected by the Go language server's heuristics under `cmd/` folders.
- Fixed an issue where a repository would only be refreshed on demand by certain user actions (such as a page reload) and would otherwise not be updated when expected.
- If a code host returned a repository-not-found or unauthorized error (to `repo-updater`) for a repository that previously was known to Sourcegraph, then in some cases a misleading "Empty repository" screen was shown. Now the repository is displayed as though it still existed, using cached data; site admins must explicitly delete repositories on Sourcegraph after they have been deleted on the code host.
- Improved handling of GitHub API rate limit exhaustion cases. Cached repository metadata and Git data will be used to provide full functionality during this time, and log messages are more informative. Previously, in some cases, repositories would become inaccessible.
- Fixed an issue where indexed search would sometimes not indicate that there were more results to show for a given file.
- Fixed an issue where the code intelligence admin page would never finish loading language servers.

## 2.9.0-pre0

### Changed

- Search scopes have been consolidated into the "Filters" bar on the search results page.
- Usernames and organization names of up to 255 characters are allowed. Previously the max length was 38.

### Fixed

- The target commit ID of a Git tag object (i.e., not lightweight Git tag refs) is now dereferenced correctly. Previously the tag object's OID was given.
- Fixed an issue where AWS Code Commit would hit the rate limit.
- Fixed an issue where dismissing the search suggestions dropdown did not unfocus previously highlighted suggestions.
- Fixed an issue where search suggestions would appear twice.
- Indexed searches now return partial results if they timeout.
- Git repositories with files whose paths contain `.git` path components are now usable (via indexed and non-indexed search and code intelligence). These corrupt repositories are rare and generally were created by converting some other VCS repository to Git (the Git CLI will forbid creation of such paths).
- Various diff search performance improvements and bug fixes.
- New Phabricator extension versions would used cached stylesheets instead of the upgraded version.
- Fixed an issue where hovers would show an error for Rust and C/C++ files.

### Added

- Sourcegraph Server now emits the most recent log message when redis terminates to make it easier to debug why redis stopped.
- Organization invites (which allow users to invite other users to join organizations) are significantly improved. A new accept-invitation page was added.
- The new help popover allows users to easily file issues in the Sourcegraph public issue tracker and view documentation.
- An issue where Java files would be highlighted incorrectly if they contained JavaDoc blocks with an uneven number of opening/closing `*`s.

### Removed

- The `secretKey` site configuration value is no longer needed. It was only used for generating tokens for inviting a user to an organization. The invitation is now stored in the database associated with the recipient, so a secret token is no longer needed.
- The `experimentalFeatures.searchTimeoutParameter` site configuration value has been removed. It defaulted to `enabled` in 2.8 and it is no longer possible to disable.

### Added

- Syntax highlighting for:
  - TOML files (including Go `Gopkg.lock` and Rust `Cargo.lock` files).
  - Rust files.
  - GraphQL files.
  - Protobuf files.
  - `.editorconfig` files.

## 2.8.9

### Changed

- The "invite user" site admin page was moved to a sub-page of the users page (`/site-admin/users/new`).
- It is now possible for a site admin to create a new user without providing an email address.

### Fixed

- Checks for whether a repo is cloned will no longer exhaust open file pools over time.

### Added

- The Phabricator extension shows code intelligence status and supports enabling / disabling code intelligence for files.

## 2.8.8

### Changed

- Queries for repositories (in the explore, site admin repositories, and repository header dropdown) are matched on case-insensitive substrings, not using fuzzy matching logic.
- HTTP Authorization headers with an unrecognized scheme are ignored; they no longer cause the HTTP request to be rejected with HTTP 401 Unauthorized and an "Invalid Authorization header." error.
- Renamed the `max` search flag to `count`. Searches that specify `count:` will fetch at least that number of results, or the full result set.
- Bumped `lsp-proxy`'s `initialize` timeout to 3 minutes for every language.
- Search results are now sorted by repository and file name.
- More easily accessible "Show more" button at the top of the search results page.
- Results from user satisfaction surveys are now always hosted locally and visible to admins. The `"experimentalFeatures": { "hostSurveysLocally" }` config option has been deprecated.
- If the OpenID Connect authentication provider reports that a user's email address is not verified, the authentication attempt will fail.

### Fixed

- Fixed an issue where the search results page would not update its title.
- The session cookie name is now `sgs` (not `sg-session`) so that Sourcegraph 2.7 and Sourcegraph 2.8 can be run side-by-side temporarily during a rolling update without clearing each other's session cookies.
- Fixed the default hostnames of the C# and R language servers
- Fixed an issue where deleting an organization prevented the creation of organizations with the name of the deleted organization.
- Non-UTF8 encoded files (e.g. ISO-8859-1/Latin1, UTF16, etc) are now displayed as text properly rather than being detected as binary files.
- Improved error message when lsp-proxy's initalize timeout occurs
- Fixed compatibility issues and added [instructions for using Microsoft ADFS 2.1 and 3.0 for SAML authentication](https://about.sourcegraph.com/docs/config/authentication/saml-microsoft-adfs).
- Fixed an issue where external accounts associated with deleted user accounts would still be returned by the GraphQL API. This caused the site admin external accounts page to fail to render in some cases.
- Significantly reduced the number of code host requests for non github.com or gitlab.com repositories.

### Added

- The repository revisions popover now shows the target commit's last-committed/authored date for branches and tags.
- Setting the env var `INSECURE_SAML_LOG_TRACES=1` on the server (or the `sourcegraph-frontend` pod in Data Center) causes all SAML requests and responses to be logged, which helps with debugging SAML.
- Site admins can now view user satisfaction surveys grouped by user, in addition to chronological order, and aggregate summary values (including the average score and the net promoter score over the last 30 days) are now displayed.
- The site admin overview page displays the site ID, the primary admin email, and premium feature usage information.
- Added Haskell as an experimental language server on the code intelligence admin page.

## 2.8.0

### Changed

- `gitMaxConcurrentClones` now also limits the concurrency of updates to repos in addition to the initial clone.
- In the GraphQL API, `site.users` has been renamed to `users`, `site.orgs` has been renamed to `organizations`, and `site.repositories` has been renamed to `repositories`.
- An authentication provider must be set in site configuration (see [authentication provider documentation](https://about.sourcegraph.com/docs/config/authentication). Previously the server defaulted to builtin auth if none was set.
- If a process dies inside the Sourcegraph container the whole container will shut down. We suggest operators configure a [Docker Restart Policy](https://docs.docker.com/config/containers/start-containers-automatically/#restart-policy-details) or a [Kubernetes Restart Policy](https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#restart-policy). Previously the container would operate in a degraded mode if a process died.
- Changes to the `auth.public` site config are applied immediately in Sourcegraph Server (no restart needed).
- The new search timeout behavior is now enabled by default. Set `"experimentalFeatures": {"searchTimeoutParameter": "disabled"}` in site config to disable it.
- Search includes files up to 1MB (previous limit was 512KB for unindexed search and 128KB for indexed search).
- Usernames and email addresses reported by OpenID Connect and SAML auth providers are now trusted, and users will sign into existing Sourcegraph accounts that match on the auth provider's reported username or email.
- The repository sidebar file tree is much, much faster on massive repositories (200,000+ files)
- The SAML authentication provider was significantly improved. Users who were signed in using SAML previously will need to reauthenticate via SAML next time they visit Sourcegraph.
- The SAML `serviceProviderCertificate` and `serviceProviderPrivateKey` site config properties are now optional.

### Fixed

- Fixed an issue where Index Search status page failed to render.
- User data on the site admin Analytics page is now paginated, filterable by a user's recent activity, and searchable.
- The link to the root of a repository in the repository header now preserves the revision you're currently viewing.
- When using the `http-header` auth provider, signin/signup/signout links are now hidden.
- Repository paths beginning with `go/` are no longer reservered by Sourcegraph.
- Interpret `X-Forwarded-Proto` HTTP header when `httpToHttpsRedirect` is set to `load-balanced`.
- Deleting a user account no longer prevents the creation of a new user account with the same username and/or association with authentication provider account (SAML/OpenID/etc.)
- It is now possible for a user to verify an email address that was previously associated with now-deleted user account.
- Diff searches over empty repositories no longer fail in Sourcegraph Server (this was not an issue in Sourcegraph Data Center).
- Stray `tmp_pack_*` files from interrupted fetches should now go away.
- When multiple `repo:` tokens match the same repo, process @revspec requirements from all of them, not just the first one in the search.

### Removed

- The `ssoUserHeader` site config property (deprecated since January 2018) has been removed. The functionality was moved to the `http-header` authentication provider.
- The experiment flag `showMissingReposEnabled`, which defaulted to enabled, has been removed so it is no longer possible to disable this feature.
- Event-level telemetry has been completely removed from self-hosted Sourcegraph instances. As a result, the `disableTelemetry` site configuration option has been deprecated. The new site-admin Pings page clarifies the only high-level telemetry being sent to Sourcegraph.com.
- The deprecated `adminUsernames` site config property (deprecated since January 2018) has been removed because it is no longer necessary. Site admins can designate other users as site admins in the site admin area, and the first user to sign into a new instance always becomes a site admin (even when using an external authentication provider).

### Added

- The new repository contributors page (linked from the repository homepage) displays the top Git commit authors in a repository, with filtering options.
- Custom language servers in the site config may now specify a `metadata` property containing things like homepage/docs/issues URLs for the language server project, as well as whether or not the language server should be considered experimental (not ready for prime-time). This `metadata` will be displayed in the UI to better communicate the status of a language server project.
- Access tokens now have scopes (which define the set of operations they permit). All access tokens still provide full control of all resources associated with the user account (the `user:all` scope, which is now explicitly displayed).
- The new access token scope `site-admin:sudo` allows the holder to perform any action as any other user. Only site admins may create this token.
- Links to Sourcegraph's changelog have been added to the site admin Updates page and update alert.
- If the site configuration is invalid or uses deprecated properties, a global alert will be shown to all site admins.
- There is now a code intelligence status indicator when viewing files. It contains information about the capabailities of the language server that is providing code intelligence for the file.
- Java code intelligence can now be enabled for repositories that aren't automatically supported using a
  `javaconfig.json` file. For Gradle plugins, this file can be generated using
  the [Javaconfig Gradle plugin](https://about.sourcegraph.com/docs/code-intelligence/java#build-configuration).
- The new `auth.providers` site config is an array of authentication provider objects. Currently only 1 auth provider is supported. The singular `auth.provider` is deprecated.
- Users authenticated with OpenID Connect are now able to sign out of Sourcegraph (if the provider supports token revocation or the end-session endpoint).
- Users can now specify the number of days, weeks, and months of site activity to query through the GraphQL API.
- Added 14 new experimental language servers on the code intelligence admin page.
- Added `httpStrictTransportSecurity` site configuration option to customize the Strict-Transport-Security HTTP header. It defaults to `max-age=31536000` (one year).
- Added `nameIDFormat` in the `saml` auth provider to set the SAML NameID format. The default changed from transient to persistent.
- Experimental env var expansion in site config JSON: set `SOURCEGRAPH_EXPAND_CONFIG_VARS=1` to replace `${var}` or `$var` (based on environment variables) in any string value in site config JSON (except for JSON object property names).
- The new (optional) SAML `serviceProviderIssuer` site config property (in an `auth.providers` array entry with `{"type":"saml", ...}`) allows customizing the SAML Service Provider issuer name.
- The site admin area now has an "Auth" section that shows the enabled authentication provider(s) and users' external accounts.

## 2.7.6

### Fixed

- If a user's account is deleted, session cookies for that user are no longer considered valid.

## 2.7.5

### Changed

- In Sourcegraph Data Center, RBAC is now used by default. Most Kubernetes clusters require it. See the Data Center installation instructions for more information (including disabling if needed).
- Increased git ssh connection timeout to 30s from 7s.
- Phabricator integration no longer requires staging areas though [it is still suggested](https://about.sourcegraph.com/docs/features/phabricator-extension#staging-areas).

### Fixed

- Fixed an issue where language servers that were not enabled would display the "Restart" button in the Code Intelligence management panel.
- Fixed an issue where the "Update" button in the Code Intelligence management panel would be displayed inconsistently.
- Fixed an issue where toggling a dynamic search scope would not also remove `@rev` (if specified)
- Fixed an issue where where modes that can only be determined by the full filename (not just the file extension) of a path weren't supported (Dockerfiles are the first example of this).
- Fixed an issue where the GraphiQL console failed when variables are specified.
- In Sourcegraph Data Center, Indexed Search no longer maintains its own git clones. This significantly reduces disk size requirements for the indexed-search pod.
- Fixed an issue where language server Docker containers would not be automatically restarted if they crashed (Sourcegraph Server only).
- Fixed an issue where if the first user on a site authenticated via SSO, the site would remain stuck in uninitialized mode.

### Added

- More detailed progress information is displayed on pages that are waiting for repositories to clone.
- Admins can now see charts with daily, weekly, and monthly unique user counts by visiting the site-admin Analytics page.
- Admins can now host and see results from Sourcegraph user satisfaction surveys locally by setting the `"experimentalFeatures": { "hostSurveysLocally": "enabled"}` site config option. This feature will be enabled for all instances once stable.
- Access tokens are now supported for all authentication providers (including OpenID Connect and SAML, which were previously not supported).
- The new `motd` setting (in global, organization, and user settings) displays specified messages at the top of all pages.
- Site admins may now view all access tokens site-wide (for all users) and revoke tokens from the new access tokens page in the site admin area.

## 2.7.0

### Changed

- Missing repositories no longer appear as search results. Instead, a count of repositories that were not found is displayed above the search results. Hovering over the count will reveal the names of the missing repositories.
- "Show more" on the search results page will now reveal results that have already been fetched (if such results exist) without needing to do a new query.
- The bottom panel (on a file) now shows more tabs, including docstrings, multiple definitions, references (as before), external references grouped by repository, implementations (if supported by the language server), and file history.
- The repository sidebar file tree is much faster on massive repositories (200,000+ files)

### Fixed

- In Sourcegraph Data Center, searches no longer block if the index is unavailable (e.g. after the index pod restarts). Instead, it respects the normal search timeout and reports the situation to the user if the index is not yet available.
- Repository results are no longer returned for filters that are not supported (e.g. if `file:` is part of the search query)
- Fixed an issue where file tree elements may be scrolled out of view on page load.
- Fixed an issue that caused "Could not ensure repository updated" log messages when trying to update a large number of repositories from gitolite.
- When using an HTTP authentication proxy (`"auth.provider": "http-header"`), usernames are now properly normalized (special characters including `.` replaced with `-`). This fixes an issue preventing users from signing in if their username contained these special characters.
- Fixed an issue where the site-admin Updates page would incorrectly report that update checking was turned off when `telemetryDisabled` was set, even as it continued to report new updates.
- `repo:` filters that match multiple repositories and contain a revision specifier now correctly return partial results even if some of the matching repositories don't have a matching revision.
- Removed hardcoded list of supported languages for code intelligence. Any language can work now and support is determined from the server response.
- Fixed an issue where modifying `config.json` on disk would not correctly mark the server as needing a restart.
- Fixed an issue where certain diff searches (with very sparse matches in a repository's history) would incorrectly report no results found.
- Fixed an issue where the `langservers` field in the site-configuration didn't require both the `language` and `address` field to be specified for each entry

### Added

- Users (and site admins) may now create and manage access tokens to authenticate API clients. The site config `auth.disableAccessTokens` disables this new feature. Access tokens are currently only supported when using the `builtin` and `http-header` authentication providers (not OpenID Connect or SAML).
- User and site admin management capabilities for user email addresses are improved.
- The user and organization management UI has been greatly improved. Site admins may now administer all organizations (even those they aren't a member of) and may edit profile info and configuration for all users.
- If SSO is enabled (via OpenID Connect or SAML) and the SSO system provides user avatar images and/or display names, those are now used by Sourcegraph.
- Enable new search timeout behavior by setting `"experimentalFeatures": { "searchTimeoutParameter": "enabled"}` in your site config.
  - Adds a new `timeout:` parameter to customize the timeout for searches. It defaults to 10s and may not be set higher than 1m.
  - The value of the `timeout:` parameter is a string that can be parsed by [time.Duration](https://golang.org/pkg/time/#ParseDuration) (e.g. "100ms", "2s").
  - When `timeout:` is not provided, search optimizes for retuning results as soon as possible and will include slower kinds of results (e.g. symbols) only if they are found quickly.
  - When `timeout:` is provided, all result kinds are given the full timeout to complete.
- A new user settings tokens page was added that allows users to obtain a token that they can use to authenticate to the Sourcegraph API.
- Code intelligence indexes are now built for all repositories in the background, regardless of whether or not they are visited directly by a user.
- Language servers are now automatically enabled when visiting a repository. For example, visiting a Go repository will now automatically download and run the relevant Docker container for Go code intelligence.
  - This change only affects Sourcegraph Server users, not Data Center users.
  - You will need to use the new `docker run` command at https://about.sourcegraph.com/docs/server/ in order for this feature to be enabled. Otherwise, you will receive errors in the log about `/var/run/docker.sock` and things will work just as they did before. See https://about.sourcegraph.com/docs/code-intelligence/install for more information.
- The site admin Analytics page will now display the number of "Code Intelligence" actions each user has made, including hovers, jump to definitions, and find references, on the Sourcegraph webapp or in a code host integration or extension.
- An experimental cross repository jump to definition which consults the OSS index on Sourcegraph.com. This is disabled by default; use `"experimentalFeatures": { "jumpToDefOSSIndex": "enabled" }` in your site configuration to enable it.
- Users can now view Git branches, tags, and commits, and compare Git branches and revisions on Sourcegraph. (The code host icon in the header takes you to the commit on the code host.)
- A new admin panel allows you to view and manage language servers. For Server users, it allows you to enable/disable/update/restart language servers at the click of a button. For Data Center users, it shows the current status of language servers.
- Users can now tweet their feedback about Sourcegraph when clicking on the feedback smiley located in the navbar and filling out a Twitter feedback form.
- A new button in the repository header toggles on/off the Git history panel for the current file.

## 2.6.8

### Bug fixes

- Searches of `type:repo` now work correctly with "Show more" and the `max` parameter.
- Fixes an issue where the server would crash if the DB was not available upon startup.

## 2.6.7

### Added

- The duration that the frontend waits for the PostgreSQL database to become available is now configurable with the `DB_STARTUP_TIMEOUT` env var (the value is any valid Go duration string).
- Dynamic search filters now suggest exclusions of Go test files, vendored files and node_modules files.

## 2.6.6

### Added

- Authentication to Bitbucket Server using username-password credentials is now supported (in the `bitbucketServer` site config `username`/`password` options), for servers running Bitbucket Server version 2.4 and older (which don't support personal access tokens).

## 2.6.5

### Added

- The externally accessible URL path `/healthz` performs a basic application health check, returning HTTP 200 on success and HTTP 500 on failure.

### Behavior changes

- Read-only forks on GitHub are no longer synced by default. If you want to add a readonly fork, navigate directly to the repository page on Sourcegraph to add it (e.g. https://sourcegraph.mycompany.internal/github.com/owner/repo). This prevents your repositories list from being cluttered with a large number of private forks of a private repository that you have access to. One notable example is https://github.com/EpicGames/UnrealEngine.
- SAML cookies now expire after 90 days. The previous behavior was every 1 hour, which was unintentionally low.

## 2.6.4

### Added

- Improve search timeout error messages
- Performance improvements for searching regular expressions that do not start with a literal.

## 2.6.3

### Bug fixes

- Symbol results are now only returned for searches that contain `type:symbol`

## 2.6.2

### Added

- More detailed logging to help diagnose errors with third-party authentication providers.
- Anchors (such as `#my-section`) in rendered Markdown files are now supported.
- Instrumentation section for admins. For each service we expose pprof, prometheus metrics and traces.

### Bug fixes

- Applies a 1s timeout to symbol search if invoked without specifying `type:` to not block plain text results. No change of behaviour if `type:symbol` is given explicitly.
- Only show line wrap toggle for code-view-rendered files.

## 2.6.1

### Bug fixes

- Fixes a bug where typing in the search query field would modify the expanded state of file search results.
- Fixes a bug where new logins via OpenID Connect would fail with the error `SSO error: ID Token verification failed`.

## 2.6.0

### Added

- Support for [Bitbucket Server](https://www.atlassian.com/software/bitbucket/server) as a codehost. Configure via the `bitbucketServer` site config field.
- Prometheus gauges for git clone queue depth (`src_gitserver_clone_queue`) and git ls-remote queue depth (`src_gitserver_lsremote_queue`).
- Slack notifications for saved searches may now be added for individual users (not just organizations).
- The new search filter `lang:` filters results by programming language (example: `foo lang:go` or `foo -lang:clojure`).
- Dynamic filters: filters generated from your search results to help refine your results.
- Search queries that consist only of `file:` now show files whose path matches the filters (instead of no results).
- Sourcegraph now automatically detects basic `$GOPATH` configurations found in `.envrc` files in the root of repositories.
- You can now configure the effective `$GOPATH`s of a repository by adding a `.sourcegraph/config.json` file to your repository with the contents `{"go": {"GOPATH": ["mygopath"]}}`.
- A new `"blacklistGoGet": ["mydomain.org,myseconddomain.com"]` offers users a quick escape hatch in the event that Sourcegraph is making unwanted `go get` or `git clone` requests to their website due to incorrectly-configured monorepos. Most users will never use this option.
- Search suggestions and results now include symbol results. The new filter `type:symbol` causes only symbol results to be shown.
  Additionally, symbols for a repository can be browsed in the new symbols sidebar.
- You can now expand and collapse all items on a search results page or selectively expand and collapse individual items.

### Configuration changes

- Reduced the `gitMaxConcurrentClones` site config option's default value from 100 to 5, to help prevent too many concurrent clones from causing issues on code hosts.
- Changes to some site configuration options are now automatically detected and no longer require a server restart. After hitting Save in the UI, you will be informed if a server restart is required, per usual.
- Saved search notifications are now only sent to the owner of a saved search (all of an organization's members for an organization-level saved search, or a single user for a user-level saved search). The `notifyUsers` and `notifyOrganizations` properties underneath `search.savedQueries` have been removed.
- Slack webhook URLs are now defined in user/organization JSON settings, not on the organization profile page. Previously defined organization Slack webhook URLs are automatically migrated to the organization's JSON settings.
- The "unlimited" value for `maxReposToSearch` is now `-1` instead of `0`, and `0` now means to use the default.
- `auth.provider` must be set (`builtin`, `openidconnect`, `saml`, `http-header`, etc.) to configure an authentication provider. Previously you could just set the detailed configuration property (`"auth.openIDConnect": {...}`, etc.) and it would implicitly enable that authentication provider.
- The `autoRepoAdd` site configuration property was removed. Site admins can add repositories via site configuration.

### Bug fixes

- Only cross reference index enabled repositories.
- Fixed an issue where search would return results with empty file contents for matches in submodules with indexing enabled. Searching over submodules is not supported yet, so these (empty) results have been removed.
- Fixed an issue where match highlighting would be incorrect on lines that contained multibyte characters.
- Fixed an issue where search suggestions would always link to master (and 404) even if the file only existed on a branch. Now suggestions always link to the revision that is being searched over.
- Fixed an issue where all file and repository links on the search results page (for all search results types) would always link to master branch, even if the results only existed in another branch. Now search results links always link to the revision that is being searched over.
- The first user to sign up for a (not-yet-initialized) server is made the site admin, even if they signed up using SSO. Previously if the first user signed up using SSO, they would not be a site admin and no site admin could be created.
- Fixed an issue where our code intelligence archive cache (in `lsp-proxy`) would not evict items from the disk. This would lead to disks running out of free space.

## 2.5.16, 2.5.17

- Version bump to keep Data Center and Server versions in sync.

## 2.5.15

### Bug fixes

- Fixed issue where Sourcegraph Data Center would incorrectly show "An update is available".
- Fixed Phabricator links to repositories
- Searches over a single repository are now less likely to immediately time out the first time they are searched.
- Fixed a bug where `auth.provider == "http-header"` would incorrectly require builtin authentication / block site access when `auth.public == "false"`.

### Phabricator Integration Changes

We now display a "View on Phabricator" link rather than a "View on other code host" link if you are using Phabricator and hosting on Github or another code host with a UI. Commit links also will point to Phabricator.

### Improvements to SAML authentication

You may now optionally provide the SAML Identity Provider metadata XML file contents directly, with the `auth.saml` `identityProviderMetadata` site configuration property. (Previously, you needed to specify the URL where that XML file was available; that is still possible and is more common.) The new option is useful for organizations whose SAML metadata is not web-accessible or while testing SAML metadata configuration changes.

## 2.5.13

### Improvements to builtin authentication

When using `auth.provider == "builtin"`, two new important changes mean that a Sourcegraph server will be locked down and only accessible to users who are invited by an admin user (previously, we advised users to place their own auth proxy in front of Sourcegraph servers).

1.  When `auth.provider == "builtin"` Sourcegraph will now by default require an admin to invite users instead of allowing anyone who can visit the site to sign up. Set `auth.allowSignup == true` to retain the old behavior of allowing anyone who can access the site to signup.
2.  When `auth.provider == "builtin"`, Sourcegraph will now respects a new `auth.public` site configuration option (default value: `false`). When `auth.public == false`, Sourcegraph will not allow anyone to access the site unless they have an account and are signed in.

## 2.4.3

### Added

- Code Intelligence support
- Custom links to code hosts with the `links:` config options in `repos.list`

### Changed

- Search by file path enabled by default

## 2.4.2

### Added

- Repository settings mirror/cloning diagnostics page

### Changed

- Repositories added from GitHub are no longer enabled by default. The site admin UI for enabling/disabling repositories is improved.

## 2.4.0

### Added

- Search files by name by including `type:path` in a search query
- Global alerts for configuration-needed and cloning-in-progress
- Better list interfaces for repositories, users, organizations, and threads
- Users can change their own password in settings
- Repository groups can now be specified in settings by site admins, organizations, and users. Then `repogroup:foo` in a search query will search over only those repositories specified for the `foo` repository group.

### Changed

- Server log messages are much quieter by default

## 2.3.11

### Added

- Added site admin updates page and update checking
- Added site admin telemetry page

### Changed

- Enhanced site admin panel
- Changed repo- and SSO-related site config property names to be consistent, updated documentation

## 2.3.10

### Added

- Online site configuration editing and reloading

### Changed

- Site admins are now configured in the site admin area instead of in the `adminUsernames` config key or `ADMIN_USERNAMES` env var. Users specified in those deprecated configs will be designated as site admins in the database upon server startup until those configs are removed in a future release.

## 2.3.9

### Fixed

- An issue that prevented creation and deletion of saved queries

## 2.3.8

### Added

- Built-in authentication: you can now sign up without an SSO provider.
- Faster default branch code search via indexing.

### Fixed

- Many performance improvements to search.
- Much log spam has been eliminated.

### Changed

- We optionally read `SOURCEGRAPH_CONFIG` from `$DATA_DIR/config.json`.
- SSH key required to clone repositories from GitHub Enterprise when using a self-signed certificate.

## 0.3 - 13 December 2017

The last version without a CHANGELOG.
