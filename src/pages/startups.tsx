import { FunctionComponent, useState, useEffect } from 'react'
import { Layout, Heading, ContentSection, FAQItem } from '../components'

import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import classNames from 'classnames'

const StartupPage: FunctionComponent = () => {
    const faqData: FAQItem[] = [
        {
            question: 'What benefits does the Sourcegraph for Startups program offer?',
            answer: 'The program offers 6 months of free access to Cody Pro for up to 25 users.',
        },
        {
            question: 'Who is eligible for the Sourcegraph for Startups program?',
            answer: 'Startups must be affiliated with one of our listed VC firms (see the full list below). They must be early-stage, having raised up to Series A funding. They also will need a Sourcegraph account registered to their company email.',
        },
        {
            question: 'What VCs do you work with for the program?',
            answer: 'Applicants must be associated with one of the following: a16z, Craft Ventures, Felicis, Geodesic Capital, Insight Partners, Redpoint Ventures, or Sequoia Capital.',
        },
        {
            question: 'Do I need a Sourcegraph account to apply?',
            answer: 'Yes; you will need a Sourcegraph account registered to your company email address.',
        },
        {
            question: 'What do',
            answer: 'As part of the program, we ask that you share your feedback on the product with us. We will also ask to interview you after 6 months to get your feedback on Cody.',
        },
        {
            question: 'What if I am a startup but my company is not on the VC list?',
            answer: 'The program is currently limited to startups affiliated with the listed VCs, but we may expand in the future.',
        },
        // Add more FAQ items as needed
    ]

const Accordion: FunctionComponent<{
    question: string
    answer: React.ReactNode
    index: number
    selectedOption: string
}> = ({ question, answer, index, selectedOption }) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = (): void => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        setIsOpen(false)
    }, [selectedOption])
    return (
        <div className="faq rounded-lg border border-gray-200 bg-white" key={index}>
            <button
                type="button"
                className={classNames(
                    'grid w-full grid-cols-12 items-center  rounded-t-lg p-5 text-left text-base font-semibold leading-5 -tracking-[0.25px] focus:outline-none',
                    isOpen ? 'bg-gray-50' : ''
                )}
                onClick={handleToggle}
            >
                <span className="col-span-11 text-gray-700">{question}</span>
                {isOpen ? (
                    <ChevronUpIcon
                        className="col-span-1 w-4 justify-self-end font-bold text-gray-500"
                        strokeWidth={2.7}
                    />
                ) : (
                    <ChevronDownIcon
                        className="col-span-1 w-4 justify-self-end font-bold text-gray-500"
                        strokeWidth={2.7}
                    />
                )}
            </button>
            <div
                className={classNames(
                    'transition-max-height overflow-hidden duration-700 ease-in-out',
                    isOpen ? 'max-h-[500px] ' : 'max-h-0'
                )}
            >
                <div className="p-5 leading-5 tracking-[-0.25px] text-gray-500">{answer}</div>
            </div>
        </div>
    )
}

    return (
        <Layout
            meta={{
                title: 'Sourcegraph for Startups',
                description: 'Startups affiliated with our VC parters can get 6 months of Cody Pro, for up to 25 users, for free.',
            }}
        >
            <ContentSection className="text-center">
                <Heading size="h1" className="!text-[52px] !font-semibold !leading-[62px] !tracking-[-1px]">
                    Sourcegraph for Startups
                </Heading>
                <p className="text-xl">Empowering early-stage startups with code intelligence</p>
            </ContentSection>

            <ContentSection>
                <Heading size="h2">About the Program</Heading>
                <ul className="list-disc pl-6">
                    <li>50% discount on Sourcegraph Enterprise for up to 2 years</li>
                    <li>Dedicated support and resources for startups</li>
                    <li>Access to the Sourcegraph community and events</li>
                    <li>Opportunity to showcase your startup on the Sourcegraph blog and social media channels</li>
                </ul>
            </ContentSection>

            <ContentSection>
                <Heading size="h2">Frequently Asked Questions</Heading>
                <div className="grid gap-4">
                    {faqData.map((item, index) => (
                        <Accordion key={index} question={item.question} answer={item.answer} index={index} />
                    ))}
                </div>
            </ContentSection>
        </Layout>
    )
}

export default StartupPage