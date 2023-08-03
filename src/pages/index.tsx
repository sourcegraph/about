/* eslint-disable react/forbid-dom-props */
import { FunctionComponent, useRef, useState } from 'react'

import classNames from 'classnames'
import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import PlusIcon from 'mdi-react/PlusIcon'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { EmbeddedTweet, TweetSkeleton } from 'react-tweet'
import { Tweet, getTweet } from 'react-tweet/api'

import {
    ContentSection,
    Layout,
    CustomerLogos,
    Heading,
    ExternalsAuth,
    EmailAuth,
    VideoCarousel,
    CallToActionWithCody,
    Badge,
} from '../components'
import { breakpoints } from '../data/breakpoints'
import { EventName, getEventLogger } from '../hooks/eventLogger'
import { useInView } from '../hooks/useInView'
import { useWindowWidth } from '../hooks/windowWidth'

import { HOME_PAGE_TWEET_IDS } from './constants'

interface HomeProps {
    tweets: (Tweet | undefined)[]
}

interface AvailabilityIconProps {
    href: string
    src: string
    alt: string
    onHover: () => void
    onMouseLeave: () => void
    eventName: string
    type: string
    className?: string
}

const carouselVideos = [
    {
        title: 'Context-aware chat',
        description: 'Cody can explain what code is doing—at a high level or in detail.',
        video: 'https://storage.googleapis.com/sourcegraph-assets/cody/website_june2023/cody_explain_June23.mp4',
        link: '/cody',
    },
    {
        title: 'Autocomplete',
        description: 'Cody offers code autocompletions in real time as you code or type comments.',
        video: 'https://storage.googleapis.com/sourcegraph-assets/cody/website_june2023/cody_autocomplete_June23.mp4',
        link: '/cody',
    },
    {
        title: 'Recipes',
        description: 'Generate unit tests, summarize changes, or create docs with prebuilt recipes.',
        video: 'https://storage.googleapis.com/sourcegraph-assets/cody/website_june2023/cody_unittest_June23.mp4',
        link: '/cody',
    },
    {
        title: 'Inline chat',
        description: 'Cody edits and improves code directly using inline instructions.',
        video: 'https://storage.googleapis.com/sourcegraph-assets/cody/website_june2023/cody_inline_June23.mp4',
        link: '/cody',
    },
]

