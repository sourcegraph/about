import { Link, PageProps } from 'gatsby'
import * as React from 'react'
import { Blockquote } from '../components/Blockquote'
import { ContentSection } from '../components/content/ContentSection'
import { CodeInsightExample } from '../components/code-insights/CodeInsightsExamples'
import { CodeInsightExampleType } from '../components/code-insights/types'
import {
    CAPTURE_INSIGHT_TERRAFORM_EXAMPLES_DATA,
    SEARCH_INSIGHT_CSS_MODULES_EXAMPLES_DATA,
} from '../components/code-insights/mock-data'
import Layout from '../components/Layout'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import CustomCarousel from '../components/CustomCarousel'
import BullsEyeArrowIcon from 'mdi-react/BullseyeArrowIcon'
import RocketLaunchOutlineIcon from 'mdi-react/RocketLaunchOutlineIcon'
import TrendingUpIcon from 'mdi-react/TrendingUpIcon'
import LighteningBoltOutlineIcon from 'mdi-react/LightningBoltOutlineIcon'

const items = [
    {
        id: 0,
        backgroundClass: '',
        buttonLabel: 'Track migrations, adoption, and deprecations',
        text: 
            <CodeInsightExample
                type={CodeInsightExampleType.Search}
                data={SEARCH_INSIGHT_CSS_MODULES_EXAMPLES_DATA}
                className=''
            />,
        headerClass: 'active',
        itemClass: 'd-block',
    },
    {
        id: 1,
        backgroundClass: '',
        buttonLabel: 'Delete and track versions of languages or packages',
        text: 
            <CodeInsightExample
                type={CodeInsightExampleType.Capture}
                data={CAPTURE_INSIGHT_TERRAFORM_EXAMPLES_DATA}
                className=''
            />,
        headerClass: '',
        itemClass: 'd-none',
    },
]

