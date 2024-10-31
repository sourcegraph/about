import { FunctionComponent, ReactSVG } from 'react'

import { Merge } from 'lucide-react'
import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import Link from 'next/link'

import { ContentSection, Hero, Layout, Tabs, TwoColumnSection, Video } from '../components'
import BatchCodeHighlighter from '../components/batch-changes/BatchCodeHighlighter'
import { LogoGrid } from '../components/cody/LogoGrid'
import { ContactUsCta } from '../components/cta/ContactUsCta'
import { StandardCallToAction } from '../components/cta/StandardCallToAction'
import { Icon } from '../components/icon'
import TwoColumnTestimonialCard from '../components/TwoColumnTestimonialCard'
import { buttonLocation } from '../data/tracking'
import { TelemetryProps } from '../telemetry'

const batchChangesIconDefinition: [keyof ReactSVG, Record<string, string>][] = [
    ['svg', { viewBox: '0 0 16 17', fill: 'currentColor' }],
    [
        'path',
        {
            d: 'M8.99985 5.72857C8.99985 6.83314 8.10443 7.7286 6.99988 7.7286M8.99985 5.72857C8.99985 4.624 8.10443 3.72858 6.99988 3.72858C5.89531 3.72858 4.99988 4.624 4.99988 5.72857C4.99988 6.83314 5.89531 7.7286 6.99988 7.7286M8.99985 5.72857H11.9999M6.99988 7.7286V10.7286M6.99988 10.7286C6.99988 11.8285 7.8999 12.7285 8.99985 12.7285H11.9999M6.99988 10.7286V17.7286C6.99988 18.8286 7.8999 19.7286 8.99985 19.7286H11.9999M15.9999 3.72858H17.9999C18.5522 3.72858 18.9999 4.17629 18.9999 4.72857V6.72858C18.9999 7.28086 18.5522 7.7286 17.9999 7.7286H15.9999C15.4476 7.7286 14.9999 7.28086 14.9999 6.72858V4.72857C14.9999 4.17629 15.4476 3.72858 15.9999 3.72858ZM15.9999 10.7286H17.9999C18.5522 10.7286 18.9999 11.1763 18.9999 11.7286V13.7286C18.9999 14.2808 18.5522 14.7286 17.9999 14.7286H15.9999C15.4476 14.7286 14.9999 14.2808 14.9999 13.7286V11.7286C14.9999 11.1763 15.4476 10.7286 15.9999 10.7286ZM15.9999 17.7286H17.9999C18.5522 17.7286 18.9999 18.1763 18.9999 18.7285V20.7286C18.9999 21.2809 18.5522 21.7285 17.9999 21.7285H15.9999C15.4476 21.7285 14.9999 21.2809 14.9999 20.7286V18.7285C14.9999 18.1763 15.4476 17.7286 15.9999 17.7286Z',
        },
    ],
]

