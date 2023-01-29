import { FunctionComponent } from 'react'

import { Layout, CtaSection } from '../../components'
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
            <div>
                <div className="tw-text-center tw-py-lg tw-px-6">
                    <h1 className="tw-mb-xs">Sourcegraph case studies</h1>
                    <h4>Learn how engineering teams understand, fix, and automate across their entire codebase</h4>
                </div>

                <div className="tw-max-w-screen-xl tw-mx-auto tw-px-6 tw-mb-3xl">
                    <ul className="tw-flex-wrap tw-grid tw-grid-cols-12 tw-list-none tw-ml-0 tw-gap-6">
                        {CASESTUDIES.map(study => (
                            <li
                                className="grid-cols-4 tw-flex tw-col-span-12 md:tw-col-span-6 lg:tw-col-span-4"
                                key={study.name}
                            >
                                <div className="tw-bg-white tw-border tw-border-solid tw-border-gray-200 tw-w-full tw-p-sm">
                                    <CaseStudyCard study={study} />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <CtaSection />
            </div>
        </Layout>
    </>
)

export default CaseStudiesHome
