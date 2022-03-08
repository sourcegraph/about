import { FunctionComponent } from 'react'

import { Layout } from '@components'
import { useHubSpot } from '@hooks'

const title = 'Sourcegraph - Talk to a product specialist'
const description = 'Talk to a Sourcegraph product specialist. Let us know how we can help.'

const Contact: FunctionComponent = () => {
    const hubSpot = useHubSpot('2762526', '6170d9b0-fa5b-4240-9f47-f3a3aa9557c9', 'hubspotContactForm', true)

    return (
        <div
        <Layout
            className="pt-0"
            minimal={true}
            meta={{
                title,
                description,
            }}
            scripts={[
                { src: 'https://js.chilipiper.com/marketing.js' },
                { src: '//js.hsforms.net/forms/v2.js', strategy: 'beforeInteractive' },
            ]}
        >
            <div className="form-page bg-white text-dark">
                <div className="container-xl pt-5 px-5">
                    <div className="row flex-wrap-reverse">
                        <div className="col-md-6">
                            <h1 className="display-3 font-weight-bold">Talk to a product specialist</h1>
                            <h3 className="font-weight-light">Let us know how we can help. We'll follow up soon.</h3>
                            <div className="form mt-5">
                                <div id="hubspotContactForm" className="d-flex justify-center" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            {/* <CustomerLogosSection className="full-color mt-3 mb-6" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Contact
