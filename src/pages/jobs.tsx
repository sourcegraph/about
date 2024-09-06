import { FunctionComponent } from 'react'

import classNames from 'classnames'
import ChevronRightIcon from 'mdi-react/ChevronRightIcon'

import { Layout, ContentSection, ThreeUpText, InfiniteCarousel } from '../components'
import { buttonStyle, buttonLocation } from '../data/tracking'

const CareersPage: FunctionComponent = () => {
    const valueItems = [
        {
            value: 'Being direct & transparent',
            description:
                'We communicate directly and operate transparently by default, which helps us move fast and make good decisions. We proactively give and receive candid feedback out of respect for each other.',
            img: <img className="w-full max-w-[336px]" src="/careers/BeingDirect.svg" alt="Diamond illustration" />,
        },
        {
            value: 'Winning together',
            description:
                'Too little collaboration causes chaos and brings disappointing results. Too much collaboration crushes ownership and dulls outcomes. We speak up when something is wrong (even when it’s hard) and help create an environment where we respectfully consider every voice.',
            img: (
                <img className="w-full max-w-[336px]" src="/careers/WinningTogether.svg" alt="Fist bump illustration" />
            ),
        },
        {
            value: 'High-agency',
            description:
                "If everyone else at Sourcegraph were stranded on a desert island without internet access for a month, you'd be able to figure it out and keep Sourcegraph running. Everyone here has a high degree of autonomy, which requires hard work, responsibility, fast iteration, and optimism in the face of challenges.",
            img: (
                <img className="w-full max-w-[336px]" src="/careers/HighAgency.svg" alt="Tandem bicycle illustration" />
            ),
        },
        {
            value: 'Dev-love',
            description:
                'Everything we do is ultimately for devs (anyone who codes). All Sourcegraph teammates code to better understand our users and customers and to do their job better. Our long-term mission is to make it so everyone codes, not just the 0.1% of the world’s population who are devs.',
            img: (
                <img
                    className="w-full max-w-[336px]"
                    src="/careers/DevLove.svg"
                    alt="Stamp labeled 'First class' illustration"
                />
            ),
        },
    ]

    const carouselImages = [
        {
            src: '/careers/Career1.png',
            className: 'h-auto w-[394px] py-0 px-[10px] md:w-[594px] lg:h-[477px] lg:w-[794px] lg:px-[15px]',
        },
        {
            src: '/careers/Career2.png',
            className: 'h-auto w-[394px] py-0 px-[10px] md:w-[594px] lg:h-[477px] lg:w-[794px] lg:px-[15px]',
        },
        {
            src: '/careers/Career3.png',
            className: 'h-auto w-[394px] py-0 px-[10px] md:w-[594px] lg:h-[477px] lg:w-[794px] lg:px-[15px]',
        },
        {
            src: '/careers/Career4.png',
            className: 'h-auto w-[394px] py-0 px-[10px] md:w-[594px] lg:h-[477px] lg:w-[794px] lg:px-[15px]',
        },
        {
            src: '/careers/Career5.png',
            className: 'h-auto w-[394px] py-0 px-[10px] md:w-[594px] lg:h-[477px] lg:w-[794px] lg:px-[15px]',
        },
    ]
    return (
        <Layout 
            className="jobs-page" 
            headerColorTheme="white"
            meta={{
                title: "Sourcegraph | Careers",
                description: "Come help us build the world's most advanced code intelligence platform."
            }}
        >
            <ContentSection background="white" className="xl:pl-6" parentClassName="!pt-8 !pb-[55px]">
                <h1 className="mb-6">Let's build the future together.</h1>
                <h3 className="max-w-[820px]">
                    We're developing the world's most advanced code intelligence platform with brilliant dreamers around
                    the globe.
                </h3>
                <a
                    className="btn btn-primary mt-8"
                    href="https://boards.greenhouse.io/sourcegraph91?gh_src=c685479c4us"
                    title="Explore our jobs"
                    target="_blank"
                    rel="nofollow noreferrer"
                    data-button-style={buttonStyle.primary}
                    data-button-location={buttonLocation.hero}
                    data-button-type="cta"
                >
                    Explore our open roles
                    <ChevronRightIcon className="ml-2 inline" />
                </a>
            </ContentSection>

            <InfiniteCarousel duration={200} images={carouselImages} />

            <ContentSection background="white" parentClassName="!pt-[104px] !pb-16">
                <div className="flex flex-wrap">
                    <div className="m-auto">
                        <h2 className="mx-auto mb-6 max-w-2xl text-center">Happy, healthy, and always in the flow.</h2>
                        <p className="mx-auto max-w-[768px] text-center">
                            Our teammates are our most valuable resource. That's why we provide total rewards that are
                            highly competitive and allow you to thrive both personally and professionally.
                        </p>
                        <p className="mt-6 text-center">
                            Learn more in{' '}
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://handbook.sourcegraph.com/benefits-pay-perks/benefits-perks"
                                title="our handbook"
                                data-button-style={buttonStyle.text}
                                data-button-location={buttonLocation.body}
                                data-button-type="cta"
                                className="underline"
                            >
                                our handbook
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </ContentSection>

            <ContentSection parentClassName="!pt-0">
                <ThreeUpText
                    items={[
                        {
                            icon: <img className="mx-auto mb-2" src="/careers/Remote.svg" alt="Map pin icon" />,
                            subtitle: 'Work fully remote',
                            description: 'Anywhere and at anytime',
                        },
                        {
                            icon: <img className="mx-auto mb-2" src="/careers/PTO.svg" alt="Sun icon" />,
                            subtitle: 'Unlimited PTO',
                            description: '...with a 30-day minimum',
                        },
                        {
                            icon: <img className="mx-auto mb-2" src="/careers/Travel.svg" alt="Airplane icon" />,
                            subtitle: 'Generous travel budgets',
                            description: 'Meet your team across the globe',
                        },
                        {
                            icon: <img className="mx-auto mb-2" src="/careers/Salary.svg" alt="Dollar bill icon" />,
                            subtitle: 'Competitive pay + equity',
                            description: 'So you can live your best life',
                        },
                        {
                            icon: <img className="mx-auto mb-2" src="/careers/Medical.svg" alt="Medical cross icon" />,
                            subtitle: 'Medical, dental, and vision',
                            description: 'Got you covered 100% (US only)',
                        },
                        {
                            icon: (
                                <img
                                    className="mx-auto mb-2"
                                    src="/careers/ProfessionalDevelopment.svg"
                                    alt="Graduation cap icon"
                                />
                            ),
                            subtitle: 'Professional development',
                            description: 'Find your thing and we pay for it',
                        },
                        {
                            icon: (
                                <img className="mx-auto mb-2" src="/careers/OfficeBudget.svg" alt="Headphones icon" />
                            ),
                            subtitle: 'Office budget',
                            description: 'Create a space where you thrive',
                        },
                        {
                            icon: (
                                <img className="mx-auto mb-2" src="/careers/Wellness.svg" alt="Person jogging icon" />
                            ),
                            subtitle: 'Wellness budget',
                            description: 'Take care of yourself on our dime',
                        },
                        {
                            icon: <img className="mx-auto mb-2" src="/careers/FamilyPlanning.svg" alt="Baby icon" />,
                            subtitle: 'Family Planning benefits',
                            description: '$25K, because family comes first',
                        },
                    ]}
                />
            </ContentSection>

            <div className="bg-violet-700">
                <ContentSection parentClassName="!py-8" className="md:px-6">
                    <h1 className="text-white">We value...</h1>
                </ContentSection>
            </div>

            <ContentSection parentClassName="!pt-16">
                <div className="mx-auto flex flex-col items-center">
                    {valueItems.map((item, index) => (
                        <div key={item.value}>
                            <div
                                className={classNames(
                                    'flex items-center gap-x-24',
                                    index % 2 === 0 ? 'flex-col md:flex-row' : 'flex-col md:flex-row-reverse',
                                    index === 0 ? 'mb-16' : index === valueItems.length - 1 ? 'mb-0' : 'mb-[96px]'
                                )}
                            >
                                {item.img}
                                <div className="flex max-w-[578px] flex-col gap-6">
                                    <h2>{item.value}</h2>
                                    <p className="text-lg">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </ContentSection>

            <ContentSection background="white">
                <div className="mx-auto flex max-w-screen-xl flex-col items-center px-6 md:flex-row md:gap-[113px]">
                    <div>
                        <h2 className="mb-[30px] md:max-w-[392px]">
                            Our employees say we're a Great Place to Work&trade;
                        </h2>
                        <p className="md:max-w-[469px]">
                            Our employees have spoken! Our company culture is amazing and our Great Place to Work
                            Certification&trade; proves it.
                        </p>
                    </div>
                    <div className="flex max-h-[600px] justify-center">
                        <img
                            className="w-full max-w-[577px] rounded-[5px]"
                            src="/careers/great-place-to-work.png"
                            alt="Graphic portraying that 85% of employees at Sourcegraph say it is a great place to work compared to 57% of employees at a typical U.S.-based company."
                        />
                    </div>
                </div>
            </ContentSection>

            <div className="sg-bg-careers-cta flex flex-col gap-4 py-24">
                <h2 className="text-center text-white">Interested in working at Sourcegraph?</h2>
                <p className="mb-0 text-center text-lg text-white">We are actively hiring for various roles.</p>
                <div className="flex flex-col items-center text-center">
                    <a
                        className="btn btn-primary-dark"
                        href="https://boards.greenhouse.io/sourcegraph91?gh_src=c685479c4us"
                        title="Explore our open roles"
                        target="_blank"
                        rel="nofollow noreferrer"
                        data-button-style={buttonStyle.primary}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                    >
                        Explore our open roles
                        <ChevronRightIcon className="ml-2 inline" />
                    </a>
                </div>
            </div>
        </Layout>
    )
}

export default CareersPage
