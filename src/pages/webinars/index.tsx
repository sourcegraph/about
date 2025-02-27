import { FunctionComponent } from 'react'

import { ContentSection, Layout } from '../../components'

const WebinarsPage: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph Webinars',
            description: 'Join us for live events and webinars on coding with AI.',
            image: 'https://sourcegraph.com/assets/webinars/webinar-og.png',
        }}
        hero={
            <div className="relative isolate bg-gray-50 px-6 pt-20 lg:px-8">
                <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-gray-200 bg-white py-10 text-center shadow-sm">
                    <h1>Webinars</h1>
                    <p className="mt-1 text-lg leading-8 text-gray-600">
                        Join us for live events and webinars on coding with AI
                    </p>
                </div>
            </div>
        }
        className="bg-gray-50"
    >
        <div className="mx-auto mt-8 max-w-5xl">
            <ContentSection parentClassName="md:py-8 px-0">
                <div className="flex flex-col gap-10 rounded-lg border border-gray-200 bg-white px-10 py-12">
                    {/* left side */}
                    <div>
                        <h3 className="text-xl">
                            September 23rd{' '}
                            <span className="ml-2 inline-block -translate-y-1 rounded-lg bg-vermillion-300 px-2 py-1 text-xs text-white">
                                On-Demand
                            </span>
                        </h3>
                        <h2 className="mt-4">The Death of the Junior Developer Part 2</h2>
                        <p className="mt-2 text-lg text-gray-600">
                            Steve Yegge and Gene Kim dive into the rapidly changing world of software development and
                            what that means for junior developers.
                        </p>
                    </div>
                    {/* right side */}
                    <div className="relative h-0 w-full overflow-hidden rounded pb-[56.25%]">
                        <iframe
                            title="StreamYard Embed"
                            src="https://streamyard.com/watch/nvBaD5eHADar?embed=true"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            allow="autoplay; fullscreen"
                            className="absolute left-0 top-0 h-full w-full overflow-hidden"
                        />
                    </div>
                </div>
            </ContentSection>
            <ContentSection parentClassName="md:py-8 px-0">
                <div className="flex flex-col gap-10 rounded-lg border border-gray-200 bg-white px-10 py-12">
                    {/* left side */}
                    <div>
                        <h3 className="text-xl">
                            August 29th{' '}
                            <span className="ml-2 inline-block -translate-y-1 rounded-lg bg-vermillion-300 px-2 py-1 text-xs text-white">
                                On-Demand
                            </span>
                        </h3>
                        <h2 className="mt-4">Chat-Oriented Programming (CHOP) in Action</h2>
                        <p className="mt-2 text-lg text-gray-600">
                            Join our very own Ado Kukic as he breaks down the topic of Chat-Oriented Programming (CHOP)
                            and shows it in action with a live coding session.
                        </p>
                    </div>
                    {/* right side */}
                    <div className="relative h-0 w-full overflow-hidden rounded pb-[56.25%]">
                        <iframe
                            title="StreamYard Embed"
                            src="https://streamyard.com/watch/p4vx8icVmgVW?embed=true"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            allow="autoplay; fullscreen"
                            className="absolute left-0 top-0 h-full w-full overflow-hidden"
                        />
                    </div>
                </div>
            </ContentSection>
            <ContentSection parentClassName="md:py-8 px-0">
                <div className="flex flex-col gap-10 rounded-lg border border-gray-200 bg-white px-10 py-12">
                    {/* left side */}
                    <div>
                        <h3 className="text-xl">
                            July 30{' '}
                            <span className="ml-2 inline-block -translate-y-1 rounded-lg bg-vermillion-300 px-2 py-1 text-xs text-white">
                                On-Demand
                            </span>
                        </h3>
                        <h2 className="mt-4">Advanced AI Coding Techniques</h2>
                        <p className="mt-2 text-lg text-gray-600">
                            Learn how to get the most out of Cody by diving deeper into the features and capabilities of
                            the most powerful AI coding assistant.
                        </p>
                        <p className="mt-4 text-lg text-gray-600">
                            This webinar will show you how to create custom commands, using cody with other tools like
                            plantuml plugin to visualise architecture.
                        </p>
                    </div>
                    {/* right side */}
                    <div className="relative h-0 w-full overflow-hidden rounded pb-[56.25%]">
                        <iframe
                            title="StreamYard Embed"
                            src="https://streamyard.com/watch/z99VKw63sGVy?embed=true"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            allow="autoplay; fullscreen"
                            className="absolute left-0 top-0 h-full w-full overflow-hidden"
                        />
                    </div>
                </div>
            </ContentSection>
            <ContentSection parentClassName="md:py-8 px-0">
                <div className="flex flex-col gap-10 rounded-lg border border-gray-200 bg-white px-10 py-12">
                    {/* left side */}
                    <div>
                        <h3 className="text-xl">
                            July 16{' '}
                            <span className="ml-2 inline-block -translate-y-1 rounded-lg bg-vermillion-300 px-2 py-1 text-xs text-white">
                                On-Demand
                            </span>
                        </h3>
                        <h2 className="mt-4">Getting Started with AI Coding</h2>
                        <p className="mt-2 text-lg text-gray-600">
                            Learn how to get started with AI coding and how to use Sourcegraph Cody to get the most out
                            of it.
                        </p>
                        <p className="mt-4 text-lg text-gray-600">
                            This webinar will get you up to speed with the essentials of coding with AI, from using
                            autocomplete, chatting with AI, debugging code, and writing documentation.
                        </p>
                    </div>
                    {/* right side */}
                    <div className="relative h-0 w-full overflow-hidden rounded pb-[56.25%]">
                        <iframe
                            title="StreamYard Embed"
                            src="https://streamyard.com/watch/FZkmsW7DRk3p?embed=true"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            allow="autoplay; fullscreen"
                            className="absolute left-0 top-0 h-full w-full overflow-hidden"
                        />
                    </div>
                </div>
            </ContentSection>
            <ContentSection parentClassName="md:py-8 px-0">
                <div className="flex flex-col gap-10 rounded-lg border border-gray-200 bg-white px-10 py-12">
                    {/* left side */}
                    <div>
                        <h3 className="text-xl">
                            May 23{' '}
                            <span className="ml-2 inline-block -translate-y-1 rounded-lg bg-vermillion-300 px-2 py-1 text-xs text-white">
                                On-Demand
                            </span>
                        </h3>
                        <h2 className="mt-4">Live Coding with AI</h2>
                        <p className="mt-2 text-lg text-gray-600">
                            Join{' '}
                            <a href="https://twitter.com/chris__sev" target="_blank" rel="noreferrer">
                                Chris Sev
                            </a>{' '}
                            as he live codes a new feature for{' '}
                            <a href="https://s0.dev" target="_blank" rel="noreferrer">
                                s0.dev
                            </a>
                            .
                        </p>
                        <p className="mt-4 text-lg text-gray-600">
                            We'll use Cody every step of the way using autocomplete, chat, and commands. This will be a
                            great way to see how AI can help write and document code from start to finish.
                        </p>
                    </div>
                    {/* right side */}
                    <div className="relative h-0 w-full overflow-hidden rounded pb-[56.25%]">
                        <iframe
                            title="StreamYard Embed"
                            src="https://streamyard.com/watch/jgB6guKQKQw2?embed=true"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            allow="autoplay; fullscreen"
                            className="absolute left-0 top-0 h-full w-full overflow-hidden"
                        />
                    </div>
                </div>
            </ContentSection>
            <ContentSection parentClassName="md:py-8 px-0">
                <div className="flex flex-col gap-10 rounded-lg border border-gray-200 bg-white px-10 py-12">
                    {/* left side */}
                    <div>
                        <h3 className="text-xl">
                            May 16{' '}
                            <span className="ml-2 inline-block -translate-y-1 rounded-lg bg-vermillion-300 px-2 py-1 text-xs text-white">
                                On-Demand
                            </span>
                        </h3>
                        <h2 className="mt-4">Advanced AI Coding Techniques</h2>
                        <p className="mt-2 text-lg text-gray-600">
                            Learn how to get the most out of Cody by diving deeper into the features and capabilities of
                            the most powerful AI coding assistant.
                        </p>
                        <p className="mt-4 text-lg text-gray-600">
                            This webinar will show you how to refactor code with AI, handle debugging and error
                            resolution, and help you with code exploration and learning.
                        </p>
                        <p className="mt-4 text-lg text-gray-600">You'll learn to be a more productive developer!</p>
                    </div>
                    {/* right side */}
                    <div className="relative h-0 w-full overflow-hidden rounded pb-[56.25%]">
                        <iframe
                            title="StreamYard Embed"
                            src="https://streamyard.com/watch/XrC9TmJ4reNx?embed=true"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            allow="autoplay; fullscreen"
                            className="absolute left-0 top-0 h-full w-full overflow-hidden"
                        />
                    </div>
                </div>
            </ContentSection>
            <ContentSection parentClassName="md:py-8 px-0">
                <div className="flex flex-col gap-10 rounded-lg border border-gray-200 bg-white px-10 py-12">
                    {/* left side */}
                    <div>
                        <h3 className="text-xl">
                            May 9{' '}
                            <span className="ml-2 inline-block -translate-y-1 rounded-lg bg-vermillion-300 px-2 py-1 text-xs text-white">
                                On-Demand
                            </span>
                        </h3>
                        <h2 className="mt-4">Getting Started with AI Coding</h2>
                        <p className="mt-2 text-lg text-gray-600">
                            Learn how to get started with AI coding and how to use Sourcegraph Cody to get the most out
                            of it.
                        </p>
                        <p className="mt-4 text-lg text-gray-600">
                            This webinar will get you up to speed with the essentials of coding with AI, from using
                            autocomplete, chatting with AI, debugging code, and writing documentation.
                        </p>
                        <p className="mt-4 text-lg text-gray-600">You'll learn to be a more productive developer!</p>
                    </div>
                    {/* right side */}
                    <div className="relative h-0 w-full overflow-hidden rounded pb-[56.25%]">
                        <iframe
                            title="StreamYard Embed"
                            src="https://streamyard.com/watch/xBjEG6AABB8s?embed=true"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            allow="autoplay; fullscreen"
                            className="absolute left-0 top-0 h-full w-full overflow-hidden"
                        />
                    </div>
                </div>
            </ContentSection>
        </div>
    </Layout>
)

export default WebinarsPage
