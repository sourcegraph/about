import { FunctionComponent } from 'react'

import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import Link from 'next/link'

import { ContentSection, Layout, TwoColumnSection, Heading, Video, InfiniteCarousel } from '../components'

export const carouselImages = [
    { src: '/home/carousel/1password-logo.svg', className: 'w-[208px] h-[40px] mx-6' },
    { src: '/home/carousel/reddit-logo-simple.svg', className: 'w-[131px] h-[37px] mx-6' },
    { src: '/home/carousel/databricks-logo.svg', className: 'w-[205px] h-[30px] mx-6' },
    { src: '/home/carousel/qualtrics-logo.svg', className: 'w-[171px] h-[54.9px] mx-6' },
    { src: '/home/carousel/canva-logo.svg', className: 'w-[112px] h-[36px] mx-6' },
    { src: '/home/carousel/podium-logo.svg', className: 'w-[173px] h-[37px] mx-6' },
    { src: '/home/carousel/redfin-logo.svg', className: 'w-[135px] h-[36px] mx-6' },
    { src: '/home/carousel/nutanix-logo.svg', className: 'w-[180px] h-[22px] mx-6' },
    { src: '/home/carousel/indeed-logo.svg', className: 'w-[150px] h-[40.33px] mx-6' },
    { src: '/home/carousel/uber-logo.svg', className: 'w-[124.16px] h-[34.33px] mx-6' },
    { src: '/home/carousel/mercado-libre-logo.svg', className: 'w-[77.95px] h-[77.96px] mx-6' },
    { src: '/home/carousel/dropbox-logo.svg', className: 'w-[164.27px] h-[92px] mx-6' },
    { src: '/home/carousel/plaid-logo.svg', className: 'w-[129px] h-[48px] mx-6' },
]

const testimonials = [
    {
        name: 'Todd Turner, Platform Engineer',
        avatar: 'TT',
        role: 'Platform Engineer',
        companyName: 'Nine',
        comment: [
            'Sourcegraph helped me answer a question in like 5 seconds flat this afternoon.',
            'Normally I probably would have bugged a bunch of people, but the overview of “here is that snippet, and the list of repos using it” made it self-served.',
        ],
    },
    {
        name: 'Joe Bingham',
        avatar: 'JB',
        role: 'Software Engineer',
        companyName: 'Workiva',
        comment: [
            'Updating all of our repositories with Batch Changes saves time, is less error-prone, and gives us confidence that everything is going to plan.',
        ],
    },
    {
        name: 'Chris Roderick',
        avatar: 'CR',
        role: 'Applications and Services Section Leader',
        companyName: 'CERN',
        comment: [
            'Sourcegraph lets us make informed decisions on how to evolve our codebase.',
            'For example, a library owner knows exactly how all other developers use their API, and can therefore make educated decisions on how to evolve it.',
        ],
    },
]

const codeHosts = [
    { name: 'GitHub', icon: '/code-search/code-hosts/github.svg' },
    { name: 'GitLab', icon: '/code-search/code-hosts/gitlab.svg' },
    { name: 'Perforce', icon: '/code-search/code-hosts/perforce.svg' },
    { name: 'Bitbucket', icon: '/code-search/code-hosts/bitbucket.svg' },
    { name: 'Gerrit', icon: '/code-search/code-hosts/gerrit.svg' },
    { name: 'any Git-based code host', icon: '/code-search/code-hosts/any-git.svg' },
]

