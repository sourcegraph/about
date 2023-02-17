import { FunctionComponent } from 'react'

import { ContentSection, Layout, Tabs, YouTube } from '../components'
import { buttonStyle, buttonLocation } from '../data/tracking'

export const Community: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Welcome to the Sourcegraph Community',
            description:
                "Sourcegraph is so much more than a universal code search engine. It's the story of new gen-developers who renaissance-d the way we work, live, and collaborate. It's our unparalleled thinking that creates endless possibilities, to rebuild, to disrupt and to innovate relentlessly despite all the complexities of the big code. But we're just getting started. Imagine the road ahead if we take this journey together.",
        }}
        className="community-page"
        heroAndHeaderClassName="tw-bg-blue-200"
        hero={
            <div className="tw-container tw-mx-auto tw-pb-sm">
                <div className="tw-p-8 tw-grid tw-gap-lg tw-grid-cols-1 lg:tw-grid-cols-2">
                    <div>
                        <div className="text-uppercase">Join us</div>
                        <h1 className="tw-mb-0">Welcome to the Sourcegraph Community</h1>
                        <p className="tw-my-8">
                            Seek guidance. Share best practices. Ask questions. The Sourcegraph Community is your new
                            platform to connect with one of the world's most talented developer communities. Here, we
                            encourage everyone to learn from each other and share everything they know. Because when we
                            collaborate, we grow faster, better, and stronger.
                        </p>
                        <a
                            className="btn btn-primary"
                            href="https://discord.gg/rDPqBejz93"
                            data-button-style={buttonStyle.primary}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                            title="Join our Discord"
                        >
                            Join our Discord
                        </a>
                    </div>
                    <div>
                        <img
                            src="/community/hero_illustration.svg"
                            alt="Sourcegraph Community"
                            title="Sourcegraph Community"
                            className="tw-w-full tw-mt-5xl"
                        />
                    </div>
                </div>
            </div>
        }
    >
        <ContentSection background="white">
            <h2 className="tw-mb-8 tw-text-center">What's next?</h2>
            <Tabs
                tabs={[
                    {
                        title: 'Events',
                        content: (
                            <div className="tw-max-w-xl tw-m-auto">
                                <p>
                                    Keynote speakers. Job opportunities and partnerships. You can find us in every major
                                    industry event. Give us an air-hug if you see us.
                                </p>
                                <ul>
                                    <li>
                                        <a
                                            href="https://us.pycon.org/2023/"
                                            title="Pycon 2023"
                                            data-button-style={buttonStyle.text}
                                            data-button-location={buttonLocation.body}
                                            data-button-type="cta"
                                        >
                                            Pycon 2023 · Salt Lake City, Utah
                                        </a>{' '}
                                        - April 19-27
                                    </li>
                                </ul>
                            </div>
                        ),
                    },
                    {
                        title: 'Sourcegraph Podcast',
                        content: (
                            <div className="tw-max-w-xl tw-m-auto">
                                <YouTube title="Sourcegraph Podcast" id="ZLtqHFxEDm8" />
                                <p className="tw-pt-xs">
                                    <strong>Subscribe:</strong>&nbsp;
                                    <a
                                        href="https://www.youtube.com/playlist?list=PL6zLuuRVa1_jf5GDl61SvEOXvwvKS1IXA"
                                        data-button-style={buttonStyle.text}
                                        data-button-location={buttonLocation.body}
                                        data-button-type="cta"
                                        title="YouTube"
                                    >
                                        YouTube
                                    </a>
                                    &nbsp;
                                    <a
                                        href="https://podcasts.apple.com/us/podcast/the-sourcegraph-podcast/id1516219009"
                                        data-button-style={buttonStyle.text}
                                        data-button-location={buttonLocation.body}
                                        data-button-type="cta"
                                        title="Apple"
                                    >
                                        Apple
                                    </a>
                                    &nbsp;
                                    <a
                                        href="https://open.spotify.com/show/1YlDYvCxNB7jAndbZPt5a6"
                                        data-button-style={buttonStyle.text}
                                        data-button-location={buttonLocation.body}
                                        data-button-type="cta"
                                        title="Spotify"
                                    >
                                        Spotify
                                    </a>
                                    &nbsp;
                                    <a
                                        href="https://podcasts.google.com/?feed=aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS8xMDk3OTc4LnJzcw=="
                                        data-button-style={buttonStyle.text}
                                        data-button-location={buttonLocation.body}
                                        data-button-type="cta"
                                        title="Google"
                                    >
                                        Google
                                    </a>
                                    &nbsp;
                                    <a
                                        href="https://feeds.buzzsprout.com/1097978.rss"
                                        data-button-style={buttonStyle.text}
                                        data-button-location={buttonLocation.body}
                                        data-button-type="cta"
                                        title="RSS"
                                    >
                                        RSS
                                    </a>
                                </p>
                            </div>
                        ),
                    },
                ]}
            />
        </ContentSection>
        <ContentSection>
            <div className="tw-max-w-screen-xl sm:tw-grid sm:tw-grid-cols-2 tw-mx-auto tw-px-4">
                <div className="tw-mb-4 sm:tw-mb-0 sm:tw-pr-4">
                    <h2 className="tw-mb-4">We’d love to hear from you!</h2>
                    <br />
                    Connect with us on the Sourcegraph Community Discord server, direct message us on Twitter, LinkedIn,
                    or email us at{' '}
                    <a
                        href="mailto:community@sourcegraph.com"
                        title="community@sourcegraph.com"
                        data-button-style={buttonStyle.text}
                        data-button-location={buttonLocation.trySourcegraph}
                        data-button-type="cta"
                    >
                        community@sourcegraph.com
                    </a>
                    .
                </div>
                <div className="tw-flex tw-flex-col md:tw-items-center md:tw-flex-row md:tw-justify-center">
                    <a
                        className="tw-mb-4 btn btn-secondary md:tw-mr-4 md:tw-mb-0"
                        data-button-style={buttonStyle.primary}
                        data-button-location={buttonLocation.trySourcegraph}
                        data-button-type="cta"
                        href="https://discord.gg/rDPqBejz93"
                        title="Join us on Discord"
                    >
                        Join us on Discord
                    </a>
                    <br />
                    <a
                        className="btn btn-primary"
                        data-button-style={buttonStyle.primary}
                        data-button-location={buttonLocation.trySourcegraph}
                        data-button-type="cta"
                        href="mailto:community@sourcegraph.com"
                        title="Send us an email"
                    >
                        Send us an email
                    </a>
                </div>
            </div>
        </ContentSection>
    </Layout>
)

export default Community
