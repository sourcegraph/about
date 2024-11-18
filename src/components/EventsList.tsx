import { isAfter, parseISO } from 'date-fns'

import { ContentSection } from './ContentSection'
import { Tabs } from './Tabs'

interface Event {
    title: string
    location: string
    date: string
    link?: string
}

const allEvents: Event[] = [
    {
        title: 'Virtual Code AI Summit',
        location: 'Online Event',
        date: '2024-12-12',
        link: 'https://sourcegraph.registration.goldcast.io/events/b650937d-ba9f-40ce-9429-35c3539a5bb1?utm_medium=website&utm_source=website',
    },
    {
        title: 'QCon SF',
        location: 'San Francisco, CA',
        date: '2024-11-22',
        link: 'https://qconsf.com/',
    },
    {
        title: 'AI Eng Talks ~ w/ Cloudflare, Sourcegraph & Jam.dev',
        location: 'San Francisco, CA',
        date: '2024-11-19',
        link: 'https://lu.ma/AI-Talks',
    },
    {
        title: 'AWS re:Invent',
        location: 'Las Vegas, NV',
        date: '2024-12-06',
        link: 'https://reinvent.awsevents.com/',
    },
    {
        title: 'Your Cody questions answered live! (December 2024)',
        location: 'StreamYard',
        date: '2024-12-06',
        link: 'https://streamyard.com/watch/v8G25YeCgVEF',
    },
    {
        title: 'designFAO',
        location: 'Portugal',
        date: '2024-10-11',
        link: 'https://friends.figma.com/events/details/figma-portugal-presents-designfao-partner-event-2/',
    },
    {
        title: 'All Things Open',
        location: 'Raleigh, NC',
        date: '2024-10-27',
        link: 'https://2024.allthingsopen.org/',
    },
    {
        title: 'Your Cody questions answered live!',
        location: 'StreamYard',
        date: '2024-11-01',
        link: 'https://streamyard.com/watch/PP9kGxQSZEKX',
    },
    {
        title: 'AI Dev Tools Night',
        location: 'Austin, TX',
        date: '2024-11-06',
        link: 'https://lu.ma/qpic2p66',
    },
    {
        title: 'Your Cody questions answered live!',
        location: 'StreamYard',
        date: '2024-09-18',
        link: 'https://streamyard.com/watch/kQC2DSFWAx6r?v=2',
    },
    {
        title: 'AI Dev Tools Night',
        location: 'San Francisco, CA',
        date: '2024-09-30',
        link: 'https://lu.ma/mkjng0xx',
    },
    {
        title: 'Your Cody questions answered live!',
        location: 'StreamYard',
        date: '2024-08-08',
        link: 'https://streamyard.com/watch/EbR6CjSPJEHa',
    },
    {
        title: 'AI Dev Tools Night',
        location: 'San Francisco, CA',
        date: '2024-08-06',
        link: 'https://lu.ma/vkszglsx',
    },
    {
        title: "AI Engineer World's Fair",
        location: 'San Francisco, CA',
        date: '2024-06-25',
        link: 'https://www.ai.engineer/worldsfair',
    },
    {
        title: 'AI Dev Tools Night',
        location: 'San Francisco, CA',
        date: '2024-06-24',
        link: 'https://lu.ma/ai-devtools-night',
    },
    {
        title: 'Collision',
        location: 'Toronto',
        date: '2024-06-17',
        link: 'https://collisionconf.com/',
    },
    {
        title: 'Learning TypeScript Livestream',
        location: 'YouTube',
        date: '2024-03-20',
    },
    {
        title: 'AWS: ReInvent',
        location: 'Las Vegas, NV',
        date: '2023-11-29',
    },
    {
        title: 'KubeCon',
        location: 'Chicago, IL',
        date: '2023-11-06',
    },
    {
        title: 'React Advanced',
        location: 'London, UK',
        date: '2023-10-20',
    },
    {
        title: 'AI Engineer Summit',
        location: 'San Francisco, CA',
        date: '2023-10-08',
    },
    {
        title: 'GopherCon',
        location: 'San Diego, CA',
        date: '2023-10-02',
    },
    {
        title: 'Open Source Summit',
        location: 'Vancouver, BC',
        date: '2023-05-10',
    },
    {
        title: 'PyCon',
        location: 'Salt Lake City, UT',
        date: '2023-04-09',
    },
]

