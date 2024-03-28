import { FunctionComponent, useEffect, useRef, useState } from 'react'

import { DotLottiePlayer } from '@dotlottie/react-player'
import classNames from 'classnames'

import { Heading, HubSpotForm, Layout } from '../../components'
import { ContactUsCta } from '../../components/cta/ContactUsCta'
import { RequestDemoCta } from '../../components/cta/RequestDemoCta'
import { ChooseYourLlmSection } from '../../components/Enterprise/ChooseYourLlmSection'
import { CompanyUsingCodySection } from '../../components/Enterprise/CompanyUsingCodySection'
import { EnterpriseGradeSection } from '../../components/Enterprise/EnterpriseGradeSection'
import { ImprovedVelocitySection } from '../../components/Enterprise/ImprovedVelocitySection'
import { MigrationsSection } from '../../components/Enterprise/MigrationsSection'
import { NineCaseStudySection } from '../../components/Enterprise/NineCaseStudySection'
import { NutanixCaseStudySection } from '../../components/Enterprise/NutanixCaseStudySection'
import { ScalableSection } from '../../components/Enterprise/ScalableSection'
import { SecureSection } from '../../components/Enterprise/SecureSection'
import { SecurityFeatureSection } from '../../components/Enterprise/SecurityFeatureSection'
import { TrackVulnerabilitiesSection } from '../../components/Enterprise/TrackVulnerabilitiesSection'
import { UniversalSection } from '../../components/Enterprise/UniversalSection'
import { WriteCodeFasterSection } from '../../components/Enterprise/WriteCodeFasterSection'
import { breakpoints } from '../../data/breakpoints'
import { useWindowWidth } from '../../hooks/windowWidth'

const Enterprise: FunctionComponent = () => {
    const windowWidth = useWindowWidth()
    const isMobile = windowWidth < breakpoints.md

    const formContainerRef = useRef<HTMLDivElement>(null)

    const [videoPlayed, setVideoPlayed] = useState(false)
    const [formSubmitted, setFormSubmitted] = useState(false)

    useEffect(() => {
        const videoDuration = 3090
        const transitionTime = 200

        const timeout = setTimeout(() => {
            setVideoPlayed(true)
        }, videoDuration - transitionTime)

        return () => clearTimeout(timeout)
    }, [])

    const onScrollToForm = (): void => formContainerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })

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
                    {!isMobile && (
                        <div className="absolute inset-0 top-[48px] z-0 mx-auto h-full max-w-[1280px] transition-opacity duration-1000 ease-in-out">
                            <DotLottiePlayer
                                className={`absolute inset-0 top-[30px] z-0 h-full w-full object-cover opacity-${
                                    videoPlayed ? '0' : '100'
                                }`}
                                src="https://lottie.host/07b21a4d-e532-47b7-ab01-7bd8faf4ba33/ORhWKPLwKI.lottie"
                                background="transparent"
                                speed={1}
                                direction={1}
                                autoplay={true}
                                loop={false}
                                renderer="svg"
                            />
                            <div
                                className={`absolute inset-0 top-[30px] z-0 h-full w-full bg-contain bg-center bg-no-repeat opacity-${
                                    videoPlayed ? '100' : '0'
                                }`}
                                // eslint-disable-next-line react/forbid-dom-props
                                style={{ backgroundImage: "url('../enterprise/Enterprise-hero-still.png')" }}
                            />
                        </div>
                    )}

                    <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-6 px-2 pt-[112px] md:px-6 lg:flex-row">
                        <div className="flex flex-1 flex-col gap-6">
                            <Heading size="h1">Modern enterprises are powered by productive developers</Heading>
                            <Heading size="h3">
                                Give your teams the ability to search, write, and understand massive codebases through
                                Sourcegraph's universal and secure Code Intelligence Platform.{' '}
                            </Heading>
                        </div>

                        <div className="w-full lg:w-[631px]">
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
            <ImprovedVelocitySection />
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
