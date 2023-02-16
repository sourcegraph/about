import { FunctionComponent } from 'react'

import { Layout, HubSpotForm } from '../components'

const Uninstall: FunctionComponent = () => (
    <Layout>
        <div>
            <section className="tw-text-center tw-py-6 bg-dark text-light">
                <h1>Thank you for using Sourcegraph</h1>
            </section>
            <section className="tw-p-6 tw-mx-auto max-w-500 bg-white text-dark">
                <div className="measure-wide center">
                    <div className="tw-flex tw-flex-col tw-p-6 tw-mx-auto">
                        <h3>Why did you uninstall the Sourcegraph browser extension?</h3>
                        <p>Your feedback helps us improve the product for everyone.</p>
                        <HubSpotForm
                            formId="a1bc77c9-019c-4f83-b5ba-327949f8e587"
                            inlineMessage="Thank you for your interest in Sourcegraph. Your feedback has been received and is valuable to us!"
                        />
                    </div>
                </div>
            </section>
        </div>
    </Layout>
)

export default Uninstall
