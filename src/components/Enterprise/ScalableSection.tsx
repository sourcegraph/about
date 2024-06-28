import { FunctionComponent } from 'react'

import { ContentSection } from '..'

export const ScalableSection: FunctionComponent = () => (
    <ContentSection
        className="flex max-w-[1232px] flex-col justify-between overflow-hidden rounded-2xl border-1 border-gray-200 bg-white py-10  px-6 md:flex-row md:pr-10 md:pl-16"
        parentClassName="md:px-[80px] md:!py-16 py-8"
    >
        <div className="flex max-w-[532px] flex-col justify-center">
            <img src="/enterprise/code-graph-brand-icon.svg" alt="" className="mb-6 w-[48px]" />
            <h2 className="mb-4">Scalable</h2>
            <h3 className="mb-6 md:mb-0">
                Leverage AI at any scale. Sourcegraph supports the world's largest codebases.
            </h3>
        </div>
        <div className="sg-scalable relative z-10 max-w-[477px]">
            <div className=" relative flex  flex-col gap-16 rounded-2xl border-1 border-gray-200 bg-white py-10 pl-10 pr-[89px]">
                <h3>Customers run single-tenant Sourcegraph instances for codebases of epic size:</h3>
                <div>
                    <p className="mb-0 font-sans text-[40px] font-semibold leading-[93.75px] -tracking-[0.25px] sm:text-[75px]">
                        8+
                    </p>
                    <h3>Terabytes of code at finance industry customer</h3>
                </div>
                <div>
                    <p className="mb-0 font-sans text-[40px] font-semibold leading-[93.75px] -tracking-[0.25px] sm:text-[75px]">
                        600,000+
                    </p>
                    <h3>Repositories at finance industry customer</h3>
                </div>
            </div>
        </div>
    </ContentSection>
)
