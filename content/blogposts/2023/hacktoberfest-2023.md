---
title: "How Cody can help you make awesome Hacktoberfest contributions"
authors:
  - name: Justin Dorfman
    url: https://twitter.com/jdorfman
publishDate: 2023-10-05T10:00-07:00
description: "It's time to get excited for Hacktoberfest 2023! This year, Cody can help you make contributions to the open source community."
tags: [blog]
slug: 'hacktoberfest-2023'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/hacktoberfest-2023-blog-og.jpg
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/hacktoberfest-2023-blog-og.jpg
---

🙏 _Please do not spam contributions with Cody or other generative AI, as it burdens maintainers._

It's time to get excited for [Hacktoberfest 2023](https://hacktoberfest.com/)! This year, [Cody](https://cody.dev) can help you make contributions to the open source community. 

With Cody, you can make high-quality contributions to open source projects more efficiently and effectively. For example, you can use Cody to:

* **Document code:** Cody can generate documentation comments for the code you have selected. 
* **Explain code:** Cody can generate clear and concise documentation for code. 
* **Generate unit tests:** Cody can generate unit tests for your code, which can help you ensure that the project's code is working as expected.
* **And much more**: Code autocomplete, code smells, custom commands, and other features to help you be more productive.

Before starting with contributions to a project, it is important to learn what the project does. The [Cody Web App](https://sourcegraph.com/cody) and supported IDE extensions ([VS Code](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai), [JetBrains](https://plugins.jetbrains.com/plugin/9682-sourcegraph-cody--code-search), [Neovim](https://github.com/sourcegraph/sg.nvim)) allow you to ask questions about specific repositories. For example, you can choose [Hugging Face's Transformers repo](https://sourcegraph.com/github.com/huggingface/transformers) and ask what it does, what the tech stack is, who the contributors are, etc.

![Ask Cody a question](https://storage.googleapis.com/sourcegraph-assets/blog/hacktoberfest-2023-blog-image3.png)
<center>Ask Cody a question</center>


### Documentation

#### For comments

To generate documentation comments for your code, select the code you want to document and then run the `/doc` command. Cody will generate documentation comments in the appropriate format for your programming language.

**Example:**

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
```

**Doc output:**

![Doc output](https://storage.googleapis.com/sourcegraph-assets/blog/hacktoberfest-2023-blog-image2.png)


Hugging Face is having a [Doc Tests Sprint](https://github.com/huggingface/transformers/issues/16292). Use Cody to create some [docstring examples](https://github.com/huggingface/transformers/issues/16292)!


#### For docs

To generate code explanations for documentation, select the code you want to explain and then run the `/explain` command. Cody will generate an explanation in plain language format that is easy to understand.

**Example:**

```javascript
function celsiusToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
  }
```

**Explain output:**

_“So in simple terms, it takes a Celsius temperature, converts it to Fahrenheit using the standard formula, and returns the Fahrenheit temperature. This allows the caller to easily convert between temperature scales.”_

WireMock is looking for documentation clean-up and gaps. [Help them](https://github.com/wiremock/community/issues/47)!


### Generate Unit Tests

To generate unit tests with Cody, select the code you want to test and then run the `/test` command. Cody will generate unit tests in the appropriate format for your programming language.  

**Example:**

Using the same code above, Cody was able to generate a unit test for the `celsiusToFahrenheit` function.

**Test output:**

![Test output](https://storage.googleapis.com/sourcegraph-assets/blog/hacktoberfest-2023-blog-image1.png "image_tooltip")

Apache StreamPipes is looking to [implement unit tests](https://github.com/apache/streampipes/issues/1893). Give it a try with the `/test `command!


### Respect the maintainers

**Please ensure you don't overwhelm maintainers with pull requests they aren't looking for.** If they have an issue that Cody can help you help them with, go for it! 


### Conclusion

Hacktoberfest is a great way to contribute to open source and learn new things. But it can also be scary, especially if you're new to open source. Cody AI can help you make awesome Hacktoberfest contributions by unblocking you when you're jumping into new projects, trying to understand legacy code, or taking on tricky problems.

Don't forget to have fun! Hacktoberfest is a great opportunity to learn and connect with other developers from around the world. Here are some projects looking for help:

* Hugging Face is having a [Doc Tests Sprint](https://github.com/huggingface/transformers/issues/16292). Use Cody to create some [docstring examples](https://github.com/huggingface/transformers/issues/16292)!
* WireMock is looking for documentation clean-up and gaps. [Help them](https://github.com/wiremock/community/issues/47)!
* Apache StreamPipes is looking to [implement unit tests](https://github.com/apache/streampipes/issues/1893). Give it a try with the `/test `command!

P.S. Join our [Discord community](https://discord.com/servers/sourcegraph-969688426372825169) to get help from Cody experts and learn more about how to use Cody AI to make awesome Hacktoberfest contributions.

P.S.S. If you get something merged, let us know in [#hacktoberfest-2023](https://discord.gg/sourcegraph-969688426372825169) so we can hook you up with some swag!

🎃