const Home: FunctionComponent<HomeProps> = ({ tweets }) => {
    const windowWidth = useWindowWidth()
    const isMobile = windowWidth < breakpoints.lg

    const innovationSectionRef = useRef<HTMLDivElement>(null)
    const lightRef = useRef<HTMLImageElement>(null)

    const isInnovationSectionRefInView = useInView(innovationSectionRef, isMobile ? 0.2 : 0.5)
    const isLightRefInView = useInView(lightRef, isMobile ? 1 : 0.8)

    return (
        <Layout
            meta={{
                title: 'Sourcegraph | Code AI platform',
                description:
                    'Sourcegraph’s code AI platform makes it easy for devs to write, fix, and maintain code with Cody, the AI coding assistant, and Code Search.',
            }}
            heroAndHeaderClassName="text-white"
            headerColorTheme="purple"
            className="sg-bg-gradient-radial-home"
            hero={<HomeHero />}
        >
            <img
                src="/home/light.svg"
                className={classNames(
                    'mx-auto max-h-[89px] pb-2 transition-opacity',
                    isLightRefInView ? 'animate-slideFadeIn' : 'opacity-0'
                )}
                alt=""
                aria-hidden={true}
                ref={lightRef}
            />
            <div ref={innovationSectionRef}>
                <ContentSection parentClassName="!py-0">
                    <CustomerLogos
                        ctaLink={
                            <Link
                                href="/case-studies"
                                title="See how innovative companies are using Sourcegraph"
                                className="btn bg-transparent py-0 pl-0 text-base text-white"
                            >
                                Learn how innovative companies are using Sourcegraph
                                <ChevronRightIcon className="!mb-0 ml-[10px] inline" />
                            </Link>
                        }
                        className={classNames(
                            '-px-sm !bg-transparent transition-opacity duration-300',
                            isInnovationSectionRefInView ? 'opacity-100 delay-[100ms]' : 'opacity-10'
                        )}
                        headline="Over 1.8M engineers use Sourcegraph"
                        headlineClassName="!text-4xl"
                        monochrome={true}
                        dark={true}
                    />
                </ContentSection>{' '}
            </div>

            <ContentSection
                parentClassName="!pb-0"
                className="-mb-[25px] flex flex-col items-center justify-center md:-mb-[97px] md:pt-4"
            >
                <Heading size="h3" className="mb-16 text-center !text-4xl font-semibold text-white md:mb-16">
                    See what devs are saying about Cody (beta)
                </Heading>
                <div className="relative -mt-[25px] grid w-full grid-cols-1 gap-x-6 md:grid-cols-2">
                    <div className="relative grid auto-rows-min grid-cols-1">
                        <div className="mb-1 -mt-[30px] flex justify-center md:mt-0 xl:-mr-[80px]">
                            {tweets[0] ? <EmbeddedTweet key={tweets[0].id_str} tweet={tweets[0]} /> : <TweetSkeleton />}
                        </div>

                        <div className="mb-1 -mt-[30px] flex justify-center xl:-mr-[80px]">
                            {tweets[1] ? <EmbeddedTweet key={tweets[1].id_str} tweet={tweets[1]} /> : <TweetSkeleton />}
                        </div>
                    </div>
                    <div className="relative grid auto-rows-min grid-cols-1">
                        <div className="mb-1 -mt-[30px] flex justify-center md:mt-0 xl:-ml-[80px]">
                            {tweets[2] ? <EmbeddedTweet key={tweets[2].id_str} tweet={tweets[2]} /> : <TweetSkeleton />}
                        </div>
                        <div className="-mt-[30px] flex justify-center xl:-ml-[80px]">
                            {tweets[3] ? <EmbeddedTweet key={tweets[3].id_str} tweet={tweets[3]} /> : <TweetSkeleton />}
                        </div>
                    </div>
                </div>
            </ContentSection>

            <CallToActionWithCody className="-mt-[10px] md:mt-32" />
        </Layout>
    )
}

