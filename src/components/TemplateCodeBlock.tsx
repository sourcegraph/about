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
    <div className="flex-wrap flex flex-row w-full justify-center md:flex-col md:justify-start md:w-1/2">
        <div className="p-6 mx-2 mb-4 border-1 rounded grow bg-white" key={template.header}>
            <h5>{template.header}</h5>
            <p>{template.description}</p>
            {template.queries.map(query => (
                <div
                    className="p-2 my-2 border-1 rounded bg-gray-100 font-mono text-sm"
                    key={Math.random()}
                >
                    {query}
                </div>
            ))}
        </div>
    </div>
)
