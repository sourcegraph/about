import { Link, PageProps } from 'gatsby'
import * as React from 'react'
import { BlogListItem } from '../components/BlogListItem'
import { ContentSection } from '../components/content/ContentSection'
import { CodeInsightExample } from '../components/code-insights/CodeInsightsExamples'
import { CodeInsightExampleType } from '../components/code-insights/types'
import {
    CAPTURE_INSIGHT_TERRAFORM_EXAMPLES_DATA,
    SEARCH_INSIGHT_CSS_MODULES_EXAMPLES_DATA,
} from '../components/code-insights/mock-data'
import Layout from '../components/Layout'
import { TabCarousel } from '../components/TabCarousel'
import { TemplateCodeBlock } from '../components/TemplateCodeBlock'
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

const templates = {
    migrations: [
        {
            header: 'CSS modules',
            description: 'Tracking migration from global CSS to CSS modules.',
            queries: [
                (
                    <>
                        //series 1, decreasing{' '}
                        <span className="keyword">select:</span>file{' '}<span className="keyword">lang:</span>SCSS{' '}
                        <span className="keyword">file:</span>module{' '}
                        <span className="keyword">patterntype:</span>regexp{' '}
                        <span className="keyword">archived:</span>no{' '}<span className="keyword">fork:</span>no
                    </>
                ),
                (
                    <>
                        <span className="keyword">type:</span>file{' '}<span className="keyword">lang:</span>scss
                        <span className="keyword">-file:</span>module{' '}
                        <span className="keyword">patterntype:</span>regexp{' '}
                        <span className="keyword">archived:</span>no{' '}
                        <span className="keyword">fork:</span>no
                    </>
                )
            ]
        },
        {
            header: 'Python 2 to Python 3',
            description: 'How far along is the Python major version migration.',
            queries: [
                (
                    <>
                        // series 1: #!/usr/bin/env python3{' '}
                        <span className="keyword">archived:</span>no{' '}<span className="keyword">fork:</span>no
                    </>
                ),
                (
                    <>
                        // series 2: #!/usr/bin/env python2{' '}
                        <span className="keyword">archived:</span>no{' '}<span className="keyword">fork:</span>no
                    </>
                )
            ]
        },
        {
            header: 'React Class to Function Components',
            description: `What's the status of migrating to React function components from class components.`,
            queries: [
                (
                    <>
                        // series 1:{' '}<span className="keyword">patterntype:</span>regexp{' '}
                        const\s\w+:\s(React\.)?FunctionComponent{' '}
                        <span className="keyword">archived:</span>no{' '}<span className="keyword">fork:</span>no
                    </>
                ),
                (
                    <>
                        // series 2:{' '}<span className="keyword">patterntype:</span>regexp{' '}
                        extends\s(React\.)?(Pure)?Component{' '}
                        <span className="keyword">archived:</span>no{' '}<span className="keyword">fork:</span>no
                    </>
                )
            ]
        },
        {
            header: 'Config or docs file',
            description: 'How many repos contain a config or docs file in a specific directory.',
            queries: [
                (
                    <>
                        <span className="keyword">select:</span>repo{' '}
                        <span className="keyword">file:</span>docs/*/new_config_filename{' '}
                        <span className="keyword">archived:</span>no{' '}<span className="keyword">fork:</span>no
                    </>
                )

            ]
        }
    ],
    versionTracking: [
        {
            header: 'Java versions',
            description: 'Detect and track which Java versions are present or most popular in your code base.',
            queries: [
                (
                    <>
                        {'<java\.version>(.*)</java\.version>'}{' '}
                        <span className="keyword">archived:</span>no{' '}<span className="keyword">fork:</span>no
                    </>
                )
            ]
        },
        {
            header: 'All log4j versions',
            description: 'Which log4j versions are present, including vulnerable versions.',
            queries: [
                (
                    <>
                        <span className="keyword">lang:</span>gradle{' '}
                        org\.apache\.logging\.log4j['"] 2\.([0-9]+)\.{' '}
                        <span className="keyword">archived:</span>no{' '}<span className="keyword">fork:</span>no
                    </>
                )
            ]
        },
        {
            header: 'License types in the codebase',
            description: 'See the breakdown of licenses from package.json files.',
            queries: [
                (
                    <>
                        <span className="keyword">file:</span>package.json{' '}
                        "license":\s"(.*)"{' '}
                        <span className="keyword">archived:</span>no{' '}<span className="keyword">fork:</span>no
                    </>
                )
            ]
        },
        {
            header: 'Python versions',
            description: `Which python versions are in use or haven't been updated.`,
            queries: [
                (
                    <>
                        #!/usr/bin/env python([0-9]\.[0-9]+){' '}
                        <span className="keyword">archived:</span>no{' '}<span className="keyword">fork:</span>no
                    </>
                )
            ]
        }
    ],
    security: [
        {
            header: 'Vulnerable open source library',
            description: 'Confirm that a vulnerable open source library has been fully removed, or the speed of the deprecation.',
            queries: [
                (
                    <>
                        vulnerableLibrary@14.3.9{' '}
                        <span className="keyword">archived:</span>no{' '}<span className="keyword">fork:</span>no
                    </>
                )
            ]
        },
        {
            header: 'How many tests are skipped',
            description: 'See how many tests have skip conditions.',
            queries: [
                (
                    <>
                        this.skip(){' '}
                        <span className="keyword">patterntype:</span>literal{' '}
                        <span className="keyword">archived:</span>no{' '}<span className="keyword">fork:</span>no
                    </>
                )
            ]
        },
        {
            header: 'Vulnerable log4j versions',
            description: 'What vulnerable log4j versions are present.',
            queries: [
                (
                    <>
                        <span className="keyword">lang:</span>gradle{' '}
                        org\.apache\.logging\.log4j['"] 2\.(0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16)(\.[0-9]+){' '}
                        <span className="keyword">patterntype:</span>regexp{' '}
                        <span className="keyword">archived:</span>no{' '}<span className="keyword">fork:</span>no
                    </>
                )
            ]
        },
        {
            header: 'API keys',
            description: 'How quickly we notice and remove API keys when they are committed.',
            queries: [
                (
                    <>
                        regexMatchingAPIKey{' '}
                        <span className="keyword">patterntype:</span>regexp{' '}
                        <span className="keyword">archived:</span>no{' '}<span className="keyword">fork:</span>no
                    </>
                )
            ]
        }
    ],
    codeHealth: [
        {
            header: 'TODOs',
            description: 'How many TODOs are in a specific part of the codebase (or all of it).',
            queries: [
                (
                    <>
                        TODO{' '}
                        <span className="keyword">archived:</span>no{' '}<span className="keyword">fork:</span>no
                    </>
                )
            ]
        },
        {
            header: 'Commits with "revert"',
            description: 'How frequently there are commits with “revert” in the commit message.',
            queries: [
                (
                    <>
                        <span className="keyword">type:</span>commit{' '}
                        revert{' '}
                        <span className="keyword">archived:</span>no{' '}<span className="keyword">fork:</span>no
                    </>
                )
            ]
        },
        {
            header: 'Linter override rules',
            description: 'How many linter override rules exist.',
            queries: [
                (
                    <>
                        <span className="keyword">file:</span>\.eslintignore{' '}
                        .\n{' '}
                        <span className="keyword">patterntype:</span>regexp{' '}
                        <span className="keyword">archived:</span>no{' '}<span className="keyword">fork:</span>no
                    </>
                )
            ]
        },
        {
            header: 'Deprecated calls',
            description: 'How many times deprecated calls are used.',
            queries: [
                (
                    <>
                        <span className="keyword">lang:</span>java{' '}
                        @deprecated{' '}
                        <span className="keyword">archived:</span>no{' '}<span className="keyword">fork:</span>no
                    </>
                )
            ]
        }
    ]
}

const blogListItems = [
    {
        title: 'How I use the Sourcegraph extension for VS Code',
        description: 'Explore why we built this in the announcement post.',
        type: 'Blog',
        image: 'https://sourcegraphstatic.com/blog/vs-code-extension/sourcegraph-vs-code-extension.png',
        href: '/blog/ways-to-use-sourcegraph-extension-for-vs-code'
    },
    {
        title: `Redefining the OSS universe: Why we're broadening our index to include more code hosts`,
        description: 'Sourcegraph Engineering’s take on everything Code Insights.',
        type: 'Blog',
        image: 'https://sourcegraphstatic.com/blog/indexing-the-oss-universe-update.png',
        href: '/blog/indexing-the-oss-universe-update-more-code-hosts'
    },
    {
        title: 'Dive into documentation',
        description: 'Learn everything you need to know about Code Insights.',
        type: 'Docs',
        image: 'https://sourcegraphstatic.com/blog/indexing-the-oss-universe-update.png',
        href: 'https://docs.sourcegraph.com'
    }
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
                                className="btn btn-primary md-col-6 col-4 mr-3"
                                to="/contact/request-demo"
                                title="Request a Demo of Code Insights."
                            >
                                Request a demo
                            </Link>
                            <Link
                                className="btn btn-link px-0 py-4 text-left col-7"
                                to="/get-started"
                                title="Get started with Code Insights."
                            >
                                Try it on Sourcegraph via Docker Compose
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        }
    >
           
        <ContentSection>
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
        </ContentSection>
        
        <ContentSection className="set-height">
            <CustomCarousel items={items} autoAdvance={true} />
        </ContentSection>

        <div className="bg-gradient-blue-mist py-4">
            <ContentSection className="py-6">
                <div className="row d-flex text-center justify-content-center px-3 py-6">
                    <div className="w-100">
                        <p className="font-weight-bold display-3">Trusted by leading engineering teams around the world</p>
                    </div>
                    <blockquote className="p-3 rounded rounded-lg d-flex flex-column bg-transparent">
                        <h3 className="font-weight-normal">
                        &ldquo;Code insights enables our team to move away from manual spreadsheets 
                        and point-in-time documentation and provides us with a holistic view of our codebase 
                        when we undergo complex projects such as migrations and major platform-related changes.&rdquo;
                        </h3>
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
                            <div className="mr-4"><BullsEyeArrowIcon className="icon" size={70} /></div>
                            <div className="d-flex flex-column">
                                <h3>Set goals</h3>
                                <p>
                                    Set and measure goals around progress in your codebase
                                </p>
                            </div>
                        </div>
                        <div className="d-flex py-5">
                        <div className="icon mr-4"><RocketLaunchOutlineIcon className="icon" size={70} /></div>
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
                            <div className="mr-4"><TrendingUpIcon className="icon" size={70} /></div>
                            <div className="d-flex flex-column">
                                <h3>{'Track ownership & trends'}</h3>
                                <p>
                                    Tie trends and metrics to owners on the teams
                                </p>
                            </div>
                        </div>
                        <div className="d-flex py-5">
                            <div className="mr-4"><LighteningBoltOutlineIcon className="icon" size={70} /></div>
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

        {/* Demo */}
        <ContentSection className="py-4 py-md-7">
            <h1 className="mb-3 text-center">See Code Insights in action</h1>
            <div className="row justify-content-center pt-md-4">
                <div className="col-lg-8 container video-embed embed-responsive embed-responsive-16by9 ">
                    <iframe
                        className="embed-responsive-item"
                        src="https://www.youtube-nocookie.com/embed/eOmiyXIWTCw?autoplay=0&amp;cc_load_policy=0&amp;start=0&amp;end=0&amp;loop=0&amp;controls=1&amp;modestbranding=1&amp;rel=0"
                        allowFullScreen={true}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        frameBorder={0}
                        title="Sourcegraph Batch Changes demo"
                    ></iframe>
                </div>
            </div>
        </ContentSection>


        {/* Use Cases */}
        <div className="bg-gradient-blue-mist py-4 tab-section">
            <ContentSection className="py-4 py-md-7">
                <h1 className="mb-5 text-center">Popular Code Insights templates</h1>
                <Tabs defaultActiveKey="migrations" id="use-cases" className="justify-content-center">
                    <Tab eventKey="migrations" title="Migrations" tabClassName="tab-header">
                        <div className="row mt-5">
                            <div className="w-100 d-flex flex-wrap">
                                {templates.migrations.map(template => (
                                    <TemplateCodeBlock key={template.header} template={template} />
                                ))}
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="version-tracking" title="Version Tracking" tabClassName="tab-header">
                        <div className="row mt-5 justify-content-center">
                            <div className="w-100 d-flex flex-wrap">
                                {templates.versionTracking.map(template => (
                                    <TemplateCodeBlock key={template.header} template={template} />
                                ))}
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="security" title="Security" tabClassName="tab-header">
                        <div className="row mt-5 justify-content-center">
                            <div className="w-100 d-flex flex-wrap">
                                {templates.security.map(template => (
                                    <TemplateCodeBlock key={template.header} template={template} />
                                ))}
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="code-health" title="Code Health" tabClassName="tab-header">
                        <div className="row mt-5 justify-content-center">
                            <div className="w-100 d-flex flex-wrap">
                                {templates.codeHealth.map(template => (
                                    <TemplateCodeBlock key={template.header} template={template} />
                                ))}
                            </div>
                        </div>
                    </Tab>
                </Tabs>
                <div className="w-100 d-flex justify-content-center">
                    <a
                        className="btn btn-link px-0 py-4 col-7 docs-cta font-weight-bold"
                        href="https://docs.sourcegraph.com/batch_changes"
                        title="Code Insights on docs."
                    >
                    See Docs for more use cases
                    </a>
                </div>
            </ContentSection>
        </div>

        {/* Use Cases Carousel */}
        <div className="bg-gradient-blue-mist py-4 tab-carousel-section">
            <ContentSection className="py-4 py-md-7">
                <h1 className="mb-5 text-center">Popular Code Insights templates</h1>
                <Tabs defaultActiveKey="migrations" id="use-cases" className="justify-content-center">
                    <Tab eventKey="migrations" title="Migrations" tabClassName="tab-header">
                        <div className="row mt-5 justify-content-center">
                            <div className="w-100">
                                <TabCarousel items={templates.migrations} autoAdvance={true} />
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="version-tracking" title="Version Tracking" tabClassName="tab-header">
                        <div className="row mt-5 justify-content-center">
                            <div className="w-100">
                                <TabCarousel items={templates.versionTracking} autoAdvance={true} />
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="security" title="Security" tabClassName="tab-header">
                        <div className="row mt-5 justify-content-center">
                            <div className="w-100">
                                <TabCarousel items={templates.security} autoAdvance={true} />
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="code-health" title="Code Health" tabClassName="tab-header">
                        <div className="row mt-5 justify-content-center">
                            <div className="w-100">
                                <TabCarousel items={templates.codeHealth} autoAdvance={true} />
                            </div>
                        </div>
                    </Tab>
                </Tabs>
                <div className="w-100 d-flex justify-content-center">
                    <a
                        className="btn btn-link px-0 py-4 col-7 docs-cta font-weight-bold"
                        href="https://docs.sourcegraph.com/batch_changes"
                        title="Code Insights on docs."
                    >
                    See Docs for more use cases
                    </a>
                </div>
            </ContentSection>
        </div>

        <div className="bg-light-gray">
            <ContentSection>
                <div className="row d-flex flex-column justify-content-start py-7">
                    <div className="col-lg-8 d-flex flex-column justify-content-start">
                        <h1>Get started with Code Insights</h1>
                        <p>
                        Create a Code Insight in 60 seconds, then get historical data for metrics you never tracked until today 
                        without needing a time machine — data backfills automatically.
                        </p>
                    </div>
                    <div className="col-lg-7 d-flex flex-column pt-1">
                        <Link
                            className="btn btn-primary col-4 mr-3"
                            to="/contact/request-demo"
                            title="Request a Demo of Code Insights."
                        >
                            Request a demo
                        </Link>
                        <Link
                            className="btn btn-link px-0 py-4 text-left col-7"
                            to="/get-started"
                            title="Get started with Code Insights."
                        >
                            Try it on Sourcegraph via Docker Compose
                        </Link>
                    </div>
                </div>
            </ContentSection>
        </div>

        <ContentSection>
            <div className="row d-flex">
                <div className="col-lg-6">
                    <h1 className="mb-5">Learn more</h1>
                </div>
                {blogListItems.map(item => (
                    <BlogListItem key={item.title} blog={item} />
                ))}
            </div>
        </ContentSection>
    </Layout>
)

export default CodeInsightsPage
