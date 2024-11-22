---
title: "Announcing Prompt Library: save, reuse, and share frequently used prompts for Cody"
authors:
  - name: YK Sugi
    url: https://x.com/ykdojo
publishDate: 2024-11-25T10:00-01:00
description: "Tired of typing the same prompts over and over again? Introducing Prompt Library. Save, reuse, and share prompts with your team."
tags: [blog]
slug: 'announcing-prompt-library'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/towards-infinite-context-for-code/infinite-context-og.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/towards-infinite-context-for-code/infinite-context-og.png
---

As you work with [Cody](https://sourcegraph.com/cody), you might find yourself repeating the same prompt over and over again. Maybe you have an expert prompt engineer on your team that always knows just how to prompt to get the right outcome each time. Wouldn't it be great if you could automate common tasks and share them with your team?```

Introducing **Prompt Library**: a new way to save and reuse frequently used prompts, as well as share them within your organization or publicly.

Let’s take a look at how it works:

1.	Go to Sourcegraph’s web interface.

2.	From the top menu, find **Tools** and then **Prompt Library**.

![image.png](https://sourcegraph.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fe7ce844a-fe2e-4102-b77e-e852aee3841b%2F9a4e60f9-d0d6-4555-8dec-1c1e666d6985%2Fimage.png?table=block&id=142a8e11-2658-8080-b8bb-e21b5d503124&spaceId=e7ce844a-fe2e-4102-b77e-e852aee3841b&width=2000&userId=&cache=v2)

3.	Click **Create new prompt**, set the prompt name, description, and the prompt itself, then click **Create prompt**.

![image.png](https://sourcegraph.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fe7ce844a-fe2e-4102-b77e-e852aee3841b%2Fb793b037-8544-49a5-beae-5db4b070fff0%2Fimage.png?table=block&id=142a8e11-2658-8085-9d3f-d2abd19566be&spaceId=e7ce844a-fe2e-4102-b77e-e852aee3841b&width=2000&userId=&cache=v2)

![image.png](https://sourcegraph.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fe7ce844a-fe2e-4102-b77e-e852aee3841b%2F10c88996-bb30-4aca-b646-167003735728%2Fimage.png?table=block&id=142a8e11-2658-8014-a2a1-cae0d8dc95cd&spaceId=e7ce844a-fe2e-4102-b77e-e852aee3841b&width=2000&userId=&cache=v2)

**Once created:**

You can go to Cody Chat, select your saved prompts, add any necessary details, and run them.

![image.png](https://sourcegraph.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fe7ce844a-fe2e-4102-b77e-e852aee3841b%2Fc57ee65b-31cf-40de-841d-c53ceca0fa0d%2Fimage.png?table=block&id=142a8e11-2658-8099-8cf5-d613adaea23b&spaceId=e7ce844a-fe2e-4102-b77e-e852aee3841b&width=2000&userId=&cache=v2)

Alternatively, return to Prompt Library, find your prompt, and copy a permalink to share it with others.

![image.png](https://sourcegraph.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fe7ce844a-fe2e-4102-b77e-e852aee3841b%2F2a0e4315-7842-4859-9610-63400d467344%2Fimage.png?table=block&id=142a8e11-2658-803f-9899-ff4ee05310bc&spaceId=e7ce844a-fe2e-4102-b77e-e852aee3841b&width=2000&userId=&cache=v2)

# Example Use Cases

Let’s take a look at three realistic example use cases here.

## 1. “Cody is not giving me code in the right language/framework version”

Imagine you are working with a legacy Java application that uses an older version of the Spring framework. You might find that Cody is generating code snippets using a newer version of Spring, which is incompatible with your project. For instance, your project is using Spring 3.x, but Cody provides examples using Spring Boot 2.x features, which are not available in your current setup.

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

## 3. “Cody is not generating tests in the right format”

Imagine you are working with Golang and need Cody to generate unit tests that comply with your team’s conventions. Your organization follows a specific structure for tests, including the use of table-driven tests and `require` from the `testify` package for assertions.

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

# Learn more

You can [learn more about this new feature on our docs.](https://sourcegraph.com/docs/cody/capabilities/commands)