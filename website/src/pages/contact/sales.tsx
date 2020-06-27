import * as React from 'react'
import { createHubSpotForm } from '../../components/HubSpot'
import Layout from '../../components/Layout'
import { CustomerLogosSection } from '../../components/product/CustomerLogosSection'

export default class SalesPage extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            events: [],
        }
    }
    public componentDidMount(): void {
        createHubSpotForm({
            portalId: '2762526',
            formId: '6170d9b0-fa5b-4240-9f47-f3a3aa9557c9',
            targetId: 'hubspotContactForm',
        })
        if (document) {
            document.getElementsByTagName('body')[0].setAttribute('style', 'background-image:none;')
        }
    }
    public render(): JSX.Element | null {
        return (
            <Layout className="pt-0" location={this.props.location} minimal={true}>
                <script charSet="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2.js" />
                <div className="bg-white text-dark">
                    <div className="container-xl pt-5 px-5">
                        <div className="row flex-wrap-reverse">
                            <div className="col-md-6">
                                <h1 className="display-3 font-weight-bold">Talk to a product specialist</h1>
                                <h3 className="font-weight-light">
                                    Let us know how we can help. We'll follow up soon.
                                </h3>
                                <div className="form mt-5">
                                    <div id="hubspotContactForm" className="d-flex justify-center" />
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
