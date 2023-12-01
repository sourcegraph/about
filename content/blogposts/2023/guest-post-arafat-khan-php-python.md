---
title: "Climbing Mount Everest in Flip-flops: My PHP journey as a Python dev"
authors:
  - name: Arafat Khan
    url: https://twitter.com/arafatkatze
  
publishDate: 2023-11-21T10:00-01:00
description: "When tasked with creating a printing API in PHP despite having zero experience, Arafat Khan leveraged Cody to transform what felt like an Everest climb into a swift 3 day project that resulted in a fully functioning API."
tags: [blog]
slug: "building-a-printing-api-in-php-with-cody"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/guest-post-arafat-khan-php-python-og.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/guest-post-arafat-khan-php-python-og.png
---

<Alert type="secondary">This is a guest blog post from our community. <a href="https://discord.com/servers/sourcegraph-969688426372825169" target="_blank">Join our Discord</a> to meet the author and connect with other developers passionate about Code Search and AI!</Alert>

_Ever thought about climbing Mount Everest in flip-flops?_ That’s how I felt diving into _PHP_ for the first time.

A few weeks ago, a professional endeavor landed on my desk: creating a printing API. The goal was to build a library in PHP that lets developers easily play with commands to scan and print documents programmatically. With an already functional Python API version in my arsenal, I was initially optimistic about the task. Translating the code to another language, PHP in this case, seemed like a straight path. However, the catch was my complete lack of familiarity with PHP, making the experience seem like a herculean effort at first glance. To add to the challenge, I imposed a time constraint on myself. So now I had to learn a new language and build a full-blown project that I could share with the world.

This task entailed a couple of different things

* Building and publishing an entire PHP package with easy install instructions and simple commands to print/scan documents while cleanly hiding all the API complexity.
* Build comprehensive documentation for those keen on exploring edge cases.
* Add decent testing/error handling to maintain code and take future developments into account.

Ultimately, my goal was to offer this functionality to PHP users

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/guest-post-arafat-khan-php-python/image_1.png"
  caption="Rough Outline of the Print API"
/>

While I knew that I knew nothing about PHP, I also knew that I had help that I could rely on. I started with the only two things that I had at the time:

