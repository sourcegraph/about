import { FunctionComponent, ReactElement } from 'react'

import Link from 'next/link'

import { buttonStyle, buttonLocation } from '../../data/tracking'

export interface FAQItem {
    question: string
    answer: ReactElement | string
}

interface FAQData {
    cody: FAQItem[]
    codeSearch: FAQItem[]
    [key: string]: FAQItem[]
}

const ContactLink: FunctionComponent<{ slug?: string }> = ({ slug }) => (
    <Link
        href={slug ? `/contact/request-info/?form_submission_source=${slug}` : '/contact/request-info/'}
        title="Contact us"
        data-button-style={buttonStyle.text}
        data-button-location={buttonLocation.body}
        data-button-type="cta"
    >
        Contact us
    </Link>
)

export const faqData: FAQData = {
    cody: [
        {
            question: 'What’s the difference between the Cody Free, Pro, and Enterprise plans?',
            answer: (
                <>
                    <p>
                        Cody Free is best for individuals working on hobby projects or professional devs trying out AI
                        coding assistants. Usage limits apply.
                    </p>
                    <p>
                        Cody Pro is best for professional developers who want unlimited usage and context for larger
                        local codebases.
                    </p>
                    <p>
                        Cody Enterprise is for organizations needing security, scalability, and control. It uses the
                        Sourcegraph platform to provide context of an organization's remote codebase to Cody.
                    </p>
                </>
            ),
        },
        {
            question: 'How are autocompletions counted for the Cody Free plan?',
            answer: (
                <p>
                    Cody autocompletions are counted based on the number of suggestions that are served to the user in
                    their IDE as ghost text. This includes all suggestions whether or not they are accepted by the user.
                </p>
            ),
        },
        {
            question: 'How does Cody’s context and personalization work?',
            answer: (
                <>
                    <p>
                        Cody can retrieve codebase context to personalize responses in a number of ways. One way is with
                        embeddings, which are generated for local user repositories. Cody Free users can create
                        embeddings for up to 200MB of code and Cody Pro users can create embeddings for up to 1GB of
                        code.
                    </p>
                    <p>
                        Cody Enterprise uses Sourcegraph search to retrieve context. This method lets Cody pull context
                        from a team's full codebase at any scale.
                    </p>
                </>
            ),
        },
        {
            question: 'What forms of support are available for paid Cody plans?',
            answer: (
                <p>
                    Email and web portal support is available to both Cody Pro and Cody Enterprise customers, and you
                    can{' '}
                    <Link
                        href="https://sourcegraph.com/docs/sla"
                        title="Sourcegraph Docs"
                        data-button-style={buttonStyle.text}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                    >
                        read more about our SLAs
                    </Link>
                    . Premium support with enhanced SLAs is also available as an add-on for Cody Enterprise customers.
                </p>
            ),
        },
        {
            question: 'How can I pay for Cody Pro?',
            answer: <p>Cody Pro is billed on a monthly basis and can be paid with a credit card.</p>,
        },
        {
            question: 'How can I upgrade or downgrade my plan?',
            answer: (
                <p>
                    Users can upgrade or downgrade between Cody Free and Cody Pro within their account settings at any
                    time. To upgrade to Cody Enterprise, please{' '}
                    <Link
                        href="/contact/request-info"
                        title="contact Sourcegraph"
                        data-button-style={buttonStyle.text}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                    >
                        contact our Sales team.
                    </Link>{' '}
                </p>
            ),
        },
        {
            question:
                'What’s the difference between “flexible LLM options,” “bring your own LLM key,” and “bring your own LLM”?',
            answer: (
                <>
                    <p>Flexible LLM options: Users can select from multiple options to use for Cody chat.</p>
                    <p>
                        Bring your own LLM key: Enterprise customers can optionally provide their own LLM API key for
                        supported LLMs (including for LLM services such as Azure OpenAI and Amazon Bedrock). In this
                        scenario, customers pay for their own LLM consumption and we provide a pricing discount for
                        Cody.
                    </p>
                    <p>
                        Bring your own LLM: This is a future feature that will allow customers to bring their own LLM
                        models outside of the ones that Cody supports by default.
                    </p>
                    <p>
                        For more information about available LLM options, please{' '}
                        <Link
                            href="https://sourcegraph.com/docs/cody/capabilities/supported-models"
                            title="Sourcegraph Docs"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            see our docs.
                        </Link>{' '}
                    </p>
                </>
            ),
        },
        {
            question: 'Does Cody use my code to improve the models used by other people?',
            answer: (
                <p>
                    For Enterprise customers, Sourcegraph will not train on your company’s data. For Free and Pro tier
                    users, Sourcegraph will not train on your data without your permission.
                </p>
            ),
        },
        {
            question: 'Can Cody be run self-hosted?',
            answer: (
                <p>
                    Cody requires Cloud-based services to power its AI features. For customers looking for a fully
                    self-hosted or air-gapped solution, please <ContactLink />.
                </p>
            ),
        },
        {
            question: 'Is an annual contract required for any of the plans?',
            answer: <p>Cody Enterprise requires an annual contract. Cody Pro is paid on a monthly basis.</p>,
        },
        {
            question: 'How are active users counted and billed?',
            answer: (
                <>
                    <p>
                        <i>
                            Note: this only applies to Enterprise Cody contracts. Cody Pro users pay for a seat every
                            month, regardless of usage.
                        </i>
                    </p>
                    <p>
                        A billable user is one who is signed in to their Enterprise Sourcegraph account and actively
                        interacts with Cody (e.g. they see suggested autocompletions, they run commands or chat with
                        Cody, they start new discussions, clear chat history, or copy text from chats, they change Cody
                        settings, and more). Simply having Cody installed is not enough to be considered a billable
                        user.
                    </p>
                    <p>
                        <Link
                            href="https://sourcegraph.com/docs/admin/pricing"
                            title="Cody pricing details"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            See a more comprehensive list of user actions that are included in our docs.
                        </Link>
                    </p>
                </>
            ),
        },
    ],
    codeSearch: [
        {
            question: 'How do I deploy Sourcegraph Code Search? Can I run it self-hosted?',
            answer: 'Code Search can be deployed using Sourcegraph Cloud (we host) or Sourcegraph Self-hosted (you host).',
        },
        {
            question: 'Is my data secure when connected to Code Search?',
            answer: (
                <p>
                    Sourcegraph has security and reliability controls built for the most demanding enterprises. To learn
                    more, see our{' '}
                    <Link
                        href="/security"
                        title="Get started"
                        data-button-style={buttonStyle.text}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                    >
                        Security page.
                    </Link>
                </p>
            ),
        },
        {
            question: 'What if I want both Code Search and Cody Enterprise?',
            answer: (
                <p>
                    You can purchase both Code Search Enterprise and Cody Enterprise and run them off of the same
                    Sourcegraph deployment. <ContactLink /> to learn more.
                </p>
            ),
        },
        {
            question: 'How can I pay for Code Search?',
            answer: (
                <p>
                    Code Search requires an annual contract. <ContactLink /> to learn more.
                </p>
            ),
        },
    ],
    codeIntelligence: [
        {
            question: 'What is the Code Intelligence Platform?',
            answer: 'The Code Intelligence Platform refers to the full platform offering from Sourcegraph. Today, this includes both the Cody and Code Search products, which are available at a discount when purchased as a bundle.',
        },
        {
            question: 'How can I pay for the Code Intelligence Platform plan?',
            answer: (
                <p>
                    The Code Intelligence Platform plan requires an annual contract.{' '}
                    <ContactLink slug="pricing-code-intelligence" /> to learn more.
                </p>
            ),
        },
    ],
}
