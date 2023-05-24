import { FunctionComponent } from 'react'

import Link from 'next/link'

import { Heading } from '../Heading'

interface Blogs {
    heading?: string
    title: string
    href?: string
    description: React.ReactNode | string
    imageSrc: string
}

export const BlogListItem: FunctionComponent<Blogs> = ({
    heading = 'Blog Post',
    title,
    href = '',
    description,
    imageSrc,
}) => (
    <div className="mb-6 md:mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[114px] lg:grid-cols-3 lg:gap-[114px]">
            <div className="flex flex-col text-white lg:col-span-2">
                <Heading size="h6" className="mb-[6px] text-blurple-200">
                    {heading}
                </Heading>
                <Heading size="h3" className="mb-[14px]">
                    <Link href={href} className="text-white">
                        {title}
                    </Link>
                </Heading>
                {description}
            </div>
            <div className="flex items-center lg:col-span-1">
                <img src={imageSrc} className="max-h-[100%] lg:h-[156px] lg:max-w-[266px]" alt={title} />
            </div>
        </div>
        <div className="mt-[31px] border-b border-b-gray-500 lg:max-w-[1200px]" />
    </div>
)
