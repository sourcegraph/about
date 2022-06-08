import { FunctionComponent } from 'react'

import Link from 'next/link'

import { Layout, GatedResourceLayout, ContentSection } from '@components'
import { buttonStyle, buttonLocation } from '@data'

export const speakers = [
    {
        name: 'Joel Kwartler',
        title: 'Sourcegraph Product Manager, Code Insights',
        img: '/staff/joel-kwartler.png',
        bio: 'Joel is the Product Manager for Code Insights at Sourcegraph, and wants to bring the best practices of big data to the problems of big code. Joel has bounced around the startup + design world at places like Figma and IDEO, and got a bachelor’s in C.S. at Harvard. After hours, you might find him doing stand up, pretending he knows piano, or waking up way too early to take photographs. He’s made the Forbes 30 Under 30 List of Best Joel Kwartlers for 5 of the past 8 years.',
    },
    {
        name: 'Shawn King',
        title: 'Sourcegraph Customer Engineer',
        img: '/staff/shawn-king.png',
        bio: 'Shawn is a customer engineer at Sourcegraph. He has helped people use technology to get insights into their work his entire career. Coming from Microsoft and a startup called Intelligent InSites, Shawn has been able to support and provide metrics to many customers across different industries. Between the times when he’s helping customers, you can catch Shawn reading science fiction and enjoying time with his family.',
    },
]

const Recording: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph Code Insights: Turning Metrics into Action',
            description:
                'Join Sourcegraph Product Manager Joel Kwartler and Customer Engineer Shawn King to learn how to use Code Insights to turn your most pressing analytics questions into KPIs you can track with mere seconds of setup.',
        }}
    >
        <GatedResourceLayout
            title={
                <>
                    Sourcegraph Code Insights:
                    <br /> Turning Metrics into Action
                </>
            }
            subtitle="How to track what really matters to you and your team"
            speakers={speakers}
            videoSrc="https://www.youtube.com/embed/dXKvetMozB0"
            learnMoreCTA={
                <ContentSection className="d-flex flex-column align-items-center py-lg-8 py-7">
                    <h1 className="font-weight-bold text-center">Want to learn more about Code Insights?</h1>
                    <Link href="/contact/request-code-insights-demo" passHref={true}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a
                            className="btn btn-primary mt-4 col-12 col-md-3 col-xl-2"
                            title="Request a Demo"
                            data-button-style={buttonStyle.primary}
                            data-button-location={buttonLocation.trySourcegraph}
                            data-button-type="cta"
                        >
                            Request a demo
                        </a>
                    </Link>
                </ContentSection>
            }
        />
    </Layout>
)

export default Recording
