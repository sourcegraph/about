import * as React from 'react'
import Layout from '../../components/Layout'
import { ContentPage } from '../../components/content/ContentPage'
import { ContentSection } from '../../components/content/ContentSection'

export default class CookiesPage extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            cookies: [],
        }
    }

    public render(): JSX.Element | null {
        return (
            <Layout
                location={this.props.location}
                meta={{
                    title: 'Sourcegraph cookie policy',
                    description: 'About.sourcegraph.com uses cookies.',
                }}
            >
                <ContentPage title="Sourcegraph cookie policy" description="How we use cookies.">
                    <ContentSection className="pb-5">
                        <div className="content-page__body text-dark">
                            <script
                                id="CookieDeclaration"
                                data-cbid="fb31dc3e-afb3-4be8-ae84-7090bba7797d"
                                src="https://consent.cookiebot.com/fb31dc3e-afb3-4be8-ae84-7090bba7797d/cd.js"
                                type="text/javascript"
                                async
                            ></script>
                        </div>
                    </ContentSection>
                </ContentPage>
            </Layout>
        )
    }
}
