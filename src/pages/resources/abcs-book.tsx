import { FunctionComponent } from 'react'

import TwitterIcon from 'mdi-react/TwitterIcon'
import Link from 'next/link'

import { Layout, ContentSection, YouTube } from '../../components'
import { buttonStyle, buttonLocation } from '../../data/tracking'

export const AbcsEbook: FunctionComponent = () => (
    <Layout
        minimal={true}
        meta={{
            title: "Our ABCs: Always Be Coding children's book. Made with ❤️ by Sourcegraph.",
            description:
                "At Sourcegraph, many of us have young children who we're trying to provide fun new learning experiences for at home. That's why we created a new digital children's book titled \"Our ABCs: Always Be Coding\"—for all children that wonder what their techie parents do all day, night, and some weekends, too!",
            image: '/other/abcs-book/our-abcs.png',
        }}
    >
        <ContentSection>
            <div className="mx-auto max-w-5xl">
                <h1 className="mb-sm text-center">Our ABCs: Always Be Coding children's book</h1>

                <p className="text-center">
                    <img
                        src="/other/abcs-book/our-abcs-hero.png"
                        className="mb-4 w-full px-2"
                        role="presentation"
                        alt="Our ABCs: Always Be Coding book"
                    />
                </p>

                <p className="my-8 text-center">
                    <a
                        className="button btn btn-primary"
                        id="abc-dlbook"
                        href="https://cdn2.hubspot.net/hubfs/2762526/CTA%20assets/sourcegraph-abc-book.pdf"
                        title="Download your book"
                        data-button-style={buttonStyle.primary}
                        data-button-location={buttonLocation.hero}
                        data-button-type="cta"
                    >
                        Download your book
                    </a>
                </p>
            </div>

            <div className="mx-auto mt-4 max-w-2xl">
                <YouTube id="6bCO63O4swI" title="Our ABCs: Always Be Coding children's book by Sourcegraph" />
                <p className="mt-8">
                    At Sourcegraph, many of us have young children who we're trying to provide fun new learning
                    experiences for at home.
                </p>
                <p>
                    That's why we created a new digital children's book titled{' '}
                    <a
                        href="https://cdn2.hubspot.net/hubfs/2762526/CTA%20assets/sourcegraph-abc-book.pdf"
                        title="Our ABCs: Always Be Coding"
                        data-button-style={buttonStyle.text}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                    >
                        &quot;Our ABCs: Always Be Coding&quot;
                    </a>
                    —for all children at home that wonder what their techie parents do all day, night, and some weekends
                    too!
                </p>
                <p>
                    The A-Z format introduces simple concepts in a fun and easy-to-understand way so that kids can get
                    curious about coding and perhaps take the first step in beginning their journey in learning how to
                    code. Or at least it will provide an engaging and educational distraction to give you a break for a
                    few minutes!
                </p>
                <p className="text-center">
                    <a
                        href="https://cdn2.hubspot.net/hubfs/2762526/CTA%20assets/sourcegraph-abc-book.pdf"
                        className="block"
                        id="abc-dlbook"
                        title="Book cover: Our ABCs"
                        data-button-style={buttonStyle.image}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                    >
                        <img
                            src="/other/abcs-book/our-abcs.png"
                            className="mx-auto mt-10 shadow-xl"
                            width="350px"
                            alt="Book cover: Our ABCs"
                        />
                    </a>
                </p>
                <p className="my-8 text-center">
                    <a
                        className="button btn btn-primary"
                        id="abc-dlbook"
                        href="https://cdn2.hubspot.net/hubfs/2762526/CTA%20assets/sourcegraph-abc-book.pdf"
                        title="Download your book"
                        data-button-style={buttonStyle.text}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                    >
                        Download your book
                    </a>
                </p>

                <p className="text-center">
                    We hope you enjoy the book and would love to get your feedback{' '}
                    <a
                        href="https://twitter.com/intent/tweet?text=For%20all%20children%20at%20home%20that%20wonder%20what%20their%20techie%20parents%20do%20all%20day%2C%20night%2C%20and%20some%20weekends%2C%20too%2C%20they%20need%20the%20%22Our%20ABCs%3A%20Always%20Be%20Coding%22%20book%20by%20@sourcegraph%20-%20https%3A//about.sourcegraph.com/abc%20%23ABCsbook"
                        title="Via Twitter"
                        data-button-style={buttonStyle.text}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                    >
                        via Twitter
                    </a>{' '}
                    or{' '}
                    <a
                        href="mailto:hi+abc@sourcegraph.com"
                        title="Email"
                        data-button-style={buttonStyle.text}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                    >
                        email
                    </a>
                    .
                </p>

                <p className="text-center">
                    <a
                        className="button btn btn-primary"
                        href="https://twitter.com/intent/tweet?text=For%20all%20children%20at%20home%20that%20wonder%20what%20their%20techie%20parents%20do%20all%20day%2C%20night%2C%20and%20some%20weekends%2C%20too%2C%20they%20need%20the%20%22Our%20ABCs%3A%20Always%20Be%20Coding%22%20book%20by%20@sourcegraph%20-%20https%3A//about.sourcegraph.com/abc%20%23abcsbook%20%23TYCTWD%20%23TODASTW%20%23BringYourKidsToWorkDay"
                        title="Click to Tweet"
                        data-button-style={buttonStyle.primary}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                    >
                        <TwitterIcon className="mr-2 inline align-top" />
                        Click to Tweet
                    </a>
                </p>

                <h2 className="mt-5xl">FAQs</h2>

                <p>We've had quite a few folks reach out with questions about this book and future ones.</p>

                <h3 className="pt-xs">Do you plan on selling this as a physical book?</h3>
                <p>
                    We want to make it easy for folks to get a physical copy and while we don't (yet) have plans to
                    print and distribute, we're looking into vendors that can print and ship on demand. In any case, the
                    PDF is high-resolution so you can print it yourself.
                </p>

                <h3 className="pt-xs">Do you have any other books like this planned?</h3>
                <p>
                    We've been blown away by the response to this book and while we'd love to add "children's book
                    authoring" to the list of Sourcegraph capabilities, we haven't yet decided if we plan to turn this
                    into a series of similar books.
                </p>
            </div>
        </ContentSection>

        <ContentSection parentClassName="sg-bg-gradient-saturn">
            <div className="mx-auto max-w-4xl">
                <h3 className="mb-6 text-center">About Sourcegraph</h3>
                <p>
                    Sourcegraph empowers all developers to explore, navigate and better understand all code, faster,
                    with{' '}
                    <Link
                        href="/code-search"
                        title="Universal Code Search"
                        data-button-style={buttonStyle.text}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                    >
                        Universal Code Search
                    </Link>
                    . Sourcegraph's mission is to make it easier and faster for developers to work on solving problems.
                </p>
            </div>
        </ContentSection>
    </Layout>
)

export default AbcsEbook
