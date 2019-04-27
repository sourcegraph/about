import { Link } from 'gatsby'
import * as React from 'react'
import { BrowserInstallButtons, CHROME_STORE_URL, FIREFOX_STORE_URL } from '../components/BrowserInstallButtons'
import { ContentSection } from '../components/content/ContentSection'
import { Jumbotron } from '../components/Jumbotron'
import Layout from '../components/Layout'
import { CustomerLogosSection } from '../components/product/CustomerLogosSection'
import { IntegratesWithSection } from '../components/product/IntegratesWithSection'
import { ProductFeatures } from '../components/product/ProductFeatures'
import Testimonials from '../components/Testimonials'
import { ContactSupportAction } from '../css/components/actions/ContactSupportAction'
import { GetStartedAction } from '../css/components/actions/GetStartedAction'
import { RequestADemoAction } from '../css/components/actions/RequestADemoAction'
import { StartAFreeTrialAction } from '../css/components/actions/StartAFreeTrialAction'
import { ViewDeveloperDocumentationAction } from '../css/components/actions/ViewDeveloperDocumentationAction'
import { eventLogger } from '../EventLogger'

export default class Index extends React.Component<any, any> {
    public render(): JSX.Element | null {
        const actions = (
            <div className="mt-2">
                <GetStartedAction showEmailInput={true} className="mt-4" />
                <ContactSupportAction className="mt-3" />
                <ViewDeveloperDocumentationAction className="mt-1" />
            </div>
        )

        return (
            <Layout location={this.props.location}>
                <div className="home">
                    <div className="home__jumbotron-intro jumbotron rounded-0 bg-dark text-light bg-sprinkles">
                        <div className="home__jumbotron-intro-fade">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 mb-5 mb-lg-0">
                                        <h1>The new standard developer platform</h1>
                                        <p>
                                            Google and Facebook invested $100Ms in their internal developer platforms
                                            for code search, code review, and automation. With Sourcegraph, now every
                                            company gets the best developer platform to reach elite levels of
                                            productivity and quality.
                                        </p>
                                        {actions}
                                    </div>
                                    <div className="col-lg-6">
                                        <img src="/product-diagram-0.svg" style={{ width: 'inherit' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <CustomerLogosSection />
                    <hr />
                    <IntegratesWithSection className="d-none" />
                    <ContentSection>
                        <div className="text-center mb-5">
                            <h3>See how Sourcegraph speeds up the software development cycle:</h3>
                        </div>
                        <div
                            style={{ backgroundColor: '#efefef', width: '100%', height: '350px', margin: '0 auto' }}
                            className="border d-flex align-items-center justify-content-center"
                        >
                            (DEMO VIDEO)
                        </div>
                    </ContentSection>
                    <hr />
                    <ContentSection>
                        <h2 className="mt-4">The only enterprise solution</h2>
                        <p>
                            Sourcegraph is built for companies of all sizes, from startups that need a solid foundation
                            for growth, all the way to the largest enterprises with complex security, scaling, and
                            deployment needs.
                        </p>
                        <div className="row justify-content-between">
                            <div className="col-sm-4">
                                <h4>Proven at scale</h4>
                                <p>10,000s of developers and repositories on Sourcegraph? You're in good company.</p>
                            </div>
                            <div className="col-sm-4">
                                <h4>24/7 support</h4>
                                <p>
                                    We provide outstanding support whenever you need it, including deployment assistance
                                    and help integrating custom dev tools with Sourcegraph.
                                </p>
                            </div>
                            <div className="col-sm-4">
                                <h4>Deploy your way</h4>
                                <p>
                                    Self-manage your organization's Sourcegraph instance, or let us manage it for you
                                    (on our secure infrastructure or your cloud provider sub-account).
                                </p>
                            </div>
                        </div>
                    </ContentSection>
                    <hr />
                    <ContentSection>
                        <div className="text-center mt-5">
                            <h3>Developers, DevOps teams, SREs, and engineering leaders love Sourcegraph:</h3>
                        </div>
                        <Testimonials />
                    </ContentSection>
                    <Jumbotron
                        color="purple"
                        className="mt-5 mb-0"
                        title="Get the new standard developer platform now"
                        description="Reach elite levels of developer productivity and quality."
                    >
                        <div className="d-flex flex-column justify-content-center align-items-center">{actions}</div>
                    </Jumbotron>
                </div>
            </Layout>
        )
    }
    private trackInstallSourcegraphServerCodeIntelligence = () => {
        eventLogger.trackInstallSourcegraphServerCTAClicked('Homepage')
    }
    private pricingClickedDataCenter = () => {
        eventLogger.trackPricingClicked('HomepageDataCenter')
    }
}
