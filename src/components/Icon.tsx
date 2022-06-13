import { FunctionComponent } from 'react'

import * as icons from '@material-ui/icons'

interface Icon {
    icon: keyof typeof icons
}

export const Icon: FunctionComponent<Icon> = icon => {
    const IconName = icons['SearchSharp']

    return <IconName className="mb-4 bg-violet-mist text-vivid-violet rounded p-2" style={{ fontSize: 48 }} />
}
