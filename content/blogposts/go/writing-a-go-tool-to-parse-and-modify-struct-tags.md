---
title: 'Writing a Go Tool to Parse and Modify Struct Tags'
authors:
  - name: Fatih Arslan
publishDate: 2017-07-13T00:00-07:00
tags: [
  "gophercon"
]
slug: writing-a-go-tool-to-parse-and-modify-struct-tags
heroImage: https://images.ctfassets.net/le3mxztn6yoo/1jsbunUDpOo0QkkO2wucGC/a793ce04c93f80667577a62464efe664/IMG_4098.JPG.jpeg
published: true
---


Liveblog by Matt King

## Overview

Struct field tags are an important part of encode/decode types, especially when using packages such as encoding/json. However, modifying tags is repetitive, cumbersome and open to human errors. We can make it easy to modify tags with an automated tool that is written for this sole purpose.

### gomodifytags

A Go tool to modify/update field tags in structs. `gomodifytags` makes it easy to update, add or delete the tags in a struct field. You can easily add new tags, update existing tags (such as appending a new key, i.e: `db`,`xml`, etc..) or remove existing tags. It also allows you to add and remove tag options. It's intended to be used by an editor, but also has modes to run it from the terminal. Read the usage section below for more information. [View on Sourcegraph](https://sourcegraph.com/github.com/fatih/gomodifytags) or clone the [GitHub Project](https://github.com/fatih/gomodifytags) or to get started.


#### How does it work?

- Parse the file
- Find the selection
- Modify the struct
- Output the result

### Why do we need tooling?

Because working with struct tags are not fun. Let's take the following struct:


```go
type Example struct {

    StatusID int64 `json:"status_id"`

    Foo string     `json:"foo" xml:"foo"`

    Bar bool       `json:"bar" xml:"bar"`


    Server struct {

        Address string `json:"address"`

        TLS bool       `json:"tls",xml:"tls"`

    } `json="server"`


    DiskSize int64   `json:disk_size`

    Volumes []string `"json":"volumes"`

}
```

Maybe you noticed or maybe you didn't, but there are 4 errors in the first struct example. This can be a mess to deal with and that's why tooling is important.

Here is how the struct should look:

```go
type Example struct {

    StatusID int64 `json:"status_id"`

    Foo string     `json:"foo" xml:"foo"`

    Bar bool       `json:"bar" xml:"bar"`

    Server struct {

        Address string `json:"address"`

        TLS bool       `json:"tls" xml:"tls"`

    } `json:"server"`


    DiskSize int64   `json:"disk_size"`

    Volumes []string `json:"volumes"`

}
```


gomodifytags underwent several iterations. The first implementation worked by first searching backwards from the cursor to the first 'struct {' literal. Once found, it searched forward for the right hand brace '}'. Then it would calculate the line number between the braces and for each line, get the first identifier, convert it to camel_case and append it to the same line.

This was problematic and could result in duplicate tags, the inability to handle nested structures, and would break if there were inline comments. The second attempt relied on the Go parser family.

The second iteration also ran into problems when calling `reflect.StructTag`. It couldn't detect if the tag is malformed, it doesn't know the semantics of options (i.e omitempty), and it doesn't return all existing tags.

The solution we have now works by first fetching configuration settings, parsing the content, finding the selection, modifying the struct tag and outputting the formatted result.

gomodifytags was built from the ground up for editors. By building the tool editor first we are able to select structs based on offset or range of lines. We can write the result to stdout or file so we can preserve file history and undo changes easily.

### Editor Integrations

- vim with vim-go

- atom with go-plus

- vscode with vscode-go



## Update
If you want to learn more about how to write a tool to modify struct tags. Check out the [slides](https://speakerdeck.com/farslan/building-a-go-tool-to-modify-struct-tags).


## About the speaker
Fatih is a Software Engineer at [@DigitalOcean](https://twitter.com/digitalocean). A Gopher and a coffee geek. He's the author of [vim-go](https://github.com/fatih/vim-go) and several popular Go packages. He's contributed to several open source projects, such as Go, Terraform, HCL, and Koding.

[GitHub](https://github.com/fatih)

[Twitter](https://twitter.com/fatih)

[Medium](https://medium.com/@farslan)

![IMG 4098.JPG](//images.contentful.com/le3mxztn6yoo/1jsbunUDpOo0QkkO2wucGC/a793ce04c93f80667577a62464efe664/IMG_4098.JPG.jpeg)
