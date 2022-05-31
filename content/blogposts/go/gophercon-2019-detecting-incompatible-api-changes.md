---
title: "GopherCon 2019 - Detecting incompatible API changes"
description: "Detecting whether your package's API is backwards-compatible is an important problem. You want to know whether your change could break existing users, or whether you're just adding new features. In this tutorial, I'll begin by discussing what we mean by API compatibility. I'll talk about how computing it is harder than it might seem at first, and I'll describe the algorithm I used to write my apidiff tool. Along the way, I'll provide tips on how to future-proof your own code against API breakage. Listeners will emerge with a new appreciation for and a deeper understanding of the Go language, as well as a sense of how to build tools like this one."
authors:
  - name: Carmen Andoh for the GopherCon 2019 Liveblog
publishDate: 2019-07-26T00:00-14:00
tags: [
  gophercon
]
slug: gophercon-2019-detecting-incompatible-api-changes
heroImage: /gophercon2019.png
published: true
---

Presenter: Jonathan Amsterdam

Liveblogger: [Carmen Andoh](https://twitter.com/carmatrocity)

## Overview

Detecting whether your package's API is backwards-compatible is an important problem. You want to know whether your change could break existing users, or whether you're just adding new features. In this tutorial, I'll begin by discussing what we mean by API compatibility. I'll talk about how computing it is harder than it might seem at first, and I'll describe the algorithm I used to write my apidiff tool. Along the way, I'll provide tips on how to future-proof your own code against API breakage. Listeners will emerge with a new appreciation for and a deeper understanding of the Go language, as well as a sense of how to build tools like this one.

---

Greetings, fellow Gophers! I’m Jonathan Amsterdam, and I work on the Go team at Google. 
Today I’d like to talk about how to detect incompatible changes in the API of your Go code.

A few months ago, I was faced with a problem. I was responsible for maintaining a large set of packages, many of which consisted of generated code. I wanted to make sure that breaking changes weren't being introduced, but it wasn’t feasible for me to check all the code by hand. 

And I realized, even when it seems feasible to check compatibility by hand, it’s easy to make mistakes. 

_old_
```go
type S struct {
A int
}
```

_new_
```go
type S struct {
A int
b []int
}
```

For example, here someone added an unexported field to a struct. It’s natural to think, since the field is unexported, that that’s a compatible change. But it isn’t—this change can break your users. I’ll explain why later, but the point is, looking through the diffs of your package, it’s easy to miss something like this.

Anyway, faced with the challenge of detecting compatibility, I had a dangerous thought: 

I’ll write a tool to do it. I figured it would take a couple of days. 
I was wrong. The problem was much harder than I realized, and I made quite a few wrong turns along the way.

*First, I'll explain why compatibility is important.
*Then I'll try to explain what it is.
*Next, I’ll start to describe what compatibility means for Go packages, and we'll immediately run into a serious problem.

I’ll describe how the idea of correspondence fixes that problem.

Then it’s on to the compatibility rules themselves. We’ll talk about which changes to variables, constants, functions and types are backwards-compatible, and which aren’t.

Once we have the rules, the implementation is straightforward. I’ll finish by talking about it briefly, along with a few other thoughts.

### Why compatibility?

Why should we care if we can detect API compatibility?

Well, an API is what's visible to your users, so an incompatible change to the API will break your users. (That's pretty much what incompatible means.) 

So do you want to break your users? Well, maybe. There could be good reasons to do so, like security fixes. But I think we can all agree on this:
You don't want to _unknowingly_ break your users. If you made a breaking change to your code, you want to know about it!

How should detecting API compatibility fit into your workflow? If you’re using modules with semantic versioning (and I hope you are!), there's a clear answer: when it’s time for a new release, see if there were any API changes since the last release.

If there were no API changes, you should bump the patch version.
If there were compatible changes, you should bump the minor version.
If there were incompatible changes, then consider your next move carefully.
If you’re still experimenting with the API (major version zero), then go ahead with the changes.

