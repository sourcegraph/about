import { FunctionComponent } from 'react'

import { Layout } from '@components'
import { useHubSpot } from '@hooks'

const Uninstall: FunctionComponent = () => {
    useHubSpot({
        portalId: '2762526',
        formId: 'a1bc77c9-019c-4f83-b5ba-327949f8e587',
        targetId: 'hubspotEditorForm',
    })

    return (
        <Layout>
            <div>
                <section className="text-center py-4 bg-dark text-light">
                    <h1>Thank you for using Sourcegraph</h1>
                </section>
                <section className="p-4 mx-auto max-w-500 bg-white text-dark">
                    <div className="measure-wide center">
                        <div className="d-flex flex-column p-4 mx-auto">
                            <h3>Why did you uninstall the Sourcegraph browser extension? </h3>
                            <p>Your feedback helps us improve the product for everyone.</p>
                            <div id="hubspotEditorForm" />
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default Uninstall
