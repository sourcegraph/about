import { PageProps } from 'gatsby'
import * as React from 'react'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import { ContentSection } from '../components/content/ContentSection'
import Layout from '../components/Layout'
import { Helmet } from 'react-helmet'

export const DevToolsQuizPage: React.FunctionComponent<PageProps> = props => (
    <Layout
        location={props.location}
        meta={{
            title: 'New Year, New Dev Tools - Take the Quiz - Sourcegraph',
            description:
                'Dev tools have made huge strides recently. This is a chance to think about your go-to tools for searching, reading, and understanding code and discover some new ones along the way.',
            image: 'https://about.sourcegraph.com/sourcegraph-og.png',
        }}
        className="dev-tools-quiz-page"
        hero={
            <div className="container pb-4">
                <div className="row">
                    <div className="col-lg-9">
                        <h1 className="title display-2 mb-4">New Year, New Dev Tools: Evaluating Your Current Workflow in 5 Minutes or Less</h1>
                    </div>
                    <div className="col-lg-6">
                        <p>
                            Developer tools have made huge strides over the last decade, and useful new tools appear almost weekly. While 
                            devs are still productive with a terminal and an editor, contemporary tools can make it easier to search, read, 
                            and understand code, regardless of experience levels.
                        </p>
                        <p>
                            This quiz isn't a test or evaluation. It's a chance to think about your go-to workflows and tools for searching, 
                            reading, and understanding code – and discover some new ones along the way.
                        </p>
                        <a
                            className="btn btn-primary"
                            href="https://form.typeform.com/to/bSiNOCmx"
                        >
                            Take the quiz <ArrowRightIcon className="ml-1" />
                        </a>
                    </div>
                </div>
            </div>
        }
    >
        <Helmet>
            <script src="//embed.typeform.com/next/embed.js"></script>    
        </Helmet>
        <ContentSection className="text-center">
            <div data-tf-widget="bSiNOCmx" data-tf-iframe-props="title=Dev Tools Quiz" data-tf-hidden="utm_source=xxxxx,utm_medium=xxxxx,utm_campaign=xxxxx,utm_term=xxxxx,utm_content=xxxxx"></div>
        </ContentSection>
    </Layout>
)

export default DevToolsQuizPage
