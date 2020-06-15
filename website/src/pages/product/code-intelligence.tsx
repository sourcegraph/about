import { Link } from 'gatsby'
import CodeBracesIcon from 'mdi-react/CodeBracesIcon'
import DirectionsIcon from 'mdi-react/DirectionsIcon'
import FolderSearchOutlineIcon from 'mdi-react/FolderSearchOutlineIcon'
import MicroscopeIcon from 'mdi-react/MicroscopeIcon'
import PowerPlugIcon from 'mdi-react/PowerPlugIcon'
import TooltipPlusIcon from 'mdi-react/TooltipPlusIcon'
import React from 'react'
import { ContentPage } from '../../components/content/ContentPage'
import { ContentSection } from '../../components/content/ContentSection'
import { IconItem } from '../../components/IconItem'
import { Jumbotron } from '../../components/Jumbotron'
import Layout from '../../components/Layout'
import { PageSectionLinks } from '../../components/PageSectionLinks'
import { IntegratesWithSection } from '../../components/product/IntegratesWithSection'
import { OpenSourcePrivacyFeatureItem } from '../../components/product/OpenSourcePrivacyFeatureItem'
import { SupportedProgrammingLanguagesLink } from '../../components/product/SupportedProgrammingLanguagesLink'
import { YouTube } from '../../components/YouTube'
import { GetSourcegraphNowActions } from '../../css/components/actions/GetSourcegraphNowActions'

export default ((props: any) => (
    <Layout location={props.location}>
        <ContentPage
            title="Code intelligence"
            description="Use Sourcegraph to find answers faster, with inline contextual information around code."
        >
            <PageSectionLinks
                sections={[
                    { text: 'Better code reviews', url: '#codereviews' },
                    { text: 'Integrations', url: '#integrations' },
                    { text: 'Demo screencast', url: '#demo' },
                ]}
            />
            <ContentSection color="white" className="py-2">
                <h2 className="display-4 mb-4 text-center">
                    Explore definitions &amp; references, across all projects
                </h2>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <IconItem color="brand-orange" icon={FolderSearchOutlineIcon} className="py-3">
                            <p className="text-sans-serif">
                                Find the definition, function calls and anything else in code, across packages,
                                dependencies, and repositories.
                            </p>
                        </IconItem>
                    </div>
                    <div className="col-md-4 mb-4">
                        <IconItem color="brand-orange" icon={TooltipPlusIcon} className="py-3">
                            <p className="text-sans-serif">
                                Explore code in your web browser in any repository on any branch, instantly and without
                                losing local context.
                            </p>
                        </IconItem>
                    </div>
                    <div className="col-md-4 mb-4">
                        <IconItem color="brand-orange" icon={CodeBracesIcon} className="py-3">
                            <p className="text-sans-serif">
                                All programming languages are supported. <SupportedProgrammingLanguagesLink /> have
                                additional code intelligence support.
                            </p>
                        </IconItem>
                    </div>
                </div>
                <div className="row justify-content-center py-4">
                    <div className="col-lg-10 text-center">
                        <img src="/external-logos/uber.svg" width="100px" />
                        <blockquote className="blockquote case-studies__quote case-studies__quote--in-content">
                            <p>[Sourcegraph] improves my productivity and ability to write clean code by 2-3x.</p>
                            <footer className="blockquote-footer">Uber senior engineer</footer>
                        </blockquote>
                    </div>
                </div>
            </ContentSection>
            <ContentSection color="black" className="py-6">
                <h2 id="demo" className="text-center display-4 pb-4">
                    See Sourcegraph code intelligence in action
                </h2>
                <YouTube id="GQj5jXdON3A" />
            </ContentSection>
            <ContentSection color="white" className="pt-6 pb-3">
                <h2 id="codereviews" className="display-4 mb-5 text-center">
                    Better code reviews with Sourcegraph's code intelligence
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
                                single click. Even if your IDE supports this, being able to do it in your web browser
                                instantly without losing context saves tons of time&mdash;and helps you do more thorough
                                reviews. Works for <SupportedProgrammingLanguagesLink />.
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
                            <h4>See test coverage and runtime logs, traces, and errors</h4>
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
            <ContentSection color="white" className="pt-3">
                <hr id="integrations" />
                <IntegratesWithSection className="mt-4 pt-5 pb-6" />
            </ContentSection>
            <ContentSection color="black" className="py-6">
                {/*<ProductDemoVideo title="See how Sourcegraph code review ..." />*/}
                <h2 id="demo" className="text-center display-4 pb-4">
                    Better code reviews with the Sourcegraph browser extension
                </h2>
                <YouTube id="s5TJBLACWeQ" />
            </ContentSection>
            <Jumbotron
                color="purple"
                className="py-4"
                logomark={false}
                title="Try Sourcegraph now"
                description="Explore, navigate, and better understand all code, everywhere, faster, with Universal Code Search"
            >
                <GetSourcegraphNowActions />
            </Jumbotron>
        </ContentPage>
    </Layout>
)) as React.FunctionComponent<any>
