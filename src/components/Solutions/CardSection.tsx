import { CardProps } from './types'

export const CardSection = ({ children, title, icon }: CardProps): JSX.Element => (
    <div className="flex flex-col gap-3">
        {icon}
        <h4>{title}</h4>
        <h3>{children}</h3>
    </div>
)
