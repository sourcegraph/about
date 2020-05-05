import * as React from 'react'
import Helmet from 'react-helmet'
import { createHubSpotForm } from '../../components/HubSpot'
import Layout from '../../components/Layout'
import { CustomerLogosSection } from '../../components/product/CustomerLogosSection'

// tslint:disable-next-line: no-any
export default class TrialPage extends React.Component<any, any> {
    // tslint:disable-next-line: no-any
    constructor(props: any) {
        super(props)
        this.state = {
            events: [],
        }
    }
    public componentDidMount(): void {
        createHubSpotForm({
            portalId: '2762526',
            formId: '202906aa-b46d-4657-86c4-30fbfda2413f',
            targetId: 'hubspotRequestTrialForm',
        })
    }
    public render(): JSX.Element | null {
        const desc = 'Get your team started with a free trial of Sourcegraph.'
        return (
            <Layout location={this.props.location} minimal={true}>
                <Helmet>
                    <title>Sourcegraph - Signup for a free trial</title>
                    <meta name="twitter:title" content="Signup for a free trial of Sourcegraph" />
                    <meta property="og:title" content="Signup for a free trial of Events at Sourcegraph" />
                    <meta name="twitter:site" content="@srcgraph" />
                    <meta name="twitter:image" content="https://about.sourcegraph.com/favicon.png" />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:description" content={desc} />
                    <meta property="og:description" content={desc} />
                    <meta name="description" content={desc} />
                </Helmet>
                <script charSet="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2.js" />
                <div className="bg-white text-dark">
                    <div className="container-lg py-6 px-5">
                        <div className="row flex-wrap-reverse">
                            <div className="col-md-6">
                                <h1 className="display-4">Signup for a free trial</h1>
                                <h3 className="font-weight-light text-sans-serif">
                                    To start your free Sourcegraph trial, tell us a bit about yourself.
                                </h3>
                                <div className="form mt-5">
                                    <div id="hubspotRequestTrialForm" className="d-flex justify-center" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <CustomerLogosSection className="py-5" />
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}
