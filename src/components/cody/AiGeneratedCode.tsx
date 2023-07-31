import { FunctionComponent } from 'react'

import { CodyFeatureCard } from '../CodyFeatureCard'
import { ContentSection } from '../ContentSection'
import { Heading } from '../Heading'

import { CodeCompletions, UnitTest } from './cody-illustrations'

const aiGeneratedCodeFeatures = [
    {
        animation: <UnitTest />,
        heading: 'Unit tests',
        description:
            'Cody writes unit tests for you, saving you time and letting you stay focused on building software. Highlight a code block and trigger the Generate a unit test recipe; Cody will write a unit test ready to be pasted into your code.',
    },
    {
        animation: <CodeCompletions />,
        heading: 'Code completions',
        description:
            'Cody can suggest code while you code. Start writing code and Cody will suggest the next few lines for you. Choose to accept it, or open the command palette and click Cody: View Suggestions to see various code snippets Cody suggests using.',
    },
    {
        heading: 'Inline code fixes',
        description:
            'Cody edits and improves code directly using inline instructions. Simply type what you want Cody to do above or below a block of Cody and hit the Fixup hotkey; Cody will directly edit that code within your editor, saving you the need to copy and paste code from the chat.',
    },
    {
        heading: 'Documentation generation',
        description:
            'Cody can read and understand your code, which means it can also write documentation for you. Highlight a snippet of code—for example, a function or class—and Cody can generate a docstring for it.',
    },
    {
        heading: 'Code generation',
        description:
            'Cody generates new code on request via the chat. You can ask Cody to write boilerplate code, API calls, or even specific code based on your instruction and requirements.',
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
                    AI-generated code
                </Heading>
                <p className="mt-[30px] max-w-[572px] text-lg text-gray-200">
                    Cody uses knowledge of your codebase to write and fix code. Generate everything from boilerplate
                    code to API resolvers that rely on the context and style of your codebase. You can even ask Cody to
                    fix code blocks for errors, readability, or unhandled edge cases, and Cody will make changes
                    directly in your working file.
                </p>
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
                        src="https://storage.googleapis.com/sourcegraph-assets/cody/website_june2023/cody_inline_June23.mp4"
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
