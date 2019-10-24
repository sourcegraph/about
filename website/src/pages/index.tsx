import { Link } from 'gatsby'
import * as React from 'react'
import { CaseStudyFeature } from '../components/CaseStudyFeature'
import { ContentSection } from '../components/content/ContentSection'
import { Jumbotron } from '../components/Jumbotron'
import Layout from '../components/Layout'
import { CustomerLogosSection } from '../components/product/CustomerLogosSection'
import { EnterpriseReadySolution } from '../components/product/EnterpriseReadySolution'
import { IntegratesWithSection } from '../components/product/IntegratesWithSection'
import { ProductDemoVideo } from '../components/product/ProductDemoVideo'
import { ProductFeaturesAndUseCases } from '../components/product/ProductFeaturesAndUseCases'
import { Testimonials } from '../components/Testimonials'
import { Vimeo } from '../components/Vimeo'
import { ContactPresalesSupportAction } from '../css/components/actions/ContactPresalesSupportAction'
import { GetSourcegraphNowActions } from '../css/components/actions/GetSourcegraphNowActions'
import { RequestDemoAction } from '../css/components/actions/RequestDemoAction'
import { ViewDeveloperDocumentationAction } from '../css/components/actions/ViewDeveloperDocumentationAction'

export default ((props: any) => (
    <Layout location={props.location}>
        <div className="home">
            <div className="home__intro container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 mb-6 mb-lg-0">
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
                            <Link className="home__intro-text-link home__intro-text-link-3" to="/product/automation">
                                alerts &amp; automation
                            </Link>
                            .
                        </p>
                        <p className="home__intro-text mt-4 font-weight-light">
                            <img
                                style={{ width: '19px', height: '19px', verticalAlign: '-3px' }}
                                src="/sourcegraph/sourcegraph-mark.svg"
                            />{' '}
                            <strong>Sourcegraph</strong> provides this standard developer&nbsp;platform to help
                            every elite&nbsp;development team ship better software faster.
                        </p>
                        <RequestDemoAction className="mt-5" />
                        <ContactPresalesSupportAction className="text-light mt-3" />
                        <ViewDeveloperDocumentationAction className="text-light mt-2" />
                    </div>
                    <div className="col-lg-6 d-none">
                        <img src="/product-diagram-0.svg" style={{ width: 'inherit' }} />
                    </div>
                </div>
            </div>
            <div className="bg-white text-dark">
                <CustomerLogosSection className="py-5" />
            </div>
            <ContentSection color="black">
                <h2 className="text-center display-4 mb-5 mt-4">
                    Learn how Sourcegraph code search makes large scale refactoring possible
                </h2>
                <hr style={{ borderColor: '#333' }} />
                <CaseStudyFeature
                    // title="See how Sourcegraph enabled large scale refactoring at Quantcast"
                    quote="Sourcegraph’s search gave us confidence because we knew we wouldn't overlook anything."
                    author="Simon Law, Staff Software Engineer, Quantcast"
                    url="/case-studies/quantcast"
                    image="/case-studies/quantcast_thumbnail_500x500px-generic.jpg"
                />
                <hr style={{ borderColor: '#333' }} />
                <CaseStudyFeature
                    // title="See how Thorn sunsets legacy applications safely with Sourcegraph"
                    quote="In pull requests, team members include links to Sourcegraph code search to prove all references to a deprecated system have been removed."
                    author="Thorn Software Engineer, Jacob Gillespie"
                    url="/case-studies/we-are-thorn"
                    image="/case-studies/thorn-sourcegraph-case-study.png"
                />
            </ContentSection>
            <div className="bg-white text-dark">
                <IntegratesWithSection className="mt-4 pt-5 pb-6" />
            </div>
            <div className="bg-primary py-6 d-none">
                <ContentSection>
                    <ProductDemoVideo />
                    <ProductFeaturesAndUseCases />
                </ContentSection>
            </div>
            <ContentSection color="black" className="py-6">
                <h2 id="demo" className="text-center display-4 pb-4">
                    See why developers rely on Sourcegraph daily
                </h2>
                <Vimeo id={353422112} muted={false} />
            </ContentSection>
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
            <ContentSection className="my-5">
                <EnterpriseReadySolution className="pt-2" />
            </ContentSection>
            <Jumbotron
                color="purple"
                className="py-6 mb-0"
                title="Get Sourcegraph now"
                description="Start shipping better software faster with the new standard developer platform."
                logomark={false}
            >
                <GetSourcegraphNowActions />
            </Jumbotron>
        </div>
    </Layout>
)) as React.FunctionComponent<any>
