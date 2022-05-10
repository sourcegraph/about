import { FunctionComponent } from 'react'

import { Layout, ContentPage } from '@components'
import { useHubSpot } from '@hooks'

export const UniversalCodeSearchEbook: FunctionComponent = () => {
    useHubSpot({
        portalId: '2762526',
        formId: 'd2425310-4f8c-4b6c-8b63-c4729912df82',
        targetId: 'hubspotContactForm',
        chiliPiper: false,
    })

    return (
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
                <div className="landing-page bg-white text-dark">
                    <div className="container-lg py-6 px-5">
                        <div className="row flex-wrap-reverse">
                            <div className="col-md-4">
                                <p>By Quinn Slack and Beyang Liu</p>
                                <p>
                                    We have entered the era of Big Code: rapidly growing codebases and repositories,
                                    multiple languages and file formats, and a wide variety of developer tools. To
                                    grapple with this increasing complexity, engineering teams need a tool that provides
                                    Universal Code Search.
                                </p>

                                <p>With this ebook, you will learn:</p>
                                <ul>
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
                                    className="landing-page__img"
                                />
                            </div>
                            <div className="col-md-4">
                                <h3 className="font-weight-light font-sans">Get your free ebook.</h3>
                                <div className="mt-5">
                                    <div id="hubspotContactForm" className="d-flex justify-center" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentPage>
        </Layout>
    )
}

export default UniversalCodeSearchEbook
