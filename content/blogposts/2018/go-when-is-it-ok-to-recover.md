---
title: 'When is it ok to recover from panics in Go?'
authors:
  - name: Nick Snyder
    url: https://twitter.com/nickdsnyder
publishDate: 2018-03-06T08:30-08:00
tags: [
  "blog"
]
slug: go-when-is-it-ok-to-recover
heroImage: https://images.ctfassets.net/le3mxztn6yoo/6fB88E9rzycWawk0maeiYK/62b0487a3ae91e47097499eb76cf9c2b/Screen_Shot_2018-03-05_at_4.44.09_PM.png
published: true
---

In Go, it is idiomatic to have explicit error handling. This means that many functions return an `error` in addition to the expected result (e.g. [strconv.ParseBool](https://golang.org/pkg/strconv/#ParseBool)).

Go code can also [panic](https://golang.org/doc/effective_go.html#panic) and [recover](https://golang.org/doc/effective_go.html#recover), which is similar to throwing and catching exceptions in other languages. In Go, panic should be reserved for situations where the error is unrecoverable and it doesn't make sense for normal execution to continue.

If panics are supposed to be unrecoverable, then when does it make sense to recover from them in practice?

By searching over the Go repository itself, we can find examples of when the Go authors use recover. In Go 1.10 there are:
- [24 references to recover in packages](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/golang/go%24%40go1.10+-file:/vendor/+-file:%5Esrc/cmd/+-file:/testdata/+-file:%5Etest/+-file:%5Emisc/+-file:%5Edoc/+-file:_test.go%24++max:100+%22%3D+recover%28%29%22)
    - Many of the references occur in packages that parse text.
    - 11 of these references were committed 6 to 8 years ago. Would these packages have been written the same way today?
- [9 references to recover in commands](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/golang/go%24%40go1.10+file:%5Esrc/cmd+-file:/vendor/+-file:/testdata/+-file:_test.go%24+max:100+%22%3D+recover%28%29%22)
    - Most of the references recover from panics that happen when parsing text.
- [87 references to recover in test files](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/golang/go%24%40go1.10+file:_test.go%24+max:100+%22%3D+recover%28%29%22)
    - It is usually used to verify that a panic happened when it was intended to.

One notable example of recover being used is in [net/http](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/golang/go%24%40go1.10+-file:_test.go+file:net/http+%22%3D+recover%28%29%22). The connection struct recovers from panics so that a panic in a request handler doesn't crash the entire server. Interestingly enough, this might actually be an anti-pattern [according to David Symonds](https://github.com/grpc/grpc-go/issues/441#issuecomment-155588816):

> Quietly catching a panic might leave the server in an inconsistent or incorrect state, so while crashing sucks at least you'll find out and can go fix the panic.
>
> We've come to regret the net/http panic catching after running Go in production for a while. It sounded like a good idea at the time, but it has caused its own issues in practice.
>
> If it's mission critical, you'll want some sort of frontend (e.g. nginx) that can quietly retry the request if a backend crashes. There's no way to completely rule out crashes in bad code, and catching panics in only the RPC server handler goroutines isn't going to stop them all.

It seems then that recover, like panic, should be used sparingly in non-test code.
