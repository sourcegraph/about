---
title: "Introducing OpenAI o1 for Cody"
authors:
  - name: Ado Kukic
    url: https://x.com/adocomplete
publishDate: 2024-09-12T10:00-01:00
description: "TBD"
tags: [blog]
slug: 'openai-o1-for-cody'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/unlocking-open-source-potential-ai-dev-tools-night-event-og.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/unlocking-open-source-potential-ai-dev-tools-night-event-og.png
---

Large language models (LLMs) like GPT-4o are excellent at predicting the next word or sequence of words in a given context, enabling them to identify patterns and relationships between words and phrases, ultimately generating coherent and contextually relevant responses for a variety of inputs. This makes them ideal tools for coding use cases like code completion, code generation, documentation, and the like. The drawback of using LLMs for coding purposes is that they struggle with understanding, logic, and reasoning. That ends today.

We are excited to collaborate with OpenAI to bring OpenAI o1 to Cody to help you write, understand, and debug code more effectively. OpenAI o1, as the name implies, brings enhanced reasoning capabilities allowing you to tackle more complex problems, generate more accurate and efficient code, and gain a deeper understanding of your codebase. Access to OpenAI o1 is available today in a limited release, allowing developers to explore its capabilities and provide feedback. If you’re interested in getting access to OpenAI o1 with Cody, click here or scroll down to the bottom of this article to sign up for the waitlist.

## Reason will prevail! 

OpenAI o1 is an advanced model designed for complex text-based tasks and excels at coding-related problems. Insert additional information from OpenAI press release

OpenAI o1 tackles the problem of understanding and reasoning about prompts instead of just predicting the next sequence of words. For example, GPT-4o and Claude 3.5 Sonnet struggle to count the number of times the letter r shows up in the word “strawberry”. The reasons for this are out of scope for this blog post, but can be summed up as LLMs lack mechanisms for precise symbolic manipulation. OpenAI o1 on the other hand handles it without issue.

IMAGE HERE

Another example can be seen below between GPT-4o and OpenAI o1. I asked both LLMs to write ten sentences that end with the letter “c.” Both LLMs produced ten sentences, but only OpenAI o1 succeeded in ensuring that all sentences ended in the letter “c.”

IMAGE HERE

How can we apply this to our coding challenges? If you’ve been using AI coding assistants like Cody with other LLMs, you may have run into situations where Cody generated accurate-looking, but ultimately faulty code. This can usually be resolved with re-prompting and asking Cody to double-check its work, but with OpenAI o1, you should be able to get the right code from the get-go much more often and have greater confidence that the code generated is accurate. Let’s take a look at a few examples of where OpenAI o1 shines.

## OpenAI o1 for Algorithms

What is programming if not the art of crafting instructions for machines to execute? Those instructions have to be very explicit. Your program will run the code you give it, exactly as you defined it, and this is where a ton of subtle bugs and issues can arise. LLMs are not immune from introducing both large and small bugs into code they generate. Let’s take a look at a fairly simple example to demonstrate how even seemingly straightforward tasks can lead to trouble if you’re not careful. 

The classic mathematical trick of getting any three unique digits to add up to 1089. You take a three digit number where all three digits are unique, for example 542, and reverse the digits to get a new three digit number, in our case 245. From there you subtract the smaller number from the bigger one, so 542 - 245 to get 297. Finally, you reverse this number and add it to itself, so you get 792 + 297 and that ends up equaling 1089. You can do this with any unique 3 digit number.

This is a pretty straightforward algorithm, but when I give GPT-4o a prompt and tell it to implement an algorithm to do exactly what I did above, it crafts accurate-looking, but incorrect code. Can you spot the issue?

```js
function runAlgorithm(num) {
  if (num < 100 || num > 999) {
      throw new Error("Number must be a 3-digit number.");
  }

  const digits = num.toString().split('');
  if (new Set(digits).size !== 3) {
      throw new Error("Number must have three different digits.");
  }

  const reversedNum = reverseNumber(num);
  const largerNum = Math.max(num, reversedNum);
  const smallerNum = Math.min(num, reversedNum);
  const difference = largerNum - smallerNum;
  const reversedDifference = reverseNumber(difference);
  const result = difference + reversedDifference;

  return {
      original: num,
      reversed: reversedNum,
      difference: difference,
      reversedDifference: reversedDifference,
      result: result
  };
}

function reverseNumber(num) {
  return parseInt(num.toString().split('').reverse().join(''), 10);
}
function generateExamples() {
  const examples = [201, 948, 123, 456, 789, 321, 654, 987, 135, 246];
  const results = examples.map(runAlgorithm);
  return results;
}

console.log(generateExamples());
```

OpenAI o1 on the other hand produced this result:

