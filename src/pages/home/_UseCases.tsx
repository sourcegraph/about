import { FunctionComponent, useEffect, useRef, useState } from 'react'

import { MdiReactIconComponentType } from 'mdi-react'
import CachedIcon from 'mdi-react/CachedIcon'
import CheckboxMarkedCircleOutlineIcon from 'mdi-react/CheckboxMarkedCircleOutlineIcon'
import ClockOutlineIcon from 'mdi-react/ClockOutlineIcon'
import LaptopIcon from 'mdi-react/LaptopIcon'
import LockOutlineIcon from 'mdi-react/LockOutlineIcon'
import Link from 'next/link'

import { ContentSection } from '@components'
import { buttonStyle, buttonLocation } from '@data'
import { useWindowWidth } from '@hooks'

interface UseCases {
    icon: MdiReactIconComponentType
    title: string
    description: string
    link: {
        ['href']: string
        ['text']: string
    }
}

const useCases: UseCases[] = [
    {
        icon: LockOutlineIcon,
        title: 'Improve code security',
        description: 'Find, fix, and track vulnerable code quickly across your entire codebase.',
        link: {
            href: '/use-cases/vulnerabilities',
            text: 'Learn more about code security',
        },
    },
    {
        icon: ClockOutlineIcon,
        title: 'Onboard developers',
        description: 'Decrease time to first commit with codebase onboarding and knowledge sharing.',
        link: {
            href: '/use-cases/onboarding',
            text: 'Learn more about onboarding',
        },
    },
    {
        icon: CheckboxMarkedCircleOutlineIcon,
        title: 'Resolve incidents',
        description: 'Identify the root cause in code and fix the issue everywhere, faster.',
        link: {
            href: '/use-cases/incident-response',
            text: 'Learn more about incident response',
        },
    },
    {
        icon: CachedIcon,
        title: 'Promote code reuse',
        description: 'Find existing code for reuse and contribute to a more coherent codebase.',
        link: {
            href: '/use-cases/code-reuse',
            text: 'Learn more about code reuse',
        },
    },
    {
        icon: LaptopIcon,
        title: 'Boost code health',
        description: 'Improve code health with large-scale changes, and track key initiatives.',
        link: {
            href: '/use-cases/code-health',
            text: 'Learn more about code health',
        },
    },
]

const UseCases: FunctionComponent = () => {
    const box = useRef<HTMLDivElement | null>(null)
    const [boxHeight, setBoxHeight] = useState<number>(0)
    const windowWidth = useWindowWidth()
    const boxHalfHeight = `-${boxHeight / 2}px`

    function getBoxHeight(): void {
        if (box.current) {
            setBoxHeight(box.current.clientHeight)
        }
    }

    useEffect(() => {
        if (box.current) {
            setBoxHeight(box.current?.clientHeight)
        }

        window.addEventListener('resize', getBoxHeight)

        return () => {
            window.removeEventListener('resize', getBoxHeight)
        }
    }, [])

    return (
        <ContentSection className="position-relative pt-7">
            <div className="text-center">
                <h1 className="font-weight-bold">Move fast &mdash; even in big codebases</h1>
            </div>

            <div className="row max-w-900 mx-auto mt-6">
                {useCases.map(useCase => (
                    <div
                        key={useCase.title}
                        className="col-sm-6 d-flex flex-column flex-sm-row align-items-center align-items-sm-start mb-6"
                    >
                        <useCase.icon className="text-vivid-violet w-100 max-w-50 h-auto mr-sm-3 mb-4 mb-sm-0" />
                        <div className="text-center text-sm-left">
                            <h4 className="font-weight-bold">{useCase.title}</h4>
                            <div className="text-lg">
                                <p className="m-0">{useCase.description}</p>
                                {useCase.link && (
                                    <Link
                                        href={useCase.link.href}
                                        data-button-style={buttonStyle.text}
                                        data-button-location={buttonLocation.body}
                                        data-button-type="cta"
                                    >
                                        {useCase.link.text}
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div
                ref={box}
                // eslint-disable-next-line react/forbid-dom-props
                style={{ marginBottom: boxHalfHeight, width: '90%' }}
                className="col-6 bg-gradient-venus px-4 py-6 p-sm-6 px-xl-7 py-xl-6 mx-auto mx-xl-0 xl-absolute right-0 max-w-550 bottom-0 text-center text-sm-left"
            >
                <h3 className="font-weight-bold mb-4 pr-sm-0 pr-md-7 pr-xl-4">
                    Want to use Sourcegraph at your company?
                </h3>
                <p className="text-xl">
                    <Link href="/get-started">Get started</Link> for free with up to 10 teammates or{' '}
                    <Link href="/demo">request a demo</Link> to learn about our enterprise plan and to see Sourcegraph
                    in your own environment.
                    <Link
                        href="/demo"
                        data-button-style={buttonStyle.primary}
                        data-button-location={buttonLocation.bodyDemo}
                        passHref={true}
                        data-button-type="cta"
                    >
                        <a className="btn btn-primary mt-5 d-block d-sm-inline-block" href="#none">
                            Request a demo
                        </a>
                    </Link>
                </p>
            </div>
        </ContentSection>
    )
}

export default UseCases
