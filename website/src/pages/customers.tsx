import { Link } from 'gatsby'
import ArrowRightBoxIcon from 'mdi-react/ArrowRightBoxIcon'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import * as React from 'react'
import Helmet from 'react-helmet'
import { ContentSection } from '../components/content/ContentSection'
import Layout from '../components/Layout'
import { CustomerLogosSection } from '../components/product/CustomerLogosSection'
import { TrySourcegraph } from '../components/TrySourcegraph'

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

const title = 'Sourcegraph - Customers'
const desc =
    'Sourcegraph helps companies of all sizes in all industries to move fast, fix things, and address security risks when building software.'

export default ((props: any) => (
    <Layout
        location={props.location}
        meta={{
            title: 'Sourcegraph - Customers',
            description: 'See how our customers use Sourcegraph to solve big problems',
            image: 'TODO(sqs)',
        }}
        heroAndHeaderClassName="customers-page__header-and-hero"
        hero={
            <div className="customers-page customers-page__hero container">
                <div className="row">
                    <div className="col-lg-7 mt-6 mb-6">
                        <h1 className="display-2 font-weight-bold mb-0">Our customers move faster with Sourcegraph</h1>
                        <p className="home__semiwide-paragraph my-5 display-4">
                            Companies of all sizes and in all industries use Sourcegraph universal code search to solve
                            big code problems.
                        </p>
                    </div>
                    <div className="col-lg-5 mt-6 pt-4 mb-6">
                        <h5 className="font-weight-normal">See how customers use Sourcegraph to:</h5>
                        <div className="list-group">
                            <Link to="#onboard" className="list-group-item list-group-item-action">
                                Onboard everyone faster <ArrowRightIcon className="icon-inline ml-1" />
                            </Link>
                            <Link to="#productivity" className="list-group-item list-group-item-action">
                                Enhance developer efficiency <ArrowRightIcon className="icon-inline ml-1" />
                            </Link>
                            <Link to="#security" className="list-group-item list-group-item-action">
                                Find security problems in hours, not days
                                <ArrowRightIcon className="icon-inline ml-1" />
                            </Link>
                            <Link to="#code-reviews" className="list-group-item list-group-item-action">
                                Catch more bugs with better code reviews
                                <ArrowRightIcon className="icon-inline ml-1" />
                            </Link>
                            <Link to="#campaigns" className="list-group-item list-group-item-action">
                                Fix things quickly and safely <ArrowRightIcon className="icon-inline ml-1" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        }
    >
        <Helmet>
            <title>{title}</title>
            <meta name="twitter:title" content={title} />
            <meta property="og:title" content={title} />
            <meta name="twitter:description" content={desc} />
            <meta property="og:description" content={desc} />
            <meta name="description" content={desc} />
            <link rel="icon" type="image/png" href="/favicon.png" />
        </Helmet>
        <div className="customers-page">
            <CustomerLogosSection className="my-6" />
            <hr className="mb-6" id="onboard" />
            <ContentSection className="mt-6">
                <div className="row">
                    <div className="col-lg-5">
                        <h2 className="display-3 font-weight-bold">Onboard everyone faster</h2>
                        <p>
                            It's not just new developers who need to onboard faster. Every developer is constantly
                            onboarding, because the amount of new and unfamiliar code grows <i>every day</i>.
                        </p>
                        <p>
                            Sourcegraph’s web interface enables sharing links to specific code, so questions get
                            answered faster and with less effort. For remote and distributed teams, code links become
                            essential conduits of knowledge, shared hundreds of times per day over chat, on issue
                            trackers, and in documentation. This improves everyone’s efficiency, and reduces the time to
                            commit for new hires.
                        </p>
                    </div>
                    <div className="col-lg-7 pl-lg-6">
                        <div className="container my-4 video-embed embed-responsive embed-responsive-16by9 ">
                            <iframe
                                class="embed-responsive-item"
                                src="https://www.youtube.com/embed/J9k7l5W1qbk?autoplay=0&amp;cc_load_policy=0&amp;start=0&amp;end=0&amp;loop=0&amp;controls=1&amp;modestbranding=1&amp;rel=0"
                                allowfullscreen=""
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                frameborder="0"
                            ></iframe>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center pt-6">
                    <div className="col-lg-10 text-center">
                        <blockquote className="blockquote case-studies__quote case-studies__quote--in-content">
                            <p>
                                For our new developers, Sourcegraph has been invaluable to get to know the repository
                                structure, to track down where code lives, and self-service during their investigations.
                            </p>
                            <footer className="blockquote-footer">Owen Kim, Senior Software Engineer, Convoy</footer>
                            <div className="d-flex justify-content-center my-4">
                                <img src="/external-logos/convoy-logo.svg" width="110px" />
                            </div>
                            <Link to="/case-studies/convoy-improved-on-boarding">
                                Developers at Convoy onboard faster with Sourcegraph{' '}
                                <ArrowRightBoxIcon className="icon-inline ml-1" />
                            </Link>
                        </blockquote>
                    </div>
                </div>
                <hr className="my-6" id="productivity" />
            </ContentSection>
            <ContentSection className="mt-6">
                <div className="row">
                    <div className="col-lg-5">
                        <h2 className="display-3 font-weight-bold">Enhance developer efficiency</h2>
                        <p>
                            {' '}
                            Improve productivity by enabling developers to stay in flow and find answers quickly.
                            Sourcegraph’s browser-based interface minimizes the impact of context switches to streamline
                            day-to-day tasks. This lets developers maintain their editor state while exploring other
                            parts of the code, greatly improving programming productivity.
                        </p>
                    </div>
                    <div className="col-lg-7 pl-lg-6">
                        <div className="container my-4 video-embed embed-responsive embed-responsive-16by9 ">
                            <iframe
                                class="embed-responsive-item"
                                src="https://www.youtube.com/embed/KSx61-yAMLs?autoplay=0&amp;cc_load_policy=0&amp;start=0&amp;end=0&amp;loop=0&amp;controls=1&amp;modestbranding=1&amp;rel=0"
                                allowfullscreen=""
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                frameborder="0"
                            ></iframe>
                        </div>
                    </div>
                    <div className="row justify-content-center pt-6">
                        <div className="col-lg-10 text-center">
                            <blockquote className="blockquote case-studies__quote case-studies__quote--in-content">
                                <p>
                                    Sourcegraph is an ingrained part of my daily process at SoFi. With Sourcegraph, our
                                    engineers can understand all of the repercussions of committing a change to a
                                    service that is exposed to other services.
                                </p>
                                <footer className="blockquote-footer">
                                    Ursula Robertson, Engineering Manager, SoFi
                                </footer>
                                <div className="d-flex justify-content-center my-3">
                                    <img src="/external-logos/sofi-logo.svg" width="90px" />
                                </div>
                                <Link to="/case-studies/sofi-moves-fast-on-hundreds-of-microservices/">
                                    SoFi adopts Sourcegraph to manage hundreds of microservices{' '}
                                    <ArrowRightBoxIcon className="icon-inline ml-1" />
                                </Link>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <hr className="my-6" id="security" />
            </ContentSection>
            <ContentSection className="mt-6">
                <div className="row">
                    <div className="col-lg-5">
                        <h2 className="display-3 font-weight-bold">Find security problems in hours, not days</h2>
                        <p>
                            Identify incident root causes with confidence, improve production stability, and reduce the
                            time to recovery. Find breaking changes, with diff and commit search returning all matching
                            search results to identify everywhere a pattern, package, or API is used. Mitigate tech
                            security and compliance risks with saved searches to alert for known vulnerabilities and
                            risky code changes. Campaigns then automate the process of fixing, merging, and deploying
                            the necessary changes across codebases.
                        </p>
                    </div>
                    <div className="col-lg-7 pl-lg-6">
                        <div className="container my-4 video-embed embed-responsive embed-responsive-16by9 ">
                            <iframe
                                class="embed-responsive-item"
                                src="https://www.youtube.com/embed/OGd8wr7XpgU?autoplay=0&amp;cc_load_policy=0&amp;start=0&amp;end=0&amp;loop=0&amp;controls=1&amp;modestbranding=1&amp;rel=0"
                                allowfullscreen=""
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                frameborder="0"
                            ></iframe>
                        </div>
                    </div>
                    <div className="row justify-content-center pt-6">
                        <div className="col-lg-10 text-center">
                            <blockquote className="blockquote case-studies__quote case-studies__quote--in-content">
                                <p>
                                    Sourcegraph’s search gave us confidence because we knew we wouldn't overlook
                                    anything. Sourcegraph returns all search results, it doesn’t drop or elide them.
                                </p>
                                <footer className="blockquote-footer">
                                    Simon Law, Staff Software Engineer, Quantcast
                                </footer>
                                <div className="d-flex justify-content-center my-4">
                                    <img src="/external-logos/quantcast-logo.svg" width="120px" />
                                </div>
                                <Link to="/case-studies/quantcast-large-scale-refactoring/">
                                    Quantcast adopts Sourcegraph for large-scale refactoring{' '}
                                    <ArrowRightBoxIcon className="icon-inline ml-1" />
                                </Link>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <hr className="my-6" id="code-reviews" />
            </ContentSection>
            <ContentSection className="mt-6">
                <div className="row">
                    <div className="col-lg-5">
                        <h2 className="display-3 font-weight-bold">Catch more bugs with better code reviews</h2>
                        <p>
                            Mistakes that slip past code review are 10x harder to fix. Make code reviews fast, thorough,
                            and less painful — no more tl;dr – and catch bugs before build. Sourcegraph’s code
                            intelligence paired with live data pulled from external services means code reviews are done
                            right.
                        </p>
                    </div>{' '}
                    <div className="col-lg-7 pl-lg-6">
                        <div className="container my-4 video-embed embed-responsive embed-responsive-16by9 ">
                            <iframe
                                class="embed-responsive-item"
                                src="https://www.youtube.com/embed/LgpuH2iaZ3w?autoplay=0&amp;cc_load_policy=0&amp;start=0&amp;end=0&amp;loop=0&amp;controls=1&amp;modestbranding=1&amp;rel=0"
                                allowfullscreen=""
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                frameborder="0"
                            ></iframe>
                        </div>
                        <p>Watch how Sid Sijbrandij (GitLab CEO) and Quinn Slack (Sourcegraph CEO) do code reviews.</p>
                    </div>
                    <div className="row justify-content-center pt-4">
                        <div className="col-lg-10 text-center">
                            <blockquote className="blockquote case-studies__quote case-studies__quote--in-content">
                                <p>
                                    In a code review, you're given a very truncated view of the code, from dozens of
                                    different places, different repos, or different libraries. It can be difficult,
                                    particularly if you're not an expert in that codebase, to grok all of that stuff
                                    instantly. Being able to get contextual information on code reviews, particularly
                                    across repos, is really useful.
                                </p>
                                <footer className="blockquote-footer">
                                    Trent Grover, Director of Architecture, Workiva
                                </footer>
                                <img src="/external-logos/workiva-vector-logo.svg" width="120px" className="my-2" />
                            </blockquote>
                        </div>
                    </div>
                </div>
                <hr className="my-6" id="campaigns" />
            </ContentSection>
            <ContentSection className="mt-6">
                <div className="row">
                    <div className="col-lg-5">
                        <h2 className="display-3 font-weight-bold">Fix things quickly and safely</h2>
                        <p>
                            Teams run campaigns to swiftly and securely remove legacy code, fix critical security
                            issues, pay down tech debt, and make large-scale code changes and refactors across the
                            entire codebase:
                            <ul>
                                <li>
                                    Remove deprecated code (like a Java artifact or package.json dependency) and change
                                    the APIs used across the entire organization
                                </li>
                                <li>
                                    Identify everywhere a vulnerable package or API is used, and open issues or pull
                                    requests on all affected projects
                                </li>
                                <li>
                                    Keep library dependencies (and how to use those libraries) up to date and consistent
                                    across the entire codebase
                                </li>
                            </ul>
                        </p>
                        <p></p>
                    </div>
                    <div className="col-lg-7 pl-lg-6">
                        <div className="container my-4 video-embed embed-responsive embed-responsive-16by9 ">
                            <iframe
                                className="embed-responsive-item"
                                src="https://www.youtube.com/embed/aqcCrqRB17w?autoplay=0&amp;cc_load_policy=0&amp;start=0&amp;end=0&amp;loop=0&amp;controls=1&amp;modestbranding=1&amp;rel=0"
                                allowfullscreen=""
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                frameborder="0"
                            ></iframe>
                        </div>
                    </div>
                    <div className="row justify-content-center pt-4">
                        <div className="col-lg-10 text-center">
                            <blockquote className="blockquote case-studies__quote case-studies__quote--in-content">
                                <p>
                                    Sourcegraph gives us the ability to search for and refactor references to deprecated
                                    services, libraries, URL patterns, and more across our 2000+ repositories, and the
                                    confidence that we're not leaving anyone behind.
                                </p>
                                <footer className="blockquote-footer">Aneesh Agrawal, Software Engineer, Lyft</footer>
                                <div className="d-flex justify-content-center my-3">
                                    <img src="/external-logos/lyft-logo.svg" width="60px" />
                                </div>
                                <Link to="/case-studies/lyft-monolith-to-microservices">
                                    Lyft uses Sourcegraph to ensure production stability{' '}
                                    <ArrowRightBoxIcon className="icon-inline ml-1" />
                                </Link>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <hr className="my-6" />
            </ContentSection>
            <ContentSection>
                <TrySourcegraph />
            </ContentSection>
        </div>
    </Layout>
)) as React.FunctionComponent<any>
