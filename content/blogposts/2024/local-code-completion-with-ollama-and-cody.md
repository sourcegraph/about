---
title: "Local code completion with Ollama and Cody"
authors:
  - name: Ado Kukic
    url: https://handbook.sourcegraph.com/team/#ado-kukic
publishDate: 2024-02-24T10:00-01:00
description: "Learn how to use Cody for VS Code with Ollama to get local code completion."
tags: [blog]
slug: "local-code-completion-with-ollama-and-cody"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1.6.0/cody-vscode-1.6.0-og-image.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/cody-vscode-1.6.0/cody-vscode-1.6.0-og-image.png
--- 

Using AI coding assistants is a great way to improve your development workflows. But they typically require access to the Internet. This is a problem for developers who work in air-gapped environments or places with limited Internet access. We are building [Cody](https://sourcegraph.com/cody), an AI coding assistant focused on choice, the right context, and scale.

A few months ago we added an experimental feature to Cody for Visual Studio Code that allows you to have local inference for code completion. This feature uses [Ollama](https://ollama.com/) to run a local LLM model of your choice. Our developer community has been very excited about this feature and we wanted to officially write about it and show you how to use it.

## Ollama for Local Inference

[Ollama](https://ollama.com/) is a tool for running large language models (LLMs) locally. Ollama bundles model weights, configurations, and datasets into a unified package managed by a Modelfile.

![Ollama](https://storage.googleapis.com/sourcegraph-assets/blog/local-code-completion-with-ollama-and-cody/ollama.png)

Ollama supports many different models, including [Code Llama](https://ollama.com/library/codellama), [StarCoder](https://ollama.com/library/starcoder), [DeepSeek Coder](https://ollama.com/library/deepseek-coder), and many more. Ollama supports both general and special purpose models. Check out the full list [here](https://ollama.com/library).

### Getting Started with Ollama

Ollama is a CLI tool that you can download and install for MacOS, Linux, and Windows. Head over to the [download page](https://ollama.com/download) and download the appropriate package for your operating system. Once you have downloaded and installed Ollama, verify that it is working by running the following command:

```bash
ollama --help
```

This should output the following:

![Ollama help](https://storage.googleapis.com/sourcegraph-assets/blog/local-code-completion-with-ollama-and-cody/ollama-help.png)

### Downloading LLM Models

Now you are ready to download and install a LLM. To download a model, you can use the following command:

```bash
ollama pull <model-name>
```

For example, to download the `codellama` model, you would run the following command:

```bash
ollama pull codellama
```

You can also download multiple models at once by specifying a comma-separated list of model names:

```bash
ollama pull codellama,starcoder
```

Additionally, you can download a model from a specific version by specifying the version number:

```bash
ollama pull codellama:7b
```

**Important Note**: Your ability to run a model is heavily dependent on your hardware. The larger the model, the more resources you will need to succesfully run it.

### Running Locally

Once you have downloaded a model, you can run it locally by specifying the model name. For example, to run the `codellama` model, you would run the following command:

```bash
ollama run codellama
```

By default Ollama will run the model directly in your terminal. Once the model is running, you can interact with it by typing in your prompt and pressing enter. For example, once the terminal is running, you can type in the following prompt:

```bash
Write a JavaScript function that takes a string and returns the number of vowels in the string.
```

And press enter. Ollama will respond with an output like this::

![Ollama terminal output](https://storage.googleapis.com/sourcegraph-assets/blog/local-code-completion-with-ollama-and-cody/ollama-terminal.png)

### Ollama REST API

Ollama also provides a REST API that you can use to interact with your downloaded models. By default the REST API to generate completions is available at `http://localhost:11434/api/generate`. The REST API exposes a number of additional endpoints for chat, managing models, and more. You can find more information about the REST API [here](https://github.com/ollama/ollama/blob/main/docs/api.md).

To use the REST API, you make a POST request to the `/api/generate` endpoint with the following JSON payload:

```json
{
  "prompt": "Your promt",
  "model": "The model that you want to use",
}
```

The `prompt` field is the text you want to generate a completion for. The `model` field is the name of the model you want to use. There are additional parameters you can pass in such as `stream`, `context`, `format`, and others, but the only required parameters are the `prompt` and `model` fields.

Let's try it out! Let's make a POST request to the `/api/generate` endpoint with the following JSON payload:

```json
{
  "prompt": "Write a Python function that takes a string and returns the number of vowels in the string.",
  "model": "codellama",
}
```

You can use a tool like [Postman](https://www.postman.com/) to make the request. Once you have the request set up, you can send it to the `/api/generate` endpoint and see the response.

![Ollama from Postman](https://storage.googleapis.com/sourcegraph-assets/blog/local-code-completion-with-ollama-and-cody/ollama-postman.png)

## Ollama for Cody

Now that you have Ollama installed and running locally, you can use it with Cody to get local code completion. To do this, you need to install the [Cody VS Code extension](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai). Once you have the extension installed, you can configure it to use Ollama by following these steps: 

1. Navigate to the Cody extension settings by opening the Command Pallete (`Cmd+Shift+P`) and typing `Cody: Extension Settings`.
2. Scroll down to find the "Cody > Autocomplete > Advanced: Provider" section. From the dropdown menu, select "expermintal-ollama".
![Cody extension settings](https://storage.googleapis.com/sourcegraph-assets/blog/local-code-completion-with-ollama-and-cody/cody-ollama-settings.png)
3. Finally, open up the `settings.json` file and find the `cody.autocomplete.experimental.ollamaOptions` property. You can specify the URL of the Ollama instance you want to use, as well as the model you want to use. For example:

```json
"cody.autocomplete.experimental.ollamaOptions": {
  "url": "http://localhost:11434",
  "model": "codellama"
}
```

Once you have done this, you will use Ollama to get local code completion for your VS Code files. To verify that it is working, open the Output tab and switch it to Cody by Sourcegraph. Next, open a file and start typing. You should see the following message in the Output tab:

![Cody with Ollama in action](https://storage.googleapis.com/sourcegraph-assets/blog/local-code-completion-with-ollama-and-cody/cody-ollama-in-action.png)

The above image shows that we are sending the prompt and context to Ollama. The response from Ollama is then sent back to Cody and displayed in the Output tab.

Now you can also try out other models by changing the `model` value in the `cody.autocomplete.experimental.ollamaOptions` setting. As soon as the `settings.json` file is saved, Cody will automatically update to use the new model. Happy experimenting!

## Conclusion

With Ollama, you can now get local code completion for your VS Code files. This is a great way to improve your development workflows and make your coding experience more accessible. We hope you find this feature useful and that it helps you get the most out of Cody. If you have any questions or feedback, please let us know by opening an issue on our [GitHub repository](https://github.com/sourcegraph/cody).
