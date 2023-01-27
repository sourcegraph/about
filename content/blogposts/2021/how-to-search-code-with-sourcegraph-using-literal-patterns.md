---
title: "How to search code with Sourcegraph using literal patterns"
tags: [blog]
publishDate: 2021-05-28T18:00+02:00
description: "Learn how to use literal search patterns to search code on Sourcegraph."
heroImage: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-03.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-03.png
slug: "how-to-search-with-sourcegraph-using-literal-patterns"
authors:
  - name: Marek Zaluski
    url:
---

Sourcegraph code search is a search engine that allows you to search code in your own repositories as well as across public open source code. It supports three kinds of search patterns: literal patterns, regular expression patterns, and structural patterns. In this article, we’ll explore literal search patterns and how to use them.

Performing a literal search is useful when you know the exact string that you’re looking for in a code base, like a particular function or variable name. You can find all occurrences of the name across multiple repositories by using your query as a literal pattern. It’s also useful for finding textual content — like error messages or comments — in the code.

By default, all search queries on Sourcegraph are treated as literal patterns. We’ll discuss a few use cases to find useful results with Sourcegraph.

## Finding function calls and definitions

As a developer, there are many times you may need to learn a new codebase: you may need to understand how best to use a new package, may need to be onboarded into an existing project, or may want to learn best practices from tried and tested software. A productive way to become familiar with a codebase is through selecting a function and understanding how it’s used throughout the code and in what contexts.

For example, if you’re learning how the Linux kernel works, one of the topics that you may want to understand is how Linux uses linked lists. Because linked lists are used throughout the Linux kernel and in driver code, they are a foundational starting point to familiarize yourself with the codebase.

The linked list data structure in Linux is called `list_head`. We can find all instances of the `list_head` structure by searching for it directly:

```text
query="list_head"
```  

As you review the results, you may notice that there are some common functions that are frequently used together with linked lists. One of these functions is `list_add_tail`. To explore further and find all instances of `list_add_tail`, we can start a new search for that specific function:

```text
query="list_add_tail"
```  

Literal search patterns can be used to find more than just functions or variables. They can also be used to find longer pieces of text, like error messages, as we’ll explore in the next section.

## Finding error messages

Literal search can help you find where a particular piece of text occurs within code. For example, if you’re seeing an error message while debugging, it can be helpful to find where that message is defined in the code to get a better idea of what is causing it. You can search for an exact match by copying the error into your search.

Let’s try an example. React is a framework used by many web apps, and its error messages are sometimes hard to debug. When a React component throws an error, it produces an error message like, `React caught an error thrown by Component`. When you get an error message like that, it isn’t always clear what is going on. To learn more about the source of the error, you can search for the error message itself:

```text
query="React caught an error thrown"
```  

By finding where an error message is defined, you can start to understand what conditions will cause this error. In this case, it happens when React catches an error that happened during the rendering phase in one of your components.

This kind of search also gives you an understanding of the inner workings of the codebase, and that can be really helpful to get a better mental model of how it works.

## Finding sequences of words

By default, when searching for literal patterns in Sourcegraph, the entire query will be searched, even if the pattern consists of multiple worlds. You should not put your query in quotes: we’ll go into more detail about this now.

Unlike a web search engine, if you search for two or more words on Sourcegraph, like `const counter`, then you’ll only get results for `const` immediately followed by `counter`, as in the example below.

```text
query="const counter"
```  

Returning to our example in the Linux kernel, we can narrow down our search for `list_head` to only the cases where it’s used as a simple structure ([`struct`][struct]), by searching specifically for the `struct list_head` pattern:

```text
query="struct list_head"
```  

If you want to find all instances of those two words appearing in the same file but not necessarily in sequence, then you can use the `and` operator, or you can switch to regular expression mode.

To use the `and` operator, add it to your search. The following query will find occurrences of `list_head` and `list_add_tail` when they are present anywhere in the same file.

```text
query="list_head and list_add_tail"
```  

If you try one of these examples with quotes around the search query, like `"const counter"`, you’ll notice that you get no results. This is because the quote characters are interpreted literally, so Sourcegraph will search for textual data that includes those quote characters.

There are cases where searching for quote characters is useful. We’ll explore that in the next section.

## Finding quoted string constants

Because quote characters are treated like any other character when you’re in literal pattern mode, you can search for quoted strings by including the quotes in your search.

For example, the quoted string `"ENOENT"` represents the error when a file is not found in Linux, and it’s found in many codebases:

```text
query='"ENOENT"'
```  

By including the quotes in the search query, you can compare this search with the same string, but without quotes. You’ll receive other results, where the string isn’t necessarily in quotes.

```text
query='ENOENT'
```  

## Learn more

We’ve explored how to use Sourcegraph to search for literal patterns like function names, variables names, error messages, and strings. You can learn more about Sourcegraph search syntax in the [documentation].

Literal search patterns are a useful starting point, but often you need to search for patterns in your code that require more flexibility. Sourcegraph offers two other types of patterns: [regular expressions] and [structural search].

To go beyond literal patterns, you can use regular expressions or structural search patterns.

**Related links:**

- [Sourcegraph search query documentation][documentation]
- [Sourcegraph regular expression search][documentation]
- [Sourcegraph structural search][structural search]

[struct]: https://en.wikipedia.org/wiki/Struct_(C_programming_language)
[documentation]: https://docs.sourcegraph.com/code_search/reference/queries
[regular expressions]: how-to-search-with-sourcegraph-using-regular-expression-patterns
[structural search]: how-to-search-with-sourcegraph-using-structural-patterns
