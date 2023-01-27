---
title: "How to search code with Sourcegraph using regular expression patterns"
tags: [blog]
publishDate: 2021-06-25T18:00+02:00
description: "Learn how to use regular expression search patterns to search code on Sourcegraph."
heroImage: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-07.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-07.png
slug: "how-to-search-with-sourcegraph-using-regular-expression-patterns"
authors:
  - name: Marek Zaluski
    url:
---

Sourcegraph lets you search code across repositories, supporting three kinds of search patterns: literal patterns, regular expression patterns, and structural patterns. In this article, we’ll take a look at regular expressions patterns and how to use them in Sourcegraph.

Regular expressions, often shortened as _regex_, help you find code that matches a pattern (including classes of characters like letters, numbers and whitespace), and can restrict the results to anchors like the start of a line, the end of a line, or word boundary.

## Enabling regular expression search on Sourcegraph

Start searching with regular expression patterns by toggling the dot asterisk (`.*`) button towards the right-hand side of the search box. When you mouse over it you’ll receive a tooltip that reads `Enable regular expression`.

<video loop autoPlay muted playsinline>
  <source src="https://storage.googleapis.com/sourcegraph-assets/learn/tutorial-images/enable-regex.mp4" />
</video>
  
Once it is highlighted, you're ready to search with regular expressions.

## Finding a pattern

Regular expressions are useful when you're looking for any strings that match a particular pattern. A common pattern in CSS is the RGB hex color code, like #6495ED (cornflower blue) or #663399 (Rebecca purple).

To match RGB hex color codes, we can write a regular expression that has three parts:

- A hash symbol (`#`)
- A character class for hexadecimal characters: `[0-9a-f]`
- A repetition operator, indicating that we're looking for 6 characters that match the above character class: `{6}`

Combining these parts into one regular expression, we can use this pattern in a Sourcegraph search. To make the results more relevant, we can add the `lang:css` filter so that we target only CSS files.

```text
query="#[0-9a-f]{6} lang:css" patternType="regexp"
```  

Regular expressions are useful for finding patterns like this, where certain classes of characters are repeated a certain number of times.

## Finding a set of function calls

One use case for regular expression search is when you are trying to find examples of file system function calls. You may be interested in functions that read or write files: `readFile` and `writeFile`. While you could search for them individually, it can be useful to perform one search that includes results for both functions.

`readFile` and `writeFile` have a pattern in common: they both end in `File`. We can write a regular expression that expresses this pattern like so:

```text
query="(read|write)File" patternType="regexp"
```  

The above search query uses the regular expression syntax of a pipe (`|`) character, which signifies “or”. We can read the query as a search for “`read` or `write`” followed by `File`.

If you would like to narrow down the scope of the search, you can modify this pattern further. If you would like to specify that you would like to use the file system prefix of `fs`, as in `fs.readFile` or `fs.writeFile`, you can add that prefix to the search. Because the `.` dot character notation has a special regex meaning (it will match all characters), we will want to escape the dot with a backslash (`\`).

```text
query="fs\.(read|write)File" patternType="regexp"
```  

Regular expressions are also useful if you’re looking for a variable that can contain a mix of alphabetic and numeric characters, like `id1`, `id2`, `id3` and so forth. To narrow down the results, we can add the `type:symbol` filter.

```text
query="id\d+ type:symbol" patternType="regexp"
```  

In this case `\d+` matches one or more digits.

## Using spaces in regular expression patterns

It’s common to be looking for a pattern with two keywords, separated by any other text in between.

When using regular expressions in Sourcegraph, the space character matches any characters between keywords. So if you search for two words in regular expressions mode, like `auth service`, you’ll get results where `auth` and `service` are found on the same line, and any other number of characters (not limited to spaces) may be in between.

```text
query="auth service" patternType="regexp"
```  

When you use spaces in regular expressions in Sourcegraph, the space character is automatically interpreted as replaced by the `.*` pattern. This pattern matches any number of characters on the same line (including none). When you’re looking for two words appearing together in a code base, but not necessarily right next to each other, regular expression mode is a useful way to find relevant results.

## Finding whole words using word boundaries

By default, Sourcegraph finds all occurrences of your search pattern even when it occurs inside of a longer word. Sometimes when you’re searching for a pattern like `count`, you’re only interested in functions or variables called `count` and not `counter` or `countId` or `countItems`. In those cases, you should specify that you’re looking for an exact keyword. You can do this with the regular expression `\b`, which stands for _word boundary_.

```text
query="\bcount\b" patternType="regexp"
```  

We can use this to improve the search from our earlier example. You may have noticed that the search for `readFile` and `writeFile` returned other functions that started with those patterns, like `readFileAsync`. By using a word boundary, we can restrict the search to only match the exact function name.

```text
query="(read|write)File\b" patternType="regexp"
```  

In the above search we’re adding `\b` at the end of the query, but not at the beginning. This way, we can express that we’re looking for matches that end with this pattern, but may have an alternate prefix.

## Finding patterns at the start of a line

We’ve looked at ways to find matches that are located anywhere in a given line of code. What if you want to narrow down your search to find only the instances when the word is located at the start of the line?

You can use the line start character, `^`, and the line end character, `$`, to anchor your search. For example, here is a search that matches the word `let` when it occurs at the start of the line.

```text
query="^let" patternType="regexp"
```  

This won’t match lines where there’s anything before `let` on the line. That means if there’s whitespace at the beginning of the line, like tabs or spaces for indentation, then that line won’t be considered matches. Since indentation is common in code, you may want to modify the search to include results where `let` can be optionally preceded by any amount of whitespace.

This is where the `\s*` pattern is useful; it matches any number of whitespace characters (zero or more). By adding it in front of `let`, you can now include all results where the line has indentation whitespace.

```text
query="^\s*let" patternType="regexp"
```  

## Learn more

Regular expressions are a powerful syntax for searching code, and in this tutorial we’ve only covered some fundamental features. Sourcegraph uses the RE2 style of regular expressions, which you can learn more about by reading the [RE2 documentation](https://github.com/google/re2/wiki/Syntax).

When you’re looking for nested structures in your code, like matching brackets, argument lists, or if-then statements, then structural search can be helpful. Learn about structural search in "[How to search with Sourcegraph using structural patterns](how-to-search-with-sourcegraph-using-structural-patterns)."
