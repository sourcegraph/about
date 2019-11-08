import ArrowRightDropCircleIcon from 'mdi-react/ArrowRightDropCircleIcon'
import React from 'react'

export const ProductDemoVideo: React.FunctionComponent<{ className?: string; title?: string }> = ({
    className = '',
    title = 'How Sourcegraph speeds up the software development cycle',
}) => (
    <div className={className}>
        <h3 className="text-center mb-5 text-light font-weight-light">{title}</h3>
        <div
            style={{
                backgroundColor: 'rgba(255,255,255,0.75)',
                width: '100%',
                height: '480px',
                margin: '0 auto',
            }}
            className="border d-flex align-items-center justify-content-center"
        >
            <ArrowRightDropCircleIcon className="text-dark" style={{ width: '60px', height: '60px', opacity: '0.7' }} />
        </div>
    </div>
)
