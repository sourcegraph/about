import { Link } from 'gatsby'
import * as React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import { ContentSection } from '../components/content/ContentSection'
import { LeadershipSection } from '../components/LeadershipSection'
import { BoardSection } from '../components/BoardSection'
import * as craft from '../images/about/sg-craftventures.png'
import * as felicis from '../images/about/sg-felicis.png'
import * as goldcrest from '../images/about/sg-goldcrest.png'
import * as redpoint from '../images/about/sg-redpoint.png'
import * as sequoia from '../images/about/sg-sequoia.png'
import * as andreessenhorowitz from '../images/about/sg-andreessen-horowitz.png'

export default class About extends React.Component<any, any> {
    public render(): JSX.Element | null {
        return (
            <Layout location={this.props.location}>
                <div className="about content-page bg-white text-dark">
                    <Helmet>
                        <title>Sourcegraph - About</title>
                        <meta name="twitter:title" content="Sourcegraph - About" />
                        <meta property="og:title" content="Sourcegraph - About" />
                        <meta name="twitter:site" content="@sourcegraph" />
                        <meta name="twitter:image" content="https://about.sourcegraph.com/favicon.png" />
                        <meta name="twitter:card" content="summary" />
                        <meta
                            name="twitter:description"
                            content="The pace at which humans can write code is the main thing that stands between us and flying cars, a habitat on Mars, and a cure for cancer."
                        />
                        <meta
                            property="og:description"
                            content="The pace at which humans can write code is the only thing that stands between us and flying cars, a habitat on Mars, and a cure for cancer."
                        />
                        <meta
                            name="description"
                            content="The pace at which humans can write code is the only thing that stands between us and flying cars, a habitat on Mars, and a cure for cancer."
                        />
                    </Helmet>
                    <div>
                        <div className="content-section hero-section py-5">
                            <div className="container py-5">
                                <h1>About Sourcegraph</h1>
                                <p className="h4 font-weight-normal">
                                    Sourcegraph builds universal code search for every developer and company so they can
                                    innovate faster. We help developers and companies with billions of lines of code
                                    create the software you use every day.
                                </p>
                            </div>
                        </div>
                        <div className="bg-gradient-green-blue mb-5">
                            <div className="container py-6">
                                <h2>Learn all about Sourcegraph</h2>
                                <p>The <Link to="/handbook">Sourcegraph handbook</Link> has everything from our high-level <Link to="/handbook/company/strategy">strategy</Link>, <Link to="/handbook/direction">product direction</Link>, and <Link to="/handbook/company/values">values</Link>, to documentation of business processes including <Link to="/handbook/marketing/messaging">messaging</Link> and <Link to="/handbook/engineering#guiding-principles">engineering principles</Link>.  It's public for everyone to read because we are <Link to="/handbook/company/values#open-and-transparent">open and transparent</Link>.</p>
                            </div>
                        </div>
                        <div className="container py-5 mb-5">
                            <h2>Sourcegraph team</h2>
                            <p>Sourcegraph is an <Link to="/handbook/company/remote">all-remote</Link> company, working asynchronously across time zones and continents. Meet our <Link to="/handbook/company/team">team members</Link> and learn about our commitment to <Link to="/handbook/communication/code_of_conduct#our-standards">inclusion</Link>.</p>
                            <Link className="btn btn-sm btn-primary mb-2" to="https://boards.greenhouse.io/sourcegraph91">
                                Open roles - we're hiring!
                                </Link>
                        </div>
                        <ContentSection>
                            <LeadershipSection />
                        </ContentSection>
                        <ContentSection>
                            <BoardSection />
                        </ContentSection>
                        <div className="about__investors mb-5">
                            <div className="container">
                                <h2 className="mb-3">
                                    Investors
                                </h2>
                                <div className="row align-items-center mt-3">
                                    <div className="col-md-3">
                                        <img src={andreessenhorowitz} alt="Sourcegraph investor: Sequoia" />
                                    </div>
                                    <div className="col-md-3">
                                        <img src={sequoia} alt="Sourcegraph investor: Sequoia" />
                                    </div>
                                    <div className="col-md-3">
                                        <img src={felicis} alt="Sourcegraph investor: Felicis Ventures" />
                                    </div>
                                </div>
                                <div className="row align-items-center mt-3">
                                    <div className="col-md-3">
                                        <img src={redpoint} alt="Sourcegraph investor: Redpoint" />
                                    </div>
                                    <div className="col-md-3">
                                        <img src={craft} alt="Sourcegraph investor: Craft" />
                                    </div>
                                    <div className="col-md-3">
                                        <img src={goldcrest} alt="Sourcegraph investor: Goldcrest Capital" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout >
        )
    }
}
