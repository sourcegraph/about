---
title: 'GopherCon 2019 - Get Going with WebAssembly'
authors:
  - name: Alex Boten for the GopherCon Liveblog
publishDate: 2019-07-25T00:00-11:55
tags: [
  gophercon
]
slug: gophercon-2019-get-going-with-webassembly
heroImage: https://about.sourcegraph.com/gophercon2019.png
published: true
---

Presenter: [Johan Brandhorst](https://www.gophercon.com/agenda/speakers/435214)

Liveblogger: [Alex Boten](https://twitter.com/codeboten)

Curious about WebAssembly and how we can use it with Go? In this session, Johan introduces the technology, shows how to get started with WebAssembly and Go, discusses what is possible today and what will be possible tomorrow.

## What is WebAssembly?

WebAssembly is a web standard binary instruction format. It's developed by the W3C and it grew out of the [asm.js](https://en.wikipedia.org/wiki/Asm.js) and [Google's Native Client](https://en.wikipedia.org/wiki/Google_Native_Client) projects. It aims to provide portable targets to allow code to be compiled once and run across many platforms. Currently runtimes for WASM include:

* Browsers: Chrome, Firefox, Safari, Edge and others since late 2017
* Native runtimes: wasmer, wasmtime, wagon, life, lucent, WAVM, more

Many of these runtimes have appeared fairly recently, meaning that WebAssembly is no longer just a runtime for the browser but can be used for code that can run anywhere, including bare metal.

## WebAssembly in Go

As of Go 1.13, there is experimental support for WebAssembly using the JavaScript interface but as it is only experimental, using it in production is not recommended. Support for the WASI interface is not currently available but has been planned and may be available as early as Go 1.14.

It's quite easy to get started with WebAssembly in Go. Let's start with a simple "Hello World". The following code will allow us to compile a Go program that can be loaded in a browser. Note the build tag at the top.

```go
// +build js,wasm

package main

import "fmt"

func main() {
	fmt.Println("Hello World")
}
```

We then compile the program specifying the `wasm` architecture and `js` GOOS environment variables. Additionally to get the setup up and running, we'll need to copy some files that will load the binary into the browser and execute it.

```bash
GOOS=js GOARCH=wasm go build -o ./html/test.wasm ./hello/main.go
cp $(go env GOROOT)/misc/wasm/wasm_exec.html ./html/index.html // Example of how to load WebAssembly
cp $(go env GOROOT)/misc/wasm/wasm_exec.js ./html/wasm_exec.js // Mandatory
```

Lastly, we'll need a webserver to ensure the right content type is served.

```go
var contentTypeSetter = func(h http.Handler) http.Handler {
    return http.HandlerFunc(func(resp http.ResponseWriter, req *http.Request) {
        if strings.HasSuffix(req.URL.Path, ".wasm") {
            resp.Header().Set("content-type", "application/wasm")
        }
        h.ServeHTTP(resp, req)
    })
}
```

The examples in [Johan's repo](https://github.com/johanbrandhorst/wasm-experiments) has some nice Makefile targets to simplify the process, as well as many other examples and a webserver that's ready to use. Once the server is up and running, launch a browser and bring up the console to see the message being printed out. By default, standard output will go to the console.

![Hello World screenshot](/gophercon-2019/gophercon-2019-wasm-1.png)

If you look at the size of the file, you can start seeing some of the challenges. This is a very large file for a simple "Hello World".

![Hello World size screenshot](/gophercon-2019/gophercon-2019-wasm-2.png)

##### JavaScript interface

The next example in the tutorial makes use of the JavaScript interface `syscall/js`, based on the GopherJS interface. An important thing to note is that any data that is passed to JavaScript must be copied as there is no shared memory yet. Data transfers should be minimized for greater performance. The following code writes an element to the DOM instead of the console. The file size of this binary is "only 1.37MB", as we're no longer importing the `fmt` package. Large packages compile to much larger binaries, something to be conscious of when building for WASM.

```go
package main

import "syscall/js"

func setDemo() {
    doc := js.Global().Get("document")
    d := doc.Call("getElementById", "demo")
    d.Set("innerHTML", "Hello <b>Go!</b>")
}
```

![Hello World 2 screenshot](/gophercon-2019/gophercon-2019-wasm-3.png)

##### `net/http` client

It's possible to use some of the standard libraries in WebAssembly, including the `net/http` library, which is built on top of the browser's [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). The next example shows us how to do just that by making a request and printing its output to the DOM.

```go
...
var document js.Value

func init() {
	document = js.Global().Get("document")
}

type writer js.Value

// Write implements io.Writer.
func (d writer) Write(p []byte) (n int, err error) {
	node := document.Call("createElement", "div")
	node.Set("textContent", string(p))
	js.Value(d).Call("appendChild", node)
	return len(p), nil
}

func main() {
	t := document.Call("getElementById", "target")
	logger := log.New((*writer)(&t), "", log.LstdFlags)

	c := http.Client{}
	req, err := http.NewRequest(
		"POST",
		"https://httpbin.org/anything",
		strings.NewReader(`{"test":"test"}`),
	)
  ...
 	logger.Print(string(b))
}
```

![net/http screenshot](/gophercon-2019/gophercon-2019-wasm-4.png)

##### Go test

You might think it would be hard to run tests, but there are already a couple of options for WebAssempbly test runners. The standard library has go_wasm_js_exec for node and [wasmbrowser]( https://github.com/agnivade/wasmbrowsertest) supports testing the code using the browser.  

#### Web frameworks

##### Vecty

The first web framework example shown is using [vecty](https://github.com/gopherjs/vecty) which is very React-like. It was originally written for GopherJS and was later modified to support WebAssembly. Set the title of the window and specify the function to render which defines how the struct should be rendered in a browser. Syntax much like inline html that react uses, but with the power of Go. This is really powerful and expressive.

```go
package main

import (
	"github.com/gopherjs/vecty"
	"github.com/gopherjs/vecty/elem"
	"github.com/gopherjs/vecty/event"
	"github.com/microcosm-cc/bluemonday"
	"github.com/slimsag/blackfriday"
)

func main() {
	vecty.SetTitle("Markdown Demo")
	vecty.RenderBody(&PageView{
		Input: `# Markdown Example

This is a live editor, try editing the Markdown on the right of the page.
`,
	})
}
...
// Render implements the vecty.Component interface.
func (p *PageView) Render() vecty.ComponentOrHTML {
	return elem.Body(
		// Display a textarea on the right-hand side of the page.
		elem.Div(
			vecty.Markup(
				vecty.Style("float", "right"),
			),
			elem.TextArea(
				vecty.Markup(
					vecty.Style("font-family", "monospace"),
					vecty.Property("rows", 14),
					vecty.Property("cols", 70),

					// When input is typed into the textarea, update the local
					// component state and rerender.
					event.Input(func(e *vecty.Event) {
						p.Input = e.Target.Get("value").String()
						vecty.Rerender(p)
					}),
				),
				vecty.Text(p.Input), // initial textarea text.
			),
		),

		// Render the markdown.
		&Markdown{Input: p.Input},
	)
}
...
```

##### Vugu

The last example shown is Vugu. It is a Vue-like library and uses a relatively new custom file format, which is a super set of html with code generators. Vugu provides a generator `vugugen` which takes `.vugu` files and generates the Go code, which you should never have to modify. For handling asynchronous functions, goroutines are used, and Vugu offers locking functions `Lock` and `UnlockRender`. The embedded code is Go.

```bash
<div className="demo-comp">
	<div vg-if='data.isLoading'>Loading...</div>
	<div vg-if='len(data.bpi.BPI) > 0'>
		<div>Updated: <span vg-html='data.bpi.Time.Updated'></span></div>
		<ul>
			<li vg-for='data.bpi.BPI'>
				<span vg-html='key'></span> <span vg-html='fmt.Sprint(value.Symbol, value.RateFloat)'></span>
			</li>
		</ul>
	</div>
	<button @click="data.HandleClick(event)">Fetch Bitcoin Price Index</button>
</div>
```

You can try it in the playground https://play.vugu.org.

## Challenges

We've seen a few demos but what about the file sizes? An easy solution to reducing the size of the files is to use compression like gzip. The demo webserver in the repo has support for gzipping content via a command line flag, which when demo'd, reduced the size of the content being served by roughly 75%.

```bash
go run main.go --gzip
```

Another option would be to use a Content Delivery Network (CDN), to distribute the content closer to the users and provide compression. The [wasmgo project](https://github.com/dave/wasmgo) can be used to deploy binaries to CDNs easily.

##### TinyGo

It's still very early days, but a very exciting project to bring Go to microcontrollers. Tinygo is built on a completely different compiler stack, different runtime with its own garbage collector. It doesn't have a standard implementation for some libraries like http for example, but it does support WebAssembly. The example available in the repo uses a Docker container to run tiny locally and reduced the size of the binary created from 2.58MB down to 33.40KB.

```bash
make tinygo-canvas
go run main.go
```

## Looking ahead

Though it's currently usable, there are still many areas where work needs to be done for WebAssembly in Go. Some areas of improvement include:

* removing the need to copy when using the APIs
* adding support for threading
* reduce the size of the binaries being compiled, could be much smaller if we didnt have to compile the garbage collector
* providing typesafe APIs, [gowebapi](https://github.com/gowebapi/webapi) is in the works
* support for WASI

## Conclusion

WebAssembly in Go is here and ready to try! Although the landscape is evolving really quickly, the opportunity is huge. The ability to deliver truly portable system binaries could potentially replace JavaScript in the browser. WebAssembly has the potential to finally realize the goal of being platform agnostic without having to rely on a JVM.

Join the Gophers Slack #webassembly, #tinygo channels. The examples are all available in the repo here: https://github.com/johanbrandhorst/wasm-experiments
