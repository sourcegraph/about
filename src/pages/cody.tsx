import { FunctionComponent } from 'react'

import classNames from 'classnames'
import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import Link from 'next/link'

import {
    ContentSection,
    Heading,
    Layout,
    PlayButton,
    ExternalsAuth,
    EmailAuth,
    Badge,
    HubSpotForm,
} from '../components'
import { DemoVideo } from '../components/DemoVideo'
import { TwitterEmbed } from '../components/EmbedTweet'
import { useAuthModal } from '../context/AuthModalContext'

import styles from '../styles/CustomHubspotForm.module.scss'

const codyFeatures1 = [
    {
        heading: 'Code navigation',
        description:
            'Cody can help you find functions & components from around your codebase. Ask Cody where a certain component is defined—such as a webapp navbar, or an API schema—and Cody will point you to the file where it lives.',
    },
    {
        heading: 'Code explanation',
        description:
            'Cody can explain what code is doing—at a high level or in detail. Highlight any code block or an entire file and Cody will explain what’s happening in conversational language.',
    },
    {
        heading: 'Code smells',
        description:
            'Cody can act as a pair programmer and analyze code blocks for code smells, potential bugs, and unhandled errors. Cody will point out issues in selected code such as magic numbers, unhandled edge cases, or unclear variables names, with suggestions to fix those issues.',
    },
    {
        heading: 'Summarize recent code changes',
        description:
            'Cody is able to reference recent diffs to tell you about recent changes to your code. Cody can generate summaries of changes to an entire repository over the last day or week or summarize the changes specific to a selected file.',
    },
    {
        heading: 'Translate language',
        description:
            'Cody translates selected code between programming languages. You can feed code snippets to Cody—for example, a certain function—and Cody can translate that code, providing you with a code snippet of another language with the same functionality.',
    },
    {
        heading: 'Debugging assistance',
        description:
            'Cody can help you debug and improve your code. Pass in a code snippet to the Cody chat and request a specific fix—such as handling for a new edge case—and Cody will provide a rewritten code suggestion.',
    },
    {
        heading: 'Reference tracking',
        description:
            'Cody knows where all your functions are referenced throughout your code and can find and return  function references at your request.',
    },
]

const codyFeatures2 = [
    {
        heading: 'Documentation generation',
        description:
            'Cody can read and understand your code, which means it can also write documentation for you. Highlight a snippet of code—for example, a function or class—and Cody can generate a docstring for it.',
    },
    {
        heading: 'Code generation',
        description:
            'Cody generates new code on request via the chat. You can ask Cody to write boilerplate code, API calls, or even specific code based on your instruction and requirements.',
    },
    {
        heading: 'Code fixup',
        description:
            'Cody edits and improves code directly using inline instructions. Simply type what you want Cody to do above or below a block of Cody and hit the Fixup hotkey; Cody will directly edit that code within your editor, saving you the need to copy and paste code from the chat.',
    },
    {
        heading: 'Unit tests',
        description:
            'Cody writes unit tests for you, saving you time and letting you stay focused on building software. Highlight a code block and trigger the "Generate a unit test" recipe; Cody will write a unit test ready to be pasted into your code.',
    },
    {
        heading: 'Code completions',
        description:
            'Start writing code or write a comment and Cody will suggest the next few lines for you. Choose to accept it, or open the command palette and click "Cody: View Suggestions" to see various code snippets Cody suggests using.',
    },
]

