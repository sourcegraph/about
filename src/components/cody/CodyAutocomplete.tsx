import { FunctionComponent } from 'react'

import { CodyAnimation, ContentSection, Heading } from '..'

export const CodyAutocomplete: FunctionComponent = () => (
    <ContentSection parentClassName="!py-0 !px-0" className="relative mx-auto mt-12 w-full">
        <div className="relative z-[10] mx-auto h-[369.022px] w-full text-6xl text-white md:w-[816px]">
            <CodyAnimation />
        </div>
        <ContentSection
            parentClassName="!py-0 !px-0"
            className="relative mx-auto mt-16 flex w-full flex-col gap-[15px] overflow-hidden border border-white border-opacity-20 bg-[#612590] py-16 px-0 md:-top-[88px] md:-mb-[32px] md:mt-0 md:flex-row md:rounded-lg md:pt-[120px] md:pb-[47px]  md:pl-[62px] xl:max-w-[1280px]"
        >
            <div className="flex w-full flex-col px-6 md:w-[543px]">
                <img className="h-[46px] w-[46px]" src="/cody/cody-icon.svg" alt="Cody Icon" />
                <Heading size="h2" className="pt-4 text-left !text-4xl text-white">
                    Code faster with AI-assisted autocomplete{' '}
                </Heading>
                <p className="pt-4 pb-5 text-left text-lg text-gray-200">
                    Cody autocompletes single lines, or whole functions, in any programming language, configuration
                    file, or documentation.
                </p>
                <div className="sg-bg-cody-everyday flex w-full items-center justify-center rounded-lg p-6 md:w-[459px]">
                    <p className="mb-0 w-full text-center text-xl font-semibold text-gray-200 md:w-[313px]">
                        Every day, Cody help developers write &gt; 25,000 lines of code
                    </p>
                </div>
                <Heading size="h5" className="pt-8 pb-4 text-left !text-xl text-gray-200">
                    Cody autocomplete is improving every day
                </Heading>
                <div className="text-left text-gray-200">
                    <p>
                        High-quality autocomplete must balance speed and accuracy. We’re actively experimenting with new
                        LLMs and context retrieval methods to build the best autocomplete experience.
                    </p>
                    <p className="mb-0">
                        Cody’s broad training data means it supports all programming languages, but it works especially
                        well for Python, Go, JavaScript, and TypeScript.
                    </p>
                </div>
            </div>
            <div className="relative w-full overflow-hidden md:w-[670px]">
                <img
                    className="relative top-4 -right-4 hidden  w-[670px] md:flex"
                    src="/cody/single-line-autocomplete.svg"
                    alt="Cody auto complete"
                />
                <img
                    className="relative top-4 w-full pl-6 md:hidden"
                    src="/cody/autocomplete-mobile.svg"
                    alt="Cody auto complete"
                />
            </div>
        </ContentSection>
    </ContentSection>
)
