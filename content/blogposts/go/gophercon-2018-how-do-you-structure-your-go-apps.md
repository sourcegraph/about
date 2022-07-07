---
title: 'GopherCon 2018 - How Do You  Structure Your Go Apps?'
authors:
  - name: Matt King for the GopherCon Liveblog
publishDate: 2018-08-28T00:00-06:00
tags: [
  "gophercon"
]
slug: gophercon-2018-how-do-you-structure-your-go-apps
description: 'How should I structure my Go code?” is probably one of the most commonly asked questions, by new and experienced programmers alike. There is almost always more than one answer and it can be tricky to decide what will work best.'
heroImage: https://images.ctfassets.net/le3mxztn6yoo/5nOlXCLdhSk6ESWEW8iC24/01978fdff3206c78ad8bee4c0cdfee87/mechanic-tire.jpg
published: true
---

Presenter: [Kat Zień](https://www.gophercon.com/agenda/speakers/301721)

Liveblogger: [Matt King](https://github.com/kattmingming)

How should I structure my Go code?” is probably one of the most commonly asked questions, by new and experienced programmers alike. There is almost always more than one answer and it can be tricky to decide what will work best.

Should I keep all my files under one directory or should I split them up? How should I divide my code and into what packages? Can I write object-oriented code in Go? Why do some projects have a cmd directory and what is the advantage of that?

![dltmtnluyaemt6p](https://user-images.githubusercontent.com/4897310/44753243-a4d7d200-aada-11e8-83e5-3a8aa13f66b2.jpg)
(Photo credit: arbourdx)

## Summary
To answer the question, “How should I structure my Go code?” Kat first provides an overview of common design patterns such as:
- Flat structure
- Layered
- Modular

Throughout the talk, Kat clearly demonstrates the importance of having consistent structure that is simple, testable, and easy to understand. This leads into a discussion and example project using the design driven development approach.

One of the most important principals of the design driven development approach is that the structure of the project should reflect how the software works.

The [demo app](https://github.com/katzien/go-structure-examples) is a real world example of a high quality, clear, and, maintainable project structure.

## Understanding the Beer Reviewing Service

Kat answers the opening question by building a beer reviewing service that has a simple, but realistic set of requirements.

**The Requirements**
- Users can add a beer.
- Users can add a review for a beer.
- Users can list all beers.
- Users can list all reviews for a given beer.
- Option to store data either in memory or in a JSON file.
- Ability to add some sample data.

## Types of Structure
There's a variety of ways one can dive in and start organizing a project. Some common ways of the beer reviewing service could be structured are:
- [Flat Structure](https://sourcegraph.com/github.com/katzien/go-structure-examples@master/-/tree/flat)

<Figure 
  alt="Flat structure" 
  src="https://user-images.githubusercontent.com/4897310/44753563-c2f20200-aadb-11e8-908d-16803b637fe4.png"
/>

  - Start with the obvious one, a flat structure. Don't over complicate things too early.

As the application gets more complex we can try other approaches:
- [Layered](https://sourcegraph.com/github.com/katzien/go-structure-examples@master/-/tree/layered)
  - A layered architecture approach that places files that interact with similar areas in the same directory.
  - This grouping by functional type is a classic MVC used by a lot of frameworks.

<Figure 
  alt="Group by function" 
  src="https://user-images.githubusercontent.com/4897310/44753601-ddc47680-aadb-11e8-882c-54e7d9ebb8ef.png"
/>

However, there are some issues with the group by function approach. For example, it could be problematic if a variable needs to be shared by two different layers, which layer do you put it in? Or do you duplicate? Or it could be tough to understand where does initialization go? Does main initialize a storage shared between models, or does each model initialize their own storage.

- [Modular](https://sourcegraph.com/github.com/katzien/go-structure-examples@master/-/tree/modular)
  - Beers, reviews and storage
    - Everything is grouped logically, but it’s still hard to decide which packages should be reused or when to make a new package.

<Figure 
  alt="Group by module" 
  src="https://user-images.githubusercontent.com/4897310/44753609-e6b54800-aadb-11e8-8d3e-73698cc0da4a.png"
/>

There's a different approach that we can try - Grouping by context or also known as Domain Driven Development.

## Domain Driven Development
Domain driven development works by first establishing your domain and business logic. It makes you think about the domain you’re dealing with and the business logic in your app before you even write a single line of code. Next, you’ll define bounded contexts which help you decide what has to be consistent and what can develop independently.

We can use the demo project to better understand each of the building blocks of the system:

- Context: beer tasting.
  - Drinking the beer and wanting to review it has a specific meaning. It may have ABV that matters whereas the barcode does not matter. If we had an additional context like a beer manufacturer they would care about the barcode.
- Language: beer, review, storage
  - It’s important to define the language used in the codebase. All stakeholders should know they can use. Developers, customer service, or the sales team.
- Entities: Beer, review
  - Entities are an abstract concept that can then have instances. A customer, an order, a blog post are all entities that can be instantiated.
- Value Objects: Brewery, Author
  - Value Objects represents a part of an entity - much more like properties.
- Aggregates: BeerReview
  - The BeerReview aggregate is the composition of two entities that cannot exist by themselves. A beer review requires beer and a review.
- Service: Beer adder / adding, review adder, beer lister, review lister.
- Events: Beer added, review added, beer already exists, beer not found.
  - Capture something interesting that happened in the application.
- Repository: Beer repository, review repository
  - Provides a facade over some backing store that exists between the domain logic and the application storage.

These building blocks result in a new type of structure: [Group by Context](https://sourcegraph.com/github.com/katzien/go-structure-examples@master/-/tree/domain)

In the real world you could be dealing with this type of complexity so this is a perfect example that takes a very academic concept and makes a fully functional application out of it.

## Hexagonal Architecture

<Figure 
  alt="Hexagonal architecture" 
  src="https://user-images.githubusercontent.com/4897310/44753508-90480980-aadb-11e8-8362-7f01b5b1fb7f.png"
/>

Hexagonal architecture helps achieve the goal of being able to easily change one part of the application without having to rewrite the entire thing. The key rule in the hex model is that dependencies are only allowed to point inwards.

The outer layer in the hex model can reach out to the domain as much as they like, but the domain cannot reference anything outside of it. This implies a heavy use of interfaces and Inversion of Control, and we define interfaces at every boundary to abstract away the details for each layer.
- Core domain will define the business logic in abstract term.
- Then the rest of the application which implements the core domain functionality will define their own storage functionality that they need from 3rd parties.
- The particular storage implementation will have to satisfy that interface.
- This means that as long as the interface required by the inner layer is satisfied, we can swap the outer layer implementations easily.

In the demo application we end up with the following architecture:

<Figure 
  alt="Hexagonal architecture outcome" 
  src="https://user-images.githubusercontent.com/4897310/44753500-8920fb80-aadb-11e8-8243-f2ebd1f0a4d7.png"
/>

A huge benefit of this structure that becomes more visible in larger projects, is how it is very easy to extend it’s functionality without affecting multiple parts of the codebase. For example, you want to create an RPC version of the API. You would add it to the `pkg` directory and implement the interfaces.

## Pulling it all together
The convention seems to be putting your binaries in a separate top-level `cmd` directory. If your project is large and has non-Go assets, use a `pkg`/subdirectory to separate your Go code. It’s also favorable to group by context instead of functionality to the issues mentioned in other design patterns.

Although there is no single success formula, it’s helpful to know all of the possible approaches and practice implementing the various architectures to become more comfortable.
