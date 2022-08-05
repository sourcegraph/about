import { FunctionComponent } from 'react'

import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import Link from 'next/link'

import { Layout, BackButton } from '@components'
import { buttonStyle, buttonLocation } from '@data'
import { useQueryString } from '@hooks'

import { DesignedForTitle } from '.'

import styles from './getStarted.module.scss'

export const CloudPage: FunctionComponent = () => {
    const routerHook = useQueryString()

    return (
        <Layout
            meta={{
                title: 'Get Started with Sourcegraph Cloud',
                description:
                    'Search across your repositories and the open-source universe with Sourcegraph Cloud. No technical setup is required. Sign up for free.',
            }}
            hero={
                <div className="py-5 container-xl">
                    <h1 className="mb-2 display-1">
                        <strong>What's best for you?</strong>
                    </h1>
                    <p>From GE to Uber, the world's best developers use Sourcegraph every day.</p>
                </div>
            }
            heroAndHeaderClassName={styles.hero}
            hideGetStartedButton={true}
        >
            <div className={`${styles.root} sg-bg-gradient-venus py-5`}>
                <div className="py-5 mx-auto row container-xl">
                    <div className="col-lg-6">
                        <div>
                            <BackButton
                                href={`/get-started${routerHook.queryString ? `?${routerHook.queryString}` : ''}`}
                                text="Deployment Options"
                            />

                            <h1 className="mb-4 display-2 font-weight-bolder">Sourcegraph Cloud</h1>

                            <p>Sync your code from GitHub.com or GitLab.com. No technical setup is required.</p>

                            <DesignedForTitle />
                            <p>Individual developers</p>

                            <p>
                                Search all your repositories and the open source universe without having to install or
                                manage a deployment.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className={routerHook.navigatedFromProduct ? 'd-flex flex-column-reverse' : ''}>
                            <div
                                className={`bg-white rounded p-5 ${routerHook.navigatedFromProduct ? 'mt-5' : 'mb-5'}`}
                            >
                                <h3 className="mb-3">Search open source code</h3>
                                <p className="mb-5">No account required.</p>
                                <a
                                    href="https://sourcegraph.com/search"
                                    className="btn btn-primary"
                                    title="Start searching now"
                                    data-button-style={buttonStyle.primary}
                                    data-button-location={buttonLocation.body}
                                    data-button-type="cta"
                                >
                                    Start searching now <ArrowRightIcon className="tw-inline" />
                                </a>
                            </div>

                            <div className="px-5 pt-5 pb-1 bg-white rounded">
                                <h3>Create a free Sourcegraph Cloud account to search your private code</h3>

                                <div className="d-flex flex-column w-75">
                                    <a
                                        href="https://sourcegraph.com/.auth/github/login?pc=https%3A%2F%2Fgithub.com%2F%3A%3Ae917b2b7fa9040e1edd4&redirect=%2Fwelcome"
                                        className="mt-3 text-center text-white bg-black btn w-100"
                                        title="Continue with GitHub"
                                        data-button-style={buttonStyle.text}
                                        data-button-location={buttonLocation.body}
                                        data-button-type="cta"
                                    >
                                        <img
                                            src="/external-logos/GitHub-Mark-Light-32px.png"
                                            width="30"
                                            height="30"
                                            className="mr-3 tw-inline"
                                            alt="GitHub"
                                        />
                                        Continue with GitHub
                                    </a>

                                    <a
                                        href="https://sourcegraph.com/.auth/gitlab/login?pc=https%3A%2F%2Fgitlab.com%2F%3A%3A013395a61a639f4c3eb3668b89c96039637a86ebb6831f1e141627df3d55384d&redirect=%2Fwelcome"
                                        className="mt-3 text-white btn w-100 tw-bg-blurple-400"
                                        title="Continue with GitLab"
                                        data-button-style={buttonStyle.text}
                                        data-button-location={buttonLocation.body}
                                        data-button-type="cta"
                                    >
                                        <img
                                            src="/external-logos/gitlab-mark.svg"
                                            width="32"
                                            height="32"
                                            className="mr-3 tw-inline"
                                            alt="GitLab"
                                        />
                                        Continue with GitLab
                                    </a>
                                </div>

                                <p className="my-3 small-font">
                                    Or,{' '}
                                    <a
                                        href="https://sourcegraph.com/sign-up?_ga=2.155066808.1628120401.1642532503-600077800.1642532503&showEmail=true"
                                        title="continue with email"
                                        className="mt-3 text-black tw-underline text-reset"
                                        data-button-style={buttonStyle.text}
                                        data-button-location={buttonLocation.body}
                                        data-button-type="cta"
                                    >
                                        continue with email
                                    </a>
                                </p>

                                <p className="my-3">
                                    <small>
                                        By registering, you agree to our{' '}
                                        <Link href="/terms" passHref={true}>
                                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                            <a
                                                className="text-black text-reset tw-underline"
                                                title="Terms of Service"
                                                data-button-style={buttonStyle.text}
                                                data-button-location={buttonLocation.body}
                                                data-button-type="cta"
                                            >
                                                Terms of Service
                                            </a>
                                        </Link>{' '}
                                        and{' '}
                                        <Link href="/privacy" passHref={true}>
                                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                            <a
                                                className="text-black tw-underline text-reset"
                                                title="Privacy Policy"
                                                data-button-style={buttonStyle.text}
                                                data-button-location={buttonLocation.body}
                                                data-button-type="cta"
                                            >
                                                Privacy Policy
                                            </a>
                                        </Link>
                                        .
                                    </small>
                                </p>

                                <hr className="my-4" />

                                <p>
                                    Already have an account?{' '}
                                    <a
                                        href="https://sourcegraph.com/sign-in"
                                        title="Search public code with Sourcegraph Cloud"
                                        className="text-black text-reset tw-underline"
                                        data-button-style={buttonStyle.text}
                                        data-button-location={buttonLocation.body}
                                        data-button-type="cta"
                                    >
                                        Log in
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CloudPage
