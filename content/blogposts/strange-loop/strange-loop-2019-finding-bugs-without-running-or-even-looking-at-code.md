---
title: "Strange Loop 2019 - Finding bugs without running or even looking at code"
description: "What if you could find complex bugs in systems without ever having looked at any of the code, without running the code, without cloning the code, or even knowing what language the code is written in or where its git repo lives? What if you could validate the correctness of an architectural proposal before writing code?"
authors:
  - name: Brian Sewell
    url: https://www.linkedin.com/in/brian-sewell-9973b796/
publishDate: 2019-09-13T00:00-13:30
tags: [
  strange-loop
]
slug: strange-loop-2019-finding-bugs-without-running-or-even-looking-at-code
heroImage: https://about.sourcegraph.com/blog/strange-loop-thumbnail-square-v2.jpg
published: true
---

<div className="container p-0 liveblog-presenters d-flex w-100 text-center">
  <div className="row m-0 w-100">
      <p className=" mr-12 m-0 w-100">
        <span className="liveblog-presenters__name">Jay Parlar</span>
        <a href="https://twitter.com/parlar" target="_blank" title="Twitter"><i className="fa fa-twitter pr-2"></i></a>
        <a href="https://github.com/parlarjb" target="_blank" title="GitHub"><i className="fa fa-github pr-2"></i></a>
        <a href="http://parlar.ca" target="_blank" title="Speaker's site"><i className="fa fa-globe pr-2"></i></a>
      </p>
  </div>
</div>

---

## Overview

What if you could find complex bugs in systems without ever having looked at any of the code, without running the code, without cloning the code, or even knowing what language the code is written in or where its git repo lives? What if you could validate the correctness of an architectural proposal before writing code?

---

## How do we currently find bugs?

1. PRs
2. Testing
3. Static analyzers

The problem with these is that these require either your or a tool is looking at your code or your code is running.

## Where to Start with finding bugs

1. **Talking to an expert and writing stuff down**<br/>
As the explainer explains the code, they might find scenarios due to the fact that explaining forces your brain to work in different ways and potentially sees new paths.<br/><br/>

2. **Write down on paper what you know or think you know about your system**<br/>
Writing is nature's way of letting you know how sloppy your thinking is. - quote by Dick Guindon

## What you're probably thinking?

1. How should we write down our thoughts/designs/plans?
2. Did I really come to a talk about bug discovery where the solution is "go talk to people and write stuff down"?

Jay likes to write stuff down in a more formal way to describe systems in a way that not only can he understand but also a computer could understand.

He's not going to just stand here and tell people to write things down, the focus of today
is a tool called Alloy.

