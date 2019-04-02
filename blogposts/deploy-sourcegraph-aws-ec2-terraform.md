---
title: 'Deploying Sourcegraph on AWS to an EC2 instance using Terraform'
author: Ryan Blunden
publishDate: 2019-04-01T05:59-06:00
tags: [
  blog
]
slug: deploy-sourcegraph-aws-ec2-terraform`
heroImage: /blog/sourcegraph-aws-terraform.png
published: false
---

You can now use [Terraform to deploy Sourcegraph on an EC2 instance](https://github.com/sourcegraph/deploy-sourcegraph-aws/tree/master/ec2) with SSL using a self-signed certificate.

It's easy and takes less than 5 minutes:

1. Clone the [deploy-sourcegraph-aws](https://github.com/sourcegraph/deploy-sourcegraph-aws/) repository
1. [Configure the EC2 plan](https://github.com/sourcegraph/deploy-sourcegraph-aws/tree/master/ec2#terraform-plan-configuration)
1. Run `make deploy` in the `ec2` directory

You can see the entire process in the screencast below:

<p class="container">
  <div style="padding:56.25% 0 0 0;position:relative;">
    <iframe src="https://player.vimeo.com/video/327771524?color=0CB6F4&amp;title=0&amp;byline=0&amp;portrait=0&autoplay=1&loop=1" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
  </div>
  <p style="text-align: center"><a href="https://vimeo.com/327771524" target="_blank">View on Vimeo</a></p>
</p>

This AWS EC2 Terraform plan is the first of many, with our distribution team working on similar plans for Azure, GCP and DigitalOcean. We'll have another update in the 3.3 release blog post on April 19.
