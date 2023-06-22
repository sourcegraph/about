import { FunctionComponent } from 'react'

import Link from 'next/link'

import { Layout, Heading, Badge } from '../components'
import { DownloadLink } from '../components/DownloadLink'

const AppPage: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Introducing the Cody app',
            description:
                'The app is a free, lightweight, native desktop version of Sourcegraph that connects your local code to our AI coding assistant, Cody.',
            image: 'https://about.sourcegraph.com/app/app-og.png',
        }}
        headerColorTheme="purple"
        childrenClassName="sg-bg-gradient-mobile md:sg-bg-gradient-app-large text-white px-sm"
        displayChildrenUnderNav={true}
    >
        <div className="mx-auto flex max-w-[637px] flex-col items-center justify-center pt-lg text-center">
            <div className="flex gap-x-2">
                <Heading as="h1" size="h6">
                    CODY APP
                </Heading>
                <Badge size="small" text="Experimental" color="dark-blue" />
            </div>

            <Heading as="h2" size="h1" className="mt-2 md:text-8xl">
                <p>Introducing</p>
                <p>the Cody app</p>
            </Heading>

            <p className="mt-6 mb-0 text-lg text-gray-200">
                The app is a free, lightweight, native desktop version of Sourcegraph that connects your local code to
                our AI coding assistant, Cody.
            </p>

            <div className="mt-10">
                <DownloadSection />
            </div>
        </div>

        <div className="mb-8 flex flex-col items-center text-center">
            <p className="my-8 max-w-screen-md text-lg text-gray-200">
                This is an early version of the Cody app, and we’ll be cutting new releases regularly over the next few
                weeks. Visit our{' '}
                <Link href="https://docs.sourcegraph.com/app" title="docs" className="text-gray-300 underline">
                    docs
                </Link>{' '}
                for details on what to expect and share your feedback with us on{' '}
                <Link
                    href="https://github.com/sourcegraph/app/issues"
                    title="Github issues"
                    className="text-gray-300 underline"
                >
                    GitHub
                </Link>{' '}
                or in{' '}
                <Link
                    href="https://discord.gg/sourcegraph-969688426372825169"
                    title="Discord"
                    className="text-gray-300 underline"
                >
                    Discord
                </Link>
                .
            </p>
        </div>
    </Layout>
)

const DownloadSection: FunctionComponent = () => (
    <>
        <DownloadLink
            className="btn btn-inverted-primary w-fit px-4 font-normal shadow-btn"
            title="Download for Mac"
            downloadName="app-download-mac-dmg"
        >
            Download for Mac
            <Badge className="ml-2" size="small" text="Experimental" color="blurple" />
        </DownloadLink>
        <div className="mt-3 flex flex-row justify-center">
            <p>Apple silicon required. </p>
            <Link
                href="https://docs.sourcegraph.com/app"
                title="Other platforms"
                className="ml-2 text-sm leading-[21px] text-gray-300 underline"
                target="_blank"
            >
                Other options.
            </Link>
        </div>
        <p className="mt-3 text-center text-sm leading-[21px] text-gray-300">
            By using Sourcegraph, you agree to the{' '}
            <Link href="/terms/privacy" title="Privacy polic" className="text-gray-300 underline">
                privacy policy
            </Link>{' '}
            and{' '}
            <Link href="/terms" title="Terms" className="text-gray-300 underline">
                terms
            </Link>
            .
        </p>
    </>
)
export default AppPage
