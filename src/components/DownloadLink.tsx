import Link from 'next/link'

import { getEventLogger } from '../hooks/eventLogger'

type DownloadLinkProps = React.ComponentProps<typeof Link> & { downloadName: string }

/**
 * Wrapper for the Link component that logs download clicks. Requires a
 * downloadName which is an identifier for the download, such as
 * "app-download-mac-zip".
 */
export const DownloadLink: React.FunctionComponent<DownloadLinkProps> = props => {
    const { downloadName, ...linkProps } = props
    const handleOnClick = (): void => {
        const eventArguments = {
            downloadSource: 'about',
            downloadName,
            downloadLinkUrl: linkProps.href,
        }
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        getEventLogger().log('DownloadClick', eventArguments, eventArguments)
    }

    return <Link {...linkProps} onClick={handleOnClick} />
}
