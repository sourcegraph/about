import { FunctionComponent, ReactNode, useState } from 'react'

import classNames from 'classnames'

interface Tab {
    key: string
    title: string | ReactNode
    content: ReactNode
    className?: string
}

interface Tabs {
    tabs: Tab[]
    tabBarExtraContent?: string | ReactNode
    navClassName?: string
    contentClassName?: string
}

export const Tabs: FunctionComponent<Tabs> = ({ tabs, navClassName, contentClassName, tabBarExtraContent }) => {
    const [currentTab, setCurrentTab] = useState(0)

    return (
        <div>
            <div
                className={classNames(
                    'flex-row items-center justify-center border-b border-solid border-b-gray-200 text-center xs:flex xs:text-left',
                    navClassName
                )}
            >
                {tabs.map((tab, index) => (
                    <div
                        key={tab.key}
                        onClick={() => setCurrentTab(index)}
                        onKeyDown={() => setCurrentTab(index)}
                        role="button"
                        tabIndex={0}
                        className={classNames(
                            'cursor-pointer border-b-3 border-solid border-transparent px-4 py-2 text-center text-lg font-semibold',
                            { 'border-b-violet-400 bg-transparent': currentTab === index },
                            tab.className
                        )}
                    >
                        {tab.title}
                    </div>
                ))}

                {tabBarExtraContent}
            </div>

            <div className={classNames('py-6', contentClassName)}>
                {tabs.map((tab, index) => (
                    <div
                        key={tab.key}
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
