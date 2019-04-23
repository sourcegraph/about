import { Link } from 'gatsby'
import React, { useLayoutEffect, useRef, useState } from 'react'
import { Popover } from 'reactstrap'

const ProductPopoverBody: React.FunctionComponent = () => {
    const itemClassName = 'rounded'
    return (
        <div className="p-3">
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
                        <small className="text-muted">Code intelligence platform</small>
                    </div>
                </Link>
            </div>
            <div className="text-muted mt-3 mb-2 mx-2 font-weight-normal">Popular Sourcegraph use cases</div>
            <ul className="nav flex-column">
                {[
                    { text: 'Code search & navigation', to: '/product/code-search-navigation' },
                    { text: 'Code review', to: '/product/code-review' },
                    { text: 'Code change rules & monitoring', to: '/product/code-rules-monitoring-automation' },
                    { text: 'Incident response (SRE/DevOps)', to: '/solutions/incident-response' },
                    {
                        text: 'Integrate tools into the dev workflow',
                        to: '/solutions/developer-workflow-tooling-integrations',
                    },
                    {
                        text: 'Manage 100s/1000s of services & APIs',
                        to: '/solutions/manage-services-microservices-apis',
                    },
                    { text: 'Onboard new developers faster', to: '/solutions/developer-onboarding' },
                ].map(({ text, to }, i) => (
                    <li className="nav-item" key={i}>
                        <Link
                            to={to}
                            className={`product-popover-body__use-case-link nav-link font-weight-bold ${itemClassName}`}
                        >
                            {text}
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

export const ProductPopoverButton: React.FunctionComponent<ProductPopoverButtonProps> = ({ className = '' }) => {
    const targetRef = useRef<HTMLElement>()
    const [target, setTarget] = useState<HTMLElement | null>(null)
    useLayoutEffect(() => setTarget(targetRef.current))

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <Link
                ref={targetRef}
                className={`product-popover-button__btn nav-link outline-0 ${className}`}
                to="/product"
            >
                Product
            </Link>
            {targetRef.current && (
                <Popover
                    placement="bottom"
                    isOpen={isOpen}
                    target={target}
                    toggle={() => setIsOpen(!isOpen)}
                    trigger="click hover focus"
                    delay={{ show: 0, hide: 500 }}
                    innerClassName="shadow"
                >
                    <ProductPopoverBody />
                </Popover>
            )}
        </div>
    )
}
