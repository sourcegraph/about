import { FunctionComponent } from 'react'

import { Layout, GatedResourceLayout, Hero } from '../../components'

const speakers = [
    {
        name: 'Murat Sutunc',
        title: 'Engineering Manager at Sourcegraph',
        img: '/staff/murat-sutunc.png',
        bio: 'Murat Sutunc is the Engineering Manager of the Integrations team at Sourcegraph, working towards bringing the value of Sourcegraph to all developers, everywhere they work with code, and bringing the value of other developer tools into Sourcegraph.',
    },
    {
        name: 'Max Wiederholt',
        title: 'Customer Engineer at Sourcegraph',
        img: '/staff/max-wiederholt.png',
        bio: "Max Wiederholt is a customer engineer at Sourcegraph based in San Francisco, CA, where he helps developers better understand complex codebases. Prior to Sourcegraph, Max worked on Google's developer relations team, Confluent's sales team, and founded Mischief.app, an online marketplace for independent filmmakers.",
    },
]

export const AboveTheCodeWorkshop: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph AboveTheCode - VSCode Extension',
            description:
                'Learn all about how to leverage Sourcegraph within VSCode to search the wide universe of Open Source code right in the IDE',
        }}
        hero={
            <Hero
                variant="darkSimpleGrid"
                title="AboveTheCode: Sourcegraph's VSCode Extension"
                subtitle="Thursday, September 8th 2022 @ 11:00AM PDT"
            />
        }
    >
        <GatedResourceLayout
            title="AboveTheCode: Sourcegraph's VSCode Extension"
            speakers={speakers}
            formLabel="Register now!"
            demioForm={{
                formId: 'EPKkjeZ8F5wZT6sQ',
                formClassName: 'demio-embed-registration',
                buttonText: 'REGISTER',
            }}
            description={
                <section>
                    <p>
                        Join Sourcegraph experts Murat Sutunc, Engineering Manager of Integrations, and Max Wiederholt,
                        Customer Engineer, to discuss Sourcegraph’s VSCode extension.
                    </p>
                    <p>
                        Learn all about how to leverage Sourcegraph within VSCode to search the wide universe of Open
                        Source code right in the IDE! Murat and Max will demonstrate how to best use the tool and end
                        with a live Q&A.
                    </p>
                    <p>We will discuss:</p>
                    <ul>
                        <li>
                            How the Sourcegraph for VSCode extension can be used to search for code right in the editor,
                            no local copy needed
                        </li>
                        <li>Installing the extension</li>
                        <li>Running at least one search in VSCode for OSS Code</li>
                        <li>How to incorporate the extension into their day-to-day team programming workflow</li>
                    </ul>
                    <p>Don't miss your chance to hear from our engineering experts in this edition of AboveTheCode!</p>
                </section>
            }
        />
    </Layout>
)

export default AboveTheCodeWorkshop
