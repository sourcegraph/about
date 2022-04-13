import { FunctionComponent } from 'react'

import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import Carousel from 'react-bootstrap/Carousel'

import { Layout, ContentSection, QuoteCarousel } from '@components'

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
                        className="btn btn-primary mt-4"
                        href="https://grnh.se/c685479c4us"
                        title="Explore our jobs"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                    >
                        Explore our jobs
                        <ArrowRightIcon className="ml-3" />
                    </a>
                </ContentSection>

                <div className="text-center">
                    <img
                        src="../careers/careers_hero_img.jpg"
                        alt="Sourcegraph team members jumping"
                        className="hero-image"
                    />
                    <img
                        src="../careers/careers_hero_img_mobile.jpg"
                        alt="Sourcegraph team members jumping"
                        className="hero-image-mobile"
                    />
                </div>

                <div className="benefits">
                    <div className="d-flex flex-wrap">
                        <div className="m-auto">
                            <h2 className="col-lg-10 display-2 text-center mx-auto">
                                Happy, healthy, and always in the flow.
                            </h2>
                            <p className="col-lg-6 text-center mx-auto">
                                Our Teammates are our most valuable resource. That's why we provide total rewards that
                                are highly competitive and allow you to thrive both personally and professionally.
                            </p>
                            <p className="text-center mt-3">
                                Learn more in{' '}
                                <a
                                    target="_blank"
                                    className="handbook-benefits-link"
                                    href="https://handbook.sourcegraph.com/benefits-pay-perks/benefits-perks"
                                    rel="nofollow noopener noreferrer"
                                >
                                    our handbook
                                </a>
                                .
                            </p>
                        </div>
                    </div>
                    <div className="d-flex flex-wrap benefits-row">
                        <div className="benefit col-lg-3 col-md-5 my-3 text-center">
                            <img className="icon my-2 mx-auto" src="/careers/Remote.svg" alt="Map pin icon" />
                            <h3 className="my-2">Work fully remote</h3>
                            <p>Anywhere and at anytime</p>
                        </div>
                        <div className="benefit col-lg-3 col-md-5 my-3 text-center">
                            <img className="icon my-2 mx-auto" src="/careers/PTO.svg" alt="Sun icon" />
                            <h3 className="my-2">Unlimited PTO</h3>
                            <p>...with a 30-day minimum</p>
                        </div>
                        <div className="benefit col-lg-3 col-md-5 my-3 text-center">
                            <img className="icon my-2 mx-auto" src="/careers/Travel.svg" alt="Airplane icon" />
                            <h3 className="my-2">Generous travel budgets</h3>
                            <p>Meet your team across the globe</p>
                        </div>
                        <div className="benefit col-lg-3 col-md-5 my-3 text-center">
                            <img className="icon my-2 mx-auto" src="/careers/Salary.svg" alt="Dollar bill icon" />
                            <h3 className="my-2">Competitive pay + equity</h3>
                            <p>So you can live your best life</p>
                        </div>
                        <div className="benefit col-lg-3 col-md-5 my-3 text-center">
                            <img className="icon my-2 mx-auto" src="/careers/Medical.svg" alt="Medical cross icon" />
                            <h3 className="my-2">Medical, dental, and vision</h3>
                            <p>Got you covered 100% (US only)</p>
                        </div>
                        <div className="benefit col-lg-3 col-md-5 my-3 text-center">
                            <img
                                className="icon my-2 mx-auto"
                                src="/careers/ProfessionalDevelopment.svg"
                                alt="Graduation cap icon"
                            />
                            <h3 className="my-2">Professional development</h3>
                            <p>Find your thing and we pay for it</p>
                        </div>
                        <div className="benefit col-lg-3 col-md-5 my-3 text-center">
                            <img className="icon my-2 mx-auto" src="/careers/OfficeBudget.svg" alt="Headphones icon" />
                            <h3 className="my-2">Office budget</h3>
                            <p>Create a space where you thrive</p>
                        </div>
                        <div className="benefit col-lg-3 col-md-5 my-3 text-center">
                            <img className="icon my-2 mx-auto" src="/careers/Wellness.svg" alt="Person jogging icon" />
                            <h3 className="my-2">Wellness budget</h3>
                            <p>Take care of yourself on our dime</p>
                        </div>
                        <div className="benefit col-lg-3 col-md-5 my-3 text-center mx-auto">
                            <img className="icon my-2 mx-auto" src="/careers/FamilyPlanning.svg" alt="Baby icon" />
                            <h3 className="my-2">Family Planning benefits</h3>
                            <p>$25K, because family comes first</p>
                        </div>
                    </div>
                </div>

                <Carousel className="culture-carousel">
                    <Carousel.Item className="bg-gradient-blue-violet-mist">
                        <div className="row">
                            <h1 className="col-lg-6 my-auto">
                                <p>
                                    Just because we're remote doesn't mean we're apart <br />
                                    #life-at-sourcegraph
                                </p>
                            </h1>
                            <div className="col-lg-6 img-container">
                                <img src="/careers/culture1.png" alt="Photograph strip of Sourcegraph team members" />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className="bg-gradient-violet-yellow-mist">
                        <div className="row">
                            <h1 className="col-lg-6 my-auto">
                                <p>
                                    We're moving <i>fast</i> to create a world in which everyone can code
                                </p>
                            </h1>
                            <div className="col-lg-6 img-container">
                                <img src="/careers/culture2.png" alt="Group riding go karts" />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className="bg-gradient-yellow-green-mist">
                        <div className="row">
                            <h1 className="col-lg-6 my-auto">
                                <p>
                                    Work whenever and wherever <br />
                                    #life-is-beachy
                                </p>
                            </h1>
                            <div className="col-lg-6 img-container">
                                <img className="landscape" src="/careers/culture3.png" alt="Sourcegrapher on a beach" />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className="bg-gradient-green-red-mist">
                        <div className="row">
                            <h1 className="col-lg-6 my-auto">
                                <p>
                                    Our pets are Sourcegraph Teammates, too <br />
                                    #pets-of-sourcegraph
                                </p>
                            </h1>
                            <div className="col-lg-6 img-container">
                                <img
                                    src="/careers/culture4.png"
                                    alt="Black and white cat next to it's doppleganger cat Sourcegraph sticker"
                                />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className="bg-gradient-red-plum-mist">
                        <div className="row">
                            <h1 className="col-lg-6 my-auto">
                                <p>Creating the next generation of Sourcegraph coders, one baby at a time</p>
                            </h1>
                            <div className="col-lg-6 img-container">
                                <img src="/careers/culture5.png" alt="Baby holding a coding babybook" />
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>

                <Carousel
                    className="values-carousel"
                    prevIcon={<ArrowLeftIcon color="#808080" />}
                    nextIcon={<ArrowRightIcon color="#808080" />}
                >
                    <Carousel.Item>
                        <div className="row">
                            <div>
                                <p className="subTitle">We value:</p>
                                <h1>High quality work</h1>
                                <p className="paragraph">
                                    You are responsible for finding out what high-quality work looks like and producing
                                    that high-quality work iteratively.
                                </p>
                                <img src="/careers/1highquality.svg" alt="Diamond illustration" />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="row">
                            <div>
                                <p className="subTitle">We value:</p>
                                <h1>Being customer-first</h1>
                                <p className="paragraph">
                                    You earn and keep the trust of our customers by putting their interests first.
                                </p>
                                <img src="/careers/2customerdriven.svg" alt="Fist bump illustration" />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="row">
                            <div>
                                <p className="subTitle">We value:</p>
                                <h1>Working as a team</h1>
                                <p className="paragraph">
                                    You work collaboratively with your peers, cross-functional teammates, and leadership
                                    to create shared success, trust, and belonging.
                                </p>
                                <img src="/careers/3team.svg" alt="Tandem bicycle illustration" />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="row">
                            <div>
                                <p className="subTitle">We value:</p>
                                <h1>High agency</h1>
                                <p className="paragraph">
                                    You have the power and the responsibility to improve Sourcegraph as a company and as
                                    a product. You deliver regardless of the circumstances.
                                </p>
                                <img src="/careers/4highagency.svg" alt="Stamp labeled 'First class' illustration" />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="row">
                            <div>
                                <p className="subTitle">We value:</p>
                                <h1>Being welcoming & inclusive</h1>
                                <p className="paragraph">
                                    You make people from all groups and backgrounds feel comfortable belonging to our
                                    team and community.
                                </p>
                                <img src="/careers/5welcoming.svg" alt="Head illustration with a heart in the center" />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="row">
                            <div>
                                <p className="subTitle">We value:</p>
                                <h1>Being open & transparent</h1>
                                <p className="paragraph">You proactively communicate in an open and transparent way.</p>
                                <img src="/careers/6open.svg" alt="X-ray vision glasses illustration" />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="row">
                            <div>
                                <p className="subTitle">We value:</p>
                                <h1>Continuous growth</h1>
                                <p className="paragraph">
                                    You strive to continuously grow and learn by genuinely soliciting feedback early and
                                    often, and humbly reflecting on your past mistakes.
                                </p>
                                <img src="/careers/7growth.svg" alt="Tall giraffe illustration" />
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>

                <div className="bg-gradient-saturn-saturated py-8">
                    <ContentSection>
                        <QuoteCarousel items={glassdoorReviewItems} autoAdvance={true} />
                    </ContentSection>
                </div>

                <div className="bg-white py-8">
                    <ContentSection>
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="display-2">What you seek is seeking you</h2>
                                <p>
                                    We're looking forward to reminding you that "you're on mute"{' '}
                                    <img src="../SmileyWink.svg" alt="Smiling winky face emoji" />
                                </p>
                            </div>
                        </div>
                        <a
                            className="btn btn-primary my-2"
                            href="https://grnh.se/c685479c4us"
                            title="Explore our jobs"
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                        >
                            Explore our jobs
                            <ArrowRightIcon className="ml-3" />
                        </a>
                    </ContentSection>
                </div>
            </div>
        </Layout>
    )
}

export default CareersPage
