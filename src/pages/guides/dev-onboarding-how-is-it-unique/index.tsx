import { FunctionComponent } from 'react'

import { Layout } from '@components'
import { useHubSpot } from '@hooks'

import styles from './index.module.scss'

const DevelopmentOnboardingUnique: FunctionComponent = () => {
    useHubSpot({
        portalId: '2762526',
        formId: '25249bac-6544-4f50-9fc0-559745de5334',
        targetId: 'form',
        onFormSubmitted: () => window.open('/guides/dev-onboarding-unique/sg-dev-onboarding-what-makes-it-unique.pdf'),
    })

    return (
        <Layout
            meta={{
                title: 'Developer onboarding: How is it unique? | Sourcegraph',
                description:
                    'A guide to understanding how to create a developer onboarding program that differs from general employee onboarding and creates an engaged development team.',
            }}
            hero={<div className={styles.hero} />}
            className="bg-white"
        >
            <div className="container py-lg-6 py-4">
                <div className="row">
                    <div className="col-lg-6 pr-lg-6">
                        <h3 className="display-3 mb-5">
                            Developer onboarding: What makes it unique? A guide to creating an effective developer
                            onboarding program
                        </h3>

                        <p className="mb-4">
                            Your organization’s ability to onboard new developers may be the difference between high
                            attrition rates and an engaged, productive development team. But designing effective,
                            delightful developer onboarding programs can be challenging.
                        </p>

                        <p className="mb-4">
                            Why? Developer onboarding and general employee onboarding are two distinct programs. When
                            companies don't understand how they differ, their developer onboarding experience can
                            suffer.{' '}
                            <strong>So, how can companies design a developer onboarding program that works?</strong>
                        </p>

                        <p>Download the developer onboarding guide to learn:</p>
                        <ul>
                            <li className="mb-1">
                                How developer onboarding differs from general employee onboarding, and how to offer the
                                best of both
                            </li>
                            <li className="mb-1">
                                How to build the foundational <i>and</i> exceptional components of a developer
                                onboarding program
                            </li>
                            <li className="mb-1">Examples of how 3 major tech companies onboard their developers</li>
                            <li className="mb-1">And more!</li>
                        </ul>
                    </div>

                    <div className="col-lg-6 p-5 p-lg-6 mt-5 mt-lg-0">
                        <div id="form" />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default DevelopmentOnboardingUnique
