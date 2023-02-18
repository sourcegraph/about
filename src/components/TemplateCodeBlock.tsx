import { FunctionComponent, ReactNode } from 'react'

export interface Template {
    header: string
    description: string
    queries: ReactNode[]
}

interface TemplateCodeBlock {
    template: Template
}

export const TemplateCodeBlock: FunctionComponent<TemplateCodeBlock> = ({ template }) => (
    <div className="flex w-full flex-row flex-wrap justify-center md:w-1/2 md:flex-col md:justify-start">
        <div className="mx-2 mb-4 grow rounded border-1 bg-white p-6" key={template.header}>
            <h5>{template.header}</h5>
            <p>{template.description}</p>
            {template.queries.map(query => (
                <div className="my-2 rounded border-1 bg-gray-100 p-2 font-mono text-sm" key={Math.random()}>
                    {query}
                </div>
            ))}
        </div>
    </div>
)
