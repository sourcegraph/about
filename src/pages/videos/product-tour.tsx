import { FunctionComponent } from 'react'

import { Layout, Hero, CtaSection, ContentSection, YouTube } from '@components'

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
                    <YouTube id="hayQ-rd_kzM" title={title} />
                </div>
            </ContentSection>

            <CtaSection
                background="venusCode"
                title="Get started with Sourcegraph"
                description="Want to see Sourcegraph in action? Schedule time with a Sourcegraph expert or Try Sourcegraph for free."
                centerContent={true}
            />
        </Layout>
    )
}

export default Webinar
