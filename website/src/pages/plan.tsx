import { Link } from 'gatsby'
import * as React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'

export default class MasterPlan extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
    }

    public render(): JSX.Element | null {
        const desc =
            // tslint:disable-next-line:max-line-length
            'Our long-term vision is to make it so everyone, in every community, in every country, and in every industry—not just the ones working at the half-dozen dominant tech companies—can create products using the best technology.'
        return (
            <Layout location={this.props.location}>
                <div className="plan">
                    <Helmet>
                        <title>Sourcegraph - Master Plan</title>
                        <meta name="twitter:title" content="Sourcegraph - Master Plan" />
                        <meta property="og:title" content="Sourcegraph - Master Plan" />
                        <meta name="twitter:description" content={desc} />
                        <meta property="og:description" content={desc} />
                        <meta name="description" content={desc} />
                    </Helmet>
                    <div>
                        <section className="plan__title">
                            <div className="plan__container">
                                <h1>Sourcegraph Master Plan</h1>
                                <h2 className="font-weight-normal">What we're building, and why it matters.</h2>
                            </div>
                        </section>
                        <section className="plan__body plan__body-light-11">
                            <div className="plan__container">
                                <p>
                                    <span className="plan__p-title">Today,</span> Sourcegraph gives you code search and
                                    intelligence on the web with <Link to="/">Sourcegraph</Link>. You can use it on your
                                    company's internal code, or you can try it on open-source code at{' '}
                                    <a href="https://sourcegraph.com/search">Sourcegraph.com</a> and with{' '}
                                    <Link to="/docs/integrations/">the browser/editor integrations</Link>.
                                </p>
                                <p>
                                    What most people don't know is that our long-term vision is to make it so everyone,
                                    in every community, in every country, and in every industry—not just the ones
                                    working at the half-dozen dominant tech companies—can create products using the best
                                    technology. We believe this is the only way the world will sustain broad economic
                                    growth and build the innovations we need over the next 100 years in transportation,
                                    health care, energy, AI, communication, space travel, etc.
                                </p>

                                <p>In 1976, just 0.2% of the world's population had access to a computer.</p>

                                <blockquote className="plan__blockquote">
                                    <p>
                                        Apple's vision then was to create a "bicycle for the mind" in the form of a
                                        computer, and Microsoft put a computer "on every desk and in every home."
                                    </p>
                                </blockquote>
                                <p>
                                    Together, these companies succeeded in bringing computing to billions of people. But
                                    these billions of people are still using software applications built by just 0.2% of
                                    the world's population (those who can code).
                                </p>
                                <p>
                                    <span className="plan__p-title">The next step</span> is to make it so billions of
                                    people, not just 0.2% of the world population, can build software (not just use it).
                                    Amazon Web Services and others solve the distribution piece: a tiny team can reach
                                    millions of users using the same infrastructure available to the most advanced tech
                                    companies. But the process of creating software is stuck in the mainframe era: the
                                    "developer experience" of building software is still poor, duplicative, manual, and
                                    single-player—and every software project is about integrating components of variable
                                    quality developed mostly in isolation, with a high chance of failure.
                                </p>
                                <div className="plan__floating-block plan__floating-block--white plan__zigzag">
                                    <div className="plan__floating-block--pill">Phase 1</div>
                                    <p>
                                        <span className="b">At Sourcegraph,</span> we want to fix this and eventually
                                        enable everyone to build software. For now, we're revealing our master plan for
                                        phase 1: how we're going to make it easier and faster for today's developers to
                                        build software. In short, phase 1 is:
                                    </p>
                                    <ul className="pl-4">
                                        <li>Make basic code intelligence ubiquitous</li>
                                        <li>Make code review continuous and intelligent</li>
                                        <li>Increase the amount and quality of open-source code</li>
                                    </ul>
                                </div>
                                <p>
                                    When phase 1 is almost done, we'll reveal phase 2: how we'll work toward enabling
                                    everyone to code. If you think that's crazy, ask yourself: now that billions of
                                    people have access to the Internet, is coding more like reading and writing (which
                                    virtually everyone does) or publishing books (which 0.1% of the population does)?
                                </p>
                            </div>
                        </section>

                        <section className="plan__body plan__body-light-10">
                            <div className="plan__container">
                                <h1>Make Basic Code Intelligence Ubiquitous</h1>
                                <h2 className="font-weight-normal">
                                    Every developer deserves to have all these features work 100% of the time:
                                </h2>

                                <ul className="plan__pill-list">
                                    <li className="plan__pill">Jump to definition</li>
                                    <li className="plan__pill">Hover tooltips (with type info and docs)</li>
                                    <li className="plan__pill">Advanced textual code search</li>
                                    <li className="plan__pill">Symbol search</li>
                                    <li className="plan__pill">Find references (local and cross-repository)</li>
                                    <li className="plan__pill">Autocomplete</li>
                                    <li className="plan__pill">Automatic formatting</li>
                                    <li className="plan__pill">Inline errors, linting, and diagnostics</li>
                                </ul>

                                <h2 className="font-weight-normal">The above features should be expected:</h2>

                                <ul className="pl-4">
                                    <li className="plan__list-item plan__list-item--bordered">For every language</li>
                                    <li className="plan__list-item plan__list-item--bordered">
                                        In every IDE and editor
                                    </li>
                                    <li className="plan__list-item plan__list-item--bordered">
                                        Everywhere you read code (on GitHub, Bitbucket, GitLab, Visual Studio Team
                                        Services, Stack Overflow, Phabricator, Sourcegraph, etc.)
                                    </li>
                                    <li className="plan__list-item plan__list-item--bordered">
                                        Everywhere you review code (in pull requests on GitHub, etc.)
                                    </li>
                                    <li className="plan__list-item plan__list-item--bordered">
                                        For both your own code and the code of all of your dependencies
                                    </li>
                                    <li className="plan__list-item">With no additional configuration needed</li>
                                </ul>

                                <p>
                                    Getting this basic code intelligence everywhere is an obvious win. Unfortunately,
                                    it's far too difficult to install and configure it today, so most developers are
                                    missing these benefits for a large portion of their work.
                                </p>

                                <p>
                                    The current approach is broken because it's an "m-times-n" solution: one tool for
                                    each combination of m applications (Vim, Emacs, Visual Studio, Visual Studio Code,
                                    Sublime, IntelliJ, Eclipse, GitHub's code file viewer, Codenvy, etc.) and n
                                    languages (JavaScript, C++, Java, C#, Python, etc.). This means we'd need thousands
                                    of individual tools, all maintained independently, to get complete coverage.
                                </p>

                                <p>
                                    Here's how to fix it and bring basic code intelligence to every developer,
                                    everywhere:
                                </p>
                                <ol className="plan__floating-block plan__floating-block--dark">
                                    <li className="mb-3">
                                        Transform the "m-times-n" language-editor tool problem into a more manageable
                                        "m-plus-n" problem by using the
                                        <a
                                            className="link blue-3"
                                            href="https://github.com/Microsoft/language-server-protocol"
                                            target="_blank"
                                        >
                                            &nbsp;Language Server Protocol (LSP)&nbsp;
                                        </a>
                                        open standard
                                    </li>
                                    <ul>
                                        <li className="mb-3">
                                            Create open-source LSP language servers for every language —&nbsp;
                                            <a className="link blue-3" href="http://langserver.org" target="_blank">
                                                in progress
                                            </a>
                                        </li>
                                        <li className="mb-3">
                                            Create open-source LSP adapter plugins for every editor, code viewer, and
                                            code review tool —&nbsp;
                                            <a className="link blue-3" href="http://langserver.org" target="_blank">
                                                in progress
                                            </a>
                                        </li>
                                    </ul>
                                    <li className="mb-3">
                                        Make it easy for projects to supply the necessary configuration (if any) so that
                                        everyone gets code intelligence on the project's code
                                    </li>
                                    <li>
                                        Make it quick and easy to add/install code intelligence for any language in your
                                        tools of choice
                                    </li>
                                </ol>
                                <p>
                                    The end result is that anytime you look at code, you have the full power of a well
                                    configured IDE.
                                </p>
                                <p>
                                    See how good your team's dev tools are:&nbsp;
                                    <a
                                        className="link blue-7"
                                        href="https://about.sourcegraph.com/blog/the-sourcegraph-test-v0-9-12-more-steps-to-better-code/"
                                        target="_blank"
                                    >
                                        take the Sourcegraph test
                                    </a>
                                    .
                                </p>
                            </div>
                        </section>

                        <section className="plan__body plan__body-light-7">
                            <div className="plan__container">
                                <h1>Make Code Review Continuous and More Intelligent</h1>
                                <p>
                                    Code review is supposed to improve quality and share knowledge. But few teams feel
                                    their code review process (if any) is effective, because today's tools make code
                                    review a manual, error-prone process performed (far too often) at the very end of
                                    the development cycle.
                                </p>
                                <p>
                                    Toyota long ago showed that high-quality production processes should be the
                                    opposite: continuous (to find defects immediately, not after the car is fully
                                    assembled) and systematic (based on checklists compiled from experience). Medicine
                                    and aviation also recognize the value of this approach. We'll apply these principles
                                    to make code review continuous and more intelligent, so you can:
                                </p>
                                <ul>
                                    <li className="plan__list-item plan__list-item--bordered plan__list-item--bordered-light-5">
                                        See realtime impact analysis of any changes, in the form of a checklist of
                                        possible impacts/defects drawn from:
                                        <ul>
                                            <li className="pv2">Code intelligence (call graph/dependencies)</li>
                                            <li className="pv2">Repository data (merge conflicts, blame/authorship)</li>
                                            <li className="pv2">Heuristics from past code reviews</li>
                                        </ul>
                                    </li>
                                    <li className="plan__list-item plan__list-item--bordered plan__list-item--bordered-light-5">
                                        Likewise, see your teammates' work-in-progress changes that affect your current
                                        work
                                    </li>
                                    <li className="plan__list-item plan__list-item--bordered plan__list-item--bordered-light-5">
                                        Quickly share code with teammates to get help or informal reviews instead of
                                        waiting until the end
                                    </li>
                                    <li className="plan__list-item plan__list-item--bordered plan__list-item--bordered-light-5">
                                        Automatically and always have code reviewed by the right teammates
                                    </li>
                                    <li className="plan__list-item">
                                        When reviewing code, easily run the changes locally (instead of just reading the
                                        code)
                                    </li>
                                </ul>
                                <p>
                                    Current code review tools aren't able to provide these things because they lack code
                                    intelligence and a way to give realtime feedback on your local work-in-progress
                                    changes. The previous step (bringing basic code intelligence to everyone in all the
                                    tools they use) fixes this: it provides the underlying analysis to automatically
                                    enumerate possible impacts/defects—and the UI (in their editor and other existing
                                    tools) to collect and present this information as needed.
                                </p>
                            </div>

                            <div className="plan__container">
                                <div className="plan__floating-block--white plan__z-l8 plan__zigzag">
                                    <div className="position-relative top-1">
                                        <h3 className="font-weight-normal ma-0 p-4 pb-3">
                                            Here's how we'll bring continuous, intelligent code review (as described
                                            above) to every team:
                                        </h3>
                                    </div>
                                    <ul className="pb-4 ml-2">
                                        <li className="pl-3 pr-4 p-3 light-11-bg">
                                            Provide basic code intelligence (jump-to-def, hover, find-references, etc.)
                                            when viewing diffs and pull requests
                                        </li>
                                        <li className="pl-3 pr-4 p-3">
                                            Apply code intelligence to provide an impact analysis checklist for every
                                            change in every code review tool
                                        </li>
                                        <li className="pl-3 pr-4 p-3 light-11-bg">
                                            Create a way to enable quick sharing of code in your working tree
                                        </li>
                                        <li className="pl-3 pr-4 p-3 mb-1">
                                            Make this all realtime, automatically updated as you make changes in your
                                            editor
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section className="plan__body-light-8 plan__body">
                            <div className="plan__container">
                                <h1>Build the Global Code Graph</h1>
                                <p>
                                    The fundamental problem of software development is that most developers spend most
                                    of their time doing things that aren't core to solving their actual problem. Of all
                                    the code you write, only a tiny fraction is core to your particular business or
                                    application. Likewise for the bugs you spend time fixing.
                                </p>
                                <p>
                                    We will make it much easier to create and reuse public, open-source code by giving
                                    everyone access to the global code graph. The global code graph is the collection of
                                    all the code in the world, stored in a system that understands the dependency and
                                    call graph relationships across tens of millions of codebases. It’s what powers the
                                    features in the previous steps.
                                </p>
                                <p>
                                    This will increase the amount and reusability of available code by 10-100x because
                                    the current tools for creating and using open-source code are very limited. For one:
                                    creators and maintainers of open-source projects have no data about who's using
                                    their project and how, except from bug reports. Imagine running and stocking a
                                    supermarket if you only knew what items customers returned, not what they bought.
                                </p>
                                <p>
                                    The global code graph will make it easier and more rewarding to create and maintain
                                    open-source code:
                                </p>
                                <ul className="plan__list d-flex flex-column flex-md-row pl-0">
                                    <li className=" plan__card flex-grow">
                                        Users can opt in to share aggregate data about how they're using open-source
                                        projects (what APIs, patterns, etc., they use), determined automatically from
                                        the users' own code. Every project's community will grow because every user
                                        becomes a contributor.
                                    </li>
                                    <li className="plan__card plan__card flex-grow">
                                        Projects can use this information to prioritize enhancements, bug fixes,
                                        documentation, etc.
                                    </li>
                                    <li className="plan__card flex-grow">
                                        Creators and maintainers can see and understand how they are helping hundreds or
                                        thousands of people all around the world (instead of just seeing bug reports and
                                        stars).
                                    </li>
                                </ul>
                                <p>
                                    The global code graph will also make it easier for you to find and reuse
                                    high-quality open-source code:
                                </p>
                                <ul className="plan__list d-flex flex-column flex-md-row pl-0">
                                    <li className="flex-grow plan__card">
                                        When coding, you can see contextual usage examples/patterns and discussions
                                        based on everyone else's similar (opted-in) code—on the web or in your editor.
                                    </li>
                                    <li className="flex-grow plan__card">
                                        If you make a common mistake that other users have encountered and flagged,
                                        you'll be notified immediately. When a library releases an update, you'll be
                                        notified about the impact it has on your own code, and you can see information
                                        from everyone else who has upgraded.
                                    </li>
                                    <li className="flex-grow plan__card">
                                        When evaluating a library, you can see how many people are actively using it,
                                        what APIs they're calling, what other libraries they're using alongside it,
                                        etc., to make the best decision about which library to use.
                                    </li>
                                </ul>
                                <p>
                                    Getting these right and building the global code graph means you'll be able to find
                                    and use more existing, high-quality open-source components for the common parts of
                                    your application, so you can focus on solving the problems that are unique to your
                                    business or project.
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </Layout>
        )
    }
}
