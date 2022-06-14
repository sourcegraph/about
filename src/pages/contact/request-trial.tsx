import { FunctionComponent } from 'react'

import { Layout, CustomerLogos, HubSpotForm } from '@components'
import { useChiliPiper } from '@hooks'

const Contact: FunctionComponent = () => {
    useChiliPiper()

    return (
        <Layout
            className="pt-0"
            minimal={true}
            meta={{
                description: 'Get your team started with a free trial of Sourcegraph.',
            }}
        >
            <div className="form-page bg-white text-dark">
                <div className="container-xl pt-5 px-5">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className="display-3 font-weight-bold">Sign up for a free trial</h1>
                            <h3 className="font-weight-light">
                                To start your free Sourcegraph trial, tell us a bit about yourself.
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
