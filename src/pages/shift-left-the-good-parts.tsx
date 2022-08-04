import { FunctionComponent } from 'react'

import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import Link from 'next/link'

import { Layout, ContentSection, TwoColumnSection, Video, BlogResourceItem } from '@components'
import { buttonStyle, buttonLocation } from '@data'

const blogResourceItems = [
    {
        title: 'An ex-Googler\'s guide to dev tools',
        description:
            'After leaving Google, many engineers miss the developer tools. Here\'s one ex-Googler\'s guide to navigating the dev tools landscape outside of Google, finding the ones that fill the gaps you\'re feeling, and introducing these to your new team.',
        type: 'Blog Post',
        img: {
            src: '/blog/exgoogler-campfire.jpg',
            alt: "Two robots warm by a fire, one says 'I miss those tools'",
        },
        href: '/blog/ex-googler-guide-dev-tools',
    },
    {
        title: 'A dev\'s thoughts on dev productivity',
        description:
            'Developers are systems thinkers and yet, most measures of developer productivity are metrics-based, instead of systems-based. In this post, Sourcegraph co-founder and CTO Beyang Liu presents five charts that visualize what really matters for developer productivity.',
        type: 'Blog Post',
        img: {
            src: 'https://storage.googleapis.com/sourcegraph-assets/blog/developer-productivity/Troy-overlay.jpeg',
            alt: 'Software development lifecycle meme',
        },
        href: '/blog/developer-productivity-thoughts',
    },
]

