import { FunctionComponent } from 'react'

import Link from 'next/link'

import { Layout, GatedResourceLayout, ContentSection } from '@components'
import { buttonStyle, buttonLocation } from '@data'

export const speakers = [
    {
        name: 'Jon Kohler',
        title: 'Technical Director of Solution Engineering at Nutanix',
        img: '/case-studies/jon-kohler.png',
        bio: 'Jon is a leader in the Solutions Engineering practice at Nutanix. His team covers a variety of full-stack technical solutions, focusing on both Big Data and Healthcare solutions.',
    },
    {
        name: 'Mike McLaughlin',
        title: 'Principle Customer Engineer at Sourcegraph',
        img: '/case-studies/mike-mclaughlin.png',
        bio: 'Mike is a Principal Customer Engineer at Sourcegraph working with some of today’s largest brands to solve the challenges of big code, developer velocity, and fixing vulnerabilities.',
    },
]

const Recording: FunctionComponent = () => (
    <Layout
        meta={{
            title: '[On-Demand Webinar] Learn how Nutanix remediated Log4j in 4 days',
            description:
                'On-Demand Webinar. Learn how Nutanix uses Sourcegraph to find and fix security vulnerabilities quickly across their code base.',
        }}
    >
        <GatedResourceLayout
            title="Preparing for the Next Log4j"
            subtitle="How Nutanix Remediated the Vulnerability in 4 Days"
            speakers={speakers}
            customer={{
                name: 'Nutanix',
                logo: '/external-logos/nutanix-logo.svg',
            }}
            videoSrc="https://storage.googleapis.com/sourcegraph-assets/webinars/nutanix-remediated-log4j.mp4"
            learnMoreCTA={
                <ContentSection className="d-flex flex-column align-items-center py-lg-8 py-7">
                    <h1 className="font-weight-bold text-center">Interesting in learning more?</h1>
                    <Link href="/case-studies/nutanix-fixed-log4j-with-sourcegraph" passHref={true}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a
                            className="btn btn-primary mt-4 col-12 col-md-5 col-xl-3"
                            title="Read the Nutanix Case Study"
                            data-button-style={buttonStyle.primary}
                            data-button-location={buttonLocation.caseStudy}
                            data-button-type="cta"
                        >
                            Read the Nutanix Case Study
                        </a>
                    </Link>
                </ContentSection>
            }
        />
    </Layout>
)

export default Recording