export const CodeSearchPage: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph | Code Search',
            description:
                'Code Search helps devs explore their codebase, make large-scale migrations, and fix security issues faster—especially in large, distributed codebases.',
            image: 'https://sourcegraph.com/code-search/code-search-og.png',
        }}
        hero={<CodeSearchHero />}
        className="bg-gray-50"
    >
        <div className="flex items-center py-10 lg:pb-16 lg:pt-24">
            <InfiniteCarousel duration={100} images={carouselImages} />
        </div>

        <ContentSection className="lg:pl-6" parentClassName="lg:!py-24">
            <TwoColumnSection
                className="xl:!gap-x-[100px]"
                centerContent={true}
                reverseOnMobile={true}
                leftColumn={
                    <Video
                        host="self"
                        source={{
                            mp4: '/animations/code-search',
                            webm: '/animations/code-search',
                        }}
                        title="Sourcegraph Code Search"
                        loop={true}
                        className="h-[432px] rounded-[5px] border border-gray-200 object-cover"
                    />
                }
                rightColumn={
                    <div>
                        <p className="color-[#0F111A] mb-4 text-lg font-semibold !tracking-[0.54px]">CODE SEARCH</p>
                        <Heading size="h2" className="color-[#0F111A] mb-6 !leading-10 !tracking-[-1px]">
                            Find and fix code in any code host, language, or repository
                        </Heading>
                        <ul className="mb-6 text-lg leading-[27px] tracking-[-0.25px] text-[#343A4D]">
                            <li className="mb-3">
                                Onboard to new repositories and projects more quickly by searching and navigating code
                                from Sourcegraph’s web UI.
                            </li>
                            <li className="mb-3">
                                Resolve vulnerabilities and incidents faster. Locate every instance of bad code using
                                symbol, commit, and diff searches.
                            </li>
                            <li>
                                Efficiently reuse existing code. Find code across thousands of repositories and multiple
                                code hosts in seconds.
                            </li>
                        </ul>
                        <Link
                            href="/case-studies/nutanix-fixed-log4j-with-sourcegraph"
                            className="flex gap-2.5 font-semibold leading-[22.4px] text-violet-500 underline"
                        >
                            Read how Nutanix used Code Search to mitigate Log4j vulnerabilities
                            <ChevronRightIcon />
                        </Link>
                    </div>
                }
            />
        </ContentSection>

        <ContentSection className="lg:pl-6" parentClassName="!py-24 ">
            <TwoColumnSection
                className="xl:!gap-x-[113px]"
                leftColumn={
                    <div>
                        <p className="color-[#0F111A] mb-4 text-lg font-semibold !tracking-[0.54px]">CODE NAVIGATION</p>
                        <Heading size="h2" className="color-[#0F111A] mb-6 !leading-10 !tracking-[-1px]">
                            Understand your code and its dependencies
                        </Heading>
                        <ul className="mb-6 text-lg leading-[27px] tracking-[-0.25px] text-[#343A4D]">
                            <li className="mb-3">
                                Onboard to codebases faster with cross-repository code navigation features like “Go to
                                definition” and “Find references.”
                            </li>
                            <li className="mb-3">
                                Complete code reviews, get up to speed on unfamiliar code, and determine the impact of
                                code changes with the confidence of compiler-accurate code navigation.
                            </li>
                            <li>
                                Determine root causes quickly with code navigation that tracks dependencies and
                                references across repositories.
                            </li>
                        </ul>
                    </div>
                }
                rightColumn={
                    <Video
                        host="self"
                        source={{
                            mp4: '/animations/code-intel',
                            webm: '/animations/code-intel',
                        }}
                        title="Sourcegraph Notebooks"
                        loop={true}
                        className="h-[432px] rounded-[5px] border border-gray-200 object-cover lg:h-[401px] lg:w-[577px]"
                    />
                }
            />
        </ContentSection>

        <ContentSection className="lg:pl-6" parentClassName="!py-24">
            <TwoColumnSection
                className="xl:!gap-x-[100px]"
                centerContent={true}
                reverseOnMobile={true}
                leftColumn={
                    <Video
                        source={{
                            mp4: 'batch-changes/how-it-works',
                            webm: 'batch-changes/how-it-works',
                        }}
                        loop={true}
                        title="Batch Changes: How it works"
                        className="h-[432px] rounded-[5px] border border-gray-200 object-cover lg:h-[324px] lg:w-[577px]"
                    />
                }
                rightColumn={
                    <div>
                        <p className="color-[#0F111A] mb-4 text-lg font-semibold !tracking-[0.54px]">BATCH CHANGES</p>
                        <Heading size="h2" className="color-[#0F111A] mb-6 !leading-10 !tracking-[-1px]">
                            Automate large-scale code changes
                        </Heading>
                        <ul className="mb-6 text-lg leading-[27px] tracking-[-0.25px] text-[#343A4D]">
                            <li className="mb-3">
                                Find all occurrences of code to change with Code Search and make every change with a
                                single, declarative spec file.
                            </li>
                            <li>
                                Automatically track changeset lifecycle status via the Sourcegraph UI. See check state,
                                reviews, and merge status to follow changesets to completion.
                            </li>
                        </ul>

                        <Link
                            href="/case-studies/indeed-accelerates-development-velocity"
                            className="flex gap-2.5 font-semibold leading-[22.4px] text-violet-500 underline"
                        >
                            Read how Indeed uses Batch Changes to accelerate development
                            <ChevronRightIcon />
                        </Link>
                    </div>
                }
            />
        </ContentSection>

        <ContentSection className="lg:pl-6" parentClassName="lg:!pt-24 !pt:10 !pb-10 lg:!pb-28">
            <TwoColumnSection
                centerContent={true}
                leftColumn={
                    <div>
                        <p className="color-[#0F111A] mb-4 text-lg font-semibold tracking-[3%]">CODE INSIGHTS</p>
                        <Heading size="h2" className="color-[#0F111A] mb-6 !leading-10 !tracking-[-1px]">
                            Track meaningful insights across your codebase
                        </Heading>
                        <ul className="mb-6 text-lg leading-[27px] tracking-[-0.25px] text-[#343A4D]">
                            <li className="mb-3">
                                Make data-driven decisions using visualizations of your entire codebase. Simply write a
                                search query and turn it into a chart.
                            </li>
                            <li>
                                Engineering teams can track migrations and deprecations, ensure removal of security
                                vulnerabilities, and track code smells and health from visual dashboards.
                            </li>
                        </ul>
                        <Link
                            href="/blog/announcing-code-insights"
                            className="flex gap-2.5 font-semibold leading-[22.4px] text-violet-500 underline"
                        >
                            Learn more about Code Insights <ChevronRightIcon />
                        </Link>
                    </div>
                }
                rightColumn={
                    <Video
                        source={{
                            mp4: 'code_insights/code-insights-720',
                            webm: 'code_insights/code-insights-720',
                        }}
                        title="Code Insights"
                        loop={true}
                        className="h-[526px] rounded-lg border border-gray-200 object-cover lg:h-[324px] lg:w-[577px]"
                    />
                }
            />
        </ContentSection>

        <ContentSection
            parentClassName="!pb-0 lg:!pt-14 !pt-6"
            className="!my-0 flex w-full  flex-col gap-x-12 !p-0 md:flex-col lg:pl-6"
        >
            <div className="mx-auto flex w-full flex-col gap-x-8 gap-y-8 lg:flex-row">
                <Heading size="h2" className="text-center !leading-10 !tracking-[-1px] lg:pl-6 lg:text-left">
                    Code Search works with:
                </Heading>
                <div className="mx-auto flex w-full max-w-[797px] flex-wrap items-center justify-center gap-16">
                    {codeHosts.map(codeHost => (
                        <div className="flex items-center gap-x-4" key={codeHost.name}>
                            <img className="h-[50px] w-[50px]" src={codeHost.icon} alt={codeHost.name} />{' '}
                            <Heading size="h3" className="!text-2xl !tracking-normal text-gray-600">
                                {codeHost.name}
                            </Heading>
                        </div>
                    ))}
                </div>
            </div>
        </ContentSection>

        <ContentSection parentClassName="!pb-0 !pt-24" className="w-full lg:pl-6">
            <div className="gap-y-[30px flex w-full flex-col items-start justify-between gap-x-0 gap-y-6 md:flex-row md:gap-x-[30px]">
                {testimonials.map(testimonial => (
                    <div
                        key={testimonial.name}
                        className="w-full flex-1 rounded-[10px] border border-gray-200 bg-white p-5 md:items-start"
                    >
                        <div className="mb-4 flex items-center">
                            <div className="mr-[10px] flex h-10 w-10 items-end justify-center rounded-full bg-gradient-to-b  from-[#CD76F1]  to-[#EE8EA1] pb-0.5">
                                <Heading size="h3" className="text-white">
                                    {testimonial.avatar}
                                </Heading>
                            </div>

                            <div>
                                <p className="m-0 mb-[-5px] text-base font-normal leading-6 tracking-[-0.25px] text-violet-500">
                                    {testimonial.name}
                                </p>
                                <div className="text-sm font-normal leading-[19.88px] text-gray-600">
                                    {testimonial.role}, {testimonial.companyName}
                                </div>
                            </div>
                        </div>
                        <div className="text-lg font-normal leading-[27px] tracking-[-0.25px] text-gray-700">
                            {testimonial.comment.map(paragraph => (
                                <p key={paragraph} className="m-0 p-0">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </ContentSection>

        <ContentSection
            id="contact-form"
            parentClassName="!py-24"
            className="mx-auto flex flex-col gap-6 md:flex-row lg:pl-6"
        >
            <div className="sg-bg-code-search-new-cta hover:cta-free-cody relative overflow-hidden rounded-2xl border border-gray-200 border-opacity-25 !px-14 py-16 md:w-1/2 md:p-16">
                <div className="bg-grad absolute right-0 top-0 h-[3px] w-full flex-1 bg-gradient-to-r from-blue-300 via-violet-400 to-vermillion-300" />
                <Heading size="h2" className="text-5xl !leading-10 !tracking-[-1px] text-white">
                    Code Search Enterprise
                </Heading>
                <Heading
                    size="h3"
                    className="py-4 !text-[18px] !leading-[27px] !tracking-[-0.25px] text-white text-opacity-80"
                >
                    Get Code Search for your team’s entire private codebase. Contact us for a demo or to get started
                    with a free trial.
                </Heading>
                <div className="flex max-w-[356px] flex-col flex-wrap gap-4 pt-4 sm:flex-row">
                    <Link href="/demo" className="btn btn-primary max-w-[216px]">
                        Contact us for a demo
                    </Link>
                    <Link
                        href="/pricing?product=codeSearch"
                        className="flex items-center justify-start gap-[10px] whitespace-nowrap font-semibold text-white hover:text-violet-300 hover:underline"
                    >
                        See pricing <ChevronRightIcon />
                    </Link>
                </div>
            </div>
            <div className="hover:cta-free-cody !md:px-14 relative overflow-hidden rounded-2xl border border-opacity-25 bg-white p-4 md:w-1/2 md:p-16">
                <Heading size="h2" className="!text-5xl !leading-10 !tracking-[-1px]">
                    Try our public Code Search environment
                </Heading>

                <Heading size="h3" className="mt-4 !text-[18px] !leading-[27px] !tracking-[-0.25px] text-gray-500">
                    See how Code Search works with our public search environment, offering the same search and
                    navigation features as Code Search Enterprise. Search an index of than 2 million public
                    repositories.
                </Heading>
                <div className="mt-6 flex w-fit flex-wrap justify-center gap-2 md:flex-row md:gap-8">
                    <Link
                        href="https://sourcegraph.com/search"
                        title="Get Cody free"
                        className="btn btn-primary w-[173px] text-center xs:w-fit"
                    >
                        Try Code Search
                    </Link>
                </div>
            </div>
        </ContentSection>
    </Layout>
)

const CodeSearchHero: FunctionComponent = () => (
    <ContentSection className="flex items-center justify-center" parentClassName="!py-0">
        <div className="mx-auto flex flex-col items-center justify-center text-center">
            <div className="mx-auto flex flex-col items-center pb-16 pt-8 md:w-[828px] md:pb-[63px] md:pt-16">
                <div className="mb-[8px] flex items-center justify-start gap-[8px]">
                    <div className="flex h-[40px] w-[40px] items-center justify-center rounded-xl border-2 border-[#F0F2F2] shadow-lg">
                        <img src="/codesearch-logomark-default.svg" alt="Cody Logo" className="h-5 w-5" />
                    </div>
                    <Heading
                        size="h3"
                        className="!font-['Source_Sans_Pro'] !text-[32px] font-semibold leading-8 !tracking-[-2px]"
                    >
                        Code Search
                    </Heading>
                </div>

                <div className="container mx-auto mb-6 grid gap-8 text-center">
                    <Heading size="h1" className="color-[#0F111A] pt-3xl !tracking-[-1px] md:pt-0">
                        Grok your entire codebase
                    </Heading>
                </div>
                <Heading
                    size="h4"
                    className="mb-10 text-[24px] !font-normal !leading-[30px] !-tracking-[0.25px] text-gray-500 md:mb-8 md:px-6"
                >
                    Code Search makes it easy to find code, make large-scale changes, and track insights across
                    codebases of any scale and with any number of code hosts.
                </Heading>
                <div className="mx-auto flex flex-row flex-wrap justify-center gap-[8px] rounded-[6px]">
                    <Link href="/demo" className="btn btn-primary">
                        Contact us for a demo
                    </Link>
                    <Link
                        href="/pricing?product=codeSearch"
                        className="btn w-[215px] text-center text-violet-500 outline outline-1 outline-violet-500 hover:text-violet-400 hover:outline-violet-400 sm:w-fit"
                    >
                        See pricing
                    </Link>
                </div>
            </div>
            <div className=" relative h-auto w-full max-w-[948px] ">
                <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-r from-[#4AC1E8] via-[#A112FF] to-[#FF5543] opacity-20 blur-xl" />
                <img
                    className=" relative mx-auto block w-full md:px-6"
                    src="/code-search/code-search.svg"
                    alt="Cody Product logo"
                />
            </div>
        </div>
    </ContentSection>
)

export default CodeSearchPage
