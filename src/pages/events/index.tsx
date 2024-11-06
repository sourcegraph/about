import type { FunctionComponent } from 'react'

import { ContentSection, Layout } from '../../components'
import EventsList from '../../components/EventsList'
const EventsPage: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph Events',
            description: 'Join us for live events.',
        }}
        hero={
            <div className="relative isolate bg-gray-50 px-6 pt-20 lg:px-8">
                <div className="text-center">
                    <h1>Live Events</h1>
                    <p className="mt-3 text-xl leading-8 text-gray-600">
                        Join us in person where we can chat about AI and code.
                    </p>

                    {/* <div className="absolute inset-y-0 -left-14 flex rotate-[20deg] scale-[2] md:-left-0">
                        <div className="h-96 w-4 bg-blue-300" />
                        <div className="h-96 w-4 bg-vermillion-300" />
                        <div className="h-96 w-4 bg-violet-400" />
                    </div> */}
                </div>
            </div>
        }
        className="bg-gray-50"
    >
        <ContentSection>
            <div className="mt- flex flex-col gap-10 rounded-lg border border-gray-200 bg-white px-10 py-12">
                {/* left side */}
                <div>
                    <h3 className="text-xl">
                        November 19th <span className="rounded-lg bg-violet-400 px-2 py-1 text-xs text-white">Upcoming</span>
                    </h3>

                    <div className="grid gap-y-5 gap-x-10 xl:grid-cols-2">
                        <div>
                            <h2 className="mt-4">AI Eng Talks ~ w/ Cloudflare, Sourcegraph & Jam.dev</h2>

                                <p className="mt-4 text-lg text-gray-600">
                                        Come hang out at Cloudflare HQ in SF w/ 100+ engineers to hear talks about scaled engineering with AI.
                                        Expect lightning talks about the engineering future & what's already possible. No sales pitches, just technical talks.
                                </p>
                            <div className="mt-4">
                                <h3>Location</h3>
                                <p className="mt-4 text-sm text-gray-500">
                                101 Townsend St, San Francisco, CA 94107, USA
                                </p>
                            </div>
                        </div>

                        <div className="mt-4">
                            <h3>Schedule</h3>
                            <p className="mt-4">👋 Welcome</p>                            
                            <ul>
                                <li>6:00 - 8:00 pm: Lightning talks, food, drinks & networking</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* right side */}
                <iframe
                    title="AI Dev Tools Night"
                    src="https://lu.ma/embed/event/evt-qVXLRhOHIcPsY5m/simple"
                    width="100%"
                    height="640"
                    className="rounded-xl"
                    allowFullScreen={false}
                    aria-hidden={false}
                />
            </div>
        </ContentSection>

        <EventsList />
    </Layout>
)
export default EventsPage
