import { FunctionComponent } from 'react'

import { ContentSection } from '..'

import { DevPlatformsSection } from './DevPlatformsSection'

export const UniversalSection: FunctionComponent = () => (
    <ContentSection
        className="flex max-w-[1232px] flex-col gap-6 overflow-hidden  rounded-2xl  border-1 border-gray-200 bg-white px-6 md:flex-row md:px-16"
        parentClassName="md:px-[80px] !py-0"
    >
        <div className="flex flex-col justify-center pt-16 !pb-12 md:w-[492px] md:py-16">
            <img alt="language models brand" className="mb-6 w-[32px]" src="/enterprise/language-models-brand-icon.svg" />
            <h2 className="mb-4">Universal</h2>
            <h5 className="mb-0">
                You don't have to compromise. Sourcegraph works with all major code hosts and many of the most popular
                IDEs.
            </h5>
        </div>
        <DevPlatformsSection />
    </ContentSection>
)
