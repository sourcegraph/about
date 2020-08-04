import * as React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'

export default class Pricing extends React.Component<any, any> {
    public componentDidMount(): void {
        const script = document.createElement('script')
        script.src = '//js.hsforms.net/forms/v2.js'
        const hubspot = document.getElementById('dotGoForm')
        hubspot.appendChild(script)
        script.addEventListener('load', () => {
            ;(window as any).hbspt.forms.create({
                portalId: '2762526',
                formId: '21cd17a4-7038-4873-8857-68c443b5fb59',
                target: '#dotGoForm',
            })
        })
    }

    public render(): JSX.Element | null {
        return (
            <Layout location={this.props.location}>
                <div>
                    <Helmet>
                        <title>Sourcegraph @dotGo 2019</title>
                        <meta name="twitter:title" content="Sourcegraph @dotGo 2019" />
                        <meta property="og:title" content="Sourcegraph @dotGo 2019" />
                    </Helmet>
                    <div className="pricing-bg" />
                    <div className="jumbotron text-right dark-7">
                        <div className="row">
                            <div className="sales py-0 d-flex flex-grow flex-column flex-lg-row align-items-center justify-content-around">
                                <div>
                                    <h1 className="text-center">Sourcegraph @dotGo 2019</h1>
                                    <p className="text-center measure">
                                        We want to help you and your team get the best out of Sourcegraph.
                                        <br />
                                        Enter your details so we can check-in after the conference to see how it's
                                        working for you.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="d-flex justify-content-around flex-column flex-lg-row sales bg-white">
                        <div className="form-area">
                            <div className="form">
                                <div id="dotGoForm" className="d-flex justify-center" />
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        )
    }
}
