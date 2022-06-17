import { FunctionComponent, SyntheticEvent } from 'react'

import * as icons from '@mui/icons-material'

interface Icon {
    name: keyof typeof icons
    size: number
    className?: string | undefined
    color?: string
    key?: string
    onClick?: (event: SyntheticEvent) => void
    variant?: 'boxed'
}

export const Icon: FunctionComponent<Icon> = ({ name, size, className = '', color, key, onClick, variant }) => {
    const IconName = icons[name]

    return (
        <IconName
className={classNames(className, variant === 'boxed' && 'bg-violet-mist text-vivid-violet rounded p-2')}`
            style={{ fontSize: size }}
            key={key}
            htmlColor={color}
            onClick={onClick}
        />
    )
}
