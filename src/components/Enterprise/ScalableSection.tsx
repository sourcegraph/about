import { FunctionComponent } from 'react'

import { ContentSection, Heading } from '..'

export const ScalableSection: FunctionComponent = () => (
    <ContentSection
        className="flex max-w-[1232px] flex-col justify-between overflow-hidden rounded-2xl border-1 border-gray-200 bg-white py-10  px-6 md:flex-row md:pr-10 md:pl-16"
        parentClassName="md:px-[80px] md:!py-16 py-8"
    >
        <div className="flex max-w-[532px] flex-col justify-center">
            <img src="/enterprise/code-graph-brand-icon.svg" alt="" className="mb-6 w-[48px]" />
            <Heading size="h2" className="mb-4 !text-[52px] !leading-[62px] !tracking-[-1px]">
                Scalable
            </Heading>
            <Heading size="h3" className="mb-6 font-normal !leading-[30px] !-tracking-[0.25px] md:mb-0">
                Leverage AI at any scale. Sourcegraph supports the world's largest codebases.
            </Heading>
        </div>
        <div className="sg-scalable relative z-10 max-w-[477px]">
            <div className=" relative flex  flex-col gap-16 rounded-2xl border-1 border-gray-200 bg-white py-10 pl-10 pr-[89px]">
                <Heading size="h3" className="!leading-[30px] !-tracking-[0.25px]">
                    Customers run single-tenant Sourcegraph instances for codebases of epic size:
                </Heading>
                <div>
                    <p className="mb-0 font-sans text-[40px] font-semibold leading-[93.75px] -tracking-[0.25px] sm:text-[75px]">
                        8+
                    </p>
                    <Heading size="h3" className="!leading-[30px] !tracking-[-0.25px]">
                        Terabytes of code at finance industry customer
                    </Heading>
                </div>
                <div>
                    <p className="mb-0 font-sans text-[40px] font-semibold leading-[93.75px] -tracking-[0.25px] sm:text-[75px]">
                        600,000+
                    </p>
                    <Heading size="h3" className="!leading-[30px] !tracking-[-0.25px]">
                        Repositories at finance industry customer
                    </Heading>
                </div>
            </div>
        </div>
    </ContentSection>
)
