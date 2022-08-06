import { FunctionComponent } from 'react'

import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import Carousel from 'react-bootstrap/Carousel'

import { Layout, ContentSection, QuoteCarousel } from '@components'
import { buttonStyle, buttonLocation } from '@data'

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
            text: (
                <h2 className="my-auto col-lg-6 display-3 font-weight-bolder">
                    Just because we're remote doesn't mean we're apart <br />
                    #life-at-sourcegraph
                </h2>
            ),
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
                <h2 className="my-auto col-lg-6 display-3 font-weight-bolder">
                    We're moving <i>fast</i> to create a world in which everyone can code
                </h2>
            ),
            img: <img className="w-100 max-w-450" src="/careers/culture2.png" alt="Group riding go karts" />,
        },
        {
            className: 'sg-bg-gradient-venus',
            text: (
                <h2 className="my-auto col-lg-6 display-3 font-weight-bolder">
                    Work whenever and wherever <br />
                    #life-is-beachy
                </h2>
            ),
            img: <img className="w-100 max-w-450" src="/careers/culture3.png" alt="Sourcegrapher on a beach" />,
        },
        {
            className: 'sg-bg-gradient-saturn',
            text: (
                <h2 className="my-auto col-lg-6 display-3 font-weight-bolder">
                    Our pets are Sourcegraph Teammates, too <br />
                    #pets-of-sourcegraph
                </h2>
            ),
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
            text: (
                <h2 className="my-auto col-lg-6 display-3 font-weight-bolder">
                    Creating the next generation of Sourcegraph coders, one baby at a time
                </h2>
            ),
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
        <Layout className="jobs-page">
            <div>
                <ContentSection className="hero-section">
                    <div className="row">
                        <div className="col-lg-10">
                            <h1 className="display-2 title">Let's build the future together.</h1>
                            <h1 className="display-2 font-weight-normal">
                                We're developing the world's most advanced code search navigation platform with
                                brilliant dreamers around the globe.
                            </h1>
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

                <div className="tw-text-center">
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

                <div className="benefits">
                    <div className="flex-wrap d-flex">
                        <div className="m-auto">
                            <h2 className="mx-auto text-center col-lg-10 display-2 font-weight-bold">
                                Happy, healthy, and always in the flow.
                            </h2>
                            <p className="mx-auto text-center col-lg-6">
                                Our Teammates are our most valuable resource. That's why we provide total rewards that
                                are highly competitive and allow you to thrive both personally and professionally.
                            </p>
                            <p className="mt-3 text-center">
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
                    <div className="flex-wrap d-flex benefits-row">
                        <div className="my-3 text-center benefit col-lg-3 col-md-5">
                            <img className="mx-auto my-2 icon" src="/careers/Remote.svg" alt="Map pin icon" />
                            <h3 className="my-2">Work fully remote</h3>
                            <p>Anywhere and at anytime</p>
                        </div>
                        <div className="my-3 text-center benefit col-lg-3 col-md-5">
                            <img className="mx-auto my-2 icon" src="/careers/PTO.svg" alt="Sun icon" />
                            <h3 className="my-2">Unlimited PTO</h3>
                            <p>...with a 30-day minimum</p>
                        </div>
                        <div className="my-3 text-center benefit col-lg-3 col-md-5">
                            <img className="mx-auto my-2 icon" src="/careers/Travel.svg" alt="Airplane icon" />
                            <h3 className="my-2">Generous travel budgets</h3>
                            <p>Meet your team across the globe</p>
                        </div>
                        <div className="my-3 text-center benefit col-lg-3 col-md-5">
                            <img className="mx-auto my-2 icon" src="/careers/Salary.svg" alt="Dollar bill icon" />
                            <h3 className="my-2">Competitive pay + equity</h3>
                            <p>So you can live your best life</p>
                        </div>
                        <div className="my-3 text-center benefit col-lg-3 col-md-5">
                            <img className="mx-auto my-2 icon" src="/careers/Medical.svg" alt="Medical cross icon" />
                            <h3 className="my-2">Medical, dental, and vision</h3>
                            <p>Got you covered 100% (US only)</p>
                        </div>
                        <div className="my-3 text-center benefit col-lg-3 col-md-5">
                            <img
                                className="mx-auto my-2 icon"
                                src="/careers/ProfessionalDevelopment.svg"
                                alt="Graduation cap icon"
                            />
                            <h3 className="my-2">Professional development</h3>
                            <p>Find your thing and we pay for it</p>
                        </div>
                        <div className="my-3 text-center benefit col-lg-3 col-md-5">
                            <img className="mx-auto my-2 icon" src="/careers/OfficeBudget.svg" alt="Headphones icon" />
                            <h3 className="my-2">Office budget</h3>
                            <p>Create a space where you thrive</p>
                        </div>
                        <div className="my-3 text-center benefit col-lg-3 col-md-5">
                            <img className="mx-auto my-2 icon" src="/careers/Wellness.svg" alt="Person jogging icon" />
                            <h3 className="my-2">Wellness budget</h3>
                            <p>Take care of yourself on our dime</p>
                        </div>
                        <div className="mx-auto my-3 text-center benefit col-lg-3 col-md-5">
                            <img className="mx-auto my-2 icon" src="/careers/FamilyPlanning.svg" alt="Baby icon" />
                            <h3 className="my-2">Family Planning benefits</h3>
                            <p>$25K, because family comes first</p>
                        </div>
                    </div>
                </div>

                <Carousel controls={false}>
                    {cultureItems.map(item => (
                        <Carousel.Item className={item.className} key={item.className}>
                            <div className="px-5 row px-md-8 py-7">
                                {item.text}
                                <div className="col-lg-6 h-600 d-flex align-items-center">{item.img}</div>
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
                                <div className="d-flex flex-column align-items-center min-h-550 py-7">
                                    <h5 className="display-5 font-weight-bold text-uppercase">We value:</h5>
                                    <h2 className="display-3 font-weight-bold">{item.value}</h2>
                                    <p className="text-center col-8 display-5">{item.description}</p>
                                    {item.img}
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </ContentSection>

                <div className="sg-bg-gradient-saturn">
                    <ContentSection>
                        <QuoteCarousel items={glassdoorReviewItems} />
                    </ContentSection>
                </div>

                <div className="bg-white py-7">
                    <ContentSection>
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="display-2 font-weight-bold">What you seek is seeking you</h2>
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
                    </ContentSection>
                </div>
            </div>
        </Layout>
    )
}

export default CareersPage
