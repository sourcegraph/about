import { FunctionComponent } from 'react'

import { ContentSection, CtaSection, CASESTUDY_CARDS } from '@components'

import { ImgIconLinkCard } from '../ImgIconLinkCard'

interface Props {
    customer: string
    pdf?: string
    children?: React.ReactNode
}

export const NewCaseStudyLayout: FunctionComponent<Props> = ({ customer, children }) => {
    // CaseStudy preview list NOT including current CaseStudy page
    const uniqueCaseStudyList = CASESTUDY_CARDS.filter(study => study.alt !== customer).slice(0, 4)

    return (
        <>
            {children}

            <CtaSection
                background="venusCode"
                centerContent={true}
                cta2={{
                    text: 'Request a demo',
                    ctaStyle: 'outlineButton',
                    link: '/demo',
                }}
            />

            <ContentSection background="white">
                <h2 className="tw-mb-6">Explore other case studies</h2>
                <div className="tw-grid tw-grid-cols-1 xs:tw-grid-cols-2 tw-gap-6">
                    {uniqueCaseStudyList.map(study => (
                        <div key={study.alt}>
                            <ImgIconLinkCard item={study} />
                        </div>
                    ))}
                </div>
            </ContentSection>
        </>
    )
}
