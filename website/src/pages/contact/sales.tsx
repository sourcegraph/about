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
                <div>
                    <div className="jumbotron text-right dark-7">
                        <div className="row">
                            <div className="sales py-0 d-flex flex-grow flex-column flex-lg-row align-items-center justify-content-around">
                                <div>
                                    <h1 className="text-center">Try Sourcegraph Enterprise free for 30 days</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="d-flex justify-content-around flex-column flex-lg-row sales">
                        <div className="panel-area mr-lg-5 mt-0 mb-2">
                            <div className="d-flex flex-column panel">
                                <h3>Your team will love Sourcegraph Enterprise</h3>
                                <p>The best way to search and browse all of your organization's code, with:</p>
                                <ul className="list pl0">
                                    <li className="mb-2">
                                        <div className="">HA cluster support</div>
                                    </li>
                                    <li className="mb-2">Cross-repository code intelligence</li>
                                    <li className="mb-2">Advanced logging</li>
                                    <li className="mb-2">External database support</li>
                                    <li className="mb-2">Premium support</li>
                                    <li>Private Sourcegraph extension registry</li>
                                </ul>
                                <div className="panel__help">
                                    <strong>Need help?</strong>
                                    <p>
                                        Contact us at <a href="https://twitter.com/srcgraph">@srcgraph</a> or{' '}
                                        <a href="mailto:support@sourcegraph.com">support@sourcegraph.com</a>, or file
                                        issues on our{' '}
                                        <a href="https://github.com/sourcegraph/sourcegraph/issues">
                                            public issue tracker
                                        </a>
                                        .
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="form-area">
                            <div>
                                <h1>Register for your free trial</h1>
                            </div>
                            <div className="form">
                                <div id="hubspotTrialForm" className="d-flex justify-center" />
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        )
    }
}
