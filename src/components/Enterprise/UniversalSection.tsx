import { FunctionComponent } from 'react'

import { ContentSection, Heading } from '..'

import { DevPlatformsSection } from './DevPlatformsSection'

export const UniversalSection: FunctionComponent = () => (
    <ContentSection
        className="flex max-w-[1232px] flex-col justify-between overflow-hidden  rounded-2xl  border-1 border-gray-200 bg-white px-6 md:flex-row md:px-16"
        parentClassName="md:px-[80px] !py-0"
    >
        <div className="flex flex-col justify-center pt-16 !pb-12 md:w-[492px] md:py-16">
            <img alt="language models brand" className="mb-6 w-12" src="/enterprise/language-models-brand-icon.svg" />
            <Heading size="h1" className="mb-4">
                Universal
            </Heading>
            <p className="mb-0 text-[24px] leading-[30px] -tracking-[0.25px]">
                You don't have to compromise. Sourcegraph works with all major code hosts and many of the most popular
                IDEs.
            </p>
        </div>
        <DevPlatformsSection />
    </ContentSection>
)
