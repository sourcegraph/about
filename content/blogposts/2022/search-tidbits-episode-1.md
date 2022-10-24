---
title: "Code search tidbits: 4 underrated features"
description: "You can do some pretty wild things with Sourcegraph that you won't find in any
other code search tool today. Here are 4 short-and-sweet tidbits of underrated
search features that go a bit extra."
authors:
  - name: Rijnard van Tonder
    url: https://twitter.com/rvtond
publishDate: 2022-10-21T00:00
tags: [blog]
slug: code-search-tidbits-episode-1
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png
published: true
---

You can do some pretty wild things with Sourcegraph that you won't find in any
other code search tool today. Below are 4 short-and-sweet tidbits of underrated
search features that go a bit extra.

### Find repositories by description

Use [`repo:has.description(scientific computing)`↗](https://sourcegraph.com/search?q=context:global+repo:has.description%28scientific+computing%29&patternType=standard) to find repositories related to topics like scientific computing. Repositories are ordered by number of stars.

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/blog-2022-search-tidbits/has-description-1-1.png"
  alt="search by repository description"
/>


Simply add a pattern like [`matrix multiplication`↗](https://sourcegraph.com/search?q=context:global+repo:has.description%28scientific+computing%29+matrix+multiplication&patternType=standard) to search _inside_ repositories that match the description. Try other terms to find projects like [game engines](https://sourcegraph.com/search?q=context:global+repo:has.description%28game+engine%29&patternType=standard), [react tutorials](https://sourcegraph.com/search?q=context:global+repo:has.description%28react+tutorial%29&patternType=standard), or [video editors](https://sourcegraph.com/search?q=context:global+repo:has.description%28video+editor%29&patternType=standard).

### Search over code <span style={{color: "#2c8c2c"}}>+added</span> or <span style={{color: "#a33c3c"}}>-removed</span>

Sourcegraph can search over diffs. But did you know: searches can pick out only
the lines that were <span style={{color: "#2c8c2c"}}>**+**_added_</span> or
<span style={{color: "#a33c3c"}}>**-**_removed_</span>? Use
`select:commit.diff.added` or `select:commit.diff.removed` to search for added
or removed library calls or [`TODO`s in repositories ↗](https://sourcegraph.com/search?q=context:global+repo:%5Egithub%5C.com/rust-lang/rust%24+TODO+type:diff+select:commit.diff.removed&patternType=standard&case=yes).

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/blog-2022-search-tidbits/select-commit-diff-removed.png"
  alt="search by repository description"
/>

### Conditionally search repositories

Add a search term like `repo:contains(file:package.json
content:eslint.*\^8\.13\.0)` to search inside repositories _only if_&nbsp; they
contain a `package.json` file with a specific `eslint` version. For example, we
can search for the `rules` field in `.eslintrc` files, but _only if_&nbsp; the
repository contains an eslint version of `^8.13.0` in `package.json`. See it in action with this
[query↗](https://sourcegraph.com/search?q=context:global+repo:has.file%28path:package.json+content:eslint.*%5C%5E8%5C.13%5C.0%29+file:%5C.eslintrc%24+rules&patternType=standard).

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/blog-2022-search-tidbits/conditional-search-v6.png"
  alt="search by repository description"
/>

So you basically have "if" statements without needing to do anything too
special. These are great for needle-in-a-haystack queries (so they sometimes run
a bit longer) but are extremely powerful. Check out
[`repo:has.path(...)↗`](https://docs.sourcegraph.com/code_search/reference/language#repo-has-path)
and
[`repo:has.content(...)↗`](https://docs.sourcegraph.com/code_search/reference/language#repo-has-content)
for similar conditional search terms.

### Curate groups of repos to search over

Create your own groups of repositories to search using `search contexts`. I use
this to group the top 100 starred GitHub repositories by language. It's really
handy to search for examples in a language that I'm new to, like finding how library
calls are used.


<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/blog-2022-search-tidbits/zig-search-context.png"
  alt="search by repository description"
/>

Even if you know the language, you'll see code examples in popular and high
quality repositories for that language. To create your own, just hit the `context:` drop-down and manage your contexts to
create your own from there.

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/blog-2022-search-tidbits/search-context-dropdown.png"
  alt="search by repository description"
/>


You can reuse others' public contexts, like the ones shown in the screenshot. These are contexts I defined to roughly track the top 100 starred repositories for many different languages. So to search over the top 100 C projects, just use my [`context:@r/c-100-gh`↗](https://sourcegraph.com/search?q=context:%40r/c-100-gh+&patternType=standard) to find examples. Similar for [Zig](https://sourcegraph.com/search?q=context:%40r/zig-100-gh+&patternType=standard), [Rust](https://sourcegraph.com/search?q=context:%40r/rust-100-gh+&patternType=standard), [Elixir](https://sourcegraph.com/search?q=context:%40r/elixir-100-gh+&patternType=standard), and many others.

#### Help

Want to do something with code search that isn't quite working out? Head over to [our Discord channel↗](https://discord.gg/rDPqBejz93) and let us know.
