import { FunctionComponent, useEffect, useState } from 'react'

import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import BarChartIcon from 'mdi-react/BarChartIcon'
import CalendarBlankIcon from 'mdi-react/CalendarBlankIcon'
import CloudUploadIcon from 'mdi-react/CloudUploadIcon'
import HeartOutlineIcon from 'mdi-react/HeartOutlineIcon'
import MagnifyIcon from 'mdi-react/MagnifyIcon'
import SourceBranchIcon from 'mdi-react/SourceBranchIcon'
import Link from 'next/link'

import { ContentSection, CustomerLogos, HubSpotForm, Layout, ThreeUpText, TwoColumnSection } from '@components'
import { buttonLocation, buttonStyle } from '@data'

interface Time {
    time: string
    label: string
    separator?: boolean
}

const Time: FunctionComponent<Time> = ({ time, label, separator = true }) => (
    <>
        <div>
            <div className="tw-text-4xl md:tw-text-6xl lg:tw-text-[8rem] xl:tw-text-[10.75rem] lg:tw-leading-none">
                {time}
            </div>
            <div className="tw-text-xl lg:tw-text-3xl xl:tw-text-4xl tw-tracking-wide">
                <span>{label.charAt(0)}</span>
                <span className="tw-hidden xs:tw-inline">{label.slice(1)}</span>
            </div>
        </div>
        {separator && (
            <span className="tw-text-3xl md:tw-text-6xl lg:tw-text-[7rem] xl:tw-text-[10.75rem] tw-mb-md md:tw-mb-8 xl:tw-mb-14 tw-mx-xxs md:tw-mx-sm xl:tw-mx-xl xl:tw-leading-none">
                :
            </span>
        )}
    </>
)

