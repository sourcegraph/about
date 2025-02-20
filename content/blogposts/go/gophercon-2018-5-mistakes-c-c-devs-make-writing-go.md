---
title: 'GopherCon 2018 - 5 Mistakes C/C++ Devs make writing Go'
authors:
  - name: Beyang Liu for the GopherCon Liveblog
    url: https://twitter.com/beyang
publishDate: 2018-08-29T00:00-06:00
tags: [
  "gophercon"
]
slug: gophercon-2018-5-mistakes-c-c-devs-make-writing-go
description: 'Nyah comes from a C/C++ background and subsequently wrote a lot of bad Go code early on. He hopes others can learn from his mistakes.'
heroImage: https://images.ctfassets.net/le3mxztn6yoo/5Oj3acpp7yysQg04W2AW4A/a93d79c10ad903d3902f6b6d8707973a/mechanic-tire-2.jpg
published: true
---

Nyah Check ([@nyah_check](https://twitter.com/nyah_check), [slides](https://talks.godoc.org/github.com/Ch3ck/5-mistakes-c-cpp-devs-make-writing-go/5-mistakes-c-cpp-devs-make-writing-go.slide)) is a software engineer at [Altitude Networks](https://altitudenetworks.com/).

Nyah comes from a C/C++ background and subsequently wrote a lot of bad Go code early on. He hopes others can learn from his mistakes.

He has classified his mistakes under 3 topics:

- Heap vs. Stack
- Memory & Goroutine leaks
- Error handling

## Heap vs. Stack

What is a Heap and Stack in Go?
A Stack is a special region in created to store temporary variables bound to a function.
It's self cleaning and expands and shrinks accordingly.

A Heap is a bigger region in memory in addition to the stack used for storing values,
It's more costly to maintain since the GC needs to clean the region from time to time adding extra latency.

![image](https://user-images.githubusercontent.com/1646931/44812292-1758b880-ab94-11e8-889d-95d902928d2f.png)

### Mistake 1: New doesn't mean heap && var doesn't mean stack

An early mistake was to minimize escape analysis and it's possible implications on my program's perf.

Consider the following C++ code:

```go
int foo() {
    // This is a memory leak below
    int *a = new(int);
    return *a;
}
```

Wrong assumptions:

- In C++, we know new(int) is allocated on the heap.
- In Go, we don't really know for sure.
- May be the new keyword was stolen from C++ as a result might likely be allocated on the heap?
- Given my C++ bias, I thought minimizing it's use will reduce heap allocation.

Let's look at some code...

```go
package main

import "fmt"

func newIntStack() *int {

    vv := new(int)

    return vv
}

func main() { fmt.Println(*newIntStack()) }
```

This is a program that tries to establish if allocation takes place on the heap or the stack. When he runs this program (`go run -gcflags -m file.go`), you see that the `new(int)` variable does not escape (i.e., it's on the stack, not the heap). In C++, it would be allocated on the heap.

Let's take a look at another example:

```go
package main

import "fmt"

func main() {
    x := "GOPHERCON-2018"
    fmt.Println(x)
}
```

In the above example, `x` escapes to the heap. That's because `fmt.Println` takes an interface, which means `x` gets transferred to the heap.

Escape analysis is not trivial in Go. You need to do runtime analysis; can't just look at the code.

Lessons

- Escape analysis is very important in writing more performant Go programs, yet there's no language specification on this.
- Some of the compiler's escape analysis decisions are counterintuitive, yet trial and error is the only way to know
- Do not make assumptions, rather do escape analysis on the code and make informed decisions.

Conclusion: "Understand heap vs stack allocation in your Go program by checking the compiler's escape analysis report and making informed decisions, do not guess"

## Memory leaks

How does memory leak in Go

- I assumed since there's a garbage collector, then everything is fine
  Not True!
- Memory leaks are common in any language including garbage collected languages
- It can be caused by: assigned but unused memory, synchronization issues.
- Some of these errors can be hard to detect, but Go has a set of tools which could be very effective in debugging these bugs

### Mistake 2: Do not defer in an infinite Loop

The defer statement is used to clean up resources after you open up a resource(e.g. file, connection etc)

So an idiomatic way will be:

```go
fp, err := os.Open("path/to/file.text")
if err != nil {
    //handle error gracefully
}
defer fp.Close()
```

This snippet is guaranteed to work even if cases where there's a panic and it's standard Go practice.

So what's the problem? In very large files where resources cannot be tracked and freed properly, this becomes a problem.

Consider a file monitoring program in C where:

- We check a specific directory for db file dumps
- perform some operation(logging, file versioning, etc)

Something like this might work:

```cpp
#define TIME_TO_WAIT 1 /* wait for one second */
int main() {
    FILE *fp;
    clock_t last = clock();
    char* directory[2] = {"one.txt", "two.txt"};
    for ( ; ; ) {
        clock_t current = clock();
        if (current >= (last + TIME_TO_WAIT + CLOCKS_PER_SEC)) {
            for (int i = 0; i < 2; i++) {
                fp = fopen(directory[i], "r+");
                printf("\nopening %s", directory[i]);
                if (fp == NULL) {
                        fprintf(stderr, "Invalid file %s", directory[i]);
                    exit(EXIT_FAILURE);
                }
                //some FILE processing happens
                fclose(fp);
                printf("\nclosing %s", directory[i]);
                last = current;
            }
        }//executes every second
    }
```

This will be sure to open and close up the files (open, close, open, close, etc.) once the operations are done.

However in Go:

```go
func loggingMonitorErr(files ...string) {
    for range time.Tick(time.Second) {
        for _, f := range files {
            //files coming in through the channel.
            fp := OpenFile(f)
            // The line below will never execute.
            defer fp.Close()
            //process file
        }
    }
}
```

The output from running the program shows there is no closing of files.

Problems:

- Deferred code never executes since the function has not returned
- So memory clean up never happens and it's use keeps piling up
- Files will never be closed, therefore causing loss of data due to lack of flush.

How do I fix this?

- Creating a function literal for each file monitoring process
- This ensures everything is bound to the context
- Hence files are opened and closed

The fixed solution looks like this:

```go
type file string

func OpenFile(s string) file {
    log.Printf("opening %s", s)
    return file(s)
}
func (f file) Close() { log.Printf("closing %s", f) }

func loggingMonitorFix(files ...string) {
    for range time.Tick(time.Second) {
        for _, f := range files {
            //files coming in through the channel.
            func() {
                fp := OpenFile(f)
                defer fp.Close()
                //process file
            }()
        }
    }
}
```

Lessons learned:

- Since defer is tied to the new function context, we are sure it's executed and memory is flushed when files close
- When defer executes we are certain our function literal finished execution, so no memory leaks

Conclusion: "Do not defer in an infinite loop, since the defer statement invokes the function execution ONLY when the surrounding function returns"

## Pointers to accessible parts of a slice

What's a slice?

A slice is a dynamically sized flexible view into an array.

We know arrays have fixed fizes.

There are two main features of slices to think about:

- The length of a slice is simply the total number of elements contained in the slice
- The capacity of a slice is the number of elements in the underlying array.

Understanding this can avoid some robustness issues.

### Mistake 3: Keeping pointers to an accessible(although not visible) part of a slice

Prior to Go 1.2 there was a memory safety issue with slices:

- You could access elements of the underlying array.
- This could lead to unintended memory writes.
- Cause robustness issues
- These regions of memory are not garbage collected.

Example:

```go
func main() {
    a := []*int{new(int), new(int)}
    fmt.Println(a)
    b := a[:1]
    fmt.Println(b)

    // second element is not garbage collected, because it's *still* accessible
    c := b[:2]
    fmt.Println(c)
}
```

If you run this code, the third `Println` shows in `c` you somehow have access to elements in `a` that aren't accessible in `b`.

What are some of the problems?

- Write regions of memory unintentionally.
- Robustness issues: Memory is not garbage collected since there's a reference to it.
- It's a source for potential bugs

How do you solve this then? Go 1.2++ added the 3-Index-Slice operation:

- This enables you to specify the capacity during slicing.
- The restricted slice capacity provides a level of protection to the underlying array
- No unintended memory writes.
- Unused areas of the underlying array are garbage collected.

Rewriting our code gives:

```go
func main() {
    a := []*int{new(int), new(int)}
    fmt.Println(a)

    // Using the 3- index slice operation
    b := a[:1:1]
    fmt.Println(b)
    c := b[:2]
    fmt.Println(c)
}

```

Our output becomes:

```
➜  examples git:(master) ✗ go run main.go
[0xc420016090 0xc420016098]
[0xc420016090]
panic: runtime error: slice bounds out of range

goroutine 1 [running]:
main.main()
    /Users/nyahcheck/go/src/github.com/Ch3ck/5-mistakes-c-cpp-devs-make-writing-go/03-pointer-in-non-visible-slice-portion/examples/main.go:27 +0x1ae
exit status 2
```

Our slice cap was set to 1, we can't access regions of memory we don't have permissions to, rightly creating a panic.

Lesson

- Our slice capacity was set to 1, so can't access restricted regions in memory, rightly creating a panic
- More robust programs
- Fewer memory leaks since unused memory is garbage collected.
- Reduce sources for potential bugs in your code.

## Goroutine leaks

What's a Goroutine?

- It's a lightweight thread of execution, it consists of functions that run concurrently with other functions/methods.
- What about channels?
- A channel is a pipe that connects concurrent goroutines.
- An understanding of these two concepts embodies concurrency in Go.

There's no language-level analog in C/C++. You have to use special libraries to write multi-threaded code.

- C/C++ has libraries for multi-threaded programming.
- Concurrency in Go materializes itself in the form of goroutines and channels.

How do goroutines leak? There are different possible causes for goroutine leaks, some include:

- Infinite loops
- Blocks on synchronization points(channels, mutexes), deadlocks

However when these occur the program takes up more memory than it actually needs leading to high latency and frequent crashes.

Let's take a look at an example.

### Mistake 4: Error handling with channels where # channels < # goroutines

Consider:

```go
func doSomethingTwice() error {
    // Issue occurs below
    errc := make(chan error)

    go func() {
        defer fmt.Println("done wth a")
        errc <- doSomething("a")
    }()
    go func() {
        defer fmt.Println("done with b")
        errc <- doSomething("b")
    }()
    err := <-errc
    return err
}
```

What are the problems with the code?

- More goroutines than channels are present to write to send data back to main
- When one routine writes to the channel, the program exits and the other goroutine is lost, building up memory use as a results
- that region of memory is not garbage collected

How do we fix this? We simply increase the number of channels to 2,
This makes it possible for the two goroutines to pass their results to the calling program.

```go
func doSomethingTwice() error {
    // Issue occurs below
    errc := make(chan error, 2)

    go func() {
        defer fmt.Println("done wth a")
        errc <- doSomething("a")
    }()
    go func() {
        defer fmt.Println("done with b")
        errc <- doSomething("b")
    }()
    err := <-errc
    return err
}
```

## Performing Traces on the code

Goroutine leaks are very common in Go development.

However there are some best practices you can follow to avoid some of these errors:

- Using the context package to terminate or timeout goroutines which may otherwise run indefinitely
- Using a done signal or timeout channel can help in terminating a running goroutine preventing leaks
- Profiling the code, Stack trace instrumentation and adding benchmarks can go a long way in finding these leaks
- Take advantage of the go tooling ecosystem: go tool trace, go tool profile , go-torch, gops, leaktest etc
- Worth checking the errgroup package for this pattern

## Error handling

What are errors in Go?

Go has a built-in error type which uses error values to indicate an abnormal state.

Also these error type is based on an error \*interface.

```go
type error interface {
    Error() string
}
```

The Error method in error returns a string

A closer look at the errors package will provide some good insides into handling errors in Go.

### Mistake 5: Errors are not just strings, but much more

Consider a C program with a division by zero error:

```c
#include <stdio.h> /* for fprintf and stderr */
#include <stdlib.h> /* for exit */
int main( void )
{
   int dividend = 50;
   int divisor = 0;
   int quotient;

   if (divisor == 0) {
       /* Example error handling.
        * Writing a message to stderr, and
        * exiting with failure.
        */
       fprintf(stderr, "Division by zero! Aborting...\n");
       exit(EXIT_FAILURE); /* indicate failure.*/
   }

   quotient = dividend / divisor;
   exit(EXIT_SUCCESS); /* indicate success.*/
}
```

Handling errors in C typically consists of writing error message to stderr and returning an exit code.

However, in Go errors are much more sophisticated than strings.

Consider this example:

```go
func main() {
    conn, err := net.Dial("tcp", "goooooooooooogle.com:80")
    if err != nil {
        fmt.Printf("%T\n", err)
        log.Fatal(err)
    }
    defer conn.Close()
}
```

Using `%T` in the format string, you can print the type of the error, which often provides useful information.

Wrapping Errors in Go with `github.com/pkg/errors`:

Consider another example

```go
func connect(addr string) error {
    conn, err := net.Dial("tcp", addr)
    if err != nil {
        switch err := err.(type) {
        case *net.OpError:
            // return fmt.Errorf("failed to connect to %s: %v", err.Net, err)
            return errors.Wrapf(err, "failed to connect to %s", err.Net)
        default:
            // return fmt.Errorf("unknown error: %v", err)
            return errors.Wrap(err, "unknown error")
        }
    }

    defer conn.Close()

    return nil
}
```

Advantages of Wrap and Cause funcs:

- You can preserve the error context and pass to the calling program
- Using the errors.Cause() function call we can determine what caused this error later in the program

Nyah believes it's a feature some developers my overlook but if used properly will give a better Go development experience.

Lessons learned:

- The errors package provides a lot of powerful tools for handling errors which some devs may ignore.
- Wrap() and errors.Cause() are very useful in preserving context of an error later in the program.

Take a look at the [errors package](https://godoc.org/github.com/pkg/errors) and see elegant examples.

## Conclusion

- Understand Escape analysis by looking at the compiler decisions, do not make reasonable guesses.
- Defer executes only when the function returns. Using it in a infinite loop is a mistake.
- Three Index_slices adds an extra robustness utility in Go, use it.
- Profile your Go code to identify bottlenecks early on, it's a good practice.
- Errors in Go are not just strings, but much more.
- Wrap errors to preserve context and handle them gracefully.

There are many more errors C/C++ devs make. Just remember:

- Bringing concepts from C/C++ is fine but be ready to be challenged by differences.
- "Programming in Go is like being young again (but more productive!)."

## Q&A

What tools do you miss from C/C++?

- GDB and Valgrind
- For GDB-lovers, there's the Delve Go debugger.

### About the author

_Beyang Liu is the CTO and co-founder of Sourcegraph. Beyang studied Computer Science at Stanford, where he published research in probabilistic graphical models and computer vision at the Stanford AI Lab. You can chat with Beyang on Twitter [@beyang](https://twitter.com/beyang) or our community [Discord](https://discord.com/invite/vqsBW8m5Y8)._
