import { FunctionComponent } from 'react'

import { Layout, CallToActionContentSection } from '../../components'
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
                <div className="py-lg px-6 text-center">
                    <h1 className="mb-xs">Sourcegraph case studies</h1>
                    <h4>Learn how engineering teams understand, fix, and automate across their entire codebase</h4>
                </div>

                <div className="mx-auto mb-3xl max-w-screen-xl px-6">
                    <ul className="ml-0 grid list-none grid-cols-12 flex-wrap gap-6">
                        {CASESTUDIES.map(study => (
                            <li className="col-span-12 flex grid-cols-4 md:col-span-6 lg:col-span-4" key={study.name}>
                                <div className="w-full border border-solid border-gray-200 bg-white p-sm">
                                    <CaseStudyCard study={study} />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <CallToActionContentSection />
            </div>
        </Layout>
    </>
)

export default CaseStudiesHome
