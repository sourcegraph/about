import { Link } from 'gatsby'
import ArrowRightDropCircleIcon from 'mdi-react/ArrowRightDropCircleIcon'
import CityIcon from 'mdi-react/CityIcon'
import * as React from 'react'
import { BrowserInstallButtons, CHROME_STORE_URL, FIREFOX_STORE_URL } from '../components/BrowserInstallButtons'
import { ContentSection } from '../components/content/ContentSection'
import { Jumbotron } from '../components/Jumbotron'
import Layout from '../components/Layout'
import { CustomerLogosSection } from '../components/product/CustomerLogosSection'
import { IntegratesWithSection } from '../components/product/IntegratesWithSection'
import { ProductFeatures } from '../components/product/ProductFeatures'
import Testimonials from '../components/Testimonials'
import { ContactPresalesSupportAction } from '../css/components/actions/ContactPresalesSupportAction'
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
                <ContactPresalesSupportAction className="mt-3" />
                <ViewDeveloperDocumentationAction className="mt-1" />
            </div>
        )

        return (
            <Layout location={this.props.location}>
                <div className="home">
                    <div className="home__intro container">
                        <div className="row">
                            <div className="col-lg-6 mb-6 mb-lg-0">
                                <h1 className="home__intro-header display-3">The new standard developer platform</h1>
                                <p className="home__intro-text mt-3 font-weight-light">
                                    Google &amp; Facebook invested $100Ms in their internal developer&nbsp;platforms for{' '}
                                    <Link
                                        className="home__intro-text-link home__intro-text-link-1"
                                        to="/product/code-search-navigation"
                                    >
                                        code&nbsp;search
                                    </Link>
                                    ,{' '}
                                    <Link
                                        className="home__intro-text-link home__intro-text-link-2"
                                        to="/product/code-review"
                                    >
                                        code&nbsp;review
                                    </Link>
                                    , and{' '}
                                    <Link
                                        className="home__intro-text-link home__intro-text-link-3"
                                        to="/product/code-rules-monitoring-automation"
                                    >
                                        automation
                                    </Link>
                                    .
                                </p>
                                <p className="home__intro-text mt-4 font-weight-light">
                                    <img
                                        style={{ width: '19px', height: '19px', verticalAlign: '-3px' }}
                                        src="/sourcegraph/sourcegraph-mark.svg"
                                    />{' '}
                                    <strong>Sourcegraph</strong> brings this standard of developer&nbsp;platform to{' '}
                                    every&nbsp;company, helping startups and large&nbsp;enterprises achieve
                                    elite&nbsp;development.
                                </p>
                                <GetStartedAction showEmailInput={true} className="mt-5" />
                                <ContactPresalesSupportAction className="mt-2 text-light" />
                            </div>
                            <div className="col-lg-6">
                                <img src="/product-diagram-0.svg" style={{ width: 'inherit' }} />
                            </div>
                        </div>
                    </div>
                    <div className="bg-white text-dark">
                        <CustomerLogosSection className="py-5" />
                        <hr />
                        <IntegratesWithSection className="mt-4 pt-5 pb-6" />
                    </div>
                    <div className="bg-primary py-6">
                        <ContentSection>
                            <h3 className="text-center mb-5 text-light font-weight-light">
                                How Sourcegraph speeds up the software development cycle:
                            </h3>
                            <div
                                style={{
                                    backgroundColor: 'rgba(255,255,255,0.75)',
                                    width: '87%',
                                    height: '480px',
                                    margin: '0 auto',
                                }}
                                className="border d-flex align-items-center justify-content-center"
                            >
                                <ArrowRightDropCircleIcon
                                    className="text-dark"
                                    style={{ width: '60px', height: '60px', opacity: '0.7' }}
                                />
                            </div>
                        </ContentSection>
                    </div>
                    <hr />
                    <ContentSection className="my-5">
                        <div className="pt-2 row justify-content-center">
                            <div className="col-md-8">
                                <CityIcon className="d-block mx-auto" style={{ width: '80px', height: '80px' }} />
                                <h2 className="mt-4 display-4 text-center">The only enterprise solution</h2>
                                <p className="text-center">
                                    Sourcegraph is built for companies of all sizes, from startups that need a solid
                                    foundation for growth, all the way to the largest enterprises with complex security,
                                    scaling, and deployment needs.
                                </p>
                            </div>
                        </div>
                        <div className="pt-5 row justify-content-between">
                            <div className="col-sm-4">
                                <h4 className="mb-1">Proven at scale</h4>
                                <p>10,000s of developers and repositories on Sourcegraph? You're in good company.</p>
                            </div>
                            <div className="col-sm-4">
                                <h4 className="mb-1">24/7 support</h4>
                                <p>
                                    We provide outstanding support whenever you need it, including deployment assistance
                                    and help integrating custom dev tools with Sourcegraph.
                                </p>
                            </div>
                            <div className="col-sm-4">
                                <h4 className="mb-1">Deploy your way</h4>
                                <p>
                                    Self-manage your organization's Sourcegraph instance, or let us manage it for you
                                    (on our secure infrastructure or your cloud provider sub-account).
                                </p>
                            </div>
                        </div>
                    </ContentSection>
                    <hr />
                    <div className="bg-white text-dark py-4">
                        <ContentSection>
                            <div className="text-center mt-5">
                                <h3>Developers, DevOps teams, SREs, and engineering leaders love Sourcegraph:</h3>
                            </div>
                            <Testimonials />
                        </ContentSection>
                    </div>
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
