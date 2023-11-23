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
} from '../../components'
import { buttonStyle, buttonLocation } from '../../data/tracking'

const threeUpTextItems = [
    {
        subtitle: '5 minutes',
        description:
            'Nutanix was able to see where JMSAppender existed, fix it, and send out a release in less than 5 minutes.',
    },
    {
        subtitle: '4 days',
        description:
            'Nutanix was able to deliver patches to its customers that fully remediated the Log4j vulnerability.',
    },
    {
        subtitle: '100%',
        description: 'Nutanix was able to confidently identify every instance of Log4j across its sprawling codebase.',
    },
]

export const CaseStudy: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Nutanix fixed Log4j quickly and confidently with Sourcegraph',
            description:
                'Nutanix case study. Learn how Nutanix uses Sourcegraph to find and fix security vulnerabilities quickly across their code base.',
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
            <ContentSection background="white" className="flex justify-center">
                <Blockquote
                    inline={true}
                    quote="Sourcegraph was the right product at the right time."
                    author="Jon Kohler, Technical Director of Solution Engineering at Nutanix"
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
                            href: '',
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
                <div className="mx-auto pt-5xl">
                    <p className="mt-5xl pt-3xl sm:mt-0">
                        As the Technical Director of Solution Engineering at Nutanix, Jon Kohler understands the
                        complexity involved in securing the multitude of applications and solutions required to power
                        such a large organization. “Security is something that we care about intensely here at Nutanix,”
                        Jon said, “because it’s part of our bedrock. It's why customers like us, and we have to take it
                        seriously.”
                    </p>
                    <h3 className="mt-16 mb-6 max-w-[600px]">Log4j: The vulnerability that rocked an industry</h3>
                    <p>
                        <b>In December of 2021,</b> software companies around the world discovered that Log4j, an
                        open-source logging library bundled in many software packages, contained significant
                        vulnerabilities, one of which was a{' '}
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://logging.apache.org/log4j/2.x/security.html"
                            title="10/10 on the CVSS scale"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            10/10 on the CVSS scale
                        </a>
                        {'. '}
                        The Federal Trade Commission called the library “
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.ftc.gov/policy/advocacy-research/tech-at-ftc/2022/01/ftc-warns-companies-remediate-log4j-security-vulnerability"
                            title="ubiquitous"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            ubiquitous
                        </a>
                        .”
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

                    <h3 className="mt-16 mb-6 max-w-[600px]">
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
                        <Link
                            href="/blog/log4j-log4shell-0-day/"
                            title="blog post"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            blog post
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

                    <div className="py-5xl">
                        <Blockquote
                            quote="It's nice when you can just run a report and say, 'Here it is,' or 'Here it isn't.' It's much
                            better than having to say, 'Well, boss, I think we got it all.'"
                            author="Jon Kohler"
                            largeText={true}
                        />
                    </div>

                    <h3 className="mb-6">Nutanix has renewed confidence in its vulnerability remediation</h3>
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
                        Confidence spread from Jon to the rest of the team and throughout the company. With{' '}
                        <Link href="/blog/introducing-search-contexts/">search contexts</Link>, Jon was able to share
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
                <div className="mx-auto">
                    <h3 className="mb-6">Log4j is the tip of the open-source vulnerability iceberg</h3>
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
                        will have to be more diligent,” Jon said. With Sourcegraph, Nutanix is prepared to find and fix the next vulnerability</Link>.
                    </p>

                    <div className="mt-5xl">
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
