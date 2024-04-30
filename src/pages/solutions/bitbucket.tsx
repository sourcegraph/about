import { FunctionComponent } from 'react'

import { InfiniteCarousel, Layout } from '../../components'
import { ContactUsCta } from '../../components/cta/ContactUsCta'
import { EnterpriseGradeSection } from '../../components/Enterprise/EnterpriseGradeSection'
import { NineCaseStudySection } from '../../components/Enterprise/NineCaseStudySection'
import { AutomationSection } from '../../components/solutions/AutomationSection'
import { IntroCard } from '../../components/solutions/IntroCard'
import { SearchDescriptionSection } from '../../components/solutions/SearchDescriptionSection'
import { SolutionExplanationSection } from '../../components/solutions/SolutionExplanationSection'
import { carouselImages } from '../code-search'

const Bitbucket: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Code intelligence for Bitbucket',
            description:
                "Enhance your Bitbucket experience with Sourcegraph's Code intelligence platform. Try Cody for contextual code writing, command generation, and AI autocompletion. Use the best code search tool for Bitbucket with seamless integration, personalized code insights, and automation for large-scale code changes. Perfect for developers looking to streamline their workflow and understand their codebase at any scale. Contact us for a demo or start an enterprise trial today.",
        }}
        className='bg-gray-50 overflow-hidden'
    >
        <IntroCard
            title='Understand and write code faster with Bitbucket + AI'
            description='Sourcegraph’s AI coding assistant and Code Search integrates with Bitbucket Cloud and Bitbucket Data Center.'
            mainImageUrl='/solutions/bitbucket/bitbucket-enterprise-context.svg'
            contactButtonLabel='Contact us'
            alt='BitBucket'
            scaleMobileImage={true}
            textColor='!text-[#0F111A]'
            buttonHref='/contact/request-info-bitbucket?form_submission_source=solutions-bitbucket'
        />
        <div className='py-md md:py-3xl'>
            <InfiniteCarousel duration={400} images={carouselImages} />
        </div>
        <SolutionExplanationSection
            title='Code Intelligence for Bitbucket'
            titleTextColor='!text-[#0F111A]'
            subTitleTextColor='!text-[#343A4D]'
        />
        <SearchDescriptionSection
            title='The best code search tool for code hosted on Bitbucket'
            description='Search and understand your entire Bitbucket codebase at any scale.'
            imageUrl='/solutions/bitbucket/code-search.svg'
            titleTextColor='!text-[#0F111A]'
            subTitleTextColor='!text-[#343A4D]'
        />
        <div className='!py-md md:!py-5xl'>
            <NineCaseStudySection />
        </div>
        <AutomationSection titleTextColor='!text-[#0F111A]' subTitleTextColor='!text-[#343A4D]' />
        <EnterpriseGradeSection />
        <ContactUsCta
            buttonClassNames='!max-w-full'
            parentClassNames='mdi:!py-5xl mdi:!px-0 !px-sm !py-md'
            className='px-2xl py-3xl'
        />
    </Layout>
)

export default Bitbucket
