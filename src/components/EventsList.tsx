import { ContentSection } from './ContentSection'
import { Heading } from './Heading'
import { Tabs } from './Tabs'

const events = {
    upcoming: [
        {
            title: 'Collision',
            location: 'Toronto',
            date: 'Jun 17-20, 2024',
            link: 'https://collisionconf.com/',
        },
        {
            title: 'AI Dev Tools Night',
            location: 'San Francisco, CA',
            date: 'Jun 24, 2024',
            link: 'https://lu.ma/ai-devtools-night',
        },
        {
            title: 'AI Engineer World’s Fair',
            location: 'San Francisco, CA',
            date: 'Jun 25-27, 2024',
            link: 'https://www.ai.engineer/worldsfair',
        },
        {
            title: 'designFAO',
            location: 'Portugal',
            date: 'Oct 11, 2024',
            link: 'https://friends.figma.com/events/details/figma-portugal-presents-designfao-partner-event-2/',
        },
    ],
    past: [
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
                <Heading size="h2" className="mb-6 text-center !leading-[40px] !tracking-[-1px] md:text-left">
                    Events
                </Heading>
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
                                        <Heading size="h6">{event.date}</Heading>
                                        {event.link ? (
                                            <Heading size="h4">
                                                <a href={event.link} target="_blank" rel="noopener noreferrer">
                                                    {event.title}
                                                </a>
                                            </Heading>
                                        ) : (
                                            <Heading size="h4">{event.title}</Heading>
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
                                        <Heading size="h6">{event.date}</Heading>
                                        <Heading size="h4">{event.title}</Heading>
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