export const CodeInsightsPage: React.FunctionComponent<PageProps> = props => (
    <Layout
        location={props.location}
        meta={{
            title: 'Sourcegraph | Code Insights',
            description:
                'Draw insights from your codebase about how different initiatives are tracking over time. Code Insights is now generally available for teams of all sizes.',
            image: 'https://about.sourcegraph.com/sourcegraph-og.png',
        }}
        className="code-insights-page"
        heroAndHeaderClassName="code-insights-page__hero-and-header"
        hero={
            <div className="container pb-4">
                <div className="row">
                    <div className="col-lg-6 mb-lg-6 mt-6">
                        <h6 className="text-uppercase mb-2">Code Insights</h6>
                        <h1 className="display-3 font-weight-bold mb-5">Track what really matters to you and your team.</h1>
                        <h6>Effortlessly track and visualize trends in your entire codebase — kept automatically up to date.</h6>
                        <p className="mb-3 display-5">
                            Code Insights transforms your entire codebase into a queryable database so you can create customizable, visual dashboards in seconds
                            and get real-time results. Accurately understand how different initiatives are progressing over time and answer questions that used 
                            to be difficult or impossible to answer.
                        </p>
                        <div className="pt-1">
                            <Link
                                className="btn btn-primary mr-3"
                                to="/contact/request-demo"
                                title="Request a Demo of Code Insights."
                            >
                                Request a demo
                            </Link>
                            <a
                                className="btn btn-outline-primary my-3"
                                href="/get-started"
                                title="Use this if you want to search your (or your company's) code, invite teammates, and try all the features."
                            >
                                Try it on Sourcegraph
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        }
    >
           
        <div className="p-7">
            <div className="row">
                {/* Placeholder */}
                <div className="col-lg-5 container video-embed embed-responsive embed-responsive-16by9 my-7">
                    <iframe
                        className="embed-responsive-item"
                        src="https://www.youtube-nocookie.com/embed/eOmiyXIWTCw?autoplay=0&amp;cc_load_policy=0&amp;start=0&amp;end=0&amp;loop=0&amp;controls=1&amp;modestbranding=1&amp;rel=0"
                        allowFullScreen={true}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        frameBorder={0}
                        title="Sourcegraph Batch Changes demo"
                    ></iframe>
                </div>
                <div className="col-lg-5 my-7">
                    <h2 className="mb-3">Finally, useful engineering metrics that{' '}
                    <span style={{fontStyle: "italic"}}>you</span> get to define.</h2>
                    <p>
                    Forget about inaccurate spreadsheets, manual processes, and missing historical data. 
                    Now, you can track everything in your codebase, from migrations to code smells, in a 
                    seamless and precise way. We've combined the power and accuracy of Sourcegraph Code 
                    Search with beautiful visualizations so you can make truly data-driven decisions.
                    </p>
                </div>
            </div>
            <CustomCarousel items={items} autoAdvance={true} />
        </div>
        

        <div className="bg-gradient-blue-mist py-7">
            <ContentSection className="py-5">
                <div className="d-flex flex-wrap">
                    <h2 className="display-3 font-weight-bold mb-3 w-100 text-center">Benefits for VP of Engineering</h2>
                    <div className="d-flex flex-column col-lg-6 px-6 justify-content-around">
                        <div className="d-flex py-5">
                            <div className="mr-4"><BullsEyeArrowIcon size={50} /></div>
                            <div className="d-flex flex-column">
                                <h3>Goal setting</h3>
                                <p>
                                    Set and measure goals around progress in your codebase.
                                </p>
                            </div>
                        </div>
                        <div className="d-flex py-5">
                        <div className="mr-4"><RocketLaunchOutlineIcon size={50} /></div>
                            <div className="d-flex flex-column">
                                <h3>One step ahead</h3>
                                <p>
                                    Be on the pulse of engineering initiatives.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-column col-lg-6 px-6 justify-content-around">
                        <div className="d-flex py-5">
                            <div className="mr-4"><TrendingUpIcon size={50} /></div>
                            <div className="d-flex flex-column">
                                <h3>{'Ownership & trends'}</h3>
                                <p>
                                    Tie trends and metrics to owners on the teams.
                                </p>
                            </div>
                        </div>
                        <div className="d-flex py-5">
                            <div className="mr-4"><LighteningBoltOutlineIcon size={50} /></div>
                            <div className="d-flex flex-column">
                                <h3>Be proactive</h3>
                                <p>
                                    Get on top of issues before they escalate.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentSection>
        </div>

        <ContentSection className="py-6">
            <div className="row d-flex text-center justify-content-center px-8 py-6">
                <div className="w-100">
                    <h2>Trusted by leading engineering teams around the world</h2>
                </div>
                <Blockquote quote={`Code insights enables our team to move away from manual spreadsheets 
                    and point-in-time documentation and provides us with a holistic view of our codebase 
                    when we undergo complex projects such as migrations and major platform-related changes.`}
                    by="Jane Doe, Engineering Leader"
                    flex={true}
                    logo="/external-logos/prezi-logo.svg"
                    href="https://prezi.com" />
            </div>
        </ContentSection>

        <ContentSection className="py-4">
            <h2 className="display-3 font-weight-bold mb-5 text-center">What's next?</h2>
            <Tabs defaultActiveKey="configuration" id="use-cases" className="justify-content-center">
                <Tab eventKey="configuration" title="Events">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-lg-8">
                            <p>
                                Keynote speakers. Job opportunities and partnerships. You can find us in every major
                                industry event. Give us an air-hug if you see us.
                            </p>
                            <ul>
                                <li>
                                    <a href="https://events.linuxfoundation.org/open-source-summit-north-america/register/">
                                        Open Source Summit
                                    </a>{' '}
                                    - 9/27 - 9/30
                                </li>
                                <li>
                                    <a href="https://reactadvanced.com/">React Advanced London</a> - 10/22
                                </li>
                                <li>
                                    <a href="https://africa.jsworldconference.com/">JSWorld Africa</a> - 10/30
                                </li>
                                <li>
                                    <a href="https://festival.oscafrica.org/">Open Source Festival</a> - 11/11 - 11/13
                                </li>
                                <li>
                                    <a href="https://www.gophercon.com/">GopherCon</a> - 12/5 - 12/8
                                </li>
                            </ul>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="refactoring" title="Dev Tool Time">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-lg-8">
                            <p>
                                Cool hardware. Most-wanted guests. And hot topics. Check our{' '}
                                <a href="https://srcgr.ph/dev-tool-time-playlist">YouTube channel</a> and subscribe to
                                keep up with new episodes.
                            </p>
                            <a href="https://srcgr.ph/dev-tool-time-playlist">
                                <img
                                    className="w-100 h-auto mt-4"
                                    width="850"
                                    height="380"
                                    src="/community/DTT_module.jpg"
                                    alt="Dev Tool Time"
                                />
                            </a>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="security" title="Podcast">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-lg-8">
                            <p>
                                Tune into our developer convos wherever you listen to your favorite podcasts. Every
                                episode is an inspiration.
                            </p>
                            <a href="https://about.sourcegraph.com/podcast">
                                <img
                                    className="w-100 h-auto mt-4"
                                    width="750"
                                    height="472"
                                    src="/community/Podcast_module.png"
                                    alt="Podcasts"
                                />
                            </a>
                        </div>
                    </div>
                </Tab>
            </Tabs>
        </ContentSection>

        <ContentSection className="py-5">
            <div className="row">
                <div className="col-lg-7">
                    <h2 className="display-3 font-weight-bold mb-3">We’d love to hear from you!</h2>
                    <br />
                    Connect with us on the Sourcegraph Community Slack group, direct message us on Twitter, LinkedIn, or
                    email us at <a href="mailto:community@sourcegraph.com">community@sourcegraph.com</a>.
                </div>
                <div className="col-lg-5 mt-3">
                    <a
                        className="btn btn-secondary"
                        href={
                            'https://join.slack.com/t/sourcegraph-community/shared_invite/zt-w11gottx-c0PYTK69YVW_06tpJZ0bOQ'
                        }
                        title="Join us on Slack"
                    >
                        Join us on Slack
                    </a>
                    <br />
                    <a
                        className="btn btn-primary mt-3"
                        href={'mailto:community@sourcegraph.com'}
                        title="Send us an email"
                    >
                        Send us an email
                    </a>
                </div>
            </div>
        </ContentSection>
    </Layout>
)

export default CodeInsightsPage
