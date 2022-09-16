import { FunctionComponent } from 'react'

import ArrowRightIcon from 'mdi-react/ArrowRightIcon'

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
                    <YouTube id="Kk1ea2-l8Hk" title={title} />
                </div>
            </ContentSection>

            <CtaSection
                background="venusCode"
                title="Get started with Sourcegraph"
                description="Want to see Sourcegraph in action? Schedule time with a Sourcegraph expert or Try Sourcegraph for free."
                cta1={{
                    text: 'Get Started',
                    link: '/get-started/self-hosted',
                    ctaStyle: 'primaryButton',
                }}
                cta2={{
                    text: 'Request a demo',
                    link: '/demo',
                    icon: <ArrowRightIcon />,
                }}
                centerContent={true}
            />
        </Layout>
    )
}

export default Webinar