If you’re at major version one or higher, then an incompatible change requires not only a major version bump, but a new import path. You’ll have to inform your users somehow. Some will switch to the new version, but others won’t, and you’ll have to maintain the old version for approximately forever. 

Perhaps instead you should back out those incompatible changes and make compatible changes instead. For example, instead of changing the signature of method, add a new method and mark the old as deprecated.

If you do decide to go ahead and break your users, at least you did so knowingly.

### What is Compatibility

When I thought about writing a compatibility-checking tool, I started with the question: “What exactly is compatibility, anyway?”

That was my first mistake. It leads to never-ending discussions about how every change is potentially breaking to someone (that’s Hyrum’s law), whether a security or bug fix that breaks users requires a major version bump, and so on. 

So the right question to ask is, not “What is compatibility?” but....

### What do we want compatibility to be?

Since I was writing a computer program, I could define what version of compatibility it computed. Of course, the definition couldn’t be arbitrary. It had to be computable, for one thing. And it had to be useful, or what’s the point? And it was also important to me that the principles underlying the tool were easy to explain and understand. (There are some odd cases that the tool will report as incompatible, even though in fact they are compatible, because including them would have complicated the definition, and in practice you never see them.)

But the flip side of this freedom to define compatibility means that it can’t capture the full, glorious, behavioral, psychological and social meaning of compatibility. It’s limited. 

**A compatibility tool can only advise; it cannot decide. A person must ultimately decide how to use that advice.**

So now that we’re free to pick a definition of compatibility, let’s do it! First, I want to say that we’re going to talk about package compatibility: whether a new instance of a package, after you've made changes to it, is compatible with an old instance. The talk will mostly be at the level of packages, because that’s the hard part, but at the end I’ll give you a definition of compatibility for modules.

Anyway, here was my first attempt at a definition: if you change your package and any user code fails to compile—any possible user code—then you made an incompatible change. 

That seems right—it sounds like something a tool should be able to tell you. It doesn't try to deal with the semantics of your change, whether you altered behavior; that’s clearly not computable. It just tells you if another tool—the compiler—could fail.

But it’s far too strict.

Here’s an example why. 

old: 
```go
type Point struct { X, Y int }
```

new: 
```go
type Point struct { X, Y, Z int }
```

client: 
```go
var p struct { X, Y int } = pkg.Point{}
```

You’ll see a lot of these three-box examples in the talk. The first box shows the original code of the package. The second is the new code, the change. And the last is client code—code that’s outside the package, using it. In the client code, we’ll always call the package “pkg”.

Don’t be confused by the word “client.” there's no networking here; I just mean client in the more general sense of a user. 

In this example, the client code works with the old package, but breaks with the new one. It doesn't compile with the change. That’s why I put it in red.

So what’s going on here? Well, I — the package author — added a field to an exported struct of my package. That seems like it should be a compatible change. I mean, if we can’t add a field to our structs, we are doomed, right? There aren’t going to be too many compatible API changes if this isn’t one of them. We’ve got to make this work!

But it doesn't if you’re going to be strict about it, because of what the client code does. It assigns a value of my struct to a variable whose type is a copy of my original struct definition. It spoofs my struct! You might be surprised that that is legal Go, but it is. So that client compiles with the old code, but not with the new one, because of that new field Z. 

Now the package author might be tempted to say, “You fool! I gave you a name for that struct! Why didn't you use it?” And I think that’s a perfectly reasonable response, though “fool” is a bit harsh. 


Instead of saying that every possible bit of client code has to compile for a change to be compatible, we’ll exclude some problematic constructs. We just saw one: copying a struct literal or other type literal from inside the package. 

Another one is the use of unkeyed struct literals, where you omit the field names when building a struct. Those are fine if you control the struct—if it’s in your own package, for instance. But don’t use them for structs outside your package. There's even a vet check for that one.

