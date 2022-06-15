import { FunctionComponent } from 'react'

import Link from 'next/link'

import { Icon } from '@components'

interface TextLink {
    text: string
    href?: string
}

interface Props {
    useCases: TextLink[]
    challenges: TextLink[]
    solutions: TextLink[]
    results: TextLink[]
}

interface ListItemProps {
    item: TextLink
}

const isString = (value: string | TextLink): boolean => typeof value === 'string'

const ListItemType: FunctionComponent<ListItemProps> = ({ item }) => (
    <li>{item?.href ? <Link href={item.href}>{item.text}</Link> : <span>{item.text}</span>}</li>
)

export const UseChallengeSolutionResults: FunctionComponent<Props> = ({ useCases, challenges, solutions, results }) => (
    <section className="d-flex flex-column flex-md-row">
        <div className="bg-light-gray-4-2 p-lg-6 p-md-5 px-1 py-5 col-sm-12 col-md-6">
            <section className="max-w-xl-550 ml-xl-auto">
                <div className="mb-5 ml-3 d-flex flex-column flex-md-row justify-content-lg-end">
                    <div className="d-flex align-self-center align-self-md-start col-1 col-md-2 justify-content-center align-items-center p-0 text-center p-1 max-w-50">
                        <Icon name="AssignmentSharp" size={40} className="p-1" variant="boxed" />
                    </div>
                    <div className="pl-3 col-11 col-lg-9">
                        <h5 className="font-weight-bold">Use case</h5>
                        <ul className="pl-4">
                            {useCases.map(useCase => (
                                <ListItemType key={useCase.text} item={useCase} />
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="mb-5 ml-3 d-flex flex-column flex-md-row justify-content-lg-end">
                    <div className="d-flex align-self-center align-self-md-start col-1 col-md-2 justify-content-center align-items-center p-0 text-center p-1 max-w-50">
                        <Icon name="FlagSharp" size={40} className="p-1" variant="boxed" />
                    </div>
                    <div className="pl-3 col-11 col-lg-9">
                        <h5 className="font-weight-bold">Challenge</h5>
                        <ul className="pl-4">
                            {challenges.map(challenge => (
                                <ListItemType key={challenge.text} item={challenge} />
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="mb-5 ml-3 d-flex flex-column flex-md-row justify-content-lg-end">
                    <div className="d-flex align-self-center align-self-md-start col-1 col-md-2 justify-content-center align-items-center p-0 text-center p-1 max-w-50">
                        <Icon name="CheckCircleSharp" size={40} className="p-1" variant="boxed" />
                    </div>
                    <div className="pl-3 col-11 col-lg-9">
                        <h5 className="font-weight-bold">Solution</h5>
                        <ul className="pl-4">
                            {solutions.map(solution => (
                                <ListItemType key={solution.text} item={solution} />
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
        <div className="bg-gradient-venus-radial p-lg-6 p-md-5 px-1 py-5 col-sm-12 col-md-6">
            <section className="max-w-xl-550">
                <div className="mb-5 ml-3 ml-lg-0 d-flex flex-column flex-md-row">
                    <div className="d-flex align-self-center align-self-md-start col-1 col-md-2 justify-content-center align-items-center p-0 text-center p-1 max-w-50">
                        <Icon name="BarChartSharp" size={40} className="p-1" variant="boxed" />
                    </div>
                    <div className="pl-3 col-11 col-lg-9">
                        <h5 className="font-weight-bold">Results</h5>
                        <ul className="pl-4">
                            {results.map(result => (
                                <ListItemType key={result.text} item={result} />
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </section>
)
