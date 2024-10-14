import { FunctionComponent, ReactNode, useEffect, useRef, useState } from 'react'

import classNames from 'classnames'
import { Timer, ListChecks, Check } from 'lucide-react'

import { captureCustomEventWithPageData } from '../lib/utils'

import { ContentSection } from './ContentSection'
import { HubSpotForm } from './HubSpotForm'
import { Layout } from './Layout/Layout'
import ReadCaseStudyLink from './ReadCaseStudyLink'

import styles from '../styles/CustomHubspotForm.module.scss'

interface RequestInfoProps {
    meta: { title: string; description: string }
    formId?: string
}
const RequestInfo: FunctionComponent<RequestInfoProps> = ({ meta, formId }) => {
    const formContainerRef = useRef<HTMLDivElement>(null)
    const [formSubmitted, setFormSubmitted] = useState(false)

    useEffect(() => {
        if (formSubmitted && formContainerRef.current) {
            formContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }, [formSubmitted])

    return (
        <Layout
            meta={meta}
            className="bg-gray-50"
            heroAndHeaderClassName="!pt-0"
            hero={
                <ContentSection className="pt-[97px] lg:pt-28" parentClassName="pt-11 lg:pb-16 px-6 lg:px-20">
                    <div ref={formContainerRef}>
                        <div className="relative mx-auto flex w-full flex-col pt-0 lg:flex-row lg:gap-[57px]">
                            <div className="flex w-full max-w-[956px] flex-1 flex-col gap-y-20 lg:pt-0 lg:pr-0">
                                <div>
                                    <h1 className="mb-10 max-w-[524px] !text-5xl font-semibold text-gray-700 lg:!text-6xl lg:tracking-tighter">
                                        Bring code intelligence to your organization
                                    </h1>
                                    <HeaderListTab contents={HeaderListTabItems} />
                                </div>
                                <div className="hidden gap-20 lg:flex lg:flex-col">
                                    <SocialProofSection iconItems={SocialProofIcons} />
                                    <CaseStudySection />
                                </div>
                            </div>
                            <div className="w-full py-16 lg:w-1/2 lg:max-w-lg lg:px-6 lg:py-12">
                                <div className="sg-border-gradient-glow relative z-10 !rounded-3xl border border-[#E4E9F4] bg-white pl-0 pt-12 pr-0">
                                    <div className="flex flex-col items-center px-6 lg:px-12">
                                        <h2 className="mb-3 text-[32px] !leading-[38.4px] text-gray-700">
                                            Request demo
                                        </h2>
                                        <div className="text-center text-lg text-[#5E6E8C]">
                                            Fill out the form below and we’ll connect to discuss what Sourcegraph can do
                                            for your team.
                                        </div>
                                    </div>
                                    <div
                                        className={classNames(
                                            'mt-8 pl-6 pr-0 pb-[48px] lg:pl-12 lg:pr-[21px]',
                                            styles.requestInfoForm
                                        )}
                                    >
                                        <HubSpotForm
                                            masterFormName="contactMulti"
                                            chiliPiper={false}
                                            bookIt={true}
                                            formId={formId}
                                            form_submission_source="request-info"
                                            onFormSubmitted={() => {
                                                setFormSubmitted(true)
                                                captureCustomEventWithPageData('contact_us_submit', undefined, true)
                                            }}
                                            customSubmitButton='
                                            <div class="button-container">
                                            <button type="submit" class="custom-submit-button">
                                            <div class="custom-submit-button-div">
                                                <div className="!text-white">Request your demo</div>
                                                <img src="/assets/send.svg" />
                                            </div>
                                            </button>
                                            </div>'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ContentSection>
            }
        >
            <ContentSection parentClassName="!my-0 !py-0 !pb-8 lg:hidden" className="!my-0 !py-0 ">
                <div className="flex flex-col lg:hidden">
                    <SocialProofSection iconItems={SocialProofIcons} />
                    <CaseStudySection />
                </div>
            </ContentSection>

            <ExpectationsSection items={expectationItems} />
            <LinksCardSection />
            <div className="sg-demo-gradient h-44 w-full" />
        </Layout>
    )
}

interface HeaderListTabProps {
    contents: { icon: ReactNode; header: string; listItems: string[] }[]
}

const HeaderListTab: FunctionComponent<HeaderListTabProps> = ({ contents }) => (
    <div className="flex flex-col gap-10">
        {contents.map(content => (
            <div key={content.header} className="flex flex-row gap-x-4">
                <div>{content.icon}</div>
                <div className="flex flex-col gap-y-2">
                    <div className="text-xl font-semibold leading-[26px] tracking-tight text-gray-700">
                        {content.header}
                    </div>
                    <ul className="ml-0 list-inside pl-3 text-lg leading-[27px] text-gray-500">
                        {content.listItems.map(listItem => (
                            <li key={listItem}>{listItem}</li>
                        ))}
                    </ul>
                </div>
            </div>
        ))}
    </div>
)

interface SocialProofIconsProps {
    iconItems: {
        id: string
        src: string
        className: string
    }[]
}

const SocialProofSection: FunctionComponent<SocialProofIconsProps> = ({ iconItems }) => (
    <div>
        <div className="font-mono text-lg leading-[27px] tracking-normal text-[#5E6E8C]">
            Trusted by dev teams at leading companies
        </div>
        <div className="mt-6 flex flex-row flex-wrap justify-center gap-8 lg:justify-start">
            {iconItems.map(icon => (
                <img key={icon.id} src={icon.src} alt={`${icon.id}`} className={icon.className} />
            ))}
        </div>
    </div>
)

interface ExpectationsSectionProps {
    items: {
        id: number | string
        label: string
    }[]
}

const ExpectationsSection: FunctionComponent<ExpectationsSectionProps> = ({ items }) => (
    <ContentSection parentClassName="!pb-16 lg:!pb-24 !pt-8 lg:!pt-16">
        <div className="flex flex-col gap-16 lg:items-center">
            <h2 className="text-left text-[32px] leading-[38.4px] !tracking-tighter text-gray-700 lg:max-w-[400px] lg:max-w-full lg:text-center">
                What to expect from a Sourcegraph demo
            </h2>
            <div className="flex flex-col gap-10 lg:flex-row">
                {items.map(item => (
                    <div key={item.id} className="flex flex-row gap-4">
                        <div>
                            <Check className="text-gray-500" size={24} />
                        </div>
                        <div className="text-xl leading-[26px] tracking-tight text-gray-700 lg:max-w-[305px]">
                            {item.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </ContentSection>
)

interface ExpectationsSectionProps {
    items: {
        id: number | string
        label: string
    }[]
}

const LinksCardSection: FunctionComponent = () => {
    const items = [
        {
            label: 'Learn more',
            description:
                'See how leading enterprises across the world are using Sourcegraph to bring code intelligence to their dev teams.',
            href: '/case-studies',
            linkLabel: 'Read customer stories',
        },
        {
            label: 'Product support',
            description: 'If you’re using a Sourcegraph product and need some support, reach out via the link below.',
            href: '/contact',
            linkLabel: 'Contact support',
        },
    ]
    return (
        <ContentSection parentClassName="!py-0 ">
            <div className="flex flex-col gap-y-6 lg:flex-row lg:gap-y-0 lg:gap-x-6">
                {items.map(item => (
                    <div
                        key={item.label}
                        className="flex flex-1 flex-col items-center gap-16 rounded-2xl border border-[#E4E9F4] bg-white py-12 px-10"
                    >
                        <div>
                            <div className="mb-6 text-2xl font-semibold leading-[31.2px] tracking-tight text-gray-500">
                                {item.label}
                            </div>
                            <div className="mb-8 text-xl leading-[26px] tracking-tight text-gray-500">
                                {item.description}
                            </div>
                            <ReadCaseStudyLink
                                parentClassName="text-left"
                                linkClassName="btn btn-link btn-link-icon lg:focus:ring-gray-300 p-0 text-right text-violet-500 lg:text-gray-700 font-semibold tracking-normal lg:mx-0 lg:text-left"
                                href={item.href}
                                linkLabel={item.linkLabel}
                                openNewTab={true}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </ContentSection>
    )
}

const CaseStudySection: FunctionComponent = () => (
    <div className="flex flex-col items-center gap-y-8 pt-16 lg:flex-row lg:flex-row lg:gap-y-0 lg:gap-x-5 lg:pt-0">
        <img src="/assets/users-love-us.svg" className="h-[135px] w-[104px]" />
        <div className="sg-contact-sales rounded-2xl border border-[#E4E9F4] py-10 px-8">
            <div className="flex flex-col">
                <div className="mb-6 flex flex-col">
                    <span className="text-base leading-6 text-gray-500">Brendan Doyle</span>
                    <span className="text-sm leading-[21px] tracking-normal text-gray-700">
                        Senior Software Engineer, Qualtrics
                    </span>
                </div>
                <div className="text-xl leading-[26px] tracking-tight text-gray-700">
                    “Something that would've taken me multiple dev days was done in an hour with Cody.”
                </div>
                <div>
                    <ReadCaseStudyLink
                        openNewTab={true}
                        parentClassName="text-right pt-10"
                        linkClassName="btn btn-link btn-link-icon p-0 text-right text-gray-700 font-semibold !tracking-tight lg:mx-0 lg:text-left focus:ring-gray-300"
                        href="https://sourcegraph.com/case-studies/qualtrics-speeds-up-unit-tests-and-code-understanding-with-cody"
                    />
                </div>
            </div>
        </div>
    </div>
)

const HeaderListTabItems = [
    {
        icon: <Timer className="text-blurple-400" />,
        header: 'Increase developer productivity',
        listItems: [
            'Write and edit code faster with the latest AI models',
            'Pinpoint code behind bugs and regions with code search',
            'Automate day-to-day dev tasks like writing tests and documentation',
        ],
    },
    {
        icon: <ListChecks className="text-blurple-400" />,
        header: 'Solve complex engineering problems',
        listItems: [
            'Simplify large, tedious projects like code migrations with AI prompts',
            'Unblock developer onboarding with AI-based code explanation',
            'Enable developers to find and reuse code from your entire codebase',
        ],
    },
]
const SocialProofIcons = [
    {
        id: 'Target Logo',
        src: '/assets/icons/target-logo.svg',
        className: 'h-12 w-[34px]',
    },
    {
        id: 'Tesla Logo',
        src: '/assets/icons/tesla-logo.svg',
        className: 'h-12 w-[153px]',
    },
    {
        id: 'Uber Logo',
        src: '/assets/icons/uber-logo.svg',
        className: 'h-12 w-[72px]',
    },
    {
        id: 'Dropbox',
        src: '/assets/icons/dropbox-logo.svg',
        className: 'h-12 w-[163px]',
    },
    {
        id: 'Leidos',
        src: '/assets/icons/leidos-light.svg',
        className: 'h-12 w-[114px]',
    },
]

const expectationItems = [
    { id: 1, label: 'Learn about our products and solutions' },
    { id: 2, label: 'Discuss your current pain points around org-wide development' },
    { id: 3, label: 'Align on use cases for AI coding solutions' },
]

export default RequestInfo
