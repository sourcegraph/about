import { FunctionComponent } from 'react'
import { Layout, Heading, ContentSection, FAQItem, Accordion } from '../components'

const StartupPage: FunctionComponent = () => {
    const faqData: FAQItem[] = [
        {
            question: 'What benefits does the Sourcegraph for Startups program offer?',
            answer: 'The program offers a 50% discount on Sourcegraph Enterprise for up to 2 years, as well as dedicated support and resources to help startups succeed.',
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
            answer: 'Yes; you will need a Sourcegraph account registered to your business email address.',
        },
        {
            question: 'What if I am a startup but my company is not on the VC list?',
            answer: 'The program is currently limited to startups affiliated with the listed VCs, but we may expand in the future.',
        },
        // Add more FAQ items as needed
    ]

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