import { FunctionComponent, ReactNode } from 'react'

import classNames from 'classnames'

import { buttonStyle, buttonLocation } from '@data'
import { TrySourcegraph } from 'components/TrySourcegraph'

interface Props {
    title: string
    pdf?: string
    className?: string
    children?: ReactNode
    heroBackgroundImage?: string
}

export const WhitePaperPage: FunctionComponent<Props> = ({ title, className, pdf, children, heroBackgroundImage }) => (
    <div className={className}>
        <div
            className={classNames('jumbotron rounded-0 min-h-250 d-flex align-items-center text-light', className, {
                ['tw-bg-n-repeat tw-bg-cover tw-bg-center']: heroBackgroundImage,
            })}
            // eslint-disable-next-line react/forbid-dom-props
            style={heroBackgroundImage ? { backgroundImage: `url(${heroBackgroundImage})` } : undefined}
        >
            <div className="container py-5 text-center">
                <span className="mt-1 d-block text-uppercase font-weight-bold">white paper</span>
                <h1>{title}</h1>
                {pdf && (
                    <a
                        href={pdf}
                        className="mt-4 btn btn-primary"
                        rel="noreferrer nofollow"
                        target="_blank"
                        title="Download PDF"
                        data-button-style={buttonStyle.text}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                    >
                        <i className="pr-2 fa fa-file-pdf" />
                        Download PDF
                    </a>
                )}
            </div>
        </div>

        {children}

        <div className="py-6">
            <TrySourcegraph />
        </div>
    </div>
)
