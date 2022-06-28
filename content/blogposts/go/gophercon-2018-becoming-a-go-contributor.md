---
title: 'GopherCon 2018 - Becoming a Go Contributor'
authors:
  - name: Farhan Attamimi for the GopherCon Liveblog
publishDate: 2018-08-29T00:00-06:00
tags: [
  "gophercon"
]
slug: gophercon-2018-becoming-a-go-contributor
description: 'A guide to becoming a contributor to the Go project.'
heroImage: https://images.ctfassets.net/le3mxztn6yoo/5Oj3acpp7yysQg04W2AW4A/a93d79c10ad903d3902f6b6d8707973a/mechanic-tire-2.jpg
published: true
---

Presenter: [Kevin Burke](https://kev.inburke.com)

Liveblogger: [Farhan Attamimi](https://twitter.com/attfarhan)

A guide to becoming a contributor to the Go project.

## Summary

Kevin Burke talks us through his journey to becoming a contributor to Go. He encourages developers to start contributing with small changes to build trust and ownership, and gives tips on how you can make your first contributions.

---

## What does contributing mean?

It seems there's this magic threshold to becoming a contributor. Defining who is a contributor, and people wanting to become contributors reminds Kevin of a scene from the Truman show:
![image](https://user-images.githubusercontent.com/16265452/44814500-1f1b5b80-ab9a-11e8-8448-254cf2f40ffc.png)
![image](https://user-images.githubusercontent.com/16265452/44814519-2cd0e100-ab9a-11e8-9dc3-d6ca4cce47d6.png)

Just because the stdlib isnt changing that much doesn't mean there aren't tons of ways to contribute. Ashley McNamara's talk at GopherCon last year dispelled a myth that you have to be a programming wizard to contribute.

## Contribute by using Go

The easiest way to contribute is by using Go. Surely, most people at GopherCon do use Go, but at the margin, use Go more than you already are. Use Go in ways you're uncomfortable with and in ways its not typically used, and report back to the broader community.

#### Notice Confusion

When you are using Go, notice when things don't match up with your expectation, or are confusing, and dig in.

At one point, Kevin was working on a program that parsed all Go contributor emails. He ran into an unexpected issue where a particular email was causing `mail.ParseAddress` to return an error:

```shell
mail.ParseAddress('A (middle) B <a@b.com>')
>>> mail: no angle-addr
```

The error was confusing because angled brackets _were_ there, and the error was appearing for another reason. This is a corner case, and therefore seems like a small fix. Many people might think it's too small to matter. But...

#### Small effort, big reward

Russ Cox estimates that there are now 1.1 million Go developers. 1% of these developers use net/mail, this is 11000 people. If 1% hit this edge case, that means 110 people will potentiall see this. Fixing this one small edge case could impact 110 people and improve their development experience, so it does matter!

## Contribute error reports

Another way to contribute is to simply tell someone when something doesn't work. Contributing error reports is a skill.

#### How to file a bug report

This is a guideline for writing and contributing good error reports. A good error report should answer:

- What were you trying to do?
- What did you expect to see?
- What did you see?
- How can I reproduce it? This is very important.

A good error report can vastly increase the chances the issue gets fixed. Good reports are the difference from an issue that simple states "This doesnt work" to "This is why this thing is broken, and here's how it could be fixed".

## Contribute reduced test cases

When trying to diagnose errors, it is extremely helpful to compress a faulty program down to the smallest possible unit where you can reproduce the error. This is a valuable skill for contributing and getting issues fixed in Go and projects in general.

The 3 characteristics of an ideal reduced test case:

- Reproduces the error 100% of the time. We'll never know if we've fixed an issue unless we can reproduce it 100% of the time.
- It is in a small, fast program. It should be fast to reproduce the error so we can run more experiments in a given period of time.
- On a common-ish OS. This is important so many others can reproduce the issue.

This reduced case is a simple 7-line program. The chances of this getting fixed are super high since it's easily reproducible:
![img_1741](https://user-images.githubusercontent.com/16265452/44815191-10ce3f00-ab9c-11e8-881e-4473d7ed8286.jpg)

#### Reduced test cases can suggest contributions

The process of narrowing down a problem can lead to hypotheses on what the problem actual is, and helps you actually take a stab at fixing it.

## Contribute examples

Examples are code snippets that sit alongside documentation.

![image](https://user-images.githubusercontent.com/16265452/44802292-8f18ea00-ab78-11e8-98cf-f811fa0fda2c.png)

Examples help because people don't read anything on the internet. People scan for the information they're looking for, and examples have super high information density.

The `fmt` package has a huge API, but it has a single example in the entire package:
![image](https://user-images.githubusercontent.com/16265452/44815271-4a06af00-ab9c-11e8-9cf0-9d3221d2cf10.png)

Kevin gave this talk in October last year, and checked the `fmt` package to see if there are any new examples. Still, nobody has added examples. Please contribute to it so Kevin can update his slides.

## Contribute documentation

It's easy for docs to not exist or get out of date. If people don't use something you built, it's likely because the documentation is not up to par.

The `scrypt` package will take a password into a 32-byte string such that it's very expensive to guess. This is valuable for hashing passwords on websites, etc. It has one function in this package called the `key` function. The problem is the documentation references info from 2009:
![image](https://user-images.githubusercontent.com/16265452/44802361-bf608880-ab78-11e8-94b3-64c2016376ca.png)

## Step 1: File issue

Even if you know what the fix is going to be, file an issue. Other people will run into the same problem. Filing an issue is a good way to rank on Google highly, and get others to the information, since Google is often the entry point to documentation and issues. Communicates the progress of the issue.

Issue Kevin filed about the 2009 documentation:
![image](https://user-images.githubusercontent.com/16265452/44802393-d99a6680-ab78-11e8-9952-d7c8428d8a01.png)

This issue led to this contribution:
![image](https://user-images.githubusercontent.com/16265452/44815384-99e57600-ab9c-11e8-8369-c03c4f60d80a.png)

He updated the docs and made it future proof so people in years later can figure out what the params should be. This change included a comprehensive commit message, and followed contribution guidelines, which helps build trust with maintainers and gets you comfortable with contributing.

## Contribute to the golang.org/x repos

golang.org hosts a bunch of packages that are widely used. Compared to the core Go project, these are more experimental and the contribution process is less rigorous. This makes these packages a great place to get started and make code contributions. All of the code that makes up the Go build environment lives in the golang.org/x repos. For example, gopherbot:

![image](https://user-images.githubusercontent.com/16265452/44802473-0cdcf580-ab79-11e8-91cd-da5a8fdc5ee1.png)

This is the Trybot page:
![image](https://user-images.githubusercontent.com/16265452/44802444-fb93e900-ab78-11e8-9f6b-9b0ce4a0b3ff.png)

When you submit a change, it is run it on all these different environments to make sure they're all happy with the change. The image above is the environment. The page is not very good, and there are a lot of improvements to be made. It's not been done because existing contributors may not have the time or skills to invest in this. A change to update this page would be really helpful to the Go team, and these contributions can be made by most people. Making changes like this gives you a sense of ownership over this tool, and spurs you on to make larger changes, introduces you to the team, and so on.

## How do you get started contributing?

If you were street racing in Tokyo, it would make sense to make a flashy entrance nad announce your presence. But we're not. We're incrementally making a programming language better.

#### Lower your expectations for your first contribution

Your first contributions _should_ be really small. There's a lot of other stuff going on beyond the actual code change when you first get started with contributing.

Kevin's first change was literally one character:
![image](https://user-images.githubusercontent.com/16265452/44802528-372eb300-ab79-11e8-9c40-78b0b660559d.png)

While the change isn't big, there is more going on here: he learned to follow the guidelines on how to contribute, which builds trust with the maintainers, and proves that he can make a change. And, ultimately, this tiny change is useful, as it saves people a redirect.

The next two changes came 2 months after his first change, and they were both fixing spelling mistakes. Again, not large changes, but helps to build this trust. After making these two changes, he started reading the commit logs, and noticed changes as they came in. This was useful to understand recent changes and the codebase in general, and may open up opportunities or generate ideas for things to fix.

#### No change is too small

Small commits are very common

- Kevin has 226 commits
- 118 under 20 LOC, 108 over
- Bradfitz: 1030 of 2200 Gerrit commits under 20 LOC

Just because commits are small don;t mean they aren't important. It's a good way for the team to build trust in you, understand the contribution process, and build ownership over the codebase.

#### Small commits to start

> I've seen someone barely dip their toe into adjusting the Node.js website ...helped on-board more committers, and is now one of the top level decision makers in Node.js Core.

- Mikeal Rogers

This is very common. Small commits are important because they open the door to larger ownership over the codebase.

## Practice committing

bit.ly/goscratch

#### The scratch repo

This project lets you practice committing. You get a directory, and you can put anything you want in there. Then, people will review your change to make sure it fits the contributing guidelines. For example, this review makes sure the change has a license header with a copyright statement:

![image](https://user-images.githubusercontent.com/16265452/44803150-d4d6b200-ab7a-11e8-94a0-5c7b62b027f4.png)

Practicing here is highly recommend to understand how the Go contributing process works. The contribution guidelines are different than most companies, so it's a good way to practice and understand.

## Theory of contributing

- Get an idea
- Investigate it
- Get stuck
- Figure out a way OR quit

## Don't get stuck, get help

There are many places where it's expected you'll get stuck (bad docs, confusing concepts, things you don't know you don't knoow), so reach out before giving up.

## Resources for help

1. golang-dev mailing list
2. #gocontributing/#goreviews slack
3. Post the CL/explain where you got stuck
4. It's OK to not know/make mistakes

..as long as you're enthusiastic and open to feedback, it;ll be well received.

## Should you contribute?

- OSS is (largely) free labor - some people get paid, and that is a situation you want to be in. But, more often than not, people are working for free to help multi-billion dollar companies, without anything in return.

- It might be worth it! Kevin doesn't get paid, but it's his business -- he can consult and help others based on his experience from being a contributor.

## Organize

- Work with your coworkers to make the world better. Your employer may not be as invested as you are in your career growth, and a lot of growth can come from open source. They may not be as willing as you to help move the programming language you use at work forward. So, get your co-workers together and get your employer to prioritize this

## Slides

[https://kev.inburke.com/slides/becoming-go-contributor](https://kev.inburke.com/slides/becoming-go-contributor)
