import { FunctionComponent } from 'react'

import Link from 'next/link'

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
                <h6 className="mb-[6px] text-blurple-200">{heading}</h6>
                <h3 className="mb-[14px]">
                    <Link href={href} className="text-white">
                        {title}
                    </Link>
                </h3>
                {description}
            </div>
            <div className="flex items-center lg:col-span-1">
                <img src={imageSrc} className="max-h-[100%] lg:h-[156px] lg:max-w-[266px]" alt={title} />
            </div>
        </div>
        <div className="mt-[31px] border-b border-b-gray-500 lg:max-w-[1200px]" />
    </div>
)
