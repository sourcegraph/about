import React, { FunctionComponent } from 'react'

import { ChooseYourLlmSection } from '../../Enterprise/ChooseYourLlmSection'

interface CodyChooseLlmDualThemeProps {
    isLight?: boolean
}

export const CodyChooseLlmDualTheme: FunctionComponent<CodyChooseLlmDualThemeProps> = ({ isLight = false }) => {
    const article = {
        quote: "“Generative AI is a fast-moving field, and the best model that's out there today may not be the best model tomorrow…using Cody means we can avoid that LLM lock-in.”",
        author: 'Rob Linger',
        role: 'AI Software Architect, Leidos',
    }

    const modelCardContent = {
        title: 'Choose from your favorite LLMs',
        description:
            'Cody supports the latest LLMs including Claude 3.5, GPT-4o, Gemini 1.5, and Mixtral-8x7B. You can also bring your own LLM key with Amazon Bedrock and Azure OpenAI.',
    }
    return (
        <>
            {isLight ? (
                <ChooseYourLlmSection />
            ) : (
                <ChooseYourLlmSection
                    article={article}
                    reverseQuote={true}
                    className="!mx-6 mt-16 h-auto overflow-hidden md:!min-h-[554px] lg:!mx-auto"
                    authorCardClassName="!text-[#0F111A] !bg-white"
                    modelCardClassName="text-white bg-violet-700 !border-1 !border-[#343A4D]"
                    modelCardContent={modelCardContent}
                    parentClassName="!p-0"
                />
            )}
        </>
    )
}
