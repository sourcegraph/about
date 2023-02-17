import { FunctionComponent } from 'react'

import ArrowRightIcon from 'mdi-react/ArrowRightIcon'

import { Layout, ContentSection, ThreeUpText } from '../components'
import { buttonStyle, buttonLocation } from '../data/tracking'

const CareersPage: FunctionComponent = () => {
    const valueItems = [
        {
            value: 'High quality work',
            description:
                'You are responsible for finding out what high-quality work looks like and producing that high-quality work iteratively.',
            img: (
                <img
                    className="mt-10 tw-w-full tw-max-w-[500px]"
                    src="/careers/1highquality.svg"
                    alt="Diamond illustration"
                />
            ),
        },
        {
            value: 'Being customer-first',
            description: 'You earn and keep the trust of our customers by putting their interests first.',
            img: (
                <img
                    className="mt-10 tw-w-full tw-max-w-[500px]"
                    src="/careers/2customerdriven.svg"
                    alt="Fist bump illustration"
                />
            ),
        },
        {
            value: 'Working as a team',
            description:
                'You work collaboratively with your peers, cross-functional teammates, and leadership to create shared success, trust, and belonging.',
            img: (
                <img
                    className="mt-10 tw-w-full tw-max-w-[500px]"
                    src="/careers/3team.svg"
                    alt="Tandem bicycle illustration"
                />
            ),
        },
        {
            value: 'High agency',
            description:
                'You have the power and the responsibility to improve Sourcegraph as a company and as a product. You deliver regardless of the circumstances.',
            img: (
                <img
                    className="mt-10 tw-w-full tw-max-w-[500px]"
                    src="/careers/4highagency.svg"
                    alt="Stamp labeled 'First class' illustration"
                />
            ),
        },
        {
            value: 'Being welcoming & inclusive',
            description:
                'You make people from all groups and backgrounds feel comfortable belonging to our team and community.',
            img: (
                <img
                    className="mt-10 tw-w-full tw-max-w-[500px]"
                    src="/careers/5welcoming.svg"
                    alt="Head illustration with a heart in the center"
                />
            ),
        },
        {
            value: 'Being open & transparent',
            description: 'You proactively communicate in an open and transparent way.',
            img: (
                <img
                    className="mt-10 tw-w-full tw-max-w-[500px]"
                    src="/careers/6open.svg"
                    alt="X-ray vision glasses illustration"
                />
            ),
        },
        {
            value: 'Continuous growth',
            description:
                'You strive to continuously grow and learn by genuinely soliciting feedback early and often, and humbly reflecting on your past mistakes.',
            img: (
                <img
                    className="mt-10 tw-w-full tw-max-w-[500px]"
                    src="/careers/7growth.svg"
                    alt="Tall giraffe illustration"
                />
            ),
        },
    ]

    return (
        <Layout className="jobs-page" headerColorTheme="white">
            <ContentSection background="white">
                <h1 className="tw-mb-xs">Let's build the future together.</h1>
                <h3>
                    We're developing the world's most advanced code search navigation platform with brilliant dreamers
                    around the globe.
                </h3>
                <a
                    className="tw-mt-6 btn btn-primary"
                    href="https://grnh.se/c685479c4us"
                    title="Explore our jobs"
                    target="_blank"
                    rel="nofollow noreferrer"
                    data-button-style={buttonStyle.primary}
                    data-button-location={buttonLocation.hero}
                    data-button-type="cta"
                >
                    Explore our jobs
                    <ArrowRightIcon className="tw-ml-4 tw-inline" />
                </a>
            </ContentSection>

            <div className="tw-text-center tw-bg-white">
                <img
                    src="../careers/careers_hero_img.jpg"
                    alt="Sourcegraph team members jumping"
                    className="tw-max-w-screen-2xl tw-w-full tw-hidden md:tw-inline"
                />
                <img
                    src="../careers/careers_hero_img_mobile.jpg"
                    alt="Sourcegraph team members jumping"
                    className="tw-w-full tw-inline md:tw-hidden"
                />
            </div>

            <ContentSection background="white">
                <div className="tw-flex-wrap tw-flex">
                    <div className="tw-m-auto">
                        <h2 className="tw-mx-auto tw-text-center tw-max-w-2xl tw-mb-6">
                            Happy, healthy, and always in the flow.
                        </h2>
                        <p className="tw-mx-auto tw-text-center">
                            Our teammates are our most valuable resource. That's why we provide total rewards that are
                            highly competitive and allow you to thrive both personally and professionally.
                        </p>
                        <p className="tw-mt-6 tw-text-center">
                            Learn more in{' '}
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://handbook.sourcegraph.com/benefits-pay-perks/benefits-perks"
                                title="our handbook"
                                data-button-style={buttonStyle.text}
                                data-button-location={buttonLocation.body}
                                data-button-type="cta"
                            >
                                our handbook
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </ContentSection>

            <ContentSection>
                <ThreeUpText
                    title="Benefits"
                    items={[
                        {
                            icon: (
                                <img className="tw-mb-2 sm:tw-mx-auto" src="/careers/Remote.svg" alt="Map pin icon" />
                            ),
                            subtitle: 'Work fully remote',
                            description: 'Anywhere and at anytime',
                        },
                        {
                            icon: <img className="tw-mb-2 sm:tw-mx-auto" src="/careers/PTO.svg" alt="Sun icon" />,
                            subtitle: 'Unlimited PTO',
                            description: '...with a 30-day minimum',
                        },
                        {
                            icon: (
                                <img className="tw-mb-2 sm:tw-mx-auto" src="/careers/Travel.svg" alt="Airplane icon" />
                            ),
                            subtitle: 'Generous travel budgets',
                            description: 'Meet your team across the globe',
                        },
                        {
                            icon: (
                                <img
                                    className="tw-mb-2 sm:tw-mx-auto"
                                    src="/careers/Salary.svg"
                                    alt="Dollar bill icon"
                                />
                            ),
                            subtitle: 'Competitive pay + equity',
                            description: 'So you can live your best life',
                        },
                        {
                            icon: (
                                <img
                                    className="tw-mb-2 sm:tw-mx-auto"
                                    src="/careers/Medical.svg"
                                    alt="Medical cross icon"
                                />
                            ),
                            subtitle: 'Medical, dental, and vision',
                            description: 'Got you covered 100% (US only)',
                        },
                        {
                            icon: (
                                <img
                                    className="tw-mb-2 sm:tw-mx-auto"
                                    src="/careers/ProfessionalDevelopment.svg"
                                    alt="Graduation cap icon"
                                />
                            ),
                            subtitle: 'Professional development',
                            description: 'Find your thing and we pay for it',
                        },
                        {
                            icon: (
                                <img
                                    className="tw-mb-2 sm:tw-mx-auto"
                                    src="/careers/OfficeBudget.svg"
                                    alt="Headphones icon"
                                />
                            ),
                            subtitle: 'Office budget',
                            description: 'Create a space where you thrive',
                        },
                        {
                            icon: (
                                <img
                                    className="tw-mb-2 sm:tw-mx-auto"
                                    src="/careers/Wellness.svg"
                                    alt="Person jogging icon"
                                />
                            ),
                            subtitle: 'Wellness budget',
                            description: 'Take care of yourself on our dime',
                        },
                        {
                            icon: (
                                <img
                                    className="tw-mb-2 sm:tw-mx-auto"
                                    src="/careers/FamilyPlanning.svg"
                                    alt="Baby icon"
                                />
                            ),
                            subtitle: 'Family Planning benefits',
                            description: '$25K, because family comes first',
                        },
                    ]}
                />
            </ContentSection>

            <ContentSection background="lightNebulousSaturn1">
                <h2 className="tw-text-center tw-mb-16">We value:</h2>
                <div className="tw-grid tw-gap-lg tw-grid-cols-2 lg:tw-grid-cols-4 tw-max-w-6xl tw-mx-auto">
                    {valueItems.map(item => (
                        <div key={item.value}>
                            <div className="tw-flex tw-flex-col tw-items-center tw-min-h-[250px]">
                                <h4 className="">{item.value}</h4>
                                <p className="tw-text-center">{item.description}</p>
                                {item.img}
                            </div>
                        </div>
                    ))}
                </div>
            </ContentSection>

            <ContentSection background="white">
                <div className="tw-flex tw-flex-col md:tw-flex-row tw-px-6 tw-max-w-screen-xl tw-mx-auto tw-items-center">
                    <div>
                        <h2 className="tw-mb-6">Our employees say we're a Great Place to Work&trade;</h2>
                        <p>
                            Our employees have spoken! Our company culture is amazing and our Great Place to Work
                            Certification&trade; proves it.
                        </p>
                    </div>
                    <div className="tw-max-h-[600px] tw-flex tw-justify-center">
                        <img
                            className="tw-w-full tw-max-w-[450px]"
                            src="/careers/great-place-to-work.png"
                            alt="Graphic portraying that 94% of employees at Sourcegraph say it is a great place to work compared to 57% of employees at a typical U.S.-based company."
                        />
                    </div>
                </div>
            </ContentSection>

            <ContentSection background="white">
                <div className="tw-flex tw-flex-col tw-items-center tw-text-center">
                    <a
                        className="tw-my-2 btn btn-primary"
                        href="https://grnh.se/c685479c4us"
                        title="Explore our open roles"
                        target="_blank"
                        rel="nofollow noreferrer"
                        data-button-style={buttonStyle.primary}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                    >
                        Explore our open roles
                        <ArrowRightIcon className="tw-ml-4 tw-inline" />
                    </a>
                </div>
            </ContentSection>
        </Layout>
    )
}

export default CareersPage