const ShiftLeftPage: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Shift Left - Sourcegraph',
            description:
                'How to empower your security and engineering organizations to shift left',
        }}
        className="bg-white"
        hero={
            <section className="bg-gradient-venus">
                <div className="container py-7 text-md-center">
                    <h1 className="font-weight-bold">Shift left the good parts</h1>
                    <h3 className="font-weight-normal py-4 mx-md-auto max-w-750">
                        5 practical ways to help your org shift left
                    </h3>
                </div>
            </section>
        }
    >
        <ContentSection color="white" className="pt-7">
            <div className="max-w-md-650 mx-auto">
                <p>Everyone's telling us to "shift left" these days. This raises some questions. What's being shifted? Who's doing the shifting? How far left should we be shifting it?</p>
                <p>Shifting left means addressing important parts of the development cycle early on. Doing this enables you to get an MVP out speedily, receive feedback sooner, and ensure your project is robust enough to handle the journey ahead.</p>
                <p>So what needs to be addressed? Well, it differs in each project, but mainly you should be paying attention to: user validation, context acquisition, testing, security, and code review.</p>
            </div>
        </ContentSection>

        <ContentSection color="white" className="py-7">
            <TwoColumnSection
                centerContent={true}
                leftColumn={
                    <>
                        <h2 className="mb-4">Shift left #1: Get validation from your users!</h2>
                        <p>You definitely don’t want to end up with an Over-Engineered Boondoggle that doesn't actually solve a real problem. The best way to avoid this is to get validation from your users ASAP, and this means getting an MVP out pronto.</p>
                        <p>Some ways to help you achieve this include:</p>
                        <ul>
                            <li className="mb-3">
                                Save time by stitching together existing components and making use of external libraries instead of reinventing the wheel.
                            </li>
                            <li className="mb-3">
                                Consider cutting things that you might think are essential. Do you really need a production environment? Maybe use a tunneling tool like Ngrok and serve your product directly from your local machine.
                            </li>
                        </ul>
                    </>
                }
                rightColumn={
                    <Video
                        host="self"
                        source={{
                            mp4: 'blog/shift-left/01-code-reuse',
                            webm: 'blog/shift-left/01-code-reuse',
                        }}
                        title="Code reuse"
                        caption="Discovering and reusing existing code can help you spin up an MVP ASAP, so you can quickly validate the user need with a rough sketch of the product."
                        loop={true}
                    />
                }
            />
        </ContentSection>

        <ContentSection color="white">
            <TwoColumnSection
                centerContent={true}
                reverseOnMobile={true}
                leftColumn={
                    <Video
                        host="self"
                        source={{
                            mp4: 'blog/shift-left/03-defs-and-refs',
                            webm: 'blog/shift-left/03-defs-and-refs',
                        }}
                        title="Definitions and references"
                        caption="Walking the forward and backward graph of code (defs and refs) is the bread-and-butter of building up a contextual mental model of how the code works."
                        loop={true}
                    />
                }
                rightColumn={
                    <>
                        <h2 className="mb-4">Shift left #2: Know thy codebase!</h2>
                        <p>Working on informative documentation will help developers write code faster and avoid problems down the line. Understanding your codebase will help you understand what to code and avoid errors along the way.</p>
                        <p>To achieve this you could:</p>
                        <ul>
                            <li className="mb-3">
                                Add useful features and information to your documentation to help readers navigate and understand it.
                            </li>
                            <li className="mb-3">
                                Keep track of which team members wrote what so that developers can reach out to those who will be able to help them understand the code.
                            </li>
                        </ul>
                    </>
                }
            />
        </ContentSection>

        <ContentSection color="white" className="py-7">
            <TwoColumnSection
                centerContent={true}
                leftColumn={
                    <>
                        <h2 className="mb-4">Shift left #3: Write tests now, thank yourself later</h2>
                        <p>Do you ever buy an ice cream without a game plan? I thought so. First, you run through all the scenarios and figure out the best outcome from those preliminary tests. Testing early on will help speed up the debugging process and can even help you figure out just what you want your code to achieve.</p>
                        <p>Shifting testing left will:</p>
                        <ul>
                            <li className="mb-3">
                                Create a robust and reliable codebase with tools for debugging early on in the development process.
                            </li>
                            <li className="mb-3">
                                Help to establish what you code will achieve, thus helping to inform the user validation step.
                            </li>
                            <li className="mb-3">
                                Provide an outline of the code, which can be used to provide helpful context for developers.
                            </li>
                        </ul>
                    </>
                }
                rightColumn={
                    <Video
                        host="self"
                        source={{
                            mp4: 'blog/shift-left/07-test-coverage',
                            webm: 'blog/shift-left/07-test-coverage',
                        }}
                        title="Reveal gaps in test coverage"
                        caption="Code coverage tools reveal gaps in test coverage."
                        loop={true}
                    />
                }
            />
        </ContentSection>

        <ContentSection color="white">
            <TwoColumnSection
                centerContent={true}
                reverseOnMobile={true}
                leftColumn={
                    <Video
                        host="self"
                        source={{
                            mp4: 'blog/shift-left/09-code-monitoring',
                            webm: 'blog/shift-left/09-code-monitoring',
                        }}
                        title="Codebase alerts"
                        caption="Set up alerts for anti-patterns and vulnerable dependency versions in your codebase."
                        loop={true}
                    />
                }
                rightColumn={
                    <>
                        <h2 className="mb-4">Shift left #4: When it comes to security — keep your house in order</h2>
                        <p>You have to be prepared for problems in life and in code. Skip the security headaches and time-consuming review cycles by planning ahead. You can do this by empowering developers with tools to meet security standards by themselves. This reduces the time spent on tedious multi-person review cycles.</p>
                        <p>Achieve this by:</p>
                        <ul>
                            <li className="mb-3">
                                Running recurring searches for vulnerable code blocks and dependencies.
                            </li>
                            <li className="mb-3">
                                Search for your own set of regular expressions and{' '}
                                <Link href="https://docs.sourcegraph.com/code_search/reference/structural#syntax-reference">
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a
                                        title="Comby patterns"
                                        data-button-style={buttonStyle.text}
                                        data-button-location={buttonLocation.body}
                                        data-button-type="cta"
                                    >
                                        Comby patterns
                                    </a>
                                </Link>
                                {' '}— they can even be suggested by your dev team.
                            </li>
                        </ul>
                    </>
                }
            />
        </ContentSection>

        <ContentSection color="white" className="py-7">
            <TwoColumnSection
                centerContent={true}
                leftColumn={
                    <>
                        <h2 className="mb-4">Shift left #5: Review your review</h2>
                        <p>Reviewing code can get a lot harder as the project gets more and more complex. Make sure your project has the right reviewing tools to keep up with its scale.</p>
                        <p>Here are some great reviewing tricks:</p>
                        <ul>
                            <li className="mb-3">
                                Break up large changesets into smaller changesets (e.g., using feature flags). These smaller changes can be more easily reviewed and validated.
                            </li>
                            <li className="mb-3">
                                Help to establish what you code will achieve, thus helping to inform the user validation step.
                            </li>
                            <li className="mb-3">
                                Use go-to-definition and find references to conduct code reviews that are both thorough and efficient.
                            </li>
                        </ul>
                    </>
                }
                rightColumn={
                    <Video
                        host="self"
                        source={{
                            mp4: 'blog/shift-left/10-code-reviews',
                            webm: 'blog/shift-left/10-code-reviews',
                        }}
                        title="Find references in code reviews"
                        caption="Go-to-definition and find references at work."
                        loop={true}
                    />
                }
            />
        </ContentSection>

        <div className="bg-gradient-venus">
            <ContentSection className="py-7">
                <section className="max-w-800 mx-auto text-md-center">
                    <h2>Ready to shift left?</h2>

                    <p className="my-5 max-w-650 mx-md-auto">
                        Shifting left means getting a head start on some of the most important aspects of the development process. Both the general philosophy and the specific process changes of shift left can be boosted by using tools that enable the developer to take full charge of shipping a new feature or bug fix.
                    </p>

                    <div className="d-flex flex-column align-items-center">
                        <Link href="/demo" passHref={true}>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a
                                title="Request a demo"
                                className="btn btn-primary col-md-3"
                                data-button-style={buttonStyle.text}
                                data-button-location={buttonLocation.body}
                                data-button-type="cta"
                            >
                                Request a demo
                            </a>
                        </Link>
                        <Link href="/get-started/self-hosted" passHref={true}>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a
                                title="Try Sourcegraph now"
                                className="mt-4 font-weight-bold text-center col-md-4"
                                data-button-style={buttonStyle.text}
                                data-button-location={buttonLocation.body}
                                data-button-type="cta"
                            >
                                Try Sourcegraph now
                                <ArrowRightIcon className="ml-2" />
                            </a>
                        </Link>
                    </div>
                </section>
            </ContentSection>
        </div>

        <ContentSection color="white" className="container max-w-900 py-7 px-0">
            <div className="col-lg-6">
                <h2 className="mb-5 font-weight-bold">Related resources</h2>
            </div>
            {blogResourceItems.map(item => (
                <BlogResourceItem key={item.title} blog={item} />
            ))}
        </ContentSection>
    </Layout>
)

export default ShiftLeftPage
