import { FunctionComponent } from 'react'

import { Layout, GatedResourceLayout } from '@components'

export const Workshops: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph Workshops',
            description: '',
        }}
    >
        <GatedResourceLayout
            title="Sourcegraph Workshops"
            formLabel="Sign up"
            form={{
                formId: '3f61adb5-bcdc-4511-83cb-9be6a2e7a947',
            }}
            description={
                <section className="col-md-6 col-12 pr-lg-6">
                    <h3 className="font-weight-normal pb-5">
                        Coreboot + Sourcegraph Workshop:<br/>
                        July 22 <br/>1pm PT / 2pm MT / 4pm ET / 10pm CET
                    </h3>
                    <p>Join us for a workshop on how Sourcegraph can make contributing to Coreboot easier.</p>
                    <p> You'll learn:</p>
                    <ul>
                        <li> How to get access to Sourcegraph</li>
                        <li> Different search types</li>
                        <li> How to solve codebase challenges</li>
                        <li> How to use code intelligence to navigate code efficiently</li>
                        <li> How to do large-scale changes</li>
                        <li> Documenting on Notebooks</li>
                        <li> Code Insights</li>
                    </ul>
                </section>
            }
        />
    </Layout>
)

export default Workshops
