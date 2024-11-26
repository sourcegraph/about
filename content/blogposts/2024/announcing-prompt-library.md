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
heroImage: https://sourcegraph.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fe7ce844a-fe2e-4102-b77e-e852aee3841b%2F87d8cafe-a0b8-44d1-832e-d9b669500a52%2Fprompt_library.png?table=block&id=14aa8e11-2658-805e-aad5-de39beb3a918&spaceId=e7ce844a-fe2e-4102-b77e-e852aee3841b&width=2000&userId=&cache=v2
socialImage: https://sourcegraph.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fe7ce844a-fe2e-4102-b77e-e852aee3841b%2F87d8cafe-a0b8-44d1-832e-d9b669500a52%2Fprompt_library.png?table=block&id=14aa8e11-2658-805e-aad5-de39beb3a918&spaceId=e7ce844a-fe2e-4102-b77e-e852aee3841b&width=2000&userId=&cache=v2
---

Through our customers' case studies and our conversations with them, we've discovered that engineering teams that adopt AI in their workflow tend to be about 30 to 40% more productive than the ones that do not. This may seem like a no-brainer, but changing a team's culture and letting them get over the mental hurdle of incorporating AI in their workflow is a significant challenge for many.

In particular, we've heard from many customers and developers that their existing AI tool:
- Doesn't always generate code that makes sense in their particular codebase.
- Hallucinates because it doesn't use proper relevant context from your codebase and more.
- Requires a steep learning curve for developers to be able to use it in a professional context.

Today, we're introducing **Prompt Library** to tackle this problem. It will speed up AI adoption in your engineering team and it will encourage your team to share their knowledge about how to effectively use AI in your particular organization's workflow. That way, every single engineer in your team can get up to speed. Here's how it works:

