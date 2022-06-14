import { FunctionComponent } from 'react'

import { Layout, CustomerLogos, HubSpotForm } from '@components'

const title = 'Request a code change management demo'
const description = "We'll reach out to discuss a demo and to learn more about your needs."

const Contact: FunctionComponent = () => (
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
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="display-4">Request a code change management demo</h1>
                        <h3 className="font-weight-light font-sans">
                            We'll reach out to discuss a demo and to learn more about your needs.
                        </h3>
                        <div className="mt-5">
                            <div className="d-flex justify-center">
                                <HubSpotForm masterFormName="demoMulti" />
                            </div>
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

export default Contact
