import { FunctionComponent } from 'react'

import classNames from 'classnames'
import Link from 'next/link'

import { Badge, ContentSection, Heading, HubSpotForm, Layout, PlayButton } from '../components'
import { DemoVideo } from '../components/DemoVideo'
import { TwitterEmbed } from '../components/EmbedTweet'

import styles from '../styles/CustomHubspotForm.module.scss'

const CodyPage: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Cody',
            description: 'Read, write, and understand code 10x faster with AI',
            image: 'https://about.sourcegraph.com/cody/cody-og.png',
        }}
        headerColorTheme="purple"
        childrenClassName="sg-bg-gradient-cody"
        displayChildrenUnderNav={true}
    >
        {/* Hero Section */}
        <ContentSection parentClassName="!py-0" className="text-center">
            <div className="mx-auto max-w-[637px]">
                <div className="center flex items-center justify-center gap-x-2">
                    <Heading size="h6" className="text-white">
                        CODY
                    </Heading>
                    <Badge size="small" text="Beta" color="dark-blue" />
                </div>
                <Heading size="h1" className="mt-2 text-white">
                    Read, write, and understand code 10x faster with AI
                </Heading>
                <Heading size="h4" className="mt-6 !font-normal text-white">
                    Cody answers code questions and writes code for you by reading your entire codebase and the code
                    graph.
                </Heading>
                <Link
                    href="https://sourcegraph.com/sign-up"
                    title="Cody access form"
                    className="btn btn-inverted-primary mt-8"
                    target="_blank"
                >
                    Get Cody for free
                </Link>
            </div>
            <div className="mx-auto mt-6 w-full md:mt-0">
                <DemoVideo
                    video="cody-demo-202305"
                    splash={true}
                    className="mx-auto mt-8 w-full max-w-[804px] rounded-lg bg-violet-750 drop-shadow-2xl"
                    splashClassName="rounded-lg"
                    playButton={<PlayButton title="Watch Cody write & fix code" time="4 min" ctaText="Watch now" />}
                />
            </div>
            <div className="mt-9 flex flex-wrap justify-center gap-y-4 gap-x-8 text-lg text-white md:mt-[58px] md:gap-x-[72px] md:text-2xl">
                <p className="mb-0">Generate unit tests</p>
                <p className="mb-0">Explain code</p>
                <p className="mb-0">Find code smells</p>
                <p className="mb-0">Generate code</p>
            </div>
        </ContentSection>

        <ContentSection parentClassName="!pb-0" className="mx-auto flex flex-col text-center md:!mt-2 md:flex-row">
            <div className="border-t border-gray-500 pt-6 text-left md:pt-12">
                <Heading size="h2" className="text-white">
                    Codebase-aware chat
                </Heading>
                <p className="mt-4 text-lg  text-gray-200">
                    Answer questions about both general programming topics and your specific codebase from right inside
                    your editor. Cody knows about your local code and can learn from the code graph and documentation
                    inside your organization.
                </p>
            </div>

            <img src="/cody/cody.svg" alt="Own Illustration" className="w-full md:max-w-[50%]" />
        </ContentSection>

        <ContentSection parentClassName="text-center !pb-0">
            <Heading size="h2" className="text-white">
                See what devs are building with Cody
            </Heading>

            <div className="mt-6 grid w-full grid-cols-1 gap-6 md:mt-16 md:grid-cols-2">
                <TwitterEmbed tweetId="1645903813302185984" className="flex max-w-[100%] justify-center" />
                <div className="flex flex-col">
                    <TwitterEmbed tweetId="1647765520673046529?s=20" className="flex max-w-[100%] justify-center" />
                    <TwitterEmbed tweetId="1645490165857542145" className="flex max-w-[100%] justify-center " />
                </div>
            </div>
        </ContentSection>

        <ContentSection
            parentClassName="!py-0"
            className="mx-auto flex flex-col justify-center gap-x-8  py-16 md:flex-row md:py-[112px]"
        >
            <div className="max-w-[428px]">
                <Heading size="h2" className="!text-4xl text-white">
                    Cody for personal use
                </Heading>
                <p className="mt-6 text-lg text-gray-200">
                    Cody is free for personal use in Sourcegraph.com and in the VS Code extension. Create a free
                    Sourcegraph.com account to get started.
                </p>
                <Link
                    href="https://sourcegraph.com/sign-up"
                    title="Cody access form"
                    className="btn btn-inverted-primary mt-1"
                    target="_blank"
                >
                    Get Cody for free
                </Link>
            </div>
            <div
                id="cody-for-work"
                className="mt-8 flex max-w-[554px] flex-col justify-center border-t border-gray-500 pt-8 md:mt-0 md:border-l md:border-t-0 md:pl-8 md:pt-0"
            >
                <Heading size="h2" className="!text-4xl text-white">
                    Cody for work
                </Heading>
                <p className="mt-6 text-lg text-gray-200">
                    Cody for work provides context-aware answers based on your own private codebase. Contact us with the
                    form below to learn more.
                </p>
                <div className={classNames('mx-auto mt-4 md:min-w-[400px] xl:min-w-[554px]', styles.form)}>
                    <HubSpotForm
                        formId="05e46684-9fbc-4c4d-b010-f661f247c4c6"
                        inlineMessage="Thank you! We'll get back to you soon"
                    />
                </div>
            </div>
        </ContentSection>
    </Layout>
)

export default CodyPage
