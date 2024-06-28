---
title: "Using Batch Changes via the Sourcegraph GraphQL API"
publishDate: 2024-06-24T10:00-07:00
authors:
  - name: Mike McLaughlin
    url: https://handbook.sourcegraph.com/team/#mike-mclaughlin
  - name: Ted Moskalenko
    url: https://handbook.sourcegraph.com/team/#ted-moskalenko
  - name: Ryan Aznar
    url: https://handbook.sourcegraph.com/team/#ryan-aznar 
description: "Learn how to create and execute Batch Changes using the Sourcegraph GraphQL API."
tags: [blog]
slug: "using-batch-changes-via-graphql-api"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/batch-changes-graphql/batchchanges-graphql.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/batch-changes-graphql/batchchanges-graphql.png
---

Batch Changes is a feature of [Code Search](https://sourcegraph.com/code-search) that lets teams make large-scale changes across their codebases, even for codebases with multiple code hosts and any number of repositories. Batch Changes programmatically opens pull requests (or merge requests) for each change, and teams can track every PR to completion from a simple UI.

Many customers have successfully used Batch Changes to [save time](https://sourcegraph.com/case-studies/indeed-accelerates-development-velocity) making changes, [increase their productivity](https://sourcegraph.com/case-studies/how-sourcegraph-transformed-nine-development-workflow), or [address critical vulnerabilities](https://sourcegraph.com/case-studies/nutanix-fixed-log4j-with-sourcegraph).

There are a few different ways to create and manage Batch Changes, namely through the [UI or CLI](https://sourcegraph.com/docs/batch-changes/create-a-batch-change#create-a-batch-change-with-the-sourcegraph-cli), but in this post we'll walk through steps to programmatically create and execute a [Batch Change](https://sourcegraph.com/docs/batch_changes) from start to finish via the [GraphQL API](https://sourcegraph.com/docs/api/graphql).

## Why use GraphQL?

Batch Changes can be created and managed using the [Sourcegraph UI](https://sourcegraph.com/docs/batch_changes/quickstart) or [CLI](https://sourcegraph.com/docs/batch_changes/how-tos/creating_a_batch_change). However we also offer a Batch Changes API which lets teams build their own custom interfaces for writing and executing batch changes for their in-house setups. Before proceeding with the step by step guide below, consider exploring the UI or CLI options or discuss this with your account team. 

# Step-by-step guide

## Prerequisites

**Deploy Sourcegraph Executors**

This procedure assumes you have deployed [Sourcegraph Executors](https://sourcegraph.com/docs/admin/executors) and will be running Batch Changes [server-side](https://sourcegraph.com/docs/batch-changes/server-side#running-batch-changes-server-side).

**Build your Batch Change Specification**

The first step to creating any batch change is to create a [batch change specification](https://sourcegraph.com/docs/batch_changes/references/batch_spec_yaml_reference) (aka batch spec) file in an editor of your choice. This file defines three main components crucial to executing a change:

* [Which repositories to search](https://sourcegraph.com/docs/batch_changes/references/batch_spec_yaml_reference#on)
* The [steps](https://sourcegraph.com/docs/batch_changes/references/batch_spec_yaml_reference#steps) (or actions) to perform against matches
* The [attributes of the resulting Pull/Merge Request](https://sourcegraph.com/docs/batch_changes/references/batch_spec_yaml_reference#changesettemplate) 

**API Execution Procedure**

Once the batch specification is complete, the next phase is to write code to create and execute the batch change. The steps below are the GraphQL APIs that need to be carried out either in the code or in the [Sourcegraph GraphQL API Console](https://sourcegraph.com/docs/api/graphql#api-console).

1. Get the Namespace ID
2. Create the Batch Change Object
3. Prepare the Batch Change Specification File for Upload
4. Upload the Batch Change Specification
5. Execute the Batch Change
6. Wait for Batch Spec Execution to Complete
7. Apply the Batch Change
8. View Changeset Details and State
9. Publish

### 1. Get the Namespace ID

Every batch change is "owned" by either an individual user or an [organization](https://sourcegraph.com/docs/admin/organizations#organizations). The owner is referred to as the "namespace".  The APIs referenced in this post require a namespace ID rather than the individual or organization name.

Use the following GraphQL API to convert from the name (either a user name or an organization name) to the ID:
```python
query NamespaceByName($name: String!) {
  namespaceByName(name: $name) {
    id
  }
}
```
An example response:
```python
{
  "data": {
    "namespaceByName": {
      "id": "VXNlcjoyNQ=="
    }
  }
}
```
Save the ID returned (`"VXNlcjoyNQ=="` in the above example response) from this query.  You'll need this ID to be passed to several of the APIs later on in this document.  We'll refer to this value throughout this document as `NamespaceID`.

### 2. Create the Batch Change Object

Next, create an empty batch change in the namespace.  We'll add the spec file in the next step.  Pass the `NamespaceID` returned from the previous step along with a display name. We'll choose `test-from-api` for `$name`.
```python
mutation CreateEmptyBatchChange($NamespaceID: ID!, $name: String!) {
  createEmptyBatchChange(namespace: $NamespaceID, name: $name) {
    id
    url
  }
}
```
An example response:
```python
{
  "data": {
    "createEmptyBatchChange": {
      "id": "QmF0Y2hDaGFuZ2U6OTQ3",
      "url": "/users/namespace/batch-changes/test-from-api"
    }
  }
}
```
Save the ID returned (`"QmF0Y2hDaGFuZ2U6OTQ3"` in the above example response) when running this mutation.  We'll refer to it below as `BatchChangeID`.

Once created, view the batch change in the Drafts or navigate to the URL from the above response.

### 3. Prepare the Batch Change Specification File for Upload

Once the batch change specification is created, it needs to be converted to a string variable value to be passed to the GraphQL API.

For those familiar with the Sourcegraph CLI, [src-cli](https://sourcegraph.com/github.com/sourcegraph/src-cli), this is analogous to executing the `src batch new` command where you can generate a YAML file with a default batch spec.

**Example: Batch Change Specification**
```python
name: test-from-api
description: Add Hello World to READMEs

# Find the first 100 search results for README files.
# This could yield less than 100 repos/workspaces if some repos contain multiple READMEs.
on:
  - repositoriesMatchingQuery: file:README.md count:1

# In each repository, run this command. Each repository's resulting diff is captured.
steps:
  - run: IFS=$'\n'; echo Hello World | tee -a $(find -name README.md)
    container: ubuntu:18.04

# Describe the changeset (e.g., GitHub pull request) you want for each repository.
changesetTemplate:
  title: Hello World
  body: My first batch change!
  commit:
    message: Append Hello World to all README.md files

  # Optional: Push the commit to a branch named after this batch change by default.
  branch: ${{ batch_change.name }}
```
**Example: String Variable Value**
```python
"name: test-from-api\ndescription: Add Hello World to READMEs\n\n# Find the first 100 search results for README files.\n# This could yield less than 100 repos/workspaces if some repos contain multiple READMEs.\non:\n  - repositoriesMatchingQuery: file:README.md count:1\n\n# In each repository, run this command. Each repository's resulting diff is captured.\nsteps:\n  - run: IFS=$'\n'; echo Hello World | tee -a $(find -name README.md)\n    container: ubuntu:18.04\n\n# Describe the changeset (e.g., GitHub pull request) you want for each repository.\nchangesetTemplate:\n  title: Hello World\n  body: My first batch change!\n  commit:\n    message: Append Hello World to all README.md files\n  # Optional: Push the commit to a branch named after this batch change by default.\n  branch: ${{ batch_change.name }}"
```
### 4. Upload the Batch Change Specification

Next, upload the batch change specification (to `$batchSpec`) using the format outlined in the previous step.
```python
mutation CreateBatchSpecFromRaw($batchSpec: String!, $NamespaceID: ID!, $BatchChangeID: ID!) {
  createBatchSpecFromRaw(batchSpec: $batchSpec, namespace: $NamespaceID, batchChange: $BatchChangeID) {
    id
    state
  }
}
```
An example response:
```python
{
  "data": {
    "createBatchSpecFromRaw": {
      "id": "QmF0Y2hTcGVjOiJiYzIxNjRlOS02M2M0LTQyNjQtOWMwYS0yOTJmNDViOWFmNjYi",
      "state": "PENDING"
    }
  }
}
```
Save the ID returned from this mutation (`"QmF0Y2hTcGVjOiJiYzIxNjRlOS02M2M0LTQyNjQtOWMwYS0yOTJmNDViOWFmNjYi"` in the above example response).  It will be referred to later in this document as `BatchSpecID`.

NOTE: if you need to make a change after performing this step, use the `replaceBatchChangeInput` mutation.

### 5. Execute the Batch Change

Finally, execute the batch change using:
```python
mutation ExecuteBatchSpec($BatchSpecID: ID!) {
  executeBatchSpec(batchSpec: $BatchSpecID) {
    state
    id
    applyURL
  }
}
```
An example response:
```python
{
  "data": {
    "executeBatchSpec": {
      "state": "QUEUED",
      "id": "QmF0Y2hTcGVjOiJiYzIxNjRlOS02M2M0LTQyNjQtOWMwYS0yOTJmNDViOWFmNjYi",
      "applyURL": null
    }
  }
}
```
Confirm that the returned state is `QUEUED` or `COMPLETED`.  If interested in previewing the results, go to the URL `https://[your-sourcegraph-server-url]/<applyURL>`

With the Sourcegraph CLI, [src-cli](https://sourcegraph.com/github.com/sourcegraph/src-cli), this is analogous to executing the `src batch preview` command.

### 6. Wait for Batch Spec Execution to Complete

If the state in the previous step is `QUEUED`, run the following until the `state` is `COMPLETED` and the `workspaceResolution.state` is `COMPLETED`.
```python
query WorkspaceResolutionStatus($BatchSpecID: ID!) {
  node(id: $BatchSpecID) {
    ... on BatchSpec {
          workspaceResolution {
            startedAt
            state
            failureMessage          
    }
    id
    state
     }
  }
}
```
An example response:
```python
{
  "data": {
    "node": {
      "workspaceResolution": {
        "startedAt": "2024-04-15T16:20:34Z",
        "state": "COMPLETED",
        "failureMessage": null
      },
      "id": "",
      "state": "COMPLETED"
    }
  }
}
```
### 7. Apply the Batch Change

Once ready to apply this batch change and create the PRs on your code host, run the following:
```python
mutation ApplyBatchChange($BatchSpecID: ID!) {
  applyBatchChange(batchSpec: $BatchSpecID) {
    id,
    name,
    state,
    url
  }
}
```
An example response:
```python
"data": {
    "applyBatchChange": {
      "id": "QmF0Y2hDaGFuZ2U6OTQ0",
      "name": "test-from-api",
      "state": "OPEN",
      "url": "/users/namespace/batch-changes/test-from-api"
    }
  }
}
```
### 8. View Changeset Details and State

After applying the batch change, run this query to see more details:
```python
query BatchChangeChangesets($BatchChangeID: ID!) {
  node(id: $BatchChangeID) {
    ... on BatchChange {
      changesets {
        totalCount,
  nodes {
          id
          state
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
      url
      state
    }
  }
}
```
An example response:
```python
{
  "data": {
    "node": {
      "changesets": {
        "totalCount": 1,
        "nodes": [
          {
            "id": "Q2hhbmdlc2V0OjEzODA4",
            "state": "FAILED"
          }
        ],
        "pageInfo": {
          "endCursor": null,
          "hasNextPage": false
        }
      },
      "url": "/users/mike/batch-changes/test-from-api",
      "state": "OPEN"
    }
  }
}
```
With the Sourcegraph CLI, [src-cli](https://sourcegraph.com/github.com/sourcegraph/src-cli), this is analogous to executing the `src batch apply` command.

### 9. Publish

In order to publish changesets, use the list of changeset IDs from the previous API call and invoke the publish mutation on each:
```python
mutation PublishChangesets($BatchChangeID: ID!, $changesets: [ID!]!, $draft: Boolean) {
  publishChangesets(batchChange: $BatchChangeID, changesets: $changesets, draft: $draft) {
    errors {
      changeset {
        id
        state
      }
      error
    }
    changesetCount
    progress
    state
    finishedAt
  }
}
```
An example response:
```python
{
  "data":
  {
    "publishChangesets":
    {
        "errors":[],
        "changesetCount":1,
        "progress":0,
        "state":"PROCESSING",
        "finishedAt":null
    }
  }
}
```
**IMPORTANT:** Be sure to iterate over the entire list of IDs in `"nodes"`.  NOTE: if there is another page of results, be sure to call this query again with the `"after"` parameter set to the `"endCursor"` value.

### Summary

Batch Changes is a powerful tool to help organizations make changes across many repositories and code hosts, letting you create PRs on all affected repositories and tracking their progress until they're all merged. There are different ways to execute them via UI or CLI, but in specific instances they can also be created and managed via the GraphQL API, offering flexibility to make changes programmatically depending on your specific circumstances.

[Contact us](https://sourcegraph.com/contact/request-info) if you'd like to learn more about Batch Changes. Existing customers can contact their account manager for assistance, or try it themselves with our [demo code](https://github.com/sourcegraph/blog-examples/blob/main/batch-changes-api/bc.py).