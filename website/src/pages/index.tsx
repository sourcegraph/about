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
                                Find and fix things across all of your code much faster. Sourcegraph helps you onboard
                                to a new codebase, make large-scale refactors, find and fix insecure code, root-cause
                                incidents, and more.
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
            <ContentSection className="py-6 mt-3">
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
                            Just point Sourcegraph at your repositories and code hosts&mdash;then start searching. Stay
                            in flow and find your answer quickly with smart filters such as{' '}
                            <code className="border rounded px-1">Non-test files</code>,{' '}
                            <code className="border rounded px-1">lang:java</code>,{' '}
                            <code className="border rounded px-1">repo:frontend</code>, and more. Stop{' '}
                            <code className="border rounded px-1">grep</code>'ing your stale local clones and fighting
                            with your code host's search to match &ldquo;special&rdquo; characters like{' '}
                            <code className="border rounded px-1 text-nowrap">.:=(){}</code>.
                        </p>
                        <div className="pt-1">
                            <a className="d-flex align-items-center" href="TODO(sqs)">
                                Learn more about code search <ArrowRightBoxIcon className="icon-inline ml-1" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-7 mt-5 pl-lg-4">
                        <img src="/code-search-illustrated.svg" className="home__diagram w-150" />
                    </div>
                </div>
            </ContentSection>
            <IntegrationsSection />

            <div className="container">
                <hr className="my-6" />
            </div>

            <div className="container">
                <h2 className="display-2 font-weight-bold">How developers use Sourcegraph</h2>
                <div className="row">
                    <div className="col-lg-6 mt-lg-0">
                        <p className="my-5">
                            Sourcegraph is built by developers, for developers. Naturally, we get a lot of feedback from
                            developers and software teams who use Sourcegraph many times per day. Here's how they're
                            using it.
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
                    <div className="col-lg-6">
                        <h2>TODO code search</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in lectus id enim pretium
                            dignissim. Curabitur in purus vitae dui porttitor pulvinar sit amet non turpis. Ut eu
                            sagittis sem, eu maximus libero.
                        </p>
                        <div className="pt-1">
                            <a className="d-flex align-items-center" href="TODO(sqs)">
                                TODO(sqs) <ArrowRightBoxIcon className="icon-inline ml-1" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src="/screenshots/search-page-small-0.png" className="home__screenshot w-100" />
                    </div>
                </div>
            </ContentSection>
            <ContentSection className="my-6">
                <div className="row">
                    <div className="col-lg-7">
                        <img src="/screenshots/search-page-small-0.png" className="home__screenshot w-100" />
                    </div>
                    <div className="col-lg-5">
                        <h2>TODO code navigation</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in lectus id enim pretium
                            dignissim. Curabitur in purus vitae dui porttitor pulvinar sit amet non turpis. Ut eu
                            sagittis sem, eu maximus libero.
                        </p>
                        <div className="pt-1">
                            <a className="d-flex align-items-center" href="TODO(sqs)">
                                TODO(sqs) <ArrowRightBoxIcon className="icon-inline ml-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </ContentSection>
            <ContentSection className="py-6 mb-6">
                <div className="row">
                    <div className="col-lg-5">
                        <h2>TODO code review and code host integrations</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in lectus id enim pretium
                            dignissim. Curabitur in purus vitae dui porttitor pulvinar sit amet non turpis. Ut eu
                            sagittis sem, eu maximus libero.
                        </p>
                        <div className="pt-1">
                            <a className="d-flex align-items-center" href="TODO(sqs)">
                                TODO(sqs) <ArrowRightBoxIcon className="icon-inline ml-1" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <img src="/screenshots/search-page-small-0.png" className="home__screenshot w-100" />
                    </div>
                </div>
            </ContentSection>
            <ContentSection className="my-6">
                <div className="row">
                    <div className="col-lg-7">
                        <img src="/screenshots/search-page-small-0.png" className="home__screenshot w-100" />
                    </div>
                    <div className="col-lg-5">
                        <h2>TODO campaigns</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in lectus id enim pretium
                            dignissim. Curabitur in purus vitae dui porttitor pulvinar sit amet non turpis. Ut eu
                            sagittis sem, eu maximus libero.
                        </p>
                        <div className="pt-1">
                            <a className="d-flex align-items-center" href="TODO(sqs)">
                                TODO(sqs) <ArrowRightBoxIcon className="icon-inline ml-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </ContentSection>
            <ContentSection className="py-6 mb-6">
                <div className="row">
                    <div className="col-lg-5">
                        <h2>TODO code insights</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in lectus id enim pretium
                            dignissim. Curabitur in purus vitae dui porttitor pulvinar sit amet non turpis. Ut eu
                            sagittis sem, eu maximus libero.
                        </p>
                        <div className="pt-1">
                            <a className="d-flex align-items-center" href="TODO(sqs)">
                                TODO(sqs) <ArrowRightBoxIcon className="icon-inline ml-1" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <img src="/screenshots/search-page-small-0.png" className="home__screenshot w-100" />
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
