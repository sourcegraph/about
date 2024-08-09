import { FunctionComponent } from 'react'

import Link from 'next/link'

import { Blockquote, ContentSection, Hero } from '../../components'

import CaseStudyContent from './customer-story/caseStudyContent'
import CustomerStory from './customer-story/customerStory'

export const CUSTOMER_STORIES = [
    [
        {
            name: 'Cloudflare',
            logo: '/assets/customer-stories/cloudflare.svg',
            title: 'Cloudflare accelerates debugging and improves security. ',
            url: '/',
        },
        {
            name: 'FactSet',
            logo: '/external-logos/factset-logo.svg',
            title: 'FactSet migrates from Perforce to GitHub.',
            url: '/case-studies/factset-migrates-from-perforce-to-github',
            logoSize: 'w-[99px] h-[48px]',
        },
    ],
    [
        {
            name: 'Indeed',
            logo: '/assets/customer-stories/indeed.svg',
            title: 'Indeed keeps code up to date and accelerates development velocity.',
            url: '/case-studies/indeed-accelerates-development-velocity',
            logoSize: 'w-[106px] h-[48px]',
        },
        {
            name: 'CERN',
            logo: '/external-logos/cern-name-logo.svg',
            title: 'Sourcegraph empowers CERN to tackle code reuse and code changes in mission-critical applications.',
            url: '/case-studies/cern-reduces-technical-debt',
            logoSize: 'w-[78px] h-[48px]',
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
                            <h5 className="text-gray-500">
                                This is a subheading that supports the bold headline above. It should be no more than 3
                                sentences long. This keeps it easy to scan.
                            </h5>
                        </ContentSection>
                        <ContentSection parentClassName="!py-0 !pt-16 !px-0">
                            <div className="relative z-10 flex flex-col gap-10 rounded-lg border  border-[#E4E9F4] bg-white py-10 px-6 md:flex-row md:gap-8 md:px-12">
                                <div className="flex w-auto flex-row md:w-[243px]  md:flex-col md:gap-8">
                                    <img
                                        src="/case-studies/jon-kohler.png"
                                        alt="jon kohler"
                                        className=" flex h-[128px] w-[128px] self-start rounded-[8px]"
                                    />
                                    <div className=" flex w-auto flex-col gap-2 pl-8 md:w-[244px] md:pl-0">
                                        <h6 className="!font-medium uppercase !text-gray-700">Jon Kohler</h6>{' '}
                                        <p className="mb-0 text-lg font-normal tracking-[-0.25px] text-gray-500">
                                            Technical Director of Solution Engineering at Nutanix
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-5 border-l-0 border-t-[2px] border-[#E4E9F4] px-8 py-6 md:border-t-0 md:border-l-[2px] md:py-0">
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
                    title="Challenge"
                    content={
                        <div>
                            <p className="mb-5 text-lg tracking-[-0.25px] text-gray-500">
                                In December of 2021, software companies around the world discovered that Log4j, an
                                open-source logging library bundled in many software packages, contained significant
                                vulnerabilities, one of which was a 10/10 on the CVSS scale. The Federal Trade
                                Commission called the library “ubiquitous.”
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
                    title="Solution"
                    content={
                        <div>
                            <p className="mb-5 text-lg tracking-[-0.25px] text-gray-500">
                                Speed was of the essence, but the timing of the Log4j news, which broke right before
                                many employees go on vacation for the winter holidays, didn’t make things easy.
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
                                fixing. Within a week and a half, Nutanix had deployed three back-to-back patches.
                            </p>
                            <p className="mb-5 text-lg tracking-[-0.25px] text-gray-500">
                                With the help of Sourcegraph, Nutanix was able to release these patches relatively
                                quickly compared to other companies. Nutanix’s customers reported satisfaction with both
                                the speed of the patches and their quality.{' '}
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
                        className="!my-0 w-full !border-l-[#E4E9F4] py-4 pl-6 !pr-0 text-2xl leading-[31.2px] text-gray-700 md:py-3"
                        leftBorderAccent={true}
                        quote="We tried to take a measured approach,” Jon said. “We wanted to get things done quickly but without completely flying by the seats of our pants."
                    />
                </div>
                <CaseStudyContent
                    title="Results"
                    content={
                        <div>
                            <p className="mb-5 text-lg tracking-[-0.25px] text-gray-500">
                                Speed was of the essence, but the timing of the Log4j news, which broke right before
                                many employees go on vacation for the winter holidays, didn’t make things easy.
                            </p>

                            <p className="mb-5 text-lg tracking-[-0.25px] text-gray-500">
                                However, Nutanix armed its engineers with Sourcegraph. Within a couple of days, a few
                                Sourcegraph queries identified every instance of the Log4j vulnerability.
                            </p>

                            <p className="mb-5 text-lg tracking-[-0.25px] text-gray-500">
                                With the Log4j 1.x vulnerability, for instance, codebases were only insecure if they
                                used{' '}
                                <Link href="/" className="large-in-line-link">
                                    JMSAppender
                                </Link>
                                . Jon used Sourcegraph to see where JMSAppender existed, fixed it, and sent out a
                                release. “That took almost less than five minutes,” Jon said. Sourcegraph released a
                                blog post that explained how other companies addressing Log4j could use code search for
                                similar benefits.
                            </p>

                            <p className="mb-5 text-lg tracking-[-0.25px] text-gray-500">
                                This speed gave the team a head start on mitigation.
                            </p>

                            <p className="mb-5 text-lg tracking-[-0.25px] text-gray-500">
                                Deploying these fixes required quality assurance and testing as well as discovery and
                                fixing. Within a week and a half, Nutanix had deployed three back-to-back patches.
                            </p>
                            <p className="mb-5 text-lg tracking-[-0.25px] text-gray-500">
                                With the help of Sourcegraph, Nutanix was able to release these patches relatively
                                quickly compared to other companies. Nutanix’s customers reported satisfaction with both
                                the speed of the patches and their quality.{' '}
                            </p>
                            <p className="mb-0 text-lg tracking-[-0.25px] text-gray-500">
                                “We tried to take a measured approach,” Jon said. “We wanted to get things done quickly
                                but without completely flying by the seats of our pants.”
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
