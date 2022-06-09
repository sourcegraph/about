---
title: "GopherCon 2019 - The Gopher's manual of style"
description: "Our industry has borrowed ideas and practices from a range of industries to improve the design and production of software. In this talk, we'll look to the publishing industry for ways to improve software development for our industry and within the Go community."
authors:
  - name: Beyang Liu for the GopherCon 2019 Liveblog
    url: https://twitter.com/beyang
publishDate: 2019-07-25T00:00-14:55
tags: [
  gophercon
]
slug: gophercon-2019-the-gopher-s-manual-of-style
heroImage: https://about.sourcegraph.com/gophercon2019.png
published: true
---

Presenter: Kris Brandow

Liveblogger: [Beyang Liu](https://twitter.com/beyang)

## Overview

Our industry has borrowed ideas and practices from a range of industries to improve the design and
production of software. In this talk, we'll look to the publishing industry for ways to improve
software development for our industry and within the Go community.

---

[Kris Brandow](https://twitter.com/skriptble) is senior engineer at MongoDB. He works on the MongoDB
Go driver and has been writing Go full-time for nearly 6 years. In addition to programming he also
loves to bake and to write.

![headshot](https://user-images.githubusercontent.com/1646931/61913494-2eae3c00-aef2-11e9-9a5b-83f8f3af77d5.png)

### What is this talk about?

In programming, we borrow concepts from a lot of other organizations:

* The role of a software architect borrows from architecture (obviously)
* Agile software development is inspired by lean and agile manufacturing

We can also borrow from the publishing industry. Kris's degree is not in computer science, but
creative writing and one of the things that first drew him to programming was the parallel between
the two. Programming is a form of creative writing.

Writing is highly structured:
* You don't just stream-of-consciousness it. You write treatments and character bios before the
  story. This is similar to the design docs and product specs you create before writing code.
* The creation of the story is also structured. In screenwriting, there's the "8 sequences"
  framework. Every movie you've ever seen follows this. (If you know about it, it kind of ruins
  movies...)
* 3 act plays are another common structural pattern
* Writing is a very iterative process, just like programming.


![Software engineering analogy to creative writing](https://user-images.githubusercontent.com/1646931/61911317-03c0e980-aeec-11e9-9388-3089e35809bd.png)

Programming is to creative writing as software engineering is to publishing. So let's pull concepts
and ideas from publishing to help us improve the craft of software engineering.

Publishing is has a wide variety of things:
* Books
* Magazines
* Newspapers
* Cookbooks

Similarly, in programming, you have libraries, databases, various types of application. These are
all very different but all of them go through the same high-level publishing process.


We can borrow 2 things primarily from the publishing industry:
* Editors (as in "newspaper editor", not as in "vim")
* Manuals of style

But first...

### Why Go?

* Opinionated and idiomatic
* Flexible
* No comprehensive manual of style
* Codebases are consistent via gofmt, but not much else is
* Go is growing and changing

Publishing has things like the Chicago Manual of Style to enforce consistency and shared
standards. Go has strong idioms, but no standard manual of style akin to the scope of the Chicago
Manual of Style. Go's culture and values share a lot with that in the publishing industry, but
they've been doing their thing a lot longer than we've been doing ours. So let's learn from them.

### What can we borrow from the publishing industry?


![The roles of an editor](https://user-images.githubusercontent.com/1646931/61911323-06bbda00-aeec-11e9-9230-e19d69bbfa67.png)


These are the roles of an editor in publishing:

<table>
    <tr>
        <th>Writing</th>
        <th>Software engineering</th>
    </tr>
    <tr>
        <td>Acquisition editor</td>
        <td>Prototype engineer</td>
    </tr>
    <tr>
        <td>Developmental editor</td>
        <td>Software architect</td>
    </tr>
    <tr>
        <td>Line editor</td>
        <td>???</td>
    </tr>
    <tr>
        <td>Copy editor</td>
        <td>Code reviewer</td>
    </tr>
    <tr>
        <td>Production editor</td>
        <td>Operations engineer</td>
    </tr>
</table>

In publishing:

* The acquisition editor acquires ideas. Oftentimes, the acquisition editor also handles the developmental, line editing, and copy editing.
* The developmental editor is involved in the development of the idea into a work of writing (e.g.,
  story development, character development).
* The line editor goes line-by-line and checks for grammar, consistency, and factual correctness.
* The copy editor is the final typesetting and preparation for publication. Any last-minute proofreading and spell-checking.
* The production editor handles any changes that need to be made in the production process.

In software:

* The prototype engineer builds the initial prototype
* The software architect handles higher-level architecture
* There's no strong comp for the line editor in engineering. More on that later.
* Code reviewers do the final review of the code for style and correctness before it gets
  pushed. You might think Code reviewing is like line editor, but it's not because it happens toward the end of the process.
* The operations engineer handles things once they're in production.


Borrowing from publishing for code reviews:

* The conventional wisdom for code reviews is that they should be kept small.
* This has always struck Kris as very constricting and dogmatic.
* You don't write a good book as 200-500 work chunks. You can certainly do it for periods of time,
  but you may want to write bigger chunks, and every now and then you want to do a higher-level
  review to check for overall plot arc and consistency.
* We're missing a tool in software to do a high-level expansive review of software.
* We should avoid dogma when it comes to code reviews. Kris has a coworker who actually prefers
  doing gigantic code reviews to small one. Different people work differently.

Borrowing for codebase structure and maintenance:

* Manuscripts require more than proofreading and copyeidting. You need to do higher-level structural
  reviews of the writing.
* We could do structural reviews of a codebase for things like dependency structure and hierarchical
  structures in code. For example, when should you split a package in two?
* However, continuous delivery in software is different from publishing a book. But it still makes
  sense to do periodic high-level reviews, even though there isn't a single shipping date that
  provides a natural focal point to do so.
* Testing is a particularly difficult problem. Testing styles and philosophies evolve with the
  codebase and team writing the code. New tests are added, but existing ones are rarely updated to
  be consistent with the new best practices. Then at some point you need to build a new a feature
  and you have to update a bunch of tests written under very different styles. In some cases, you
  might just burn down a lot of tests and rewrite them from scratch, and that's not good. Kris has
  come to view tests like a book's bibliography. You don't expect most readers to go through your
  bibliography, but it needs to exist to lend legitimacy to the work. If we view tests as the source
  of legitimacy for the code, it makes it much more important to maintain it in a consistent
  state. Bibliographies are stylistically consistent. If you change the citation structure, you need
  to update all citations. Similarly for unit tests, if you change the testing style or framework,
  you should update existing tests.

A brief story: Kris at one point wound up on a team of one and his manager wasn't familiar with
Go. So who did his code reviews? They decided that an engineer from another team would be
"loaned". This teammate was named Craig and he is the one who likes doing large code reviews. Kris
didn't know this at the time and he submitted a gigantic PR to him and told Craig, "I'm so sorry."
But to Kris's surprise, he came back the next day and he found a ton of useful comments in
Gerrit. Craig told him it was a lot of fun and he learned a lot about Go in the process. One thing
that stuck out to Kris was that Craig kept saying, "I've left a lot of comments but this is *your*
code. *You* are making the final decisions and own this code."

So isn't a programmer more like a writer, rather than an editor?

Borrowing from the notion of an "editor":

* Editors don't write manuscripts themselves. They don't "own" the manuscript themselves, but they
  are absolutely necessary to deliver writing into publication.
* Some companies have engineers that help with this. It depends on the company's size if this is
  feasible, but *someone* should be doing this, even if not full-time.

#### Manuals of style

There are many manuals of style in publishing, but there are two main ones:

* The Chicago Manual of Style
* The AP Stylebook

There is nothing on the scale of these two style guides in Go. Some projects and companies have
tried to adopt a consistent manual of style across the whole team or organization.

What is a manual of style?

* They are maily a reference manual
* They expect the reader to have an understanding of the language already
* They are extremely prescriptive. The purpose is to give an unambiguous answer to every questions.
* They enforce consistency

There is a hierarchy of manuals of style. At the top are the CMS and AP Stylebook, but each
publishing house also has a localized manual of style.

What should go into a manual of style? "Meta" things, NOT "design" things:
* Type naming conventions
* How many methods per interface
* Else statements in the codebase
NOT:
* Wire protocols
* Storage formats

The distinction gets a little fuzzy. In a localized manual of style, you may want to enforce
consistency in something like middleware that might be a combo of systems "design" and "meta"
things.

How do we get started?
* Start with a community manual of style
* Start with Code review comments
* Make it evolutionary, not revolutionary. The original Chicago Manual of Style was small and it grew over 17 subsequent editions
* You figure out what to include by asking questions about your codebase that don't yet have answers
* GoDoc can be used to merge manuals of style together and then to enforce the consolidated style guide across many codebases

But avoid dogma. There is a difference between enlightened consistency and dogmatism. Even
experienced adherents to the Chicago Manual of Style will deviate from it. Learn the rules, then break them:

* Know the rules first.
* Track your deviation from what is prescribed by the manual of style. Explain why.
* Stay consistent. If you deviate, at least ensure every instance of that pattern (e.g., comman
  inside the quotes or outside) is consistent.

## Key takeaways

* Go is positioned to borrow a lot of good ideas from publishing
* The roles of an editor in publishing can inform what we do in the process of software engineering
* Manuals of style

### About the author

_Beyang Liu is the CTO and co-founder of Sourcegraph. Beyang studied Computer Science at Stanford, where he published research in probabilistic graphical models and computer vision at the Stanford AI Lab. You can chat with Beyang on Twitter [@beyang](https://twitter.com/beyang) or our community [Discord](https://discord.com/invite/vqsBW8m5Y8)._