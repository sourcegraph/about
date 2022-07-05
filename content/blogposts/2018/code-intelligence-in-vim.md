---
title: 'Code Intelligence in Vim'
authors:
  - name: Isaac Snow
publishDate: 2018-09-19T00:00-07:00
tags: [
  "blog"
]
slug: code-intelligence-in-vim
heroImage: https://images.ctfassets.net/le3mxztn6yoo/4IzbdAhbYQ48s2qWgwAS26/6de0af95399f0eb3c43128aca88f67a0/sourcegraph-vim-golang-code-intelligence.png
published: true
---

Do you use Vim and miss the powerful features for navigating your code that [Sourcegraph](https://sourcegraph.com) gives you in your browser?

Code intelligence in Sourcegraph is powered by [language servers](http://langserver.org/) that implement the [Language Server Protocol](https://microsoft.github.io/language-server-protocol/). This means you can install these language servers locally and get code intelligence on your machine.

In this post, I’ll walk you through setting up a language server client for Vim and Neovim. Once complete, you’ll be able to go to definition, find references and more.

## Prerequisites

I’ll start with this minimal `.vimrc` file:

```vim
syntax on
set number
set hidden " Required for specific actions that require multiple buffers
```

I’ll also use [`vim-plug`](https://github.com/junegunn/vim-plug) to manage plugins used in this post. Follow the [installation steps](https://github.com/junegunn/vim-plug#installation) in the README for your specific setup.

Now let’s configure Vim to use `vim-plug` by adding the following to your `.vimrc`:

```vim
call plug#begin('~/.vim/plugged')

" Plugins go here

call plug#end()
```

## Language Server Setup

Before we configure the Vim language server client, we need a language server installed locally, so the client has something to communicate with.

At Sourcegraph, we write a lot of Go, so we’ll use the Go language server for this example. If you don’t use Go, you can pick a [language server](http://langserver.org/) for your language of choice.
> Note that [Go must be installed](https://golang.org/dl/) to use the Go language server.

Let’s install the Go language server.

```shell
go get -u github.com/sourcegraph/go-langserver
```

Make sure it was installed and is executable.

```shell
go-langserver -version
```

> If the above didn't work, make sure you have [Go configured correctly](https://golang.org/doc/install#testing).

That’s it! The Go language server is ready to use.

## Language Server Client Setup

Now it’s time to install the language server client plugin. We’ll use [LanguageClient-neovim](https://github.com/autozimu/LanguageClient-neovim). Although the name contains Neovim, it supports Vim as well.

To install the plugin, let’s add the plugin to our `.vimrc` so `vim-plug` can install it:

```vim
call plug#begin('~/.vim/plugged')

Plug 'autozimu/LanguageClient-neovim', {
    \ 'branch': 'next',
    \ 'do': 'bash install.sh',
    \ }

call plug#end()
```

After you add this to your `.vimrc`, make sure you install the plugin. For `vim-plug,` just run the `:PlugInstall` editor command.

Next, we need to tell the language client how to use the language servers you have installed. To do this, we’ll add a configuration option to your `.vimrc`:

```vim
let g:LanguageClient_serverCommands = {
    \ 'go': ['go-langserver']
    \ }
```

That’s it! You now have many of the powerful features you’re used to from Sourcegraph inside Vim. Now let's use it.

## Language Client Usage

Now use this on a Go file you have locally or save the below to hello.go in your Go workspace.

```go
package main

import "fmt"

var subject string

func main() {
    subject = "World"

    fmt.Printf("Hello, %s!", subject)
}
```

Open this file, then type the following command to execute the context menu function.

```shell
:call LanguageClient_contextMenu()
```

This command opens up a context menu showing you all of the different functionalities provided by the language server. To execute an action, type the number listed by the item and press enter.

![Sourcegraph vim and golang code intelligence](https://images.ctfassets.net/le3mxztn6yoo/c999K2j8NqqCAMAwwuySM/a95eb91f8b0e481d32f28b1e8466e436/sourcegraph-vim-golang-code-intelligence.gif)


While this is pretty cool, it’s still a bit clunky to use. Let’s set up some shortcuts. Add each of the following to your `.vimrc`:

* Get “hover” information by hitting the keys `<leader>h`
```vim
nnoremap <silent> <leader>d :call LanguageClient_textDocument_hover()<CR>
```

* Go to definition by hitting the keys `<leader>d`
```vim
nnoremap <silent> <leader>d :call LanguageClient_textDocument_definition()<CR>
```

* Find references by hitting the keys `<leader>fr`
```vim
nnoremap <silent> <leader>fr :call LanguageClient_textDocument_references()<CR>
```

>>> **Gotcha alert!** The language client adds the list of references to Vim’s location list. Once the operation has completed, you’ll see “Location list updated.” To see the list, type `:lopen`. I recommend installing [junegunn/fzf](https://github.com/junegunn/fzf) for an easier-to-navigate list that opens automatically.

* Rename symbol by hitting the keys `<leader>r`
```vim
nnoremap <silent> <leader>r :call LanguageClient_textDocument_rename()<CR>
```

* Open the context menu to get each of the available actions by hitting the keys `<leader>m`
```vim
nnoremap <silent> <leader>r :call LanguageClient_contextMenu()<CR>
```

There you go! You now have the basic features you know and love from Sourcegraph code intelligence inside Vim or Neovim.

Got any other Vim plugins and integrations I should know about? Let me know by tweeting at [ij_snow](https://twitter.com/ij_snow) and [@sourcegraph](https://twitter.com/sourcegraph)!