It should come as no surprise that we have to exclude the use of the unsafe package from our definition of compile-time compatibility. For example, you can use `unsafe.Sizeof` to get the size of a struct as a compile-time constant, which basically means that any change to the size of the struct could break client code.

You may be familiar with the Go 1 Compatibility Promise, which tries to define what changes to the Go language and standard library are breaking changes. It mentions a few of these same usages. 

By the way, even though we’ve agreed that unkeyed struct literals aren’t our problem, it might still be nice to prevent clients from being able to write them. So here is my first compatibility tip. You can’t write an unkeyed struct literal if there are any unexported fields, so add one, as shown here.

```go
type Point struct {
_ struct{}
  X, Y int
}
```
The underscore is an unexported name, and the empty struct takes up no space, so our struct is no bigger with this change.

So let’s review. We have a working definition of compatible. It’s computable, and it’s useful (or so I claim). But remember that it’s not perfect. You must decide whether to increment the minor or the major version of your module if there are changes. The tool may report no incompatible API changes, but you know you changed behavior so significantly that old clients will get the wrong answers. It may report an incompatible change, but because it’s a security fix, you feel justified in making it without releasing a new major version.

### Compatibility Basics

Now we can get down to the nitty-gritty work of figuring out how to actually do the calculation. We have to compare the old and new packages, identify the changes, and decide if they are compatible or not.

In doing so, we’ll be guided by what I call the Fundamental Rule of Compatibility. If you add something — a function, a method, a field — you’re probably making a compatible change. (We’ll see exceptions to that.)

If you remove something, or change it, you’re probably going to break someone.

Let’s look at some simple examples of that.

IMAGE

Imagine you’re the tool. You see the Point struct in the old package, and the Point struct in the new package. The new one adds a field? Compatible change. The new one removes a field? Incompatible change.

Piece of cake! Looks like we’re on our way.

When I started developing the tool, I basically followed the same thought process I've been taking you through. And it was at this point that I realized I was missing something fundamental.

Here is the first example from the previous slide, the compatible change. I've changed the labels to be filenames, to emphasize that as far as the tool is concerned, we’re basically comparing two different packages. 

So how do we match the “old” Point with the “new” Point?

Well, obviously, they have the same name. And that’s what I implemented, at first. Unfortunately, that’s not quite enough...

It works for other named things—constants, variables and functions—but not for types.

Here’s an example of two types that we want to compare with each other, but that do not have the same name. The old type Point is the new type “p”. We want to match them up because the “Point” alias clearly indicates that they should be matched up.

### Correspondence

So we need a way to determine when an old and a new type correspond. That’s the term I’ll use. They’re not the same, but they match up.

So here’s that example again, where the types don’t have the same name, but there's an alias with the same name.

It looks like we need to take aliases into account. 

It turns out that that is still is not enough, though.

To see why, let’s first understand what’s going on here. In both the old and new packages, there's an unexported type “point”, which has exported fields. And there's an exported variable, P, of type point.

Now, clients of this package cannot use the name “point”; it’s unexported. But clients can refer to P, and since P has exported fields, they can refer to those fields. And as you can see here, you can break clients by changing an unexported type. If we remove the field Y from point, client code that accesses P.Y will stop compiling.

You may have noticed the same thing on the previous slide. There, we had a struct named lowercase “p”—unexported—but thanks to an alias, it also had an exported name: “Point”. This slide shows that that can happen even without aliases.

Where am I going with this? We were hoping that we could decide if two types correspond because they have the same name, taking aliases into account.

But the package author can rename “point” — to, say, “vertex” — and if there are no other changes, client code will not break. That’s an invisible change, even if the fields of the struct are part of the API, as they are here.

When we compare the old and new APIs, we want to compare point with vertex—they correspond.

So it looks like to find which types correspond, we have to consider possible renamings. And that, indeed, is the definition I use for correspondence:

Two type names correspond if they’re the same, or you can rename one to the other without changing the API.

