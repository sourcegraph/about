import { FunctionComponent } from 'react'

import { DotLottiePlayer } from '@dotlottie/react-player'
import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import Link from 'next/link'
import { MdOutlineSecurity, MdVpnKey, MdLock, MdDoNotDisturb } from 'react-icons/md'

import { Layout, Hero, ContentSection, Heading } from '../components'
import { breakpoints } from '../data/breakpoints'
import { buttonLocation, buttonStyle } from '../data/tracking'
import { useWindowWidth } from '../hooks/windowWidth'

const Cloud: FunctionComponent = () => {
    const windowWidth = useWindowWidth()
    const isMobile = windowWidth < breakpoints.sm
    const lgAndUp = windowWidth > breakpoints.lg

    return (
        <Layout
            meta={{
                title: 'Sourcegraph - Enterprise',
                description:
                    "Give your teams the ability to search, write and understand massive codebases through Sourcegraph's universal and secure Code Intelligence Platform.",
            }}
            className="bg-gray-50"
            hero={
                <div className="">
                    {!isMobile && (
                        <DotLottiePlayer
                            className="relative z-0"
                            src="https://lottie.host/07b21a4d-e532-47b7-ab01-7bd8faf4ba33/ORhWKPLwKI.lottie"
                            background="transparent"
                            speed={1}
                            direction={1}
                            autoplay={true}
                            loop={false}
                            renderer="svg"
                        />
                    )}
                    <Hero
                        variant="transparent"
                        className=" top-[96px] right-0 left-0 z-10  mx-auto flex items-center justify-center !pt-[122px] pb-8  text-center sm:absolute md:w-[750px] md:!pt-[170px] md:pb-[96px]"
                        title="Modern enterprises are powered by productive developers"
                        subtitle="Give your teams the ability to search, write and understand massive codebases through Sourcegraph's universal and secure Code Intelligence Platform."
                        centerContent={true}
                        cta={
                            <div className="mx-auto flex w-[356px] flex-col items-center justify-center gap-6 sm:flex sm:w-auto  sm:flex-row  md:gap-4">
                                <Link
                                    className="btn btn-primary w-full sm:w-auto"
                                    href="/contact/request-info"
                                    title="Contact us for a demo"
                                    data-button-style={buttonStyle.primary}
                                    data-button-location={buttonLocation}
                                    data-button-type="cta"
                                >
                                    Contact us for a demo
                                </Link>
                                <Link
                                    className="btn  w-full items-center text-violet-500 outline sm:w-auto"
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
            <ContentSection
                className=" mx-auto mt-0 flex flex-col items-center gap-12 pt-16  pb-16 text-center md:mt-[-135px] md:pb-[96px]"
                parentClassName="!py-0 md:px-[80px]"
            >
                <div className="flex flex-col items-center gap-6  text-center md:w-[615px]">
                    <h2>Used by 4/5 FAANG and 6/10 largest software companies in the world</h2>
                    <Link
                        href="https://sourcegraph.com/case-studies"
                        title="Cody"
                        className="btn p-0 text-center font-semibold  !-tracking-[0.25px]  text-violet-500 md:text-violet-500"
                    >
                        Read customer stories
                        <ChevronRightIcon className="!mb-0 ml-[10px] inline" />
                    </Link>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-[42px] ">
                    <img className="" src="/enterprise/cern-logo.svg" alt="Cody Product logo" />
                    <img className="" src="/enterprise/mercado-libre-logo.svg" alt="Cody Product logo" />
                    <img className="" src="/enterprise/SoFi-logo.svg" alt="Cody Product logo" />
                    <img className="" src="/enterprise/qualtrics-logo.svg" alt="Cody Product logo" />
                    <img className="" src="/enterprise/leidos-logo.svg" alt="Cody Product logo" />
                </div>
            </ContentSection>
            <ContentSection
                className="grid grid-cols-1 gap-6 md:grid-cols-2 md:flex-row"
                parentClassName="md:px-[80px] !py-0"
            >
                <div
                    className="flex h-[533px] flex-col justify-between px-0 py-16 md:px-10" // eslint-disable-next-line react/forbid-dom-props
                    style={{
                        backgroundImage: "url('/enterprise/grid.svg')",
                    }}
                >
                    <div className="flex flex-col gap-4">
                        <Heading size="h2">Improve velocity with faster code discovery and understanding</Heading>
                        <p className="mb-0">
                            Developers can find, navigate, and share code across entire codebases in seconds, increasing
                            development velocity and reducing time spent searching for answers.
                        </p>
                    </div>
                    <div className="flex flex-row justify-center gap-7">
                        <img
                            className="h-[130px] w-[130px] rounded-t-2xl"
                            src="/home/branded-icons/Code-Search-squircle.svg"
                            alt="Cody Product logo"
                        />
                        <img
                            className="h-[130px] w-[130px] rounded-t-2xl"
                            src="/home/branded-icons/cody-squircle.svg"
                            alt="Cody Product logo"
                        />
                    </div>
                </div>
                <div className="h-auto rounded-2xl border-1 border-gray-200 bg-white px-6 py-16 md:h-[531px] md:px-20">
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
            <ContentSection
                className="flex h-auto flex-col flex-col-reverse gap-[19px] overflow-hidden   rounded-2xl border-1 border-gray-200 bg-white md:h-[301px]  md:flex-row"
                parentClassName="md:px-[80px] py-16"
            >
                <div className="flex  flex-col px-6 py-10 md:py-16 md:pl-10">
                    <Heading size="h2" className="pb-4 pt-6">
                        Developers write code faster using Cody and the power of AI in their IDE
                    </Heading>
                </div>
                <div className="md:sg-developers sg-developers-mobile  relative z-10 h-full w-full">
                    {isMobile ? (
                        <img
                            src="enterprise/multiline-completion.svg"
                            alt=""
                            className=" relative h-[421px] w-[784px] pt-10"
                        />
                    ) : (
                        <img
                            className=" relative h-full w-full"
                            src="/home/multiline-completion.svg"
                            alt="Multiline Completion"
                        />
                    )}
                </div>
            </ContentSection>
            <ContentSection
                className="grid grid-cols-1 gap-8 rounded-2xl border-1  border-gray-200 bg-white py-16 px-6 md:grid-cols-2 md:flex-row md:gap-6 md:pl-16 md:pr-6"
                parentClassName="md:px-[80px] !py-0"
            >
                <div className="flex flex-row  rounded-2xl border-1 border-gray-200 bg-gray-50 px-6 py-16 md:min-h-[656px] md:items-end md:px-20">
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
                <div className=" ">
                    <div className="md:px-10">
                        <Heading size="h2" className="mb-4">
                            Complete large-scale migrations and refactors in hours rather than days
                        </Heading>
                        <p className="mb-4 text-lg md:mb-0 ">
                            Perform organization-wide migrations and upgrades across every repository and code host with
                            Batch Changes, and track migration progress with Code Insights dashboards.
                        </p>
                    </div>

                    {!isMobile ? (
                        <div className="lg:w-[558px]">
                            <img src="enterprise/graph.svg" alt="graph" className="relative -right-[40px] " />
                        </div>
                    ) : (
                        <img src="enterprise/mobile-graph.svg" alt="graph" className=" h-[344px] w-[408px] " />
                    )}
                </div>
            </ContentSection>
            <ContentSection
                className="flex flex-col gap-6 md:flex-row"
                parentClassName="md:px-[80px] md:!pb-[96px]  py-16"
            >
                <div className="md:pt-6 md:pl-16 md:pr-10">
                    <Heading size="h2" className="mb-4 pt-4 md:pt-0">
                        Track and resolve vulnerabilities quickly and with confidence
                    </Heading>
                    <p className="mb-[50px]">
                        Find all instances of vulnerabilities with Code Search, then use Batch Changes to replace
                        vulnerable code all at once. Plus, Code Insights lets you create dashboards to track instances
                        of vulnerabilities or bad code patterns over time.
                    </p>
                    <img src="enterprise/batch-change.svg" alt="code search" />
                </div>
                <div className="rounded-2xl border-1 border-gray-200 bg-white px-6 py-16 md:px-16">
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
            <ContentSection
                className="flex flex-col justify-between rounded-2xl border-1 border-gray-200  bg-violet-700 py-16 px-[56px] md:flex-row"
                parentClassName="md:px-[80px] !py-0 md:!pb-[96px] !pb-[64px]"
            >
                <Heading size="h2" className="mb-8 text-white md:mb-0">
                    Request a demo or start an enterprise trial
                </Heading>
                <div className=" flex flex-col items-center  gap-6 sm:flex sm:flex-row md:gap-4">
                    <Link
                        className="btn btn-inverted-primary w-full bg-white text-center md:w-auto"
                        href="/contact/request-info"
                        title="Contact us"
                        data-button-style={buttonStyle.primary}
                        data-button-location={buttonLocation}
                        data-button-type="cta"
                    >
                        Contact us
                    </Link>
                    <Link
                        className="btn w-full items-center text-center text-white outline md:w-auto"
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
            <ContentSection
                className="flex flex-col justify-between overflow-hidden  rounded-2xl  border-1 border-gray-200 bg-white px-6 md:flex-row md:px-16"
                parentClassName="md:px-[80px] !py-0"
            >
                <div className="pt-16 !pb-12 md:w-[481px] md:py-16">
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
                <div className=" flex justify-center gap-[37px] md:gap-[31.97px]">
                    <div className="relative bottom-[24px] flex  flex-col gap-[25.21px]">
                        <div className="flex h-[119px] w-[119px] justify-center rounded-[15px] border-1 border-gray-200 bg-gray-100 md:h-[132px] md:w-[132px]">
                            <img alt="md:w-[76px] w-[68px] md:h-[76px] w-[68px]" src="/enterprise/vs code.svg" />
                        </div>
                        <div className="flex h-[119px] w-[119px] justify-center rounded-[15px] border-1 border-gray-200 bg-gray-100 md:h-[132px] md:w-[132px]">
                            <img alt="md:w-[76px] w-[68px] md:h-[76px] w-[68px]" src="/enterprise/github.svg" />
                        </div>
                        <div className="flex h-[119px] w-[119px] justify-center rounded-[15px] border-1 border-gray-200 bg-gray-100 md:h-[132px] md:w-[132px]">
                            <img alt="md:w-[76px] w-[68px] md:h-[76px] w-[68px]" src="/enterprise/bitbucket.svg" />
                        </div>
                    </div>
                    <div className=" relative flex flex-col gap-[25px] md:top-[24px]">
                        <div className="flex h-[119px] w-[119px] justify-center rounded-[15px] border-1 border-gray-200 bg-gray-100 md:h-[132px] md:w-[132px]">
                            <img alt="md:w-[76px] w-[68px] md:h-[76px] w-[68px]" src="/enterprise/intellij.svg" />
                        </div>
                        <div className="flex h-[119px] w-[119px] justify-center rounded-[15px] border-1 border-gray-200 bg-gray-100 md:h-[132px] md:w-[132px]">
                            <img alt="md:w-[76px] w-[68px] md:h-[76px] w-[68px]" src="/enterprise/neovim.svg" />
                        </div>
                        <div className="flex h-[119px] w-[119px] justify-center rounded-[15px] border-1 border-gray-200 bg-gray-100 md:h-[132px] md:w-[132px]">
                            <img alt="md:w-[76px] w-[68px] md:h-[76px] w-[68px]" src="/enterprise/neovim2.svg" />
                        </div>
                    </div>
                    <div className="relative bottom-[24px] flex flex-col gap-[25px]">
                        <div className="flex h-[119px] w-[119px] justify-center rounded-[15px] border-1 border-gray-200 bg-gray-100 md:h-[132px] md:w-[132px]">
                            <img alt="w-full" src="/enterprise/gerrit.svg" />
                        </div>
                        <div className="flex h-[119px] w-[119px] justify-center rounded-[15px] border-1 border-gray-200 bg-gray-100 md:h-[132px] md:w-[132px]">
                            <img alt="md:w-[76px] w-[68px] md:h-[76px] w-[68px]" src="/enterprise/gitlab.svg" />
                        </div>
                        <div className="flex h-[119px] w-[119px] justify-center rounded-[15px] border-1 border-gray-200 bg-gray-100 md:h-[132px] md:w-[132px]">
                            <img alt="md:w-[76px] w-[68px] md:h-[76px] w-[68px]" src="/enterprise/perforce.svg" />
                        </div>
                    </div>
                </div>
            </ContentSection>
            <ContentSection
                className="grid grid-cols-1 gap-6 py-8 md:grid-cols-2 md:py-0"
                parentClassName="md:px-[80px]"
            >
                <div className="rounded-2xl border-1 border-gray-200 bg-violet-700 !py-16 px-6 text-white md:px-20">
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
                <div className="relative flex min-h-[700px] flex-col overflow-hidden rounded-2xl border-1 border-gray-200 pt-[71px]  pb-10 sm:min-h-[558px] md:py-[71px]">
                    <div className="flex flex-col gap-6 px-10 md:gap-4">
                        <Heading size="h6">cody</Heading>
                        <Heading size="h2">Choose from your favorite Large Language Models</Heading>
                        <p>
                            Cody, Sourcegraph’s AI coding assistant, lets you choose from multiple LLM options including
                            Anthropic Claude 2 and OpenAI GPT-4. You can even bring your own LLM key with Amazon Bedrock
                            and Azure OpenAI.
                        </p>
                    </div>
                    {!isMobile ? (
                        <div className="absolute bottom-6 -right-[100px] flex  gap-[21px] md:bottom-[71px] md:w-[731px]">
                            <div className="flex w-[129.562px] items-center justify-center  rounded-[15px] border-1 border-gray-200 bg-gray-100 md:h-[129.562px]">
                                <img alt="" src="/enterprise/ai.svg" className="h-[55.64px] w-[79.79px]" />
                            </div>
                            <div className="flex h-[129.562px] w-[129.562px] items-center justify-center rounded-[15px] border-1 border-gray-200 bg-gray-100">
                                <img alt="" src="/enterprise/open-ai.svg" className="h-[55.64px] w-[79.79px]" />
                            </div>
                            <div className="flex h-[129.562px] w-[129.562px] items-center  justify-center rounded-[15px] border-1 border-gray-200 bg-gray-100">
                                <img alt="" src="/enterprise/amazon-bedrock.svg" className="h-[55.64px] w-[79.79px]" />
                            </div>
                            <div className="flex h-[129.562px] w-[129.562px] items-center  justify-center rounded-[15px] border-1 border-gray-200 bg-gray-100">
                                <img alt="" src="/enterprise/microsoft-azure.svg" className="h-[55.64px] w-[79.79px]" />
                            </div>
                            <div className="flex h-[129.562px] w-[129.562px] items-center  justify-center rounded-[15px] border-1 border-gray-200 bg-gray-100">
                                <img alt="" src="/enterprise/ai.svg" className="h-[55.64px] w-[79.79px]" />
                            </div>
                        </div>
                    ) : (
                        <div className="absolute bottom-[40px] left-[40px] top-[350p] flex gap-[21px] pt-6">
                            <div className="flex h-[96px] w-[96px] items-center  justify-center rounded-[15px] border-1 border-gray-200 bg-gray-100">
                                <img alt="" src="/enterprise/microsoft-azure.svg" className="h-[46px] w-[46px]" />
                            </div>
                            <div className="flex h-[96px] w-[96px] items-center justify-center  rounded-[15px] border-1 border-gray-200 bg-gray-100 md:h-[129.562px]">
                                <img alt="" src="/enterprise/ai.svg" className="h-[46px] w-[46px]" />
                            </div>
                            <div className="flex h-[96px] w-[96px] items-center justify-center rounded-[15px] border-1 border-gray-200 bg-gray-100">
                                <img alt="" src="/enterprise/open-ai.svg" className="h-[46px] w-[46px]" />
                            </div>
                            <div className="flex h-[96px] w-[96px] items-center  justify-center rounded-[15px] border-1 border-gray-200 bg-gray-100">
                                <img alt="" src="/enterprise/amazon-bedrock.svg" className="h-[46px] w-[46px]" />
                            </div>
                        </div>
                    )}
                </div>
            </ContentSection>
            <ContentSection
                className="flex flex-col justify-between overflow-hidden rounded-2xl border-1 border-gray-200 bg-white py-10  px-6 md:flex-row md:pr-10 md:pl-16"
                parentClassName="md:px-[80px] md:!py-16 py-8"
            >
                <div className="flex flex-col justify-center md:w-[532px]">
                    <img src="/enterprise/code-graph-brand-icon.svg" alt="" className="mb-6 w-[48px]" />
                    <Heading size="h1" className="mb-4">
                        Scalable
                    </Heading>
                    <p className="mb-6 md:mb-0">
                        Leverage AI at any scale. Sourcegraph supports the world's largest codebases.
                    </p>
                </div>
                <div className="sg-scalable relative z-10">
                    <div className=" relative flex  flex-col gap-16 rounded-2xl border-1 border-gray-200 bg-white py-10 pl-10 pr-[89px]">
                        <Heading size="h3">
                            Customers run single-tenant Sourcegraph instances for codebases of epic size:
                        </Heading>
                        <div>
                            <p className="mb-0 text-[75px] font-semibold leading-[93.75px] -tracking-[0.25px] sm:text-[40px]">
                                8+
                            </p>
                            <Heading size="h3" className="!leading-[-93.75px]">
                                Terabytes of code @ finance industry customer
                            </Heading>
                        </div>
                        <div>
                            <p className="mb-0 text-[75px] font-semibold leading-[93.75px] -tracking-[0.25px] sm:text-[40px]">
                                100,000+
                            </p>
                            <Heading size="h3" className="!leading-[-93.75px]">
                                Repositories @ finance industry customer
                            </Heading>
                        </div>
                    </div>
                </div>
            </ContentSection>
            <ContentSection
                parentClassName="!py-0 md:px-[80px]"
                className="flex flex-col gap-16 rounded-2xl border-1 bg-violet-700 py-16 px-6 text-white md:flex-row md:gap-[160px] md:px-20"
            >
                <div className="flex flex-col gap-[70px] md:w-[511px]">
                    <img src="enterprise/nine.svg" className="w-[188px]" alt="" />
                    <p className="mb-0">
                        Nine’s Platform Engineering team saved hundreds of hours and thousands of dollars by using Code
                        Search and Batch Changes for their CI/CD refactor.
                    </p>
                </div>
                <div className="relative flex flex-col gap-16 md:w-[477px]">
                    <div>
                        <p className="mb-0 text-[75px] font-semibold leading-[93.75px]">$276K</p>
                        <Heading size="h3">Engineering time saved</Heading>
                    </div>
                    <div>
                        <p className="mb-0 text-[75px] font-semibold leading-[93.75px]">1,200 hours</p>
                        <Heading size="h3">Estimated annual time savings</Heading>
                    </div>
                    <div>
                        <Link
                            href="https://sourcegraph.com/case-studies/how-sourcegraph-transformed-nine-development-workflow"
                            title="Case study"
                            className="btn p-0  text-left font-semibold !-tracking-[0.25px] text-white  md:border-none  md:text-center "
                        >
                            Read the case study
                            <ChevronRightIcon className="!mb-0 ml-[10px] inline" />
                        </Link>
                    </div>
                </div>
            </ContentSection>
            <ContentSection
                className="flex flex-col py-0 md:gap-10"
                parentClassName="!py-0 md:!pt-[112px] !pt-8 md:px-[80px]"
            >
                <div className="flex flex-col gap-6 md:flex-row">
                    <div className="flex basis-1/3 flex-col gap-6 p-10">
                        <img src="enterprise/security-brand-icon.svg" className="w-[51px]" alt="" />
                        <Heading size="h1">Secure</Heading>
                    </div>
                    <div className="flex basis-1/3 flex-col gap-4 p-10">
                        <Heading size="h4">Deployment options for every team</Heading>
                        <p>
                            Choose Sourcegraph Cloud, our single-tenant cloud solution, or self-host Sourcegraph in your
                            preferred environment.
                        </p>
                    </div>
                    <div className="flex basis-1/3 flex-col gap-4 p-10">
                        <Heading size="h4">Admin usage analytics</Heading>
                        <p>
                            Admins can see anonymized, event-level usage analytics for each feature their teams are
                            using.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-6 md:flex-row md:gap-0">
                    <div className="flex basis-1/3 flex-col gap-4 p-10">
                        <Heading size="h4">Granular user permissions</Heading>
                        <p>
                            Sync repository permissions with GitHub, GitLab, Bitbucket Cloud, Gerrit, or Perforce.
                            Alternatively, set your own custom, repository-level permissions.
                        </p>
                    </div>
                    <div className="flex basis-1/3 flex-col gap-4 p-10">
                        <Heading size="h4">Authentication with SAML and code host OAuth</Heading>
                        <p>
                            Admins can choose from multiple user authentication options, including SAML or OAuth via
                            GitHub or GitLab.
                        </p>
                    </div>
                    <div className="flex basis-1/3 flex-col gap-4 p-10">
                        <Heading size="h4">SCIM user provisioning</Heading>
                        <p>Provision and de-provision users with SCIM for Okta and Azure Active Directory.</p>
                    </div>
                </div>
            </ContentSection>
            <ContentSection className="flex flex-col gap-6 md:flex-row" parentClassName="md:px-[80px] !py-0 md:!py-10">
                <div className=" flex justify-center rounded-2xl border-1 border-gray-200 py-16 px-6 md:!w-[417px] md:px-20">
                    <div className="flex !w-[278px] flex-col gap-16">
                        <div>
                            <p className=" mb-0 font-sans text-[57px] leading-[62px]">&lt;5 minutes</p>
                            <Heading size="h3">Time to find and fix instances of a vulnerability</Heading>
                        </div>
                        <div>
                            <p className="mb-0 font-sans text-[57px] leading-[62px]">&lt;4 days</p>
                            <Heading size="h3">Time to deliver Log4j vulnerability patches to customers</Heading>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-end rounded-2xl border-1 border-gray-200 bg-white py-16 px-20 ">
                    <div>
                        <img src="enterprise/nutanix.svg" alt="" className="mb-6 w-[180px]" />
                        <p className="mb-16">
                            Nutanix was able to find every instance of Log4j vulnerabilities in their large codebase and
                            ship codebase-wide fixes in less than a week
                        </p>
                        <div className="text-right">
                            <Link
                                href="https://sourcegraph.com/case-studies/how-sourcegraph-transformed-nine-development-workflow"
                                title="Case study"
                                className="btn flex-end p-0 text-center text-right font-semibold !-tracking-[0.25px] text-violet-500  md:mx-0 md:border-none  md:text-left "
                            >
                                Read the case study
                                <ChevronRightIcon className="!mb-0 ml-[10px] inline" />
                            </Link>
                        </div>
                    </div>
                </div>
            </ContentSection>
            <ContentSection
                className="flex flex-col gap-6 md:flex-row"
                parentClassName="!py-0 md:!pb-[96px] !pb-[64px] md:px-[80px]"
            >
                <div className="p-10">
                    <img src="/security/soc2.svg" alt="" className="mb-8 h-[60px] w-[60px]" />
                    <Heading size="h4">SOC 2 Type 2 compliance</Heading>
                    <p className="mb-0 mt-4">
                        Data privacy is a priority, and Sourcegraph has received a SOC 2 Type 2 report. See our
                        <Link
                            href="https://security.sourcegraph.com/"
                            title="security portal"
                            className="mx-[3px] text-black underline underline-offset-[3.55px] "
                        >
                            security portal
                        </Link>
                        for more information.
                    </p>
                </div>
                <div className="p-10">
                    <div className="mb-8 flex flex-row gap-10">
                        <img src="/security/gdpr.svg" alt="GDPR" className="h-[63px] w-[49px]" />
                        <img src="/security/ccpa.svg" className="h-[62px] w-[62px]" alt="CCPA" />
                    </div>
                    <Heading size="h4">GDPR + CCPA</Heading>
                    <p className="mb-0 mt-4">
                        Sourcegraph is compliant with the CCPA and operates in accordance with GDPR data protection
                        regulations.
                    </p>
                </div>
                <div className="p-10">
                    <img src="/enterprise/notes.svg" alt="" className="mb-8 h-[60px] w-[60px]" />
                    <Heading size="h4">Audit logs</Heading>
                    <p className="mb-0 mt-4">
                        Sourcegraph logs security and access events for security teams’ peace of mine.
                    </p>
                </div>
            </ContentSection>
            <ContentSection
                className="rounded-2xl border-1 border-gray-200 bg-white py-16 px-6 md:px-10"
                parentClassName="!py-0 md:px-[80px]"
            >
                <Heading size="h6" className="mb-4">
                    cody
                </Heading>
                <Heading size="h2" className="mb-10">
                    Enterprise-grade AI security and governance
                </Heading>
                <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-3 ">
                    <div className="flex flex-col gap-4 rounded-2xl border-1 border-gray-200 py-10 px-8">
                        <MdDoNotDisturb size={24} />
                        <Heading size="h4">Zero retention</Heading>
                        <p>
                            Our provided LLMs do not retain data from your requests for longer than the time it takes to
                            generate an output.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 rounded-2xl border-1 border-gray-200 py-10 px-8">
                        <MdVpnKey size={24} />
                        <Heading size="h4">You retain ownership</Heading>
                        <p>You retain ownership of all inputs and output generated by Cody.</p>
                    </div>
                    <div className="flex flex-col gap-4 rounded-2xl border-1 border-gray-200 py-10 px-8">
                        <MdOutlineSecurity size={24} />
                        <Heading size="h4">Uncapped indemnity</Heading>
                        <p>
                            We do not train models using data from Cody Enterprise users, so your code stays private to
                            you.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    <div className="col-span-1 flex flex-col flex-col-reverse justify-between  rounded-2xl border-1 border-gray-200 md:col-span-2 md:flex-row md:items-end ">
                        <div className=" pr-10">
                            <img alt="" src="/enterprise/screenshot.svg" className="  rounded-bl-lg" />
                        </div>
                        <div className="mt-10 mb-4 pl-10 pt-10 pr-10 md:my-10 md:w-[311px] md:py-10   md:pl-0 md:pb-10">
                            <div className="flex flex-col gap-4">
                                <Heading size="h2">Guardrails to catch licensed code</Heading>
                                <p className="mb-0">
                                    Sourcegraph automatically checks AI suggestions against open source code and blocks
                                    matches from being returned to users to prevent IP risk.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-4 rounded-2xl border-1 border-gray-200 py-10 px-8">
                            <MdLock size={24} />
                            <Heading size="h4">No model training with your data</Heading>
                            <p>
                                We do not train models using data from Cody Enterprise users, so your code stays private
                                to you.
                            </p>
                        </div>
                        <div className="flex items-start gap-4 rounded-2xl border-1 border-gray-200 bg-gray-100 py-10 px-8">
                            <img src="/enterprise/file-document-outline.svg" alt="" />
                            <Heading size="h5">To learn more, read our Cody security & legal whitepaper</Heading>
                        </div>
                    </div>
                </div>
            </ContentSection>

            <ContentSection
                className="flex flex-col justify-between gap-6 rounded-2xl border-1 border-gray-200 bg-violet-700 py-16 px-6 md:px-[56px]"
                parentClassName="md:px-[80px] !py-[96px]"
            >
                <Heading size="h2" className="text-white">
                    Contact us for a demo or to start an enterprise trial
                </Heading>
                <div className="items-center text-center">
                    <div className="flex w-[356px] flex-col gap-6 sm:flex-row md:!w-auto md:gap-4">
                        <Link
                            className="btn btn-inverted-primary w-full bg-white md:w-auto"
                            href="/contact/request-info"
                            title="Contact us"
                            data-button-style={buttonStyle.primary}
                            data-button-location={buttonLocation}
                            data-button-type="cta"
                        >
                            Contact us
                        </Link>
                        <Link
                            className="btn w-full items-center text-white outline md:w-auto"
                            href="/demo"
                            title="See Pricing"
                            data-button-style={buttonStyle.outline}
                            data-button-location={buttonLocation.hero}
                            data-button-type="cta"
                        >
                            See Pricing
                        </Link>
                    </div>
                </div>
            </ContentSection>
        </Layout>
    )
}

export default Cloud
