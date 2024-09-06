import { FunctionComponent } from 'react'

import classNames from 'classnames'
import Link from 'next/link'

import { ContentSection } from '..'
import { breakpoints } from '../../data/breakpoints'
import { useWindowWidth } from '../../hooks/windowWidth'

import { EnterpriseIcon } from './EnterpriseIcon'

interface ChooseYourLlmSectionProps {
    article?: { quote: string; author: string; role: string }
    reverseQuote?: boolean
    className?: string
    authorCardClassName?: string
    modelCardClassName?: string
    modelCardContent?: { title: string; description: string }
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
    { src: '/assets/enterprise/logo-tiles/azure-light.svg', alt: 'microsoft azure' },
    { src: '/enterprise/logo-tiles/anthropic-light.svg', alt: 'ai' },
    { src: '/enterprise/logo-tiles/bedrock-light.svg', alt: 'amazon bedrock' },
    { src: '/enterprise/logo-tiles/openai-light.svg', alt: 'open ai' },
]

const enterpriseLightDevTools = [
    { src: '/enterprise/logo-tiles/anthropic-light.svg', alt: 'ai' },
    { src: '/enterprise/logo-tiles/openai-light.svg', alt: 'open ai' },
    { src: '/enterprise/logo-tiles/ollama-light.svg', alt: 'ollama' },
    { src: '/assets/enterprise/logo-tiles/azure-light.svg', alt: 'microsoft azure' },
    { src: '/assets/enterprise/logo-tiles/blank-tile.svg', alt: 'blank tile' },
    { src: '/enterprise/logo-tiles/bedrock-light.svg', alt: 'amazon bedrock' },
    { src: '/assets/enterprise/logo-tiles/google-gemini.svg', alt: 'google gemini' },
    { src: '/assets/enterprise/logo-tiles/hugging-face.svg', alt: 'hugging face' },
    { src: '/assets/enterprise/logo-tiles/meta.svg', alt: 'meta' },
]
export const ChooseYourLlmSection: FunctionComponent<ChooseYourLlmSectionProps> = ({
    article,
    reverseQuote,
    className,
    authorCardClassName,
    modelCardClassName,
    modelCardContent,
    parentClassName,
    isLight = true,
}) => {
    const windowWidth = useWindowWidth()
    const isMobile = windowWidth < breakpoints.md
    const enterpriseDevTools = !reverseQuote || isLight ? enterpriseLightDevTools : enterpriseDarkDevTools
    const enterpriseDevToolsMobile =
        !reverseQuote || isLight ? enterpriseLightDevToolsMobile : enterpriseDarkDevToolsMobile
    const sliceOneUpperLimit = isMobile ? 4 : 5
    const sliceTwoLowerLimit = isMobile ? 5 : 4
    return (
        <ContentSection
            className={classNames('grid grid-cols-1 gap-6 py-8 md:grid-cols-2 md:!py-0', className)}
            parentClassName={classNames('md:px-20', parentClassName)}
        >
            <div
                className={classNames('flex w-full flex-col md:ml-[29px]', {
                    'max-w-[570px]': !isLight,
                    'max-w-auto': isLight,
                })}
            >
                <h2
                    className={classNames('mb-1', {
                        'text-white': !isLight,
                        'text-[#0F111A]': isLight,
                    })}
                >
                    Sourcegraph powered{' '}
                    <span className={classNames({ 'cody-heading bg-clip-text text-transparent': !isLight })}>
                        context
                    </span>
                </h2>

                <p
                    className={classNames(
                        'mb-0 mt-[12px] text-2xl font-normal leading-[30px] tracking-[-0.25px] md:max-w-[501px]',
                        {
                            'text-[rgba(255,255,255,0.80)]': !isLight,
                            'hidden text-[#343A4D] md:block': isLight,
                        }
                    )}
                >
                    Cody uses your context of your codebase plus context of docs, tickets, and issues using{' '}
                    <Link
                        href="https://openctx.org/"
                        className={classNames('underline', {
                            'text-[rgba(255,255,255,0.80)] underline-offset-[2px]': !isLight,
                            'text-[#343A4D] !decoration-[#343A4D] !underline-offset-[5px]': isLight,
                        })}
                    >
                        OpenCtx
                    </Link>{' '}
                    to write and edit code accurately.
                </p>
                <p
                    className={classNames({
                        hidden: !isLight,
                        'md:max-w-[501px]text-[#343A4D] mb-0 mt-[12px] text-2xl font-normal leading-[30px] tracking-[-0.25px] md:hidden':
                            isLight,
                    })}
                >
                    Cody uses your context of your codebase plus context of docs, tickets, and issues using{' '}
                    <Link
                        href="https://openctx.org/"
                        className={classNames('underline', {
                            'text-[rgba(255,255,255,0.80)] underline-offset-[2px]': !isLight,
                            'text-[#343A4D] !decoration-[#343A4D] !underline-offset-[5px]': isLight,
                        })}
                    >
                        OpenCtx
                    </Link>{' '}
                    to write and edit code accurately.
                </p>
                {isLight ? (
                    <div className="mt-[24px] md:mt-0">
                        <img
                            src="assets/cody/new_context_illustration.svg"
                            className="mt-6 hidden md:flex md:max-w-full"
                            alt="cody context illustration"
                        />
                        <img
                            src="assets/cody/source-power-mobile.svg"
                            alt="cody context illustration details"
                            className="h-full w-full md:hidden"
                        />
                    </div>
                ) : (
                    <img
                        src="assets/cody/new_context_illustration.svg"
                        alt="cody context illustration details"
                        className="h-full w-full md:hidden"
                    />
                )}
            </div>

            {/* <div
                className={classNames(
                    'grid-rows-auto relative grid !gap-6 rounded-2xl border-1 border-gray-200 bg-violet-700 !py-16 px-6 text-white md:px-20',
                    authorCardClassName ?? 'text-white',
                    reverseQuote && 'flex h-full flex-col-reverse items-start !py-0 md:h-auto md:min-h-[554px]'
                )}
            >
                <div>
                    <div className="flex h-min w-full flex-col">
                        <div className={classNames(reverseQuote && 'w-full pt-[118px]')}>
                            <p className="mb-0 leading-6 tracking-[-0.25px] text-white/80">
                                {article?.author ?? 'Rob Linger'}
                            </p>
                            <p className="mb-0 text-sm leading-[21px]">
                                {article?.role ?? 'AI Software Architect, Leidos'}
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
                        className={classNames('mt-6 h-min text-3xl font-normal leading-[39px] md:max-w-[468px]', {
                            '-tracking-[0.25px]': reverseQuote,
                            'tracking-tight': !reverseQuote,
                        })}
                    >
                        {article?.quote ??
                            "“Generative AI is a fast-moving field, and the best model that's out there today may not be the best model tomorrow…using Cody means we can avoid that LLM lock-in.”"}
                    </p>
                </div>

                {!reverseQuote && (
                    <ReadCaseStudyLink
                        parentClassName="whitespace-nowrap pt-4 md:pt-0 md:px-0 w-min place-self-end"
                        linkClassName="btn btn-link-dark btn-link-icon p-0"
                        href="/case-studies/cody-leidos-maximizing-efficiency-heightened-security-ai-race "
                    />
                )}
            </div> */}

            <div
                className={classNames(
                    'relative flex flex-col overflow-hidden rounded-2xl border-1 border-gray-200 py-10',
                    modelCardClassName
                )}
            >
                <div className="flex flex-col gap-6 px-6 md:gap-4 md:px-10">
                    <h2>{modelCardContent?.title ?? 'Choose from the latest-gen models'}</h2>
                    <div className="mb-9 text-xl leading-[26px] tracking-tight text-gray-500">
                        {modelCardContent?.description ?? (
                            <>
                                <p>
                                    Cody supports the most powerful LLMs including Claude 3.5, GPT-4o, Gemini 1.5, and
                                    Mixtral-8x7B.
                                </p>
                                <p>You can also bring your own LLM key with Amazon Bedrock and Azure OpenAI.</p>
                            </>
                        )}
                    </div>
                </div>
                <div className="">
                    <div className="mb-[24px] flex w-full justify-end pl-[27px]">
                        <div className="flex w-full translate-x-5 gap-6 md:translate-x-[68px] [@media(min-width:527px)]:w-min [@media(min-width:830px)]:w-full">
                            {enterpriseDevTools.slice(0, sliceOneUpperLimit).map(({ src, alt }) => (
                                <EnterpriseIcon
                                    className="flex max-h-[100px] min-h-[100px] min-w-[100px] max-w-[100px] items-center justify-center"
                                    key={alt}
                                    src={src}
                                    alt={alt}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="flex w-full justify-end pr-[26px] lg:!pr-0 [@media(min-width:527px)]:w-min [@media(min-width:527px)]:pr-[91px] [@media(min-width:830px)]:w-full">
                        <div className="flex flex-shrink-0 -translate-x-5 gap-6 overflow-hidden lg:relative lg:right-[91px] lg:w-min lg:translate-x-0">
                            {enterpriseDevTools
                                .slice(sliceTwoLowerLimit, enterpriseDevTools.length)
                                .map(({ src, alt }) => (
                                    <EnterpriseIcon
                                        className="flex max-h-[100px] min-h-[100px] min-w-[100px] max-w-[100px] items-center justify-center"
                                        key={alt}
                                        src={src}
                                        alt={alt}
                                    />
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </ContentSection>
    )
}
