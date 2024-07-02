import { FunctionComponent, ReactNode } from 'react'

import classNames from 'classnames'
import Link from 'next/link'

import { ContentSection } from '../ContentSection'

const securityFeatures = [
    {
        imgSrc: ['/security/soc2.svg'],
        altText: 'SOC 2 Type 2 compliance',
        heading: 'SOC 2 Type 2 compliance',
        paragraph: (
            <>
                Data privacy is a priority, and Sourcegraph has received a SOC 2 Type 2 report. See our
                <Link
                    href="https://security.sourcegraph.com/"
                    title="security portal"
                    className="mx-[3px] text-black underline underline-offset-[3.55px] "
                >
                    security portal
                </Link>
                for more information.
            </>
        ),
    },
    {
        imgSrc: ['/security/gdpr.svg', '/security/ccpa.svg'],
        altText: 'GDPR and CCPA',
        heading: 'GDPR + CCPA',
        paragraph:
            'Sourcegraph is compliant with the CCPA and operates in accordance with GDPR data protection regulations.',
    },
    {
        imgSrc: ['/enterprise/notes.svg'],
        altText: 'Notes',
        heading: 'Audit logs',
        paragraph: 'Sourcegraph logs security and access events for security teams’ peace of mind.',
    },
]

export const SecurityFeatureSection: FunctionComponent = () => (
    <ContentSection
        className="flex flex-col gap-6 md:flex-row"
        parentClassName="!py-0 md:!pb-[96px] !pb-[64px] md:px-[80px]"
    >
        {securityFeatures.map(feature => (
            <SecurityFeature className="max-w-[410px]" key={feature.heading} {...feature} />
        ))}
    </ContentSection>
)

const SecurityFeature: FunctionComponent<{
    imgSrc: string[]
    altText: string
    heading: string
    paragraph: string | ReactNode
    className?: string
}> = ({ imgSrc, altText, heading, paragraph, className }) => (
    <div className={classNames('p-10', className)}>
        <div className="flex flex-row gap-10">
            {imgSrc.map(src => (
                <img key={altText} src={src} alt={altText} className="mb-8 h-[60px] w-[60px]" />
            ))}
        </div>
        <h4>{heading}</h4>
        <p className="mb-0 mt-4 text-[18px] font-normal leading-[27px] -tracking-[0.25px]">{paragraph}</p>
    </div>
)
