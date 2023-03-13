import { FunctionComponent } from 'react'

import AppleIcon from 'mdi-react/AppleIcon'
import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import LinuxIcon from 'mdi-react/LinuxIcon'
import RocketLaunchIcon from 'mdi-react/RocketLaunchIcon'
import SendIcon from 'mdi-react/SendIcon'
import SourceBranchIcon from 'mdi-react/SourceBranchIcon'
import Link from 'next/link'

import { Layout, Heading, Tabs, Badge, ThreeUpText } from '../components'
import { DemoVideo } from '../components/AppVideo'
import { CodeSnippet } from '../components/CodeSnippet'

const AppPage: FunctionComponent = () => {
    const threeUpTextItems = [
        {
            icon: (
                <SourceBranchIcon
                    className="mb-6 rounded bg-violet-200 p-2 text-violet-400 mx-0"
                    size={35}
                />
            ),
            subtitle: <span className="flex !text-4xl text-white text-left">Connected</span>,
            description: (
                <p className="text-lg text-left text-gray-200">
                    Search all your code, all in one place. Connect to your local and remote Git-based repositories, so
                    you don't have to jump between your IDE and code host for search.
                </p>
            ),
        },
        {
            icon: (
                <RocketLaunchIcon
                    className="mb-6 rounded bg-violet-200 p-2 text-violet-400 mx-0"
                    size={35}
                />
            ),
            subtitle: <span className="flex !text-4xl text-white text-left">Fast</span>,
            description: (
                <p className="text-lg text-left text-gray-200">
                    Navigate thousands of repositories in seconds. Find code while staying in flow, so you can focus
                    less on finding things and more on writing code.
                </p>
            ),
        },
        {
            icon: <SendIcon className="mb-6 rounded bg-violet-200 p-2 text-violet-400 mx-0" size={35} />,
            subtitle: <span className="flex !text-4xl text-white text-left">Lightweight</span>,
            description: (
                <p className="text-lg text-left text-gray-200">
                    Install in minutes. The app is a lightweight, single-binary version of Sourcegraph tailored for
                    developers to use on their local machine.
                </p>
            ),
        },
    ]

    return (
        <Layout
            meta={{
                title: 'Find, fix, and flow in minutes',
                description:
                    'The app is a lightweight, single-binary version of Sourcegraph, designed for developers to experience the power of Sourcegraph for free on their local machine.',
                image: '/app/app-og.png'
            }}
            headerColorTheme="purple"
            childrenClassName="sg-bg-gradient-app-large text-white px-sm"
            displayChildrenUnderNav={true}
        >
            <div className="mx-auto flex max-w-[637px] flex-col items-center justify-center pt-lg text-center">
                <div className="flex gap-x-2">
                    <Heading as="h1" size="h6">
                        SOURCEGRAPH APP
                    </Heading>
                    <Badge size="small" text="Experimental" color="dark-blue" />
                </div>

                <Heading as="h2" size="h1" className="mt-2 md:text-8xl">
                    Find, fix, and flow in minutes
                </Heading>

                <p className="mt-6 mb-0 text-lg text-gray-200">
                    The app is a lightweight, single-binary version of Sourcegraph, designed for developers to
                    experience the power of Sourcegraph for free on their local machine.
                </p>

                <PlatformsInstallSnippet />
            </div>

            <ThreeUpText items={threeUpTextItems} className="mx-auto mt-20 mb-28 max-w-screen-xl md:px-sm" />

            <div className="mb-8 flex flex-col items-center text-center">
                <Heading size="h2">Run Sourcegraph for free across all your code</Heading>
                <p className="my-8 max-w-screen-md text-lg text-gray-200">
                    The app is the easiest way to run Sourcegraph on your local machine for free, complete with code search
                    and navigation to complement your IDE and local environment. Sync to your GitHub or GitLab account
                    to search and navigate all your code — local and remote — from a single, unified interface.
                </p>

                <DemoVideo
                    video="app-demo-202303"
                    splash={true}
                    className="mt-8 w-full max-w-[804px] rounded-lg bg-violet-750 drop-shadow-2xl"
                    splashClassName="rounded-lg"
                />
            </div>

            <div className="m-auto mt-40 flex max-w-screen-xl flex-col items-center gap-y-20 md:flex-row">
                <Heading className="flex-1 text-center md:text-left" size="h2">
                    Run Batch Changes and Code Insights for your personal code
                </Heading>

                <img src="/app/batch-changes.svg" alt="Batch changes" className="md:max-w-[50%]" />
            </div>

            <div className="mt-[115px] mb-[112px] flex flex-col items-center gap-y-4 text-center">
                <Heading size="h2">Try Sourcegraph on your code</Heading>
                <p className="mb-0 text-lg font-normal text-gray-200">
                    Experience the power of Sourcegraph for free on your local machine.
                </p>

                <Link href="#install-script" className="btn btn-inverted-primary" title="Download the app">
                    Download the app
                </Link>
            </div>
        </Layout>
    )
}

