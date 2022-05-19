import { FunctionComponent } from 'react'

import { Layout, CustomerLogos } from '@components'
import { useHubSpot, useChiliPiper } from '@hooks'

const title = 'Sourcegraph - Talk to a product specialist'
const description = 'Talk to a Sourcegraph product specialist. Let us know how we can help.'

const Contact: FunctionComponent = () => {
    useHubSpot({
        portalId: '2762526',
        formId: '6170d9b0-fa5b-4240-9f47-f3a3aa9557c9',
        targetId: 'hubspotContactForm',
    })
    useChiliPiper()

    return (
        <Layout
            className="pt-0"
            minimal={true}
            meta={{
                title,
                description,
            }}
        >
            <div className="form-page bg-white text-dark">
                <div className="container-xl pt-5 px-5">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className="display-3 font-weight-bold">Talk to a product specialist</h1>
                            <h3 className="font-weight-light">Let us know how we can help. We'll follow up soon.</h3>
                            <div className="mt-5">
                                <div id="hubspotContactForm" className="d-flex justify-center" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <CustomerLogos />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Contact
