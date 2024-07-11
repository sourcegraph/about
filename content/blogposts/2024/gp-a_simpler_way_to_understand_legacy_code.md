---
title: "A simpler way to understand legacy code"
authors:
  - name: Ado Kukic
    url: https://x.com/adocomplete
publishDate: 2024-07-11T11:00-07:00
description: "Discover essential tips and tools to understand and improve legacy code."
tags: [blog, guest-post]
slug: "5-steps-to-automate-repetitive-tasks-in-software-development"
published: true
heroImage: 
socialImage: 
---

Legacy code, often referred to as inherited or outdated code, is a common challenge for developers and engineering teams. It may use obsolete technology, have little to no documentation, or contain complex dependencies. A recent study by Kragle shows that developers spend only 11% to 30% of their time [fixing technical debt](https://www.krugle.com/resources/downloads/Krugle_WP_Hidden_Costs_of_Code_Maintenance.pdf), and about half of that time is just to understand the source code they're trying to maintain. This shows how challenging it can be to understand legacy systems and why we need simpler, more effective ways to handle them.

Understanding legacy code is important to keeping existing software running smoothly despite these challenges. This article will explore tips for understanding and working with legacy code. We'll learn to navigate, document, and refactor legacy code the right way.

First, let's look at some key strategies for understanding legacy code.

## Strategies for understanding legacy code

![](https://storage.googleapis.com/sourcegraph-assets/blog/a_simpler_way_to_understand_legacy_code/image_001.png)

The following strategies provide a comprehensive roadmap for assessing, documenting, and improving legacy codebases:

- Assessing the codebase
- Documentation and comments
- Code analysis tools
- Version control history
- Refactoring and cleanup
- Testing and validation

### Assessing the codebase

When dealing with a legacy codebase, the initial steps are essential in forming a comprehensive understanding. Start by setting up the development environment and running the code to ensure it works as expected. This helps identify immediate issues and provides a baseline for future improvements.

Developers can employ various tools and techniques to gain a high-level overview of the codebase. Code linters, such as [ESLint](https://eslint.org/) for JavaScript or [Pylint](https://pypi.org/project/pylint/) for Python, can identify syntactical errors and potential issues. Dependency analyzers and architecture visualization tools can help visualize the project's dependencies and map out the code's structure, making it easier to understand how different modules interact while providing a broad overview of its organization.

### Documentation and comments

After a clear overview of the codebase, leveraging existing documentation and comments is the next step toward understanding legacy code. They offer insights into the code's original purpose, design decisions, and potential pitfalls. Review any available documentation, including README files, inline comments, and external documentation.

Legacy applications often lack sufficient documentation, requiring a complete rewrite of the existing documentation during the code review process. To address this, adopt strategies such as annotating code with descriptive comments, maintaining a detailed changelog, and creating comprehensive README files for future reference.

### Code analysis tools

Static analysis tools help understand legacy code without running it. They identify issues, code smells, and security vulnerabilities. Popular tools like [SonarQube](https://www.sonarsource.com/products/sonarqube/), [PMD](https://pmd.github.io/), and [CAST](https://www.castsoftware.com/highlight/how-it-works) offer features to improve code quality.

These tools also reveal code dependencies and structure, such as tightly coupled modules and cyclical dependencies. Visualizing these relationships allows developers to prioritize refactoring and address critical issues first.

### Version control history

In addition to analysis tools, version control systems, such as Git, help us understand the history of a legacy codebase. By analyzing commit logs, developers can trace the code's changes, identify significant modifications, and understand the reason behind each change.

[Git commands](https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History) such as `git blame` and `git log` are handy in this phase. `git blame` shows the last modification for each line of a file, helping to identify who made changes and why. `git log` provides a chronological list of commits, which can be filtered and analyzed to understand the development timeline and key changes.

### Refactoring and cleanup

With a thorough understanding of the code's history and structure, the next step is to improve it through careful refactoring and cleanup. 

Refactoring is the process of restructuring existing code without changing its external behavior. This step is essential for improving the maintainability and readability of legacy code. However, it should be approached carefully to avoid introducing new bugs.

Deciding when to refactor involves evaluating the code's complexity, maintainability, and performance. Techniques such as automated testing, code reviews, and incremental changes can achieve bug-free code and ensure safe refactoring. Best practices include:

- Focusing on small, manageable changes.
- Using feature branches in version control.
- Continually testing the code to verify that refactoring has not affected functionality.

### Testing and validation

Testing and validation ensure that refactoring and other changes do not break existing functionality. Writing tests for legacy code, especially code without tests, is vital for validating changes and preventing regressions. Different tests, such as unit tests, integration tests, and end-to-end tests, ensure code reliability.

In addition to these strategies, leveraging tools like Cody can further simplify the process. Next, let’s explore how to use Cody to understand legacy code effectively.

## How to use Cody to understand legacy code

Cody is [Sourcegraph's AI coding assistant](https://sourcegraph.com/cody) designed to help developers and engineering teams understand, write, review, and refactor code and accelerate code generation. It is powered by Sourcegraph's [code search](https://sourcegraph.com/code-search), which it uses to retrieve context from a codebase and extend its capabilities.

By utilizing Cody, you can focus on building better and more efficient software with the help of AI-enabled assistance. Cody's key features include:

- [**Autocomplete**](https://sourcegraph.com/docs/cody/capabilities/autocomplete): With the autocomplete feature, Cody makes coding easy for developers using the start coder Large Language Model (LLM) to get fast and accurate code predictions. It analyzes code as it is typed, offering suggestions for subsequent lines – single lines of code or functions. It works across different programming languages.
- [**Chat**](https://sourcegraph.com/docs/cody/capabilities/chat)**:** Cody allows you to ask technical questions and get contextual answers about your codebase or specific snippets using prompts such as "Add helpful debug log statements."
- [**Command**](https://sourcegraph.com/docs/cody/capabilities/commands)**:** Think of them as shortcuts for everyday coding tasks. These allow you to run predefined actions with smart context-fetching anywhere in your codebase. You can also speed up certain actions by creating custom commands for those repetitive tasks.

With the above features, Cody helps software developers by providing insights into legacy code structure, identifying potential issues, and suggesting improvements. Its intuitive interface and detailed reports make it easier to understand complex codebases and prioritize refactoring efforts.

### Using Cody: Practical example

Now that we've covered the strategies for understanding legacy code, let’s take a look at Cody in action on some legacy code.

To get started with Cody:

- Create an [account](https://sourcegraph.com/cody) using one of these authentication methods - GitHub, GitLab, or Google.
- Install Cody for any of Sourcegraph's supported IDE - VS Code, IntelliJ, or Neovim.

> NB: VS Code is the IDE used in this section.

![Cody VS Code sign in screen](https://storage.googleapis.com/sourcegraph-assets/blog/a_simpler_way_to_understand_legacy_code/image_002.png)

The snippet below is a code example of a legacy Python-based management system developed over the years with contributions from various developers, resulting in inconsistent coding styles and lacking documentation.

```python
    class Inventory:
        def __init__(self):
            self.items = {}
    
        def add_item(self, name, quantity):
            if name in self.items:
                self.items[name] += quantity
            else:
                self.items[name] = quantity
    
        def remove_item(self, name, quantity):
            if name in self.items:
                if self.items[name] >= quantity:
                    self.items[name] -= quantity
                    if self.items[name] == 0:
                        del self.items[name]
                else:
                    print(f"Cannot remove {quantity} of {name}. Only {self.items[name]} available.")
            else:
                print(f"Item {name} not found in inventory.")
    
        def get_inventory(self):
            return self.items
    
        def print_inventory(self):
            for item, quantity in self.items.items():
                print(f"{item}: {quantity}")
    
    # Usage
    inv = Inventory()
    inv.add_item("Apple", 10)
    inv.add_item("Banana", 5)
    inv.remove_item("Apple", 3)
    inv.print_inventory()
```

Using Cody’s chat feature, we can prompt it to understand the structure and flow of our Python-based management code base as shown below: 

![Giving Cody a descriptive prompt to help understand the structure and flow of the code](https://storage.googleapis.com/sourcegraph-assets/blog/a_simpler_way_to_understand_legacy_code/image_003.png)

Cody can also help with our example code base through refactoring, unit tests, and documentation. Let’s take a look at each of these.

**Refactoring**
Ordinarily, code refactors can be challenging, especially in a complex codebase. With Cody's `Commands` feature, we can identify code smells in our Python code. To do this, we select the `Find Code Smells` command by the left sidebar in the Cody tab:

![Finding code smells](https://storage.googleapis.com/sourcegraph-assets/blog/a_simpler_way_to_understand_legacy_code/image_004.png)

**Unit tests**
Writing unit tests helps clarify expected behavior and expose hidden assumptions and potential bugs. Cody simplifies this process by enabling developers to code with tests, providing a command that quickly generates unit tests.

To write unit tests using Cody, we select the `Generate Unit Tests` command by the left sidebar in the Cody tab:

![Writing Unit test by clicking on the Generate Unit Tests command](https://storage.googleapis.com/sourcegraph-assets/blog/a_simpler_way_to_understand_legacy_code/image_005.png)

**Documentation**
Documentation helps future collaborators and creates a roadmap for future improvements. To document our code using Cody, we select the `Document Code` command by the left sidebar in the Cody tab:

![Using the document code command to generate documentation](https://storage.googleapis.com/sourcegraph-assets/blog/a_simpler_way_to_understand_legacy_code/image_006.png)

Using Cody with our example codebase, we can see how it simplifies refactoring, testing, and documentation. 

## Wrapping up

Working with legacy systems can be a task, but it becomes manageable and fun with the right approach and tools, especially when developers prioritize the *code with tests* approach. Developers can effectively understand and improve legacy code by assessing the codebase, leveraging documentation, utilizing code analysis tools, understanding version control history, refactoring wisely, and implementing comprehensive testing.

AI-assisted coding tools like Cody further simplify challenges with legacy code and complex systems, providing valuable insights and automated assistance. For more information about Cody, visit the [Sourcegraph](https://sourcegraph.com/cody) website.
