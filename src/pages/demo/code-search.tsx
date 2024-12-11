import { FunctionComponent, useState } from 'react'

import classNames from 'classnames'
import Link from 'next/link'

import { ContentSection, Layout, HubSpotForm, TwoColumnSection, Video } from '../../components'
import { CodeSearchCard } from '../../components/Code-search/CodeSearchCard'
import { LogoGrid } from '../../components/cody/LogoGrid'
import { useAuthModal } from '../../context/AuthModalContext'
import { breakpoints } from '../../data/breakpoints'
import { useWindowWidth } from '../../hooks/windowWidth'
import { captureCustomEventWithPageData } from '../../lib/utils'
import { TelemetryProps } from '../../telemetry'

import styles from '../../styles/CustomHubspotForm.module.scss'

declare global {
    interface Window {
        saq?: (type: string, id: string) => void
    }
}

const testimonials = [
    {
        name: 'Todd Turner, Platform Engineer',
        avatar: 'TT',
        role: 'Platform Engineer',
        companyName: 'Nine',
        comment: [
            '"Sourcegraph helped me answer a question in like 5 seconds flat this afternoon. ',
            'Normally I probably would have bugged a bunch of people, but the overview of “here is that snippet, and the list of repos using it” made it self-served."',
        ],
    },
    {
        name: 'Joe Bingham',
        avatar: 'JB',
        role: 'Software Engineer',
        companyName: 'Workiva',
        comment: [
            '"Updating all of our repositories with Batch Changes saves time, is less error-prone, and gives us confidence that everything is going to plan."',
        ],
    },
    {
        name: 'Chris Roderick',
        avatar: 'CR',
        role: 'Applications and Services Section Leader',
        companyName: 'CERN',
        comment: [
            '"Sourcegraph lets us make informed decisions on how to evolve our codebase. ',
            'For example, a library owner knows exactly how all other developers use their API, and can therefore make educated decisions on how to evolve it."',
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

const DemoCodyPage: FunctionComponent<TelemetryProps> = ({ telemetryRecorder }) => {
    const windowWidth = useWindowWidth()
    const isMobile = windowWidth < breakpoints.lg

    const { openModal } = useAuthModal()

    const [formSubmitted, setFormSubmitted] = useState(false)

    const handleOpenModal = (pagePosition: string): void => {
        captureCustomEventWithPageData('get_cody_onpage_click', pagePosition)
        openModal('cody')
    }

    return (
        <Layout
            meta={{
                title: 'Cody | AI coding assistant',
                description:
                    'Cody is the most powerful and accurate AI coding assistant for writing, fixing, and maintaining code.',
                image: 'https://about.sourcegraph.com/cody/cody-og.png',
            }}
            displayChildrenUnderNav={true}
            childrenClassName="!-mt-[152px]"
            className="relative w-full !overflow-x-hidden bg-gray-50"
            hero={
                <ContentSection className="" parentClassName="pt-11 lg:pb-16 px-6 lg:px-20">
                    <div>
                        <div className="relative mx-auto flex w-full flex-col pt-0 lg:flex-row lg:gap-[24px]">
                            <div className="flex w-full max-w-[697px] flex-1 flex-col lg:pt-0 lg:pr-0">
                                {/* header */}
                                <div className="mb-8 flex items-center gap-4">
                                    <img
                                        className="h-12 w-12 rounded-t-2xl"
                                        src="/home/branded-icons/Code-Search-squircle.svg"
                                        alt="Code Search Product logo"
                                    />
                                    <h2 className="text-3xl font-medium">Code Search</h2>
                                </div>

                                <div>
                                    <h1 className="mb-10 text-gray-700">Grok your entire codebase</h1>
                                    <p className="text-balance mt-6 mb-12 font-normal leading-tight text-gray-400 md:text-xl">
                                        Code Search makes it easy to find code, make large-scale changes, and track
                                        insights across codebases of any scale.
                                    </p>

                                    <img
                                        alt="Code search graphic"
                                        src="/home/hero/code-search.svg"
                                        width="550"
                                        height="550"
                                        decoding="async"
                                        data-nimg="1"
                                        className="w-[350px] sm:w-[550px]"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:h-fit lg:w-1/2 lg:max-w-lg lg:px-6">
                                <div className="sg-border-gradient-glow relative z-10 !rounded-3xl border border-gray-200 bg-white pl-0 pt-12 pr-0">
                                    <div className="flex flex-col items-center px-6 lg:px-12">
                                        <h2 className="mb-3 text-gray-700">Get a demo of Code Search</h2>
                                        <div className="text-center text-base leading-[27px] text-gray-400 lg:leading-6">
                                            Fill out the form below and we'll connect to discuss what Code Search from
                                            Sourcegraph can do for your team.
                                        </div>
                                    </div>
                                    <div
                                        className={classNames(
                                            'mt-8 pl-6 pr-0 pb-[48px] lg:pl-12 lg:pr-[21px]',
                                            styles.requestInfoForm
                                        )}
                                    >
                                        <HubSpotForm
                                            masterFormName="contactMulti"
                                            chiliPiper={false}
                                            bookIt={true}
                                            formId="255d54c8-65db-435e-b131-d8dc4ab9ea96"
                                            form_submission_source="demo/code-search"
                                            onFormSubmitted={() => {
                                                setFormSubmitted(true)
                                                captureCustomEventWithPageData('contact_us_submit', undefined, true)
                                            }}
                                            customSubmitButton='
                                            <div class="button-container">
                                            <button type="submit" class="custom-submit-button">
                                            <div class="custom-submit-button-div">
                                                <div>Request your demo</div>
                                                <img src="/assets/send.svg" />
                                            </div>
                                            </button>
                                            </div>'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ContentSection>
            }
        >
            <ContentSection parentClassName="!pt-4 !pb-4" className="flex flex-col items-center justify-center">
                <p className="text-center text-base font-normal leading-[27px] text-gray-400">
                    Trusted by the world's largest dev teams
                </p>

                <div className="mt-4">
                    <LogoGrid mainLogo="sofi" header={null} />
                </div>
            </ContentSection>

            <ContentSection className="lg:pl-6" parentClassName="lg:!pt-24 lg:!pb-12">
                <div className="rounded-lg bg-white p-8 shadow xl:p-12">
                    <TwoColumnSection
                        className="xl:!gap-x-[100px]"
                        centerContent={true}
                        reverseOnMobile={true}
                        rightColumn={
                            <Video
                                host="self"
                                source={{
                                    mp4: '/animations/code-search',
                                    webm: '/animations/code-search',
                                }}
                                title="Sourcegraph Code Search"
                                loop={true}
                                className="h-[432px] rounded-[5px] border border-gray-200 object-cover"
                                telemetryRecorder={telemetryRecorder}
                            />
                        }
                        leftColumn={
                            <div>
                                <p className="color-[#0F111A] mb-4 text-lg font-semibold !tracking-[0.54px]">
                                    CODE SEARCH
                                </p>
                                <h2 className="color-[#0F111A] mb-6">
                                    Find and fix code in any code host, language, or repository
                                </h2>
                                <ul className="mb-6 text-lg leading-[27px] tracking-[-0.25px] text-[#343A4D]">
                                    <li className="mb-3">
                                        Onboard to new repositories and projects more quickly by searching and
                                        navigating code from Sourcegraph's web UI.
                                    </li>
                                    <li className="mb-3">
                                        Resolve vulnerabilities and incidents faster. Locate every instance of bad code
                                        using symbol, commit, and diff searches.
                                    </li>
                                    <li>
                                        Efficiently reuse existing code. Find code across thousands of repositories and
                                        multiple code hosts in seconds.
                                    </li>
                                </ul>
                            </div>
                        }
                    />
                </div>
            </ContentSection>

            <ContentSection className="lg:pl-6" parentClassName="!py-8">
                <div className="rounded-lg bg-white p-8 shadow xl:p-12">
                    <TwoColumnSection
                        className="xl:!gap-x-[100px]"
                        centerContent={true}
                        reverseOnMobile={true}
                        rightColumn={
                            <Video
                                source={{
                                    mp4: 'batch-changes/how-it-works',
                                    webm: 'batch-changes/how-it-works',
                                }}
                                loop={true}
                                title="Batch Changes: How it works"
                                className="h-[432px] rounded-[5px] border border-gray-200 object-cover lg:h-[324px] lg:w-[577px]"
                                telemetryRecorder={telemetryRecorder}
                            />
                        }
                        leftColumn={
                            <div>
                                <p className="color-[#0F111A] mb-4 text-lg font-semibold !tracking-[0.54px]">
                                    BATCH CHANGES
                                </p>
                                <h2 className="color-[#0F111A] mb-6">Automate large-scale code changes</h2>
                                <ul className="mb-6 text-lg leading-[27px] tracking-[-0.25px] text-[#343A4D]">
                                    <li className="mb-3">
                                        Find all occurrences of code to change with Code Search and make every change
                                        with a single, declarative spec file.
                                    </li>
                                    <li>
                                        Automatically track changeset lifecycle status via the Sourcegraph UI. See check
                                        state, reviews, and merge status to follow changesets to completion.
                                    </li>
                                </ul>
                            </div>
                        }
                    />
                </div>
            </ContentSection>

            <div className="mx-auto max-w-screen-xl !px-6 pt-24 md:pb-4 xl:!px-0">
                <div className="light-metallic-gradient-to-r p-8 lg:py-16 lg:px-24">
                    <img src="/case-studies/1password-logo.png" alt="1Password logo" className="mb-8 w-36" />

                    <div className="flex flex-col gap-x-40 gap-y-16 lg:flex-row lg:items-end lg:justify-between">
                        <div>
                            <div className="text-xl font-semibold lg:text-3xl">
                                “There have been many instances when I know something exists, but I don't know where to
                                start. Now I just go to Code Search, start searching, add some filters, and I'm always
                                able to find it.”
                            </div>
                            <div className="mt-4">James Griffin-Allwood</div>
                            <div>Staff Developer, 1Password</div>
                        </div>
                        <div>
                            <div className="whitespace-nowrap text-5xl font-medium lg:text-8xl">3,900 hours</div>
                            <div className="mt-3 text-sm">Engineering time saved in 1st year</div>
                            <div className="mt-6 lg:mt-12">
                                <Link
                                    className="btn btn-secondary"
                                    href="https://sourcegraph.com/case-studies/1password-increases-productivity-in-a-distributed-codebase"
                                >
                                    Read the case study
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ContentSection
                parentClassName="!py-20"
                className="!my-0 flex w-full  flex-col gap-x-12 !p-0 md:flex-col lg:pl-6"
            >
                <div className="mx-auto flex w-full flex-col gap-x-8 gap-y-8 lg:flex-row">
                    <h2 className="text-center lg:pl-6 lg:text-left">Code Search works with:</h2>
                    <div className="mx-auto flex w-full max-w-[797px] flex-wrap items-center justify-center gap-16">
                        {codeHosts.map(codeHost => (
                            <div className="flex items-center gap-x-4" key={codeHost.name}>
                                <img className="h-[50px] w-[50px]" src={codeHost.icon} alt={codeHost.name} />{' '}
                                <h3 className="text-gray-600">{codeHost.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </ContentSection>

            <ContentSection parentClassName="!py-12" className="w-full lg:pl-6">
                <h2 className="mb-8 text-center text-gray-700">See why devs and their teams love using Code Search</h2>
                <div className="grid w-full flex-col items-start justify-between gap-y-[30px] gap-x-0 gap-y-6 md:flex-row md:gap-x-[30px] lg:grid-cols-3">
                    {testimonials.map(testimonial => (
                        <div
                            className="h-full rounded-2xl border border-gray-200 bg-white px-6 py-8 md:px-8"
                            key={testimonial.name}
                        >
                            <p className="mb-0">{testimonial.comment}</p>
                            <div className="mt-4">
                                <div className="font-semibold text-blurple-500">{testimonial.name}</div>
                                <div className="text-sm opacity-70">
                                    {testimonial.role}, {testimonial.companyName}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </ContentSection>

            <CodeSearchCard />
        </Layout>
    )
}

export default DemoCodyPage