So the good news is, that works. It’s the right definition. 

The bad news is that it feels a little ... hand-wavy. How do you implement it? Do you have to try every renaming?

You don’t. It’s actually easy to implement. When the program compares two symbols of the same name—remember, matching by name is fine for constants, variables and functions—it asserts that the old and new type correspond. 

If one of the types already corresponds to something else, then we have an incompatible change. Otherwise, it records the assertion and moves on.

Here, it compares the old and new variable P, and basically declares that they’re compatible if point and vertex correspond. 

Eventually the program gets to the end, after it traverses the entire API. If nothing has contradicted the assertion, then it was right—the two types correspond.

We need to extend correspondence to all types, not just types with a name.

What we want to do is copy the definition of type identity from the Go language spec, but replace “identical type” throughout the definition with “corresponds”.

For example, the spec says: “Two slice types are identical if they have identical element types.”

So we say: “Two slice types correspond  if they have corresponding element types.”

So if point corresponds with vertex, then these two slice types correspond.


Compatibility Rules

or

COMPATIBILITY RULES! \m/


There are ten rules all together. 

The first one is also the start of the whole comparison algorithm:

Given two packages, an old and and a new, we go through their APIs and compare each package-level exported symbol. That is, the constants, variables, functions and types defined at the top level of the package’s files.

We match symbols by name at this stage. And the fundamental rule of compatibility applies: if a name was removed, that’s an incompatible change; if a name was added, that’s a compatible change.

It’s worth repeating: it’s always a compatible change to add a top-level symbol to your package. You can’t possibly break old code by doing that. There's no way old code could even detect your new symbol, not even by reflection.

And what if the name is present in both the old and new packages? Then the rule depends on the sort of thing we’re looking at. 

We’ll start with variables, because they’re easy.

**Variables**

Two variables are compatible if their types correspond. That’s it for variables. We match up package-level variables by name, and their types must correspond. Now let’s move to functions, which are a little more interesting.

**Functions** 

Here’s the rule for functions. It’s almost as simple as variables, except for one extra bit of wiggle room: you can backwards-compatibly change a function into a variable with the same name and type. You can’t go in the other direction, though. You can’t change a variable to a function, because someone may have assigned to the variable, and you can’t assign to a function.

Now, the part about the type signatures corresponding seems clear enough, but there's something important going on there. The rule precludes something that you really want to do sometimes. And that is to change a function’s signature in a call-compatible way, a way that won’t break any callers.

For example, you could add a variadic argument to the end of a function that didn't have one. That won’t break callers. Any call to the function that compiles with the old signature will pass exactly one integer argument, so it will compile with the new signature.

But the tool considers that a breaking change, because it will break any code that depends on the function signature, like this one. The assignment compiles when the function had the old signature, but it doesn't with the new signature—the old and new signatures are not assignment compatible. The Go spec says that signatures must be identical for an assignment to succeed.

You might find the tool’s judgment here too strict. You might be okay with breaking those uses of your function. You might have warned your clients to avoid assigning the function to a variable or passing it as an argument. That’s fine! (I mean, it’s not fine in my opinion, but let’s pretend it is.) If so, feel free to ignore the tool when it complains. It’s a sign, not a cop. But be prepared for your users to complain.

Now let’s discuss constants.

**Constants**

Two constants are compatible if they have corresponding types and the same value. That may seem obvious, but it’s stricter than what I started with.

IMAGE

I thought it might be OK to remove the type from a constant, making it untyped. That doesn't always work, though. Here the client’s variable x gets the default type of int, so the assignment to y doesn't compile with the new definition of C.

You can’t change a constant’s value either, because a client could use the constant to dimension an array. That changes the type, which could cause the client code to break. Here the left and right hands of the client’s assignment statement have the same type when C is 1, but different types when C is 2.

Now this is a pretty weird case, and maybe we should classify it with unkeyed struct literals and the like and just not worry about it. But then deciding what is a valid change to a constant’s value gets complicated: what if the change in value changes the size of the type?

