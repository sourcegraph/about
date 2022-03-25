import { FunctionComponent } from 'react'

import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import Link from 'next/link'

import { Layout } from '@components'
import { useQueryString } from '@hooks'

import { BackButton } from './self-hosted'

import { BestForTitle } from '.'

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
                <div className="container-xl py-5">
                    <h1 className="display-1 mb-2">
                        <strong>What's best for you?</strong>
                    </h1>
                    <p>From Amazon to Uber, the world's best developers use Sourcegraph every day.</p>
                </div>
            }
            heroAndHeaderClassName={styles.hero}
            hideGetStartedButton={true}
        >
            <div className={`${styles.root} bg-gradient-blue-green py-5`}>
                <div className="row container-xl mx-auto py-5">
                    <div className="col-lg-6">
                        <div>
                            <BackButton />

                            <h1 className="display-2 font-weight-bolder mb-4">Sourcegraph Cloud</h1>

                            <p>Sync your code from GitHub.com or GitLab.com. No technical setup is required.</p>

                            <BestForTitle />
                            <p>Individual developers and small teams (Beta)</p>

                            <p>
                                Search all your repositories, team's repositories, and the open source universe without
                                having to install or manage a deployment.
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
                                <a href="https://sourcegraph.com/search" className="btn btn-primary">
                                    Start searching now <ArrowRightIcon />
                                </a>
                            </div>

                            <div className="bg-white rounded pt-5 pb-1 px-5">
                                <h3>Create a free Sourcegraph Cloud account to search your private code</h3>

                                <div className="d-flex flex-column w-75">
                                    <a
                                        href="https://sourcegraph.com/.auth/github/login?pc=https%3A%2F%2Fgithub.com%2F%3A%3Ae917b2b7fa9040e1edd4&redirect=%2Fwelcome"
                                        className="btn bg-black text-white w-100 text-center mt-3"
                                    >
                                        <img
                                            src="/external-logos/GitHub-Mark-Light-32px.png"
                                            width="30"
                                            height="30"
                                            className="mr-3"
                                            alt="GitHub"
                                        />
                                        Continue with GitHub
                                    </a>

                                    <a
                                        href="https://sourcegraph.com/.auth/gitlab/login?pc=https%3A%2F%2Fgitlab.com%2F%3A%3A013395a61a639f4c3eb3668b89c96039637a86ebb6831f1e141627df3d55384d&redirect=%2Fwelcome"
                                        className={`btn text-white mt-3 w-100 ${styles.gitLab}`}
                                    >
                                        <img
                                            src="/external-logos/gitlab-mark.svg"
                                            width="32"
                                            height="32"
                                            className="mr-3"
                                            alt="GitLab"
                                        />
                                        Continue with GitLab
                                    </a>
                                </div>

                                <p className="small-font my-3">
                                    Or,{' '}
                                    <a
                                        href="https://sourcegraph.com/sign-up?_ga=2.155066808.1628120401.1642532503-600077800.1642532503&showEmail=true"
                                        title="continue with email"
                                        className="text-reset text-black text-decoration-underline mt-3"
                                    >
                                        continue with email
                                    </a>
                                </p>

                                <p className="my-3">
                                    <small>
                                        By registering, you agree to our{' '}
                                        <Link href="/terms" passHref={true}>
                                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                            <a className="text-reset text-black text-decoration-underline">
                                                Terms of Service
                                            </a>
                                        </Link>{' '}
                                        and{' '}
                                        <Link href="/privacy" passHref={true}>
                                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                            <a className="text-reset text-black text-decoration-underline">
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
                                        className="text-reset text-black text-decoration-underline"
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
