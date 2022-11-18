---
title: 'Migrating from Monaco Editor to CodeMirror'
description: We migrated our search input from Monaco to CodeMirror6. It's been a delightful experience and we are now migrating our Notebooks and other functionality too.
authors:
  - name: Felix Kling
    url: https://twitter.com/fkling42
  - name: Justin Dorfman
    url: https://twitter.com/jdorfman
publishDate: 2022-10-25T10:00-07:00
tags: [blog]
slug: migrating-monaco-codemirror
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/codemirror-vs-monaco/image-hero.jpg
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/codemirror-vs-monaco/image-social.jpg
published: true 
---

**Some developers argue about the best text editors and IDEs, but what about editors for the web?**

We recently migrated Sourcegraph.com away from Monaco, the code editor component that powers VS Code, to CodeMirror. CodeMirror is one of the earliest web-based code editors, which recently released a new version (CodeMirror 6), which is growing in popularity but, for now, still far behind Monaco.

![GitHub Star history graph of Monaco, Code Mirror 5 and Code Mirror 6](https://storage.googleapis.com/sourcegraph-assets/blog/codemirror-vs-monaco/image5.png)

Monaco is a popular choice if you need to embed a code editor into a browser. It was working well enough for most of our needs, and as it’s maintained by Microsoft and integral to VS Code, we knew we’d be able to rely on it for the foreseeable future, so why did we switch?

**TL;DR**

* Monaco gives you a lot out of the box, but it’s pretty hard to configure or trim down on features you don’t need.
* Monaco’s documentation is not great, so we couldn’t always figure out if it was possible to make it do what we needed.
* Monaco has a global reference model, which makes it tricky to run several instances of it on the same page with small configuration differences.
* In terms of code size, Monaco accounted for a whopping 40% of our external dependencies.
* CodeMirror has already been adopted by other large projects such as Replit and Chrome’s developer tools, indicating that it isn’t going to disappear any time soon.

We’re still getting to know CodeMirror, but so far it has solved all of the above problems and has been delightful to use. It’s been the default component for our search input since May 2022, and we’ll be using it for a lot more in future releases of Sourcegraph!

## A deceptively simple text input: Our search box

As a search company, you might wonder why we even need a code editor. If you visit Google.com, you see the famous minimalism of a white text input on a white page, and if you visit [https://sourcegraph.com/search](https://sourcegraph.com/search) (our public instance of Sourcegraph that lets you search through millions of open source repositories), it probably looks more like the Google homepage than a coding IDE, which is what Monaco and CodeMirror are built for.

![A screenshot of the Sourcegraph search input](https://storage.googleapis.com/sourcegraph-assets/blog/codemirror-vs-monaco/image6.png)

But there are many features hidden in this bar that you are probably used to from your IDE.

Searches get complicated, so we provide syntax highlighting to help navigate the different components (for example, “lang” is highlighted as it is defining a filter and the escaped brackets are highlighted to indicate that they are a matching pair).

We also need tooltips, so our users can mouse over the options on the right or over the components of the query they are writing to get more information and tips.

Finally, we need autocomplete and error diagnostics to help developers write queries as fast as they can think of them and to pre-emptively warn developers before they submit invalid queries.

We’ve been achieving most of this with Monaco for years now, and although it always _mainly_ worked, there were a bunch of niggling issues that we’ve been wanting to address for ages.

## Advocating for a rewrite

Proposing a rewrite is never the easiest thing to do, as often a rewrite is a tempting but incorrect choice. As an engineer in the [search product team](https://handbook.sourcegraph.com/departments/engineering/teams/search/product/), I proposed an experiment that we should investigate other options before spending more time and effort trying to bend Monaco to our needs.

After following our [RFC process](https://handbook.sourcegraph.com/company-info-and-process/communication/rfcs/) to create [RFC 637](https://www.google.com/url?q=https://docs.google.com/document/d/1vwR0YnaAv2GOzGg8ggsjUJeKmPZgZv9W-YOFmGnZwxI/&sa=D&source=docs&ust=1666261908137241&usg=AOvVaw25E4z63uJVfgtWHtpB2s4Y), I managed to complete a proof-of-concept and used CodeMirror to replace 90% of our existing Monaco functionality in just two days of work. I was immediately sold on CodeMirror and knew it would be a much better option, and saw the potential to replace not just our Search input, but also our dynamic notebooks and our file reader.

Using CodeMirror felt like playing with lego: I had this set of bricks and I felt like I could build anything I needed.

Although similar, in many ways CodeMirror turned out to be the exact opposite of Monaco. Monaco gives you a full IDE by default. This includes a multi-line editor, and a code “minimap” — a rich preview of the entire open file that lets you scroll to a specific place in the file more easily. These are great features, but we didn’t need either for our search input, and with Monaco it wasn’t even obvious how to get a single-line input instead of a multi-line editor.

By contrast, CodeMirror is more minimalist and modular. You don’t get as much by default, but you can build exactly what you want by adding and configuring various components. The [first CodeMirror PR](https://github.com/sourcegraph/sourcegraph/pull/32446/files) only needed a few hundred lines of JavaScript and CSS changes, as well as some additional changes to implement different editor options as a feature flag.

## The problems we had with Monaco and how CodeMirror fixed them

Many of the problems we had with Monaco were not deal breakers on their own, which is why we used the component for so long. But together the irritants added up. Some of the main issues we had with our Monaco implementation included:

* **Size**: Monaco pushed the amount of JavaScript code that we download on our [search page](https://sourcegraph.com/search) to 6MB.
* **Single-line editor**: Unlike most IDEs, our search input is a single-line input… most of the time.
* **CSS integration**: To customize the look of Monaco, we had to hard-code hex color codes into our JavaScript instead of being able to use our site-wide CSS classes and variables.
* **Global configuration**: It’s tricky to render several Monaco instances per page, each with a slightly different configuration.
* **Placeholder text**: There has been a long-standing open issue with Monaco requesting a feature to enable a placeholder or default value.
* **Code cleanliness**: We had some nasty hacks to make Monaco do what we wanted it to.

If you’re interested in the details, we go into each point in depth below.

### Size: Shrinking the JavaScript downloaded on our search page by 43%

![A bar chart showing 6MB with Monaco compared to 3.4MB with CodeMirror](https://storage.googleapis.com/sourcegraph-assets/blog/codemirror-vs-monaco/image2.jpg)

Over time, this code grew to 6MB. Even with modern web browsers and advanced caching techniques, this can hurt performance. Even though we optimized our Monaco bundle to remove features we weren’t using, just Monaco itself still amounted to a 2.4 MB download — which is 40% of all the JavaScript for our search page.

Our original plan was to use CodeMirror instead of Monaco for our search box, but we’re so impressed with it that we’re replacing all instances of Monaco with CodeMirror.

By being able to remove Monaco as a dependency, we’ve reduced our JavaScript download to 3.4MB: a 43% improvement just by swapping out a single dependency.

While there might be ways we could have optimized our Monaco bundle size more, we love that with CodeMirror we don’t get anything we don’t need _by default_, so there’s no need to spend time and effort ripping out parts of the library to save precious bytes.

### Switching between single-line and multi-line editing

Monaco gives you a full multi-line editor by default, and it’s not obvious how to turn this into a single-line editor, which we need for our search input. While we figured out how to do that, we don’t _always_ want a single-line input. On small-screen devices, our search input adapts to multiple lines. In this case, we always put the search controls (like toggling regex mode on or off) as well as the actual search button on a row beneath the input, but — more importantly — the search also wraps the query intelligently, so the input itself needs to seamlessly switch from single-line to multi-line.

In the image below you can see how our mobile search input grows as necessary to fit a long query, compared to the same query in a single-line editor from our desktop site.

![multi line and single line views](https://storage.googleapis.com/sourcegraph-assets/blog/codemirror-vs-monaco/image7.jpg)

This was hard to get right with Monaco. We had to add some custom configuration hacks, and even then it wasn’t working as smoothly as we would want. We expected this to be a challenge with CodeMirror too, but to our surprise, it just worked by default.

### Integrating with our CSS framework

We have hundreds of websites and pages at Sourcegraph. Our CSS is organized into classes and variables, with all of the colors we use defined in a single place. This means our designers can easily push cosmetic touch-ups or theme updates out across our entire web presence with a single change.

The one exception? Monaco.

To customize colors in Monaco, you have to define hex codes in JavaScript. Because we have mockups and demos of various functionality written in HTML and CSS, we had to manually synchronize any changes between our global colors file and Monaco.

This process was error-prone and led to bugs on more than one occasion, where the Monaco configuration did not get updated or was updated with different colors than our global CSS.

With CodeMirror, we can easily integrate our colors file, and now any theme updates are automatically applied across our marketing pages and our live editor.

CodeMirror lets us delete a lot of code related to color configuration, and simplify it too. Below you can see a sample of our Monaco color configuration code on the left (in reality, there’s a lot more which you can see [here](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@833d424ac1eca090c56d944526a98ac8a3d09a09/-/blob/client/shared/src/components/MonacoEditor.tsx?L25-160)) and how much it could be simplified using CodeMirror on the right.

![Many lines of code with a warning compared to six lines of code](https://storage.googleapis.com/sourcegraph-assets/blog/codemirror-vs-monaco/image4.jpg)

### Global vs per-instance language configuration

Monaco and CodeMirror handle configuration slightly differently. Monaco has a global shared state for defining the language, and this language affects syntax highlighting, auto-completion, and other parts of the editor.

This isn’t a problem for our search page, where we use only a single instance of the editor. But in our [Notebooks](https://docs.sourcegraph.com/notebooks), we have different blocks on the same page. Our Notebooks however have different kinds of search blocks (for example, we might have a single notebook with a normal search box and a symbol search box).

These different blocks use slightly different configurations, but because the Monaco instances share a global state, we need to register each configuration separately with a unique language ID, although the differences in configuration are fairly minor.

With CodeMirror, each instance on a page is completely independent and uses only the state local to that instance, so it’s far easier to configure the different search blocks.

This also eliminates a whole potential class of bugs where adding a new block with a slightly different configuration can affect previously added blocks on the same page.

### Adding placeholder text

With Monaco, we couldn’t display placeholder text in our search input. This wasn’t a huge problem for us, but it’s a great example of one of the many tiny, niggling problems we had with Monaco that added up so that it finally made sense to switch to something else. There’s been [an open issue](https://github.com/microsoft/monaco-editor/issues/568) about this in the Monaco repository since 2017, and the hacky workaround involves overlaying elements to simulate placeholder text.

![The Sourcegraph search box again with Enter search query placeholder text highlighted](https://storage.googleapis.com/sourcegraph-assets/blog/codemirror-vs-monaco/image1.png)

### Clean code

There are a bunch of smaller workarounds that were necessary for our Monaco implementation, but these added up. For example, we didn’t want to use Monaco’s default key-bindings such as using Ctrl+F for searching inside the editor. It doesn’t make sense to use Ctrl+F to search inside a single line input such as our search box, and to disable this we needed [a messy workaround](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@833d424ac1eca090c56d944526a98ac8a3d09a09/-/blob/client/search-ui/src/input/MonacoQueryInput.tsx?L254-276).

With CodeMirror, we can still add any keybindings we want, but there’s no need to disable the ones we don’t need, so workarounds like this can be removed.

## We can do a lot more with CodeMirror

While this started as a project to improve our search input, we like CodeMirror so much that we’re switching to it everywhere we previously used Monaco.

As mentioned above, we’ve already replaced all of our Notebooks with CodeMirror but we’re also starting to find new places to use it too.

### Rewriting our file viewer using CodeMirror

After you’ve completed a search in Sourcegraph, you can open the matching files and view them directly. For historical reasons, we weren’t using any code editor for this file-view functionality. It’s a read-only view, so it didn’t make sense to load in a full editor for each file. But at the same time, we do need a lot of the same functionality when displaying files, including syntax highlighting, line numbers, and code navigation.

Another advantage of using a code editor for a file viewer is apparent when viewing large files. When opening a file with thousands or millions of lines, a code editor like CodeMirror won’t load and render an entire file. Instead, it intelligently only renders what’s on the user’s screen.

One of [CodeMirror’s examples](https://codemirror.net/examples/million/) shows how the editor can effortlessly load a document of a few million lines instantly, and render highlighting only up to the position that the user scrolls.

We haven’t released our new file viewer yet, but expect to see it in a future release!

## The Business model of Open Source software

Outside of tech circles, it’s not well known how much of the world’s software depends on open source projects like CodeMirror, or how hard it is to make these projects sustainable. Often, these are passion projects being worked on mainly by a single individual who has another full-time job.

If these maintainers step away, the consequences can be massive and hard to predict. Large commercial projects might not even rely on these directly, depending instead on another (commercial) project, which depends on another, and so on, until you find the open source dependency precariously holding up everything, as depicted in [XKCD 2347](https://xkcd.com/2347/).

<img src="https://storage.googleapis.com/sourcegraph-assets/blog/codemirror-vs-monaco/image3.png" style={{width:50 + "%"}} alt="XKCD 2347 showing a structure of blocks with a single small block holing everything up" />

The MIT license that many open source projects use, including CodeMirror, is very permissive and allows the open source code to be used even in commercial projects. But CodeMirror is one of several projects that takes an active stand in reminding companies that they should give back to the ecosystem that they depend on and profit from.

CodeMirror states on its website:

> If you are using CodeMirror commercially, there is a social (but no legal) expectation that you help fund its maintenance.

Sourcegraph has followed this social expectation and donated monthly to CodeMirror since we started using it. We also are sponsoring their dependencies with [thanks.dev](https://thanks.dev/p/gh/sourcegraph).

[Discuss this post in our Discord](https://discord.gg/dTRKf9jAxN)

---
<br />

Special thanks to _Tracey Johnson_, and _Fabiana Castellanos_ for their help with this post.

### More posts like this

* [Revisiting the design approach to the Zig programming language](https://about.sourcegraph.com/blog/zig-programming-language-revisiting-design-approach)
* [A dev's thoughts on developer productivity](https://about.sourcegraph.com/blog/developer-productivity-thoughts)