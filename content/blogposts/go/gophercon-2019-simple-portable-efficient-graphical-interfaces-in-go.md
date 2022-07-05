---
title: "GopherCon 2019 - Simple, Portable and Efficient Graphical Interfaces in Go"
description: "Gio is a new open source Go library for writing immediate mode GUI programs that run on all the major platforms: Android, iOS/tvOS, macOS, Linux, Windows. The talk will cover Gio's unusual design and how it achieves simplicity, portability and performance."
authors:
  - name: Christina Forney for the GopherCon 2019 Liveblog
    url: https://handbook.sourcegraph.com/team/#christina-forney
publishDate: 2019-07-25T00:00-10:50
tags: [
  gophercon
]
slug: gophercon-2019-simple-portable-efficient-graphical-interfaces-in-go
heroImage: https://about.sourcegraph.com/gophercon2019.png
published: true
---

Presenter: Elias Naur

Liveblogger: [Christina Forney](https://www.linkedin.com/in/christinaforney/)

## Overview

Gio is a new open source Go library for writing immediate mode GUI programs that run on all the major platforms: Android, iOS/tvOS, macOS, Linux, Windows. The talk will cover Gio's unusual design and how it achieves simplicity, portability and performance.

---

## Why GUIs?

Last year at GopherCon we asked what the biggest challenges that Go developers faced. Here are the results:

![Go challenges graph](/gophercon-2019/gophercon-2019-gio-go-challenges.jpg "Go challenges graph")

As you heard in the keynote, Modules, generics, and error handling is being handled by the Go team, so I wanted to focus on making writing GUIs in Go easy.

## Introduction

Gio - [gioui.org](https://gioui.org/)

- Gio is a simple Go module for writing portable and fast graphical interfaces.

Scatter - [scatter.im](https://scatter.im/)

- Scatter is a Gio program for end-to-end encrypted messaging over email.

## Demo - Scatter

Scatter is a multi-platform messaging application for sending and receiving encrypted chat messages, implementing the Signal protocol over federated email.

![Scatter UI](/gophercon-2019/gophercon-2019-gio-scatter-ui.jpg "Scatter UI")

### Features

I wanted to be able to write a GUI program in GO that I could implement only once and have it work on every platform. This, to me, is the most interesting feature of Gio.

Features:

- Immediate mode design.
  - UI state owned by program.
- Only depends on lowest-level platform libraries.
  - Minimal dependency tree to keep things low level as possible.
- GPU accelerated vector and text rendering.
  - It’s super efficient
- No garbage generated in drawing or layout code.
- Cross platform (macOS, Linux, Windows, Android, iOS, tvOS, Webassembly).
- Core is 100% Go. OS-specific native interfaces are optional.

### Immediate mode UI

Some programs require you to maintain state for your widgetry. In Gio, you draw what you need to draw, you layout what you need to layout, and that’s it!

- UI state is owned by the program. Even layout and widget tree.
- No callbacks. Events are handled while drawing.

### Blank window

This is all you need to render a simple blank window:

```go
package main

import (
    “gioui.org/ui/app”
)

func main() {
    go func() {
        w := app.NewWindow(nil)
        for range w.Events() {
        }
    }()
    app.Main()
}
```

This is odd, because you’re doing the event loop in your go routine.

### Hello, World

Slightly more advanced example, but in this case you are loading up some support structures and adding `text.Label` to display your label:

```go
func main() {
    go func() {
        w := app.NewWindow(nil)
        regular, _ := sfnt.Parse(goregular.TTF)
        var cfg ui.Config
        var faces measure.Faces
        ops := new(ui.Ops)
        for e := range w.Events() {
            if e, ok := e.(app.DrawEvent); ok {
                cfg = &e.Config
                cs := layout.RigidConstraints(e.Size)
                ops.Reset()
                faces.Reset(cfg)

                // ADD YOUR LABELS
                lbl := text.Label{Face: faces.For(regular, ui.Sp(72)), Text: “Hello, World!”}
                lbl.Layout(ops, cs)

                w.Draw(ops)
            }
        }
    }()
    app.Main()
}
```

![Go challenges graph](/gophercon-2019/gophercon-2019-gio-hello-world.jpg "Go challenges graph")

## Running Gio programs

### Linux, macOS, Windows

<br />

#### Enable modules

`export GO111MODULE=on`

I recommend you enable for convenience and also because I break the API often, so you will be shielded from updates that could break your application until you are ready to upgrade.

#### Build, install or run the program

<br />

```bash
go build gioui.org/ui/apps/hello
go install scatter.im/cmd/scatter
go run helloworld.go
```

### Android

There is a tool to package your application as an APK that you can install through the ads tool to run on a device or simulator.

Install the gio tool:

```bash
go install gioui.org/cmd/gio
$GOBIN/gio -target android -o hello.apk helloworld.go
```

Install on a connected device or emulator with adb:

```bash
adb install hello.apk
```

### iOS/tvOS

For iOS/tvOS devices:

```bash
$GOBIN/gio -target <ios|tvos> -o hello.ipa -appid <bundle id> helloworld.go
```

Use the .app file extension for simulators:

```bash
$GOBIN/gio -target <ios|tvos> -o hello.app helloworld.go
```

Install on a running simulator:

```bash
xcrun simctl install booted hello.app
```

### Browsers

To output a directory ready to serve:

```bash
$GOBIN/gio -target js -o www helloworld.go
```

Use a webserver or goexec to serve it:

```bash
go run github.com/shurcooL/goexec ‘http.ListenAndServe(“:8080”, http.FileServer(http.Dir(“www”)))’
```

Compile directly with the Go tool or use the Gio tool to build as a web assembly module, but also add the necessary file to supply it to work in your browser.

## Operations

The way you communicate each user interface update to gio. Gio has not state so you have to add it to every frame.

Operations buffer and type called ui ops and you add operations to that to your ops buffers which sends to window.draw method.

### Operations

<br />

#### Serializing operations

```go
import “gioui.org/ui” // Pure Go

var ops ui.Ops
// Add operations to ops
ui.InvalidateOp{}.Add(ops)
…
```

<br />

#### Only the app package depends on platform libraries

```go
import “gioui.org/ui/app”

var w app.Window
w.Draw(&ops)
```

<br />

#### Position other operations

```go
import “gioui.org/ui”

ui.TransformOp{ui.Offset(f32.Point{…})}.Add(ops)
```

<br />

#### Request a redraw

```go
ui.InvalidateOp{}.Add(ops) // Immediate
ui.InvalidateOp{At: …}.Add(ops) // Delayed
```

<br />

### Drawing operations

<br />

#### Set current color or image

```go
import “gioui.org/ui/draw”

draw.ColorOp{Color: color.RGBA{…}}.Add(ops)
draw.ImageOp{Src: …, Rect: …}.Add(ops)
```

<br />

#### Draw with the current color or image

`draw.DrawOp{Rect: …}.Add(ops)`

### Clip operations

<br />

#### Clip drawing to a rectangle

```go
import “gioui.org/draw”

draw.RectClip(image.Rectangle{…}).Add(ops)
```

<br />

#### Or to an outline

```go
var b draw.PathBuilder
b.Init(ops)
b.Line(…)
b.Quad(…) // Quadratic Beziér curve
b.Cube(…) // Cubic Beziér curve
b.End()
```

<br />

### Input operations

<br />

#### Keyboard and text input

```go
import “gioui.org/ui/key”

// Declare key handler.
key.HandlerOp{Key: handler, Focus: true/false}.Add(ops)

// Hide soft keyboard.
key.HideInputOp{}.Add(ops)
```

<br />

#### Mouse and touch input

```go
import “gioui.org/ui/pointer”

// Define hit area.
pointer.RectAreaOp{Size: …}.Add(ops)
pointer.EllipseAreaOp{Size: …}.Add(ops)

// Declare pointer handler.
pointer.HandlerOp{Key: c, Grab true/false}
```

## Drawing

### Drawing (and animating)

<br />

#### Drawing and animating a clipped square

```go
    square := f32.Rectangle{Max: f32.Point{X: 500, Y: 500}}
    radius := animateRadius(e.Config.Now(), 250)

    // Position
    ui.TransformOp{ui.Offset(f32.Point{
        X: 100,
        Y: 100,
    })}.Add(ops)
    // Color
    draw.ColorOp{Color: color.RGBA{A: 0xff, G: 0xcc}}.Add(ops)
    // Clip corners
    roundRect(ops, 500, 500, radius, radius, radius, radius)
    // Draw
    draw.DrawOp{Rect: square}.Add(ops)
    // Animate
    ui.InvalidateOp{}.Add(ops)

    // Submit operations to the window.
    w.Draw(ops)
```

## Layout

If you have non-trivial setup, you need some way to lay them out - you don’t want to use absolute coordinates for each item. Layout assembly helps you structure your user interface. As a result of calling their layout, widgets will give you their own size.

### Constraints and dimensions

<br />

#### Constraints are input

```go
package layout // import gioui.org/ui/layout

type Constraints struct {
    Width  Constraint
    Height Constraint
}

type Constraint struct {
    Min, Max int
}
```

<br />

#### Dimensions are output

```go
type Dimens struct {
    Size     image.Point
    Baseline int
}
```

<br />

#### Widgets accept constraints, output dimensions

```go
package text // import gioui.org/ui/text

func (l Label) Layout(ops *ui.Ops, cs layout.Constraints) layout.Dimens
func (e *Editor) Layout(ops *ui.Ops, cs layout.Constraints) layout.Dimens

package widget // import gioui.org/ui/widget

func (im Image) Layout(c ui.Config, ops *ui.Ops, cs layout.Constraints) layout.Dimens
```

<br />

### Example - two labels

```go
func drawLabels(face text.Face, ops *ui.Ops, cs layout.Constraints) {
    **cs.Height.Min = 0**
    lbl := text.Label{Face: face, Text: “One label”}
    **dimensions := lbl.Layout(ops, cs)**
    ui.TransformOp{ui.Offset(f32.Point{
        **Y: float32(dimensions.Size.Y),**
    })}.Add(ops)
    lbl2 := text.Label{Face: face, Text: “Another label”}
    lbl2.Layout(ops, cs)
}
```

<br />

### Layout helpers

Can layout to the compass directions or to specific place, like the center.

#### Aligning

```go
var ops *ui.Ops
var cs layout.Constraints

align := layout.Align{Alignment: layout.Center}
cs = align.Begin(ops, cs)
…
dimensions := someWidget.Layout(…, cs) // Draw widget
…
dimensions = align.End(dimensions)
```

#### Insetting

```go
var cfg ui.Config
inset := layout.Inset{Top: ui.Dp(8), …} // 8dp top inset
cs = inset.Begin(c, ops, cs)
…
dimensions := anotherWidget.Layout(…, cs) // Draw widget
…
dimensions = inset.End(dimensions)
```

<br />

### Flex layout

<br />

#### Lay out widgets on an axis.

```go
func drawRects(c ui.Config, ops *ui.Ops, cs layout.Constraints) {
    flex := layout.Flex{}
    flex.Init(ops, cs)

    cs = flex.Flexible(0.5)
    dimensions := drawRect(c, ops, color.RGBA{A: 0xff, R: 0xff}, cs)
    red := flex.End(dimensions)

    cs = flex.Flexible(0.25)
    dimensions = drawRect(c, ops, color.RGBA{A: 0xff, G: 0xff}, cs)
    green := flex.End(dimensions)

    cs = flex.Flexible(0.25)
    dimensions = drawRect(c, ops, color.RGBA{A: 0xff, B: 0xff}, cs)
    blue := flex.End(dimensions)

    flex.Layout(red, green, blue)
}
```

<br />

### Stack layout

```go
func drawRects(c ui.Config, ops *ui.Ops, cs layout.Constraints) {
    stack := layout.Stack{Alignment: layout.Center}
    stack.Init(ops, cs)

    cs = stack.Rigid()
    dimensions := drawRect(c, ops, color.RGBA{A: 0xff, R: 0xff}, ui.Dp(50), cs)
    red := stack.End(dimensions)

    cs = stack.Rigid()
    dimensions = drawRect(c, ops, color.RGBA{A: 0xff, G: 0xff}, ui.Dp(100), cs)
    green := stack.End(dimensions)

    cs = stack.Rigid()
    dimensions = drawRect(c, ops, color.RGBA{A: 0xff, B: 0xff}, ui.Dp(150), cs)
    blue := stack.End(dimensions)

    stack.Layout(red, green, blue)
}
```

<br />

### List layout

```go
        list := &layout.List{
            Axis: layout.Vertical,
        }
func drawList(c ui.Config, q input.Queue, list *layout.List, face text.Face, ops *ui.Ops, cs layout.Constraints) {
    const n = 1e6
    for list.Init(c, q, ops, cs, n); list.More(); list.Next() {
        txt := fmt.Sprintf(“List element #%d", list.Index())

        lbl := text.Label{Face: face, Text: txt}
        dims := lbl.Layout(ops, list.Constraints())

        list.Elem(dims)
    }
    list.Layout()
}
```

## Input

### Input queue and handler keys

```go
// Queue maps an event handler key to the events
// available to the handler.
type Queue interface {
    Events(k Key) []Event
}

// Key is the stable identifier for an event handler.
// For a handler h, the key is typically &h.
type Key interface{}
```

<br />

### Pointer event handling

```go
func (b *Button) Layout(queue input.Queue, ops *ui.Ops) {
    for _, e := range queue.Events(b) {
        if e, ok := e.(pointer.Event); ok {
            switch e.Type {
            case pointer.Press:
                b.pressed = true
            case pointer.Release:
                b.pressed = false
            }
        }
    }

    col := color.RGBA{A: 0xff, R: 0xff}
    if b.pressed {
        col = color.RGBA{A: 0xff, G: 0xff}
    }
    pointer.RectAreaOp{
        Size: image.Point{X: 500, Y: 500},
    }.Add(ops)
    pointer.HandlerOp{Key: b}.Add(ops)
    drawSquare(ops, col)
}
```

Takes all available events, updates it’s own state, system can know whether the events belong to this button or not is you register the area rectangle arc with a handler.

### Window input queue

<br />

#### The Window’s Queue method returns an input.Queue for OS events.

```go
package app // import gioui.org/ui/app

func (w *Window) Queue() *Queue
```

<br />

### Gestures

```go
import “gioui.org/ui”
import “gioui.org/ui/gesture”
import “gioui.org/ui/input”
```

<br />

#### Detect clicks

```go
var queue input.Queue
var c gesture.Click
for _, event := range c.Events(queue) {
    // event is a gesture.ClickEvent, not a raw pointer.Event.
}
```

<br />

#### Determine scroll distance from mouse wheel or touch drag/fling

```go
var cfg ui.Config
var s gesture.Scroll

distance := s.Scroll(cfg, queue, gesture.Vertical)
```

<br />

## Widgets

### Widgets - the Editor

Complete implementation of a text area field. It’s a complicated widget, but is simple to use. You have to keep state somewhere, but you give it font and font size. Simply call the layout methods and

#### Initialize the editor

```go
import “gioui.org/ui/text”

    var faces measure.Faces
    editor := &text.Editor{
        Face: faces.For(regular, ui.Sp(52)),
    }
    editor.SetText(“Hello, Gophercon! Edit me.”)
```

<br />

#### Draw, layout and handle input in one call.

```go
editor.Layout(cfg, queue, ops, cs)
```

<br />

## Why Gio?

Gio is:

- **Simple**. Immediate mode design, no hidden state.
- **Portable**. The core of Gio is all Go.
- **Fast**. GPU accelerated, very little per-frame garbage.
- **Convenient**. Develop on desktop, deploy on mobile.
- Public domain source (UNLICENCE). Dual licenced MIT to please your lawyers.
  Most importantly, Gio needs your help to succeed!

I want to bring Go from a place where GUI programming is a fringe activity to a state where it’s normal to use. Maybe in the future we can bring it to a place where you will choose Go for your GUI programming even if you aren’t interested in Go as a programming language, but because the tooling is so good.
