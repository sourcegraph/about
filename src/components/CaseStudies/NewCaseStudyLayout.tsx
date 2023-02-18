import { FunctionComponent } from 'react'

import { ContentSection, CtaSection } from '..'

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

            <CtaSection />

            <ContentSection background="white">
                <h2 className="mb-2xl">Explore other case studies</h2>
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-xl">
                    {uniqueCaseStudyList.map(study => (
                        <div key={study.name} className="flex items-end">
                            <CaseStudyCard study={study} />
                        </div>
                    ))}
                </div>
            </ContentSection>
        </>
    )
}
