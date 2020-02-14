import { Link } from 'gatsby'
import React from 'react'
import { HoverablePopover } from './HoverablePopover'

interface ProductFeatureOrUseCase {
    text: string
    detail?: string
    to: string
}

export const PRODUCT_FEATURES: ProductFeatureOrUseCase[] = [
    { text: 'Code search', to: '/product/code-search-navigation' },
    { text: 'Code review', to: '/product/code-review' },
    { text: 'Code change management', to: '/product/code-change-management' },
]

export const PRODUCT_USE_CASES: ProductFeatureOrUseCase[] = [
    // TODO(sqs): not written yet
    //
    // { text: 'Speed up incident response', detail: '(SRE/DevOps)', to: '/solutions/incident-response' },
    // {
    //     text: 'Integrate tools into the dev workflow',
    //     to: '/solutions/developer-workflow-tooling-integrations',
    // },
    // {
    //     text: 'Make large-scale code modifications',
    //     detail: '& refactors',
    //     to: '/solutions/developer-onboarding',
    // },
    // { text: 'Onboard new developers faster', to: '/solutions/developer-onboarding' },
]

const ProductPopoverBody: React.FunctionComponent<any> = () => {
    const itemClassName = 'rounded'
    return (
        <div className="product-popover-body p-3">
            <div className="list-group list-group-flush">
                <Link
                    to="/product"
                    className={`product-popover-body__product-link list-group-item list-group-item-action border-0 py-3 px-2 d-flex align-items-center ${itemClassName}`}
                >
                    <img
                        className="product-popover-body__logomark flex-0 mr-2"
                        src="/sourcegraph/sourcegraph-mark.svg"
                    />
                    <div>
                        <h4 className="mt-1 mb-0">Sourcegraph</h4>
                        <small className="text-muted">Universal Code Search</small>
                    </div>
                </Link>
                <Link
                    to="/universal-code-search"
                    className={`product-popover-body__use-case-link list-group-item list-group-item-action px-2 font-weight-bold border-0 ${itemClassName}`}
                >
                    What is Universal Code Search?
                </Link>
            </div>
            <div className="text-muted mt-3 mb-2 mx-2 font-weight-normal">Popular Sourcegraph use cases</div>
            <ul className="nav flex-column">
                {[...PRODUCT_FEATURES, ...PRODUCT_USE_CASES].map(({ text, detail, to }, i) => (
                    <li className="nav-item" key={i}>
                        <Link
                            to={to}
                            className={`product-popover-body__use-case-link nav-link font-weight-bold ${itemClassName}`}
                        >
                            {text}
                            {detail && ` ${detail}`}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

interface ProductPopoverButtonProps {
    className?: string
}

export const ProductPopoverButton: React.FunctionComponent<ProductPopoverButtonProps> = ({ className = '' }) => (
    <>
        <HoverablePopover placement="bottom" delay={{ show: 0, hide: 500 }} component={<ProductPopoverBody />}>
            <Link className={`nav-link outline-0 ${className}`} to="/product">
                Product
            </Link>
        </HoverablePopover>
    </>
)
