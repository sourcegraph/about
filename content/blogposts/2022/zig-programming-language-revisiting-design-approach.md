---
title: 'Revisiting the design approach to the Zig programming language'
authors:
  - name: Beyang Liu
    url: https://twitter.com/beyang
  - name: Justin Dorfman
    url: https://twitter.com/jdorfman
publishDate: 2022-08-29T10:00-07:00
description: 'Zig is a general-purpose programming language that can act as a drop-in replacement for C / C++, letting you incrementally improve your code base.'
tags: [blog]
slug: 'zig-programming-language-revisiting-design-approach'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/design-approach-zig-language-1200x675-2.jpg
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/design-approach-zig-language-1200x675-2.jpg
---

<iframe width="100%" height="415" src="https://www.youtube.com/embed/gn3YsZ6HUHw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br />

C and C++ are everywhere, but the security issues and bugs caused by their lack of modern features are everywhere too (by some estimates, 80% of vulnerabilities are related to buffer overflows).

What if you could wave a magic wand over your C or C++ codebase and make it better? This is the promise of Zig.

Zig is a general-purpose programming language that can act as a drop-in replacement for C / C++, letting you incrementally improve your code base.

We chatted to Andrew Kelley, creator of Zig, on the [Sourcegraph podcast](https://about.sourcegraph.com/podcast/andrew-kelley) to learn more about this interesting new language and the awesome early community around it.

### The Philosophy of Zig

<br />

Andrew aims for Zig to be the successor to C.

"The Zig project for me," Andrew tells us, "was peeling off these abstraction layers [of C] that we've all taken for granted and examining their foundational premises and saying, 'Is that really how it has to work? Let's question some of this stuff. Maybe it can be better'."

While investigating why features in C operate the way they do, Andrew came to realize that the reasoning behind many of them are not well justified.

This foundationalist approach has informed Andrew's design of Zig from its earliest iterations. The Zig philosophy, Andrew says, begins with the first principle: "Avoid local maximums." In other words, in shaping Zig, Andrew and his team avoid settling for what is the most comfortable by pushing beyond a perceived limit. Instead, they aim to reach a “global maximum”, the best possible state of the language.

Reaching for a “global maximum” is not always the easiest option. Sometimes, to get the best possible result, a few steps backwards need to be taken. Andrew says, "We're not satisfied with just close enough. We really are willing to break things in order to put them back together, in a better way."

The result? Unlike its predecessor, Zig has no preprocessor, no macros, and no hidden control flow – Zig challenges the common notion that these features are optimal or even necessary. Zig's memory allocation is more intuitive than C's. And it even beats C in performance.

Zig's design is a fundamental overhaul of the C programming language.

### Zig's design approach in action

![](https://storage.googleapis.com/sourcegraph-assets/blog/design-approach-zig-language-1200x675-2.jpg)

“But why?” became Andrew's catchphrase as he questioned C's fundamental features and tackled programmers' uninterrogated assumptions about them.

For example, he asks, “Why use #define and not a constant?” Many programmers may not even think about why, or they'll point out that the #define is a preprocessor directive but a constant is not. But this only explains what _is_ the case, not _why_ it needs to be like this.

“I'll tell you the answer,” Andrew says. “The answer is because if you try to use a constant in a place that you'd expect to be able to use it, for example, just the length of an array, it won't work. It will give you a compile error.”

In other words, it shouldn't have to be that way. “In Zig,” Andrew says, “we just fixed that so it works. That's it. That's the difference.”

What this design approach revealed to Andrew is that by fixing the illogical aspects of C, you can skip the preprocessor altogether.

Instead, Zig uses conditional compilation. This is the key distinction between Zig and C: It's important to Zig if the condition of an if statement is compile-time-known. If there are compile errors in the dead branch of an if statement, they won't be evaluated.

This is how Zig can drop some of C's features, while still being able to maintain (and even increase) usability, security, and speed. The benefits of taking a different philosophical approach is that from these changes, new behaviors emerge.

### Features fall into your lap

<br />

Andrew started out designing Zig to “fix the warts of C.” But once he got going, he says, other features “fell into my lap.”

Here are some of these emerging behaviors in Zig:

#### Zig allocators

<br />

Zig takes a different approach to memory allocation: There is no global allocator in Zig; rather, custom allocators are passed around if memory is needed, allowing the standard library to be used in environments where it otherwise could not be used, like the kernel or an arduino.

The point of this approach to memory allocation in Zig is to avoid hidden memory allocation. Hidden allocation can interfere with control flow and function calls in unintuitive ways, making it harder to reuse code with a guarantee that there will be no interference.

In Zig, memory allocators are optional standard library features, rather than being built into the language itself. These allocators are customizable, so malloc() could be used when working on a desktop, but a kernel allocator from the standard library could be used when working on a kernel and you won't have to rewrite your HashMap data structure.

By convention, Zig has a global allocator that you're encouraged to use for all your unit tests that will fail the unit test if there's a memory leak, before you even run your code.

#### Speed and safety. No compromise

<br />

Zig is faster than C. This is partly a result of Andrew's data-oriented design approach that led to performance-enhancing changes in Zig programming that would not be possible in other languages.

Andrew's model of how the cache system of CPUs work is intuitive: [The less memory is touched](https://youtu.be/gn3YsZ6HUHw?t=3958), the less pressure there will be on the CPU. Working from this observation, Andrew focused on reducing the amount of memory used by objects created in Zig's self-hosted compiler. This means that less memory is used in the compiler and that there is less pressure on the cache of the CPU, making the code faster and improving Zig's speed by as much as 35%.

This type of optimization, Andrew explains, would not be possible in languages like Rust. One of the core components of Zig's boost in performance is untagged unions. By putting the tags in a separate array, pressure on the cache is reduced. In Rust, however, you can't use untagged unions without making your code unsafe.

So, here is the trade-off in Rust: Write safe code that is faster, but lose the ability to fully exploit the hardware of your computer, or write unsafe code with full performance. Zig differs from Rust in that it allows for both: Users can write faster code that is made safe through safety checks on untagged unions.

Zig's more incremental approach to safety has allowed it to avoid the pitfalls of a safety design that has to conform to a “grand universal scheme”.

### Design shapes the developer experience

<br />

Andrew's design decisions in creating Zig have made the language performant and versatile. But they have also helped to shape the developer experience, and an active developer community has sprung up around Zig.

At the heart of Zig's design is a philosophy that puts the user first by focusing on usability and intuitive features. The Zig website documents the “Zen of Zig”:

#### [The Zen of Zig](https://ziglang.org/documentation/0.9.1/#toc-Zen)

* Communicate intent precisely.
* Edge cases matter.
* Favor reading code over writing code.
* Only one obvious way to do things.
* Runtime crashes are better than bugs.
* Compile errors are better than runtime crashes.
* Incremental improvements.
* Avoid local maximums.
* Reduce the amount one must remember.
* Focus on code rather than style.
* Resource allocation may fail; resource deallocation must succeed.
* Memory is a resource.
* Together we serve the users.

Zig is intentionally accessible, so any developer who knows C can easily map the concepts of the language and reference them one-to-one with C. The differences between the languages are largely philosophical, and come down to how certain problems are solved specifically with Zig's conditional compilation.

Zig favors simplicity over multiple features, and there is often only one way to solve a particular problem. This has a number of advantages: Zig is comparatively easy to understand in its entirety and a developer can become productive quickly; once you have a grasp of Zig, reading someone else's code won't require learning new features of the language and you'll be able to figure out what it does.

Zig challenges the assumptions that developers may take for granted on a daily basis, leading to a faster, innovative, and intuitive language that sets a precedent for what good design can do for programming languages.

Check out Zig's webpage to find out more about the language, and tune into the [Sourcegraph Podcast](https://www.youtube.com/playlist?list=PL6zLuuRVa1_jf5GDl61SvEOXvwvKS1IXA) to hear from other inspiring creators in the developer community.

---
<br />

_Special thanks to Andrew Kelly_

### More posts like this

<p class="mt-3 mb-3">
<a href="https://sourcegraph.substack.com/p/subscribe" class="btn btn-primary mr-1 mb-1">Subscribe to technical posts</a>
&nbsp;
<a href="https://discord.gg/SSCBGByJeu" class="btn btn-primary">Join our Discord</a>
</p>

* [A dev's thoughts on developer productivity](https://about.sourcegraph.com/blog/developer-productivity-thoughts)
* [How NativeScript Onboards New Open Source Contributors](https://about.sourcegraph.com/blog/how-nativeScript-onboards-new-open-source-contributors)
