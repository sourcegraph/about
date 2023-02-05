import { FunctionComponent } from 'react'

import { Layout, Hero, Badge, ContentSection } from '../components'
import { DownloadAppButton } from '../components/DownloadAppButton'
import { buttonLocation } from '../data/tracking'

const AppPage: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph App',
            description: 'Code intelligence and search, running locally on your machine.',
        }}
        className="navbar-dark"
        hero={
            <Hero
                variant="darkAuroraGrid"
                title={
                    <>
                        Sourcegraph App <Badge color="dark-gray" size="small" text="Alpha" />
                    </>
                }
                titleClassName="tw-white tw-block"
                subtitle="Sourcegraph code intelligence and search, running locally on your machine."
                centerContent={true}
                cta={
                    <>
                        <DownloadAppButton buttonLocation={buttonLocation.hero} />
                        <a
                            href="https://docs.sourcegraph.com"
                            className="tw-block tw-text-white tw-font-normal tw-pt-sm"
                        >
                            Sourcegraph App documentation
                        </a>
                    </>
                }
                displayUnderNav={true}
            />
        }
    >
        <ContentSection background="black" />
    </Layout>
)

export default AppPage
