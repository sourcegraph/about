import * as React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'

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
            })
        })
    }

    public render(): JSX.Element | null {
        return (
            <Layout location={this.props.location}>
                <div>
                    <Helmet>
                        <title>Sourcegraph - Set up Sourcegraph at a Hackathon</title>
                        <meta name="twitter:title" content="Set up Sourcegraph at a Hackathon" />
                        <meta property="og:title" content="Set up Sourcegraph at a Hackathon" />
                    </Helmet>
                    <div className="pricing-bg" />
                    <div className="jumbotron text-right">
                        <div className="row">
                            <div className="sales py-0 d-flex flex-grow flex-column flex-lg-row align-items-center justify-content-around">
                                <div>
                                    <h1 className="text-center mt-4">Set up Sourcegraph during a hackathon</h1>
                                    <p className="text-center measure">
                                        We'll give you access to Sourcegraph Enterprise features so you can ship code
                                        search and intelligence to your team.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="d-flex justify-content-around flex-column flex-lg-row sales bg-white text-dark">
                        <div className="panel-area mr-lg-5 mt-0 mb-2">
                            <div className="d-flex flex-column panel">
                                <p>
                                    Want to win your hackathon? Set up Sourcegraph and bring the power of code search
                                    and code intelligence to your engineering team!
                                </p>
                                <ul>
                                    <li>
                                        We'll give you access to all of our{' '}
                                        <a href="/pricing" target="_blank">
                                            Enterprise features
                                        </a>
                                    </li>
                                    <li>We'll give you live tech support</li>
                                    <li>We'll ship you a bag of stickers, shirts, socks, and other great swag!</li>
                                </ul>

                                <p>
                                    Fill out the form or tweet us{' '}
                                    <a href="https://twitter.com/sourcegraph" target="_blank">
                                        @sourcegraph
                                    </a>
                                    , and we'll get back to you ASAP on how to get started!
                                </p>
                                <div className="panel__help">
                                    <p>
                                        Get started with the{' '}
                                        <a target="blank" href="https://docs.sourcegraph.com/admin/install/docker">
                                            installation docs.
                                        </a>
                                    </p>
                                    <p>
                                        When you're ready to present, check out the{' '}
                                        <a target="blank" href="https://docs.sourcegraph.com/getting-started/tour">
                                            Sourcegraph tour
                                        </a>{' '}
                                        for example use-cases to show off.
                                    </p>
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
}
