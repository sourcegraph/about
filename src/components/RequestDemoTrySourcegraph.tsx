import { FunctionComponent } from 'react'

import classNames from 'classnames'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import Link from 'next/link'

import { ContentSection } from '@components'
import { buttonStyle, buttonLocation } from '@data'

interface Props {
    title?: string
    description?: string
    demoFormURL?: string
    parentClassName?: string
    centerContent?: boolean
}

export const RequestDemoTrySourcegraph: FunctionComponent<Props> = ({
    title = 'Get started with Sourcegraph',
    description = 'Understand, fix, and automate changes across your entire codebase.',
    parentClassName,
    centerContent = false,
}) => (
    <ContentSection parentClassName={parentClassName}>
        <div
            className={classNames({
                'tw-flex tw-flex-col lg:tw-flex-row lg:tw-items-center': !centerContent,
                'tw-flex tw-flex-col tw-max-w-lg tw-mx-auto tw-text-center tw-items-center': centerContent,
            })}
        >
            <div
                className={classNames({
                    'tw-max-w-lg': !centerContent,
                    'tw-mb-md': centerContent,
                })}
            >
                <h2 className="tw-mb-sm">{title}</h2>
                <p>{description}</p>
            </div>

            <div
                className={classNames({
                    'tw-flex tw-flex-col xs:tw-flex-row xs:tw-items-center tw-mt-md lg:tw-mt-0 lg:tw-ml-auto':
                        !centerContent,
                    'tw-flex tw-flex-col': centerContent,
                })}
            >
                <Link href="/demo" passHref={true}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a
                        title="Request a demo"
                        className={classNames('btn btn-primary', {
                            'tw-mb-sm xs:tw-mb-0 tw-mr-md': !centerContent,
                        })}
                        data-button-style={buttonStyle.text}
                        data-button-location={buttonLocation.bodyDemo}
                        data-button-type="cta"
                    >
                        Request a demo
                    </a>
                </Link>
                <Link href="/get-started/self-hosted" passHref={true}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a
                        title="Try Sourcegraph now"
                        className={classNames({ 'tw-mt-md': centerContent })}
                        data-button-style={buttonStyle.textWithArrow}
                        data-button-location={buttonLocation.bodyDemo}
                        data-button-type="cta"
                    >
                        Try Sourcegraph now
                        <ArrowRightIcon className="ml-2 tw-inline" />
                    </a>
                </Link>
            </div>
        </div>
    </ContentSection>
)
