import GlobeIcon from 'mdi-react/GlobeIcon'
import * as React from 'react'
import Helmet from 'react-helmet'
import { ContentSection } from '../components/content/ContentSection'
import Conferences from '../components/EventsList'
import { IconItem } from '../components/IconItem'
import Layout from '../components/Layout'
import { Tweets } from '../components/Tweets'

// tslint:disable-next-line: no-any
export default class EventsPage extends React.Component<any, any> {
    // tslint:disable-next-line: no-any
    constructor(props: any) {
        super(props)
        this.state = {
            events: [],
        }
    }

    public componentDidMount(): void {
        if (document) {
            document.getElementsByTagName('body')[0].setAttribute('style', 'background-image:none')
        }
    }

    public render(): JSX.Element | null {
        const desc =
            'Meetup with Sourcegraph engineers, learn about Universal Code Search, and get a closer look at the latest updates in Sourcegraph.'
        return (
            <Layout location={this.props.location}>
                <Helmet>
                    <title>Sourcegraph - Events</title>
                    <meta name="twitter:title" content="Events at Sourcegraph" />
                    <meta property="og:title" content="Events at Sourcegraph" />
                    <meta name="twitter:site" content="@srcgraph" />
                    <meta name="twitter:image" content="https://about.sourcegraph.com/favicon.png" />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:description" content={desc} />
                    <meta property="og:description" content={desc} />
                    <meta name="description" content={desc} />
                </Helmet>
                <div className="Events bg-white text-dark">
                    <section className="events events__head">
                        <div className="events__container">
                            <ContentSection color="primary" className="hero-section text-center py-5">
                                <h1>Sourcegraph developer events and videos</h1>
                                <p className="events__head-description">{desc}</p>
                            </ContentSection>
                        </div>
                    </section>
                    <section className="events">
                        <div className="bg-white text-dark text-center mt-5">
                            <h3 className="font-weight-light py-4">Upcoming Event</h3>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-4 mb-4">
                                <a href="https://info.sourcegraph.com/online-meetup-june25" rel="nofollow">
                                    <img
                                        className="card-img-top img-fluid"
                                        src="https://cdn2.hubspot.net/hubfs/2762526/CTA%20images/online-meetup-3.17.jpg"
                                    />
                                </a>
                            </div>
                            <div className="col-md-6 mb-4 px-6">
                                <IconItem className="position-relative" icon={GlobeIcon} color="green">
                                    <h4>Online meetup: Sourcegraph 3.17</h4>
                                </IconItem>
                                <h5>Thursday, June 25, 2020, 10:00 AM PT | 1:00 AM ET</h5>
                                <p>
                                    Meet with our Sourcegraph engineers to learn about the latest updates in Sourcegraph
                                    release 3.17. Bring your questions or discuss any topic on Sourcegraph and Universal
                                    Code Search.
                                </p>
                                <p>
                                    <a
                                        className="button btn btn-primary"
                                        id="Sign up"
                                        href="https://info.sourcegraph.com/online-meetup-june25"
                                    >
                                        Sign up
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="bg-white text-dark text-center mt-5">
                            <h3 className="font-weight-light py-4">Videos</h3>
                        </div>
                        <div className="container">
                            <Conferences></Conferences>
                        </div>
                    </section>

                    <section className="events">
                        <div className="bg-white text-dark py-4">
                            <div className="container">
                                <div className="text-center mt-5">
                                    <h3 className="font-weight-light">
                                        Developers, DevOps teams, SREs, and engineering leaders love Sourcegraph
                                    </h3>
                                </div>
                            </div>
                            <div className="container-fluid">
                                <Tweets />
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        )
    }
}
