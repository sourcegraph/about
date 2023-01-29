import { FunctionComponent } from 'react'

import { Layout, GatedResourceLayout, Hero } from '../../components'

export const Guide: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'How Google and others find and fix vulnerabilities - Sourcegraph',
            description:
                'See how tech companies large and small address code security. In this post, we explore how Google, Microsoft, Lyft, GitLab, and Atlassian find and fix vulnerabilities.',
        }}
        className="bg-white"
        hero={
            <Hero
                variant="darkSimpleGrid"
                title="How Google, Microsoft, Lyft, GitLab, and Atlassian find and fix vulnerabilities"
            />
        }
    >
        <GatedResourceLayout
            title="How Google, Microsoft, Lyft, GitLab, and Atlassian find and fix vulnerabilities"
            formLabel="Download the e-book"
            resource="/guides/sg-how-companies-fix-vulnerabilities.pdf"
            description={
                <section className="col-md-6 col-12 lg:tw-pr-3xl">
                    <p>
                        Your organization's ability to find and fix vulnerabilities within the codebase has significant
                        financial implications, not to mention brand impact. Most companies have invested in security
                        scanning tools to find known vulnerabilities, but these do not help patch them quickly. They
                        also do not help mitigate zero-day vulnerabilities.
                    </p>
                    <p>
                        <strong>Download this guide to learn:</strong>
                    </p>
                    <ul>
                        <li className="mb-2">
                            How Google, Microsoft, Lyft, GitLab, and Atlassian find and fix vulnerabilities throughout
                            their respective codebases
                        </li>
                        <li className="mb-2">
                            Which capabilities are necessary to mitigate a known vulnerability quickly
                        </li>
                        <li className="mb-2">How do these companies respond to zero-day vulnerabilities</li>
                    </ul>
                </section>
            }
        />
    </Layout>
)

export default Guide
