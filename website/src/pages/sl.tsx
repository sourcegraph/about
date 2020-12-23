import * as React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'

export default class Pricing extends React.Component<any, any> {
    public componentDidMount(): void {
        const script = document.createElement('script')
        script.src = '//js.hsforms.net/forms/v2.js'
        const hubspot = document.getElementById('strangeLoopForm')
        hubspot.appendChild(script)
        script.addEventListener('load', () => {
            ;(window as any).hbspt.forms.create({
                portalId: '2762526',
                formId: '429cabbb-658d-428b-b325-fc8996738775',
                target: '#strangeLoopForm',
            })
        })
    }

    public render(): JSX.Element | null {
        return (
            <Layout location={this.props.location}>
                <div>
                    <Helmet>
                        <title>Sourcegraph @ Strange Loop 2019</title>
                        <meta name="twitter:title" content="Sourcegraph @ Strange Loop 2019" />
                        <meta property="og:title" content="Sourcegraph @ Strange Loop 2019" />
                    </Helmet>
                    <div className="pricing-bg" />
                    <div className="jumbotron text-right dark-7">
                        <div className="row">
                            <div className="col-10 sales py-0 d-flex flex-grow flex-column flex-lg-row align-items-center justify-content-around">
                                <div>
                                    <h1 className="text-center">Sourcegraph @ Strange Loop 2019</h1>
                                    <p className="text-center measure">
                                        We want to help you and your team get the best out of Sourcegraph.
                                        <br />
                                        Enter your details so we can chat further after the conference.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="d-flex justify-content-around flex-column flex-lg-row sales bg-white">
                        <div className="form-area">
                            <div className="form">
                                <div id="strangeLoopForm" className="d-flex justify-center" />
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        )
    }
}
