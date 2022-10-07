---
title: 'GopherCon 2018 - How to Write a Parser in Go'
authors:
  - name: Nick Snyder for the GopherCon Liveblog
    url: https://twitter.com/nickdsnyder
publishDate: 2018-08-29T00:00-06:00
tags: [
  "gophercon"
]
slug: gophercon-2018-how-to-write-a-parser-in-go
description: 'Sugu Sougoumarane is the co-creator of Vitess, which contains a SQL parser that is now used by many other projects. In this talk he demonstrates how to write a parser using goyacc.'
heroImage: https://images.ctfassets.net/le3mxztn6yoo/5nOlXCLdhSk6ESWEW8iC24/01978fdff3206c78ad8bee4c0cdfee87/mechanic-tire.jpg
published: true
---

Presenter: [Sugu Sougoumarane](https://www.gophercon.com/agenda/speakers/296989)

Liveblogger: [Nick Snyder](https://twitter.com/nickdsnyder)

[Sugu Sougoumarane](https://www.gophercon.com/agenda/speakers/296989) is the co-creator of [Vitess](https://vitess.io/), which contains a SQL parser that is now used by many other projects. In this talk he demonstrates how to write a parser using goyacc.

## Summary

- [goyacc](https://godoc.org/golang.org/x/tools/cmd/goyacc) is almost an exact translation of the original yacc, except it is written in Go.
- Using a parser generator like goyacc is a quick way to get a working parser for a LALR(1) grammar.
- Lex is not code that you live in; it is code you write once and then use for a long time. It is ok if the code is not clean.
- [Code examples](https://github.com/sougou/parser_tutorial)

---

## Parser use cases

- Language
- Data files (most common)
- Network wire format
- Complex state machines

## How to write a parser in two easy steps

![image](https://user-images.githubusercontent.com/754768/44795577-422d1780-ab68-11e8-9e28-f829b9c1f5c7.png)

## goyacc

- Translates a formal grammar into code.
- Creates a state machine that it runs through.
- Works with LALR(1) grammars (look head one token and decide what action to take).
    - A surprising number of languages can be parsed with LALR(1) parsers.
- Embeds custom code.

## Why goyacc

- Readable - the file format reads like natural language
- Extensible - easy to add rules
- Easy testing - yacc is already tested, so only need to test your own parts as input to yacc
- Efficient - because it uses a state machine
- Detect conflicts - it will tell you if you add grammar rules that conflict (this is the best part)

## Why not goyacc

- If you need error handling. It can tell you syntax error at position, but can't recover from error or give nicer error messaging.
- If you need extreme efficiency; can't beat hand-coded.
- If you need to parse a complex (non-LALR(1)) grammar.

## Using goyacc

General steps:
1. Express grammar.
2. Grammar rules can return values and assign types.
3. Write code to return values.
4. Write lexical analyzer.

Goyacc is almost an exact translation of the original yacc so some of the idiosyncrasies have been inherited. For example, C programs return only 1 value: 0 for success and 1 for failure. This means you need awkward boilerplate to give values to the lexer:

```go
%{
package jsonparser
func setResult(l yyLexer, v Result) {
  l.(*lex).result = v
}
%}
%union{
}
%start main
%%
main:
  {
    setResult(yylex, 0)
  }
```

Use go generate to create the actual parser.go file:
```go
//go:generate goyacc -l -o parser.go parser.y
```

### How to parse a phone number

Area code has three parts: area code, first part, second part.

```go
%token D

phone:
  area part1 part2
| area '-' part1 '-' part2
area: D D D
part1: D D D
part2: D D D D
```

Captital letters signify tokens.

### How to return values

The generated parser is just a single function that runs a state machine and uses local variables.

These variables are saved in a union data structure:

```go
%union{
  result Result
  part string
  ch byte
}

%type <result> phone
%type <part> area part1 part2
```

Actions run Go code (i.e. everything inside the braces) when a rule matches. Dollar variables address a variable that is a value returned by the parser.
```go
part2: D D D D
  {
    $$ = cat($1, $2, $3, $4)
  }
```

### Lexing

Two things are happening concurrently during lexing:
1. Rules are getting matched. The int returned determines which rules match.
2. Code is getting executed depending on which rule is matched. The result value is used inside the code you write.

Sometimes lex can return the byte itself as an int. Yacc has builtin predetermined tokens so all first 127 bytes are reserved and can be returned without telling the parser you are returning them
```go
b := l.nextb()
if unicode.IsDigit(rune(b)) {
    lval.ch = b
    return D
}
return b
```

### How does it work?

![image](https://user-images.githubusercontent.com/754768/44740400-99bf7a80-aab7-11e8-90d1-4a39c0389905.png)

Goyacc
1. Generates a const string per symbol
2. Defines an interface for the Lexer
3. Defines a parse function that accepts the lex as input

## Options for lexing

- Rob Pike https://talks.golang.org/2011/lex.slide
- Fatih Arslan https://medium.com/@farslan/a-look-at-go-scanner-packages-11710c2655fc
- Use a ‘lex’ port
- go/scanner
- Hand-code

Lex is not code that you live in. It is code you write once and then use for a long time. Ok if the code is not clean.

## Future improvements

For complicated grammars (e.g. SQL), Goyacc can generate a big result structure that is expensive to pass around. Goyacc actually assigns this structure every time there is a state transition.

C (yacc) has structure called union which efficiently packs the datastructre, but there is no equivalent in Go....except interfaces are a very close equivalent!

Unlike C union type, you can type assert an interface in Go. One limitation with using a type asserted Go interface is that it is an rvalue which means you can't assign to it.

Switching Vitess to use an interface instead of struct doubles performance, but would be a backward incompatible change to goyacc.
