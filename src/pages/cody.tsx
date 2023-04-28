import { FunctionComponent } from 'react'

import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import Link from 'next/link'

import { Badge, ContentSection, Heading, Layout, HubSpotForm } from '../components'
import { DemoVideo } from '../components/CodyVideo'
import { TwitterEmbed } from '../components/EmbedTweet'

const CodyPage: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Cody',
            description: 'Read, write, and understand code 10x faster with AI',
            image: '/cody/cody-og.png',
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
                    <Badge size="small" text="Experimental" color="dark-blue" />
                </div>
                <Heading size="h1" className="mt-2 text-white">
                    Read, write, and understand code 10x faster with AI
                </Heading>
                <Heading size="h4" className="mt-6 !font-normal text-white">
                    Cody answers code questions and writes code for you by reading your entire codebase and the code
                    graph.
                </Heading>
                <div className="">
                    <Link
                        href="https://docs.sourcegraph.com/cody"
                        title="Cody docs"
                        className="btn btn-inverted-primary mt-8 m-4"
                        target="_blank"
                    >
                        Get Cody for free
                    </Link>
                
                    <Link
                        href="#cody-for-work"
                        title="Cody for work access form"
                        className="btn btn-inverted-primary mt-8 m-4"
                        target=""
                    >
                        Get Cody for work
                    </Link>
                </div>
            </div>
            <div className="mx-auto mt-6 w-full md:mt-0">
                <DemoVideo
                    video="cody-demo-202303"
                    splash={false}
                    className="mx-auto mt-8 w-full max-w-[804px] rounded-lg bg-violet-750 drop-shadow-2xl"
                    splashClassName="rounded-lg"
                />
            </div>
        </ContentSection>

        <ContentSection parentClassName="!pb-0" className="mx-auto flex text-center flex-col md:flex-row md:!mt-2">
            <div className="border-t border-gray-500 pt-6 md:pt-12 text-left">
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
            className="mx-auto flex flex-col items-center justify-center gap-x-8 py-16 md:flex-row md:py-[112px]"
        >
            <div className="max-w-[529px]">
                <Heading size="h2" className="!text-4xl text-white">
                    Cody for personal use
                </Heading>
                <p className="mt-6 text-lg text-gray-200">
                    Cody is free for personal use in Sourcegraph.com and in the VS Code extension. See the docs to learn more.
                </p>
                <Link
                    href="https://docs.sourcegraph.com/cody"
                    title="Cody docs"
                    className="btn mt-6 bg-transparent pl-0 text-white"
                    target="_blank"
                >
                    Get started
                    <ChevronRightIcon className="!mb-0 ml-[10px] inline" />
                </Link>
            </div>
            <div className="flex max-w-[529px] flex-col justify-center border-t border-gray-500 pt-8 md:h-[232px] md:border-l md:border-t-0 md:pl-8 md:pt-0">
                <Heading size="h2" className="!text-4xl text-white">
                    Cody for work
                </Heading>
                <p className="mt-6 text-lg text-gray-200">
                    Cody for work provides context-aware answers based on your own private codebase.
                </p>
                <p className="mt-6 text-lg text-gray-200">
                    Contact us with the form below to learn more.
                </p>
            </div>
        </ContentSection>

        <ContentSection id="cody-for-work" parentClassName="!pb-0" className="mx-auto mt-16 max-w-[768px] md:!mt-2 pb-20">
            <Heading size="h2" className="text-white text-center mb-4">
                <div>Get Cody for work</div>
            </Heading>
            <div className='order-1 md:order-2 rounded-[10px] bg-gray-50 shadow-xl pt-6 pb-0 pl-6 pr-[1px] md:mt-16 md:pt-12 md:pb-[13px] md:pl-16 md:pr-[30px]'>
                <div className='mt-4 pb-10'>
                    <HubSpotForm masterFormName="contactMulti" formId="05e46684-9fbc-4c4d-b010-f661f247c4c6" />
                </div>
            </div>
        </ContentSection>
    </Layout>
)

export default CodyPage
