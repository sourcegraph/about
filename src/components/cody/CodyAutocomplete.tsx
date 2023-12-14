import { FunctionComponent } from 'react'

import { CodyAnimation, ContentSection, Heading } from '..'

export const CodyAutocomplete: FunctionComponent<{ className?: string }> = ({ className }) => (
    <ContentSection parentClassName="!py-0 !px-0" className='relative mx-auto mt-12 w-full md:mt-24'>
        <div className='relative z-[10] mx-auto mb-16 w-full text-6xl text-white md:mb-[-96px] md:w-[816px]'>
            <CodyAnimation className={className} />
        </div>
        <ContentSection
            parentClassName="!py-0 !px-0"
            className="relative mx-auto mt-16 flex w-full flex-col gap-[15px] overflow-hidden border-y border-gray-200 border-opacity-50 bg-violet-700 py-16 px-0 md:mt-0 md:flex-row md:rounded-lg md:border md:pt-[150px] md:pb-[47px] md:pl-[62px] xl:max-w-[1280px]"
        >
            <div className="mb-[24px] flex w-full flex-col px-6 md:my-[66px] md:mb-0 md:w-[543px]">
                <img className="h-[46px] w-[46px]" src="/cody/completions-brand-icon.svg" alt="Cody Icon" />
                <Heading
                    size="h2"
                    className="pt-4 text-left !text-5xl font-semibold leading-10 tracking-[-1px] text-white"
                >
                    Code faster with AI-assisted autocomplete
                </Heading>
                <h3 className="max-w-[510px] pt-4 pb-5 text-left text-2xl leading-[30px] tracking-[-0.25px] text-gray-200">
                    Cody autocompletes single lines, or whole <br />
                    functions, in any programming language, <br />
                    configuration file, or documentation.
                </h3>
                <div className="flex w-full items-center justify-center rounded-lg bg-gray-50 p-6 md:w-[459px]">
                    <h5 className="font-[590px] mb-0 w-full text-center text-xl font-semibold leading-[25px] tracking-[-0.25px] text-gray-500 md:w-[313px]">
                        Every day, Cody helps developers write &gt; 90,000 lines of code
                    </h5>
                </div>
            </div>
            <div className="relative w-[670px] overflow-hidden">
                <img
                    className="relative top-4 -right-4 w-[670px]"
                    src="/cody/single-line-autocomplete.svg"
                    alt="Cody auto complete"
                />
            </div>
        </ContentSection>
    </ContentSection>
)
