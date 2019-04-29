import { Link } from 'gatsby'
import React from 'react'
import { PRODUCT_FEATURES, PRODUCT_USE_CASES } from '../ProductPopover'

export const ProductFeaturesAndUseCases: React.FunctionComponent<{ className?: string }> = ({ className = '' }) => (
    <div className={`row ${className}`}>
        <div className="col-md-6">
            <h4>Features</h4>
            <ul className="nav flex-column">
                {PRODUCT_FEATURES.map(({ text, to }, i) => (
                    <li key={i} className="nav-item">
                        <Link
                            className="nav-link d-inline-block btn btn-outline-light font-weight-normal mr-2 mb-2"
                            to={to}
                        >
                            {text}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
        {PRODUCT_USE_CASES.length > 0 && (
            <div className="col-md-6">
                <h4>Use cases</h4>
                <ul className="nav flex-column">
                    {PRODUCT_USE_CASES.map(({ text, to }, i) => (
                        <li key={i} className="nav-item">
                            <Link
                                className="nav-link d-inline-block btn btn-outline-light font-weight-normal mr-2 mb-2"
                                to={to}
                            >
                                {text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        )}
    </div>
)
