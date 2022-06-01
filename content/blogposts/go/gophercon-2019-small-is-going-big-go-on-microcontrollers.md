---
title: "GopherCon 2019 - Small is going big: Go On microcontrollers"
description: "TinyGo takes the Go programming language to the 'final frontier' where we could not go before... running directly on microcontrollers like Arduino and more! In this talk I will introduce TinyGo (http://tinygo.org) a new miniature version of the Go language that uses the LLVM compiler toolchain to create native code that can run directly even on the smallest of computing devices. This talk will feature live coding demos of flying objects!"
authors:
  - name: Julie A. Kohler for the GopherCon 2019 Liveblog
publishDate: 2019-07-26T00:00-11:20
tags: [
  gophercon
]
slug: gophercon-2019-small-is-going-big-go-on-microcontrollers
heroImage: /gophercon2019.png
published: true
---

Presenter: Ron Evans

Liveblogger: [Julie A. Kohler](https://twitter.com/juliecoding)

## Overview

TinyGo takes the Go programming language to the 'final frontier' where we could not go before... running directly on microcontrollers like Arduino and more! In this talk I will introduce TinyGo (http://tinygo.org) a new miniature version of the Go language that uses the LLVM compiler toolchain to create native code that can run directly even on the smallest of computing devices. This talk will feature live coding demos of flying objects!

---
In this presentation, Ron Evans, creator GoCV, GoBot and "technologist for hire", demonstrated how Go code can be run on embedded systems using TinyGo, a compiler intended for use in microcontrollers, WebAssembly (WASM), and command-line tools. Evans began his presentation by countering the idea that Go, while fast, produces executables too large to run on the smallest computers. While that may be true of the standard Go compiler, TinyGo produces much smaller outputs. For example: 

"Hello World" program compiled using Go 1.12 => 1.1 MB  
Same program compiled using TinyGo 0.7.0 => **12 KB**

The TinyGo takes source code, creates its SSA (Static Single Assignment) form using Go's SSA package, then transforms the SSA into LLVM intermediate representation (IR). The IR is optimized by LLVM, then emitted as machine code by LLVM to an object file. Read more about the pipeline [here](https://tinygo.org/compiler-internals/pipeline/).

TinyGo currently lacks support for the full Go language and Go standard library. For example, TinyGo does not have support for the `net` package, although contributors have created implementations of interaces that work with the WiFi chip built into Arduino chips. Support for Go routines is also limited, although simple programs usually work. 

Evans demonstrated that despite some limitations, thanks to TinyGo, the Go language can still be run in embedded systems. Shout-out to Evans' son Salvador, who assisted with his dad's demonstrations.

### DEMO 1: Digispark   
The Digispark is a microcontroller smaller even than an Arduino. It has an 8-bit processor and 8 KB of RAM. Evans flashed the Digispark with this program and then plugged the device into a battery pack get an LED to flash. 

```go
package main

import (
  "machine"
  "time"
)
func main() {
  led := machine.LED
  led.Configure(machine.PinConfig{Mode: machine.PinOutput})
  for {
    led.Low()
    time.Sleep(time.Millisecond * 500)
    led.High()
    time.Sleep(time.Millisecond * 500)
  }
}
```

### DEMO 2: Circuit Playground Express  
For this demo, Evans strapped an Arduino Circuit Playground Express to a Gopherbot, a programmable stuffed animal with an antenna tipped by an LED. The program written for this demo successfully detected if a button had been pressed and then lit up the LED if it had.  

### DEMO 3: Flight controller  
This demonstration used an Arduino Nano 33, an analog joystick, a small OLED display, and buttons. Using some standard Go packages but also `tinydraw` and `tinyfront` Evans created a program that displays the X and Y coordinates that described the joystick's position. 

### DEMO 4: Flight controller in action  
In this demo, Evans used the flight controller from Demo 3 to fly a Tello Movidius X drone around the front of the room. The drone used GoCV to run facial recognition software that identified members of the audience as "humans". (Salvador lamented that this was not a weaponized attack drone.)

### DEMO 5: TinyGo Playground and HiFive board  
The [TinyGo Playground](https://play.tinygo.org) allows you to compile Go code online using TinyGo and uses a board similator, so that users can do things like light up an "LED" on the screen. After showing a small program in the playground, Evans flashed a HiFive board with it, allowing another LED to blink.

TinyGo offers exciting possibilities to run Go in the "smallest" places. Maker-minded Gophers are invited to explore more on Saturday, which is **Community Day** at Gophercon. Activities feature a hardware hack session where attendees can experiment with TinyGo and even receive one of **300 Arduino Nano 33 IoT boards**. Much thanks to Evans for demonstrating how to expand our Go horizons by shrinking our code. 

