import * as React from 'react'
import { ContentSection } from '../../components/content/ContentSection'
import Layout from '../../components/Layout'
import { CaseStudiesSection } from '../../components/product/CaseStudiesSection'

export default ((props: any) => (
    <Layout location={props.location}>
        <div className="customers-page mt-2">
            <ContentSection className="hero-section text-center py-5">
                <h1 className="display-2 font-weight-bold">Sourcegraph case studies</h1>
                <h2>Learn how engineering teams use Universal Code Search</h2>
            </ContentSection>
            <ContentSection>
                <CaseStudiesSection />
            </ContentSection>
        </div>
    </Layout>
)) as React.FunctionComponent<any>
