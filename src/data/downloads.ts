const appVersionString = 'v2023.6.16%2B1314.6c2d49d47c/Cody_2023.6.16+1314.6c2d49d47c_aarch64.dmg'

const appDownloadPrefix = 'https://github.com/sourcegraph/sourcegraph/releases/download/app-'

export const appDownloads = {
    'app-download-mac-dmg': `${appDownloadPrefix}${appVersionString}`,
} as const
