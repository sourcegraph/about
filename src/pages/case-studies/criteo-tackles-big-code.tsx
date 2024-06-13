import { FunctionComponent } from 'react'

import { Layout, CaseStudyLayout, ContentSection, Blockquote } from '../../components'

export const CaseStudy: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Criteo uses Sourcegraph universal code search to tackle Big Code',
            description:
                'Sourcegraph provides Criteo the ability to cross boundaries of different codebases and languages authored by different people with different tools.',
        }}
        headerColorTheme="dark"
    >
        <CaseStudyLayout
            customer="Criteo"
            title="Criteo uses Sourcegraph universal code search to tackle Big Code"
            logo="/external-logos/criteo-white-logo.svg"
            quote={{
                text: "Sourcegraph pays for itself many times over—it's a game changer.",
                author: 'François Jehl, Senior Engineering Manager, Criteo',
            }}
        >
            <ContentSection background="white" slimWidth={true} className="pb-8">
                <p>
                    Founded in France in 2005, Criteo partners with retailers to recommend products to potential
                    customers through ad retargeting. The company has massive volumes of data stored in its on-premise
                    servers, along with millions of lines of code that developers work on in both Paris and the U.S.
                </p>
                <p>
                    Criteo has a heterogeneous ecosystem with thousands of repositories. When working on a single
                    repository, developers use their IDE for code search. But for teams that are cross-functional or
                    work in multiple repositories, this small-scale search strategy isn't sufficient and can be a major
                    time sink.
                </p>
                <div className="grid grid-cols-1 justify-center gap-10 pt-4 text-center md:grid-cols-2">
                    <figure>
                        <img
                            src="/case-studies/francois-jehl-criteo.jpg"
                            alt="François Jehl, Senior Engineering Manager, Criteo"
                            title="François Jehl, Senior Engineering Manager, Criteo"
                            className="mx-auto mb-4 block w-full max-w-[200px] rounded-full"
                        />
                        <figcaption>François Jehl, Senior Engineering Manager, Criteo</figcaption>
                    </figure>
                    <figure>
                        <img
                            src="/case-studies/loic-teikiteetini-vaysse-criteo.jpg"
                            alt="Loic Teikiteetini-Vaysse, Software Development Engineer, Criteo"
                            title="Loic Teikiteetini-Vaysse, Software Development Engineer, Criteo"
                            className="mx-auto mb-4 block w-full max-w-[200px] rounded-full"
                        />
                        <figcaption>Loic Teikiteetini-Vaysse, Software Development Engineer, Criteo</figcaption>
                    </figure>
                </div>
                <Blockquote
                    quote="Before Sourcegraph, we were struggling to search code in an accurate and timely manner. The legacy text-based search we relied on had security issues, and its performance was poor in terms of the quality of searches and response times."
                    author="Loic Teikiteetini-Vaysse"
                />
                <Blockquote
                    quote="When looking for alternatives, the general consensus was 'If you're a giant like Google, you can simply build your own code search engine. If that's not you, then buy Sourcegraph."
                    author="François Jehl"
                />
                <h2 className="pt-8 pb-1">Prioritize developer happiness and productivity follows</h2>
                <Blockquote
                    quote="At Criteo, developer happiness is our top priority—not just productivity. We want to tackle the things that developers see as hurdles in their day-to-day life. By providing them with the right tools, like Sourcegraph, we've found that increased productivity is a natural byproduct."
                    author="François Jehl"
                />
                <p>
                    Sourcegraph serves as Criteo's one-stop shop for searching across all of its codebases, making its
                    employees' lives that much easier. Criteo relies on many different ecosystems for different teams,
                    and Sourcegraph now provides the ability to cross boundaries of different codebases and different
                    languages authored by different people with different tools.
                </p>
                <p>
                    Developers start with a query, then use the recommended filters to narrow their search until they
                    locate the piece of code that is of interest. “Sometimes they don't even know what they're looking
                    for—perhaps just patterns that need to be deprecated. With our previous tools, the results were not
                    good,” said François Jehl.
                </p>
                <h2 className="pt-8 pb-1">Survey says Sourcegraph is the ultimate time-saver</h2>
                <p>
                    Criteo conducted an internal survey with Sourcegraph early adopters to determine how Sourcegraph has
                    impacted its developers' workflows. The survey found that 83 percent of those developers used
                    Sourcegraph every single day, and nearly two-thirds used it several times per day.
                </p>
                <p>
                    55 percent of respondents said Sourcegraph saved them a few dozen minutes per day, while 18 percent
                    stated they saved over an hour per day.
                </p>
                <Blockquote
                    quote="The feedback we received was overwhelmingly positive. We had employees saying 'I've dreamt of a tool like Sourcegraph!', 'Please buy it!', 'It saved my life!', 'It literally saved me hours per day!' We're thrilled that it's given us the ability to make our developers happier and more productive in their roles."
                    author="François Jehl"
                />
                <p>
                    As codebases grow larger, Sourcegraph will continue to serve as the backbone to help developers at
                    Criteo quickly search through code to understand what's happening within its ecosystem.
                </p>
                <Blockquote
                    quote="The quality of the Sourcegraph UI and its code intelligence are two game-changer features for us. It's like having an online IDE for browsing code."
                    author="Loic Teikiteetini-Vaysse"
                />
            </ContentSection>
        </CaseStudyLayout>
    </Layout>
)

export default CaseStudy
