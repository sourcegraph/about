import { FunctionComponent } from 'react'

import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import Link from 'next/link'

import { CodyFeatureCard } from '../CodyFeatureCard'
import { ContentSection } from '../ContentSection'
import { Heading } from '../Heading'

import { CodeCompletions } from './cody-illustrations'

const aiGeneratedCodeFeatures = [
    {
        animation: <CodeCompletions />,
        heading: 'Autocomplete',
        description:
            'Cody autocompletes single lines, or whole functions, in any programming language, configuration file, or documentation.',
    },
    // {
    //     animation: <DebuggingAssistance />,
    //     heading: 'Debugging',
    //     description:
    //         'Cody helps debug errors and suggest solutions to fix code.',
    // },
]

export const AiGeneratedCode: FunctionComponent = () => (
    <>
        <ContentSection
            parentClassName="!py-0"
            className="mx-auto mt-16 flex flex-col items-center gap-y-8 gap-x-[83px] text-center md:!mt-[176px] md:!mb-[128px] md:flex-row md:items-start"
        >
            <div className="border-t border-gray-500 pt-12 text-left">
                <Heading size="h2" className="!text-[36px] text-white">
                    Code faster with AI-assisted <b>autocomplete</b>
                </Heading>
                <p className="mt-[30px] max-w-[572px] text-lg text-gray-200">
                    Cody suggests completions as you type using context from your code. It’s powered by the latest instant LLM models for accuracy and performance.
                </p>
                <p className="mt-[30px] max-w-[572px] text-lg text-gray-200">
                    Autocomplete supports any programming language because it uses LLMs trained on broad data, and it 
                    works great with Python, Go, JavaScript, and TypeScript code.
                </p>
                <Link
                    href="https://docs.sourcegraph.com/cody"
                    className="inline-flex items-center whitespace-nowrap font-semibold text-white"
                    title="See the Cody docs"
                >
                    See the Cody docs <ChevronRightIcon className="ml-[3px]" />
                </Link>
            </div>

            <div className="h-fit max-w-[625px] overflow-hidden rounded-lg bg-violet-750 drop-shadow-xl md:w-[50%] md:min-w-[450px]">
                <video
                    className="sg-video-border-gradient w-full rounded-lg"
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    playsInline={true}
                    controls={true}
                    data-cookieconsent="ignore"
                >
                    <source
                        type="video/mp4"
                        src="https://storage.googleapis.com/sourcegraph-assets/cody/website_august2023/autocomplete_inline.mp4"
                        data-cookieconsent="ignore"
                    />
                </video>
            </div>
        </ContentSection>
        <ContentSection parentClassName="!py-0" className="mt-16">
            <div className="flex justify-center">
                {aiGeneratedCodeFeatures.slice(0, 2).map(({ description, heading, animation }) => (
                    <CodyFeatureCard
                        key={heading}
                        description={description}
                        subHeading={heading}
                        animation={animation}
                        descriptionClassName="text-sm"
                        className="!max-w-2xl"
                    />
                ))}
            </div>

            <div className="mt-8 grid grid-cols-1 justify-center gap-x-6 gap-y-6 sm:grid-cols-2 md:grid-cols-3 md:gap-y-9">
                {aiGeneratedCodeFeatures.slice(2, 5).map(({ description, heading }) => (
                    <CodyFeatureCard
                        key={heading}
                        description={description}
                        subHeading={heading}
                        descriptionClassName="text-sm"
                    />
                ))}
            </div>
        </ContentSection>
    </>
)