## Creating a new prompt
1.	Go to Sourcegraph’s [web interface](https://sourcegraph.com/search) and log in.

2.	From the top menu, find **Tools** and then **Prompt Library**.

![image.png](https://sourcegraph.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fe7ce844a-fe2e-4102-b77e-e852aee3841b%2F9a4e60f9-d0d6-4555-8dec-1c1e666d6985%2Fimage.png?table=block&id=142a8e11-2658-8080-b8bb-e21b5d503124&spaceId=e7ce844a-fe2e-4102-b77e-e852aee3841b&width=2000&userId=&cache=v2)

3.	Click **Create new prompt**, set the prompt name, description, and the prompt itself, then click **Create prompt**.

![image.png](https://sourcegraph.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fe7ce844a-fe2e-4102-b77e-e852aee3841b%2Fb793b037-8544-49a5-beae-5db4b070fff0%2Fimage.png?table=block&id=142a8e11-2658-8085-9d3f-d2abd19566be&spaceId=e7ce844a-fe2e-4102-b77e-e852aee3841b&width=2000&userId=&cache=v2)

![image.png](https://sourcegraph.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fe7ce844a-fe2e-4102-b77e-e852aee3841b%2F10c88996-bb30-4aca-b646-167003735728%2Fimage.png?table=block&id=142a8e11-2658-8014-a2a1-cae0d8dc95cd&spaceId=e7ce844a-fe2e-4102-b77e-e852aee3841b&width=2000&userId=&cache=v2)

## Using the created prompt in your editor

Once you have a prompt created, you can use it via Cody Chat in your IDE. Select your saved prompts, add any necessary details, and run them.

![Using prompt library](https://file.notion.so/f/f/e7ce844a-fe2e-4102-b77e-e852aee3841b/45961939-b3a5-438b-95d1-77e135005db1/using-pl.gif?table=block&id=147a8e11-2658-800f-b04c-dcd3f9c80592&spaceId=e7ce844a-fe2e-4102-b77e-e852aee3841b&expirationTimestamp=1732472812322&signature=Zww2upTGabOQ-yhRfjGmsuqzyvei1hXvWWSW0WHG2Tk)

Additionally, from the Prompt Library in the Sourcegraph web interface, you can view your created prompts, and copy a permalink to share it with others.

![image.png](https://sourcegraph.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fe7ce844a-fe2e-4102-b77e-e852aee3841b%2F2a0e4315-7842-4859-9610-63400d467344%2Fimage.png?table=block&id=142a8e11-2658-803f-9899-ff4ee05310bc&spaceId=e7ce844a-fe2e-4102-b77e-e852aee3841b&width=2000&userId=&cache=v2)

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

![java-example](https://file.notion.so/f/f/e7ce844a-fe2e-4102-b77e-e852aee3841b/ddee70bd-32db-4f1f-a6e2-71732edb5f33/java-example.gif?table=block&id=147a8e11-2658-8073-bea5-f77923ff3ab0&spaceId=e7ce844a-fe2e-4102-b77e-e852aee3841b&expirationTimestamp=1732473811197&signature=9-dXQi3oyIW4Z2YYSkQ8_u1NbJ1qPEFXrdtoXCaQJZk)

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

![python-example](https://file.notion.so/f/f/e7ce844a-fe2e-4102-b77e-e852aee3841b/da64f380-c0a1-430e-ad91-509929afaf60/python.gif?table=block&id=147a8e11-2658-80f5-9c75-c461e977fbc3&spaceId=e7ce844a-fe2e-4102-b77e-e852aee3841b&expirationTimestamp=1732474434824&signature=T46br4Yrv88mLBzOLVJcwnJ07ZHG_X52FYKQ2IN-1Ns)

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

![go-example](https://file.notion.so/f/f/e7ce844a-fe2e-4102-b77e-e852aee3841b/974c3762-8dd6-408a-ad8f-ce51157145e0/go.gif?table=block&id=147a8e11-2658-807d-a84d-d033f7afb43d&spaceId=e7ce844a-fe2e-4102-b77e-e852aee3841b&expirationTimestamp=1732474961601&signature=yQAomsHSnSVJ5fwXAodS2VgaYuenbLNdGM7g8rEnULU)

## 4. “I want new engineers on my team to be able to be onboarded quickly.”

Suppose your project is fairly complex and you found a prompt that is helpful for new engineers on your team to learn about how it works and how to set it up.

If that's the case, then you can put it in Prompt Library, share it with your coworkers, and even make it part of your onboarding flow.

```
@repo tell me about this project and how to set it up.
```

![onboarding-example](https://file.notion.so/f/f/e7ce844a-fe2e-4102-b77e-e852aee3841b/ce36e74d-e976-4f59-b227-71df47666ed9/onboarding.gif?table=block&id=149a8e11-2658-80c0-8b38-def4f35f308f&spaceId=e7ce844a-fe2e-4102-b77e-e852aee3841b&expirationTimestamp=1732665510889&signature=95W_FadEgdWhwQXpDLNnvexya85rjpb4uDOgo9huzo4)

## 5. “I found a useful prompt for understanding code and I want to share it with my team.”

Cody can be an extremely useful tool not just for writing code, but also for reading and understanding existing code.

Suppose that you came up with this prompt and you found it useful:

```
@currentFile can you explain how this file works, in particular for the method <replace this with the method name>?
```

Putting it in Prompt Library can encourage your team to use AI in a way that fits your particular organization's workflow.

![explaining-file-method](https://file.notion.so/f/f/e7ce844a-fe2e-4102-b77e-e852aee3841b/850ae791-f44e-44e7-89ee-f8e06b1b7df4/explanation.gif?table=block&id=14aa8e11-2658-80f1-bd03-fd6951663937&spaceId=e7ce844a-fe2e-4102-b77e-e852aee3841b&expirationTimestamp=1732665988387&signature=1cHbcRcX7B8cp_XBJn9WTy-adAGsTLknevr0k1PQE64)

# Conclusion

Prompt Library is available starting today. Get started by heading over to [Sourcegraph Cody's web UI](https://sourcegraph.com/cody/chat).

If you haven't used Cody yet, you can learn more about it and download it from the [Cody website](https://sourcegraph.com/cody).

You can also [learn more about this new feature on our docs.](https://sourcegraph.com/docs/cody/capabilities/commands)