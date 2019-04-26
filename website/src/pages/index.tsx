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
import { RequestADemoAction } from '../css/components/actions/RequestADemoAction'
import { StartAFreeTrialAction } from '../css/components/actions/StartAFreeTrialAction'
import { eventLogger } from '../EventLogger'

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
                                    <h1>The new standard for developer infrastructure</h1>
                                    <p className="col-md-9">
                                        Google and Facebook have invested $100Ms in internal developer infrastructure
                                        for code search, code review, and automation to ship software faster. We provide
                                        these capabilities to every team so they can operate at elite levels of
                                        productivity and quality.
                                    </p>
                                    <p className="col-md-9 d-none">
                                        Sourcegraph We provide every code search, code review, and automation to ship
                                        software faster. We platforms to build software at scale. Sourcegraph is the
                                        best platform for building software at scale.
                                        {/*software development cycle  Speed up the software development
                                        cycle. developers, DevOps teams, and engineering leaders developer
                                        infrastructure that connects teams, code, and tools. Developers and DevOps teams
                                        get Turns your code into a structured, searchable knowledge base where
                                        developers and DevOps teams find answers. | Speed up the software development
                                        cycle. With Sourcegraph, your organization's code becomes a searchable,
                                        shareable asset for developers, DevOps teams, and engineering leaders.*/}
                                    </p>
                                    <p className="col-md-9 d-none">
                                        Sourcegraph is how companies reach elite development. Where elite development
                                        happens. With Sourcegraph, your organization's developers, DevOps teams, and
                                        engineering leaders can search, share, reuse, and review code. Developer
                                        experience Your organization's code is With Sourcegraph, your code makes your
                                        code useful and valuable
                                    </p>
                                    {actions}
                                </div>
                            </div>
                        </div>
                    </div>
                    <CustomerLogosSection />
                    <hr />
                    <IntegratesWithSection />
                    <hr />
                    <ContentSection>
                        <div className="text-center mb-5">
                            <h3>See how code intelligence speeds up the software development cycle:</h3>
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
