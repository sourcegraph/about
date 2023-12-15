import { FunctionComponent } from 'react'

import { FaDiscord, FaGithub } from 'react-icons/fa'

import { ContentSection, Layout, Tabs, Heading } from '../components'
import { buttonStyle, buttonLocation } from '../data/tracking'

const socialMediaStyles = 'text-xl text-gray-400 hover:text-gray-300 transition-colors duration-300'

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
            title: 'Node Summit',
            location: 'San Francisco, CA',
            date: 'July 26, 2024',
        },
        {
            title: 'Node Summit',
            location: 'San Francisco, CA',
            date: 'July 26, 2024',
        },
        {
            title: 'Node Summit',
            location: 'San Francisco, CA',
            date: 'July 26, 2024',
        },
    ],
}

const expertsData = [
    {
        name: 'Bonnie Green',
        role: 'Senior Front-end Developer',
        image: '/community/person1.svg',
        links: {
            discord: '',
            github: '',
            twitter: '',
        }
    },
    {
        name: 'Micheal Gough',
        role: 'Front-end Developer',
        image: '/community/person2.svg',
        links: {
            discord: '',
            github: '',
            twitter: '',
        }
    },
    {
        name: 'Helene Engels',
        role: 'Designer',
        image: '/community/person3.svg',
        links: {
            discord: '',
            github: '',
            twitter: '',
        }
    }
]

const CommunityExpert: FunctionComponent<{ expert: typeof expertsData[0] }> = ({ expert }) => (
    <div className="flex w-full flex-col items-center">
        <img src={expert.image} alt="avatar" className="mb-4 h-12 w-12 rounded-full" />
        <Heading size="h4" className="pb-1">
            {expert.name}
        </Heading>
        <p className="text-grey-700 mb-5 text-sm leading-[19.88px]">{expert.role}</p>
        <div className="flex gap-4">
            <a href={expert.links.discord}>
                <FaDiscord className={socialMediaStyles} />
            </a>
            <a  href={expert.links.twitter}>
                <img className={`h5 w-5 ${socialMediaStyles}`} src="/icons/x-logo.svg" alt="x-logo" />
            </a>
            <a  href={expert.links.github}>
                <FaGithub className={socialMediaStyles} />
            </a>
        </div>
    </div>
)

export const Community: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Welcome to the Sourcegraph Community',
            description:
                "Sourcegraph is so much more than a universal code search engine. It's the story of new gen-developers who renaissance-d the way we work, live, and collaborate. It's our unparalleled thinking that creates endless possibilities, to rebuild, to disrupt and to innovate relentlessly despite all the complexities of the big code. But we're just getting started. Imagine the road ahead if we take this journey together.",
        }}
        className="community-page bg-gray-50"
    >
        <ContentSection parentClassName="md:!py-24" className="py-4 md:py-0 lg:px-6">
            <div className="flex flex-col">
                <Heading size="h1" className="mb-6 text-center md:text-left">
                    Welcome to the Sourcegraph Community
                </Heading>
                <div className="flex max-w-3xl flex-col justify-center text-gray-500 md:justify-center">
                    <Heading size="h3" className="text-center leading-[30px] !tracking-[-0.25px] md:text-left">
                        Our community is driven by a shared passion for open source and developer productivity, fueled
                        by the power of AI tolls & code search.
                    </Heading>
                    <br />
                    <p className="mb-8 text-center text-lg tracking-[-0.25px] md:text-left">
                        Whether you’re a seasoned veteran or a budding enthusiast, join us to explore, learn, and
                        collaborate, as we collectively transform the way we read, write, and fix code.
                    </p>
                    <div className="flex justify-center md:justify-start ">
                        <a
                            className="btn btn-primary mr-4 w-[108px] tracking-[-0.25px]"
                            href="https://discord.gg/rDPqBejz93"
                            data-button-style={buttonStyle.primary}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                            title="Join our Discord"
                        >
                            Discord
                        </a>
                        <a
                            className="btn btn-outline btn-outline-primary w-[137px] tracking-[-0.25px]"
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
            </div>
        </ContentSection>
        <ContentSection parentClassName="md:!py-0" className="lg:px-6">
            <div className="sg-community-experts mx-auto flex max-w-screen-xl flex-col items-center rounded-lg border border-gray-200 py-16">
                <div className="flex max-w-[840px] flex-col items-center">
                    <Heading size="h2" className="max-w-[672px] pb-4 text-center !leading-[100%] !tracking-[-1px]">
                        Our experts are the heart of our community
                    </Heading>
                    <p className="text-center text-lg tracking-[-0.25px]">
                        Our experts embody the spirit of collaboration and knowledge sharing. They generously contribute
                        their expertise through insightful blog posts, pull requests, engaging tasks, and active
                        participation on Discord and other social media.
                    </p>
                    <p className="mb-0 text-center text-lg tracking-[-0.25px]">
                        Connect with them to learn from their experiences and broaden your understanding of AI, code
                        search, and open source.
                    </p>
                </div>
                <div className="flex w-full flex-col items-center justify-between gap-8 py-16 md:flex-row">
                    {expertsData.map((expert, index) => (
                        <CommunityExpert key={index} expert={expert} />
                    ))}
                </div>
                <div>
                    <p className="mb-0 text-center text-lg tracking-[-0.25px]">
                        Pssst, we pay $250-$500 a blog post.{' '}
                        <a
                            href="https://docs.sourcegraph.com/"
                            className="text-black  underline underline-offset-[3.55px]"
                        >
                            Apply to be a guest author.
                        </a>
                    </p>
                </div>
            </div>
        </ContentSection>
        <ContentSection parentClassName="md:pt-16" className="lg:px-6">
            <div className="flex flex-col justify-between md:flex-row">
                <div className="max-w-lg">
                    <Heading size="h2" className="mb-6 text-center !leading-[40px] !tracking-[-1px] md:text-left">
                        Events
                    </Heading>
                    <p className="pr-5 text-center text-lg tracking-[-0.25px] md:text-left">
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
                                <ul className="ml-0 list-outside list-none text-center md:text-left">
                                    {events.upcoming.map((event, index) => (
                                        <li key={index} className="p-[25px]">
                                            <Heading size="h6">{event.date}</Heading>
                                            <Heading size="h4">{event.title}</Heading>
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
                                    {events.past.map((event, index) => (
                                        <li key={index} className="p-[25px]">
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
    </Layout>
)

export default Community
