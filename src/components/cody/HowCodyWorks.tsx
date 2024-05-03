import { FunctionComponent } from 'react'

import { ContentSection, Heading } from '..'
import { DevPlatformsSection } from '../Enterprise/DevPlatformsSection'

export const HowCodyWorks: FunctionComponent = () => (
    <ContentSection
        parentClassName="!py-0 !px-0"
        className="flex h-auto max-w-[1280px] flex-col justify-between overflow-hidden border-y border-[#343A4D] bg-violet-700 px-6 px-0 md:my-24 md:h-[414px] md:flex-row md:justify-between md:gap-2 md:rounded-2xl md:border-1 md:pl-16 md:pr-[82.04px]"
    >
        <div className="w-full py-16 text-white md:h-full md:max-w-[541px]">
            <Heading size="h2" className="pb-4 !font-['Source_Sans_Pro'] !text-[40px] !leading-10 !-tracking-[1px]">
                Works with your existing code hosts and IDEs
            </Heading>
            <p className="!font-['SF_Pro'] text-2xl leading-[30px] -tracking-[0.25px] text-gray-200">
                Cody lives in VS Code and JetBrains IDEs and works with code from any code host.
            </p>
            <p className="!font-['SF_Pro'] text-2xl leading-[30px] -tracking-[0.25px] text-gray-200">
                Cody Enterprise integrates with all your code hosts for expanded codebase context and personalization.
            </p>
        </div>
        <DevPlatformsSection
            isLight={true}
            setOneClassName="bottom-[42px] gap-[25.05px]"
            setTwoClassName="gap-[25px] -top-[10px]"
            setThreeClassName="bottom-[42px] gap-[25.05px]"
        />
    </ContentSection>
)
