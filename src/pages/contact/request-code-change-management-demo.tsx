import { FunctionComponent } from 'react'

import { Layout, CustomerLogosSection } from '@components'
import { useHubSpot } from '@hooks'

const title = 'Request a code change management demo'
const description = "We'll reach out to discuss a demo and to learn more about your needs."

const Contact: FunctionComponent = () => {
    useHubSpot({
        portalId: '2762526',
        formId: 'fd64c0d5-627e-4176-b6f4-289571f9f212',
        targetId: 'hubspotRequestCodeChangeManagementDemoForm',
        chiliPiper: false,
    })

    return (
        <Layout
            className="pt-0"
            minimal={true}
            meta={{
                title,
                description,
            }}
        >
            <div className="bg-white text-dark">
                <div className="container-lg py-6 px-5">
                    <div className="row flex-wrap-reverse">
                        <div className="col-md-6">
                            <h1 className="display-4">Request a code change management demo</h1>
                            <h3 className="font-weight-light text-sans-serif">
                                We'll reach out to discuss a demo and to learn more about your needs.
                            </h3>
                            <div className="form mt-5">
                                <div
                                    id="hubspotRequestCodeChangeManagementDemoForm"
                                    className="d-flex justify-center"
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <CustomerLogosSection className="full-color mt-3 mb-6" />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Contact
