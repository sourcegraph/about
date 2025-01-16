---
title: "How not to break a search engine or: What I learned about unglamorous engineering"
description: "When we switched to a new search query parser in September 2020, you'd never know that
anything had changed. This is an account of the rigorous testing that
happened behind the scenes to ensure a seamless transition."
authors:
  - name: Rijnard van Tonder
    url: https://twitter.com/rvtond
publishDate: 2021-06-25T10:00-07:00
tags: [blog, code, search, software, engineering, testing]
slug: how-not-to-break-a-search-engine-unglamorous-engineering
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/how-not-to-break-a-search-engine-new.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/how-not-to-break-a-search-engine-new.png
published: true
---

![Unglamorous engineering](https://storage.googleapis.com/sourcegraph-assets/blog/how-not-to-break-a-search-engine-new.png)

> _"In 2020 I flipped the switch to use a completely rewritten parser for
> Sourcegraph search queries. It serves tens of thousands of users and processes
> millions of queries. And after flipping the switch... nothing remarkable
> happened. Nobody noticed. Zero reports of implementation bugs. Everything had
> gone as planned. I'd pulled off my greatest feat of unglamorous engineering."_

Early last year I started rewriting the parser that processes search queries in
Sourcegraph—the bit that users type into the search bar. This component
processes every single input that goes into the search bar when users search
for code:

<Figure 
  src="https://storage.googleapis.com/sourcegraph-assets/about.sourcegraph.com/blog/2021/search-bar.png"
  alt="Code search input bar" 
/>

When the switch activated the new parser in September 2020, you'd never know
that anything had changed. This is an account of the invisible, rigorous
testing that ensured a seamless transition.

The motivation for the change was to introduce standard boolean operators like
`and`, `or`, and `not` in queries. Sourcegraph had supported some of these
notions through regular expressions, but we were missing more general
functionality, and the syntax to accompany it. This new functionality meant
rewriting the query parser from scratch (I'm going to gloss over why it had to
be done from scratch, but just bear with me, this wasn't a component we could
retrofit). These boolean operators were a clear product win. I was excited that
a rewrite could later unlock new prospects for our search syntax. I knew these
were the goals. But to get to the goal I had to suspend my focus on the shiny
"feature" part of this work. Something else dwarfed other concerns.

Sourcegraph's bread and butter is code search. Every single search query is
going to run through this new code. Bugs in a beta feature are understandable.
A UI bug may be temporarily excusable. But a bug in the query processing of the
core product could spell a lot of trouble. What if previously working
queries stopped working? What if they behaved incorrectly? What if an input crashed
the server? The point was to support new operators in the query, and I was
going to introduce these, but mentally I was more preoccupied with ensuring
that _existing queries keep working_ the way that they should.

Writing a parser isn't _that_ difficult. But it's a different matter to write
one from scratch for a fresh project versus swapping out something that is in
use by thousands of users. When the stakes are high, simple things become
challenging. This code will need checking and checking again. Not exactly
glamorous.

The changes weren't just about the act of parsing either. The new parser would
produce a different internal representation of a query. Trees would represent
our queries now, no longer just a sequential list of terms. This new
representation needed to keep working with what our backend internals expect.
That, or bugs galore.

I made up my mind that, as far as I could help it, swapping our parsers wasn't
going to break Sourcegraph. Not on my account.

## How not to break a search engine

Over the course of development I progressively tested new changes in four
distinct ways. I wasn't following a checklist of things to do. What mattered
was that I could convince myself that things worked as expected. I wanted
to sleep well at night. Testing along these four different dimensions gave me
confidence that I could expect few (if any) surprises. In general, the sort of
testing for application rewrites or migration is going to depend on the
context. I feel like the steps I took worked well, and they probably generalize
well for migrating other systems that accept user input.

### Part 1: Unit testing

Unit testing was the obvious thing to do™ and familiar territory for a lot of
developers, so I won't belabor this part. I thought of this as my frontline
defense for testing correctness. I reused some of our existing parser tests
(which served as a rough specification of things to get right) and also added a
lot of additional tests for new parts of the syntax. You bet there's test
coverage.

<Figure 
  src="https://storage.googleapis.com/sourcegraph-assets/about.sourcegraph.com/blog/2021/parser-coverage.png" 
  alt="Parser file unit test coverage" 
/>

### Part 2: Integration testing

Once I wrote a feature-flagged code path to use the new parser, it was time to
test whether Sourcegraph behaved functionally similar. Integration tests ran a
search query through a running instance of the Sourcegraph application and
checked whether search results were expected. This testing phase was so
important because the parser produced a new and different internal
representation. I'd abstracted out a common interface for our backend to access
the new data structure under the feature-flagged code path to test on.

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/about.sourcegraph.com/blog/2021/integration.png"
  alt="Integration testing diagram"
  shadow={false}
  caption={<>Integration testing abstracts a common interface for our backend to access query values. We test that the backend produces the same search results for simple queries (ones that don't have, e.g., <code>or</code> -operators), irrespective of whether those values originate from the existing parser's output or the new one.</>}
/>

When I got to this part, we didn't have a good way to run integration tests. We
had browser-based end-to-end testing that was onerous to set up, time-consuming
to run, and brittle. I was desperate for a way to do this more easily and
quickly, and only really needed to run queries through our backend GraphQL API,
not the browser. I wrote a barebones utility to locally run queries through our
backend and snapshot the results
([#10712](https://github.com/sourcegraph/sourcegraph/pull/10712)). This testing
was _immensely_ helpful because I could lock in existing expected search
behaviors for every new addition. I didn't want a user to enter a reasonable
query and get an unreasonable result. It preempted a bunch of behavioral bugs
as I tweaked data structures and interfaces.

At the time there was a parallel effort to add integration testing to our CI,
partly motivated by the parser rewrite. It wasn't ready yet. Two months after
heavily using my local barebones utility, my coworker
[@joe](https://twitter.com/jc_unknwon) brought this testing to our CI. It was a
game changer. Now all of our development was subject to this testing, not just
my local tinkering. I'd venture that this is probably the most valuable part of
our search testing infrastructure today. The wild thing is how rock solid it
is. We get flakes in our CI all the time, but not from this part. For all its
complexity (set up and tear down of a live Sourcegraph instance, repository
cloning, and running some intensive tests), I can't recall a single time it's
buckled. I'm amazed every time I think about it. I don't know how Joe did it,
but the thing is just peak unglamorous engineering to me. I imagine it was
painful to write and test, but I'm so impressed. The wait was worth it and it's
been catching bugs ever since.

### Part 3: Fuzz testing

If unit testing is the appetizer and integration testing the main course, fuzz
testing is the dessert. Fuzz testing would reveal rare, corner-case inputs that
crash the server violently. They're kind of fun to discover. I used the
excellent [dyukov/go-fuzz](https://github.com/dvyukov/go-fuzz) tool and found
it's a breeze to set up.

I ran local fuzz jobs for a couple of hours here and there throughout
development. Continuous fuzzing is nice to have, but local fuzzing was good
enough. This part caught three bugs, two of which caused a `panic` that broke an
assertion when concatenating certain patterns with unbalanced parentheses or
unconventional unicode space characters
([#12457](https://github.com/sourcegraph/sourcegraph/pull/12457)). The other was
caused by an out-of-bound access for patterns that ending with a trailing `\`
([#12463](https://github.com/sourcegraph/sourcegraph/pull/12463)). This was on an
experimental feature-flagged code path. No biggie. I was happy to find only
these, and that they were fairly low profile. More than anything, fuzz testing
gave me peace of mind that things were holding up.

### Part 4: Differential testing

Differential testing came towards the end of the migration work, when I was
ready to flip the switch for good.<a href="#footnote-1"><sup>1</sup></a> The
new parser had been active under a feature flag on our dogfood instance and
some customer instances, but it was time to make it the default. The point of
no return. For more peace of mind, I wanted assurance that the data structure
output of the new parser was _interpreted_ the same way as the old one on a
larger set of queries than our integration tests covered. I collected a couple
thousand queries from the fuzz testing and live queries on our dogfood
instance. I then ran these through a utility that parses the input with both
new and old parsers, converts the two outputs to a unified data structure that
encodes the query properties, and then diffs the two outputs. Any difference
implied that the query output was interpreted differently by the backend and a
potential bug.

I caught one good bug with differential testing, where the previous parser ran
a heuristic step that escapes a trailing dangling parenthesis for regular
expressions. The heuristic interpreted an invalid regular expression like
`foo.*(` as `foo.*\(`. This is to avoid throwing a syntax error at the user and
instead yield matches for what they likely intended
([#12733](https://github.com/sourcegraph/sourcegraph/issues/12733)). There were
three other differences that turned out to be fairly inconsequential, but nice
to catch. These bugs were about differing interpretations of reserved syntax.
For example, the new reserved syntax `or` in the new parser had special
meaning. The old parser didn't ascribe any special meaning to `or`, and this
(intentional) difference reflected in the testing.

## The switch is flipped

In 2020 I flipped the switch to use the completely rewritten parser for
Sourcegraph search queries. It serves tens of thousands of users and processes
millions of queries. And after flipping the switch... nothing remarkable
happened. Nobody noticed. Zero reports of implementation bugs. Everything had
gone as planned. I'd pulled off my greatest feat of unglamorous engineering.

Hardly anyone could appreciate how months of effort culminated in an
incident-free transition. That was, after all, expected. I mean, how do you
derive appreciation from users, peers, or managers when the point was for no
one to notice anything significant had changed; when there's no perceptible
delta?

## Value in the unseen and unspoken

There's unglamorous engineering in the software all around us. For all its lack
of recognition, I wish we grasped its value a bit better. I'm reminded of a
tweet by a former colleague who researched donations for open source projects:

<blockquote className="twitter-tweet align-center" data-conversation="none"><p lang="en" dir="ltr">I can tell you from some informal interviews we did outside that paper, that people spend the money on gruntwork — the stuff that's fun they're more likely to do anyway, money or not.</p>&mdash; Bogdan Vasilescu (@b_vasilescu) <a href="https://twitter.com/b_vasilescu/status/1279199236094132227?ref_src=twsrc%5Etfw">July 3, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>

This suggests that gruntwork, if not glamorous, is certainly valuable (and
perhaps, even disproportionately so). At the same time, I wouldn't necessarily
call unglamorous engineering thankless. Your close peers may be very
thankful for a component rewrite or code refactor (I know I am), but no amount
of gratitude will make unglamorous work glamorous. It simply has to get done in
spite of whether there's a desire to tackle it, or some incentive or
recognition. And sometimes you might be the only one who knows it. Maybe it's
just part of writing code. At times you need to wear the hat of a hygiene
engineer.<a href="#footnote-2"><sup>2</sup></a> A developer-janitor. A code plumber. And that
cost can feel very personal.

The lamentable part of the unglamorous engineer's work is that there's little
account of these feats. Technical media and blogs are prone to talk about
features or intellectual explorations. The new and shiny is naturally engaging.
But I also want to hear about that impressive engineering feat that no one
noticed. The one where a developer or team pulled off some tectonic shift in a
codebase, everyone oblivious except themselves.

## New capabilities while steadily transitioning the old

Sourcegraph supports more combinations of operators now. And nothing outright
broke in order to get there. In hindsight, did I go overboard on some parts and
would I have done things differently? In short, no. New functionality was
rolled out iteratively and quickly in phases that users could freely try along
the way. I also enabled new implementations on our dogfood instance as things
matured. The core implementation and testing probably took only one or two
months, but crossing the point of no return and removing the fallback was a
slow and thorough process. If I sensed that excessive testing was stunting
progress and delaying the planned timeline, I might feel differently, but I
never got that sense. And to be clear, I did more than rewriting and testing
parsers in that six-month time frame, but that's off topic. Our current state
isn't perfect, there's more to tweak—but when the previous code was finally
dropped, it wasn't one of those typical anxiety-inducing rushes to hit a
deadline. It felt good and it felt right.

## In closing: Unglamorous engineering and you

We have a ton of work to do around search query _usability_ (story for another
day). Users are often surprised by how searches behave, even though the
behavior is intentional. But a surprised or mildly inconvenienced user is a far
cry from releasing a bug that takes down a company's instance. Severe bugs
cascade into out-of-band releases for our distribution team and upgrades for
customers. They also tend to have a latent effect on engineer productivity (in
this case, mine) when bugs later impose context-switches to fix
things—conceptually big costs that I wanted to avoid. All of these
considerations, code changes, and heaps of testing happened in the pursuit of
an unglamorous outcome while two, maybe three, engineers reviewed the code to
see it play out. I know this isn't an isolated thing. I get faint hints of
other engineers at Sourcegraph doing momentous but unglamorous things that most
of the organization is blissfully unaware of. And the Twitterverse suggests
there's more of it happening in software all around us:

<blockquote className="twitter-tweet align-center"><p lang="en" dir="ltr">A huge problem in software companies is that large new features get praise, promotions, accolades... while migrating off a legacy system, increasing performance 2,4,10X, or reducing error rates, pages, or alerts by X% is often only recognized by peers and not leadership.</p>&mdash; Dan Mayer (@danmayer) <a href="https://twitter.com/danmayer/status/1395564252308541440?ref_src=twsrc%5Etfw">May 21, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>

I empathize with the engineers who don't have an audience for their unglamorous
work, who want to say, "I did A Thing, there's nothing to see, but more people
should care. Let me tell you about it!" I like my portion of showpiece
engineering, don't get me wrong. But shouldn't doing the necessary, unglamorous
work be a marketable skill as well? Where's the signage that reads "Unglamorous
engineers wanted. Will pay handsomely"? I hope you're encouraged to share what
you've pulled off.

---

<a id="footnote-1"><sup>1</sup><small>If you've been following along, here's
where our three-course meal analogy breaks down. Let's just say
differential testing is the surprise food inspector hanging out in the
kitchen.</small></a>

<a id="footnote-2"><sup>2</sup><small>Amusingly, I once met an engineer from a
well-known tech company who used this title on their business card.</small></a>

---

**About the author**

_[Rijnard](https://twitter.com/rvtond) is interested in developing new ways to
search, manipulate, and fix code. He holds a PhD in Computer Science from
Carnegie Mellon University, where he researched automated bug fixing. He enjoys
fundamental research but also wants to make research ideas a reality in
practice. That's why he currently works at Sourcegraph, where he applies his
research background to develop new tools and techniques for large-scale code
search and automated refactoring._

<small>Acks: Thanks [Rebecca Dodd](https://handbook.sourcegraph.com/team#rebecca-dodd) and [Camden Cheek](https://twitter.com/camdendcheek) for feedback on the content of this post.</small>

### More posts like this

- [An ex-Googler's guide to dev tools](/blog/ex-googler-guide-dev-tools/)
- [A 5x reduction in RAM usage with Zoekt memory optimizations](/blog/zoekt-memory-optimizations-for-sourcegraph-cloud/)
- [Optimizing a code intelligence commit graph](/blog/optimizing-a-code-intel-commit-graph/)
