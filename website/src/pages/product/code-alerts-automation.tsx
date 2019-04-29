import { Link } from 'gatsby'
import React from 'react'
import { ContentPage } from '../../components/content/ContentPage'
import { ContentSection } from '../../components/content/ContentSection'
import { Jumbotron } from '../../components/Jumbotron'
import Layout from '../../components/Layout'
import { PageSectionLinks } from '../../components/PageSectionLinks'
import { CustomerLogosSection } from '../../components/product/CustomerLogosSection'
import { EnterpriseReadySolution } from '../../components/product/EnterpriseReadySolution'
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
                    { text: 'Features', url: '#features' },
                    { text: 'Integrations', url: '#integrations' },
                    { text: 'Who uses it', url: '#customers' },
                ]}
            />
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
                title="Get Sourcegraph now"
                description="Move fast without breaking things. Stay on top of risks and important changes in your code."
            >
                <GetSourcegraphNowActions />
            </Jumbotron>
        </ContentPage>
    </Layout>
)) as React.FunctionComponent<any>
