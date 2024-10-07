import { FunctionComponent, ReactNode } from 'react'

import classNames from 'classnames'
import { ChevronRightIcon, Key } from 'lucide-react'
import Link from 'next/link'
import { MdDoNotDisturb, MdLock, MdOutlineSecurity, MdVpnKey } from 'react-icons/md'

import { ContentSection } from '..'

interface EnterpriseGradeSectionProps {
    parentClassName?: string
    description?: string
    customHeader?: string | ReactNode
    securityCardItems?: { icon: ReactNode; heading: string; paragraph: string }[]
    isCustomSecondLevelContent?: boolean
    className?: string
}

const securityCardFeatures = [
    {
        icon: <MdDoNotDisturb size={24} />,
        heading: 'Zero retention',
        paragraph:
            'Our provided LLMs do not retain data from your requests for longer than the time it takes to generate an output.',
    },
    {
        icon: <MdVpnKey size={24} />,
        heading: 'You retain ownership',
        paragraph: 'You retain ownership of all inputs and output generated by Cody.',
    },
    {
        icon: <MdOutlineSecurity size={24} />,
        heading: 'Uncapped indemnity',
        paragraph: 'We provide full IP indemnity to enterprise customers.',
    },
]

export const EnterpriseGradeSection: FunctionComponent<EnterpriseGradeSectionProps> = ({
    parentClassName,
    description,
    customHeader,
    securityCardItems,
    isCustomSecondLevelContent,
    className,
}) => (
    <ContentSection
        className={classNames('py-16 ', {
            'rounded-2xl border-1 border-gray-200 bg-white': !className,
            className,
            'max-w-[1280px] px-6 md:px-10': !customHeader,
        })}
        parentClassName={classNames({
            parentClassName,
            '!py-0 md:px-[80px]': !parentClassName && !customHeader,
        })}
    >
        {customHeader ? (
            <h2 className="mb-10">{customHeader}</h2>
        ) : (
            <>
                <h6 className="mb-4">cody</h6>
                <h2 className="mb-10">Enterprise-grade AI security and governance</h2>
            </>
        )}

        {description && (
            <h5 className={classNames('mb-16 max-w-[752px]', customHeader && 'text-gray-700 opacity-70')}>
                {description}
            </h5>
        )}

        <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-3 ">
            {(securityCardItems ?? securityCardFeatures).map(feature => (
                <SecurityCard key={feature.heading} {...feature} />
            ))}
        </div>
        {isCustomSecondLevelContent ? (
            <div className="flex flex-col gap-6 md:flex-row">
                <div className="w-full md:w-[60%]">
                    <SecurityCard
                        icon={<Key size={24} />}
                        heading="Bring your own LLM key"
                        paragraph="Provide your own enterprise API key or deploy with Amazon Bedrock, Azure OpenAI, or Google Vertex AI for a private LLM connection."
                    />
                </div>

                <div className="flex w-full rounded-2xl border border-[#E4E9F4] bg-gray-100 py-10 px-8 md:w-[40%] md:items-end">
                    <Link
                        href="/enterprise"
                        title="Case study"
                        className="btn btn-link btn-link-icon p-0 font-semibold !-tracking-[0.25px] md:mx-0 md:text-left md:text-right"
                    >
                        Read more about Sourcegraph for Enterprise
                        <ChevronRightIcon className="link-icon" />
                    </Link>
                </div>
            </div>
        ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="col-span-1 flex flex-col-reverse justify-between gap-x-[33px] gap-y-4 rounded-2xl border-1 border-gray-200 md:col-span-2 md:flex-row md:items-end ">
                    <div className="pr-10 md:pr-0">
                        <img alt="" src="/enterprise/screenshot.svg" className="rounded-bl-lg" />
                    </div>
                    <div className="mt-10 mb-4 pl-10 pt-10 pr-10 md:my-10  md:py-10   md:pl-0 md:pb-10">
                        <div className="flex max-w-[311px] flex-col gap-4">
                            <h2>Guardrails to catch licensed code</h2>
                            <p
                                className={classNames(
                                    'mb-0 text-[18px] font-normal leading-[27px] -tracking-[0.25px]',
                                    {
                                        '!font-sans': parentClassName,
                                    }
                                )}
                            >
                                Sourcegraph automatically checks AI suggestions against open source code and highlights
                                matches to mitigate IP risk.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <SecurityCard
                        icon={<MdLock size={24} />}
                        heading="No model training with your data"
                        paragraph="We do not train models using data from Cody Enterprise users, so your code stays private
                                to you."
                    />
                    <div className="flex items-start gap-4 rounded-2xl border-1 border-gray-200 bg-gray-100 py-10 px-8">
                        <img src="/enterprise/file-document-outline.svg" alt="" />
                        <h5>
                            To learn more, read our
                            <Link
                                href="/whitepapers/cody-security-and-legal"
                                title="Cody security & legal whitepaper"
                                className="btn-link mx-[3px]"
                            >
                                Cody security & legal whitepaper
                            </Link>
                        </h5>
                    </div>
                </div>
            </div>
        )}
    </ContentSection>
)

const SecurityCard: FunctionComponent<{ icon: ReactNode; heading: string; paragraph: string }> = ({
    icon,
    heading,
    paragraph,
}) => (
    <div className="flex flex-col gap-4 rounded-2xl border-1 border-gray-200 py-10 px-8">
        {icon}
        <h4>{heading}</h4>
        <p className="mb-0 text-[18px] font-normal leading-[27px] -tracking-[0.25px]">{paragraph}</p>
    </div>
)
