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
                <div className="text-center py-lg px-6">
                    <h1 className="mb-xs">Sourcegraph case studies</h1>
                    <h4>Learn how engineering teams understand, fix, and automate across their entire codebase</h4>
                </div>

                <div className="max-w-screen-xl mx-auto px-6 mb-3xl">
                    <ul className="flex-wrap grid grid-cols-12 list-none ml-0 gap-6">
                        {CASESTUDIES.map(study => (
                            <li
                                className="grid-cols-4 flex col-span-12 md:col-span-6 lg:col-span-4"
                                key={study.name}
                            >
                                <div className="bg-white border border-solid border-gray-200 w-full p-sm">
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
