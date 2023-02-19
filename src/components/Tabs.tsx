import { FunctionComponent, ReactNode, useState } from 'react'

import classNames from 'classnames'

interface Tab {
    title: string
    content: ReactNode
}

interface Tabs {
    tabs: Tab[]
}

export const Tabs: FunctionComponent<Tabs> = ({ tabs }) => {
    const [currentTab, setCurrentTab] = useState(0)

    return (
        <div>
            <div className="flex-row items-center justify-center border-b border-solid border-b-gray-200 text-center xs:flex xs:text-left">
                {tabs.map((tab, index) => (
                    <div
                        key={tab.title}
                        onClick={() => setCurrentTab(index)}
                        onKeyDown={() => setCurrentTab(index)}
                        role="button"
                        tabIndex={0}
                        className={classNames(
                            'cursor-pointer border-b-3 border-solid border-transparent px-4 py-2 text-center text-lg font-semibold',
                            { 'border-b-violet-400 bg-transparent': currentTab === index }
                        )}
                    >
                        {tab.title}
                    </div>
                ))}
            </div>

            <div className="py-6">
                {tabs.map((tab, index) => (
                    <div
                        key={tab.title}
                        className={classNames({
                            block: currentTab === index,
                            hidden: currentTab !== index,
                        })}
                    >
                        {tab.content}
                    </div>
                ))}
            </div>
        </div>
    )
}
