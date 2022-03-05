import React, { FunctionComponent, ReactNode } from 'react'
import { PageProps } from 'gatsby'

import Layout from '../../components/Layout'

import TopRightTriangle from './assets/top-right-triangle.el.svg'
import LeftTriangleSmall from './assets/left-triangle-small.el.svg'
import LeftTriangleLarge from './assets/left-triangle-large.el.svg'
import SmallRectangle from './assets/small-rectangle.el.svg'
import LargeRectangle from './assets/large-rectangle.el.svg'
import BottomLeftTriangle from './assets/bottom-left-triangle.el.svg'
import BottomRightTriangle from './assets/bottom-right-triangle.el.svg'

import Presenter1 from './assets/presenter-1.png'

import styles from './webinar.module.scss'

const Avatar: FunctionComponent<{src: string, alt: string}> = ({ src, alt }) => (
    <div className={`${styles.avatar} d-flex align-items-center justify-content-center rounded-circle mx-auto mb-5`}>
        <img src={src} alt={alt} />
    </div>
)

interface PresenterInfoProps {
    background: ReactNode
    avatar: string
    name: string
    role: string
    bio: string
}

const PresenterInfo: FunctionComponent<PresenterInfoProps> = ({ background, avatar, name, role, bio }) => (
    <>
        <div className="position-relative">
            {background}
            <Avatar src={avatar} alt={`photo of ${name}, ${role}`} />
        </div>
        <h4 className="mb-0">{name}</h4>
        <p className="mt-0 mb-4 font-weight-bold">{role}</p>
        <p>{bio}</p>
    </>
)

const Webinar: FunctionComponent<PageProps> = props => (
    <Layout
        location={props.location}
        meta={{
            // TODO: Marketing will provide meta
            title: '',
            description: ''
        }}
        minimal={true}
        heroAndHeaderClassName={styles.headerContainer}
        className="navbar-dark bg-black position-relative overflow-hidden"
    >
        <TopRightTriangle className={styles.topRightTriangle} />
        <BottomLeftTriangle className={styles.bottomLeftTriangle} />
        <BottomRightTriangle className={styles.bottomRightTriangle} />

        <div className="position-relative pb-lg-6 pt-6">
            <LeftTriangleSmall className={`${styles.leftTriangleSmall} d-none d-lg-block`} />

            <div className="container-lg">
                {/* TODO: Marketing will provide copy */}
                <h1 className="text-white display-1 mb-6">Write Your Catchy Headline Here!</h1>

                <div className="row">
                    <div className="col-lg-6 pr-lg-6 text-white">
                        {/* TODO: Marketing will provide date and calendar link */}
                        <h4 className="font-weight-normal mb-4">Tuesday, Feb 1, 2022 11:am PT / 2:00pm ET</h4>
                        <a href="#TODO-waiting-on-marketing-to-provide" className={`${styles.btn} btn text-white`}>
                            Add to Calendar
                        </a>

                        <h3 className="display-3 mt-6">About:</h3>
                        {/* TODO: Marketing will provide copy */}
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio</p>

                        <h3 className="display-3 mt-6">You'll Learn:</h3>
                        {/* TODO: Marketing will provide copy */}
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetuer</li>
                            <li>Lorem ipsum dolor sit amet, consectetuer</li>
                            <li>Lorem ipsum dolor sit amet, consectetuer</li>
                            <li>Lorem ipsum dolor sit amet, consectetuer</li>
                            <li>Lorem ipsum dolor sit amet, consectetuer</li>
                        </ul>
                    </div>

                    
                    <div className="col-lg-6 mt-8 mt-lg-0 px-0 px-lg-3 position-relative">
                        <LeftTriangleSmall className={`${styles.leftTriangleSmallMobile} d-block d-lg-none`} />
                        <SmallRectangle className={styles.smallRectangle} />

                        {/* TODO: Marketing will provide demio form */}
                        <div className={`${styles.form} position-relative`}></div>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-white pt-5 pb-8">
            <div className="container">
                <h3 className="display-3">Presenters:</h3>

                <div className="row mt-6">
                    <div className="col-lg-6 pr-lg-7">
                        {/* TODO: Update avatar. Waiting on final asset. */}
                        <PresenterInfo
                            background={<LeftTriangleLarge className={styles.leftTriangleLarge} />}
                            avatar={Presenter1}
                            name="Beyang Liu"
                            role="CTO and co-founder of Sourcegraph"
                            bio="Beyang Liu is the CTO and co-founder of Sourcegraph, the company pioneering universal code search for dev teams and making coding more accessible to more people. Many of the world's leading companies are Sourcegraph customers, including 3/5 FAANG, PayPal, Uber, Plaid, GE, Yelp, and Atlassian. The company is valued at $2.625B from leading investors Andreessen Horowitz, Sequoia Capital, Redpoint, and Craft Ventures."
                        />
                    </div>
                    <div className="col-lg-6 pb-6 pl-lg-7 position-relative">
                        {/* TODO: Update avatar. Waiting on final asset. */}
                        <PresenterInfo
                            background={<LargeRectangle className={styles.largeRectangle} />}
                            avatar={Presenter1}
                            name="Emily Chapman"
                            role="Sr. Customer Engineer at Sourcegraph"
                            bio="Emily Chapman is a Senior Customer Engineer at Sourcegraph. Prior to Sourcegraph, Emily worked in a variety of customer-facing roles at Mailchimp, Trello, Atlassian, and Help Scout. She has a BA in Anthropology from Emory University, which doesn't directly tie into her work with code search but does give her lots of fun facts about bog bodies to break out at parties. She developed lanaipsum.com, the first—and as far as she knows, only—Lana del Rey themed lorem ipsum generator."
                        />
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default Webinar
