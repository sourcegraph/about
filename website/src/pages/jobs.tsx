import React, { useState } from 'react'
import { Link } from 'gatsby'
import ArrowDownIcon from 'mdi-react/ArrowDownIcon'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon'
import Layout from '../components/Layout'
import { ContentSection } from '../components/content/ContentSection'
import { CustomerLogosSectionAnimated } from '../components/product/CustomerLogosSectionAnimated'

const CareersPage = props => {
    const [activeItemIndex, setActiveItemIndex] = useState(0)
    const chevronWidth = 20

    function openFlyout(benefit) {
        const flyout = document.querySelector('#' + benefit)
        flyout.style.display = 'block'
    }

    function closeFlyout(benefit) {
        const flyout = document.querySelector('#' + benefit)
        flyout.style.display = 'none'
    }

    return (
        <Layout location={props.location}>
            <div className="careers">
                <ContentSection className="py-7">
                    <div className="row">
                        <div className="col-lg-10">
                            <h1 className="display-2">
                                At Sourcegraph, you'll build the world's most useful DevOps product,
                                working closely with a talented team.
                            </h1>
                        </div>
                    </div>
                    <Link className="btn btn-primary my-4" to="https://boards.greenhouse.io/sourcegraph91" title="Explore all jobs">
                        Explore all jobs
                        <ArrowRightIcon className="ml-3" />
                    </Link>
                </ContentSection>

                <div className="row">
                    <img src="../careers_hero_img.png" className="heroImage"/>
                </div>

                <ContentSection className="my-8">
                    values
                </ContentSection>

                <ContentSection className="my-8">
                    <div className="row">
                        <div className="col-lg-7 m-auto">
                            <h1 className="display-2 text-center">
                                Happy, healthy, and always in the flow.
                            </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 text-center">
                            <img className="icon my-2" src="../icons/Remote.svg" />
                            <h3 className="my-2">All-Remote</h3>
                            <p>Flexible work hours, work with the best people worldwide, and never waste time commuting</p>
                        </div>
                        <div className="col-lg-4 text-center">
                            <img className="icon my-2" src="../icons/PTO.svg" />
                            <h3 className="my-2">Flexible PTO</h3>
                            <p>A flexible Paid Time Off policy with mandatory annual vacation.</p>
                        </div>
                        <div className="col-lg-4 text-center">
                            <img className="icon my-2" src="../icons/Money.svg" />
                            <h3 className="my-2">Competitive Pay</h3>
                            <p>No location-based salary cuts.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 text-center">
                            <img className="icon my-2" src="../icons/Wellness.svg" />
                            <h3 className="my-2">Wellness</h3>
                            <p>A $100 monthly wellness stipend that can be used at your discretion.</p>
                        </div>
                        <div className="col-lg-4 text-center">
                            <img className="icon my-2" src="../icons/Travel.svg" />
                            <h3 className="my-2">Travel</h3>
                            <p>Generous company, team, and individual travel budgets to encourage you to connect face to face with your teammates regularly.</p>
                        </div>
                        <div className="col-lg-4 text-center">
                            <img className="icon my-2" src="../icons/Medical.svg" />
                            <h3 className="my-2">Medical</h3>
                            <p>We cover 100% of premiums for medical, dental, and vision insurance for US-based full-time employees and dependents.</p>
                        </div>
                    </div>
                </ContentSection>

                <div className="bg-gradient-green-blue p-8">
                    <div className="row">
                        <div className="col-lg-1">
                            <ArrowLeftIcon className="" />
                        </div>
                        <h1 className="col-lg-5">
                            <p className="">
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit”
                            </p>
                        </h1>
                        <div className="col-lg-5">
                            <img src="../careers_culture_img.png" className="heroImage"/>
                        </div>
                        <div className="col-lg-1">
                            <ArrowRightIcon className="" />
                        </div>
                    </div>
                </div>

                <div className="row my-3">
                    <div className="col-lg-12">
                        <img src="../Culture_8.png" />
                    </div>
                </div>

                <ContentSection className="py-7">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="display-2 font-weight-bold">What you seek is seeking you</h1>
                            <p>
                                We're looking forward to remind you that "you're on mute". :)
                            </p>
                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to="https://boards.greenhouse.io/sourcegraph91" title="Explore all jobs">
                        Explore all jobs
                        <ArrowRightIcon className="ml-3" />
                    </Link>
                </ContentSection>
            </div>
        </Layout>
    )
}

export default CareersPage
