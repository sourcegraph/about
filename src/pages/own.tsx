import { FunctionComponent } from 'react'

import classNames from 'classnames'
import Link from 'next/link'

import { Badge, ContentSection, FeatureRoadMap, Layout } from '../components'
import { MeetWithProductExpertButton } from '../components/cta/MeetWithProductExpertButton'
import { buttonLocation } from '../data/tracking'
import { TelemetryProps } from '../telemetry'

interface OwnContentProps {
    title: string
    description: string
    linkText?: string
    link?: string
    className?: string
}

const roadMapSteps = [
    {
        description: 'Ingest CODEOWNERS or ownership data from in-house systems (API)',
        completed: true,
    },
    {
        description: 'Teams in Sourcegraph!',
        completed: true,
    },
    {
        description: 'Search for all teammates that own code in scope of a Sourcegraph query',
        completed: true,
    },
    {
        description: 'Automatically infer ownership for 99% of your codebase based on codebase signals',
        completed: false,
    },
    {
        description: 'Who’s accountable? Who’s knowledgeable?',
        completed: false,
    },
    {
        description: 'Code ownership in Batch Changes, Insights, and more',
        completed: false,
    },
]

const OwnPage: FunctionComponent<TelemetryProps> = ({ telemetryRecorder }) => (
    <Layout
        meta={{
            title: 'Code Ownership',
            description:
                'Evergreen code ownership across code hosts, powering Code Search, Batch Changes, and Insights.',
            image: 'https://sourcegraph.com/own/og-own.png',
        }}
        headerColorTheme="purple"
        childrenClassName="sg-bg-gradient-own"
        displayChildrenUnderNav={true}
    >
        {/* Hero Section */}
        <ContentSection
            parentClassName="!py-0 overflow-x-clip"
            className="relative grid grid-cols-1 items-center gap-x-24 md:grid-cols-2 md:flex-row"
        >
            <div className="md:max-w-[597px]">
                <div className="flex gap-x-2">
                    <h6 className="text-white">SOURCEGRAPH OWN</h6>
                    <Badge size="small" text="Experimental" color="dark-blue" />
                </div>
                <h1 className="mt-2 text-white">100% code ownership coverage, now</h1>
                <h3 className="mt-6 text-gray-200">
                    Evergreen code ownership across code hosts, powering Code Search, Batch Changes, and Insights.
                </h3>
                <div className="mt-8 flex flex-row gap-x-4">
                    <Link
                        href="https://sourcegraph.com/docs/own"
                        title="Documentation"
                        className="btn btn-inverted-primary"
                    >
                        Documentation
                    </Link>
                    <MeetWithProductExpertButton
                        buttonClassName="text-white border border-white"
                        buttonLocation={buttonLocation.hero}
                    />
                </div>
            </div>
            <img
                src="/own/own-illustration.svg"
                alt="Own Illustration"
                className="h-540px absolute mt-20 hidden max-h-[540px] w-[60%] md:left-[460px] md:block lg:left-[600px]"
            />
        </ContentSection>

        <ContentSection className="grid grid-cols-1 items-center gap-10 gap-x-24 md:mt-24 md:grid-cols-2 md:flex-row">
            <OwnContent
                title="Resolve incidents and security vulnerabilities faster"
                description="Search for vulnerable or outdated code patterns and reach out to the owners in seconds. Escalate in one click. Don’t waste time emailing around to find who can help. Fast collaboration, fast remediation."
            />
            <div>
                <video
                    className="mx-auto w-full max-w-[577px] rounded-[5px] bg-gray-300"
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    playsInline={true}
                    controls={false}
                    data-cookieconsent="ignore"
                    onPlay={() =>
                        telemetryRecorder.recordEvent('video', 'play', {
                            metadata: { video: 1 },
                            privateMetadata: { title: 'Own vulnerabilities' },
                        })
                    }
                >
                    <source
                        type="video/webm"
                        src="https://sourcegraphstatic.com/own-landing-page-3.webm"
                        data-cookieconsent="ignore"
                    />
                    <source
                        type="video/mp4"
                        src="https://sourcegraphstatic.com/own-landing-page-3.mp4"
                        data-cookieconsent="ignore"
                    />
                </video>
            </div>
        </ContentSection>

        <ContentSection className="grid grid-cols-1 items-center gap-10 gap-x-24 md:grid-cols-2 md:flex-row">
            <div className="order-last md:order-first">
                <video
                    className="mx-auto w-full max-w-[577px] rounded-[5px] bg-gray-300"
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    playsInline={true}
                    controls={false}
                    data-cookieconsent="ignore"
                    onPlay={() =>
                        telemetryRecorder.recordEvent('video', 'play', {
                            metadata: { video: 2 },
                            privateMetadata: { title: 'Own knowledge sharing' },
                        })
                    }
                >
                    <source
                        type="video/webm"
                        src="https://sourcegraphstatic.com/own-landing-page-2.webm"
                        data-cookieconsent="ignore"
                    />
                    <source
                        type="video/mp4"
                        src="https://sourcegraphstatic.com/own-landing-page-2.mp4"
                        data-cookieconsent="ignore"
                    />
                </video>
            </div>
            <OwnContent
                title="Speed up knowledge sharing and daily work"
                description="CODEOWNERS alone is not enough, and mapping a single developer to each file is too simplistic for many use cases. Own can tell you both who’s accountable for code and who knows about it. Know who to go to for permission, and who to go to for questions."
            />
        </ContentSection>

        <ContentSection className="grid grid-cols-1 gap-10 gap-x-24 md:grid-cols-2 md:flex-row" parentClassName="!pb-0">
            <OwnContent
                title="Own is currently an experimental feature, but we have a big vision for code ownership."
                description="We’d love your feedback on Own. You can turn it on using the documentation below, or contact us to get a demo and learn more about our roadmap."
                linkText="Read more about our vision for code ownership."
                link="https://sourcegraph.com/blog/our-vision-for-code-ownership"
            />

            <div>
                <FeatureRoadMap steps={roadMapSteps} />

                <h5 className="ml-6 text-white">
                    Have a feature request?{' '}
                    <Link
                        className="text-white underline"
                        href="https://github.com/sourcegraph/sourcegraph/discussions/48721"
                        target="_blank"
                    >
                        Let us know!
                    </Link>
                </h5>
            </div>
        </ContentSection>

        <ContentSection className="flex flex-col items-center" parentClassName="mt-12 mb-4">
            <h2 className="mb-4 !text-[36px] text-white">Try Sourcegraph Own</h2>

            <p className="mb-0 text-lg text-gray-200">Available now as an experimental feature!</p>
            <div className="mt-8 flex flex-row gap-x-4">
                <Link
                    href="https://sourcegraph.com/docs/own"
                    title="Documentation"
                    className="btn btn-inverted-primary"
                    target="_blank"
                >
                    Documentation
                </Link>
                <MeetWithProductExpertButton
                    buttonClassName="text-white border border-white"
                    buttonLocation={buttonLocation.body}
                />
            </div>
        </ContentSection>
    </Layout>
)

const OwnContent: FunctionComponent<OwnContentProps> = ({ title, description, link = '', linkText, className }) => (
    <div className={classNames(className, 'md:max-w-[572px]')}>
        {title && <h4 className="text-white">{title}</h4>}
        {description && <p className="mt-[30px] text-lg text-gray-200">{description}</p>}
        {linkText && (
            <Link href={link} className="mt-[30px] text-lg text-gray-200 underline">
                {linkText}
            </Link>
        )}
    </div>
)

export default OwnPage
