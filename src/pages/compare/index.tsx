import { FunctionComponent } from 'react'

import Link from 'next/link'
import { MdCheck, MdClose } from 'react-icons/md'

import { ContentSection, Layout } from '../../components'
import { CodyCallToActionContentSection } from '../../components/cta/CodyCallToActionContentSection'

const CodyHeader: FunctionComponent = () => (
    <div className="mb-8 flex items-center justify-start gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg  border border-gray-300 bg-white shadow-sm">
            <img src="/cody-logomark-default.svg" alt="Cody Logo" className="h-6 w-6" />
        </div>
        <h3 className="text-2xl font-semibold">Cody</h3>
    </div>
)

const CompetitorHeader: FunctionComponent<{ title: string; icon: string }> = ({ title, icon }) => (
    <div className="mb-8 flex items-center justify-start gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-gray-300 bg-white shadow-sm">
            <img src={icon} alt={`${title} Logo`} className="h-6 w-6" />
        </div>
        <h3 className="text-2xl font-semibold">{title}</h3>
    </div>
)

const ComparePage: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph Cody Compare',
            description: 'Feature comparison of Sourcegraph Cody and other code AI assistants.',
        }}
        hero={
            <div className="relative isolate bg-white px-6 pb-16 pt-24 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h1>Compare</h1>
                    <p className="mt-3 text-xl leading-8 text-gray-600">
                        How does Cody stack up to other code AI assistants?
                    </p>
                </div>
            </div>
        }
    >
        <ContentSection className="grid grid-cols-1 gap-1 md:grid-cols-3 ">
            <div className="col-span mr-10 pb-5 pt-10">
                <h2 className="mb-3 text-3xl">Cody vs GitHub Copilot</h2>
                <p className="mb-5 text-gray-500">
                    Copilot is an AI code assistant that offers autocomplete, chat, and commands. It has strong
                    autocomplete performance using the OpenAI Codex model, and it offers in-IDE and mobile chat with GPT-4.
                </p>
                <Link className="btn btn-primary text-lg" href="/compare/copilot-vs-cody">
                    See full comparison
                </Link>
            </div>
            <div className="col-span rounded border border-gray-200 border-t-violet-400 p-5">
                <CodyHeader />
                <ul className="ml-0 list-none text-gray-500">
                    <li className="mb-1.5 flex items-center justify-between">
                        Free Plan <MdCheck className="inline-block h-6 w-6 fill-violet-400" />
                    </li>
                    <li className="mb-1.5 flex items-center justify-between">
                        Personalized responses using codebase context
                        <MdCheck className="inline-block h-6 w-6 fill-violet-400" />
                    </li>
                    <li className="mb-1.5 flex items-center justify-between">
                        Choose your LLM <MdCheck className="inline-block h-6 w-6 fill-violet-400" />
                    </li>
                    <li className="mb-1.5 flex items-center justify-between">
                        Bring your own LLM key <MdCheck className="inline-block h-6 w-6 fill-violet-400" />
                    </li>
                    <li className="mb-1.5 flex items-center justify-between">
                        Visual Studio IDE support <MdClose className="inline-block h-6 w-6 fill-gray-200" />
                    </li>
                </ul>
            </div>
            <div className="col-span rounded border border-gray-200 border-t-gray-300 bg-gray-100 p-5">
                <CompetitorHeader icon="/assets/compare/github-copilot.svg" title="GitHub Copilot" />
                <ul className="ml-0 list-none text-gray-500">
                    <li className="mb-1.5 flex items-center justify-between">
                        Free Plan <MdClose className="h-6 w-6 fill-gray-200" />
                    </li>
                    <li className="mb-1.5 flex items-center justify-between">
                        Personalized responses using codebase context <MdCheck className="inline-block h-6 w-6 fill-violet-400" />
                    </li>
                    <li className="mb-1.5 flex items-center justify-between">
                        Choose your LLM <MdClose className="h-6 w-6 fill-gray-200" />
                    </li>
                    <li className="mb-1.5 flex items-center justify-between">
                        Bring your own LLM key <MdClose className="h-6 w-6 fill-gray-200" />
                    </li>
                    <li className="mb-1.5 flex items-center justify-between">
                        Visual Studio IDE support <MdCheck className="h-6 w-6 fill-violet-400" />
                    </li>
                </ul>
            </div>
        </ContentSection>

        <ContentSection className="grid grid-cols-1 gap-1 md:grid-cols-3 ">
            <div className="col-span mr-10 pb-5 pt-10">
                <h2 className="mb-3 text-3xl">Cody vs CodeWhisperer</h2>
                <p className="mb-5 text-gray-500">
                    Amazon CodeWhisperer is an AI code assistant from Amazon focused on autocomplete, free for
                    individuals with AWS Builder IDs. Uniquely, CodeWhisperer is optimized to give code completions
                    based on best practices for using AWS APIs.
                </p>
                <Link className="btn btn-primary text-lg" href="/compare/amazon-codewhisperer-vs-cody">
                    See full comparison
                </Link>
            </div>
            <div className="col-span rounded border border-gray-200 border-t-violet-400 p-5">
                <CodyHeader />
                <ul className="ml-0 list-none text-gray-500">
                    <li className="mb-1.5 flex items-center justify-between">
                        Free Plan <MdCheck className="inline-block h-6 w-6 fill-violet-400" />
                    </li>
                    <li className="mb-1.5 flex items-center justify-between">
                        Choose your LLM <MdCheck className="inline-block h-6 w-6 fill-violet-400" />
                    </li>
                    <li className="mb-1.5 flex items-center justify-between">
                        Bring your own LLM key <MdCheck className="inline-block h-6 w-6 fill-violet-400" />
                    </li>
                    <li className="mb-1.5 flex items-center justify-between">
                        Autocomplete <MdCheck className="inline-block h-6 w-6 fill-violet-400" />
                    </li>
                    <li className="mb-1.5 flex items-center justify-between">
                        Security vulnerability scanning <MdClose className="inline-block h-6 w-6 fill-gray-200" />
                    </li>
                </ul>
            </div>
            <div className="col-span rounded border border-gray-200 border-t-gray-300 bg-gray-100 p-5">
                <CompetitorHeader icon="/assets/compare/amazon-codewhisperer.svg" title="Amazon CodeWhisperer" />
                <ul className="ml-0 list-none text-gray-500">
                    <li className="mb-1.5 flex items-center justify-between">
                        Free Plan <MdCheck className="inline-block h-6 w-6 fill-violet-400" />
                    </li>
                    <li className="mb-1.5 flex items-center justify-between">
                        Choose your LLM <MdClose className="h-6 w-6 fill-gray-200" />
                    </li>
                    <li className="mb-1.5 flex items-center justify-between">
                        Bring your own LLM key <MdClose className="h-6 w-6 fill-gray-200" />
                    </li>
                    <li className="mb-1.5 flex items-center justify-between">
                        Autocomplete <MdCheck className="inline-block h-6 w-6 fill-violet-400" />
                    </li>
                    <li className="mb-1.5 flex items-center justify-between">
                    Security vulnerability scanning <MdCheck className="h-6 w-6 fill-violet-400" />
                    </li>
                </ul>
            </div>
        </ContentSection>

        <ContentSection className="grid grid-cols-1 gap-1 md:grid-cols-3 ">
            <div className="col-span mr-10 pb-5 pt-10">
                <h2 className="mb-3 text-3xl">Cody vs Cursor</h2>
                <p className="mb-5 text-gray-500">
                    Cursor is an “AI-first Code Editor.” Unlike other solutions which are commonly IDE extensions and
                    plugins, Cursor itself is a fork of VS Code. This gives Cursor some unique functionality, including
                    its “Auto-debug” feature that can attempt to fix errors that appear in the VS Code terminal.
                </p>
                <Link className="btn btn-primary text-lg" href="/compare/cursor-vs-cody">
                    See full comparison
                </Link>
            </div>
            <div className="col-span rounded border border-gray-200 border-t-violet-400 p-5">
                <CodyHeader />
                <ul className="ml-0 list-none text-gray-500">
                    <li className="mb-1.5 flex items-center justify-between">
                        Free Plan <MdCheck className="inline-block h-6 w-6 fill-violet-400" />
                    </li>
                    <li className="mb-1.5 flex items-center justify-between">
                        Choose your LLM <MdCheck className="inline-block h-6 w-6 fill-violet-400" />
                    </li>
                    <li className="mb-1.5 flex items-center justify-between">
                        Bring your own LLM key <MdCheck className="inline-block h-6 w-6 fill-violet-400" />
                    </li>
                    <li className="mb-1.5 flex items-center justify-between">
                        Autocomplete <MdCheck className="inline-block h-6 w-6 fill-violet-400" />
                    </li>
                    <li className="mb-1.5 flex items-center justify-between">
                        Standalone app <MdClose className="inline-block h-6 w-6 fill-gray-200" />
                    </li>
                </ul>
            </div>
            <div className="col-span rounded border border-gray-200 border-t-gray-300 bg-gray-100 p-5">
                <CompetitorHeader icon="/assets/compare/cursor.svg" title="Cursor" />
                <ul className="ml-0 list-none text-gray-500">
                    <li className="mb-1.5 flex items-center justify-between">
                        Free Plan <MdCheck className="inline-block h-6 w-6 fill-violet-400" />
                    </li>
                    <li className="mb-1.5 flex items-center justify-between">
                        Choose your LLM <MdClose className="h-6 w-6 fill-gray-200" />
                    </li>
                    <li className="mb-1.5 flex items-center justify-between">
                        Bring your own LLM key <MdCheck className="inline-block h-6 w-6 fill-violet-400" />
                    </li>
                    <li className="mb-1.5 flex items-center justify-between">
                        Autocomplete <MdCheck className="inline-block h-6 w-6 fill-violet-400" />
                    </li>
                    <li className="mb-1.5 flex items-center justify-between">
                        Standalone app <MdCheck className="h-6 w-6 fill-violet-400" />
                    </li>
                </ul>
            </div>
        </ContentSection>

        <ContentSection className="grid grid-cols-1 gap-1 md:grid-cols-3 ">
            <div className="col-span mr-10 pb-5 pt-10">
                <h2 className="mb-3 text-3xl">Cody vs Tabnine</h2>
                <p className="mb-5 text-gray-500">
                    Tabnine is an AI assistant primarily focused on code autocomplete. The most unique aspect of Tabnine
                    is its hybrid LLM approach. Tabnine Pro offers a model where users can run the Tabnine AI models
                    entirely on their local machine.
                </p>
                <Link className="btn btn-primary text-lg" href="/compare/tabnine-vs-cody">
                    See full comparison
                </Link>
            </div>
            <div className="col-span rounded border border-gray-200 border-t-violet-400 p-5">
                <CodyHeader />
                <ul className="ml-0 list-none text-gray-500">
                    <li className="mb-1.5 flex items-center justify-between">
                        Free Plan <MdCheck className="inline-block h-6 w-6 fill-violet-400" />
                    </li>
                    <li className="mb-1.5 flex items-center justify-between">
                        Choose your LLM <MdCheck className="inline-block h-6 w-6 fill-violet-400" />
                    </li>
                    <li className="mb-1.5 flex items-center justify-between">
                        Bring your own LLM key <MdCheck className="inline-block h-6 w-6 fill-violet-400" />
                    </li>
                    <li className="mb-1.5 flex items-center justify-between">
                        Commands <MdCheck className="inline-block h-6 w-6 fill-violet-400" />
                    </li>
                    <li className="mb-1.5 flex items-center justify-between">
                        Fine-tuned LLM <MdClose className="inline-block h-6 w-6 fill-gray-200" />
                    </li>
                </ul>
            </div>
            <div className="col-span rounded border border-gray-200 border-t-gray-300 bg-gray-100 p-5">
                <CompetitorHeader icon="/assets/compare/tabnine.svg" title="Tabnine" />
                <ul className="ml-0 list-none text-gray-500">
                    <li className="mb-1.5 flex items-center justify-between">
                        Free Plan <MdCheck className="inline-block h-6 w-6 fill-violet-400" />
                    </li>
                    <li className="mb-1.5 flex items-center justify-between">
                        Choose your LLM <MdClose className="h-6 w-6 fill-gray-200" />
                    </li>
                    <li className="mb-1.5 flex items-center justify-between">
                        Bring your own LLM key <MdClose className="h-6 w-6 fill-gray-200" />
                    </li>
                    <li className="mb-1.5 flex items-center justify-between">
                        Commands <MdClose className="h-6 w-6 fill-gray-200" />
                    </li>
                    <li className="mb-1.5 flex items-center justify-between">
                        Fine-tuned LLM <MdCheck className="h-6 w-6 fill-violet-400" />
                    </li>
                </ul>
            </div>
        </ContentSection>
        <ContentSection className="mb-32 grid grid-cols-1 gap-1 md:grid-cols-3">
            <div className="col-span mr-10 pb-5 pt-10">
                <h2 className="mb-3 text-3xl">Cody vs Codeium</h2>
                <p className="mb-5 text-gray-500">
                    Codeium is an AI assistant that uses in-house built models and infrastructure to provide code completion, chat, and search. Codeium has trained models on over 70 programming langugages.
                </p>
                <Link className="btn btn-primary text-lg" href="/compare/codeium-vs-cody">
                    See full comparison
                </Link>
            </div>
            <div className="col-span rounded border border-gray-200 border-t-violet-400 p-5">
                <CodyHeader />
                <ul className="ml-0 list-none text-gray-500">
                    <li className="mb-1.5 flex items-center justify-between">
                        Free Plan <MdCheck className="inline-block h-6 w-6 fill-violet-400" />
                    </li>
                    <li className="mb-1.5 flex items-center justify-between">
                        Choose your LLM <MdCheck className="inline-block h-6 w-6 fill-violet-400" />
                    </li>
                    <li className="mb-1.5 flex items-center justify-between">
                        Bring your own LLM key <MdCheck className="inline-block h-6 w-6 fill-violet-400" />
                    </li>
                    <li className="mb-1.5 flex items-center justify-between">
                        Commands <MdCheck className="inline-block h-6 w-6 fill-violet-400" />
                    </li>
                    <li className="mb-1.5 flex items-center justify-between">
                        Visual Studio IDE support <MdClose className="inline-block h-6 w-6 fill-gray-200" />
                    </li>
                </ul>
            </div>
            <div className="col-span rounded border border-gray-200 border-t-gray-300 bg-gray-100 p-5">
                <CompetitorHeader icon="/assets/compare/codeium.svg" title="Codeium" />
                <ul className="ml-0 list-none text-gray-500">
                    <li className="mb-1.5 flex items-center justify-between">
                        Free Plan <MdCheck className="inline-block h-6 w-6 fill-violet-400" />
                    </li>
                    <li className="mb-1.5 flex items-center justify-between">
                        Choose your LLM <MdClose className="h-6 w-6 fill-gray-200" />
                    </li>
                    <li className="mb-1.5 flex items-center justify-between">
                        Bring your own LLM key <MdClose className="h-6 w-6 fill-gray-200" />
                    </li>
                    <li className="mb-1.5 flex items-center justify-between">
                        Commands <MdClose className="h-6 w-6 fill-gray-200" />
                    </li>
                    <li className="mb-1.5 flex items-center justify-between">
                        Visual Studio IDE support <MdCheck className="inline-block h-6 w-6 fill-violet-400" />
                    </li>
                </ul>
            </div>
        </ContentSection>
        <div className="-mt-40">
            <CodyCallToActionContentSection
                title="Get Cody, the AI coding assistant"
                description="Cody makes it easy to write, fix, and maintain code."
                cta1={{ text: 'Try Cody for free', ctaStyle: 'primaryButtonWhite', link: '/cody' }}
                cta2={{ text: 'See enterprise pricing', ctaStyle: 'link', link: '/cody/pricing' }}
            />
        </div>
    </Layout>
)

export default ComparePage
