import React, { useState } from 'react'
import { Link } from 'gatsby'
import ArrowDownIcon from 'mdi-react/ArrowDownIcon'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon'
import Layout from '../components/Layout'
import Carousel from '../components/Carousel'
import { ContentSection } from '../components/content/ContentSection'
import { CustomerLogosSectionAnimated } from '../components/product/CustomerLogosSectionAnimated'

const CareersPage = props => {
    let items = [
        {
            id: 1,
            buttonLabel: 'Being Customer-First',
            imageUrl: '../careers_hero_img.png',
            text: '0',
            className: 'active',
            itemClassName: 'd-block',
        },
        {
            id: 2,
            buttonLabel: 'Work as a Team',
            imageUrl: '../careers_hero_img.png',
            text: '1',
            className: '',
            itemClassName: 'd-none',
        },
        {
            id: 3,
            buttonLabel: 'High Quality',
            imageUrl: '../careers_hero_img.png',
            text: 'You are responsible for finding out what high-quality work looks like and producing that high-quality work iteratively.',
            className: '',
            itemClassName: 'd-none',
        },
        {
            id: 4,
            buttonLabel: 'High Agency',
            imageUrl: '../careers_hero_img.png',
            text: '3',
            className: '',
            itemClassName: 'd-none',
        },
        {
            id: 5,
            buttonLabel: 'Welcoming & Inclusive',
            imageUrl: '../careers_hero_img.png',
            text: '4',
            className: '',
            itemClassName: 'd-none',
        },
        {
            id: 6,
            buttonLabel: 'Open & Transparent',
            imageUrl: '../careers_hero_img.png',
            text: '5',
            className: '',
            itemClassName: 'd-none',
        },
        {
            id: 7,
            buttonLabel: 'Continuos Growth',
            imageUrl: '../careers_hero_img.png',
            text: '6',
            className: '',
            itemClassName: 'd-none',
        },
    ]

    return (
        <Layout location={props.location}>
            <div className="careers">
                <ContentSection className="py-7">
                    <div className="row">
                        <div className="col-lg-11">
                            <h1 className="display-2 font-weight-bold">Let’s build the future together.</h1>
                            <h1 className="display-2 font-weight-normal">
                                We're developing the world's most advanced code search navigation platform with
                                brilliant dreamers around the globe.
                            </h1>
                        </div>
                    </div>
                    <Link
                        className="btn btn-primary my-4"
                        to="https://boards.greenhouse.io/sourcegraph91"
                        title="Explore all jobs"
                    >
                        Explore all jobs
                        <ArrowRightIcon className="ml-3" />
                    </Link>
                </ContentSection>

                <div className="row">
                    <img src="../careers_hero_img.png" className="mx-auto heroImage" />
                </div>

                <ContentSection className="my-8 benefits">
                    <div className="row mb-6">
                        <div className="col-lg-10 m-auto">
                            <h2 className="display-2 text-center">Happy, healthy, and always in the flow.</h2>
                            <p className="text-center">
                                You can view all benefits and details in{' '}
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
                    <div className="row my-6">
                        <div className="col-lg-4 text-center">
                            <img className="icon my-2 mx-auto" src="../careers/Remote.svg" />
                            <h3 className="my-2">Work fully Remote</h3>
                            <p>The world is your oyster-desk</p>
                        </div>
                        <div className="col-lg-4 text-center">
                            <img className="icon my-2 mx-auto" src="../careers/PTO.svg" />
                            <h3 className="my-2">Unlimited PTO</h3>
                            <p>... with a 30-day minimum</p>
                        </div>
                        <div className="col-lg-4 text-center">
                            <img className="icon my-2 mx-auto" src="../careers/Travel.svg" />
                            <h3 className="my-2">Generous travel budgets</h3>
                            <p>Break free from the zoom screen</p>
                        </div>
                    </div>
                    <div className="row my-6">
                        <div className="col-lg-4 text-center">
                            <img className="icon my-2 mx-auto" src="../careers/Salary.svg" />
                            <h3 className="my-2">Competitive pay + equity</h3>
                            <p>Dance on payday</p>
                        </div>
                        <div className="col-lg-4 text-center">
                            <img className="icon my-2 mx-auto" src="../careers/Medical.svg" />
                            <h3 className="my-2">Medical and dental benefits</h3>
                            <p>Got you covered 100%</p>
                        </div>
                        <div className="col-lg-4 text-center">
                            <img className="icon my-2 mx-auto" src="../careers/ProfessionalDevelopment.svg" />
                            <h3 className="my-2">Professional development</h3>
                            <p>Find your thing and we pay for it</p>
                        </div>
                    </div>
                    <div className="row my-6">
                        <div className="col-lg-4 text-center">
                            <img className="icon my-2 mx-auto" src="../careers/OfficeBudget.svg" />
                            <h3 className="my-2">Office budget</h3>
                            <p>Get rid of chair and back pain</p>
                        </div>
                        <div className="col-lg-4 text-center">
                            <img className="icon my-2 mx-auto" src="../careers/Wellness.svg" />
                            <h3 className="my-2">Wellness budget</h3>
                            <p>Take care of yourself</p>
                        </div>
                        <div className="col-lg-4 text-center">
                            <img className="icon my-2 mx-auto" src="../careers/FamilyPlanning.svg" />
                            <h3 className="my-2">Family planning</h3>
                            <p>Fertility benefits for all</p>
                        </div>
                    </div>
                </ContentSection>

                <div className="bg-gradient-green-blue p-8">
                    <div className="row">
                        <div className="col-lg-1">
                            <div className="aligned">
                                <ArrowLeftIcon />
                            </div>
                        </div>
                        <h1 className="col-lg-5">
                            <p className="v-aligned">“Lorem ipsum dolor sit amet, consectetur adipiscing elit”</p>
                        </h1>
                        <div className="col-lg-5">
                            <img src="../careers/careers_culture_img.png" className="heroImage" />
                        </div>
                        <div className="col-lg-1">
                            <div className="aligned">
                                <ArrowRightIcon />
                            </div>
                        </div>
                    </div>
                </div>

                <Carousel className="my-8 mx-7" items={items} />

                <div className="row my-3">
                    <img src="../careers/Culture_8.png" className="culture mx-auto" />
                </div>

                <ContentSection className="py-7 contact">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="display-2">What you seek is seeking you</h2>
                            <p>We're looking forward to remind you that "you're on mute" ;)</p>
                        </div>
                    </div>
                    <Link
                        className="btn btn-primary my-2"
                        to="https://boards.greenhouse.io/sourcegraph91"
                        title="Explore all jobs"
                    >
                        Explore all jobs
                        <ArrowRightIcon className="ml-3" />
                    </Link>
                </ContentSection>
            </div>
        </Layout>
    )
}

export default CareersPage
