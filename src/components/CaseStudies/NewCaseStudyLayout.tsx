import { FunctionComponent } from 'react'

import { ContentSection, RequestDemoTrySourcegraph } from '@components'

import { CaseStudyCard, CASESTUDIES } from './CaseStudyCard'

interface Props {
    customer: string
    pdf?: string
    children?: React.ReactNode
}

export const NewCaseStudyLayout: FunctionComponent<Props> = ({ customer, children }) => {
    // CaseStudy preview list NOT including current CaseStudy page
    const uniqueCaseStudyList = CASESTUDIES.filter(study => study.name !== customer).slice(0, 4)

    return (
        <>
            {children}

            <div className="py-7 bg-code-venus">
                <RequestDemoTrySourcegraph />
            </div>

            <ContentSection color="white" className="py-7 py-5 col-xl-6">
                <h1 className="pl-5 pb-5 display-3 font-weight-bold">Explore other case studies</h1>
                <div className="d-flex flex-wrap">
                    {uniqueCaseStudyList.map(study => (
                        <div key={study.name} className="col-lg-6 mb-3">
                            <CaseStudyCard study={study} />
                        </div>
                    ))}
                </div>
            </ContentSection>
        </>
    )
}
