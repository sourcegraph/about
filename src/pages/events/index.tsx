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
        <EventsList />
    </Layout>
)
export default EventsPage
