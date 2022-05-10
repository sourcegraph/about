import * as React from 'react'

import { PageProps } from 'gatsby'
import Layout from '../../components/Layout'
import WebinarLayout from '../../components/WebinarLayout'

const threeUpTextItems = [
    {
        subtitle: <h4 className="pb-3 mx-auto max-w-300 font-weight-bold text-curious-blue">{'<'} 5 min</h4>,
        description:
            'Nutanix was able to see where JMSAppender existed, fix it, and send out a release in less than 5 minutes.',
    },
    {
        subtitle: <h4 className="pb-3 mx-auto max-w-300 font-weight-bold text-curious-blue">4 days</h4>,
        description:
            'Nutanix was able to deliver patches to its customers that fully remediated the Log4j vulnerability.',
    },
    {
        subtitle: <h4 className="pb-3 mx-auto max-w-300 font-weight-bold text-curious-blue">100% confidence</h4>,
        description: 'Nutanix was able to confidently identify every instance of Log4j across its sprawling codebase.',
    },
]

export const Webinar: React.FunctionComponent<PageProps> = props => (
    <Layout
        location={props.location}
        meta={{
            title: '[On-Demand Webinar] Learn how Nutanix remediated Log4j in 4 days',
            description: 'On-Demand Webinar. Learn how Nutanix uses Sourcegraph to find and fix security vulnerabilities quickly across their code base.',
            image: 'https://about.sourcegraph.com/sourcegraph-og.png',
        }}
    >
        <WebinarLayout
            title="Preparing for the Next Log4j"
            subtitle="How Nutanix Remediated the Vulnerability in 4 Days"
            customer={{
                name: 'Nutanix',
                logo: '/external-logos/nutanix-logo.svg',
                href: 'https://nutanix.com',
            }}
            description={
                <body className="bg-white col-6">
                    <p>
                        For Nutanix, when 20,000+ of the world's most advanced data centers rely on your company's software, any security vulnerability is a concern. But when the Log4j vulnerability hit, rated as a 10/10 on the CVSS scale, the Nutanix team knew it had to act fast. "The more we dug, the more we realized this bug was everywhere and nowhere at the same time," said Nutanix Technical Director of Solution Engineering, Jon Kohler.
                    </p>
                    <p>
                        So how did Nutanix rise to the challenge of creating a cohesive response across the org's multiple teams to quickly fix the Log4j vulnerability?
                    </p>
                    <p>
                        Hear firsthand from Jon Kohler, Nutanix Technical Director of Solution Engineering, about how he and his team quickly identified and remediated every instance of Log4j, transforming a threat to customer trust into an opportunity to strengthen it.
                    </p>
                    <p>
                        In this session, you’ll learn:
                    </p>
                    <ul>
                        <li>How Jon enabled his team to confidently find & fix every instance of Log4j across a sprawling codebase in under 4 days</li>
                        <li>How this experience led to a renewed trust in Nutanix's vulnerability remediation for management and customers</li>
                        <li>Best practices to prepare for the next security vulnerability</li>
                    </ul>
                </body>
            }
        >
        </WebinarLayout>
    </Layout>
)

export default Webinar
