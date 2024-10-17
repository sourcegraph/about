import { useEffect, useRef, useState } from 'react'

import classNames from 'classnames'
import { NextPage } from 'next'

import { Layout, ContentSection, HubSpotForm, CodyPartners } from '../../components'
import { BentoWithMockup } from '../../components/bentoWithMockup'
import { NineCaseStudySection } from '../../components/Enterprise/NineCaseStudySection'
import HomePageCta from '../../components/HomePageCta'
import ReadCaseStudyLink from '../../components/ReadCaseStudyLink'
import { captureCustomEventWithPageData } from '../../lib/utils'

import styles from '../../styles/CustomHubspotForm.module.scss'

export const CodeAiBuyersGuide: NextPage = () => {
    const meta = {
        title: 'Sourcegraph - Code AI Buyers Guide',
        description: "Buyer's guide to AI Coding Tools",
        externalTitle: 'Sourcegraph - Code AI Buyers Guide',
        externalDescription: "Buyer's guide to AI Coding Tools",
        canonical: 'https://sourcegraph.com/whitepapers/code-ai-buyers-guide',
    }

    const formContainerRef = useRef<HTMLDivElement>(null)
    const [formSubmitted, setFormSubmitted] = useState(false)

    useEffect(() => {
        if (formSubmitted && formContainerRef.current) {
            formContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }, [formSubmitted])
    const handleOpenModal = (pagePosition: string): void => {
        captureCustomEventWithPageData('get_cody_onpage_click', pagePosition)
    }
    const statistics = [
        { label: '75%', description: 'reduction in time spent answering questions' },
        {
            label: '3x',
            description: 'time spent on value-add tasks, such as coding, writing tests, and reviewing code',
        },
    ]
    return (
        <Layout
            className="overflow-hidden bg-gray-50"
            meta={meta}
            heroAndHeaderClassName="md:!pt-[72px]"
            hero={
                <ContentSection className="!max-w-[1152px]">
                    <BentoWithMockup
                        isVariantStyle={true}
                        label="Guide"
                        customTitle="The ultimate Buyer’s Guide for AI coding tools"
                        imgSrc="/assets/resources/guideMockup.svg"
                    />
                </ContentSection>
            }
        >
            <ContentSection
                parentClassName="!mb-0 !pb-0 !pt-0"
                className="mt-16 grid !max-w-[1152px] grid-cols-1 gap-0 md:mt-0 md:grid-cols-2 md:gap-16"
            >
                <div>
                    <h3 className="text-gray-700 lg:max-w-[577px]">
                        Learn how to choose the right AI tools to boost productivity and innovation for your engineering
                        teams.
                    </h3>
                    <p className="mt-10 text-lg font-semibold leading-[27px] tracking-tight text-gray-700">
                        In this guide, you’ll learn:
                    </p>
                    <ul className="ml-[22px] text-lg leading-[27px] tracking-tight text-gray-700 lg:max-w-[577px]">
                        <li className="mb-1">How to navigate the rapidly evolving landscape of AI coding tools</li>
                        <li className="mb-1">
                            Questions to ask when evaluation AI tools that best fit your teams' key needs and workflows
                        </li>
                        <li className="mb-1">
                            Practical tips for ensuring security when using AI tools with sensitive code
                        </li>
                    </ul>
                    <div className="mt-10 text-lg leading-[27px] text-gray-700 lg:max-w-[577px]">
                        <span className="font-semibold">Download now</span> and start empowering your engineering teams
                        with the right AI tools.
                    </div>
                </div>
                <div ref={formContainerRef} className="w-full py-16 md:h-fit md:px-6 md:py-0">
                    <div className="sg-border-gradient-glow relative z-10 !rounded-3xl border border-gray-200 bg-white pl-0 pt-12 pr-0">
                        <div className="flex flex-col items-center px-6 md:px-12">
                            <h2 className="mb-3 text-center text-gray-700">Get your Buyer’s Guide</h2>
                        </div>
                        <div
                            className={classNames(
                                'mt-8 pl-6 pr-0 pb-[48px] md:pl-12 md:pr-[21px]',
                                styles.requestInfoForm
                            )}
                        >
                            <HubSpotForm
                                masterFormName="contactMulti"
                                chiliPiper={false}
                                bookIt={true}
                                formId="94289fb7-54e1-4ec4-a30d-62b4089d76fb"
                                form_submission_source="code-ai-buyers-guide"
                                onFormSubmitted={() => {
                                    setFormSubmitted(true)
                                }}
                                sfdcCampaignId="701UV00000GQMRuYAP"
                            />
                        </div>
                    </div>
                </div>
            </ContentSection>
            <div className="mx-auto flex w-full !max-w-[1152px] flex-col items-center py-28">
                <h2 className="max-w-[760px] text-center text-gray-700">
                    See how Sourcegraph is helping leading enterprises unlock value with AI coding
                </h2>
                <div className="flex items-center">
                    <CodyPartners isLight={true} className="!pb-16 pt-16" />
                </div>
                <ReadCaseStudyLink
                    parentClassName="text-left"
                    linkClassName="btn btn-link btn-link-icon leading-6 focus:ring-gray-300 p-0 text-right text-gray-700 font-semibold tracking-normal lg:mx-0 lg:text-left"
                    href="/case-studies"
                    linkLabel="Read the customer stories"
                    openNewTab={true}
                />
            </div>
            <NineCaseStudySection
                className="!max-w-[1152px]"
                items={statistics}
                description={
                    <h5 className="mb-0 flex flex-col gap-y-4 text-gray-700">
                        <span>
                            “I really can't express how blown away I am Cody. I can't go back to... whatever it was like
                            before.{' '}
                        </span>
                        <span>I use Cody every day, all day long."</span>
                    </h5>
                }
                linkLabel="Read the customer story"
                author="– Software Engineer at Leidos"
                imgSrc="/assets/icons/leidos-light.svg"
            />
            <ContentSection className="!max-w-[1152px] !py-28" parentClassName="!my-0 !py-0">
                <HomePageCta handleOpenModal={handleOpenModal} isVariantStyle={true} />
            </ContentSection>
        </Layout>
    )
}

export default CodeAiBuyersGuide
