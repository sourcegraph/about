---
title: "Write less with this AI-powered code documentation tool"
authors:
  - name: Rojesh Shikhrakar
  - name: Ado Kukic
    url: https://x.com/adocomplete
publishDate: 2024-07-15T10:00-07:00
description: "Improve code readability and streamline reviews with an AI-powered documentation tool integrated into your development workflow."
tags: [blog, guest-post]
slug: "write-less-with-this-ai-powered-code-documentation"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/gp-write-less-with-this-ai-powered-code-documentation/image_og.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/gp-write-less-with-this-ai-powered-code-documentation/image_og.png
---

Developers enjoy writing code, solving problems, and shipping products. However, there’s a part that’s not much fun: documenting the code. Writing documentation often feels tedious, leading some developers to delay it until the last minute.

When you finally document everything, you might even forget how exactly you solved the specific issue or why certain parts were connected. You may skip writing comments, assuming other developers will understand your code. A survey shows developers spend 11-50% of their time on [code maintenance](https://blog.tidelift.com/developers-spend-30-of-their-time-on-code-maintenance-our-latest-survey-results-part-3), including code review, refactoring, and documentation. While tedious and time-consuming, it’s a task that requires you to pause mid-sprint and disrupt your flow.

## Why documentation matters

Every experienced developer understands the importance of clear internal or external documentation. An uncommented function can easily be a puzzle for both your future self and other developers. If a code is functional now and will likely remain so in the future, one should write accurate documentation that will serve as a guide that explains:

- what you’ve done,
- what’s the purpose of the code,
- why it’s important,
- why certain decisions were made,
- how it works, and
- how to use the code.

In addition, clear internal documentation definitely improves code readability. It allows you or any other developer to quickly understand, use, or improve the code without getting lost, making code reviews easier.

## Documentation is everywhere

Documentation includes a wide range of texts, including user manuals and technical guides, tailored for developers, testers, and end-users. Documentation can be categorized into several types:

- **User documentation**: Written by technical writers, this includes manuals, quick-start guides, tutorials, and frequently asked questions (FAQs) that provide guidance on effectively using the software or product for the end-users.
- **Technical documentation:** This includes architectural diagrams, database schemas, system design documents, API reference documents, and other technical documents that help provide detailed insights into the software’s architecture, design, specifications, and implementation for developers and system administrators.
- **In-code documentation**: Typically includes comments in the code, function, and method descriptions, as well as documentation strings (termed “**DocStrings**” in Python programming). Several tools generate HTML documentation content from these comments and DocStrings.
- **API documentation:** These documents state an API's form, function, and features. They are typically written by engineers who build the APIs, and the content is consumed by other engineers who implement them.

Note that in certain cases where the primary users are developers, the user documentation doubles as the technical documentation and vice-versa.

### Impact of poor or non-existent documentation

Clearly, documentation is important, and failing to consider creating proper documentation can lead to several issues, including the following:

- Without technical documentation, code can become challenging for other developers working on the same project, making debugging, resolving issues, and even searching for essential information more time-consuming and complicated. Software engineers would have to go through the entire codebase to understand how a particular component interacts with the rest of the code. This knowledge-gathering process often involves reverse-engineering the code and resorting to trial-and-error methods.
- Without comprehensive knowledge of the functionality and dependencies of the code, individual developers may unknowingly introduce conflicting changes in the existing code that may lead to bugs or breakdowns in the later stages.
- The wastage of resources and time spent on understanding the poorly documented code delays project timelines, leading to missed deadlines, increased costs, and dissatisfied users.

Good commenting and accurate documentation prevent these issues, clarify the code, help new team members quickly get on board, and ensure everyone consistently understands the codebase.

However, many developers and dev teams still deprioritize documentation practices due to tight project schedules and pressing deadlines under resource constraints.

The documentation process doesn’t have to be as tough as it sounds. In the following sections, we’ll generate various code documentation with [Cody](https://sourcegraph.com/cody), a contextual AI coding assistant, while following best practices for creating practical and accurate content.

## Getting started with Cody

Cody provides seamless integration with the code editor of your choice; it can be integrated into Microsoft Visual Studio Code, JetBrain IntelliJ IDEA, PhpStorm, PyCharm, WebStorm, RubyMine, GoLand, Google Android Studio, and NeoVim.

First, [create an account](https://sourcegraph.com/cody) and sign up to get free access to Cody. Then, set up your editor.
For Visual Studio Code IDE integration, you can get the Cody extension from the marketplace. Alternatively, you can open the page by clicking **View** > **Extensions in VS code** and **searching for Cody AI**.

![VS Code Marketplace](https://storage.googleapis.com/sourcegraph-assets/blog/gp-write-less-with-this-ai-powered-code-documentation/image_001.png)

When you install Visual Studio for the first time, Cody is usually the last item in the sidebar, where you’ll need to sign in. Here, you should choose the same login method you used when you created an account.

![Cody for VS Code](https://storage.googleapis.com/sourcegraph-assets/blog/gp-write-less-with-this-ai-powered-code-documentation/image_002.png)

Cody is now integrated into your development workflow, and you can start using it right away.

## Generating documentation with Cody

Cody is [built upon the latest large language models (LLMs)](https://sourcegraph.com/docs/cody/capabilities/supported-models), including [Claude 3](https://claude.ai/), [GPT-4](https://openai.com/index/gpt-4/) Turbo, and [Mixtral-8x7B](https://mistral.ai/), which are currently the most capable generative models for natural language processing. Cody supports popular programming languages covering various tasks while easily integrating into your favorite development environment. It’s a powerful tool that provides real-time intelligent code suggestions and generates source code with natural language descriptions. It also features a chatbot and a code assistant, which helps you with code comprehension and generation.

Well, how do you use Cody?

### Automatic comment generation

Like code [auto-completion](https://sourcegraph.com/docs/cody/capabilities/autocomplete) in the coding process, Cody also automatically suggests documentation when your cursor is at the empty line or end of a statement or when you start writing a comment. Cody works with all programming languages, but this article focuses specifically on Python. When you write code and start with `#` to begin a comment, Cody can automatically provide intelligent comment suggestions for such repetitive tasks. The highlight indicates the generated content.

```python
    import numpy as np
    X = np.linspace(-5, 5, 100)  #Generate 100 evenly spaced values between -5 and 5
```

If you hover over the generated comment, one of the key features of Cody is the **tool tip** that shows you are getting 1/1 (one of one) generated suggestions. If there are more suggestions, Windows/Linux users can press `Alt + ]` to move to the next suggestion, press `Tab` to accept the suggestion, or `Ctrl + RightArrow` to accept only a word. Similar shortcut keys using Option keys will be available for MacOS.

![Tool Tip for auto suggestion](https://storage.googleapis.com/sourcegraph-assets/blog/gp-write-less-with-this-ai-powered-code-documentation/image_003.png)

### Generating docstrings for functions

You can [generate documentation](https://sourcegraph.com/docs/cody/quickstart#3-ask-cody-to-add-code-documentation) for a function in your code using Cody. Here’s an example of a code snippet that produces a correlated data point.

```python
    def generate_correlated_data(n, corr, mu_x=0, sigma_x=1, mu_y=0, sigma_y=1):
        x = np.random.normal(mu_x, sigma_x, n)
        y = corr * x + np.random.normal(mu_y, sigma_y, n) * np.sqrt(1 - corr**2)
        return x, y
```

With Cody’s [shortcut keys](https://sourcegraph.com/docs/cody/capabilities/commands), press `Alt + D` to generate documentation for the code block. In this case, the docstring for the Python function is a descriptive string written below the function names.

```python
    def generate_correlated_data(n, corr, mu_x=0, sigma_x=1, mu_y=0, sigma_y=1):
        """
            Generate a pair of correlated data points with a specified correlation coefficient.
        
            Args:
                n (int): Number of data points to generate.
                corr (float): Correlation coefficient between x and y data.
                mu_x (float, optional): Mean of x distribution. Defaults to 0.
                sigma_x (float, optional): Standard deviation of x distribution. Defaults to 1.
                mu_y (float, optional): Mean of y distribution. Defaults to 0. 
                sigma_y (float, optional): Standard deviation of y distribution. Defaults to 1.
            Returns:
                tuple: Two 1D NumPy arrays (x, y) of length n with specified correlation.
            """
        x = np.random.normal(mu_x, sigma_x, n)
        y = corr * x + np.random.normal(mu_y, sigma_y, n) * np.sqrt(1 - corr**2)
        return x, y
```

As you can see, Cody considered multiple lines of code, including the inputs, outputs, and function code, to write a description for the function; the code quality helps for better documentation from the source code.

You can also generate documentation in your cursor based on the simple prompts if you prefer prompt-driven development. On Windows, press `Alt + K` to open up the Cody Menu and write natural language descriptions for the type and content of documentation you’d like, with additional prompts to guide the style of your prompting.

Here’s another example of documentation generation of a class for a Neural Network using Pytorch.

```python
    from torch import nn
    
    class NeuralNet(nn.Module):
    """
      A PyTorch neural network model for image classification tasks.
      
      The `NeuralNet` class defines a simple feed-forward neural network with two hidden layers, each with 512 units and ReLU activation. The input is flattened from the original image size of 28x28 to a 1D vector of 784 elements, which is then passed through the linear layers. The output layer has 10 units, corresponding to the 10 classes in a typical image classification problem.
      
      This model can be used as a starting point for training on image datasets like MNIST or CIFAR-10.
      """
        def __init__(self) -> None:
        super().__init__()
        self.flatten = nn.Flatten()
        self.linear_relu = nn.Sequential(
          nn.Linear(28*28, 512),
          nn.ReLU(),
          nn.Linear(512, 512),
          nn.ReLU(),
          nn.Linear(512,10)  # 10 classes
        )
      def forward(self, x):
        x = self.flatten(x)
        logits = self.linear_relu(x)
        return logits
    
    model = NeuralNet().to(device)
    print(model)
```

Cody understands the code context, including the neural network architecture, and writes comprehensive documentation.

### Chat feature

An additional feature provided by Cody is the [context-aware chat](https://sourcegraph.com/docs/cody/capabilities/chat) functionality, which assists software developers in the documentation process. Start the chat functionality by pressing `Alt + L` on Windows and asking questions relevant to the section. Alternatively, you can get started from the Cody plugin menu.

Cody’s chat allows you to add files and symbols as context in your messages; you can type `@` and then a filename to include a file as context for your prompt. This enables you to use AI as a pair-programming tool, even for writing documentation.

![Cody chat in VS Code](https://paper-attachments.dropboxusercontent.com/s_2B746819461DC44F244A56EC8B55667BE749F269C254B2EEF8E627B1AE6EF263_1720707474188_image.png)

## Benefits of using Cody

In simple words, by generating appropriate documentation based on your code, Cody can:

1. **Save time:** Cody generates multiple lines of documentation based on the code, which frees up developers’ time to focus on more creative tasks in the development process.
2. **Focus on what matters:** Since developers find it cumbersome to write documentation, Cody generates documentation content based on the code context, and the developer focuses on engineering.
3. **Adherence to coding standards:** Cody takes care of the convention and style guide when writing the documentation. In the case of Python, you can observe it following [PEP-8 Style Guide](https://peps.python.org/pep-0008/) for Python and [PEP-257 Docstring Conventions.](https://peps.python.org/pep-0257/)
4. **Provide real-time suggestions** for improving the quality of your code, whether for the documentation, code snippets, or the entire function.

High-quality documentation is as essential as high-quality code. Cody can be used as a peer programming buddy, for both code and documentation generation.

## Getting the most out of Cody

Here are some bonus tips to get the most out of Cody:

- Cody works with the scripts as well as Jupyter notebooks in VS code. Thus, it can be helpful for literate programming, which is popular among data scientists, analysts, students, and researchers.
![Jupyter notebooks in VS Code](https://storage.googleapis.com/sourcegraph-assets/blog/gp-write-less-with-this-ai-powered-code-documentation/image_005.png)

- Cody also works in your Markdown files and other text-based documentation files. It can generate content other than code and code documentation, which is useful for general prose required in your project.
- Learning the keyboard shortcut keys can significantly speed up your AI pair programming process. For Windows/Linux users, the following shortcuts might come handy. On Windows:
  - **Alt + L:** Start a new chat with the code assistant, which can help you with code comprehension and code generation.
  - **Alt + K:** Edit code with a natural language description (prompt) about the code
  - **Alt + D:** Document Code
- **Alt + C:** Open Cody Command Menu to trigger other commands
- You can also use prompt engineering techniques to get better results. You can easily open the prompt and write natural language command prompts, guiding the AI to perform according to your prompt, such as providing more context and expected outcomes.
- Create a custom command for other repeated tasks you’d like to automate in your coding based on custom prompts.
  - Open the **Command Menu** and select **Custom Commands > New Custom Command**.

## Wrapping up

Clear and comprehensive documentation is essential for every developer despite its tedious nature. It ensures code clarity, facilitates collaboration, and minimizes errors in software development. With Cody, an [AI-powered](https://sourcegraph.com/cody) coding assistant leveraging advanced large language AI models, developers can automate documentation tasks efficiently.

[Sign up for](https://sourcegraph.com/cody) [a](https://sourcegraph.com/cody) [free](https://sourcegraph.com/cody) [forever](https://sourcegraph.com/cody) [Cody account](https://sourcegraph.com/cody) and save the next developer to consume your code with the right documentation.
