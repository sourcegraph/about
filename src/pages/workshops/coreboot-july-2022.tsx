import { FunctionComponent } from 'react'

import { Layout, GatedResourceLayout } from '@components'

export const Workshops: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Coreboot + Sourcegraph Workshop',
            description: 'Learn how to use Sourcegraph to facilitate your contributions to Coreboot',
        }}
    >
        <GatedResourceLayout
            title="Coreboot + Sourcegraph Workshop"
            formLabel="Save a spot or receive the recording 📽️"
            form={{
                formId: '3f61adb5-bcdc-4511-83cb-9be6a2e7a947',
            }}
            description={
                <section className="col-md-6 col-12 pr-lg-6">
                    <h4 className="pb-5">
                        July 26, 8am PT / 11pm ET / 5pm CET
                    </h4>
                    <p>Sourcegraph is a code intelligence platform that unlocks developer velocity by helping engineering teams understand, fix, and automate across their entire codebase.</p>

                    <ul>
                        <li>Understand: Understand your entire codebase. Search and find whatever you need instantly and visualize trends across your entire codebase.</li>
                        <li>Fix: Secure vulnerabilities and resolve incidents faster.</li>
                        <li>Automate: Automate key workflows and reduce repetitive work.</li>
                    </ul>
                    <p>Join us for a workshop on how Sourcegraph can make contributing to Coreboot easier.</p>
                    <p>You'll learn:</p>
                    <ul>
                        <li>How to get access to Sourcegraph</li>
                        <li>Different search types</li>
                        <li>How to solve codebase challenges</li>
                        <li>How to use code intelligence to navigate code efficiently</li>
                        <li>How to do large-scale changes</li>
                        <li>Documenting on Notebooks</li>
                        <li>Code Insights</li>
                    </ul>
                </section>
            }
        />
    </Layout>
)

export default Workshops