const PlatformsInstallSnippet: FunctionComponent = () => (
    <div className="mt-12 w-full rounded-lg bg-white text-gray-500 drop-shadow-xl sm:max-w-[453px]" id="install-script">
        <Tabs
            navClassName="md:flex justify-between text-center"
            contentClassName="pt-4 pb-4"
            tabBarExtraContent={
                <Link
                    href="https://docs.sourcegraph.com/app"
                    target="_blank"
                    title="Sourcegraph App"
                    className="flex cursor-pointer flex-row-reverse items-center justify-center px-4 py-2 text-center text-sm leading-7 text-gray-500"
                >
                    <ChevronRightIcon />
                    Other download options
                </Link>
            }
            tabs={[
                {
                    key: 'macos',
                    title: (
                        <div className="flex items-center justify-center gap-x-2.5 text-sm font-normal leading-7">
                            <AppleIcon /> MacOS
                        </div>
                    ),
                    content: (
                        <div className="mx-0.5 flex flex-col px-4">
                            <ol className="m-0 text-left">
                                <li className="ml-2.5 text-sm leading-7">
                                    <div className="self-start text-sm leading-7">
                                        Install via{' '}
                                        <Link
                                            href="https://brew.sh"
                                            title="Homebrew"
                                            className="text-gray-500 underline"
                                            target="_blank"
                                        >
                                            Homebrew
                                        </Link>
                                        :
                                    </div>

                                    <CodeSnippet
                                        code="brew install sourcegraph/sourcegraph-app/sourcegraph"
                                        className="-ml-2.5"
                                    />
                                </li>
                                <li className="ml-2.5 text-sm leading-7">Run <code className="bg-gray-200 rounded-md p-1 text-xs text-gray-700">sourcegraph</code> in your local directory.</li>
                                <li className="ml-2.5 text-sm leading-7">
                                    The app will detect code in the directory you run it in.
                                </li>
                                <li className="ml-2.5 text-sm leading-7">
                                    Your browser will automatically open localhost:3080.
                                </li>
                            </ol>
                        </div>
                    ),
                },
                {
                    key: 'linux',
                    title: (
                        <div className="flex items-center justify-center gap-x-2.5 text-sm font-normal leading-7">
                            <LinuxIcon /> Linux
                        </div>
                    ),
                    content: (
                        <div className="mx-0.5 flex flex-col px-4">
                            <ol className="m-0 text-left">
                                <li className="ml-2.5 text-sm leading-7">
                                    <div className="self-start text-sm leading-7">
                                        Download the{' '}
                                        <Link
                                            href="https://storage.googleapis.com/sourcegraph-app-releases/2023.03.23+205301.ca3646/sourcegraph_2023.03.23+205301.ca3646_linux_amd64.deb"
                                            title="Homebrew"
                                            className="text-gray-500 underline"
                                        >
                                            debian package
                                        </Link>{' '}
                                        and install it:
                                    </div>

                                    <CodeSnippet code="dpkg -i <file.deb>" className="-ml-2.5" />
                                </li>
                                <li className="ml-2.5 text-sm leading-7">Run <code className="bg-gray-200 rounded-md p-1 text-xs text-gray-700">sourcegraph</code> in your local directory.</li>
                                <li className="ml-2.5 text-sm leading-7">
                                    The app will detect code in the directory you run it in.
                                </li>
                                <li className="ml-2.5 text-sm leading-7">
                                    Your browser will automatically open localhost:3080.
                                </li>
                            </ol>
                        </div>
                    ),
                },
            ]}
        />
    </div>
)

export default AppPage
