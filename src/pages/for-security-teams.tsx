import { FunctionComponent } from 'react'

import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import DeveloperBoardIcon from 'mdi-react/DeveloperBoardIcon'
import LaptopIcon from 'mdi-react/LaptopIcon'
import Link from 'next/link'

import {
    ContentSection,
    CoreFeatures,
    CtaSection,
    CustomerLogos,
    ImgIconLinkCard,
    Layout,
    Hero,
    QuoteCarousel,
    ResourceList,
} from '@components'
import { buttonStyle, buttonLocation } from '@data'

const quoteCarouselItems = [
    {
        header: 'Nutanix fixed Log4j within minutes with Sourcegraph',
        quote: 'It’s nice when you can just run a report and say, ‘Here it is,’ or ‘Here it isn’t.’ It’s much better than having to say, ‘Well, boss, I think we got it all.’',
        by: 'Jon Kohler, Technical Director of Solution Engineering at Nutanix',
        logoImage: '/external-logos/nutanix-logo.svg',
        linkText: 'Read the case study',
        link: '/case-studies/nutanix-fixed-log4j-with-sourcegraph',
        logoAlt: 'Nutanix',
    },
    {
        header: 'Codecov resolved Log4j 12x faster with Sourcegraph',
        quote: "Sourcegraph allows us to be more efficient with our time, whether it's code review, answering security-related questions from clients, or searching for things in the code much more easily than we could through our code host's native search functionality.",
        by: 'Jeff Holland, Lead Security Engineer at Codecov',
        logoImage: '/external-logos/codecov-logo.svg',
        linkText: 'Read the case study',
        link: '/case-studies/codecov-uses-sourcegraph-to-resolve-incidents-faster',
        logoAlt: 'Codecov',
    },
]

const resourceItems = [
    {
        title: 'How to remove secrets from your codebase',
        description:
            "Sourcegraph's code intelligence platform does more than search. It helps developers save time and move faster, regardless of how complex your codebase is.",
        type: 'Blog Post',
        img: {
            src: 'https://sourcegraphstatic.com/blog/securing-sourcegraph-eliminating-secrets.png',
            alt: 'Two robots in space around a chest',
        },
        href: '/blog/eliminate-secrets-from-codebase-with-universal-code-search',
    },
    {
        title: 'Less is more: how simplicity complements complexity in the pursuit of vulnerabilities',
        description:
            'The Sourcegraph CI is complex and customized. To make it more accessible, software engineer Robert Lin used the new Sourcegraph feature, Notebooks, to make living documentation.',
        type: 'Guide',
        img: {
            src: 'blog/thumbnails/notebooks-ci.jpg',
            alt: 'Notebook and pen',
        },
        href: '/guides/fixing-vulnerabilities-less-is-more',
    },
    {
        title: 'How to use Sourcegraph to find and fix vulnerabilities like Log4j',
        description:
            'Queries, scripts, and instructions for using code search to find where log4j is used across all your code, automate PRs to mitigate it, and track progress of the fixes.',
        type: 'Blog Post',
        img: {
            src: 'https://sourcegraphstatic.com/blog/log4j/log4j-blog-thumbnail.png',
            alt: 'Planets in space',
        },
        href: '/blog/real-weakest-link-in-software-supply-chain-security',
    },
]

const personaList = [
    {
        title: 'Platform Teams',
        description: 'Evolve massive codebases confidently and quickly.',
        img: (
            <div className="mb-3 tw-rounded-full tw-p-1 tw-text-center tw-flex tw-bg-violet-100 tw-self-start col-1 col-lg-2 tw-justify-center tw-items-center max-w-50">
                <LaptopIcon size={40} className="tw-p-1 tw-text-violet-400" />
            </div>
        ),
        url: '/for-platform-engineering-team',
        linkText: 'Learn more',
    },
    {
        title: 'Product Development',
        description: ' Hit key milestones and ship products faster.',
        img: (
            <div className="mb-3 tw-rounded-full tw-p-1 tw-text-center tw-flex tw-bg-violet-100 tw-self-start col-1 col-lg-2 tw-justify-center tw-items-center max-w-50">
                <DeveloperBoardIcon size={40} className="tw-p-1 tw-text-violet-400" />
            </div>
        ),
        url: '/for-product-development-team',
        linkText: 'Learn more',
    },
]

