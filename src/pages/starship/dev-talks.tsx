import { FunctionComponent } from 'react'

import {
    ContentSection,
    Heading,
    Layout,
    HeadingSection,
    RegisterEmailSection,
    FeatureUser,
    CallToAction,
} from '../../components'

const DevTalks: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Dev Talks',
            description:
                'Join us on March 30, 2023 for part two of Starship, where we’ll hear from the team building Sourcegraph’s code intelligence platform and devs using Sourcegraph for their own projects.',
            image: '/starship/dev-talks-og.png',
        }}
        headerColorTheme="purple"
        childrenClassName="sg-bg-gradient-starship"
        displayChildrenUnderNav={true}
    >
        <HeadingSection />

        <ContentSection className="max-w-[960px] text-center md:-mt-[87px]" parentClassName="!pt-0">
            <div className="mb-[83px] flex flex-col md:mb-[96px]">
                <Heading
                    size="h1"
                    className="!font-grotesk !text-[39px] !font-medium !leading-[55px] !tracking-[-0.16px] text-white md:!text-[52px] md:!leading-[73px]"
                >
                    Dev Talks
                </Heading>
                <Heading size="h3" as="h2" className="mt-6 font-normal text-gray-200 md:mt-4">
                    Join us on March 30, 2023 for part two of Starship, where we’ll hear from the team building
                    Sourcegraph’s code intelligence platform and devs using Sourcegraph for their own projects.
                </Heading>
            </div>

            <RegisterEmailSection />
        </ContentSection>

        <ContentSection
            parentClassName="!pt-0"
            className="mx-auto flex max-w-[1061px] flex-col justify-between gap-x-6 md:flex-row"
        >
            <div className="max-w-[491px]">
                <Heading
                    size="h3"
                    className="font-spaceMono text-base !text-[17px] leading-[42px] tracking-[0.5px] text-white"
                >
                    DEV TALKS
                </Heading>
                <p className="font-spaceMono text-base leading-[42px] tracking-[0.5px] text-blue-300">
                    MARCH 30, 10AM PT
                </p>
                <p className="mb-6 font-grotesk text-3xl leading-[42px] tracking-[-0.3px] text-white">
                    We’re entering a new era for software and how it’s built.
                </p>
                <p className="font-sans text-lg leading-[27px] tracking-[0px] text-gray-200">
                    Join Sourcegraph and some of the leaders building (and backing) the tools devs use today for a
                    series of talks around the intersection of AI and code intelligence.
                </p>
                <img
                    src="/starship/launch.svg"
                    alt="Launch Pill"
                    className="absolute top-[1470px] hidden blur-sm md:block"
                />
            </div>

            <div className="flex flex-col gap-y-9">
                <Heading size="h6" className="invisible text-white md:visible">
                    FEATURING
                </Heading>
                <FeatureUser
                    image="/starship/simonbarendse.png"
                    name="Simon Barendse"
                    title="Senior Software Engineer"
                    company="1Password"
                />
                <FeatureUser
                    image="/starship/bobbyholley.png"
                    name="Bobby Holley"
                    title="Distinguished Engineer"
                    company="Mozilla"
                />
                <FeatureUser
                    image="/starship/tjdevries.png"
                    name="TJ DeVries"
                    title="Software Engineer"
                    company="Sourcegraph"
                />
            </div>
        </ContentSection>

        <ContentSection>
            <CallToAction
                title="Try the Sourcegraph app on your code"
                description="Experience the power of Sourcegraph for free on your local machine."
                buttonText="Download the app"
                className="!mt-0"
                titleClassName="!font-sans font-semibold"
            />
        </ContentSection>
    </Layout>
)

export default DevTalks
