import * as React from 'react'
import { Helmet } from 'react-helmet'
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

    public handleOnFormSubmit = event => {
        if (event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmit') {
            const formData = event.data.data
            const numEng = formData.find(({ name }) => name === 'number_of_eng')
            if (numEng.value !== '11-200') {
                setTimeout(() => {
                    window.location.assign('https://info.sourcegraph.com/request-info-scheduling-enterprise')
                }, 100)
            }
            console.log(formData)
        }
    }

    public componentWillUnmount(): void {
        window.removeEventListener('message', this.handleOnFormSubmit)
    }

    public componentDidMount(): void {
        window.addEventListener('message', this.handleOnFormSubmit)

        const selectedEngCount = ''
        createHubSpotForm({
            portalId: '2762526',
            formId: 'ee4e19f9-29e1-4a89-8db5-f7efdcdb240b',
            targetId: 'hubspotRequestTrialForm',
        })
        if (document) {
            document.getElementsByTagName('body')[0].setAttribute('style', 'background-image:none;')
        }
    }
    public render(): JSX.Element | null {
        const desc = 'Contact us to learn more about Sourcegraph enterprise.'
        return (
            <Layout location={this.props.location} minimal={true}>
                <Helmet>
                    <title>Sourcegraph - Contact us to learn more about Sourcegraph enterprise.</title>
                    <meta name="twitter:title" content="Contact us to learn more about Sourcegraph enterprise." />
                    <meta property="og:title" content="Contact us to learn more about Sourcegraph enterprise." />
                    <meta name="twitter:site" content="@srcgraph" />
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
                                <h1 className="display-3 font-weight-bold">Contact us</h1>
                                <h3 className="font-weight-light">
                                    Talk with a product specialist or engineer to learn more about Sourcegraph.
                                </h3>
                                <div className="form mt-5">
                                    <div id="hubspotRequestTrialForm" className="d-flex justify-center" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <CustomerLogosSection className="full-color py-5" />
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}
