import { FunctionComponent } from 'react'

import { Layout } from '@components'
import { useHubSpot } from '@hooks'

import styles from './index.module.scss'

const ContinuousDeveloperOnboarding: FunctionComponent = () => {
    useHubSpot({
        portalId: '2762526',
        formId: '35e18409-5be7-4fcb-aa57-8152b34eef66',
        targetId: 'form',
        chiliPiper: false,
        onFormSubmitted: () => window.open('/guides/dev-onboarding/sg-continuous-developer-onboarding.pdf'),
    })

    return (
        <Layout
            meta={{
                title: 'Guide to Developer Onboarding | Accelerate Dev Onboarding',
                description:
                    'Continuous onboarding shifts traditional onboarding practices to cultivate an environment that enables developers to build themselves as flexible and resilient engineers.',
            }}
            hero={<div className={styles.hero} />}
            className="bg-white"
        >
            <div className="container py-lg-6 py-4">
                <div className="row">
                    <div className="col-lg-6 pr-lg-6">
                        <h3 className="display-3 mb-5">
                            Continuous developer onboarding: A guide to cultivating a culture of professional growth in
                            your engineering organization
                        </h3>

                        <p className="mb-4">
                            Companies often define developer onboarding as a process exclusive to new hires. But
                            developer onboarding continues far past a developer's first few months. Engineers want to
                            explore new parts of a codebase, learn new skills, and build new things as they switch
                            teams, take on new features and own different parts of a codebase. Successful engineers are
                            those who have the capacity to make these transitions in a largely self-guided way; they
                            continuously onboard.
                        </p>

                        <p className="mb-4">
                            How do companies set developers up to continuously onboard though? This guide describes one
                            approach that focuses on onboarding processes and an engineering culture that nourishes
                            engineers, and provides them with the flexible, supported room to develop their own learning
                            capacities.
                        </p>

                        <p>Download this guide to learn:</p>
                        <ul>
                            <li className="mb-1">
                                How to recontextualize traditional onboarding practices with long-term developer growth
                                in mind
                            </li>
                            <li className="mb-1">
                                How to cultivate an environment that enables developers to be flexible and resilient
                            </li>
                            <li className="mb-1">
                                How to approach people, knowledge, and tools as fundamental aspects of engineering
                                culture
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-6 p-6 mt-5 mt-lg-0">
                        <div id="form" />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ContinuousDeveloperOnboarding
