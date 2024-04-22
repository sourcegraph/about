import { FunctionComponent } from 'react'

import classNames from 'classnames'

import { Heading, ContentSection } from '..'
import { breakpoints } from '../../data/breakpoints'
import { useWindowWidth } from '../../hooks/windowWidth'

import { CodyCard } from './CodyCard'

interface SolutionExplanationSectionProps {
    title: string
    titleTextColor?: string
    subTitleTextColor?: string
}

export const SolutionExplanationSection: FunctionComponent<SolutionExplanationSectionProps> = ({
    title,
    titleTextColor,
    subTitleTextColor,
}) => {
    const windowWidth = useWindowWidth()
    const isMobile = windowWidth < breakpoints.md
    return (
        <ContentSection
            parentClassName='!px-sm !py-0 md:!px-0 !py-3xl'
            className='flex max-w-[1232px] flex-col items-center gap-md px-0 md:gap-lg md:px-sm lg:px-0'
        >
            <div className={classNames('w-full text-center md:w-[508px]', titleTextColor ?? '!text-gray-700')}>
                <Heading
                    size='h3'
                    className='!font-["Source_Sans_Pro"] !text-4xl !font-semibold !leading-[43px] !-tracking-[1px] md:!text-[40px] md:!leading-10'
                >
                    {title}
                </Heading>
            </div>
            <div className='relative -ml-6 sm:-ml-[208px] md:ml-0'>
                {isMobile ? (
                    <img className='w-[612px]' src='/solutions/gitlab/ai-cody-mobile.svg' alt='AI Cody' />
                ) : (
                    <img className='w-[928px]' src='/solutions/gitlab/ai-cody.svg' alt='AI Cody' />
                )}
            </div>
            <div className='relative mt-0 flex flex-col gap-6 md:-mt-[134px] md:flex-row'>
                <CodyCard
                    title='AI personalized to your code'
                    description='Cody pulls from your entire GitLab codebase to explain and write contextually-aware code.'
                    className='order-3 rounded-2xl border border-gray-200 bg-white py-3xl px-lg md:order-1'
                    titleTextColor={titleTextColor}
                    subTitleTextColor={subTitleTextColor}
                />
                <CodyCard
                    title='Generate code with chat and commands'
                    description='Ask Cody to generate code, unit tests, or docs. Autocomplete code in any programming language.'
                    className='order-1 rounded-2xl border border-gray-200 bg-white py-3xl px-lg md:order-2'
                    titleTextColor={titleTextColor}
                    subTitleTextColor={subTitleTextColor}
                />
                <CodyCard
                    title='Choose your favorite LLM'
                    description='Choose from multiple LLM options from Anthropic, OpenAI, and more. Bring your own LLM key with Amazon Bedrock and Azure OpenAI.'
                    className='order-2 rounded-2xl border border-gray-200 bg-white py-3xl px-lg md:order-3'
                    titleTextColor={titleTextColor}
                    subTitleTextColor={subTitleTextColor}
                />
            </div>
        </ContentSection>
    )
}
