import React, { FunctionComponent, ReactNode } from 'react'

interface Props {
    header: string
    description: string
    queries: ReactNode[]
}

export const TemplateCodeBlock: FunctionComponent<Props> = ({ header, description, queries }) => (
    <div className="p-5 template-code-block d-flex flex-column">
        <div className="font-weight-bold">{header}</div>
        <p>{description}</p>
        {queries.map(query => (
            <div className="code mb-2 p-2 border border-light rounded" key={Math.random()}>
                {query}
            </div>
        ))}
    </div>
)
