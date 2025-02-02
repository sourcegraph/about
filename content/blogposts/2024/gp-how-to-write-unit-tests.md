---
title: "How to write unit tests"
authors:
  - name: Ekemini Samuel
  - name: Ado Kukic
    url: https://x.com/adocomplete
publishDate: 2024-07-16T10:00-07:00
description: "Discover the essentials of unit testing: key components, best practices, and the advantages of using frameworks and tools like Cody for efficient testing."
tags: [blog, guest-post]
slug: "how-to-write-unit-tests"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/gp-how-to-write-unit-tests/image_og.jpg
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/gp-how-to-write-unit-tests/image_og.jpg
---

Imagine being in the final stages of a critical project. Everything seems on track, but a bug surfaces, throwing the entire schedule into chaos. According to a study by the [IBM System Science Institute](https://www.researchgate.net/figure/IBM-System-Science-Institute-Relative-Cost-of-Fixing-Defects_fig1_255965523), the cost to fix a bug found after product release can be up to 6 times higher than if caught during the design phase. This scenario is all too common in software development.

Catching bugs late in the development process is frustrating and costly. As renowned software developer [Martin Fowler](https://www.martinfowler.com/) once said, "*Any fool can write code that a computer can understand. Good programmers write code that humans can understand.*" Unit testing ensures that code is functional, maintainable, and reliable.

This guide on unit testing will explain why writing unit tests matters, discuss the different unit-test frameworks available, how unit-testing practices have evolved, and provide some pro tips for writing maintainable unit tests. It will also show how [Cody](https://sourcegraph.com/cody) can enhance the whole process.

Now, let's break down the details.

Before we discuss the unit test framework, let's understand why unit tests matter.

Unit testing is the practice of isolating individual units or functions of your code. A "**unit**" refers to the smallest testable part of an application, such as a function, method, or class.
Testing at the unit level ensures that each "**unit**" of your software works correctly. If issues occur, they can be fixed early, saving time and resources.

Unit tests also serve as documentation, providing insight into what the code should do. This is important for future maintenance and other developers who might work on the project. Unit testing frameworks facilitate writing, executing, and managing tests by providing tools and frameworks.

These tools and frameworks offer developers a way to test single functions, often through assert statements or method attributes, and determine whether the test method has passed or failed.

Popular frameworks include:

- **JUnit (Java):** [JUnit](https://www.javatpoint.com/junit-tutorial) is widely used to write repeatable tests for units of code in Java.
- **Jest (JavaScript):** [Jest](https://jestjs.io/) is a popular testing framework for JavaScript, known for its simplicity and powerful features.
- **PyTest (Python):** [Pytest](https://pytest.org/) is a versatile framework for writing simple and scalable test cases in Python.
- **Testing (Golang):** The standard [Go testing](https://pkg.go.dev/testing) framework is designed to integrate seamlessly with Golang's ecosystem.

These frameworks offer features like test discovery, setup and teardown mechanisms, and rich assertion libraries, making it easier to implement and maintain tests for a wide range of software. Next, let's break down the key components of a unit test.

## Deconstructing a unit test

A typical unit test has three key components, each testing the application's functional behavior.

1. **Arrange:** This is the phase where you set up the initial state for the test. A good unit test focuses on a single state change, so the **arrange** step prepares the necessary input and the environment for the test.

2. **Act:** The **Act** component executes the state change or computation. The actual operation or method being tested is executed with the predefined inputs from the **Arrange** phase. For example, the `FindClosestBanks` function can be triggered with the input, as shown in the code snippet below.

3. **Assert:** Assert verifies that the code behaves as expected and checks if the output matches the expected behavior. If the code behaves as anticipated, your test passes; if not, it's back to the drawing board.

Let's look at an example of a **unit test in Golang** using the [testing package](https://pkg.go.dev/testing), illustrating the three components of a unit test:

```go
    func TestFindClosestBanks(t *testing.T) {
        // Arrange
        banks := []Bank{
            {Name: "Bank A", X: 1, Y: 1},
            {Name: "Bank B", X: 2, Y: 2},
            {Name: "Bank C", X: 5, Y: 7},
        }
        expected := "Bank A"
    
        // Act
        result := FindClosestBanks(banks, 1, 1)
    
        // Assert
        if result != expected {
            t.Errorf("expected %v, got %v", expected, result)
        }
    }
```

In this example, the three components of a unit testing process are implemented:

- **Arrange:** The `banks` slice and the `expected` result are set up.
- **Act:** The `FindClosestBanks` function is called with the input.
- **Assert:** The function's result is compared with the expected value using `t.Errorf` if they do not match.

Understanding these components is important for writing effective unit tests. Next, let's review the advantages of unit testing to the development process.

## Advantages of unit testing

The essence of code testing, especially unit testing, goes beyond just verifying the basic functionality of an application; they include:

- **Improved code maintainability:** Unit tests serve as living documentation for your code, making it easier for new developers to understand and modify the codebase. They highlight the intended use of the code and ensure that future changes don't introduce new issues.

- **Faster development cycles:** With unit tests in place, developers can refactor code confidently, knowing that breaking changes will be caught early. This leads to more efficient and fearless coding.

- **Early bug detection:** Unit tests help identify bugs early by testing individual components of the application in isolation, reducing the cost and effort required to fix them.

- **Safety net for refactoring:** As the [codebase](https://sourcegraph.com/blog/how-cody-provides-remote-repository-context) matures, refactoring becomes essential. Unit tests act as a safety net during this process, allowing the development team to improve the code without fear of introducing regressions.

![Advantages of unit testing](https://storage.googleapis.com/sourcegraph-assets/blog/gp-how-to-write-unit-tests/image_001.png)

Some developers might underestimate the importance of unit testing, but let's consider the consequences of discovering bugs late in the development cycle:

- **Costly fixes**: Bugs become embedded in the codebase over time. Fixing them later requires modifying multiple sections, leading to a domino effect of changes and additional testing, increasing development costs and time.

- **Time crunch and pressure:** With deadlines looming, fixing late-stage bugs creates pressure to rush out a potentially flawed product. This can lead to cutting corners on testing and a high risk of regressions (new bugs introduced by fixes).

- **Quality and reputation at stake:** Bugs discovered by users after release damage the product's quality and user experience. Frequent updates can affect the brand's trust and lead to costly rework.

## Evolution of unit testing practices

As software development evolved, so did unit testing practices. From manual testing to sophisticated mocking frameworks and comprehensive code coverage tools, it is improving to address complex software architectures and agile development demands.

![Evolution of unit testing](https://storage.googleapis.com/sourcegraph-assets/blog/gp-how-to-write-unit-tests/image_002.png)

1. **Early days:** [Manual testing](https://www.browserstack.com/guide/manual-testing-tutorial) was the norm, which involved manually reviewing and testing software, simulating the behavior of a real user, and identifying errors without using automated tools.

2. **Rise of frameworks:** Dedicated testing tools and frameworks emerged, like [JUnit](https://junit.org/junit5/) and [NUnit](https://nunit.org/), providing structure and automation. This boosted efficiency and repeatability.

3. **Focus on mocks and stubs:** [Mocking frameworks](https://www.telerik.com/products/mocking/unit-testing.aspx) became popular, allowing developers to simulate dependencies on mock objects (databases, external services) and isolate units for better testing.

4. **Test-driven development (TDD):** This approach refined the typical development process by having developers write tests before implementing the code.

5. **Modern era:** [AI-powered assistants](https://sourcegraph.com/blog/how-to-choose-the-ai-coding-assistant-that-works-best-for-your-engineering-team) like [Cody](https://sourcegraph.com/cody) are on the scene, providing automated unit tests, identifying edge cases, and streamlining development workflows.

To effectively write good unit tests and maintain them, let's look into the practical tips for creating effective and maintainable unit tests, including code snippets that demonstrate various scenarios (positive, negative, and edge cases)

## How to write good and maintainable unit tests

Below are practical tips and strategies for writing unit tests that check code functionality and ensure long-term maintainability:

- **Naming:** The unit test's name should clearly describe its purpose. You should be able to understand the method's behavior from the test name without looking at the code. This supports documentation and readability. When tests fail, you can easily detect which scenarios are not executing correctly. The name of the unit test should include the method being tested, the testing scenario, and the expected behavior.

- **Use AAA pattern:** Follow the [Arrange-Act-Assert](https://automationpanda.com/2020/07/07/arrange-act-assert-a-pattern-for-writing-good-tests/) (AAA) pattern to ensure tests produce consistent results given the same inputs. Avoid external dependencies and states that can lead to unreliable or inconsistent results.

- **Readable:** Tests should be easy to understand and act as documentation for the code. Use clear naming conventions and organize tests logically.

**Different types of unit test scenarios**
Unit tests include diverse scenarios, from positive and negative to edge cases. Each scenario validates code behavior under specific circumstances.

**Positive scenario**
The positive scenario tests the `add` function with typical input values (`1` and `2`). It verifies that the function returns the expected result of `3` under normal conditions.

```go
    func TestPositiveAdd(t *testing.T) { 
      result := add(1, 2) 
      if result != 3 { 
        t.Errorf("Expected 3, but got %d", result)
      }
    }
```

**Negative scenario**
For a negative scenario, the `add` function is tested with unexpected inputs, such as a string (`"1"`) instead of an integer. This test ensures that the function correctly handles such cases by expecting a panic, thus validating error-handling mechanisms.

```go
    func TestAddNegative(t *testing.T) {
      defer func() { 
        if r := recover(); r == nil { 
            t.Errorf("Expected panic for adding string and int") } }() add("1", 2) }
```

**Edge case**
The edge case scenario tests the `add` function with boundary conditions, specifically both operands set to `0`.

```go
    func TestEdgeAdd(t *testing.T) { 
      result := add(0, 0) 
      if result != 0 { 
      t.Errorf("Expected 0, but got %d", result) 
      } 
    }
```

After defining test scenarios, the next step is to run the unit tests and interpret the results, identifying whether tests have passed or failed.

## Running unit tests and interpreting results

Running unit tests is straightforward with most frameworks. To run **unit tests in Go** using the testing framework, navigate to your project directory that contains the test and run the `go test` command:

```bash
    go test
```

To understand the result, unit test outcomes are categorized into two:

- **Passed tests:** When the unit test execution is passed, it confirms that the application code functions as intended. Look for a green checkmark or similar indicator to denote success.

- **Failed tests:** A failed test signals an issue that needs attention. Go provides detailed error messages pinpointing the exact failed assertion and the values involved.

You can automate the entire manual process of writing unit tests and create a maintainable test using Cody; let's see how Cody can optimize and simplify this process.

## Simplifying unit testing with Cody

Manual unit testing can be time-consuming, especially for developers working with large codebases. It's easy to miss crucial edge cases that could lead to bugs. This is where [Cody, Sourcegraph's AI coding assistant](https://sourcegraph.com/cody), comes in. Cody streamlines unit testing with [automation features](https://sourcegraph.com/docs/cody/capabilities), making the process more efficient and helping developers catch potential issues quickly.

**To begin using Cody:**

- Sign up for a [Sourcegraph](https://sourcegraph.com/) account using your preferred authentication method—GitHub, GitLab, or Google.
- Install Cody for [VS Code](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai), IntelliJ, or Neovim.

![Sign in to Cody](https://storage.googleapis.com/sourcegraph-assets/blog/gp-how-to-write-unit-tests/image_003.png)

Let's use a **Go word search program** as an example. It includes a function that takes in three letters to find a word stored in a slice of words, as shown below:

```go
    package main
    import (
        "bufio"
        "fmt"
        "os"
        "strings"
    )
    func searchWords(words []string, query string) []string {
        var results []string
        for _, word := range words {
            if strings.Contains(word, query) {
                results = append(results, word)
            }
        }
        return results
    }
    func main() {
        words := []string{"apple", "banana", "cherry",  "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon"}
        scanner := bufio.NewScanner(os.Stdin)
        fmt.Println("Enter three letters to search for a word:")
        scanner.Scan()
        query := scanner.Text()
        if len(query) != 3 {
            fmt.Println("Please enter exactly three letters.")
            return
        }
        results := searchWords(words, query)
        if len(results) > 0 {
            fmt.Println("Words found:")
            for _, result := range results {
                fmt.Println(result)
            }
        } else {
            fmt.Println("No words found containing the given letters.")
        }
    }
```

Once Cody is installed and set up in your development environment, you can leverage its capabilities to generate unit tests for this Go program.

**Writing unit tests with Cody**
Let's generate unit tests for the **Go search program** described above in the code snippet by following these steps:

1. **Generate unit tests**: Open your Go program in your code editor where Cody is installed. Use Cody's **COMMANDS** in the editor, as shown below, to **Generate Unit Tests** for the `searchWords` function.

![Generating unit tests](https://storage.googleapis.com/sourcegraph-assets/blog/gp-how-to-write-unit-tests/image_004.png)

Cody analyzes the function and automatically generates comprehensive unit test cases, ensuring thorough coverage of various input scenarios. The next step is to review the generated test for modification.

1. **Review generated tests**: Cody provides a set of unit tests you can review and modify if necessary. These tests help ensure the `searchWords` function behaves as expected under different conditions.

![Go program](https://storage.googleapis.com/sourcegraph-assets/blog/gp-how-to-write-unit-tests/image_005.png)

1. **Code analysis**: After the modification, Cody can perform code analysis to detect any syntax errors, code style violations, and other potential issues without executing the code. This helps maintain code quality and consistency.

![Code analysis](https://storage.googleapis.com/sourcegraph-assets/blog/gp-how-to-write-unit-tests/image_006.png)

1. **Execute tests**: Finally, you can run the generated unit tests directly from the command-line interface using the `go test` framework CLI for Go. Cody integrates with popular testing frameworks, ensuring your tests are executed efficiently.

![Using Go test](https://storage.googleapis.com/sourcegraph-assets/blog/gp-how-to-write-unit-tests/image_007.png)

## Wrapping up

Unit testing ensures code quality, maintainability, and reliability in software development. Using tools like Cody, developers can master unit testing and enhance their development workflows all the way to production.

Remember, effective [unit testing](https://sourcegraph.com/blog/how-to-write-unit-tests-for-svelte-web-apps) is not just about writing tests – it's about creating a culture of quality and confidence in your codebase.

To explore more features on how Cody can streamline your unit testing process, [sign up](https://sourcegraph.com/cody) [for a free forever account](https://sourcegraph.com/cody) and take your development workflow to the next level.
