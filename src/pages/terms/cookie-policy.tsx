import { FunctionComponent } from 'react'

import { ContentPage, ContentSection, Layout } from '@components'

const CookiePolicy: FunctionComponent = () => (
    <Layout
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
                        async={true}
                    />
                </div>
            </ContentSection>
        </ContentPage>
    </Layout>
)

export default CookiePolicy