Also, you could argue that even if you ignored the compile-time problems, changing a constant’s value could have too many runtime effects to be ignored. Maybe the values are being stored persistently; changing them could result in data corruption.

Better to keep it simple and report all changes in the values of constants. 

We’ve covered variables, constants, and functions. Now let’s move on to types.

**Types**

Types are complicated.

We’ll start with defined types. A defined type is a type that you define with a name, like Number here. The type that you give a name to is called the underlying type. Here, it’s int.

There are really only two things you can do with a defined type: use its underlying type in some way, like the variable initialization here; or call one of the defined type’s methods.

The compatibility rules follow from that, but before I show them to you, let’s talk about method sets.

**Method Sets**

Here you see four methods on Number. Two are exported, two are unexported. 

Two are _value_ methods: the receiver is the type itself, Number.

Two are _pointer_ methods: the receiver is a pointer to Number.

We’ll call all the exported methods of a type its exported method set. 
There's the exported method set of Number, and the exported method set of pointer to Number.

Now we’re ready for the compatibility rule on defined types.

**Defined Types**

Remember, the only things you can do with a defined type are use its underlying type, or call one of its methods. The first bullet here covers using the underlying type. For that to be compatible, the underlying types must be compatible.

The second two rules are examples of our Fundamental Rule of Compatibility: you can add, but you can’t remove. They say that it’s okay to add exported methods, but not remove them. That’s good news: adding new methods to a type is a fundamental way of adding features to an API. It’s a good thing it’s OK!

What about unexported methods? You can do whatever you want with them.

Every defined type T has two method sets, one for T and one for pointer to T; we have check them both. 

But isn’t a method call on a value of T interchangeable with one on a pointer to T? So isn’t it compatible to switch a method on T to a method on *T?

The answer is Yes and no.

You can’t change a value method to a pointer method. That breaks calls where the receiver of the call is something you can’t take the address of, as you see here.  Go needs to take the address of the receiver in order to call the pointer method, and it can’t here.

But you can change a pointer method to a value method. That works because the pointer method set is defined to include the value method set. So when you change a pointer method to a value method, you aren’t changing the pointer method set!

How does the client code work with the new version of the package, where P is a value method? Go dereferences the pointer to get a value, then calls the method on that value.

There's a deliberate asymmetry in the language here. You can always call a value method on a pointer, because you can always dereference a pointer to get a value.

But you can’t always call a pointer method on a value, because you can’t always take the address of a value to get a pointer.


But don’t just go around changing pointer methods to value methods. Yes, that will compile, but will it work? Here the client code compiles with both the old and new methods, but only the old method actually changes the receiver. My tool won’t detect this change, because it’s a change in behavior.

We’ve talked about defined types. Let’s move on to channels.

**Channels**

There's only one compatible change you can make to a channel type: you can remove the direction marker. 

For example, if you started with a channel that you can only send on, you can change that to a channel that can either send or receive. That’s clearly safe, because any code that tried to receive from the channel Wouldn't have compiled in the first place.

That’s all I have to say about channels.

Let’s move on to interfaces. 

**Interfaces**

We’ll start with a couple of examples.

IMAGE 
Here my package has an exported interface “I”. A client has defined a type T that implements “I”. 

When I add a method to “I”, I break the client: their type no longer implements the interface, because it’s missing method B.

Here’s a similar example. I start with an interface, but this time it has an unexported method “u”.

