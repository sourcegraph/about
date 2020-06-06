import { Link } from 'gatsby'
import DirectionsIcon from 'mdi-react/DirectionsIcon'
import FlameIcon from 'mdi-react/FlameIcon'
import MicroscopeIcon from 'mdi-react/MicroscopeIcon'
import PowerPlugIcon from 'mdi-react/PowerPlugIcon'
import QuestionMarkCircleIcon from 'mdi-react/QuestionMarkCircleIcon'
import TurtleIcon from 'mdi-react/TurtleIcon'
import React from 'react'
import { ContentPage } from '../../components/content/ContentPage'
import { ContentSection } from '../../components/content/ContentSection'
import { IconItem } from '../../components/IconItem'
import { Jumbotron } from '../../components/Jumbotron'
import Layout from '../../components/Layout'
import { PageSectionLinks } from '../../components/PageSectionLinks'
import { EbookUniversalCodeSearch } from '../../components/product/EbookUniversalCodeSearch'
import { SupportedProgrammingLanguagesLink } from '../../components/product/SupportedProgrammingLanguagesLink'
import { YouTube } from '../../components/YouTube'
import { GetSourcegraphNowActions } from '../../css/components/actions/GetSourcegraphNowActions'
import { RequestDemoAction } from '../../css/components/actions/RequestDemoAction'
import { ViewDeveloperDocumentationAction } from '../../css/components/actions/ViewDeveloperDocumentationAction'

export default ((props: any) => (
    <Layout location={props.location}>
        <ContentPage
            title="Code review"
            description="Better code reviews with code intelligence in context. Sourcegraph enhances your existing code review tool with inline code intelligence, helping you speed up the review cycle and catch more bugs before they're deployed to production."
            mainActions={
                <div className="d-flex flex-column align-items-center">
                    <RequestDemoAction className="mt-3" />
                    <ViewDeveloperDocumentationAction
                        className="text-light mt-2"
                        url="https://docs.sourcegraph.com/#quickstart"
                    >
                        Documentation &amp; self-service install
                    </ViewDeveloperDocumentationAction>
                </div>
            }
        >
            <PageSectionLinks
                sections={[
                    { text: 'Why code review is critical', url: '#why' },
                    { text: 'Features', url: '#features' },
                    { text: 'Demo screencast', url: '#demo' },
                ]}
            />
            <ContentSection color="white" className="py-4">
                <h2 className="display-4 mb-4 text-center" id="why">
                    Code review is the most critical process for engineering teams
                </h2>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <IconItem color="red" icon={FlameIcon} className="py-3">
                            <p className="text-sans-serif">
                                A mistake that slips past code review becomes ~10x harder to fix.
                            </p>
                        </IconItem>
                    </div>
                    <div className="col-md-4 mb-4">
                        <IconItem color="red" icon={TurtleIcon} className="py-3">
                            <p className="text-sans-serif">
                                A slow code review process hurts productivity (just like slow compilation or slow
                                tests).
                            </p>
                        </IconItem>
                    </div>
                    <div className="col-md-4 mb-4">
                        <IconItem color="red" icon={QuestionMarkCircleIcon} className="py-3">
                            <p className="text-sans-serif">
                                An ineffective code review process hinders knowledge transfer and new employee
                                onboarding.
                            </p>
                        </IconItem>
                    </div>
                </div>
            </ContentSection>
            <ContentSection color="white" className="pb-2">
                <h2 id="features" className="display-4 mb-5 text-center">
                    How code review is better with Sourcegraph
                </h2>
                <p className="text-center mb-5">
                    Sourcegraph <Link to="#integrations">integrates</Link> with your existing code review tool and lets
                    you:
                </p>
                <div className="row">
                    <div className="col-lg-6 mb-4">
                        <IconItem className="position-relative" icon={DirectionsIcon} color="brand-cyan">
                            <h4>Grok the change with documentation hovers &amp; "Go to definition"</h4>
                            <p>
                                See a call to a function you don't recognize? With Sourcegraph, you can see its
                                documentation and type signature by hovering over it&mdash;and go to its definition in a
                                single click. Works for <SupportedProgrammingLanguagesLink />. Even if your IDE supports
                                this, being able to do it in your web browser instantly without losing context saves
                                tons of time&mdash;and helps you do more thorough reviews.
                            </p>
                        </IconItem>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <IconItem className="position-relative" icon={PowerPlugIcon} color="brand-purple">
                            <h4>Assess the impact of the change with "Find references"</h4>
                            <p>
                                What might break when this change is merged? Who else is relying on the API that will be
                                changed? As a reviewer, you need to understand the impact of a change to review it
                                correctly. With Sourcegraph in <SupportedProgrammingLanguagesLink />, you can find
                                callers and references in all of your repositories. Never have an "oops" again.
                            </p>
                        </IconItem>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <IconItem className="position-relative" icon={MicroscopeIcon} color="green">
                            <h4>See test coverage and runtime logs, traces, &amp; errors</h4>
                            <p>
                                When changing code that's performance-sensitive or causing errors, it helps to see live
                                information from runtime to ensure the fix is correct. When using{' '}
                                <a
                                    href="https://sourcegraph.com/extensions?query=category%3A%22External+services%22"
                                    target="_blank"
                                >
                                    supported services
                                </a>{' '}
                                to collect this information, Sourcegraph makes it easy to see this extra context when
                                reviewing.
                            </p>
                        </IconItem>
                    </div>
                </div>
            </ContentSection>
            <ContentSection color="gray" className="py-6">
                <EbookUniversalCodeSearch />
            </ContentSection>
            <ContentSection color="black" className="py-6">
                <h2 id="demo" className="text-center display-4 pb-4">
                    Better code reviews with the Sourcegraph browser extension
                </h2>
                <YouTube id="s5TJBLACWeQ" />
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
