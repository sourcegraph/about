import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import * as React from 'react'
import { Helmet } from 'react-helmet'
import { ContentSection } from '../components/content/ContentSection'
import Layout from '../components/Layout'
import { Tweets } from '../components/Tweets'
export default class EventsPage extends React.Component<any, any> {
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
            'Meet Sourcegraph at these conferences and meetups around the world.'
        return (
            <Layout location={this.props.location}>
                <div className="Events bg-white text-dark">
                    <Helmet>
                        <title>Sourcegraph developer events</title>
                        <meta name="twitter:title" content="Sourcegraph developer events" />
                        <meta property="og:title" content="Sourcegraph developer events" />
                        <meta name="description" content="Sourcegraph developer events" />
                        <meta name="twitter:description" content="Sourcegraph developer events" />
                        <meta property="og:description" content="Sourcegraph developer events" />
                    </Helmet>
                    <section className="events events__head">
                        <div className="events__container">
                        <ContentSection color="primary" className="hero-section text-center py-5">
                            <h1>Sourcegraph developer events</h1>
                            <p className="events__head-description">
                                Meet Sourcegraph at these conferences and meetups around the world.
                            </p>
                        </ContentSection>
                        </div>
                    </section>
                    <section className="events">
                        <div class="container">
                            <div class="row justify-content-md-center">
                                <div class="col mt-5">
                                    <ul>
                                        <li><a href="https://www.rxjs.live/" rel="nofollow">RxJS Live</a> March 20, 2020, London, England</li>
                                        <li><a href="https://tsconf.eu/" rel="nofollow">TSConf EU 2020</a> March 31, 2020 Linz, Austria</li>
                                    </ul>
                                </div>
                            </div>
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
