import { FunctionComponent } from 'react'

import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import Link from 'next/link'

import { Badge, ContentSection, Heading, Layout } from '../components'
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
                <Link
                    href="https://sourcegraph.typeform.com/cody-signup"
                    title="Private beta access request form"
                    className="btn btn-inverted-primary mt-8"
                    target="_blank"
                >
                    Sign up for access
                </Link>
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

        <ContentSection parentClassName="!pb-0" className="mx-auto mt-16 max-w-[768px] text-center md:!mt-2">
            <Heading size="h2" className="text-white">
                Codebase-aware chat
            </Heading>
            <p className="mt-4 text-lg  text-gray-200">
                Answer questions about both general programming topics and your specific codebase from right inside your
                editor. Cody knows about your local code and can learn from the code graph and documentation inside your
                organization.
            </p>
            <img src="/cody/cody.svg" alt="Own Illustration" className="w-full max-w-[630px]" />
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
            className="mx-auto flex flex-col items-center justify-center gap-x-8  py-16 md:flex-row md:py-[112px]"
        >
            <div className="max-w-[529px]">
                <Heading size="h2" className="!text-4xl text-white">
                    Cody is experimental
                </Heading>
                <p className="mt-6 text-lg text-gray-200">
                    Often magical, often frustratingly wrong...but getting better quickly.
                </p>
            </div>
            <div className="flex max-w-[452px] flex-col justify-center border-t border-gray-500 pt-8 md:h-[232px] md:border-l md:border-t-0 md:pl-8 md:pt-0">
                <Heading size="h5" className="text-white">
                    Interested in deploying Cody for your team? Let us know.
                </Heading>
                <Link
                    href="https://sourcegraph.typeform.com/cody-signup"
                    title="Cody sign up form"
                    className="btn mt-8 bg-transparent pl-0 text-white"
                    target="_blank"
                >
                    Sign up for Cody access
                    <ChevronRightIcon className="!mb-0 ml-[10px] inline" />
                </Link>
            </div>
        </ContentSection>
    </Layout>
)

export default CodyPage
