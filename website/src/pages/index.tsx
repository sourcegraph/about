import { Link } from 'gatsby'
import ChatIcon from 'mdi-react/ChatIcon'
import MagnifyIcon from 'mdi-react/MagnifyIcon'
import OpenInAppIcon from 'mdi-react/OpenInAppIcon'
import ReplyIcon from 'mdi-react/ReplyIcon'
import ServerIcon from 'mdi-react/ServerIcon'
import SyncIcon from 'mdi-react/SyncIcon'
import WebIcon from 'mdi-react/WebIcon'
import * as React from 'react'
import { BrowserInstallButtons, CHROME_STORE_URL, FIREFOX_STORE_URL } from '../components/BrowserInstallButtons'
import { ContentSection } from '../components/content/ContentSection'
import { Jumbotron } from '../components/Jumbotron'
import Layout from '../components/Layout'
import { ProductFeatures } from '../components/product/ProductFeatures'
import Testimonials from '../components/Testimonials'
import { RequestADemoAction } from '../css/components/actions/RequestADemoAction'
import { StartAFreeTrialAction } from '../css/components/actions/StartAFreeTrialAction'
import { eventLogger } from '../EventLogger'
import { CustomerLogosSection } from '../components/product/CustomerLogosSection'

export default class Index extends React.Component<any, any> {
    public render(): JSX.Element | null {
        const actions = (
            <div className="mt-2">
                <StartAFreeTrialAction className="mr-2" />
                <RequestADemoAction />
            </div>
        )

        return (
            <Layout location={this.props.location}>
                <div className="home">
                    <div className="home__jumbotron-intro jumbotron rounded-0 bg-dark text-light bg-sprinkles">
                        <div className="home__jumbotron-intro-fade">
                            <div className="container">
                                <div className="row text-center justify-content-center">
                                    <h1>The&nbsp;#1 Code&nbsp;Intelligence Platform</h1>
                                    <p className="col-md-9">
                                        Speed up the entire software development cycle with code search, navigation,
                                        review, verification, and automation. Integrates with your code host and other
                                        favorite tools.
                                    </p>
                                    {actions}
                                </div>
                            </div>
                        </div>
                    </div>
                    <CustomerLogosSection />
                    <hr />
                    <ContentSection>
                        <div className="text-center mb-5">
                            <h3>See how code intelligence speeds up the entire software development cycle:</h3>
                        </div>
                        <div
                            style={{ backgroundColor: '#efefef', width: '100%', height: '350px', margin: '0 auto' }}
                            className="border d-flex align-items-center justify-content-center"
                        >
                            (DEMO VIDEO)
                        </div>
                    </ContentSection>
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
                        title="Get code intelligence now"
                        description="Start shipping better software faster."
                    >
                        {actions}
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
