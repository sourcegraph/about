import { FunctionComponent } from 'react'

import { ContentSection, RequestDemoTrySourcegraph, BlockquoteWithLogoBottom } from '@components'

import { CaseStudyCard, CASESTUDIES } from './CaseStudyCard'
interface Quote {
    text: string
    author: string
}

interface Logo {
    img: string
    href: string
}

interface Props {
    customer: string
    logo?: Logo
    quote?: Quote
    pdf?: string
    children?: React.ReactNode
}

export const NewCaseStudyLayout: FunctionComponent<Props> = ({ customer, logo, quote = null, children }) => {
    // CaseStudy preview list NOT including current CaseStudy page
    const uniqueCaseStudyList = CASESTUDIES.filter(study => study.name !== customer).slice(0, 4)

    return (
        <>
            {quote && (
                <ContentSection color="white" className="py-7 text-center max-w-600">
                    <BlockquoteWithLogoBottom
                        quote={quote.text}
                        author={quote.author}
                        logo={{
                            src: logo?.img || '',
                            alt: customer,
                            href: logo?.href,
                        }}
                    />
                </ContentSection>
            )}

            {children}

            <div className="py-7">
                <RequestDemoTrySourcegraph />
            </div>

            <ContentSection color="white" className="py-lg-7 py-5 col-xl-6">
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
