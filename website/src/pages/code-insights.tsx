import { PageProps } from 'gatsby'
import Layout from '../components/Layout'
import React from 'react'

import { CodeInsightExample } from '../components/code-insights/CodeInsightsExamples'
import { CodeInsightExampleType } from '../components/code-insights/types'
import {
    CAPTURE_INSIGHT_TERRAFORM_EXAMPLES_DATA,
    SEARCH_INSIGHT_CSS_MODULES_EXAMPLES_DATA,
} from '../components/code-insights/mock-data'

const styles = {
    container: `
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin: 1rem;
    `,
    insight: '',
}

const CodeInsights: React.FunctionComponent<PageProps> = props => (
    <Layout location={props.location}>
        Hello code insights
        <section className={styles.container}>
            <CodeInsightExample
                type={CodeInsightExampleType.Search}
                data={SEARCH_INSIGHT_CSS_MODULES_EXAMPLES_DATA}
                className={styles.insight}
            />

            <CodeInsightExample
                type={CodeInsightExampleType.Capture}
                data={CAPTURE_INSIGHT_TERRAFORM_EXAMPLES_DATA}
                className={styles.insight}
            />
        </section>
    </Layout>
)

export default CodeInsights
