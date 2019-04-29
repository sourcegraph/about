import React from 'react'

export const IconItem: React.FunctionComponent<{
    icon: React.ComponentType<{ className?: string }>
    color: 'blue' | 'brand-cyan' | 'brand-orange' | 'brand-purple' | 'green'
    children: React.ReactNode
}> = ({ icon: Icon, color, children }) => (
    <div className="icon-item media">
        <div className={`icon-item__icon ${color}`}>
            <Icon />
        </div>
        <div className="media-body">{children}</div>
    </div>
)
