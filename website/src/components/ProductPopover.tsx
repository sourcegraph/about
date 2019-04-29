import { Link } from 'gatsby'
import React from 'react'
import { OverlayTriggerProps } from 'react-bootstrap/OverlayTrigger'
import { HoverablePopover } from './HoverablePopover'

interface ProductFeatureOrUseCase {
    text: string
    detail?: string
    to: string
}

export const PRODUCT_FEATURES: ProductFeatureOrUseCase[] = [
    { text: 'Code search', to: '/product/code-search-navigation' },
    { text: 'Code review', to: '/product/code-review' },
    { text: 'Code alerts & automation', to: '/product/code-alerts-automation' },
]

export const PRODUCT_USE_CASES: ProductFeatureOrUseCase[] = [
    { text: 'Speed up incident response', detail: '(SRE/DevOps)', to: '/solutions/incident-response' },
    {
        text: 'Integrate tools into the dev workflow',
        to: '/solutions/developer-workflow-tooling-integrations',
    },
    // {
    //     text: 'Make large-scale code modifications',
    //     detail: '& refactors',
    //     to: '/solutions/developer-onboarding',
    // },
    { text: 'Onboard new developers faster', to: '/solutions/developer-onboarding' },
]

const ProductPopoverBody = React.forwardRef((props, ref) => {
    const itemClassName = 'rounded'
    return (
        <div className="p-3" ref={ref}>
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
                        <small className="text-muted">The new standard developer platform</small>
                    </div>
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
})

interface ProductPopoverButtonProps {
    className?: string
}

const OVERLAY_TRIGGERS: OverlayTriggerProps['trigger'] = ['click', 'hover', 'focus']

export const ProductPopoverButton: React.FunctionComponent<ProductPopoverButtonProps> = ({ className = '' }) => (
    <>
        <HoverablePopover
            trigger={OVERLAY_TRIGGERS}
            placement="bottom"
            delay={{ show: 0, hide: 500 }}
            component={<ProductPopoverBody />}
        >
            <Link className={`product-popover-button__btn nav-link outline-0 ${className}`} to="/product">
                Product
            </Link>
        </HoverablePopover>
    </>
)
