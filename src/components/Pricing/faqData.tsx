import { ReactElement } from 'react'

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

export const faqData: FAQData = {
    cody: [
        {
            question: 'Is there a free trial of the paid plans?',
            answer: (
                <p>
                    Yes. We offer a free trial for our paid plans.{' '}
                    <Link
                        href="/get-started?t=enterprise"
                        title="Get started"
                        data-button-style={buttonStyle.text}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                    >
                        Get started
                    </Link>{' '}
                    with a free trial today.
                </p>
            ),
        },
        {
            question: 'What are executors?',
            answer: 'Executors are required to run Batch Changes server-side and to use code navigation’s auto-indexing functionality. The Enterprise Starter plan includes 2 executors and the Enterprise plan includes 4 executors.',
        },
        {
            question: 'My organization requires the use of its own legal contract. Which plan is right for me?',
            answer: (
                <p>
                    Only the Enterprise plan supports this. The Enterprise Starter plan uses our{' '}
                    <Link href="/terms" className="text-black underline">
                        online terms of service
                    </Link>
                    .
                </p>
            ),
        },
        {
            question: 'Does Sourcegraph offer discounts for educational and non-profit organizations?',
            answer: (
                <p>
                    Sourcegraph supports the work of educational organizations and nonprofits. Please{' '}
                    <Link
                        href="/contact/request-info?form_submission_source=pricing-enterprise"
                        title="contact Sourcegraph"
                        data-button-style={buttonStyle.text}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                    >
                        contact us
                    </Link>{' '}
                    about discounts for your development teams.
                </p>
            ),
        },
    ],
    codeSearch: [
        {
            question: 'Is there a free trial of the paid plans?',
            answer: (
                <p>
                    Yes. We offer a free trial for our paid plans.{' '}
                    <Link
                        href="/get-started?t=enterprise"
                        title="Get started"
                        data-button-style={buttonStyle.text}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                    >
                        Get started
                    </Link>{' '}
                    with a free trial today.
                </p>
            ),
        },
        {
            question: 'What are executors?',
            answer: 'Executors are required to run Batch Changes server-side and to use code navigation’s auto-indexing functionality. The Enterprise Starter plan includes 2 executors and the Enterprise plan includes 4 executors.',
        },
        {
            question: 'My organization requires the use of its own legal contract. Which plan is right for me?',
            answer: (
                <p>
                    Only the Enterprise plan supports this. The Enterprise Starter plan uses our{' '}
                    <Link href="/terms" className="text-black underline">
                        online terms of service
                    </Link>
                    .
                </p>
            ),
        },
        {
            question: 'Does Sourcegraph offer discounts for educational and non-profit organizations?',
            answer: (
                <p>
                    Sourcegraph supports the work of educational organizations and nonprofits. Please{' '}
                    <Link
                        href="/contact/request-info?form_submission_source=pricing-enterprise"
                        title="contact Sourcegraph"
                        data-button-style={buttonStyle.text}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                    >
                        contact us
                    </Link>{' '}
                    about discounts for your development teams.
                </p>
            ),
        },
    ],
}
