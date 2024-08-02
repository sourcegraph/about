import { FunctionComponent } from 'react'

import Link from 'next/link'

import { ContentSection } from '..'

import { DevPlatformsSection } from './DevPlatformsSection'

export const UniversalSection: FunctionComponent = () => (
    <ContentSection
        className="flex flex-col justify-between overflow-hidden rounded-2xl border-1 border-gray-200 bg-white py-16 px-6 md:flex-row md:py-0 md:px-16"
        parentClassName="md:px-20 !py-0"
    >
        <div className="mb-[57px] flex flex-col justify-center md:mb-0 md:max-w-[560px] md:py-[120px]">
            <h2 className="mb-4">Works with your existing code hosts and IDEs</h2>
            <p className="mb-0 text-xl leading-[26px] -tracking-[0.25px] text-gray-500">
                Cody lives in VS Code and JetBrains IDEs and works with code from any code host.
            </p>
            <p className="mt-4 text-xl leading-[26px] -tracking-[0.25px]  text-gray-500">
                <Link
                    className="!px-0 !py-0  leading-[22px] text-violet-500 underline underline-offset-4"
                    href="/enterprise"
                >
                    Cody Enterprise
                </Link>{' '}
                integrates with all your code hosts for expanded codebase context and personalization.
            </p>
        </div>
        <DevPlatformsSection />
    </ContentSection>
)
