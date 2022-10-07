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
    <div className="tw-flex-wrap tw-flex tw-flex-row tw-w-full tw-justify-center md:tw-flex-col md:tw-justify-start md:tw-w-1/2">
        <div className="p-4 mx-2 mb-3 border tw-rounded tw-grow tw-bg-white border-light" key={template.header}>
            <h5>{template.header}</h5>
            <p>{template.description}</p>
            {template.queries.map(query => (
                <div className="p-2 my-2 border tw-rounded tw-bg-gray-100 tw-font-mono tw-text-sm" key={Math.random()}>
                    {query}
                </div>
            ))}
        </div>
    </div>
)
