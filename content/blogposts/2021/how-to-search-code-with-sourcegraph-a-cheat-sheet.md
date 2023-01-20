---
title: "How to search code with Sourcegraph — a cheat sheet"
tags: [blog]
publishDate: 2021-08-19T18:00+02:00
description: "A guide to help you get up to speed with Sourcegraph's commands quickly"
heroImage: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-03.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-03.png
slug: "how-to-search-cheat-sheet"
---

Sourcegraph is a universal code search tool, enabling you to search across both open source and your own private code repositories. Code search can help you onboard onto new codebases, contribute to open source, find bugs and error messages, understand dependency libraries, and more. You can use these commands on your own [Sourcegraph instance](https://docs.sourcegraph.com/admin/deploy), or try them out on [Sourcegraph.com](https://sourcegraph.com/search) to search our index of open source repositories.

This cheat sheet style guide can help you get up to speed with Sourcegraph commands quickly. For more thorough tutorials on using Sourcegraph, refer to our [documentation](https://docs.sourcegraph.com/). 

You can use these commands on either [Sourcegraph.com](https://sourcegraph.com/search) or your own [Sourcegraph instance](https://docs.sourcegraph.com/admin/install).

## Searching an organization’s repository

By default, Sourcegraph lets you search globally, providing you with results from all the repositories you have access to. This includes all currently indexed open source repositories. The `repo` command lets you dial down to the single repository level.

### Searching for or within a repository

The `repo` keyword lets you search a specific repository in your organization or on the web.

```text
repo:repository-path
```  
  
```text
repo:regular-pattern
```
  
Searching with `repo:^github\.com/ORGANIZATION` will return all repositories in a given organization, where `ORGANIZATION` can be `sourcegraph`, for example.

```text
repo:^github\.com/sourcegraph/.*
```
  

The `repo` keyword contextualizes the searches you perform on Sourcegraph. 

### Repository search: command chaining

When searching a repository, command chaining can be used to return more specific results depending on the expected results.

**Search for a repository that contains a file**

If you are searching for a file or a file path in a repository, use `repo:has.path`.

```text
repo:repository-path repo:has.path(file-path)
```
  
For example, when searching for the `package.json` file in a project, this search query will return the file.

```text
repo:^github\.com/sourcegraph/.* repo:has.path(package.json)
```
  
Alternatively, you can use `repo:has.file`, which allows you to search for files containing content.

```text
repo:has.file(path:package\.json$ content:tsconfig)
```
  
This query returns repositories that contain a `package.json` file containing the string `tsconfig`.

**Search for a repository that contains some content**

Suppose you are searching for some content in a repository, such as a library. Use `repo:has.content`.

```text
repo:repo-path repo:has.content(your-content)
```
  
```text
repo:repo-path repo:has.content(regular-pattern)
```
  
We can search for the `mdi-react` library in Sourcegraph, for example:

```text
repo:^github\.com/sourcegraph/.* repo:has.content(mdi-react)
```
  
The above query returns repos that have `mdi-react` among its contents.

## Language-specific search

Use `lang` when searching code to narrow the scope of your search to one programming language. 

```text
lang:programming-language
```
  
We can search for results within the C++ or Python programming languages.

```text
lang:c++
```
```text
lang:python
```
  
By default, searches are case insensitive.

Prepending a hyphen can exclude results from a particular programming language.

```text
-lang:programming-language
```
  
To exclude Java, you can perform the following search.

```text
​​-lang:java
```
  
Narrowing your search scope down to specific languages can ensure that you find the code that is most relevant to your needs.

## Searching based on time periods

If you are searching for code committed before or after a time period, you will use `before` and `after`

```text
before:time-period after:time-period
```
  
Sometimes the time period can be relative, like `last week`, `last year`, `3 months ago` or absolute, in several formats including `{month} {day} {year}` (example: `february 10 2021`), `dd/mm/yyyy`, and ISO format `yyyy-mm-dd`.

```text
before:last week
```
  
```text
after:february 10 2021
```
  
```text
before:02/01/2019
```
  
To search between dates, keywords like `and` can be combined with `before` or `after` to return dates within a given period.

```text
repo:sourcegraph type:commit after:"july 9 2021" and before:"july 10 2021"
```
  
Time-based search is usually used along with other search commands to further narrow down search results.

Note that `before` and `after` only work in conjunction when combined with `type:diff` or `type:commit` commands.

## Search in archived repositories

The `archived` keyword will bring up those results from repositories that have been archived.

```text
archived:yes
```
  
```text
archived:no
```
  
```text
archived:only
```
  
We can surface only archived repositories within the Sourcegraph organization with the following query.

```text
repo:sourcegraph archived:only
```
  
This can help us understand past decisions made within a given codebase. 

## Case sensitive search

Use `yes` or `no` with the `case` search query to specify if the search should be case sensitive or not. By default, searches are case insensitive.

```text
case:yes
```
  
```text
case:no
```
  
Suppose you would like to check to align the style of a given codebase to help you bring all function calls in Python to be consistent with the [PEP 8](https://www.python.org/dev/peps/pep-0008/) guidance. You can use Sourcegraph to understand which functions are using camelCase rather than lowercase names with underscores between words (also called snake_case).

```text
case:yes lang:python myFunction
```
  
If you would like to find all declared functions that use camelCase, you can try combining this query with regular expressions.

## Searching by types

Types define the scope of code search. A search scope consists of commits, diffs, symbols, repos, paths and files. It is typically used alongside other search commands to further narrow search results.

```text
type:commit|path|diff|symbol|repo|file
```
  
Here is an example to show us time-based commits on the Sourcegraph repo.

```text
repo:sourcegraph after:yesterday type:commit
```
  
A `type` scope can use the following commands, which will restrict search to the following:
* `commit` — commits to a repository.
* `path` — restricts terms to matching filenames only (not file contents).
* `diff` — show [diffs](https://git-scm.com/docs/git-diff), or changes, within a repository.
* `repo` — repositories available to you.
* `file` — restricts terms to matching file contents only (not filenames).
* `symbol` — returns files that contain names or keywords in a library.

Searching by type can help you find exactly what you need in a codebase by narrowing down the scope of your search. 

## Searching commit messages matching a string

If a commit message is known, it can be helpful to use the `message` keyword to bring up relevant commits.

```text
message:commit-message
```
  
```text
message:string-regex-pattern
```
