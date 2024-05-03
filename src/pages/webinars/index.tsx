import { FunctionComponent } from 'react'

import { ContentSection, Layout } from '../../components'

const ComparePage: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph Cody Compare',
            description: 'Feature comparison of Sourcegraph Cody and other code AI assistants.',
        }}
        hero={
            <div className="relative isolate bg-white px-6 pb-24 pt-24 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h1>Webinars</h1>
                    <p className="mt-3 text-xl leading-8 text-gray-600">
                        Join us for live events and webinars on coding with AI
                    </p>
                </div>

                <div className="absolute inset-x-0 bottom-0 w-full space-y-1">
                    <div className="h-1.5 bg-blue-300" />
                    <div className="h-2 bg-vermillion-300" />
                    <div className="h-4 bg-violet-400" />
                </div>
            </div>
        }
        className="bg-gray-50"
    >
        <ContentSection className="flex flex-col gap-10 md:flex-row">
            <div className="h-full w-full">
                <div className="h-full rounded-lg border border-gray-200 bg-white px-10 py-12">
                    <h3 className="text-xl">May 9</h3>
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

                    {/* <button
                        type="button"
                        className="mt-8 rounded-lg bg-gray-700 py-3.5 px-8 font-semibold text-gray-50"
                    >
                        Register Now <span className="ml-2">👉</span>
                    </button> */}
                </div>
            </div>
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
        </ContentSection>
    </Layout>
)

export default ComparePage
