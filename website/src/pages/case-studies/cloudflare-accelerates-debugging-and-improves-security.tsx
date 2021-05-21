import * as React from 'react'
import { CaseStudyPage, InContentBlockquote, CaseStudyRequestDemoForm } from '../../components/content/CaseStudyPage'
import { ContentSection } from '../../components/content/ContentSection'
import Layout from '../../components/Layout'

const terinStock = 'Terin Stock, Systems Engineer'
const davidHaynes = 'David Haynes, Security Engineer'

export default ((props: any) => (
    <Layout
        location={props.location}
        meta={{
            title: 'Cloudflare accelerates debugging and improves security',
            description:
                'Indeed case study. Learn how Indeed keeps code up to date and accelerates development velocity',
            image: 'https://about.sourcegraph.com/sourcegraph-og.png'
        }}
        className="navbar-dark bg-black"
    >
        <CaseStudyPage
            customer="Indeed"
            title="Cloudflare accelerates debugging and improves security"
            logo="/external-logos/cloudflare-logo-vector.svg"
            quote={{
                quote:
                    'Sourcegraph is the only code search tool that natively integrates with our code and understands how our code works.',
                author: terinStock,
                image: '/case-studies/terin-stock-cloudflare.jpg',
            }}
        >
            <ContentSection color="white" className="col-md-6">
                <div className="container">
                    <p>
                        A web performance and security company, Cloudflare offers CDN, DNS, DDoS protection and security products and 
                        services to millions of customers worldwide. The company has approximately 2,000 employees, a quarter of which are 
                        engineers.
                    </p>

                    <h2 className="pt-5 pb-1">Looking for a new code search tool</h2>

                    <p>
                        Cloudflare's engineering team builds and runs the software that powers and protects approximately 25 million 
                        Internet properties around the world. When performance and security issues arise, it’s critical that Cloudflare 
                        engineers can find and fix code quickly.
                    </p>

                    <p>
                        But using their code host’s native code search functionality wasn't cutting it. For example, their code host’s 
                        native search functionality would take ASCII characters and run them through ElasticSearch. Special characters, 
                        including spaces, were completely ignored and there was no way to filter results based on file types, folder names, 
                        or code logic.
                    </p>

                    <InContentBlockquote
                        quote="We were trying to answer questions like who was using specific dependencies and different libraries and where are 
                        these lines of code or log lines coming from. We needed to be able to search thousands of repos to find them,” said 
                        Terin Stock, Systems Engineer at Cloudflare."
                        author={terinStock}
                    />

                    <p>
                        For a while, the team worked around this by cloning all the repos onto their machines and using their local system's 
                        search functionality. But with over 2,600 repositories, the process proved slow and unwieldy.
                    </p>

                    <p>
                        “It would take two days just to copy the repos onto a laptop, so I could search them,” said Stock. Meanwhile, if the 
                        code base was updated during the time it took to copy the repos, then the engineer wouldn’t be searching the latest 
                        codebase. Further, once team members cloned the repos, they wouldn’t have space left on their machine for other work.
                    </p>

                    <h2 className="pt-5 pb-1">
                        Finding Sourcegraph
                    </h2>

                    <p>
                        Stock, who was then on the Dev Tools team, and has since moved to Service Automation, knew there had to be a better 
                        solution. He discovered the open source version of Sourcegraph, a universal code search and intelligence tool for 
                        developers.
                    </p>

                    <p>
                        Sourcegraph integrates with all code repos, programming languages, and file formats. It also provides advanced code 
                        navigation features that let developers explore source code on any branch, commit, or PR.
                    </p>

                    <p>
                        "Sourcegraph is the only code search tool that natively integrates with our code and understands how our code works," 
                        said Stock. 
                    </p>

                    <h3 className="pt-5 pb-1">
                        Expanding throughout the team
                    </h3>

                    <p>
                        Once Stock downloaded and began using the open source version of Sourcegraph, he started sharing search result URLs 
                        with engineers. Soon, Sourcegraph spread organically throughout the organization and the internal DevOps team decided 
                        to deploy Sourcegraph for all Cloudflare engineers.
                    </p>

                    <p>
                        Now, with Sourcegraph universal code search, Cloudflare engineers can solve the big code problems they face every day. 
                        For example, engineers can quickly identify out-of-date code libraries by only searching certain repositories, while 
                        excluding specific file types. And it’s easier to search for error logs. As a result, the team can refactor and debug 
                        faster and feel confident they've addressed each issue.
                    </p>

                    <h3 className="pt-5 pb-1">
                        Finding and addressing security risks
                    </h3>

                    <p>
                        Sourcegraph has also become essential to how the Cloudflare security team can quickly address security risks and 
                        root-cause incidents.
                    </p>

                    <InContentBlockquote
                        quote="When a potential security issue comes up, I often have to go into another engineer’s project to quickly 
                                understand how the code works to understand the critical functions, where the data is flowing, what sort
                                of controls or checks are happening. With Sourcegraph, I can jump into another engineer’s project and 
                                quickly explore and better understand the code faster."
                        author={davidHaynes}
                    />

                    <p>
                        Another plus, according to Haynes, “it’s the best way to prove we’re not vulnerable to a particular CVE, 
                        if and when we get asked by an auditor.”
                    </p>

                    <h3 className="pt-5 pb-1">
                        Saving time, from days to minutes
                    </h3>

                    <p>
                        Whether searching for instances of a library or refactoring an entire application, it’s hard to put exact numbers 
                        on how much time the organization saves as a result of using Sourcegraph, because it’s a ‘death by a thousand 
                        paper cuts’ scenario.
                    </p>

                    <p>
                        Each time an engineer uses the tool to search and understand code, instead of cloning the repo, he or she saves 
                        time and feels more confident in the results. When you have 500 engineers searching code repos, multiple times 
                        a day, throughout each day, that’s a huge time savings.
                    </p>

                    <p>
                        In the end, it all adds up to increased developer productivity -- and better code.
                    </p>

                    <br />
                </div>
            </ContentSection>
        </CaseStudyPage>
        <CaseStudyRequestDemoForm
            demoFormURL="/contact/request-batch-changes-demo"
        />
    </Layout>
)) as React.FunctionComponent<any>