const EventsList = (): JSX.Element => {
    const { upcomingEvents, pastEvents } = filterEvents()

    return (
        <ContentSection parentClassName="md:pt-16" className="lg:px-6">
            <div className="flex flex-col justify-between gap-10 md:flex-row">
                <div className="max-w-lg pt-16 pb-[52px] md:py-0">
                    <h2 className="mb-6 text-center md:text-left">Events</h2>
                    <p className="pr-5 text-center text-lg tracking-[-0.25px] md:text-left">
                        Sourcegraph actively participates in prominent industry events. We're always eager to engage
                        with fellow developers, potential partners, and talented individuals seeking career
                        opportunities.
                        <br />
                        <br />
                        If you spot us at an event, don't hesitate to approach — we'd love to connect and share our
                        passion for code with you.
                    </p>
                </div>

                <Tabs
                    tabs={[
                        {
                            key: 'upcoming_events',
                            title: 'Upcoming',
                            content: (
                                <ul className="ml-0 list-outside list-none text-center md:text-left">
                                    {upcomingEvents.map(event => (
                                        <li key={event.title} className="p-[25px]">
                                            <h6>
                                                {new Date(`${event.date}T12:00:00Z`).toLocaleDateString('en-US', {
                                                    month: 'long',
                                                    day: 'numeric',
                                                    year: 'numeric',
                                                })}
                                            </h6>
                                            {event.link ? (
                                                <h4>
                                                    <a href={event.link} target="_blank" rel="noopener noreferrer">
                                                        {event.title}
                                                    </a>
                                                </h4>
                                            ) : (
                                                <h4>{event.title}</h4>
                                            )}
                                            <p className="mb-0 text-base tracking-[-0.25px]">{event.location}</p>
                                        </li>
                                    ))}
                                </ul>
                            ),
                            className: 'pt-0 w-full text-2xl leading-[34px] pb-4',
                        },
                        {
                            key: 'past_events',
                            title: 'Past',
                            content: (
                                <ul className="ml-0 list-outside list-none text-center md:text-left">
                                    {pastEvents.map(event => (
                                        <li key={event.title} className="p-[25px]">
                                            {new Date(`${event.date}T12:00:00Z`).toLocaleDateString('en-US', {
                                                month: 'long',
                                                day: 'numeric',
                                                year: 'numeric',
                                            })}
                                            <h4>{event.title}</h4>
                                            <p className="mb-0 text-base tracking-[-0.25px]">{event.location}</p>
                                        </li>
                                    ))}
                                </ul>
                            ),
                            className: 'pt-0 w-full text-2xl leading-[34px] pb-4',
                        },
                    ]}
                    tabsWrapperClassName="md:w-[548px] max-w-[548px] bg-white border px-6 py-9 bg-gradient-to-b from-white from-7.29% to-gray-50 to-88.08% rounded-lg"
                    contentClassName="pt-9 pb-0"
                />
            </div>
        </ContentSection>
    )
}

export default EventsList

const filterEvents = (): { upcomingEvents: Event[]; pastEvents: Event[] } => {
    const currentDate = new Date()
    const upcomingEvents: Event[] = allEvents
        .filter(event => isAfter(parseISO(event.date), currentDate))
        .sort((a, b) => parseISO(a.date).getTime() - parseISO(b.date).getTime())

    const pastEvents: Event[] = allEvents
        .filter(event => !isAfter(parseISO(event.date), currentDate))
        .sort((a, b) => parseISO(b.date).getTime() - parseISO(a.date).getTime())

    return { upcomingEvents, pastEvents }
}
