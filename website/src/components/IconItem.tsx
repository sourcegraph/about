import React from 'react'

export const IconItem: React.FunctionComponent<{
    className?: string
    icon: React.ComponentType<{ className?: string }>
    color: 'blue' | 'brand-cyan' | 'brand-orange' | 'brand-purple' | 'green' | 'red' | 'white'
    children: React.ReactNode
}> = ({ className = '', icon: Icon, color, children }) => (
    <div className={`icon-item media ${className}`}>
        <div className={`icon-item__icon ${color}`}>
            <Icon />
        </div>
        <div className="media-body">{children}</div>
    </div>
)
