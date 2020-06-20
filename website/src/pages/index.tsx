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

/**
 * This list is lovingly hand-crafted for the home page so the title,
 * description, and image can be customized for better visual layout.
 *
 * Would be great to see this data-driven at some point in the future.
 */
const featuredPosts: BlogPost[] = [
    {
        title:
            'Sourcegraph 3.16: Search past releases, get started with campaigns, and enjoy syntax highlighting improvements',
        description:
            'Read about and watch videos of the features released in Sourcegraph 3.16 on May 20, 2020. Upgrade your Sourcegraph instance today!',
        thumbnail: '/sourcegraph-mark.png',
        url: '/blog/sourcegraph-3.16',
    },
    {
        title: 'We made a children\'s book titled "Our "ABCs: Always Be Coding" and it\'s free to download',
        description:
            "We've created a new digital children's book titled \"Our ABCs: Always Be Coding”—for all children at home that wonder what their techie parents do all day, night, and some weekends, too!",
        thumbnail: '/other/abcs-book/our-abcs.png',
        url: '/blog/our-abcs-always-be-coding-childrens-book',
    },
    {
        title: 'Universal Code Intelligence for GitHub with the Sourcegraph browser extension',
        description:
            'Universal Code Intelligence for GitHub means bringing code navigation features such as hover tooltips, go to definition, and find references to every code view and pull request, supporting every popular language, and all public and private repositories.',
        thumbnail: '/external-logos/github-logo.svg',
        url: '/blog/universal-code-intelligence-github-sourcegraph-browser-extension',
    },
]

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
            title: 'Sourcegraph: Universal Code Search',
            description: 'Find and fix things across all of your code with Sourcegraph universal code search.',
            image: 'https://info.sourcegraph.com/hubfs/sourcegraph_logo.png',
        }}
    >
        <Helmet>
            <meta name="google-site-verification" content="vRPkjcQnrXKgId0IyxVPHp0CGp3B7zaEFiTpyb8kPSQ" />
            <style dangerouslySetInnerHTML={{ __html: `>.async-hide { opacity: 0 !important}` }} />
            <script>
                {`(function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
        h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
        (a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
        })(window,document.documentElement,'async-hide','dataLayer',4000,
        {'GTM-TB4NLS7':true});`}
            </script>
        </Helmet>
        <div className="home">
            <div className="home__hero">
                <div className="home__intro container">
                    <div className="row">
                        <div className="col mt-6 mb-6 mb-lg-0">
                            <h1 className="display-1 font-weight-bold mb-0">Universal Code Search</h1>
                            <h2 className="display-2 mb-0">Move fast, even in big codebases. </h2>
                            <p className="home__intro-text my-5 font-weight-light">
                                Find and fix things across all of your code much faster. Sourcegraph helps you onboard
                                to a new codebase, make large-scale refactors, root-cause and fix bugs, find insecure
                                code, and more.
                            </p>
                            <div className="pt-1">
                                <button className="btn btn-primary">
                                    Try Sourcegraph now <ArrowRightIcon className="ml-1" />
                                    {/* TODO(sqs) */}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ContentSection className="py-6 mt-3">
                <div className="home__nested-screenshots">
                    <img src="/screenshots/code-page-0.png" className="home__screenshot home__screenshot--main" />
                    <img src="/screenshots/search-page-0.png" className="home__screenshot home__screenshot--nested" />
                </div>
            </ContentSection>
            <CustomerLogosSection className="pt-5 pb-6 mb-2" />
            <ContentSection className="py-4 border-top border-bottom">
                <div className="row">
                    <div className="col-lg-6 mt-5">
                        <h2 className="display-3 font-weight-bold">Search your code. All of it.</h2>
                        <p>
                            Just point Sourcegraph at your repositories and code hosts&mdash;then start searching. Stay
                            in flow and find your answer quickly with with smart filters such as{' '}
                            <code className="border rounded px-1">Non-test files</code>,{' '}
                            <code className="border rounded px-1">lang:java</code>,{' '}
                            <code className="border rounded px-1">repo:frontend</code>, and more. Stop{' '}
                            <code className="border rounded px-1">grep</code>'ing your stale local clones and fighting
                            with your code host's search to match &ldquo;special&rdquo; characters like{' '}
                            <code className="border rounded px-1 text-nowrap">.:=(){}</code>.
                        </p>
                        <div className="d-flex">
                            Supports:{' '}
                            <ul className="list-inline d-inline-flex ml-2 flex-wrap">
                                <li className="list-inline-item text-nowrap">
                                    <code className="border rounded px-1">GitHub</code>
                                </li>
                                <li className="list-inline-item text-nowrap">
                                    <code className="border rounded px-1">GitHub Enterprise</code>
                                </li>
                                <li className="list-inline-item text-nowrap">
                                    <code className="border rounded px-1">GitLab</code>
                                </li>
                                <li className="list-inline-item text-nowrap">
                                    <code className="border rounded px-1">Bitbucket Server</code>
                                </li>
                                <li className="list-inline-item text-nowrap">
                                    <code className="border rounded px-1">Bitbucket Cloud</code>
                                </li>
                                <li className="list-inline-item text-nowrap">
                                    <code className="border rounded px-1">Phabricator</code>
                                </li>
                                <li className="list-inline-item text-nowrap">
                                    <code className="border rounded px-1">AWS CodeCommit</code>
                                </li>
                                <li className="list-inline-item text-nowrap">
                                    <code className="border rounded px-1">Azure DevOps</code>
                                </li>
                                <li className="list-inline-item text-nowrap">
                                    <code className="border rounded px-1">Perforce</code>
                                </li>
                                <li className="list-inline-item text-nowrap">
                                    <code className="border rounded px-1">Mercurial</code>
                                </li>
                                <li className="list-inline-item text-nowrap">
                                    <code className="border rounded px-1">Subversion</code>
                                </li>
                                <li className="list-inline-item text-nowrap">
                                    <code className="border rounded px-1">CVS</code>
                                </li>
                                <li className="list-inline-item text-nowrap">
                                    <code className="border rounded px-1">TFS</code>
                                </li>
                                <li className="list-inline-item text-nowrap">
                                    <code className="border rounded px-1">Gitea</code>
                                </li>
                                <li className="list-inline-item text-nowrap">
                                    <code className="border rounded px-1">Gerrit</code>
                                </li>
                                <li className="list-inline-item text-nowrap">
                                    <code className="border rounded px-1">cgit</code>
                                </li>
                                <li className="list-inline-item text-nowrap">
                                    <code className="border rounded px-1">Ridiculously big monorepos</code>
                                </li>
                                <li className="list-inline-item text-nowrap">
                                    <code className="border rounded px-1">500,000+ repositories</code>
                                </li>
                                <li className="list-inline-item text-nowrap">
                                    <code className="border rounded px-1">Any combo of these</code>
                                </li>
                                <li className="d-block">
                                    <a href="#" className="small text-muted">
                                        Have a repository not covered here?
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="pt-1">
                            <a className="d-flex align-items-center" href="TODO(sqs)">
                                Learn more about code search <ArrowRightBoxIcon className="icon-inline ml-1" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-5">
                        <img src="/screenshots/search-page-small-0.png" className="home__screenshot w-100" />
                    </div>
                </div>
            </ContentSection>
            <div className="container">
                <IntegratesWithSection className="pt-5 pb-4" />
            </div>
            <ContentSection className="py-6 border-top mb-6">
                <div className="row">
                    <div className="col-md-6 mt-4 pr-5">
                        <h3 className="display-4 font-weight-bold">Try Sourcegraph for free today.</h3>
                        <p>You'll be searching your own code in 10 minutes (self-hosted if you want).</p>
                    </div>
                    <div className="col-mb-6 mt-4 pt-3">
                        <button className="btn btn-outline-secondary mr-2">Schedule a demo</button>
                        <button className="btn btn-primary">Try Sourcegraph now</button>
                    </div>
                </div>
            </ContentSection>
        </div>
    </Layout>
)) as React.FunctionComponent<any>
