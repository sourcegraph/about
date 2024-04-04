import { FunctionComponent } from 'react'

import { ContentSection, Heading } from '..'
import { breakpoints } from '../../data/breakpoints'
import { useWindowWidth } from '../../hooks/windowWidth'

import { EnterpriseIcon } from './EnterpriseIcon'

const enterpriseDevTools = [
    { src: '/enterprise/ai.svg', alt: 'ai' },
    { src: '/enterprise/open-ai.svg', alt: 'open ai' },
    { src: '/enterprise/amazon-bedrock.svg', alt: 'amazon bedrock' },
    { src: '/enterprise/microsoft-azure.svg', alt: 'microsoft azure' },
    { src: '/enterprise/ai-cut.svg', alt: 'ai cut' },
]

const enterpriseDevToolsMobile = [
    { src: '/enterprise/microsoft-azure.svg', alt: 'microsoft azure' },
    { src: '/enterprise/ai.svg', alt: 'ai' },
    { src: '/enterprise/amazon-bedrock.svg', alt: 'amazon bedrock' },
    { src: '/enterprise/open-ai.svg', alt: 'open ai' },
]

export const ChooseYourLlmSection: FunctionComponent = () => {
    const windowWidth = useWindowWidth()
    const isMobile = windowWidth < breakpoints.md

    return (
        <ContentSection
            className="grid max-w-[1232px] grid-cols-1 gap-6 py-8 md:grid-cols-2 md:py-0"
            parentClassName="md:px-[80px]"
        >
            <div className="rounded-2xl border-1 border-gray-200 bg-violet-700 !py-16 px-6 text-white md:px-20">
                <p className="mb-0 leading-6 tracking-[-0.25px] text-white opacity-80">Satish Surapaneni</p>
                <p className="mb-0 text-sm leading-[19.88px] text-white">Senior Engineering Manager, F5</p>
                <p className="mb-0 pt-6 text-[35px] font-normal leading-[43.75px] -tracking-[2px] md:max-w-[468px]">
                    “Before Sourcegraph, each of our teams was siloed. Developers could understand their own codebase,
                    but it was difficult for them to see and understand other team members’ code.“
                </p>
            </div>
            <div className="relative flex flex-col overflow-hidden rounded-2xl border-1 border-gray-200 pt-[71px] sm:min-h-[558px]  md:min-h-[700px] md:py-[71px] md:pb-10">
                <div className="flex flex-col gap-6 px-10 md:gap-4">
                    <Heading size="h6">cody</Heading>
                    <Heading size="h2" className="!leading-10 !tracking-[-1px]">
                        Choose from your favorite Large Language Models
                    </Heading>
                    <p className="mb-0 text-[18px] font-normal leading-[27px] -tracking-[0.25px]">
                        Cody, Sourcegraph’s AI coding assistant, lets you choose from multiple LLM options including
                        Anthropic Claude 2 and OpenAI GPT-4. You can even bring your own LLM key with Amazon Bedrock and
                        Azure OpenAI.
                    </p>
                </div>
                {!isMobile ? (
                    <div className="absolute bottom-6 -right-[100px] flex  gap-[21px] md:bottom-[71px] md:w-[731px]">
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
