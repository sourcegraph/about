import { FunctionComponent } from 'react'

import Link from 'next/link'

import { Layout, CaseStudyLayout, ContentSection } from '../../components'
import { buttonStyle, buttonLocation } from '../../data/tracking'

export const CaseStudy: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'SoFi manages hundreds of microservices',
            description:
                'Sourcegraph case study: With Sourcegraph, SoFi can innovate and move quickly while keeping up with hundreds of microservices.',
        }}
        headerColorTheme="dark"
    >
        <CaseStudyLayout
            customer="SoFi"
            title="SoFi manages hundreds of microservices"
            logo="/external-logos/sofi-logo-white.png"
            quote={{
                text: 'Sourcegraph is an ingrained part of my daily process at SoFi. With Sourcegraph, our engineers can understand all of the repercussions of committing a change to a service that is exposed to other services.',
                author: 'Engineering Manager, SoFi',
                image: '',
            }}
            pdf="https://sourcegraphstatic.com/sofi_case_study.pdf"
        >
            <ContentSection background="white" slimWidth={true}>
                <p>
                    SoFi (Social Finance Inc.) helps its over 900,000 members achieve financial independence to realize
                    their ambitions with products for borrowing, saving, spending, investing, and protecting their
                    money. With Sourcegraph, SoFi can innovate and move quickly while keeping up with hundreds of
                    microservices.
                </p>
                <h2 className="pt-md pb-1">The need for cross-repository code search</h2>
                <p>
                    When SoFi decided to switch their code host from Bitbucket to GitLab they quickly realized they
                    would need a more powerful code search tool to search over their hundreds of repositories. They also
                    saw an increase in issues due to overlooked code interdependencies when newer engineers committed
                    their code changes. The need for fast and accurate code search and cross-repository code navigation
                    led the engineering team to install Sourcegraph. As a FinTech company that contains highly sensitive
                    data from their customers, SoFi emphasizes on security and appreciated Sourcegraph's{' '}
                    <Link
                        href="/blog/from-saas-to-on-premises"
                        title="on-prem solution"
                        data-button-style={buttonStyle.text}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                    >
                        on-prem solution
                    </Link>
                    .
                </p>
                <h2 className="pt-md pb-1">Move fast and don't break things</h2>
                <p>
                    As a financial institution, SoFi needs to avoid downtime—but they also need to continuously innovate
                    to compete. SoFi runs hundreds of microservices. Their fast growth makes it difficult to maintain a
                    complete list of the published APIs showing the interdependencies of their services. A common use
                    case for Sourcegraph is to find which microservice is referenced by another. This ability safeguards
                    against breaking production with code changes and avoids code duplications. SoFi's codebase is
                    updated hundreds of times a day making Sourcegraph's real time code investigation features with “go
                    to definition” and “find all references” across all microservices indispensable for SoFi engineers'
                    daily coding activities, mentoring and stack trace investigations. With Sourcegraph, SoFi engineers
                    fully understand the scope and breadth of how their code changes impact other microservices.
                </p>
                <br />
            </ContentSection>
        </CaseStudyLayout>
    </Layout>
)

export default CaseStudy
