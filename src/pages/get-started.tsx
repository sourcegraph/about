import { FunctionComponent } from 'react'

import classNames from 'classnames'
import CheckCircleIcon from 'mdi-react/CheckIcon'
import LaunchIcon from 'mdi-react/LaunchIcon'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { ContentSection, HubSpotForm, Layout, Tabs } from '../components'

import styles from '../styles/getStarted.module.scss'

const GetStartedPage: FunctionComponent = () => {
    const router = useRouter()
    const activeTab = 'enterprise'

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
                    className="btn-link flex items-center gap-1 text-lg"
                >
                    Build from source <LaunchIcon className="h-[12px] w-[12px] text-gray-700" />
                </Link>
                <Link
                    target="_blank"
                    href="https://sourcegraph.com"
                    className="btn-link flex items-center gap-1 text-lg"
                >
                    Search public code <LaunchIcon className="h-[12px] w-[12px] text-gray-700" />
                </Link>
            </div>
        </div>
    )

    return (
        <Layout
            meta={{
                title: 'Get started with Sourcegraph',
                description: 'Request a trial for Sourcegraph Enterprise. Self-host or run in the cloud.',
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
                            key: 'enterprise',
                            title: (
                                <>
                                    <div className="hidden items-center md:flex">
                                        <div className="flex flex-col gap-y-2">
                                            <h4>Request an enterprise trial</h4>
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

const EnterPriseTrial: FunctionComponent = () => (
    <div className="mt-8 md:mt-0">
        <h1 className="text-gray-700">Request an Enterprise trial</h1>
        <div className="mt-4 flex flex-col justify-between gap-x-4 gap-y-[10px] md:flex-row md:items-end">
            <p className="mb-0 max-w-[590px] text-lg text-gray-500">
                Sourcegraph Enterprise is designed for teams and deployment at scale. Start a trial in a cloud
                environment or on your own infrastructure.
            </p>
            <p className="mb-0 min-w-fit text-lg">
                Learn more:
                <Link
                    href="https://sourcegraph.com/docs/admin/deploy"
                    title="Cloud"
                    className="btn-link border-r-1 border-r-gray-400 px-2 text-xl font-semibold"
                >
                    Cloud
                </Link>
                <Link
                    href="https://sourcegraph.com/docs/admin/deploy/docker-single-container"
                    title="Server"
                    className="btn-link ml-2 text-xl font-semibold"
                >
                    Server
                </Link>
            </p>
        </div>

        <div className="enterprise-form-bg mt-6 rounded-2xl  py-12 px-6">
            <div className={classNames('mx-auto max-w-[588px] rounded-lg bg-white p-4', styles.container)}>
                <HubSpotForm
                    masterFormName="contactMulti"
                    formId="e090296f-84f5-4bcb-9093-a533336841b4"
                    chiliPiper={false}
                    bookIt={true}
                />
            </div>
        </div>
    </div>
)

export default GetStartedPage
