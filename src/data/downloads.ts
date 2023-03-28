const appVersionString = '2023.03.23+209542.7216ba'

const appDownloadPrefix = 'https://storage.googleapis.com/sourcegraph-app-releases'

export const appDownloads = {
    'app-download-mac-dmg': `${appDownloadPrefix}/latest/Sourcegraph%20App.dmg`,
    'app-download-mac-zip': `${appDownloadPrefix}/${appVersionString}/sourcegraph_${appVersionString}_darwin_all.zip`,
    'app-download-linux-deb': `${appDownloadPrefix}/${appVersionString}/sourcegraph_${appVersionString}_linux_amd64.deb`,
    'app-download-linux-zip': `${appDownloadPrefix}/${appVersionString}/sourcegraph_${appVersionString}_linux_amd64.zip`,
} as const
