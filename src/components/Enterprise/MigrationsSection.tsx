import { FunctionComponent } from 'react'

import { ContentSection } from '..'
import { breakpoints } from '../../data/breakpoints'
import { useWindowWidth } from '../../hooks/windowWidth'

export const MigrationsSection: FunctionComponent = () => {
    const windowWidth = useWindowWidth()
    const isMobile = windowWidth < breakpoints.md

    return (
        <ContentSection
            className="grid max-w-[1232px] grid-cols-1 gap-8 rounded-2xl border-1  border-gray-200 bg-white py-16 px-6 md:grid-cols-2 md:flex-row md:gap-6 md:pl-16 md:pr-6"
            parentClassName="md:px-[80px] !py-0"
        >
            <div className="flex items-center rounded-2xl border-1 border-gray-200 bg-gray-50 px-6 py-16 md:items-end lg:px-20">
                <div className="flex flex-col">
                    <p className="mb-0 leading-6 tracking-[-0.25px] text-gray-700">Balázs Tóthfalussy</p>
                    <p className="mb-0 text-sm leading-[19.88px]">Engineering Manager, Prezi</p>
                    <p className="mb-0 pt-3 text-[35px] font-normal leading-[43.75px] -tracking-[2px]">
                        "As we’ve grown, so has the need to better track and communicate our progress and goals across
                        the engineering team and broader company...
                    </p>
                </div>
            </div>
            <div className=" ">
                <div className="lg:px-10">
                    <h2 className="mb-4 text-black">
                        Complete large-scale migrations and refactors in hours rather than days
                    </h2>
                    <p className="mb-4 text-lg md:mb-0 ">
                        Perform organization-wide migrations and upgrades across every repository and code host with
                        Batch Changes, and track migration progress with Code Insights dashboards.
                    </p>
                </div>

                {!isMobile ? (
                    <div className="lg:w-[558px]">
                        <img src="/enterprise/graph.svg" alt="graph" className="relative -right-10 xl:-right-[92px]" />
                    </div>
                ) : (
                    <img src="/enterprise/mobile-graph.svg" alt="graph" className=" h-[344px] w-[408px] " />
                )}
            </div>
        </ContentSection>
    )
}
