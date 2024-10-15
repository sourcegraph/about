import { FunctionComponent } from 'react'

import Link from 'next/link'

import { Blockquote, ContentSection, Hero } from '../../components'
import CaseStudyContent from '../../components/customerStoryContent'

import CustomerStory from './customerStoryTemplate'

export const CUSTOMER_STORIES = [
    [
        {
            name: 'Qualtrics',
            logo: '/case-studies/qualtrics-logo.png',
            title: 'Qualtrics uses Cody to speed up code understanding and write unit tests in minutes.',
            url: '/case-studies/qualtrics-speeds-up-unit-tests-and-code-understanding-with-cody',
            logoSize: 'w-[125.308px] h-[40px]',
        },
        {
            name: 'Leidos',
            logo: '/assets/customer-stories/leidos.svg',
            title: 'Leidos uses Cody for its security, context-awareness, and interoperability with the latest LLMs.',
            url: '/case-studies/cody-leidos-maximizing-efficiency-heightened-security-ai-race',
            logoSize: 'w-[113.625px] h-[27px]',
        },
    ],
    [
        {
            name: 'Nine',
            logo: '/assets/customer-stories/nine.svg',
            title: 'Nine empowers productivity and enhances security with Sourcegraph.',
            url: '/case-studies/how-sourcegraph-transformed-nine-development-workflow',
            logoSize: 'w-[96px] h-[48px]',
        },

        {
            name: 'FactSet',
            logo: '/external-logos/factset-logo.svg',
            title: 'FactSet migrates from Perforce to GitHub.',
            url: '/case-studies/factset-migrates-from-perforce-to-github',
            logoSize: '!w-[99.467px] h-[19.088px]',
        },
    ],
]

const SIDEBAR_CONTENT_ITEMS = [
    {
        title: '5 minutes',
        content:
            'Nutanix was able to see where JMSAppender existed, fix it, and send out a release all in less than 5 minutes.',
    },
    {
        title: '4 days',
        content: 'Nutanix was able to deliver patches to its customers that fully remediated the Log4j vulnerability.',
    },
    {
        title: '100%',
        content: 'Nutanix was able to confidently identify every instance of Log4j across its sprawling codebase.',
    },
]

