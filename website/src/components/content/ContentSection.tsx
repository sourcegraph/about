import React from 'react'

export const ContentSection: React.FunctionComponent<{ className?: string; children: React.ReactNode }> = ({
    className = '',
    children,
}) => <section className={`content-section container ${className}`}>{children}</section>