const HomeHero: FunctionComponent = () => {
    const [hoveredImageText, setHoveredImageText] = useState('')
    const windowWidth = useWindowWidth()
    const isMobile = windowWidth < breakpoints.lg

    const lightRef = useRef<HTMLImageElement>(null)
    const whatIsSourcegraphRef = useRef<HTMLDivElement>(null)
    const codyGraph = useRef<HTMLImageElement>(null)

    const isLightRefInView = useInView(lightRef, isMobile ? 0.5 : 0.8)
    const isWhatIsSourcegraphInView = useInView(whatIsSourcegraphRef, isMobile ? 0.5 : 0.8)
    const isCodyGraphInView = useInView(codyGraph, isMobile ? 0.5 : 0.8)

    const handleOnClick = (eventName: string): void => {
        const eventArguments = {
            source: 'about-home',
            description: '',
        }
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        getEventLogger().log(eventName, eventArguments, eventArguments)
    }

    return (
        <>
            <ContentSection parentClassName="!py-0 !px-sm overflow-x-clip" className="relative pb-[55px] md:pb-0">
                <div className="grid grid-cols-1 gap-x-4 gap-y-16  pt-16 pb-11 md:grid-cols-2 md:px-6 md:pt-32 md:pb-8">
                    <div className="hero-content mx-auto flex w-full max-w-[567px] flex-col items-center px-0 md:mx-0 md:items-start">
                        <Badge size="small" text="BETA" color="dark-blue" />
                        <Heading
                            size="h1"
                            className="w-full text-center !text-[42px] leading-[65px] text-white md:max-w-[516px] md:text-start md:!text-[62px]"
                        >
                            Meet Cody, your <br />
                            <span className="sg-bg-gradient-infrared bg-clip-text text-transparent">
                                AI coding assistant
                            </span>
                        </Heading>

                        <p className="mb-0 mt-6 text-center text-[26px] font-normal leading-[36px] text-gray-200 md:text-left">
                            Cody writes code and answers questions using your own code graph as context—even in complex
                            codebases with multiple code hosts.
                        </p>
                        <div className="flex flex-col items-center md:items-start">
                            <p className="mt-9 text-xl font-semibold text-white">Sign up to get free access 👇</p>
                            <div className="flex max-w-[319px] flex-col">
                                <div className="mb-2 flex gap-2">
                                    <ExternalsAuth
                                        className="col-span-1 mt-1 w-full justify-center !font-normal"
                                        authProvider="github"
                                        label="GitHub"
                                        source="about-home"
                                    />
                                    <ExternalsAuth
                                        className="col-span-1 mt-1 w-full justify-center !font-normal"
                                        authProvider="gitlab"
                                        label="GitLab"
                                        source="about-home"
                                    />
                                </div>
                                <EmailAuth
                                    icon={true}
                                    className="sg-email-auth-btn col-span-2 h-12 border bg-white bg-opacity-10 text-lg !font-normal text-white"
                                    source="about-home"
                                />
                            </div>
                            <p className="mt-4 text-sm text-violet-300 opacity-70">
                                By registering, you agree to our{' '}
                                <Link
                                    className="text-violet-300 underline hover:text-violet-200"
                                    target="_blank"
                                    href="https://about.sourcegraph.com/terms"
                                >
                                    Terms of Service
                                </Link>{' '}
                                and{' '}
                                <Link
                                    className="text-violet-300 underline hover:text-violet-200"
                                    target="_blank"
                                    href="https://about.sourcegraph.com/terms/privacy"
                                >
                                    Privacy Policy
                                </Link>
                            </p>
                        </div>
                    </div>

                    <VideoCarousel videos={carouselVideos} />

                    <img
                        className="z hero-background absolute top-0 right-0 !-mr-12 hidden lg:block"
                        src="/home/light-instance.svg"
                        alt=""
                        aria-hidden={true}
                    />
                </div>

                <div
                    className="flex flex-col items-center bg-violet-400 bg-opacity-10 py-8 md:mb-16"
                    style={{
                        width: '100vw',
                        marginLeft: 'calc((100% - 100vw) / 2)',
                        transition: 'height 300ms ease-in-out',
                    }}
                >
                    <p className="text-2xl font-semibold text-violet-200">Available on:</p>

                    <div className="flex flex-col items-center justify-center gap-y-8 md:flex-row md:gap-x-4">
                        <div className="flex items-center justify-center gap-4">
                            <AvailabilityIcon
                                href="https://sourcegraph.com/get-cody"
                                src="/home/cody-logo.svg"
                                alt="Cody desktop app"
                                onHover={() => setHoveredImageText('Cody desktop app')}
                                onMouseLeave={() => setHoveredImageText('')}
                                eventName={EventName.DOWNLOAD_APP}
                                type="distribution"
                            />
                            <PlusIcon size={25} className="text-white" />
                            <AvailabilityIcon
                                href="https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai#:~:text=Cody%20for%20VS%20Code%20is,not%20just%20your%20open%20files"
                                src="/home/vs-code-logo.svg"
                                alt="VS Code"
                                onHover={() => setHoveredImageText('VS Code marketplace')}
                                onMouseLeave={() => setHoveredImageText('')}
                                eventName={EventName.DOWNLOAD_IDE}
                                type="VS Code"
                            />
                            <AvailabilityIcon
                                href="https://plugins.jetbrains.com/plugin/9682-sourcegraph"
                                src="/home/intelliJ-logo.svg"
                                alt="JetBrains (IntelliJ, WebStorm, etc.)"
                                onHover={() => setHoveredImageText('JetBrains (IntelliJ, WebStorm, etc.)')}
                                onMouseLeave={() => setHoveredImageText('')}
                                eventName={EventName.DOWNLOAD_IDE}
                                type="IntelliJ"
                                className="rounded-[10px] border border-gray-200 border-opacity-20"
                            />
                        </div>

                        <div className="relative flex rounded-lg border border-dashed border-gray-200 border-opacity-20">
                            <Link href="https://info.sourcegraph.com/waitlist" target="_blank">
                                <Badge
                                    text="Join the waitlist"
                                    size="small"
                                    className="absolute -right-[4.25px] -top-[24.25px] w-fit text-gray-500 hover:bg-violet-100 hover:text-violet-600"
                                />
                            </Link>
                            <AvailabilityIcon
                                href="https://info.sourcegraph.com/waitlist"
                                src="/home/neoVim-logo.svg"
                                alt="Neovim (coming soon)"
                                onHover={() => setHoveredImageText('Neovim (coming soon)')}
                                onMouseLeave={() => setHoveredImageText('')}
                                eventName={EventName.JOIN_IDE_WAITLIST}
                                type="NeoVim"
                            />
                            <AvailabilityIcon
                                href="https://info.sourcegraph.com/waitlist"
                                src="/home/emacs-logo.svg"
                                alt="Emacs (coming soon)"
                                onHover={() => setHoveredImageText('Emacs (coming soon)')}
                                onMouseLeave={() => setHoveredImageText('')}
                                eventName={EventName.JOIN_IDE_WAITLIST}
                                type="Emacs"
                            />
                        </div>
                    </div>

                    <p className="mb-0 h-9 pt-2 text-2xl font-semibold text-violet-200">{hoveredImageText}</p>
                </div>

                <img
                    src="/home/light.svg"
                    className={classNames(
                        'mx-auto max-h-[89px] pt-[20px] pb-4 md:pt-0 md:pb-[17px]',
                        isLightRefInView ? 'animate-slideFadeIn' : 'opacity-0'
                    )}
                    alt=""
                    aria-hidden={true}
                    ref={lightRef}
                />
                <div
                    ref={whatIsSourcegraphRef}
                    className={classNames(
                        'mx-auto max-w-[758px] transition-opacity duration-300',
                        isWhatIsSourcegraphInView ? 'opacity-100 delay-[100ms]' : 'opacity-10'
                    )}
                >
                    <Heading size="h6" className="text-center text-white">
                        What is sourcegraph?
                    </Heading>

                    <Heading size="h2" className="mx-auto mt-4 max-w-[728px] text-center !text-4xl text-white">
                        Sourcegraph is a code AI platform that makes it easy to read, write, and fix code–even in big,
                        complex code bases.
                    </Heading>
                </div>

                {isMobile ? (
                    <img
                        loading="lazy"
                        alt="Home Illustartion"
                        src="/home/glow.svg"
                        className={classNames(
                            'py-6 transition-opacity duration-300 md:hidden',
                            isCodyGraphInView ? 'opacity-100 delay-[100ms]' : 'opacity-10'
                        )}
                        ref={codyGraph}
                    />
                ) : (
                    <img
                        loading="lazy"
                        alt="Home Illustartion"
                        src="/home/glow.svg"
                        className={classNames(
                            'mx-auto hidden h-[465px] pt-2 pb-[73px] transition-opacity duration-300 md:block md:w-[859px] lg:w-[1005px]',
                            isCodyGraphInView ? 'opacity-100 delay-[100ms]' : 'opacity-10'
                        )}
                        ref={codyGraph}
                    />
                )}

                <div className="flex flex-col items-center">
                    <div className="sg-bg-gradient-cip-cody mb-6 grid grid-cols-1 gap-x-[30px] overflow-hidden rounded-lg border border-white border-opacity-[0.04] md:grid-cols-2">
                        <div className="flex flex-col items-start gap-6 px-6 py-8 md:gap-4 md:py-[84.5px] md:pl-20">
                            <Heading size="h4" className="text-5xl text-white md:text-[52px]">
                                Cody <Badge size="small" text="BETA" color="light-gray" />
                            </Heading>
                            <p className="mb-0 text-[18px] text-gray-200">
                                Write, fix, and maintain code with the most powerful & accurate AI coding assistant.
                                Cody uses the code graph to understand your entire codebase and help developers focus on
                                writing and shipping code.
                            </p>
                            <Link
                                href="/cody"
                                className="hover:sg-bg-hover-link-button flex items-center justify-center rounded-[5px] bg-white py-2 px-6 font-semibold text-violet-500"
                                onClick={() => handleOnClick(EventName.CODY_LEARN_MORE_CTA)}
                            >
                                Learn more about Cody (beta)
                            </Link>
                        </div>
                        <div className="mb-8 -mr-[64px] md:mb-0 md:mr-0">
                            <img src="/home/cody-graph.svg" alt="cody graph" />
                        </div>
                    </div>
                    <div className="sg-bg-gradient-cip-cody relative grid h-full w-full grid-cols-1 gap-x-[30px] overflow-hidden rounded-lg border border-white border-opacity-[0.04] md:flex md:h-[384px] md:justify-between">
                        <div className="flex shrink flex-col items-start gap-6 px-6 py-0 pt-8 md:w-[614px] md:gap-4 md:py-[84.5px] md:pl-20">
                            <Heading size="h4" className="text-5xl text-white md:text-[52px]">
                                Code Search
                            </Heading>
                            <p className="mb-0 text-[18px] text-gray-200">
                                Search your entire codebase—every code host and repository, at any scale—in a single
                                place. Code Search makes it easy for developers to onboard to new codebases, understand
                                code faster, and find & fix security risks.
                            </p>
                            <div className="flex flex-col gap-x-4 gap-y-4 md:flex-row md:flex-wrap lg:gap-y-8">
                                <Link
                                    href="/code-search"
                                    className="hover:sg-bg-hover-link-button flex items-center justify-center rounded-[5px] bg-white py-2 px-6 font-semibold text-violet-500"
                                    onClick={() => handleOnClick(EventName.SEARCH_LEARN_MORE_CTA)}
                                >
                                    Learn more about Code Search
                                </Link>
                                <Link
                                    href="/contact/request-info"
                                    className="flex items-center justify-center gap-[10px] pb-4 font-semibold text-white hover:text-violet-300 hover:underline lg:pb-0"
                                    onClick={() => handleOnClick(EventName.SEARCH_LEARN_MORE_CTA)}
                                >
                                    Learn more about Enterprise <ChevronRightIcon />
                                </Link>
                            </div>
                        </div>
                        <div className="-mr-12 md:mr-0 md:flex md:items-center md:justify-end">
                            <img
                                src="/home/code-graph.svg"
                                className="-mt-4 h-[384px] w-[608px] md:mt-0 md:h-[496px]"
                                alt=""
                                aria-hidden={true}
                            />
                        </div>
                    </div>
                </div>
            </ContentSection>
        </>
    )
}

const AvailabilityIcon: React.FC<AvailabilityIconProps> = ({
    href,
    src,
    alt,
    onHover,
    onMouseLeave,
    eventName,
    type,
    className,
}) => {
    const handleOnClick = (): void => {
        const eventArguments = {
            type,
            source: 'about-home',
            description: '',
        }
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        getEventLogger().log(eventName, eventArguments, eventArguments)
    }

    return (
        <Link
            href={href}
            target="_blank"
            onClick={handleOnClick}
            className={classNames('group relative', className)}
            onMouseEnter={onHover}
            onMouseLeave={onMouseLeave}
        >
            <img src={src} alt={alt} />
        </Link>
    )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    try {
        const tweetPromises = HOME_PAGE_TWEET_IDS.map(tweetId => getTweet(tweetId))
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

export default Home
