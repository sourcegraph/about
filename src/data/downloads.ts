const appVersionString = 'v2023.6.21%2B1321.8c3a4999f2/Cody_2023.6.21+1321.8c3a4999f2_aarch64.dmg'

const appDownloadPrefix = 'https://github.com/sourcegraph/sourcegraph/releases/download/app-'

export const appDownloads = {
    'app-download-mac-dmg': `${appDownloadPrefix}${appVersionString}`,
} as const
