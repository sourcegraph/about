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
                <div className="relative mx-auto max-w-[840px] overflow-hidden rounded-lg border border-gray-200 bg-white py-10 px-20 text-center shadow-sm">
                    <h1>Webinars</h1>
                    <p className="mt-3 text-xl leading-8 text-gray-600">
                        Join us for live events and webinars on coding with AI
                    </p>

                    <div className="absolute inset-y-0 -left-14 flex rotate-[20deg] scale-[2] md:-left-0">
                        <div className="h-96 w-4 bg-blue-300" />
                        <div className="h-96 w-4 bg-vermillion-300" />
                        <div className="h-96 w-4 bg-violet-400" />
                    </div>
                </div>
            </div>
        }
        className="bg-gray-50"
    >
        <ContentSection>
            <div className="mt-10 flex flex-col gap-10 rounded-lg border border-gray-200 bg-white px-10 py-12">
                {/* left side */}
                <div>
                    <h3 className="text-xl">
                        May 23 <span className="rounded-lg bg-vermillion-300 px-2 py-1 text-xs text-white">On-Demand</span>
                    </h3>
                    <h2 className="mt-4">Live Coding with AI</h2>
                    <p className="mt-6 text-lg text-gray-600">
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
        <ContentSection>
            <div className="mt-10 flex flex-col gap-10 rounded-lg border border-gray-200 bg-white px-10 py-12">
                {/* left side */}
                <div>
                    <h3 className="text-xl">
                        May 16{' '}
                        <span className="rounded-lg bg-vermillion-300 px-2 py-1 text-xs text-white">On-Demand</span>
                    </h3>
                    <h2 className="mt-4">Advanced AI Coding Techniques</h2>
                    <p className="mt-6 text-lg text-gray-600">
                        Learn how to get the most out of Cody by diving deeper into the features and capabilities of the
                        most powerful AI coding assistant.
                    </p>

                    <p className="mt-4 text-lg text-gray-600">
                        This webinar will show you how to refactor code with AI, handle debugging and error resolution,
                        and help you with code exploration and learning.
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
        <ContentSection>
            <div className="mt-10 flex flex-col gap-10 rounded-lg border border-gray-200 bg-white px-10 py-12">
                {/* left side */}
                <div>
                    <h3 className="text-xl">
                        May 9{' '}
                        <span className="rounded-lg bg-vermillion-300 px-2 py-1 text-xs text-white">On-Demand</span>
                    </h3>
                    <h2 className="mt-4">Getting Started with AI Coding</h2>
                    <p className="mt-6 text-lg text-gray-600">
                        Learn how to get started with AI coding and how to use Sourcegraph Cody to get the most out of
                        it.
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
    </Layout>
)

export default WebinarsPage
