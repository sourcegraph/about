---
title: 'Forward Compatible Go Code'
authors:
  - name: Joe Tsai
publishDate: 2017-07-13T00:00-07:00
tags: [
  "gophercon"
]
slug: forward-compatible-go-code
heroImage: https://assets.ctfassets.net/le3mxztn6yoo/4ODIg0jhskgiuQ0SgmaMsm/addc509ab1dff98eb6864bcee1740aad/Selection_012.bmp
published: true
---

Liveblog by Linda Xie ([@lindeexie](https://twitter.com/lindeexie))

[Joe Tsai](https://www.linkedin.com/in/dsnet/) is a Software Engineer on Google's Go team. He is a regular contributor to the Go standard library and other open source projects.

Gophers often use "Go 1 compatibility" as a magic phrase to indicate that all present Go1 code will always work on all future Go1 releases. However, people are surprised to find out that running with the next version of Go sometimes causes build and test failures.

Forward incompatible Go Code is caused by breakages due to the programmer. Forward incompatibility is also caused by breakages due to the toolchain, consisting of the Go compiler and standard library.

## Breakages due to the programmer

Breakages due to the programmer are the result of erroneous assumptions that come from relying on _output stability_, _value comparability_, _Go runtime details_.

**Relying on output stability**

Here is a list of packages that users incorrectly assume to be stable:

```text
- archive/{tar,zip}
- compress/{flate,gzip,lzw,zlib}
- encoding/{csv,gob,json,xml}
- image/{gif,jpeg,png}
- net/http
- math/rand
- sort
```

Having unstable output means that it is not safe to assume that the outputs are byte-for-byte identical. Assuming this can have huge implications. Below we have a type Record where one of the fields is a TimeStamp in seconds. An ID method returns the SHA-256 checksum of the JSON encoded struct to obtain a unique identifier for each Record. However, this is problematic because the JSON representation of the timestamp differs between releases. When this Record is stored in the database on one release of Go, it can not be properly retrieved in a later release since the ID has changed. Bugs of this nature are surprising and difficult to track down.

![Screen%20Shot%202017-07-13%20at%204.37.14%20PM](//images.contentful.com/le3mxztn6yoo/54ca7qTrxSigoEI2aOyUMK/d9a2dc139485a70fdc1f96e934b29b10/Screen_20Shot_202017-07-13_20at_204.37.14_20PM.png)

One way to fix this is to write your own struct marshalling where you can guarantee output stability or use a package that guarantees canonical serialisation, which has the property of output stability.

**Relying on value comparability**

Another category of assumptions programmers make is assuming that all values may be directly compared using the equality operator. Several types that are generally not safe to directly compare are:

- time.Time
- errors
- reflect.Value
- Any types you don't own

Below is an example of the recording of a monotonic clock into the Time type which provides more precise measurements of elapsed time. By design, the monotonic reading cannot be serialised, so round-trip marshalling and unmarshalling a Time loses any monotonic information. t1 contains a monotonic reading, while t2 does not. Both the equality operator and reflect.DeepEqual report that t1 and t2 are different while the Equal method properly reports that these two times are the same. If you read the documentation for Time, you will see that it actually encourages the use of the Equal method instead of the equality operator. The reason why the equality operator gets this wrong is that it compares the underlying unexported fields of Time without taking into account that the same time instance can have multiple representations.

![Screen%20Shot%202017-07-13%20at%204.46.54%20PM](//images.contentful.com/le3mxztn6yoo/67it4548xyi80UcuAA00og/0b540173bc27daefac6a1cfb27491548/Screen_20Shot_202017-07-13_20at_204.46.54_20PM.png)

Generally, in Go code, you should be careful about whether types are comparable and if they are not, you should either use a custom definition of equality like the Equal method or convert the value to a canonical form that is stable.

**Relying on Go runtime details**

The final category of erroneous assumptions is relying on the internals of the Go runtime. Examples include:

- The ordering of when goroutines are scheduled. This can be problematic when the ordering in which values appear in a channel changes as they are produced by several goroutines
- Assuming iterations over a map producing a deterministic ordering. Now, maps provide a random iteration order
- Relying on the exact timing of functions and the exact text output of panic messages or stack traces

One important detail about the runtime to note is that unsafe is not forward compatible.

**Write forward compatible Go code**

- Read the documentation carefully!
- Be careful of what you hardcode
- Use the right comparison
- Use the race detector
- Be willing to update unsafe code

## Breakages due to the toolchain

The second cause of forward incompatible Go code is because the toolchain changed some behavior that it promised to have. In order to explain how we uphold the promise, the Go team follows a rigorous test and release process.

**Go development cycle**

The development of the Go toolchain is a 6-month process where the first 3 months are spent developing new features, optimising performance, refactoring code, and generally making higher risk changes. The later 3 months are spent in a development freeze, where we focus on fixing bugs, improving documentation, and generally stabilising the toolchain.

Throughout the entire development cycle, rigorous testing is performed. Every few days, a cut of the toolchain is used to build, run, and test an enormous suite consisting of over a million targets of Google’s production code. The chart above shows the number of regression failures discovered on this test suite over the 1.8 cycle.

![Screen%20Shot%202017-07-13%20at%205.14.28%20PM](//images.contentful.com/le3mxztn6yoo/5Px529rC7uaIU2Gq2wok6S/e4c941caac1ba627e7619d1215044014/Screen_20Shot_202017-07-13_20at_205.14.28_20PM.png)

The number of regression failures is proportional to the number of feature changes submitted. It is interesting to note that the climax of bugs occurs on October 31st, the day of the freeze.

## Try out the Go1.9beta!

Testing the Go1.9beta is an excellent way to contribute to the community, help discover regression bugs that affect your codebase, and shepherd your own codebase to be ready to adopt the new release. You'll also be helping make Go a reliable language platform and contribute to the release occur on time. You can test the Go1.9 beta following these steps:

- `go get golang.org/x/build/version/go1.9beta2`
- `go1.9beta2 download`
- use the go1.9beta2 command as if it were the normal go command

![Selection 012](//assets.contentful.com/le3mxztn6yoo/4ODIg0jhskgiuQ0SgmaMsm/addc509ab1dff98eb6864bcee1740aad/Selection_012.bmp)
