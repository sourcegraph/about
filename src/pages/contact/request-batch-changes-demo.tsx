import { FunctionComponent } from 'react'

import { Layout, CustomerLogosSection } from '@components'
import { useHubSpot } from '@hooks'

const title = 'Sourcegraph - Schedule a Batch Changes demo.'
const description = 'Learn how you can automate large-scale code changes with Sourcegraph Batch Changes.'

const Contact: FunctionComponent = () => {
    useHubSpot({
        portalId: '2762526',
        formId: 'c98d6435-f0fc-4b34-8cff-cfe7633121c8',
        targetId: 'hubspotRequestBatchChangesDemo',
        chiliPiper: true,
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
                            <h3 className="font-weight-light">{description}</h3>
                            <div className="form mt-5">
                                <div id="hubspotRequestBatchChangesDemo" className="d-flex justify-center" />
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