```js
function runAlgorithm(number) {
  // Ensure the number is a three-digit integer with all different digits
  if (number < 100 || number > 999) {
      throw new Error("The number must be a 3-digit integer.");
  }
  const digits = number.toString().split('');
  if (new Set(digits).size !== 3) {
      throw new Error("All digits must be different.");
  }

  // Reverse the digits to get a new number
  const reversedNumber = parseInt(digits.slice().reverse().join(''), 10);

  // Subtract the smaller number from the larger number
  const maxNumber = Math.max(number, reversedNumber);
  const minNumber = Math.min(number, reversedNumber);
  let difference = maxNumber - minNumber;

  // Ensure the difference is a 3-digit number
  difference = difference.toString().padStart(3, '0');

  // Reverse the digits of the difference
  const reversedDifference = parseInt(difference.split('').reverse().join(''), 10);

  // Add the reversed number to the original difference
  const finalResult = parseInt(difference, 10) + reversedDifference;

  return {
      originalNumber: number,
      reversedNumber: reversedNumber,
      difference: parseInt(difference, 10),
      reversedDifference: reversedDifference,
      finalResult: finalResult,
  };
}

function generateExamples() {
  const examples = [201, 948, 123, 456, 789, 321, 654, 987, 135, 246];
  const results = examples.map(runAlgorithm);
  return results;
}

console.log(generateExamples());
```

Running the OpenAI o1 example, I get the correct result of 1098 for all of the test scenarios. If you are trying to understand why, the culprit is the following snippet:

```js
// Ensure the difference is a 3-digit number
difference = difference.toString().padStart(3, '0');
```

Which the OpenAI o1 properly added. This ensures that in the case where the initial subtraction yields a two-digit number, such as 201-102 = 99, that we turn this into a three-digit number 099, and then can have the proper reversal to 990 + 099 and get the expected result of 1089.

## OpenAI o1 for Generating Tests

Writing unit tests is critical but often overlooked by developers. LLMs are an awesome way to quickly generate unit tests for your code. But, you’d want to be able to rely on those tests. 

Let’s say I have a function called `evaluateExpression(expr)` that takes in a mathematical expression as a string such as “1+1*1” and returns the computed value, which in this case would be 2. I asked GPT-4o to generate five examples of non-trivial expressions and to also provide the answer. The output is below.

```js
console.log(evaluateExpression("7 + 3 * (10 / (12 / (3 + 1) - 1))")); // Output: 22
console.log(evaluateExpression("5 + ((1 + 2) * 4) - 3")); // Output: 14
console.log(evaluateExpression("10 / 2 + 3 * 4 - 5")); // Output: 9
console.log(evaluateExpression("8 + 2 * 5 / (1 + 3 * 2 - 4)")); // Output: 10
console.log(evaluateExpression("7 - 3 + 2 * (5 + 1)")); // Output: 16
```

If we actually run this code, we’ll get the correct answers of 22, 14, 12, 11.3333, and 16. So the output that GPT-4o computed for two of the five examples was wrong. Asking the same of OpenAI o1, I get:

```js
console.log(evaluateExpression("(2 + 3) * (7 - 2) / (1 + 1)")); // Output: 12.5
console.log(evaluateExpression("20 / 5 + 7 * 2 - 3")); // Output: 15
console.log(evaluateExpression("((15 / (7 - (1 + 1))) * 3) - (2 + (1 + 1))")); // Output: 5
console.log(evaluateExpression("5 + ((1 + 2) * 4) - 3")); // Output: 14
console.log(evaluateExpression("((2 + 3) * (5 - 2)) / ((1 + 1) * (2 + 2))")); // Output: 1.875
```

If I run this code, the answers match up with the expected output. You can also use Wolfram Alpha to validate the output yourself. For generating unit tests, having the test case match expectations is very important and OpenAI o1 can help ensure that the test code tests the right functionality, and the test cases are valid.

## Getting access to OpenAI o1 with Cody

OpenAI o1 is available to select Cody users starting today. Fill out the form below to be added to the waitlist. You will be notified as soon as OpenAI o1 is available for your account. In the meantime, feel free to use any of our existing models including GPT-4o, Claude 3.5 Sonnet, Gemini Pro, and others. If you are already a Cody user, you can also get on the waitlist by clicking the "Join Waitlist" button from the Cody VS Code extension.

Insert Screenshot of Model Selection Dropdown

If you do have access, be aware that OpenAI o1 works a little differently than other models like GPT-4o. One notable difference is that at the moment it does not support streaming. This means that once you ask a question, you will have to wait between 30 seconds to two minutes to get a response and the response will be rendered all at once. 

Insert Signup Hubspot Form

Get on the waitlist for OpenAI o1 and give Cody a try today and let us know what you think in our community forums or Discord. Happy Codying!