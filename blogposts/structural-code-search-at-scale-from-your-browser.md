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
memory into the kernelspace memory. This function has a history of [careful
auditing](https://www.defcon.org/images/defcon-19/dc-19-presentations/Cook/DEFCON-19-Cook-Kernel-Exploitation.pdf),
because incorrect uses can (and have) lead to vulnerabilities. We can find all
`copy_from_user` calls with a query like `copy_from_user(:[args])`. Try it live:

<div style="padding-left: 2rem">

🔎 [copy\_from\_user(:[args])](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/torvalds/linux%24+%27copy_from_user%28:%5Bargs%5D%29%27+lang:c&patternType=structural)

</div>

The `:[args]` syntax is a structural hole that matches all text between
balanced parentheses. The `args` part is just a descriptive identifier. We
currently support [Comby syntax](https://comby.dev/#match-syntax), which is the
underlying engine behind structural search. You can find out more about the
match syntax in our [usage
docs](https://docs.sourcegraph.com/user/search/structural)---for now it's enough
to just follow along this blog post!

Now, of course, we _could_ have run a simpler regex search for the prefix with
something like
[copy_from_user(](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/torvalds/linux%24+copy_from_user%28+lang:c+&patternType=literal)
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
the call above is that it calculates the size of memory using `sizeof(...) -
...`.  Calculating and checking the size of memory to copy can be more
error-prone than simple or static values. So, one thing we could check is
whether other calls that calulate the size of memory in a similar way to the
above, using substraction and `sizeof`:

<div style="padding-left: 2rem">

🔎 [copy\_from\_user(:[dst], :[src], sizeof(:[\_]) -
:[\_])](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/torvalds/linux%24+%22copy_from_user%28:%5Bdst%5D%2C+:%5B_%5D%2C+sizeof%28:%5B_%5D%29+-+:%5B_%5D%29%22+lang:c&patternType=structural)

</div>

This query breaks up the original `:[args]` hole into holes for the
destination buffer `dst`, source buffer `src`, and the calculation for the
memory size. The `:[_]` syntax is just a hole that we don't particularly care
to name. This query finds just a handful of results, so this is a rather uncommon
pattern in the code base!

Structural search can also identify patterns to clean up. For example, one [clean
up patch](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=1fbc9f46a024535d95c3d5f136901decd86b109e) in the kernel looks like this:

![Linux clean up patch](images/linux-cleanup-patch.png)

Here's a query to easily find more of these patterns:

<div style="padding-left: 2rem">

🔎 [list\_del(:[x]); list\_add(:[x], :[\_])](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/torvalds/linux%24++%27list_del%28:%5Bx%5D%29%3B+list_add%28:%5Bx%5D%2C+:%5B_%5D%29%27+&patternType=structural)

</div>

This time, we're using the same identifier `:[x]` twice, to make sure that the
argument is the same for both `list_del` and `list_add` calls. We could choose
any identifier, except for `:[_]`, which is just a placeholder. The whitespace
between the calls is interpreted to possibly include newlines, so there's no
issue matching these calls across newlines.

Do note that structural search is purely syntactic, so there are some matches that cannot cleaned up:

```c
	if (!list_empty(&page->lru))
		list_del(&page->lru);

	list_add(&page->lru, &pool->lru);
```

In this case, the problem is that the `list_del` call is in scope of the `if`
block. However, the majority of matches carry our intended meaning. In the
future, we are introducing [rules](#whats-next-for-structural-search) to refine
queries further, giving you greater control for avoiding unintended matches.

Structural search works on practically all languages, and understands the basic
syntactic structures (strings, comments, code) for them. Here's a short list
that gives just a taste of some patterns you can try out:


- Java: Find try-catch-finally statements where the catch statement has no body (the `catch` clause could be omitted)

<div style="padding-left: 2rem">

🔎 [try {:[try\_body]} catch (:[\_]) { } finally {:[finally\_body]}](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/elastic/elasticsearch%24++%27try+%7B:%5Btry_body%5D%7D+catch+%28:%5Be%5D%29+%7B+%7D+finally+%7B:%5Bfinally_body%5D%7D%27+lang:java&patternType=structural)

</div>

- Python: Find old-style string formatted `print` statements

<div style="padding-left: 2rem">

🔎 [print(":[string]" % :[args])](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/django/django%24+%27print%28%22:%5Bargs%5D%22+%25+:%5Bv%5D%29%27+lang:python&patternType=structural)

</div>

- Rust: Find chained `filter(...).next()` calls that could perhaps be simplified to `.find(...)` (based on [Clippy](https://rust-lang.github.io/rust-clippy/master/index.html#filter_next) lint).

<div style="padding-left: 2rem">

🔎 [.filter(:[x]).next(:[y])](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/django/django%24+%27print%28%22:%5Bargs%5D%22+%25+:%5Bv%5D%29%27+lang:python&patternType=structural)

🔎 [.filter(:[x]) .next(:[y])](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/paritytech/parity-ethereum%24++%27.filter%28:%5Bx%5D%29+.next%28:%5By%5D%29%27&patternType=structural) (matches across newlines)

</div>


## You're ready to try it yourself

**Here are a couple of things to keep in mind*

- Structural search on sourcegraph.com is only enabled for roughly the top
  10,000 most popular repositories on GitHub, and on the most recent commit of
  the default branch. We plan to open it up to all mirrored repositories and you
  can [help make that happen faster](#whats-next-for-structural-search). Until
  then, you can [set up Sourcegraph
  locally](https://docs.sourcegraph.com/#quickstart) for your own code or any
  other repository you'd like and get all of the structural search goodness.
  Running locally will also likely be faster than using sourcegraph.com

- You might be running structural search for the first time on a repo! 😎 If
your query times out, give the page a refresh because we're probably warming up
the cache for you.

- See our [usage
  documentation](https://docs.sourcegraph.com/user/search/structural) for more
  help and the [Comby FAQ](https://comby.dev/#faq) for more details and known
  limitations of the matching engine.

**A note on regular expressions: How is structural search different?**

Structural search is not a replacement for regexp search. It's another tool in
your toolkit that works well for matching blocks of code or expressions, and
simplifies catching buggy syntactic patterns. If you only want to find a simple
string or pattern, consider using Sourcegraph's literal or regexp
[search](https://sourcegraph.com/search), because these are typically much
faster!

Here are some key differences and comparisons to regexp-based search:

- Structural search is language-aware. For example, it understands certain pieces of syntax for code blocks, string delimiters, and comments. The language can be forced by specifying the `lang:` filter. If omitted, we perform a best-effort to infer the language based on matching file extensions, or fall back to a generic structural matcher.

- `:[hole]` syntax matches across multiple lines by default.

- Whitespace matching is fuzzy: a space in the pattern will match contiguous
  whitespace including newlines in the code.

- Delimiters like `{}`, `[]`, `()` are expected to _always_ be balanced
  (depending on language). For example, a dangling parenthesis in Java is
  considered a syntax error and can't be matched. A dangling delimiter in the
  pattern implies a syntax error (prefer regexp search if you want to match
  dangling delimiters).

- Built-in equality constraints when using the same identifier in patterns like
  `foo(:[x], :[x])`. This issimilar to, e.g., backreferences in regular
  expressions.

- No explicit support for matching regexp character classes like `\d+` yet (see planned improvements).

For a complete overview, refer to [comby.dev](https://comby.dev).

## What's next for structural search?

We have more features and improvements planned. _If you want to see any of these
features arrive more quickly, please +1 the related issue tracker so that we can
prioritize our engineering to deliver them sooner!_

- **Structural search enabled for all mirrored repositories.** We want structural
  search to be available for _your_ repository, and not just the really popular
  ones. [+1 this feature on GitHub](https://github.com/sourcegraph/sourcegraph/FIXME)
- **Regular expression support in structural holes.** We want to add support for
  regexp syntax inside holes for refine search, like `\d+` to match only
  numerical digits. [+1 this feature on GitHub](https://github.com/sourcegraph/sourcegraph/FIXME)
- **A richer query language.** There are ways to refine structural search with [rules](https://comby.dev/#advanced-usage) allowing richer queries. To get a taste of rules, have a look at this [CactusCon talk](https://www.youtube.com/watch?v=yOZQsZs35FA) (subtitles recommended if audio is hard to follow). If you have a use case for this and want support sooner, [+1 this feature on GitHub](https://github.com/sourcegraph/sourcegraph/FIXME).
- **Make it faster.** Structural search is typically slower than our regexp
  search because it does more work. If you find it valuable, we
  want to make it faster. [+1 this feature on GitHub](https://github.com/sourcegraph/sourcegraph/FIXME)

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