const CodyPage: FunctionComponent = () => {
    const { openModal } = useAuthModal()

    const handleOpenModal = (): void => openModal('cody')

    return (
        <Layout
            meta={{
                title: 'Cody',
                description: 'Read, write, and understand code 10x faster with AI',
                image: 'https://about.sourcegraph.com/cody/cody-og.png',
            }}
            headerColorTheme="purple"
            childrenClassName="sg-bg-gradient-cody"
            displayChildrenUnderNav={true}
        >
            {/* Hero Section */}
            <ContentSection parentClassName="!py-0" className="pt-12 text-center md:pt-0">
                <div className="mx-auto max-w-[780px]">
                    <div className="center flex items-center justify-center gap-x-4">
                        <img src="/cody/cody-logo.png" alt="Cody Logo" className="h-[21px] w-[23px]" />
                        <p className="mb-0 text-[28px] font-semibold text-white">Meet Cody,</p>
                    </div>
                    <Heading size="h1" className="mt-2 text-white md:!text-[69px] md:!leading-[81px]">
                        The AI that knows your{' '}
                        <span className="cody-heading bg-clip-text text-transparent"> entire codebase </span>
                    </Heading>
                    <Heading size="h4" className="mx-auto mt-6 max-w-[637px]  !font-normal text-gray-200">
                        Cody answers code questions and writes code for you by reading your entire codebase and the code
                        graph.
                    </Heading>
                    <p className="sg-bg-gradient-purple-white mt-8 bg-clip-text text-[20px] font-semibold text-transparent">
                        Sign up to get free access <span className="text-white">👇</span>
                    </p>
                    <div className="mt-4 flex flex-wrap justify-center gap-2">
                        <ExternalsAuth
                            className="w-fit justify-center !font-normal"
                            authProvider="github"
                            label="GitHub"
                            source="cody"
                        />
                        <ExternalsAuth
                            className="w-fit justify-center !font-normal"
                            authProvider="gitlab"
                            label="GitLab"
                            source="cody"
                        />
                        <EmailAuth
                            icon={true}
                            className="sg-email-auth-btn h-12 w-fit border bg-white bg-opacity-10 text-lg !font-normal text-white"
                            source="cody"
                            label="Email"
                        />
                    </div>
                    <p className="mt-4 text-[14px] text-violet-300 opacity-70">
                        By registering, you agree to our{' '}
                        <Link
                            className="text-violet-300 underline"
                            target="_blank"
                            href="https://about.sourcegraph.com/terms"
                        >
                            Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link
                            className="text-violet-300 underline"
                            target="_blank"
                            href="https://about.sourcegraph.com/terms/privacy"
                        >
                            Private Policy
                        </Link>
                    </p>
                </div>
                <div className="mx-auto mt-12 w-full">
                    <DemoVideo
                        video="cody-demo-202305"
                        splash={true}
                        className="mx-auto mt-8 w-full max-w-[1062px] rounded-lg bg-violet-750 drop-shadow-2xl"
                        splashClassName="rounded-lg"
                        playButton={<PlayButton title="Watch Cody write & fix code" time="4 min" ctaText="Watch now" />}
                    />
                </div>

                <Heading size="h2" className="mx-auto mt-12 max-w-[540px] !text-[36px] text-white md:mt-[96px]">
                    We’re working to bring you Cody{' '}
                    <span className="cody-text-gradient bg-clip-text text-transparent"> where you need it most </span>
                </Heading>

                <div className="mt-16 flex flex-col gap-6 text-[24px] font-semibold text-white">
                    <div className="flex flex-col gap-6 md:flex-row">
                        <Heading
                            size="h4"
                            className="cody-platforms-bg-gradient w-full border border-white/[.04] py-6 text-white"
                        >
                            Sourcegraph Web UI
                        </Heading>{' '}
                        <Heading
                            size="h4"
                            className="cody-platforms-bg-gradient w-full border border-white/[.04] py-6 text-white"
                        >
                            VS Code extension
                        </Heading>
                    </div>
                    <div className="flex flex-col gap-6 md:flex-row">
                        <Heading size="h4" className="w-full border border-dashed border-white/[.15] py-6 text-white">
                            Sourcegraph app
                            <Badge className="ml-2" size="small" text="Coming soon!" color="light-gray" />
                        </Heading>
                        <Heading size="h4" className="w-full border border-dashed border-white/[.15] py-6 text-white">
                            IntelliJ extension
                            <Badge className="ml-2" size="small" text="Coming soon!" color="light-gray" />
                        </Heading>
                    </div>

                    <button
                        type="button"
                        onClick={handleOpenModal}
                        className="cody-text-gradient w-fit self-center bg-clip-text text-lg text-transparent"
                    >
                        Sign up to get started <ChevronRightIcon className="ml-1 inline text-vermillion-300" />
                    </button>
                </div>
            </ContentSection>

            <ContentSection
                parentClassName="!pb-0 !pt-16 md:!pt-[152px]"
                className="mx-auto flex flex-col items-center gap-y-8 gap-x-[83px] text-center md:!mt-2 md:flex-row md:items-start"
            >
                <div className="border-t border-gray-500 pt-12 text-left">
                    <Heading size="h2" className="!text-[36px] text-white">
                        Codebase-aware intelligence
                    </Heading>
                    <p className="my-[30px] max-w-[572px] text-lg text-gray-200">
                        Answer questions about both general programming topics and your specific codebase from right
                        inside your editor. Cody knows about your local code and can learn from the code graph and
                        documentation inside your organization to do just that.
                    </p>
                    <Link
                        href="https://docs.sourcegraph.com/cody"
                        className="inline-flex items-center whitespace-nowrap font-semibold text-white"
                        title="See the Cody docs"
                    >
                        See the Cody docs <ChevronRightIcon className="ml-[3px]" />
                    </Link>
                </div>

                <div className="h-fit max-w-[625px] overflow-hidden rounded-lg bg-violet-750 drop-shadow-xl md:w-[50%] md:min-w-[450px]">
                    <video
                        className="sg-video-border-gradient w-full rounded-lg"
                        autoPlay={true}
                        muted={true}
                        loop={true}
                        playsInline={true}
                        controls={false}
                        data-cookieconsent="ignore"
                    >
                        <source
                            type="video/mp4"
                            src="https://storage.googleapis.com/sourcegraph-assets/website/Product%20Animations/cody-web-chat-may2023.mp4"
                            data-cookieconsent="ignore"
                        />
                    </video>
                </div>
            </ContentSection>

            <ContentSection parentClassName="!py-0" className="mt-16">
                <div className="grid grid-cols-1 justify-center gap-x-6 gap-y-14 sm:grid-cols-2 md:grid-cols-3">
                    {codyFeatures1.map(item => (
                        <div key={item.heading} className="sm:max-w-[410px]">
                            <Heading size="h4" className="text-white">
                                {item.heading}
                            </Heading>
                            <p className="mt-2 mb-0 text-base text-gray-200">{item.description}</p>
                        </div>
                    ))}
                </div>
            </ContentSection>

            <ContentSection
                parentClassName="!pb-0 !pt-16"
                className="mx-auto flex flex-col items-center gap-y-8 gap-x-[83px] text-center md:!mt-2 md:flex-row md:items-start"
            >
                <div className="border-t border-gray-500 pt-12 text-left">
                    <Heading size="h2" className="!text-[36px] text-white">
                        AI-generated code
                    </Heading>
                    <p className="mt-[30px] max-w-[572px] text-lg text-gray-200">
                        Cody uses knowledge of your codebase to write and fix code. Generate everything from boilerplate
                        code to API resolvers that rely on the context and style of your codebase. You can even ask Cody
                        to fix code blocks for errors, readability, or unhandled edge cases, and Cody will make changes
                        directly in your working file.
                    </p>
                </div>

                <div className="h-fit max-w-[625px] overflow-hidden rounded-lg bg-violet-750 drop-shadow-xl md:w-[50%] md:min-w-[450px]">
                    <video
                        className="sg-video-border-gradient w-full rounded-lg"
                        autoPlay={true}
                        muted={true}
                        loop={true}
                        playsInline={true}
                        controls={false}
                        data-cookieconsent="ignore"
                    >
                        <source
                            type="video/mp4"
                            src="https://storage.googleapis.com/sourcegraph-assets/website/Product%20Animations/cody-fixup-may2023.mp4"
                            data-cookieconsent="ignore"
                        />
                    </video>
                </div>
            </ContentSection>

            <ContentSection parentClassName="!py-0" className="mt-16">
                <div className="grid grid-cols-1 justify-center gap-x-6 gap-y-14 sm:grid-cols-2 md:grid-cols-3">
                    {codyFeatures2.map(item => (
                        <div key={item.heading} className="md:max-w-[410px]">
                            <Heading size="h4" className="text-white">
                                {item.heading}
                            </Heading>
                            <p className="mt-2 mb-0 text-base text-gray-200">{item.description}</p>
                        </div>
                    ))}
                </div>
            </ContentSection>

            <ContentSection
                id="contact-form"
                parentClassName="!py-0 !pt-20 md:!pt-[188px]"
                className="cody-contact-form-wrapper rounded-lg"
            >
                <div className="flex flex-col gap-6 py-16 px-6 md:flex-row md:px-8 md:py-[96px] md:pl-[80px]">
                    <div className="max-w-[614px]">
                        <Heading size="h2" className="!text-[36px] text-white">
                            Get Cody{' '}
                            <span className="cody-text-gradient bg-clip-text text-transparent"> where you work </span>
                        </Heading>
                        <p className="mt-4 text-lg text-gray-200">
                            Cody for work provides context-aware answers based on your own private codebase. Contact us
                            through the form to learn more.
                        </p>
                    </div>
                    <div className={classNames('md:min-w-[400px] xl:min-w-[554px]', styles.codyForm)}>
                        <HubSpotForm
                            formId="05e46684-9fbc-4c4d-b010-f661f247c4c6"
                            inlineMessage="Thank you! We'll get back to you soon"
                        />
                    </div>
                </div>
            </ContentSection>

            <ContentSection parentClassName="text-center !pb-0 !pt-[112px]">
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
                className="mx-auto flex flex-col items-center justify-center gap-x-8 py-16  md:flex-row md:items-start md:py-[112px]"
            >
                <div className="max-w-[550px]">
                    <Heading size="h2" className="!text-4xl text-white">
                        Cody for personal use
                    </Heading>
                    <p className="mt-6 text-lg text-gray-200">
                        Cody is free for personal use in Sourcegraph.com and in the VS Code extension. Create a free
                        Sourcegraph.com account to get started.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                        <ExternalsAuth
                            className="w-fit justify-center !font-normal"
                            authProvider="github"
                            label="GitHub"
                            source="cody"
                        />
                        <ExternalsAuth
                            className="w-fit justify-center !font-normal"
                            authProvider="gitlab"
                            label="GitLab"
                            source="cody"
                        />
                        <EmailAuth
                            icon={true}
                            className="sg-email-auth-btn h-12 w-fit border bg-white bg-opacity-10 text-lg !font-normal text-white"
                            source="cody"
                            label="Email"
                        />
                    </div>
                    <p className="mt-4 mb-0 text-[14px] text-violet-300 opacity-70">
                        By registering, you agree to our{' '}
                        <Link
                            className="text-violet-300 underline"
                            target="_blank"
                            href="https://about.sourcegraph.com/terms"
                        >
                            Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link
                            className="text-violet-300 underline"
                            target="_blank"
                            href="https://about.sourcegraph.com/terms/privacy"
                        >
                            Private Policy
                        </Link>
                    </p>
                </div>
                <div
                    id="cody-for-work"
                    className="mt-8 flex max-w-[554px] flex-col border-t border-gray-500 pt-8 md:mt-0 md:border-l md:border-t-0 md:pl-8 md:pt-0"
                >
                    <Heading size="h2" className="!text-4xl text-white">
                        Cody for work
                    </Heading>
                    <p className="mt-6 text-lg text-gray-200">
                        Cody for work provides context-aware answers based on your own private codebase. Contact us with
                        the form below to learn more.
                    </p>
                    <Link href="#contact-form" title="Cody access form" className="btn btn-inverted-primary mt-1 w-fit">
                        Get Cody for work
                    </Link>
                </div>
            </ContentSection>
        </Layout>
    )
}

export default CodyPage
