import { FunctionComponent, cloneElement } from 'react'

import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import Link from 'next/link'

import { CodyFeatureCard } from '../CodyFeatureCard'
import { ContentSection } from '../ContentSection'
import { Heading } from '../Heading'

import { CodeSmells, DebuggingAssistance, ExplainCode, SummarizeCode } from './cody-illustrations'

const codebaseAwareIntelligenceFeatures = [
    {
        animation: <ExplainCode />,
        heading: 'Code explanation',
        description:
            'Cody can explain what code is doing—at a high level or in detail. Highlight any code block or an entire file and Cody will explain what’s happening in conversational language.',
    },
    {
        animation: <CodeSmells />,
        heading: 'Code smells',
        description:
            'Cody can act as a pair programmer and analyze code blocks for code smells, potential bugs, and unhandled errors. Cody will point out issues in selected code such as magic numbers, unhandled edge cases, or unclear variables names, with suggestions to fix those issues.',
    },
    {
        animation: <SummarizeCode />,
        heading: 'Summarize recent code changes',
        description:
            'Cody is able to reference recent diffs to tell you about recent changes to your code. Cody can generate summaries of changes to an entire repository over the last day or week or summarize the changes specific to a selected file.',
    },
    {
        animation: <DebuggingAssistance />,
        heading: 'Debugging assistance',
        description:
            'Cody can help you debug and improve your code. Pass in a code snippet to the Cody chat and request a specific fix—such as handing for a new edge case—and Cody will provide a rewritten code suggestion.',
    },
    {
        heading: 'Translate language',
        description:
            'Cody translates selected between programming languages. You can feed code snippets to Cody—for example, a certain function—and Cody can translate that code, providing you with a code snippet of another language with the same functionality.',
    },
    {
        heading: 'Code navigation',
        description:
            'Cody can help you find functions & components from around your codebase. Ask Cody where a certain component is defined—such as a webapp navbar, or an API schema—and Cody will point you to the file where it lives.',
    },
    {
        heading: 'Reference tracking',
        description:
            'Cody knows where all your functions are referenced throughout your code. Ask Cody to find where a specific function is referenced and it will give you the main files where it’s referenced.',
    },
]

export const CodebaseAwareIntelligence: FunctionComponent = () => (
    <>
        <ContentSection
            parentClassName="!pb-0 !pt-16 md:!pt-[112px]"
            className="mx-auto flex flex-col items-center gap-y-8 gap-x-[83px] text-center md:!mt-2 md:flex-row md:items-start"
        >
            <div className="border-t border-gray-500 pt-12 text-left">
                <Heading size="h2" className="!text-[36px] text-white">
                    Codebase-aware intelligence
                </Heading>
                <p className="my-[30px] max-w-[572px] text-lg text-gray-200">
                    Answer questions about both general programming topics and your specific codebase from right inside
                    your editor. Cody knows about your local code and can learn from the code graph and documentation
                    inside your organization to do just that.
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
                        src="https://storage.googleapis.com/sourcegraph-assets/cody/website_june2023/cody_explain_June23.mp4"
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
