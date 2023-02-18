import { FunctionComponent } from 'react'

import { Layout, HubSpotForm } from '../components'

const Uninstall: FunctionComponent = () => (
    <Layout>
        <div>
            <section className="bg-black py-6 text-center text-white">
                <h1>Thank you for using Sourcegraph</h1>
            </section>
            <section className="mx-auto max-w-[500px] bg-white p-6 text-black">
                <div className="measure-wide center">
                    <div className="mx-auto flex flex-col p-6">
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
