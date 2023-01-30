---
title: 'Building conc: Better structured concurrency for Go'
authors:
  - name: Camden Cheek
    url: https://github.com/camdencheek 
publishDate: 2023-01-30T10:00-07:00
description: 'We built and released conc, an open-source library that makes it easier and safer to write concurrent code in Go.'
tags: [blog]
slug: 'building-conc-better-structured-concurrency-for-go'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/conc-og-social.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/conc-og-social.png 
---

Go is designed to make concurrency easier than it is in other languages, but at Sourcegraph, I still found myself running into the same problems repeatedly when writing concurrent code.

In particular, it is difficult to write concurrent code that operates reasonably in the face of panics. We don't want the entire process to crash when a panic occurs in a spawned goroutine, and we want to avoid other problems that can be triggered by panics like deadlocks or leaked goroutines. Go does not provide an easy way to do this natively.

So I built [`conc`](https://github.com/sourcegraph/conc), a library that makes writing concurrent code more elegant and reduces the amount of boilerplate code. The code below shows how much boilerplate you can reduce when using `conc` instead of the Go standard library.

<table>
<tr>
<th><code>stdlib</code></th>
<th><code>conc</code></th>
</tr>
<tr>
<td>

```go
type propagatedPanic struct {
    val   any
    stack []byte
}

func main() {
    done := make(chan *propagatedPanic)
    go func() {
        defer func() {
            if v := recover(); v != nil {
                done <- &propagatedPanic{
                    val:   v,
                    stack: debug.Stack(),
                }
            } else {
                done <- nil
            }
        }()
        doSomethingThatMightPanic()
    }()
    if val := <-done; val != nil {
        panic(val)
    }
}
```
</td>
<td>

```go
func main() {
    var wg conc.WaitGroup
    wg.Go(doSomethingThatMightPanic)
    // panics with a nice stacktrace
    wg.Wait()
}
```
</td>
</tr>
</table>

## Some background: Solving the same problem many times and building an internal library

I've often found myself writing similar code to handle common concurrency patterns and panics in Go. In many Sourcegraph projects, we rely heavily on concurrent Go code to efficiently search billions of lines of code, so after the Go 1.18 release in March 2022 [introduced generics](https://go.dev/blog/why-generics), I realized that this could fix a lot of the frustrations I'd had before and make a concurrency library a lot more succinct.

Previously when I'd written helper functions to better handle concurrency, I needed different functions for different data types. This meant writing separate functions for strings, tasks, or any other data type that I was working with. Now that generics are available, it's easy to operate over whatever data types are present in a consistent way.

Around six months ago, I started working on an internal library to generalize how we use goroutines. Internally, we've used this library extensively already, but now I've cleaned up the code, documented everything, and released it as an open-source package for other developers and teams to use too.

I found time to do the majority of this cleaning and documenting while I was trapped at an airport over the Christmas break due to flight delays across the US in December. I wrote the [README](https://github.com/sourcegraph/conc), added and cleaned up the comments and docstrings, and added and moved the code to a separate repository with a permissive license. I even had time to throw together a colorful logo that represents the spawning and joining of goroutines before I finally got to board my plane.

![conc logo](https://storage.googleapis.com/sourcegraph-assets/blog/upload_b3d7822a2033a3f8c2d98966767466c7.png)

## Diving into goroutines, concurrency, panics, and scope

With Go, concurrency is already a first-class citizen, so it's generally a pretty low bar to add concurrent code to a Go project. But doing it _correctly_ can still be hard and there are lots of mistakes I've seen (and made) in concurrent Go code, such as:

* Not cleaning up resources correctly.
* Causing deadlocks.
* Crashing the entire program because of a panic in a single goroutine.

Sometimes you _want_ your entire program to crash if one goroutine panics but in many cases, you don't. At Sourcegraph, we use many goroutines to efficiently search massive amounts of source code and we want to avoid downtime, even if a panic sneaks in.

### Better panic handling

Handling panics was the first obstacle to overcome with using naked goroutines. With Go's concurrency, you don't get any kind of scoping. When you spawn a new goroutine, it is not attached to its parent in any way. This makes it challenging to elegantly recover from a panicking goroutine, and also difficult to debug because the stack trace doesn't include (often vital) information from the goroutine that spawned it.

One way to deal with this using the standard Go library is by using a deferred function and manually passing the stack trace around, as in the example included before.


```go
type propagatedPanic struct {
    val   any
    stack []byte
}
func main() {
    done := make(chan *propagatedPanic)
    go func() {
        defer func() {
            if v := recover(); v != nil {
                done <- &propagatedPanic{
                    val:   v,
                    stack: debug.Stack(),
                }
            } else {
                done <- nil
            }
        }()
        doSomethingThatMightPanic()
    }()
    if val := <-done; val != nil {
        panic(val)
    }
}
```

This adds 33 lines of boilerplate code for a one-line function.

Here, the main function starts a goroutine that runs the function `doSomethingThatMightPanic()`, which could potentially panic. We define a deferred function that will execute when the goroutine exits. The deferred function uses `recover()` to get the value of the panic (if there is one), then wraps it in the `propagatedPanic` struct along with the stack trace for debugging.

Because all concurrency in `conc` is scoped, it can do all of this for you, letting you write the following instead:

```go
func main() {
    var wg conc.WaitGroup
    wg.Go(doSomethingThatMightPanic)
    // panics with a nice stack trace
    wg.Wait()
}
```


### Simpler concurrent processing with pool and iter

A common pattern in any kind of parallel processing is to do a bunch of stuff in parallel and then collect the results into a single data structure. For example, any time you need to make multiple network requests but don't want to be blocked by the total latency for all round trips, you can make all the network calls at once and then wait until the last one has completed.

When using Go's standard library, you'd usually create a `sync.WaitGroup` and a deferred function. This also requires a bunch of boilerplate code that `conc` makes unnecessary. As an illustrative example, consider a function that, given the first name of a user, fetches the last name over a network.

```
func fetchLastName(ctx context.Context, firstName string) (string, error) {
    req, err := http.NewRequestWithContext(
        ctx,
        "GET",
        fmt.Sprintf("https://myexampleapp.com/users/%s/last_name", firstName),
        nil,
    )
    if err != nil {
        return "", err
    }

    resp, err := http.DefaultClient.Do(req)
    if err != nil {
        return "", err
    }
    b, err := io.ReadAll(resp.Body)
    return string(b), err
}
```

If we have a list of first names and we want to efficiently fetch the last name for each first name, we could do this using `conc`'s `pool` as follows.

```go
func fetchLastNames_pool(ctx context.Context, firstNames []string) ([]string, error) {
	p := pool.NewWithResults[string]().WithContext(ctx)
	for _, firstName := range firstNames {
		firstName := firstName
		p.Go(func(ctx context.Context) (string, error) {
			return fetchLastName(ctx, firstName)
		})
	}
	return p.Wait()
}
```

Or equivalently, using `iter` :

```go
func fetchLastNames2(ctx context.Context, firstNames []string) ([]string, error) {
	return iter.MapErr(firstNames, func(firstName *string) (string, error) {
		return fetchLastName(ctx, *firstName)
	})
}
```

There are several other examples (along with the equivalent standard library code) in the [GitHub README](https://github.com/sourcegraph/conc/) built around `conc`'s three main goals:

* [Making it harder to leak goroutines](https://github.com/sourcegraph/conc/blob/main/README.md#goal-1-make-it-harder-to-leak-goroutines).
* [Handling panics gracefully](https://github.com/sourcegraph/conc/blob/main/README.md#goal-2-handle-panics-gracefully).
* [Making concurrent code easier to read](https://github.com/sourcegraph/conc/blob/main/README.md#goal-3-make-concurrent-code-easier-to-read).


## Using conc for parallel stream processing

At Sourcegraph, we do a lot of parallel processing of ordered streams. While searching large amounts of code, we often end up with streams of results that we want to post-process. Each result in the stream might require a network request, for example, to look up permission on a repository or to fetch the full file contents for a search result.

For this, we always want to:

* Do the network requests in parallel.
* Show the results to the user as soon as possible.
* Maintain the order of the stream (because we've already ranked the results).

It's difficult to get all three of these right at the same time, so one of the goals I had while writing [`conc`'s Stream package](https://pkg.go.dev/github.com/sourcegraph/conc/stream#Stream) was to abstract away as much of the complexity for that workflow as possible.

Now I can fetch the contents of multiple files at once using code similar to the example below. This efficiently and safely gets the contents of each file while still maintaining the original order of the stream.

```go
func streamFileContents(ctx context.Context, fileNames <-chan string, fileContents chan<- string) {
	s := stream.New()
	for fileName := range fileNames {
		fileName := fileName
		s.Go(func() stream.Callback {
			contents := fetchFileContents(ctx, fileName)
			return func() { fileContents <- contents }
		})
	}
	s.Wait()
}
```

## The goals of conc

`conc` is hopefully already useful to anyone writing concurrent Go code who wants a better way to handle panics, avoid leaking Goroutines, or simply have more readable concurrent code. It's still a young project though, and I expect it to evolve and improve over time. One thing I've had to think about is what I *don't* want it to be. 

My main goal with `conc` is that it should be hard to use incorrectly. Concurrent code is infamous for causing headaches and hard-to-identify bugs, and while many developers might feel like they are smart enough to avoid the problems associated with concurrent programming, in reality, these bugs can burn anyone.

![Puppies parallel programming](https://storage.googleapis.com/sourcegraph-assets/blog/upload_ee1c4226c42ba701cde2324025599202.png)

This goal of "making it hard to use incorrectly" comes with tradeoffs. Specifically, it means some (potentially useful) features are unlikely to be added to `conc` because they would break this goal. Shortly after the library went public, I got a request to [add channels to `conc`](https://github.com/sourcegraph/conc/issues/56) and while I can see how a user of `conc` could find this valuable, I'd like to keep things "hard to misuse" wherever possible.

![GitHub issues conversation](https://storage.googleapis.com/sourcegraph-assets/blog/upload_conc_e8c695bc11b8f2a62ceafa.png)

## Challenges I faced while building conc

`conc` is quite a small library, coming in at just under 2000 lines of Go code, but it took a lot of tweaking to get it to a point where I was happy to release it publicly.

![SCC conc statistics](https://storage.googleapis.com/sourcegraph-assets/blog/upload_622f8a97c46fe4a1742ac48e45a35c2d.png)

(Calculated using [scc](https://github.com/boyter/scc).)

### Challenge #1: Keeping the API natural and unsurprising
To me, the API feels very natural now and most of the tweaks I did were to extend the goal of making it hard to use incorrectly. From my experience with other libraries and looking at other concurrency implementations for inspiration, I found that nearly all of them suffer from at least one of the following problems:

* They feel **unnatural** to use. 
* They contain many **foot guns** or they make it easy to do dangerous things without realizing it.
* They make it **hard to understand** what's actually happening under the hood.
* They contain **surprising** implementation details that catch users off guard.

I often found that I had to reduce the feature set of `conc` to keep it simple and safe. I've made some slight tweaks after getting some feedback from users that further these goals. 

For example, at Sourcegraph, we generally use `GO_MAX_PROCS` to limit goroutines to the number of cores available. For us, that's often a sane default, but Go's scheduler can happily handle 1000s of routines. For a majority of users, having this somewhat arbitrary limit was **surprising**, so by following the goal of "follow the principle of least surprise", it made sense to remove this limit.

### Challenge #2: Discovering edge cases with panics

Panics aren't meant to be used as a way of handling exceptions, but I need `conc` to behave well even when a user gives it code that panics. For example, I ran into [this issue](https://github.com/golang/go/issues/25448) that when you intercept a panic with a `nil` value, it will look like nothing actually went wrong, though that has now [been fixed](https://go-review.googlesource.com/c/go/+/461956?tab=comments).

## Releasing conc to the world

After I made the GitHub repository public, I posted about `conc` internally. I expected my coworkers to look over it and maybe give some comments or criticism, but it quickly got shared over [to Reddit](https://www.reddit.com/r/golang/comments/1022agb/conc_better_structured_concurrency_for_go/), where it received a bit of (mainly positive) attention. There's since been some discussion [on GitHub](https://github.com/sourcegraph/conc/issues?q=is%3Aissue+is%3Aclosed) and [on Hacker News](https://news.ycombinator.com/item?id=34344514) and I've made some small tweaks based on feedback.

If you're using or expecting to use `conc` in your own project, please continue the conversation. I'm keen to make `conc` the easiest and sanest way to manage concurrency in Go. You can [open a GitHub issue](https://github.com/sourcegraph/conc/issues) or [join the Sourcegraph Discord server](https://github.com/sourcegraph/conc/issues).

