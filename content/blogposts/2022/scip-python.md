---
title: 'scip-python: a precise Python indexer'
description: "Announcing scip-python, a new SCIP indexer for Python built on top of the excellent Pyright type checker."
authors:
  - name: TJ Devries
    url: https://github.com/tjdevries
publishDate: 2022-07-27T18:00+02:00
tags: [blog]
slug: scip-python
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/announcing-scip-python-logo.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/announcing-scip-python-logo.png
published: true
---

![](https://storage.googleapis.com/sourcegraph-assets/blog/announcing-scip-python-logo.png)

We are excited to announce the release of `scip-python`, a new SCIP indexer for Python built on top of the excellent [Pyright](https://github.com/microsoft/pyright) type checker. 

## What does precise Python mean?

This represents a significant advance in Python navigation for Sourcegraph. Previously, we only supported search-based navigation for Python, which is convenient because it works out of the box and returns correct results for many cases, BUT is limited by:
1. not understanding your dependencies
2. not understanding type hints, and
3. suffering from false negatives with variable names that appear frequently in different contexts. 

Precise Python addresses all of those, giving you equivalent code navigation quality to what you get with the Python language server in VS Code or PyCharm (and of course Neovim 😉).

<YouTube
  id="uhFO-j7SV_0"
  title="Precise Python navigation between dependencies"
/>

Some of the key features of `scip-python` include: 
- **Correctness:** scip-python re-uses the type checking and analysis of `pyright`. 
- **Cross-repository navigation:** scip-python is designed to support navigating between your codebase and python libraries.
- **Find Implementations** scip-python takes steps to support advanced code navigation features, such as Find Implementations of Classes and Class Methods.

### Correctness

`pyright` supports a very impressive list of features. `scip-python` was implemented with very few changes (primarily just exposing some internal functions) to the `pyright` library, which allows `scip-python` to take full advantage of the type checking and semantic analysis available in the `pyright` library -- including new Python features as they are supported.

### Cross-repository navigation

When `scip-python` is run in a Python environment with your dependencies available it will generate stable references to your dependencies. For example, if you were using the `PyYAML` package's `dump` function for the 6.0 release, `scip-python` would generate a symbol value of:

<pre>> scip-python python PyYAML 6.0 yaml/dump().</pre>

Assuming that you have also indexed either the PyYAML repo or the Python package repo for PyYAML 6.0, then when clicking on the identifier `dump` in this situation:

```python
from yaml import dump
print(dump)
```
Sourcegraph will take you to the definition in the corresponding PyYAML repository.

### Find Implementations

There are two primary supported cases right now for “Find Implementations” via scip-python in Sourcegraph.

The first case is to examine when and where some “BaseClass” is used as a parent class for another class. Instead of looking for references (which can show instantiation, `isinstance` checks and more) the user may view the “Implementations” in Sourcegraph. This will only show child class definitions in Sourcegraph.

For a concrete example, see the rich package, where we're viewing the `MarkdownElement`.

![](https://storage.googleapis.com/sourcegraph-assets/blog/scip-python/class-markdownelement.png)

The references of MarkdownElement are shown below:

![](https://storage.googleapis.com/sourcegraph-assets/blog/scip-python/class-references.png)

However, if you were looking to find out what classes inherit from this element, we can use the `Implementations pane` to view that information:

![](https://storage.googleapis.com/sourcegraph-assets/blog/scip-python/class-implementations.png)

Additionally, if any child classes implement or override a particular class method they can be found using the “Implementations” panel in Sourcegraph. For a class method, it will only show child classes that have an explicit implementation in their definition, not wherever the function is called.

## Get started with scip-python

Use the `scip-python index` command to index a Python codebase.

 ```bash
npm install -g @sourcegraph/scip-python @sourcegraph/src

cd my-python-project 
# Ensure you are in virtualenv that has dependencies installed
# This might be `pip install -r requirements.txt` or use poetry to install them

# Index the project 
# See `scip-python index --help` for more information 
scip-python index . --project-name my-project

# Upload the index to Sourcegraph
src lsif upload
```
For more information, please see the [scip-python](https://github.com/sourcegraph/scip-python) repository.

## Projects ready to explore on Sourcegraph.com

We are currently indexing the following projects with `scip-python`:
- [textualize/rich](https://sourcegraph.com/github.com/Textualize/rich)
- [django/django](https://sourcegraph.com/github.com/django/django) 
- [pre-commit/pre-commit](https://sourcegraph.com/github.com/pre-commit/pre-commit)

Feel free to navigate around in the code on Sourcegraph and leave any issues that you find on our [repo](https://github.com/sourcegraph/scip-python).

## Performance

The indexing performance is varied across codebases, particularly depending on the amount of dependencies and their usage across the project (scip-python will attempt to gain any possible hover documentation and references to these dependencies while indexing). Below is a snapshot of several different repos and their corresponding indexing time (including environment and dependency analysis).

| Project    | Lines of code | scip-python index(es) | Index loc/s |
|------------|---------------|-----------------------|-------------|
| Django     | 101218        | 39                    | 2595        |
| Rich       | 18923         | 10                    | 1892        |
| Pre-commit | 4801          | 5                     | 960         |

## Scip-python is available today

Scip-python is available publicly today. If you're a Sourcegraph user, you can implement scip-python to enable precise code navigation for your Python repositories. 

If you're not a Sourcegraph user but are interested in trying it out for navigating Python code (or a [number of other languages](https://docs.sourcegraph.com/code_intelligence/references/indexers)), you can [install it locally for free](https://about.sourcegraph.com/get-started/), or [reach out to our team for a demo](https://about.sourcegraph.com/demo).
