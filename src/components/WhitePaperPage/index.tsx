import { FunctionComponent, ReactNode } from 'react'

import classNames from 'classnames'

import { TrySourcegraph } from 'components/TrySourcegraph'

import styles from './whitePaperPage.module.scss'

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
                [styles.hero]: heroBackgroundImage,
            })}
            // eslint-disable-next-line react/forbid-dom-props
            style={heroBackgroundImage ? { backgroundImage: `url(${heroBackgroundImage})` } : undefined}
        >
            <div className="container text-center py-5">
                <span className="d-block mt-1 text-uppercase font-weight-bold">white paper</span>
                <h1>{title}</h1>
                {pdf && (
                    <a href={pdf} className="btn btn-primary mt-4" rel="noreferrer nofollow" target="_blank">
                        <i className="fa fa-file-pdf pr-2" />
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
