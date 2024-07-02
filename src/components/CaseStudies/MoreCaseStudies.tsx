import { FunctionComponent } from 'react'

import ChevronRightIcon from 'mdi-react/ChevronRightIcon'

import { CaseStudyCard } from './CaseStudyCard'

export const CUSTOMER_STORIES = [
    [
        {
            name: 'Indeed',
            logo: '/external-logos/indeed-logo.svg',
            title: 'Indeed keeps code up to date and accelerates development velocity.',
            url: '/case-studies/indeed-accelerates-development-velocity',
            logoSize: 'w-[150.735px] h-[40.328px]',
        },
        {
            name: 'FactSet',
            logo: '/external-logos/factset-logo.svg',
            title: 'FactSet migrates from Perforce to GitHub.',
            url: '/case-studies/factset-migrates-from-perforce-to-github',
            logoSize: 'w-[162px] h-[31px]',
        },
    ],
    [
        {
            name: 'HashiCorp',
            logo: '/external-logos/hashicorp-logo.svg',
            title: 'HashiCorp streamlines cross-repository code search and fixes with Sourcegraph.',
            url: '/case-studies/hashicorp-uses-sourcegraph-to-streamline-cross-repository-code-search',
        },
        {
            name: 'CERN',
            logo: '/external-logos/cern-name-logo.svg',
            title: 'Sourcegraph empowers CERN to tackle code reuse and code changes in mission-critical applications.',
            url: '/case-studies/cern-reduces-technical-debt',
            logoSize: 'w-[107px] h-[31px] object-cover',
        },
    ],
]

const MoreCaseStudies: FunctionComponent = () => (
    <div className="ml-auto flex flex-col pt-16 pb-[18px] md:w-[830px] md:py-16">
        <h2 className="pb-12 md:pb-[59px]">Explore other customer stories</h2>
        <div className="z-[10] ml-0 flex flex-col-reverse md:flex-col">
            {CUSTOMER_STORIES.map((study, index) => (
                <div key={index} className="m-0 grid gap-x-[258px]  md:grid-cols-2 ">
                    {study.map(std => (
                        <div className="w-[298px] pb-[46px] pr-0 md:first:pb-[30px]" key={std.name}>
                            <CaseStudyCard
                                titleClassName="text-lg w-[298px]"
                                logoClassName={std.logoSize}
                                study={std}
                                icon={<ChevronRightIcon size={20} className="link-icon" />}
                                key={std.name}
                            />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    </div>
)

export default MoreCaseStudies
