import { Link } from 'gatsby'
import * as React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import { eventLogger } from '../EventLogger'


export default class Pricing extends React.Component<any, any> {
    public componentDidMount(): void {
        const script = document.createElement('script')
        script.src = '//js.hsforms.net/forms/v2.js'
        const hubspot = document.getElementById('hubspotTrialForm')
        hubspot.appendChild(script)
        script.addEventListener('load', () => {
            ;(window as any).hbspt.forms.create({
                portalId: '2762526',
                formId: '7d6c55af-3de3-4e57-a5df-a0de341a4814',
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
                    <div className="pricing-bg"/>
                    <div className="jumbotron text-right dark-7">
                        <div className="row">
                            <div className="sales py-0 d-flex flex-grow flex-column flex-lg-row align-items-center justify-content-around">
                                <div>
                                    <h1 className="text-center">Set up Sourcegraph during a hackathon</h1>
                                    <p className="text-center measure">Hackathons are the perfect time to set up code search and intelligence for your team. We'll give you access to all of Sourcegraph's features to set you up for the best possible demo.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="d-flex justify-content-around flex-column flex-lg-row sales bg-white">
                        <div className="panel-area mr-lg-5 mt-0 mb-2">
                            <div className="d-flex flex-column panel">
                                <p>Want to bring lasting value to your company during a hackathon? Set up Sourcegraph and bring the power of code search and code intelligence to your engineering team.</p>
                                <ul>
                                    <li>We'll give you <b>access to our Enterprise features</b> so you can ship Sourcegraph's full feature set to your team and for your demo.</li>
                                    <li>We'll <b>answer any questions and share tips</b> to make sure you can successfully deploy and demo Sourcegraph</li>
                                </ul>

                                <p>Fill out the form, and we'll get back to you  ASAP on how to get started!</p>
                                <div className="panel__help">
                                    <p>Get started with the <a target="blank" href="https://docs.sourcegraph.com/admin/install/docker">installation docs.</a></p>
                                    <p>When you're ready to present, check out the <a target="blank" href="https://docs.sourcegraph.com/user/tour">Sourcegraph tour</a> for example use-cases to show off.</p>
                                </div>
                            </div>
                        </div>
                        <div className="form-area">
                            <div className="form">
                                <div id="hubspotTrialForm" className="d-flex justify-center" />
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        )
    }

    private trackInstallSourcegraphServerClicked = () => {
        eventLogger.trackContactUsCTAClicked('PricingPage')
    }
}
