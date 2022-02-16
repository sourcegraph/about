import { Link, PageProps } from 'gatsby'
import * as React from 'react'
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
                        <div className="text-uppercase mb-2">Code Insights</div>
                        <h1 className="display-3 font-weight-bold mb-5">Track what really matters to you and your team.</h1>
                        <h4 className="mb-3">
                            Effortlessly track and visualize trends in your entire codebase — kept automatically up to date.
                        </h4>
                        <div className="d-flex flex-column pt-1">
                            <Link
                                className="btn btn-primary col-4 mr-3"
                                to="/contact/request-demo"
                                title="Request a Demo of Code Insights."
                            >
                                Request a demo
                            </Link>
                            <a
                                className="btn btn-link px-0 py-4 text-left col-7"
                                href="/get-started"
                                title="Use this if you want to search your (or your company's) code, invite teammates, and try all the features."
                            >
                                Try it on Sourcegraph via Docker Compose
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        }
    >
           
        <div className="mx-8">
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
        </div>
        
        <div className="mb-5">
            <CustomCarousel items={items} autoAdvance={true} />
        </div>

        <div className="bg-gradient-blue-mist py-4">
            <ContentSection className="py-6">
                <div className="row d-flex text-center justify-content-center px-8 py-6">
                    <div className="w-100">
                        <p className="font-weight-bold display-3">Trusted by leading engineering teams around the world</p>
                    </div>
                    <blockquote className="p-3 rounded rounded-lg d-flex flex-column bg-transparent">
                        <div className="display-3">
                        &ldquo;Code insights enables our team to move away from manual spreadsheets 
                        and point-in-time documentation and provides us with a holistic view of our codebase 
                        when we undergo complex projects such as migrations and major platform-related changes.&rdquo;
                        </div>
                        <br />
                        <div className="pt-3 text-muted text-center">&mdash; Jane Doe, Engineering Leader</div>
                    </blockquote>
                    <div className="d-flex justify-content-center">
                        <a href="https://prezi.com" className="btn">
                            <img src="/external-logos/prezi-logo.svg" width="110px" alt="Prezi" />
                        </a>
                    </div>
                </div>
            </ContentSection>
        </div>

        
        <div className="bg-light-gray">
            <ContentSection className="py-7">
                <div className="d-flex flex-wrap">
                    <h2 className="display-3 font-weight-bold mb-3 w-100 text-center">Engineering leadership with superpowers</h2>
                    <p className="w-100 text-center">
                        Code Insights provides reliable real-time reporting directly
                        from the codebase, making engineering leaders and their teams
                        more effective.
                    </p>
                    <div className="d-flex flex-column col-lg-6 px-6 justify-content-around">
                        <div className="d-flex py-5">
                            <div className="mr-4"><BullsEyeArrowIcon size={70} /></div>
                            <div className="d-flex flex-column">
                                <h3>Set goals</h3>
                                <p>
                                    Set and measure goals around progress in your codebase
                                </p>
                            </div>
                        </div>
                        <div className="d-flex py-5">
                        <div className="icon mr-4"><RocketLaunchOutlineIcon size={70} /></div>
                            <div className="d-flex flex-column">
                                <h3>Plan proactively</h3>
                                <p>
                                    Stay on top of engineering initiatives and catch issues before they escalate
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-column col-lg-6 px-6 justify-content-around">
                        <div className="d-flex py-5">
                            <div className="mr-4"><TrendingUpIcon size={70} /></div>
                            <div className="d-flex flex-column">
                                <h3>{'Track ownership & trends'}</h3>
                                <p>
                                    Tie trends and metrics to owners on the teams
                                </p>
                            </div>
                        </div>
                        <div className="d-flex py-5">
                            <div className="mr-4"><LighteningBoltOutlineIcon size={70} /></div>
                            <div className="d-flex flex-column">
                                <h3>Celebrate progress</h3>
                                <p>
                                    Visualize the momentum and motivate your teammates
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentSection>
        </div>

        {/* Use Cases */}
        <ContentSection className="py-4 py-md-7">
            <h1 className="mb-5 text-center">How developers are using Batch Changes </h1>
            <Tabs defaultActiveKey="configuration" id="use-cases" className="justify-content-center">
                <Tab eventKey="configuration" title="Configuration">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-lg-8">
                            <p>
                                Quickly edit every CI, build, and other configuration files to make changes such as
                                altering steps, migrating versions, or changing base images.
                            </p>
                            <img
                                className="w-100 h-auto mt-4"
                                width="750"
                                height="400"
                                src="https://storage.googleapis.com/sourcegraph-assets/batch-changes/update-circle-ci-username.png"
                                alt="Batch spec for updating the username in Circle CI configurations"
                            />
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="refactoring" title="Refactoring">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-lg-8">
                            <p>
                                Use language-aware tooling of your choice to perform complex refactors like updating an
                                API and its function calls or replacing libraries entirely.
                            </p>
                            <img
                                className="w-100 h-auto mt-4"
                                width="850"
                                height="380"
                                src="https://storage.googleapis.com/sourcegraph-assets/batch-changes/comby-sprintf-to-itoa.png"
                                alt="Batch spec for using Comby to refactor Go code"
                            />
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="security" title="Security">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-lg-8">
                            <p>
                                Refactor code to replace insecure functions, update vulnerable packages, or modify
                                container configurations across hundreds of repositories.
                            </p>
                            <img
                                className="w-100 h-auto mt-4"
                                width="750"
                                height="472"
                                src="https://storage.googleapis.com/sourcegraph-assets/batch-changes/pin-docker-images.png"
                                alt="Batch spec for pinning Docker base images to specific versions"
                            />
                        </div>
                    </div>
                </Tab>
            </Tabs>
        </ContentSection>

        <div className="bg-light-gray">
            <ContentSection>
                <div className="row d-flex flex-column justify-content-start p-7">
                    <div className="col-md-6 pr-md-5 d-flex flex-column justify-content-start">
                        <h3 className="display-4 font-weight-bold">Get started with Code Insights</h3>
                        <p>
                            Code Insights transforms your entire codebase into a queryable database so you can create customizable, 
                            visual dashboards in seconds and get real-time results. 
                        </p>
                    </div>
                    <div className="col-md-6 pt-3 d-flex justify-content-start text-center">
                        <Link className="btn btn-primary mx-2 mb-3" to="/#get-started" title="Try Sourcegraph now">
                            Request a demo
                        </Link>
                        <Link className="btn btn-outline-secondary mx-2 mb-3" to={"/get-started"} title="Request a demo">
                            Try it on Sourcegraph
                        </Link>
                    </div>
                </div>
            </ContentSection>
        </div>
    </Layout>
)

export default CodeInsightsPage
