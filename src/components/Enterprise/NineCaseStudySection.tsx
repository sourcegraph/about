import { FunctionComponent } from 'react'

import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import Link from 'next/link'

import { ContentSection } from '..'

export const NineCaseStudySection: FunctionComponent = () => (
    <ContentSection
        parentClassName="!py-0 md:px-[80px]"
        className="flex max-w-[1280px] flex-col gap-16 rounded-2xl border-1 bg-violet-700 py-16 px-6 text-white md:flex-row md:gap-[160px] md:px-20"
    >
        <div className="flex max-w-[511px] flex-col gap-[70px]">
            <img src="/enterprise/nine.svg" className="w-[188px]" alt="" />
            <p className="mb-0 text-[35px] font-normal leading-[43.75px] -tracking-[0.25px]">
                Nine’s Platform Engineering team saved hundreds of hours and thousands of dollars by using Code Search
                and Batch Changes for their CI/CD refactor.
            </p>
        </div>
        <div className="relative flex max-w-[479px] flex-col gap-16">
            <div>
                <p className="mb-0  font-sans text-[75px] font-semibold leading-[93.75px]">$276K</p>
                <h3 className="text-gray-200">Engineering time saved</h3>
            </div>
            <div>
                <p className="mb-0 font-sans text-[75px] font-semibold leading-[93.75px]">1,200 hours</p>
                <h3 className="text-gray-200">Estimated annual time savings</h3>
            </div>
            <div>
                <Link
                    href="https://sourcegraph.com/case-studies/how-sourcegraph-transformed-nine-development-workflow"
                    title="Case study"
                    className="btn btn-link-dark btn-link-icon p-0 text-left  font-semibold !-tracking-[0.25px] md:text-center "
                >
                    Read the case study
                    <ChevronRightIcon className="link-icon" />
                </Link>
            </div>
        </div>
    </ContentSection>
)