[Alloy](http://alloy.lcs.mit.edu/alloy/) is a tool from MIT, from the general class of tools known as a Model Checker.
  
- Describe your formal design in a way that the computer can explore the various scenarios and check state against correctness properties.

## Working Example

- Setting up a permissions system:
    - 3 "things":
        - Accounts
        - Resources
        - Users
    - Rules/Properties:
        - Resources belong to Accounts
        - Users can access some resources
        - Some resources have parent resources
        - accounts have users
    - In the Alloy GUI:
        - "sig" is class or typeDef
    - Steps Taken in Alloy GUI:
      1. Defined sigs for Account, User, Resource
      2. Runs execute multiple times:
          - Instance found: Alloy gives an example of the system so far (2 accounts)
          - Alloy then generates completely different instance: 2 accounts 1 user
          - And again: 2 accounts, 1 resource, 1 user
- The system we talked about had resources and users belonging to accounts, the generated diagram doesn't reflect that.
    - Next Steps Taken in Alloy GUI:
        1. Uses set to add resources/users to account, resources to user
        2. Uses lone to set parent resource (less than or equal to one) attribute on resource
        3. Runs execute: Alloy generates new diagram:
            - User belongs to 2 accounts (bad)
            - Alloy shows this bug, design isn't precise enough
    - Next Steps Taken in Alloy GUI:
        1. Added a fact, which is a constraint for the system that much be true at all times: User can only belong to one Account
        2. Clicks execute, Alloy generates new diagram.
          - User now only has one account
    - New bug: Parent resource1 belongs to Account 0 and resource0 belongs to account1
    - Next Steps Taken in Alloy GUI:
        1. Add new fact
            - IF a resource has a parent, they're both going to belong to the same account
    - New bug: Resource 1 has itself as a parent
    - Next Steps Taken in Alloy GUI:
        1. New fact: There shall no resource that is in it's own chain of parent
            - Ex. Resource 1 can't be a parent of Resource 1
        2. Execute: new diagram a couple of times, new bug!
            - New bug: User has permissions on resource that belongs to another account.
    - Next Steps Taken in Alloy GUI:
        1. Add implies
          -  user with permissions on resources has access to resources account
    - Alloy lets you make assertions, which you can ask it to check to make sure the assertion is met.
    - Next Steps Taken in Alloy GUI:
        1. Add Check/Assertion: Resource belongs to exactly one account
        2. Run execute: Alloy checks: Failed! Resource belongs to no account.
        3. Add fact: Resource should belong to one account, has to be associated to account
        4. Run execute: Failed! Resource belongs to two accounts
        5. Add new fact: No shared resources
    - New Rule/Property: Implicit access to child resources
    - Next Steps Taken in Alloy GUI:
        1. Add predicate: can_access
            - returns true if the resource is in the list of resources a user has access to or if the resource has a parent that the user has access to.
        2. Add new check/assertion: Implicit access
        3. Run execute: New bug! User can't access more than n-1 levels deep.

#### What did we do with this example?

1. Design validation
    - One of the biggest reasons to use a model checker. Helps cover cases that could potentially be unit tests since you can't check them all.
2. Design Exploration
    - Alloy gives you a way to explore possible scenarios a system might enter and lets you decide how to handle them.

### Real Life Example

1. Help model interaction with multiple other systems with Alloy
    - Experiment to test integration of other system into the company's multiple system
        - multiple portals
        - sessions
        - tokens
        - SAML
        - identity provider
    - while modeling, Jay wrote a property.
        - These are useful to help let people know how you think a system works
        - There should be no possible time in which there is some customer portal for which the portal has a token for the user and identity doesn't know about it
    - Found a security flaw:
        - Multiple routings/multiple credentials leads to a token that can't be revoked
        - Found this without ever looking at someone's code
2. Real Life "Design Flaw"
    - API was hard to understand
        - Brought in to help first system integrate with API
    - Model for understanding
        - Can't use the API without understanding the business logic
    - Jay built alloy model from documentation on API
        - API docs were lacking, so Jay would go to Bob (API Dev) for more info
        - Once the model was in a reasonable spot (one day's worth of work), he'd run scenario
        - He'd go back to Bob to refine model based on what's possible or not
        - After two weeks of minimal interactions of back and forth, he realized that the API would not work. The folks who built the Customer Experience UI had a completely different understanding of the API. Ended up scrapping the API
3. [Invalidating the Chord Protocol](http://www.pamelazave.com/chord.html)
    - By Pamela Zave
    - 7 different correctness claims for Chord protocol
    - Pamela put the claims in as checks, Alloy found counter examples
    - she then used alloy to fix it

## Takeaways

1. Write things down!!!
    - Not in code, give your brain a chance to think on things differently
2. Model existing systems
    - People like to make a lot of claims about power of using tools like Alloy for greenfield applications, using Alloy as a blue print.
    - Use it to model existing systems to find improvements.
3. Model new systems
    - Find bugs in the modeling stage

## Resources

- [The Book](https://alloytools.org/book.html)
- [www.aosabook.org/en/500L/the-same-origin-policy.html](https://www.aosabook.org/en/500L/the-same-origin-policy.html)
- [www.hillelwayne.com (Alloy and TLA+)](https://www.hillelwayne.com)
- [lamport.azurewebsites.net/tla/learning.html (TLA+)](https://lamport.azurewebsites.net/tla/learning.html)
    - TLA+ is another modeling language
- [learntla.com (TLA+)](https://learntla.com)