const Sourcegraph4: FunctionComponent = () => {
    const [time, setTime] = useState({
        days: '0',
        hours: '0',
        minutes: '0',
        seconds: '0',
        launched: false,
    })
    const launchDate = new Date('September 27, 2022 00:00 UTC').getTime()
    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    useEffect(() => {
        const getRemainingTime = (): void => {
            const now = new Date().getTime()
            const remainingTime = launchDate - now

            setTime({
                days: Math.trunc(remainingTime / day)
                    .toString()
                    .padStart(2, '0'),
                hours: Math.trunc((remainingTime % day) / hour)
                    .toString()
                    .padStart(2, '0'),
                minutes: Math.trunc((remainingTime % hour) / minute)
                    .toString()
                    .padStart(2, '0'),
                seconds: Math.trunc((remainingTime % minute) / second)
                    .toString()
                    .padStart(2, '0'),
                launched: now > launchDate,
            })
        }
        getRemainingTime()

        const countdown = setInterval(getRemainingTime, 1000)

        return () => clearInterval(countdown)
    }, [])

    return (
        <Layout
            meta={{
                title: 'Sourcegraph - Sourcegraph 4.0',
                description:
                    'Sourcegraph 4.0 is a new code intelligence platform that helps developers understand, visualize, and fix their codebase. The platform is moving to Sourcegraph 4.0.',
            }}
            heroAndHeaderClassName="tw-bg-white"
            hero={
                <div className="tw-px-sm tw-py-3xl md:tw-py-5xl">
                    <div className="tw-max-w-screen-xl tw-mx-auto tw-text-center">
                        <h1 className="tw-mb-md">The future of Sourcegraph is launching soon</h1>
                        <h3 className="tw-mb-md md:tw-mb-2xl tw-max-w-[850px] tw-mx-auto">
                            Buckle up and join us on the first Starship launch of Sourcegraph’s code intelligence
                            platform on{' '}
                            <Link href="#" passHref={true}>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a
                                    data-button-style={buttonStyle.text}
                                    data-button-location={buttonLocation.hero}
                                    data-button-type="cta"
                                    className="tw-font-normal"
                                >
                                    September 27, 2022
                                    <CalendarBlankIcon className="tw-inline tw-mb-1 tw-ml-xxs" size={24} />
                                </a>
                            </Link>
                        </h3>

                        {!time.launched && (
                            <div className="sg-bg-gradient-aurora tw-font-semibold tw-text-white tw-rounded-2xl tw-shadow-xl tw-flex tw-items-center tw-justify-center tw-p-md lg:tw-py-4xl lg:tw-px-16">
                                <Time time={time.days} label="Days" />
                                <Time time={time.hours} label="Hours" />
                                <Time time={time.minutes} label="Minutes" />
                                <Time time={time.seconds} label="Seconds" separator={false} />
                            </div>
                        )}
                    </div>
                </div>
            }
        >
            <ContentSection color="white" parentClassName="tw-pt-0 md:tw-pt-0">
                <TwoColumnSection
                    leftColumn={
                        <div className="lg:tw-pr-5xl">
                            <h2 className="tw-mb-md">Stay up-to-date about Sourcegraph 4.0</h2>
                            <p className="tw-mb-md tw-text-lg">
                                The new code intelligence platform helps you understand, visualize, and fix your
                                codebase so you can ship code faster.
                            </p>

                            <div className="tw-flex tw-flex-col">
                                <Link href="#" passHref={true}>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a
                                        data-button-style={buttonStyle.text}
                                        data-button-location={buttonLocation.hero}
                                        data-button-type="cta"
                                        className="tw-mb-xs"
                                    >
                                        Add to calendar
                                        <CalendarBlankIcon className="tw-inline tw-ml-xxs" />
                                    </a>
                                </Link>
                                <Link href="#" passHref={true}>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a
                                        data-button-style={buttonStyle.text}
                                        data-button-location={buttonLocation.hero}
                                        data-button-type="cta"
                                    >
                                        Read the PR
                                        <ArrowRightIcon className="tw-inline tw-ml-xxs" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    }
                    rightColumn={
                        <div className="tw-border-4 tw-border-solid sg-border-gradient-saturn tw-p-md">
                            <HubSpotForm formId="10675181-7cbe-43a4-a1b9-3a00835f18c8" />
                        </div>
                    }
                />

                <div className="tw-my-5xl">
                    <ThreeUpText
                        title="We handpicked a few enhancements that we know you’ll love"
                        items={[
                            {
                                icon: (
                                    <span className="tw-inline-block tw-bg-violet-100 tw-text-violet-400 tw-rounded-lg tw-p-3">
                                        <MagnifyIcon />
                                    </span>
                                ),
                                subtitle: 'Search improvements',
                                description: 'A faster, simpler, and more streamlined search experience with a new UI',
                            },
                            {
                                icon: (
                                    <span className="tw-inline-block tw-bg-violet-100 tw-text-violet-400 tw-rounded-lg tw-p-3">
                                        <CloudUploadIcon />
                                    </span>
                                ),
                                subtitle: 'Cloud-first deployment',
                                description: 'Secure, scalable, and dedicated cloud deployment on enterprise',
                            },
                            {
                                icon: (
                                    <span className="tw-inline-block tw-bg-violet-100 tw-text-violet-400 tw-rounded-lg tw-p-3">
                                        <SourceBranchIcon />
                                    </span>
                                ),
                                subtitle: 'Server-side Batch Changes',
                                description:
                                    ' Run large scale batch changes and iterate faster on updates across the codebase',
                            },
                            {
                                icon: (
                                    <span className="tw-inline-block tw-bg-violet-100 tw-text-violet-400 tw-rounded-lg tw-p-3">
                                        <HeartOutlineIcon />
                                    </span>
                                ),
                                subtitle: 'Improved admin experience',
                                description: 'Enhanced usage analytics, OpenTelemetry, and more',
                            },
                            {
                                icon: (
                                    <span className="tw-inline-block tw-bg-violet-100 tw-text-violet-400 tw-rounded-lg tw-p-3">
                                        <BarChartIcon />
                                    </span>
                                ),
                                subtitle: 'Relevant search aggregations',
                                description:
                                    'Code Insights will provide relevant high-level aggregations over search results',
                            },
                        ]}
                    />
                </div>

                <div className="tw-text-center">
                    <div className="tw-mb-3xl">
                        <h2 className="tw-mb-xs">Don’t just take it from us</h2>
                        <p className="tw-max-w-lg tw-mx-auto">
                            Developers at organizations around the globe rely on Sourcegraph to understand, fix, and
                            automate their codebase.
                        </p>
                    </div>
                </div>

                <CustomerLogos />
            </ContentSection>
        </Layout>
    )
}

export default Sourcegraph4
