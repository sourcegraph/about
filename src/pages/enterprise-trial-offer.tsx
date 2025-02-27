import { FunctionComponent, useEffect, useRef, useState } from 'react'

import classNames from 'classnames'

import { Layout, CodyPartners, ContentSection, HubSpotForm, Blockquote } from '../components'
import { ChooseYourLlmSection } from '../components/Enterprise/ChooseYourLlmSection'
import { EnterpriseGradeSection } from '../components/Enterprise/EnterpriseGradeSection'
import { ProcessTable } from '../components/Enterprise/ProcessTable'
import { UniversalSection } from '../components/Enterprise/UniversalSection'
import { captureCustomEventWithPageData } from '../lib/utils'

const EnterpriseTrialOffer: FunctionComponent = () => {
    const formContainerRef = useRef<HTMLDivElement>(null)
    const [formSubmitted, setFormSubmitted] = useState(false)

    useEffect(() => {
        if (formSubmitted && formContainerRef.current) {
            formContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }, [formSubmitted])

    return (
        <Layout
            meta={{
                title: 'Cody | Enterprise Trial Offer',
                description:
                    'Get started with a trial of Cody Enterprise to try the AI coding assistant with your team.',
            }}
            className="bg-gray-50"
            heroAndHeaderClassName="!pt-0"
            hero={
                <ContentSection className="pt-[79px] md:pt-[57px]" parentClassName="pt-11 pb-[64px] px-[24px] md:px-20">
                    <div ref={formContainerRef}>
                        <div className="relative mx-auto flex w-full flex-col gap-10 pt-0 md:flex-row md:gap-10">
                            <div className="flex w-full flex-1 flex-col md:pr-10 md:pt-10 md:pr-20">
                                <h1 className="mb-10 max-w-[533px] !text-5xl text-gray-700 md:!text-4xl md:tracking-tighter">
                                    Productive <span className="hidden md:inline-block">dev teams</span>{' '}
                                    <span className="md:hidden">developers</span> are powered by Cody Enterprise
                                </h1>
                                <h5 className="max-w-[533px] text-xl leading-[26px] text-gray-700 md:mb-6">
                                    Start your free trial of Cody Enterprise and give your teams the ability to search,
                                    write, and understand massive codebases through Sourcegraph's universal and secure
                                    Code Intelligence Platform.
                                </h5>
                                <Blockquote
                                    className="hidden w-full !py-0 pl-6 !pr-0 md:block"
                                    largeText={false}
                                    logo={{
                                        src: '/assets/enterprise/logo-tiles/leidos.svg',
                                        alt: 'leidos logo',
                                        href: '',
                                    }}
                                    authorPointer={false}
                                    leftBorderAccent={true}
                                    borderLeftColor="border-l-gray-200"
                                    displayLogoOnTop={true}
                                    quoteClassName="text-2xl text-gray-700 leading-[31.2px] tracking-tight"
                                    quote="I use Cody every day, all day long. No matter what I write, Cody helps improve it... you can make Cody explain things to you every step of the way."
                                    author={
                                        <span className="tracking-tight text-gray-500">
                                            Rob Linger{' '}
                                            <span className="block text-sm tracking-normal text-gray-700">
                                                AI Software Architect, Leidos
                                            </span>
                                        </span>
                                    }
                                />
                            </div>
                            <div className="w-full md:w-1/2">
                                <div className="overflow-hidden !rounded-2xl ">
                                    <div className="sg-border-gradient-light relative z-10 !rounded-2xl border-1 bg-white pl-12 pt-12 pb-[11px] pr-2.5">
                                        <h2 className="mb-6 text-gray-700">Start your free trial</h2>
                                        <div
                                            className={classNames('mt-5', {
                                                'pb-[48px]': formSubmitted,
                                            })}
                                        >
                                            <HubSpotForm
                                                masterFormName="enterpriseTrial"
                                                chiliPiper={false}
                                                bookIt={true}
                                                form_submission_source="cody-enterprise-trial"
                                                onFormSubmitted={() => {
                                                    setFormSubmitted(true)
                                                    captureCustomEventWithPageData('contact_us_submit', undefined, true)
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ContentSection>
            }
        >
            <ProcessTable />
            <CodyPartners isLight={true} />
            <UniversalSection />
            <ChooseYourLlmSection />
            <EnterpriseGradeSection />
        </Layout>
    )
}

export default EnterpriseTrialOffer
