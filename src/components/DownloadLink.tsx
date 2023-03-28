import Link from 'next/link'

import { appDownloads } from '../data/downloads'
import { getEventLogger } from '../hooks/eventLogger'

type DownloadLinkProps = Omit<React.ComponentProps<typeof Link> & { downloadName: keyof typeof appDownloads }, 'href'>

/**
 * Wrapper for the Link component that logs download clicks. Requires a
 * downloadName which is an identifier for the download, such as
 * "app-download-mac-zip".
 */
export const DownloadLink: React.FunctionComponent<DownloadLinkProps> = props => {
    const { downloadName, ...linkProps } = props
    const href = appDownloads[downloadName]
    const handleOnClick = (): void => {
        const eventArguments = {
            downloadSource: 'about',
            downloadName,
            downloadLinkUrl: href,
        }
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        getEventLogger().log('DownloadClick', eventArguments, eventArguments)
    }

    return <Link href={href} {...linkProps} onClick={handleOnClick} />
}
