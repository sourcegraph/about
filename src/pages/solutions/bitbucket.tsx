import { FunctionComponent } from 'react'

import { CodyPartners, Layout } from '../../components'
import { ContactUsCta } from '../../components/cta/ContactUsCta'
import { EnterpriseGradeSection } from '../../components/Enterprise/EnterpriseGradeSection'
import { NineCaseStudySection } from '../../components/Enterprise/NineCaseStudySection'
import { AutomationSection } from '../../components/solutions/AutomationSection'
import { IntroCard } from '../../components/solutions/IntroCard'
import { SearchDescriptionSection } from '../../components/solutions/SearchDescriptionSection'
import { SolutionExplanationSection } from '../../components/solutions/SolutionExplanationSection'

const explanationCardData = [
    {
        title: 'AI personalized to your code',
        description:
            'Cody understands your entire Bitbucket codebase to help explain and write contextually-aware code.',
        className: 'order-3 md:order-1',
    },
    {
        title: 'Generate code with chat and commands',
        description: 'Ask Cody to generate code, unit tests, or docs. Autocomplete code in any programming language.',
        className: 'order-1 md:order-2',
    },
    {
        title: 'Choose your favorite LLM',
        description:
            'Choose from multiple LLM options from Anthropic, OpenAI, and more. Bring your own LLM key with Amazon Bedrock and Azure OpenAI.',
        className: 'order-2 md:order-3',
    },
]

const Bitbucket: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Code intelligence for Bitbucket',
            description:
                "Enhance your Bitbucket experience with Sourcegraph's Code intelligence platform. Try Cody for contextual code writing, command generation, and AI autocompletion. Use the best code search tool for Bitbucket with seamless integration, personalized code insights, and automation for large-scale code changes. Perfect for developers looking to streamline their workflow and understand their codebase at any scale. Contact us for a demo or start an enterprise trial today.",
        }}
        className="overflow-hidden bg-gray-50"
    >
        <IntroCard
            title="Understand and write code faster with Bitbucket + AI"
            description="Sourcegraph’s AI coding assistant and Code Search integrate with Bitbucket Cloud and Bitbucket Data Center."
            mainImageUrl="/solutions/bitbucket/bitbucket-enterprise-context.svg"
            contactButtonLabel="Book a demo"
            alt="Bitbucket"
            scaleMobileImage={true}
            textColor="!text-[#0F111A]"
            buttonHref="/contact/request-info-bitbucket?form_submission_source=solutions-bitbucket"
        />
        <div className="flex items-center pt-16 pb-16">
            <CodyPartners isLight={true} className="!pb-[8px] pt-[16px]" />
        </div>
        <SolutionExplanationSection
            title="Code Intelligence for Bitbucket"
            titleTextColor="!text-[#0F111A]"
            subTitleTextColor="!text-[#343A4D]"
            explanationCardData={explanationCardData}
        />
        <div className="relative -mt-[64px]">
            <EnterpriseGradeSection parentClassName="!py-0 !px-6 mdi:!py-0 mdi:!px-10 !my-0 md:!py-0" />
        </div>
        <SearchDescriptionSection
            title="The best search tool for code hosted on Bitbucket"
            description="Search and understand your entire Bitbucket codebase at any scale."
            imageUrl="/solutions/bitbucket/code-search.svg"
            titleTextColor="!text-[#0F111A]"
            subTitleTextColor="!text-[#343A4D]"
        />
        <div className="!py-8 md:!py-24">
            <NineCaseStudySection />
        </div>
        <AutomationSection
            parentClassName="md:!px-10 md:!pb-0 overflow-hidden !px-6 !py-0"
            titleTextColor="!text-[#0F111A]"
            subTitleTextColor="!text-[#343A4D]"
        />
        <ContactUsCta
            buttonClassNames="!max-w-full"
            parentClassNames="mdi:!py-24 mdi:!px-0 !px-6 !py-8"
            className="px-14 py-16"
        />
    </Layout>
)

export default Bitbucket
