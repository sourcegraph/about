import { Link } from 'gatsby'
import ArrowRightBoxIcon from 'mdi-react/ArrowRightBoxIcon'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import * as React from 'react'
import { Helmet } from 'react-helmet'
import { ContentSection } from '../components/content/ContentSection'
import GetStarted from '../components/GetStarted'
import { IntegrationsSection } from '../components/IntegrationsSection'
import Layout from '../components/Layout'
import { CustomerLogosSectionAnimated } from '../components/product/CustomerLogosSectionAnimated';

const Index: React.FunctionComponent = (props: any) => (
    <Layout location={props.location}>
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
                            <p className="home__semiwide-paragraph my-5">
                                Find and fix things across all of your code faster with Sourcegraph. Onboard to a new
                                codebase, make large-scale refactors, increase efficiency, address security risks,
                                root-cause incidents, and more.
                            </p>
                            <div className="pt-1">
                                <Link className="btn btn-primary" to="/get-started">
                                    Try Sourcegraph now <ArrowRightIcon className="ml-1" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ContentSection className="py-6 mt-3 d-none d-sm-block">
                <div className="home__nested-screenshots">
                    <img
                        src="/screenshots/code-page-0.png"
                        className="home__screenshot home__screenshot--main"
                        alt="Searching for code in the Sourcegraph search bar"
                    />
                    <img
                        src="/screenshots/search-page-1.png"
                        className="home__screenshot home__screenshot--nested"
                        alt="Code results from a code search, including code coverage states"
                    />
                </div>
            </ContentSection>
            <CustomerLogosSectionAnimated showButton={true} className="pt-5" />
            <div className="container">
                <hr className="my-md-6" />
            </div>
            <ContentSection className="mt-5 mb-6">
                <div className="row">
                    <div className="col-lg-5 mt-md-5">
                        <h2 className="display-3 font-weight-bold">Search&nbsp;your&nbsp;code. All&nbsp;of&nbsp;it.</h2>
                        <p>
                            Point Sourcegraph at the repositories you work with, stored in any code host &mdash; then
                            start searching. Stay in flow and find your answer quickly with smart filters such as{' '}
                            <code className="border rounded px-1">Non-test files</code>,{' '}
                            <code className="border rounded px-1">lang:java</code>,{' '}
                            <code className="border rounded px-1">repo:frontend</code>, and more. Stop{' '}
                            <code className="border rounded px-1">grep</code>'ing your stale local clones and fighting
                            with your code host's search to match &ldquo;special&rdquo; characters like{' '}
                            <code className="border rounded px-1 text-nowrap">.:=(){}</code>.
                        </p>
                        <div className="pt-1">
                            <a className="d-flex align-items-center" href="https://docs.sourcegraph.com/code_search">
                                Code search documentation <ArrowRightBoxIcon className="icon-inline ml-1" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-7 mt-5 pl-lg-4">
                        <img
                            src="/code-search-illustrated.svg"
                            className="home__diagram w-150"
                            alt="Code search across multiple code hosts, including GitHub, GitLab, BitBucket, and Azure"
                        />
                    </div>
                </div>
            </ContentSection>
            <IntegrationsSection />

            <div className="container">
                <hr className="my-md-6" />
            </div>

            <div className="container">
                <h2 className="display-2 font-weight-bold">How developers use Sourcegraph</h2>
                <div className="row">
                    <div className="col-lg-6 mt-lg-0">
                        <p className="my-5">
                            Sourcegraph is built by developers for developers, to help them solve the big code problems
                            they face, all day every day. Here's how they're doing it.
                        </p>
                    </div>
                    <div className="col-lg-6 mt-2 mt-lg-4">
                        <div className="card pt-0" style={{ background: "url('/customers-page-bg.svg') no-repeat" }}>
                            <strong className="card-header border-0 pb-0">Want to use Sourcegraph at work?</strong>
                            <p className="card-body mb-0 pt-1">
                                <Link to="/get-started">Use it free</Link> for up to 10 developers. To get your company
                                to upgrade to a <Link to="/pricing">paid plan</Link>, see the{' '}
                                <Link to="/customers">customers page</Link> (to make the case). Or{' '}
                                <a href="/contact/request-info">schedule time with us</a> for help.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <ContentSection className="mt-6">
                <div className="row">
                    <div className="col-lg-5">
                        <h2>Find anything in code, fast</h2>
                        <p>
                            Sourcegraph returns results in milliseconds, even across thousands of repositories, like:
                            <ul>
                                <li>
                                    Examples of{' '}
                                    <a href="https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/sourcegraph/+f:dockerfile+apt-get%7Capk&patternType=regexp">
                                        installing packages in a Dockerfile
                                    </a>
                                </li>
                                <li>Places where a specific error is returned</li>
                                <li>
                                    Recent TypeScript changes mentioning{' '}
                                    <code className="border rounded px-1">auth</code>
                                </li>
                                <li>Definitions of a specific function</li>
                            </ul>
                        </p>
                        <p>
                            Write queries with regex, punctuation, symbols, and advanced syntax-aware pattern matching.
                            Sourcegraph’s visual and interactive query builder constructs complex queries to find and
                            filter code in ways IDEs and code hosts can’t.
                        </p>
                        <div className="pt-1">
                            <a className="d-flex align-items-center" href="https://docs.sourcegraph.com/code_search">
                                Code search documentation <ArrowRightBoxIcon className="icon-inline ml-1" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-7 pl-lg-6 mt-3">
                        <div className="container video-embed embed-responsive embed-responsive-16by9 ">
                            <iframe
                                class="embed-responsive-item"
                                src="https://www.youtube-nocookie.com/embed/Iye0yZVr1Ro?autoplay=0&amp;cc_load_policy=0&amp;start=0&amp;end=0&amp;loop=0&amp;controls=1&amp;modestbranding=1&amp;rel=0"
                                allowfullscreen=""
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                frameborder="0"
                                title="AND/OR operators for universal code search"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </ContentSection>
            <ContentSection className="mt-6">
                <div className="row flex-wrap-reverse">
                    <div className="col-lg-7 pr-lg-6 mt-3">
                        <div className="container video-embed embed-responsive embed-responsive-16by9 ">
                            <iframe
                                class="embed-responsive-item"
                                src="https://www.youtube-nocookie.com/embed/KSx61-yAMLs?autoplay=0&amp;cc_load_policy=0&amp;start=0&amp;end=0&amp;loop=0&amp;controls=1&amp;modestbranding=1&amp;rel=0"
                                allowfullscreen=""
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                frameborder="0"
                                title="Exploring code with Sourcegraph"
                            ></iframe>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <h2>Navigate code, with definitions and references</h2>
                        <p>
                            Find definitions, references, usage examples, and anything else in code, across package,
                            dependency, and repository boundaries. You can navigate code in your web browser in any
                            repository on any branch, instantly and without losing your local context.
                        </p>
                        <div className="pt-1">
                            <a
                                className="d-flex align-items-center"
                                href="https://docs.sourcegraph.com/code_intelligence"
                            >
                                Code intelligence documentation <ArrowRightBoxIcon className="icon-inline ml-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </ContentSection>
            <ContentSection className="mt-6">
                <div className="row">
                    <div className="col-lg-5">
                        <h2>Make large-scale code changes</h2>
                        <p>
                            Remove legacy code, fix critical security issues, and pay down tech debt. Run campaigns to
                            compute diffs and create branches and pull requests across multiple repositories. With
                            Sourcegraph, teams move fast and fix things, safely.
                        </p>
                        <div className="pt-1">
                            <a className="d-flex align-items-center" href="https://docs.sourcegraph.com/campaigns">
                                Campaigns documentation <ArrowRightBoxIcon className="icon-inline ml-1" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-7 pl-lg-6 mt-3">
                        <div className="container video-embed embed-responsive embed-responsive-16by9 ">
                            <iframe
                                className="embed-responsive-item"
                                src="https://www.youtube-nocookie.com/embed/EfKwKFzOs3E?autoplay=0&amp;cc_load_policy=0&amp;start=0&amp;end=0&amp;loop=0&amp;controls=1&amp;modestbranding=1&amp;rel=0"
                                allowFullScreen={true}
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                frameBorder={0}
                                title="Sourcegraph Campaigns"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </ContentSection>
            <ContentSection className="mt-6">
                <div className="row flex-wrap-reverse">
                    <div className="col-lg-7 pr-lg-6 mt-3">
                        <div className="container video-embed embed-responsive embed-responsive-16by9 ">
                            <iframe
                                className="embed-responsive-item"
                                src="https://www.youtube-nocookie.com/embed/XqeRb6Mc4Co?autoplay=0&amp;cc_load_policy=0&amp;start=0&amp;end=0&amp;loop=0&amp;controls=1&amp;modestbranding=1&amp;rel=0"
                                allowFullScreen={true}
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                frameBorder={0}
                                title="Product preview: code insights"
                            ></iframe>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <h2>Generate code insights [preview]</h2>
                        <p>
                            Aggregate data from connected external services, and enhance it with code intelligence
                            to give you the information you care about. Take direct actions on these insights with&nbsp;
                            <Link to="https://docs.sourcegraph.com/campaigns">campaigns</Link>, like proposing
                            an automated refactor to fix a problem detected through static analysis.
                        </p>
                        <div className="pt-1">
                            <a className="d-flex align-items-center" href="/contact/request-demo">
                                Request a demo <ArrowRightBoxIcon className="icon-inline ml-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </ContentSection>
            <GetStarted className="bg-gradient-green-blue mt-6" />
        </div>
    </Layout>
)

export default Index
