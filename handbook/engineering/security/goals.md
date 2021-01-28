# Security goals and priorities

## Goals

These goals represent our targeted work for 70% of our time. The remaining 30% is reserved for items that arise such as security reports. Our current work is documented in a [private GitHub project](https://github.com/orgs/sourcegraph/projects/130).



### Enable Sourcegraph Cloud

**Problem:** The Cloud team is working toward [private code on Sourcegraph Cloud](../cloud/index.md#private-code-on-sourcegraph-cloud). Before we're comfortable allowing users to index their own private code with Sourcegraph, we need to have confidence in our ability to proactively identify and resolve issues, and we need to have a high degree of confidence in our overall security posture. Note that the current milestones only get us to enabling Sourcegraph cloud for SMBs. This isn't because we don't want to enable cloud for large enterprises as well, but because we don't yet have clarity on enterprise security asks, and what work will be discovered in the process of the currently listed milestones.



**Milestones:** 

1. We need a better way to store and access [our own secrets](https://docs.google.com/document/d/1HzO7szEm-h4fqlQOnVbcJdpDmfQiM7Rb-Tz4CMEYl-Q).
2. All compute nodes, repositories, and containers, as well as our cloud deployment, are continuously scanned for known security vulnerabilities and the security team is alerted as vulnerabilities are found. 
   1. We have resolved compute vulnerabilities with a high severity, or a CVSS score of at least 4.0.
3. TODO: Do we need additional logs for cloud GA? I would argue [GSuite log ingestion](https://github.com/sourcegraph/sourcegraph/issues/17235) and [org level GCP audit logs](https://github.com/sourcegraph/sourcegraph/issues/17335)
4. We have confidence that our centralized logging is production-ready, and we have relevant tooling and testing environments configured.
5. **Sourcegraph Cloud is Generally Available for user to add private code**
6. We're confident that we're ingesting logs from all services that are tightly coupled to our Cloud deployment. This is anything that directly interacts with our cloud deployment with elevated privileges, or directly allows authentication to these services.
   1. For example, the Cloud deployment & GCP project, GCloud, GitHub, Buildkite, deployment pipelines, Cloudflare, Elasticsearch, the sourcegraph GCP organization, GCP groups, remote terraform state, etc.
   2. We should also audit the logs that we currently ingest to ensure they contain sufficient information. If they don't, we need to increase their scope.
7. We're ingesting logs from all services loosely coupled to our Cloud deployment. This is anything that cannot independently impact Cloud, but may be leveraged to gain access, extract sensitive information, or otherwise negatively impact cloud.
   1. For example, non-production GCP projects, Slack, honeycomb, Zoom, etc.
8. Normalize log format in our centralized log storage so that it is easier to correlate and search. This is a prerequisite for creating automated alerts from the logs.
9. Create alerts and dashboards to automate the process of investigating events of interest (e.g., detect and alert on a spike of failed login attempts to a single account, or across Sourcegraph Cloud as a whole).
10. We run a time-bound capture the flag event where there are larger bounties for being able to gain access to our [test security repository](https://github.com/sourcegraph/security-test/blob/main/README.md) on Sourcegraph Cloud.
11. We connect our [test security repository](https://github.com/sourcegraph/security-test/blob/main/README.md) to Sourcegraph Cloud and only [members who can access that repository on GitHub](https://github.com/sourcegraph/security-test/settings/access) can access that repository on Sourcegraph Cloud (i.e., [Sourcegraph organization owners](https://github.com/orgs/sourcegraph/people?query=role%3Aowner) and [@sourcegraph/security](https://github.com/orgs/sourcegraph/teams/security) members). We then advertise a bounty for each unique vulnerability that allows an unauthorized person to gain access to this [test security repository](https://github.com/sourcegraph/security-test/blob/main/README.md) on Sourcegraph Cloud.
12. We host our private [infrastructure repository](http://github.com/sourcegraph/infrastructure) on Sourcegraph Cloud.
13. Document and publish our security practices so that our customers can 
14. Document our roadmap and progress towards [SOC 3](#soc-audit-readiness).
15. Validate that we are GDPR compliant.
16. **Sourcegraph Cloud is a viable alternative to Sourcegraph for SMBs**



### SOC Audit readiness

**Problem:** As we begin providing a SaaS product, attaining a full SOC 2/3 certification will become necessary to enable the business. Note that a SOC 3 provides the same assurances as a SOC 2 certification, but contains less details, which makes it more accessible to general users, and something that we can [freely distribute](https://www.aicpa.org/interestareas/frc/assuranceadvisoryservices/aicpasoc3report.html). Therefore, we intend to pursue a SOC 3 certification in keeping with our company values of [openness and transparency](../../../company/values.md#open-and-transparent). If reasonable, we'll pursue SOC 2 type 2 in parallel with this, since it's the same audit process.

1. Document our roadmap and progress towards SOC 3.
1. Prepare for SOC 2 type 1 certification and contract with an auditor to complete the audit. Note that we begin with SOC 2 type 1 because type 1 audits can be achieved significantly faster than type 2 audits, and SOC 3 does not have a type 1 audit. This will also serve as a way to communicate to our customers that we're on the right track in our SOC certification process. Note that, unlike SOC 3, SOC 2 audits of both types cannot be freely distributed.
1. Put protocols in place to produce and gather the requisite auditable artifacts for SOC 3.
1. Work with an auditor to complete our SOC 3 certification. If reasonable, we'll also complete SOC 2 type 2 in parallel for customers who demand a more in-depth report.



## Roadmap

See [WIP roadmap in productboard](https://sourcegraph.productboard.com/feature-board/2119755-cloud)
