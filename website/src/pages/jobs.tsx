import React, { useState } from 'react';
import { Link } from 'gatsby'
import ArrowDownIcon from 'mdi-react/ArrowDownIcon'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import Layout from '../components/Layout'
import { ContentSection } from '../components/content/ContentSection'
import { CustomerLogosSectionAnimated } from '../components/product/CustomerLogosSectionAnimated'

const CareersPage = (props) => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 20;

    function openFlyout(benefit) {
console.log('#' + benefit)
        const flyout = document.querySelector('#' + benefit)
console.log('open ', flyout)
        flyout.style.display = 'block';
    }

    function closeFlyout(benefit) {
console.log(close + '#' + benefit)
        const flyout = document.querySelector('#' + benefit)
console.log('close ', flyout)
        flyout.style.display = 'none';
    }

    function inputChange(newValue) {
        console.log(newValue)
        // Todo: clear value of input field on change; and then pu in the correct value
    }

    return (
        <Layout location={props.location}>
            <div className="careers">
                <div className="my-6">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 my-8 text-center">
                                <img src="../test-seed-1.png" className="seeds mb-4" />
                                <h4 className="display-3">Imagine... you're a seed</h4>
                                <div>
                                    <Link
                                        className="btn btn-primary my-2"
                                        to="#"
                                        title="Talent grows here"
                                    >
                                        Talent grows here
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-12 my-8 text-center">
                                <img src="../test-seed-2.png" className="seeds mb-4" />
                                <h4 className="display-3">Fragile, fluid, and alive -</h4>
                                <div>
                                    <Link
                                        className="btn btn-primary my-2"
                                        to="#"
                                        title="Talent grows here"
                                    >
                                        Talent grows here
                                    </Link>
                                </div>
                            </div>
                            
                            <div className="col-lg-12 my-8 text-center">
                                <img src="../test-seed-3.png" className="seeds mb-4" />
                                <h4 className="display-3">looking for the perfect condition to thrive.</h4>
                                <p>
                                    All remote - work from anywhere.
                                </p>
                                <div>
                                    <Link
                                        className="btn btn-primary my-2"
                                        to="#"
                                        title="Talent grows here"
                                    >
                                        Talent grows here
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-12 my-8 text-center">
                                <img src="../test-seed-4.png" className="seeds mb-4" />
                                <h4 className="display-3">You seek fertile soil,</h4>
                                <p>
                                    A transparent and people-first culture.
                                </p>
                                <div>
                                    <Link
                                        className="btn btn-primary my-2"
                                        to="#"
                                        title="Talent grows here"
                                    >
                                        Talent grows here
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-12 my-8 text-center">
                                <img src="../test-seed-4.png" className="seeds mb-4" />
                                <h4 className="display-3">a home where it’s okay to rest after a heavy rain,</h4>
                                <p>
                                    Unlimited time off with a 30-day PTO requirement.
                                </p>
                                <div>
                                    <Link
                                        className="btn btn-primary my-2"
                                        to="#"
                                        title="Talent grows here"
                                    >
                                        Talent grows here
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-12 my-8 text-center">
                                <img src="../test-seed-4.png" className="seeds mb-4" />
                                <h4 className="display-3">and to be a part of a diverse ecosystem.</h4>
                                <p>
                                    Competitive financial benefits and stock options.
                                </p>
                                <div>
                                    <Link
                                        className="btn btn-primary my-2"
                                        to="#"
                                        title="Talent grows here"
                                    >
                                        Talent grows here
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-12 my-8 text-center">
                                <img src="../test-seed-4.png" className="seeds mb-4" />
                                <h4 className="display-3">Because you know real growth happens when we take care of each other;</h4>
                                <p>
                                    Financial compensation for wellness, family planning, and continued education.
                                </p>
                                <div>
                                    <Link
                                        className="btn btn-primary my-2"
                                        to="#"
                                        title="Talent grows here"
                                    >
                                        Talent grows here
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-12 my-8 text-center">
                                <img src="../test-seed-4.png" className="seeds mb-4" />
                                <h4 className="display-3">our roots grow deeper, leaves become stronger,  and wildflowers bloom.</h4>
                                <p>
                                    Explore our Talent Garden
                                </p>
                                <div>
                                    <Link
                                        className="btn btn-primary my-2"
                                        to="#"
                                        title="Talent grows here"
                                    >
                                        Talent grows here
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ContentSection className="mt-8">
                    <div className="row">
                        <div className="col-lg-5 mr-6">
                            <h3>Featured Jobs</h3>
                            <p className="font-size-medium">
                                Thriving? Apply to our open positions that come with fantastic benefits, unique perks, 
                                and a real plant that will keep you blooming.
                            </p>
                            <p className="font-size-medium">
                                You will solve thrilling problems as a member of the world's most-wanted engineering teams. 
                                And grow your roots in an all-remote diverse ecosystem.
                            </p>
                            <Link
                                className="btn btn-dark my-2"
                                to="#"
                                title="Talent grows here"
                            >
                                Explore all jobs<ArrowRightIcon />
                            </Link>
                        </div>
                        <div className="col-lg-5 ml-6">
                            <div className="scrollable-container">
                                <div className="mb-6">
                                    <h3 className="font-weight-normal">Administrative</h3>
                                    <a className="job-link mt-4" href="">Chief of Staff to CEO</a>
                                </div>
                                <div className="mb-6">
                                    <h3 className="font-weight-normal">Business Operations</h3>
                                    <a className="job-link mt-4" href="">Data Analyst</a>
                                    <a className="job-link mt-4" href="">Director of Data & Analytics</a>
                                </div>
                                <div className="mb-6">
                                    <h3 className="font-weight-normal">Engineering</h3>
                                    <a className="job-link mt-4" href="">Engineering Manager - Dev Ops</a>
                                    <a className="job-link mt-4" href="">Full Stack Engineer - Extensibility</a>
                                </div>
                                <div className="mb-6">
                                    <h3 className="font-weight-normal">Marketing</h3>
                                    <a className="job-link mt-4" href="">Developer Educator</a>
                                    <a className="job-link mt-4" href="">Manager of Internal Communications</a>
                                </div>
                                <div className="mb-6">
                                    <h3 className="font-weight-normal">Product</h3>
                                    <a className="job-link mt-4" href="">Director of Product Design</a>
                                    <a className="job-link mt-4" href="">Product Manager - Search Core</a>
                                </div>
                                <div className="mb-6">
                                    <h3 className="font-weight-normal">Sales</h3>
                                    <a className="job-link mt-4" href="">Sales Development Representative, US</a>
                                    <a className="job-link mt-4" href="">Senior Advisor, Value Engineering</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </ContentSection>

                <div className="mt-8 bg-dark">
                    <ContentSection className="benefits">
                        <div className="row">
                            <div className="col-lg-12">
                                <span className="font-size-large float-left">Benefits</span>
                                <span className="font-size-large float-right">& Perks</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div id="animated-container">
                                    <div id="animated-text">
                                        <h2 className="carouselItem d-inline-block mx-3 font-size-large" onClick={() => openFlyout('AllRemote')}>
                                            <img className="icon mx-3 mb-3" src="../icons/Remote_white.png" />
                                            All Remote
                                        </h2>
                                        <h2 className="carouselItem d-inline-block mx-3 font-size-large" onClick={() => openFlyout('FlexiblePTO')}>
                                            <img className="icon mx-3 mb-3" src="../icons/PTO_white.png" />
                                            Flexible PTO
                                        </h2>
                                        <h2 className="carouselItem d-inline-block mx-3 font-size-large" onClick={() => openFlyout('Wellness')}>
                                            <img className="icon mx-3 mb-3" src="../icons/Wellness_white.png" />
                                            Wellness
                                        </h2>
                                        <h2 className="carouselItem d-inline-block mx-3 font-size-large" onClick={() => openFlyout('FamilyPlanningSupport')}>
                                            <img className="icon mx-3 mb-3" src="../icons/FamilyPlanningSupport_white.png" />
                                            Family Planning Support
                                        </h2>
                                        <h2 className="carouselItem d-inline-block mx-3 font-size-large" onClick={() => openFlyout('ProfessionalDevelopment')}>
                                            <img className="icon mx-3 mb-3" src="../icons/BenefitEducation.svg" />
                                            Professional Development
                                        </h2>
                                        <h2 className="carouselItem d-inline-block mx-3 font-size-large" onClick={() => openFlyout('Travel')}>
                                            <img className="icon mx-3 mb-3" src="../icons/BenefitTravel.svg" />
                                            Travel
                                        </h2>
                                    </div>
                                </div>
                                
                                <div className="flyoutContainer">
                                    <div id="AllRemote" className="flyout">
                                        <div className="flyoutHeader p-2">
                                            <img className="icon my-4 mx-4" src="" />
                                            <span className="flyoutTitle">All Remote</span>
                                            <span className="float-right mx-3 closeIcon" onClick={() => closeFlyout('AllRemote')}>x</span>
                                        </div>
                                        <div className="px-5 py-2 flyoutBody">
                                            <p>
                                                We want our teammates to be happy, healthy, and productive. In order to best support that, we provide the following perks and benefits.
                                            </p>
                                        </div>
                                    </div>
                                    <div id="FlexiblePTO" className="flyout">
                                        <div className="flyoutHeader p-2">
                                            <img className="icon my-4 mx-4" src="" />
                                            <span className="flyoutTitle">Flexible PTO</span>
                                            <span className="float-right mx-3 closeIcon" onClick={() => closeFlyout('FlexiblePTO')}>x</span>
                                        </div>
                                        <div className="px-5 py-2 flyoutBody">
                                            <p>
                                                We want our teammates to be happy, healthy, and productive. In order to best support that, we provide the following perks and benefits.
                                            </p>
                                        </div>
                                    </div>
                                    <div id="Wellness" className="flyout">
                                        <div className="flyoutHeader p-2">
                                            <img className="icon my-4 mx-4" src="../icons/Wellness_black.png" />
                                            <span className="flyoutTitle">Wellness</span>
                                            <span className="float-right mx-3 closeIcon" onClick={() => closeFlyout('Wellness')}>x</span>
                                        </div>
                                        <div className="px-5 py-2 flyoutBody">
                                            <p>
                                                A healthy mind and body is imperative to doing your best work and living a healthy life.
                                            </p>
                                            <p>
                                                We offer an $100 monthly wellness stipend that can be used at your discretion.
                                            </p>
                                        </div>
                                    </div>
                                    <div id="FamilyPlanningSupport" className="flyout">
                                        <div className="flyoutHeader p-2">
                                            <img className="icon my-4 mx-4" src="" />
                                            <span className="flyoutTitle">Family Planning Support</span>
                                            <span className="float-right mx-3 closeIcon" onClick={() => closeFlyout('FamilyPlanningSupport')}>x</span>
                                        </div>
                                        <div className="px-5 py-2 flyoutBody">
                                            <p>
                                                ...
                                            </p>
                                        </div>
                                    </div>
                                    <div id="ProfessionalDevelopment" className="flyout">
                                        <div className="flyoutHeader p-2">
                                            <img className="icon my-4 mx-4" src="" />
                                            <span className="flyoutTitle">Professional Development</span>
                                            <span className="float-right mx-3 closeIcon" onClick={() => closeFlyout('ProfessionalDevelopment')}>x</span>
                                        </div>
                                        <div className="px-5 py-2 flyoutBody">
                                            <p>
                                                ...
                                            </p>
                                        </div>
                                    </div>
                                    <div id="Travel" className="flyout">
                                        <div className="flyoutHeader p-2">
                                            <img className="icon my-4 mx-4" src="" />
                                            <span className="flyoutTitle">Travel</span>
                                            <span className="float-right mx-3 closeIcon" onClick={() => closeFlyout('Travel')}>x</span>
                                        </div>
                                        <div className="px-5 py-2 flyoutBody">
                                            <p>
                                                ...
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <p className="font-size-large">
                                    We want our teammates to be happy, healthy, and productive. In order to best support that,
                                    this is what we provide.
                                </p>
                            </div>
                        </div>
                    </ContentSection>
                </div>

                <div className="bg-image">
                </div>

                <ContentSection className="values mt-8 mb-6">
                    <div className="row">
                        <div className="col-lg-9">
                            <h1 className="font-size-extra-large">Values</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-9">
                            <h1 className="font-size-extra-large">&</h1>
                        </div>
                        <div className="col-lg-2">
                            <img src="../Culture1.png" />
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-lg-5">
                            <h3 className="font-weight-bold">Be Customer Driven</h3>
                            <p className="mt-4">
                                You proactively work on the right things by continuously orienting your goals around delivering value to 
                                your customers.
                            </p>
                        </div>
                        <div className="col-lg-4">
                            <h3 className="font-weight-bold">Work as a Team</h3>
                            <p className="mt-4">
                                You work collaboratively with your peers, cross-functional teammates, and leadership to create shared success, 
                                trust, and belonging.
                            </p>
                        </div>
                        <div className="col-lg-3">
                            <img src="../Culture2.png" />
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-lg-4 mt-8">
                            <img src="../Culture3.png" />
                        </div>
                        <div className="col-lg-4 mt-8">
                            <h1 className="font-size-extra-large">Culture</h1>
                        </div>
                        <div className="col-lg-4 mt-4">
                            <h3 className="font-weight-bold">High Agency</h3>
                            <p className="mt-4">
                                You have the power and the responsibility to improve Sourcegraph as a company and as a product. 
                                You deliver regardless of the circumstances.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 mt-4">
                            <h3 className="font-weight-bold">High Quality</h3>
                            <p className="mt-4">
                                You are responsible for finding out what high-quality work looks like and producing that 
                                high-quality work iteratively.
                            </p>
                        </div>
                        <div className="col-lg-4 mt-4">
                            <h3 className="font-weight-bold">Welcoming and inclusive</h3>
                            <p className="mt-4">
                                You make people from all groups and backgrounds feel comfortable belonging to our team and community.
                            </p>
                        </div>
                        <div className="col-lg-4 mt-4">
                            <h3 className="font-weight-bold">Open and transparent</h3>
                            <p className="mt-4">
                                You proactively communicate in an open and transparent way.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4"></div>
                        <div className="col-lg-4 mt-8">
                            <h3 className="font-weight-bold">Continuously grow</h3>
                            <p className="mt-4">
                                You strive to continuously grow and learn by genuinely soliciting feedback early and often, and humbly 
                                reflecting on your past mistakes.
                            </p>
                        </div>
                        <div className="col-lg-4">
                            <div className="row flex-nowrap">
                                <img className="mr-3" src="../Culture4.png" />
                                <img src="../Culture5.png" />
                            </div>
                            <div className="row">
                                <img className="mt-6" src="../Culture6.png" />
                            </div>
                        </div>
                    </div>
                </ContentSection>

                <div className="bg-light-yellow">
                    <ContentSection className="py-7">
                        <div className="row">
                            <div className="col-lg-6">
                                <h3>Stay in Touch</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                                    et dolore magna aliqua. Interdum varius sit amet mattis vulputate enim nulla aliquet porttitor.
                                </p>
                            </div>
                        </div>
                        <div className="row my-6">
                            <div className="col-lg-12">
                                <input className="subtle-text-input" type="text" defaultValue="Enter email here" onChange={inputChange} />
                            </div>
                        </div>
                    </ContentSection>
                </div>

                <ContentSection className="mt-8">
                    <div className="row">
                        <div className="col-lg-6">
                            <h3>Our Clients</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                                et dolore magna aliqua. Interdum varius sit amet mattis vulputate enim nulla aliquet porttitor.
                            </p>
                        </div>
                        <CustomerLogosSectionAnimated showButton={true} className="pt-5" />
                    </div>
                </ContentSection>

                <div className="nav-bottom fixed-bottom d-flex p-4">
                    <div className="mx-auto justify-content-center">
                        <div className="">Scroll</div>
                        <ArrowDownIcon className="mx-auto w-100"/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CareersPage