const appVersionString = '-v2023.6.13%2B1311.1af08ae774/Sourcegraph_2023.6.13%2B1311.1af08ae774_aarch64.dmg'

const appDownloadPrefix = 'https://github.com/sourcegraph/sourcegraph/releases/download/app-'

export const appDownloads = {
    'app-download-mac-dmg': `${appDownloadPrefix}${appVersionString}`,
} as const
