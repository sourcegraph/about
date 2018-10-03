---
layout: markdown
title: User, organization, and global settings
permalink: docs/config/settings
---

This page is an index of the user-level, organization-level, and global settings for Sourcegraph saved queries. To set these options for your personal account or organization, edit the JSON in **Configuration** in your personal or organization settings area. To set these options for your entire Sourcegraph instance, edit the configuration JSON in **Global settings** in the site admin area.

For more information, see "[Configuration overview](/docs/config)".

- [motd](#motd-array-of-strings)

- [search.savedQueries](#searchsavedqueries-array)

- [search.scopes](#searchscopes-array)

- [search.repositoryGroups](#searchrepositorygroups-object)

- [SearchScope](#searchscope-object)

---

# Reference

<br/>

## `motd` (array of strings)

An array (often with just one element) of messages to display at the top of all pages, including for unauthenticated users. Users may dismiss a message (and any message with the same string value will remain dismissed for the user).

Markdown formatting is supported.

Usually this setting is used in global and organization settings. If set in user settings, the message will only be displayed to that user. (This is useful for testing the correctness of the message's Markdown formatting.)

MOTD stands for "message of the day" (which is the conventional Unix name for this type of message).

## `search.savedQueries` (array)

Saved search queries

The object is an array with all elements of the type `object`.

The array object has the following properties:

- `key` (string, required) Unique key for this query in this file

- `description` (string, required) Description of this saved query

- `query` (string, required) Query string

- `showOnHomepage` (boolean) Show this saved query on the homepage

- `notify` (boolean) Notify the owner of this configuration file when new results are available

- `notifySlack` (boolean) Notify Slack via the organization's slack webhook URL when new results are available

- `notifyUsers` (array) List of users to notify via email when new results are available The object is an array with all elements of the type `string`.

- `notifyOrganizations` (array) List of organizations to notify via email when new results are available The object is an array with all elements of the type `string`.

<br/>

## `search.scopes` (array)

Predefined search scopes

The object is an array with all elements of the type [`SearchScope`](#searchscope-object).

<br/>

## `search.repositoryGroups` (object)

Named groups of repositories that can be referenced in a search query using the repogroup: operator.

The object takes in key-value pairs, where the key is the name of the repogroup, and the value is an array of strings specifying a repository path. For example:

```json
{
  // ...
  "search.repositoryGroups": {
    "crates": ["github.com/rust-lang/libc", "github.com/rust-lang-nursery/bitflags"]
  }
  // ...
}
```

---

# Types

<br />

## `SearchScope` (object)

Properties of the `SearchScope` object:

### `id` (string)

A unique identifier for the search scope.

If set, a scoped search page is available at https://sourcegraph.example.com/search/scope/ID, where ID is this value.

### `name` (string, required)

The human-readable name for this search scope

### `value` (string, required)

The query string of this search scope

### `description` (string)

A description for this search scope

<hr />
