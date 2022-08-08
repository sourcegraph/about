import { FunctionComponent } from 'react'

import { Layout, ContentPage, HubSpotForm } from '@components'

export const UniversalCodeSearchEbook: FunctionComponent = () => (
    <Layout
        minimal={true}
        meta={{
            title: 'Sourcegraph: Universal code search and intelligence',
            description: 'Download the eBook: Universal code search and intelligence',
            image: 'https://info.sourcegraph.com/hubfs/sourcegraph-universal-code-search-ebook-social.png',
        }}
    >
        <ContentPage
            title="Universal Code Search"
            description="Ship better software faster with Sourcegraph Universal Code Search with enhanced code search, review, and code change management."
            className="text-dark"
            titleClassName="display-2 font-weight-bold"
        >
            <div className="bg-white text-dark">
                <div className="px-5 py-6 container-lg">
                    <div className="flex-wrap-reverse row">
                        <div className="col-md-4">
                            <p>By Quinn Slack and Beyang Liu</p>
                            <p>
                                We have entered the era of Big Code: rapidly growing codebases and repositories,
                                multiple languages and file formats, and a wide variety of developer tools. To grapple
                                with this increasing complexity, engineering teams need a tool that provides Universal
                                Code Search.
                            </p>

                            <p>With this ebook, you will learn:</p>
                            <ul className="my-3">
                                <li>What is Universal Code Search</li>
                                <li>Top reasons developers rely on Sourcegraph</li>
                                <li>How to improve code reviews with code navigation</li>
                                <li>Why engineering leaders need code search and intelligence for their teams</li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <img
                                src="/external-logos/sourcegraph-universal-code-search-ebook-v1.jpg"
                                alt="Download: Universal Code Search and Intelligence"
                                className="tw-max-w-[250px] tw-mx-auto"
                            />
                        </div>
                        <div className="col-md-4">
                            <h3>Get your free ebook.</h3>
                            <div className="mt-5">
                                <HubSpotForm
                                    masterFormName="gatedMulti"
                                    inlineMessage='Enjoy your copy of <a href="https://cdn2.hubspot.net/hubfs/2762526/sourgraph-universal-code-search-e020720.pdf?__hstc=41780861.703a2535af92dad1055c48fba5b9c3e0.1655354706303.1656610026802.1656620925168.29&__hssc=41780861.20.1656620925168&__hsfp=2908620477&hsCtaTracking=94702abd-8413-44d2-8ed8-16aa1479271e%7C3eba2b2a-b20f-49ab-b252-a262cc174938" target="_blank" rel="noopener noreferrer">Universal code search and intelligence</a>.'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ContentPage>
    </Layout>
)

export default UniversalCodeSearchEbook
