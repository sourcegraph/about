import { Link, PageProps } from 'gatsby'
import * as React from 'react'
import { ContentSection } from '../components/content/ContentSection'
import Layout from '../components/Layout'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import { EventsSection } from '../components/EventsSection'

export const CommunityPage: React.FunctionComponent<PageProps> = props => (
    <Layout
        location={props.location}
        meta={{
            title: 'Welcome to Sourcegraph Community',
            description:
                "Sourcegraph is so much more than a universal code search engine. It's the story of new gen-developers who renaissance-d the way we work, live, and collaborate. It's our unparalleled thinking that creates endless possibilities, to rebuild, to disrupt and to innovate relentlessly despite all the complexities of the big code. But we're just getting started. Imagine the road ahead if we take this journey together.",
            image: 'https://about.sourcegraph.com/sourcegraph-og.png',
        }}
        heroAndHeaderClassName="batch-changes-page__hero-and-header"
        hero={
            <div className="container pb-4">
                <div className="row">
                    <div className="col-lg-7 mb-lg-6 mt-6">
                        <div className="text-uppercase">Sourcegraph Community</div>
                        <h1 className="display-2 font-weight-bold mb-0">Join the conversation</h1>
                        <p className="home__semiwide-paragraph my-5 display-4">
                            Smart Questions. Smarter Tips and so much more.
                        </p>
                        <a
                            className="btn btn-primary"
                            href={
                                'https://join.slack.com/t/sourcegraph-community/shared_invite/zt-usq3n1z4-PcDNPcN46aWSPrLxYR1z4g'
                            }
                            title="Request a demo"
                        >
                            Join thousands of developers now.
                        </a>
                    </div>
                </div>
            </div>
        }
    >
        <ContentSection className="py-5 text-center">
            <h1 className="mb-3">Get up to speed</h1>
            <div className="row justify-content-center">
                <p className="col-md-8">
                    We can’t give you a 25-hour day but here is a <a href="http://srcgr.ph/cheatsheet">smart guide</a>{' '}
                    with the most useful Sourcegraph shortcuts. Need even more speed? Fasten your seat belt and dive
                    into our curated
                    <a href="https://learn.sourcegraph.com/tags/sourcegraph"> tutorials</a> and{' '}
                    <a href="https://docs.sourcegraph.com/">documentation</a>.
                </p>
            </div>
        </ContentSection>

        <ContentSection className="py-5 text-center">
            <h1 className="mb-3">How to be a Sourcegraph Champion and why your FOMO will kick if you don't.</h1>
            <div className="row justify-content-center">
                <p className="col-md-8">
                    Here is the deal. The Sourcegraph Champion program offers you FREE code knowledge and makes it
                    easier for everyone to explore and understand code faster and better. With new contextual code
                    intelligence skills, your productivity will thrive even if you’re dealing with complex automated
                    large-scale code changes. Learn more.
                    <br />
                    <a
                        className="btn btn-primary m-4"
                        href="https://about.sourcegraph.com/handbook/marketing/becoming_a_sourcegraph_champion"
                    >
                        {' '}
                        Get started
                    </a>
                </p>
            </div>
        </ContentSection>

        <ContentSection className="py-5 text-center">
            <h1 className="m-5">Meet the Sourcegraph team at our upcoming events</h1>
            <ContentSection>
                <EventsSection />
            </ContentSection>
            Upcoming conferences:
            <br />
            - Open Source Summit - 9/27 - 9/30
            <br />
            - React Conference Live in Amsterdam - 10/7 - 10/8
            <br />
            - React Advance London - 10/22
            <br />
            - JSWorld Africa - 10/30
            <br />
            - Open Source Festival - 11/11 - 11/13
            <br />
            - AWS re:Invent - 11/29-12/03
            <br />
            - GopherCon - 12/5 - 12/8
            <br />
        </ContentSection>

        <ContentSection className="py-5 text-center">
            <h1 className="mb-3">Dev Tool Time</h1>
            <div className="row">
                <p className="col">
                    Join Sourcegraph for our bi-monthly virtual event series where we invite great developers to talk
                    about their favorite dev tools, productivity hacks, and more.
                    <a href="https://www.youtube.com/playlist?list=PL6zLuuRVa1_iDEP4EicZ8972RgyccCRGF">
                        {' '}
                        Dev Tool Time
                    </a>
                </p>
            </div>
        </ContentSection>

        <ContentSection className="py-5 text-center">
            <h1 className="mb-3">Conversations, stories, and insights from dev tool creators</h1>
            <div className="row justify-content-center">
                <p className="col-md-8">
                    <a href="https://about.sourcegraph.com/podcast">image linking to Podcasts Page</a>
                </p>
            </div>
            <a href="https://about.sourcegraph.com/handbook/marketing/becoming_a_sourcegraph_champion">
                Sourcegraph Champions
            </a>
        </ContentSection>

        <ContentSection className="py-5 text-center">
            <h1 className="mb-3">Contact us</h1>
            <div className="row justify-content-center">
                <p className="col-md-8">
                    We’d love to hear from you!
                    <br />
                    Connect with us on the Sourcegraph Community Slack group, direct message us on Twitter, LinkedIn or
                    email us at community@sourcegraph.com
                </p>
            </div>
        </ContentSection>
    </Layout>
)

export default CommunityPage
