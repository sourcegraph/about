import React from 'react'

export const CustomerLogosSection: React.FunctionComponent<{}> = () => (
    <div className="customer-logos-section text-center">
        <strong>The world's most innovative companies use Sourcegraph:</strong>
        <div className="mt-2">
            <img className="customer-logos-section__logo mx-2" src="/external-logos/uber.svg" />
            <img className="customer-logos-section__logo mx-2" src="/external-logos/lyft-logo.svg" />
            <img className="customer-logos-section__logo mx-2" src="/external-logos/yelp.svg" />
            <img className="customer-logos-section__logo mx-2" src="/external-logos/amazon-logo.svg" />
            <img className="customer-logos-section__logo mx-2" src="/external-logos/alibaba-logo.svg" />
        </div>
    </div>
)
