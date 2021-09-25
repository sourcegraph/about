import { Link, PageProps } from 'gatsby'
import * as React from 'react'
import { ContentSection } from '../components/content/ContentSection'
import Layout from '../components/Layout'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

export const CommunityPage: React.FunctionComponent<PageProps> = props => (
    <Layout
        location={props.location}
        meta={{
            title: 'Welcome to Sourcegraph Community',
            description:
                "Sourcegraph is so much more than a universal code search engine. It's the story of new gen-developers who renaissance-d the way we work, live, and collaborate. It's our unparalleled thinking that creates endless possibilities, to rebuild, to disrupt and to innovate relentlessly despite all the complexities of the big code. But we're just getting started. Imagine the road ahead if we take this journey together.",
            image: 'https://about.sourcegraph.com/sourcegraph-og.png',
        }}
        heroAndHeaderClassName="community-page__hero-and-header"
        hero={
            <div className="container pb-4">
                <div className="row">
                    <div className="col-lg-6 col-md-5 mb-lg-5 mt-6">
                        <div className="text-uppercase">Join us</div>
                        <h1 className="display-2 font-weight-bold mb-0 text-uppercase">
                            Welcome to Sourcegraph community
                        </h1>
                        <p className="home__semiwide-paragraph my-5 display-5">
                            Seek guidance. Share best practices. Ask questions. Sourcegraph Community is your new
                            platform to connect with one of the world's most talented developer communities. Here, we
                            encourage everyone to learn from each other and share everything they know. Because when we
                            collaborate, we grow faster, better, and stronger.
                        </p>
                        <a
                            className="btn btn-primary"
                            href={
                                'https://join.slack.com/t/sourcegraph-community/shared_invite/zt-usq3n1z4-PcDNPcN46aWSPrLxYR1z4g'
                            }
                            title="Join our Slack"
                        >
                            Join our Slack
                        </a>
                    </div>
                </div>
            </div>
        }
    >
        <ContentSection className="py-5 text-center">
            <h1 className="mt-5 mb-3">Get up to speed</h1>
            <div className="row justify-content-center">
                <p className="col-md-8">
                    We can’t give you a 25-hour day but here is a <a href="http://srcgr.ph/cheatsheet">speed sheet</a>{' '}
                    with the most useful Sourcegraph shortcuts. Need even more speed? Fasten your seat belt and dive
                    into our curated
                    <a href="https://learn.sourcegraph.com/tags/sourcegraph"> tutorials</a> &#38; other{' '}
                    <a href="https://docs.sourcegraph.com/">tip documents</a>.
                </p>
            </div>
            <div className="row">
                <div className="col-12 mt-4">
                    <figure>
                        <img
                            className="cheatsheet_img"
                            src="/community/cheatsheet_top.png"
                            alt="Sourcegraph cheatsheet"
                        />
                    </figure>
                </div>
            </div>
        </ContentSection>

        <div className="bg-gradient-green-blue py-5">
            <ContentSection className="py-5">
                <div className="row">
                    <div className="col-lg-6">
                        <h1 className="mb-3">Sourcegraph Champions Program</h1>
                        <p>
                            In the spirit of collaboration, we created Sourcegraph Champions Program to serve the
                            developer community, create a friendly networking space and share knowledge among each
                            other.
                        </p>
                        <p>
                            We believe that if we create the right environment and provide equal resources for all,
                            everyone can learn how to code. This is our mission. And if you share the same idea you are
                            a "champion" in our eyes.
                        </p>
                        <p>
                            We can't wait to meet you!
                            <br />
                            <a
                                className="btn btn-primary mt-3"
                                href="https://about.sourcegraph.com/handbook/marketing/becoming_a_sourcegraph_champion"
                            >
                                Become a Sourcegraph Champion
                            </a>
                        </p>
                        <p>
                            Or if you know someone that should be a Sourcegraph Champion, please{' '}
                            <a href="https://forms.gle/QP6BBCpN1TwQfHzo6">
                                nominate them. The Sourcegraph Champion program offers FREE code knowledge for everyone.
                                With new contextual code intelligence skills, your productivity will thrive even if
                                you’re dealing with complex automated large-scale code changes. Find out how to become a
                                Sourcegraph Champion.
                            </a>
                            .
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <img
                            className="sg_champion_img mt-6"
                            src="/community/SG_Robots_Trophy.png"
                            alt="Become a Sourcegraph Champion!"
                        />
                    </div>
                </div>
            </ContentSection>
        </div>

        <ContentSection className="py-6">
            <div className="row">
                <div className="col-lg-6">
                    <h1 className="mt-5 mb-3">DM us on Slack. We're here.</h1>
                    What you seek is seeking you — come, chat and collaborate with inspiring engineers like you.
                    <ul className="list-spaced">
                        <li>Ask questions - any questions: what is the best sit-stand desk?</li>
                        <li>Reach out to the community, discover new ideas &#38; seek or give mentorship</li>
                        <li>Share the road less traveled so that everyone can learn</li>
                    </ul>
                </div>
                <div className="col-lg-5">
                    <img
                        className="sg_champion_img mt-6"
                        src="/community/SG_DM_us_on_slack.png"
                        alt="DM us on Slack!"
                    />
                </div>
            </div>
        </ContentSection>

        <ContentSection className="py-4">
            <h1 className="mb-5 text-center">What's next?</h1>
            <Tabs defaultActiveKey="configuration" id="use-cases" className="justify-content-center">
                <Tab eventKey="configuration" title="Events">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-lg-8">
                            <p>
                                Keynote speakers. Job opportunities and partnerships. You can find us in every major
                                industry event. Give us an air-hug if you see us.
                            </p>
                            <ul>
                                <li>
                                    <a href="https://events.linuxfoundation.org/open-source-summit-north-america/register/">
                                        Open Source Summit
                                    </a>{' '}
                                    - 9/27 - 9/30
                                </li>
                                <li>
                                    <a href="https://reactadvanced.com/">React Advanced London</a> - 10/22
                                </li>
                                <li>
                                    <a href="https://africa.jsworldconference.com/">JSWorld Africa</a> - 10/30
                                </li>
                                <li>
                                    <a href="https://festival.oscafrica.org/">Open Source Festival</a> - 11/11 - 11/13
                                </li>
                                <li>
                                    <a href="https://reinvent.awsevents.com/">AWS re:Invent</a> - 11/29 - 12/03
                                </li>
                                <li>
                                    <a href="https://www.gophercon.com/">GopherCon</a> - 12/5 - 12/8
                                </li>
                            </ul>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="refactoring" title="Dev Tool Time">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-lg-8">
                            <p>
                                Cool hardware. Most wanted guests. And hot topics. Check out our YouTube Channel:{' '}
                                <a href="https://srcgr.ph/dev-tool-time-playlist">Dev Tool Time</a> to{' '}
                                <a href="https://srcgr.ph/dev-tool-time">keep up with what’s next</a>.
                            </p>
                            <a href="https://info.sourcegraph.com/dev-tool-time">
                                <img
                                    className="w-100 h-auto mt-4"
                                    width="850"
                                    height="380"
                                    src="/community/DTT_module.jpg"
                                    alt="Dev Tool Time"
                                />
                            </a>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="security" title="Podcast">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-lg-8">
                            <p>
                                Tune into our developer convos wherever you listen to your favorite podcasts. Every
                                episode is an inspiration.
                            </p>
                            <a href="https://about.sourcegraph.com/podcast">
                                <img
                                    className="w-100 h-auto mt-4"
                                    width="750"
                                    height="472"
                                    src="/community/Podcast_module.png"
                                    alt="Podcasts"
                                />
                            </a>
                        </div>
                    </div>
                </Tab>
            </Tabs>
        </ContentSection>

        <ContentSection className="py-5">
            <div className="row">
                <div className="col-lg-7">
                    <h1 className="mb-3">We’d love to hear from you!</h1>
                    <br />
                    Connect with us on the Sourcegraph Community Slack group, direct message us on Twitter, LinkedIn or
                    email us at community@sourcegraph.com
                </div>
                <div className="col-lg-5">
                    <a
                        className="btn btn-secondary"
                        href={
                            'https://join.slack.com/t/sourcegraph-community/shared_invite/zt-usq3n1z4-PcDNPcN46aWSPrLxYR1z4g'
                        }
                        title="Join us on Slack"
                    >
                        Join us on Slack
                    </a>
                    <br />
                    <a
                        className="btn btn-primary mt-3"
                        href={'mailto:community@sourcegraph.com'}
                        title="Send us an email"
                    >
                        Send us an email
                    </a>
                </div>
            </div>
        </ContentSection>
    </Layout>
)

export default CommunityPage
