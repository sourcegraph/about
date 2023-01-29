import { FunctionComponent, ReactNode } from 'react'

import classNames from 'classnames'

import { buttonStyle, buttonLocation } from '../data/tracking'

import { CtaSection } from './CtaSection'

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
            className={classNames('jumbotron min-h-250 tw-flex tw-items-center text-light', className, {
                ['tw-bg-n-repeat tw-bg-cover tw-bg-center']: heroBackgroundImage,
            })}
            // eslint-disable-next-line react/forbid-dom-props
            style={heroBackgroundImage ? { backgroundImage: `url(${heroBackgroundImage})` } : undefined}
        >
            <div className="container py-5 tw-text-center">
                <div className="tw-flex-col-reverse tw-flex">
                    <h1>{title}</h1>
                    <h6 className="tw-mb-1 tw-block">white paper</h6>
                </div>

                {pdf && (
                    <a
                        href={pdf}
                        className="tw-mt-3 btn btn-primary"
                        rel="noreferrer nofollow"
                        target="_blank"
                        title="Download PDF"
                        data-button-style={buttonStyle.text}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                    >
                        Download PDF
                    </a>
                )}
            </div>
        </div>

        {children}

        <CtaSection />
    </div>
)
