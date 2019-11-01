import * as React from 'react'
import {
    CaseStudyPage,
    InContentBlockquote,
    MediaQuote,
    CaseStudyRequestDemoForm,
} from '../../components/content/CaseStudyPage'
import { ContentPage } from '../../components/content/ContentPage'
import { ContentSection } from '../../components/content/ContentSection'
import Layout from '../../components/Layout'
import { RequestDemoAction } from '../../css/components/actions/RequestDemoAction'

export default ((props: any) => (
    <Layout
        location={props.location}
        meta={{
            title:
                'How Sourcegraph ensured production stability at Lyft during their monolith to microservices decomposition',
            description:
                'Learn how Sourcegraph code search helped Lyft ensured (largely) issue free production deploys during their monolith to microservices decomposition',
            image:
                "/case-studies/lyft-sourcegraph-case-study-og-embed.jpg', // TODO: Change to absolute URL prior to merging",
        }}
    >
        <CaseStudyPage
            customer="Lyft"
            title="How Sourcegraph ensured production stability at Lyft during their monolith to microservices decomposition"
            // OTHER TITLES
            // How Sourcegraph helped ensure production stability during the monolith to microservices decomposition
            // Monolith to microservices decomposition and how code search helped ensure production stability
            // How Sourcegraph ensured production stability at Lyft during their monolith to microservices decomposition
            // Ensuring production stability at Lyft during their monolith to microservices decomposition
            logo="/case-studies/lyft-logo.png"
            pdf="LYFT_PDF_URL"
        >
            <ContentSection color="white" className="pt-5 pb-3">
                <MediaQuote
                    image="/case-studies/justin-phillips-lyft-square.jpg"
                    quote="Sourcegraph code search helped ensure production stability throughout the monolith to microservices decomposition by verifying applications were no longer pointing at the monolith version of a service."
                    author="Justin Phillips, Software Engineer, Lyft"
                />
            </ContentSection>

            <ContentSection color="white" className="col-md-6">
                <div className="container">
                    <p>
                        Lyft's mission is to improve people's lives with the world's best transportation. With over 30
                        million riders in 2018, Lyft's business is growing, as is the number of engineers, repositories,
                        and microservices. Effectively scaling and managing a large engineering organization requires an
                        elite set of development tools and practices to preserve efficiency, while protecting and
                        enhancing code quality.
                    </p>

                    <InContentBlockquote
                        quote="Decomposition or migrating a service is a high risk endeavor, often involving changes in
hundreds of repositories, so a high level of accuracy is needed."
                        author="Justin Phillips, Software Engineer, Lyft"
                    />

                    <p>
                        Read on to learn how Lyft used Sourcegraph code search to provide a company wide verification
                        stage to confirm all call sites to previous monolith code had been updated before deploying to
                        production.
                    </p>

                    <h2 className="pt-5 pb-1">HEADING</h2>
                    <p>content</p>

                    <InContentBlockquote quote="QUOTE" author="AUTHOR" />

                    <InContentBlockquote quote="QUOTE" author="AUTHOR" />
                </div>
            </ContentSection>
        </CaseStudyPage>
        <CaseStudyRequestDemoForm />

        {/*<ContentPage*/}
        {/*    title="Sourcegraph can boost any company-wide transition from monolith to microservices"*/}
        {/*    description="Sourcegraph’s code search enables developers and DevOps teams to find dead code, unused packages, and references to deprecated systems, organization-wide across tens of thousands of repositories."*/}
        {/*    mainActions={*/}
        {/*        <div className="d-flex flex-column align-items-center">*/}
        {/*            <RequestDemoAction className="mt-3" />*/}
        {/*        </div>*/}
        {/*    }*/}
        {/*/>*/}
    </Layout>
)) as React.FunctionComponent<any>
