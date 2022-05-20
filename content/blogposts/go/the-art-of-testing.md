---
title: 'The Art of Testing'
authors:
  - name: Mat Ryer (speaker)
publishDate: 2017-11-06T11:45+01:00
tags: [
  "dotGo"
]
slug: the-art-of-testing
heroImage: https://images.ctfassets.net/le3mxztn6yoo/2w5ubsfTaMYQY24kCOeeKi/6bed02d745c1586984ad128466df2cbb/IMG_0020.jpg
published: true
description: 'dotGo 2017: The Art of Testing'
---

Note: This post was live-blogged at [dotGo 2017](https://www.dotgo.eu/). Let us know on Twitter ([@sourcegraph](https://twitter.com/sourcegraph)) if we missed anything. All content is from the talk; any mistakes or misrepresentations are our fault, not the speaker's.

---

[Mat Ryer](https://twitter.com/matryer) is talking about the art of testing. He contributes to several Go libraries, including the popular testing toolkit [stretchr/testify](https://github.com/stretchr/testify). He wrote the book [Go Programming Blueprints (2nd Edition)](https://www.amazon.com/Go-Programming-Blueprints-Mat-Ryer/dp/1786468948), hails from London, and blogs at [medium.com/@matryer](https://medium.com/@matryer).

Mat's passionate about testing for many reasons, the most provocative of which is this prediction:

> In the future, we'll just write test code, and machines will write the programs.

# Testing principles

Just so we're all on the same page, Mat laid out his testing principles.

## Why do we write tests?
Maintainability is the main reason. We should be more obsessed with the maintainability of our code than we are. How long it takes to build matters a lot less than the cost of maintenance.

Also:

* So we can sleep at night
* To encode our promises about code's behavior
* To give confidence while making big refactors
* To understand the impact of changes

## The downsides of tests

* ~~Tests can slow down development~~ (Mat disputes this downside but acknowledges many people believe it)
* Tests can be brittle and make it harder to change implementations
* Bad tests are worse than no tests
* Tests can introduce complexity by how they require implementation code to introduce abstractions used only for testability

The rest of Mat's talk is about how to get the benefits of testing while avoiding these downsides.


# What makes tests *bad*?

Don't just write tests that repeat the code. If you find you're writing logic in the test that mimics the thing that's being tested, then your test is probably misguided.

Don't check things you didn't write. If your test tests behavior from library code that is already well tested, it's probably not the right test.

Write tests that are deterministic. Flaky tests are worse than no tests (in many cases).

Don't strive for 100% code coverage unless it's truly necessary.

# What makes tests *lovely*?

Test the what, not the how. Don't couple your tests too closely to any particular implementation.

A failed test should point to the problem. If a test isn't able to provide a helpful error message, it's a sign that the test might be too broad.

Tests should be easy to read. Mat's [matryer/is](https://github.com/matryer/is) testing library is a great example of his attempt at making test code read smoothly.

Tests should have comments, just like main code. For example: `// TestFoo ...` before a `func TestFoo(t *testing.T) { ...`.

Mock dependencies, but don't go too far. What does "too far" mean? Usually you shouldn't mock the file system. You can just write to a temporary directory. (Mat plugged his [matryer/moq](https://github.com/matyer/moq) project for mocking Go interfaces.)

Test special errors only. Typically you don't need to check the specific messages of errors (except those error types that you define yourself).

Test at the right level. Sometimes this means a very focused unit test, but sometimes you can test more of your stack for free (and catch integration bugs you might not have anticipated).
