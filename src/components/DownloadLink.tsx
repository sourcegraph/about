import Link from 'next/link'

import { appDownloads } from '../data/downloads'
import { TelemetryProps } from '../telemetry'

type DownloadLinkProps = Omit<React.ComponentProps<typeof Link> & { downloadName: keyof typeof appDownloads }, 'href'> &
    TelemetryProps

/**
 * Wrapper for the Link component that logs download clicks. Requires a
 * downloadName which is an identifier for the download, such as
 * "app-download-mac-zip".
 */
export const DownloadLink: React.FunctionComponent<DownloadLinkProps> = props => {
    const { telemetryRecorder, downloadName, ...linkProps } = props
    const href = appDownloads[downloadName]
    const handleOnClick = (): void => {
        telemetryRecorder.recordEvent('app', 'download', {
            metadata: { source: 1 },
            privateMetadata: {
                downloadSource: 'about',
                type: downloadName,
                downloadLinkUrl: href,
            },
        })
    }

    return <Link href={href} {...linkProps} onClick={handleOnClick} />
}
