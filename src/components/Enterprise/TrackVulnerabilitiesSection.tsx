import { FunctionComponent } from 'react'

import { ContentSection } from '..'

export const TrackVulnerabilitiesSection: FunctionComponent = () => (
    <ContentSection
        className="flex max-w-[1232px] flex-col gap-6 md:flex-row"
        parentClassName="!md:px-[80px] !md:pb-[96px]"
    >
        <div className="md:pt-6 md:pl-16 md:pr-10">
            <h2 className="mb-4 pt-4 text-black md:pt-0">
                Track and resolve vulnerabilities quickly and with confidence
            </h2>
            <p className="mb-[37px] text-lg leading-[27px] tracking-[-0.25px]">
                Find all instances of vulnerabilities with Code Search, then use Batch Changes to replace vulnerable
                code all at once. Plus, Code Insights lets you create dashboards to track instances of vulnerabilities
                or bad code patterns over time.
            </p>
            <img src="/enterprise/batch-change.svg" alt="code search" />
        </div>
        <div className="rounded-2xl border-1 border-gray-200 bg-white px-6 py-16 md:max-w-[576px] md:px-16">
            <p className="mb-5 text-[35px] font-normal leading-[43.75px] -tracking-[2px] text-gray-700">
                “It's nice when you can just run a report and say, 'Here it is,' or 'Here it isn't.' It's much better
                than having to say, 'Well, boss, I think we got it all.'”
            </p>
            <p className="mb-0 leading-6 tracking-[-0.25px] text-gray-700">Jon Kohler</p>
            <p className="mb-0 text-sm leading-[19.88px]">Nutanix, after responding to the Log4J vulnerability</p>
        </div>
    </ContentSection>
)
