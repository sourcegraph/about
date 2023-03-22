import { FunctionComponent, ReactNode, useEffect, useState } from 'react'

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
    tabsWrapperClassName?: string
    onTabChange?: (activeTabKey: string) => void
    activeTabKey?: string
}

export const Tabs: FunctionComponent<Tabs> = ({
    tabs,
    navClassName,
    contentClassName,
    tabBarExtraContent,
    tabsWrapperClassName,
    onTabChange,
    activeTabKey: controlledActiveTabKey,
}) => {
    const [currentTab, setCurrentTab] = useState(tabs[0]?.key)

    useEffect(() => {
        if (controlledActiveTabKey !== undefined) {
            setCurrentTab(controlledActiveTabKey)
        }
    }, [controlledActiveTabKey])

    const handleTabChange = (key: string): void => {
        setCurrentTab(key)
        onTabChange?.(key)
    }

    return (
        <div className={tabsWrapperClassName}>
            <div
                className={classNames(
                    'flex-row items-center justify-center border-b border-solid border-b-gray-200 text-center xs:flex xs:text-left',
                    navClassName
                )}
            >
                {tabs.map(tab => (
                    <div
                        key={tab.key}
                        onClick={() => handleTabChange(tab.key)}
                        onKeyDown={() => handleTabChange(tab.key)}
                        role="button"
                        tabIndex={0}
                        className={classNames(
                            'cursor-pointer border-b-3 border-solid border-transparent px-4 py-2 text-center text-lg font-semibold',
                            { 'border-b-violet-400 bg-transparent': tab.key === currentTab },
                            tab.className
                        )}
                    >
                        {tab.title}
                    </div>
                ))}

                {tabBarExtraContent}
            </div>

            <div className={classNames('py-6', contentClassName)}>
                {tabs.map(tab => (
                    <div
                        key={tab.key}
                        className={classNames({
                            block: tab.key === currentTab,
                            hidden: tab.key !== currentTab,
                        })}
                    >
                        {tab.content}
                    </div>
                ))}
            </div>
        </div>
    )
}
