import { FunctionComponent, ReactNode } from 'react'

const SidebarContent: FunctionComponent<{
    content: string | ReactNode
    title: string
}> = ({ content, title }) => (
    <div className="mb-13  flex flex-col gap-4 md:w-[378px]">
        <h2 className="leading-9 text-violet-700">{title}</h2>
        {typeof content === 'string' ? (
            <p className="mb-0 text-lg tracking-[-0.25px] text-gray-500">{content}</p>
        ) : (
            content
        )}
    </div>
)

export default SidebarContent
