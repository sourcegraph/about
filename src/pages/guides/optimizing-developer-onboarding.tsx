import { FunctionComponent } from 'react'

import { Layout, GatedResourceLayout, Hero } from '../../components'

export const Guide: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Optimizing developer onboarding: Lessons learned and secrets to success from 31 companies and open source projects',
            description:
                'Learn about challenges open source projects and private companies face onboarding developers and best practices to onboard new developers more effectively.',
        }}
        hero={
            <Hero
                variant="darkSimpleGrid"
                title="Optimizing developer onboarding"
                subtitle="Lessons learned and secrets to success from 31 companies and open source projects"
            />
        }
    >
        <GatedResourceLayout
            title="Optimizing developer onboarding"
            formLabel="Download the guide"
            resource="/guides/optimizing-developer-onboarding.pdf"
            description={
                <section>
                    <p>
                        What are the processes and tools that make for a successful developer onboarding program? We
                        surveyed 31 open source maintainers and project leads to understand the impact and intricacies
                        of great developer onboarding.
                    </p>
                    <p>
                        In this report, we'll dig into the challenges open source projects and private companies face
                        when they're onboarding new developers and share best practices you can adopt to improve
                        developer experience, speed up time to first commit, and increase the overall satisfaction with
                        your onboarding process.
                    </p>
                    <p>Download this guide to learn:</p>
                    <ul>
                        <li className="mb-2">
                            How companies and open source projects are handling developer onboarding
                        </li>
                        <li className="mb-2">
                            Why open source projects can serve as a model for effective remote onboarding
                        </li>
                        <li className="mb-2">
                            What the three pillars of a successful developer onboarding experience are
                        </li>
                    </ul>
                </section>
            }
        />
    </Layout>
)

export default Guide
