import { FunctionComponent } from 'react'

import { FaDiscord, FaGithub } from 'react-icons/fa'

import Person1 from '../../public/person1.svg'
import Person2 from '../../public/person2.svg'
import Person3 from '../../public/person3.svg'
import XLogo from '../../public/x-logo.svg'
import { ContentSection, Layout, Tabs, Heading } from '../components'
import { buttonStyle, buttonLocation } from '../data/tracking'

const events = {
    upcoming: [
        {
            title: 'React Advanced',
            location: 'London, UK',
            date: 'December 7, 2023',
        },
        {
            title: 'React Advanced',
            location: 'London, UK',
            date: 'December 7, 2023',
        },
        {
            title: 'React Advanced',
            location: 'London, UK',
            date: 'December 7, 2023',
        },
    ],
    past: [
        {
            title: 'React Advanced',
            location: 'London, UK',
            date: 'December 7, 2023',
        },
        {
            title: 'React Advanced',
            location: 'London, UK',
            date: 'December 7, 2023',
        },
        {
            title: 'React Advanced',
            location: 'London, UK',
            date: 'December 7, 2023',
        },
    ],
}

export const Community: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Welcome to the Sourcegraph Community',
            description:
                "Sourcegraph is so much more than a universal code search engine. It's the story of new gen-developers who renaissance-d the way we work, live, and collaborate. It's our unparalleled thinking that creates endless possibilities, to rebuild, to disrupt and to innovate relentlessly despite all the complexities of the big code. But we're just getting started. Imagine the road ahead if we take this journey together.",
        }}
        className="community-page bg-gray-50"
    >
        <ContentSection parentClassName="md:pt-24 md:pb-24 !px-0" className="lg:px-6">
            <div className="grid grid-cols-1">
                <Heading size="h1" className="mb-6">
                    Welcome to the Sourcegraph Community
                </Heading>
                <div className="max-w-3xl text-gray-500 ">
                    <Heading size="h3">
                        Our community is driven by a shared passion for open source and developer productivity, fueled
                        by the power of AI tolls & code search.
                    </Heading>
                    <br />
                    <p className="mb-8 text-lg">
                        Whether you’re a seasoned veteran or a budding enthusiast, join us to explore, learn, and
                        collaborate, as we collectively transform the way we read, write, and fix code.
                    </p>
                    <a
                        className="btn btn-primary mr-4"
                        href="https://discord.gg/rDPqBejz93"
                        data-button-style={buttonStyle.primary}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                        title="Join our Discord"
                    >
                        Discord
                    </a>
                    <a
                        className="btn btn-outline btn-outline-primary"
                        href="https://docs.sourcegraph.com/"
                        data-button-style={buttonStyle.outline}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                        title="Write for us"
                    >
                        Write for us
                    </a>
                </div>
            </div>
        </ContentSection>
        <ContentSection parentClassName="md:py-0" className="lg:px-6">
            <div className="sg-community-experts mx-auto flex max-w-screen-xl flex-col items-center py-16">
                <div className="flex max-w-[840px] flex-col items-center">
                    <Heading size="h2" className="max-w-[672px] text-center">
                        Our experts are the heart of our community
                    </Heading>
                    <p className="text-center text-lg">
                        Our experts embody the spirit of collaboration and knowledge sharing. They generously contribute
                        their expertise through insightful blog posts, pull requests, engaging tasks, and active
                        participation on Discord and other social media.
                    </p>
                    <p className="text-center text-lg">
                        Connect with them to learn from their experiences and broaden your understanding of AI, code
                        search, and open source.
                    </p>
                </div>
                <div className="flex w-full items-center justify-between gap-8 py-16">
                    <div className="flex w-full flex-col items-center">
                        <div className="mb-4 h-12 w-12 rounded-full bg-gray-300">
                            <img src={Person1} alt="avatar" />
                        </div>
                        <Heading size="h4">Bonnie Green</Heading>
                        <p className="text-grey-700 text-sm">Senior Front-end Developer</p>
                        <div className="flex gap-4">
                            <FaDiscord className="text-xl text-gray-400" />
                            <div>
                                <img className="text-xl text-gray-400" src={XLogo} alt="x-logo" />
                            </div>
                            <FaGithub className="text-xl text-gray-400" />
                        </div>
                    </div>
                    <div className="flex w-full flex-col items-center">
                        <div className="mb-4 h-12 w-12 rounded-full  bg-gray-300">
                            <img src={Person2} alt="avatar" />
                        </div>
                        <Heading size="h4">Micheal Gough</Heading>
                        <p className="text-sm text-gray-700">Front-end Developer</p>
                        <div className="flex gap-4">
                            <FaDiscord className="text-xl text-gray-400" />
                            <div>
                                <img className="text-xl text-gray-400" src={XLogo} alt="x-logo" />
                            </div>
                            <FaGithub className="text-xl text-gray-400" />
                        </div>
                    </div>
                    <div className="flex w-full flex-col items-center">
                        <div className="mb-4 h-12 w-12 rounded-full  bg-gray-300">
                            <img src={Person3} alt="avatar" />
                        </div>
                        <Heading size="h4">Helene Engels</Heading>
                        <p className="text-sm text-gray-700">Designer</p>
                        <div className="flex gap-4">
                            <FaDiscord className="text-xl text-gray-400" />
                            <img src={XLogo} alt="x-logo" />
                            <FaGithub className="text-xl text-gray-400" />
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-center text-lg">
                        Pssst, we pay $250-$500 a blog post.{' '}
                        <a href="https://docs.sourcegraph.com/" className="text-black underline">
                            Apply to be a guest author.
                        </a>
                    </p>
                </div>
            </div>
        </ContentSection>
        <ContentSection parentClassName="md:pt-16" className="lg:px-6">
            <div className="flex flex-col justify-between md:flex-row">
                <div className="max-w-lg">
                    <Heading size="h2" className="mb-6">
                        Events
                    </Heading>
                    <p className="pr-5 text-lg">
                        Sourcegraph actively participates in prominent industry events. We’re always eager to engage
                        with fellow developers, potential partners, and talented individuals seeking career
                        opportunities.
                        <br />
                        <br />
                        If you spot us at an event, don’t hesitate to approach — we’d love to connect and share our
                        passion for code with you.
                    </p>
                </div>
                <Tabs
                    tabs={[
                        {
                            key: 'upcoming_events',
                            title: 'Upcoming',
                            content: (
                                <ul className="ml-0 list-outside list-none">
                                    {events.upcoming.map((event, index) => (
                                        <li key={index} className="p-[25px]">
                                            <Heading size="h6">{event.title}</Heading>
                                            <Heading size="h4">{event.location}</Heading>
                                            <p>{event.date}</p>
                                        </li>
                                    ))}
                                </ul>
                            ),
                            className: 'pt-0 w-full',
                        },
                        {
                            key: 'past_events',
                            title: 'Past',
                            content: (
                                <ul className="ml-0 list-outside list-none">
                                    {events.past.map((event, index) => (
                                        <li key={index} className="p-[25px]">
                                            <Heading size="h6">{event.title}</Heading>
                                            <Heading size="h4">{event.location}</Heading>
                                            <p>{event.date}</p>
                                        </li>
                                    ))}
                                </ul>
                            ),
                            className: 'pt-0 w-full',
                        },
                    ]}
                    tabsWrapperClassName="md:w-[548px] max-w-[548px] bg-white border px-6 py-9 bg-gradient-to-b from-white from-7.29% to-gray-50 to-88.08%"
                    contentClassName="pt-9 pb-0"
                />
            </div>
        </ContentSection>
    </Layout>
)

export default Community
