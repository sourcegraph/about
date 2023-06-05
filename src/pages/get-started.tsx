import { FunctionComponent } from 'react'

import classNames from 'classnames'
import AppleIcon from 'mdi-react/AppleIcon'
import CheckCircleIcon from 'mdi-react/CheckIcon'
import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import LaunchIcon from 'mdi-react/LaunchIcon'
import MicrosoftWindowsIcon from 'mdi-react/MicrosoftWindowsIcon'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Badge, ContentSection, Heading, HubSpotForm, Layout, Tabs } from '../components'
import { DownloadLink } from '../components/DownloadLink'

import styles from '../styles/getStarted.module.scss'

const GetStartedPage: FunctionComponent = () => {
    const router = useRouter()
    const activeTab = (router.query.t as string) || 'app'

    const handleTabChange = (active: string): void => {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        router.push(`?t=${active}`)
    }

    const tabExtra = (
        <div className="flex w-full flex-col gap-2 !text-left">
            <p className="m-0 text-lg">You can also:</p>
            <div className="flex gap-2 md:flex-col">
                <Link
                    target="_blank"
                    href="https://github.com/sourcegraph/sourcegraph.git"
                    className="flex items-center gap-1 text-lg text-violet-500"
                >
                    Build from source <LaunchIcon className="h-[12px] w-[12px] text-gray-700" />
                </Link>
                <Link
                    target="_blank"
                    href="https://sourcegraph.com"
                    className="flex items-center gap-1 text-lg text-violet-500"
                >
                    Search public code <LaunchIcon className="h-[12px] w-[12px] text-gray-700" />
                </Link>
            </div>
        </div>
    )

    return (
        <Layout
            meta={{
                title: 'Install the Cody app',
                description: 'Connect your code with Cody in minutes.',
            }}
            headerColorTheme="white"
        >
            <ContentSection>
                <Tabs
                    activeTabKey={activeTab}
                    tabsWrapperClassName="md:flex md:gap-8"
                    navClassName="flex sm:flex-row md:flex-col md:!border-none md:gap-6 md:!justify-start"
                    contentClassName="!py-0"
                    tabs={[
                        {
                            key: 'app',
                            title: (
                                <>
                                    <div className="hidden items-center md:flex">
                                        <div className="flex-col gap-y-2">
                                            <Heading size="h4">
                                                Install the app{' '}
                                                <Badge text="Experimental" size="small" color="blurple" />
                                            </Heading>
                                            <p
                                                className={classNames(
                                                    'm-0 text-base font-normal !text-gray-500',
                                                    activeTab === 'app' && '!text-gray-200'
                                                )}
                                            >
                                                Connect your code with Cody in minutes.
                                            </p>
                                        </div>
                                        <CheckCircleIcon
                                            className={classNames(
                                                'h-[17px] rounded-full bg-white p-[3px]  text-black',
                                                activeTab !== 'app' && 'opacity-0'
                                            )}
                                        />
                                    </div>

                                    <div className="mb-2 flex gap-x-2 font-normal md:hidden">
                                        Cody App <Badge text="Beta" size="small" color="blurple" className="" />
                                    </div>
                                </>
                            ),
                            content: <InterstitialAppContent />,
                            className: classNames(
                                'md:!p-4 md:!border  md:rounded-[5px] md:max-w-[364px] md:!text-left',
                                activeTab === 'app'
                                    ? 'md:sg-bg-linear-space md:text-white md:shadow-xl'
                                    : 'md:!border-gray-300'
                            ),
                        },
                        {
                            key: 'enterprise',
                            title: (
                                <>
                                    <div className="hidden items-center md:flex">
                                        <div className="flex flex-col gap-y-2">
                                            <Heading size="h4">Request an enterprise trial</Heading>
                                            <p
                                                className={classNames(
                                                    'm-0 text-base font-normal !text-gray-500',
                                                    activeTab === 'enterprise' && '!text-gray-200'
                                                )}
                                            >
                                                Share Sourcegraph with your team by requesting a cloud or self-hosted
                                                trial.
                                            </p>
                                        </div>
                                        <CheckCircleIcon
                                            className={classNames(
                                                'h-[17px] rounded-full bg-white p-[3px]  text-black',
                                                activeTab !== 'enterprise' && 'opacity-0'
                                            )}
                                        />
                                    </div>

                                    <div className="mb-2 flex gap-x-2 font-normal md:hidden">
                                        Sourcegraph Enterprise
                                    </div>
                                </>
                            ),
                            content: <EnterPriseTrial />,
                            className: classNames(
                                'md:!p-4 md:!border md:rounded-[5px] md:max-w-[364px] md:!text-left',
                                activeTab === 'enterprise'
                                    ? 'md:sg-bg-linear-space md:text-white md:shadow-xl'
                                    : 'md:!border-gray-300'
                            ),
                        },
                    ]}
                    onTabChange={active => handleTabChange(active)}
                    tabBarExtraContent={<div className="hidden w-full md:flex">{tabExtra}</div>}
                />
                <div className="md:hidden">{tabExtra}</div>
            </ContentSection>
        </Layout>
    )
}

