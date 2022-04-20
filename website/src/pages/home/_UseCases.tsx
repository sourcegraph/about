import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'
import classNames from 'classnames'

import { MdiReactIconComponentType } from 'mdi-react'
import ToolsIcon from 'mdi-react/ToolsIcon'
import ClockOutlineIcon from 'mdi-react/ClockOutlineIcon'
import CheckboxMarkedCircleOutlineIcon from 'mdi-react/CheckboxMarkedCircleOutlineIcon'
import CachedIcon from 'mdi-react/CachedIcon'
import LaptopIcon from 'mdi-react/LaptopIcon'

import { ContentSection } from '../../components/content/ContentSection'

import styles from './home.module.scss'

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

const UseCases: FunctionComponent = () => (
    <div className="position-relative">
        <ContentSection className="py-7">
            <div className="text-center">
                <h1 className="font-weight-bold">Move fast &mdash; even in big codebases</h1>
                <a href="https://docs.sourcegraph.com">See the docs</a>
            </div>

            <div className="row max-w-800 mx-auto mt-6">
                {useCases.map((useCase, i) => (
                    <div
                        key={useCase.title}
                        className={classNames(
                            {
                                ['mb-6']: i !== useCases.length - 1,
                                ['mb-0']: i === useCases.length - 1,
                            },
                            'col-sm-6 d-flex align-items-start'
                        )}
                    >
                        <useCase.icon className="text-vivid-violet w-100 max-w-50 h-auto mr-2" />
                        <div>
                            <h4 className="font-weight-bold">{useCase.title}</h4>
                            <p className="m-0">{useCase.description}</p>
                            {useCase.link && <Link to={useCase.link}>Learn more</Link>}
                        </div>
                    </div>
                ))}
            </div>
        </ContentSection>

        <div
            className={classNames(
                styles.floatingBox,
                'col-6 bg-gradient-venus px-7 p-6 lg-absolute right-0 bottom-0 max-w-550'
            )}
        >
            <h3 className="font-weight-bold mb-4">Want to use Sourcegraph at your company?</h3>
            <p className="text-xl">
                <Link to="/get-started">Get started</Link> for free with up to 10 teammates or{' '}
                <Link to="/demo">request a demo</Link> to learn about our enterprise plan and to see Sourcegraph in your
                own environment.
            </p>
        </div>
    </div>
)

export default UseCases