export const Security: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph for security teams',
            description:
                'Assess and address security vulnerabilities in source code, automate codebase-wide remediation, and ensure completion with a code intelligence platform.',
        }}
        className="bg-white"
        hero={
            <Hero
                variant="saturn"
                title="Quickly locate, assess, and remediate security vulnerabilities"
                subtitle="Assess and address security vulnerabilities in source code, automate codebase-wid remediation, and ensure completeness"
                cta={
                    <div className="tw-text-center tw-flex-col md:tw-flex-row md:tw-flex">
                        <div className="tw-mb-sm md:tw-mb-0">
                            <a
                                href="https://signup.sourcegraph.com"
                                className="btn btn-primary w-100 max-w-350"
                                title="Get free trial"
                                data-button-style={buttonStyle.primary}
                                data-button-location={buttonLocation.hero}
                                data-button-type="cta"
                            >
                                Get free trial
                            </a>
                        </div>
                        <div className="md:tw-ml-sm tw-my-auto">
                            <Link href="/demo" passHref={true}>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a
                                    className="tw-text-blurple w-100 max-w-350"
                                    title="Request a Demo."
                                    data-button-style={buttonStyle.textWithArrow}
                                    data-button-location={buttonLocation.hero}
                                    data-button-type="cta"
                                >
                                    Request a demo
                                    <ArrowRightIcon className="tw-inline tw-ml-xxs" />
                                </a>
                            </Link>
                        </div>
                    </div>
                }
            />
        }
    >
        <ContentSection>
            <CoreFeatures
                startAssetOnRight={false}
                features={[
                    {
                        title: 'Find where vulnerable code lives across your entire codebase',
                        description:
                            'Locate code that needs to be fixed, determine the owner, and assess the impact and scope in even the most complicated codebase.',
                        ctaLink:
                            'https://sourcegraph.com/github.com/sourcegraph/notebooks/-/blob/log4j.snb.md?_ga=2.69458064.1633678400.1661181863-642837684.1660159776&_gac=1.191031128.1660321032.CjwKCAjw0dKXBhBPEiwA2bmObXz2MD_CbF5kzqpvklE9I9PjzGSYIt_2sQt73OGs59gD3Yn1frRDvRoCvIMQAvD_BwE',
                        ctaTitle: 'Locate vulnerable dependencies',
                        video: {
                            mp4: '/animations/code-search.mp4',
                            webm: '/animations/code-search.webm',
                        },
                    },
                ]}
            />
        </ContentSection>

        <ContentSection parentClassName="sg-bg-gradient-venus" parentVertPadding={false}>
            <QuoteCarousel items={quoteCarouselItems} />
        </ContentSection>

        <ContentSection>
            <CoreFeatures
                features={[
                    {
                        title: 'Detect and alert when secrets are committed to your codebase',
                        description:
                            'Keep your code secure by keeping sensitive secrets and PII out of your repository.',
                        ctaLink: 'https://docs.sourcegraph.com/code_monitoring',
                        ctaTitle: 'Learn more about code monitoring',
                        video: {
                            mp4: '/animations/code-monitor-for-secrets.mp4',
                            webm: '/animations/code-monitor-for-secrets.webm',
                        },
                    },
                    {
                        title: 'Audit software licenses in your codebase',
                        description:
                            'Quickly discover repositories that are missing or using unapproved licenses, and automate updates to add missing licenses.',
                        ctaLink:
                            'https://sourcegraph.com/search?q=context:global+%22GNU+General+Public+License%22+or+%22GNU+Affero+General+Public+License%22&patternType=lucky',
                        ctaTitle: 'View common searches',
                        video: {
                            mp4: '/animations/add-license.mp4',
                            webm: '/animations/add-license.webm',
                        },
                    },
                    {
                        title: 'Track remediation and refactoring progress',
                        description: 'Track remediation and refactoring progress and see which teams may be lagging.',
                        ctaLink: '/code-insights',
                        ctaTitle: 'Learn more about Code Insights',
                        video: {
                            mp4: '/animations/code-insights.mp4',
                            webm: '/animations/code-insights.webm',
                        },
                    },
                ]}
            />
        </ContentSection>

        <ContentSection parentClassName="sg-bg-gradient-venus" className="tw-max-w-screen-md">
            <h2 className="tw-mb-xl">Explore other use cases by role</h2>
            <div className="tw-grid tw-grid-cols-1 xs:tw-grid-cols-2 tw-gap-6">
                {personaList.map(persona => (
                    <div key={persona.title}>
                        <ImgIconLinkCard item={persona} />
                    </div>
                ))}
            </div>
        </ContentSection>

        <ResourceList title="Explore more" items={resourceItems} />

        <CustomerLogos />
        <div className="tw-pb-3xl md:tw-pb-5xl" />

        <CtaSection background="saturn" />
    </Layout>
)

export default Security
