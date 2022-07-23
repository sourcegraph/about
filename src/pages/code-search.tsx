import React, { FunctionComponent } from 'react'

import { IntegrationsSection, Layout, ProductHero } from '@components'

export const CodeSearchPage: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph - Code Search',
            description:
                'Onboard to a new codebase, find answers faster, and identify security risks with Sourcegraph Code Search. Search across all the repositories you work with.',
        }}
        hero={
            <ProductHero
                variant="lightNebulousMars"
                product="code search"
                title={'Search your code.\nAll of it.'}
                description="Onboard to a new codebase, understand code faster, and identify security risks with universal code search."
                displayUnderNav={true}
            />
        }
    >
        <IntegrationsSection />
    </Layout>
)

export default CodeSearchPage
