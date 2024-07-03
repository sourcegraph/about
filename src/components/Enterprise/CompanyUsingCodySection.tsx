import { FunctionComponent } from 'react'

import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import Link from 'next/link'

import { ContentSection } from '..'

export const CompanyUsingCodySection: FunctionComponent = () => (
    <ContentSection
        className="relative mx-auto mt-0 flex flex-col items-center gap-12 py-16 text-center md:mt-[-135px] md:pt-[282px] md:pb-[96px]"
        parentClassName="!py-0 md:px-[80px]"
    >
        <div className="z-10 flex flex-col items-center gap-6  text-center md:w-[615px]">
            <h2>Used by 6 of the 10 largest software companies in the world</h2>
            <Link
                href="https://sourcegraph.com/case-studies"
                title="Cody"
                className="btn btn-link btn-link-icon p-0 text-center font-semibold !-tracking-[0.25px]"
            >
                Read customer stories
                <ChevronRightIcon className="link-icon" />
            </Link>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-[42px] ">
            <img className="" src="/enterprise/cern-logo.svg" alt="Cody Product logo" />
            <img className="" src="/enterprise/mercado-libre-logo.svg" alt="Cody Product logo" />
            <img className="" src="/enterprise/SoFi-logo.svg" alt="Cody Product logo" />
            <img className="" src="/enterprise/qualtrics-logo.svg" alt="Cody Product logo" />
            <img className="" src="/enterprise/leidos-logo.svg" alt="Cody Product logo" />
        </div>
    </ContentSection>
)
