import { FunctionComponent } from 'react'

import { Background, ContentSection, RequestDemoTrySourcegraph } from '@components'

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

            <Background variant="venusCode">
                <RequestDemoTrySourcegraph />
            </Background>

            <ContentSection color="white">
                <h2 className="tw-mb-6">Explore other case studies</h2>
                <div className="tw-grid tw-grid-cols-1 xs:tw-grid-cols-2 tw-gap-6">
                    {uniqueCaseStudyList.map(study => (
                        <div key={study.name}>
                            <CaseStudyCard study={study} />
                        </div>
                    ))}
                </div>
            </ContentSection>
        </>
    )
}
