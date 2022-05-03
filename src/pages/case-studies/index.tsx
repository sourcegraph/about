import { FunctionComponent } from 'react'

import { Layout, ContentSection, TrySourcegraph } from '@components'

import { CaseStudyCard, CASESTUDIES } from '../../components/CaseStudies/CaseStudyCard'

const CaseStudiesHome: FunctionComponent = () => (
    <>
        <Layout
            meta={{
                title: 'Sourcegraph - Case studies',
                description: 'Learn how engineering teams use Sourcegraph Universal Code Search.',
                image: '/sourcegraph-og.png',
            }}
        >
            <div className="mt-2">
                <ContentSection className="hero-section text-center py-5">
                    <h1 className="display-2 font-weight-bold">Sourcegraph case studies</h1>
                    <h2>Learn how engineering teams use Universal Code Search</h2>
                </ContentSection>

                <ContentSection>
                    <div className="container">
                        <div className="d-flex flex-wrap">
                            {CASESTUDIES.map(study => (
                                <div className="d-flex col-lg-4 mb-6" key={study.name}>
                                    <div className="card">
                                        <CaseStudyCard study={study} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </ContentSection>

                <TrySourcegraph className="my-6" />
            </div>
        </Layout>
    </>
)

export default CaseStudiesHome
