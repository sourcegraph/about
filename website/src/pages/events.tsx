import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import * as React from 'react'
import { Helmet } from 'react-helmet'
import { ContentSection } from '../components/content/ContentSection'
import Layout from '../components/Layout'
import { Tweets } from '../components/Tweets'
import Conferences from '../components/EventsList'
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
            <Layout location={this.props.location}
                meta={{
                    title:
                        'Sourcegraph developer events',
                    description:
                        'Join Sourcegraph at these upcoming developer events'
                 }}
            >
                <div className="Events bg-white text-dark">
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
                        <div className="bg-white text-dark py-6">
                            <div className="container">   
                                <Conferences></Conferences>
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
