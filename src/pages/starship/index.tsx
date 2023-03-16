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
        meta={{
            image: '/starship/starship_og.png',
            title: 'Sourcegraph Starship: 3/23',
                description:
                    'Join us on March 23 for Starship and the release of Sourcegraph 5.0',
        }}
    >
        {/* Launch Countdown */}
        <div>
            <div className="flex justify-center">
                <img
                    src="/sourcegraph/sourcegraph-mark.svg"
                    className="h-[67.71px] w-[61.71px] md:h-24 md:w-24"
                    alt="Sourcegraph"
                />
                <p className="ml-[17px] font-grotesk text-[40px] font-light leading-[64px] tracking-[-1px] text-white md:ml-[22px] md:text-[86px] md:leading-[110px]">
                    5.0
                </p>
                <div className="ml-2 mt-2.5 h-[56.39px] w-[0.96px] bg-white sm:ml-5 md:h-[88px] md:w-[1.5px]" />
                <img
                    src="/starship/starship-blur.svg"
                    className="ml-2 h-[158px] w-[200px] sm:ml-5 sm:h-[209.9px] sm:w-[284px] md:ml-[31px] md:h-[327.57px] md:w-[442px]"
                    alt="Starship"
                />
            </div>

            <CountDown className="relative top-[-60px] px-[21px] md:top-[-183px]" launchDate="2023-03-23T17:00:00Z" />
        </div>

        {/* Event Leads */}
        <ContentSection className="max-w-[960px] text-center md:-mt-[87px]" parentClassName="!pt-0">
            <div className="mb-[83px] flex flex-col md:mb-[96px]">
                <Heading
                    size="h1"
                    className="!font-grotesk !text-[39px] !font-medium !leading-[55px] !tracking-[-1px] text-white md:!text-[52px] md:!leading-[73px]"
                >
                    Code intelligence + AI = 🤯
                </Heading>
                <Heading size="h3" className="mt-6 font-normal text-gray-200 md:mt-4">
                    Join us on March 23 for our next Starship launch event, where we’ll unveil the next evolution
                    of Sourcegraph’s code intelligence platform.
                </Heading>
            </div>

            <div className="flex-col">
                <Heading size="h4" className="text-white">
                    Register for the Starship event:
                </Heading>

                <div className={classNames('mx-auto mt-6 md:max-w-[491px] md:px-10', styles.container)}>
                    <HubSpotForm
                        formId="93419890-2b5e-4109-ad13-0fd2ee0c1607"
                        inlineMessage="Thanks for registering for Starship! You will receive event updates and product announcements from Sourcegraph in your email."
                    />
                </div>
            </div>
        </ContentSection>

        <ContentSection
            parentClassName="!py-0"
            className="mx-auto flex max-w-[1061px] flex-col justify-between md:flex-row"
        >
            <div>
                <p className="text-left font-spaceMono text-base leading-[42px] tracking-[2px] text-white md:max-w-[491px]">
                    STARSHIP TALKS
                </p>
                <p className="text-left font-spaceMono text-base leading-[42px] tracking-[2px] text-blue-300 md:max-w-[491px]">
                    MARCH 23, 10AM - 12PM PT
                </p>
                <p className="text-left font-grotesk text-3xl leading-[42px] tracking-[-1px] text-white md:max-w-[491px]">
                    We’re entering a new era for software and how it’s built
                </p>
                <p className="text-left font-sans text-base leading-[24px] tracking-[0px] text-gray-200 md:max-w-[491px]">
                Join Sourcegraph and some of the leaders building (and backing) the tools devs use today for a series of 
                talks around the intersection of AI and code intelligence.
                </p>
                <img src="/starship/launch.svg" alt="Launch Pill" className="mt-[115px] hidden blur-sm md:block" />
            </div>

            <div className="flex flex-col gap-y-9">
                <Heading size="h6" className="invisible text-white md:visible">
                    FEATURING
                </Heading>
                <FeatureUser image="/starship/davidsacks.png" name="David Sacks" title="Founder & Partner" company="Craft Ventures" />
                <FeatureUser image="/starship/simonmarlow.png" name="Simon Marlow" title="Code Intelligence" company="Meta" />
                <FeatureUser image="/starship/ericabrescia.png" name="Erica Brescia" title="Managing Director" company="Redpoint Ventures" />
            </div>
        </ContentSection>

        <ContentSection
            parentClassName="!py-0"
            className="mx-auto flex max-w-[1061px] flex-col justify-between md:flex-row"
        >
            
            <div>
                <p className="text-left font-spaceMono text-base leading-[42px] tracking-[2px] text-white md:max-w-[491px]">
                    DEV TALKS
                </p>
                <p className="text-left font-spaceMono text-base leading-[42px] tracking-[2px] text-blue-300 md:max-w-[491px]">
                    MARCH 30, 9AM - 11AM PT
                </p>
                <p className="text-left font-grotesk text-3xl leading-[42px] tracking-[-1px] text-white md:max-w-[491px]">
                Explore the current state and future of code intelligence tools
                </p>
                <p className="text-left font-sans text-base leading-[24px] tracking-[0px] text-gray-200 md:max-w-[491px]">
                Engineers building innovative developer tools—including 1Password, Neovim, Mozilla, and the Rust programming language—will share insights into the power of code intelligence and how it is transforming the developer experience.
                </p>
                <img src="/starship/launch.svg" alt="Launch Pill" className="mt-[115px] hidden blur-sm md:block" />
            </div>

            <div className="flex flex-col gap-y-9">
                <Heading size="h6" className="invisible text-white md:visible">
                    FEATURING
                </Heading>
                <FeatureUser image="/starship/simonbarendse.png" name="Simon Barendse" title="Senior Software Engineer" company="1Password" />
                <FeatureUser image="/starship/bobbyholley.png" name="Bobby Holley" title="Distinguished Engineer" company="Mozilla" />
                <FeatureUser image="/starship/tjdevries.png" name="TJ DeVries" title="Software Engineer" company="Sourcegraph" />
            </div>

        </ContentSection>

        {/* Launch Features */}
        <ContentSection parentClassName="md:!py-0 md:-mt-3">
            <Heading size="h6" className="text-center text-2xl	 font-normal text-white md:font-spaceMono">
                WHAT WE’RE SHIPPING
            </Heading>

            <TwoColWithImage
                title="Cody AI"
                description="Code search helps engineers quickly understand and navigate large codebases. But what if you could have a senior engineer as a personal assistant, who can search and read your codebase to find answers to your questions? Cody, Sourcegraph’s new AI coding assistant, will do just that."
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
                className="mt-[78px] hidden"
            />

            <TwoColWithImage
                title="Support for enterprise scale"
                description="Sourcegraph’s code intelligence platform helps small and large software teams find and fix code everyday. With Sourcegraph 5.0, we’re improving our platform to meet the demands of even the world’s largest companies."
                image="/starship/mid-page-launch-pills.svg"
                className="mt-[78px]"
            />
        </ContentSection>

        {/* CTA */}
        <ContentSection parentClassName="relative !pt-0 !px-0" className="flex flex-col items-center text-white">
            <Heading
                size="h2"
                className="max-w-[728px] px-sm text-center !font-grotesk !text-4xl font-medium !tracking-[-1px]"
            >
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
