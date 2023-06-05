const appVersionString = 'v2023.6.2%2Bdebug.6705220765/Sourcegraph_2023.6.2+debug.6705220765_aarch64.dmg'

const appDownloadPrefix = 'https://github.com/sourcegraph/sourcegraph/releases/download/app-'

export const appDownloads = {
    'app-download-mac-dmg': `${appDownloadPrefix}${appVersionString}`,
} as const
