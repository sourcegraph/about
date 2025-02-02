---
title: "Security considerations for enterprises adopting AI coding assistants"
publishDate: 2024-08-21T10:00-07:00
authors:
  - name: Kelvin Yap
    url: https://x.com/KelvinYap
description: "A list of key questions you should ask when evaluating AI coding assistants."
tags: [blog]
slug: "security-considerations-for-enterprises-adopting-ai-coding-assistants"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/security-considerations-adopting-ai-coding-assistant/security-considerations.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/security-considerations-adopting-ai-coding-assistant/security-considerations.png
---

With over [76% of professional developers](https://survey.stackoverflow.co/2024/ai#sentiment-and-usage-ai-sel-prof) already using or looking to use AI tools as part of their development process, enterprises taking part in the growing adoption of AI coding assistants need to ensure they have strong data protection, comply with regulatory standards, and don't open themselves up to legal risk. Using large language models with sensitive IP (code) is a new frontier for many companies and introduces many unknowns for security and data privacy. These are valid concerns, and this post outlines the approach we have taken with Cody to address these concerns.


### Will our code be used for training?

Enterprises often consider their codebase to be their crown jewel - the 0s and 1s that make their offerings differentiated and valuable, and it's imperative they protect it at all costs. This belief is at odds with how many AI coding assistants work, which use third-party model providers that have and can train on the code and data they are sent (prompts) to generate code suggestions and answers (results). The potential for a language model to intake enterprise code, use it to train models, and then suggest that code back to other developers and customers is a major concern for security teams. As a result, enterprises need assurances that their code and data are protected and won't be used to train models.

With Cody Enterprise, customer code is never used for training purposes. Cody Enterprises' provided models all operate under agreements between Sourcegraph and the model service providers to never retain or train on users' code.

Enterprises can rest assured that neither the prompts sent nor the results returned from a model provider while using Cody are used to customize or train models.

### Will the code generated from this tool open us up to legal consequences?

Many of the large language models (LLMs) used by AI coding assistants are trained using a broad corpus of data and, while rare, can return results that closely match public code. In these instances, there is a risk that using the result could trigger copyright infringement which can lead to significant legal and financial consequences for the offending party. It is therefore important that enterprises look for an AI coding assistant that minimizes the chances of exposure to copyright infringement and possible legal exposure.

Cody Enterprise minimizes this exposure in a number of ways. First is via model selection - while many LLMs are trained on data from a variety of sources, some are trained only on permissively licensed code. StarCoder for example, is an LLM that Cody Enterprise customers can use to generate results that do not contain copyrighted code.

Guardrails is another feature Cody Enterprise offers that reduces exposure to copyright infringement. It works by verifying code suggested by Cody against a large corpus of public code, running a check any time it generates a code snippet of 10 lines or more. If there is a positive match against public code it will either not return that result to the user (in the case of autocomplete suggestions), or it will include a note alongside the result (for chat) that indicates whether the check passed or failed.

Finally, in the rare situation where copyrighted code does make it into a production codebase, Cody Enterprise offers unlimited indemnification against any claims alleging that your use of Cody or any Cody results infringes copyright. This indemnification applies to any model used, giving enterprises peace of mind when selecting a model that works best for their needs.

### Will my code be at risk of being leaked or exposed?

Most AI coding assistants access LLMs in a variety of configurations, often relying on third-party provider endpoints where code is transmitted to the provider and processed on their hardware, and results are sent back to the user. This hardware is almost always multi-tenant and used to process requests from many different enterprises. This can be a concern as code may be stored on the provider's hardware for an unknown time period without permission or knowledge. It is imperative enterprises can protect their code and mitigate the risk of unauthorized access and use.

Cody Enterprise allays these concerns with a zero-retention guarantee that all code, prompts, and results are owned by the enterprise and are not stored or maintained by any third-party model provider. Code and prompts are only processed for the duration needed to return the results and are permanently deleted by the provider afterward. All data transmitted is encrypted using Transport Layer Security (TLS) 1.2 ensuring that it cannot be intercepted or tampered with during transmission.

Enterprises can also take preventative measures in Cody Enterprise by utilizing Context Filters. This feature lets admins choose which repositories can and cannot be sent to third-party model providers as part of a prompt. This prevents sensitive code from being passed to providers and further minimizes the risk of unauthorized access and use.

Cody Enterprise also supports the private and secure access of LLMs through managed services like Amazon Bedrock, Azure OpenAI, and Google's Vertex AI, removing the reliance on third-party providers. This is particularly useful for enterprises who are existing customers of AWS, Azure, or GCP, who can securely connect to these models from within their existing environment and VPC.

### Does the tool comply with our regulatory standards?

Depending on various factors such as industry or geography, enterprises must often adhere to a variety of regulatory standards that dictate strict guidelines on how data should be managed, stored, and protected. Non-compliance can result in large fines and legal consequences, and it's therefore imperative that any AI code assistant they choose allows them to comply with regulatory requirements.

Sourcegraph has completed a Service Organization Control 2 (SOC 2) Type 2 audit for its self-hosted and cloud services, and has a SOC 2 Type 1 report confirming it has controls in place necessary for security, availability, and confidentiality. Additionally, Sourcegraph is in compliance with The California Consumer Privacy Act (CCPA) of 2018.

Sourcegraph also operates its platform in accordance with General Data Protection Regulation (GDPR) data protection and privacy regulations, and Cody Enterprise can be hosted in specific places to meet regulations where data needs to stay within specific geographic boundaries. 

### Conclusion

Using AI for code is a new frontier, and enterprises have very valid concerns around security, privacy, and data loss prevention. Cody Enterprise is built to address these concerns directly, and through its security considerations, we believe it answers the common questions many enterprises face today.

If we missed any security concerns or considerations for your team, please [get in touch](https://sourcegraph.com/contact/request-info) and let us know! We'd love to talk through it with you and make Cody Enterprise a better solution for your team.