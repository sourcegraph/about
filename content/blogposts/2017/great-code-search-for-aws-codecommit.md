---
title: 'Great code search for AWS CodeCommit'
authors:
  - name: Beyang Liu
    url: https://twitter.com/beyang
publishDate: 2017-11-16T00:00-08:00
tags: [
  "blog"
]
slug: great-code-search-for-aws-codecommit
description: 'Sourcegraph brings great code search and understanding abilities to development teams using AWS CodeCommit. Code search helps your engineering team find usage examples, debug errors, reuse existing libraries and packages, and understand unfamiliar parts of your code base more quickly.'
heroImage: https://images.ctfassets.net/le3mxztn6yoo/37bSN5FztCU6IAIMSiqYgQ/ccd769ca77041b11b8daef49cba42da0/CodeCommit-PublicKey.png
published: true
---

## Install Sourcegraph to get great code search on AWS CodeCommit

Sourcegraph brings great code search and understanding abilities to development teams using [AWS CodeCommit](https://aws.amazon.com/codecommit/). Code search helps your engineering team find usage examples, debug errors, reuse existing libraries and packages, and understand unfamiliar parts of your code base more quickly. Learn more about [Sourcegraph code search](https://docs.sourcegraph.com/code_search).

Setting up Sourcegraph code search to work with AWS CodeCommit is quick and easy.

1. First, [install and run an instance of Sourcegraph](https://docs.sourcegraph.com/admin).
2. Create a AWS IAM user with programmatic access.

<Figure 
    src="//images.contentful.com/le3mxztn6yoo/750VgGMn84q6ciwoOKiGMi/a6007e31880c976df94f9ecde68dcf1a/CodeCommit-CreateUser.png"
    alt="CodeCommit-CreateUser"
/>

3. Attach the permission `AWSCodeCommitReadOnly` to this user.

<Figure 
    src="//images.contentful.com/le3mxztn6yoo/2vZ3AXk9Mc2MOGMIseQemg/e319cfd46a79fdf9237503f57e6c67c8/CodeCommit-Permissions.png"
    alt="CodeCommit-Permissions" 
/>

4. Create a SSH key pair:

  ```text
  ssh-keygen -t rsa
  ```

5. Add the public key to the IAM user (under the "Security credentials" tab). After it is uploaded, make a note of its **SSH key ID**.

<Figure 
  src="//images.contentful.com/le3mxztn6yoo/37bSN5FztCU6IAIMSiqYgQ/ccd769ca77041b11b8daef49cba42da0/CodeCommit-PublicKey.png"
  alt="CodeCommit-PublicKey"
/>

6. Modify your `config.json` (which you created as part of installing Sourcegraph) to access your AWS CodeCommit repositories. You'll need to make two changes:

 a. Set the `gitOriginMap` field to include a mapping of the form `aws/!ssh://${YOUR_SSH_KEY_ID}@${YOUR_SSH_CLONE_URL_PREFIX}/%`. Substitute the SSH key ID associated with the SSH key you added and the SSH clone URL prefix, which you can obtain by viewing the SSH clone URL of any of your repositories. It should look something like this:
  ```json
  "gitOriginMap": "aws/!ssh://XXXXXXXXXXXXXXXXXXXX@git-codecommit.us-west-1.amazonaws.com/v1/repos/%",
  ```

 b. Copy the private SSH key to a file called `id_rsa` in the directory that contains your `config.json`. Then add the following entry:
  ```json
  "gitserverSSH": {
    "id_rsa": "file!id_rsa"
  },
  ```

7. Update your Sourcegraph instance to reflect the changes you made to your `config.json` by running `sourcegraph-server-gen config.json ./helm-chart && helm upgrade sourcegraph ./helm-chart`.<br/>
8. Add your AWS CodeCommit repositories by navigating to `https://${YOUR_SOURCEGRAPH_URL}/aws/${REPO_NAME}`.

And that's it! Now you can search over all your AWS CodeCommit repositories at once or configure a search group that lets you and your team search over a targeted subset of repositories. You can also configure Sourcegraph to work with a variety of Enterprise SSO identity providers and additional code hosts. You can read more about customizations [in the Sourcegraph administrator docs](https://docs.sourcegraph.com/admin).

[Install a self-hosted Sourcegraph instance with 1 command.](https://docs.sourcegraph.com/#quickstart)

### About the author

_Beyang Liu is the CTO and co-founder of Sourcegraph. Beyang studied Computer Science at Stanford, where he published research in probabilistic graphical models and computer vision at the Stanford AI Lab. You can chat with Beyang on Twitter [@beyang](https://twitter.com/beyang) or our community [Discord](https://discord.com/invite/vqsBW8m5Y8)._
