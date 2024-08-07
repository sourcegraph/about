import { ContentSection } from './ContentSection'
import { Tabs } from './Tabs'

const events = {
    upcoming: [
        {
            title: 'designFAO',
            location: 'Portugal',
            date: 'Oct 11, 2024',
            link: 'https://friends.figma.com/events/details/figma-portugal-presents-designfao-partner-event-2/',
        },
        {
            title: 'All Things Open',
            location: 'Raleigh, NC USA',
            date: 'Oct 27-29, 2024',
            link: 'https://2024.allthingsopen.org/',
        },
        {
            title: 'QCon SF',
            location: 'San Francisco, CA',
            date: 'Nov 18-22, 2024',
            link: 'https://qconsf.com/',
        },
        {
            title: 'AWS re:Invent',
            location: 'Las Vegas, NV',
            date: 'Dec 2–6, 2024',
            link: 'https://reinvent.awsevents.com/',
        },
    ],
    past: [
        {
            title: 'Your Cody questions answered live!',
            location: 'StreamYard',
            date: 'August 8, 2024',
            link: 'https://streamyard.com/watch/EbR6CjSPJEHa',
        },
        {
            title: 'AI Dev Tools Night',
            location: 'San Francisco, CA',
            date: 'August 6, 2024',
            link: 'https://lu.ma/vkszglsx',
        },
        {
            title: 'AI Engineer World’s Fair',
            location: 'San Francisco, CA',
            date: 'Jun 25-27, 2024',
            link: 'https://www.ai.engineer/worldsfair',
        },
        {
            title: 'AI Dev Tools Night',
            location: 'San Francisco, CA',
            date: 'Jun 24, 2024',
            link: 'https://lu.ma/ai-devtools-night',
        },
        {
            title: 'Collision',
            location: 'Toronto',
            date: 'Jun 17-20, 2024',
            link: 'https://collisionconf.com/',
        },
        {
            title: 'Learning TypeScript Livestream',
            location: 'YouTube',
            date: 'Mar 20, 2024',
        },
        {
            title: 'AWS: ReInvent',
            location: 'Las Vegas, NV',
            date: 'Nov 29, 2023',
        },
        {
            title: 'KubeCon',
            location: 'Chicago, IL',
            date: 'Nov 6, 2023',
        },
        {
            title: 'React Advanced',
            location: 'London, UK',
            date: 'Oct 20, 2023',
        },
        {
            title: 'AI Engineer Summit',
            location: 'San Francisco, CA',
            date: 'Oct 8, 2023',
        },
        {
            title: 'GopherCon',
            location: 'San Diego, CA',
            date: 'Oct 2, 2023',
        },
        {
            title: 'Open Source Summit',
            location: 'Vancouver, BC',
            date: 'May 10, 2023',
        },
        {
            title: 'PyCon',
            location: 'Salt Lake City, UT',
            date: 'Apr 9, 2023',
        },
    ],
}

const EventsList = (): JSX.Element => (
    <ContentSection parentClassName="md:pt-16" className="lg:px-6">
        <div className="flex flex-col justify-between md:flex-row">
            <div className="max-w-lg pt-16 pb-[52px] md:py-0">
                <h2 className="mb-6 text-center md:text-left">Events</h2>
                <p className="pr-5 text-center text-lg tracking-[-0.25px] md:text-left">
                    Sourcegraph actively participates in prominent industry events. We’re always eager to engage with
                    fellow developers, potential partners, and talented individuals seeking career opportunities.
                    <br />
                    <br />
                    If you spot us at an event, don’t hesitate to approach — we’d love to connect and share our passion
                    for code with you.
                </p>
            </div>
            <Tabs
                tabs={[
                    {
                        key: 'upcoming_events',
                        title: 'Upcoming',
                        content: (
                            <ul className="ml-0 list-outside list-none text-center md:text-left">
                                {events.upcoming.map(event => (
                                    <li key={event.title} className="p-[25px]">
                                        <h6>{event.date}</h6>
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
                                {events.past.map(event => (
                                    <li key={event.title} className="p-[25px]">
                                        <h6>{event.date}</h6>
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

export default EventsList
