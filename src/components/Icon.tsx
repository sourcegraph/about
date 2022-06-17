import { FunctionComponent, SyntheticEvent } from 'react'

import * as icons from '@mui/icons-material'
import classNames from 'classnames'

import { createRandomId } from '@util'

interface Icon {
    name: keyof typeof icons
    size: number
    className?: string | undefined
    color?: string
    onClick?: (event: SyntheticEvent) => void
    variant?: 'boxed'
}

export const Icon: FunctionComponent<Icon> = ({ name, size, className = '', color, onClick, variant }) => {
    const IconName = icons[name]

    return (
        <IconName
            className={classNames(className, variant === 'boxed' && 'bg-violet-mist text-vivid-violet rounded p-2')}
            style={{ fontSize: size }}
            key={createRandomId()}
            htmlColor={color}
            onClick={onClick}
        />
    )
}
