import { Heading } from '../Heading'

import { CardProps } from './types'

export const CardDescription = ({ children, title }: CardProps): JSX.Element => (
    <div className="border-color-[#DBE2F0] relative flex flex-grow flex-col gap-y-4 rounded-2xl border bg-white py-3xl px-lg md:max-w-[410px]">
        <Heading
            size="h3"
            className="!font-sans text-2xl font-[590] font-normal leading-tight !tracking-[-0.25px] text-[#0F111A]"
        >
            {title}
        </Heading>
        <p className="mb-0 font-sans text-2xl font-normal leading-tight tracking-[-0.25px] text-[#343A4D]">
            {children}
        </p>
    </div>
)
