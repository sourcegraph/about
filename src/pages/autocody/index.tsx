import { FunctionComponent } from 'react'

import { Layout } from '../../components'

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

        <div className="mt-40">
            <Principles />
        </div>

        <div className="mx-auto mt-40 max-w-6xl pb-32">
            <AutoCodyHowItWorks />
        </div>
    </Layout>
)

export default AutoCodyPage

function VSCode(): JSX.Element {
    return (
        <div className="relative mx-auto max-w-5xl">
            {/* <div className="absolute inset-x-0 inset-y-10 rounded-xl border border-gray-200 bg-gray-50 " /> */}

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
                                        strokeWidth="0"
                                        viewBox="0 0 24 24"
                                        className="h-6 w-6"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
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
                                        strokeWidth="0"
                                        viewBox="0 0 24 24"
                                        className="h-6 w-6"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
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
                                        strokeWidth="0"
                                        viewBox="0 0 24 24"
                                        className="ml-0.5 h-6 w-6"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
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
                                        strokeWidth="0"
                                        viewBox="0 0 24 24"
                                        className="h-6 w-6"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
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
                                    <video
                                        autoPlay={true}
                                        loop={false}
                                        muted={true}
                                        playsInline={true}
                                        className="h-24 w-24"
                                    >
                                        <source src="/cody/hiCodyDark.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>

                            <div className="relative h-[300px] flex-grow">
                                <div className="flex h-full flex-col justify-center px-5 text-white">
                                    <h1 className="text-[100px] font-semibold leading-none !tracking-[-3px] text-white">
                                        Auto
                                        <span className="bg-gradient-to-br from-gray-100 to-gray-200 bg-clip-text text-transparent">
                                            Cody
                                        </span>
                                    </h1>
                                    <p className="mx-auto mt-4 max-w-[40ch] text-xl leading-normal text-gray-300 lg:text-2xl">
                                        We are building our autonomous coding assistant that will be able to write code
                                        for you, understand your problems, and guide you in solving them.
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
            <div className="mx-auto max-w-3xl">
                <h2 className="text-4xl font-semibold !tracking-[-1px] text-[#0F111A]">Core Principles</h2>
                <h3 className="mx-auto mt-2 text-xl font-semibold tracking-tight text-gray-400">
                    How we're thinking about the road to autonomous coding
                </h3>
            </div>

            <div className="mx-auto mt-16 max-w-3xl">
                <p className="font-semibold text-gray-400">Principle 1: Hybrid</p>
                <p className="text-xl font-semibold text-gray-400 lg:text-3xl lg:leading-normal">
                    <span className="text-blurple-400">A combination of coder and AI. </span> There are agentic
                    solutions that let the AI free to choose the correct path to solve an issue from start to finish.{' '}
                    <a
                        href="https://github.com/princeton-nlp/swe-agent"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        SWE-Agent
                    </a>
                    , the benchmark for autonomous code generation, is only able to achieve a 12.29% success rate on the
                    full SWE-bench test set. If you want to create an autonomous car, you don't remove the steering
                    wheel. We must allow the AI to be trained and "steered" by a user.
                </p>

                <p className="mt-5 text-xl font-semibold text-gray-400 lg:text-3xl lg:leading-normal">
                    We believe the best place for a user to provide high fidelity feedback to AI is in a code editor.
                </p>
            </div>

            <div className="mx-auto mt-16 max-w-3xl">
                <p className="font-semibold text-gray-400">Principle 2: Context</p>
                <p className="text-xl font-semibold text-gray-400 lg:text-3xl lg:leading-normal">
                    <span className="text-blurple-400">Context should come from inside AND outside a repo. </span> We
                    are building{' '}
                    <a
                        href="https://openctx.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        OpenCtx
                    </a>
                    , an open source tool to bring in content about your code from sources like Linear, Jira, Slack,
                    Google Docs, and more. We believe that an LLM (and a human) can't effectively solve a problem
                    without the context of the problem.
                </p>
            </div>

            <div className="mx-auto mt-16 max-w-3xl">
                <p className="font-semibold text-gray-400">Principle 3: Steerable</p>
                <p className="text-xl font-semibold text-gray-400 lg:text-3xl lg:leading-normal">
                    <span className="text-blurple-400">A user should be in the loop at every step. </span> In an agentic
                    workflow, AI will have many steps to complete for the user. A user should be able to steer the
                    workflow at every step by evaluating LLM output throughout the process.
                </p>
            </div>

            <div className="mx-auto mt-16 max-w-3xl">
                <p className="font-semibold text-gray-400">Principle 4: Context</p>
                <h2 className="mx-auto w-full text-4xl font-semibold text-black">
                    <span className="text-black">Context .</span>
                </h2>

                <div className="mt-4 text-xl font-medium leading-normal text-gray-600 lg:text-2xl">
                    AI should be trained to understand the user's intent, not just the code. Gathering feedback at every
                    step of the process is key.
                </div>
            </div>
        </>
    )
}

function AutoCodyHowItWorks(): JSX.Element {
    return (
        <div>
            <h2 className="text-center text-4xl font-semibold !tracking-[-1px] text-[#0F111A]">
                How does AutoCody work?
            </h2>
            <h3 className="mx-auto mt-2 text-center text-xl font-semibold tracking-tight text-gray-400">
                A 5-step user{' '}
                <span role="img" aria-label="handshake">
                    🤝
                </span>{' '}
                AI strategy
            </h3>

            <div className="mt-14 grid grid-cols-[400px,1fr] gap-4">
                <div className="">
                    <div className="rounded-2xl bg-gray-200/30 p-8">
                        <p className="text-sm font-semibold text-gray-400">Step 1</p>
                        <h3 className="text-2xl font-semibold text-[#0F111A]">Prompting</h3>
                        <p className="mt-4 text-lg text-gray-500">
                            The step that we know and have done 1,000+ times in the past year
                        </p>
                    </div>
                </div>
                <div className="">
                    <div className="rounded-2xl bg-gray-200/30 p-8">VIDEO GOES HERE</div>
                </div>
            </div>
        </div>
    )
}
