import { FunctionComponent } from 'react'

import { Layout, CustomerLogos, HubSpotForm } from '@components'
import { useChiliPiper } from '@hooks'

const description = 'Contact us to learn more about Sourcegraph enterprise.'

const Contact: FunctionComponent = () => {
    useChiliPiper()

    return (
        <Layout
            className="pt-0"
            minimal={true}
            meta={{
                description,
            }}
        >
            <div className="form-page bg-white text-dark">
                <div className="container-xl pt-5 px-5">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className="display-3 font-weight-bold">Contact us</h1>
                            <h3 className="font-weight-light">
                                Talk with a product specialist to learn more about Sourcegraph.
                            </h3>
                            <div className="mt-5 d-flex justify-center">
                                <HubSpotForm masterFormName="demoMulti" />
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
