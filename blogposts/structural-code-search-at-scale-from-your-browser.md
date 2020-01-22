---
title: Structural code search. At scale and from your browser.
author: Rijnard van Tonder
authorUrl: https://twitter.com/rvtond
publishDate: 2020-01-24T10:00-07:00
tags: [blog]
slug: structural-code-search-at-scale-from-your-browser
heroImage: https://TODO
published: true
---

We're introducing a richer way to search code at Sourcegraph with structural
code search. And we're making it available at scale.

## What _is_ structural code search?

Structural code search is the idea that you can search for _syntactic
structures_ in code that correspond more closely to a program's underlying
concrete syntax tree<sup>1</sup>. For example, `for` [loops in Rust](https://doc.rust-lang.org/1.2.0/book/for-loops.html) look something like
this:

```rust
for var in expression {
    code
}
```

The `code` block can contain may contain nested `for` loops, `if` statements,
and so on. If we wanted to match all of the `code` block contents and search
for patterns inside it, our search engine must understand that `code` is
contained inside the _balanced_ braces `{ ... }`. While regular expressions can
go a long way to match such syntactic structures, they are [not
ideal](https://stackoverflow.com/questions/1732348/regex-match-open-tags-except-xhtml-self-contained-tags).
Parsers, on the other hand, are better suited. Parsers convert syntax like
`{...}` (delineating possibly nested code blocks) into tree data structures.
But most code search today is not based on true parsing or tree data
structures. Instead, it's based on matching literal strings and regular
expressions. We could more easily search for richer and interesting patterns if
today's search tools _also_ treated code as syntax trees, and that's the key
idea behind structural search. 

As a feature, the idea is not entirely new. There are some neat developer and
compiler tools that search or match over tree structures (see our [list]() at
the end of this post!). But none are at your fingertips, just seconds away from
running on some of today's largest and most popular code bases.

We are happy to announce that Sourcegraph now supports a first release of
structural search available at scale, for nearly every language, directly from
your browser.

## Examples! Show me examples!

Search for `++i` [in our codebase](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24++lang:typescript+%27for+%28:%5Bx%5D+%2B%2Bi%29%27&patternType=structural)

*A couple of things to keep in mind*

- See our [usage documentation](https://docs.sourcegraph.com/user/search/structural) for more help.

- You might be running structural search for the first time on a repo! :sunglasses: If your
query times out, give the page a refresh because we're probably warming up the
cache for you. 

- Need more inspiration? See the [CactusCon Talk](https://www.youtube.com/watch?v=yOZQsZs35FA)

- Have a usage question or suggestion? [Send us a tweet](https://twitter.com/srcgraph) or e-mail us at <feedback@sourcegraph.com>

- Run into a bug? [Share it with us on GitHub](https://github.com/sourcegraph/sourcegraph/issues/new?assignees=&labels=&template=bug_report.md&title=)

## How is this all that different from regular expressions?

- Builtin, convenient constraints `:[x] :[x]`.
- Language-aware (only code, contextual strings)
- Convenient multiline/insignificant whitespace matching
- Delimeters are _always_ balanced, no guesswork involved
- Less metasyntax, less escaping

- No support for `\d+` (see feature improvements).

*When you should use structural search*

Structural search is not a replacement for regexp search. It's another tool in
your toolkit that works well for matching blocks of code or expressions, and
simplifies catching buggy syntactic patterns. If you only want to find a simple
string or pattern, consider using Sourcegraph's [literal search] or [regexp
search], because these are typically much faster!

## What's next for structural search?

We have more features and improvements planned. _If you want to see any of
these features arrive more quickly, please :+1: the related issue tracker so
that we can prioritize our engineering to deliver them sooner!_

- *Structural search enabled for all mirrored repositories*. We want structural
  search to be available for _your_ repository, and not just the really popular
  ones. [:+1: this feature on GitHub](https://github.com/sourcegraph/sourcegraph/FIXME)
- *Regular expression support in structural holes*. We want to add support for
  regexp syntax inside holes for refine search (e.g., `\d+` to match only
  numerical digits). [:+1: this feature on GitHub](https://github.com/sourcegraph/sourcegraph/FIXME)
- *Make it faster*. Structural search is typically slower than our regexp
  search because it does more work. If you find it valuable, we
  want to make it faster. [:+1: this feature on GitHub](https://github.com/sourcegraph/sourcegraph/FIXME)

Have something else in mind? Send us an e-mail at <feedback@sourcegraph.com>

Happy searching!

---

## Additional resources

There is an immense amount of existing parsing and query tools for syntax
trees. Most compilers today offer a library or visitor framework, and linters
or static analyzers use these libraries for checks. We've put together a list
of tools related to structural search and matching that you may be
familiar with or find interesting:

- IntelliJ IDE support for structural search and replace, or `SSR` [1](https://www.jetbrains.com/help/idea/structural-search-and-replace.html)
- Coccinelle for C code [1](http://coccinelle.lip6.fr/)
- `gogrep` for matching Go syntax trees [1](https://github.com/mvdan/gogrep)
- `Sgrep`, or Syntactical grep for multiple languages [1](https://github.com/facebookarchive/pfff/wiki/Sgrep), [2](https://github.com/returntocorp/bento/blob/master/SGREP-README.md)
- `tree-sitter` for parsing multiple language grammars [1](https://github.com/tree-sitter/tree-sitter)
- CodeQL for analyzing a number of poular languages [1](https://securitylab.github.com/tools/codeql)

At Sourcegraph we're continually looking to improve developer tools, and to
integrate richer search functionality. If you find these tools or others
valuable, share your thoughts with us at <feedback@sourcegraph.com>.

[1] Or parse tree.
