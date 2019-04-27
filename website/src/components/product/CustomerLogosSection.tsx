import React from 'react'

export const CustomerLogosSection: React.FunctionComponent<{ className?: string }> = ({ className = '' }) => (
    <div className={`customer-logos-section text-center ${className}`}>
        <strong>Trusted by elite companies:</strong>
        <div className="mt-2 d-flex justify-content-center align-items-center">
            <div className="customer-logos-section__logo mx-2" style={{ lineHeight: 'normal', width: '130px' }}>
                <img style={{ width: '130px' }} src="/external-logos/uber.svg" />
                <br />
                <small>Every developer at Uber uses Sourcegraph</small>
            </div>
            <div className="customer-logos-section__logo mx-2" style={{ lineHeight: 'normal', width: '130px' }}>
                <img style={{ width: '130px' }} src="/external-logos/lyft-logo.svg" />
                <br />
                <small>Every developer at Lyft uses Sourcegraph</small>
            </div>
            <div className="customer-logos-section__logo mx-2" style={{ lineHeight: 'normal', width: '130px' }}>
                <img style={{ width: '130px' }} src="/external-logos/yelp.svg" />
                <br />
                <small>Every developer at Yelp uses Sourcegraph</small>
            </div>
            <div
                className="customer-logos-section__logo mx-3 d-flex justify-content-center flex-column"
                style={{ lineHeight: 'normal', width: '100px' }}
            >
                <small
                    style={{ width: '80px' }}
                    className="mx-auto mb-1 d-block border rounded border-primary text-primary p-2"
                >
                    Top 10 hospitality company
                </small>
                <small>Every developer uses Sourcegraph</small>
            </div>
            <div
                className="customer-logos-section__logo mx-3 d-flex justify-content-center flex-column"
                style={{ lineHeight: 'normal', width: '100px' }}
            >
                <small
                    style={{ width: '80px' }}
                    className="mx-auto mb-1 d-block border rounded border-success text-success p-2"
                >
                    Top 5 media company
                </small>
                <small>Every developer uses Sourcegraph</small>
            </div>
            <div
                className="customer-logos-section__logo mx-3 d-none justify-content-center flex-column"
                style={{ lineHeight: 'normal', width: '100px' }}
            >
                <small
                    style={{ width: '100px' }}
                    className="mx-auto mb-1 d-block border rounded border-danger text-danger p-2 "
                >
                    Top 3 CRM&nbsp;software company
                </small>
                &nbsp;
                <br />
                &nbsp;
                <br />
            </div>
            <div
                className="customer-logos-section__logo mx-3 d-none justify-content-center flex-column"
                style={{ lineHeight: 'normal', width: '100px' }}
            >
                <small
                    style={{ width: '80px' }}
                    className="mx-auto mb-1 d-none border rounded border-info text-info p-2"
                >
                    Top 10 hedge fund
                </small>
                &nbsp;
                <br />
                &nbsp;
                <br />
            </div>
        </div>
    </div>
)
