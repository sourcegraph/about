import { FunctionComponent } from 'react'

import classNames from 'classnames'

import { ContentSection } from '..'
import { breakpoints } from '../../data/breakpoints'
import { useWindowWidth } from '../../hooks/windowWidth'
import ReadCaseStudyLink from '../ReadCaseStudyLink'

import { EnterpriseIcon } from './EnterpriseIcon'

interface ChooseYourLlmSectionProps {
    article?: { quote: string; author: string; role: string }
    reverseQuote?: boolean
    className?: string
    authorCardClassName?: string
    modelCardClassName?: string
    modelCardContent?: { title: string; description: string }
    modelDescriptionClassName?: string
    parentClassName?: string
    isLight?: boolean
}
const enterpriseDarkDevTools = [
    { src: '/enterprise/logo-tiles/anthropic-dark.svg', alt: 'ai' },
    { src: '/enterprise/logo-tiles/open-ai-dark.svg', alt: 'open ai' },
    { src: '/enterprise/logo-tiles/bedrock-dark.svg', alt: 'amazon bedrock' },
    { src: '/enterprise/logo-tiles/ollama-dark.svg', alt: 'ollama' },
    { src: '/enterprise/logo-tiles/anthropic-dark.svg', alt: 'ai cut' },
]

const enterpriseDarkDevToolsMobile = [
    { src: '/enterprise/logo-tiles/azure-dark.svg', alt: 'microsoft azure' },
    { src: '/enterprise/logo-tiles/anthropic-dark.svg', alt: 'ai' },
    { src: '/enterprise/logo-tiles/bedrock-dark.svg', alt: 'amazon bedrock' },
    { src: '/enterprise/logo-tiles/open-ai-dark.svg', alt: 'open ai' },
]

const enterpriseLightDevToolsMobile = [
    { src: '/enterprise/logo-tiles/azure-light.svg', alt: 'microsoft azure' },
    { src: '/enterprise/logo-tiles/anthropic-light.svg', alt: 'ai' },
    { src: '/enterprise/logo-tiles/bedrock-light.svg', alt: 'amazon bedrock' },
    { src: '/enterprise/logo-tiles/openai-light.svg', alt: 'open ai' },
]

const enterpriseLightDevTools = [
    { src: '/enterprise/logo-tiles/anthropic-light.svg', alt: 'ai' },
    { src: '/enterprise/logo-tiles/openai-light.svg', alt: 'open ai' },
    { src: '/enterprise/logo-tiles/bedrock-light.svg', alt: 'amazon bedrock' },
    { src: '/enterprise/logo-tiles/ollama-light.svg', alt: 'ollama' },
    { src: '/enterprise/logo-tiles/anthropic-light.svg', alt: 'ai cut' },
]
export const ChooseYourLlmSection: FunctionComponent<ChooseYourLlmSectionProps> = ({
    article,
    reverseQuote,
    className,
    authorCardClassName,
    modelCardClassName,
    modelDescriptionClassName,
    modelCardContent,
    parentClassName,
    isLight = false,
}) => {
    const windowWidth = useWindowWidth()
    const isMobile = windowWidth < breakpoints.md
    const enterpriseDevTools = !reverseQuote || isLight ? enterpriseLightDevTools : enterpriseDarkDevTools
    const enterpriseDevToolsMobile =
        !reverseQuote || isLight ? enterpriseLightDevToolsMobile : enterpriseDarkDevToolsMobile

    return (
        <ContentSection
            className={classNames('grid max-w-[1280px] grid-cols-1 gap-6 py-8 md:grid-cols-2 md:!py-0', className)}
            parentClassName={classNames('md:px-[80px]', parentClassName)}
        >
            <div
                className={classNames(
                    'relative rounded-2xl border-1 border-gray-200 bg-violet-700 !py-16 px-6 text-white md:px-6 lg:px-20',
                    authorCardClassName ?? 'text-white',
                    reverseQuote && 'flex h-full flex-col-reverse items-start !py-0 md:h-auto md:min-h-[554px]'
                )}
            >
                <div className="flex w-full flex-col">
                    <div className={classNames(reverseQuote && 'w-full pt-[118px]')}>
                        <p className="mb-0 leading-6 tracking-[-0.25px] opacity-80">
                            {article?.author ?? 'Satish Surapaneni'}
                        </p>
                        <p className="mb-0 text-sm leading-[19.88px]">
                            {article?.role ?? 'Senior Engineering Manager, F5'}
                        </p>
                    </div>
                    {reverseQuote && (
                        <ReadCaseStudyLink
                            parentClassName="flex whitespace-nowrap px-10 md:self-end md:px-0"
                            linkClassName="btn btn-link-dark btn-link-icon p-0"
                            href="https://sourcegraph.com/case-studies/cody-leidos-maximizing-efficiency-heightened-security-ai-race"
                        />
                    )}
                </div>
                <p
                    className={classNames('mb-0 pt-6 text-[35px] font-normal leading-[43.75px] md:max-w-[468px]', {
                        '-tracking-[0.25px]': reverseQuote,
                        '-tracking-[2px]': !reverseQuote,
                    })}
                >
                    {article?.quote ??
                        `“Before Sourcegraph, each of our teams was siloed. Developers could understand their own codebase,
                    but it was difficult for them to see and understand other team members’ code.“`}
                </p>
                {!reverseQuote && (
                    <ReadCaseStudyLink
                        parentClassName="flex justify-end whitespace-nowrap pt-4 px-10 md:self-end md:px-0"
                        linkClassName="btn btn-link-dark btn-link-icon p-0"
                        href=" https://sourcegraph.com/case-studies/f5-streamlines-collaboration-globally"
                    />
                )}
            </div>
            <div
                className={classNames(
                    'relative flex flex-col overflow-hidden rounded-2xl border-1 border-gray-200 pt-[71px] md:py-[71px] md:pb-10',
                    reverseQuote ? 'md:min-h-[554px]' : 'sm:min-h-[558px] md:min-h-[700px]',
                    modelCardClassName
                )}
            >
                <div className="flex flex-col gap-6 px-10 md:gap-4">
                    {!reverseQuote && <h6>cody</h6>}
                    <h2>{modelCardContent?.title ?? 'Choose from your favorite Large Language Models'}</h2>
                    <p
                        className={classNames(
                            'mb-0 font-normal -tracking-[0.25px]',
                            modelDescriptionClassName ?? 'text-[18px] leading-[27px]'
                        )}
                    >
                        {modelCardContent?.description ??
                            'Cody, Sourcegraph’s AI coding assistant, lets you choose from multiple LLM options including Anthropic Claude 3.5 and OpenAI GPT-4o. You can even bring your own LLM key with Amazon Bedrock and Azure OpenAI.'}
                    </p>
                </div>
                {!isMobile ? (
                    <div className="absolute bottom-6 -right-[100px] flex  gap-[21px] md:bottom-[59.45px] md:w-[731px]">
                        {enterpriseDevTools.map(({ src, alt }) => (
                            <EnterpriseIcon
                                className="flex items-center justify-center"
                                key={alt}
                                src={src}
                                alt={alt}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="relative  left-10 flex gap-[21px]  py-6 md:bottom-[71px] md:w-[731px]">
                        {enterpriseDevToolsMobile.map(({ src, alt }) => (
                            <EnterpriseIcon
                                className="flex items-center justify-center"
                                key={alt}
                                src={src}
                                alt={alt}
                            />
                        ))}
                    </div>
                )}
            </div>
        </ContentSection>
    )
}
