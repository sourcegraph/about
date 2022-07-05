/* eslint-disable @typescript-eslint/no-unsafe-call */
import { FunctionComponent, SyntheticEvent } from 'react'

import * as icons from '@mui/icons-material'
import classNames from 'classnames'
import { v4 as uuidv4 } from 'uuid'

interface IconProps {
    name: keyof typeof icons
    size?: number
    className?: string | undefined
    color?: string
    onClick?: (event: SyntheticEvent) => void
    variant?: 'boxed'
}

export const Icon: FunctionComponent<IconProps> = ({ name, size = 48, className = '', color, onClick, variant }) => {
    const IconName = icons[name]
    const uuid = uuidv4()

    return (
        <IconName
            className={classNames(className, variant === 'boxed' && 'bg-violet-mist text-vivid-violet rounded p-2')}
            style={{ fontSize: size }}
            key={uuid}
            htmlColor={color}
            onClick={onClick}
        />
    )
}
