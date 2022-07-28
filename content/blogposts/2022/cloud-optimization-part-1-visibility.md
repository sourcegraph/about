---
title: 'Cloud cost optimization: Part 1 - Create visibility'
authors:
  - name: Christina Forney
    url: https://handbook.sourcegraph.com/team/#christina-forney
publishDate: 2022-07-28T10:00-07:00
description: 'The first part in a four part series on how you can reduce cloud costs. The first piece reviews the importance of creating visibility and practical ways you can do this using Sourcegraph.'
tags: [blog, infrastructure as code, devops, cloud cost reduction]
slug: 'cloud-optimization-part-1-visibility'
published: true
---
*This is the first part in a four-part series covering practical steps to optimize cloud costs across your organization.*

There is a growing trend for organizations of all sizes to get out of the business of running their own data centers and move their infrastructure and application workloads to the cloud. This typically includes a transition to software as a service (SaaS) as well as leveraging infrastructure as a service (IaaS).  IaaS providers are often referenced as “Hyperscalers” and include Google Cloud Platform (GCP), Amazon AWS, and Microsoft Azure.  The advantages of and motivations for adopting cloud applications and infrastructure are often to achieve cost savings through [a shift from a CapEx to an OpEx](https://www.10thmagnitude.com/opex-vs-capex-the-real-cloud-computing-cost-advantage/) financial model and the opportunity to only pay for the resources and infrastructure you need or use.

### The problem

However, most organizations are finding that there is  actually a higher cost than expected for running their legacy workloads in a hyperscale environment. In fact, [Gartner estimates that as much as 70% of cloud costs are wasted](https://www.gartner.com/document/3847666). As a result, there has been a need to adopt best practices for optimizing cloud costs (examples: [What is cloud cost optimization? 15+ best practices for 2022](https://www.cloudzero.com/blog/cloud-cost-optimization), [Cloud Cost optimization: definition and strategies](https://www.capitalone.com/software/blog/cloud-cost-optimization/), [9 Best practices for cloud cost optimization](https://redriver.com/cloud/best-practices-for-cloud-cost-optimization)). While these articles are helpful if you need to drive alignment around an initiative, what they miss are practical steps you can take today to start optimizing your cloud costs.

Whether you are starting your journey to the cloud, or just looking to better optimize your current cloud costs, it helps to break the problem down into two different buckets.

1. **Infrastructure configuration, optimization, and automation** – Create awareness and visibility into cloud infrastructure usage using infrastructure as code (covered here in part 1).  Then review how your infrastructure can be automated and optimized to find cost savings (covered in part 2 – coming soon).
2. **Application refactoring** – Review application architecture and resource utilization.  Often applications are monolithic and not designed to be cloud native.  Hyperscalers provide compute, memory, and storage, as well as new standardized services, technologies, and approaches that were not available in the traditional data center environments. This requires insights into the  portions of your code that can leverage the newly available technologies and the ability to rapidly update patterns in code across the organization. At the very least, organizations need to identify and optimize their workloads to run more efficiently in the new hyperscale environment (covered in parts 3 and 4 – coming soon).

### Infrastructure as code 
Infrastructure as code (IaC) is the process of managing and provisioning cloud infrastructure through machine-readable definition files like Terraform ([open source repositories with examples](https://sourcegraph.com/search?q=context:global+lang:Terraform+select:repo&patternType=literal), [example files](https://sourcegraph.com/search?q=context:global+lang:Terraform+&patternType=literal)) and AWS CloudFormation ([open source repositories with examples](https://sourcegraph.com/search?q=context:global+select:repo+AWSTemplateFormatVersion&patternType=literal), [example files](https://sourcegraph.com/search?q=context:global+AWSTemplateFormatVersion&patternType=literal)), rather than physical hardware configuration or interactive configuration tools [1]. These definition files make it possible to have visibility of all your provisioned infrastructure, especially if you have a [universal code search solution](http://sourcegraph.com) inside your organization.

<Figure 
  src="/blog/cloud-optimization-part-1-visibility/google-cloud-settings-form.png"
  alt="Google cloud settings form"
  caption="Creating a new GCP VM using the GCP web console (https://console.cloud.google.com/compute/instancesAdd)"
/>
<Figure 
  src="/blog/cloud-optimization-part-1-visibility/sourcegraph-cloud-settings.png"
  alt="Sourcegraph cloud settings json"
  caption="Configuring a new or existing GCP VM using a Terraform configuration file (tutorial: https://registry.terraform.io/providers/hashicorp/google/latest/docs/guides/getting_started#provisioning-your-resources)"
/>

According to [Gartner research](https://www.gartner.com/en/documents/3992065), less than 5% of server provisioning utilized IaC in 2020, and only 40% is expected to do so by 2023. This means that the vast majority of cloud infrastructure is manually provisioned, built on a huge amount of untraceable scripts, or manually configured in the cloud provider interface.

If your organization has not adopted IaC (which is the majority – you’re not alone!), then the first step is to create visibility into your cloud infrastructure configuration by exporting it into a version control system so that you can search over the current state and see the history of changes. 

### Create visibility

Doing a one-time audit of your cloud infrastructure is beneficial for cutting costs, but if you want to continually review for cost reduction, you’ll want to have automation in place to regularly export your config into a Git repository. We’ve pulled together some helpful resources that should make this setup a bit easier.

<ol>
  <li>
    Export all cluster config into a Git repository – use a tool like CloudFormation or Terraform (provisioning tools).
    <ul>
      <li>
        First, choose the provisioning tool you want to export to. We recommend Terraform. Here is a [helpful blog series on choosing Terraform over other provisioning tools](https://blog.gruntwork.io/why-we-use-terraform-and-not-chef-puppet-ansible-saltstack-or-cloudformation-7989dad2865c).
      </li>
      <li>
        [Terraformer](https://github.com/GoogleCloudPlatform/terraformer) is a CLI to export config to Terraform on any cloud provider.
          <ul>
            <li>
              [Example](https://sourcegraph.com/search?q=context:global+repo:%5Egithub%5C.com/GoogleCloudPlatform/terraformer%24+terraformer+import&patternType=regexp) export commands for all cloud providers from Terraformer docs:
              <Figure
                src="/blog/cloud-optimization-part-1-visibility/sourcegraph-search-all-terraform-imports.png"
                alt="Sourcegraph search results: export commands for all cloud providers from Terraformer docs"
              />
            </li>
            <li>
              [Examples](https://sourcegraph.com/search?q=context:global+%22terraformer+import%22+-lang:Markdown+&patternType=regexp) of scripts that reference `terraformer import`:
              <Figure
                src="/blog/cloud-optimization-part-1-visibility/sourcegraph-search-results-terraform-imports.png"
                alt="Sourcegraph search results scripts that reference terraformer import"
              />
            </li>
          </ul>
      </li>
    </ul>
  </li>
  <li>
    Export all services config into a Git repository – use a tool like Chef, Puppet, Ansible, or Kubernetes (configuration management tools) to export the services configuration.
    <ul>
      <li>
        We deploy Sourcegraph.com with Kubernetes, and use [kube-backup](https://github.com/pieterlange/kube-backup) to export  and backup this configuration.
      </li>
    </ul>
  </li>
  <li>
    Set up a CronJob to regularly snapshot the configuration files from the first two steps into the Git repos. By regularly updating, you will be able to have better traceability of changes over time, and it will allow you to better understand the entire system. Additionally, you have now moved one small step closer to infrastructure as code.
  </li>
</ol>

### Conclusion

Visibility and awareness are the first steps toward greater cost savings across your organization and extend to include both direct costs of cloud infrastructure as well as operational savings.  The next step is to identify targets for optimization and to monitor changes over time.  We will cover approaches and practical examples of  this in part 2.

<hr/>

Thanks to the following people for helping with this post: Mark McCauley, Rafal Gajdulewicz, and Nick Snyder.

### About the author

_Christina Forney is product advisor at Sourcegraph, and has 10+ years working in developer and product roles in the developer tools space. You can reach Christina by [email](christina@sourcegraph.com) or on Twitter [@christina4nee](https://twitter.com/christina4nee)._


<h6 className="mt-6">Footer</h6>
  (1) https://www.hpe.com/us/en/insights/articles/you-need-strong-talent-to-achieve-infrastructure-as-code-1809.html
