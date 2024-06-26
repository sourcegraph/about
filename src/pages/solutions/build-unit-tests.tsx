import { FunctionComponent } from 'react'

import MagnifyIcon from 'mdi-react/MagnifyIcon'
import NavigationIcon from 'mdi-react/NavigationIcon'
import Link from 'next/link'

import { CodyCta, ContentSection, InfiniteCarousel, Layout } from '../../components'
import { CardSection, CardDescription, QualtricsCard } from '../../components/Solutions'
import { useAuthModal } from '../../context/AuthModalContext'
import { carouselImages } from '../code-search'

const BuildUnitTestsPage: FunctionComponent = () => {
    const { openModal } = useAuthModal()
    const handleOpenModal = (): void => openModal('build-unit-tests')

    return (
        <Layout
            meta={{
                title: 'Build unit tests with AI',
                description:
                    'Cody lives in your IDE sidebar and generates unit tests using AI, considering your existing code to create relevant tests.',
            }}
            className="bg-gray-50"
            hero={
                <div className="w-full">
                    <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-10 px-2 pt-[64px] md:px-6">
                        <div className="align-center flex flex-col justify-center gap-6 text-center">
                            <h1>Build unit tests with AI</h1>
                            <div className="flex w-full justify-center">
                                <h3 className="max-w-[928px]">
                                    Cody lives in your IDE sidebar and generates tests with a single hotkey or button
                                    click, considering your existing code to create relevant tests.
                                </h3>
                            </div>
                        </div>
                        <div className="flex justify-center gap-6">
                            <button
                                type="button"
                                className="btn btn-primary min-w-fit px-6 lg:px-4"
                                title="Download Sourcegraph"
                                onClick={handleOpenModal}
                            >
                                Get Cody for free
                            </button>

                            <Link
                                href="https://sourcegraph.com/contact/request-info?form_submission_source=solutions-build-unit-tests"
                                title="Contact us"
                                className="btn btn-secondary text-center"
                                type="button"
                            >
                                Contact us
                            </Link>
                        </div>
                        <div className="h-fit max-h-[555px] max-w-[928px] self-center overflow-hidden rounded-lg md:w-[100%] md:min-w-[450px]">
                            <video
                                className="sg-video-border-gradient w-full rounded-lg"
                                autoPlay={true}
                                muted={true}
                                loop={true}
                                data-cookieconsent="ignore"
                            >
                                <source
                                    type="video/mp4"
                                    src="/solutions/build-unit-tests/generate-unit-tests.mp4"
                                    data-cookieconsent="ignore"
                                />
                            </video>
                        </div>
                    </div>
                </div>
            }
        >
            <ContentSection className="mt-8 flex flex-wrap justify-center gap-6 md:-mt-40">
                <CardDescription title="Hit your test coverage goals">
                    Creating unit tests takes hours rather than days with Cody.
                </CardDescription>
                <CardDescription title="Reduce time spent fixing bugs">
                    Thorough unit tests lead to fewer escaped defects and less time spent fixing bugs.
                </CardDescription>
                <CardDescription title="Ship code faster">
                    Simplified unit testing helps you ship fast and with confidence.
                </CardDescription>
            </ContentSection>

            <div className="py-10 md:pt-0 md:pb-16">
                <InfiniteCarousel duration={400} images={carouselImages} />
            </div>

            <ContentSection
                className="border-color-[#DBE2F0] relative flex flex-col-reverse gap-y-10 overflow-hidden rounded-2xl border bg-white pb-8 md:flex-row md:pl-10 lg:h-[859px]"
                parentClassName="!pt-0 pb-16"
            >
                <div className="z-10 flex flex-col gap-16 rounded-lg bg-white bg-opacity-40 px-6 shadow-xl shadow-white/80 backdrop-blur-[1px] md:my-16 md:w-full md:max-w-[450px] lg:max-w-[552px] 2xl:shadow-none">
                    <div className="flex flex-col gap-4">
                        <h2>Cody makes testing easy</h2>
                        <h3>
                            Highlight a symbol, code block, or file, and Cody will generate tests for that code at your
                            command.
                        </h3>
                    </div>
                    <div className="flex flex-col gap-10">
                        <CardSection icon={<MagnifyIcon />} title="Framework-aware">
                            Existing testing frameworks are detected and used for generating new tests.
                        </CardSection>
                        <CardSection icon={<NavigationIcon />} title="Codebase-aware">
                            If you have pre-existing test files, Cody will add to them to cover more scenarios and edge
                            cases.
                        </CardSection>
                        <CardSection icon={<NavigationIcon />} title="Flexible">
                            Create tests for an entire file or just a specific symbol or code block.
                        </CardSection>
                    </div>
                </div>
                <div className="relative flex w-full items-start justify-end">
                    <img
                        className="w-full object-right-top md:max-w-[500px] xl:max-w-[688px]"
                        src="/solutions/build-unit-tests/generating-unit-test.svg"
                        alt="Cody generating a unit test using the Jest framework and React testing library"
                    />
                </div>
            </ContentSection>

            <QualtricsCard />
            <div className="md:-mb-4">
                <CodyCta source="Build Unit Tests Page" isCodyPage={true} />
            </div>
        </Layout>
    )
}

export default BuildUnitTestsPage
