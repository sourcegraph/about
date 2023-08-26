import { FunctionComponent, useEffect } from 'react'

import classNames from 'classnames'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { Tweet } from 'react-tweet/api'

import {
    ContentSection,
    Heading,
    Layout,
    ExternalsAuth,
    EmailAuth,
    HubSpotForm,
    CodySteps,
    AiGeneratedCode,
    CodebaseAwareIntelligence,
    CodyTweets,
    Badge,
} from '../components'
import { DemoVideo } from '../components/CodyVideo'
import { useAuthModal } from '../context/AuthModalContext'
// eslint-disable-next-line import/extensions
import Tweets from '../data/tweets.json'
import { EventName, getEventLogger } from '../hooks/eventLogger'

import { CODY_PAGE_TWEET_IDS } from './constants'

import styles from '../styles/CustomHubspotForm.module.scss'

interface CodyProps {
    tweets: (Tweet | undefined)[]
}

const CodyPage: FunctionComponent<CodyProps> = ({ tweets }) => {
    const { openModal } = useAuthModal()

    const handleOpenModal = (description: string): void => {
        const eventArguments = {
            source: 'about-cody-deployment',
            description,
        }
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        getEventLogger()?.log(EventName.CODY_GET_STARTED_CTA, eventArguments, eventArguments)

        openModal('about-cody-deployment')
    }

    const handleOnClick = (eventName: string, type: string): void => {
        const eventArguments = {
            source: 'cody',
            type,
        }
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        getEventLogger().log(eventName, eventArguments, eventArguments)
    }

    useEffect(() => {
        const eventArguments = {
            description: 'About - Cody page view',
            source: 'about-cody',
        }
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        getEventLogger()?.log(EventName.VIEW_ABOUT_CODY, eventArguments, eventArguments)
    }, [])

    return (
        <Layout
            meta={{
                title: 'Cody | AI coding assistant',
                description:
                    'Cody is the most powerful and accurate AI coding assistant for writing, fixing, and maintaining code.',
                image: 'https://about.sourcegraph.com/cody/cody-og.png',
            }}
            headerColorTheme="purple"
            childrenClassName="sg-bg-gradient-cody"
            displayChildrenUnderNav={true}
        >
            {/* Hero Section */}
            <ContentSection parentClassName="!py-0" className="pt-16 text-center md:pt-[10px]">
                <div className="mx-auto max-w-[637px]">
                    <div className="center flex items-center justify-center gap-x-4">
                        <img src="/cody/cody-logo.png" alt="Cody Logo" className="h-[21px] w-[23px]" />
                        <p className="mb-0 text-[28px] font-semibold text-white">Meet Cody </p>
                        <Badge size="small" text="BETA" color="dark-blue" />
                    </div>
                    <Heading size="h1" className="mt-2 text-white md:!text-[46px] md:!leading-[81px]">
                        We're building the only AI that knows your{' '}
                        <span className="cody-heading bg-clip-text text-transparent"> entire codebase </span>
                    </Heading>
                    <Heading size="h4" className="mx-auto mt-6 max-w-[637px]  !font-normal text-gray-200">
                        Cody writes, understands, and fixes code with autocomplete + chat, using your code graph for context.
                    </Heading>
                    <p className="mt-8 text-[20px] font-semibold text-white">
                        Get started <span className="text-white">👇</span>
                    </p>
                    <div className="mt-4 flex flex-wrap justify-center gap-2">
                        <ExternalsAuth
                            className="w-fit justify-center !font-normal"
                            authProvider="github"
                            label="GitHub"
                            source="about-cody"
                        />
                        <ExternalsAuth
                            className="w-fit justify-center !font-normal"
                            authProvider="gitlab"
                            label="GitLab"
                            source="about-cody"
                        />
                        <EmailAuth
                            icon={true}
                            className="sg-email-auth-btn h-12 w-fit border bg-white bg-opacity-10 text-lg !font-normal text-white"
                            source="about-cody"
                            label="Email"
                        />
                    </div>
                    <p className="mt-4 text-[14px] text-violet-300 opacity-70">
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
                            Privacy Policy
                        </Link>
                    </p>
                </div>
                <div className="mx-auto mt-12 w-full">
                    <DemoVideo
                        video="cody-promo-202306"
                        splash={true}
                        className="mx-auto mt-8 w-full max-w-[1062px] rounded-lg bg-violet-750 drop-shadow-2xl"
                        splashClassName="rounded-lg"
                        showPlayButton={true}
                        playIconClassName="opacity-100 text-white"
                    />
                </div>

                <Heading size="h2" className="mx-auto mt-12 max-w-[540px] !text-[36px] text-white md:mt-[96px]">
                    We’re working to bring you Cody{' '}
                    <span className="cody-text-gradient bg-clip-text text-transparent"> where you need it most </span>
                </Heading>

                <div className="mt-16 flex flex-col gap-16 text-[24px] font-semibold text-white">
                    <CodySteps handleOpenModal={handleOpenModal} handleOnClick={handleOnClick} />
                    <button
                        type="button"
                        onClick={() => handleOpenModal('Get started with cody for free button click')}
                        className="btn btn-default-outlined w-fit self-center"
                    >
                        Get started with Cody for free
                    </button>
                </div>
            </ContentSection>

            <AiGeneratedCode />
            
            <CodebaseAwareIntelligence />

            <ContentSection
                id="contact-form"
                parentClassName="!py-0 !pt-20 md:!pt-[120px]"
                className="cody-contact-form-wrapper rounded-lg"
            >
                <div className="flex flex-col gap-6 py-16 px-6 md:flex-row md:px-20 md:py-[96px] md:pr-[53px]">
                    <div className="max-w-[614px]">
                        <Heading size="h2" className="!text-[36px] text-white">
                            Get Cody{' '}
                            <span className="cody-text-gradient bg-clip-text text-transparent"> where you work </span>
                        </Heading>
                        <p className="mt-4 text-lg text-gray-200">
                            Cody for Enterprise provides context-aware answers based on your own private codebase.
                            Contact us through the form to learn more.
                        </p>
                    </div>
                    <div className={classNames('md:min-w-[400px] xl:min-w-[554px]', styles.codyForm)}>
                        <HubSpotForm
                            formId="05e46684-9fbc-4c4d-b010-f661f247c4c6"
                            inlineMessage="Thank you! We'll get back to you soon"
                        />
                    </div>
                </div>
            </ContentSection>

            <ContentSection parentClassName="text-center !pb-0 !pt-[112px]" className="-mb-[25px] md:-mb-[137px]">
                <Heading size="h2" className="text-white">
                    See what devs are building with Cody (beta)
                </Heading>

                <CodyTweets tweets={tweets} />
            </ContentSection>

            <ContentSection
                parentClassName="!py-0"
                className="mx-auto flex flex-col items-center justify-center gap-x-8 py-24  md:flex-row md:items-start md:pb-[112px] md:pt-[208px]"
            >
                <div className="max-w-[550px]">
                    <Heading size="h2" className="!text-4xl text-white">
                        Cody for personal use (beta)
                    </Heading>
                    <p className="mt-6 text-lg text-gray-200">
                        Cody is free for personal use in the Cody app and IDE extensions. Sign up to get access.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                        <ExternalsAuth
                            className="w-fit justify-center !font-normal"
                            authProvider="github"
                            label="GitHub"
                            source="cody"
                        />
                        <ExternalsAuth
                            className="w-fit justify-center !font-normal"
                            authProvider="gitlab"
                            label="GitLab"
                            source="cody"
                        />
                        <EmailAuth
                            icon={true}
                            className="sg-email-auth-btn h-12 w-fit border bg-white bg-opacity-10 text-lg !font-normal text-white"
                            source="cody"
                            label="Email"
                        />
                    </div>
                    <p className="mt-4 mb-0 text-[14px] text-violet-300 opacity-70">
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
                            Privacy Policy
                        </Link>
                    </p>
                </div>
                <div
                    id="cody-for-work"
                    className="mt-8 flex max-w-[554px] flex-col border-t border-gray-500 pt-8 md:mt-0 md:border-l md:border-t-0 md:pl-8 md:pt-0"
                >
                    <Heading size="h2" className="!text-4xl text-white">
                        Cody for Enterprise (beta)
                    </Heading>
                    <p className="mt-6 text-lg text-gray-200">
                        Cody for Enterprise provides context-aware answers based on your own private codebase. Contact
                        our sales team to learn more.
                    </p>
                    <div className="flex items-center gap-sm">
                        <Link
                            href="#contact-form"
                            title="Cody access form"
                            className="btn btn-inverted-primary mt-1 w-fit"
                        >
                            Get Cody for work
                        </Link>
                        <Link href="/cody/pricing" className="mt-1 text-white">
                            Pricing and plans
                        </Link>
                    </div>
                </div>
            </ContentSection>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps<CodyProps> = () => {
    try {
        const tweets = CODY_PAGE_TWEET_IDS.map(tweetId => Tweets[tweetId] as any)

        return { props: { tweets } }
    } catch (error) {
        console.error('Error fetching tweets:', error)
        return { props: { tweets: [] } }
    }
}

export default CodyPage
