import { FunctionComponent } from 'react'

import classNames from 'classnames'

import { EnterpriseIcon } from './EnterpriseIcon'

const enterpriseDarkDevPlatforms = [
    { src: '/enterprise/logo-tiles/vscode-dark.svg', alt: 'Visual Studio Code' },
    { src: '/enterprise/logo-tiles/github-light.svg', alt: 'GitHub' },
    { src: '/enterprise/logo-tiles/bitbucket-dark.svg', alt: 'Bitbucket' },
    { src: '/enterprise/logo-tiles/intellij-dark.svg', alt: 'IntelliJ' },
    { src: '/enterprise/logo-tiles/pycharm-light.svg', alt: 'PyCharm' },
    { src: '/enterprise/logo-tiles/go-dark.svg', alt: 'Golang' },
    { src: '/enterprise/logo-tiles/gerritt-dark.svg', alt: 'Gerrit' },
    { src: '/enterprise/logo-tiles/gitlab-dark.svg', alt: 'GitLab' },
    { src: '/enterprise/logo-tiles/perforce-dark.svg', alt: 'Perforce' },
]

const enterpriseLightDevPlatforms = [
    { src: '/enterprise/logo-tiles/vscode-light.svg', alt: 'Visual Studio Code' },
    { src: '/enterprise/logo-tiles/github-dark.svg', alt: 'GitHub' },
    { src: '/enterprise/logo-tiles/bitbucket-light.svg', alt: 'Bitbucket' },
    { src: '/enterprise/logo-tiles/intellij-light.svg', alt: 'IntelliJ' },
    { src: '/enterprise/logo-tiles/pycharm-light.svg', alt: 'PyCharm' },
    { src: '/enterprise/logo-tiles/goland-light.svg', alt: 'Golang' },
    { src: '/enterprise/logo-tiles/gerritt-light.svg', alt: 'Gerrit' },
    { src: '/enterprise/logo-tiles/gitlab-light.svg', alt: 'GitLab' },
    { src: '/enterprise/logo-tiles/perforce-light.svg', alt: 'Perforce' },
]

const codyLightPlatforms = [
    { src: '/enterprise/logo-tiles/gitlab-light.svg', alt: 'GitLab' },
    { src: '/enterprise/logo-tiles/github-dark.svg', alt: 'GitHub' },
    { src: '/enterprise/logo-tiles/bitbucket-light.svg', alt: 'Bitbucket' },
    { src: '/assets/cody/logos/gerritt-dark.svg', alt: 'Gerrit' },
    { src: '/assets/cody/logos/perforce-dark.svg', alt: 'Perforce' },
    { src: '/assets/cody/logos/svelte.svg', alt: 'Svelte' },
    { src: '/assets/cody/logos/go.svg', alt: 'Go' },
    { src: '/assets/cody/logos/typescript.svg', alt: 'Typescript' },
    { src: '/assets/cody/logos/python.svg', alt: 'Python' },
]
interface DevPlatformsSectionProps {
    isLight?: boolean
    setOneClassName?: string
    setTwoClassName?: string
    setThreeClassName?: string
    isVariant?: boolean
}

export const DevPlatformsSection: FunctionComponent<DevPlatformsSectionProps> = ({
    isLight = false,
    setOneClassName,
    setTwoClassName,
    setThreeClassName,
    isVariant,
}) => {
    const enterpriseDevPlatforms = !isLight ? enterpriseLightDevPlatforms : enterpriseDarkDevPlatforms
    const logos = isVariant ? codyLightPlatforms : enterpriseDevPlatforms
    return (
        <div className="-ml-[7px] -mr-[9px] flex w-auto justify-center gap-6 md:mx-0 md:gap-6 md:px-10">
            <div className={classNames('relative flex flex-col', setOneClassName ?? 'bottom-[17px] gap-[25.21px]')}>
                {logos.slice(0, 3).map(({ src, alt }) => (
                    <EnterpriseIcon className="flex justify-center" key={alt} src={src} alt={alt} />
                ))}
            </div>
            <div className={classNames('relative flex flex-col', setTwoClassName ?? 'gap-[25px] md:top-[21px]')}>
                {logos.slice(3, 6).map(({ src, alt }) => (
                    <EnterpriseIcon className="flex justify-center" key={alt} src={src} alt={alt} />
                ))}
            </div>
            <div className={classNames('relative flex flex-col', setThreeClassName ?? 'bottom-[17px] gap-[25px]')}>
                {logos.slice(6).map(({ src, alt }) => (
                    <EnterpriseIcon className="flex justify-center" key={alt} src={src} alt={alt} />
                ))}
            </div>
        </div>
    )
}
