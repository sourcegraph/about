import { FunctionComponent, ReactNode } from 'react'

interface Props {
    template: Template
}

interface Template {
    header: string
    description: string
    queries: ReactNode[]
}

export const TemplateCodeBlock: FunctionComponent<Props> = ({ template }) => (
    <div className="template-code-block d-flex flex-wrap">
        <div className="template p-4 mx-2 mb-3 border border-light rounded" key={template.header}>
            <div className="font-weight-bold">{template.header}</div>
            <p>{template.description}</p>
            {template.queries.map(query => (
                <div className="code my-2 p-2 border rounded" key={Math.random()}>
                    {query}
                </div>
            ))}
        </div>
    </div>
)
