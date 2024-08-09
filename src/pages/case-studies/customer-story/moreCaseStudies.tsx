import { FunctionComponent } from 'react'

import { ChevronRightIcon } from 'lucide-react'

import { CaseStudyCard } from '../../../components'

interface MoreCaseStudiesProps {
    customerStories: { name: string; logo: string; title: string; url: string; logoSize?: string }[][]
}

const MoreCaseStudies: FunctionComponent<MoreCaseStudiesProps> = ({ customerStories }) => (
    <div className="ml-auto flex w-auto flex-col pt-16 pb-6 md:max-w-[830px] md:pr-[80px]  md:pt-24  md:pb-36 lg:!ml-[425px]">
        <h2 className="pb-12 leading-9 text-gray-700 md:pb-16">Explore other case studies</h2>
        <div className="z-[10] ml-0 flex flex-col md:flex-col">
            {customerStories?.map((study, index) => (
                <div key={study[0].name} className="m-0 grid gap-x-[258px]  md:grid-cols-2 ">
                    {study.map(std => (
                        <div className="w-[298px] pb-10 pr-0 md:pb-[32px]" key={std.name}>
                            <CaseStudyCard
                                titleClassName="text-lg w-[298px] !mb-4 text-gray-700"
                                logoClassName={std.logoSize}
                                linkClassName="font-semibold items-center"
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
