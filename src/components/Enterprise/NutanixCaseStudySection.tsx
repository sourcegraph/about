import { FunctionComponent } from 'react'

import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import Link from 'next/link'

import { ContentSection } from '..'

export const NutanixCaseStudySection: FunctionComponent = () => (
    <ContentSection
        className="flex max-w-[1232px] flex-col gap-6 md:flex-row"
        parentClassName="md:px-[80px] !py-0 md:!py-10"
    >
        <div className=" flex justify-center rounded-2xl border-1 border-gray-200 py-16 px-6 md:!w-[417px] md:px-20">
            <div className="flex !w-[278px] flex-col gap-16">
                <div>
                    <p className="mb-0 font-sans text-7xl font-semibold tracking-[0.25px]">
                        &lt;5 minutes
                    </p>
                    <h3>Time to find and fix instances of a vulnerability</h3>
                </div>
                <div>
                    <p className="mb-0 font-sans text-7xl font-semibold tracking-[0.25px]">
                        &lt;4 days
                    </p>
                    <h3>Time to deliver Log4j vulnerability patches to customers</h3>
                </div>
            </div>
        </div>
        <div className="flex flex-row items-center rounded-2xl border-1 border-gray-200 bg-white py-16 px-6 md:items-end md:px-20 ">
            <div>
                <img src="/enterprise/nutanix.svg" alt="" className="mb-6 w-[180px]" />
                <p className="mb-16 text-[35px] font-normal leading-[43.75px] -tracking-[0.25px]">
                    Nutanix was able to find every instance of Log4j vulnerabilities in their large codebase and ship
                    codebase-wide fixes in less than a week
                </p>
                <div className="text-right">
                    <Link
                        href="https://sourcegraph.com/case-studies/nutanix-fixed-log4j-with-sourcegraph"
                        title="Case study"
                        className="btn flex-end p-0 text-right font-semibold !-tracking-[0.25px] text-violet-500 hover:underline  md:mx-0 md:border-none  md:text-left "
                    >
                        Read the case study
                        <ChevronRightIcon className="!mb-0 ml-[10px] inline" />
                    </Link>
                </div>
            </div>
        </div>
    </ContentSection>
)
