import { Link } from 'gatsby'
import DirectionsIcon from 'mdi-react/DirectionsIcon'
import FlameIcon from 'mdi-react/FlameIcon'
import MicroscopeIcon from 'mdi-react/MicroscopeIcon'
import PowerPlugIcon from 'mdi-react/PowerPlugIcon'
import QuestionMarkCircleIcon from 'mdi-react/QuestionMarkCircleIcon'
import TurtleIcon from 'mdi-react/TurtleIcon'
import HelpIcon from 'mdi-react/FileQuestionIcon'
import FileSearchOutlineIcon from 'mdi-react/FileSearchOutlineIcon'
import GlobeIcon from 'mdi-react/GlobeIcon'
import PlaylistAddCheckIcon from 'mdi-react/PlaylistAddCheckIcon'
import Stopwatch from 'mdi-react/Stopwatch'
import HeadSnowflakeIcon from 'mdi-react/HeadSnowflakeIcon'
import React from 'react'
import { ContentPage } from '../../components/content/ContentPage'
import { ContentSection } from '../../components/content/ContentSection'
import { IconItem } from '../../components/IconItem'
import { Jumbotron } from '../../components/Jumbotron'
import Layout from '../../components/Layout'
import { PageSectionLinks } from '../../components/PageSectionLinks'
import { EbookUniversalCodeSearch } from '../../components/product/EbookUniversalCodeSearch'
import { IntegratesWithSection } from '../../components/product/IntegratesWithSection'
import { SupportedProgrammingLanguagesLink } from '../../components/product/SupportedProgrammingLanguagesLink'
import { YouTube } from '../../components/YouTube'
import { GetSourcegraphNowActions } from '../../css/components/actions/GetSourcegraphNowActions'

