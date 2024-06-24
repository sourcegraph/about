import { FunctionComponent, cloneElement } from 'react'

import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import Link from 'next/link'

import { CodyFeatureCard } from '../CodyFeatureCard'
import { ContentSection } from '../ContentSection'

import { CodeSmells, ExplainCode, SummarizeCode, UnitTest } from './cody-illustrations'

const codebaseAwareIntelligenceFeatures = [
    {
        animation: <ExplainCode />,
        heading: 'Code explanation',
        description: 'Cody can explain what code is doing at a high level or in detail in conversational language.',
    },
    {
        animation: <UnitTest />,
        heading: 'Unit tests',
        description:
            'Cody writes unit tests for you with a single click, saving you time so you can stay focused on shipping software.',
    },
    {
        animation: <CodeSmells />,
        heading: 'Code smells',
        description:
            'Cody can act as a pair programmer and analyze code blocks for code smells, such as unhandled edge cases, unsafe patterns, or unclear variables names, with suggestions to fix those issues.',
    },
    {
        animation: <SummarizeCode />,
        heading: 'Summaries of recent code change',
        description:
            'Cody is able to reference diffs to tell you about recent changes to your code, generating a summary of changes.',
    },
]

export const CodebaseAwareIntelligence: FunctionComponent = () => (
    <>
        <ContentSection
            parentClassName="!pb-0 !pt-16 md:!pt-[112px]"
            className="mx-auto flex flex-col items-center gap-y-8 gap-x-[83px] text-center md:!mt-2 md:flex-row md:items-start"
        >
            <div className="border-t border-gray-500 pt-12 text-left">
                <h2 className="!text-[36px] text-white">
                    Codebase-aware <b>chat and commands</b>
                </h2>
                <p className="my-[30px] max-w-[572px] text-lg text-gray-200">
                    Ask Cody questions in the chat view or run pre-built commands for common actions. Cody will use
                    Sourcegraph’s code graph to answer using knowledge of your codebase.
                </p>
                <p className="my-[30px] max-w-[572px] text-lg text-gray-200">
                    We’re experimenting with several methods of context retrieval to improve Cody’s accuracy, including
                    embeddings, keyword search, and hybrid search.
                </p>
                <Link
                    href="https://about.sourcegraph.com/whitepaper/cody-context-architecture.pdf"
                    className="inline-flex items-center whitespace-nowrap font-semibold text-white"
                    title="Read about Cody's context-aware architecture"
                >
                    Read about Cody's context-aware architecture <ChevronRightIcon className="ml-[3px]" />
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
                        src="https://storage.googleapis.com/sourcegraph-assets/cody/website_august2023/Context_Chat.mp4"
                        data-cookieconsent="ignore"
                    />
                </video>
            </div>
        </ContentSection>
        <ContentSection parentClassName="!py-0" className="mt-16 md:mt-[128px]">
            <div className="grid grid-cols-1 justify-between gap-x-6 gap-y-6 sm:grid-cols-2 md:grid-cols-2 md:gap-y-9">
                {codebaseAwareIntelligenceFeatures.slice(0, 4).map(({ description, heading, animation }, index) => {
                    // Delay answer animation, creating a cascade effect
                    const AnimationWithDelay = animation
                        ? cloneElement(animation, { answerDelay: index * 2.2 })
                        : animation

                    return (
                        <CodyFeatureCard
                            key={heading}
                            description={description}
                            subHeading={heading}
                            animation={AnimationWithDelay}
                            descriptionClassName="text-sm"
                            className="!max-w-full"
                        />
                    )
                })}
            </div>

            <div className="mt-8 grid grid-cols-1 justify-center gap-x-6 gap-y-6 sm:grid-cols-2 md:grid-cols-3 md:gap-y-9">
                {codebaseAwareIntelligenceFeatures.slice(4, 8).map(({ description, heading }) => (
                    <CodyFeatureCard key={heading} description={description} subHeading={heading} />
                ))}
            </div>
        </ContentSection>
    </>
)
