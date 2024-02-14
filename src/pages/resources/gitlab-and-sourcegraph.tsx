import { NextPage } from 'next'
import { AiOutlineRobot } from 'react-icons/ai'
import { FiGitlab } from 'react-icons/fi'
import { MdComputer } from 'react-icons/md'

import { BackButton, Heading, Layout } from '../../components'
import SidebarCta from '../../components/Resources/SidebarCta'

const GitLabSolutionBrief: NextPage = () => {
    const meta = {
        title: 'GitLab and Sourcegraph',
        // image,
        description:
            "Sourecgraph's native GitLab integration helps developer build better software by freeing them up to focus on complex problems.",
        externalTitle: 'GitLab and Sourcegraph',
        externalDescription:
            "Sourecgraph's native GitLab integration helps developer build better software by freeing them up to focus on complex problems.",
        canonical: 'https://sourcegraph.com/resources/gitlab-and-sourcegraph',
    }

    return (
        <Layout meta={meta}>
            <article className="mx-auto mb-xl max-w-screen-xl px-sm">
                <div className="container mx-auto pt-20 sm:pl-0">
                    <BackButton href="/resources" text="Resources" />
                </div>

                {/* <BlogHeader {...blogInfo} variant="post" />
                <PostTemplate post={post} content={content} className="mx-auto max-w-[840px]" /> */}
                <div className="mt-12">
                    <Heading as="h1" size="h1" className="!font-grotesk">
                        Sourcegraph's Code Intelligence Platform works natively with GitLab{' '}
                    </Heading>
                </div>

                <div className="mt-14 flex flex-col gap-10 md:flex-row">
                    <div className="prose max-w-[80ch] prose-h2:font-semibold prose-ul:ml-0">
                        <p>
                            GitLab is the most comprehensive DevSecOps platform in the market today, offering a powerful
                            suite of products to help create secure software faster. To bring even more value to GitLab
                            users, GitLab is designed as an open-source platform to allow easy integration with leading
                            technology partners. These integrations allow organizations to share data between GitLab and
                            the partner's tools to extract more value from both products. GitLab now offers integration
                            with Sourcegraph to provide additional AI coding assistance and code search.
                        </p>

                        <h2>Sourcegraph Overview</h2>

                        <p>
                            Sourcegraph is the Code Intelligence Platform that makes codebases intelligible by
                            semantically indexing and analyzing all of an organization's code and code-related data
                            sources to give dev and engineering leaders a complete understanding of their codebase.
                            Developers use Sourcegraph's Cody, the AI coding assistant, and Code Search to understand,
                            fix, and automate across the entire codebase across every code host, language, and
                            repository.
                        </p>

                        {/* stats 3 column grid */}
                        <div className="mt-14 grid gap-6 leading-snug lg:grid-cols-3">
                            <div className="rounded-lg border border-gray-200 p-5">
                                <div className="mb-1.5 text-5xl font-semibold text-violet-500">87%</div> of devs say
                                they're struggling to keep their knowledge up to date on new code written
                            </div>
                            <div className="rounded-lg border border-gray-200 p-5">
                                <div className="mb-1.5 text-5xl font-semibold text-violet-500">74%</div> say that they
                                rely too heavily on other people to understand their codebase
                            </div>
                            <div className="rounded-lg border border-gray-200 p-5">
                                <div className="mb-1.5 text-5xl font-semibold text-violet-500">73%</div> of devs are
                                blocked more frequently due to the size of their codebase
                            </div>
                        </div>
                        <p className="mt-5 text-xs text-gray-500">* Sourcegraph's Big Code Report, May 2023</p>

                        <h2>Sourcegraph Features</h2>

                        <p>
                            <a href="https://sourcegraph.com/cody">
                                <strong className="font-bold">Cody</strong>
                            </a>
                            : Cody is an AI coding assistant, answering technical questions, fixing and generating code
                            with high accuracy. Devs can use Cody directly in their text editor or wherever they're
                            writing and reading code.
                        </p>

                        <p>
                            <a href="https://sourcegraph.com/code-search">
                                <strong className="font-bold">Code Search</strong>
                            </a>
                            : With Code Search and precise code navigation, developers can find code to reuse, resolve
                            issues and incidents faster, discover every instance of vulnerable code in milliseconds, and
                            get answers fast without waiting for context from teammates.
                        </p>

                        <p>
                            <strong className="font-bold">Batch Changes</strong>: Automate large-scale code changes
                            across the entire codebase such as updating legacy code, removing outdated patterns, and
                            fixing critical security issues.
                        </p>

                        <p>
                            <strong className="font-bold">Code Insights</strong>: Transform your code into a queryable
                            database and create visual dashboards in seconds, allowing you to track migrations, code
                            smells, ownership, versions, and more.
                        </p>

                        <p>
                            <strong className="font-bold">Code Monitoring</strong>: Get alerted whenever a specified
                            pattern appears in your codebase, such as legacy code, calls to deprecated endpoints, or
                            changes to specified files
                        </p>

                        <p>
                            Cody complements the AI-assisted features GitLab offers providing customers multiple ways to
                            take advantage of Artificial Intelligence.
                        </p>

                        {/* stats 3 column grid */}
                        <div className="mt-14 grid gap-6 leading-snug lg:grid-cols-3">
                            <div className="rounded-lg border border-gray-200 p-8">
                                <MdComputer className="h-12 w-12 text-violet-500" />
                                <h4 className="mt-3 mb-1.5 text-lg font-semibold uppercase">Code Understanding</h4> Find
                                and fix code in any code host, language, or repository. Cody can explain what code is
                                doing ― at a high level, or in detail.
                            </div>
                            <div className="rounded-lg border border-gray-200 p-8">
                                <FiGitlab className="h-12 w-12 text-violet-500" />
                                <h4 className="mt-3 mb-1.5 text-lg font-semibold uppercase">Code Security</h4> Find
                                every instance of a vulnerability. Automate MR creation to fix vulnerabilities. Monitor
                                commits for introduction of risky patterns.
                            </div>
                            <div className="rounded-lg border border-gray-200 p-8">
                                <AiOutlineRobot className="h-12 w-12 text-violet-500" />
                                <h4 className="mt-3 mb-1.5 text-lg font-semibold uppercase">AI-Generated Code</h4>{' '}
                                Generate everything from boilerplate code to API resolvers that rely on the context and
                                style of your codebase.
                            </div>
                        </div>

                        <h2>Using Sourcegraph with GitLab</h2>

                        <p>
                            Sourcegraph's Code Intelligence Platform helps developers build better software by freeing
                            up their time to focus on complex solutions.
                        </p>

                        <h3>Cody:</h3>

                        <ul>
                            <li>
                                <strong className="font-bold">Write and understand code faster</strong>: Cody writes
                                code and answers questions using your own code graph as context, whether it's across
                                multiple instances of GitLab or multiple code hosts.
                            </li>

                            <li>
                                <strong className="font-bold">Stay in Context</strong>: Cody pulls context of GitLab
                                code into your IDE so you don't have to move to another interface to get answers.
                            </li>
                        </ul>

                        <h3>Code Search:</h3>

                        <ul>
                            <li>
                                <strong className="font-bold">Understand code</strong>: Search and navigate all of your
                                GitLab code. Uncover answers, gather context and understand dependencies quickly and
                                without interrupting teammates.
                            </li>

                            <li>
                                <strong className="font-bold">Improve code security</strong>: Find, track, and fix
                                vulnerable code in minutes, and have confidence you have resolved every instance of the
                                vulnerability.
                            </li>

                            <li>
                                <strong className="font-bold">Accelerate codebase-wide changes</strong>: Make
                                large-scale code changes across code hosts and repositories. Track and manage all of
                                your changes until each is merged in GitLab's native merge request flow.
                            </li>

                            <li>
                                <strong className="font-bold">Track everything in your codebase</strong>: Transform your
                                code into a queryable database to create visual dashboards in seconds to track
                                everything in your codebase, from migrations to code smells.
                            </li>
                        </ul>

                        <h2>About GitLab</h2>

                        <p>
                            GitLab is The DevOps platform that empowers organizations to maximize the overall return on
                            software development by delivering software faster and efficiently while strengthening
                            security and compliance. With GitLab, every team in your organization can collaboratively
                            plan, build, secure, and deploy software to drive business outcomes faster with complete
                            transparency, consistency, and traceability.
                        </p>
                    </div>
                    <div className="flex-shrink">
                        <div className="sticky top-36">
                            <SidebarCta />
                        </div>
                    </div>
                </div>
            </article>
        </Layout>
    )
}

export default GitLabSolutionBrief
