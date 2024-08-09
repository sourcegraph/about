import { FunctionComponent, ReactNode } from 'react'

const CaseStudyContent: FunctionComponent<{
    content: string | ReactNode
    title?: string
}> = ({ content, title }) => (
    <div className="mb-12 flex flex-col gap-6">
        {title && <h2 className="text-gray-700">{title}</h2>}
        {typeof content === 'string' ? <p className="text-lg">{content}</p> : content}
    </div>
)

export default CaseStudyContent
