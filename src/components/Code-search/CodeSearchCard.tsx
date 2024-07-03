import { FunctionComponent } from 'react'

import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import Link from 'next/link'

import { ContentSection } from '../ContentSection'

export const CodeSearchCard: FunctionComponent = () => (
    <ContentSection
        id="contact-form"
        parentClassName="!py-24"
        className="mx-auto flex flex-col gap-6 md:flex-row lg:pl-6"
    >
        <div className="sg-bg-code-search-new-cta hover:cta-free-cody relative overflow-hidden rounded-2xl border border-gray-200 border-opacity-25 !px-14 py-16 md:w-1/2 md:p-16">
            <div className="bg-grad absolute right-0 top-0 h-[3px] w-full flex-1 bg-gradient-to-r from-blue-300 via-violet-400 to-vermillion-300" />
            <h2 className="text-white">Code Search Enterprise</h2>
            <h3 className="py-4 text-white text-opacity-80">
                Get Code Search for your team’s entire private codebase. Contact us for a demo or to get started with a
                free trial.
            </h3>
            <div className="flex max-w-[390px] flex-col flex-wrap gap-4 pt-4 sm:flex-row">
                <Link href="/demo" className="btn btn-primary-dark max-w-[220px]">
                    Contact us for a demo
                </Link>
                <Link
                    href="/pricing?product=codeSearch"
                    className="btn-link-dark btn-link-icon flex items-center justify-start whitespace-nowrap font-semibold"
                >
                    See pricing <ChevronRightIcon className="link-icon" />
                </Link>
            </div>
        </div>
        <div className="hover:cta-free-cody !md:px-14 relative overflow-hidden rounded-2xl border border-opacity-25 bg-white p-4 md:w-1/2 md:p-16">
            <h2>Try our public Code Search environment</h2>

            <h3 className="mt-4 text-gray-500">
                See how Code Search works with our public search environment, offering the same search and navigation
                features as Code Search Enterprise. Search an index of than 2 million public repositories.
            </h3>
            <div className="mt-6 flex w-fit flex-wrap justify-center gap-2 md:flex-row md:gap-8">
                <Link
                    href="https://sourcegraph.com/search"
                    title="Get Cody free"
                    className="btn btn-primary w-[173px] text-center xs:w-fit"
                >
                    Try Code Search
                </Link>
            </div>
        </div>
    </ContentSection>
)
