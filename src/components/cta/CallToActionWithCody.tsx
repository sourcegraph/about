import { FC } from 'react'

import Link from 'next/link'

import { buttonLocation } from '../../data/tracking'
import { ContentSection } from '../ContentSection'
import { Heading } from '../Heading'

import { EmailAuth } from './EmailAuth'
import { ExternalsAuth } from './ExternalsAuth'
import { MeetWithProductExpertButton } from './MeetWithProductExpertButton'

export const CallToActionWithCody: FC = () => (
    <ContentSection
        className="relative !m-0 ml-[32px] flex max-w-full flex-col overflow-hidden py-[96px] md:mx-4 md:max-h-[384px] md:flex-row md:items-center md:py-[114.5px]"
        parentClassName="!py-0 bg-gradient-to-tr from-violet-600 via-violet-750 to-violet-800 md:px-0"
    >
        <img
            src="/home/background.svg"
            alt="bg"
            className="absolute -right-[300px] top-16 hidden w-[100%] md:inline-block"
            aria-hidden={true}
        />
        <img
            src="/home/background.svg"
            alt="bg"
            className="absolute -left-[900px] -top-20 hidden w-[100%] md:inline-block"
            aria-hidden={true}
        />
        <div className="z-10 flex flex-1 flex-col md:pl-sm">
            <div className="max-w-[444px] md:self-end">
                <Heading className="mb-[10px] !text-[36px] text-white" size="h2">
                    Try Cody for free
                </Heading>
                <p className="mb-0 text-lg text-gray-200">
                    Cody writes code and answers questions for you, speeding up work and keeping devs in flow.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                    <ExternalsAuth
                        className="w-fit !font-normal"
                        authProvider="github"
                        label="GitHub"
                        source="about-home"
                    />
                    <ExternalsAuth
                        className="w-fit !font-normal"
                        authProvider="gitlab"
                        label="GitLab"
                        source="about-home"
                    />
                    <EmailAuth
                        icon={true}
                        className="sg-email-auth-btn w-fit border bg-white bg-opacity-10 px-4 !font-normal text-white md:h-12 md:px-6 md:text-lg"
                        source="about-home"
                        label="Email"
                    />
                </div>
                <p className="mt-4 mb-0 text-[14px] text-white opacity-70">
                    By registering, you agree to our{' '}
                    <Link
                        className="text-violet-300 underline"
                        target="_blank"
                        href="https://about.sourcegraph.com/terms"
                    >
                        Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link
                        className="text-violet-300 underline"
                        target="_blank"
                        href="https://about.sourcegraph.com/terms/privacy"
                    >
                        Private Policy
                    </Link>
                </p>
            </div>
        </div>
        <div className="my-[42px] border-b border-gray-400 md:my-0 md:mx-[42px] md:h-[266px] md:border-l" />
        <div className="z-10 flex flex-1 flex-col md:pr-sm">
            <Heading size="h4" className="mb-4 text-white">
                Cody for Enterprise
            </Heading>
            <p className="mb-8 max-w-[444px] text-lg text-gray-200">
                Cody with Sourcegraph Enterprise uses the code graph to provide context-aware answers based on your own
                private codebase.
            </p>
            <div className="flex flex-col sm:flex-row">
                <Link href="/cody" title="Get Cody for work" className="btn btn-outline-white max-w-[200px] px-6">
                    Get Cody for work
                </Link>
                <MeetWithProductExpertButton
                    buttonClassName="text-white pl-0 mt-3 sm:pl-6 sm:mt-0"
                    chevron={true}
                    buttonLocation={buttonLocation.body}
                >
                    Speak to an engineer
                </MeetWithProductExpertButton>
            </div>
        </div>
    </ContentSection>
)
