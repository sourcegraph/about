import { FunctionComponent } from 'react'

import Link from 'next/link'

import { ContentSection, Heading } from '..'

export const SourcegraphPowered: FunctionComponent = () => (
    <ContentSection
        parentClassName="!p-0 !m-0"
        className="m-0 flex flex-col items-center gap-5 px-6 py-16 md:flex-row md:justify-between md:px-0 lg:py-28"
    >
        <div className="flex w-full max-w-[570px] flex-col md:ml-[29px]">
            <Heading size="h2" className="mb-1 text-[40px] font-normal leading-10 tracking-[-1px] text-white">
                Sourcegraph powered <span className="cody-heading bg-clip-text text-transparent">context</span>
            </Heading>

            <p className="mb-0 mt-[12px] text-2xl font-normal leading-[30px] tracking-[-0.25px] text-[rgba(255,255,255,0.80)] md:max-w-[501px]">
                Cody uses your code graph plus{' '}
                <Link href="/code-search" className="text-[rgba(255,255,255,0.80)] underline underline-offset-[2px]">
                    Code Search
                </Link>{' '}
                to autocomplete, explain, and edit your code with additional context.
            </p>
            <img
                src="/assets/cody/new_context_illustration.svg"
                className="mt-6 md:max-w-full"
                alt="cody context illustration"
            />
        </div>
        <div className="h-full md:mr-[29px] md:max-h-full md:min-h-[333px] md:w-full md:max-w-[614px]">
            <img
                src="/assets/cody/new_context_illustration_details.svg"
                alt="cody context illustration details"
                className="h-full w-full"
            />
        </div>
    </ContentSection>
)
