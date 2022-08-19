import { FunctionComponent, useEffect, useState } from 'react'

import classNames from 'classnames'
import BarChartIcon from 'mdi-react/BarChartIcon'
import CalendarBlankIcon from 'mdi-react/CalendarBlankIcon'
import CloudUploadIcon from 'mdi-react/CloudUploadIcon'
import HeartOutlineIcon from 'mdi-react/HeartOutlineIcon'
import MagnifyIcon from 'mdi-react/MagnifyIcon'
import UpdateIcon from 'mdi-react/UpdateIcon'

import { ContentSection, CtaSection, CustomerLogos, HubSpotForm, Layout, ThreeUpText, Modal, Badge } from '@components'
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

const calendarInviteLink =
    'https://calendar.google.com/event?action=TEMPLATE&tmeid=NmUwMGZiMGRtaHFqdWdjcjZyOXQwdmtrczQgY19lMDYwOW9xYzF2ZTRoczBhMjk5djdvNjR1MEBn&tmsrc=c_e0609oqc1ve4hs0a299v7o64u0%40group.calendar.google.com'

const Sourcegraph4: FunctionComponent = () => {
    const [modal, setModal] = useState(false)
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
    }, [day, hour, minute, second, launchDate])

    return (
        <Layout
            meta={{
                title: 'Sourcegraph - Sourcegraph 4.0',
                description:
                    'Introducing Sourcegraph 4.0, the code intelligence platform for the modern development team.',
                image: 'https://storage.googleapis.com/sourcegraph-assets/about.sourcegraph.com/meta/sourcegraph-4.png',
            }}
            heroAndHeaderClassName="tw-bg-white"
            className={classNames({ 'tw-blur-[6px]': modal })}
            hero={
                <div className="tw-px-sm tw-pt-3xl md:tw-pt-5xl">
                    <div className="tw-max-w-screen-xl tw-mx-auto tw-text-center">
                        <h1 className="tw-mb-md">The future of Sourcegraph is launching soon</h1>
                        <h3 className="tw-mb-md md:tw-mb-2xl tw-max-w-[850px] tw-mx-auto">
                            Join us for the first Sourcegraph Starship on{' '}
                            <a
                                href={calendarInviteLink}
                                rel="noopener noreferrer"
                                target="_blank"
                                data-button-style={buttonStyle.text}
                                data-button-location={buttonLocation.hero}
                                data-button-type="cta"
                                className="tw-font-normal"
                            >
                                September 27, 2022
                                <CalendarBlankIcon className="tw-inline tw-mb-1 tw-ml-xxs" size={24} />
                            </a>
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
            <CtaSection
                title="Sourcegraph 4.0"
                description="In the first Sourcegraph Starship, we'll be launching the code intelligence platform for the modern development team. Stay up-to-date about the launch of Sourcegraph 4.0."
                cta1={{
                    text: 'Remind me',
                    button: true,
                    onClick: () => setModal(true),
                }}
                cta2={{
                    text: 'Add to calendar',
                    icon: <CalendarBlankIcon />,
                    link: calendarInviteLink,
                }}
            />

            <Modal title="Get notified when Sourcegraph 4.0 launches" open={modal} handleClose={() => setModal(false)}>
                <HubSpotForm formId="10675181-7cbe-43a4-a1b9-3a00835f18c8" />
            </Modal>

            <ContentSection color="white" parentClassName="tw-pt-0 md:tw-pt-0">
                <div className="tw-mb-5xl">
                    <ThreeUpText
                        title="Here's a sneak peek at what we're launching"
                        fullWidthTitle={true}
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
                                subtitle: 'Enterprise Cloud deployment',
                                description: 'Secure, easy, and scalable dedicated Cloud instances',
                            },
                            {
                                icon: (
                                    <span className="tw-inline-block tw-bg-violet-100 tw-text-violet-400 tw-rounded-lg tw-p-3">
                                        <img src="/icons/batch-changes.svg" alt="" width={24} height={24} />
                                    </span>
                                ),
                                subtitle: (
                                    <div>
                                        Server-side Batch Changes <Badge text="Beta" />
                                    </div>
                                ),
                                description:
                                    'Run large-scale batch changes and iterate faster on updates across the codebase',
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
                                    'Aggregations of search results help to refine searches and illuminate usage patterns',
                            },
                            {
                                icon: (
                                    <span className="tw-inline-block tw-bg-violet-100 tw-text-violet-400 tw-rounded-lg tw-p-3">
                                        <UpdateIcon />
                                    </span>
                                ),
                                subtitle: 'Multi-version upgrades',
                                description: 'Upgrade from Sourcegraph 3.29 to Sourcegraph 4.0 in a few simple steps ',
                            },
                        ]}
                    />
                </div>

                <div className="tw-text-center">
                    <div className="tw-mb-5xl">
                        <h2 className="tw-max-w-[680px] tw-mx-auto tw-mb-xs">
                            Join these engineering orgs pushing forward modern software development
                        </h2>
                        <p className="tw-max-w-lg tw-mx-auto">
                            More than a million developers hopped aboard Sourcegraph.{' '}
                            <a
                                href={calendarInviteLink}
                                rel="noopener noreferrer"
                                target="_blank"
                                data-button-style={buttonStyle.text}
                                data-button-location={buttonLocation.body}
                                data-button-type="cta"
                            >
                                Join us
                            </a>{' '}
                            to find out more about where we're going with the universe of code.
                        </p>
                    </div>
                </div>

                <CustomerLogos />
            </ContentSection>
        </Layout>
    )
}

export default Sourcegraph4
