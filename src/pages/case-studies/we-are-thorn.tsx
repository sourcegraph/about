import { FunctionComponent } from 'react'

import { Layout, CaseStudyLayout, ContentSection, Blockquote } from '../../components'

export const CaseStudy: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Thorn deprecates legacy code safely',
            description:
                'Learn how Sourcegraph code search enabled Thorn to systematically sunset legacy systems safely, removing huge amounts of tech debt in the process.',
        }}
        className="navbar-dark tw-bg-black"
    >
        <CaseStudyLayout
            customer="We are Thorn"
            title="Thorn deprecates legacy code safely"
            logo="/case-studies/thorn-logo.png"
            quote={{
                text: "Ensuring that changes to legacy systems didn't affect production stability was taking too long.",
                author: 'Thorn Software Engineer Jacob Gillespie',
                image: '/case-studies/jacob-gillespie-thorn-square.jpg',
            }}
            pdf="https://sourcegraphstatic.com/Thorn%20Sourcegraph%20case%20study%20v2.pdf"
        >
            <ContentSection background="white" slimWidth={true}>
                <h2>Thorn defends children</h2>

                <p>
                    Thorn builds technology to defend children from sexual abuse. Their work focuses on finding victims
                    of child sex trafficking quickly and eliminating child sexual abuse from the internet. Thorn
                    partners with tech companies, law enforcement, and other NGOs to build products to find vulnerable
                    child victims faster. Thorn's software has helped law enforcement reduce investigation times by 60%,
                    ensuring that more children are found, faster.
                </p>

                <h2 className="tw-pt-md tw-pb-1">
                    Sunsetting deprecated systems was costly and risked production stability
                </h2>
                <p>
                    Determining which code relied on legacy architecture was difficult. Developers took too long to
                    ensure that changes to legacy systems didn't affect production stability.
                </p>
                <Blockquote quote="Ensuring that changes to legacy systems didn't affect production stability was taking too long." />

                <p>
                    Over 9,000 officers in 38 countries rely on Thorn to identify child victims of sexual abuse. Any
                    downtime reduced Thorn's ability to identify these children.
                </p>

                <h2 className="tw-pt-md tw-pb-1">Existing tooling was not sufficient</h2>

                <p>
                    Tech debt and upkeep of legacy code were problematic. Previous attempts, such as cloning all
                    repositories locally and using grep to find references, were inadequate when considering
                    simultaneous development by multiple teams across many different projects, repositories, and
                    branches. Determining if all the different microservices were properly in sync when removing legacy
                    application code was painful.
                </p>

                <h2 className="tw-pt-md tw-pb-1">
                    Sourcegraph's multi-repository code search proved that no code referencing legacy systems existed
                    across the organization
                </h2>

                <p>
                    Thorn Software Engineer Jacob Gillespie deployed Sourcegraph and synced Thorn's entire list of
                    repositories within minutes. With Sourcegraph, Thorn could search over the contents of every
                    repository, in any or all branches in seconds. Sourcegraph code search gives Thorn the ability to
                    find references to deprecated systems.
                </p>

                <p>Sourcegraph is now essential to their code review process. </p>

                <Blockquote quote="In pull requests, team members include links to Sourcegraph code search to prove all references to a deprecated system have been removed, giving the reviewer confidence that the code is safe to merge." />

                <h2 className="tw-pt-md tw-pb-1">Deprecated systems were taken offline without downtime</h2>
                <p>
                    Thorn's developers removed or modified deprecated systems, eliminating huge amounts of tech debt.
                    This benefited all areas of the architecture, including not only application code, but also build,
                    deployment, logging, and monitoring systems—any tool that supported the deployment and uptime of the
                    application.
                </p>

                <p className="tw-pb-md">
                    Using Sourcegraph provides critical support to Thorn's mission. Every start-up has to make choices
                    about when to rebuild their systems and when to move forward accruing technical debt. Modern
                    microservice architecture makes the application deprecation process challenging.
                </p>
            </ContentSection>
        </CaseStudyLayout>
    </Layout>
)

export default CaseStudy
