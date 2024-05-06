import { Heading } from '../Heading'

import { CardProps } from './types'

export const CardSection = ({ children, title, icon }: CardProps): JSX.Element => (
    <div className="flex flex-col gap-3">
        {icon}
        <Heading size="h4" className="!font-sans font-[590] !leading-tight !tracking-[-0.25px]">
            {title}
        </Heading>
        <Heading size="h3" className="!font-sans !leading-tight !tracking-[-0.25px]">
            {children}
        </Heading>
    </div>
)
