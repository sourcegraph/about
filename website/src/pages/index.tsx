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
                    <div className="col-lg-7 mt-5 pl-lg-6">
                        <img src="/screenshots/search-page-small-0.png" className="home__screenshot w-100" />
                    </div>
                </div>
            </ContentSection>
            <IntegrationsSection />

            <div className="container">
                <hr className="my-6" />
            </div>

            <div className="container">
                <h2 className="display-3 font-weight-bold">Solve big problems for your team with Sourcegraph.</h2>
                <p className="home__semiwide-paragraph my-5">
                    Developers say they <a href="#TODO(sqs)">&ldquo;can't live without Sourcegraph&rdquo;</a>,
                </p>
            </div>

            <ContentSection className="py-6 border-top mb-6">
                <div className="row">
                    <div className="col-lg-6">
                        <h2>TODO(sqs): make large-scale code changes.</h2>
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
            <ContentSection className="py-6 border-top mb-6">
                <div className="row">
                    <div className="col-lg-6">
                        <h2>Fix critical security problems in code. In hours, not weeks.</h2>
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
            <ContentSection className="py-6 border-top mb-6">
                <div className="row">
                    <div className="col-lg-6">
                        <h2>Find the root cause of an incident in 30% less time.</h2>
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
)

export default Index
