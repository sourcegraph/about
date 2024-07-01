import { FunctionComponent } from 'react'

import classNames from 'classnames'
import Link from 'next/link'

import { buttonLocation, buttonStyle } from '../../data/tracking'
import { ContentSection } from '../ContentSection'

interface ContactUsCtaProps {
    buttonClassNames?: string
    parentClassNames?: string
    className?: string
    onClickContactUs?: () => void
}
export const ContactUsCta: FunctionComponent<ContactUsCtaProps> = ({
    buttonClassNames,
    parentClassNames,
    className,
    onClickContactUs,
}) => (
    <ContentSection
        className={classNames(
            'flex max-w-[1232px] flex-col justify-between gap-6 rounded-2xl border-1 border-gray-200 bg-violet-700 py-16 px-6 md:px-[56px]',
            className
        )}
        parentClassName={classNames('md:px-[80px] py-[96px]', parentClassNames)}
    >
        <h2 className="text-white">Contact us for a demo or to start an enterprise trial</h2>
        <div className="text-center md:items-center">
            <div
                className={classNames(
                    'mx-auto flex max-w-[300px] flex-col  items-center gap-6 sm:w-full sm:max-w-full sm:flex-row md:!w-auto md:gap-4',
                    buttonClassNames
                )}
            >
                {onClickContactUs ? (
                    <button
                        className="btn btn-primary-dark w-full sm:w-[140px]  md:w-auto"
                        title="Contact us"
                        data-button-style={buttonStyle.primary}
                        data-button-location={buttonLocation}
                        data-button-type="cta"
                        onClick={onClickContactUs}
                        type="button"
                    >
                        Contact us
                    </button>
                ) : (
                    <Link
                        className="btn btn-primary-dark w-full sm:w-[140px]  md:w-auto"
                        href="/contact/request-info"
                        title="Contact us"
                        data-button-style={buttonStyle.primary}
                        data-button-location={buttonLocation}
                        data-button-type="cta"
                    >
                        Contact us
                    </Link>
                )}

                <Link
                    className="btn btn-secondary-dark w-full items-center sm:w-[140px]  md:w-auto"
                    href="/pricing"
                    title="See Pricing"
                    data-button-style={buttonStyle.outline}
                    data-button-location={buttonLocation.hero}
                    data-button-type="cta"
                >
                    See pricing
                </Link>
            </div>
        </div>
    </ContentSection>
)
