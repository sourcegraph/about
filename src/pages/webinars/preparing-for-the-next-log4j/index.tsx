import { FunctionComponent } from 'react'

import { useRouter } from 'next/router'

import { Layout, GatedResourceLayout } from '@components'

import { speakers } from './watch-now'

const Webinar: FunctionComponent = () => {
    const router = useRouter()

    return (
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
                formLabel="Watch the on-demand webinar"
                form={{
                    formId: 'abb86998-1a6a-4cfd-9888-ffba09c850c9',
                    onFormSubmitted: () =>
                        router.push('/webinars/code-insights-turning-your-metrics-into-action/watch-now'),
                }}
                description={
                    <section className="col-md-6 col-12 pr-lg-6">
                        <p>
                            For Nutanix, when 20,000+ of the world's most advanced data centers rely on your company's
                            software, any security vulnerability is a concern. But when the Log4j vulnerability hit, rated
                            as a 10/10 on the CVSS scale, the Nutanix team knew it had to act fast. "The more we dug, the
                            more we realized this bug was everywhere and nowhere at the same time," said Nutanix Technical
                            Director of Solution Engineering, Jon Kohler.
                        </p>
                        <p>
                            So how did Nutanix rise to the challenge of creating a cohesive response across the org's
                            multiple teams to quickly fix the Log4j vulnerability?
                        </p>
                        <p>
                            Hear firsthand from Jon Kohler, Nutanix Technical Director of Solution Engineering, about how he
                            and his team quickly identified and remediated every instance of Log4j, transforming a threat to
                            customer trust into an opportunity to strengthen it.
                        </p>
                        <p>In this session, you’ll learn:</p>
                        <ul>
                            <li className="mb-2">
                                How Jon enabled his team to confidently find & fix every instance of Log4j across a
                                sprawling codebase in under 4 days
                            </li>
                            <li className="mb-2">
                                How this experience led to a renewed trust in Nutanix's vulnerability remediation for
                                management and customers
                            </li>
                            <li className="mb-2">Best practices to prepare for the next security vulnerability</li>
                        </ul>
                    </section>
                }
            />
        </Layout>
    )
}

export default Webinar
