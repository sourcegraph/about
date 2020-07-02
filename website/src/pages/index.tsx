import { Link } from 'gatsby'
import ArrowRightBoxIcon from 'mdi-react/ArrowRightBoxIcon'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import * as React from 'react'
import Helmet from 'react-helmet'
import { ContentSection } from '../components/content/ContentSection'
import { IntegrationsSection } from '../components/IntegrationsSection'
import Layout from '../components/Layout'
import { CustomerLogosSection } from '../components/product/CustomerLogosSection'
import { TrySourcegraph } from '../components/TrySourcegraph'

const Index: React.FunctionComponent = (props: any) => (
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
                            <p className="home__semiwide-paragraph my-5">
                                Find and fix things across all of your code faster with Sourcegraph. Onboard to a new
                                codebase, make large-scale refactors, increase efficiency, address security risks,
                                root-cause incidents, and more.
                            </p>
                            <div className="pt-1">
                                <Link className="btn btn-primary" to="/get-started">
                                    Try Sourcegraph now <ArrowRightIcon className="ml-1" />
                                    {/* TODO(sqs) */}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ContentSection className="py-6 mt-3 d-none d-sm-block">
                <div className="home__nested-screenshots">
                    <img src="/screenshots/code-page-0.png" className="home__screenshot home__screenshot--main" />
                    <img src="/screenshots/search-page-0.png" className="home__screenshot home__screenshot--nested" />
                </div>
            </ContentSection>
            <CustomerLogosSection className="pt-5" />
            <div className="container">
                <hr className="my-6" />
            </div>
            <ContentSection className="my-6">
                <div className="row">
                    <div className="col-lg-5 mt-5">
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
                            <a className="d-flex align-items-center" href="https://docs.sourcegraph.com/user/search">
                                Learn more about code search <ArrowRightBoxIcon className="icon-inline ml-1" />
                            </a>
                        </div>
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
                </div>
            </ContentSection>
            <IntegrationsSection />

            <div className="container">
                <hr className="my-6" />
            </div>

            <div className="container">
                <h2 className="display-2 font-weight-bold">Why universal code search?</h2>
                <div className="row">
                    <div className="col-lg-6 mt-lg-0">
                        <p className="my-5">
                            Search limited to only Python files is like Google only indexing websites built with Ruby on
                            Rails – a nonstarter for modern development teams. Code search must be universal to be
                            effective.
                        </p>
                        <p className="my-5">
                            Universal code search enables you to navigate and understand interdependent codebases —
                            across repositories, programming languages, code hosts, version control systems, services,
                            and APIs — to find the code and other information you need to do your job.
                        </p>
                    </div>
                    <div className="col-lg-6 mt-2 mt-lg-4">
                        <div className="card pt-0" style={{ background: "url('/customers-page-bg.svg') no-repeat" }}>
                            <strong className="card-header border-0 pb-0">Want to use Sourcegraph at work?</strong>
                            <p className="card-body mb-0 pt-1">
                                <Link to="/get-started">Use it free</Link> for up to 10 developers. To get your company
                                to upgrade to a <Link to="/pricing">paid plan</Link>, see the{' '}
                                <Link to="/customers">customers page</Link> (to make the case). Or{' '}
                                <a href="#">schedule time with us</a> for help.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <ContentSection className="my-6">
                <div className="row">
                    <div className="col-lg-5">
                        <h2>Search across repositories</h2>
                        <p>
                            Write queries with regex, punctuation, symbols, and advanced syntax-aware pattern matching.
                            Filter by file, language, path, and custom repository groups, and across programming
                            languages, developer tools, search scopes, merge diffs, and commit messages. Sourcegraph’s
                            universal code search engine returns results in milliseconds, even across thousands of
                            repositories.
                        </p>
                        <div className="pt-1">
                            <a className="d-flex align-items-center" href="https://docs.sourcegraph.com/user/search">
                                Read the documentation on code search <ArrowRightBoxIcon className="icon-inline ml-1" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-7 pl-lg-6">
                        <div class="container my-4 video-embed embed-responsive embed-responsive-16by9 ">
                            <iframe
                                class="embed-responsive-item"
                                src="https://www.youtube.com/embed/Iye0yZVr1Ro?autoplay=0&amp;cc_load_policy=0&amp;start=0&amp;end=0&amp;loop=0&amp;controls=1&amp;modestbranding=0&amp;rel=0"
                                allowfullscreen=""
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                frameborder="0"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </ContentSection>
            <ContentSection className="my-6">
                <div className="row">
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
                    <div className="col-lg-5">
                        <h2>Understand code in context to stay in flow</h2>
                        <p>
                            Find definitions, function callers, and anything else stored in code, across package,
                            dependency, and repository boundaries. Sourcegraph lets you explore code intelligently in
                            your web browser in any repository on any branch, instantly and without losing your local
                            context.
                        </p>
                        <div className="pt-1">
                            <a
                                className="d-flex align-items-center"
                                href="https://docs.sourcegraph.com/user/code_intelligence"
                            >
                                Read the documentation on code intelligence{' '}
                                <ArrowRightBoxIcon className="icon-inline ml-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </ContentSection>
            <ContentSection className="py-6 mb-6">
                <div className="row">
                    <div className="col-lg-5">
                        <h2>Make large-scale code changes</h2>
                        <p>
                            Remove legacy code, fix critical security issues, and pay down tech debt. Run campaigns to
                            compute diffs and create breaches and pull or merge requests across multiple repositories.
                            With Sourcegraph, teams move fast and fix things, safely.
                        </p>
                        <div className="pt-1">
                            <a className="d-flex align-items-center" href="https://docs.sourcegraph.com/user/campaigns">
                                Read the documentation on campaigns <ArrowRightBoxIcon className="icon-inline ml-1" />
                            </a>
                        </div>
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
                </div>
            </ContentSection>
            <ContentSection className="my-6">
                <div className="row">
                    <div className="col-lg-7 pl-lg-6">
                        <div class="container my-4 video-embed embed-responsive embed-responsive-16by9 ">
                            <iframe
                                class="embed-responsive-item"
                                src="https://www.youtube.com/embed/XqeRb6Mc4Co?autoplay=0&amp;cc_load_policy=0&amp;start=0&amp;end=0&amp;loop=0&amp;controls=1&amp;modestbranding=0&amp;rel=0"
                                allowfullscreen=""
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                frameborder="0"
                            ></iframe>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <h2>Generate code insights</h2>
                        <p>
                            Aggregate data from connected external services, and enhance with code intelligence to get
                            the metadata information you care about. Take direct actions on these insights with
                            campaigns, like proposing an automated refactor to fix a problem detected through this
                            static analysis.
                        </p>
                        <div className="pt-1">
                            <a className="d-flex align-items-center" href="mailto:feedback@sourcegraph.com">
                                Request a demo <ArrowRightBoxIcon className="icon-inline ml-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </ContentSection>
            <ContentSection className="mb-6">
                <div className="container">
                    <hr className="my-6" />
                </div>
                <TrySourcegraph />
            </ContentSection>
        </div>
    </Layout>
)

export default Index
