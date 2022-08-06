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
    <div className="flex-wrap template-code-block d-flex">
        <div className="p-4 mx-2 mb-3 border rounded tw-grow tw-bg-white border-light" key={template.header}>
            <div className="font-weight-bold">{template.header}</div>
            <p>{template.description}</p>
            {template.queries.map(query => (
                <div className="p-2 my-2 border rounded tw-bg-gray-100 code" key={Math.random()}>
                    {query}
                </div>
            ))}
        </div>
    </div>
)
