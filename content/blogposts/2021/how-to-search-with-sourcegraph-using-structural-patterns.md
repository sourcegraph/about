---
title: "How to search code with Sourcegraph using structural patterns"
tags: [blog]
publishDate: 2021-08-13T18:00+02:00
description: "Learn how to use structural search patterns to search code on Sourcegraph."
heroImage: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-07.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-07.png
slug: "how-to-search-with-sourcegraph-using-structural-patterns"
authors:
  - name: Marek Zaluski
    url:
---

Structural search helps you search code for syntactical code patterns like function calls, arguments, `if`...`else` statements, and `try`...`catch` statements. It's useful for finding nested and recursive patterns as well as multi-line blocks of code.

Structural search patterns are one of the three search patterns supported by Sourcegraph, along with literal patterns and regular expressions. They're different from regular expressions because they take into account the syntax of code, like balanced brackets, quoted strings, and delimiters.

## Enabling structural search on Sourcegraph

Enable structural search by clicking the icon of two square brackets (`[]`) to the right of the search box:

<video loop autoPlay muted playsinline>
  <source src="https://storage.googleapis.com/sourcegraph-assets/learn/tutorial-images/enable-structural-search.mp4" />
</video>
  
Once structural search is enabled, the icon will be highlighted and you can begin performing structural searches.

## Finding function calls

Suppose we're debugging a program's error output and trying to figure out where that output is coming from in the code. We want to find calls to the `fprintf` function that writes to the standard error stream (`stderr`), which look like this:

```c
input='fprintf(stderr, "%s", message)'
```   

If we're looking only for error output, we want to match all other instances where `stderr` is the first argument of the call.

This is a situation where structural search can help:

```text
query="fprintf(stderr, ...) lang:c repo:^github\.com/torvalds/linux$ " patternType="structural"
```  

In this example, we're using a placeholder, `...`, for the remaining arguments. This ellipses placeholder is called a "hole" in the pattern. Structural search syntax uses "holes" as placeholders for syntactic structures. In this case, the placeholder will match the remaining function arguments.

## Matching multiple function arguments

The above example gave us results that use `stderr`, but we may want to narrow down our search further. For example, we may want to match only `fprintf` calls where the final argument is `err`. We can add `err` to our search query to match it in the position of the last argument:

```text
query="fprintf(stderr, ..., err) lang:c repo:^github\.com/torvalds/linux$ " patternType="structural"
```  

The above query matches `fprintf` calls where the first argument is `stderr` and the last argument is `err`. The `...` hole will match any number of arguments in between, and that's particularly useful for a function like `fprintf`, which accepts a variable number of arguments.

## Using multiple holes

You can use more than one `...` hole in a search. If we want to find an exact match for the second argument to `fprintf`, but accept any other arguments, we could use a hole in both the first and last argument position:

```text
query='fprintf(..., "%s", ...) lang:c repo:^github\.com/torvalds/linux$' patternType="structural"
```  

The second argument to `fprintf` is expected to be a format string. In this above example, we'll find matches where the second argument matches the string `"%s"` exactly.

## Matching holes within strings

Structural search can interpret quote-delimited strings, too. Using the `...` hole within a string, we can match partial string literals in the code. For example, we can expand our previous search to match any format strings that start with `ERROR:`

```text
query='fprintf(..., "ERROR: ...", ...) lang:c repo:^github\.com/torvalds/linux$' patternType="structural"
```  

In the above example, we're using three `...` holes:

- The first one accepts initial arguments
- The second one, within the string, accepts any string content that comes after the "Error:" portion of the string
- The third one accepts any final arguments.

As a whole, this search pattern helps us find `fprintf` calls that match this particular `"Error: ..."` pattern that we're looking for.

## Matching part of an expression

The `...` placeholder can also match partial content between brackets, like part of an expression.

Suppose we're investigating a bug that only happens when an array, `parts`, is empty. In the following example, we're looking for `if` statements where the condition starts with a check for whether the array is empty:

```text
query="if (!parts.length && ...) { ... } lang:javascript repo:^github\.com/google/.* count:all" patternType="structural"
```  

The above example will match `if` statements with any additional sub-expressions that follow the `&&` operator.

In the results, we'll find code blocks that get executed when that particular array is empty, which might bring us closer to finding the cause of the bug that we're investigating.

## Finding blocks of code in brackets

Balanced bracket matching works with round brackets or parentheses, `()`, square brackets, `[]`, and curly brackets or braces `{}`.

By using curly brackets in a structural search pattern, you can match entire code blocks.

Suppose that you're working on improving a Java codebase, and you want to clean up the code's `try`...`catch`...`finally` statements. In Java, an empty `catch` clause is allowed, but it often represents an opportunity to omit the clause entirely or to refactor it.

We can construct a structural search pattern to find empty `catch` clauses that can be improved. In this case, we'll use the hole placeholder inside of curly brackets to match code blocks, but we'll deliberately keep the `catch` clause empty in order to find only the empty blocks there.

```text
query="try {...} catch (...) { } finally {...} lang:java repo:^github\.com/elastic/elasticsearch$" patternType="structural"
```  

You can use curly brackets in structural search to match other types of code blocks as well, like `for` loops, `switch` statements, and object definitions.

## Learn more about structural search

We've discussed a few examples of structural search patterns in this article, but there are more features available in the syntax that we haven't covered. To learn more, visit the [Structural search reference](https://docs.sourcegraph.com/code_search/reference/structural) in the Sourcegraph documentation.

If you're curious about where Sourcegraph's structural search syntax originates, and want to learn more about the concept of structural search in general, you can learn more by visiting the [Comby website](https://comby.dev/), a tool that can both search and modify code. Sourcegraph's structural search syntax is a variant of the syntax supported by Comby.

## Other ways to search with Sourcegraph

While structural search is helpful for certain types of searches, there are cases where it's more straightforward to express what you're looking for as a regular expression. Learn more about searching with regular expressions in [How to search with Sourcegraph with regular expression patterns](how-to-search-with-sourcegraph-using-regular-expression-patterns).

If you're not looking for a pattern but an exact match, then a literal search may be more straightforward. Learn about literal search patterns in [How to Search with Sourcegraph with literal patterns](how-to-search-with-sourcegraph-using-literal-patterns).
