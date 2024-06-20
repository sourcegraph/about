import { FunctionComponent } from 'react'

import { Layout } from '../../components'
import AutoCodyHowItWorks from '../../components/AutoCody/AutoCodyHowItWorks'

const AutoCodyPage: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'AutoCody | Toward planning and more automation',
            description: 'AutoCody is our look at building a new generation of AI coding assistants.',
            image: 'https://sourcegraph.com/cody/cody-og.png',
        }}
        displayChildrenUnderNav={true}
        customFooterClassName="!bg-transparent"
        className="relative mb-40 w-full !overflow-hidden bg-gray-50"
    >
        <div className="mt-10 text-center">
            <VSCode />
        </div>

        <div className="mt-32">
            <Principles />
        </div>

        <div className="mx-auto mt-32 max-w-5xl pb-32">
            <AutoCodyHowItWorks />
        </div>
    </Layout>
)

export default AutoCodyPage

function VSCode(): JSX.Element {
    return (
        <div className="relative mx-auto max-w-5xl">
            <div className="absolute inset-x-0 inset-y-10 rounded-xl border border-gray-200 bg-gray-100" />

            <img
                alt="Visual Studio Code"
                src="/enterprise/logo-tiles/vscode-light.svg"
                className="absolute top-8 left-4 h-16 w-16 rotate-6 "
            />
            <img
                alt="GitHub"
                src="/enterprise/logo-tiles/github-dark.svg"
                className="absolute bottom-16 right-12 h-32 w-32 -rotate-12 "
            />
            <img
                alt="Bitbucket"
                src="/enterprise/logo-tiles/bitbucket-light.svg"
                className="absolute top-12 right-14 h-20 w-20 rotate-3 "
            />
            <img
                alt="IntelliJ"
                src="/enterprise/logo-tiles/intellij-light.svg"
                className="absolute bottom-52 left-10 h-16 w-16 rotate-[9deg] "
            />
            <img
                alt="Neovim"
                src="/enterprise/logo-tiles/neovim-light.svg"
                className="absolute top-32 left-20 h-12 w-12 -rotate-[15deg] "
            />
            <img
                alt="Golang"
                src="/enterprise/logo-tiles/go-light.svg"
                className="absolute bottom-1/2 -right-2 h-16 w-16 rotate-[8deg] "
            />
            {/* <img
                    alt="Gerrit"
                    src="/enterprise/logo-tiles/gerritt-light.svg"
                    className=" absolute top-12 right-8 h-[52px] w-[52px] -rotate-[5deg]"
                /> */}
            <img
                alt="GitLab"
                src="/enterprise/logo-tiles/gitlab-light.svg"
                className="absolute bottom-5 left-8 h-32 w-32 -rotate-[11deg] "
            />
            {/* <img
                    alt="Perforce"
                    src="/enterprise/logo-tiles/perforce-light.svg"
                    className="absolute top-44 left-4 h-[60px] w-[60px] -rotate-[7deg]"
                /> */}

            <div className="mx-auto max-w-3xl">
                <div className="vscode relative rounded-xl shadow-lg">
                    <div className="sg-bg-gradient-cody-light-mobile-hero !absolute top-[310px] z-[10] h-[650px] w-[1000px] !opacity-20 md:relative md:hidden md:bg-none" />

                    <div className="header flex items-center justify-between rounded-t-xl bg-gray-700 py-2 px-3">
                        <div className="flex space-x-1.5 opacity-50">
                            <div className="h-3 w-3 rounded-full bg-vermillion-300" />
                            <div className="h-3 w-3 rounded-full bg-lemon-300" />
                            <div className="h-3 w-3 rounded-full bg-green-400" />
                        </div>
                    </div>

                    {/* inner section */}
                    <main className="vscode-inner relative bg-[#1e1e1e] transition duration-300">
                        {/* activity bar */}
                        <div className="activity-bar absolute inset-y-0 left-0 hidden h-full flex-col justify-between bg-gray-700 py-2 text-center text-gray-600 lg:flex">
                            <div className="flex flex-col">
                                <button
                                    className="flex w-full cursor-pointer justify-center p-2 text-center hover:text-gray-300"
                                    type="button"
                                >
                                    <svg
                                        stroke="currentColor"
                                        fill="none"
                                        stroke-width="0"
                                        viewBox="0 0 24 24"
                                        className="h-6 w-6"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                        />
                                    </svg>
                                </button>
                                <button
                                    className="flex w-full cursor-pointer justify-center p-2 text-center hover:text-gray-300"
                                    type="button"
                                >
                                    <svg
                                        stroke="currentColor"
                                        fill="none"
                                        stroke-width="0"
                                        viewBox="0 0 24 24"
                                        className="h-6 w-6"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </button>
                                <button
                                    className="flex w-full cursor-pointer justify-center p-2 text-center hover:text-gray-300"
                                    type="button"
                                >
                                    <svg
                                        stroke="currentColor"
                                        fill="none"
                                        stroke-width="0"
                                        viewBox="0 0 24 24"
                                        className="ml-0.5 h-6 w-6"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                        />
                                    </svg>
                                </button>
                                <button
                                    className="flex w-full cursor-pointer justify-center p-2 text-center hover:text-gray-300"
                                    type="button"
                                />
                            </div>
                            <div>
                                <button
                                    className="flex w-full cursor-pointer justify-center p-2 text-center hover:text-gray-300"
                                    type="button"
                                >
                                    <svg
                                        stroke="currentColor"
                                        fill="none"
                                        stroke-width="0"
                                        viewBox="0 0 24 24"
                                        className="h-6 w-6"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                        />
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="vscode-main relative flex -translate-y-16 flex-col">
                            <div className="relative flex justify-center">
                                {/* <div className="absolute h-32 w-32 -translate-x-5 translate-y-5 -rotate-6 rounded-xl border border-black bg-gray-700" />
                        <div className="absolute h-32 w-32 translate-x-3 rotate-12 rounded-xl border border-black bg-gray-700" /> */}
                                <div className="z-10 flex h-32 w-32 items-center justify-center rounded-full border border-black bg-gradient-to-br from-gray-700 to-black shadow-2xl">
                                    <img src="/cody/cody-logo.svg" className="h-16 w-16" alt="Cody Logo" />
                                </div>
                            </div>

                            <div className="relative h-[300px] flex-grow">
                                <div className="flex h-full flex-col justify-center px-10 text-white lg:px-32">
                                    <h1 className="mx-auto w-full pt-[50px] text-9xl font-semibold leading-[58px] !tracking-[-1px] text-white md:pt-0 md:leading-[62px]">
                                        Auto
                                        <span className="bg-gradient-to-br from-blurple-200 to-blurple-300 bg-clip-text text-transparent">
                                            Cody
                                        </span>
                                    </h1>
                                    <p className="mx-auto mt-4 max-w-[25ch] text-xl leading-normal text-gray-200 lg:text-2xl">
                                        On the road to the next generation of AI coding assistants
                                    </p>
                                </div>
                            </div>
                        </div>
                    </main>
                    <div className="status-bar flex items-center justify-between rounded-b-xl bg-gray-700 p-3 text-sm text-blue-100" />
                </div>
            </div>
        </div>
    )
}