export const CaseStudy: FunctionComponent = () => (
    <CustomerStory
        title="Nutanix fixed Log4j quickly and confidently with Sourcegraphjkjk"
        description="Nutanix case study. Learn how Nutanix uses Sourcegraph to find and fix security vulnerabilities quickly across their code base."
        hero={
            <Hero
                backButton={{
                    text: 'customer stories',
                    link: '/case-studies',
                }}
                variant="transparent"
                className=" relative !pb-0 md:!px-[80px]"
                titleClassName="mt-6"
                title={
                    <>
                        <ContentSection
                            parentClassName="!py-0 !px-0"
                            className=" !m-0 grid gap-6 !py-0 md:min-w-[520px] md:max-w-[800px]"
                        >
                            {' '}
                            <h1 className="text-[40px] !text-gray-700 md:text-6xl">
                                Nutanix fixed Log4j quickly and confidently with Sourcegraph
                            </h1>
                        </ContentSection>
                        <ContentSection parentClassName="!py-0 !pt-16 !px-0">
                            <div className="relative z-10 flex flex-col gap-10 rounded-lg border  border-gray-200 bg-white py-10 px-6 md:flex-row md:gap-8 md:px-12">
                                <div className="flex w-auto flex-row md:w-[243px]  md:flex-col md:gap-8">
                                    <img
                                        src="/case-studies/jon-kohler.png"
                                        alt="jon kohler"
                                        className=" flex h-[128px] w-[128px] self-start rounded-[8px]"
                                    />
                                    <div className=" flex w-auto flex-col gap-2 pl-8 md:w-[243px] md:pl-0">
                                        <h6 className="!font-medium uppercase !text-gray-700">Jon Kohler</h6>{' '}
                                        <p className="mb-0 text-lg font-normal tracking-[-0.25px] text-gray-500">
                                            Technical Director of Solution Engineering at Nutanix
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-5 border-l-0 border-t-[2px] border-gray-200 px-8 py-6 md:border-t-0 md:border-l-[2px] md:py-0">
                                    <img
                                        src="/assets/customer-stories/nutanix.svg"
                                        className="h-[68px] w-[177px]"
                                        alt="nutanix"
                                    />
                                    <p className="mb-0 text-lg font-normal tracking-[-0.25px] text-gray-500">
                                        Nutanix has 20,000 customers, an annual revenue of nearly $1.394 billion, and
                                        over 6,000 employees. Organizations around the world rely on Nutanix software as
                                        a single platform to manage any app at any scale for their hybrid multi-cloud
                                        environments.
                                    </p>
                                </div>
                            </div>
                        </ContentSection>
                        <div className="absolute top-0 right-0 mt-56 h-full  w-full bg-[url('/case-studies/top-radials.svg')] bg-contain bg-right  bg-no-repeat md:hidden" />
                    </>
                }
                displayUnderNav={true}
            />
        }
        sidebarContentItems={SIDEBAR_CONTENT_ITEMS}
        mainContent={
            <ContentSection className="pt-6 md:pb-0" parentClassName="!px-0 !py-0">
                <CaseStudyContent
                    content={
                        <p className="mb-0 text-lg tracking-[-0.25px]">
                            As the Technical Director of Solution Engineering at Nutanix, Jon Kohler understands the
                            complexity involved in securing the multitude of applications and solutions required to
                            power such a large organization. “Security is something that we care about intensely here at
                            Nutanix,” Jon said, “because it’s part of our bedrock. It's why customers like us, and we
                            have to take it seriously.”
                        </p>
                    }
                />

                <CaseStudyContent
                    title="Log4j: The vulnerability that rocked an industry"
                    content={
                        <div>
                            <p className="mb-5 text-lg tracking-[-0.25px] text-gray-500">
                                In December of 2021, software companies around the world discovered that Log4j, an
                                open-source logging library bundled in many software packages, contained significant
                                vulnerabilities, one of which was a{' '}
                                <Link href="/" className="large-in-line-link">
                                    10/10 on the CVSS scale
                                </Link>
                                . The Federal Trade Commission called the library “
                                <Link href="/" className="large-in-line-link">
                                    ubiquitous
                                </Link>
                                .”
                            </p>
                            <p className="mb-5 text-lg tracking-[-0.25px] text-gray-500">
                                Jon discovered that the offending module recurred throughout their build. “The more we
                                dug,” Jon explained, “the more we realized this bug was everywhere and nowhere at the
                                same time.”
                            </p>
                            <p className="mb-0 text-lg tracking-[-0.25px] text-gray-500">
                                Nutanix moved quickly, despite having multiple build and artifact management systems, as
                                well as a large monorepo with many component branches and hundreds of git repositories.
                                In under four days, Nutanix was able to deliver patches to its customers that fully
                                remediated the Log4j vulnerability.
                            </p>
                        </div>
                    }
                />

                <CaseStudyContent
                    title="Nutanix used Sourcegraph to identify every instance of Log4j within 2 days"
                    content={
                        <div>
                            <p className="mb-5 text-lg tracking-[-0.25px] text-gray-500">
                                Speed was of the essence, but the timing of the Log4j news, which broke right before
                                many employees go on vacation for the winter holidays, didn't make things easy.
                            </p>
                            <p className="mb-5 text-lg tracking-[-0.25px] text-gray-500">
                                However, Nutanix armed its engineers with Sourcegraph. Within a couple of days, a few
                                Sourcegraph queries identified every instance of the Log4j vulnerability.
                            </p>
                            <p className="mb-5 text-lg tracking-[-0.25px] text-gray-500">
                                With the Log4j 1.x vulnerability, for instance, codebases were only insecure if they
                                used JMSAppender. Jon used Sourcegraph to see where{' '}
                                <Link href="/" className="large-in-line-link">
                                    JMSAppender
                                </Link>{' '}
                                existed, fixed it, and sent out a release. “That took almost less than five minutes,”
                                Jon said. Sourcegraph released a{' '}
                                <Link href="/" className="large-in-line-link">
                                    blog post{' '}
                                </Link>
                                that explained how other companies addressing Log4j could use code search for similar
                                benefits.
                            </p>
                            <p className="mb-5 text-lg tracking-[-0.25px] text-gray-500">
                                This speed gave the team a head start on mitigation.
                            </p>
                            <p className="mb-5 text-lg tracking-[-0.25px] text-gray-500">
                                Deploying these fixes required quality assurance and testing as well as discovery and
                                fixing.
                            </p>
                            <p className="mb-5 text-lg tracking-[-0.25px] text-gray-500">
                                With the help of Sourcegraph, Nutanix was able to release three back-to-back patches
                                relatively quickly compared to other companies. Nutanix's customers reported
                                satisfaction with both the speed of the patches and their quality.
                            </p>
                            <p className="mb-0 text-lg tracking-[-0.25px] text-gray-500">
                                “We tried to take a measured approach,” Jon said. “We wanted to get things done quickly
                                but without completely flying by the seats of our pants.”
                            </p>
                        </div>
                    }
                />

                <div className="mb-12 py-0 px-6 md:py-1 md:px-10">
                    <Blockquote
                        className="!my-0 w-full !border-l-gray-200 py-4 pl-6 !pr-0 text-2xl leading-[31.2px] text-gray-700 md:py-3"
                        leftBorderAccent={true}
                        quote="It's nice when you can just run a report and say, 'Here it is,' or 'Here it isn't.' It's much better than having to say, 'Well, boss, I think we got it all."
                    />
                </div>
                <CaseStudyContent
                    title="Nutanix has renewed confidence in its vulnerability remediation"
                    content={
                        <div>
                            <p className="mb-5 text-lg tracking-[-0.25px] text-gray-500">
                                Tracking down the Log4j vulnerability was, in Jon's words, like “herding cats who were
                                herding mice at the same time.”
                            </p>

                            <p className="mb-5 text-lg tracking-[-0.25px] text-gray-500">
                                Without Sourcegraph, Jon would have either been tracking down whoever built each
                                component to ask them how and where they used Log4j or stumbling through all of the
                                company's repositories.
                            </p>

                            <p className="mb-5 text-lg tracking-[-0.25px] text-gray-500">
                                Using Sourcegraph, Jon discovered every instance of Log4j and was fully confident in the
                                results. “It's nice,” Jon said, “when you can just run a report and say, 'Here it is,''
                                or 'Here it isn't.'' It's much better than having to say, 'Well, boss, I think we got it
                                all.’”
                            </p>

                            <p className="mb-5 text-lg tracking-[-0.25px] text-gray-500">
                                Nutanix needed that confidence because of its sprawling codebase. One thing that made
                                Log4j especially complicated for Nutanix—as it does for other large-scale enterprises—is
                                that there were multiple source control systems in play. Sourcegraph provided them with
                                “unified visibility,” according to Jon. “I can't imagine the pain of having to do that
                                either with grep or OpenGrok,” he added.
                            </p>

                            <p className="mb-5 text-lg tracking-[-0.25px] text-gray-500">
                                Confidence spread from Jon to the rest of the team and throughout the company. With{' '}
                                <Link href="/" className="large-in-line-link">
                                    search contexts
                                </Link>
                                , Jon was able to share relevant contexts and queries, showing the team how they could
                                verify whether a given Log4j instance was present or absent. He could show them
                                precisely what they changed.
                            </p>
                            <p className="mb-0 text-lg tracking-[-0.25px] text-gray-500">
                                “We used Sourcegraph contexts to see specifically where a service was at any given point
                                in time,” Jon said. Without Sourcegraph, the team would've had to use code scanning,
                                which takes a lot of time, or manual build inspections, which aren't foolproof.
                            </p>
                        </div>
                    }
                />
                <CaseStudyContent
                    title="Log4j is the tip of the open-source vulnerability iceberg"
                    content={
                        <div>
                            <p className="mb-5 text-lg tracking-[-0.25px] text-gray-500">
                                With Sourcegraph's help, Nutanix was able to transform a trust-threatening risk into a
                                trust-building opportunity. Their customers, Jon explained, were worried about hundreds
                                of other vendors, all of whom were likely affected by Log4j.
                            </p>

                            <p className="mb-5 text-lg tracking-[-0.25px] text-gray-500">
                                “That's hopefully something customers will remember us for,” Jon said. “We quickly
                                either provided them with clarity or gave them a line on the next available patch
                                because we were able to identify the issue and start fixing it ASAP.”
                            </p>

                            <p className="mb-5 text-lg tracking-[-0.25px] text-gray-500">
                                Jon explained that, at many enterprises, dependencies are unseen and forgotten. “You
                                might check in on a dependency and find it hasn't been reviewed for four, five, six, or
                                even ten years. But it works, so why update it?”
                            </p>
                            <p className="mb-0 text-lg tracking-[-0.25px] text-gray-500">
                                Log4j is one of many reasons why monitoring and updating is now a renewed priority.
                                “Companies will have to be more diligent,” Jon said. With Sourcegraph, Nutanix is
                                prepared to find and fix the next vulnerability.
                            </p>
                        </div>
                    }
                />
            </ContentSection>
        }
        customerStories={CUSTOMER_STORIES}
    />
)

export default CaseStudy
