---
title: 'Behaviors of Channels'
authors:
  - name: William Kennedy (speaker)
publishDate: 2017-11-06T12:10+01:00
tags: [
  "dotGo"
]
slug: behaviors-of-channels
heroImage: https://images.ctfassets.net/le3mxztn6yoo/40NFOZBGkgG6IyKoMgQIGg/c1626b318de4be28314cbdc989a01525/logo-dotgo-black-web.png
published: true
description: 'dotGo 2017: Behaviors of Channels'
---

I learned over time that it’s best to forget about how channels are structured and focus on how they behave. So now when it comes to channels, I think about one thing: signaling. A channel allows one goroutine to signal another goroutine about a particular event. Signaling is at the core of everything you should be doing with channels. Thinking of channels as a signaling mechanism will allow you to write better code with well defined and more precise behavior.

Note: This post was live-blogged at [dotGo 2017](https://www.dotgo.eu/). Let us know on Twitter ([@sourcegraph](https://twitter.com/sourcegraph)) if we missed anything. All content is from the talk; any mistakes or misrepresentations are our fault, not the speaker's.

## Setup

Writing a service for a TV, but the tv stream fails because you can't write logs anymore. To simulate this we set up a custom `io.Writer` to simulate problems that can happen called `device`. So we use the `log` package to log, but to our custom `io.Writer` `device`. When running the code the `device` fails and the whole app fails because the calls to `log.Println` are blocking.

Bill then proceeded to do live coding for a custom Logger which solves our problem, below is the code he wrote annotated with what he was explaining as he wrote it:

<div className="src-snippet" data-file-path="test.go" data-commit="ad6f12f5071742201c61ea16f0a5d6e6f1dc17ec"></div>

```go
package logger

import (
	"fmt"
	"io"
	"log"
	"sync"
)

type Logger struct {
	ch chan string
	wg sync.WaitGroup
}

// New good practice to create a factory function to create Logger. Important
// to use a buffered channel so we can implement the "Drop Pattern". So we
// have a cap parameter.
func New(w io.Writer, cap int) *Logger {
	l := Logger{
		ch: make(chan string, cap),
	}

	// The goroutine to consume ch
	// Waitgroup is to manage the below goroutine
	l.wg.Add(1)
	go func() {
		// important to note everything we are doing is just the core
		// language, not even the stdlib.
		for v := range l.ch {
			fmt.Fprintf(w, v)
		}
		l.wg.Done()
	}()

	return &l
}

func (l *Logger) Stop() {
	// We can just close the channel and wait for the consuming goroutine to
	// be done.
	close(l.ch)
	l.wg.Wait()
}

func (l *Logger) Println(s string) {
	// Non-blocking send. Because we have the default case we will not block
	// if `l.ch` is at capacity, and just drop the log message.
	select {
	case l.ch <- s:
	default:
		fmt.Println("DROP")
	}

	// ^^ Bill loves this piece of code, because how the primitives in the
	// languages are really concise but powerful for this problem.
}

// in main.go
func main() {
	// Before this would fail because something would block on device, when
	// using the stdlib logger
	var d device
	l := log.New(&d, "", 0)

	// After we use our custom logger, and the app doesn't fail when device is
	// backed up.
	var d device
	l := /*logger.*/ New(d, 10)
}
```

The important part above is the Drop Pattern implemented in `Logger.Println`, since it will prevent the application being blocked due to `device` blocking.
