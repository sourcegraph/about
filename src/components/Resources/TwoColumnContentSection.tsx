import { FunctionComponent, ReactNode, useEffect, useRef, useState } from 'react'

import classNames from 'classnames'

import { ContentSection, HubSpotForm } from '..'

interface TwoColumnContentSectionProps {
    title?: string | ReactNode
    subContent: ReactNode
    alternateStyle?: boolean
    banner?: ReactNode
}
const TwoColumnContentSection: FunctionComponent<TwoColumnContentSectionProps> = ({
    title,
    subContent,
    alternateStyle,
}) => {
    const formContainerRef = useRef<HTMLDivElement>(null)
    const [formSubmitted, setFormSubmitted] = useState(false)

    useEffect(() => {
        if (formSubmitted && formContainerRef.current) {
            formContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }, [formSubmitted])

    const listItems = [
        'Why Gartner positioned Sourcegraph as a Visionary',
        'Where the AI Code Assistant market stands today and where it’s headed',
        'How to choose the right AI Code Assistant for your organization',
    ]

    return (
        <ContentSection className="pt-[79px] md:pt-[55px]" parentClassName="pt-11 pb-16 px-6 md:px-20">
            <div ref={formContainerRef}>
                <div className="relative mx-auto flex w-full flex-col gap-10 pt-0 md:flex-row md:gap-10">
                    <div className="flex w-full flex-1 flex-col md:pr-0 md:pt-10 md:pr-0">
                        <h1
                            className={classNames('mb-10 max-w-[589px] !text-5xl text-gray-700 md:tracking-tighter', [
                                { 'max-w-[605px] md:!text-[32px]': alternateStyle },
                                { 'md:max-w-[589px] md:!text-4xl ': !alternateStyle },
                            ])}
                        >
                            {title ??
                                'Sourcegraph is named a Visionary in the 2024 Gartner® Magic Quadrant™ for AI Code Assistants'}
                        </h1>
                        <div
                            className={classNames('text-lg leading-[27px] tracking-tight text-gray-700', [
                                { 'md:max-w-[605px]': alternateStyle },
                                { 'md:max-w-[589px]': !alternateStyle },
                            ])}
                        >
                            {subContent}
                            <p>
                                Download your complimentary copy of the 2024 Gartner® Magic Quadrant™ for AI Code
                                Assistants and learn:
                            </p>
                            <ul className="ml-5">
                                {listItems.map(item => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="hidden md:flex">
                            <DisclaimerSection alternateStyle={alternateStyle} />
                        </div>
                    </div>
                    <div className="w-full md:flex md:w-1/2 md:justify-end">
                        <div className="w-full max-w-[627px] overflow-hidden !rounded-2xl">
                            <div className="sg-border-gradient-light relative z-10 !rounded-2xl border-1 bg-white pl-12 pt-[46px] pb-[11px] pr-2.5">
                                <div className="mb-6 text-[32px] font-semibold leading-[38.4px] tracking-tighter text-[#0F111A]">
                                    Download your copy
                                </div>
                                <div
                                    className={classNames('mt-5', {
                                        'pb-12': formSubmitted,
                                    })}
                                >
                                    <HubSpotForm
                                        masterFormName="gartnerMagicQuadrant"
                                        chiliPiper={false}
                                        bookIt={false}
                                        form_submission_source="gartner-magic-quadrant"
                                        onFormSubmitted={() => setFormSubmitted(true)}
                                        overrideInlineMessage={false}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <DisclaimerSection alternateStyle={alternateStyle} />
                    </div>
                </div>
            </div>
        </ContentSection>
    )
}

export default TwoColumnContentSection

const DisclaimerSection: FunctionComponent<{ alternateStyle?: boolean }> = ({ alternateStyle }) => (
    <div
        className={classNames([
            { 'mt-10 md:max-w-[605px]': alternateStyle },
            { 'mt-24 md:max-w-[589px]': !alternateStyle },
        ])}
    >
        <img src="/assets/resources/gartner.svg" alt="gartner logo" className="h-12 w-[131px]" />
        <div className="mt-4 text-sm leading-[21px] tracking-normal text-gray-500 md:mb-10">
            <p>
                Gartner does not endorse any vendor, product or service depicted in its research publications, and does
                not advise technology users to select only those vendors with the highest ratings or other designation.
                Gartner research publications consist of the opinions of Gartner’s research organization and should not
                be construed as statements of fact. Gartner disclaims all warranties, expressed or implied, with respect
                to this research, including any warranties of merchantability or fitness for a particular purpose.
            </p>
            <p>
                Gartner, Magic Quadrant for AI Code Assistants, 19 August 2024, Arun Batchu, et.al. GARTNER is a
                registered trademark and service mark, and MAGIC QUADRANT is a registered trademark of Gartner, Inc.
                and/or its affiliates in the U.S. and internationally and are used herein with permission. All rights
                reserved.
            </p>
        </div>
    </div>
)