* My fully functional Python repo to use as a reference
* [Cody](https://about.sourcegraph.com/cody) -> A code AI assistant from Sourcegraph

I fired up my Python repo in VS Code and started out with some basic PHP setup questions to help me out with the setup steps of the PHP project

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/guest-post-arafat-khan-php-python/image_2.png"
  caption="My Python project in VS Code with Cody’s chat panel"
/>

These are just silly PHP 1O1 questions but for someone who didn’t have the slightest clue of what they were doing, this was such a timesaver. It’s almost as if I had a mid-level PHP Developer sitting next to me who was guiding me through the whole process. After answering my questions, it would also give me a couple of different follow-up questions that it already knew I would ask. That was surprisingly helpful. I would literally just press the button to ask the pre-decided follow-up questions and those questions would help me gain a better understanding of the flow.        

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/guest-post-arafat-khan-php-python-image-3-full-035250.png"
  caption="Basic PHP Project Setup Questions"
/>

Drawing from my Python background, I communicated with Cody using Python analogies. This approach worked wonders. Cody translated my Python-centered queries into PHP solutions, making the learning curve smoother.

In a pre-Cody era, I would have crawled the Internet, sifted through hours-long tutorials, and juggled between numerous blogs to get a grip on PHP’s basics. While video tutorials serve their purpose, isn’t it more efficient to have a guide that delivers instant answers tailored to your needs?

This is exactly where Cody came in. It would give me a lot of foundational advice that I needed to setup my repo and understand the basics of PHP. I could frame my questions in any way that I wanted, and I would get useful answers to just the EXACT thing I needed at the moment. In just a few hours, with Cody’s assistance, I set up a basic “Hello World” package complete with tests and documentation.

The foundation of the PHP package was laid, and all that remained was to build the actual API upon it. The real challenge lay in replicating the API’s intricate structure, a fusion of authorization, settings, and upload requests, all harmoniously functioning within OOP’s realm. The rough outline of the API looks like this


<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/guest-post-arafat-khan-php-python/image_4.png"
  caption="Flow for Print API"
/>

To do the real building, I started out with the root of the entire codebase, which is the Auth class(This class will authorize all the calls going to the Print API and validate them). The goal was very simple, select my Python code and ask Cody to generate a basic PHP scaffolding for it.

<YouTube
  title="Cody select and explain" 
  id="N-9QUjpv1qY"
  showTitle={true}
/>


You can see how easy it is to select some Python code and ask Cody to convert it. This gives us a good starting point for the outline of the class that we are looking for.

```php
<?php

class AuthCtx {

  // Properties
  private $_baseUrl;
  private $_printerEmail; 
  private $_clientId;
  private $_clientSecret;

  private $_expiresAt;
  private $_accessToken = '';
  private $_refreshToken = '';
  private $_subjectId = '';

  // Constructor
  public function __construct($baseUrl, $printerEmail, $clientId, $clientSecret) {
    
    // Initialize properties
    $this->_baseUrl = $baseUrl;
    $this->_printerEmail = $printerEmail;
    $this->_clientId = $clientId;
    $this->_clientSecret = $clientSecret;

    // Call auth method
    $this->_auth();

  }

  // Authenticate or re-authenticate
  private function _auth() {

    // Check token expiration
    if ($this->_expiresAt > time()) {
      return;
    }  

    // API endpoint
    $method = 'POST';
    $path = '/api/1/printing/oauth2/auth/token?subject=printer';
    
    // Headers
    $headers = array(
      'Content-Type' => 'application/x-www-form-urlencoded'
    );

    // Authentication
    $auth = array($this->_clientId, $this->_clientSecret);

    // Request data
    if ($this->_accessToken == '') {
      $data = array(
         'grant_type' => 'password',
         'username' => $this->_printerEmail,
         'password' => ''
      );
    } else {
      $data = array(
        'grant_type' => 'refresh_token',
        'refresh_token' => $this->_refreshToken
      );
    }

    // Make API request
    try {
      $body = $this->send($method, $path, $data, $headers, $auth);
    } catch (Exception $e) {
      throw new Exception('Authentication error: ' . $e->getMessage());
    }

    // Handle errors
    if (isset($body['error'])) {
      throw new Exception('Authentication error: ' . $body['error']);
    }

    // First time, get refresh token
    if ($this->_accessToken == '') {
      $this->_refreshToken = $body['refresh_token'];
    }

    // Update tokens
    $this->_expiresAt = time() + $body['expires_in'];
    $this->_accessToken = $body['access_token'];
    $this->_subjectId = $body['subject_id'];

  }

  // Make API request
  public function send($method, $path, $data, $headers, $auth) {
    
    // Re-authenticate if needed
    if (!$auth) {
      $this->_auth(); 
    }

    // Make HTTP request and handle response

  }

}
```

This is a very decent scaffold for the entire Auth class. We have the private/public variables, most of the auth method already implemented, and the outline of the send method. This is a great starting point, I already learned so much about PHP syntax just from this, and now I can build things on top of it. Brick by brick, by selecting segments of my Python code, I can understand them and then re-create them in PHP, too. I kept doing the iterative work of selecting different parts of my Python code and asking more questions on it to piece it all together to make my PHP code.


Obviously, we are dealing with LLMs here, so nothing is perfect. Occasionally, Cody would hallucinate and give me an imperfect response, and in those cases, I would have to use my programming background and some common sense to tweak the code. I would also try my best to write as much code myself because that teaches you the intricacies of the syntax and the common mistakes that people tend to make, and it’s generally a great learning experience.


Cody can be surprisingly helpful even when you just want to write all the code yourself. One of the classic mistakes while writing PHP as a newbie is missing the `$` sign before variables, as shown below. With Cody, it’s easy just to ask it to fix them for you. It’s much better than the natural IntelliSense fixes that come with VS Code by default. I appreciate this feature as it saves me from tedious single-character bug fixes.

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/guest-post-arafat-khan-php-python/guest-post-arafat-khan-php-python-image-5-full.png"
  caption="PHP Variable fixes with Cody"
/>

The other thing that I really enjoyed was the improved speed of coding.

Typically, the coding process goes like this:

1. Conceptualize
2. Draft imperfect code
3. Refine
4. Comment
    
However, with Cody, I experienced a much faster approach:

1. Conceptualize
2. Comment
3. Generate near-perfect code
4. Refine

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/guest-post-arafat-khan-php-python/image_6.jpg"
  caption="Couldn’t resist adding an AI image to show the contrast of two Coders"
/>

Sometimes, I would just describe what the function is “supposed” to do in a comment, and just like magic, Cody would write it for me.
            <div>
                <YouTube title="Autocomplete with Cody" id="UdMCERz9hcY" />
            </div>
The above example is Cody’s autocomplete feature. It works surprisingly well for all kinds of code completion tasks, especially when your repo already has a reasonable amount of code to give it context. This autocomplete system is grounded in a complex foundation, and for those interested in its intricacies, you can delve deeper [here](https://about.sourcegraph.com/blog/the-lifecycle-of-a-code-ai-completion).

All these features, such as _autocomplete, explanation, code fixes, and testing,_ made my job as a programmer a lot easier. I was able to build the building blocks of my code, and then, inch by inch, I was getting closer to completing the entire project. As I was building more and more of this codebase, a question that crossed my mind was:

## Why use Cody when you have Chat GPT-4?

I like the speed and convenience of Cody, as well as the ability to use it directly in VS Code, but there is another major reason why I prefer Cody. Cody can answer questions about your entire codebase and sift through all the different parts to find the most relevant information pertaining to your question. It uses the [Claude 100K model](https://www.anthropic.com/index/100k-context-windows) (soon to be the [200K model](https://www.anthropic.com/index/claude-2-1)) so it has the capacity to fit in so much more context than my copy-pasting hacks ever could. Take, for example, this question

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/guest-post-arafat-khan-php-python/image_7.png"
/>

I asked a question here that touches 11 different files, each of which would easily exceed the context window of ChatGPT (Never mind the copy-pasting hassle). It sifts through all the files and shows me how they are interconnected and what calls touch which parts. This to me, is the most important feature of Cody: the ability to answer questions that are deeply tangled in the complexity of the codebase. It helps me answer questions that I simply can’t find through a simple copy-paste because the real problem is that sometimes _I don’t even know where to look_ when I am dealing with very large codebases. And here's the best part: Cody is soon going to support GPT-4.5-Turbo(So all the Open AI fans still get to stay with their favourite models)


#   **Conclusion**


   Cody has made me faster and improved my dev workflow so much that I don’t think I will be coding without it in the future. The daunting Everest climb of learning PHP began to feel more like a stroll in the park. Every obstacle I encountered was promptly addressed, either by directly consulting Cody or by utilizing the resources and code suggestions it provided.


    In a mere span of three days, I not only developed a functional PHP API for Printing but also deepened my PHP understanding. This journey underscored the potential of efficient, transformative learning with the right tools.


    You can check the codebase yourself

* [Python Code](https://github.com/arafatkatze/epson-connect-python) — [Python Docs](https://epson-connect-api.readthedocs.io/en/main/?badge=latest)
* [PHP Code](https://github.com/arafatkatze/epson-connect-php) —[ PHP Docs](https://arafatkatze.github.io/epson-connect-php/packages/Epsonconnectphp-Epson.html)
* [Print API Blog](https://medium.com/@Arafatkatze/epson-connect-api-for-developers-a-comprehensive-guide-ae639a80eefb)

    To anyone embarking on a similar journey or facing the challenge of diving into unfamiliar territory, I would say that AI tools in 2023 are like the Internet in the late 90s. You can deny its existence and impact all you wish, but there is very soon going to be a future that’s so deeply entwined with AI that you won't be able to think of a life without it. I strongly recommend people try out AI coding assistants. There’s quite a few out there, but Cody is the best one.


<hr style={{marginTop:"2rem",marginBottom:"2rem"}} />

To get started with Cody, [install it from the VS Code Marketplace](https://about.sourcegraph.com/cody).
