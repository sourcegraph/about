import { FunctionComponent, useEffect } from 'react'

import classNames from 'classnames'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { Tweet, getTweet } from 'react-tweet/api'

import {
    ContentSection,
    Heading,
    Layout,
    ExternalsAuth,
    EmailAuth,
    HubSpotForm,
    PlayButton,
    CodySteps,
    CodebaseAwareIntelligence,
    AiGeneratedCode,
    CodyTweets,
} from '../../components'
import { DemoVideo } from '../../components/DemoVideo'
import { useAuthModal } from '../../context/AuthModalContext'
import { EventName, getEventLogger } from '../../hooks/eventLogger'
import { CODY_PAGE_TWEET_IDS } from '../constants'

import styles from '../../styles/CustomHubspotForm.module.scss'

interface CodyProps {
    tweets: (Tweet | undefined)[]
}

const DemoCodyPage: FunctionComponent<CodyProps> = ({ tweets }) => {
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
            className="sg-bg-code-search"
        >
            {/* Hero Section */}
            <ContentSection parentClassName="!py-0" className="mb-2 md:mt-16">
                <div className="flex flex-col justify-between gap-12  md:flex-row md:gap-6">
                    <div className="md:mt-[56px]">
                        <Heading
                            size="h1"
                            className="cody-heading max-w-[662px] bg-clip-text !text-[69px] !leading-[69px] !tracking-[-0.69px] text-transparent"
                        >
                            The AI that knows your entire codebase
                        </Heading>
                        <Heading size="h3" className="mt-8 max-w-[628px] text-white">
                            Cody answers technical questions and writes code directly in your IDE, using your code graph
                            for context and accuracy.
                        </Heading>
                    </div>
                    <div className={classNames('max-w-[520px] md:mt-[80px] md:w-[520px]', styles.codyForm)}>
                        <Heading size="h3" className="mb-[22px] text-white">
                            Talk to an expert today
                        </Heading>
                        <HubSpotForm formId="255d54c8-65db-435e-b131-d8dc4ab9ea96" chiliPiper={true} />
                    </div>
                </div>
                <div className="mx-auto mt-16 w-full md:mt-[96px]">
                    <DemoVideo
                        video="cody-promo-202306"
                        splash={true}
                        className="mx-auto mt-8 w-full max-w-[1062px] rounded-lg bg-violet-750  drop-shadow-2xl"
                        splashClassName="rounded-lg"
                        playButton={<PlayButton title="Watch Cody write & fix code" time="4 min" ctaText="Watch now" />}
                    />
                </div>
            </ContentSection>

            <CodebaseAwareIntelligence />

            <AiGeneratedCode />

            <Heading
                size="h2"
                className="mx-auto mt-12 max-w-[540px] text-center !text-[36px] text-white md:mt-[208px]"
            >
                We’re working to bring you Cody{' '}
                <span className="cody-text-gradient bg-clip-text text-transparent"> where you need it most </span>
            </Heading>

            <div className="mt-16 flex flex-col gap-16 text-[24px] font-semibold text-white">
                <CodySteps handleOpenModal={handleOpenModal} handleOnClick={handleOnClick} />
            </div>

            <ContentSection
                parentClassName="text-center !pb-0 pt-16 !md:pt-[96px]"
                className="-mb-[25px] md:-mb-[137px]"
            >
                <Heading size="h2" className="text-white">
                    See what devs are building with Cody
                </Heading>

                <CodyTweets tweets={tweets} />
            </ContentSection>

            <ContentSection
                parentClassName="!py-0"
                className="mx-auto flex flex-col items-center justify-center gap-x-8 py-24  md:flex-row md:items-start md:pb-[112px] md:pt-[208px]"
            >
                <div className="max-w-[550px]">
                    <Heading size="h2" className="!text-4xl text-white">
                        Cody for personal use
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
                        Cody for Enterprise
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
                    </div>
                </div>
            </ContentSection>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps<CodyProps> = async () => {
    try {
        const tweetPromises = CODY_PAGE_TWEET_IDS.map(tweetId => getTweet(tweetId))
        const tweetResponses = await Promise.allSettled(tweetPromises)

        const validTweets = tweetResponses
            .filter(response => response.status === 'fulfilled')
            .map(response => (response as PromiseFulfilledResult<Tweet>).value)

        return { props: { tweets: validTweets } }
    } catch (error) {
        console.error('Error fetching tweets:', error)
        return { props: { tweets: [] } }
    }
}

export default DemoCodyPage
