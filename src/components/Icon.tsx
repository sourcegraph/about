import { FunctionComponent } from 'react'

import * as icons from '@material-ui/icons'

interface Icon {
    icon: keyof typeof icons
    size: number
}

export const Icon: FunctionComponent<Icon> = ({ icon, size }) => {
    const IconName = icons[icon]

    return <IconName className="mb-4 bg-violet-mist text-vivid-violet rounded p-2" style={{ fontSize: size }} />
}
