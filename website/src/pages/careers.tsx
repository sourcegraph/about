import * as React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'

export default class Careers extends React.Component<any, any> {
    // tslint:disable-next-line: no-any
    constructor(props: any) {
        super(props)
        this.state = {
            events: [],
        }
    }

    public render(): JSX.Element | null {
        return (
            <Layout location={this.props.location}>
                <div className="about content-page bg-white text-dark">
                    <Helmet>
                        <title>Sourcegraph - Careers</title>
                        <meta name="twitter:title" content="Sourcegraph - About" />
                        <meta property="og:title" content="Sourcegraph - About" />
                        <meta name="twitter:site" content="@srcgraph" />
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
                </div>
                <div>
                    <div id="grnhse_app"></div>
                </div>
                <script type="text/javascript" src="https://boards.greenhouse.io/embed/job_board/js?for=sourcegraph91"></script>
            </Layout >
        )
    }
}
