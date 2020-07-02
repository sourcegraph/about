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
            <div className="customers-page customers-page__hero container mt-2">
                <div className="row">
                    <div className="col-lg-7 mt-6 mb-6">
                        <h1 className="display-1 font-weight-bold mb-0">
                            Our customers use Sourcegraph to solve big problems
                        </h1>
                        <p className="home__semiwide-paragraph my-5 display-4">
                            Sourcegraph helps companies of all sizes in all industries to move fast, find and fix
                            things, and address security risks when building software.
                        </p>
                    </div>
                    <div className="col-lg-5 mt-6 pt-4 mb-6">
                        <h5 className="font-weight-normal">See how customers use Sourcegraph to:</h5>
                        <div className="list-group">
                            <Link to="#code-search" className="list-group-item list-group-item-action">
                                Find answers to code questions <ArrowRightIcon className="icon-inline ml-1" />
                            </Link>
                            <Link to="#productivity" className="list-group-item list-group-item-action">
                                Make coding more efficient <ArrowRightIcon className="icon-inline ml-1" />
                            </Link>
                            <Link to="#security" className="list-group-item list-group-item-action">
                                Find security problems in hours, not days
                                <ArrowRightIcon className="icon-inline ml-1" />
                            </Link>
                            <Link to="#code-reviews" className="list-group-item list-group-item-action">
                                Catch more bugs with better code reviews
                                <ArrowRightIcon className="icon-inline ml-1" />
                            </Link>
                            <Link to="#onboard" className="list-group-item list-group-item-action">
                                Onboard everyone faster <ArrowRightIcon className="icon-inline ml-1" />
                            </Link>
                            <Link to="#campaigns" className="list-group-item list-group-item-action">
                                Automate code changes <ArrowRightIcon className="icon-inline ml-1" />
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
            <ContentSection className="mt-6" id="code-search">
                <hr className="my-6" />
                <div className="row">
                    <div className="col-lg-5">
                        <h2 className="display-3 font-weight-bold">Find answers to code questions</h2>
                        <p>
                            Search repositories from any code host, with support for regular expressions, punctuation,
                            symbols, and advanced syntax-aware pattern matching. Narrow results with powerful search
                            filters for file, language, path, custom repository groups and other attributes, and across
                            version contexts, merge diffs, and commit messages. Sourcegraph’s visual and interactive
                            query builder constructs complex queries to find and filter code in ways IDEs and code hosts
                            can’t.
                        </p>
                    </div>
                    <div className="col-lg-7 pl-lg-6">
                        <div class="container my-4 video-embed embed-responsive embed-responsive-16by9 ">
                            <iframe
                                class="embed-responsive-item"
                                src="https://www.youtube.com/embed/GQj5jXdON3A?autoplay=0&amp;cc_load_policy=0&amp;start=0&amp;end=0&amp;loop=0&amp;controls=1&amp;modestbranding=0&amp;rel=0"
                                allowfullscreen=""
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                frameborder="0"
                            ></iframe>
                        </div>
                    </div>
                    <div className="row justify-content-center pt-4">
                        <div className="col-lg-10 text-center">
                            <img src="/external-logos/yelp.svg" width="130px" />
                            <blockquote className="blockquote case-studies__quote case-studies__quote--in-content">
                                <p>
                                    Sourcegraph empowers developers at Yelp to ship code faster and more reliably than
                                    ever before. Code intelligence features such as Go-to-Definition and Find References
                                    are heavily-used features that enable developers to understand the plethora of
                                    microservices and libraries in our code base.
                                </p>
                                <footer className="blockquote-footer">Kevin Chen, Software Engineer, Yelp</footer>
                            </blockquote>
                            <Link to="https://engineeringblog.yelp.com/2019/11/winning-the-hackathon-with-sourcegraph.html">
                                Yelp Engineering Blog: Winning the Hackathon with Sourcegraph
                                <ArrowRightBoxIcon className="icon-inline ml-1" />
                            </Link>
                        </div>
                    </div>
                </div>
                <hr className="my-6" id="productivity" />
            </ContentSection>
            <ContentSection className="mt-6">
                <div className="row">
                    <div className="col-lg-5">
                        <h2 className="display-3 font-weight-bold">Make coding more efficient</h2>
                        <p>
                            {' '}
                            Stay in flow and find answers quickly. Minimize the impact of context switches to streamline
                            day-to-day tasks. Sourcegraph’s browser-based interface lets developers maintain their
                            editor state while exploring other parts of the code, greatly improving productivity.
                        </p>
                    </div>
                        <div class="container my-4 video-embed embed-responsive embed-responsive-16by9 ">
                            <iframe
                                class="embed-responsive-item"
                                src="https://www.youtube.com/embed/KSx61-yAMLs?autoplay=0&amp;cc_load_policy=0&amp;start=0&amp;end=0&amp;loop=0&amp;controls=1&amp;modestbranding=0&amp;rel=0"
                                allowfullscreen=""
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                frameborder="0"
                            ></iframe>
                        </div>
                </div>
                <div className="row justify-content-center pt-6">
                    <div className="col-lg-10 text-center">
                        <img src="/external-logos/sofi-logo.svg" width="100px" />
                        <blockquote className="blockquote case-studies__quote case-studies__quote--in-content">
                            <p>
                                Sourcegraph is an ingrained part of my daily process at SoFi. With Sourcegraph, our
                                engineers can understand all of the repercussions of committing a change to a service
                                that is exposed to other services.
                            </p>
                            <footer className="blockquote-footer">Ursula Robertson, Engineering Manager, SoFi</footer>
                        </blockquote>
                        <Link to="/case-studies/sofi-moves-fast-on-hundreds-of-microservices/">
                            SoFi adopts Sourcegraph Universal Code Search to manage hundreds of microservices
                            <ArrowRightBoxIcon className="icon-inline ml-1" />
                        </Link>
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
                        <div class="container my-4 video-embed embed-responsive embed-responsive-16by9 ">
                            <iframe
                                class="embed-responsive-item"
                                src="https://www.youtube.com/embed/OGd8wr7XpgU?autoplay=0&amp;cc_load_policy=0&amp;start=0&amp;end=0&amp;loop=0&amp;controls=1&amp;modestbranding=0&amp;rel=0"
                                allowfullscreen=""
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                frameborder="0"
                            ></iframe>
                        </div>
                    </div>
                    <div className="row justify-content-center pt-6">
                        <div className="col-lg-10 text-center">
                            <img src="/external-logos/quantcast-logo.svg" width="150px" />
                            <blockquote className="blockquote case-studies__quote case-studies__quote--in-content">
                                <p>
                                    Sourcegraph’s search gave us confidence because we knew we wouldn't overlook
                                    anything. Sourcegraph returns all search results, it doesn’t drop or elide them.
                                </p>
                                <footer className="blockquote-footer">
                                    Simon Law, Staff Software Engineer, Quantcast
                                </footer>
                            </blockquote>
                            <Link to="/case-studies/quantcast-large-scale-refactoring/">
                                Quantcast adopts Sourcegraph Universal Code Search for large scale refactoring{' '}
                                <ArrowRightBoxIcon className="icon-inline ml-1" />
                            </Link>
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
                        <h5>
                            Watch how Sid Sijbrandij (GitLab CEO) and Quinn Slack (Sourcegraph CEO) do code reviews.
                        </h5>
                        <div class="container my-4 video-embed embed-responsive embed-responsive-16by9 ">
                            <iframe
                                class="embed-responsive-item"
                                src="https://www.youtube.com/embed/LgpuH2iaZ3w?autoplay=0&amp;cc_load_policy=0&amp;start=0&amp;end=0&amp;loop=0&amp;controls=1&amp;modestbranding=0&amp;rel=0"
                                allowfullscreen=""
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                frameborder="0"
                            ></iframe>
                        </div>
                    </div>
                    <div className="row justify-content-center pt-4">
                        <div className="col-lg-10 text-center">
                            <img src="/external-logos/workiva-vector-logo.svg" width="150px" />
                            <blockquote className="blockquote case-studies__quote case-studies__quote--in-content">
                                <p>
                                    In a code review, you're given a very truncated view of the code, from dozens of
                                    different places, different repos, or different libraries. It can be difficult,
                                    particularly if you're not an expert in that codebase, to grok all of that stuff
                                    instantly. Being able to get contextual information on code reviews, particularly
                                    across repos, is really useful.
                                </p>
                                <footer className="blockquote-footer">
                                    Trent Grover, Director of Architecture at Workiva
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <hr className="mb-6" id="onboard" />
            </ContentSection>
            <ContentSection className="mt-6">
                <div className="row">
                    <div className="col-lg-5">
                        <h2 className="display-3 font-weight-bold">Onboard everyone faster</h2>
                        <p>
                            Reduce the time to first commit. Minimize context-switching when exploring code in
                            production and in new and unfamiliar codebases, with contextual code intelligence.
                            Sourcegraph enables link sharing to specific code with peers and managers in a web
                            interface, so questions get answered faster and with less effort. For remote and distributed
                            engineering teams using Sourcegraph, these code links become essential conduits of
                            knowledge, shared hundreds of times per day over chat, on issue trackers, and in
                            documentation.
                        </p>
                    </div>
                    <div className="col-lg-7 pl-lg-6">
                        <div class="container my-4 video-embed embed-responsive embed-responsive-16by9 ">
                            <iframe
                                class="embed-responsive-item"
                                src="https://www.youtube.com/embed/KSx61-yAMLs?autoplay=0&amp;cc_load_policy=0&amp;start=0&amp;end=0&amp;loop=0&amp;controls=1&amp;modestbranding=0&amp;rel=0"
                                allowfullscreen=""
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                frameborder="0"
                            ></iframe>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center pt-6">
                    <div className="col-lg-10 text-center">
                        <img src="/external-logos/convoy-logo.svg" width="150px" />
                        <blockquote className="blockquote case-studies__quote case-studies__quote--in-content">
                            <p>
                                For our new developers, Sourcegraph has been invaluable to get to know the repository
                                structure, to track down where code lives, and self-service during their investigations.
                            </p>
                            <footer className="blockquote-footer">Owen Kim, Senior Software Engineer, Convoy</footer>
                        </blockquote>{' '}
                        <Link to="/case-studies/convoy-improved-on-boarding">
                            How Convoy's developers onboard faster with Sourcegraph{' '}
                            <ArrowRightBoxIcon className="icon-inline ml-1" />
                        </Link>{' '}
                    </div>
                </div>
                <hr className="my-6" id="campaigns" />
            </ContentSection>
            <ContentSection className="mt-6">
                <div className="row">
                    <div className="col-lg-5">
                        <h2 className="display-3 font-weight-bold">Automate code changes</h2>
                        <p>
                            Move quickly and safely when removing legacy code, fixing critical security issues, and
                            paying down tech debt. Identify which call sites might be affected by changes, and run
                            campaigns to compute diffs and create branches and pull requests across multiple
                            repositories. Large-scale code changes and refactors can be painless, more accurate, and
                            faster, when done automatically with Sourcegraph.
                        </p>
                    </div>
                    <div className="col-lg-7 pl-lg-6">
                        <div class="container my-4 video-embed embed-responsive embed-responsive-16by9 ">
                            <iframe
                                class="embed-responsive-item"
                                src="https://www.youtube.com/embed/aqcCrqRB17w?autoplay=0&amp;cc_load_policy=0&amp;start=0&amp;end=0&amp;loop=0&amp;controls=1&amp;modestbranding=0&amp;rel=0"
                                allowfullscreen=""
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                frameborder="0"
                            ></iframe>
                        </div>
                    </div>
                    <div className="row justify-content-center pt-4">
                        <div className="col-lg-10 text-center">
                            <img src="/external-logos/lyft-logo.svg" width="100px" />
                            <blockquote className="blockquote case-studies__quote case-studies__quote--in-content">
                                <p>
                                    Sourcegraph gives us the ability to search for and refactor references to deprecated
                                    services, libraries, URL patterns, and more across our 2000+ repositories, and the
                                    confidence that we're not leaving anyone behind.
                                </p>
                                <footer className="blockquote-footer">Aneesh Agrawal, Software Engineer, Lyft</footer>
                            </blockquote>{' '}
                            <Link to="/case-studies/lyft-monolith-to-microservices">
                                How Convoy's developers onboard faster with Sourcegraph{' '}
                                <ArrowRightBoxIcon className="icon-inline ml-1" />
                            </Link>{' '}
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
