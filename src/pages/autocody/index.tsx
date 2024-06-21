import { FunctionComponent, useEffect } from 'react'

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

        <div className="mx-auto mt-40 max-w-6xl">
            <AutoCodyHowItWorks />
        </div>

        <div className="mx-auto mt-40 max-w-3xl pb-44">
            <SignUp />
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
                                <div className="z-10 flex h-32 w-32 items-center justify-center rounded-full border border-black bg-[#0D121B] shadow-2xl">
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

                            <div className="relative h-[300px] flex-grow pt-5">
                                <div className="flex h-full flex-col justify-center px-5 text-white">
                                    <h1 className="text-9xl font-semibold leading-none !tracking-[-3px] text-white">
                                        Auto
                                        <span className="bg-gradient-to-br from-gray-100 to-gray-200 bg-clip-text text-transparent">
                                            Cody
                                        </span>
                                    </h1>
                                    <p className="mx-auto mt-4 max-w-[40ch] text-xl leading-normal text-gray-300 lg:text-2xl">
                                        We are building an autonomous coding assistant that will be able to understand
                                        your problems, create a step-by-step plan to solve them, and write code
                                        alongside you.
                                    </p>

                                    <div className="mt-5 text-center">
                                        <button
                                            type="button"
                                            className="rounded-xl bg-blurple-400 px-4 py-2.5 text-white hover:bg-blurple-300"
                                            onClick={() => {
                                                const element = document.querySelector('#waitlist-autocody')
                                                if (element) {
                                                    element.scrollIntoView({ behavior: 'smooth' })
                                                }
                                            }}
                                        >
                                            Get on the Waitlist
                                        </button>
                                    </div>
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
                <h2 className="text-4xl font-semibold !tracking-[-1px] text-[#0F111A]">
                    Our core principles for the road to autonomous coding
                </h2>
                <h3 className="mx-auto mt-2 text-2xl font-semibold tracking-tight text-gray-400">
                    4 ideas that will guide an agentic coding experience
                </h3>
            </div>

            <div className="mx-auto mt-20 max-w-3xl">
                <p className="text-xl font-semibold text-gray-700">Principle 1: Cooperation</p>
                <p className="text-xl font-semibold text-gray-400 lg:text-2xl lg:leading-normal">
                    <span className="text-blurple-400">A combination of human coder and AI. </span> Agentic solutions,
                    like{' '}
                    <a
                        href="https://github.com/princeton-nlp/swe-agent"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        SWE-Agent
                    </a>
                    , that allow the AI to define a plan and execute against it fully autonomously are only able to
                    achieve a 12.29% success rate on the full SWE-bench test set.
                </p>
                {/* <p className="mt-5 text-xl font-semibold text-gray-400 lg:text-2xl lg:leading-normal">
                    If you want to create an autonomous car, you don't remove the steering wheel. We must allow the AI
                    to be trained and "steered" by a user.
                </p> */}
                <p className="mt-5 text-xl font-semibold text-gray-400 lg:text-2xl lg:leading-normal">
                    We believe the best place for a user to provide high fidelity feedback to AI is in a code editor.
                </p>
            </div>

            <div className="mx-auto mt-16 max-w-3xl">
                <p className="text-xl font-semibold text-gray-700">Principle 2: Context</p>
                <p className="text-xl font-semibold text-gray-400 lg:text-2xl lg:leading-normal">
                    <span className="text-blurple-400">Context should come from inside AND outside the codebase. </span>{' '}
                    We are building{' '}
                    <a
                        href="https://openctx.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        OpenCtx
                    </a>
                    , an open source tool to bring relevant context about your code from sources like Linear, Jira,
                    Slack, Google Docs, and more. We believe that an LLM (just like a human) cannot effectively solve a
                    problem without full context and understanding of the problem.
                </p>
            </div>

            <div className="mx-auto mt-16 max-w-3xl">
                <p className="text-xl font-semibold text-gray-700">Principle 3: Interactive</p>
                <p className="text-xl font-semibold text-gray-400 lg:text-2xl lg:leading-normal">
                    <span className="text-blurple-400">A user should be in the loop at every step. </span> In an agentic
                    workflow, AI will do the work, with the human providing oversight. A user should be able to steer
                    the workflow at every step by evaluating LLM output throughout the process.
                </p>
            </div>

            <div className="mx-auto mt-16 max-w-3xl">
                <p className="text-xl font-semibold text-gray-700">Principle 4: Feedback</p>
                <p className="text-xl font-semibold text-gray-400 lg:text-2xl lg:leading-normal">
                    <span className="text-blurple-400">AI should learn from feedback. </span> AI should continuously
                    evolve and adapt to better understand the user's intent, not just the code. Gathering feedback at
                    every step of the process.
                </p>
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

            <div className="relative mt-14 flex gap-4">
                <div className="w-[400px]">
                    <div className="sticky top-20">
                        <div className="rounded-2xl bg-gray-200/30 p-8">
                            <p className="text-sm font-semibold text-gray-400">Step 1</p>
                            <h3 className="text-2xl font-semibold text-[#0F111A]">User prompts AutoCody</h3>
                            <p className="mt-4 text-lg text-gray-500">
                                The step that we know and have done 1,000+ times in the past year
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto">
                    <div className="rounded-2xl bg-gray-200/30 p-12 pr-0">
                        <video
                            src="/cody/autocody-prompting.mp4"
                            className="rounded-l-2xl"
                            autoPlay={true}
                            loop={true}
                            muted={true}
                            playsInline={true}
                        />
                    </div>
                </div>
            </div>

            <div className="relative mt-14 flex gap-4">
                <div className="w-[400px]">
                    <div className="sticky top-20">
                        <div className="rounded-2xl bg-gray-200/30 p-8">
                            <p className="text-sm font-semibold text-gray-400">Step 2</p>
                            <h3 className="text-2xl font-semibold text-[#0F111A]">AutoCody will restate the problem</h3>
                            <p className="mt-4 text-lg text-gray-500">
                                AutoCody will clarify a user's prompt. It will state the current behavior and define the
                                desired behavior.
                            </p>

                            <p className="mt-4 text-lg text-gray-500">
                                Why? Clarifying user intent is important. Getting intent wrong by a few degrees can send
                                AI down a rabbit hole.
                            </p>
                        </div>

                        <div className="mt-4 rounded-2xl bg-gray-200/30 p-8">
                            <h3 className="text-lg font-semibold text-gray-500">User will approve/edit restatement</h3>
                            <p className="mt-2 text-base text-gray-500">
                                A user can let AutoCody know if the current behavior and desired behavior are correct.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto">
                    <div className="rounded-2xl bg-gray-200/30 p-12 pr-0">
                        <video
                            src="/cody/autocody-restate.mp4"
                            className="rounded-l-2xl"
                            autoPlay={true}
                            loop={true}
                            muted={true}
                            playsInline={true}
                        />
                    </div>
                </div>
            </div>

            <div className="relative mt-14 flex gap-4">
                <div className="w-[400px]">
                    <div className="sticky top-20">
                        <div className="rounded-2xl bg-gray-200/30 p-8">
                            <p className="text-sm font-semibold text-gray-400">Step 3</p>
                            <h3 className="text-2xl font-semibold text-[#0F111A]">
                                AutoCody will find relevant context
                            </h3>
                            <p className="mt-4 text-lg text-gray-500">
                                AutoCody will use the prompt and restatement to create queries under the hood. Then it
                                will search your codebase and relevant sources to find high quality context.
                            </p>
                            <p className="mt-4 text-lg text-gray-500">
                                AutoCody will evaluate each piece of context to determine how important it is to the
                                task.
                            </p>
                            <p className="mt-4 text-lg text-gray-500">
                                Why? Context is key. Without context, an LLM can't understand the user's intent.
                            </p>
                        </div>

                        <div className="mt-4 rounded-2xl bg-gray-200/30 p-8">
                            <h3 className="text-lg font-semibold text-gray-500">User will add/remove context</h3>
                            <p className="mt-2 text-base text-gray-500">
                                A user can let AutoCody know if each piece of context was relevant. They can remove and
                                add context as needed.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto">
                    <div className="rounded-2xl bg-gray-200/30 p-12 pr-0">
                        <video
                            src="/cody/autocody-restate.mp4"
                            className="rounded-l-2xl"
                            autoPlay={true}
                            loop={true}
                            muted={true}
                            playsInline={true}
                        />
                    </div>
                </div>
            </div>

            <div className="relative mt-14 flex gap-4">
                <div className="w-[400px]">
                    <div className="sticky top-20">
                        <div className="rounded-2xl bg-gray-200/30 p-8">
                            <p className="text-sm font-semibold text-gray-400">Step 4</p>
                            <h3 className="text-2xl font-semibold text-[#0F111A]">AutoCody creates a plan</h3>
                            <p className="mt-4 text-lg text-gray-500">
                                After a user approves the context, AutoCody will create a step-by-step plan to solve a
                                user's issue.
                            </p>
                            <p className="mt-4 text-lg text-gray-500">
                                Each step in the plan also acts as a to-do list item so a user can mark it as complete.
                            </p>
                        </div>

                        <div className="mt-4 rounded-2xl bg-gray-200/30 p-8">
                            <h3 className="text-lg font-semibold text-gray-500">User will update the plan</h3>
                            <p className="mt-2 text-base text-gray-500">
                                A user can let AutoCody know if the plan is correct. They can tweak steps, add or remove
                                steps, or change the order of steps.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto">
                    <div className="rounded-2xl bg-gray-200/30 p-12 pr-0">
                        <video
                            src="/cody/autocody-restate.mp4"
                            className="rounded-l-2xl"
                            autoPlay={true}
                            loop={true}
                            muted={true}
                            playsInline={true}
                        />
                    </div>
                </div>
            </div>

            <div className="relative mt-14 flex gap-4">
                <div className="w-[400px]">
                    <div className="sticky top-20">
                        <div className="rounded-2xl bg-gray-200/30 p-8">
                            <p className="text-sm font-semibold text-gray-400">Step 5</p>
                            <h3 className="text-2xl font-semibold text-[#0F111A]">
                                AutoCody executes the plan step-by-step
                            </h3>
                            <p className="mt-4 text-lg text-gray-500">
                                AutoCody will execute the plan step-by-step. It will make changes to the codebase and
                                update the user on its progress.
                            </p>
                        </div>

                        <div className="mt-4 rounded-2xl bg-gray-200/30 p-8">
                            <h3 className="text-lg font-semibold text-gray-500">User will sit back and enjoy!</h3>
                            <p className="mt-2 text-base text-gray-500">
                                Since the user was able to adjust and steer AutoCody every step of the way, there is a
                                higher chance of AutoCody completing the task successfully.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto">
                    <div className="rounded-2xl bg-gray-200/30 p-12 pr-0">
                        <video
                            src="/cody/autocody-restate.mp4"
                            className="rounded-l-2xl"
                            autoPlay={true}
                            loop={true}
                            muted={true}
                            playsInline={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

function SignUp(): JSX.Element {
    useEffect(() => {
        const script = document.createElement('script')
        script.src = '//js.hsforms.net/forms/embed/v2.js'
        script.async = true
        script.onload = () => {
            if (window.hbspt) {
                window.hbspt.forms.create({
                    region: 'na1',
                    portalId: '2762526',
                    formId: '94e3f9f3-72c3-4ab6-8259-9743ad551cfb',
                    target: '#hubspotForm'
                })
            }
        }
        document.body.appendChild(script)
    }, [])

    return (
        <div id="waitlist-autocody" className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-semibold !tracking-[-1px] text-[#0F111A]">Interested?</h2>
            <h3 className="mx-auto mt-2 text-xl font-semibold tracking-tight text-gray-400">
                Sign up for the waitlist to get notified when AutoCody is ready.
            </h3>

            <div id="hubspotForm" className="mt-20"></div>
        </div>
    )
}

// const HubSpotForm: React.FC = () => {
//     const formContainerRef = useRef<HTMLDivElement>(null)

//     useEffect(() => {
//         const script = document.createElement('script')
//         script.src = '//js.hsforms.net/forms/embed/v2.js'
//         script.type = 'text/javascript'
//         document.body.append(script)

//         script.addEventListener('load', () => {
//             if (window.hbspt) {
//                 window.hbspt.forms.create({
//                     region: 'na1',
//                     portalId: '2762526',
//                     formId: '94e3f9f3-72c3-4ab6-8259-9743ad551cfb',
//                     target: formContainerRef.current,
//                 })
//             }
//         })

//         return () => {
//             script.remove()
//         }
//     }, [])

//     return <div ref={formContainerRef} />
// }
