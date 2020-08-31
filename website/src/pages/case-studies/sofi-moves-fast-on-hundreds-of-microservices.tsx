import * as React from 'react'
import { CaseStudyPage, CaseStudyRequestDemoForm } from '../../components/content/CaseStudyPage'
import { ContentSection } from '../../components/content/ContentSection'
import Layout from '../../components/Layout'

export default ((props: any) => (
    <Layout
        location={props.location}
        meta={{
            title: 'SoFi manages hundreds of microservices',
            description:
                'With Sourcegraph, SoFi can innovate and move quickly while keeping up with hundreds of microservices.',
            image: '/case-studies/sofi-sourcegraph-case-study-og-embed.png',
        }}
        className="navbar-dark bg-black"
    >
        <CaseStudyPage
            customer="SoFi"
            title="SoFi manages hundreds of microservices"
            logo="/external-logos/sofi-logo-white.png"
            quote={{
                quote:
                    'Sourcegraph is an ingrained part of my daily process at SoFi. With Sourcegraph, our engineers can understand all of the repercussions of committing a change to a service that is exposed to other services.',
                author: 'Ursula Robertson, Engineering Manager, SoFi',
                image: '/case-studies/ursula-robertson-sofi.jpg',
            }}
            pdf="https://sourcegraphstatic.com/sofi_case_study.pdf"
        >
            <ContentSection color="white" className="col-md-6">
                <div className="container">
                    <p>
                        SoFi (Social Finance Inc.) helps its over 900,000 members achieve financial independence to
                        realize their ambitions with products for borrowing, saving, spending, investing, and protecting
                        their money. With Sourcegraph, SoFi can innovate and move quickly while keeping up with hundreds
                        of microservices.
                    </p>
                    <h2 className="pt-5 pb-1">The need for cross-repository code search</h2>
                    <p>
                        When SoFi decided to switch their code host from Bitbucket to GitLab they quickly realized they
                        would need a more powerful code search tool to search over their hundreds of repositories. They
                        also saw an increase in issues due to overlooked code interdependencies when newer engineers
                        committed their code changes. The need for fast and accurate code search and cross-repository
                        code navigation led the engineering team to install Sourcegraph. As a FinTech company that
                        contains highly sensitive data from their customers, SoFi emphasizes on security and appreciated
                        Sourcegraph’s <a href="/blog/from-saas-to-on-premises">on-prem solution</a>.
                    </p>
                    <h2 className="pt-5 pb-1">Move fast and don’t break things</h2>
                    <p>
                        As a financial institution, SoFi needs to avoid downtime—but they also need to continuously
                        innovate to compete. SoFi runs hundreds of microservices. Their fast growth makes it difficult
                        to maintain a complete list of the published APIs showing the interdependencies of their
                        services. A common use case for Sourcegraph is to find which microservice is referenced by
                        another. This ability safeguards against breaking production with code changes and avoids code
                        duplications. SoFi’s codebase is updated hundreds of times a day making Sourcegraph’s real time
                        code investigation features with “go to definition” and “find all references” across all
                        microservices indispensable for SoFi engineers’ daily coding activities, mentoring and stack
                        trace investigations. With Sourcegraph, SoFi engineers fully understand the scope and breadth of
                        how their code changes impact other microservices.
                    </p>
                    <br />
                </div>
            </ContentSection>
        </CaseStudyPage>
        <CaseStudyRequestDemoForm />
    </Layout>
)) as React.FunctionComponent<any>
