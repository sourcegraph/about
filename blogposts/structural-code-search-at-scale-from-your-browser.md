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
concrete syntax tree (or parse tree). For example, `for` [loops in
Rust](https://doc.rust-lang.org/1.2.0/book/for-loops.html) look something like
this:

```rust
for var in expression {
    code
}
```

The `code` block can contain nested `for` loops, `if` statements, and so on. To
match all of the `code` block contents for these expressions, and search for
patterns inside them, our search engine must understand that `code` exists
inside balanced braces `{ ... }`. Regular expressions can go a long way to
match such syntactic structures but they are [not
ideal](https://stackoverflow.com/questions/1732348/regex-match-open-tags-except-xhtml-self-contained-tags).
In practice we use _parsing_ to interpret and convert syntax for nested
expressions like `{...}` into trees, which encode richer structural properties
than the textual representation.

![Nested expressions figure](images/nested-expressions.png) Figure 1: Nested
expressions can expand inside code blocks. Parsing converts nested expressions
into tree data structures.

Most code search today is not based on true parsing or tree data structures.
Instead, we use literal strings or regular expressions, which is "good enough"
for many kinds of searches. But these methods make it tricky to match precisely
on the possible blocks, or their expressions, that can expand inside the loop
in Figure 1. We could more easily and precisely search for richer syntactic
patterns if today's search tools _also_ treated code as syntax trees, and
that's the key idea behind structural search. 

Many neat developer and compiler tools already exist for querying or
matching tree structures (see [additional resources](#additional-resources)
at the end of this post!). But none are available at your fingertips, just
seconds away from running on some of today's largest and most popular
codebases. That is why we are happy to announce that Sourcegraph now supports a
first release of structural search available at scale, for nearly every
language, directly from your browser.

## Examples! Show me examples!

Let's look for things in the Linux kernel. After all, why not show
structural search working on one of the largest and most popular projects in
open source software?

One important function is `copy_from_user`, which copies content from userspace
memory into the kernelspace memory. We can find all `copy_from_user` calls with
a query like `copy_from_user(:[args])`. 

![Small logo](images/logo-40x40.png) Run this query live: [copy\_from\_user(:[args])](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/torvalds/linux%24+%27copy_from_user%28:%5Bargs%5D%29%27+lang:c&patternType=structural)

The `:[args]` syntax is a wildcard matcher that matches all text between
balanced parentheses. The `args` part is just a descriptive 
identifier. The match syntax and behavior is based on
[Comby](https://comby.dev), which is the underlying engine behind structural
search. You can find out more about the match syntax in our [usage
docs](https://docs.sourcegraph.com/user/search/structural)---for now it's
enough to just follow along this blog post!

Now, of course, we _could_ have run a simpler regex search for the prefix with
something like
[`copy_from_user(`](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/torvalds/linux%24+copy_from_user%28+lang:c+&patternType=literal)
and get results more quickly, and sometimes that's the right thing to do. 

But in other cases we can do more interesting things with structural search
that becomes awkward otherwise. For example, one result for the above query
is:

```c
copy_from_user(&txc.tick, &txc_p->tick, sizeof(struct timex32) - 
			   offsetof(struct timex32, tick))
```

where the argument spans multiple lines. By default, `:[hole]` syntax matches
across multiple lines just like code structures can. An interesting thing about
this call is that it calculates the size of memory using `sizeof(...) - ...`.
Let's see if there are other calls that calulate the size of memory in a
similar way:

Run this query live: [copy\_from\_user(:[dst], :[src], sizeof(:[\_]) -
:[\_])](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/torvalds/linux%24+%22copy_from_user%28:%5Bdst%5D%2C+:%5B_%5D%2C+sizeof%28:%5B_%5D%29+-+:%5B_%5D%29%22+lang:c&patternType=structural)

This query breaks up the original `:[args]` hole into holes for the
destination buffer `dst`, source buffer `src`, and the calculation for the
memory size. The `:[_]` syntax is just a hole that we don't particularly care
to name. This query finds just two more results, so this is a really uncommon
pattern in the code base! Certain calculation for memory sizes can mean bugs.
For example...

Identifying patterns to clean up is another example where structural search is
convenient. For example, one [clean
up](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=1fbc9f46a024535d95c3d5f136901decd86b109e)
in the kernel looks like this:

```diff
@@ -128,8 +128,7 @@ static void __zcrypt_increase_preference(struct zcrypt_device *zdev)
 	if (l == zdev->list.prev)
 		return;
 	/* Move zdev behind l */
-	list_del(&zdev->list);
-	list_add(&zdev->list, l);
+	list_move(&zdev->list, l);
 }
```

Here's a query for easily finding more of these:

[`list_del(:[x]); list_add(:[x], :[_])`](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/torvalds/linux%24++%27list_del%28:%5Bx%5D%29%3B+list_add%28:%5Bx%5D%2C+:%5B_%5D%29%27+&patternType=structural)

This time, we're using the same identifier `:[x]` twice, to make sure that the
argument is the same for both list calls. We could choose any identifier,
except for `:[_]`, which is just a placeholder. The whitespace between the
calls is interpreted to possibly include newlines, so there's no issue matching
these calls across newlines.

Structural search is purely syntactic, so there are some matches that cannot cleaned up:

```c
	if (!list_empty(&page->lru))
		list_del(&page->lru);

	list_add(&page->lru, &pool->lru);
```

In this case, the problem is that the `list_del` call is in scope of the `if`
block. However, the majority of matches carry our intended meaning. In the
future, we are introducing [rules]() to refine queries further, giving you greater
control for avoiding unintended matches.

---

WIP

Rough, want examples for Rust, JS/TS/React, C, Go, Python

Search for `++i` [in our codebase](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24++lang:typescript+%27for+%28:%5Bx%5D+%2B%2Bi%29%27&patternType=structural)

---

*A couple of things to keep in mind*

- Structural search on sourcegraph.com is only enabled for roughly the top
  10,000 most popular repositories on GitHub, and on the most recent commit of
  the default branch. We plan to open it up to all mirrored repositories and
  you can [help make that happen faster](#whats-next-for-structural-search).
  Until then, you can [set up Sourcegraph
  locally](https://docs.sourcegraph.com/#quickstart) for your own code or any
  other repository you'd like and get all of the structural search goodness.

- You might be running structural search for the first time on a repo! 😎 If your
query times out, give the page a refresh because we're probably warming up the
cache for you. 


- See our [usage documentation](https://docs.sourcegraph.com/user/search/structural) for more help.

## How is this different from regular expressions?

Structural search is not a replacement for regexp search. It's another tool in
your toolkit that works well for matching blocks of code or expressions, and
simplifies catching buggy syntactic patterns. If you only want to find a simple
string or pattern, consider using Sourcegraph's literal or regexp
[search](https://sourcegraph.com/search), because these are typically much
faster!

They key differences in functionality are:

- Builtin, convenient constraints `:[x] :[x]`.
- Language-aware (only code, contextual strings)
- Convenient multiline/insignificant whitespace matching
- Delimiters are _always_ balanced, no guesswork involved
- Less metasyntax, less escaping

- No support for `\d+` (see feature improvements).

## What's next for structural search?

We have more features and improvements planned. _If you want to see any of
these features arrive more quickly, please +1 the related issue tracker so that
we can prioritize our engineering to deliver them sooner!_

- **Structural search enabled for all mirrored repositories.** We want structural
  search to be available for _your_ repository, and not just the really popular
  ones. [+1 this feature on GitHub](https://github.com/sourcegraph/sourcegraph/FIXME)
- **Regular expression support in structural holes.** We want to add support for
  regexp syntax inside holes for refine search, like `\d+` to match only
  numerical digits. [+1 this feature on GitHub](https://github.com/sourcegraph/sourcegraph/FIXME)
- **A richer query language.** There are ways to refine structural search with [rules](https://comby.dev/#advanced-usage) allowing richer queries. And this video has more details FIXME. If you have a use case for this and want support sooner, [+1 this feature on GitHub](https://github.com/sourcegraph/sourcegraph/FIXME).
- **Make it faster.** Structural search is typically slower than our regexp
  search because it does more work. If you find it valuable, we
  want to make it faster. [+1 this feature on GitHub](https://github.com/sourcegraph/sourcegraph/FIXME)

Have something else in mind? Send us an e-mail at <feedback@sourcegraph.com>

If you want to know more about `Comby` and rules, have a look at this [CactusCon talk](https://www.youtube.com/watch?v=yOZQsZs35FA). Turn on subtitles, audio is poor.


Happy searching!

---

## Additional resources

There is an immense amount of existing parsing and query tools for syntax
trees. Most compilers today offer a library or visitor framework, and linters
or static analyzers may build on them to implement checks. Here is a
non-exhaustive short list of tools related to structural search and matching
that you may be familiar with or find interesting:

- IntelliJ IDE support for structural search and replace, or `SSR` [[1](https://www.jetbrains.com/help/idea/structural-search-and-replace.html)]
- Coccinelle for C code [[1](http://coccinelle.lip6.fr/)]. Our list example above is taken from the Coccinelle work, and there are [many more patterns](http://coccinelle.lip6.fr/impact_linux.php) to browse through and try out!
- `Sgrep`, or Syntactical grep (multiple languages) [[1](https://github.com/facebookarchive/pfff/wiki/Sgrep)], [[2](https://github.com/returntocorp/bento/blob/master/SGREP-README.md)]
- `tree-sitter`, parsing and query framework (multiple languages) [[1](https://github.com/tree-sitter/tree-sitter)]
- `gogrep` for declaratively matching Go syntax trees [[1](https://github.com/mvdan/gogrep)]
- `Spoofax`, AST querying using the Spoofax Language Workbench (multiple languages) [[1]](http://www.metaborg.org/en/latest/source/langdev/meta/lang/flowspec/stratego-api.html#querying-analysis)
- CodeQL, querying tree and graph properties for a number of poular languages [[1](https://securitylab.github.com/tools/codeql)]

At Sourcegraph we're continually looking to improve developer tools, and to
integrate richer search functionality. If you find these tools or others
valuable, share your thoughts with us at <feedback@sourcegraph.com>.

## Feedback

- Have a usage question or suggestion about structural search? [Send us a tweet](https://twitter.com/srcgraph) or e-mail us at <feedback@sourcegraph.com>
- Run into a bug? [Create an issue on GitHub](https://github.com/sourcegraph/sourcegraph/issues/new?assignees=&labels=&template=bug_report.md&title=)
