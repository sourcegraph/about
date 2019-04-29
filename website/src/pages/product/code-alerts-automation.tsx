import { Link } from 'gatsby'
import GlobeIcon from 'mdi-react/GlobeIcon'
import LockIcon from 'mdi-react/LockIcon'
import SearchIcon from 'mdi-react/SearchIcon'
import StopwatchIcon from 'mdi-react/StopwatchIcon'
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
import { ContactPresalesSupportAction } from '../../css/components/actions/ContactPresalesSupportAction'
import { GetSourcegraphNowActions } from '../../css/components/actions/GetSourcegraphNowActions'
import { ViewDeveloperDocumentationAction } from '../../css/components/actions/ViewDeveloperDocumentationAction'

export default ((props: any) => (
    <Layout location={props.location}>
        <ContentPage
            title="Code alerts & automation"
            description="Continuously monitor all changes to all repositories for risky or important changes. Get instant email, Slack, or webhook notifications for every hit."
            mainActions={
                <div className="d-flex flex-column align-items-center">
                    <a className="btn btn-primary mb-2" href="https://docs.sourcegraph.com/#quickstart">
                        Install
                    </a>
                    <ViewDeveloperDocumentationAction
                        className="text-light my-1"
                        url="https://docs.sourcegraph.com/user/search/saved_searches"
                    >
                        Documentation
                    </ViewDeveloperDocumentationAction>
                    <ContactPresalesSupportAction className="text-light" />
                </div>
            }
        >
            <PageSectionLinks
                sections={[
                    { text: 'Use cases', url: '#use-cases' },
                    { text: 'Who uses it', url: '#customers' },
                    { text: 'Integrations', url: '#integrations' },
                ]}
            />
            <ContentSection color="white" className="pt-6 pb-2">
                <h2 id="use-cases" className="display-4 mb-5">
                    Stay on top of changes without slowing down development
                </h2>
                <p>
                    With Sourcegraph{' '}
                    <a href="https://docs.sourcegraph.com/user/search/saved_searches" target="_blank">
                        saved searches
                    </a>
                    , you can get notified by email, Slack, or webhook whenever anyone commits code that matches your
                    query (on any branch of any repository).
                </p>
                <div className="row mt-4">
                    <div className="col-lg-4 mb-4">
                        <IconItem className="position-relative" icon={LockIcon} color="brand-orange">
                            <h4>Monitor risky changes</h4>
                            <p>
                                What "risky" means is different for everyone: committing API keys, changing billing
                                code, or modifying deployment configuration. With Sourcegraph, it's easy to write a
                                query to match your specific definition of "risky" and get notified whenever it matches
                                any new code.
                            </p>
                            <p>
                                Just want to try it out and see what it finds on your code? Sourcegraph ships with
                                sample saved searches to match API keys, GPL additions, and more.
                            </p>
                        </IconItem>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <IconItem className="position-relative" icon={GlobeIcon} color="brand-purple">
                            <h4>Watch for new dependencies or API consumers</h4>
                            <p>
                                To be a good service or library maintainer, you need to know how people are using your
                                API. You might even have some advice at code review time for new API consumers, if only
                                you could monitor how people used your service. With Sourcegraph, you can.
                            </p>
                        </IconItem>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <OpenSourcePrivacyFeatureItem />
                    </div>
                </div>
            </ContentSection>
            <ContentSection color="white" className="pt-5 pb-3">
                <span id="customers" />
                <hr />
                <CustomerLogosSection className="mt-6 mb-4" />
            </ContentSection>
            <ContentSection color="white" className="pt-5 pb-3">
                <hr id="integrations" />
                <IntegratesWithSection
                    className="py-6"
                    showTypes={['codeHost']}
                    customTypeLabels={{ codeHost: 'Code hosts' }}
                />
            </ContentSection>
            <ContentSection color="black" className="py-5">
                <EnterpriseReadySolution />
            </ContentSection>
            <Jumbotron
                color="purple"
                className="py-4"
                logomark={false}
                title="Get Sourcegraph now"
                description="Move fast without breaking things. Stay on top of risks and important changes in your code."
            >
                <GetSourcegraphNowActions />
            </Jumbotron>
        </ContentPage>
    </Layout>
)) as React.FunctionComponent<any>
