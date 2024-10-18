import { FunctionComponent, useEffect, useState } from 'react'

import { DotLottiePlayer } from '@dotlottie/react-player'
import Link from 'next/link'

import { Layout, Hero } from '../components'
import { BentoWithMockup } from '../components/bentoWithMockup'
import { ContactUsCta } from '../components/cta/ContactUsCta'
import { RequestDemoCta } from '../components/cta/RequestDemoCta'
import { ChooseYourLlmSection } from '../components/Enterprise/ChooseYourLlmSection'
import { CompanyUsingCodySection } from '../components/Enterprise/CompanyUsingCodySection'
import { EnterpriseGradeSection } from '../components/Enterprise/EnterpriseGradeSection'
import { ImprovedVelocitySection } from '../components/Enterprise/ImprovedVelocitySection'
import { MigrationsSection } from '../components/Enterprise/MigrationsSection'
import { NineCaseStudySection } from '../components/Enterprise/NineCaseStudySection'
import { NutanixCaseStudySection } from '../components/Enterprise/NutanixCaseStudySection'
import { ScalableSection } from '../components/Enterprise/ScalableSection'
import { SecureSection } from '../components/Enterprise/SecureSection'
import { SecurityFeatureSection } from '../components/Enterprise/SecurityFeatureSection'
import { TrackVulnerabilitiesSection } from '../components/Enterprise/TrackVulnerabilitiesSection'
import { UniversalSection } from '../components/Enterprise/UniversalSection'
import { WriteCodeFasterSection } from '../components/Enterprise/WriteCodeFasterSection'
import { breakpoints } from '../data/breakpoints'
import { buttonLocation, buttonStyle } from '../data/tracking'
import { useWindowWidth } from '../hooks/windowWidth'
import { captureCustomEventWithPageData } from '../lib/utils'

const Enterprise: FunctionComponent = () => {
    const windowWidth = useWindowWidth()
    const isMobile = windowWidth < breakpoints.md

    const [videoPlayed, setVideoPlayed] = useState(false)

    useEffect(() => {
        const videoDuration = 3090
        const transitionTime = 200

        const timeout = setTimeout(() => {
            setVideoPlayed(true)
        }, videoDuration - transitionTime)

        return () => clearTimeout(timeout)
    }, [])

    return (
        <Layout
            meta={{
                title: 'Sourcegraph - Enterprise',
                description:
                    "Give your teams the ability to search, write, and understand massive codebases through Sourcegraph's universal and secure Code Intelligence Platform.",
            }}
            className="overflow-hidden bg-gray-50"
            hero={
                <div className="">
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
                                style={{ backgroundImage: "url('enterprise/Enterprise-hero-still.png')" }}
                            />
                        </div>
                    )}
                    <Hero
                        variant="transparent"
                        className="relative z-10 mx-auto flex items-center justify-center !pt-[122px] pb-8  text-center md:!mt-[-36px] md:w-[750px]  md:pb-[96px]"
                        title="Modern enterprises are powered by productive developers"
                        subtitle="Give your teams the ability to search, write, and understand massive codebases through Sourcegraph's universal and secure Code Intelligence Platform."
                        centerContent={true}
                        cta={
                            <div className="mx-auto flex w-[356px] flex-col items-center justify-center gap-6 sm:flex sm:w-auto  sm:flex-row  md:gap-4">
                                <Link
                                    className="btn btn-primary w-full sm:w-auto"
                                    href="/contact/request-info"
                                    title="Book a demo"
                                    data-button-style={buttonStyle.primary}
                                    data-button-location={buttonLocation}
                                    data-button-type="cta"
                                    onClick={() => captureCustomEventWithPageData('start_enterprise_trial_click')}
                                >
                                    Book a demo
                                </Link>
                                <Link
                                    className="btn btn-secondary w-full items-center sm:w-auto"
                                    href="/pricing"
                                    title="See Pricing"
                                    data-button-style={buttonStyle.outline}
                                    data-button-location={buttonLocation.hero}
                                    data-button-type="cta"
                                >
                                    See pricing
                                </Link>
                            </div>
                        }
                        displayUnderNav={true}
                    />
                </div>
            }
        >
            <CompanyUsingCodySection />
            <div className="relative z-10 mx-auto max-w-[1232px] px-6 md:px-0 md:pb-28">
                <BentoWithMockup isVariantTitle={true} href="/resources/gartner-mq" />
            </div>
            <ImprovedVelocitySection />
            <WriteCodeFasterSection />
            <MigrationsSection />
            <TrackVulnerabilitiesSection />
            <RequestDemoCta />
            <UniversalSection />
            <ChooseYourLlmSection />
            <ScalableSection />
            <NineCaseStudySection />
            <SecureSection />
            <NutanixCaseStudySection />
            <SecurityFeatureSection />
            <EnterpriseGradeSection />
            <ContactUsCta />
        </Layout>
    )
}

export default Enterprise
