import { FunctionComponent } from 'react'

import { Layout, Hero, RequestDemoTrySourcegraph, ContentSection, YouTube, Background } from '@components'

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
                    <YouTube id="Kk1ea2-l8Hk" title={title} />
                </div>
            </ContentSection>

            <Background variant="venusCode">
                <RequestDemoTrySourcegraph centerContent={true} />
            </Background>
        </Layout>
    )
}

export default Webinar
