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
                        December 12th <span className="rounded-lg bg-violet-400 px-2 py-1 text-xs text-white">Upcoming</span>
                    </h3>

                    <div className="grid gap-y-5 gap-x-10 xl:grid-cols-2">
                        <div>
                            <h2 className="mt-4">Virtual Code AI Summit</h2>

                            <p className="mt-4 text-lg text-gray-600">
                            Featuring speakers from Google, Anthropic, Booking.com, Palo Alto Networks, Sourcegraph and more
                            </p>
                            
                        </div>  
                    </div>
                </div>
                {/* right side */}
                <div>
                    <a
                        href="https://sourcegraph.registration.goldcast.io/events/b650937d-ba9f-40ce-9429-35c3539a5bb1?utm_medium=website&utm_source=website"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-violet-500"
                    >
                        Learn more
                    </a>
                </div>
            </div>
        </ContentSection>

        <EventsList />
    </Layout>
)
export default EventsPage
