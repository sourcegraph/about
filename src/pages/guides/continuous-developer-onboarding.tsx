import { FunctionComponent } from 'react'

import { Layout, GatedResourceLayout, Hero } from '../../components'

export const Guide: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Guide to Developer Onboarding | Accelerate Dev Onboarding',
            description:
                'Continuous onboarding shifts traditional onboarding practices to cultivate an environment that enables developers to build themselves as flexible and resilient engineers.',
        }}
        className="bg-white"
        hero={
            <Hero
                variant="darkSimpleGrid"
                title="Continuous developer onboarding"
                subtitle="A guide to cultivating a culture of professional growth in your engineering organization"
            />
        }
    >
        <GatedResourceLayout
            title="Continuous developer onboarding"
            formLabel="Download the guide"
            resource="/guides/sg-continuous-developer-onboarding.pdf"
            description={
                <section className="col-md-6 col-12 lg:tw-pr-3xl">
                    <p>
                        Companies often define developer onboarding as a process exclusive to new hires. But developer
                        onboarding continues far past a developer's first few months. Engineers want to explore new
                        parts of a codebase, learn new skills, and build new things as they switch teams, take on new
                        features and own different parts of a codebase. Successful engineers are those who have the
                        capacity to make these transitions in a largely self-guided way; they continuously onboard.
                    </p>
                    <p>
                        How do companies set developers up to continuously onboard though? This guide describes one
                        approach that focuses on onboarding processes and an engineering culture that nourishes
                        engineers, and provides them with the flexible, supported room to develop their own learning
                        capacities.
                    </p>
                    <p>
                        <strong>Download this guide to learn:</strong>
                    </p>
                    <ul>
                        <li className="mb-1">
                            How to recontextualize traditional onboarding practices with long-term developer growth in
                            mind
                        </li>
                        <li className="mb-1">
                            How to cultivate an environment that enables developers to be flexible and resilient
                        </li>
                        <li className="mb-1">
                            How to approach people, knowledge, and tools as fundamental aspects of engineering culture
                        </li>
                    </ul>
                </section>
            }
        />
    </Layout>
)

export default Guide
