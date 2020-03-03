import { Link } from 'gatsby'
import DirectionsIcon from 'mdi-react/DirectionsIcon'
import FlameIcon from 'mdi-react/FlameIcon'
import MicroscopeIcon from 'mdi-react/MicroscopeIcon'
import PowerPlugIcon from 'mdi-react/PowerPlugIcon'
import QuestionMarkCircleIcon from 'mdi-react/QuestionMarkCircleIcon'
import TurtleIcon from 'mdi-react/TurtleIcon'
import TooltipPlusIcon from 'mdi-react/TooltipPlusIcon'
import FolderSearchOutlineIcon from 'mdi-react/FolderSearchOutlineIcon'
import CodeBracesIcon from 'mdi-react/CodeBracesIcon'
import React from 'react'
import { ContentPage } from '../../components/content/ContentPage'
import { ContentSection } from '../../components/content/ContentSection'
import { IconItem } from '../../components/IconItem'
import { Jumbotron } from '../../components/Jumbotron'
import Layout from '../../components/Layout'
import { PageSectionLinks } from '../../components/PageSectionLinks'
import { CustomerLogosSection } from '../../components/product/CustomerLogosSection'
import { EnterpriseReadySolution } from '../../components/product/EnterpriseReadySolution'
import { IntegratesWithSection } from '../../components/product/IntegratesWithSection'
import { OpenSourcePrivacyFeatureItem } from '../../components/product/OpenSourcePrivacyFeatureItem'
import { SupportedProgrammingLanguagesLink } from '../../components/product/SupportedProgrammingLanguagesLink'
import { Vimeo } from '../../components/Vimeo'
import { ContactPresalesSupportAction } from '../../css/components/actions/ContactPresalesSupportAction'
import { GetSourcegraphNowActions } from '../../css/components/actions/GetSourcegraphNowActions'
import { RequestDemoAction } from '../../css/components/actions/RequestDemoAction'
import { ViewDeveloperDocumentationAction } from '../../css/components/actions/ViewDeveloperDocumentationAction'

export default ((props: any) => (
    <Layout location={props.location}>
        <ContentPage
            title="Code intelligence"
            description="Find answers faster, with inline contextual information around code."
            mainActions={
                <div className="d-flex flex-column align-items-center">
                    <RequestDemoAction className="mt-3" />
                    <a
                        className="btn btn-outline-primary mt-3"
                        href="https://docs.sourcegraph.com/integration/browser_extension"
                    >
                        Install browser extension
                    </a>
                    <ContactPresalesSupportAction className="mt-3 text-light" />
                    <ViewDeveloperDocumentationAction
                        className="text-light mt-2"
                        url="https://docs.sourcegraph.com/integration"
                    >
                        Code review integrations documentation
                    </ViewDeveloperDocumentationAction>
                </div>
            }
        >
            <PageSectionLinks
                sections={[
                    { text: 'Better code reviews', url: '#codereviews' },
                    { text: 'Integrations', url: '#integrations' },
                    { text: 'Demo screencast', url: '#demo' },
                    { text: 'Who uses it', url: '#customers' },
                ]}
            />
            <ContentSection color="white" className="py-5">
                <h2 className="display-4 mb-4">
                    Explore definitions & references, across all projects 
                </h2>
                  <IconItem color="brand-orange" icon={FolderSearchOutlineIcon} className="py-3">
                    <h5 className="text-sans-serif">
                        Find the definition, function calls and anything else in code, across packages, dependencies, and repositories.
                    </h5>
                    </IconItem>
                <IconItem color="brand-orange" icon={TooltipPlusIcon} className="py-3">
                    <h5 className="text-sans-serif">
                        Explore code in your web browser in any repository on any branch, instantly and without losing local context.
                    </h5>
                     </IconItem>
                <IconItem color="brand-orange" icon={CodeBracesIcon} className="py-3">
                    <h5 className="text-sans-serif">
                        Works for <SupportedProgrammingLanguagesLink />.
                    </h5>
                    </IconItem>
            </ContentSection>
                        <ContentSection color="black" className="py-6">
                <h2 id="demo" className="text-center display-4 pb-4">
                    See Sourcegraph code intelligence in action
                </h2>
                <Vimeo id={353422112} muted={true} autoplay={true} loop={true} />
            </ContentSection>
            <ContentSection color="white" className="pt-6 pb-2">
                <h2 id="codereviews" className="display-4 mb-5 text-center">
                    Better code reviews with code intelligence
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
                    <div className="col-lg-6 mb-4">
                        <OpenSourcePrivacyFeatureItem />
                    </div>
                </div>
            </ContentSection>
            <ContentSection color="white" className="pt-5 pb-3">
                <hr id="integrations" />
                   <IntegratesWithSection className="mt-4 pt-5 pb-6" />
            </ContentSection>
            <ContentSection color="black" className="py-6">
                {/*<ProductDemoVideo title="See how Sourcegraph code review ..." />*/}
                <h2 id="demo" className="text-center display-4 pb-4">
                    Better code reviews with the Sourcegraph browser extension
                </h2>
                <Vimeo id={340033634} />
            </ContentSection>
            <ContentSection color="white" className="pt-5 pb-3">
                <span id="customers" />
                <CustomerLogosSection />
            </ContentSection>
            <ContentSection color="black" className="py-5">
                <EnterpriseReadySolution />
            </ContentSection>
            <Jumbotron
                color="purple"
                className="py-4"
                logomark={false}
                title="Try Sourcegraph now"
                description="Explore, navigate, and better understand all code, everywhere, faster, with Universal Code Search"
            >
                <GetSourcegraphNowActions />
                <a className="btn btn-primary mt-2" href="https://docs.sourcegraph.com/integration/browser_extension">
                    Install browser extension
                </a>
            </Jumbotron>
        </ContentPage>
    </Layout>
)) as React.FunctionComponent<any>
