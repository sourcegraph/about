import React from 'react'
import { ContentSection } from '../../components/content/ContentSection'
import Layout from '../../components/Layout'
import { YouTube } from '../../components/YouTube'

export default ((props: any) => (
    <Layout
        location={props.location}
        minimal={true}
        meta={{
            title: "Our ABCs: Always Be Coding children's book. Made with ❤️ by Sourcegraph.",
            description:
                'At Sourcegraph, many of us have young children who we’re trying to provide fun new learning experiences for at home. That\'s why we created a new digital children’s book titled "Our ABCs: Always Be Coding"—for all children that wonder what their techie parents do all day, night, and some weekends, too!',
            image: 'https://about.sourcegraph.com/other/abcs-book/our-abcs.png',
        }}
    >
        <ContentSection color="white" className="pt-6 pb-5">
            <div className="row justify-content-md-center">
                <div className="col-small-12">
                    <p className="text-center">
                        <img src="/other/abcs-book/our-abcs-hero.png" className="w-100 px-2 mb-3" role="presentation" alt="Our ABCs: Always Be Coding book" />
                    </p>
                    <h1 className="text-center">Our ABCs: Always Be Coding children's book</h1>
                    <p className="text-center my-5">
                        <a
                            className="button btn btn-primary"
                            id="abc-dlbook"
                            href="https://about.sourcegraph.com/resources/our-abcs-childrens-book-download"
                        >
                            Download your book
                        </a>
                    </p>
                    <hr />
                </div>
            </div>
            <div className="row justify-content-md-center mt-3">
                <div className="col-md-8">
                    <YouTube id="6bCO63O4swI" title="Our ABCs: Always Be Coding children's book by Sourcegraph" />
                    <p className="mt-5">
                        At Sourcegraph, many of us have young children who we’re trying to provide fun new learning
                        experiences for at home.
                    </p>
                    <p>
                        That's why we created a new digital children’s book titled{' '}
                        <a href="https://about.sourcegraph.com/resources/our-abcs-childrens-book-download">
                            <strong>&quot;Our ABCs: Always Be Coding&quot;</strong>
                        </a>
                        —for all children at home that wonder what their techie parents do all day, night, and some
                        weekends too!
                    </p>
                    <p>
                        The A-Z format introduces simple concepts in a fun and easy-to-understand way so that kids can
                        get curious about coding and perhaps take the first step in beginning their journey in learning
                        how to code. Or at least it will provide an engaging and educational distraction to give you a
                        break for a few minutes!
                    </p>
                    <p className="text-center">
                        <a
                            href="https://about.sourcegraph.com/resources/our-abcs-childrens-book-download"
                            className="d-block"
                            id="abc-dlbook"
                        >
                            <img
                                src="/other/abcs-book/our-abcs.png"
                                className="img-drop-shadow mb-0"
                                width="350px"
                                alt="Book cover: Our ABCs"
                            />
                        </a>
                    </p>
                    <p className="text-center my-5">
                        <a
                            className="button btn btn-primary"
                            id="abc-dlbook"
                            href="https://about.sourcegraph.com/resources/our-abcs-childrens-book-download"
                        >
                            Download your book
                        </a>
                    </p>
                    <p>
                        We hope you enjoy the book and would love to get your feedback{' '}
                        <a href="https://twitter.com/intent/tweet?text=For%20all%20children%20at%20home%20that%20wonder%20what%20their%20techie%20parents%20do%20all%20day%2C%20night%2C%20and%20some%20weekends%2C%20too%2C%20they%20need%20the%20%22Our%20ABCs%3A%20Always%20Be%20Coding%22%20book%20by%20@sourcegraph%20-%20https%3A//about.sourcegraph.com/abc%20%23ABCsbook">
                            via Twitter
                        </a>{' '}
                        or <a href="mailto:hi+abc@sourcegraph.com">email</a>.
                    </p>

                    <p className="text-center">
                        <a
                            className="button btn btn-primary"
                            href="https://twitter.com/intent/tweet?text=For%20all%20children%20at%20home%20that%20wonder%20what%20their%20techie%20parents%20do%20all%20day%2C%20night%2C%20and%20some%20weekends%2C%20too%2C%20they%20need%20the%20%22Our%20ABCs%3A%20Always%20Be%20Coding%22%20book%20by%20@sourcegraph%20-%20https%3A//about.sourcegraph.com/abc%20%23abcsbook%20%23TYCTWD%20%23TODASTW%20%23BringYourKidsToWorkDay"
                        >
                            <svg className="mdi-icon " width="25" height="25" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"></path>
                            </svg>
                            Click to Tweet
                        </a>
                    </p>

                    <h2 className="mt-5">FAQs</h2>

                    <p>We've had quite a few folks reach out with questions about this book and future ones.</p>

                    <h3 className="h4 pt-3">Do you plan on selling this as a physical book?</h3>
                    <p>
                        We want to make it easy for folks to get a physical copy and while we don’t (yet) have plans to
                        print and distribute, we’re looking into vendors that can print and ship on demand. In any case,
                        the PDF is high-resolution so you can print it yourself.
                    </p>

                    <h3 className="h4 pt-3">Do you have any other books like this planned?</h3>
                    <p>
                        We've been blown away by the response to this book and while we'd love to add "children's book
                        authoring" to the list of Sourcegraph capabilities, we haven't yet decided if we plan to turn
                        this into a series of similar books.
                    </p>
                </div>
            </div>
            <hr />
            <div className="row justify-content-md-center mt-5">
                <div className="col-md-10">
                    <h3 className="text-center">About Sourcegraph</h3>
                    <p>
                        Sourcegraph empowers all developers to explore, navigate and better understand all code, faster, with{' '}
                        <a href="/universal-code-search">Universal Code Search</a>. 
                        Sourcegraph’s mission is to make it easier and faster for developers to work on solving problems.
                        
                      
                    </p>
                    <p>
                        To learn more, get our ebook:{' '}
                        <a href="/resources/universal-code-search-ebook/?utm_source=abc">
                            Sourcegraph: Universal code search and intelligence
                        </a>
                        .
                    </p>
                </div>
            </div>
        </ContentSection>
    </Layout>
)) as React.FunctionComponent<any>
