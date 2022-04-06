import { kebabCase } from 'lodash'
import ArrowRightBoxIcon from 'mdi-react/ArrowRightBoxIcon'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import Link from 'next/link'

import { Layout, ContentSection, TrySourcegraph } from '@components'

import styles from './useCases.module.scss'

const features: string[] = [
    'Find and fix security vulnerabilities',
    'Accelerate developer onboarding',
    'Resolve incidents faster',
    'Streamline code reuse',
    'Boost code health',
]

const UseCases: React.FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Use Cases | Sourcegraph',
            description:
                'See how the most productive dev teams use Sourcegraph to build software you rely on. From remediating vulnerabilities to streamlining code reuse, our customers use Sourcegraph to solve big code problems.',
            image: 'https://about.sourcegraph.com/sourcegraph-og.png',
        }}
        heroAndHeaderClassName={styles.headerAndHero}
        hero={
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 mb-lg-6 mt-6">
                        <h1 className="display-2 font-weight-bold mb-0">Our customers move faster with Sourcegraph</h1>
                        <p className="home__semiwide-paragraph my-5 display-4">
                            Companies of all sizes and in all industries use Sourcegraph universal code search to solve
                            big code problems.
                        </p>
                    </div>

                    <div className="col-lg-5 mt-lg-6 pt-4 mb-6">
                        <h2 className={`${styles.seeHow} font-weight-normal`}>See how customers use Sourcegraph to</h2>

                        <div className="list-group">
                            {features.map((feature: string) => (
                                <a
                                    key={feature}
                                    href={`#${kebabCase(feature)}`}
                                    className={`${styles.listGroupItem} list-group-item list-group-item-action d-flex justify-content-between align-items-center`}
                                >
                                    {feature}
                                    <ArrowRightIcon className="icon-inline ml-1" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        }
    >
        <div>
            {/* Todo: Add new Customer Logos Section when homepage updates are finalized */}

            <ContentSection id="find-and-fix-security-vulnerabilities" className="pt-8">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <h2 className="display-3 font-weight-bold mb-3">Find and fix security vulnerabilities</h2>
                        <h5>Find, fix, and track vulnerable code quickly across your entire codebase.</h5>
                        <p>
                            You can't fix what you can't find. Remediate vulnerabilities with confidence knowing you
                            found every instance of affected code. Track your remediation initiatives to completion with
                            automated fixes and pull requests. With Sourcegraph, timely resolution is a search away.
                        </p>
                        <ul>
                            <li>Reduce time to recovery with a single search</li>
                            <li>
                                Automate fixing, merging, and deploying changes with{' '}
                                <Link href="/batch-changes/">Batch Changes</Link>
                            </li>
                            <li>Alert for known vulnerabilities and risky code changes with code monitoring</li>
                        </ul>
                        <a
                            href="https://info.sourcegraph.com/demo-request"
                            title="Request a demo"
                            className="btn btn-outline-primary"
                        >
                            Request a demo <ArrowRightBoxIcon className="icon-inline ml-1" />
                        </a>
                    </div>
                    <div className="col-lg-6 text-center">
                        <blockquote className="blockquote case-studies__quote case-studies__quote--in-content mt-7">
                            <p>
                                [Sourcegraph] is the best way to prove we're not vulnerable to a particular CVE, if and
                                when we get asked by an auditor.
                            </p>
                            <footer className="blockquote-footer">David Haynes, Security Engineer at Cloudflare</footer>
                            <div className="d-flex justify-content-center my-4">
                                <Link
                                    href="/case-studies/cloudflare-accelerates-debugging-and-improves-security"
                                    passHref={true}
                                >
                                    <a href="#none" className="btn">
                                        <img
                                            src="/external-logos/cloudflare-color-logo.svg"
                                            width="110px"
                                            alt="Cloudflare"
                                        />
                                    </a>
                                </Link>
                            </div>
                        </blockquote>
                    </div>
                </div>
            </ContentSection>

            <hr className="mt-8 mb-6" />

            <ContentSection id="accelerate-developer-onboarding" className="py-4">
                <div className="row justify-content-center pt-md-4">
                    <div className="col-lg-6 text-center">
                        <blockquote className="blockquote case-studies__quote case-studies__quote--in-content mt-8">
                            <p>
                                For our new developers, Sourcegraph has been invaluable to get to know the repository
                                structure, to track down where code lives, and self-service during their investigations.
                            </p>
                            <footer className="blockquote-footer">Owen Kim, Senior Software Engineer, Convoy</footer>

                            <div className="d-flex justify-content-center my-4">
                                <Link href="/case-studies/convoy-improved-on-boarding" passHref={true}>
                                    <a href="#none" className="btn">
                                        <img src="/external-logos/convoy-logo.svg" width="110px" alt="Convoy" />
                                    </a>
                                </Link>
                            </div>
                        </blockquote>
                    </div>
                    <div className="col-lg-6">
                        <h2 className="display-3 font-weight-bold mb-3">Accelerate developer onboarding</h2>
                        <h5>
                            Decrease time to first commit with self-serve onboarding, codebase exploration, and
                            knowledge sharing.
                        </h5>
                        <p>
                            Onboard teammates faster and improve dev velocity by making it easy to search and find code
                            and context. Unlike splintered tooling and knowledge management systems that require manual
                            interaction and upkeep, Sourcegraph helps devs self-serve.
                        </p>
                        <ul>
                            <li>
                                Search across all repositories and multiple branches to find answers in staging, dev,
                                and production environments
                            </li>
                            <li>
                                Navigate large codebases with definitions and references with advanced Code Intelligence
                            </li>
                            <li>Get answers faster with shareable links to specific code</li>
                        </ul>
                        <a
                            href="https://info.sourcegraph.com/demo-request"
                            title="Request a demo"
                            className="btn btn-outline-primary"
                        >
                            Request a demo <ArrowRightBoxIcon className="icon-inline ml-1" />
                        </a>
                    </div>
                </div>
            </ContentSection>

            <hr className="mt-8 mb-6" />

            <ContentSection id="resolve-incidents-faster" className="py-4">
                <div className="row justify-content-center pt-md-4">
                    <div className="col-lg-6">
                        <h2 className="display-3 font-weight-bold mb-3">Resolve incidents faster</h2>
                        <h5>Identify the root cause in code and fix the issue everywhere.</h5>
                        <p>
                            Every minute matters when responding to a business-critical incident. Downtime = revenue
                            lost. Sourcegraph helps development teams identify the root cause in code, understand why
                            the problem occurred and its potential impact on other services, fix the issue everywhere so
                            it won't reoccur, and assure incident responders that all holes are plugged.
                        </p>
                        <ul>
                            <li>
                                Quickly understand all context & dependencies around the codebase to self-serve or
                                involve relevant teams
                            </li>
                            <li>
                                Refactor code to replace insecure functions, update vulnerable packages, or modify
                                container configurations across hundreds of repositories
                            </li>
                            <li>
                                Document your solution by sharing links to searches and files and recording work in a
                                search notebook
                            </li>
                        </ul>
                        <a
                            href="https://info.sourcegraph.com/demo-request"
                            title="Request a demo"
                            className="btn btn-outline-primary"
                        >
                            Request a demo <ArrowRightBoxIcon className="icon-inline ml-1" />
                        </a>
                    </div>
                    <div className="col-lg-6 text-center">
                        <blockquote className="blockquote case-studies__quote case-studies__quote--in-content mt-7">
                            <p>
                                Sourcegraph's search gave us confidence because we knew we wouldn't overlook anything:
                                Sourcegraph returns all search results, it doesn't drop or elide them.
                            </p>
                            <footer className="blockquote-footer">Simon Law, Staff Software Engineer, Quantcast</footer>
                            <div className="d-flex justify-content-center my-4">
                                <Link href="/case-studies/quantcast-large-scale-refactoring" passHref={true}>
                                    <a href="#none" className="btn">
                                        <img src="/external-logos/quantcast-logo.svg" width="110px" alt="Quantcast" />
                                    </a>
                                </Link>
                            </div>
                        </blockquote>
                    </div>
                </div>
            </ContentSection>

            <hr className="mt-8 mb-6" />

            <ContentSection id="streamline-code-reuse" className="py-4">
                <div className="row justify-content-center pt-md-4">
                    <div className="col-lg-6 text-center">
                        <blockquote className="blockquote case-studies__quote case-studies__quote--in-content mt-7">
                            <p>
                                If I'm developing code for a library that might draw charts, for example, we don't want
                                30 different ways to draw a chart at FactSet. With Sourcegraph, I can search the code to
                                find other chart examples, and simply copy the code. This saves us time and ensures
                                consistency.
                            </p>
                            <footer className="blockquote-footer">Joseph Majesky, Software Engineer, FactSet</footer>
                            <div className="d-flex justify-content-center my-4">
                                <Link href="/case-studies/factset-migrates-from-perforce-to-github" passHref={true}>
                                    <a href="#none" className="btn">
                                        <img src="/external-logos/factset-logo.svg" width="110px" alt="FactSet" />
                                    </a>
                                </Link>
                            </div>
                        </blockquote>
                    </div>
                    <div className="col-lg-6">
                        <h2 className="display-3 font-weight-bold mb-3">Streamline code reuse</h2>
                        <h5>Stop wasting time rewriting code.</h5>
                        <p>
                            With Sourcegraph, you can find existing code libraries for reuse and avoid spending time on
                            problems you know a teammate already solved. This means a more secure and coherent codebase
                            and more time for you to spend on more interesting work. Sourcegraph makes it easy to:
                        </p>
                        <ul>
                            <li>
                                Quickly discover code you can trust for reuse by typing your query and getting an answer
                            </li>
                            <li>
                                Evaluate signals from multiple sources and tools to help you assess if you should use
                                the code
                            </li>
                            <li>
                                Safely and efficiently maintain code that is being reused and easily make changes
                                everywhere with <Link href="/batch-changes/">Batch Changes</Link>
                            </li>
                            <li>Add a code monitor to alert you of commits using an out-of-date library</li>
                        </ul>
                        <a
                            href="https://info.sourcegraph.com/demo-request"
                            title="Request a demo"
                            className="btn btn-outline-primary"
                        >
                            Request a demo <ArrowRightBoxIcon className="icon-inline ml-1" />
                        </a>
                    </div>
                </div>
            </ContentSection>

            <hr className="mt-8 mb-6" />

            <ContentSection id="boost-code-health" className="py-4">
                <div className="row justify-content-center pt-md-4">
                    <div className="col-lg-6">
                        <h2 className="display-3 font-weight-bold mb-3">Boost code health</h2>
                        <h5>
                            Improve code posture with large-scale changes and track code health initiatives towards
                            completion.
                        </h5>
                        <p>
                            Engineering teams need to monitor code health across their entire codebase to track and
                            measure code quality consistently. Sourcegraph helps teams figure out the components of code
                            health they have all agreed on and work towards a healthier codebase.
                        </p>
                        <ul>
                            <li>
                                Search for and refactor references to deprecated services, libraries, URL patterns, and
                                more across all your repositories with confidence
                            </li>
                            <li>
                                Understand the impact of changes on health and find interventions for improving code
                                health
                            </li>
                            <li>Efficiently tackle tech debt from legacy systems and acquisitions</li>
                        </ul>
                        <a
                            href="https://info.sourcegraph.com/demo-request"
                            title="Request a demo"
                            className="btn btn-outline-primary"
                        >
                            Request a demo <ArrowRightBoxIcon className="icon-inline ml-1" />
                        </a>
                    </div>
                    <div className="col-lg-6 text-center">
                        <blockquote className="blockquote case-studies__quote case-studies__quote--in-content mt-6">
                            <p>
                                With the help of Sourcegraph, we were able to quickly look at all clients of an API and
                                remove unused attributes that lived in different repositories, ultimately simplifying
                                our APIs and speeding up developer iteration time.
                            </p>
                            <footer className="blockquote-footer">Justin Phillips, Software Engineer, Lyft</footer>
                            <div className="d-flex justify-content-center my-4">
                                <Link href="/case-studies/lyft-monolith-to-microservices" passHref={true}>
                                    <a href="#none" className="btn">
                                        <img src="/external-logos/lyft-logo.svg" width="110px" alt="Lyft" />
                                    </a>
                                </Link>
                            </div>
                        </blockquote>
                    </div>
                </div>
            </ContentSection>

            <hr className="my-8" />

            <TrySourcegraph className="mb-5" />
        </div>
    </Layout>
)

export default UseCases
