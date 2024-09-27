import { FunctionComponent, useEffect, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { posthog } from 'posthog-js'

import { useAuthModal } from '../../context/AuthModalContext'
import { captureCustomEventWithPageData } from '../../lib/utils'

const HomeHero2024: FunctionComponent = () => {
    const [abTest, setAbTest] = useState('')

    const { openModal } = useAuthModal()

    useEffect(() => {
        posthog.onFeatureFlags(() => {
            const featureFlag = posthog.getFeatureFlag('platform-messaging-test')
            if (featureFlag === 'test-hard-eng-probs') {
                setAbTest('test-hard-eng-probs')
            } else if (featureFlag === 'test-operate-at-scale') {
                setAbTest('test-operate-at-scale')
            } else if (featureFlag === 'test-elevate-engineering') {
                setAbTest('test-elevate-engineering')
            } else {
                setAbTest('control')
            }
        })
    }, [])

    const handleOpenModal = (pagePosition: string): void => {
        captureCustomEventWithPageData('get_cody_onpage_click', pagePosition)
        openModal('home')
    }

    return (
        <div className="relative py-10 px-6 md:py-20 lg:py-28">
            {/* absolutely positioned items --------------------------------------- */}
            <Image
                src="/home/hero/left-context-tiles.svg"
                alt="left-context-tiles"
                width={600}
                height={600}
                className="pointer-events-none absolute top-0 left-0 -translate-x-10 opacity-30 2xl:opacity-100"
            />
            <Image
                src="/home/hero/right-context-tiles.svg"
                alt="right-context-tiles"
                width={600}
                height={600}
                className="pointer-events-none absolute top-0 right-0 hidden translate-x-10 opacity-30 md:block 2xl:opacity-100"
            />

            {/* content */}
            <div className="relative mx-auto max-w-7xl">
                {/* title ---------------------------------------------------- */}
                <h1 className="w-full text-center text-3xl font-medium sm:text-5xl md:text-7xl 2xl:text-[4rem]">
                    <span className="sg-gradient-text font-bold">Code Intelligence</span> for untangling
                    <br className="hidden md:inline-block" /> big, messy codebases
                </h1>

                {/* subtitle ---------------------------------------------------- */}
                <p className="text-balance mx-auto mt-5 max-w-xl text-center text-sm text-gray-500 sm:text-base md:text-xl lg:mt-8 lg:max-w-2xl">
                    Sourcegraph helps developers search, understand, and write code in complex codebases using{' '}
                    <span className="font-bold">code search</span> and{' '}
                    <span className="font-bold">context-aware AI</span>.
                </p>

                {/* action buttons ---------------------------------------------------- */}
                <div className="mx-auto mt-5 flex flex-col items-center justify-center gap-x-2 gap-y-2 sm:flex-row lg:mt-8">
                    <button
                        type="button"
                        className="btn btn-primary w-full bg-blurple-600 px-5 text-sm sm:w-auto sm:px-6 md:py-3 md:text-base"
                        onClick={() => handleOpenModal('top')}
                    >
                        <span className="hidden md:inline">Download the AI coding assistant</span>
                        <span className="md:hidden">Download Cody</span>
                    </button>

                    <Link
                        href="/contact/request-info"
                        title="Book a demo"
                        className="btn btn-secondary w-full px-5 text-sm sm:w-auto sm:px-6 md:py-3 md:text-base"
                        type="button"
                        onClick={() => captureCustomEventWithPageData('contact_sales_onpage_click', 'top')}
                    >
                        <div className="flex items-center justify-center">Book a demo</div>
                    </Link>
                </div>

                {/* images ---------------------------------------------------- */}
                <div className="relative mx-auto mt-10 max-w-4xl sm:mb-48 md:mb-32">
                    {/* cody */}
                    <div className="relative -translate-x-2 lg:translate-x-0">
                        <Image
                            src="/home/hero/prompts.svg"
                            alt="Prompts graphic"
                            width={100}
                            height={100}
                            className="absolute top-32 -left-10 hidden  lg:block"
                        />
                        <Image
                            src="/home/hero/cody.svg"
                            alt="Cody graphic"
                            width={600}
                            height={600}
                            className="w-[450px] sm:w-[500px]"
                        />
                    </div>

                    {/* code search */}
                    <div className="-translate-y-6 translate-x-1 sm:absolute sm:top-16 sm:right-0 sm:translate-x-0 sm:translate-y-0">
                        <Image
                            src="/home/hero/code-search.svg"
                            alt="Code search graphic"
                            width={500}
                            height={500}
                            className="w-[350px] sm:w-[500px]"
                        />
                    </div>
                </div>
            </div>
            {/* end content */}
        </div>
    )
}

export default HomeHero2024
