import React, { FunctionComponent, useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'gatsby'
import classNames from 'classnames'

import { MdiReactIconComponentType } from 'mdi-react'
import ToolsIcon from 'mdi-react/ToolsIcon'
import ClockOutlineIcon from 'mdi-react/ClockOutlineIcon'
import CheckboxMarkedCircleOutlineIcon from 'mdi-react/CheckboxMarkedCircleOutlineIcon'
import CachedIcon from 'mdi-react/CachedIcon'
import LaptopIcon from 'mdi-react/LaptopIcon'

import { ContentSection } from '../../components/content/ContentSection'
import { useWindowWidth } from '../../hooks'
import { breakpoints } from '../../breakpoints'

interface UseCases {
    icon: MdiReactIconComponentType
    title: string
    description: string
    link?: string
}

const useCases: UseCases[] = [
    {
        icon: ToolsIcon,
        title: 'Fix vulnerabilities',
        description: 'Find, fix, and track vulnerable code quickly across your entire codebase.',
        link: '/use-cases/vulnerabilities',
    },
    {
        icon: ClockOutlineIcon,
        title: 'Onboard developers',
        description: 'Decrease time to first commit with codebase onboarding and knowledge sharing.',
        link: '/use-cases/onboarding',
    },
    {
        icon: CheckboxMarkedCircleOutlineIcon,
        title: 'Resolve incidents',
        description: 'Identify the root cause in code and fix the issue everywhere, faster.',
        // link: '/use-cases/incidents'
    },
    {
        icon: CachedIcon,
        title: 'Promote code reuse',
        description: 'Find existing code for reuse and contribute to a more coherent codebase.',
        // link: '/use-cases/code-reuse'
    },
    {
        icon: LaptopIcon,
        title: 'Boost code health',
        description: 'Improve code health with large-scale changes, and track key initiatives.',
        // link: '/use-cases/code-health'
    },
]

const UseCases: FunctionComponent = () => {
    const box = useRef(null)
    const [boxHeight, setBoxHeight] = useState<number>(0)

    const windowWidth = useWindowWidth()
    const isMobile = windowWidth < breakpoints.lg

    const containerPaddingY = 96 // 6 rem
    const boxHalfHeight = `-${isMobile ? boxHeight / 2 + containerPaddingY : boxHeight / 2}px`

    function getBoxHeight() {
        setBoxHeight(box.current?.clientHeight)
    }

    useLayoutEffect(() => {
        setBoxHeight(box.current?.clientHeight)

        window.addEventListener('resize', getBoxHeight)

        return () => {
            window.removeEventListener('resize', getBoxHeight)
        }
    }, [])

    return (
        <ContentSection className="position-relative py-7">
            <div className="text-center">
                <h1 className="font-weight-bold">Move fast &mdash; even in big codebases</h1>
                <a href="https://docs.sourcegraph.com">See the docs</a>
            </div>

            <div className="row max-w-800 mx-auto mt-6">
                {useCases.map((useCase, i) => (
                    <div
                        key={useCase.title}
                        className="col-sm-6 d-flex flex-column flex-sm-row align-items-center align-items-sm-start mb-6"
                    >
                        <useCase.icon className="text-vivid-violet w-100 max-w-50 h-auto mr-sm-2 mb-4 mb-sm-0" />
                        <div className="text-center text-sm-left">
                            <h4 className="font-weight-bold">{useCase.title}</h4>
                            <div className="text-lg">
                                <p className="m-0">{useCase.description}</p>
                                {useCase.link && <Link to={useCase.link}>Learn more</Link>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div
                ref={box}
                style={{ marginBottom: boxHalfHeight, width: '90%' }}
                className="col-6 bg-gradient-venus px-4 py-7 p-sm-6 mx-auto mx-lg-0 lg-absolute right-0 max-w-550 bottom-0"
            >
                <h3 className="font-weight-bold mb-4">Want to use Sourcegraph at your company?</h3>
                <p className="text-xl">
                    <Link to="/get-started">Get started</Link> for free with up to 10 teammates or{' '}
                    <Link to="/demo">request a demo</Link> to learn about our enterprise plan and to see Sourcegraph in
                    your own environment.
                </p>
            </div>
        </ContentSection>
    )
}

export default UseCases
