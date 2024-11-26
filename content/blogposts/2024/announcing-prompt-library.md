---
title: "Announcing Prompt Library: save, reuse, and share frequently used prompts for Cody"
authors:
  - name: YK Sugi
    url: https://x.com/ykdojo
publishDate: 2024-11-26T10:00-01:00
description: "Tired of typing the same prompts over and over again? Introducing Prompt Library. Save, reuse, and share prompts with your team."
tags: [blog]
slug: 'announcing-prompt-library'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/prompt-library/hero.webp
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/prompt-library/hero.webp
---

Through our customers' case studies and our conversations with them, we've discovered that engineering teams that adopt AI in their workflow tend to be about 30 to 40% more productive than the ones that do not. This may seem like a no-brainer, but changing a team's culture and letting them get over the mental hurdle of incorporating AI in their workflow is a significant challenge for many.

In particular, we've heard from many customers and developers that their existing AI tool:
- Doesn't always generate code that follows their coding conventions and guidelines.
- Hallucinates because it doesn't use proper relevant context from your codebase and more.
- Requires a steep learning curve for developers to be able to use it in a professional context.
- Forces them to rewrite a long prompt over and over again that they already know works well.

Today, we're introducing **Prompt Library** to tackle this problem. It will speed up AI adoption in your engineering organization and it will encourage your team to share their knowledge about how to effectively use AI across your specific workflows. That way, every single engineer on your team can quickly get up to speed and leverage AI in a uniform way. Here's how it works:

## Creating a new prompt
1.	Go to Sourcegraph’s [web interface](https://sourcegraph.com/search) and log in.

2.	From the top menu, find **Tools** and then **Prompt Library**.

![1-sourcegraph-web.webp](https://storage.googleapis.com/sourcegraph-assets/blog/prompt-library/1-sourcegraph-web.webp)

3.	Click **Create new prompt**, set the prompt name, description, and the prompt itself, then click **Create prompt**.

![3-prompt-library-new.webp](https://storage.googleapis.com/sourcegraph-assets/blog/prompt-library/3-prompt-library-new.webp)

## Using the created prompt in your editor

Once you have a prompt created, you can use it via Cody Chat in your IDE. Select your saved prompts, add any necessary details, and run them.

![Using prompt library GIF](https://storage.googleapis.com/sourcegraph-assets/blog/prompt-library/5-using-pl.gif)

Additionally, from the Prompt Library in the Sourcegraph web interface, you can view your created prompts, and copy a permalink to share it with others.

![6-prompt-library.webp](https://storage.googleapis.com/sourcegraph-assets/blog/prompt-library/6-prompt-library.webp)

## Example Use Cases

Let’s take a look at three realistic example use cases for the Prompt Library.

## 1. “Cody is not giving me code in the right language/framework version”

Imagine you are working with a legacy Java application that uses an older version of the [Spring](https://spring.io/) framework. You might find that Cody is generating code snippets using a newer version of Spring, which is incompatible with your project. For instance, your project is using Spring 3.x, but Cody provides examples using Spring Boot 2.x features, which are not available in your current setup.

```java
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class LegacyService {

    @RequestMapping("/legacy")
    public String handleRequest() {
        // This method should use older Spring 3.x annotations and configurations
        return "Handling request with legacy Spring version";
    }
}
```

To address this, you can create a prompt in the Prompt Library that specifies the framework version you are using. For example:

"Please generate Java code that is compatible with the following specifications:

- Java version: 1.6
- Spring framework version: 3.x
- Testing framework: JUnit 4"

By sharing this prompt with your team, everyone can ensure that Cody generates code compatible with your legacy system.

![java-example](https://storage.googleapis.com/sourcegraph-assets/blog/prompt-library/7-java-example.gif)

## 2. “Cody is not following my organization’s style guide”

Suppose your organization has a specific Python coding style guide that mandates the use of snake_case for variable names and requires docstrings for all functions. However, Cody might generate code that doesn't adhere to these conventions, leading to inconsistencies in your codebase.

```python
def processData(inputData):
    """Process the input data and return the result."""
    processedData = inputData * 2  # This should be snake_case
    return processedData
```

To solve this, you can create a comprehensive prompt that instructs Cody to follow your organization's style guide:

"Generate Python code that adheres to our organization's style guide, which includes the following requirements:

- Use snake_case for all variable and function names.
- Include docstrings for all functions, describing their purpose and parameters.
- Follow PEP 8 guidelines for code formatting, including indentation and line length."

This prompt can be shared with your colleagues to ensure consistent code style across the team.

![python-example](https://storage.googleapis.com/sourcegraph-assets/blog/prompt-library/8-python.gif)

## 3. “Cody is not generating tests in the right format”

Imagine you are working with [Golang](https://go.dev/) and need Cody to generate unit tests that comply with your team’s conventions. Your organization follows a specific structure for tests, including the use of table-driven tests and `require` from the `testify` package for assertions.

However, Cody might provide a simple test that does not align with your standards:

```go
func TestAdd(t *testing.T) {
    result := Add(2, 3)
    if result != 5 {
        t.Errorf("expected 5, got %d", result)
    }
}

```

To ensure consistency, create a prompt in the Prompt Library specifying your test requirements:

"Please generate Golang unit tests that adhere to the following conventions:

- Use table-driven tests for different input cases.
- Use the `require` package from `testify` for assertions.
- Follow idiomatic Go test naming conventions and structure."

When this prompt is used, Cody will generate tests like the following:

```go
func TestAdd(t *testing.T) {
    testCases := []struct {
        name     string
        a, b     int
        expected int
    }{
        {"add positive numbers", 2, 3, 5},
        {"add zero", 0, 5, 5},
        {"add negative numbers", -2, -3, -5},
    }

    for _, tc := range testCases {
        t.Run(tc.name, func(t *testing.T) {
            result := Add(tc.a, tc.b)
            require.Equal(t, tc.expected, result)
        })
    }
}

```

By saving and sharing this prompt within your team, you ensure that Cody consistently generates tests in the correct format, saving time and reducing review cycles.

![go-example](https://storage.googleapis.com/sourcegraph-assets/blog/prompt-library/9-go.gif)

## 4. “I want new engineers on my team to be able to be onboarded quickly.”

Suppose your project is fairly complex and you found a prompt that is helpful for new engineers on your team to learn about how it works and how to set it up.

If that's the case, then you can put it in Prompt Library, share it with your coworkers, and even make it part of your onboarding flow.

```
@repo tell me about this project and how to set it up.
```

![onboarding-example](https://storage.googleapis.com/sourcegraph-assets/blog/prompt-library/10-onboarding.gif)

## 5. “I found a useful prompt for understanding code and I want to share it with my team.”

Cody can be an extremely useful tool not just for writing code, but also for reading and understanding existing code.

Suppose that you came up with this prompt and you found it useful:

```
@currentFile can you explain how this file works, in particular for the method <replace this with the method name>?
```

Putting it in Prompt Library can encourage your team to use AI in a way that fits your particular organization's workflow.

![explaining-file-method](https://storage.googleapis.com/sourcegraph-assets/blog/prompt-library/11-explanation.gif)

# Conclusion

Prompt Library is available starting today. Get started and create prompts for your use cases by visiting the [Prompt Library](https://sourcegraph.com/prompts) section of your Sourcegraph instance.

If you haven't used Cody yet, you can learn more about it and download it from the [Cody website](https://sourcegraph.com/cody).

You can also [learn more about this new feature on our docs.](https://sourcegraph.com/docs/cody/capabilities/commands)