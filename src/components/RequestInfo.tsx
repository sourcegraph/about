import { FunctionComponent, ReactNode, useEffect, useRef, useState } from 'react'

import classNames from 'classnames'
import { Timer, ListChecks, Check } from 'lucide-react'
import Link from 'next/link'

import { captureCustomEventWithPageData } from '../lib/utils'

import { LogoGrid } from './cody/LogoGrid'
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
                        <div className="relative mx-auto flex w-full flex-col pt-0 lg:flex-row lg:gap-[24px]">
                            <div className="flex w-full max-w-[697px] flex-1 flex-col gap-y-20 lg:pt-0 lg:pr-0">
                                <div>
                                    <h1 className="mb-10 max-w-[524px] text-gray-700">
                                        Bring code intelligence to your organization
                                    </h1>
                                    <HeaderListTab contents={HeaderListTabItems} />
                                </div>
                                <div className="hidden gap-20 lg:flex lg:flex-col">
                                    <LogoGrid mainLogo="sofi" showCta={false} />
                                    <CaseStudySection />
                                </div>
                            </div>
                            <div className="w-full py-16 lg:h-fit lg:w-1/2 lg:max-w-lg lg:px-6 lg:py-12">
                                <div className="sg-border-gradient-glow relative z-10 !rounded-3xl border border-gray-200 bg-white pl-0 pt-12 pr-0">
                                    <div className="flex flex-col items-center px-6 lg:px-12">
                                        <h2 className="mb-3 text-gray-700">Request demo</h2>
                                        <div className="text-center text-base leading-[27px] text-gray-400 lg:leading-6">
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
                                                <div>Request your demo</div>
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
                    <LogoGrid mainLogo="sofi" showCta={false} />
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
                    <ul className="ml-[12px] list-outside pl-3 text-lg leading-[27px] text-gray-500">
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
        <div className="text-center font-mono text-lg leading-[27px] tracking-normal text-gray-400 lg:text-left">
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
            <h2 className="text-left text-gray-700 lg:max-w-[400px] lg:max-w-full lg:text-center">
                What to expect from a Sourcegraph demo
            </h2>
            <div className="flex flex-col gap-10 lg:flex-row">
                {items.map(item => (
                    <div key={item.id} className="flex flex-row gap-4">
                        <div>
                            <Check className="text-gray-500 lg:text-blue-400" size={24} />
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
                        className="flex flex-1 flex-col items-center gap-16 rounded-2xl border border-gray-200 bg-white py-12 px-10"
                    >
                        <div>
                            <h4 className="mb-6 text-gray-500">{item.label}</h4>
                            <h5 className="mb-8 text-gray-500">{item.description}</h5>
                            <ReadCaseStudyLink
                                parentClassName="text-left"
                                linkClassName="btn btn-link btn-link-icon focus:ring-gray-300 p-0 text-right text-gray-700 font-semibold tracking-normal lg:mx-0 lg:text-left"
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
    <div className="flex flex-col items-center gap-y-8 pt-16 lg:flex-row lg:items-start lg:gap-y-0 lg:gap-x-5 lg:pt-0">
        <Link href="https://www.g2.com/products/sourcegraph/reviews" target="_blank">
            <img src="/assets/users-love-us.webp" className="h-[135px] min-h-[135px] w-[104px] min-w-[104px]" />
        </Link>
        <div className="sg-contact-sales max-w-[573px] rounded-2xl border border-gray-200 py-16 pl-10 pr-16">
            <div className="flex flex-col">
                <div className="mb-8 text-2xl leading-[31.2px] tracking-tight text-gray-700">
                    “Something that would've taken me multiple dev days was done in an hour with Cody.”
                </div>
                <div className="mb-10 flex flex-col">
                    <span className="text-base leading-6 text-gray-500">Brendan Doyle</span>
                    <span className="text-sm leading-[21px] tracking-normal text-gray-700">
                        Senior Software Engineer, Qualtrics
                    </span>
                </div>
                <div>
                    <ReadCaseStudyLink
                        openNewTab={true}
                        parentClassName="text-left pt-0"
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
            'Pinpoint code behind bugs and regressions with code search',
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
        className: 'h-10 w-[29px]',
    },
    {
        id: 'Tesla Logo',
        src: '/assets/icons/tesla-logo.svg',
        className: 'h-10 w-[125.714px]',
    },
    {
        id: 'Uber Logo',
        src: '/assets/icons/uber-logo.svg',
        className: 'h-10 w-[59.048px]',
    },
    {
        id: 'Dropbox',
        src: '/assets/icons/dropbox-logo.svg',
        className: 'h-10 w-[119.048px]',
    },
    {
        id: 'Leidos',
        src: '/assets/icons/leidos-light.svg',
        className: 'h-10 w-[93.333px]',
    },
]

const expectationItems = [
    { id: 1, label: 'Learn about our products and solutions' },
    { id: 2, label: 'Discuss your current pain points around org-wide development' },
    { id: 3, label: 'Align on use cases for AI coding solutions' },
]

export default RequestInfo
