import { FunctionComponent } from 'react'

import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import Link from 'next/link'

import { Badge, ContentSection, Heading, Layout, CallToAction } from '../components'

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
        <ContentSection parentClassName="!py-0" className="grid grid-cols-1 md:grid-cols-2">
            <div className="max-w-[637px]">
                <div className="flex gap-x-2">
                    <Heading size="h6" className="text-white">
                        CODY
                    </Heading>
                    <Badge size="small" text="Private beta" color="dark-blue" />
                </div>
                <Heading size="h1" className="mt-2 text-white">
                    Read, write, and understand code 10x faster with AI
                </Heading>
                <Heading size="h3" className="mt-6 text-white">
                    Your {'{intelligent, code-aware, enterprise-ready}'} programmer’s assistant.
                </Heading>
                <Link
                    href="https://sourcegraph.typeform.com/to/pIXTgwrd"
                    title="Private beta access request form"
                    className="btn btn-inverted-primary mt-8"
                    target="_blank"
                >
                    Request access
                </Link>
            </div>
            <div className="hidden md:block">
                <img src="/cody/cody.svg" alt="Own Illustration" className="w-full max-w-[630px]" />
            </div>
        </ContentSection>

        <ContentSection parentClassName="!py-0" className="mx-auto mt-16 max-w-[768px] text-center md:!mt-2">
            <Heading size="h2" className="text-white">
                Codebase-aware chat
            </Heading>
            <p className="mt-4 text-lg  text-gray-200">
                Answer questions about both general programming topics and your specific codebase from right inside your
                editor. Cody knows about your local code and can learn from all the code and documentation inside your
                organization.
            </p>
        </ContentSection>

        <div className="mt-16 px-sm">
            <video
                className="mx-auto max-h-[446px] w-full max-w-[800px] rounded-lg bg-gray-300"
                autoPlay={true}
                muted={true}
                loop={true}
                playsInline={true}
                controls={false}
                data-cookieconsent="ignore"
            >
                <source type="video/webm" src="/animations/code-intel.webm" data-cookieconsent="ignore" />
                <source type="video/mp4" src="/animations/code-intel.mp4" data-cookieconsent="ignore" />
            </video>
        </div>

        <ContentSection
            parentClassName="!py-0"
            className="mx-auto flex flex-col items-center justify-center gap-x-8 py-[112px] md:flex-row"
        >
            <div className="max-w-[529px]">
                <Heading size="h2" className="!text-4xl text-white">
                    Cody is now in Private Beta
                </Heading>
                <p className="mt-6 text-lg text-gray-200">
                    Cody works with Sourcegraph’s precise code intelligence and code search to provide even better
                    accurate results. Cody is now in Private Beta for select users.
                </p>
            </div>
            <div className="flex max-w-[452px] flex-col justify-center border-t border-gray-500 pt-8 md:h-[232px] md:border-l md:border-t-0 md:pl-8 md:pt-0">
                <Heading size="h5" className="text-white">
                    Interested in deploying Cody for your team? Let us know.
                </Heading>
                <Link
                    href="https://sourcegraph.typeform.com/to/pIXTgwrd"
                    title="Private beta access request form"
                    className="btn mt-8 bg-transparent pl-0 text-white"
                    target="_blank"
                >
                    Request Private Beta access
                    <ChevronRightIcon className="mb-1 !mb-0 ml-[10px] inline" />
                </Link>
            </div>
        </ContentSection>

        <CallToAction
            title="Try the Sourcegraph app on your code"
            description="Experience the power of Sourcegraph for free on your local machine."
            buttonText="Download the app"
            className="!mt-0 pb-[112px]"
            titleClassName="text-4xl leading-[43px] font-semibold"
            buttonClassName="!mt-4"
        />
    </Layout>
)

export default CodyPage
