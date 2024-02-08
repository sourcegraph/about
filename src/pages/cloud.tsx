import { FunctionComponent } from 'react'

// import '@dotlottie/player-component';
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
                <div className="flex flex-wrap gap-[42px] md:flex-nowrap">
                    <img className="w-full" src="/enterprise/cern-logo.svg" alt="Cody Product logo" />
                    <img className="w-full" src="/enterprise/mercado-libre-logo.svg" alt="Cody Product logo" />
                    <img className="w-full" src="/enterprise/SoFi-logo.svg" alt="Cody Product logo" />
                    <img className="w-full" src="/enterprise/qualtrics-logo.svg" alt="Cody Product logo" />
                    <img className="w-full" src="/enterprise/leidos-logo.svg" alt="Cody Product logo" />
                </div>
            </ContentSection>
            <ContentSection className="flex flex-col gap-6 md:flex-row">
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
            <ContentSection className="  mb-8 flex h-auto gap-[19px]  overflow-hidden rounded-2xl border-1 border-gray-200 bg-white  md:h-[301px]">
                <div className="flex  flex-col py-16 pl-10">
                    <Heading size="h2" className="pb-4 pt-6">
                        Developers write code faster using Cody and the power of AI in their IDE
                    </Heading>
                </div>
                {!isMobile && (
                    <div className="sg-developers relative relative z-10 h-full w-full">
                        <img
                            className=" relative h-full w-full"
                            src="/home/multiline-completion.svg"
                            alt="Multiline Completion"
                        />
                    </div>
                )}
            </ContentSection>
            <ContentSection className="flex flex-col gap-6 rounded-2xl border-1 border-gray-200 bg-white py-16 pl-16 pr-6 md:max-h-[784px] md:flex-row">
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
                <div className="relative">
                    <div className="px-10">
                        <Heading size="h2" className="mb-4">
                            Complete large-scale migrations and refactors in hours rather than days
                        </Heading>
                        <p className="mb-0 w-[349px]">
                            Perform organization-wide migrations and upgrades across every repository and code host with
                            Batch Changes, and track migration progress with Code Insights dashboards.
                        </p>
                    </div>
                    <img src="enterprise/graph.svg" alt="graph" className="h-[470px] w-[558px]" />
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
            <ContentSection className="flex flex-row justify-between overflow-hidden  rounded-2xl border-1 border-gray-200 bg-white px-16">
                <div className="w-[481px] py-16">
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
                <div className=" grid grid-cols-3 gap-[31.97px]">
                    <div className="relative bottom-[24px] flex  flex-col gap-[25.21px]">
                        <div className="flex h-[132px] w-[132px] justify-center rounded-[15px] border-1 border-gray-200 bg-gray-100">
                            <img alt="" src="/enterprise/vs code.svg" />
                        </div>
                        <div className="flex h-[132px] w-[132px] justify-center rounded-[15px] border-1 border-gray-200 bg-gray-100">
                            <img alt="" src="/enterprise/github.svg" />
                        </div>
                        <div className="flex h-[132px] w-[132px] justify-center rounded-[15px] border-1 border-gray-200 bg-gray-100">
                            <img alt="" src="/enterprise/bitbucket.svg" />
                        </div>
                    </div>
                    <div className=" relative top-[24px] flex flex-col gap-[25px]">
                        <div className="flex h-[132px] w-[132px] justify-center rounded-[15px] border-1 border-gray-200 bg-gray-100">
                            <img alt="" src="/enterprise/intellij.svg" />
                        </div>
                        <div className="flex h-[132px] w-[132px] justify-center rounded-[15px] border-1 border-gray-200 bg-gray-100">
                            <img alt="" src="/enterprise/neovim.svg" />
                        </div>
                        <div className="flex h-[132px] w-[132px] justify-center rounded-[15px] border-1 border-gray-200 bg-gray-100">
                            <img alt="" src="/enterprise/neovim2.svg" />
                        </div>
                    </div>
                    <div className="relative bottom-[24px] flex flex-col gap-[25px]">
                        <div className="flex h-[132px] w-[132px] justify-center rounded-[15px] border-1 border-gray-200 bg-gray-100">
                            <img alt="" src="/enterprise/gerrit.svg" />
                        </div>
                        <div className="flex h-[132px] w-[132px] justify-center rounded-[15px] border-1 border-gray-200 bg-gray-100">
                            <img alt="" src="/enterprise/gitlab.svg" />
                        </div>
                        <div className="flex h-[132px] w-[132px] justify-center rounded-[15px] border-1 border-gray-200 bg-gray-100">
                            <img alt="" src="/enterprise/perforce.svg" />
                        </div>
                    </div>
                </div>
            </ContentSection>
            <ContentSection className="grid grid-cols-2 gap-6">
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
                <div className="relative flex h-[556px] flex-col overflow-hidden rounded-2xl border-1 border-gray-200  py-[71px]">
                    <div className="flex flex-col gap-4 px-10">
                        <Heading size="h6">cody</Heading>
                        <Heading size="h2">Choose from your favorite Large Language Models</Heading>
                        <p>
                            Cody, Sourcegraph’s AI coding assistant, lets you choose from multiple LLM options including
                            Anthropic Claude 2 and OpenAI GPT-4. You can even bring your own LLM key with Amazon Bedrock
                            and Azure OpenAI.
                        </p>
                    </div>
                    <div className="absolute bottom-[71px] -right-[100px]  flex w-[731px] gap-[21px]">
                        <div className="flex h-[129.562px] w-[129.562px] items-center  justify-center rounded-[15px] border-1 border-gray-200 bg-gray-100">
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
                </div>
            </ContentSection>
            <ContentSection className="flex flex-row justify-between overflow-hidden rounded-2xl border-1 border-gray-200 bg-white  py-10 pr-10 pl-16">
                <div className="flex flex-col justify-center md:w-[532px]">
                    <img src="/enterprise/code-graph-brand-icon.svg" alt="" className="mb-6 w-[48px]" />
                    <Heading size="h1" className="mb-4">
                        Scalable
                    </Heading>
                    <p className="mb-0">
                        Leverage AI at any scale. Sourcegraph supports the world's largest codebases.
                    </p>
                </div>
                <div className="sg-scalable relative z-10">
                    <div className=" relative flex  flex-col gap-16 rounded-2xl border-1 border-gray-200 bg-white py-10 pl-10 pr-[89px]  md:w-[477px]">
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
                </div>
            </ContentSection>
            <ContentSection
                parentClassName="!py-0"
                className="flex flex-row gap-[160px] rounded-2xl border-1 bg-violet-700 py-16 px-20 text-white"
            >
                <div className="flex w-[511px] flex-col gap-[70px]">
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
                            className="btn mx-6 p-0 px-5 py-3 text-center font-semibold !-tracking-[0.25px] text-white md:mx-0  md:border-none md:px-0 md:pb-0 md:pt-0 md:text-left "
                        >
                            Read the case study
                            <ChevronRightIcon className="!mb-0 ml-[10px] inline" />
                        </Link>
                    </div>
                </div>
            </ContentSection>
            <ContentSection className="flex flex-col gap-10 py-0" parentClassName="!py-0 !pt-[120px]">
                <div className="flex flex-row gap-6">
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
                <div className="flex flex-row">
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
            <ContentSection className="flex flex-row gap-6">
                <div className="!md:w-[417px] flex flex-col gap-16 rounded-2xl border-1 border-gray-200 py-16 px-20">
                    <div>
                        <p className=" mb-0 font-sans text-[57px] leading-[62px]">&lt;5 minutes</p>
                        <Heading size="h3">Time to find and fix instances of a vulnerability</Heading>
                    </div>
                    <div>
                        <p className="mb-0 font-sans text-[57px] leading-[62px]">&lt;4 days</p>
                        <Heading size="h3">Time to deliver Log4j vulnerability patches to customers</Heading>
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
                                className="btn flex-end mx-6 p-0 px-5 py-3  text-center text-right font-semibold !-tracking-[0.25px] text-violet-500 md:mx-0  md:border-none md:px-0 md:pb-0 md:pt-0 md:text-left "
                            >
                                Read the case study
                                <ChevronRightIcon className="!mb-0 ml-[10px] inline" />
                            </Link>
                        </div>
                    </div>
                </div>
            </ContentSection>
            <ContentSection className="flex flex-col md:flex-row" parentClassName="!py-0 !pb-[96px]">
                <div className="p-10">
                    <img src="/security/soc2.svg" alt="" className="h-[60px] w-[60px]" />
                    <Heading size="h4">SOC 2 Type 2 compliance</Heading>
                    <p>
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
                    <div className="flex flex-row gap-10">
                        <img src="/security/gdpr.svg" alt="GDPR" className="h-[63px] w-[49px]" />
                        <img src="/security/ccpa.svg" className="h-[62px] w-[62px]" alt="CCPA" />
                    </div>
                    <Heading size="h4">GDPR + CCPA</Heading>
                    <p>
                        Sourcegraph is compliant with the CCPA and operates in accordance with GDPR data protection
                        regulations.
                    </p>
                </div>
                <div className="p-10">
                    <img src="/enterprise/notes.svg" alt="" className="h-[60px] w-[60px]" />
                    <Heading size="h4">Audit logs</Heading>
                    <p>Sourcegraph logs security and access events for security teams’ peace of mine.</p>
                </div>
            </ContentSection>
            <ContentSection
                className="rounded-2xl border-1 border-gray-200 bg-white py-16 px-10"
                parentClassName="!py-0"
            >
                <Heading size="h6" className="mb-4">
                    cody
                </Heading>
                <Heading size="h2" className="mb-10">
                    Enterprise-grade AI security and governance
                </Heading>
                <div className="mb-6 grid grid-cols-3 gap-6 ">
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
                <div className="grid grid-cols-3 gap-6">
                    <div className=" col-span-2 flex flex-row justify-between rounded-2xl border-1 border-gray-200 ">
                        <div className="">
                            <div className="w-[411px]">
                                <img alt="" src="/enterprise/screenshot.svg" className="w-full " />
                            </div>
                        </div>
                        <div className=" py-10">
                            <div className="!w-[311px]">
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
        </Layout>
    )
}

export default Cloud
