import React from 'react'
import Helmet from 'react-helmet'
import { ContentPage } from '../../components/content/ContentPage'
import { ContentSection } from '../../components/content/ContentSection'
import Layout from '../../components/Layout'

export default ((props: any) => (
    <Layout location={props.location}>
        <ContentPage
            title="Onboard new developers faster"
            description="This is awesome"
            mainActions={
                <>
                    <a className="btn btn-primary btn-lg" href="https://docs.sourcegraph.com/#quickstart">
                        Install
                    </a>
                </>
            }
        >
            <Helmet>
                <meta name="robots" content="noindex" />
            </Helmet>
            <ContentSection>
                <h2>Powerful, instant code search</h2>
            </ContentSection>
        </ContentPage>
    </Layout>
)) as React.FunctionComponent<any>
