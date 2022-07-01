---
title: 'GopherCon 2018 - C L Eye-Catching User Interfaces'
authors:
  - name: Ryan D for the GopherCon Liveblog
publishDate: 2018-08-29T00:00-06:00
tags: [
  "gophercon"
]
slug: gophercon-2018-c-l-eye-catching-user-interfaces
description: 'This session will teach you how to use the many features and techniques available for building interactive CLIs.'
heroImage: https://images.ctfassets.net/le3mxztn6yoo/5Oj3acpp7yysQg04W2AW4A/a93d79c10ad903d3902f6b6d8707973a/mechanic-tire-2.jpg
published: true
---

Presenter: [James Bowes](https://www.gophercon.com/agenda/speakers/279047)

Liveblogger: [Ryan D](https://twitter.com/ryan0x44)

This blog was written by [@ryan0x44](https://twitter.com/ryan0x44) from [Cloudflare](https://www.cloudflare.com/). If you want to write Go and help build a better Internet, [Cloudflare is hiring](https://www.cloudflare.com/careers/)!

James' tutorial session will teach you how to use the many features and techniques available for building interactive CLIs, from progress bars and color to mouse input and animated graphics on the command line

## Summary

In this talk you'll learn how to:

* make progress bars and spinners
* decorate text
* draw anywhere on the terminal
* collect input
* do fancy images

...safely, for common terminals on recent versions of Mac OS, Linux, and Windows.

Slides and code examples for this talk are available here: https://bit.ly/cli-ui

---

![img_1443](https://user-images.githubusercontent.com/1902353/44818515-77f0f100-aba6-11e8-8370-deac0015e49b.jpg)

__Go is awesome for CLIs__

* Great support across OS's
* Easy cross compilation with GOOS and GOARCH
* Self-contained binary (as long as you don't need Cgo)

__Hierarchy of User Interfaces__

* Common Line Interface (CLI)
* Text-based User Interface (TUI) ☜ this talk focuses mainly on this
* Graphical User Interface (GUI)

## Part 1: Characters

Carraige Return - your new secret weapon! Though it's closely associated with line feed/newline concepts, we can use it here.

__Demo 1: Progress bars__

Say we want to show a progress bar like this:

`demo progress:  46% |====      |`

We can do this using a single-line Printf call e.g:

`fmt.Printf("\rdemo progress: %3[1]d%% |%-[3]*[2]s|",
    percent, prog, cols)`

which has the following special characters:

* `\r` Move to start of line
* `%3[1]d` Print the int value of arg 1 (e.g. "46")
* `%%` Literal percent
* `-[3]*` Left justify and pad by the value of arg 3
* `[2]s` Print the string value of arg 2 (e.g. "====")

If we were resizing the progress bar based on the size of their terminal, we could pass this in as a variable.

__Demo 2: Unicode__

You might want a progress bar with clock emoji or braille checks, e.g:

`drawing spinners: ⠏  🕙`

To do this, we create slice literal of runes for each state:
```bash
braille = []rune{'⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'}
clock   = []rune{'🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🕛', '🕐', '🕑'}
```

The reason we use a slice rather than a string, is that it's much more difficult to index a string of unicode characters.

To make our spinner, we have a loop including a `\r` to move to the start of the line each time, and print the next rune in our slice:
```bash
fmt.Printf("\rdrawing spinners: %c  %c", braille[i%len(braille)], clock[i%len(clock)])
```

__Unicode: What could go wrong?__

Things to lookout for:

* Missing characters in a typeface e.g. The power symbol is new in Unicode 9 - will not be visible today, but in a few years should.
* Miscounting multi-byte characters e.g. 😀 has len=4, runes=1.
* Wide characters e.g. "十" runes=1 width=2, "01" runes=2, width=2 which can cause characters to be layered over the top of others.
* Single-width characters that render as wide e.g. "☛" runes=1, width=1

## Part 2: Escape Codes

__In-band Signalling__

In-band signalling starts with `\033[`.

Standardized, thanks to American National Standards Institute (ANSI)!

e.g. `\033[5m]`, `\033[4m]`

Note: [example 4](https://github.com/jbowes/cl-eye-catching-uis/blob/master/examples/04-text-attributes/main.go) doesn't work in all terminals, e.g. iTerm `invisible` is clearly visible - but in standard terminals (e.g. xterm) it works.

__Text Decoration and Color__

* Decorations: mostly supported.
* Character Size: not well supported, but really neat.
* Color: so many options!

Even if terminals don't support 24 bit true color, it will usually down-sample into 256 colors (e.g. xterm). Unless you're trying to render fine art, down-sampling will probably be ok!

__Multiline Output With Cursor Movement__

Linear-Feedback Shift Register Screen Clearing / [Fizzlefade](http://fabiensanglard.net/fizzlefade/index.php).

[Example 7](https://github.com/jbowes/cl-eye-catching-uis/blob/master/examples/07-cursor-position/main.go) demonstrates an implemnetation of fizzlefade in Go. Note: it may break if terminal size isn't 80 characters.

So much more, e.g:
* Relative cursor movement
* Partial screen clearing (e.g. below cursor, half-line)

__How bad can it be?__

We've looked at things handled entirely by the client, but your connection might be over SSH and you don't have direct access. e.g. teapot in ReGIS - some terminals support it, but otherwise you may end up with a terminal showing gobbledygook.

__How can we tell what is supported?__

Environment variables:
* `TERM=xterm-256color` e.g. DOS terminal won't have this set
* `COLORTERM=truecolor` will tell you if the terminal supports 24 bit true color; some terminals will tell you it does even if it will down-sample to 256 colors.
* There are other terminal specific values you can look at.

What else can you use?
* TERMINFO is a database of terminal names (from TERM) and capabilities that started in ncurses. Includes escape codes.
* For better portability, use a terminfo database for in-band signalling.

Your last option is to rely on the user;
* It's a good idea to give users choice
* Provide flags and configuration for color and interactivity
* Sometimes they may not want fancy colors, etc.

__Windows support__

* Windows 10 can enable VT processing
* For other versions, wrap the output and parse escape codes

What's cool is we can enable the Windows subsystem for Linux,.

We do this by turning on the `ENABLE_VIRTUAL_TERMINAL_PROCESSING` flag (see [here](https://github.com/jbowes/cl-eye-catching-uis/blob/master/examples/08-windows-vt-processing/term_windows.go)) - then we can continue using the same ANSI escape codes and POSIX syscalls without worrying about the Windows API calls.

Unfortunately the console related APIs don't work across environments.

## Part 3: System Calls

Out-of-band signalling through system calls.

We can thank IEEE, and Microsoft for documenting their own APIs!

__Detecting Terminal Size__

Great for columnar output and wrapping.

Useful e.g. to change progress bar size, or not mess up your fizzlefade demo when you have the wrong terminal size!

For Linux we use syscalls to:
1. get the terminal kind
2. get the terminal size

The Windows flow is similar, but the response is much more involved.
* We get the console screen buffer, which contains a window property that represents a rectangle

You can use the columns and lines environment variables in some shells. If you're going to be painting for a while, you might as well use syscalls - there's also a signal you can listen for when the terminal is resized.

__Multi-Line Interactive Inline Inputs__

For in-line interfaces (we'll cover fullscreen next).

__Raw Mode__

When using Raw Mode, instead of being line-based, output will be character-based and the terminal won't do any pre-processing of the output.

In our example `func makeRaw` is taken largely from a man page which describes what needs to be done, such as disabling certain terminal features.

Using this gives you full control, e.g. someone types a password you can control whether you echo it or not.

## Part 4: Potpourri

__Fullscreen interfaces__

This is a combination of:
* Raw mode
* Direct TTY access
* Alternate buffer

We do this so user can redirect stdout/stderr and still control what is displayed for the user.

In [example 11](https://github.com/jbowes/cl-eye-catching-uis/blob/master/examples/11-full-screen-restore/main.go), when the program ends, the user is back to their original terminal with the full history, etc.

__Displaying graphics__

There are a few ways to do this:
* SIXEL: raster graphics from DEC, e.g. display pixels
* ReGIS: vector graphics from DEC
* Custom formats for assorted modern terminals, e.g. iTerm

If you wanted to, you could use iTerm combined with SIXEL, etc.

When displaying images, note that there are a set of escape sequences that says whether the terminal should display the image, or have the terminal download the file directly.

__Capturing mouse input__

* Broad support - pretty well supported across every terminal.
* Not supported in Windows VT Processing. You have to fall back to the input buffer API.

In our example, we receive a stream of signals that indicate what the mouse is doing - and display a Gopher image which can follow mouse around on the screen.

## Appendix

A few links if you want to play around or learn more...

### Great libraries:

* [chzyer/readline](https://github.com/chzyer/readline)
* [manifoldco/promptui](https://github.com/manifoldco/promptui)
* [gdamore/tcell](https://github.com/gdamore/tcell)
* [mattn/go-runewidth](https://github.com/mattn/go-runewidth)

### Reading list:

* [Windows console reference](https://docs.microsoft.com/en-us/windows/console/console-reference)
* [ANSI escape codes](https://en.wikipedia.org/wiki/ANSI_escape_code)
* [termios(3)](http://man7.org/linux/man-pages/man3/termios.3.html)
* [XTerm Control Sequences](http://invisible-island.net/xterm/ctlseqs/ctlseqs.html)

