---
title: Code search turned static code checker
author: Rijnard van Tonder
authorUrl: https://twitter.com/rvtond
publishDate: 2020-09-30T14:00-07:00
tags: [blog]
slug: code-search-turned-code-checker
heroImage: /blog/XXX.png
published: true
---

<style>
  .gatsby-highlight {
    max-width: 100%;
    width: 40rem;
    margin-left: auto;
    margin-right: auto;
  }
  table {
    width: 40rem;
    border: none;
  }
    table th {
    border: none;
  }
  table td {
    border: none;
  }
  table td:nth-child(2n) {
      text-align: right;
  }
    table th:nth-child(2n) {
      text-align: right;
  }
  table tr:nth-child(2n) {
    background-color: transparent;
  }
</style>

I find static code checkers most valuable when they teach me better ways to
code in a language or framework. For example, the Go
[staticcheck](https://staticcheck.io/docs/checks#SA6005) tool finds expensive
string comparisons like:

```go
if strings.ToLower(string1) == strings.ToLower(string2) {
  ...
}
```

and suggests instead:

```go
if strings.EqualFold(string1, string2) {
  ...
}
```

These short-and-sweet replacements are a great way to learn framework
idioms or library functions, like `strings.EqualFold` in Go.<sup>1</sup> And as a
codebase grows, small inefficiences like this one, and inconsistencies
opportunities compound. Code patterns creep in that affect readability and
performance—[and it matters](https://www.digitalocean.com/blog/how-to-efficiently-compare-strings-in-go/?).

## Productivity workflows: Code checks vs. code search

Code checkers like `staticcheck` typically integrate with continuous integration
(CI) pipelines, or maybe a pre-commit hook in your development environment.
Others, like lint checks, typically integrate with editors. These workflows need
some upfront configuration, the code checks are fixed in place, and productivity
ensues (🤞).

Searching code can also find code snippets to replace with functions like
`EqualFold`. In practice though, search engines generally treat code as
plaintext, and can't offer the fidelity of dedicated code checkers. Code
checkers do more work to gather static information of programs, e.g., parsing
syntax into trees and using build outputs like types and dependency graphs. It
takes time to gather this information, it takes knowledge to write checks that use it,
info, and it takes time to hook these checks into your workflow. These constraints take away the
flexibility and speed of search workflows when you're simply looking for changes
to your favorite
`ChocolateCake`[↗](https://sourcegraph.com/search?q=ChocolateCake&patternType=literal)

And yet, I can't shake the idea that there's a middle ground between crude
plaintext search and dedicated code checkers. What if the `EqualFold` check I
learned about could be reduced to a simpler and comparably effective _search query_?
Could we find, and maybe eradicate, all the code that should be calling
`EqualFold` instead? And without needing to clone the repos or set up a
fully fledged code checker? And so sprung the idea to explore code checking with
the ease of a flexible, push-button search workflow.

## Pushing code search toward static code checking

Earlier this year Sourcegraph introduced [structural search](blog/going-beyond-regular-expressions-with-structural-code-search/)
to search over code syntax. Structural search uses [comby](https://comby.dev) to
implement a basic building block in traditional code checkers: it interprets
programs as concrete syntax trees, not just plaintext. Combine that with new
support for `or` clauses to search for multiple patterns and add some file
filters, and it becomes possible to write configurable code checks as
self-contained search queries. Let's explore this idea!

Here's a search query inspired by
[a check](https://staticcheck.io/docs/checks#S1003) where `strings.Index`
comparisons can be replaced with `strings.Contains`:

```python
language:go
not file:test
not file:vendor

strings.Index(..., ...) > -1

or

strings.Index(..., ...) >= 0

or

strings.Index(..., ...) != -1
```

This query matches all `.go` files, excluding file paths that contain
`test` or `vendor`. It's sensible to exclude `test` and `vendor` paths if we
want to actually propose changes to a project (more on that later). The
patterns `strings.Index(..., ....)` match syntax of `strings.Index` calls,
and the `...` ellipses are special placeholders that match at least two
arguments.<sup>2</sup> The `or` keywords separate the patterns into separate
expressions.

We created a set of the top 100 Go repositories on GitHub (by stars) on
Sourcegraph.com. We can search those by adding `repogroup:go-gh-100` to
the query. Have a look at some of the results:

[🔘 Find ways to improve code in popular Go projects ↗](https://sourcegraph.com/search/console?q=repogroup:go-gh-100%0Alanguage:go%0A-file:test%0A-file:vendor%0A-file:Godeps%0A%0Astrings.Index(...,%20...)%20%3E%20-1%0A%0Aor%0A%0Astrings.Index(...,%20...)%20%3E=%200%0A%0Aor%0A%0Astrings.Index(...,%20...)%20!=%20-1)
<br />
<sup>Side note: our multiline query editor is in a proof-of-concept phase.</sup>

The query finds matches in some of the most popular Go projects in a
couple of seconds. An exhaustive search shows that there are at least 14 matches
at the time of writing. For this flavor of syntactic change, I have a good sense
that these are real hits of code that can be improved.

## Adding more code checks

Because structural search only looks at syntax, it can't yet operate at the
level of a tool like `staticcheck`, which knows more about static properties like type
information and variable scope to implement checks. At the same time,
`staticcheck` isn't a search tool, it's an entire toolset that includes a suite
of pre-written, high-precision checks that's very effective in certain
workflows, like CI. The question is not necessarily whether a search tool can
achieve parity with a tool like `staticcheck`. But given the overlap with
now-expressible search queries, it does prompt: how far can we push structural
code search to find similarly _actionable_ code checks? I.e., checks that match
real cases of code that we can improve.

So, taking inspiration from `staticcheck`, I wanted to see how many of its checks
translate to search queries that I could have high confidence in (i.e., all
patterns find legitimate issues; zero or very-near-zero false positives). I
chose to look at `staticcheck` checks for its clear documentation, which made it
easy to start developing checks. So I attempted to write search patterns
for each [simple static check](https://staticcheck.io/docs/checks).<sup>3</sup>

### Test files as reference patterns

I ran my search queries against `staticcheck`'s own test files to check that they
don't match unintended patterns (false positives) and don't miss real patterns
(false negatives). Each check may have more than one syntactic _variant_, so I
tried to implement patterns for as many variants as I could find in tests. It's
a neat exercise to develop patterns against the reference tests and discover
which variants to cover, all in a self-contained search webapp. Here's an example
where the query matches all the true hits in the test file, annotated with
`// want strings.Contains ...`:


<img src="https://storage.googleapis.com/sourcegraph-assets/about.sourcegraph.com/blog/2020/multiline-query-editor.png">

[🔘 Example query to match known patterns in test files↗](https://sourcegraph.com/search/console?q=repo:%5Egithub%5C.com/dominikh/go-tools$%20%0Alang:go%0Afile:test%0A%0Astrings.IndexRune(...,%20...)%20%3E%20-1%0A%0Aor%0A%0Astrings.IndexRune(...,%20...)%20%3E=%200%0A%0Aor%0A%0Astrings.IndexRune(...,%20...)%20!=%20-1%0A%0Aor%0A%0Astrings.IndexRune(...,%20...)%20==%20-1%0A%0Aor%0A%0Astrings.IndexRune(...,%20...)%20%3C%200%0A%0Aor%0A%0Astrings.IndexAny(...,%20...)%20%3E%20-1%0A%0Aor%0A%0Astrings.IndexAny(...,%20...)%20%3E=%200%0A%0Aor%0A%0Astrings.IndexAny(...,%20...)%20!=%20-1%0A%0Aor%0A%0Astrings.IndexAny(...,%20...)%20==%20-1%0A%0Aor%0A%0Astrings.IndexAny(...,%20...)%20%3C%200%0A%0Aor%0A%0Astrings.Index(...,%20...)%20%3E%20-1%0A%0Aor%0A%0Astrings.Index(...,%20...)%20%3E=%200%0A%0Aor%0A%0Astrings.Index(...,%20...)%20!=%20-1%0A%0Aor%0A%0Astrings.Index(...,%20...)%20==%20-1%0A%0Aor%0A%0Astrings.Index(...,%20...)%20%3C%200%0A)

Using the test files isn't a guarantee that I've implemented all the checks or
that it's entirely precise, but it adds a lot more confidence than inferring
patterns only from documentation.

### Results

Without making any claims about completeness, I was able to implement
at least one variant for 19 out of 34 checks that I feel confident
about. I relied only on patterns in `staticcheck`'s test data to discover syntactic
variants for checks, so I don't know if I covered all the patterns that
`staticcheck` implements in its code.

The majority of checks that I couldn't write required type information to
implement correctly (13 of 34). Other checks I couldn't write required more
complex syntax matching rules (8 of 34). This table roughly quantifies the
expressive needs for implementing checks:

| Description                      | # of checks |
|----------------------------------|-------------|
| Total                            | 34          |
| Works (all variants)             | 11          |
| Works (at least one variant)     | 19          |
| Needs additional syntax matching | 8           |
| Needs type info                  | 13          |

<sup>Note that some checks require type info _and_ additional syntax matching.
Also, one working variant for a check may not require type info, but another
variant for the same check may. I.e., the values overlap and do not sum to
Total.</sup>

Extending search queries to access static properties like type information is a
natural extension for writing better code checks, and an area of [code intelligence](https://docs.sourcegraph.com/user/code_intelligence)
work that we're exploring.

It was tempting to compare more directly with `staticcheck` output by
downloading the 100 Go repositories to disk, and running `staticcheck` on them
to see how the same patterns are found. For `staticcheck` to be effective, the
project typically needs to be built first (my experience was that running
`staticcheck` on individual files can be hit-and-miss, and understandably so). I
didn't like the idea of doing all that work, so I punted. It does highlight the
appeal of quicker, but less precise code check workflows.<sup>5</sup>

### Takeaway

Code search can be much more than finding your favorite provider called
`BananaNut.*Cake`. It can be a lightweight workflow for revealing
short-and-sweet ways to make your code better. Perhaps the most powerful idea is
that a universal code search can wholesale find and eradicate the code slips
we're always bound to make.

Starting small, the solution could look like a search query that finds issues in
active and popular Go projects at just the push of a button. Why not start
there? So while we're still working on ways to edit, comment, and annotate
queries, I get giddy about the idea that we can already run a check for
everything at once:

[🔘 Run all the code checks on popular Go projects ↗](https://sourcegraph.com/search/console?q=repogroup:go-gh-100%0Alang:go%0A-file:test%0A-file:vendor%0A-file:Godeps%0Apatterntype:structural%0A%0Astrings.ToLower(...)%20==%20strings.ToLower(...)%20or%0Astrings.IndexRune(...,%20...)%20%3E%20-1%20or%0Astrings.IndexRune(...,%20...)%20%3E=%200%20or%0Astrings.IndexRune(...,%20...)%20!=%20-1%20or%0Astrings.IndexRune(...,%20...)%20==%20-1%20or%0Astrings.IndexRune(...,%20...)%20%3C%200%20or%0Astrings.IndexAny(...,%20...)%20%3E%20-1%20or%0Astrings.IndexAny(...,%20...)%20%3E=%200%20or%0Astrings.IndexAny(...,%20...)%20!=%20-1%20or%0Astrings.IndexAny(...,%20...)%20==%20-1%20or%0Astrings.IndexAny(...,%20...)%20%3C%200%20or%0Astrings.Index(...,%20...)%20%3E%20-1%20or%0Astrings.Index(...,%20...)%20%3E=%200%20or%0Astrings.Index(...,%20...)%20!=%20-1%20or%0Astrings.Index(...,%20...)%20==%20-1%20or%0Astrings.Index(...,%20...)%20%3C%200%20or%0A%0Abytes.Compare(...,%20...)%20==%200%20or%0Abytes.Compare(...,%20...)%20!=%200%20or%0A%0Afor%20:%5B~_%5D,%20:%5B~_%5D%20=%20range%20or%0A%0Afor%20true%20%7B...%7D%20or%0A%0A:%5Bs.%5D%5B:len(:%5Bs%5D)%5D%20or%0A%0Atime.Now().Sub(...)%20or%0A%0Aif%20strings.HasPrefix(:%5Bstr.%5D,%20:%5Bprefix.%5D)%20%7B%0A%20%20:%5Bstr.%5D%20=%20:%5Bstr.%5D%5Blen(:%5Bprefix%5D):%5D%0A%7D%0A%0Aor%0A%0Afor%20:%5Bi.%5D%20:=%200;%20:%5Bi.%5D%20%3C%20:%5Bn.%5D;%20:%5Bi.%5D%20%20%20%7B%0A%20%20:%5Bbs.%5D%5B:%5Bi%5D%5D%20=%20:%5Bbs.%5D%5B:%5Boffset.%5D%20:%5Bi.%5D%5D%0A%7D%0A%0Aor%0A%0Amake(...,%20:%5Bx%5D,%20:%5Bx%5D)%20or%20%0Amake(map%5B:%5B%5Bw%5D%5D%5D:%5B%5Bw%5D%5D,%200)%20or%0Amake(chan%20int,%200)%0A%0Aor%0A%0Afunc%20:%5Bfn.%5D(...)%20%7B%0A%20%20...return%0A%7D%20%0A%0Aor%20%0A%0Afunc()%20%7B%0A%20%20...return%0A%7D%0A%0Aor%0A%0A.Sub(time.Now())%0A%0Aor%0A%0Afmt.Println(%22%25s%22,%20%22...%22)%0A%0Aor%0A%0Aerrors.New(fmt.Sprintf(...))%0A%0Aor%0A%0Afor%20:%5B~_%5D,%20:%5B_.%5D%20:=%20range%20%5B%5Drune(...)%0A%0Aor%0A%0Asort.Sort(sort.IntSlice(...))%20or%0Asort.Sort(sort.StringSlice(...))%20or%0Asort.Sort(sort.StringSlice(...))%20%0A%0Aor%0A%0Aif%20:%5B~_%5D,%20ok%20:=%20:%5Bm.%5D%5B:%5Bk%5D%5D;%20ok%20%7B%0A%09:%5Bm.%5D%5B:%5Bk%5D%5D%20=%20append(:%5Bm.%5D%5B:%5Bk%5D%5D,%20%22:%5Bv1%5D%22,%20%22:%5Bv2%5D%22)%0A%7D%20else%20%7B%0A%09:%5Bm.%5D%5B:%5Bk%5D%5D%20=%20%5B%5Dstring%7B%22:%5Bv1%5D%22,%20%22:%5Bv2%5D%22%7D%0A%7D%0A%0Aor%0A%0Aif%20:%5B~_%5D,%20ok%20:=%20:%5Bm.%5D%5B:%5Bk%5D%5D;%20ok%20%7B%0A%09:%5Bm.%5D%5B:%5Bk%5D%5D%20=%20append(:%5Bm.%5D%5B:%5Bk%5D%5D,%20%22:%5Bv1%5D%22)%0A%7D%20else%20%7B%0A%09:%5Bm.%5D%5B:%5Bk%5D%5D%20=%20%5B%5Dstring%7B%22:%5Bv1%5D%22%7D%0A%7D%0A%0Aor%0A%0Aselect%20%7B%0A%09case%20%3C-time.After(0):%0A%7D%0A%0Aor%0A%0Afmt.Print(fmt.Sprintf(%22...%22,%20...))%20or%0Afmt.Println(fmt.Sprintf(%22...%22,%20...))%20or%0Afmt.Fprint(nil,%20fmt.Sprintf(%22...%22,%20...))%20or%0Afmt.Fprintln(nil,%20fmt.Sprintf(%22...%22,%20...))%20or%0Afmt.Sprint(fmt.Sprintf(%22...%22,%20...))%20or%0Afmt.Sprintln(fmt.Sprintf(%22...%22,%20...))%0A%0Aor%20%0A%0Afmt.Sprintf(%22%25s%22,%20%22...%22))
<br />
<sup>Side note: patterns run in order and results return early after finding at least 30 matches.</sup>

The great thing about code checks as queries is that it's easy to simply
delete patterns that we may not find as valuable. When I explored some
individual queries, it was reassuring to discover that _no_ patterns occur
in any of the Go repositories. For example,
[S1035](https://staticcheck.io/docs/checks#S1035) checks that there are unneeded
`http.CanonicalHeaderKey` calls on the first argument of certain functions:

```python
headers.Add(http.CanonicalHeaderKey(...), ...) or
headers.Del(http.CanonicalHeaderKey(...)) or
headers.Get(http.CanonicalHeaderKey(...)) or
headers.Set(http.CanonicalHeaderKey(...), ...)
```

There are [no matches ↗](https://sourcegraph.com/search/console?q=repogroup:go-gh-100%0A-file:test%0A-file:vendor%0Alang:go%0A%0Aheaders.Add(http.CanonicalHeaderKey(...),%20...)%20or%0Aheaders.Del(http.CanonicalHeaderKey(...))%20or%0Aheaders.Get(http.CanonicalHeaderKey(...))%20or%0Aheaders.Set(http.CanonicalHeaderKey(...),%20...)) for this pattern in the Go repositories, but there are [some matches ↗](https://sourcegraph.com/search/console?q=repogroup:go-gh-100%0A-file:test%0Alang:go%0A%0Aheaders.Add(http.CanonicalHeaderKey(...),%20...)%20or%0Aheaders.Del(http.CanonicalHeaderKey(...))%20or%0Aheaders.Get(http.CanonicalHeaderKey(...))%20or%0Aheaders.Set(http.CanonicalHeaderKey(...),%20...)) in vendored files, when we we remove the `-file:vendor` field.


### Proposing changes

The most exciting part of finding real hits with any code checking tool is that
we discover an _actionable_ way to improve the code! I've narrowed down the
search query so that it (hopefully) finds only real and uncontroversial patterns
to improve and contribute to active Go projects.

Part of an effective contribution means that we need to avoid matches in files
that are tests, vendored, or external dependencies. While anyone can use the
results to make contributions, it's important to be mindful of contributor
guidelines, clearly communicate and motivate proposed changes in pull requests,
and validate that the change passes a project's tests or CI checks. And, while the
query does exclude common test and vendored files, it's best to check that
matches occur in files that really are part of the project.

If you're interested in potentially turning the results of [the query](https://sourcegraph.com/search/console?q=repogroup:go-gh-100%0Alang:go%0A-file:test%0A-file:vendor%0A-file:Godeps%0Apatterntype:structural%0A%0Astrings.ToLower(...)%20==%20strings.ToLower(...)%20or%0Astrings.IndexRune(...,%20...)%20%3E%20-1%20or%0Astrings.IndexRune(...,%20...)%20%3E=%200%20or%0Astrings.IndexRune(...,%20...)%20!=%20-1%20or%0Astrings.IndexRune(...,%20...)%20==%20-1%20or%0Astrings.IndexRune(...,%20...)%20%3C%200%20or%0Astrings.IndexAny(...,%20...)%20%3E%20-1%20or%0Astrings.IndexAny(...,%20...)%20%3E=%200%20or%0Astrings.IndexAny(...,%20...)%20!=%20-1%20or%0Astrings.IndexAny(...,%20...)%20==%20-1%20or%0Astrings.IndexAny(...,%20...)%20%3C%200%20or%0Astrings.Index(...,%20...)%20%3E%20-1%20or%0Astrings.Index(...,%20...)%20%3E=%200%20or%0Astrings.Index(...,%20...)%20!=%20-1%20or%0Astrings.Index(...,%20...)%20==%20-1%20or%0Astrings.Index(...,%20...)%20%3C%200%20or%0A%0Abytes.Compare(...,%20...)%20==%200%20or%0Abytes.Compare(...,%20...)%20!=%200%20or%0A%0Afor%20:%5B~_%5D,%20:%5B~_%5D%20=%20range%20or%0A%0Afor%20true%20%7B...%7D%20or%0A%0A:%5Bs.%5D%5B:len(:%5Bs%5D)%5D%20or%0A%0Atime.Now().Sub(...)%20or%0A%0Aif%20strings.HasPrefix(:%5Bstr.%5D,%20:%5Bprefix.%5D)%20%7B%0A%20%20:%5Bstr.%5D%20=%20:%5Bstr.%5D%5Blen(:%5Bprefix%5D):%5D%0A%7D%0A%0Aor%0A%0Afor%20:%5Bi.%5D%20:=%200;%20:%5Bi.%5D%20%3C%20:%5Bn.%5D;%20:%5Bi.%5D%20%20%20%7B%0A%20%20:%5Bbs.%5D%5B:%5Bi%5D%5D%20=%20:%5Bbs.%5D%5B:%5Boffset.%5D%20:%5Bi.%5D%5D%0A%7D%0A%0Aor%0A%0Amake(...,%20:%5Bx%5D,%20:%5Bx%5D)%20or%20%0Amake(map%5B:%5B%5Bw%5D%5D%5D:%5B%5Bw%5D%5D,%200)%20or%0Amake(chan%20int,%200)%0A%0Aor%0A%0Afunc%20:%5Bfn.%5D(...)%20%7B%0A%20%20...return%0A%7D%20%0A%0Aor%20%0A%0Afunc()%20%7B%0A%20%20...return%0A%7D%0A%0Aor%0A%0A.Sub(time.Now())%0A%0Aor%0A%0Afmt.Println(%22%25s%22,%20%22...%22)%0A%0Aor%0A%0Aerrors.New(fmt.Sprintf(...))%0A%0Aor%0A%0Afor%20:%5B~_%5D,%20:%5B_.%5D%20:=%20range%20%5B%5Drune(...)%0A%0Aor%0A%0Asort.Sort(sort.IntSlice(...))%20or%0Asort.Sort(sort.StringSlice(...))%20or%0Asort.Sort(sort.StringSlice(...))%20%0A%0Aor%0A%0Aif%20:%5B~_%5D,%20ok%20:=%20:%5Bm.%5D%5B:%5Bk%5D%5D;%20ok%20%7B%0A%09:%5Bm.%5D%5B:%5Bk%5D%5D%20=%20append(:%5Bm.%5D%5B:%5Bk%5D%5D,%20%22:%5Bv1%5D%22,%20%22:%5Bv2%5D%22)%0A%7D%20else%20%7B%0A%09:%5Bm.%5D%5B:%5Bk%5D%5D%20=%20%5B%5Dstring%7B%22:%5Bv1%5D%22,%20%22:%5Bv2%5D%22%7D%0A%7D%0A%0Aor%0A%0Aif%20:%5B~_%5D,%20ok%20:=%20:%5Bm.%5D%5B:%5Bk%5D%5D;%20ok%20%7B%0A%09:%5Bm.%5D%5B:%5Bk%5D%5D%20=%20append(:%5Bm.%5D%5B:%5Bk%5D%5D,%20%22:%5Bv1%5D%22)%0A%7D%20else%20%7B%0A%09:%5Bm.%5D%5B:%5Bk%5D%5D%20=%20%5B%5Dstring%7B%22:%5Bv1%5D%22%7D%0A%7D%0A%0Aor%0A%0Aselect%20%7B%0A%09case%20%3C-time.After(0):%0A%7D%0A%0Aor%0A%0Afmt.Print(fmt.Sprintf(%22...%22,%20...))%20or%0Afmt.Println(fmt.Sprintf(%22...%22,%20...))%20or%0Afmt.Fprint(nil,%20fmt.Sprintf(%22...%22,%20...))%20or%0Afmt.Fprintln(nil,%20fmt.Sprintf(%22...%22,%20...))%20or%0Afmt.Sprint(fmt.Sprintf(%22...%22,%20...))%20or%0Afmt.Sprintln(fmt.Sprintf(%22...%22,%20...))%0A%0Aor%20%0A%0Afmt.Sprintf(%22%25s%22,%20%22...%22)) into open source
contributions, e-mail me at <rijnard@sourcegraph.com>, I can help.

## What's next for search queries

There are many languages and code checkers to explore, and this post only skims
the surface. We want to make high-quality code checks available for your
projects and languages. If you have a project or query in mind, feel free to
[open an issue on GitHub](https://github.com/sourcegraph/sourcegraph/issues/new?assignees=&labels=&template=feature_request.md&title=Code%20check)
with your thoughts. We're still working on enhancements for editing and
attaching messages to code checks, so stay tuned! If you find code checking
valuable and want to learn more about our work at Sourcegraph, reach us at
<feedback@sourcegraph.com>. Happy searching!

---

<sup>1</sup> Another one of my favorites tools using the same principle is [Kibit](https://github.com/jonase/kibit) for Clojure.
<br/>
<sup>2</sup> See the [structural search reference](https://docs.sourcegraph.com/@main/user/search/structural#syntax-reference) for more details about special syntax.
<br/>
<sup>3</sup> These are all the [simple static check](https://staticcheck.io/docs/checks) of the form `S<number>`, excluding `SA` and `ST` checks.
<br/>
<sup>4</sup> There's plenty of opportunity to pick other tools or languages, I picked `staticcheck` because its the nicely illustrative.</sup>
<br/>
<sup>5</sup> I do think that all those repositories should ideally run `staticcheck`, and a quick search helps make it more obvious which ones do not 😛.
