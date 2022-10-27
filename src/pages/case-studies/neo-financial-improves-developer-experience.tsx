import { FunctionComponent } from 'react'

import Link from 'next/link'

import {
    Blockquote,
    ContentSection,
    Hero,
    Layout,
    NewCaseStudyLayout,
    StaffSpotlight,
    ThreeUpText,
    UseChallengeSolutionResults,
} from '@components'
import { buttonStyle, buttonLocation } from '@data'

const threeUpTextItems = [
    {
        subtitle: 'Updated branding',
        description:
            'Updated corporate branding across all digital assets with 100% confidence that nothing was missed.',
    },
    {
        subtitle: '100% completion',
        description:
            'Code Insights dashboards help Neo Financial ensure that large scale projects reach 100% completion before being declared “done.”',
    },
    {
        subtitle: 'Attract top talent',
        description: 'Neo Financial is able to attract and retain top engineering talent by providing a culture, and tools like Sourcegraph, that focus on improving the developer experience.',
    },
]

export const CaseStudy: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Neo Financial improves the developer experience with Sourcegraph',
            description:
                'Neo Financial case study. Learn how Neo Financial attacts and retains top engineering talent by providing a culture, and tools like Sourcegraph, that focus on improving the developer experience.',
        }}
        hero={
            <Hero
                backButton={{
                    text: 'Case Studies',
                    link: '/case-studies',
                }}
                variant="venusCode"
                title={'Nutanix fixed Log4j quickly and \n confidently with Sourcegraph'}
                displayUnderNav={true}
            />
        }
    >
        <NewCaseStudyLayout customer="Nutanix">
            <ContentSection background="white" className="tw-flex tw-justify-center">
                <Blockquote
                    inline={true}
                    quote="With Sourcegraph, developers are more productive and it’s clear that every team is getting 1% better every day."
                    author="Ronnie Magatti, Team Lead & Principal Software Engineer at Neo Financial"
                    logo={{
                        src: '/external-logos/nutanix-logo.svg',
                        alt: 'Nutanix',
                        href: 'https://nutanix.com',
                    }}
                />
            </ContentSection>

            <ContentSection>
                <UseChallengeSolutionResults
                    useCases={[
                        {
                            text: 'Find and fix security vulnerabilities quickly across the codebase.',
                            href: '/use-cases/code-security',
                        },
                    ]}
                    challenges={[
                        { text: 'Inability to efficiently find all the instances of Log4j in their large codebase.' },
                        { text: 'Lack of code-level clarity that vulnerabilities were completely resolved.' },
                        { text: 'Uncertainty about the scope and impact of the Log4j vulnerability.' },
                    ]}
                    solutions={[
                        { text: 'Able to quickly and efficiently find every instance of the Log4j vulnerability.' },
                        { text: 'Full confidence that all Log4j-vulnerable code was identified and resolved.' },
                        {
                            text: 'Able to quickly validate that no known vulnerabilities exist in the codebase prior to each release.',
                        },
                    ]}
                    results={[
                        {
                            text: 'Nutanix was able to see where JMSAppender existed, fix it, and send out a release in less than 5 minutes.',
                        },
                        {
                            text: 'Nutanix was able to deliver patches to its customers that fully remediated the Log4j vulnerability in under 4 days.',
                        },
                        {
                            text: 'Nutanix was able to identify every instance of Log4j across its sprawling codebase with 100% confidence.',
                        },
                    ]}
                />
            </ContentSection>

            <ContentSection background="white" slimWidth={true}>
                <div className="tw-mx-auto tw-pt-5xl">
                    <p className="tw-pt-3xl sm:tw-mt-0 tw-mt-5xl">
                        Before Sourcegraph, tracking libraries manually and searching in GitHub made the process of finding code difficult and time-consuming. To avoid unnecessary duplication of code or to see how a service was previously set up, developers need to look at existing code–essentially, searching for patterns. Unfortunately, manual pattern search with their code host’s native search functionality wasted valuable time that engineering teams could use to address other challenges.
                    </p>
                    <h3 className="mt-6 mb-4 max-w-600">Acting quickly with Sourcegraph</h3>
                    <p>
                       Recently, Neo Financial was rebranding their savings accounts to be called Money Accounts. The engineering team needed to quickly and thoroughly identify all instances of the previous name before making the update. Using Sourcegraph, Neo Financial mapped out all locations that referenced the old branding. They were able to update the branding in a fraction of the time it would have taken to manually search and update and the team had full confidence that they hadn’t missed any instances of the old branding.
                    </p>
                    <p>
                        Jon discovered that the offending module recurred throughout their build. “The more we dug,” Jon
                        explained, “the more we realized this bug was everywhere and nowhere at the same time.”
                    </p>
                    <p>
                        Nutanix moved quickly, despite having multiple build and artifact management systems, as well as
                        a large monorepo with many component branches and hundreds of git repositories. In under four
                        days, Nutanix was able to deliver patches to its customers that fully remediated the Log4j
                        vulnerability.
                    </p>

                    <h3 className="mt-6 mb-4 max-w-600">
                        Nutanix used Sourcegraph to identify every instance of Log4j within 2 days
                    </h3>
                    <p>
                        <b>Speed was of the essence,</b> but the timing of the Log4j news, which broke right before many
                        employees go on vacation for the winter holidays, didn't make things easy.
                    </p>
                    <p>
                        However, Nutanix armed its engineers with Sourcegraph. Within a couple of days, a few
                        Sourcegraph queries identified every instance of the Log4j vulnerability.
                    </p>
                    <p>
                        With the Log4j 1.x vulnerability, for instance, codebases were only insecure if they used
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://logging.apache.org/log4j/1.2/apidocs/org/apache/log4j/net/JMSAppender.html"
                            title="JMSAppender"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            {' '}
                            JMSAppender
                        </a>
                        . Jon used Sourcegraph to see where JMSAppender existed, fixed it, and sent out a release. “That
                        took almost less than five minutes,” Jon said. Sourcegraph released a{' '}
                        <Link href="/blog/log4j-log4shell-0-day/" passHref={true}>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a
                                title="blog post"
                                data-button-style={buttonStyle.text}
                                data-button-location={buttonLocation.body}
                                data-button-type="cta"
                            >
                                blog post
                            </a>
                        </Link>{' '}
                        that explained how other companies addressing Log4j could use code search for similar benefits.
                    </p>
                    <p>This speed gave the team a head start on mitigation.</p>
                    <p>Deploying these fixes required quality assurance and testing as well as discovery and fixing.</p>
                    <p>
                        With the help of Sourcegraph, Nutanix was able to release three back-to-back patches relatively
                        quickly compared to other companies. Nutanix's customers reported satisfaction with both the
                        speed of the patches and their quality.
                    </p>
                    <p>
                        “We tried to take a measured approach,” Jon said. “We wanted to get things done quickly but
                        without completely flying by the seats of our pants.”
                    </p>

                    <div className="tw-py-5xl">
                        <Blockquote
                            quote="It's nice when you can just run a report and say, 'Here it is,' or 'Here it isn't.' It's much
                            better than having to say, 'Well, boss, I think we got it all.'"
                            author="Jon Kohler"
                            largeText={true}
                        />
                    </div>

                    <h3 className="mb-4">Nutanix has renewed confidence in its vulnerability remediation</h3>
                    <p>
                        <b>Tracking down the Log4j vulnerability was,</b> in Jon's words, like “herding cats who were
                        herding mice at the same time.”
                    </p>
                    <p>
                        Without Sourcegraph, Jon would have either been tracking down whoever built each component to
                        ask them how and where they used Log4j or stumbling through all of the company's repositories.
                    </p>
                    <p>
                        Using Sourcegraph, Jon discovered every instance of Log4j and was fully confident in the
                        results. “It's nice,” Jon said, “when you can just run a report and say, 'Here it is,'' or 'Here
                        it isn't.'' It's much better than having to say, 'Well, boss, I think we got it all.’”
                    </p>
                    <p>
                        Nutanix needed that confidence because of its sprawling codebase. One thing that made Log4j
                        especially complicated for Nutanix—as it does for other large-scale enterprises—is that there
                        were multiple source control systems in play. Sourcegraph provided them with “unified
                        visibility,” according to Jon. “I can't imagine the pain of having to do that either with grep
                        or OpenGrok,” he added.
                    </p>
                    <p>
                        Confidence spread from Jon to the rest of the team and throughout the company. With
                        <Link href="/blog/introducing-search-contexts/"> search contexts</Link>, Jon was able to share
                        relevant contexts and queries, showing the team how they could verify whether a given Log4j
                        instance was present or absent. He could show them precisely what they changed.
                    </p>
                    <p>
                        “We used Sourcegraph contexts to see specifically where a service was at any given point in
                        time,” Jon said. Without Sourcegraph, the team would've had to use code scanning, which takes a
                        lot of time, or manual build inspections, which aren't foolproof.
                    </p>
                </div>
            </ContentSection>

            <ContentSection parentClassName="sg-bg-gradient-saturn">
                <ThreeUpText items={threeUpTextItems} />
            </ContentSection>

            <ContentSection background="white" slimWidth={true}>
                <div className="tw-mx-auto">
                    <h3 className="mb-4">Log4j is the tip of the open-source vulnerability iceberg</h3>
                    <p>
                        <b>With Sourcegraph's help,</b> Nutanix was able to transform a trust-threatening risk into a
                        trust-building opportunity. Their customers, Jon explained, were worried about hundreds of other
                        vendors, all of whom were likely affected by Log4j.
                    </p>
                    <p>
                        “That's hopefully something customers will remember us for,” Jon said. “We quickly either
                        provided them with clarity or gave them a line on the next available patch because we were able
                        to identify the issue and start fixing it ASAP.”
                    </p>
                    <p>
                        Jon explained that, at many enterprises, dependencies are unseen and forgotten. “You might check
                        in on a dependency and find it hasn't been reviewed for four, five, six, or even ten years. But
                        it works, so why update it?”
                    </p>
                    <p>
                        Log4j is one of many reasons why monitoring and updating is now a renewed priority. “Companies
                        will have to be more diligent,” Jon said. With Sourcegraph, Nutanix is prepared to
                        <Link href="/use-cases/code-security"> find and fix the next vulnerability</Link>.
                    </p>

                    <div className="tw-mt-5xl">
                        <StaffSpotlight
                            customer="Nutanix"
                            about={
                                <>
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://nutanix.com"
                                        title="Nutanix"
                                        data-button-style={buttonStyle.text}
                                        data-button-location={buttonLocation.body}
                                        data-button-type="cta"
                                    >
                                        Nutanix
                                    </a>{' '}
                                    has 20,000 customers, an annual revenue of nearly $1.394 billion, and over 6,000
                                    employees. Organizations around the world rely on Nutanix software as a single
                                    platform to manage any app at any scale for their hybrid multicloud environments.
                                </>
                            }
                            staff={[
                                {
                                    image: '/case-studies/jon-kohler.png',
                                    name: 'Jon Kohler',
                                    title: 'Technical Director of Solution Engineering at Nutanix',
                                },
                            ]}
                        />
                    </div>
                </div>
            </ContentSection>
        </NewCaseStudyLayout>
    </Layout>
)

export default CaseStudy
