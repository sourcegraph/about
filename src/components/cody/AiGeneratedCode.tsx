import { FunctionComponent } from 'react'

import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import Link from 'next/link'

import { CodyFeatureCard } from '../CodyFeatureCard'
import { ContentSection } from '../ContentSection'
import { Heading } from '../Heading'

import { CodeCompletions, DebuggingAssistance, UnitTest } from './cody-illustrations'

const aiGeneratedCodeFeatures = [
    {
        animation: <CodeCompletions />,
        heading: 'Autocomplete',
        description:
            'Cody autocompletes single lines, or whole functions, in any programming language, configuration file, or documentation. It’s powered by the latest instant LLM models for accuracy and performance.',
    },
    {
        animation: <DebuggingAssistance />,
        heading: 'Debugging',
        description:
            'Cody writes unit tests for you, saving you time and letting you stay focused on building software. Highlight a code block and trigger the Generate a unit test recipe; Cody will write a unit test ready to be pasted into your code.',
    },
]

export const AiGeneratedCode: FunctionComponent = () => (
    <>
        <ContentSection
            parentClassName="!py-0"
            className="mx-auto mt-16 flex flex-col items-center gap-y-8 gap-x-[83px] text-center md:!mt-[176px] md:!mb-[128px] md:flex-row md:items-start"
        >
            <div className="border-t border-gray-500 pt-12 text-left">
                <Heading size="h2" className="!text-[36px] text-white">
                    Code faster with AI-assisted autocomplete
                </Heading>
                <p className="mt-[30px] max-w-[572px] text-lg text-gray-200">
                    Cody makes single-line and multi-line suggestions as you type. Every day, Cody helps developers write {'>'}25,000 lines of code.
                </p>
                <p className="mt-[30px] max-w-[572px] text-lg text-gray-200">
                Cody supports any programming language because it uses LLMs trained on broad data, and it 
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
            <div className="grid grid-cols-1 justify-between gap-x-6 gap-y-6 sm:grid-cols-2 md:grid-cols-2 md:gap-y-9">
                {aiGeneratedCodeFeatures.slice(0, 2).map(({ description, heading, animation }) => (
                    <CodyFeatureCard
                        key={heading}
                        description={description}
                        subHeading={heading}
                        animation={animation}
                        descriptionClassName="text-sm"
                        className="!max-w-full"
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
