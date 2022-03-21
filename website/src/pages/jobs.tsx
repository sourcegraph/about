import React, { useState } from 'react'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon'
import Layout from '../components/Layout'
import Carousel from 'react-bootstrap/Carousel'
import { ContentSection } from '../components/content/ContentSection'

const CareersPage = props => {
    return (
        <Layout location={props.location} className="jobs-page">
            <div>
                <ContentSection className="hero-section">
                    <div className="row">
                        <div className="col-lg-10">
                            <h1 className="display-2 title">Let’s build the future together.</h1>
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
                    >
                        Explore our jobs
                        <ArrowRightIcon className="ml-3" />
                    </a>
                </ContentSection>

                <div className="text-center">
                    <img src="../careers/careers_hero_img.png" className="hero-image" />
                    <img src="../careers/careers_hero_img_mobile.jpg" className="hero-image-mobile" />
                </div>

                <div className="benefits">
                    <div className="d-flex flex-wrap">
                        <div className="m-auto">
                            <h2 className="col-lg-10 display-2 text-center mx-auto">
                                Happy, healthy, and always in the flow.
                            </h2>
                            <p className="col-lg-6 text-center mx-auto">
                                Our Teammates are our most valuable resource. That’s why we provide total rewards that
                                are highly competitive and allow you to thrive both personally and professionally.
                            </p>
                            <p className="text-center mt-3">
                                Learn more in{' '}
                                <a
                                    target="_blank"
                                    className="handbook-benefits-link"
                                    href="https://handbook.sourcegraph.com/benefits-pay-perks/benefits-perks"
                                >
                                    our handbook
                                </a>
                                .
                            </p>
                        </div>
                    </div>
                    <div className="d-flex flex-wrap benefits-row">
                        <div className="benefit col-lg-3 col-md-5 my-3 text-center">
                            <img className="icon my-2 mx-auto" src="../careers/Remote.svg" />
                            <h3 className="my-2">Work fully remote</h3>
                            <p>Anywhere and at anytime</p>
                        </div>
                        <div className="benefit col-lg-3 col-md-5 my-3 text-center">
                            <img className="icon my-2 mx-auto" src="../careers/PTO.svg" />
                            <h3 className="my-2">Unlimited PTO</h3>
                            <p>...with a 30-day minimum</p>
                        </div>
                        <div className="benefit col-lg-3 col-md-5 my-3 text-center">
                            <img className="icon my-2 mx-auto" src="../careers/Travel.svg" />
                            <h3 className="my-2">Generous travel budgets</h3>
                            <p>Meet your team across the globe</p>
                        </div>
                        <div className="benefit col-lg-3 col-md-5 my-3 text-center">
                            <img className="icon my-2 mx-auto" src="../careers/Salary.svg" />
                            <h3 className="my-2">Competitive pay + equity</h3>
                            <p>So you can live your best life</p>
                        </div>
                        <div className="benefit col-lg-3 col-md-5 my-3 text-center">
                            <img className="icon my-2 mx-auto" src="../careers/Medical.svg" />
                            <h3 className="my-2">Medical, dental, and vision</h3>
                            <p>Got you covered 100% (US only)</p>
                        </div>
                        <div className="benefit col-lg-3 col-md-5 my-3 text-center">
                            <img className="icon my-2 mx-auto" src="../careers/ProfessionalDevelopment.svg" />
                            <h3 className="my-2">Professional development</h3>
                            <p>Find your thing and we pay for it</p>
                        </div>
                        <div className="benefit col-lg-3 col-md-5 my-3 text-center">
                            <img className="icon my-2 mx-auto" src="../careers/OfficeBudget.svg" />
                            <h3 className="my-2">Office budget</h3>
                            <p>Create a space where you thrive</p>
                        </div>
                        <div className="benefit col-lg-3 col-md-5 my-3 text-center">
                            <img className="icon my-2 mx-auto" src="../careers/Wellness.svg" />
                            <h3 className="my-2">Wellness budget</h3>
                            <p>Take care of yourself on our dime</p>
                        </div>
                        <div className="benefit col-lg-3 col-md-5 my-3 text-center mx-auto">
                            <img className="icon my-2 mx-auto" src="../careers/FamilyPlanning.svg" />
                            <h3 className="my-2">Family Planning benefits</h3>
                            <p>$25K, because family comes first</p>
                        </div>
                    </div>
                </div>

                <Carousel className="culture-carousel">
                    {/*
                    <Carousel.Item className="bg-gradient-blue2-blue">
                        <div className="row">
                            <h1 className="col-lg-6 my-auto">
                                <p>
                                    Whether you're early in your career or have written a few books on coding, we have a
                                    spot for you
                                </p>
                            </h1>
                            <div className="col-lg-6 img-container">
                                <img src="../careers/culture1.png" />
                            </div>
                        </div>
                    </Carousel.Item>
                */}
                    <Carousel.Item className="bg-gradient-blue-purple">
                        <div className="row">
                            <h1 className="col-lg-6 my-auto">
                                <p>
                                    Just because we’re remote doesn’t mean we’re apart <br />
                                    #life-at-sourcegraph
                                </p>
                            </h1>
                            <div className="col-lg-6 img-container">
                                <img src="../careers/culture2.png" />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className="bg-gradient-purple-yellow">
                        <div className="row">
                            <h1 className="col-lg-6 my-auto">
                                <p>
                                    We’re moving <i>fast</i> to create a world in which everyone can code
                                </p>
                            </h1>
                            <div className="col-lg-6 img-container">
                                <img src="../careers/culture3.png" />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className="bg-gradient-yellow-green2">
                        <div className="row">
                            <h1 className="col-lg-6 my-auto">
                                <p>
                                    Work whenever and wherever <br />
                                    #life-is-beachy
                                </p>
                            </h1>
                            <div className="col-lg-6 img-container">
                                <img src="../careers/culture4.png" className="landscape" />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className="bg-gradient-green2-red">
                        <div className="row">
                            <h1 className="col-lg-6 my-auto">
                                <p>
                                    Our pets are Sourcegraph Teammates, too <br />
                                    #pets-of-sourcegraph
                                </p>
                            </h1>
                            <div className="col-lg-6 img-container">
                                <img src="../careers/culture5.png" />
                            </div>
                        </div>
                    </Carousel.Item>
                    {/*
                    <Carousel.Item className="bg-gradient-red-blue2">
                        <div className="row">
                            <h1 className="col-lg-6 my-auto">
                                <p>
                                    We have fun inside and outside of work <br />
                                    This pic was taken at a team meetup in Berlin
                                </p>
                            </h1>
                            <div className="col-lg-6 img-container">
                                <img src="../careers/culture6.jpg" className="landscape" />
                            </div>
                        </div>
                    </Carousel.Item>
                */}
                    <Carousel.Item className="bg-gradient-red-blue2">
                        <div className="row">
                            <h1 className="col-lg-6 my-auto">
                                <p>Creating the next generation of Sourcegraph coders, one baby at a time</p>
                            </h1>
                            <div className="col-lg-6 img-container">
                                <img src="../careers/culture7.png" />
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>

                <div>
                    <img src="../careers/Culture_8.png" className="culture-section mx-auto" />
                    <div className="culture-section-mobile mx-auto">
                        <img src="../careers/01-Zoom.png" className="m-2" />
                        <img src="../careers/02-Zoom.png" className="m-2" />
                        <img src="../careers/03-Zoom.png" className="m-2" />
                        <img src="../careers/04-Zoom.png" className="m-2" />
                        <img src="../careers/05-Zoom.png" className="m-2" />
                        <img src="../careers/06-Zoom.png" className="m-2" />
                        <img src="../careers/07-Zoom.png" className="m-2" />
                        <img src="../careers/08-Zoom.png" className="m-2" />
                    </div>
                </div>

                <Carousel
                    className="values-carousel"
                    prevIcon={
                        <ArrowLeftIcon color="#808080" />
                    }
                    nextIcon={
                        <ArrowRightIcon color="#808080" />
                    }
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
                                <img src="../careers/1highquality.svg" />
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
                                <img src="../careers/2customerdriven.svg" />
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
                                <img src="../careers/3team.svg" />
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
                                <img src="../careers/4highagency.svg" />
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
                                <img src="../careers/5welcoming.svg" />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="row">
                            <div>
                                <p className="subTitle">We value:</p>
                                <h1>Being open & transparent</h1>
                                <p className="paragraph">You proactively communicate in an open and transparent way.</p>
                                <img src="../careers/6open.svg" />
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
                                <img src="../careers/7growth.svg" />
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>

                <div className="bg-white contact-us">
                    <ContentSection>
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="display-2">What you seek is seeking you</h2>
                                <p>
                                    We're looking forward to reminding you that "you're on mute"{' '}
                                    <img src="../SmileyWink.svg" />
                                </p>
                            </div>
                        </div>
                        <a
                            className="btn btn-primary my-2"
                            href="https://grnh.se/c685479c4us"
                            title="Explore our jobs"
                            target="_blank"
                        >
                            Explore our jobs
                            <ArrowRightIcon className="ml-3" />
                        </a>
                    </ContentSection>
                </div>

                <Carousel
                    className="values-carousel"
                    prevIcon={ <ArrowLeftIcon color="#808080" /> }
                    nextIcon={ <ArrowRightIcon color="#808080" /> }
                >
                    <Carousel.Item>
                        <div className="row">
                            <div>
                                <img src="../careers/review1.png" />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="row">
                            <div>
                                <img src="../careers/review2.png" />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="row">
                            <div>
                                <img src="../careers/review3.png" />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="row">
                            <div>
                                <img src="../careers/review4.png" />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="row">
                            <div>
                                <img src="../careers/review5.png" />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="row">
                            <div>
                                <img src="../careers/review6.png" />
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </Layout>
    )
}

export default CareersPage
