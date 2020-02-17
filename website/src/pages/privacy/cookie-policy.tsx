import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import * as React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../../components/Layout'
export default class CookiesPage extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            cookies: [],
        }
    }

    public render(): JSX.Element | null {
        return (
            <Layout location={this.props.location}
                meta={{
                    title:
                        'Sourcegraph cookie policy',
                    description:
                        'About.sourcegraph.com uses cookies.'
                 }}
            >
                <div className="bg-white text-dark">
                    <section>
                        <div class="content-page__title">
                            <h1>Sourcegraph Cookie Policy</h1>
                        </div>
                    </section>
                    <section>
                        <div class="content-page__body">
                            <script id="CookieDeclaration" src="https://consent.cookiebot.com/fb31dc3e-afb3-4be8-ae84-7090bba7797d/cd.js" type="text/javascript" async></script>
                        </div>
                    </section>
                </div>
            </Layout>
        )
    }
}
