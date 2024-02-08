import { FunctionComponent } from 'react'

// import '@dotlottie/player-component';
import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import Link from 'next/link'
import { FaGitAlt, FaLocationArrow } from 'react-icons/fa'
import { MdOutlineAvTimer, MdBarChart } from 'react-icons/md'

import { Layout, Hero, ContentSection, TwoColumnSection, Heading } from '../components'
import { breakpoints } from '../data/breakpoints'
import { buttonLocation, buttonStyle } from '../data/tracking'
import { useWindowWidth } from '../hooks/windowWidth'

const Cloud: FunctionComponent = () => {
    const windowWidth = useWindowWidth()
    const isMobile = windowWidth < breakpoints.sm

    return (
        <Layout
            meta={{
                title: 'Sourcegraph - Cloud',
                description:
                    "Give your teams the ability to search, write and understand massive codebases through Sourcegraph's universal and secure Code Intelligence Platform.",
            }}
            className="bg-gray-50"
            hero={
                <div>
                    <Hero
                        variant="transparent"
                        className=" mx-auto flex items-center justify-center text-center md:w-[750px] "
                        title="Modern enterprises are powered by productive developers"
                        subtitle="Give your teams the ability to search, write and understand massive codebases through Sourcegraph's universal and secure Code Intelligence Platform."
                        centerContent={true}
                        cta={
                            <div className="mx-auto flex w-full flex-col items-center justify-center gap-6 sm:flex sm:flex-row md:gap-4">
                                <Link
                                    className="btn btn-primary "
                                    href="/contact/request-info"
                                    title="Contact us for a demo"
                                    data-button-style={buttonStyle.primary}
                                    data-button-location={buttonLocation}
                                    data-button-type="cta"
                                >
                                    Contact us for a demo
                                </Link>
                                <Link
                                    className="btn items-center text-violet-500 outline "
                                    href="/demo"
                                    title="See Pricing"
                                    data-button-style={buttonStyle.outline}
                                    data-button-location={buttonLocation.hero}
                                    data-button-type="cta"
                                >
                                    See Pricing
                                </Link>
                            </div>
                        }
                        displayUnderNav={true}
                    />
                </div>
            }
        >
            {/* <dotlottie-player
        src="https://lottie.host/07b21a4d-e532-47b7-ab01-7bd8faf4ba33/ORhWKPLwKI.lottie"
        background="transparent"
        speed={1}
        direction={1}
        playMode="normal"
        autoplay = {true}
      /> */}
            <ContentSection
                className=" mx-auto flex flex-col items-center justify-center text-center "
                parentClassName="!py-0"
            >
                <div className="md:w-[615px]">
                    <h2>Used by 4/5 FAANG and 6/10 largest software companies in the world</h2>
                    <Link
                        href="https://sourcegraph.com/case-studies"
                        title="Cody"
                        className="btn mx-6 mb-16 border border-violet-500 p-0 px-5 py-3 text-center font-semibold !-tracking-[0.25px]  text-violet-500 hover:border-violet-400 hover:text-violet-400 md:mx-0 md:mb-28 md:border-none md:px-0 md:pb-0 md:pt-0 md:text-left md:text-violet-500"
                    >
                        Read customer stories
                        <ChevronRightIcon className="!mb-0 ml-[10px] inline" />
                    </Link>
                </div>
                <div className="flex gap-[42px]">
                    <img className="w-full" src="/enterprise/cern-logo.svg" alt="Cody Product logo" />
                    <img className="w-full" src="/enterprise/mercado-libre-logo.svg" alt="Cody Product logo" />
                    <img className="w-full" src="/enterprise/SoFi-logo.svg" alt="Cody Product logo" />
                    <img className="w-full" src="/enterprise/qualtrics-logo.svg" alt="Cody Product logo" />
                    <img className="w-full" src="/enterprise/leidos-logo.svg" alt="Cody Product logo" />
                </div>
            </ContentSection>
            <ContentSection className="flex gap-6">
                <div className="px-10 py-16">
                    <Heading size="h2">Improve velocity with faster code discovery and understanding</Heading>
                    <p>
                        Developers can find, navigate, and share code across entire codebases in seconds, increasing
                        development velocity and reducing time spent searching for answers.
                    </p>
                </div>
                <div className="rounded-2xl border-1 border-gray-200 bg-white px-20 py-16 md:w-[574px]">
                    <span className="text-sm text-gray-500">
                        Satish Surapaneni
                        <br />
                        Senior Engineering Manager, F5
                    </span>
                    <p className="mb-0 pt-3">
                        "We are developing software faster than ever, with aggressive schedules, and across boundaries.
                        Things that used to be worked out in a closed room now need to be done while teams are spread
                        out across the globe.”
                    </p>
                </div>
            </ContentSection>
            <ContentSection className="relative mx-6 mb-8 flex h-auto gap-[19px]  overflow-hidden rounded-2xl border-1 border-gray-200 bg-white md:mx-0 md:h-[329px]">
                <div className="flex  flex-col py-16 pl-10">
                    <Heading size="h2" className="pb-4 pt-6">
                        Developers write code faster using Cody and the power of AI in their IDE
                    </Heading>
                </div>
                {!isMobile && (
                    <div className="h-full w-full">
                        <div className="autocomplete-gradient absolute z-0 h-[392.193px] w-[1087.411px]" />
                        <img
                            className=" relative h-full w-full"
                            src="/home/multiline-completion.svg"
                            alt="Multiline Completion"
                        />
                    </div>
                )}
            </ContentSection>
            <ContentSection className="flex gap-6 rounded-2xl border-1 border-gray-200 bg-white py-16 pl-16 pr-6 md:max-h-[784px]">
                <div className="flex flex-row items-end rounded-2xl border-1 border-gray-200 bg-gray-50 px-20 py-16">
                    <div className="flex flex-col">
                        <span className="text-sm text-gray-500">
                            Balázs Tóthfalussy
                            <br />
                            Engineering Manager, Prezi
                        </span>
                        <p className="mb-0 pt-3">
                            "As we’ve grown, so has the need to better track and communicate our progress and goals
                            across the engineering team and broader company...
                        </p>
                    </div>
                </div>
                <div className="">
                    <div className="px-10">
                        <Heading size="h2">
                            Complete large-scale migrations and refactors in hours rather than days
                        </Heading>
                        <p>
                            Perform organization-wide migrations and upgrades across every repository and code host with
                            Batch Changes, and track migration progress with Code Insights dashboards.
                        </p>
                    </div>
                    <img src="enterprise/graph.svg" alt="graph" />
                </div>
            </ContentSection>
            <ContentSection className="flex gap-6">
                <div className="pt-6 pl-16 pr-10">
                    <Heading size="h2" className="mb-4">
                        Track and resolve vulnerabilities quickly and with confidence
                    </Heading>
                    <p className="mb-[50px]">
                        Find all instances of vulnerabilities with Code Search, then use Batch Changes to replace
                        vulnerable code all at once. Plus, Code Insights lets you create dashboards to track instances
                        of vulnerabilities or bad code patterns over time.
                    </p>
                    <img src="enterprise/code-search.svg" alt="code search" />
                </div>
                <div className="rounded-2xl border-1 border-gray-200 bg-white p-16">
                    <p className="mb-5">
                        “It's nice when you can just run a report and say, 'Here it is,' or 'Here it isn't.' It's much
                        better than having to say, 'Well, boss, I think we got it all.'”
                    </p>
                    <span className="text-sm text-gray-500">
                        Jon Kohler
                        <br />
                        Nutanix, after responding to the Log4J vulnerability
                    </span>
                </div>
            </ContentSection>
            <ContentSection className="flex justify-between rounded-2xl border-1 border-gray-200 bg-violet-700 py-16 px-[56px]">
                <Heading size="h2" className="text-white">
                    Request a demo or start an enterprise trial
                </Heading>
                <div className=" flex flex-col items-center  gap-6 sm:flex sm:flex-row md:gap-4">
                    <Link
                        className="btn btn-inverted-primary bg-white "
                        href="/contact/request-info"
                        title="Contact us"
                        data-button-style={buttonStyle.primary}
                        data-button-location={buttonLocation}
                        data-button-type="cta"
                    >
                        Contact us
                    </Link>
                    <Link
                        className="btn items-center text-white outline "
                        href="/demo"
                        title="See Pricing"
                        data-button-style={buttonStyle.outline}
                        data-button-location={buttonLocation.hero}
                        data-button-type="cta"
                    >
                        See Pricing
                    </Link>
                </div>
            </ContentSection>
            <ContentSection className="flex flex-row justify-between  rounded-2xl border-1 border-gray-200 bg-white p-16">
                <div className="w-[481px]">
                    <img
                        alt="language models brand"
                        className="mb-6"
                        src="/enterprise/language-models-brand-icon.svg"
                    />
                    <Heading size="h1" className="mb-4">
                        Universal
                    </Heading>
                    <p className="mb-0">
                        You don't have to compromise. Sourcegraph work with all major code hosts and IDEs to understand
                        all your code.
                    </p>
                </div>
                <div className="flex flex-row gap-[31.97px]">
                    <div className="flex flex-col gap-[25px]">
                        <img alt="" src="/enterprise/vs code.svg" />
                        <img alt="" src="/enterprise/github.svg" />
                        <img alt="" src="/enterprise/bitbucket.svg" />
                    </div>
                    <div className="flex flex-col gap-[25px]">
                        <img alt="" src="/enterprise/intellij.svg" />
                        <img alt="" src="/enterprise/neovim.svg" />
                        <img alt="" src="/enterprise/neovim2.svg" />
                    </div>
                    <div className="flex flex-col gap-[25px]">
                        <img alt="" src="/enterprise/gerrit.svg" />
                        <img alt="" src="/enterprise/gitlab.svg" />
                        <img alt="" src="/enterprise/perforce.svg" />
                    </div>
                </div>
            </ContentSection>
            <ContentSection className="flex gap-6 bg-white">
                <div className="rounded-2xl border-1 border-gray-200 bg-violet-700 py-16 px-20 text-white">
                    <span className="text-sm">
                        Satish Surapaneni
                        <br />
                        Senior Engineering Manager, F5
                    </span>
                    <p className="mb-0 pt-3">
                        “Before Sourcegraph, each of our teams was siloed. Developers could understand their own
                        codebase, but it was difficult for them to see and understand other team members’ code.“
                    </p>
                </div>
                <div className="rounded-2xl border-1 border-gray-200 py-[71px] px-10">
                    <Heading size="h6">cody</Heading>
                    <Heading size="h2">Choose from your favorite Large Language Models</Heading>
                    <p>
                        Cody, Sourcegraph’s AI coding assistant, lets you choose from multiple LLM options including
                        Anthropic Claude 2 and OpenAI GPT-4. You can even bring your own LLM key with Amazon Bedrock and
                        Azure OpenAI.
                    </p>
                    <div className="flex">
                        <img alt="" src="/enterprise/ai.svg" />
                        <img alt="" src="/enterprise/open-ai.svg" />
                        <img alt="" src="/enterprise/amazon-bedrock.svg" />
                        <img alt="" src="/enterprise/microsoft-azure.svg" />
                        <img alt="" src="/enterprise/ai.svg" />
                    </div>
                </div>
            </ContentSection>
            <ContentSection className="flex flex-row justify-between rounded-2xl border-1 border-gray-200 bg-white  py-10 pr-10 pl-16">
                <div className="flex flex-col justify-center md:w-[532px]">
                    <img src="/enterprise/code-graph-brand-icon.svg" alt="" className="mb-6 w-[48px]" />
                    <Heading size="h1" className="mb-4">
                        Scalable
                    </Heading>
                    <p className="mb-0">
                        Leverage AI at any scale. Sourcegraph supports the world's largest codebases.
                    </p>
                </div>
                <div className="flex flex-col gap-16 rounded-2xl border-1 border-gray-200 py-10 pl-10 pr-[89px] md:w-[477px]">
                    <Heading size="h3">
                        Customers run single-tenant Sourcegraph instances for codebases of epic size:
                    </Heading>
                    <div>
                        <p className="text-[75px] font-semibold leading-[93.75px]">8+</p>
                        <Heading size="h3">Terabytes of code @ finance industry customer</Heading>
                    </div>
                    <div>
                        <p className="text-[75px] font-semibold leading-[93.75px]">100,000+</p>
                        <Heading size="h3">Repositories @ finance industry customer</Heading>
                    </div>
                </div>
            </ContentSection>
            <ContentSection className="flex flex-col justify-between gap-6 rounded-2xl border-1 border-gray-200 bg-violet-700 py-16 px-[56px]">
                <Heading size="h2" className="text-white">
                    Contact us for a demo or to start an enterprise trial
                </Heading>
                <div className=" flex flex-col items-center  gap-6 sm:flex sm:flex-row md:gap-4">
                    <Link
                        className="btn btn-inverted-primary bg-white "
                        href="/contact/request-info"
                        title="Contact us"
                        data-button-style={buttonStyle.primary}
                        data-button-location={buttonLocation}
                        data-button-type="cta"
                    >
                        Contact us
                    </Link>
                    <Link
                        className="btn items-center text-white outline "
                        href="/demo"
                        title="See Pricing"
                        data-button-style={buttonStyle.outline}
                        data-button-location={buttonLocation.hero}
                        data-button-type="cta"
                    >
                        See Pricing
                    </Link>
                </div>
            </ContentSection>

            {/* here */}
            <ContentSection background="white" className=" md:pb-5xl" parentClassName="!py-0">
                <div className="flex-row lg:flex">
                    <h2 className="mb-10 max-w-3xl md:mr-6 md:min-w-[400px] md:pr-4 lg:basis-1/3">
                        Get in flow with a private, fully-featured Sourcegraph instance
                    </h2>

                    <div className="max-w-full basis-2/3">
                        <TwoColumnSection
                            blockOnMdAndDown={true}
                            className="!gap-y-8 md:!gap-x-6"
                            leftColumn={
                                <div>
                                    <div className="mb-6 flex max-h-[48px] max-w-[48px] items-center rounded bg-violet-100 p-2.5 md:mb-5">
                                        <FaGitAlt size={32} className="text-violet-400" />
                                    </div>
                                    <p className="m-0">
                                        Search all your code, all in one place. Sourcegraph connects to any Git-based
                                        code host so you can view your entire codebase in a single unified view.
                                    </p>
                                </div>
                            }
                            rightColumn={
                                <div className="mb-8">
                                    <div className="mb-6 flex max-h-[48px] max-w-[48px] items-center rounded bg-violet-100 p-2.5">
                                        <FaLocationArrow size={32} className="p-1 text-violet-400" />
                                    </div>
                                    <p className="m-0">
                                        Navigate your codebase with IDE-level code navigation that works across
                                        repositories, so you can track references, definitions, and implementations with
                                        perfect accuracy.
                                    </p>
                                </div>
                            }
                        />
                        <TwoColumnSection
                            blockOnMdAndDown={true}
                            className="!gap-y-8  md:!gap-x-6"
                            leftColumn={
                                <div>
                                    <div className="mb-6 flex max-h-[48px] max-w-[48px] items-center rounded bg-violet-100 p-2.5">
                                        <MdOutlineAvTimer size={45} className="text-violet-400" />
                                    </div>
                                    <p className="m-0">
                                        Fix and update code across your entire codebase in hours rather than weeks with{' '}
                                        <Link href="/batch-changes" className="text-black underline">
                                            Batch Changes
                                        </Link>
                                        .
                                    </p>
                                </div>
                            }
                            rightColumn={
                                <div>
                                    <div className="mb-6 flex max-h-[48px] max-w-[48px] items-center rounded bg-violet-100 p-2.5">
                                        <MdBarChart size={32} className="text-violet-400" />
                                    </div>
                                    <p className="m-0">
                                        Track migrations, measure goals, and visualize changes in your code with{' '}
                                        <Link href="/code-insights" className="text-black underline">
                                            Code Insights
                                        </Link>
                                        .
                                    </p>
                                </div>
                            }
                        />
                    </div>
                </div>
            </ContentSection>

            <ContentSection background="white" className="pt-16 md:py-4" parentClassName="!py-0">
                <TwoColumnSection
                    className="!gap-y-16 lg:!gap-x-16"
                    leftColumn={
                        <div className="mr-[38px] lg:mr-0">
                            <h2>Start searching and stay in flow, no maintenance necessary</h2>
                            <ul className="ml-0 mt-6 list-none lg:max-w-[590px]">
                                <li>
                                    Get a dedicated Sourcegraph Cloud instance with no manual deployment required.
                                    Simply connect to your code hosts and start searching, navigating, and automating
                                    your code.
                                </li>
                            </ul>
                        </div>
                    }
                    rightColumn={
                        <div className="mr-[38px] lg:mr-0">
                            <h2>Reduce your total cost of ownership and increase time to value</h2>
                            <ul className="ml-0 mt-6 list-none lg:max-w-[590px]">
                                <li>
                                    Spend less time maintaining your dev tools and more time shipping great code.
                                    Upgrades and scaling are fully automated.
                                </li>
                            </ul>
                        </div>
                    }
                />
            </ContentSection>

            <ContentSection background="white">
                <TwoColumnSection
                    reverseOnMobile={true}
                    centerContent={true}
                    className="!gap-y-[101px] lg:!gap-x-[83px]"
                    leftColumn={
                        <div className="flex justify-center">
                            <span className="mt-[30px] h-px w-10 bg-gray-300 md:mt-[46px] md:w-20" />
                            <div className="mx-[33px] text-center">
                                <img src="/security/ccpa.svg" alt="CCPA badge" />
                                <p className="mt-xxs mb-0 font-semibold text-gray-400">CCPA</p>
                            </div>
                            <div className="mr-[36.5px] text-center">
                                <img src="/security/gdpr.svg" alt="GDPR badge" />
                                <p className="mt-xxs mb-0 font-semibold text-gray-400">GDPR</p>
                            </div>
                            <div className="mr-[36.5px] text-center">
                                <img src="/security/soc2.svg" alt="SOC2 Type 2 badge" />
                                <p className="mt-xxs mb-0 font-semibold text-gray-400">SOC2 TYPE 2</p>
                            </div>
                            <span className="mt-[30px] h-px w-10 bg-gray-300 md:mt-[46px] md:w-20" />
                        </div>
                    }
                    rightColumn={
                        <>
                            <h2>Safeguard your data with single-tenant, security-first instances</h2>
                            <ul className="ml-md mt-sm">
                                <li>
                                    Feel secure: all instances are isolated and single-tenant, so you don’t have to
                                    configure your own instance security.
                                </li>

                                <li>
                                    Stay up-to-date and confident with automatic monthly upgrades, service SLAs, and
                                    backup and restore capability.
                                </li>

                                <li>
                                    Prioritize your data’s privacy: Sourcegraph Cloud has received a SOC 2 Type II
                                    report. See our{' '}
                                    <a
                                        href="https://security.sourcegraph.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-black underline"
                                    >
                                        security portal
                                    </a>{' '}
                                    for more information.
                                </li>
                            </ul>
                        </>
                    }
                />
            </ContentSection>

            <ContentSection background="white" className="pt-[5px] md:pt-4 md:pb-28" parentClassName="!py-0 !px-0">
                <div className="sg-bg-code-search-cta rounded-0 mx-auto flex w-full max-w-[941px] flex-col justify-between gap-x-8 bg-no-repeat py-16 px-6 shadow-cta md:items-center md:rounded-2xl md:bg-[lightgray] md:bg-[url('/code-search/cta-background.png')] md:bg-cover md:bg-right md:py-24 md:px-20 lg:flex-row">
                    <div className="max-w-[516px] pb-8 lg:pb-0">
                        <Heading size="h2" className="mb-6 !text-4xl text-white">
                            Try Sourcegraph on your code
                        </Heading>
                        <p className="mb-0 max-w-2xl text-lg text-gray-200">
                            Experience code intelligence with a free trial for you and your team, or search millions of
                            open source repositories.
                        </p>
                    </div>
                    <div className="flex w-full flex-col items-start justify-start gap-4 md:w-fit md:flex-row md:items-center md:justify-center lg:flex-col">
                        <Link
                            className="btn btn-inverted-primary min-w-fit bg-white px-6 text-center text-blurple-400 hover:bg-blurple-400 hover:text-white"
                            href="/contact/request-info"
                        >
                            Start for free
                        </Link>
                        <Link
                            className="btn btn-link min-w-fit px-0 text-center text-white hover:text-blurple-200  md:px-6 lg:px-4"
                            href="/demo"
                        >
                            Meet with a product expert
                        </Link>
                    </div>
                </div>
            </ContentSection>
        </Layout>
    )
}

export default Cloud
