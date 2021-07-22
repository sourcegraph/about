import * as React from 'react'
import { Helmet } from 'react-helmet'
import { createHubSpotForm } from '../../components/HubSpot'
import Layout from '../../components/Layout'
import { CustomerLogosSection } from '../../components/product/CustomerLogosSection'

// tslint:disable-next-line: no-any
export default class DemoPage extends React.Component<any, any> {
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
            formId: '310000a0-2b6b-4da2-89e9-2be930a8a298',
            targetId: 'hubspotRequestDemoForm',
        })
        if (document) {
            document.getElementsByTagName('body')[0].setAttribute('style', 'background-image:none;')
        }
    }
    public render(): JSX.Element | null {
        const title = 'Sourcegraph - Schedule a Sourcegraph demo.'
        const desc = 'Schedule a Sourcegraph demo.'
        return (
            <Layout location={this.props.location} minimal={true}>
                <Helmet>
                    <title>{title}</title>
                    <meta name="twitter:title" content={title} />
                    <meta property="og:title" content={title} />
                    <meta name="twitter:site" content="@sourcegraph" />
                    <meta name="twitter:image" content="https://about.sourcegraph.com/favicon.png" />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:description" content={desc} />
                    <meta property="og:description" content={desc} />
                    <meta name="description" content={desc} />
                </Helmet>
                <script charSet="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2.js" />
                <div className="form-page bg-white text-dark">
                    <div className="container-xl pt-5 px-5">
                        <div className="row">
                            <div className="col-md-6">
                                <h1 className="display-3 font-weight-bold">Request a demo</h1>
                                <h3 className="font-weight-light">
                                    To schedule a demo with a product specialist, tell us a bit about yourself.
                                </h3>
                                <div className="form mt-5">
                                    <div id="hubspotRequestDemoForm" className="d-flex justify-center" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <CustomerLogosSection className="full-color mt-3 mb-6" />
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}
