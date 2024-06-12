import { FunctionComponent } from 'react'

import Link from 'next/link'

import { Layout, CaseStudyLayout, ContentSection, Blockquote } from '../../components'
import { buttonStyle, buttonLocation } from '../../data/tracking'

export const CaseStudy: FunctionComponent = () => {
    const jaredHodge = 'Jared Hodge, Senior Manager, Developer Experience'

    return (
        <Layout
            meta={{
                title: 'Indeed keeps code up to date and accelerates development velocity',
                description:
                    'Indeed case study. Learn how Indeed keeps code up to date and accelerates development velocity',
            }}
            headerColorTheme="dark"
        >
            <CaseStudyLayout
                customer="Indeed"
                title="Indeed keeps code up to date and accelerates development velocity"
                logo="/external-logos/indeed-logo.svg"
                quote={{
                    text: 'The ability to automate downstream changes that Sourcegraph Batch Changes provides is a key capability for reducing the hidden burden of updates pushed across teams and enabling us to increase our engineering velocity.',
                    author: jaredHodge,
                    image: '/case-studies/jared-hodge-indeed.jpg',
                }}
            >
                <ContentSection background="white" slimWidth={true}>
                    <p>
                        Indeed is a multinational job search website with over 11,000 employees and approximately 2,000
                        engineers. Indeed's employment search features are available in 28 languages and 60 countries.
                    </p>

                    <h2 className="pt-8 pb-1">Finding and fixing problematic code</h2>

                    <p>
                        Developers at Indeed often need to either remove or update specific code patterns or libraries
                        that appear throughout the entire codebase and across code owned by different teams. Making
                        these updates requires first identifying every instance that needs to be changed and then
                        communicating with the relevant teams to ask them to make the updates.
                    </p>

                    <p>
                        Whether it is five or 500 instances, these aren't frivolous requests: they are changes that need
                        to happen. One of the most common — and often most urgent — reasons is for security. If a CVE or
                        potential privacy issue is discovered in a particular library, the team needs to not only find
                        out quickly where the issue is but also make sure that service owners act on that information.
                    </p>

                    <p>
                        When Jared Hodge, Senior Manager of Developer Experience, needed to facilitate an update across
                        the engineering organization, his team would send a generic email broadcast with the hope that
                        the relevant engineers would take action. “We had an older change mechanism, where we just sent
                        out a broadcast email to everybody in product and engineering who is potentially interested in
                        these things,” Hodge said. “Inevitably, a few people don't get to it,” Hodge said. “There's a
                        lot of manual work to herding cats.”
                    </p>

                    <p>
                        After adopting Sourcegraph Universal Code Search, Hodge's team was able to quickly identify
                        every instance that needed to be updated. Instead of sending a generic request, such as ‘please
                        update this library to the latest version,' his team was able to include a link to a Sourcegraph
                        search to enable product and engineering to see what needed to be updated.
                    </p>

                    <p>
                        “We're the source of a lot of these requests. Before, we didn't really have any idea how much
                        work we were injecting to the product teams,” Hodge said. Once they started using Sourcegraph
                        Universal Code Search, the internal platforms team would at least know if there were five
                        instances or 500 and if the work would take a few minutes or a few days to accomplish.
                    </p>

                    <h2 className="pt-8 pb-1">
                        Reducing the manual work required for large-scale code updates by 90%
                    </h2>

                    <p>
                        In most cases, the Sourcegraph searches were being done because something in the code needed to
                        be changed, but the internal platforms team had no real power to ensure the changes happened or
                        to even nudge them towards completion. “I actually did a bit of prototyping to see if I could
                        create JIRA issues based on the code searches,” Hodge said, as part of a search for a way to
                        help other team members actually make the changes that need to happen. When Sourcegraph's{' '}
                        <Link
                            href="/blog/introducing-batch-changes/"
                            title="Batch Changes"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            Batch Changes
                        </Link>{' '}
                        came out, Hodge immediately saw the value in further removing friction by letting one person
                        update all versions of a library across the codebase and then notify all the service owners so
                        they could review.
                    </p>

                    <Blockquote
                        quote="If I can reduce the amount of work a product team has to do by 90%, that is a huge win. Not only do they have to do less work — we're asking them to spend 10 minutes on a code review as opposed to spending the next six hours doing this change — they also don't have to spend time figuring out how to prioritize the different requests they're getting."
                        author={jaredHodge}
                    />

                    <p>
                        While Batch Changes still requires service owners to review the code, that process is much
                        easier and faster than making the change manually.
                    </p>

                    <h3 className="pt-8 pb-1">Saving engineering time</h3>

                    <p>
                        There's quite a bit of variability in the amount of work required to remove every instance of a
                        library or code pattern. In some cases it would only take a few minutes but in others it would
                        take days.
                    </p>

                    <Blockquote
                        quote="On average, I'd say that for every automated merge request that we're able to merge we save an hour. That's a rough but conservative estimate. It shows, though, that if we are doing several thousand automated merges in a year, we're saving several employee's worth of time."
                        author={jaredHodge}
                    />

                    <h3 className="pt-8 pb-1">Reducing invisible taxes</h3>

                    <p>
                        “There's all these little hidden things that tax the velocity of the teams,” Hodge said.
                        “Earlier this month I was using Sourcegraph to find code and things we needed to replace,
                        related to updating our build system, and we've seen an improvement in the build times as a
                        result. But I feel like the summation of all these little things actually adds up to way more
                        than just speeding up the build time.”
                    </p>

                    <p>
                        For example, Sourcegraph Universal Code Search and Batch Changes have made it easier to fully
                        retire technology that was still being supported because it continued to be used by a very small
                        percentage of the team, putting a drag on the entire system.
                    </p>

                    <p>
                        The ability to automate downstream changes across every team and repository helps Hodge and his
                        team reduce the hidden burden of updates pushed across teams and will ultimately enable Indeed
                        to increase its engineering velocity.
                    </p>

                    <br />
                </ContentSection>
            </CaseStudyLayout>
        </Layout>
    )
}

export default CaseStudy
