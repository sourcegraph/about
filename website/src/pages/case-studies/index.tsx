import * as React from 'react'
import { Helmet } from 'react-helmet'
import { ContentSection } from '../../components/content/ContentSection'
import Layout from '../../components/Layout'
import { CaseStudyCard, CASESTUDIES } from '../../components/product/CaseStudyCard'
import { TrySourcegraph } from '../../components/TrySourcegraph'

const DESCRIPTION = 'Learn how engineering teams use Sourcegraph Universal Code Search.'

export default ((props: any) => (
    <Layout location={props.location}>
        <Helmet>
            <title>Sourcegraph - Case studies</title>
            <meta name="twitter:title" content="Sourcegraph - Case studies" />
            <meta property="og:title" content="Sourcegraph - Case studies" />
            <meta name="twitter:description" content={DESCRIPTION} />
            <meta property="og:description" content={DESCRIPTION} />
            <meta property="og:image" content="https://about.sourcegraph.com/sourcegraph-og.png" />
            <meta name="description" content={DESCRIPTION} />
            <link rel="icon" type="image/png" href="/favicon.png" />
        </Helmet>
        <div className="customers-page mt-2">
            <ContentSection className="hero-section text-center py-5">
                <h1 className="display-2 font-weight-bold">Sourcegraph case studies</h1>
                <h2>Learn how engineering teams use Universal Code Search</h2>
            </ContentSection>
            <ContentSection>
                <div className="d-flex flex-wrap">
                    {CASESTUDIES.map((study, i) => (
                        <div key={i} className="col-lg-4 mb-6">
                            <div key={i} className="card">
                                <CaseStudyCard study={study} />
                            </div>
                        </div>
                    ))}
                </div>
            </ContentSection>
            <TrySourcegraph className="my-6" />
        </div>
    </Layout>
)) as React.FunctionComponent<any>
