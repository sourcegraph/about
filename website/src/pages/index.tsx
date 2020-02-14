import { Link } from 'gatsby'
import * as React from 'react'
import { ContentSection } from '../components/content/ContentSection'
import { Jumbotron } from '../components/Jumbotron'
import Layout from '../components/Layout'
import { CustomerLogosSection } from '../components/product/CustomerLogosSection'
import { EnterpriseReadySolution } from '../components/product/EnterpriseReadySolution'
import { GitLabIntegrationSection } from '../components/product/GitLabIntegrationSection'
import { IntegratesWithSection } from '../components/product/IntegratesWithSection'
import { ProductDemoVideo } from '../components/product/ProductDemoVideo'
import { ProductFeaturesAndUseCases } from '../components/product/ProductFeaturesAndUseCases'
import { CarouselColors, Testimonial, TestimonialCarousel } from '../components/TestimonialCarousel'
import { Tweets } from '../components/Tweets'
import { Vimeo } from '../components/Vimeo'
import { ContactPresalesSupportAction } from '../css/components/actions/ContactPresalesSupportAction'
import { GetSourcegraphNowActions } from '../css/components/actions/GetSourcegraphNowActions'
import { RequestDemoAction } from '../css/components/actions/RequestDemoAction'
import { ViewDeveloperDocumentationAction } from '../css/components/actions/ViewDeveloperDocumentationAction'

const testimonials: Testimonial[] = [
    {
        customer: 'Lyft',
        logo: '/external-logos/lyft-logo.svg',
        quote:
            'Sourcegraph code search helped ensure production stability throughout the monolith to microservices decomposition.',
        author: {
            name: 'Justin Phillips',
            title: 'Software Engineer',
            image: '/case-studies/justin-phillips-lyft.jpg',
        },
        cta: {
            text: 'Read case study',
            url: '/case-studies/lyft-monolith-to-microservices',
        },
    },
    {
        customer: 'Yelp',
        logo: '/external-logos/yelp.svg',
        quote: 'Sourcegraph empowers developers at Yelp to ship code faster and more reliably than ever before.',
        author: {
            name: 'Kevin Chen',
            title: 'Software Engineer',
            image: 'case-studies/kevin-chen-yelp.jpg',
        },
        cta: {
            text: 'Read case study',
            url: 'https://engineeringblog.yelp.com/2019/11/winning-the-hackathon-with-sourcegraph.html',
            target: '_blank',
        },
    },
    {
        customer: 'SoFi',
        logo: '/external-logos/sofi-logo-white.png',
        quote:
            'With Sourcegraph, our engineers can understand all of the repercussions of committing a change to a service that is exposed to other services.',
        author: {
            name: 'Ursula Robertson',
            title: 'Engineering Manager',
            image: '/case-studies/ursula-robertson-sofi.jpg',
        },
        cta: {
            text: 'Read case study',
            url: '/case-studies/sofi-moves-fast-on-hundreds-of-microservices',
        },
    },
    {
        customer: 'Quantcast',
        logo: '/external-logos/quantcast-logo-white.svg',
        quote: "Sourcegraph’s search gave us confidence because we knew we wouldn't overlook anything.",
        author: {
            name: 'Simon Law',
            title: 'Staff Software Engineer',
            image: '/case-studies/simon-law-quantcast.jpg',
        },
        cta: {
            text: 'Read case study',
            url: 'case-studies/quantcast-large-scale-refactoring',
        },
    },
    {
        customer: 'Convoy',
        logo: '/external-logos/convoy-logo-white.svg',
        quote:
            'Sourcegraph increases the efficiency and confidence of our entry level developers when they build features that touch different parts of our code base.',
        author: {
            name: 'Brandon Bloom',
            title: 'Senior Software Engineer',
            image: '/case-studies/brandon-bloom-convoy.jpg',
        },
        cta: {
            text: 'Read case study',
            url: '/case-studies/convoy-improved-on-boarding',
        },
    },
    {
        customer: 'Thorn',
        logo: '/case-studies/thorn-logo.png',
        quote:
            'In pull requests, team members include links to Sourcegraph code search to prove all references to a deprecated system have been removed.',
        author: {
            name: 'Jacob Gillespie',
            title: 'Software Engineer',
            image: '/case-studies/jacob-gillespie-thorn-square.jpg',
        },
        cta: {
            text: 'Read case study',
            url: 'case-studies/we-are-thorn',
        },
    },
    {
        customer: 'Convoy',
        logo: '/external-logos/convoy-logo-white.svg',
        quote: 'Now that we are using Sourcegraph, we don’t need to worry about data being out of date.',
        author: {
            name: 'Owen Kim',
            title: 'Senior Software Engineer',
            image: '/case-studies/owen-kim-convoy.jpg',
        },
        cta: {
            text: 'Read case study',
            url: '/case-studies/convoy-software-engineers-and-data-scientists-work-better-together',
        },
    },
]

export default ((props: any) => (
    <Layout
        location={props.location}
        meta={{
            title: 'Sourcegraph',
            description: 'Start shipping better software faster with Universal Code Search.',
        }}
    >
        <div className="home">
            <div className="home__intro container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 mb-6 mb-lg-0">
                        <h1 className="home__intro-header display-3">Universal Code Search</h1>
                        <p className="home__intro-text mt-3 font-weight-light">
                            Google &amp; Facebook invested $100Ms to build an internal&nbsp;tool for{' '}
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
                                to="/product/code-change-management"
                            >
                                code&nbsp;change&nbsp;management
                            </Link>
                            .
                        </p>
                        <p className="home__intro-text mt-4 font-weight-light">
                            <img
                                style={{ width: '19px', height: '19px', verticalAlign: '-3px' }}
                                src="/sourcegraph/sourcegraph-mark.svg"
                            />{' '}
                            <strong>Sourcegraph</strong> provides Universal Code Search to help every development team
                            ship better software faster.
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
            <GitLabIntegrationSection />
            <ContentSection color="black">
                <TestimonialCarousel testimonials={testimonials} color={CarouselColors.dark} />
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
                <Vimeo id={353422112} muted={true} autoplay={true} loop={true} />
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
                    <Tweets />
                </div>
            </div>
            <ContentSection className="my-5">
                <EnterpriseReadySolution className="pt-2" />
            </ContentSection>
            <Jumbotron
                color="purple"
                className="py-6 mb-0"
                title="Get Sourcegraph now"
                description="Start shipping better software faster with Universal Code Search."
                logomark={false}
            >
                <GetSourcegraphNowActions />
            </Jumbotron>
        </div>
    </Layout>
)) as React.FunctionComponent<any>
