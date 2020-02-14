import { Link } from 'gatsby'
import MapIcon from 'mdi-react/MapIcon'
import AutorenewIcon from 'mdi-react/AutorenewIcon'
import SearchIcon from 'mdi-react/SearchIcon'
import ToolboxIcon from 'mdi-react/ToolboxIcon'
import * as React from 'react'
import { Blockquote } from '../../components/Blockquote'
import { ContentPage } from '../../components/content/ContentPage'
import { ContentSection } from '../../components/content/ContentSection'
import { IconItem } from '../../components/IconItem'
import { Jumbotron } from '../../components/Jumbotron'
import Layout from '../../components/Layout'
import { PageSectionLinks } from '../../components/PageSectionLinks'
import { CustomerLogosSection } from '../../components/product/CustomerLogosSection'
import { EnterpriseReadySolution } from '../../components/product/EnterpriseReadySolution'
import { IntegratesWithSection } from '../../components/product/IntegratesWithSection'
import { ProductDemoVideo } from '../../components/product/ProductDemoVideo'
import { ProductFeaturesAndUseCases } from '../../components/product/ProductFeaturesAndUseCases'
import { ContactPresalesSupportAction } from '../../css/components/actions/ContactPresalesSupportAction'
import { GetSourcegraphNowActions } from '../../css/components/actions/GetSourcegraphNowActions'
import { RequestDemoAction } from '../../css/components/actions/RequestDemoAction'
import { ViewDeveloperDocumentationAction } from '../../css/components/actions/ViewDeveloperDocumentationAction'
export default ((props: any) => {
    const actions = (
        <div className="d-flex justify-content-center mt-6">
            <div>
                <RequestDemoAction />
                <ContactPresalesSupportAction className="mt-3 text-light" />
                <ViewDeveloperDocumentationAction className="mt-2 text-light" />
            </div>
        </div>
    )
    return (
        <Layout
            location={props.location}
            meta={{
                title: 'Sourcegraph Universal Code Search',
                description:
                    'Ship better software faster with Sourcegraph Universal Code Search, including code navigation, code intelligence, and code change management.',
            }}
        >
            <ContentPage
                title="Universal Code Search"
                description="Ship better software faster with Sourcegraph Universal Code Search, including code navigation, code intelligence, and code change management."
                mainActions={actions}
            >
                <PageSectionLinks
                    sections={[
                        { text: 'Features', url: '#features' },
                        { text: 'Who uses it', url: '#customers' },
                        { text: 'Integrations', url: '#integrations' },
                    ]}
                />
                <ContentSection color="white" className="py-6">
                    <span id="features" />
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <IconItem className="position-relative" icon={SearchIcon} color="brand-cyan">
                                <h4>Grok your code</h4>
                                <p>
                                    Search and explore all of your code, with{' '}
                                    <strong>instant cross-repository search</strong>, plus{' '}
                                    <strong>Go to definition</strong> and <strong>Find references</strong> across
                                    repositories and dependencies.
                                </p>
                                <p>
                                    10,000s of repositories, all branches and commits, all programming languages, any
                                    code host&mdash;all of your code is accessible on Sourcegraph from your web browser.
                                </p>
                                <Link to="/product/code-search-navigation" className="stretched-link">
                                    Why the best developers use <strong>code search</strong>&nbsp;&raquo;
                                </Link>
                            </IconItem>
                        </div>
                        <div className="col-md-6 mb-4">
                            <IconItem className="position-relative" icon={MapIcon} color="brand-orange">
                                <h4>Do code review right&mdash;and faster</h4>
                                <p>
                                    Get cross-repository/dependency code intelligence when reviewing code, so you can
                                    see the <strong>impact of changes on your entire system</strong>. It's all available
                                    in your existing code review tool with Sourcegraph's "feels-like-native"
                                    integrations.
                                </p>
                                <p>
                                    With Sourcegraph, your team's code reviews will be faster and will catch more bugs
                                    before they ship to production.
                                </p>
                                <Link to="/product/code-review" className="stretched-link">
                                    How to do <strong>code review</strong> right&nbsp;&raquo;
                                </Link>
                            </IconItem>
                        </div>
                        <div className="col-md-6 mb-4">
                            <IconItem className="position-relative" icon={AutorenewIcon} color="green">
                                <h4>Code change management</h4>
                                <p>
                                    Run code change campaigns to remove legacy code, fix critical security issues, and
                                    pay down tech debt.
                                </p>
                                <p>
                                    With Sourcegraph, you can easily make changes, create branches, and track pull
                                    requests across all of your repositories.
                                </p>
                                <Link to="/product/code-change-management" className="stretched-link">
                                    Learn more about <strong>code&nbsp;change&nbsp;management</strong> &nbsp;&raquo;
                                </Link>
                            </IconItem>
                        </div>
                        <div className="col-md-6 mb-4">
                            <IconItem className="position-relative" icon={ToolboxIcon} color="brand-purple">
                                <h4>Integrates into your workflow</h4>
                                <p>
                                    Get hovers and code navigation on files and code reviews right inside GitHub,
                                    GitLab, Bitbucket Server, and Phabricator. Search code from your web browser,
                                    editor, or shell.
                                </p>
                                <a href="https://docs.sourcegraph.com/integration" className="stretched-link">
                                    See and install Sourcegraph's <strong>integrations</strong>&nbsp;&raquo;
                                </a>
                            </IconItem>
                        </div>
                    </div>
                </ContentSection>
                <ContentSection color="primary" className="py-6 d-none">
                    <ProductDemoVideo title="How software development is better with Sourcegraph" />
                    <ProductFeaturesAndUseCases className="mt-6" />
                </ContentSection>
                <ContentSection color="white">
                    <span id="customers" />
                    <CustomerLogosSection className="pt-6 pb-4" />
                    <div className="row">
                        <div className="col-md-6">
                            <Blockquote
                                quote="Seriously, Sourcegraph is the best tool we’ve invested in. It’s made me insanely more productive and efficient at writing code here. I’m able to understand and deeply dive through all of our microservices and get my work done really fast. This is absolutely incredible."
                                by="Lyft engineering manager"
                            />
                        </div>
                        <div className="col-md-6">
                            <Blockquote
                                quote="[Sourcegraph] improves my productivity and ability to write clean code by 2-3x."
                                by="Uber senior engineer"
                            />
                        </div>
                    </div>
                    <hr />
                    <span id="integrations" />
                    <IntegratesWithSection className="mt-4 pt-5 pb-6" />
                </ContentSection>
                <ContentSection color="black" className="py-6">
                    <EnterpriseReadySolution />
                </ContentSection>
                <Jumbotron
                    color="purple"
                    className="pt-4 pb-6"
                    logomark={false}
                    title="Get Sourcegraph now"
                    description="Start shipping better software faster."
                >
                    <GetSourcegraphNowActions />
                </Jumbotron>
            </ContentPage>
        </Layout>
    )
}) as React.FunctionComponent<any>