My clients cannot simply implement this interface directly. They can’t write the method “u”; it’s unexported in my package. (Writing a “u” method in their own package doesn't work.)

However, they can embed the interface in a struct of their own. When a struct embeds an interface, it implements that interface, even you don’t write any methods. 

That may surprise you. If type T implements interface “I”, then it has a “B” method. What happens when you call B? If you create a zero value of the type, as I do here, then the undefined methods like B panic when they’re called, because the embedded field holding the interface value is nil. 

 But we defined compatibility to be about compiling, not runtime behavior. So adding method `B` to the interface is a compatible change, because the client type `T` implements the interface `I` no matter what.


So that leads us to our rule for interfaces, which we’ll cover in two parts. 

First, if your interface has no unexported methods, then it must remain exactly the same to be backwards-compatible. You can’t add a method, and you can’t remove a method. An interesting violation of the fundamental rule of compatibility.

This is the reason it’s recommended that your package’s functions return concrete types, not interfaces: you can compatibility add methods to a concrete type, as we saw before when talking about defined types; but you can’t compatibly add methods to an interface.

Unless, that is, your interface has an unexported method. Then you can add methods to it, both exported and unexported. You can even remove or change unexported methods.

That’s because clients have to embed your interface to implement it.

That suggests the following tip.

Put an unexported method in your interface so you can make backwards-compatible changes to it.

This works well if your package exports an interface that will be used by other packages. An example would be a package that exports an API implemented by network clients and servers, like the packages generated by gRPC.

But if your own package is consuming the interface, then it gets you out of the compilation frying pan but puts you in the panic fire.

That is, your clients’ code will compile with the new method, and the tool will say you've made a compatible change.  But if your clients pass their types into your package and you call the new method, you’ll get a panic. 

Here, I've added a new method B to my interface—compatibly, thanks to the unexported method “u”. But I also call it from my function F. Clients have to embed my interface to implement and use it, so they keep compiling after the change. But the program panics when they pass their old callback, which doesn't have an implementation of the B method, into my new package, which calls `B`.

In cases like these, you’re better off just defining a new interface that adds a method. Then your code can check dynamically if the new method is there.

Here, instead of adding the new method B to Callback, I make a new type Callback2 that has B. Function F determines at runtime whether the passed callback has a B method or not, by using a type assertion.

Let’s move on to structs. 

**Structs**

You can do only three things with a struct:  write a struct literal, select a field to read or write using a dot, or—this one’s easy to forget—compare two struct values.

If you were new to Go, you might think that the fields you can use in a struct literal are exactly the fields you can access with a dot. But that’s not true, thanks to embedding. Let’s see some examples of how embedding works, so we can formulate the right compatibility rule for structs.


Here’s a struct that originally has four fields. We change it by embedding two other structs in it. The rules of embedding say that the fields B, C and D are promoted and can be selected just like A, with dot notation. So it seems like what we’ve done is backwards-compatible.

But the promotion rule doesn't apply to struct literals. To write a struct literal for S that mentions field B, we would have to explicitly write the name “embed1”. So the last line of client code compiles with the old package but not with the new one. Our change is _not_ backwards-compatible.

In fact, there's no way for client code to fully initialize a value of S, because you can’t write “embed1” or “embed2” outside the package—they’re unexported. The only field a client can set in a struct literal is the field A. In general, you can only write top-level fields in a struct literal: fields that are defined directly in the struct, not in an embedded struct.

Continuing our exploration of embedding, here we start where we left off in the previous slide, with a struct that embeds a couple of unexported structs. Using dot notation, you can access any of the fields A, B, C or D. But all you can do with a struct literal is initialize field A.

Then we change it by moving field C out of embed1 and into embed2. Is that a compatible change?

Yes it is. Client code that referred to C before using a dot can still do so. And we haven’t removed or changed any fields that could be mentioned in a struct literal.

So here are the first two of our three struct compatibility rules. These rules handle the facts about struct literals and dot-notation selection that we’ve just covered. The first addresses struct literals by focusing only on the exported fields at the top level of the struct—not the embedded fields. You can add a top-level exported field, but you can’t remove or change one, or you could break a struct literal.

The second rule handles selection—dot notation. It says, "look at all the exported fields that can be selected." You can add to that set, but not remove. It deliberately doesn't say anything about embedding, it just talks about the set of selectable exported fields, wherever they are. That covers our second example, where the field C moved around compatibly, and all the other cases like it.

After struct literals and field selection, we have comparison, the third way you can use structs. This one is particularly interesting.

The Go spec defines the word comparable to describe a type that can be used with the == or != operators, or as a map key. Basic types like numbers and strings are comparable, as are a few other types.

Slices, maps and functions are not. 

And structs? Well, it depends on the fields. A  struct type is comparable if all its fields are comparable. _All_ its fields, not just exported fields. Let’s see how that plays out.

Here we have a struct that has a single field of type int. Ints are comparable, so `S` is too. 

Now we add an unexported field to S, of slice type. Slices aren’t comparable. And _voilà_, now the struct isn’t either. We’ve broken client code that compared the struct, like the line at the bottom of the slide. And we did that by adding an _unexported_ field. 

If this example looks familiar, it’s because I showed it at the beginning of my talk. 

That brings us to our third compatibility rule for structs: if you have a comparable struct, you have to keep it comparable. 

This is, in my opinion, the most surprising way to break compatibility, and it’s easy to get wrong, because it can happen when you add an unexported field. In fact, when I first ran my tool over the commits of a package I maintained, I found a single violation: several months earlier, I had added an unexported, non-comparable field to a previously comparable struct, breaking compatibility. Luckily, no one complained.

Here’s my third and final compatibility tip: if you want to give yourself the freedom to add any field to a struct backwards-compatibly, make it sure it isn’t comparable from the start. You do that by adding a non-comparable field, like a function. But functions take up space, so instead, use a zero-length array of functions. And make it the type of an unexported field. As a bonus, adding that unexported field also disables unkeyed struct literals, as we saw earlier.

Isn’t that adorable? 🐱

One last category of types to talk about: numeric types. You can compatibly “widen” a numeric type, as long as you don’t change what sort of numeric type it is. You can’t change an int to a float, or even a signed int to an unsigned one, but you can change an int to a bigger int, or a float to a bigger float.

Now wait a minute, you say. That can’t be right. I can’t change an int32 to an int64 in my package without potentially breaking clients, as this example shows.

That’s true. There's something I haven’t mentioned yet. It turns out to simplify things immensely. The compatibility rule for numeric types — in fact, _all the **type** compatibility rules I've been telling you about_ — assume that the type in question is the underlying type of a defined type. Or in plain English, that the type has a name.

According to this definition of compatibility, you can’t compatibly change a type unless you've named it.

As the revised code here shows, if the type has a name, and the client uses the name, it’s OK to widen the type.

Like I said, this applies to all the type rules we talked about. So for example, it’s okay to add a field to a named struct type, but not an anonymous one.

That seems unfortunate, not to say arbitrary. Why require the types to be named? 

Well, like I said, it’s a simplification. Let’s think a bit what would happen if we considered the change on the right to be compatible.

Remember at the beginning of the talk, there was that fool of a client who spoofed our struct, copying the struct literal? Remember what we told them? Use our name!

If we don’t give them a name, we can hardly blame our clients for copying the type. It seems wrong to call adding a field a compatible change when it’s likely to break clients, who really have no choice.

And what about this case, where there are two variables defined whose types are the same struct literal? It looks like we have to change both in the same way to have a compatible change, since if we don’t, clients that use the two together can break. Should we look at every struct literal in the package to see which are identical, and require the changes to be in lockstep?

It feels like things are getting complicated. I mean, more complicated than they already are. And the cases we’ve been talking about, like declaring an exported variable to be an anonymous struct type, are pretty rare.

In the spirit of Go, I chose to keep it simple: you have to name a type to change it.

And if you think about it, there's something intuitively satisfying about that. The name is the fixed point around which the changes happen.

There is one more compatibility rule. 

This one isn’t about individual types, but how they fit together in the package.

Here we have a type T that implements an interface “I”. 

We then change T by removing an unexported method. That is a compatible change to T; you can do anything you want with unexported methods.

Except now, T no longer implements “I”, and client code can break.

So we need one more compatibility rule, which checks to make sure that all the interface satisfactions of the old package still hold in the new package.

And that concludes our definition of package compatibility.

### Odds and Ends

So far, we’ve only talked about package compatibility. But we really care about module compatibility; modules are the things that have versions attached to them.

Happily, the package compatibility rules we just covered do most of the work. We just have to make sure that every package in the old module is compatible with the same package in the new module—where by “same package,” I mean the package with the same import path. Packages are identified by import path.

We only care about packages you can see outside the module, so internal packages don’t matter.

There's one wrinkle, an interesting violation of the Fundamental Rule of Compatibility: you can remove a package from a module and maintain compatibility, as long as you move it to another module and make sure that your original module requires that other module. In order for the package import path to stay the same, that other module must be nested inside the first. 

Let’s look at an example of that.

**Creating a Nested Module: Before**

IMAGE

Here we have a directory tree. At the root is directory a, which holds a Go package. It also has a go.mod file, so it’s the root of a module.

There are sub-directories “b” and “c”, also Go packages. All together, the module “a” contains three packages: “a”, “a/b”, and “a/c.”.

**Creating a Nested Module: After**

Here, we’ve split package “a/b” off into its own module, by adding a go.mod file to the “b” directory. We’ll call a/b a nested module.

This is perfectly valid, but to make it work you’ll need to do two things, represented by the arrows. 

First, you have to make module “a” require module “a/b”. That’s what I mentioned a couple of slides ago. It’s required for the new module “a” to be backwards-compatible with the old: it ensures that any uses of module “a” will continue to get package “a/b”.

The second thing you have to do is make module “a/b” require module “a”—specifically, this version of “a,” the one that has “b” split off.  If you don’t do that and you mix module “a/b” with an older version of “a”, you’ll get an error that package “a/b” is duplicated.

To understand why this works—why you can compatibly remove a package from a module—take a look at the list of packages on the right. They’re the same as they were before the split. Your code—you know, the thing you actually compile—only cares about packages, not modules. It just imports packages by import paths. Modules are about delivering and versioning code, not compiling it. 

Now that I've told you about nested modules, I have one piece of advice: avoid them if you can. They can be tricky to work with.

A few words about the implementation of my compatibility tool.

Once I had the compatibility rules, building the tool was straightforward thanks to the excellent packages for working with Go source code like go/types, go/constant and go/packages. (go/packages isn’t part of the standard library -- at least not yet -- hence the longer import path.)

go/types in particular does so much for you that it feels like cheating. For example, this is the actual code for the third struct rule I talked about. The rule in English was “If the old struct is comparable, so is the new one.” Thanks to the Comparable function in go/types, I can just write that down in code.

go/types computes method sets, too. The only hard thing go/types didn't do for me was computing selectable exported fields of a struct.  I had to write that myself. To get the semantics right, you need to do a breadth-first walk of the embedded structs.

One last tricky bit: how do you compare two different versions of the same package? Especially if you’re using something like git, which (unless you get fancy) only lets you have a single commit on disk at a time? The solution is to use export data, a file format that contains all the necessary type and syntax information about a package. Happily, there is a package that reads and writes export data for you. You compute the export data for one commit, save it to a file, then visit the other commit and compare.

If you want to know more about the compatibility rules I described, including many subtleties I did not have time to discuss, here’s the link to the README for the tool, which acts as a spec.

https://golang.org/s/apidiff-readme

Play with the tool:
go get golang.org/x/exp/cmd/apidiff

You can also play with the tool if you want, but keep in mind that the tool binary itself will likely disappear. It will be absorbed into a tool we’re calling “gorelease”.

gorelease  will compare the public API of a module with a previous version, telling you whether it's safe to tag a minor or patch release. It will also catch common module errors like not changing the module path before tagging a new major version. gorelease isn't quite ready yet, but stay tuned!




