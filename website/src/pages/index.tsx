import { Link } from 'gatsby'
import ArrowRightDropCircleIcon from 'mdi-react/ArrowRightDropCircleIcon'
import CityIcon from 'mdi-react/CityIcon'
import * as React from 'react'
import { ContentSection } from '../components/content/ContentSection'
import { Jumbotron } from '../components/Jumbotron'
import Layout from '../components/Layout'
import { CustomerLogosSection } from '../components/product/CustomerLogosSection'
import { IntegratesWithSection } from '../components/product/IntegratesWithSection'
import { Testimonials } from '../components/Testimonials'
import { ContactPresalesSupportAction } from '../css/components/actions/ContactPresalesSupportAction'
import { GetStartedAction } from '../css/components/actions/GetStartedAction'
import { ViewDeveloperDocumentationAction } from '../css/components/actions/ViewDeveloperDocumentationAction'

export default ((props: any) => (
    <Layout location={props.location}>
        <div className="home">
            <div className="home__intro container">
                <div className="row">
                    <div className="col-lg-6 mb-6 mb-lg-0">
                        <h1 className="home__intro-header display-3">The new standard developer platform</h1>
                        <p className="home__intro-text mt-3 font-weight-light">
                            Google &amp; Facebook invested $100Ms to build internal developer&nbsp;platforms for{' '}
                            <Link
                                className="home__intro-text-link home__intro-text-link-1"
                                to="/product/code-search-navigation"
                            >
                                code&nbsp;search
                            </Link>
                            ,{' '}
                            <Link className="home__intro-text-link home__intro-text-link-2" to="/product/code-review">
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
                            <strong>Sourcegraph</strong> provides this standard developer&nbsp;platform to every
                            company, helping startups and large&nbsp;enterprises ship better software faster.
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
                        How Sourcegraph speeds up the software development cycle
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
                            Sourcegraph is built for companies of all sizes, from startups that need a solid foundation
                            for growth, all the way to the largest enterprises with complex security, scaling, and
                            deployment needs.
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
                            We provide outstanding support whenever you need it, including deployment assistance and
                            help integrating custom dev tools with Sourcegraph.
                        </p>
                    </div>
                    <div className="col-sm-4">
                        <h4 className="mb-1">Deploy your way</h4>
                        <p>
                            Self-manage your organization's Sourcegraph instance, or let us manage it for you (on our
                            secure infrastructure or your cloud provider sub-account).
                        </p>
                    </div>
                </div>
            </ContentSection>
            <hr />
            <div className="bg-white text-dark py-4">
                <div className="container">
                    <div className="text-center mt-5">
                        <h3 className="font-weight-light">
                            Developers, DevOps teams, SREs, and engineering leaders love Sourcegraph
                        </h3>
                    </div>
                </div>
                <div className="container-fluid">
                    <Testimonials />
                </div>
            </div>
            <Jumbotron
                color="purple"
                className="py-6 mb-0"
                title="Get Sourcegraph now"
                description="Start shipping better software faster with the new standard developer platform."
                logomark={false}
            >
                <div className="d-flex justify-content-center w-100 mb-3">
                    <div
                        className="flex-0 bg-white rounded px-4"
                        style={{ opacity: '0.95', boxShadow: 'rgba(255,255,255,0.3) 0 0 15px 10px' }}
                    >
                        <GetStartedAction showEmailInput={true} className="mt-4" />
                        <ContactPresalesSupportAction className="mt-3" />
                        <ViewDeveloperDocumentationAction className="mt-1 mb-3" />
                    </div>
                </div>
            </Jumbotron>
        </div>
    </Layout>
)) as React.FunctionComponent<any>
