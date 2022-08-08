import { FunctionComponent } from 'react'

import { Layout, GatedResourceLayout } from '@components'

const speakers = [
    {
        name: 'Murat Sutunc',
        title: 'Engineering Manager at Sourcegraph',
        img: '/staff/murat-sutunc.png',
        bio: 'Murat Sutunc is the Engineering Manager of the Integrations team at Sourcegraph, working towards bringing the value of Sourcegraph to all developers, everywhere they work with code, and bringing the value of other developer tools into Sourcegraph.',
    },
    {
        name: 'Emily Chapman',
        title: 'Senior Customer Training Engineer at Sourcegraph',
        img: '/staff/emily-chapman.png',
        bio: 'Emily Chapman is a Senior Customer Training Engineer at Sourcegraph, building training to empower some of today’s largest brands to solve the challenges of big code, developer velocity, and fixing vulnerabilities using Sourcegraph’s code intelligence platform.',
    },
]

export const AboveTheCodeWorkshop: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph AboveTheCode - VSCode Extension',
            description:
                'Learn all about how to leverage Sourcegraph within VSCode to search the wide universe of Open Source code right in the IDE',
        }}
    >
        <GatedResourceLayout
            title="AboveTheCode: Sourcegraph's VSCode Extension"
            subtitle="Thursday, September 8th 2022 @ 11:00AM PDT"
            formLabel="Register now!"
            resource="https://www.gartner.com/doc/reprints?id=1-2A44UTV8&ct=220524&st=sb"
            speakers={speakers}
            description={
                <section className="col-md-6 col-12 pr-lg-6">
                    <p>
                        Join Sourcegraph experts Murat Sutunc, Engineering Manager of Integrations, and Emily Chapman, Senior Customer Training Engineer, to discuss Sourcegraph’s VSCode extension. 
                    </p>
                    <p>
                        Learn all about how to leverage Sourcegraph within VSCode to search the wide universe of Open Source code right in the IDE! Murat and Emily will demonstrate how to best use the tool and end with a live Q&A. 
                    </p>
                    <p>
                        We will discuss:
                    </p>
                    <ul>
                        <li>How the Sourcegraph for VSCode extension can be used to search for code right in the editor, no local copy needed</li>
                        <li>Installing the extension</li>
                        <li>Running at least one search in VSCode for OSS Code</li>
                        <li>How to incorporate the extension into their day-to-day team programming workflow</li>
                    </ul>
                    <p>
                        Don't miss your chance to hear from our engineering experts in this edition of AboveTheCode! 
                    </p>
                </section>
            }
        />
    </Layout>
)

export default AboveTheCodeWorkshop
