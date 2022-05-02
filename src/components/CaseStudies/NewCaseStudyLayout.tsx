import { FunctionComponent } from 'react'

import { kebabCase } from 'lodash'

import { CaseStudyJumbotron, ContentSection, RequestDemoTrySourcegraph, BlockquoteWithLogoTop } from '@components'

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
    title: string
    logo?: Logo
    quote?: Quote
    pdf?: string
    heroImage?: string
    heroLink?: string
    className?: string
    titleClassName?: string
    children?: React.ReactNode
}

export const NewCaseStudyLayout: FunctionComponent<Props> = ({
    customer,
    title,
    logo,
    quote = null,
    className = 'case-study',
    pdf,
    children,
}) => {
    // CaseStudy preview list NOT including current CaseStudy page
    const uniqueCaseStudyList = CASESTUDIES.filter(study => study.name !== customer).slice(0, 4)

    return (
        <>
            <div className={`${kebabCase(customer)}-${className} ${className}`}>
                <CaseStudyJumbotron
                    className="bg-gradient-saturn-saturated text-black height-md-450 height-auto p-2"
                    customer={customer}
                    color="white"
                >
                    <h1 className="pt-5 pb-6 display-2 font-weight-bold max-w-600 mx-auto">{title}</h1>
                    {pdf && (
                        <a href={pdf} className="btn btn-primary mt-3" rel="nofollow noreferrer" target="_blank">
                            <i className="fa fa-file-pdf pr-2" />
                            Download PDF
                        </a>
                    )}
                </CaseStudyJumbotron>

                {quote && (
                    <ContentSection color="white" className="py-6 text-center max-w-600">
                        <BlockquoteWithLogoTop
                            quote={quote.text}
                            author={quote.author}
                            logoHref={logo?.href}
                            logoAlt={customer}
                            logoImage={logo?.img}
                        />
                    </ContentSection>
                )}

                {children}
            </div>

            <RequestDemoTrySourcegraph />

            <ContentSection color="white" className="py-lg-7 py-5 col-xl-6">
                <h1 className="pl-5 pb-5 display-3 font-weight-bold">Explore other case studies</h1>
                <div className="d-flex flex-wrap">
                    {uniqueCaseStudyList.map(study => (
                        <div key={study.name} className="col-lg-6 mb-3">
                            <CaseStudyCard name={study.name} logo={study.logo} title={study.title} url={study.url} />
                        </div>
                    ))}
                </div>
            </ContentSection>
        </>
    )
}
