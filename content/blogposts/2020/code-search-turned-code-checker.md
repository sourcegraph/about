---
title: Code search turned code checker
authors:
  - name: Rijnard van Tonder
    url: https://twitter.com/rvtond
publishDate: 2020-10-19T14:00-07:00
tags: [blog]
slug: code-search-turned-code-checker
description: 'I find code checkers like linters and lightweight static analyzers most
valuable when they teach me better ways to code in a language or framework.'
heroImage: https://storage.googleapis.com/sourcegraph-assets/about.sourcegraph.com/blog/2020/search-check.png
published: true
---

I find code checkers like linters and lightweight static analyzers most
valuable when they teach me better ways to code in a language or framework. For
example, the Go [staticcheck](https://staticcheck.io/docs/checks#SA6005) tool
finds expensive string comparisons like:

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

These short-and-sweet replacements (even if [not *always* semantics-preserving](https://github.com/golang/go/issues/52204)) are a great way to learn framework idioms or library functions, like `strings.EqualFold` in Go.<sup>1</sup> And as a codebase grows, small inefficiencies and inconsistencies compound. Code patterns creep in that affect readability and performance—and [it matters](https://www.digitalocean.com/blog/how-to-efficiently-compare-strings-in-go/?).

## Running code checks quickly, easily, and comprehensively

Tools like `staticcheck` and linters need setting up: a local clone or project
build on your machine, or a continuous integration (CI) or editor set up. When I
learn about patterns like `strings.EqualFold`, I want to know where else they
might be lurking: in my code, in my team's code, or in open source projects. To
do that I really need a lightweight workflow, not something that needs cloning
repositories, CI or editor setup. Too much hassle. What I'm really after is a
nimble way to find patterns in a bunch of code over many repositories, quickly
and comprehensively. Something that feels a lot more like searching code than
running analyzers.

Naturally, a plaintext search with `grep` _can_ find snippets of `EqualFold`
calls. In practice though, this plaintext treatment can't offer the fidelity of
dedicated checkers that understand more about code structure and type
information. But I believe there's a midway. What about a lightweight wokflow
where that `EqualFold` check is a simpler but comparably effective _search query_
that could completely eradicate all those inefficient comparisons in my
code, my organization's code, or even all of open source code?

## Example: turning code checks into code search queries

Earlier this year Sourcegraph introduced [structural search](/blog/going-beyond-regular-expressions-with-structural-code-search/)
to search over code syntax. Structural search uses [comby](https://comby.dev) to
implement a basic building block in traditional code checkers: it interprets
programs as concrete syntax trees, not just plaintext.
Using file filters and our new support for `or` clauses,
it's possible to write configurable code checks as
self-contained search queries. Let's explore this idea!

Here's a search query inspired by
[a check](https://staticcheck.io/docs/checks#S1003) where `strings.Index`
comparisons can be replaced with `strings.Contains`:

```python
language:go
not file:test
not file:vendor
not file:Godeps

strings.Index(..., ...) > -1

or

strings.Index(..., ...) >= 0

or

strings.Index(..., ...) != -1
```

This query matches all `.go` files, excluding file paths that contain `test`,
`vendor`, and `Godeps`. It's sensible to exclude these file paths if we
want to actually propose changes to a project (more on that later). The patterns
`strings.Index(..., ....)` match syntax of `strings.Index` calls, and the `...`
ellipses are special placeholders that match at least two arguments.<sup>2</sup>
The `or` keyword separates individual patterns.

We can search over the top 100 Go repositories on GitHub (by stars) those by
adding `repogroup:go-gh-100` to the query. Have a look at some of the results:

[🔘 Find ways to improve code in popular Go projects ↗](https://sourcegraph.com/search/console?q=repogroup%3Ago-gh-100%0Alanguage%3Ago%0Anot%20file%3Atest%0Anot%20file%3Avendor%0Anot%20file%3AGodeps%0Aindex%3Aonly%0A%0A%2F%2F%20Find%20strings.Index%20calls%20that%20can%20be%20replaced%20by%20strings.Contains%0A%2F%2F%20See%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1003%0A%0Astrings.Index(...%2C%20...)%20%3E%20-1%0A%0Aor%0A%0Astrings.Index(...%2C%20...)%20%3E%3D%200%0A%0Aor%0A%0Astrings.Index(...%2C%20...)%20!%3D%20-1)<sup>Side note: our multiline query editor is in a proof-of-concept phase.</sup>

<Figure 
  src="https://storage.googleapis.com/sourcegraph-assets/about.sourcegraph.com/blog/2020/strings-dot-index-hits.png"
  alt="String Dots Index Hits"
  caption="Some search hits in projects like Go and Kubernetes where a simpler `strings.Contains` can be used instead."
/>
The query finds matches in some of the most popular Go projects in a
couple of seconds. An exhaustive search shows that there are more than 10 matches
at the time of writing. For this flavor of syntactic change, I have a good sense
that these are real hits of code that we can fix up.


## Turning more code checks into search queries

Because structural search only looks at syntax, it can't yet operate at the
level of a tool like `staticcheck`, which knows more about static properties
like type information and variable scope to implement checks. At the same time,
`staticcheck` isn't a search tool, it's an entire toolset that includes a suite
of pre-written, high-precision checks that's very effective in certain
workflows, like CI. The question is not necessarily whether a search tool can
achieve parity with a tool like `staticcheck`. But given the overlap with
now-expressible search queries, I wanted to know how this search workflow stacks
up: how far can we push structural code search to find similarly _actionable_
code checks? I.e., checks that match real cases of code waiting to be improved,
minus the hassle.

### Approach

So, taking inspiration from `staticcheck`, I wanted to see how many of its
checks translate to search queries that I could have high confidence in (i.e.,
all patterns find legitimate issues; zero or very-near-zero false positives). I
chose to look at `staticcheck` for its clear documentation, which made it easy
to find examples.<sup>3</sup> I ran my search queries against `staticcheck`'s
own test files to check that they don't match unintended patterns (false
positives) and don't miss real patterns (false negatives). Each check may have
more than one syntactic _variant_, so I tried to implement patterns for as many
variants as I could find in tests. It's a neat exercise to develop patterns
against the reference tests and discover which variants to cover, all in a
self-contained search webapp. Here's an example where the query matches all the
true hits in the test file, annotated with `// want strings.Contains ...`:

<Figure 
  src="https://storage.googleapis.com/sourcegraph-assets/about.sourcegraph.com/blog/2020/multiline-query-editor.png" 
  alt="Multiline Query Editor" 
/>

[🔘 Example query to match known patterns in test files↗](https://sourcegraph.com/search/console?q=repo%3A%5Egithub%5C.com%2Fdominikh%2Fgo-tools%24%20%0Alang%3Ago%0Afile%3Atest%0A%0Astrings.IndexRune(...%2C%20...)%20%3E%20-1%20or%0Astrings.IndexRune(...%2C%20...)%20%3E%3D%200%20or%0Astrings.IndexRune(...%2C%20...)%20!%3D%20-1%20or%0Astrings.IndexRune(...%2C%20...)%20%3D%3D%20-1%20or%0Astrings.IndexRune(...%2C%20...)%20%3C%200%20or%0Astrings.IndexAny(...%2C%20...)%20%3E%20-1%20or%0Astrings.IndexAny(...%2C%20...)%20%3E%3D%200%20or%0Astrings.IndexAny(...%2C%20...)%20!%3D%20-1%20or%0Astrings.IndexAny(...%2C%20...)%20%3D%3D%20-1%20or%0Astrings.IndexAny(...%2C%20...)%20%3C%200%20or%0Astrings.Index(...%2C%20...)%20%3E%20-1%20or%0Astrings.Index(...%2C%20...)%20%3E%3D%200%20or%0Astrings.Index(...%2C%20...)%20!%3D%20-1%20or%0Astrings.Index(...%2C%20...)%20%3D%3D%20-1%20or%0Astrings.Index(...%2C%20...)%20%3C%200%0A)

Using the test files isn't a guarantee that I've implemented all the checks or
that it's entirely precise, but it adds a lot more confidence than inferring
patterns only from documentation.

### Results

Without making any claims about completeness, I was able to implement
at least one variant for 20 out of 34 checks that I feel confident
about. I relied only on patterns in `staticcheck`'s test data to discover syntactic
variants for checks, so I don't know if I covered all the patterns that
`staticcheck` implements in its code.

The majority of checks that I couldn't write required type information to
implement correctly (13 of 34). Other checks I couldn't write required more
complex syntax matching rules (8 of 34). This table roughly quantifies the
expressive needs for implementing checks:

<TableWrapper>
| Description                      | # of checks |
|----------------------------------|-------------|
| Total                            | 34          |
| Works (at least one variant)     | 20          |
| Works (all variants)             | 11          |
| Needs type info                  | 13          |
| Needs additional syntax matching | 8           |
</TableWrapper>

<sup>Note that some checks require type info _and_ additional syntax matching.
Also, one working variant for a check may not require type info, but another
variant for the same check may. I.e., the values overlap and do not sum to
Total.</sup>

You can see and run the final query here:

[🔘 Run the query for all code checks on popular Go projects ↗](https://sourcegraph.com/search/console?q=repogroup%3Ago-gh-100%0Alang%3Ago%0Anot%20file%3Atest%0Anot%20file%3Avendor%0Anot%20file%3AGodeps%0Aindex%3Aonly%0A%0A%2F%2F%20Inefficient%20string%20comparison%20with%20strings.ToLower%20or%20strings.ToUpper%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23SA6005%0Aif%20strings.ToLower(...)%20%3D%3D%20strings.ToLower(...)%20or%0Aif%20strings.ToLower(...)%20!%3D%20strings.ToLower(...)%20or%0Aif%20strings.ToUpper(...)%20%3D%3D%20strings.ToUpper(...)%20or%0Aif%20strings.ToUpper(...)%20!%3D%20strings.ToUpper(...)%20or%0A%0A%2F%2F%20Replace%20call%20to%20strings.Index%20with%20strings.Contains%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1003%0Astrings.IndexRune(...%2C%20...)%20%3E%20-1%20or%0Astrings.IndexRune(...%2C%20...)%20%3E%3D%200%20or%0Astrings.IndexRune(...%2C%20...)%20!%3D%20-1%20or%0Astrings.IndexRune(...%2C%20...)%20%3D%3D%20-1%20or%0Astrings.IndexRune(...%2C%20...)%20%3C%200%20or%0Astrings.IndexAny(...%2C%20...)%20%3E%20-1%20or%0Astrings.IndexAny(...%2C%20...)%20%3E%3D%200%20or%0Astrings.IndexAny(...%2C%20...)%20!%3D%20-1%20or%0Astrings.IndexAny(...%2C%20...)%20%3D%3D%20-1%20or%0Astrings.IndexAny(...%2C%20...)%20%3C%200%20or%0Astrings.Index(...%2C%20...)%20%3E%20-1%20or%0Astrings.Index(...%2C%20...)%20%3E%3D%200%20or%0Astrings.Index(...%2C%20...)%20!%3D%20-1%20or%0Astrings.Index(...%2C%20...)%20%3D%3D%20-1%20or%0Astrings.Index(...%2C%20...)%20%3C%200%20or%0A%0A%2F%2F%20Replace%20call%20to%20bytes.Compare%20with%20bytes.Equal%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1004%0Abytes.Compare(...%2C%20...)%20%3D%3D%200%20or%0Abytes.Compare(...%2C%20...)%20!%3D%200%20or%0A%0A%2F%2F%20Drop%20unnecessary%20use%20of%20the%20blank%20identifier%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1005%0Afor%20%3A%5B~_%5D%2C%20%3A%5B~_%5D%20%3D%20range%20or%0Afor%20%3A%5B~_%5D%20%3D%20range%20or%0A%0A%2F%2F%20Use%20for%20%7B%20...%20%7D%20for%20infinite%20loops%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1006%0Afor%20true%20%7B...%7D%20or%0A%0A%2F%2F%20Omit%20default%20slice%20index%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1010%0A%3A%5Bs.%5D%5B%3Alen(%3A%5Bs%5D)%5D%20or%0A%0A%2F%2F%20Replace%20time.Now().Sub(x)%20with%20time.Since(x)%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1012%0Atime.Now().Sub(...)%20or%0A%0A%2F%2F%20Use%20copy%20for%20sliding%20elements%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1018%0Afor%20%3A%5Bi.%5D%20%3A%3D%200%3B%20%3A%5Bi.%5D%20%3C%20%3A%5Bn.%5D%3B%20%3A%5Bi.%5D%20%20%20%7B%0A%20%20%3A%5Bbs.%5D%5B%3A%5Bi%5D%5D%20%3D%20%3A%5Bbs.%5D%5B%3A%5Boffset.%5D%20%3A%5Bi.%5D%5D%0A%7D%0A%0Aor%0A%0A%2F%2F%20Simplify%20make%20call%20by%20omitting%20redundant%20arguments%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1019%0Amake(...%2C%20%3A%5Bx%5D%2C%20%3A%5Bx%5D)%20or%20%0Amake(map%5B%3A%5B%5Bw%5D%5D%5D%3A%5B%5Bw%5D%5D%2C%200)%20or%0Amake(chan%20int%2C%200)%20or%0A%0A%2F%2F%20Omit%20redundant%20nil%20check%20in%20type%20assertion%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1020%0Aif%20%3A%5B_.%5D%2C%20ok%20%3A%3D%20%3A%5Bi.%5D.(%3A%5BT%5D)%3B%20ok%20%26%26%20%3A%5Bi.%5D%20!%3D%20nil%20%7B%20...%20%7D%20or%0Aif%20%3A%5B_.%5D%2C%20ok%20%3A%3D%20%3A%5Bi.%5D.(%3A%5BT%5D)%3B%20%3A%5Bi.%5D%20!%3D%20nil%20%26%26%20ok%20%7B%20...%20%7D%20or%0A%0Aif%20%3A%5Bi.%5D%20!%3D%20nil%20%7B%0A%20%20if%20%3A%5B_.%5D%2C%20ok%20%3A%3D%20%3A%5Bi.%5D.(%3A%5BT%5D)%3B%20ok%20%7B%20...%20%7D%0A%7D%0A%0Aor%0A%0A%2F%2F%20Omit%20redundant%20control%20flow%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1023%0Afunc%20%3A%5Bfn.%5D(...)%20%7B...%20return%20%7D%20%20or%20%0Afunc()%20%7B...%20return%20%7D%20or%0A%0A%2F%2F%20Replace%20x.Sub(time.Now())%20with%20time.Until(x)%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1024%0A.Sub(time.Now())%20or%0A%0A%2F%2F%20Don%27t%20use%20fmt.Sprintf(%22%25s%22%2C%20x)%20unnecessarily%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1025%0Afmt.Println(%22%25s%22%2C%20%22...%22)%20or%0A%0A%2F%2F%20Simplify%20error%20construction%20with%20fmt.Errorf%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1028%0Aerrors.New(fmt.Sprintf(...))%20or%0A%0A%2F%2F%20Range%20over%20the%20string%20directly%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1029%0Afor%20%3A%5B~_%5D%2C%20%3A%5B_.%5D%20%3A%3D%20range%20%5B%5Drune(...)%20or%0A%0A%2F%2F%20Use%20sort.Ints(x)%2C%20sort.Float64s(x)%2C%20and%20sort.Strings(x)%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1032%0Asort.Sort(sort.IntSlice(...))%20or%0Asort.Sort(sort.Float64Slice(...))%20or%0Asort.Sort(sort.StringSlice(...))%20or%0A%0A%2F%2F%20Redundant%20call%20to%20net%2Fhttp.CanonicalHeaderKey%20in%20method%20call%20on%20net%2Fhttp.Header%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1035%0Aheaders.Add(http.CanonicalHeaderKey(...)%2C%20...)%20or%0Aheaders.Del(http.CanonicalHeaderKey(...))%20or%0Aheaders.Get(http.CanonicalHeaderKey(...))%20or%0Aheaders.Set(http.CanonicalHeaderKey(...)%2C%20...)%20or%0A%0A%2F%2F%20Unnecessary%20guard%20around%20map%20access%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1036%0Aif%20%3A%5B~_%5D%2C%20ok%20%3A%3D%20%3A%5Bm.%5D%5B%3A%5Bk%5D%5D%3B%20ok%20%7B%0A%20%20%20%20%3A%5Bm.%5D%5B%3A%5Bk%5D%5D%20%2B%3D%20%3A%5Bx.%5D%0A%7D%20else%20%7B%0A%20%20%20%20%3A%5Bm.%5D%5B%3A%5Bk%5D%5D%20%3D%20%3A%5Bx.%5D%0A%7D%0A%0Aor%0A%0Aif%20%3A%5B~_%5D%2C%20ok%20%3A%3D%20%3A%5Bm.%5D%5B%3A%5Bk%5D%5D%3B%20ok%20%7B%0A%20%20%20%20%3A%5Bm.%5D%5B%3A%5Bk%5D%5D%2B%2B%0A%7D%20else%20%7B%0A%20%20%20%20%3A%5Bm.%5D%5B%3A%5Bk%5D%5D%20%3D%201%0A%7D%0A%0Aor%0A%0Aif%20%3A%5B~_%5D%2C%20ok%20%3A%3D%20%3A%5Bm.%5D%5B%3A%5Bk%5D%5D%3B%20ok%20%7B%0A%09%3A%5Bm.%5D%5B%3A%5Bk%5D%5D%20%3D%20append(%3A%5Bm.%5D%5B%3A%5Bk%5D%5D%2C%20%22%3A%5Bv1%5D%22)%0A%7D%20else%20%7B%0A%09%3A%5Bm.%5D%5B%3A%5Bk%5D%5D%20%3D%20%5B%5Dstring%7B%22%3A%5Bv1%5D%22%7D%0A%7D%0A%0Aor%0A%0Aif%20%3A%5B~_%5D%2C%20ok%20%3A%3D%20%3A%5Bm.%5D%5B%3A%5Bk%5D%5D%3B%20ok%20%7B%0A%09%3A%5Bm.%5D%5B%3A%5Bk%5D%5D%20%3D%20append(%3A%5Bm.%5D%5B%3A%5Bk%5D%5D%2C%20%22%3A%5Bv1%5D%22%2C%20%22%3A%5Bv2%5D%22)%0A%7D%20else%20%7B%0A%09%3A%5Bm.%5D%5B%3A%5Bk%5D%5D%20%3D%20%5B%5Dstring%7B%22%3A%5Bv1%5D%22%2C%20%22%3A%5Bv2%5D%22%7D%0A%7D%0A%0Aor%0A%0A%2F%2F%20Elaborate%20way%20of%20sleeping%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1037%0Aselect%20%7B%0A%09case%20%3C-time.After(0)%3A%0A%7D%0A%0Aor%0A%0A%2F%2F%20Unnecessarily%20complex%20way%20of%20printing%20formatted%20string%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1038%0Afmt.Print(fmt.Sprintf(%22...%22%2C%20...))%20or%0Afmt.Println(fmt.Sprintf(%22...%22%2C%20...))%20or%0Afmt.Fprint(nil%2C%20fmt.Sprintf(%22...%22%2C%20...))%20or%0Afmt.Fprintln(nil%2C%20fmt.Sprintf(%22...%22%2C%20...))%20or%0Afmt.Sprint(fmt.Sprintf(%22...%22%2C%20...))%20or%0Afmt.Sprintln(fmt.Sprintf(%22...%22%2C%20...))%20or%20%0A%0A%2F%2F%20Unnecessary%20use%20of%20fmt.Sprint%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1039%0Afmt.Sprintf(%22%25s%22%2C%20%22...%22))
<br />
<sup>Side note: patterns run in order and search stops after finding at least 30 matches. Feel free to delete some patterns to see others in action.</sup>

It was tempting to compare more directly by downloading the
100 Go repositories to disk, running `staticcheck`, and comparing matches.
For `staticcheck` to be effective, the project typically needs to be built first
(my experience was that running `staticcheck` on individual files can be
hit-and-miss, and understandably so). I didn't like the idea of doing all that
work, so I punted. That's really the takeaway of these results: many useful checks can fit into
a lightweight search workflow that scales and generalizes to a lot of projects, without
ad-hoc setup for project builds and dedicated tools.<sup>5</sup>

Extending search queries to access static properties like type information is a also
natural extension for writing better code checks, and an area of [code intelligence](https://docs.sourcegraph.com/code_intelligence)
work that we're exploring.


### Code checks beyond dedicated tools

The direct comparison to `staticcheck` is interesting, but the ease of
a search workflow means there are also different benefits over dedicated tools. For
example, in just the last couple of weeks I learned about a more elegant way to
write code for [appending bytes in Go](https://golang.org/ref/spec#Appending_and_copying_slices).
A pattern like this:

```go
b = append(b, 'f', 'o', 'o')
```

can instead be written:

```go
b = append(b, "foo"...)
```

This one isn't available in `staticcheck`, but I could immediately implement the check and find hits using Sourcegraph:

[🔘 Find appends of three or more bytes ↗](https://sourcegraph.com/search?q=repogroup:go-gh-100+lang:go+index:only+append%28...%2C+%27...%27%2C+%27...%27%2C+%27...%27%29&patternType=structural)

There's also the notion of project-specific checks
that will never make it into a general tool like `staticcheck`. For example, in
our Sourcegraph codebase we've mostly moved away from testing values with `!=` and
instead use [`cmp.Diff`](https://godoc.org/github.com/google/go-cmp/cmp#Diff).
But I know there are still places where we do comparisons the old way. This
query highlights some of the remnants, and how how the inner block uses the
compared values:

[{`🔘 file:test if want != got {...} ↗`}](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24+file:test+if+want+%21%3D+got+%7B...%7D&patternType=structural)

So code checks can also be specific and customizable to your organization that
you won't find in off-the-shelf tools.

## Takeaway

Code search can be so much more than finding your favorite provider called
`ChocolateCake` identifier[↗](https://sourcegraph.com/search?q=ChocolateCake&patternType=literal).
It can be a lightweight workflow for revealing short-and-sweet ways to make your
code better. Perhaps the most powerful idea is that a universal code search can
wholesale find and eradicate the code slips we're always bound to make.

Starting small, the solution could look like a search query that finds issues in
active and popular Go projects at just the push of a button. Why not start
there? I'm excited about the idea that we can run that query for everything
at once:

[🔘 Run all the code checks on popular Go projects ↗](https://sourcegraph.com/search/console?q=repogroup%3Ago-gh-100%0Alang%3Ago%0Anot%20file%3Atest%0Anot%20file%3Avendor%0Anot%20file%3AGodeps%0Aindex%3Aonly%0A%0A%2F%2F%20Inefficient%20string%20comparison%20with%20strings.ToLower%20or%20strings.ToUpper%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23SA6005%0Aif%20strings.ToLower(...)%20%3D%3D%20strings.ToLower(...)%20or%0Aif%20strings.ToLower(...)%20!%3D%20strings.ToLower(...)%20or%0Aif%20strings.ToUpper(...)%20%3D%3D%20strings.ToUpper(...)%20or%0Aif%20strings.ToUpper(...)%20!%3D%20strings.ToUpper(...)%20or%0A%0A%2F%2F%20Replace%20call%20to%20strings.Index%20with%20strings.Contains%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1003%0Astrings.IndexRune(...%2C%20...)%20%3E%20-1%20or%0Astrings.IndexRune(...%2C%20...)%20%3E%3D%200%20or%0Astrings.IndexRune(...%2C%20...)%20!%3D%20-1%20or%0Astrings.IndexRune(...%2C%20...)%20%3D%3D%20-1%20or%0Astrings.IndexRune(...%2C%20...)%20%3C%200%20or%0Astrings.IndexAny(...%2C%20...)%20%3E%20-1%20or%0Astrings.IndexAny(...%2C%20...)%20%3E%3D%200%20or%0Astrings.IndexAny(...%2C%20...)%20!%3D%20-1%20or%0Astrings.IndexAny(...%2C%20...)%20%3D%3D%20-1%20or%0Astrings.IndexAny(...%2C%20...)%20%3C%200%20or%0Astrings.Index(...%2C%20...)%20%3E%20-1%20or%0Astrings.Index(...%2C%20...)%20%3E%3D%200%20or%0Astrings.Index(...%2C%20...)%20!%3D%20-1%20or%0Astrings.Index(...%2C%20...)%20%3D%3D%20-1%20or%0Astrings.Index(...%2C%20...)%20%3C%200%20or%0A%0A%2F%2F%20Replace%20call%20to%20bytes.Compare%20with%20bytes.Equal%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1004%0Abytes.Compare(...%2C%20...)%20%3D%3D%200%20or%0Abytes.Compare(...%2C%20...)%20!%3D%200%20or%0A%0A%2F%2F%20Drop%20unnecessary%20use%20of%20the%20blank%20identifier%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1005%0Afor%20%3A%5B~_%5D%2C%20%3A%5B~_%5D%20%3D%20range%20or%0Afor%20%3A%5B~_%5D%20%3D%20range%20or%0A%0A%2F%2F%20Use%20for%20%7B%20...%20%7D%20for%20infinite%20loops%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1006%0Afor%20true%20%7B...%7D%20or%0A%0A%2F%2F%20Omit%20default%20slice%20index%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1010%0A%3A%5Bs.%5D%5B%3Alen(%3A%5Bs%5D)%5D%20or%0A%0A%2F%2F%20Replace%20time.Now().Sub(x)%20with%20time.Since(x)%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1012%0Atime.Now().Sub(...)%20or%0A%0A%2F%2F%20Use%20copy%20for%20sliding%20elements%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1018%0Afor%20%3A%5Bi.%5D%20%3A%3D%200%3B%20%3A%5Bi.%5D%20%3C%20%3A%5Bn.%5D%3B%20%3A%5Bi.%5D%20%20%20%7B%0A%20%20%3A%5Bbs.%5D%5B%3A%5Bi%5D%5D%20%3D%20%3A%5Bbs.%5D%5B%3A%5Boffset.%5D%20%3A%5Bi.%5D%5D%0A%7D%0A%0Aor%0A%0A%2F%2F%20Simplify%20make%20call%20by%20omitting%20redundant%20arguments%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1019%0Amake(...%2C%20%3A%5Bx%5D%2C%20%3A%5Bx%5D)%20or%20%0Amake(map%5B%3A%5B%5Bw%5D%5D%5D%3A%5B%5Bw%5D%5D%2C%200)%20or%0Amake(chan%20int%2C%200)%20or%0A%0A%2F%2F%20Omit%20redundant%20nil%20check%20in%20type%20assertion%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1020%0Aif%20%3A%5B_.%5D%2C%20ok%20%3A%3D%20%3A%5Bi.%5D.(%3A%5BT%5D)%3B%20ok%20%26%26%20%3A%5Bi.%5D%20!%3D%20nil%20%7B%20...%20%7D%20or%0Aif%20%3A%5B_.%5D%2C%20ok%20%3A%3D%20%3A%5Bi.%5D.(%3A%5BT%5D)%3B%20%3A%5Bi.%5D%20!%3D%20nil%20%26%26%20ok%20%7B%20...%20%7D%20or%0A%0Aif%20%3A%5Bi.%5D%20!%3D%20nil%20%7B%0A%20%20if%20%3A%5B_.%5D%2C%20ok%20%3A%3D%20%3A%5Bi.%5D.(%3A%5BT%5D)%3B%20ok%20%7B%20...%20%7D%0A%7D%0A%0Aor%0A%0A%2F%2F%20Omit%20redundant%20control%20flow%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1023%0Afunc%20%3A%5Bfn.%5D(...)%20%7B...%20return%20%7D%20%20or%20%0Afunc()%20%7B...%20return%20%7D%20or%0A%0A%2F%2F%20Replace%20x.Sub(time.Now())%20with%20time.Until(x)%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1024%0A.Sub(time.Now())%20or%0A%0A%2F%2F%20Don%27t%20use%20fmt.Sprintf(%22%25s%22%2C%20x)%20unnecessarily%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1025%0Afmt.Println(%22%25s%22%2C%20%22...%22)%20or%0A%0A%2F%2F%20Simplify%20error%20construction%20with%20fmt.Errorf%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1028%0Aerrors.New(fmt.Sprintf(...))%20or%0A%0A%2F%2F%20Range%20over%20the%20string%20directly%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1029%0Afor%20%3A%5B~_%5D%2C%20%3A%5B_.%5D%20%3A%3D%20range%20%5B%5Drune(...)%20or%0A%0A%2F%2F%20Use%20sort.Ints(x)%2C%20sort.Float64s(x)%2C%20and%20sort.Strings(x)%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1032%0Asort.Sort(sort.IntSlice(...))%20or%0Asort.Sort(sort.Float64Slice(...))%20or%0Asort.Sort(sort.StringSlice(...))%20or%0A%0A%2F%2F%20Redundant%20call%20to%20net%2Fhttp.CanonicalHeaderKey%20in%20method%20call%20on%20net%2Fhttp.Header%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1035%0Aheaders.Add(http.CanonicalHeaderKey(...)%2C%20...)%20or%0Aheaders.Del(http.CanonicalHeaderKey(...))%20or%0Aheaders.Get(http.CanonicalHeaderKey(...))%20or%0Aheaders.Set(http.CanonicalHeaderKey(...)%2C%20...)%20or%0A%0A%2F%2F%20Unnecessary%20guard%20around%20map%20access%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1036%0Aif%20%3A%5B~_%5D%2C%20ok%20%3A%3D%20%3A%5Bm.%5D%5B%3A%5Bk%5D%5D%3B%20ok%20%7B%0A%20%20%20%20%3A%5Bm.%5D%5B%3A%5Bk%5D%5D%20%2B%3D%20%3A%5Bx.%5D%0A%7D%20else%20%7B%0A%20%20%20%20%3A%5Bm.%5D%5B%3A%5Bk%5D%5D%20%3D%20%3A%5Bx.%5D%0A%7D%0A%0Aor%0A%0Aif%20%3A%5B~_%5D%2C%20ok%20%3A%3D%20%3A%5Bm.%5D%5B%3A%5Bk%5D%5D%3B%20ok%20%7B%0A%20%20%20%20%3A%5Bm.%5D%5B%3A%5Bk%5D%5D%2B%2B%0A%7D%20else%20%7B%0A%20%20%20%20%3A%5Bm.%5D%5B%3A%5Bk%5D%5D%20%3D%201%0A%7D%0A%0Aor%0A%0Aif%20%3A%5B~_%5D%2C%20ok%20%3A%3D%20%3A%5Bm.%5D%5B%3A%5Bk%5D%5D%3B%20ok%20%7B%0A%09%3A%5Bm.%5D%5B%3A%5Bk%5D%5D%20%3D%20append(%3A%5Bm.%5D%5B%3A%5Bk%5D%5D%2C%20%22%3A%5Bv1%5D%22)%0A%7D%20else%20%7B%0A%09%3A%5Bm.%5D%5B%3A%5Bk%5D%5D%20%3D%20%5B%5Dstring%7B%22%3A%5Bv1%5D%22%7D%0A%7D%0A%0Aor%0A%0Aif%20%3A%5B~_%5D%2C%20ok%20%3A%3D%20%3A%5Bm.%5D%5B%3A%5Bk%5D%5D%3B%20ok%20%7B%0A%09%3A%5Bm.%5D%5B%3A%5Bk%5D%5D%20%3D%20append(%3A%5Bm.%5D%5B%3A%5Bk%5D%5D%2C%20%22%3A%5Bv1%5D%22%2C%20%22%3A%5Bv2%5D%22)%0A%7D%20else%20%7B%0A%09%3A%5Bm.%5D%5B%3A%5Bk%5D%5D%20%3D%20%5B%5Dstring%7B%22%3A%5Bv1%5D%22%2C%20%22%3A%5Bv2%5D%22%7D%0A%7D%0A%0Aor%0A%0A%2F%2F%20Elaborate%20way%20of%20sleeping%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1037%0Aselect%20%7B%0A%09case%20%3C-time.After(0)%3A%0A%7D%0A%0Aor%0A%0A%2F%2F%20Unnecessarily%20complex%20way%20of%20printing%20formatted%20string%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1038%0Afmt.Print(fmt.Sprintf(%22...%22%2C%20...))%20or%0Afmt.Println(fmt.Sprintf(%22...%22%2C%20...))%20or%0Afmt.Fprint(nil%2C%20fmt.Sprintf(%22...%22%2C%20...))%20or%0Afmt.Fprintln(nil%2C%20fmt.Sprintf(%22...%22%2C%20...))%20or%0Afmt.Sprint(fmt.Sprintf(%22...%22%2C%20...))%20or%0Afmt.Sprintln(fmt.Sprintf(%22...%22%2C%20...))%20or%20%0A%0A%2F%2F%20Unnecessary%20use%20of%20fmt.Sprint%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1039%0Afmt.Sprintf(%22%25s%22%2C%20%22...%22))
<br />

The great thing about code checks as queries is that it's easy to simply
delete patterns that we don't find as valuable. When I explored some
individual queries, it was also reassuring to discover that _no_ patterns occur
in any of the Go repositories. For example,
[S1035](https://staticcheck.io/docs/checks#S1035) checks that there are unneeded
`http.CanonicalHeaderKey` calls on the first argument of certain functions:

```python
headers.Add(http.CanonicalHeaderKey(...), ...) or
headers.Del(http.CanonicalHeaderKey(...)) or
headers.Get(http.CanonicalHeaderKey(...)) or
headers.Set(http.CanonicalHeaderKey(...), ...)
```

There are [no matches ↗](https://sourcegraph.com/search/console?q=repogroup%3Ago-gh-100%0Alang%3Ago%0Anot%20file%3Atest%0Anot%20file%3Avendor%0Anot%20file%3AGodeps%0Aindex%3Aonly%0A%0A%2F%2F%20Good%20thing%3A%20there%20are%20no%20matches%20for%20these%20patterns%20in%20the%20top%20100%20Go%20repositories%0Aheaders.Add(http.CanonicalHeaderKey(...)%2C%20...)%20or%0Aheaders.Del(http.CanonicalHeaderKey(...))%20or%0Aheaders.Get(http.CanonicalHeaderKey(...))%20or%0Aheaders.Set(http.CanonicalHeaderKey(...)%2C%20...)) for this pattern in the Go repositories, but there are [some matches ↗](https://sourcegraph.com/search/console?q=repogroup%3Ago-gh-100%0Alang%3Ago%0Anot%20file%3Atest%0Aindex%3Aonly%0A%0A%2F%2F%20There%20are%20some%20matches%20for%20these%20patterns%20in%20vendored%20files%0Aheaders.Add(http.CanonicalHeaderKey(...)%2C%20...)%20or%0Aheaders.Del(http.CanonicalHeaderKey(...))%20or%0Aheaders.Get(http.CanonicalHeaderKey(...))%20or%0Aheaders.Set(http.CanonicalHeaderKey(...)%2C%20...)) in vendored files, when we we remove the `not file:vendor` filter.


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

If you're interested in turning the results of [the complete query](https://sourcegraph.com/search/console?q=repogroup%3Ago-gh-100%0Alang%3Ago%0Anot%20file%3Atest%0Anot%20file%3Avendor%0Anot%20file%3AGodeps%0Aindex%3Aonly%0A%0A%2F%2F%20Inefficient%20string%20comparison%20with%20strings.ToLower%20or%20strings.ToUpper%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23SA6005%0Aif%20strings.ToLower(...)%20%3D%3D%20strings.ToLower(...)%20or%0Aif%20strings.ToLower(...)%20!%3D%20strings.ToLower(...)%20or%0Aif%20strings.ToUpper(...)%20%3D%3D%20strings.ToUpper(...)%20or%0Aif%20strings.ToUpper(...)%20!%3D%20strings.ToUpper(...)%20or%0A%0A%2F%2F%20Replace%20call%20to%20strings.Index%20with%20strings.Contains%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1003%0Astrings.IndexRune(...%2C%20...)%20%3E%20-1%20or%0Astrings.IndexRune(...%2C%20...)%20%3E%3D%200%20or%0Astrings.IndexRune(...%2C%20...)%20!%3D%20-1%20or%0Astrings.IndexRune(...%2C%20...)%20%3D%3D%20-1%20or%0Astrings.IndexRune(...%2C%20...)%20%3C%200%20or%0Astrings.IndexAny(...%2C%20...)%20%3E%20-1%20or%0Astrings.IndexAny(...%2C%20...)%20%3E%3D%200%20or%0Astrings.IndexAny(...%2C%20...)%20!%3D%20-1%20or%0Astrings.IndexAny(...%2C%20...)%20%3D%3D%20-1%20or%0Astrings.IndexAny(...%2C%20...)%20%3C%200%20or%0Astrings.Index(...%2C%20...)%20%3E%20-1%20or%0Astrings.Index(...%2C%20...)%20%3E%3D%200%20or%0Astrings.Index(...%2C%20...)%20!%3D%20-1%20or%0Astrings.Index(...%2C%20...)%20%3D%3D%20-1%20or%0Astrings.Index(...%2C%20...)%20%3C%200%20or%0A%0A%2F%2F%20Replace%20call%20to%20bytes.Compare%20with%20bytes.Equal%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1004%0Abytes.Compare(...%2C%20...)%20%3D%3D%200%20or%0Abytes.Compare(...%2C%20...)%20!%3D%200%20or%0A%0A%2F%2F%20Drop%20unnecessary%20use%20of%20the%20blank%20identifier%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1005%0Afor%20%3A%5B~_%5D%2C%20%3A%5B~_%5D%20%3D%20range%20or%0Afor%20%3A%5B~_%5D%20%3D%20range%20or%0A%0A%2F%2F%20Use%20for%20%7B%20...%20%7D%20for%20infinite%20loops%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1006%0Afor%20true%20%7B...%7D%20or%0A%0A%2F%2F%20Omit%20default%20slice%20index%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1010%0A%3A%5Bs.%5D%5B%3Alen(%3A%5Bs%5D)%5D%20or%0A%0A%2F%2F%20Replace%20time.Now().Sub(x)%20with%20time.Since(x)%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1012%0Atime.Now().Sub(...)%20or%0A%0A%2F%2F%20Use%20copy%20for%20sliding%20elements%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1018%0Afor%20%3A%5Bi.%5D%20%3A%3D%200%3B%20%3A%5Bi.%5D%20%3C%20%3A%5Bn.%5D%3B%20%3A%5Bi.%5D%20%20%20%7B%0A%20%20%3A%5Bbs.%5D%5B%3A%5Bi%5D%5D%20%3D%20%3A%5Bbs.%5D%5B%3A%5Boffset.%5D%20%3A%5Bi.%5D%5D%0A%7D%0A%0Aor%0A%0A%2F%2F%20Simplify%20make%20call%20by%20omitting%20redundant%20arguments%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1019%0Amake(...%2C%20%3A%5Bx%5D%2C%20%3A%5Bx%5D)%20or%20%0Amake(map%5B%3A%5B%5Bw%5D%5D%5D%3A%5B%5Bw%5D%5D%2C%200)%20or%0Amake(chan%20int%2C%200)%20or%0A%0A%2F%2F%20Omit%20redundant%20nil%20check%20in%20type%20assertion%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1020%0Aif%20%3A%5B_.%5D%2C%20ok%20%3A%3D%20%3A%5Bi.%5D.(%3A%5BT%5D)%3B%20ok%20%26%26%20%3A%5Bi.%5D%20!%3D%20nil%20%7B%20...%20%7D%20or%0Aif%20%3A%5B_.%5D%2C%20ok%20%3A%3D%20%3A%5Bi.%5D.(%3A%5BT%5D)%3B%20%3A%5Bi.%5D%20!%3D%20nil%20%26%26%20ok%20%7B%20...%20%7D%20or%0A%0Aif%20%3A%5Bi.%5D%20!%3D%20nil%20%7B%0A%20%20if%20%3A%5B_.%5D%2C%20ok%20%3A%3D%20%3A%5Bi.%5D.(%3A%5BT%5D)%3B%20ok%20%7B%20...%20%7D%0A%7D%0A%0Aor%0A%0A%2F%2F%20Omit%20redundant%20control%20flow%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1023%0Afunc%20%3A%5Bfn.%5D(...)%20%7B...%20return%20%7D%20%20or%20%0Afunc()%20%7B...%20return%20%7D%20or%0A%0A%2F%2F%20Replace%20x.Sub(time.Now())%20with%20time.Until(x)%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1024%0A.Sub(time.Now())%20or%0A%0A%2F%2F%20Don%27t%20use%20fmt.Sprintf(%22%25s%22%2C%20x)%20unnecessarily%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1025%0Afmt.Println(%22%25s%22%2C%20%22...%22)%20or%0A%0A%2F%2F%20Simplify%20error%20construction%20with%20fmt.Errorf%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1028%0Aerrors.New(fmt.Sprintf(...))%20or%0A%0A%2F%2F%20Range%20over%20the%20string%20directly%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1029%0Afor%20%3A%5B~_%5D%2C%20%3A%5B_.%5D%20%3A%3D%20range%20%5B%5Drune(...)%20or%0A%0A%2F%2F%20Use%20sort.Ints(x)%2C%20sort.Float64s(x)%2C%20and%20sort.Strings(x)%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1032%0Asort.Sort(sort.IntSlice(...))%20or%0Asort.Sort(sort.Float64Slice(...))%20or%0Asort.Sort(sort.StringSlice(...))%20or%0A%0A%2F%2F%20Redundant%20call%20to%20net%2Fhttp.CanonicalHeaderKey%20in%20method%20call%20on%20net%2Fhttp.Header%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1035%0Aheaders.Add(http.CanonicalHeaderKey(...)%2C%20...)%20or%0Aheaders.Del(http.CanonicalHeaderKey(...))%20or%0Aheaders.Get(http.CanonicalHeaderKey(...))%20or%0Aheaders.Set(http.CanonicalHeaderKey(...)%2C%20...)%20or%0A%0A%2F%2F%20Unnecessary%20guard%20around%20map%20access%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1036%0Aif%20%3A%5B~_%5D%2C%20ok%20%3A%3D%20%3A%5Bm.%5D%5B%3A%5Bk%5D%5D%3B%20ok%20%7B%0A%20%20%20%20%3A%5Bm.%5D%5B%3A%5Bk%5D%5D%20%2B%3D%20%3A%5Bx.%5D%0A%7D%20else%20%7B%0A%20%20%20%20%3A%5Bm.%5D%5B%3A%5Bk%5D%5D%20%3D%20%3A%5Bx.%5D%0A%7D%0A%0Aor%0A%0Aif%20%3A%5B~_%5D%2C%20ok%20%3A%3D%20%3A%5Bm.%5D%5B%3A%5Bk%5D%5D%3B%20ok%20%7B%0A%20%20%20%20%3A%5Bm.%5D%5B%3A%5Bk%5D%5D%2B%2B%0A%7D%20else%20%7B%0A%20%20%20%20%3A%5Bm.%5D%5B%3A%5Bk%5D%5D%20%3D%201%0A%7D%0A%0Aor%0A%0Aif%20%3A%5B~_%5D%2C%20ok%20%3A%3D%20%3A%5Bm.%5D%5B%3A%5Bk%5D%5D%3B%20ok%20%7B%0A%09%3A%5Bm.%5D%5B%3A%5Bk%5D%5D%20%3D%20append(%3A%5Bm.%5D%5B%3A%5Bk%5D%5D%2C%20%22%3A%5Bv1%5D%22)%0A%7D%20else%20%7B%0A%09%3A%5Bm.%5D%5B%3A%5Bk%5D%5D%20%3D%20%5B%5Dstring%7B%22%3A%5Bv1%5D%22%7D%0A%7D%0A%0Aor%0A%0Aif%20%3A%5B~_%5D%2C%20ok%20%3A%3D%20%3A%5Bm.%5D%5B%3A%5Bk%5D%5D%3B%20ok%20%7B%0A%09%3A%5Bm.%5D%5B%3A%5Bk%5D%5D%20%3D%20append(%3A%5Bm.%5D%5B%3A%5Bk%5D%5D%2C%20%22%3A%5Bv1%5D%22%2C%20%22%3A%5Bv2%5D%22)%0A%7D%20else%20%7B%0A%09%3A%5Bm.%5D%5B%3A%5Bk%5D%5D%20%3D%20%5B%5Dstring%7B%22%3A%5Bv1%5D%22%2C%20%22%3A%5Bv2%5D%22%7D%0A%7D%0A%0Aor%0A%0A%2F%2F%20Elaborate%20way%20of%20sleeping%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1037%0Aselect%20%7B%0A%09case%20%3C-time.After(0)%3A%0A%7D%0A%0Aor%0A%0A%2F%2F%20Unnecessarily%20complex%20way%20of%20printing%20formatted%20string%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1038%0Afmt.Print(fmt.Sprintf(%22...%22%2C%20...))%20or%0Afmt.Println(fmt.Sprintf(%22...%22%2C%20...))%20or%0Afmt.Fprint(nil%2C%20fmt.Sprintf(%22...%22%2C%20...))%20or%0Afmt.Fprintln(nil%2C%20fmt.Sprintf(%22...%22%2C%20...))%20or%0Afmt.Sprint(fmt.Sprintf(%22...%22%2C%20...))%20or%0Afmt.Sprintln(fmt.Sprintf(%22...%22%2C%20...))%20or%20%0A%0A%2F%2F%20Unnecessary%20use%20of%20fmt.Sprint%0A%2F%2F%20https%3A%2F%2Fstaticcheck.io%2Fdocs%2Fchecks%23S1039%0Afmt.Sprintf(%22%25s%22%2C%20%22...%22)) into open source
contributions, e-mail me at rijnard@sourcegraph.com, I can help.

## What's next for search queries

There are many languages and code checkers to explore, and this post only skims
the surface. We want to make high-quality code checks available for your
projects and languages. If you have a project or query in mind, feel free to
[open an issue on GitHub](https://github.com/sourcegraph/sourcegraph/issues/new?assignees=&labels=&template=feature_request.md&title=Code%20check)
with your thoughts. We're still working on performance and usability enhancements
so that you can search your code and not just popular projects, so stay tuned!
In the meantime, you can find an all-in-one config for replacing the patterns on your local machine
at [comby-tools/go-patterns](https://github.com/comby-tools/go-patterns). If you want to make large scale,
org-wide changes, talk to us about [Batch Changes](https://docs.sourcegraph.com/batch_changes).
And if you find code checking valuable and want to learn more about our work at Sourcegraph, reach us at
feedback@sourcegraph.com. Happy searching!

---

<sup>1</sup> Another one of my favorite tools using the same principle is [Kibit](https://github.com/jonase/kibit) for Clojure.
<br/>
<sup>2</sup> See the [structural search reference](https://about.sourcegraph.com/blog/code-search-turned-code-checker/) for more details about special syntax.
<br/>
<sup>3</sup> These are all the [simple static check](https://staticcheck.io/docs/checks) of the form `S<number>`, excluding `SA` and `ST` checks.
<br/>
<sup>4</sup> There's plenty of opportunity to pick other tools or languages, I picked `staticcheck` because its the nicely illustrative.
<br/>
<sup>5</sup> Also, it probably makes sense for these projects to run `staticcheck` in their CI, and a quick search helps make it more obvious which ones do not 😛.

---

<sup>
Acks: Thanks [@lguychard](https://twitter.com/lguychard),
[@thorstenball](https://twitter.com/thorstenball), [@stefanhengl](https://github.com/stefanhengl) [@beyang](https://twitter.com/beyang),
[@sqs](https://twitter.com/sqs) for feedback on the content of this post.
</sup>

<style>
{`
  .gatsby-highlight {
    max-width: 100%;
    width: 40rem;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (min-width: 800px) {
    table {
      width: 40rem;
      border: none;
    }
  }
  table {
    border: none;
  }
  table th {
    border: none;
  }
  table td {
    padding: 4px;
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
  } `}
</style>
