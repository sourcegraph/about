import { Link } from 'gatsby'
import React from 'react'
import { ContentPage } from '../../components/content/ContentPage'
import { ContentSection } from '../../components/content/ContentSection'
import Layout from '../../components/Layout'

export default ((props: any) => (
    <Layout location={props.location}>
        <ContentPage
            title="Manage 100s/1000s of services, microservices, and APIs"
            description="This is awesome"
            mainActions={
                <>
                    <a className="btn btn-primary btn-lg" href="https://docs.sourcegraph.com/#quickstart">
                        Install
                    </a>
                </>
            }
        >
            <ContentSection>
                <h2>Powerful, instant code search</h2>
            </ContentSection>
        </ContentPage>
    </Layout>
)) as React.FunctionComponent<any>