export const BatchChangesPage: FunctionComponent<TelemetryProps> = ({ telemetryRecorder }) => {
    const subTitleClassName = 'tracking-tight text-gray-700 text-center max-w-[628px] mx-auto'
    return (
        <Layout
            meta={{
                title: 'Sourcegraph Batch Changes - Large-Scale Code Changes',
                description:
                    'Automate large-scale changes with Sourcegraph Batch Changes. Keep your code up to date and pay down tech debt across all repositories and code hosts.',
            }}
            childrenClassName="bg-gray-50"
            displayChildrenUnderNav={false}
            headerColorTheme="white"
            heroAndHeaderClassName="bg-gray-50"
            hero={
                <Hero
                    variant="gray"
                    product="batch changes"
                    title={'Automate large-scale\ncode changes'}
                    titleClassName="text-gray-700"
                    subtitle="Keep your code up to date, fix critical security issues, and pay down tech debt across all of your repositories with Batch Changes."
                    subtitleClassName="text-gray-500"
                    contentSectionClassName=""
                    cta={
                        <StandardCallToAction
                            className="md:!gap-5"
                            buttonLocation={buttonLocation.hero}
                            dark={false}
                            leftButtonClassName="!px-6 !py-2 !text-base tracking-tight"
                            rightButtonClassName="btn lg:btn-sm !btn-secondary !px-6 !py-2 !text-base tracking-tight"
                        />
                    }
                    displayUnderNav={false}
                    productUpperCase={true}
                    rightColumn={
                        <img
                            src="/batch-changes/batch-changes-conceptual-min.svg"
                            alt="Batch changes illustration"
                            className="md:w-max md:max-w-[844px]"
                        />
                    }
                    columnClassName="lg:!gap-x-[34px] overflow-visible"
                    className="!mx-0 !my-0 overflow-hidden !pt-[30px] !pb-[0px]"
                />
            }
        >
            <div className="pt-16 pb-16">
                <LogoGrid mainLogo="sofi" />
            </div>

            {/* Overview */}
            <ContentSection parentClassName="!pb-[16px]">
                <div className="text-center">
                    <h2 className="mx-auto mb-4 max-w-[696px] text-center font-sans leading-9 text-gray-700">
                        Change code everywhere with a single declarative file
                    </h2>
                    <div className="mx-auto mb-12 max-w-[768px]">
                        <p className="text-center text-lg tracking-tight text-gray-700">
                            Batch Changes gives you a declarative structure for finding and modifying code across all of
                            your repositories. With a simple UI, it is easy to track and manage all of your changesets
                            through checks and code reviews until each change is merged.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-8">
                        <div>
                            <img
                                src="/batch-changes/batch-change.svg"
                                alt="Graphic of a single developer updating a lot of repositories."
                                title="Graphic of a single developer updating a lot of repositories."
                                className="mx-auto max-h-[459px] w-full max-w-[734px]"
                            />
                        </div>
                    </div>
                </div>
            </ContentSection>

            <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" viewBox="0 0 32 33" fill="none">
                <defs>
                    <linearGradient
                        id="paint0_linear_20_6"
                        x1="4.99988"
                        y1="7.0013"
                        x2="18.3827"
                        y2="17.104"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#00CBEC" />
                        <stop offset="0.5" stopColor="#A112FF" />
                        <stop offset="1" stopColor="#FF5543" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Architecture */}
            <ContentSection
                parentClassName="md:!py-24"
                className="rounded-2xl border border-gray-200 bg-white px-10 py-6"
            >
                <TwoColumnSection
                    centerContent={true}
                    leftColumn={
                        <>
                            <Icon
                                fill="none"
                                size={32}
                                iconNode={batchChangesIconDefinition}
                                color="url(#paint0_linear_20_6)"
                                className="mb-6 h-8 w-8"
                            />
                            <h2 className="mb-4 max-w-[564px] text-gray-700">
                                Search, define, execute, and track code changes
                            </h2>
                            <p className="text-lg tracking-tight text-gray-500">
                                Find all occurrences of code to change, programmatically define changes, and execute via
                                a lightweight CLI. Track changeset lifecycle status across multiple code hosts via the
                                Sourcegraph UI.
                            </p>
                        </>
                    }
                    rightColumn={
                        <div className="md:flex lg:w-full lg:justify-end">
                            <Video
                                source={{
                                    mp4: 'batch-changes/how-it-works',
                                    webm: 'batch-changes/how-it-works',
                                }}
                                loop={true}
                                title="Batch Changes: How it works"
                                telemetryRecorder={telemetryRecorder}
                                className="lg:max-w-[500px]"
                            />
                        </div>
                    }
                />
            </ContentSection>

            {/* Social proof */}
            <ContentSection parentClassName="!px-0 !py-0 !my-0">
                <TwoColumnTestimonialCard
                    leftClientImgSrc="/case-studies/jared-hodge-indeed.jpg"
                    rightClientImgSrc="/case-studies/trent-grover-workiva.jpg"
                    rightTestimony="Sourcegraph Batch Changes gives us the confidence we need to understand the total impact of large-scale code changes before we make them. This enables the entire team to make more impactful decisions more often."
                    leftTestimony="The ability to automate downstream changes that Sourcegraph Batch Changes provides is a key capability for reducing the hidden burden of updates pushed across teams and enabling us to increase our engineering velocity."
                    leftClientName="Jared Hodge"
                    leftClientTitle="Senior Manager Developer Experience, Indeed"
                    rightClientName="Trent Grover"
                    rightClientTitle="Director of Architecture: Client Technologies, Workiva"
                    roundedImage={true}
                    className="sg-case-study !mb-0 md:rounded-2xl md:border md:border-gray-200"
                    title="Teams move faster with Batch Changes"
                    titleClassName="text-gray-700 font-semibold text-3xl mx-auto w-full text-center mb-16 tracking-tighter leading-9"
                    isWideSpacing={true}
                />
            </ContentSection>
            <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" viewBox="0 0 32 33" fill="none">
                <defs>
                    <linearGradient
                        id="paint0_linear_431_6440"
                        x1="5.3335"
                        y1="8.49662"
                        x2="25.3061"
                        y2="24.0048"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#00CBEC" />
                        <stop offset="0.5" stopColor="#A112FF" />
                        <stop offset="1" stopColor="#FF5543" />
                    </linearGradient>
                </defs>
            </svg>
            {/* Track */}
            <ContentSection
                parentClassName="!pt-24 md:!pb-0"
                className="rounded-2xl border border-gray-200 bg-white px-10 py-6"
            >
                <TwoColumnSection
                    centerContent={true}
                    leftColumn={
                        <>
                            <Merge size={32} color="url(#paint0_linear_20_6)" className="mb-6" />
                            <h2 className="mb-4 max-w-md text-gray-700">Track changes from creation to merge</h2>
                            <p className="text-lg tracking-tight text-gray-500">
                                Eliminate manual spreadsheet tracking. Automatically track changeset lifecycle status,
                                like check state, reviews, and merge status via the Sourcegraph UI.
                            </p>
                        </>
                    }
                    rightColumn={
                        <div className="md:flex lg:w-full lg:justify-end">
                            <Video
                                source={{
                                    mp4: 'batch-changes/creation-to-merge',
                                    webm: 'batch-changes/creation-to-merge',
                                }}
                                loop={true}
                                title="Batch Changes: Creation to merge"
                                telemetryRecorder={telemetryRecorder}
                                className="lg:max-w-[500px]"
                            />
                        </div>
                    }
                />
            </ContentSection>

            {/* Use Cases */}
            <ContentSection parentClassName="!py-24">
                <Tabs
                    titleClassName="mb-8 text-center text-gray-700 "
                    title="How developers are using Batch Changes"
                    isWideSpacing={true}
                    tabs={[
                        {
                            key: 'configuration',
                            title: 'Configuration',
                            content: (
                                <div className="max-w-screen mx-auto w-auto lg:w-min">
                                    <p className={subTitleClassName}>
                                        Quickly edit every CI, build, and other configuration files to make changes such
                                        as altering steps, migrating versions, or changing base images.
                                    </p>
                                    <BatchCodeHighlighter tabNumber={1} />
                                </div>
                            ),
                        },
                        {
                            key: 'refactoring',
                            title: 'Refactoring',
                            content: (
                                <div className="max-w-screen mx-auto w-auto lg:w-min">
                                    <p className={subTitleClassName}>
                                        Use language-aware tooling of your choice to perform complex refactors like
                                        updating an API and its function calls or replacing libraries entirely.
                                    </p>
                                    <BatchCodeHighlighter tabNumber={2} />
                                </div>
                            ),
                        },
                        {
                            key: 'security',
                            title: 'Security',
                            content: (
                                <div className="max-w-screen mx-auto w-auto lg:w-min">
                                    <p className={subTitleClassName}>
                                        Refactor code to replace insecure functions, update vulnerable packages, or
                                        modify container configurations across hundreds of repositories.
                                    </p>
                                    <BatchCodeHighlighter tabNumber={3} />
                                </div>
                            ),
                        },
                    ]}
                />
                <div className="mt-8 flex justify-center">
                    <Link
                        href="https://sourcegraph.com/docs/batch-changes"
                        title="Cody"
                        className="btn btn-link btn-link-icon p-0 text-center font-semibold !-tracking-[0.25px]"
                    >
                        See Docs for more use cases
                        <ChevronRightIcon className="link-icon" />
                    </Link>
                </div>
            </ContentSection>
            <ContactUsCta
                buttonClassNames="!max-w-full"
                parentClassNames="mdi:!py-24 mdi:!px-0 !px-6 !py-8"
                className="px-14 py-16"
            />
        </Layout>
    )
}

export default BatchChangesPage
