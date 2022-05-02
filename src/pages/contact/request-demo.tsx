import { FunctionComponent } from 'react'

import { Layout, CustomerLogosSection } from '@components'
import { useHubSpot } from '@hooks'

const title = 'Sourcegraph - Schedule a Sourcegraph demo.'
const description = 'Schedule a Sourcegraph demo.'

const Contact: FunctionComponent = () => {
    useHubSpot({
        portalId: '2762526',
        formId: '310000a0-2b6b-4da2-89e9-2be930a8a298',
        targetId: 'hubspotRequestDemoForm',
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
            <div className="form-page bg-white text-dark">
                <div className="container-xl pt-5 px-5">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className="display-3 font-weight-bold">Request a demo</h1>
                            <h3 className="font-weight-light">
                                To schedule a demo with a product specialist, tell us a bit about yourself.
                            </h3>
                            <div className="mt-5">
                                <div id="hubspotRequestDemoForm" className="d-flex justify-center" />
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