export default ((props: any) => (
    <Layout location={props.location}>
        <ContentPage
            title="Learn code faster"
            description="Quickly understand new code and accelerate developer onboarding with Sourcegraph."
            className="pb-2"
        >
            <PageSectionLinks
                sections={[
                    { text: 'Learning code is essential', url: '#why' },
                    { text: 'Features', url: '#features' },
                    { text: 'Demo screencast', url: '#demo' },
                    { text: 'Integrations', url: '#integrations' },
                ]}
            />
            <ContentSection color="white" className="py-2">
                <h2 className="display-4 mb-4 text-center" id="why">
                    Learning code is essential for both new hires and those assigned to new codebases
                </h2>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <IconItem color="red" icon={HeadSnowflake} className="py-3">
                            <p className="text-sans-serif">
                                Without contextual code intelligence, it’s difficult to find answers to code questions – for both new hires and existing team members. 
                            </p>
                        </IconItem>
                    </div>
                    <div className="col-md-4 mb-4">
                        <IconItem color="red" icon={FileSearchOutlineIcon} className="py-3">
                            <p className="text-sans-serif">
                               It’s challenging to easily explore and understand the content and structure of new and unfamiliar codebases. 
                            </p>
                        </IconItem>
                    </div>
                    <div className="col-md-4 mb-4">
                        <IconItem color="red" icon={HelpIcon} className="py-3">
                            <p className="text-sans-serif">
                                New engineering hires don’t know where to look for specific code in large and distributed libraries and repositories.
                            </p>
                        </IconItem>
                    </div>
                </div>
                                <div className="row justify-content-center py-4">
                    <div className="col-lg-10 text-center">
                        <img src="/external-logos/convoy-logo.svg" />
                        <blockquote className="blockquote case-studies__quote case-studies__quote--in-content">
                            <p>
                                For our new developers, Sourcegraph has been invaluable to get to know the repository
                                structure, to track down where code lives, and self-service during their investigations.
                            </p>
                            <footer className="blockquote-footer">Owen Kim, Senior Software Engineer, Convoy</footer>
                        </blockquote>
                    </div>
                    <div className="col-lg-10 mt-2 py-4 text-center">
                        <h5>
                            Learn more about how{' '}
                            <a href="/blog/gitlab-integrates-sourcegraph-code-navigation-and-code-intelligence">
                                Convoy uses Sourcegraph to onboard new developers faster
                            </a>
                        </h5>
                    </div>
                </div>
            </ContentSection>
            <ContentSection color="white" className="pb-2">
                <h2 id="features" className="display-4 mb-5 text-center">
                    Why learning code is faster with Sourcegraph
                </h2>
                <p className="text-center mb-5">
                    Sourcegraph <a href="/universal-code-search">Universal Code Search</a> lets you review, search, and
                    modify your code no matter where it's stored. Sourcegraph <Link to="#integrations">integrates</Link>{' '}
                    with your existing code review tool and lets you:
                </p>
                <div className="row">
                    <div className="col-lg-6 mb-4">
                        <IconItem className="position-relative" icon={GlobeIcon} color="green">
                            <h4>Find definitions and explore references, even across projects</h4>
                            <p>See a call to a function you don't recognize? With Sourcegraph, you can see its
                                documentation and type signature by hovering over it &mdash; and go to its definition in a
                                single click, across package, dependency, and repository boundaries. Even if your IDE can do  
                                this, Sourcegraph lets you explore code intelligently in your web browser in any repository on 
                                any branch, instantly and without losing your local context to massively save time. Works for 
                                {' '}<SupportedProgrammingLanguagesLink />.
                            </p>
                        </IconItem>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <IconItem className="position-relative" icon={PlaylistAddCheckIcon} color="brand-cyan">
                            <h4>Facilitate easier onboarding, with rapidly growing and distributed teams and codebases</h4>
                            <p>New hires often spend the majority of their time jumping around unfamiliar parts of the        
                            codebase to build a mental model of the organization’s code. Sourcegraph accelerates this learning 
                            path with {' '}<a href="https://about.sourcegraph.com/universal-code-search">universal code
                            search</a>{' '} across programming languages, code hosts, repositories, version
                            control systems, services, and APIs.
                            </p>
                        </IconItem>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <IconItem className="position-relative" icon={StopwatchIcon} color="brand-purple">
                            <h4>Reduce the time to first commit</h4>
                            <p>
                                Sourcegraph enables faster comprehension of existing code with universal code search and
                                navigation so new engineers can explore the entire codebase with minimal context-switching.
                                The ability to share links with their peers and manager means questions get answered faster
                                and with significantly less effort.{' '}
                            </p>
                        </IconItem>
                    </div>
                </div>
            </ContentSection>
            <ContentSection color="white" className="pb-2">
                                   <div className="row justify-content-center py-4">
                    <div className="col-lg-10 text-center">
                        <img src="/external-logos/yelp-logo.svg" />
                        <blockquote className="blockquote case-studies__quote case-studies__quote--in-content">
                            <p>
                                When making large changes, Sourcegraph is the way to discover how
                                your code is being called throughout the rest of the code base.
                                Sourcegraph has also been helpful for onboarding new
                                hires and introducing them to the code base.
                            </p>
                            <footer className="blockquote-footer">Kevin Chen, Software Engineer, Yelp</footer>
                        </blockquote>
                    </div>
                    <div className="col-lg-10 mt-2 py-4 text-center">
                        <h5>
                            Read why{' '}
                            <a href="https://engineeringblog.yelp.com/2019/11/winning-the-hackathon-with-sourcegraph.html">
                                Yelp uses Sourcegraph to ship code faster and more reliably.
                            </a>
                        </h5>
                    </div>
                </div>
                </ContentSection>
                
            <ContentSection color="black" className="py-6 text-center">
                <h2 id="demo" className="display-4">
                    See Sourcegraph in action
                </h2>
                <YouTube id="KSx61-yAMLs" />
                <div className="row justify-content-center">
                    <div className="col-lg-10 mt-2 py-4 text-center">
                        <h5>
                            Install the Sourcegraph browser extension adding code intelligence to your files and diffs
                            on GitHub, GitHub Enterprise, GitLab, Phabricator, and Bitbucket Server.
                        </h5>
                        <a
                            className="btn btn-primary mt-4"
                            href="https://docs.sourcegraph.com/integration/browser_extension"
                        >
                            Get browser extension
                        </a>
                    </div>
                </div>
            </ContentSection>
                        <ContentSection color="white" className="pt-3">
                <IntegratesWithSection className="mt-4 pt-5 pb-6" />
            </ContentSection>
            <ContentSection color="gray" className="py-6">
                <EbookUniversalCodeSearch />
            </ContentSection>
            <Jumbotron
                color="purple"
                className="py-4"
                logomark={false}
                title="Try Sourcegraph now"
                description="Explore, navigate, and better understand all code, everywhere, faster, with Universal Code Search."
            >
                <GetSourcegraphNowActions />
            </Jumbotron>
        </ContentPage>
    </Layout>
)) as React.FunctionComponent<any>
