import { FunctionComponent } from 'react'

import classNames from 'classnames'
import Link from 'next/link'

import { GITHUB, GITLAB, GOOGLE } from '../../pages/constants'
import { TelemetryProps } from '../../telemetry'
import { Heading } from '../Heading'

import { ExternalProvider } from './ExternalProvider'

export const CallToActionWithCody: FunctionComponent<{ className?: string } & TelemetryProps> = ({
    className,
    telemetryRecorder,
}) => (
    <div
        className={classNames(
            'relative flex max-w-full flex-col overflow-hidden py-[96px] px-6 md:max-h-[384px] md:flex-row md:items-center md:py-[114.5px]',
            className
        )}
    >
        <img
            src="/home/background.svg"
            alt="bg"
            className="absolute -right-[600px] top-10 hidden w-[100%] opacity-50 md:inline-block"
            aria-hidden={true}
            loading="lazy"
        />
        <img
            src="/home/background.svg"
            alt="bg"
            className="absolute -left-[900px] -top-20 hidden w-[100%] opacity-50 md:inline-block"
            aria-hidden={true}
            loading="lazy"
        />
        <div className="z-10 flex flex-1 flex-col">
            <div className="max-w-[444px] md:self-end">
                <Heading className="mb-[10px] !text-[36px] text-white" size="h2">
                    Try Cody for free
                </Heading>
                <p className="mb-0 text-lg text-gray-200">
                    Cody writes code and answers questions for you, speeding up work and keeping devs in flow.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                    <ExternalProvider
                        className="w-fit flex-1 justify-center !font-normal"
                        providerType={GITHUB}
                        label="GitHub"
                        source="about-home"
                        telemetryRecorder={telemetryRecorder}
                    />
                    <ExternalProvider
                        className="w-fit flex-1 justify-center !font-normal"
                        providerType={GITLAB}
                        label="GitLab"
                        source="about-home"
                        telemetryRecorder={telemetryRecorder}
                    />
                    <ExternalProvider
                        className="w-fit flex-1 justify-center !font-normal"
                        providerType={GOOGLE}
                        label="Google"
                        source="about-home"
                        telemetryRecorder={telemetryRecorder}
                    />
                </div>
                <p className="mt-4 mb-0 text-[14px] text-white opacity-70">
                    By registering, you agree to our{' '}
                    <Link
                        className="text-violet-300 underline"
                        target="_blank"
                        href="https://about.sourcegraph.com/terms"
                    >
                        Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link
                        className="text-violet-300 underline"
                        target="_blank"
                        href="https://about.sourcegraph.com/terms/privacy"
                    >
                        Privacy Policy
                    </Link>
                </p>
            </div>
        </div>
        <div className="my-[42px] border-b border-gray-400 md:my-0 md:mx-[42px] md:h-[266px] md:border-l" />
        <div className="z-10 flex flex-1 flex-col">
            <Heading size="h4" className="mb-4 text-white">
                Cody Enterprise
            </Heading>
            <p className="mb-8 max-w-[444px] text-lg text-gray-200">
                Cody Enterprise provides additional security, scalability, and control for your organization. Unlimited
                usage and context-awareness of your entire codebase.
            </p>
            <div className="flex flex-col sm:flex-row">
                <Link
                    href="https://sourcegraph.com/contact/request-info"
                    title="Get Cody Enterprise"
                    className="hover:bg-color-violet-600 rounded-[5px] border border-white py-2 px-6 text-white"
                >
                    Request info
                </Link>
            </div>
        </div>
    </div>
)
