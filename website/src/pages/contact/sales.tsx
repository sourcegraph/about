import { Link } from 'gatsby'
import * as React from 'react'
import Layout from '../../components/Layout'
import { eventLogger } from '../../EventLogger'

export default class Trial extends React.Component<any, any> {
    public componentDidMount(): void {
        const script = document.createElement('script')
        script.src = '//js.hsforms.net/forms/v2.js'
        const hubspot = document.getElementById('hubspotTrialForm')
        hubspot.appendChild(script)
        script.addEventListener('load', () => {
            ;(window as any).hbspt.forms.create({
                portalId: '2762526',
                formId: '6170d9b0-fa5b-4240-9f47-f3a3aa9557c9',
                target: '#hubspotTrialForm',
                onFormSubmit: (e: Event) => {
                    eventLogger.trackContactUsFormSubmitted()
                },
            })
        })
    }

    public render(): JSX.Element | null {
        return (
            <Layout location={this.props.location}>
                <section className="d-flex flex-column flex-lg-row sales">
                    <div className="form-area">
                        <div>
                            <h1>Contact Our Team</h1>
                            <p>
                                Let us know which <Link to="/pricing">paid product</Link> you're interested in and for
                                how many users. Our team is happy to answer any questions. Fill out the form and we’ll
                                be in touch as soon as possible.
                            </p>
                        </div>
                        <div className="form">
                            <div id="hubspotTrialForm" className="d-flex justify-center" />
                        </div>
                    </div>
                    <div className="panel-area ml-lg-5">
                        <div className="d-flex flex-column panel">
                            <h3>Your Team will Love Sourcegraph</h3>
                            <ul className="list pl0">
                                <li className="mb-2">
                                    <div className="d-flex">Code search and intelligence for all your repositories</div>
                                </li>
                                <li className="mb-2">
                                    <div className="d-flex">Fast web interface</div>
                                </li>
                                <li className="mb-2">
                                    <div className="d-flex">No indexing delay</div>
                                </li>
                                <li className="mb-2">
                                    <div className="d-flex">Advanced search (regex, filters, exact matching, etc)</div>
                                </li>
                                <li>
                                    <div className="d-flex">Powerful API</div>
                                </li>
                                <li>
                                    <div className="d-flex">
                                        Integrations for code hosts, review tools, browsers, and editors
                                    </div>
                                </li>
                            </ul>
                            <div className="panel__help">
                                <strong>Need help?</strong>
                                <p>
                                    Contact us at <a href="https://twitter.com/srcgraph">@srcgraph</a> or{' '}
                                    <a href="mailto:support@sourcegraph.com">support@sourcegraph.com</a>, or file issues
                                    on our{' '}
                                    <a href="https://github.com/sourcegraph/issues/issues">public issue tracker</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}
