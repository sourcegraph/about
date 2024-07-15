import { FunctionComponent, useEffect, useRef, useState } from 'react'

import classNames from 'classnames'

import { HubSpotForm, Layout } from '../components'
import { CodyChooseLlmDualTheme } from '../components/cody/dual-theme/CodyChooseLlmDualTheme'
import { HowCodyWorks } from '../components/cody/HowCodyWorks'
import { EnterpriseGradeSection } from '../components/Enterprise/EnterpriseGradeSection'

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
                title: 'Cody | Enterprise Trial Offer',
                description:
                    'Get started with a trial of Cody Enterprise to try the AI coding assistant with your team.',
            }}
            className="bg-gray-50"
            hero={
                <div className="w-full" ref={formContainerRef}>
                    <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-6 px-2 pt-[112px] md:flex-row md:px-6">
                        <div className="flex w-full flex-1 flex-col gap-6">
                            <h1 className="md:text-6xl">Get a free Cody Enterprise trial</h1>
                            <h3>
                            Try out Cody Enterprise with your entire team. Trials are available for teams of 25 or more developers, free for 30 days.{' '}
                            </h3>
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
                                <h2 className="mb-6 text-gray-700">Request your free trial</h2>
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
            <HowCodyWorks isLight={true} />
            <CodyChooseLlmDualTheme isLight={true} />
            <EnterpriseGradeSection />
        </Layout>
    )
}

export default Enterprise