function Principles(): JSX.Element {
    return (
        <>
            <h2 className="text-center text-4xl font-semibold !tracking-[-1px] text-[#0F111A]">Core Principles</h2>
            <h3 className="mx-auto mt-2 text-center text-xl font-semibold tracking-tight text-gray-400">
                What's the best strategy to create autonomous coding?
            </h3>

            <div className="mx-auto mt-10 max-w-3xl rounded-xl border border-gray-200 bg-white py-12 px-10">
                <p className="font-semibold text-gray-400">How do we get to autonomous coding?</p>
                <h2 className="mx-auto w-full text-4xl font-semibold text-black">
                    <span className="bg-gradient-to-br from-blurple-300 to-blurple-400 bg-clip-text text-transparent">
                        A combination of coder and AI
                    </span>
                </h2>

                <div className="mt-4 text-xl font-medium leading-normal text-gray-600 lg:text-2xl">
                    If you want to create an autonomous car, you don't remove the steering wheel.
                </div>
            </div>

            <div className="mx-auto mt-4 max-w-3xl rounded-xl border border-gray-200 bg-white py-12 px-10">
                <p className="font-semibold text-gray-400">Where can we get highest fidelity feedback from the user?</p>
                <h2 className="mx-auto w-full text-4xl font-semibold text-black">
                    <span className="bg-gradient-to-br from-blurple-300 to-blurple-400 bg-clip-text text-transparent">
                        The editor is the best place for user feedback
                    </span>
                </h2>

                <div className="mt-4 text-xl font-medium leading-normal text-gray-600 lg:text-2xl">
                    AI should be trained to understand the user's intent, not just the code. Gathering feedback at every
                    step of the process is key.
                </div>
            </div>
        </>
    )
}
