---
title: 'Idiomatic Go'
authors:
  - name: Edward Muller
publishDate: 2017-07-14T00:00-07:00
tags: [
  "gophercon"
]
slug: idiomatic-go
heroImage: https://images.ctfassets.net/le3mxztn6yoo/MOi3PwYtUWake66iIGIu8/c880e5b8750cf88f94fb954cd596df88/IMG_9383.JPG
published: true
---


Liveblog by Renfred Harper ([@renfredxh](https://twitter.com/renfredxh))

The video for this talk has been posted [here](https://www.youtube.com/watch?v=ltqV6pDKZD8).

Edward Muller [@freeformz](https://twitter.com/freeformz) is a software engineer [@Heroku](https://twitter.com/heroku), where he has worked on databases, infrastructure, metrics and logs before becoming the Go language owner. In that capacity he's seen a lot of Go code and helped many developers deliver production quality code. He talked at [GopherCon 2017](https://gophercon.com/speakers/10) about ways to write more idiomatic Go code.

Check out [his slides](https://drive.google.com/file/d/0B3AbvjtHI6OAeS0wcF9uNXA5X1U/view) from the talk for more in-depth details and code samples.


*Note: This post was best-effort live-blogged at the conference. Let me know on Twitter ([@renfredxh](https://twitter.com/renfredxh)) if I missed anything!

![IMG 9383](//images.contentful.com/le3mxztn6yoo/MOi3PwYtUWake66iIGIu8/c880e5b8750cf88f94fb954cd596df88/IMG_9383.JPG)

---

# What is idiomatic Go?

One way to look at it is that Go code that is idiomatic adheres to three of the main design principles of the Go language:

## Orthogonality

In programming terms "orthogonality" means that pieces are independent from each other. Changes to one part, a type, package, program, etc, have minimal to no effect on other parts.

## Simplicity

Also often referred to as "reduced complexity", Go forgoes many of the complicated "features" found in other languages.

- Go has no classes; methods can be added to any type.
- It has no inheritance; interfaces are implicitly satisfied.
- Types stand alone by themselves; they just are and have no hierarchy.
- Methods aren’t special; they’re just functions.

And of course, Go doesn't have generics.

## Readability

Go reduces clutter and noise. There are no header files, unsurprising syntax, and everything can only be declared once per block.

# Anti-patterns

With the key traits of idiomatic Go in mind, we can begin to explore common patterns that deviate from these principals. Go programmers, those both new and experienced, are susceptible to being led astray from the most idiomatic path. These "anti-patterns" are sometimes easier to spot than idiomatic Go. We'll cover some common anti-patterns from Edward's talk, which will help guide you towards idiomatic go.

## Tiny Package Syndrome

The tiny package syndrome anti-pattern usually appears with a directory structure that looks something like this:

```text
 context/                context (cont...)/
  cqlsession/             requestid/
    cqlsession.go           requestid.go
  dao/                    sinkctx/
    dao.go                  sink.go
  api/                    starttime/
    api.go                  starttime.go
  logtoken/               time/
    logtoken.go             time.go
  metricsapi/             tx/
    metricsapi.go           tx.go
  outlet/                 user/
    outlet.go               user.go
  producers/              version/
    producers.go            version.go
```

Lots of small packages, each usually containing a single file, especially missing tests. Each of these files have similar behavior, but are grouped by kind into the smallest possible pieces. In this particular example all of these files store and retrieve things from context.

A better way to do this would be to collapse the directory structure like this:

```text
 context/
  cqlsession.go
  dao.go
  api.go
  logtoken.go
  metricsapi.go
  outlet.go
  producers.go
  requestid.go
  sink.go
  starttime.go
  time.go
  tx.go
  user.go
  version.go
```

This package “context” would contain a bunch of `With<SomeType>` and `<SomeType>From` functions. This keeps the complete API of bar located in a single package, not spread out across multiple.

Key takeaways:

- Group related functionality in the same package
- Be weary of lots of untested micro-packages under a single directory.

## Premature Exportation

Developers have a drive to taxonimize things and split them into the smallest possible pieces. This excessive over taxonification, in order to derive the smallest, DRYest piece of code can result in many small packages. This has a follow on effect: In order to make the package usable, most or all of the package’s content needs to be exported.

This anti-pattern often emerges when packages that are internal to a project are exported wholesale. Anyone that can view the project's source code can import these packages, even if the original authors aren't expecting it. The use of an `internal` directory can be used to signal intent that these packages are not meant for external consumption. If necessary external users can copy the code into their own projects, or start dialog with the maintainers of the project about their needs with the intent of making some are all of the features they need publicly available.

Key takeaways:

- Don’t export types, variables, function and constants until there is a need to do so.
- The DRYest, smallest, most segmented packages lead to the need to export everything.
- Keep packages that are not meant for external consumption in an internal folder.

## Package `util`

A common pattern found in projects that do lot of group-by-kind is to have some miscellaneous pieces left over. Where do they end up going? In a `util` package of course.

Do you notice anything particular about each of these functions?

```go
func GenerateRandomBytes(n int) ([]byte, error) { ... }
util.GenerateRandomBytes(10)

func GenerateRandomString(n int) (string, error) { ... }
util.GenerateRandomString(10)

func Cert(hostname string) (string, string, error) { ... }
util.Cert("foozle.com")
```

They all generate things. A better approach might be to create a `generate` package and turn this into `generate.RandomBytes`, `generate.RandomString` and `generate.Cert`. The name "generate" conveys the purpose of the package, and the names specify what's being generated.

Key takeaways:

- Package names have semantic meaning.
- Package names should describe the purpose of the package, not it’s contents.
- The only part of the package import path that matters is the right most name.
- `util` says nothing about the purpose of a package beyond a grouping of bits.

## Config Structs

It's not uncommon to see a "`Config`", or "`Options`" struct with a lot of members.

```go
type Config struct {
    MaxLineLength                       int
    BackBuff                            int
    BatchSize                           int
    NumOutlets                          int
    InputFormat                         int
    MaxAttempts                         int
    Prival                              string
    Procid                              string
    Hostname                            string
    Appname                             string
    Msgid                               string
    // a total of 28 members
```

Multiple functions may take a `Config` as a parameter, but only use a subset of the fields. You then have to dig into the implementation of the function or even sub-functions within it to see what fields are even used.

Instead, pass in the only the information each function uses. Then you get a better sense of what the function needs. Don't be afraid to make some of these field global variables as well.

Key takeaways:

- `Config` structs increase coupling
- `Config` structs `Obfuscate` the API of the functions or types that accept them, and hides complexity.
- Only pass in the information a function needs.

## Pointer All The Things

Before you designate all of your function parameters as pointers, consider what a pointer means. Pointers are about ownership. When you pass a pointer to a function you are delegating ownership of the pointee to that function.

Pointers aren't always faster, and they don't mean garbage won't be created. Taking a pointer allocates a second value (the pointer value) in addition to the value being pointed to. If the pointer value “escapes” the function that created it, it may be moved to the heap, along with the value it points to. If you think it will be faster, benchmark it.

Key takeaways:

- Pointers are about the ownership of data.
- They aren’t necessarily faster. Use benchmarks to prove that the additional overhead is worth it.
- Remember one to the Go proverbs: Don’t communicate by sharing memory, share memory by communicating.

## context.Value

`context.Value()` is a trap. It makes the code less clear, less understandable and the API less discoverable, and avoid the type system. There are others ways to pass values along the request chain, but those are beyond the scope of this talk.

- Use `context.Value()` and `context.WithValue()` sparingly. They create undocumented, side channel APIs.
- If you still feel the need to use them, document the values that may be extracted from the context and the purpose for those values.
- Use `WithTimeout()`, `WithDeadline()` and `WithCancel()` as they are a great abstraction around cancelation.

## Asynchronous APIs

Here's an example of an asynchronous API:

```go
func Logs() <-chan logs {
    c := make(chan logs)
    go func() { // Receive Logs }
    return c
}

func main() {
    for l := range Logs() {
        // Do stuff with each l
    }
}
```

There are some issues with it:
- How is the goroutine going to be shutdown?
- How is the size of the channel controlled?
- Closing the channel received from Logs() is likely to result in a panic
- How do errors from the goroutine get communicated?
- What if a synchronous API is needed?

Most of these issues can be handled by making the Logs() function take additional parameters, or by making it a type and adding additional methods to that type. However it would still be an asynchronous API and it’s complexity will have grown.

This synchronous version that answers all of those questions:

```go
type Reader struct {
    Err     error
	Current log
}

func (r *Reader) Next(ctx context.Context) bool {
    if r.Err != nil { return false }
    r.Current, r.Err = r.readNext(ctx)
    return true
}

func main() {
    r := &log.Reader{}
    ctx := context.Background()
    for r.Next(ctx) {
        fmt.Println(“I got a log”: r.Current)
    }
    if r.Err != nil { fmt.Println(“Error:”, err) }
}
```

The `Reader` value is in control of the reading loop and error handling. It may be asynchronous under the hood but those channels aren't exposed. This synchronous API can be made asynchronous if and when it’s needed by it’s consumers.

Key takeaways:

- Provide synchronous APIs.
- It is possible to make a synchronous API async, but much harder, if not impossible, to do the inverse. Leave the concurrency to someone else.
- As a general rule, it should be uncommon to expose channels in an API. Use them internally instead.
- For inspiration see the stdlib `http package`. This package has a fairly large API surface and does quite a lot. It uses channels internally, but only exposes one in the `CloseNotifier` type.

## If-then-else
This code:

```go
func things(x int) someType {
	if x > 2 {
		return 100
	} else {
		return 200
	}
}
```

Can be simplified:

```go
func things(x int) someType {
	if x > 2 {
		return 100
	}
	return 200
}
```

Keep the expected "happy-path" of a function is de-dented to the left, instead of weaving it through various if-else blocks. This improves readability especially for functions with multiple cases like this.

Key takeaways:

- Handle unexpected cases and errors early and return often.
- Keep common or happy paths de-dented.
- When it’s not possible refactor and/or redesign.

## Panic in a Lib

Don't panic in a library. This forces the user of the dependency to litter defer functions around their code base. Worse, you usually find out where recovery checks need to be added after the fact, after your program is crashing due to an unhandled panic at runtime.

In Go, treating the error as a value and handling it is idiomatic.

Key takeaways:

- Return errors, don’t panic.
- Only panic when an error can’t be handled directly or the handling can’t be delegated to the upstream caller.
- This should only happen when the program cannot make any forward progress.

## Interface All The Things

Small, focused interfaces are the key to writing powerful and flexible go code. Take to the `io.Reader` or `io.Writer` interfaces in the standard lib for inspiration.

Often, larger interfaces in codebases with 6 or even 12 methods tend to only have two implementations: the only concrete implementation, and a mock for the purposes of testing (worse, sometimes the tests the use these mocks really end up testing a set of mocks instead of the actual implementations)

These large interfaces tend to be defined up-front. They aren’t discovered across implementations at a later date. Interfaces should be discovered from existing types and extracted out of them.

The `io.Reader` and `io.Writer` interfaces weren't designed up front, they were discovered later. The network, file and other byte handling types shared a similar implementation. Out of those similarities the `io.Reader` and `io.Writer` interfaces were born.

Key takeaways:

- The bigger the interface, the weaker the abstraction.
- Rethinking the abstraction and pivoting away from what is being done to how it’s being done can help. Though sometimes the inverse is true.
- There are other ways to test things then mocking an interface. The `httptest.Server` type’s handlers and network servers are pretty easy to write in Go.

## interface{}

```go
func Voila(i interface{}) { ... }
```

What does the function Voila know about value “i”? To quote the Go proverbs:

> _The empty interface says nothing._

But Voila will need to resort to type assertions or switch statements to determine how “i” should be handled. The empty interface sidesteps static type checking and Voila can’t force any guarantees on the caller. If a case isn't written to handle it, it will have to rely on a generic fallback.

Instead of using the empty interface, try to create an interface with a method that defines the behavior you need:

```go
func Voila(s fmt.Stringer) {
	fmt.Println(s.String())
}
```

Not to say `interface{}` should never be used. `interface{}` is often useful when dealing with unknown data, but keep in mind the logic that handle this data often relies on complex reflection. For an example of this complexity, look at the implementation of `json` package in the stdlib.

Key takeaways:

- Use the empty interface when dealing with unknown data.
- Otherwise try to tease out an interface that declares the behavior you need.

# Idiomatic Go

With these anti-patterns in mind, you're more equipped to recognize common pitfalls on the path of idiomatic Go. When in doubt, strive for the key principals of orthogonality, simplicity, and readability.
