import { FunctionComponent, ReactNode } from 'react'

import { ContentSection, Layout } from '../../../components'
import SidebarCta from '../../../components/CaseStudies/SidebarCta'

import MoreCaseStudies from './moreCaseStudies'
import SidebarContent from './sidebarContent'

interface CustomerStoryProps {
    title: string
    description: string
    sidebarContentItems: { title: string; content: string }[]
    customerStories: { name: string; logo: string; title: string; url: string; logoSize?: string }[][]
    hero: ReactNode
    mainContent: ReactNode
}

const CustomerStory: FunctionComponent<CustomerStoryProps> = ({
    title,
    description,
    sidebarContentItems,
    customerStories,
    hero,
    mainContent,
}) => (
    <Layout
        meta={{ title, description }}
        className="relative bg-gray-50 !py-0 !pt-0"
        heroAndHeaderClassName="!pt-[84px] md:!pt-[16px] md:!pb-12 !pb-16"
        hero={hero}
    >
        <ContentSection parentClassName="!py-0 md:!px-20 px-6">
            <div className="mx-auto flex w-full flex-col-reverse gap-x-12 !pt-12 md:flex-row">
                {/* Sidebar */}
                <div className="pt-6">
                    <div className="sticky top-[72px] flex w-full flex-col gap-16 pb-12 md:w-[378px] md:pb-0">
                        {sidebarContentItems?.map((item, index) => (
                            <SidebarContent key={item.title} title={item.title} content={item.content} />
                        ))}

                        <SidebarCta
                            parentClassName="!sg-bg-code-search-cta-violet !text-left !items-start"
                            headingClassName="text-gray-700 leading-9"
                            subTitleClassName="!text-gray-500"
                            linkClassName="bg-violet-700 text-gray-75 hover:bg-violet-600 !self-start"
                        />
                    </div>
                </div>

                {/* the main content */}
                {mainContent}
            </div>
            <MoreCaseStudies customerStories={customerStories} />
        </ContentSection>
        <div className="absolute top-0 right-0 hidden h-[30%] w-[40%] bg-[url('/case-studies/side-of-page-radials.svg')] bg-contain bg-right  bg-no-repeat md:flex" />
    </Layout>
)

export default CustomerStory
