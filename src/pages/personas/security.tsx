import { FunctionComponent } from 'react'

import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import Link from 'next/link'

import { ContentSection, CtaSection, CustomerLogos, Layout, Hero, QuoteCarousel, ResourceList } from '@components'
import { buttonStyle, buttonLocation } from '@data'

// TODO: QuoteCarousel spacing/bg, section spacing, open up CaseStudyCard && CoreFeatures

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
        description: "Sourcegraph's code intelligence platform does more than search. It helps developers save time and move faster, regardless of how complex your codebase is.",
        type: 'Blog Post',
        img: {
            src: 'https://sourcegraphstatic.com/blog/securing-sourcegraph-eliminating-secrets.png',
            alt: 'Two robots in space around a chest',
        },
        href: '/blog/eliminate-secrets-from-codebase-with-universal-code-search',
    },
    {
        title: 'Less is more: how simplicity complements complexity in the pursuit of vulnerabilities',
        description: 'The Sourcegraph CI is complex and customized. To make it more accessible, software engineer Robert Lin used the new Sourcegraph feature, Notebooks, to make living documentation.',
        type: 'Guide',
        img: {
            src: 'blog/thumbnails/notebooks-cit.jpg',
            alt: 'Notebook and pen',
        },
        href: '/guides/fixing-vulnerabilities-less-is-more',
    },
    {
        title: 'How to use Sourcegraph to find and fix vulnerabilities like Log4j',
        description: 'Queries, scripts, and instructions for using code search to find where log4j is used across all your code, automate PRs to mitigate it, and track progress of the fixes.',
        type: 'Blog Post',
        img: {
            src: 'https://sourcegraphstatic.com/blog/log4j/log4j-blog-thumbnail.png',
            alt: 'Planets in space',
        },
        href: '/blog/real-weakest-link-in-software-supply-chain-security',
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
                                    <ArrowRightIcon className="tw-inline tw-ml-xs" />
                                </a>
                            </Link>
                        </div>
                    </div>
                }
            />
        }
    >

        <QuoteCarousel items={quoteCarouselItems} />
        
        <ResourceList title="Explore more" items={resourceItems} />
        <CustomerLogos />
        <CtaSection background="saturn" />
    </Layout>
)

export default Security
