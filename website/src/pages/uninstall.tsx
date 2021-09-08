import * as React from 'react'
import Layout from '../components/Layout'

export default class Uninstall extends React.Component<any, any> {
    public componentDidMount(): void {
        const script = document.createElement('script')
        script.src = '//js.hsforms.net/forms/v2.js'
        const hubspot = document.getElementById('hubspotEditorForm')
        hubspot.appendChild(script)
        script.addEventListener('load', () => {
            ;(window as any).hbspt.forms.create({
                portalId: '2762526',
                formId: 'a1bc77c9-019c-4f83-b5ba-327949f8e587',
                target: '#hubspotEditorForm',
            })
        })
    }

    public render(): JSX.Element | null {
        return (
            <Layout location={this.props.location}>
                <div className="uninstall content-page">
                    <section className="uninstall__header bg-dark text-light">
                        <h1>Thank you for using Sourcegraph</h1>
                    </section>
                    <section className="uninstall__body bg-white text-dark">
                        <div className="measure-wide center">
                            <div className="uninstall__form">
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
}
