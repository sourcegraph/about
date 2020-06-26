import { Link } from 'gatsby'
import * as React from 'react'
import Helmet from 'react-helmet'
import { ContentSection } from '../components/content/ContentSection'
import { BlogPost, FeaturedBlogPosts } from '../components/FeaturedBlogPosts'
import { Jumbotron } from '../components/Jumbotron'
import Layout from '../components/Layout'
import { CustomerLogosSection } from '../components/product/CustomerLogosSection'
import { EnterpriseReadySolution } from '../components/product/EnterpriseReadySolution'
import { GitLabIntegrationSection } from '../components/product/GitLabIntegrationSection'
import { IntegratesWithSection } from '../components/product/IntegratesWithSection'
import { CarouselColors, Testimonial, TestimonialCarousel } from '../components/TestimonialCarousel'
import { Tweets } from '../components/Tweets'
import { YouTube } from '../components/YouTube'
import { ContactPresalesSupportAction } from '../css/components/actions/ContactPresalesSupportAction'
import { GetSourcegraphNowActions } from '../css/components/actions/GetSourcegraphNowActions'
import { RequestDemoAction } from '../css/components/actions/RequestDemoAction'
import { ViewDeveloperDocumentationAction } from '../css/components/actions/ViewDeveloperDocumentationAction'
import ArrowRightBoxIcon from 'mdi-react/ArrowRightBoxIcon'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import { IntegrationsSection } from '../components/IntegrationsSection'

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
            image: '/case-studies/kevin-chen-yelp.jpg',
        },
        cta: {
            text: 'Read case study',
            url: 'https://engineeringblog.yelp.com/2019/11/winning-the-hackathon-with-sourcegraph.html',
            target: '_blank',
            rel: 'nofollow',
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
            url: '/case-studies/quantcast-large-scale-refactoring',
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
            url: '/case-studies/we-are-thorn',
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
            title: 'Customers',
            description: 'TODO(sqs)',
            image: 'TODO(sqs)',
        }}
        heroAndHeaderClassName="customers-page__header-and-hero"
        hero={
            <div className="customers-page customers-page__hero container">
                <div className="row">
                    <div className="col-lg-7 mt-6 mb-6">
                        <h1 className="display-1 font-weight-bold mb-0">
                            Solving&nbsp;big&nbsp;problems for software&nbsp;teams
                        </h1>
                        <p className="home__semiwide-paragraph my-5 display-4">
                            Sourcegraph helps companies of all sizes in all industries move fast and stay secure when
                            building software.
                        </p>
                    </div>
                    <div className="col-lg-5 mt-6 pt-4 mb-6">
                        <h5 className="font-weight-normal">See how customers use Sourcegraph to:</h5>
                        <div className="list-group">
                            <Link to="#" className="list-group-item list-group-item-action">
                                Onboard developers faster <ArrowRightIcon className="icon-inline ml-1" />
                            </Link>
                            <Link to="#" className="list-group-item list-group-item-action">
                                Fix critical security problems in hours, not days{' '}
                                <ArrowRightIcon className="icon-inline ml-1" />
                            </Link>
                            <Link to="#" className="list-group-item list-group-item-action">
                                Catch more bugs in code review <ArrowRightIcon className="icon-inline ml-1" />
                            </Link>
                            <Link to="#" className="list-group-item list-group-item-action">
                                Make coding delightful and more productive{' '}
                                <ArrowRightIcon className="icon-inline ml-1" />
                            </Link>
                            <Link to="#" className="list-group-item list-group-item-action">
                                Find incident root causes faster <ArrowRightIcon className="icon-inline ml-1" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        }
    >
        <div className="customers-page">
            <CustomerLogosSection className="my-6" />
            <hr className="my-6" />
            <ContentSection className="my-6">
                <h2 className="display-3 font-weight-bold">Onboard developers faster.</h2>
                <div className="row">
                    <div className="col-lg-5 mt-5">
                        <p>Code is complex.</p>
                        <div className="pt-1">
                            <Link className="d-flex align-items-center" to="TODO(sqs)">
                                How Convoy's developers onboard faster with Sourcegraph{' '}
                                <ArrowRightBoxIcon className="icon-inline ml-1" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-7 mt-5 pl-lg-6">
                        <img src="/screenshots/search-page-small-0.png" className="home__screenshot w-100" />
                    </div>
                </div>
            </ContentSection>
            <hr className="my-6" />
            <ContentSection className="my-6">
                <h2 className="display-3 font-weight-bold">Fix critical security problems in hours, not days.</h2>
                <div className="row">
                    <div className="col-lg-5 mt-5">
                        <p>Code is complex.</p>
                        <div className="pt-1">
                            <Link className="d-flex align-items-center" to="TODO(sqs)">
                                How Convoy's developers onboard faster with Sourcegraph{' '}
                                <ArrowRightBoxIcon className="icon-inline ml-1" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-7 mt-5 pl-lg-6">
                        <img src="/screenshots/search-page-small-0.png" className="home__screenshot w-100" />
                    </div>
                </div>
            </ContentSection>
            <hr className="my-6" />
            <ContentSection className="my-6">
                <h2 className="display-3 font-weight-bold">Catch more bugs in code review.</h2>
                <div className="row">
                    <div className="col-lg-5 mt-5">
                        <p>Code is complex.</p>
                        <div className="pt-1">
                            <Link className="d-flex align-items-center" to="TODO(sqs)">
                                How Convoy's developers onboard faster with Sourcegraph{' '}
                                <ArrowRightBoxIcon className="icon-inline ml-1" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-7 mt-5 pl-lg-6">
                        <img src="/screenshots/search-page-small-0.png" className="home__screenshot w-100" />
                    </div>
                </div>
            </ContentSection>
            <hr className="my-6" />
            <ContentSection className="my-6">
                <h2 className="display-3 font-weight-bold">Make coding delightful and more productive.</h2>
                <div className="row">
                    <div className="col-lg-5 mt-5">
                        <p>Code is complex.</p>
                        <div className="pt-1">
                            <Link className="d-flex align-items-center" to="TODO(sqs)">
                                How Convoy's developers onboard faster with Sourcegraph{' '}
                                <ArrowRightBoxIcon className="icon-inline ml-1" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-7 mt-5 pl-lg-6">
                        <img src="/screenshots/search-page-small-0.png" className="home__screenshot w-100" />
                    </div>
                </div>
            </ContentSection>
            <hr className="my-6" />
            <ContentSection className="my-6">
                <h2 className="display-3 font-weight-bold">Find incident root causes faster.</h2>
                <div className="row">
                    <div className="col-lg-5 mt-5">
                        <p>Code is complex.</p>
                        <div className="pt-1">
                            <Link className="d-flex align-items-center" to="TODO(sqs)">
                                How Convoy's developers onboard faster with Sourcegraph{' '}
                                <ArrowRightBoxIcon className="icon-inline ml-1" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-7 mt-5 pl-lg-6">
                        <img src="/screenshots/search-page-small-0.png" className="home__screenshot w-100" />
                    </div>
                </div>
            </ContentSection>
            TODO(sqs): try link
        </div>
    </Layout>
)) as React.FunctionComponent<any>
