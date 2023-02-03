import { FunctionComponent } from 'react'

import classNames from 'classnames'
import Link from 'next/link'

import {
    ContentSection,
    CoreFeatures,
    CtaSection,
    Layout,
    IntegrationsSection,
    CustomerLogos,
    Heading,
} from '../../components'
import { buttonLocation, buttonStyle } from '../../data/tracking'

import meshLeft from './assets/hero/mesh-left.png'
import meshRight from './assets/hero/mesh-right.png'

const Home: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph - Code Intelligence Platform',
            description:
                "Big codebases are less painful with Sourcegraph's code intelligence: universal code search+nav and large-scale fixes/refactors.",
        }}
        heroAndHeaderClassName="bg-white"
        className="bg-white"
    >
        <HomeHero />

        <ContentSection background="white">
            <CoreFeatures />
        </ContentSection>

        <IntegrationsSection />

        <CtaSection />
    </Layout>
)

const HomeHero: FunctionComponent = () => (
    <div className="tw-relative tw-px-sm tw-bg-white tw-text-black">
        {[meshLeft, meshRight].map((image, index) => (
            <div
                key={`mesh-container-${Math.random()}`}
                className={classNames('tw-hidden xl:tw-block tw-absolute tw-top-0', {
                    ['tw-left-0']: index === 0,
                    ['tw-right-0']: index === 1,
                })}
            >
                <img
                    src={image.src}
                    alt="Sourcegraph mesh branding"
                    draggable={false}
                    className="tw-h-full tw-w-auto"
                    width={index === 0 ? 376 : 365}
                    height={630}
                />
                <div className="tw-absolute tw-bottom-0 tw-left-0 tw-w-full tw-h-[80px] tw-bg-gradient-to-b tw-from-transparent tw-to-white" />
            </div>
        ))}

        <div className="tw-mx-auto tw-pt-md md:tw-pt-4xl tw-text-center">
            <h1 className="tw-text-4xl tw-leading-10 sm:tw-text-6xl md:tw-text-[3.5rem] lg:tw-text-[4rem] lg:tw-leading-[1]">
                <span className="mb-2 tw-text-transparent tw-block tw-bg-clip-text tw-bg-gradient-to-l tw-from-violet-400 tw-to-vermillion-300">
                    Find. Fix. Flow.
                </span>
            </h1>

            <Heading size="h5" as="h2" className="tw-my-md tw-mx-auto tw-max-w-4xl !tw-font-normal">
                Big codebases are less painful with Sourcegraph's&nbsp;code&nbsp;intelligence:
                <br />
                universal&nbsp;code&nbsp;search+nav and large-scale&nbsp;fixes/refactors.
            </Heading>

            <div className="tw-mx-auto max-w-350 tw-flex-col sm:tw-flex-row sm:tw-flex tw-items-center">
                <div className="mb-3 col-sm-6 sm:tw-px-0 mb-sm-0 mr-sm-3">
                    <a
                        className="btn btn-primary w-100"
                        href="https://signup.sourcegraph.com"
                        title="Get free trial"
                        data-button-style={buttonStyle.primary}
                        data-button-location={buttonLocation.hero}
                        data-button-type="cta"
                    >
                        Get free trial
                    </a>
                </div>
                <div className="col-sm-6 sm:tw-px-0">
                    <Link
                        href="/demo"
                        className="btn btn-outline-primary w-100"
                        title="Request a demo"
                        data-button-style={buttonStyle.outline}
                        data-button-location={buttonLocation.hero}
                        data-button-type="cta"
                    >
                        Request a demo
                    </Link>
                </div>
            </div>

            <div className="tw-max-w-4xl tw-mx-auto tw-my-3xl">
                <video
                    className="shadow w-100"
                    autoPlay={false}
                    playsInline={true}
                    controls={true}
                    title="Sourcegraph demo video"
                    // Required for cross-origin caption track to work
                    crossOrigin="anonymous"
                    data-cookieconsent="ignore"
                    poster="https://cors-anywhere.sgdev.org/https://sourcegraphstatic.com/homepage-demo-202301-1_poster.png"
                >
                    <track
                        default={true}
                        label="English"
                        kind="captions"
                        srcLang="en"
                        src="https://cors-anywhere.sgdev.org/https://sourcegraphstatic.com/homepage-demo-202301-1.vtt"
                        data-cookieconsent="ignore"
                    />
                    <source
                        type="video/webm"
                        src="https://cors-anywhere.sgdev.org/https://sourcegraphstatic.com/homepage-demo-202301-0.webm"
                        data-cookieconsent="ignore"
                    />
                    <source
                        type="video/mp4"
                        src="https://cors-anywhere.sgdev.org/https://sourcegraphstatic.com/homepage-demo-202301-1.mp4"
                        data-cookieconsent="ignore"
                    />
                </video>
            </div>

            <div className="tw-mx-auto tw-text-center max-w-700">
                <h2 className="tw-mb-2">
                    Over{' '}
                    <Link
                        href="/case-studies"
                        className="tw-text-violet-400"
                        title="1.8 million engineers"
                        data-button-style={buttonStyle.text}
                        data-button-location={buttonLocation.hero}
                        data-button-type="cta"
                    >
                        1.8M engineers
                    </Link>{' '}
                    use Sourcegraph to build software you rely on
                </h2>

                <Link
                    href="/case-studies"
                    title="Learn how our customers use Sourcegraph"
                    data-button-style={buttonStyle.text}
                    data-button-location={buttonLocation.hero}
                    data-button-type="cta"
                >
                    Learn how our customers use Sourcegraph
                </Link>
            </div>
        </div>

        <CustomerLogos />
    </div>
)

export default Home
