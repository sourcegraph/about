import { FunctionComponent } from 'react'

import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import Carousel from 'react-bootstrap/Carousel'

import { Layout, ContentSection, QuoteCarousel, ThreeUpText } from '../components'
import { buttonStyle, buttonLocation } from '../data/tracking'

const CareersPage: FunctionComponent = () => {
    const glassdoorReviewItems = [
        {
            header: 'Just interviewed and accepted role / position',
            quote: 'Transparency and openness are genuine and real differentiators. Highly collaborative and focused exec team.',
            by: 'Current Employee, Nov 23, 2021 - ',
            linkText: 'Read full review',
            link: 'https://www.glassdoor.com/Reviews/Employee-Review-Sourcegraph-RVW55781366.htm',
        },
        {
            header: 'Progressive company that means what they say',
            quote: 'For the first time ever.. I have no complaints about my place of employment.',
            by: 'Current Employee, Sep 3, 2021 - ',
            linkText: 'Read full review',
            link: 'https://www.glassdoor.com/Reviews/Employee-Review-Sourcegraph-RVW52059760.htm',
        },
        {
            header: 'Fast paced startup that cares',
            quote: 'Great teams full of extremely smart people. Management that cares about the well being of its employees. Full remote and async culture.',
            by: 'Current Employee, Feb 4, 2021 - ',
            linkText: 'Read full review',
            link: 'https://www.glassdoor.com/Reviews/Employee-Review-Sourcegraph-RVW41989078.htm',
        },
        {
            header: 'Great start to an awesome adventure',
            quote: 'Professional at a level many pre-IPO companies are not. Really good product that is easy to get behind and support. Dedicated leadership that support all employees. Everyone is motivated and pulling in the same direction.',
            by: 'Current Employee, Aug 28, 2021 - ',
            linkText: 'Read full review',
            link: 'https://www.glassdoor.com/Reviews/Employee-Review-Sourcegraph-RVW51765366.htm',
        },
        {
            header: 'Awesome people, incredible company',
            quote: 'Competitive pay, smart and awesome management leaders, strong product, and amazing company growth.',
            by: 'Current Employee, Jul 20, 2021 - ',
            linkText: 'Read full review',
            link: 'https://www.glassdoor.com/Reviews/Employee-Review-Sourcegraph-RVW50015620.htm',
        },
        {
            header: 'Sourcegraph is my dream company',
            quote: "Sourcegraph will make huge impact on the software industry. By improving the productivity of developers, Sourcegraph advances the rate of technological progress enabling us to bring the future sooner. As a software developer, I can't think of a better way to make a positive impact on the world.",
            by: 'Current Employee, Sep 15, 2016 - ',
            linkText: 'Read full review',
            link: 'https://www.glassdoor.com/Reviews/Employee-Review-Sourcegraph-RVW11950185.htm',
        },
    ]
    const cultureItems = [
        {
            className: 'sg-bg-gradient-saturn',
            text: "Just because we're remote doesn't mean we're apart \n#life-at-sourcegraph",
            img: (
                <img
                    className="w-100 max-w-450"
                    src="/careers/culture1.png"
                    alt="Photograph strip of Sourcegraph team members"
                />
            ),
        },
        {
            className: 'sg-bg-gradient-mars',
            text: (
                <span>
                    We're moving <i>fast</i> to create a world in which everyone can code
                </span>
            ),
            img: <img className="w-100 max-w-450" src="/careers/culture2.png" alt="Group riding go karts" />,
        },
        {
            className: 'sg-bg-gradient-venus',
            text: 'Work whenever and wherever \n#life-is-beachy',
            img: <img className="w-100 max-w-450" src="/careers/culture3.png" alt="Sourcegrapher on a beach" />,
        },
        {
            className: 'sg-bg-gradient-saturn',
            text: 'Our pets are Sourcegraph Teammates, too \n#pets-of-sourcegraph',
            img: (
                <img
                    className="w-100 max-w-450"
                    src="/careers/culture4.png"
                    alt="Black and white cat next to it's doppleganger cat Sourcegraph sticker"
                />
            ),
        },
        {
            className: 'sg-bg-gradient-mars',
            text: 'Creating the next generation of Sourcegraph coders, one baby at a time',
            img: <img className="w-100 max-w-450" src="/careers/culture5.png" alt="Baby holding a coding babybook" />,
        },
    ]
    const valueItems = [
        {
            value: 'High quality work',
            description:
                'You are responsible for finding out what high-quality work looks like and producing that high-quality work iteratively.',
            img: <img className="mt-10 w-100 max-w-500" src="/careers/1highquality.svg" alt="Diamond illustration" />,
        },
        {
            value: 'Being customer-first',
            description: 'You earn and keep the trust of our customers by putting their interests first.',
            img: (
                <img
                    className="mt-10 w-100 max-w-500"
                    src="/careers/2customerdriven.svg"
                    alt="Fist bump illustration"
                />
            ),
        },
        {
            value: 'Working as a team',
            description:
                'You work collaboratively with your peers, cross-functional teammates, and leadership to create shared success, trust, and belonging.',
            img: <img className="mt-10 w-100 max-w-500" src="/careers/3team.svg" alt="Tandem bicycle illustration" />,
        },
        {
            value: 'High agency',
            description:
                'You have the power and the responsibility to improve Sourcegraph as a company and as a product. You deliver regardless of the circumstances.',
            img: (
                <img
                    className="mt-10 w-100 max-w-500"
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
                    className="mt-10 w-100 max-w-500"
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
                    className="mt-10 w-100 max-w-500"
                    src="/careers/6open.svg"
                    alt="X-ray vision glasses illustration"
                />
            ),
        },
        {
            value: 'Continuous growth',
            description:
                'You strive to continuously grow and learn by genuinely soliciting feedback early and often, and humbly reflecting on your past mistakes.',
            img: <img className="mt-10 w-100 max-w-500" src="/careers/7growth.svg" alt="Tall giraffe illustration" />,
        },
    ]

    return (
        <Layout className="jobs-page" heroAndHeaderClassName="tw-bg-white">
            <ContentSection background="white">
                <div className="row">
                    <div className="col-lg-10">
                        <h1 className="tw-mb-xs">Let's build the future together.</h1>
                        <h3>
                            We're developing the world's most advanced code search navigation platform with brilliant
                            dreamers around the globe.
                        </h3>
                    </div>
                </div>
                <a
                    className="mt-4 btn btn-primary"
                    href="https://grnh.se/c685479c4us"
                    title="Explore our jobs"
                    target="_blank"
                    rel="nofollow noreferrer"
                    data-button-style={buttonStyle.primary}
                    data-button-location={buttonLocation.hero}
                    data-button-type="cta"
                >
                    Explore our jobs
                    <ArrowRightIcon className="ml-3 tw-inline" />
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
                <div className="flex-wrap tw-flex">
                    <div className="tw-m-auto">
                        <h2 className="tw-mx-auto tw-text-center tw-max-w-2xl tw-mb-6">
                            Happy, healthy, and always in the flow.
                        </h2>
                        <p className="tw-mx-auto tw-text-center col-lg-6">
                            Our Teammates are our most valuable resource. That's why we provide total rewards that are
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

            <Carousel controls={false}>
                {cultureItems.map(item => (
                    <Carousel.Item className={item.className} key={item.className}>
                        <div className="tw-flex tw-flex-col md:tw-flex-row tw-py-5xl tw-px-6 tw-max-w-screen-xl tw-mx-auto tw-items-center">
                            <h2 className="tw-mb-6">{item.text}</h2>
                            <div className="col-lg-6 max-h-600 tw-flex tw-justify-center">{item.img}</div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>

            <ContentSection>
                <Carousel
                    prevIcon={<ArrowLeftIcon color="#808080" />}
                    prevLabel=""
                    nextIcon={<ArrowRightIcon color="#808080" />}
                    nextLabel=""
                >
                    {valueItems.map(item => (
                        <Carousel.Item key={item.value}>
                            <div className="tw-flex tw-flex-col tw-items-center min-h-550 py-7">
                                <h5 className=" text-uppercase">We value:</h5>
                                <h2 className="">{item.value}</h2>
                                <p className="tw-text-center col-8">{item.description}</p>
                                {item.img}
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </ContentSection>

            <ContentSection parentClassName="sg-bg-gradient-saturn">
                <QuoteCarousel items={glassdoorReviewItems} />
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
                    <div className="col-lg-6 max-h-600 tw-flex tw-justify-center">
                        <img
                            className="w-100 max-w-450"
                            src="/careers/great-place-to-work.png"
                            alt="Graphic portraying that 94% of employees at Sourcegraph say it is a great place to work compared to 57% of employees at a typical U.S.-based company."
                        />
                    </div>
                </div>
            </ContentSection>

            <ContentSection background="white">
                <div className="tw-flex tw-flex-col tw-items-center tw-text-center">
                    <div>
                        <div className="col-lg-12">
                            <h2 className="tw-mb-xs">What you seek is seeking you</h2>
                            <p>
                                We're looking forward to reminding you that "you're on mute"{' '}
                                <img src="../SmileyWink.svg" alt="Smiling winky face emoji" className="tw-inline" />
                            </p>
                        </div>
                    </div>

                    <a
                        className="my-2 btn btn-primary"
                        href="https://grnh.se/c685479c4us"
                        title="Explore our jobs"
                        target="_blank"
                        rel="nofollow noreferrer"
                        data-button-style={buttonStyle.primary}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                    >
                        Explore our jobs
                        <ArrowRightIcon className="ml-3 tw-inline" />
                    </a>
                </div>
            </ContentSection>
        </Layout>
    )
}

export default CareersPage
