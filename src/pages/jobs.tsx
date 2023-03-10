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
                    className="mt-10 w-full max-w-[500px]"
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
                    className="mt-10 w-full max-w-[500px]"
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
                    className="mt-10 w-full max-w-[500px]"
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
                    className="mt-10 w-full max-w-[500px]"
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
                    className="mt-10 w-full max-w-[500px]"
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
                    className="mt-10 w-full max-w-[500px]"
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
                    className="mt-10 w-full max-w-[500px]"
                    src="/careers/7growth.svg"
                    alt="Tall giraffe illustration"
                />
            ),
        },
    ]

    return (
        <Layout className="jobs-page" headerColorTheme="white">
            <ContentSection background="white">
                <h1 className="mb-xs">Let's build the future together.</h1>
                <h3>
                    We're developing the world's most advanced code intelligence platform with brilliant dreamers around
                    the globe.
                </h3>
                <a
                    className="btn btn-primary mt-6"
                    href="https://grnh.se/c685479c4us"
                    title="Explore our jobs"
                    target="_blank"
                    rel="nofollow noreferrer"
                    data-button-style={buttonStyle.primary}
                    data-button-location={buttonLocation.hero}
                    data-button-type="cta"
                >
                    Explore our jobs
                    <ArrowRightIcon className="ml-4 inline" />
                </a>
            </ContentSection>

            <div className="bg-white text-center">
                <img
                    src="../careers/careers_hero_img.jpg"
                    alt="Sourcegraph team members jumping"
                    className="hidden w-full max-w-screen-2xl md:inline"
                />
                <img
                    src="../careers/careers_hero_img_mobile.jpg"
                    alt="Sourcegraph team members jumping"
                    className="inline w-full md:hidden"
                />
            </div>

            <ContentSection background="white">
                <div className="flex flex-wrap">
                    <div className="m-auto">
                        <h2 className="mx-auto mb-6 max-w-2xl text-center">Happy, healthy, and always in the flow.</h2>
                        <p className="mx-auto text-center">
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
                            icon: <img className="mb-2 sm:mx-auto" src="/careers/Remote.svg" alt="Map pin icon" />,
                            subtitle: 'Work fully remote',
                            description: 'Anywhere and at anytime',
                        },
                        {
                            icon: <img className="mb-2 sm:mx-auto" src="/careers/PTO.svg" alt="Sun icon" />,
                            subtitle: 'Unlimited PTO',
                            description: '...with a 30-day minimum',
                        },
                        {
                            icon: <img className="mb-2 sm:mx-auto" src="/careers/Travel.svg" alt="Airplane icon" />,
                            subtitle: 'Generous travel budgets',
                            description: 'Meet your team across the globe',
                        },
                        {
                            icon: <img className="mb-2 sm:mx-auto" src="/careers/Salary.svg" alt="Dollar bill icon" />,
                            subtitle: 'Competitive pay + equity',
                            description: 'So you can live your best life',
                        },
                        {
                            icon: (
                                <img className="mb-2 sm:mx-auto" src="/careers/Medical.svg" alt="Medical cross icon" />
                            ),
                            subtitle: 'Medical, dental, and vision',
                            description: 'Got you covered 100% (US only)',
                        },
                        {
                            icon: (
                                <img
                                    className="mb-2 sm:mx-auto"
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
                                    className="mb-2 sm:mx-auto"
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
                                    className="mb-2 sm:mx-auto"
                                    src="/careers/Wellness.svg"
                                    alt="Person jogging icon"
                                />
                            ),
                            subtitle: 'Wellness budget',
                            description: 'Take care of yourself on our dime',
                        },
                        {
                            icon: <img className="mb-2 sm:mx-auto" src="/careers/FamilyPlanning.svg" alt="Baby icon" />,
                            subtitle: 'Family Planning benefits',
                            description: '$25K, because family comes first',
                        },
                    ]}
                />
            </ContentSection>

            <ContentSection background="lightNebulousSaturn1">
                <h2 className="mb-16 text-center">We value:</h2>
                <div className="mx-auto grid max-w-6xl grid-cols-2 gap-lg lg:grid-cols-4">
                    {valueItems.map(item => (
                        <div key={item.value}>
                            <div className="flex min-h-[250px] flex-col items-center">
                                <h4 className="">{item.value}</h4>
                                <p className="text-center">{item.description}</p>
                                {item.img}
                            </div>
                        </div>
                    ))}
                </div>
            </ContentSection>

            <ContentSection background="white">
                <div className="mx-auto flex max-w-screen-xl flex-col items-center px-6 md:flex-row">
                    <div>
                        <h2 className="mb-6">Our employees say we're a Great Place to Work&trade;</h2>
                        <p>
                            Our employees have spoken! Our company culture is amazing and our Great Place to Work
                            Certification&trade; proves it.
                        </p>
                    </div>
                    <div className="flex max-h-[600px] justify-center">
                        <img
                            className="w-full max-w-[450px]"
                            src="/careers/great-place-to-work.png"
                            alt="Graphic portraying that 94% of employees at Sourcegraph say it is a great place to work compared to 57% of employees at a typical U.S.-based company."
                        />
                    </div>
                </div>
            </ContentSection>

            <ContentSection background="white">
                <div className="flex flex-col items-center text-center">
                    <a
                        className="btn btn-primary my-2"
                        href="https://grnh.se/c685479c4us"
                        title="Explore our open roles"
                        target="_blank"
                        rel="nofollow noreferrer"
                        data-button-style={buttonStyle.primary}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                    >
                        Explore our open roles
                        <ArrowRightIcon className="ml-4 inline" />
                    </a>
                </div>
            </ContentSection>
        </Layout>
    )
}

export default CareersPage
