import { FunctionComponent } from 'react'

import { Layout, GatedResourceLayout } from '@components'

export const Report: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Cool Vendors in Software Engineering: Enhancing Developer Productivity',
            description:
                'Get free access to Gartner’s 2022 Cool Vendor Report to learn how Sourcegraph and other innovative tools help engineers and engineering leaders boost developer productivity while mitigating security risks.',
        }}
    >
        <GatedResourceLayout
            title="Cool Vendors in Software Engineering: Enhancing Developer Productivity"
            customer={{
                name: 'Gartner',
                logo: '/external-logos/gartner-cool-vendor-2022.png',
            }}
            formLabel="Access the report"
            form={{
                formId: '4f5b127f-4d42-490a-a970-686574d0e542',
                onFormSubmitted: () =>
                    window.open('https://www.gartner.com/doc/reprints?id=1-2A44UTV8&ct=220524&st=sb'),
            }}
            description={
                <section className="col-md-6 col-12 pr-lg-6">
                    <h3 className="font-weight-normal pb-5">
                        Get complimentary access to the 2022 Gartner® Cool Vendors™ report.
                    </h3>
                    <p className="pb-2">
                        Learn how we believe Sourcegraph and other innovative tools help engineers and engineering leaders boost developer productivity while mitigating security risks.
                    </p>
                </section>
            }
        />
    </Layout>
)

export default Report
