import { FunctionComponent } from 'react'

import { ContentSection } from '../ContentSection'
import { Heading } from '../Heading'

export const ImprovedVelocitySection: FunctionComponent = () => (
    <ContentSection
        className="relative z-10 grid max-w-[1232px] grid-cols-1 gap-6 md:grid-cols-2"
        parentClassName="!md:px-[80px] !py-0"
    >
        <div className="flex h-[533px] flex-col justify-between px-0 py-16 md:px-10">
            <div className="flex flex-col gap-4">
                <Heading size="h2" className="!tracking-[-1px] text-black">
                    Improve velocity with faster code discovery and understanding
                </Heading>
                <p className="mb-0 text-lg leading-[27px] tracking-[-0.25px]">
                    Developers can find, navigate, and share code across entire codebases in seconds, increasing
                    development velocity and reducing time spent searching for answers.
                </p>
            </div>
            <div className="flex justify-center">
                <img src="/enterprise/cody-search.svg" alt="Cody and Code Search Product logo" />
            </div>
        </div>
        <div className="h-auto rounded-2xl border-1 border-gray-200 bg-white px-6 py-16  md:max-w-[574px] md:px-20">
            <p className="mb-0 leading-6 tracking-[-0.25px] text-gray-700">Satish Surapaneni</p>
            <p className="mb-0 text-sm leading-[19.88px]">Senior Engineering Manager, F5</p>
            <p className="mb-0 pt-3 text-[35px] font-normal leading-[43.75px] -tracking-[2px]">
                "We are developing software faster than ever, with aggressive schedules, and across boundaries. Things
                that used to be worked out in a closed room now need to be done while teams are spread out across the
                globe.”
            </p>
        </div>
    </ContentSection>
)
