---
layout: markdown
title: Add repositories
permalink: docs/config/repositories
---

There are several ways to add repositories to your Sourcegraph:

1.  [Add repositories from GitHub.com or GitHub Enterprise](#github-configuration)
1.  [Add repositories from GitLab.com, GitLab CE, or GitLab EE](#gitlab-configuration)
1.  [Add repositories from Bitbucket Server](#bitbucket-server-configuration)
1.  [Add repositories from AWS CodeCommit](#aws-codecommit-configuration)
1.  [Add repositories from any other code host](#sync-repositories-from-any-code-host)
1.  [Add repositories already cloned to disk](#add-repositories-already-cloned-to-disk)

<div class="alert alert-warning">

If you are running Docker for Mac, you may experience slower than expected cloning performance. [Learn more](/docs/troubleshooting#file-system-performance-on-docker-for-mac).

</div>

---

## GitHub configuration

Sourcegraph supports syncing repositories from GitHub.com and GitHub Enterprise (version 2.10 and newer).

To add repositories associated with a GitHub user:

1.  Go to the [site configuration editor](/docs/config).
2.  Press **Add GitHub.com repositories** or **Add GitHub Enterprise repositories**.
3.  Fill in the fields in the generated `github` configuration option.

By default, it adds all repositories that are affiliated with the user whose token you provide. To see other optional GitHub configuration settings, view [`github` site config documentation](/docs/config/site#code-classlanguage-textgithubconnection-object) or press Ctrl+Space in the site configuration editor.

If you don't want to use an access token from your personal GitHub user account, generate a token for a [machine user](https://developer.github.com/v3/guides/managing-deploy-keys/#machine-users) affiliated with the organizations whose repositories you wish to make available.

**GitHub.com rate limits**

You should always include a token in a configuration for a GitHub.com URL to avoid being denied service by GitHub's [unauthenticated rate limits](https://developer.github.com/v3/#rate-limiting). If you don't want to automatically synchronize repositories from the account associated with your personal access token, you can create a token without a [repo scope](https://developer.github.com/apps/building-oauth-apps/scopes-for-oauth-apps/#available-scopes) for the purposes of bypassing rate limit restrictions only.

---

## GitLab configuration

Sourcegraph supports syncing repositories from GitLab.com, GitLab CE (v10.0+), and GitLab EE (v10.0+). To add repositories associated with a GitLab user:

1.  Go to the [site configuration editor](/docs/config).
2.  Press **Add GitLab projects**.
3.  Fill in the fields in the generated `gitlab` configuration option.

By default, it adds every GitLab project where the token's user is a member. To see other optional GitLab configuration settings, view [all settings](/docs/config/site) or press Ctrl+Space or Cmd+Space in the site configuration editor.

---

## Bitbucket Server configuration

Sourcegraph supports automatically syncing repositories from [Bitbucket Server](https://www.atlassian.com/software/bitbucket/server). To add repositories associated with a Bitbucket Server user:

1.  Go to the [site configuration editor](/docs/config).
2.  Press **Add Bitbucket Server projects**.
3.  Fill in the fields in the generated `bitbucketServer` configuration option.

Note: Bitbucket Server versions older than v5.5 will require specifying a less secure username+password combination, as those versions of Bitbucket Server do not support [personal access tokens](https://confluence.atlassian.com/bitbucketserver/personal-access-tokens-939515499.html).

#### Excluding personal repositories

Sourcegraph will be able to view and clone the repositories that the account you provide has access to. For example, if you provide a personal access token or username/password of an administrator Bitbucket Server account, Sourcegraph will be able to view and clone all repositories -- even personal ones.

We recommend that you create a new Bitbucket user account specifically for Sourcegraph (e.g. a "Sourcegraph Bot" account) and only give that account access to the repositories you wish to be viewable on Sourcegraph.

(Sourcegraph 2.12+, coming ~Oct 1. 2018) If you don't wish to create a separate Bitbucket user account just for Sourcegraph, you can specify the `"excludePersonalRepositories": true` option in the site config in the `bitbucketServer` object. With this enabled, Sourcegraph will exclude any personal repositories from being imported -- even if it has access to them.

#### How cloning works

Sourcegraph by default clones repositories from your Bitbucket Server via HTTP(s), using the access token or account credentials you provide in the configuration. SSH cloning is not used by default and as such you do not need to configure SSH cloning.

#### Known bugs

When using [Bitbucket Server integration](/docs/features/bitbucket-server-extension/) with older Bitbucket Server versions, you must select your own Sourcegraph instance as the `primary` URL [as shown in this image](../../integrations/images/BitbucketURL.png), or else the extension will incorrectly link you to Sourcegraph.com for your Bitbucket repositories. We are actively working to resolve this.

---

## AWS CodeCommit configuration

Sourcegraph supports syncing repositories from [AWS CodeCommit](https://aws.amazon.com/codecommit/). To add repositories from AWS CodeCommit:

1.  Go to the [site configuration editor](/docs/config).
2.  Press **Add AWS CodeCommit repositories**.
3.  Fill in the fields in the generated `awsCodeCommit` configuration option.

To see other optional AWS CodeCommit configuration settings, view [`awsCodeCommit` site config documentation](/docs/config/site#code-classlanguage-textawscodecommitconnection-object) or press Ctrl+Space or Cmd+Space in the site configuration editor.

---

## Sync repositories from any code host

To add repositories from any code host, use the `repos.list` site configuration setting. (In the Sourcegraph UI, you can go to the site configuration page and click **Add other repository** to fill in the fields in the generated `repos.list` configuration option.)

If cloning the repository requires authentication, make sure the [necessary credentials are set](#repositories-that-need-https-or-ssh-authentication).

Each item in `repos.list` has at least three parameters:

- `type`: Type of version control system. Currently `git` is only supported. Default is `git`.
- `url`: A valid git origin URL accessible from your Sourcegraph instance. (This URL may contain a username and password such as `https://user:password@example.com/my/repo`; they won't be displayed to non-admin users.)
- `path`: The path name of the repository, such as `my/repo`, `github.com/my/repo` (convention for GitHub.com repositories), `gitlab.example.com/my/repo` (convention for Gitlab EE/CE repositories, with `gitlab.example.com` being replaced by the actual host), etc.
- `links` (optional): Object containing URL formats for Sourcegraph to use when generating links back to the code host. `links` accepts four properties:
  - `repository`: URL specifying how to link to the repository, e.g., "https://example.com/myrepo".
  - `commit`: URL specifying how to link to commits. Use "{commit}" as a placeholder for a commit ID, e.g., "https://example.com/myrepo/view-commit/{commit}".
  - `tree`: URL specifying how to link to paths. Use "{path}" as a placeholder for the path, and "{rev}" as a placeholder for a revision, e.g., "https://example.com/myrepo@{rev}/browse/{path}".
  - `blob`: URL specifying how to link to files. Use "{path}" as a placeholder for the path, and "{rev}" as a placeholder for a revision, e.g., "https://example.com/myrepo@{rev}/blob/{path}".

When your server starts up, it will go through the repositories listed in `repos.list` and automatically clone and make them available on your Sourcegraph.

---

## Repositories that need HTTP(S) or SSH authentication

If authentication is required to `git clone` the repository clone URLs that `repos.list` specifies, then you must provide the credentials to the container.

### SSH authentication (config, keys, `known_hosts`)

The container consults its own file system (in the standard locations) for SSH configuration, private keys, and `known_hosts`. Upon container start, it copies all files from `/etc/sourcegraph/ssh` into its own `$HOME/.ssh` directory.

To provide SSH authentication configuration to the container, assuming you're using the default `--volume $HOME/.sourcegraph/config:/etc/sourcegraph`, follow these steps:

1.  Create files at `$HOME/.sourcegraph/config/ssh/config`, `$HOME/.sourcegraph/config/ssh/known_hosts`, etc., on the host machine as desired to configure SSH.
1.  Start (or restart) the container.

To configure the container to use the same SSH as your user account on the host machine, you can also run `cp -R $HOME/.ssh $HOME/.sourcegraph/config/ssh`.

### HTTP(S) authentication via netrc

The easiest way to specify HTTP(S) authentication for repositories is to include the username and password in the clone URL itself (in the `repos.list` entry's `url` property), such as `https://user:password@example.com/my/repo`. These credentials won't be displayed to non-admin users.

Otherwise, the container consults the `$HOME/.netrc` files on its own file system for HTTP(S) authentication. The `.netrc` file is a standard way to specify authentication used to connect to external hosts.

To provide HTTP(S) authentication, assuming you're using the default `--volume $HOME/.sourcegraph/config:/etc/sourcegraph`, follow these steps:

1.  Create a file at `$HOME/.sourcegraph/config/netrc` on the host machine that contains lines of the form `machine example.com login alice password mypassword` (replacing `example.com`, `alice`, and `mypassword` with the actual values).
1.  Start (or restart) the container.

---

## Add repositories already cloned to disk

You can also add repositories to Sourcegraph that are already cloned to disk on the host machine. This is useful for repositories requiring non-standard authentication to clone, or very large repositories on which cloning exceeds the resources available to the Docker container.

The steps documented here are intended for Sourcegraph instances running on a single node. The general process also applies to Sourcegraph Data Center (running on Kubernetes), but you need to perform these steps on the underlying node hosting the `gitserver` pod, or on the persistent volume used by the `gitserver` deployment.

If you're using the default `--volume $HOME/.sourcegraph/data:/var/opt/sourcegraph` argument to run the `sourcegraph/server` Docker image, and the repository you want to add is named `github.com/my/repo`, then follow these steps:

1.  If Sourcegraph is running, ensure the repository is disabled so it doesn't attempt to clone it.

1.  On the host machine, ensure that a bare Git clone of the repository exists at `$HOME/.sourcegraph/data/repos/github.com/my/repo/.git`.

    To create a new clone given its clone URL:

    ```
    git clone --mirror YOUR-REPOSITORY-CLONE-URL $HOME/.sourcegraph/data/repos/github.com/my/repo/.git
    ```

    Or, as an optimization, you can reuse an existing local clone to avoid needing to fetch all the repository data again:

    ```
    git clone --mirror --reference PATH-TO-YOUR-EXISTING-LOCAL-CLONE --dissociate YOUR-REPOSITORY-CLONE-URL $HOME/.sourcegraph/data/repos/github.com/my/repo/.git
    ```

1.  Ensure your site configuration contains entries for the code host of the added repository and then enable the repository in the admin UI.

    If this repository exists on a code host that Sourcegraph directly integrates with, then use that code host's configuration (as described in the other section on this page). After updating the site configuration, if you used the correct repository path, Sourcegraph will detect and reuse the existing clone. (For example, if you're working with a repository on GitHub.com, ensure that the repository path name you used is of the form `github.com/my/repo`.)

    Otherwise, add an entry for this repository using [`repos.list`](#sync-repositories-from-any-code-host) and use a `url` (clone URL) of `file:///var/opt/sourcegraph/repos/github.com/my/repo`.

---

## Troubleshooting

If your repositories are not showing up:

- On Sourcegraph, check the logs from the Docker container for error messages related to communication with your code host's API.
- On Sourcegraph Data Center, check the logs from the `repo-updater` pod.
- Check the site admin **Repositories** page on Sourcegraph (and ensure you're logged in as an admin).

If your repositories are showing up but are not cloning or updating from the original Git repository:

- Go to the repository's **Mirroring** settings page and inspect the **Check connection** logs.

---

## Example configuration

Here is an example configuration of a Sourcegraph that is integrated with both GitHub Enterprise and GitHub.com, and has repositories added from gitolite:

```json
# Replace 🔒 with a personal access token generated at https://GITHUB_URL/settings/tokens

{
    // ...
    "github": [
        {
            "url": "GITHUB_ENTERPRISE_URL",
            "token": "🔒"
        },
        {
            "url": "https://github.com",
            "token": "🔒",
            "repos": ["facebook/react","golang/go"],
        }
    ],
    "gitlab": [
        {
            "url": "GITLAB_URL",
            "token": "🔒"
        },
    ],
    "repos.list": [
        {
            "url": "https://gitolite.example.com/my/repo.git",
            "path": "gitolite/my/repo"
        }
    ]
    // ...
}
```
