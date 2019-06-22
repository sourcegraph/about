import * as React from 'react'
import Helmet from 'react-helmet'
import { CaseStudyPage, InContentBlockquote, MediaQuote } from '../../components/content/CaseStudyPage'
import { ContentPage } from '../../components/content/ContentPage'
import { ContentSection } from '../../components/content/ContentSection'
import Layout from '../../components/Layout'
import { ContactPresalesSupportAction } from '../../css/components/actions/ContactPresalesSupportAction'
import { RequestDemoAction } from '../../css/components/actions/RequestDemoAction'
import { ViewDeveloperDocumentationAction } from '../../css/components/actions/ViewDeveloperDocumentationAction'

export default ((props: any) => (
    <Layout location={props.location}>
        <Helmet>
            <title>Sourcegraph Case study - Thorn</title>
            <meta name="twitter:title" content="How Thorn uses Sourcegraph to sunset legacy applications with zero downtime" />
            <meta property="og:title" content="How Thorn uses Sourcegraph to sunset legacy applications with zero downtime" />
            <meta
                name="twitter:description"
                content="Learn how Sourcegraph code search enabled Thorn to systematically sunset legacy systems, removing huge amounts of tech debt in the process."
            />
            <meta
                property="og:description"
                content="Learn how Sourcegraph code search enabled Thorn to systematically sunset legacy systems, removing huge amounts of tech debt in the process."
            />
            <meta
                name="description"
                content="Learn how Sourcegraph code search enabled Thorn to systematically sunset legacy systems, removing huge amounts of tech debt in the process."
            />
            <link rel="icon" type="image/png" href="https://about.sourcegraph.com/favicon.png" />
        </Helmet>

        <CaseStudyPage
            title="How Thorn uses Sourcegraph to sunset legacy applications with zero downtime."
            logo="/case-studies/thorn-logo.png"
        >
            <ContentSection color="white" className="pt-5 pb-3">
                <MediaQuote
                    image="/case-studies/jacob-gillespie-thorn-square.jpg"
                    quote="It was time-consuming for developers and reviewers to ensure that changes to legacy systems didn’t affect our production stability."
                    author="Thorn Software Engineer Jacob Gilesspie" />
            </ContentSection>

            <ContentSection color="white" className="col-md-6">
                <h2>Thorn's mission</h2>

                <p>Thorn builds technology to defend children from sexual abuse. Their work focuses on finding victims of child sex trafficking faster, and eliminating child sexual abuse from the internet.Thorn partners with tech companies, law enforcement, as well as other NGOs, to build products that provide the front lines with the latest technology to find the most vulnerable child victims faster.

                </p>
                <p>Thorn’s life changing work and not-for-profit status made it a simple decision to provide Sourcegraph’s enterprise features free of charge. For many children, Thorn plays a critical role in speeding up the time it takes for them to be identified and we’re proud to be supporting them with their mission.</p>

                <h2 class="pt-6 pb-3">Sunsetting deprecated systems was previously costly and risked production stability</h2>
                <p>As Thorn’s products evolved, it became difficult to trace the impact of code changes to core application components, as it was difficult to determine what code might rely on legacy architecture, risking instability and greatly increasing the demand on development and review.</p>

                <InContentBlockquote quote="It was time-consuming for developers and reviewers to ensure that changes to legacy systems didn’t affect our production stability." />

                <p>Over 9,000 officers in 38 countries rely on Thorn’s systems to identify child victims of sexual abuse. Any downtime of these services has a negative impact on Thorn’s ability to identify children globally.</p>

                <h2 class="pt-6 pb-3">Existing tooling was not sufficient</h2>

                <p>Tech debt, and the upkeep of legacy code was becoming increasingly problematic. Previous attempts, such as cloning all repositories locally and using grep to find references, were inadequate, especially when considering simultaneous development by multiple teams across many different projects, repositories, and branches.  It was costly to determine if all the different microservices were properly in sync when removing legacy application code.</p>

                <p>Sourcegraph’s multi-repository code search, was able to prove that no code referencing legacy systems exists organization-wide</p>

                <p>Thorn Software Engineer Jacob Gillespie deployed Sourcegraph and synced Thorn’s entire list of repositories within minutes.</p>

                <InContentBlockquote quote="With Sourcegraph, we could search over the contents of every repository, in any or all branches in seconds." />

                <p>Sourcegraph code search gave Thorn the ability to find references to deprecated systems. But more importantly, it proved itself to be an invaluable new part of their code review process.</p>

                <InContentBlockquote quote="In pull requests, team members would include links to Sourcegraph code search, in order to prove all references to a deprecated system had been removed. This gave the reviewer confidence that the code was safe to merge." />

                <h2 class="pt-6 pb-3">As a result, deprecated systems were taken offline without downtime.</h2>
                <p>Thorn’s developers could then systematically remove or modify deprecated systems, removing huge amounts of tech debt in the process. This benefited all areas of the architecture, including not only application code, but also build, deployment, logging, and monitoring systems—any tool that supported the deployment and uptime of the application.</p>

                <p>Modern microservice architecture makes the application deprecation process more challenging than ever. </p>

                <p>Sourcegraph’s code search enables developers and DevOps teams to find dead code, unused packages, and references to deprecated systems, organization wide across tens of thousands of repositories.</p>

                <p class="pb-6">Being able to take advantage of industry leading solutions like Sourcegraph provides critical support to Thorn’s mission. Every start-up has to make choices about when to rebuild their systems and when to move forward accruing technical debt, Thorn is no different, but here at Sourcegraph, we’re proud that our tools could be used to make the Thorn team a little more successful, a little faster.</p>
            </ContentSection>
        </CaseStudyPage>
        <ContentPage
            title="Code search and navigation"
            description="Code search helps you grok code so you can write better code more quickly. Sourcegraph's code search is used by elite software teams."
            mainActions={
                <div className="d-flex flex-column align-items-center">
                    <RequestDemoAction className="mt-3" />
                    <ContactPresalesSupportAction className="mt-3 text-light" />
                    <ViewDeveloperDocumentationAction
                        className="text-light mt-2"
                        url="https://docs.sourcegraph.com/#quickstart"
                    >
                        Documentation &amp; self-service install
                    </ViewDeveloperDocumentationAction>
                </div>
            }
        ></ContentPage>
    </Layout>
)) as React.FunctionComponent<any>
