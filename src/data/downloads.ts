const appVersionString = 'v2023.6.6%2B1309.585fa485ce/Sourcegraph_2023.6.6+1309.585fa485ce_aarch64.dmg'

const appDownloadPrefix = 'https://github.com/sourcegraph/sourcegraph/releases/download/app-'

export const appDownloads = {
    'app-download-mac-dmg': `${appDownloadPrefix}${appVersionString}`,
} as const
