import React from 'react'

export const ContentSection: React.FunctionComponent<{ children: React.ReactNode }> = ({ children }) => (
    <section className="content-section container">{children}</section>
)