const InterstitialAppContent: FunctionComponent = () => (
    <div className="mt-8 md:mt-0">
        <Heading size="h1" className="text-4xl text-gray-700 md:text-[56px]">
            Install the Cody app
        </Heading>
        <div className="mt-4 flex flex-col justify-between gap-x-4 gap-y-[10px] md:flex-row md:items-end">
            <p className="mb-0 max-w-[590px] text-lg text-gray-500">
                Install the app to connect your code with Cody quickly and easily. Cody answers code questions and
                writes code for you by reading your entire codebase and the code graph.
            </p>
            <Link
                href="/app"
                title="Other download options"
                className="btn min-w-fit bg-transparent p-0 text-violet-500"
            >
                Learn more about the app
                <ChevronRightIcon className="!mb-0 ml-[10px] inline" />
            </Link>
        </div>

        <div className="mt-6 rounded-2xl bg-gray-100 px-8 py-10">
            {/* Apple */}
            <div className="flex flex-row items-center gap-x-3">
                <AppleIcon />
                <Heading size="h4">macOS</Heading>
            </div>

            <DownloadLink
                className="btn btn-primary mt-6 w-fit px-4 font-normal"
                title="Download for Mac"
                downloadName="app-download-mac-dmg"
            >
                Download for Mac <Badge text="Experimental" size="small" color="blurple" />
            </DownloadLink>

            {/* Windows */}
            <div className="mt-12 flex flex-row items-center gap-x-3">
                <MicrosoftWindowsIcon />
                <Heading size="h4">Windows</Heading>
            </div>

            <p className="mt-4 mb-0 text-base text-gray-500">
                <Link
                    href="https://sourcegraph.typeform.com/app-for-windows"
                    title="Privacy polic"
                    className="text-gray-500 underline"
                    target="_blank"
                >
                    Sign up to get notified
                </Link>{' '}
                when Windows support is ready.
            </p>

            <Link
                href="https://docs.sourcegraph.com/app"
                title="Other download options"
                className="btn mt-12 bg-transparent p-0 text-violet-500"
                target="_blank"
            >
                Other download options
                <ChevronRightIcon className="!mb-0 ml-[10px] inline" />
            </Link>
        </div>
        <p className="mt-6 mb-0 text-base text-gray-500">
            By using Sourcegraph, you agree to the{' '}
            <Link href="/terms/privacy" title="Privacy polic" className="text-gray-500 underline">
                privacy policy
            </Link>{' '}
            and{' '}
            <Link href="/terms" title="Terms" className="text-gray-500 underline">
                terms
            </Link>
            .
        </p>
    </div>
)

const EnterPriseTrial: FunctionComponent = () => (
    <div className="mt-8 md:mt-0">
        <Heading size="h1" className="text-4xl text-gray-700 md:text-[56px]">
            Request an Enterprise trial
        </Heading>
        <div className="mt-4 flex flex-col justify-between gap-x-4 gap-y-[10px] md:flex-row md:items-end">
            <p className="mb-0 max-w-[590px] text-lg text-gray-500">
                Sourcegraph Enterprise is designed for teams and deployment at scale. Start a trial in a cloud
                environment or on your own infrastructure.
            </p>
            <p className="mb-0 min-w-fit text-lg">
                Learn more:
                <Link
                    href="/cloud"
                    title="Cloud"
                    className="border-r-1 border-r-gray-400 px-2 text-xl font-semibold text-violet-500"
                >
                    Cloud
                </Link>
                <Link
                    href="https://docs.sourcegraph.com/admin/deploy"
                    title="Server"
                    className="ml-2 text-xl font-semibold text-violet-500"
                >
                    Server
                </Link>
            </p>
        </div>

        <div className="enterprise-form-bg mt-6 rounded-2xl  py-12 px-6">
            <div className={classNames('mx-auto max-w-[588px] rounded-lg bg-white p-4', styles.container)}>
                <HubSpotForm masterFormName="contactMulti" formId="e090296f-84f5-4bcb-9093-a533336841b4" />
            </div>
        </div>
    </div>
)

export default GetStartedPage
