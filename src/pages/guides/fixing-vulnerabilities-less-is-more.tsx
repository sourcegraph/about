import { FunctionComponent } from 'react'

import { Layout, GatedResourceLayout, Hero } from '../../components'

export const Guide: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Finding & fixing security vulnerabilities | Less is More',
            description:
                'When finding security vulnerabilities, simplicity is key. Learn how to decrease recovery time with a single search by improving tooling and processes.',
        }}
        hero={
            <Hero
                variant="darkSimpleGrid"
                title="Find and fix security vulnerabilities in the pursuit of healthy code"
            />
        }
    >
        <GatedResourceLayout
            title="Find and fix security vulnerabilities in the pursuit of healthy code"
            formLabel="Download the guide"
            resource="/guides/fixing-vulnerabilities-less-is-more.pdf"
            description={
                <section>
                    <p>
                        When your company first got word of Log4j and the Log4Shell vulnerability, did you have the
                        tools in place to immediately fix it across every line of code in your organization? When the
                        next vulnerability of that scale emerges (and it’s <i>when</i>, not <i>if</i> ), will you be
                        ready?
                    </p>
                    <p>
                        Log4j made it clear that organizations need a new approach to prepare for the next inevitable
                        vulnerability of that scale.
                    </p>
                    <p>
                        In the “<strong>Less is more: Finding and fixing security vulnerabilities</strong>” guide, we
                        recommend a simple approach to finding and fixing security vulnerabilities that can complement
                        more common, more complex strategies. We use Log4j as a case study of the limits that come from
                        relying on complex security tools, especially security scanners. We’ll present the case for
                        using a “less is more” approach in the pursuit of vulnerabilities.
                    </p>
                    <p>
                        Download “<strong>Less is more: Finding and fixing security vulnerabilities</strong>” to learn:
                    </p>
                    <ul>
                        <li className="mb-2">How simplicity complements complexity in the pursuit of code security</li>
                        <li className="mb-2">
                            What today’s code security ecosystem lacks and what that means for your business
                        </li>
                        <li className="mb-2">
                            The suite of tools you need to find and fix vulnerabilities with confidence
                        </li>
                        <li className="mb-2">The benefits of pairing code search with security scanners</li>
                    </ul>
                </section>
            }
        />
    </Layout>
)

export default Guide
