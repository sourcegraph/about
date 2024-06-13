import { FunctionComponent } from 'react'

import AlertIcon from 'mdi-react/AlertIcon'
import ChartLineVariantIcon from 'mdi-react/ChartLineVariantIcon'
import CheckCircleIcon from 'mdi-react/CheckCircleIcon'
import Link from 'next/link'

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

const ListItemType: FunctionComponent<ListItemProps> = ({ item }) => (
    <li className="py-1">{item?.href ? <Link href={item.href}>{item.text}</Link> : <span>{item.text}</span>}</li>
)

export const UseChallengeSolutionResults: FunctionComponent<Props> = ({ useCases, challenges, solutions, results }) => (
    <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="flex items-center lg:rounded-lg lg:border lg:border-gray-300 lg:p-8">
            <div>
                <h4 className="mb-2 text-2xl leading-[1] lg:text-3xl">Use case</h4>
                {useCases.length > 1 ? (
                    <ul className="mb-0 ml-0 pl-6">
                        {useCases.map(useCase => (
                            <ListItemType key={useCase.text} item={useCase} />
                        ))}
                    </ul>
                ) : useCases[0].href ? (
                    <p className="mb-0 text-3xl lg:text-4xl">
                        <Link href={useCases[0].href} className="font-semibold">
                            {useCases[0].text}
                        </Link>
                    </p>
                ) : (
                    <span>{useCases[0].text}</span>
                )}
            </div>
        </div>
        <div className="flex flex-col gap-4 rounded-lg border border-gray-300 p-5 md:p-8 lg:mb-0 lg:flex-row">
            <div className="flex max-w-[50px] items-center justify-center self-start rounded bg-violet-100 p-1 text-center">
                <AlertIcon size={40} className="p-1 text-violet-400" />
            </div>
            <div>
                <h4>Challenge</h4>
                {challenges.length > 1 ? (
                    <ul className="mb-0 ml-0 pl-6">
                        {challenges.map(challenge => (
                            <ListItemType key={challenge.text} item={challenge} />
                        ))}
                    </ul>
                ) : challenges[0].href ? (
                    <Link href={challenges[0].href}>{challenges[0].text}</Link>
                ) : (
                    <span>{challenges[0].text}</span>
                )}
            </div>
        </div>
        <div className="flex flex-col gap-4 rounded-lg border border-gray-300 p-5 md:p-8 lg:mb-0 lg:flex-row">
            <div className="flex max-w-[50px] items-center justify-center self-start rounded bg-violet-100 p-1 text-center">
                <CheckCircleIcon size={40} className="p-1 text-violet-400" />
            </div>
            <div>
                <h4>Solution</h4>
                {solutions.length > 1 ? (
                    <ul className="mb-0 ml-0 pl-6">
                        {solutions.map(solution => (
                            <ListItemType key={solution.text} item={solution} />
                        ))}
                    </ul>
                ) : solutions[0].href ? (
                    <Link href={solutions[0].href}>{solutions[0].text}</Link>
                ) : (
                    <span>{solutions[0].text}</span>
                )}
            </div>
        </div>
        <div className="sg-bg-gradient-venus flex flex-col gap-4 rounded-lg border border-gray-300 p-8 p-5 md:p-8 lg:ml-0 lg:flex-row">
            <div className="flex max-w-[50px] items-center justify-center self-start rounded bg-violet-100 p-1 text-center">
                <ChartLineVariantIcon size={40} className="p-1 text-violet-400" />
            </div>
            <div>
                <h4>Results</h4>
                {results.length > 1 ? (
                    <ul className="mb-0 ml-0 pl-6">
                        {results.map(result => (
                            <ListItemType key={result.text} item={result} />
                        ))}
                    </ul>
                ) : results[0].href ? (
                    <Link href={results[0].href}>{results[0].text}</Link>
                ) : (
                    <span>{results[0].text}</span>
                )}
            </div>
        </div>
    </div>
)
