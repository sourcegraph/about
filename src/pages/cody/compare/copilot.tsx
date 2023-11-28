import { FunctionComponent } from 'react'

import classNames from 'classnames'
import Link from 'next/link'

import { ContentSection, Layout } from '../../../components'
import { useAuthModal } from '../../../context/AuthModalContext'
import { buttonLocation, buttonStyle } from '../../../data/tracking'

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

const PLAN_COLORS: Record<'freeTier' | 'enterprise', { borderColorClass: string; textColorClass: string }> = {
    freeTier: {
        borderColorClass: 'border-t-violet-300',
        textColorClass: 'text-violet-400',
    },
    enterprise: {
        borderColorClass: 'border-t-violet-400',
        textColorClass: 'text-violet-400',
    },
}

const PricingPage: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph Cody vs. GitHub Copilot',
            description: 'Feature comparison of Sourcegraph Cody and GitHub Copilot',
        }}
        hero={
            <div className="container mx-auto pt-5xl text-center">
                <h1 className="flex items-center justify-center gap-3">
                    <img src="/cody-logomark-default.svg" alt="Cody Logo" className="h-[48px] w-[48px]" /> Cody{' '}
                </h1>
                <p className="mt-6 text-3xl text-black">Sourcegraph Cody vs. GitHub Copilot</p>
            </div>
        }
    >
        <ContentSection className="grid grid-cols-1 gap-lg md:grid-cols-12">
            <div className="col-span-full">
                <table>
                    <thead>
                        <tr>
                            <th>Feature</th>
                            <th>Sourcegraph Cody</th>
                            <th>GitHub Copilot Individual</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Autocomplete</td>
                            <td>✅</td>
                            <td>✅</td>
                        </tr>
                        <tr>
                            <td>Chat</td>
                            <td>✅</td>
                            <td>✅</td>
                        </tr>
                        <tr>
                            <td>Inline Chat</td>
                            <td>✅</td>
                            <td>❌</td>
                        </tr>
                        <tr>
                            <td>
                                Commands, e.g.,:
                                <li>Generate unit tests</li>
                                <li>Explain code</li>
                            </td>
                            <td>✅</td>
                            <td>❌</td>
                        </tr>
                        <tr>
                            <td>Users can choose and change models</td>
                            <td>
                                ✅<li>Anthropic Claude 2</li> <li>OpenAI GPT-3.5-Turbo</li> <li>OpenAI GPT-4</li>
                            </td>
                            <td>✅ GPT-4</td>
                        </tr>
                        <tr>
                            <td>Autocomplete model</td>
                            <td>
                                ✅<li>Anthropic Claude Instant</li>
                                <li>OpenAI GPT-3.5 Turbo</li>
                                <li>Anthropic Claude Instant</li> <li>OpenAI GPT-3.5 Turbo</li>
                            </td>
                            <td>❌</td>
                        </tr>
                        <tr>
                            <td>Bring your own LLM API key with Azure OpenAI & AWS Bedrock</td>
                            <td>✅</td>
                            <td>❌</td>
                        </tr>
                        <tr>
                            <td>Code in the local file</td>
                            <td>✅</td>
                            <td>✅</td>
                        </tr>
                        <tr>
                            <td>Neighboring editor tabs</td>
                            <td>✅</td>
                            <td>✅</td>
                        </tr>
                        <tr>
                            <td>Entire codebase spanning all code hosts (via embeddings)</td>
                            <td>✅</td>
                            <td>❌</td>
                        </tr>
                        <tr>
                            <td>Zero retention for data sharing</td>
                            <td>✅</td>
                            <td>❌ Available, but only on Business tier</td>
                        </tr>
                        <tr>
                            <td>IP indemnity</td>
                            <td>✅</td>
                            <td>❌ No indemnity for pre-release software</td>
                        </tr>

                        <tr>
                            <td>Web app</td>
                            <td>✅</td>

                            <td>❌</td>
                        </tr>
                        <tr>
                            <td>VS Code</td>
                            <td>✅</td>

                            <td>✅</td>
                        </tr>
                        <tr>
                            <td>JetBrains</td>
                            <td>✅</td>

                            <td>❌</td>
                        </tr>
                        <tr>
                            <td>Neovim</td>
                            <td>✅ Experimental</td>
                            <td>✅</td>
                        </tr>
                        <tr>
                            <td>Visual Studio</td>
                            <td>❌</td>

                            <td>✅</td>
                        </tr>
                        <tr>
                            <td>Mobile App</td>
                            <td>❌</td>

                            <td>⚠️ Coming soon</td>
                        </tr>
                    </tbody>
                </table>
                Last updated: 2023-11-27
            </div>
        </ContentSection>
    </Layout>
)

export default PricingPage
