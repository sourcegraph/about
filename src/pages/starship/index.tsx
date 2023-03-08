import { FunctionComponent } from 'react'

import classNames from 'classnames'

import {
    Heading,
    Layout,
    FeatureUser,
    TwoColWithImage,
    TwoRowWithImage,
    CountDown,
    CustomerLogos,
    StarshipPageCallToAction,
    HubSpotForm,
    ContentSection,
} from '../../components'

import styles from './Starship.module.scss'

const Starship: FunctionComponent = () => (
    <Layout
        headerColorTheme="purple"
        childrenClassName="sg-bg-gradient-starship"
        displayChildrenUnderNav={true}
    >
        {/* Launch Countdown */}
        <div>
            <div className="flex justify-center">
                <img
                    src="/sourcegraph/sourcegraph-mark.svg"
                    className="h-[67.71px] w-[61.71px] md:h-24 md:w-24"
                    alt="Sourcegraph"
                />
                <p className="ml-[17px] font-grotesk text-[40px] font-light leading-[64px] text-white  md:ml-[22px] md:text-[86px] md:leading-[110px]">
                    5.0
                </p>
                <div className="ml-2 mt-2.5 h-[56.39px] w-[0.96px] bg-white sm:ml-5 md:h-[88px] md:w-[1.5px]" />
                <img
                    src="/starship/starship-blur.svg"
                    className="ml-2 h-[158px] w-[200px] sm:ml-5 sm:h-[209.9px] sm:w-[284px] md:ml-[31px] md:h-[327.57px] md:w-[442px]"
                    alt="Starship"
                />
            </div>

            <CountDown className="relative top-[-60px] px-[21px] md:top-[-183px]" launchDate="2023-03-23T13:00:00Z" />
        </div>

        {/* Event Leads */}
        <ContentSection className="max-w-[960px] text-center" parentClassName="!pt-0">
            <div className="mb-[83px] flex flex-col md:mb-[96px]">
                <Heading
                    size="h1"
                    className="!md:text-[52px] !md:leading-[73px] !text-[39px] !font-medium !leading-[55px] text-white md:!font-grotesk"
                >
                    Code intelligence + AI = 🤯
                </Heading>
                <Heading size="h3" className="mt-6 font-normal text-white md:mt-4">
                    Join us on March 23, 2023 for our next Starship launch event, where we’ll unveil the next evolution
                    of Sourcegraph’s code intelligence platform.
                </Heading>
            </div>

            <div className="flex-col">
                <Heading size="h4" className="text-white">
                    Register for the Starship event:
                </Heading>

                <div className={classNames('mt-6 px-10', styles.container)}>
                    <HubSpotForm formId="93419890-2b5e-4109-ad13-0fd2ee0c1607" />
                </div>

                <p className="mt-4 px-[49px] text-sm text-gray-300">
                    We will send you event reminders and announcements of what launched at Starship.
                </p>
            </div>
        </ContentSection>

        <ContentSection
            parentClassName="!py-0"
            className="mx-auto flex max-w-[1061px] flex-col justify-between md:flex-row"
        >
            <div>
                <p className="text-left font-grotesk text-3xl leading-[42px] text-white md:max-w-[491px]">
                    Lorem ipsum about the talks and featured speakers. It is about 1-2 concise sentences long.
                </p>
                <img src="/starship/launch.svg" alt="Launch Pill" className="mt-[115px] hidden blur-sm md:block" />
            </div>

            <div className="flex flex-col gap-y-9">
                <Heading size="h6" className="invisible text-white md:visible">
                    FEATURING
                </Heading>
                <FeatureUser image="/starship/user.png" name="David Sacks" title="Title" company="Company" />
                <FeatureUser image="/starship/user.png" name="Simon Marlow" title="Software Engineer" company="Meta" />
                <FeatureUser image="/starship/user.png" name="Dario Amodei" title="CEO" company="Anthropic" />
            </div>
        </ContentSection>

        {/* Launch Features */}
        <ContentSection parentClassName="md:!py-0 md:-mt-3">
            <Heading
                size="h6"
                className="text-center text-[21px] font-normal leading-[29px] text-white md:font-spaceMono"
            >
                WHAT WE’RE SHIPPING
            </Heading>

            <TwoColWithImage
                title="Cody AI"
                description="Code search helps engineers quickly understand and navigate large codebase. But what if you could have a senior engineer as a personal assistant, who can search and read your codebase to find answers to your questions? Cody, Sourcegraph’s new AI coding assistant, will do just that."
                image="/starship/cody-illustration.svg"
                className="pt-3xl md:pt-5xl"
            />

            <TwoRowWithImage
                title="Code ownership"
                description="Understanding who owns which parts of a codebase is a common challenge among large and growing software teams. Knowing who to talk to when proposing a change to code or who to contact to help during a service outage is difficult. Sourcegraph is solving this problem with Sourcegraph Own."
                image="/starship/own-illustration.svg"
                className="mt-16 md:mt-24"
            />

            <TwoRowWithImage
                title="Sourcegraph App"
                description="We’re releasing a lightweight, single-binary version of Sourcegraph to make running a personal Sourcegraph instance on your local machine more powerful and easier than ever."
                image="/starship/starship-app.svg"
                className="mt-[64px] md:mt-[96px]"
            />

            <TwoColWithImage
                title="Sourcegraph Sentinel"
                description="Take our new Software Composition Analysis (SCA) tool for a spin to see how it lets you monitor, prioritize, and fix vulnerable open source dependencies."
                image="/starship/sentinel-illustration.svg"
                className="mt-[78px]"
            />

            <TwoColWithImage
                title="Support for enterprise scale"
                description="Sourcegraph’s code intelligence platform helps small and large software teams find and fix code everyday. With Sourcegraph 4.6, we’re improving our platform to meet the demands of even the world’s largest companies."
                image="/starship/mid-page-launch-pills.svg"
                className="mt-[78px]"
            />
        </ContentSection>

        {/* CTA */}
        <ContentSection parentClassName="relative !pt-0 !px-0" className="flex flex-col items-center text-white">
            <Heading size="h2" className="max-w-[728px] font-medium	px-sm text-center !font-grotesk md:mb-4">
                Over 1.8M engineers use Sourcegraph to build software you rely on
            </Heading>

            <CustomerLogos dark={true} monochrome={true} className="-px-sm !bg-transparent md:pb-5xl" />

            <StarshipPageCallToAction
                title="Try Sourcegraph App on your code"
                description="Experience the power of Sourcegraph for free on your local machine."
                buttonText="Try App"
            />

            <img
                className="absolute hidden h-[280px] lg:left-[8%] lg:bottom-[160px] lg:block 2xl:left-[21%]"
                src="/backgrounds/background-launch-pill.svg"
                alt="Starship"
            />
            <img
                className="absolute hidden h-[640px] lg:-bottom-[390px] lg:left-[0] lg:block xl:left-[2%] xl:-bottom-[390px] 2xl:left-[16%]"
                src="/backgrounds/midground-launch-pill.svg"
                alt="Starship"
            />
            <img
                className="absolute hidden h-[800px] lg:-bottom-[290px] lg:right-[0] lg:block xl:right-[2%] xl:-bottom-[390px] 2xl:right-[14%]"
                src="/backgrounds/foreground-launch-pill.svg"
                alt="Starship"
            />
        </ContentSection>
    </Layout>
)

export default Starship
