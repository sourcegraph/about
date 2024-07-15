import { FunctionComponent } from 'react'

import { ContentSection, Layout } from '../../components'
import EventsList from '../../components/EventsList'

const EventsPage: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph Events',
            description: 'Join us for live events.',
            image: 'https://sourcegraph.com/assets/events/ai-dev-tools-night.png',
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
                        August 6 <span className="rounded-lg bg-violet-400 px-2 py-1 text-xs text-white">Upcoming</span>
                    </h3>

                    <div className="grid gap-y-5 gap-x-10 xl:grid-cols-2">
                        <div>
                            <h2 className="mt-4">AI Dev Tools Night</h2>

                            <p className="mt-4 text-lg text-gray-600">
                                Join us and learn about the latest advancements in AI, language models, and open source.
                                This meetup is organized by developers for developers and sponsored by Sourcegraph.
                            </p>
                            <div className="mt-4">
                                <h3>Location</h3>
                                <p className="mt-4 text-sm text-gray-500">
                                    103 Montgomery St, San Francisco, CA 94129, USA
                                </p>
                            </div>
                        </div>

                        <div className="mt-4">
                            <h3>Schedule</h3>
                            <p className="mt-4">👋 Welcome</p>
                            <ul>
                                <li>6:00 - 6:05 pm: Quinn Slack</li>
                            </ul>

                            <p className="mt-4">🎤 Talks</p>
                            <ul>
                                <li>
                                    We'll have great speakers from Netlify, Google DeepMind, Nvidia, and more. Check
                                    back this page for more info!
                                </li>
                            </ul>

                            <p className="mt-4">🍕 Social hour</p>
                            <ul>
                                <li>7:25 - 8:30 pm</li>
                                <li>Yes, food will be served.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* right side */}
                <iframe
                    title="AI Dev Tools Night"
                    src="https://lu.ma/embed/event/evt-z8ZgBgQoiOE91JK/simple"
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
