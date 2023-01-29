import { FunctionComponent } from 'react'

import { ContentPage, ContentSection, Layout } from '../../components'

const CookiePolicy: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph - Cookie Policy',
            description:
                'At Sourcegraph, your privacy is important to us. We use cookies to personalize content and ads, to provide social media features and to analyze our traffic.',
        }}
    >
        <ContentPage title="Sourcegraph cookie policy" description="How we use cookies.">
            <ContentSection>
                <div className="content-page__body text-dark">
                    <script
                        id="CookieDeclaration"
                        data-cbid="fb31dc3e-afb3-4be8-ae84-7090bba7797d"
                        src="https://consent.cookiebot.com/fb31dc3e-afb3-4be8-ae84-7090bba7797d/cd.js"
                        type="text/javascript"
                        async={true}
                    />
                </div>
            </ContentSection>
        </ContentPage>
    </Layout>
)

export default CookiePolicy
