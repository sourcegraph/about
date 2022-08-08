import { FunctionComponent } from 'react'

import { Layout, ContentSection, TrySourcegraph } from '@components'

import { CaseStudyCard, CASESTUDIES } from '../../components/CaseStudies/CaseStudyCard'

const CaseStudiesHome: FunctionComponent = () => (
    <>
        <Layout
            meta={{
                title: 'Sourcegraph - Case studies',
                description:
                    "Learn how engineering teams use Sourcegraph's code intelligence platform to understand, fix, and automate across their entire codebase.",
            }}
        >
            <div className="mt-2">
                <ContentSection className="py-5 text-center hero-section">
                    <h1 className="display-2 font-weight-bold">Sourcegraph case studies</h1>
                    <h4 className="py-2 font-weight-normal">
                        Learn how engineering teams understand, fix, and automate across their entire codebase
                    </h4>
                </ContentSection>

                <ContentSection>
                    <div className="container">
                        <ul className="tw-flex-wrap tw-flex tw-list-none tw-ml-0">
                            {CASESTUDIES.map(study => (
                                <li className="mb-6 d-flex col-md-6 col-lg-4" key={study.name}>
                                    <div className="tw-bg-white tw-border tw-border-solid tw-border-gray-200 w-100">
                                        <CaseStudyCard study={study} />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </ContentSection>

                <TrySourcegraph className="my-6" />
            </div>
        </Layout>
    </>
)

export default CaseStudiesHome
