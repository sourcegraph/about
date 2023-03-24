import { FunctionComponent } from 'react'

import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import Link from 'next/link'

import { Badge, ContentSection, Heading, Layout } from '../components'
import { DemoVideo } from '../components/CodyVideo'

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
                    Request access
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

        <ContentSection
            parentClassName="!py-0"
            className="mx-auto flex flex-col items-center justify-center gap-x-8 py-[112px] md:flex-row"
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
                    title="Private beta access request form"
                    className="btn mt-8 bg-transparent pl-0 text-white"
                    target="_blank"
                >
                    Join the waitlist
                    <ChevronRightIcon className="mb-1 !mb-0 ml-[10px] inline" />
                </Link>
            </div>
        </ContentSection>
    </Layout>
)

export default CodyPage
