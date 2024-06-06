import Link from 'next/link'

import { ContentSection, Layout } from '../../components'

const Accessibility: React.FunctionComponent = () => (
    <Layout headerColorTheme="white">
        <ContentSection background="white">
            <h1 className="mb-4">Accessibility</h1>
            <p>
                At Sourcegraph, we take accessibility seriously and strive to make our product usable by as many people
                as possible, including those with disabilities.
            </p>
            <p>
                We work to meet the internationally recognized{' '}
                <a href="https://www.w3.org/TR/WCAG21/" target="_blank" rel="noopener noreferrer">
                    Web Content Accessibility Guidelines
                </a>{' '}
                (WCAG) 2.1 AA standard for digital accessibility.
            </p>

            <h2 className="mt-12 mb-4">Voluntary Product Accessibility Template (VPAT)</h2>
            <p>
                If you want to learn more about the accessibility of our product, you can check our latest{' '}
                <a
                    href="https://storage.googleapis.com/sourcegraph-assets/Sourcegraph%20VPAT_Report_2023-01-20.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    VPAT report
                </a>
                .
            </p>
            <p>
                The report explains how our product conforms to WCAG 2.1 AA criteria, and it lists any known
                accessibility issues.
            </p>

            <h2 className="mt-12 mb-4">Continuing to improve</h2>
            <p>We are actively working on improving accessibility and we consider it for all new features.</p>
            <p>
                You can check our progress and contribute to accessibility improvements on our{' '}
                <a href="https://github.com/orgs/sourcegraph/projects/238" target="_blank" rel="noopener noreferrer">
                    GitHub project board
                </a>
            </p>

            <h2 className="mt-12 mb-4">Contact us</h2>
            <p>
                If you encounter any accessibility issues while using our product, please let us know by{' '}
                <a
                    href="https://github.com/sourcegraph/sourcegraph/issues/new?assignees=&labels=accessibility%2Cwcag%2F2.1%2Cwcag%2F2.1%2Ffixing&template=accessibility_issue.yaml&title=%5BAccessibility%5D%3A+"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    raising an issue on GitHub
                </a>
                .
            </p>
            <p>
                We welcome feedback from our users on how we can improve accessibility. If you have any other questions
                or concerns, please <Link href="/contact">contact us</Link>.
            </p>
        </ContentSection>
    </Layout>
)

export default Accessibility
