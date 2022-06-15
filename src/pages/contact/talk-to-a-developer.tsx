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
                title: 'Sourcegraph - Talk to a Developer',
                description: 'Talk with a Sourcegraph engineer to get help with your installation.',
            }}
        >
            <div className="form-page bg-white text-dark">
                <div className="container-xl pt-5 px-5">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className="display-3 font-weight-bold">Get help with setup</h1>
                            <h3 className="font-weight-light">
                                Talk with a Sourcegraph engineer to get help with your installation.
                            </h3>
                            <div className="mt-5 d-flex justify-center">
                                <HubSpotForm formId="7e04d4f5-ce13-4125-b1d0-8f6015a520ca" />
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
