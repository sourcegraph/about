import { FunctionComponent } from 'react'

import * as icons from '@mui/icons-material'

interface Icon {
    name: keyof typeof icons
    size: number
    className?: string | undefined
}

export const Icon: FunctionComponent<Icon> = ({ name, size, className = '' }) => {
    const IconName = icons[name]

    return (
        <IconName
            className={`${className} mb-4 bg-violet-mist text-vivid-violet rounded p-2`}
            style={{ fontSize: size }}
        />
    )
}
