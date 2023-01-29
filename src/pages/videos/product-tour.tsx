import { FunctionComponent } from 'react'

import { Layout, Hero, CtaSection, ContentSection, YouTube } from '../../components'

const Webinar: FunctionComponent = () => {
    const title = 'Code Intelligence Platform - Product Tour'
    const description = 'Find and fix code across your codebase fast with Sourcegraph.'

    return (
        <Layout
            meta={{
                title: `Sourcegraph - ${title}`,
                description,
            }}
            hero={<Hero variant="marsCode" title={title} subtitle={description} />}
        >
            <ContentSection>
                <div className="tw-max-w-screen-md tw-mx-auto">
                    <YouTube id="7JeHvfwsxIY" title={title} />
                </div>
            </ContentSection>

            <CtaSection />
        </Layout>
    )
}

export default Webinar
