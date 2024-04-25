import { FunctionComponent } from 'react'

import { Layout } from '../../components'
import CompareHero from '../../components/Compare/CompareHero'
import { CompareTables } from '../../components/Compare/CompareTables'
import { githubVsCodeSearch } from '../../components/Compare/constants'
import { OtherComparisons } from '../../components/Compare/OtherComparisons'
import { CodyCallToActionContentSection } from '../../components/cta/CodyCallToActionContentSection'

const GithubVsCodeSearch: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph Code Search vs GitHub code search',
            description: 'Feature comparison of Sourcegraph Code Search and GitHub code search',
        }}
        hero={
            <CompareHero
                title="Sourcegraph Code Search vs GitHub code search"
                competitorDescription="GitHub Copilot Logo"
                competitorIcon="/assets/compare/github-code-search.svg"
                defaultIcon="/assets/compare/sourcegraph-code-search.svg"
                defaultIconDescription="Sourcegraph Cody Logo"
                useCustomImage={true}
            >
                <p>
                    GitHub code search lets users search and navigate organization and open source code and supports
                    searching code across GitHub using regular expressions, boolean operations, specialized qualifiers,
                    and symbol search.
                </p>
                <p>
                    GitHub code search is available to all users but comes with limitations. Not all code is indexed,
                    search results are restricted to 100 results, and it does not support multi-line searching. It does
                    not offer comprehensive search across branches, nor offers granular search parameters like
                    structural or case-sensitive search. GitHub code search is unable to make and track large-scale
                    changes across repositories and code hosts or transform code into a queryable database to create
                    custom, visual dashboards to track migrations, vulnerabilities, code health, and other metrics.
                </p>

                <p>
                    <strong className="inline-block rounded-sm bg-blue-100 px-2 py-1 text-blue-500">TL;DR:</strong>{' '}
                    GitHub code search is a good choice for individuals or small teams operating with a small codebase
                    looking to find code, issues, or pull requests with simple search queries. Sourcegraph Code Search
                    is a better option for organizations with a large number of repositories or a large and complex
                    monorepo, and are looking for more sophisticated and accurate ways to search and navigate all of
                    their code. Sourcegraph Code Search also offers enterprises a way to make large-scale changes and
                    track insights across their codebase at scale. For example, you can read how Nutanix used
                    Sourcegraph Code Search to identify and fix every instance of the Log4j vulnerability.
                </p>
            </CompareHero>
        }
    >
        <CompareTables compareData={githubVsCodeSearch} firstChoiceTitle="Sourcegraph Code Search" />

        <CodyCallToActionContentSection
            title="Get Cody, the AI coding assistant"
            description="Cody makes it easy to write, fix, and maintain code."
            cta1={{ text: 'Try Cody for free', ctaStyle: 'primaryButtonWhite', link: '/cody' }}
            cta2={{ text: 'See enterprise pricing', ctaStyle: 'link', link: '/cody/pricing' }}
        />

        <OtherComparisons />
    </Layout>
)

export default GithubVsCodeSearch
