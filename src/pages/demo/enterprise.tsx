import { FunctionComponent, useEffect, useRef, useState } from 'react'

import classNames from 'classnames'

import { ContentSection, Heading, HubSpotForm, Layout } from '../../components'
import { ContactUsCta } from '../../components/cta/ContactUsCta'
import { RequestDemoCta } from '../../components/cta/RequestDemoCta'
import { ChooseYourLlmSection } from '../../components/Enterprise/ChooseYourLlmSection'
import { CompanyUsingCodySection } from '../../components/Enterprise/CompanyUsingCodySection'
import { EnterpriseGradeSection } from '../../components/Enterprise/EnterpriseGradeSection'
import { MigrationsSection } from '../../components/Enterprise/MigrationsSection'
import { NineCaseStudySection } from '../../components/Enterprise/NineCaseStudySection'
import { NutanixCaseStudySection } from '../../components/Enterprise/NutanixCaseStudySection'
import { ScalableSection } from '../../components/Enterprise/ScalableSection'
import { SecureSection } from '../../components/Enterprise/SecureSection'
import { SecurityFeatureSection } from '../../components/Enterprise/SecurityFeatureSection'
import { TrackVulnerabilitiesSection } from '../../components/Enterprise/TrackVulnerabilitiesSection'
import { UniversalSection } from '../../components/Enterprise/UniversalSection'
import { WriteCodeFasterSection } from '../../components/Enterprise/WriteCodeFasterSection'

const Enterprise: FunctionComponent = () => {
    const formContainerRef = useRef<HTMLDivElement>(null)
    const [formSubmitted, setFormSubmitted] = useState(false)
    const onScrollToForm = (): void => formContainerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })

    useEffect(() => {
        if (formSubmitted && formContainerRef.current) {
            formContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }, [formSubmitted])

    return (
        <Layout
            meta={{
                title: 'Sourcegraph - Enterprise',
                description:
                    "Give your teams the ability to search, write, and understand massive codebases through Sourcegraph's universal and secure Code Intelligence Platform.",
            }}
            className="bg-gray-50"
            hero={
                <div className="w-full" ref={formContainerRef}>
                    <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-6 px-2 pt-[112px] md:flex-row md:px-6">
                        <div className="flex w-full flex-1 flex-col gap-6">
                            <h1 className="md:text-6xl">Modern enterprises are powered by productive developers</h1>
                            <Heading size="h3">
                                Give your teams the ability to search, write, and understand massive codebases through
                                Sourcegraph's universal and secure Code Intelligence Platform.{' '}
                            </Heading>
                            {!formSubmitted && (
                                <img
                                    className="hidden md:block"
                                    src="/enterprise/cody-search.svg"
                                    alt="Cody and Code Search Product logo"
                                />
                            )}
                        </div>

                        <div className="w-full md:w-1/2">
                            <div className="relative z-10 order-1 rounded-2xl border-1 border-gray-200 bg-white pt-6 pb-0 pl-6 pr-[1px] md:order-2 md:pt-12 md:pb-[13px] md:pl-16 md:pr-[30px]">
                                <h2 className="mb-6 text-gray-700">Contact us for a demo</h2>
                                <h3 className="text-[18px] font-normal text-gray-500 lg:w-[95%]">
                                    Talk with a product specialist to learn more about Sourcegraph.
                                </h3>
                                <div
                                    className={classNames('mt-5', {
                                        'pb-[48px]': formSubmitted,
                                    })}
                                >
                                    <HubSpotForm
                                        masterFormName="contactMulti"
                                        chiliPiper={true}
                                        form_submission_source="request-info"
                                        onFormSubmitted={() => setFormSubmitted(true)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        >
            <CompanyUsingCodySection />

            {/* This is the ImprovedVelocitySection from the Enterprise page, edited to not include the product iconography */}
            <ContentSection
                className="relative z-10 flex max-w-[1232px] flex-col gap-6 md:flex-row"
                parentClassName="!md:px-[80px] !py-0"
            >
                <div className="flex h-[533px] flex-col justify-between px-0 py-16 md:px-10">
                    <div className="flex flex-col gap-4">
                        <Heading size="h2" className="!tracking-[-1px] text-black">
                            Improve velocity with faster code discovery and understanding
                        </Heading>
                        <p className="mb-0 text-lg leading-[27px] tracking-[-0.25px]">
                            Developers can find, navigate, and share code across entire codebases in seconds, increasing
                            development velocity and reducing time spent searching for answers.
                        </p>
                    </div>
                </div>
                <div className="h-auto rounded-2xl border-1 border-gray-200 bg-white px-6 py-16  md:max-w-[574px] md:px-20">
                    <p className="mb-0 leading-6 tracking-[-0.25px] text-gray-700">Satish Surapaneni</p>
                    <p className="mb-0 text-sm leading-[19.88px]">Senior Engineering Manager, F5</p>
                    <p className="mb-0 pt-3 text-[35px] font-normal leading-[43.75px] -tracking-[2px]">
                        "We are developing software faster than ever, with aggressive schedules, and across boundaries. Things
                        that used to be worked out in a closed room now need to be done while teams are spread out across the
                        globe.”
                    </p>
                </div>
            </ContentSection>
            <WriteCodeFasterSection />
            <MigrationsSection />
            <TrackVulnerabilitiesSection />
            <RequestDemoCta onClickContactUs={onScrollToForm} />
            <UniversalSection />
            <ChooseYourLlmSection />
            <ScalableSection />
            <NineCaseStudySection />
            <SecureSection />
            <NutanixCaseStudySection />
            <SecurityFeatureSection />
            <EnterpriseGradeSection />
            <ContactUsCta onClickContactUs={onScrollToForm} />
        </Layout>
    )
}

export default Enterprise
