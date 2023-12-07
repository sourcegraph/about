import { FunctionComponent } from 'react'

import classNames from 'classnames'
import Link from 'next/link'

import { ContentSection, Layout } from '../../components'
import { useAuthModal } from '../../context/AuthModalContext'
import { buttonLocation, buttonStyle } from '../../data/tracking'

const GetStartedButton: FunctionComponent<{ className?: string }> = ({ className }) => {
    const { openModal } = useAuthModal()

    const handleOpenModal = (): void => openModal('cody')

    return (
        <button
            title="Get started"
            className={classNames('btn btn-primary', className)}
            type="button"
            onClick={handleOpenModal}
        >
            Get started
        </button>
    )
}

const ContactUsButton: FunctionComponent<{ className?: string }> = ({ className }) => (
    <Link
        href="/contact/request-info?form_submission_source=pricing-cody-enterprise"
        className={classNames('btn btn-outline-primary w-full md:w-auto', className)}
        title="Contact us"
        data-button-style={buttonStyle.outline}
        data-button-location={buttonLocation.bodyDemo}
        data-button-type="cta"
    >
        Contact us
    </Link>
)

const ComparePage: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph Cody Compare',
            description: 'Feature comparison of Sourcegraph Cody and other code AI assistants.',
        }}
        hero={
            <div className="container mx-auto pt-5xl text-center">
                <h1 className="flex items-center justify-center gap-3">
                    Compare
                </h1>
                <p className="mt-6 text-3xl text-black">Compare Cody to other code AI assistants.</p>
            </div>
        }
    >
        <ContentSection className="grid grid-cols-1 gap-lg md:grid-cols-3 ">
            <div className="col-span pt-10 pb-10">
                <h2 className="text-3xl mb-5">Cody vs GitHub Copilot</h2>
                <p className="mb-5">Copilot is an AI code assistant that offers autocomplete, chat, and commands. It has strong autocomplete performance using the OpenAI Codex model, and it offers in-IDE chat with GPT-4.</p>
                <Link className="btn btn-primary text-lg" href="/compare/copilot-vs-cody">See full comparison</Link>
            </div>
            <div className="col-span text-center border pt-10 pb-10 border-gray-200 rounded border-t-16 border-gray-200 p-xs shadow-lg sm:p-md border-t-violet-400">
              <img src="/cody-logomark-default.svg" alt="Cody Logo" className="h-[48px] w-[48px] m-auto mb-2" />
              <h3 className="text-2xl mb-4">Cody</h3>
              <ul className="ml-0 list-none">
                <li className="mb-1">✓ Free Plan</li>
                <li className="mb-1">✓ Personalized responses using codebase context</li>
                <li className="mb-1">✓ Choose your LLM</li>
                <li className="mb-1">✓ Bring your own LLM key</li>
                <li className="mb-1">✓ Custom commands</li>
              </ul>
            </div>
            <div className="col-span text-center pt-10 pb-10 rounded border-t-16 border-gray-200 sm:p-md border-t-violet-300 bg-gray-100 shadow-sm">
              <img src="/assets/compare/github-copilot.svg" alt="GitHub Copilot Logo" className="h-[48px] w-[48px] m-auto mb-2" />
              <h3 className="text-2xl mb-4">GitHub Copilot</h3>
              <ul className="ml-0 list-none">
                <li className="mb-1">x Free Plan</li>
                <li className="mb-1">x Personalized responses using codebase context</li>
                <li className="mb-1">x Choose your LLM</li>
                <li className="mb-1">x Bring your own LLM key</li>
                <li className="mb-1">x Custom commands</li>
              </ul>
            </div>
        </ContentSection>

        <ContentSection className="grid grid-cols-1 gap-lg md:grid-cols-3 ">
            <div className="col-span pt-10 pb-10">
                <h2 className="text-3xl mb-5">Cody vs CodeWhisperer</h2>
                <p className="mb-5">Amazon CodeWhisperer is an AI code assistant from Amazon focused on autocomplete, free for individuals with AWS Builder IDs. Uniquely, CodeWhisperer is optimized to give code completions based on best practices for using AWS APIs.</p>
                <Link className="btn btn-primary text-lg" href="/compare/amazon-codewhisperer-vs-cody">See full comparison</Link>
            </div>
            <div className="col-span text-center border pt-10 pb-10 border-gray-200 rounded border-t-16 border-gray-200 p-xs shadow-lg sm:p-md border-t-violet-400">
              <img src="/cody-logomark-default.svg" alt="Cody Logo" className="h-[48px] w-[48px] m-auto mb-2" />
              <h3 className="text-2xl mb-4">Cody</h3>
              <ul className="ml-0 list-none">
                <li className="mb-1">✓ Free Plan</li>
                <li className="mb-1">✓ Choose your LLM</li>
                <li className="mb-1">✓ Bring your own LLM key</li>
                <li className="mb-1">✓ Autocomplete</li>
                <li className="mb-1">✓ Commands</li>
              </ul>
            </div>
            <div className="col-span text-center pt-10 pb-10 rounded border-t-16 border-gray-200 sm:p-md border-t-violet-300 bg-gray-100 shadow-sm">
              <img src="/assets/compare/amazon-codewhisperer.svg" alt="Amazon CodeWhisperer" className="h-[48px] w-[48px] m-auto mb-2" />
              <h3 className="text-2xl mb-4">Amazon CodeWhisperer</h3>
              <ul className="ml-0 list-none">
                <li className="mb-1">✓ Free Plan</li>
                <li className="mb-1">x Choose your LLM</li>
                <li className="mb-1">x Bring your own LLM key</li>
                <li className="mb-1">✓ Autocomplete</li>
                <li className="mb-1">x Commands</li>
              </ul>
            </div>
        </ContentSection>

        <ContentSection className="grid grid-cols-1 gap-lg md:grid-cols-3 ">
            <div className="col-span pt-10 pb-10">
                <h2 className="text-3xl mb-5">Cody vs Cursor</h2>
                <p className="mb-5">Cursor is an “AI-first Code Editor.” Unlike other solutions which are commonly IDE extensions and plugins, Cursor itself is a fork of VS Code. This gives Cursor some unique functionality, including its “Auto-debug” feature that can attempt to fix errors that appear in the VS Code terminal.
                </p>
                <Link className="btn btn-primary text-lg" href="/compare/cursor-vs-cody">See full comparison</Link>
            </div>
            <div className="col-span text-center border pt-10 pb-10 border-gray-200 rounded border-t-16 border-gray-200 p-xs shadow-lg sm:p-md border-t-violet-400">
              <img src="/cody-logomark-default.svg" alt="Cody Logo" className="h-[48px] w-[48px] m-auto mb-2" />
              <h3 className="text-2xl mb-4">Cody</h3>
              <ul className="ml-0 list-none">
                <li className="mb-1">✓ Free Plan</li>
                <li className="mb-1">✓ Choose your LLM</li>
                <li className="mb-1">✓ Bring your own LLM key</li>
                <li className="mb-1">✓ Autocomplete</li>
                <li className="mb-1">✓ Commands</li>
              </ul>
            </div>
            <div className="col-span text-center pt-10 pb-10 rounded border-t-16 border-gray-200 sm:p-md border-t-violet-300 bg-gray-100 shadow-sm">
              <img src="/assets/compare/cursor.svg" alt="Cursor Logo" className="h-[48px] w-[48px] m-auto mb-2" />
              <h3 className="text-2xl mb-4">Cursor</h3>
              <ul className="ml-0 list-none">
                <li className="mb-1">✓ Free Plan</li>
                <li className="mb-1">x Choose your LLM</li>
                <li className="mb-1">✓ Bring your own LLM key</li>
                <li className="mb-1">x Autocomplete</li>
                <li className="mb-1">x Commands</li>
              </ul>
            </div>
        </ContentSection>

        <ContentSection className="grid grid-cols-1 gap-lg md:grid-cols-3 ">
            <div className="col-span pt-10 pb-10">
                <h2 className="text-3xl mb-5">Cody vs Tabnine</h2>
                <p className="mb-5">Tabnine is an AI assistant primarily focused on code autocomplete. The most unique aspect of Tabnine is its hybrid LLM approach. Tabnine Pro offers a model where users can run the Tabnine AI models entirely on their local machine.</p>
                <Link className="btn btn-primary text-lg" href="/compare/tabnine-vs-cody">See full comparison</Link>
            </div>
            <div className="col-span text-center border pt-10 pb-10 border-gray-200 rounded border-t-16 border-gray-200 p-xs shadow-lg sm:p-md border-t-violet-400">
              <img src="/cody-logomark-default.svg" alt="Cody Logo" className="h-[48px] w-[48px] m-auto mb-2" />
              <h3 className="text-2xl mb-4">Cody</h3>
              <ul className="ml-0 list-none">
                <li className="mb-1">✓ Free Plan</li>
                <li className="mb-1">✓ Choose your LLM</li>
                <li className="mb-1">✓ Bring your own LLM key</li>
                <li className="mb-1">✓ Commands</li>
                <li className="mb-1">✓ Chat</li>
              </ul>
            </div>
            <div className="col-span text-center pt-10 pb-10 rounded border-t-16 border-gray-200 sm:p-md border-t-violet-300 bg-gray-100 shadow-sm">
              <img src="/assets/compare/tabnine.svg" alt="Tabnine Logo" className="h-[48px] w-[48px] m-auto mb-2" />
              <h3 className="text-2xl mb-4">Tabnine</h3>
              <ul className="ml-0 list-none">
                <li className="mb-1">✓ Free Plan</li>
                <li className="mb-1">x Choose your LLM</li>
                <li className="mb-1">x Bring your own LLM key</li>
                <li className="mb-1">x Commands</li>
                <li className="mb-1">x Chat</li>
              </ul>
            </div>
        </ContentSection>
    </Layout>
)

export default ComparePage
