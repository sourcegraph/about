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
    isBatchChangesClassName?: boolean
}

export const Tabs: FunctionComponent<Tabs> = ({
    tabs,
    navClassName,
    contentClassName,
    tabBarExtraContent,
    tabsWrapperClassName,
    onTabChange,
    activeTabKey: controlledActiveTabKey,
    isBatchChangesClassName,
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
                    navClassName,
                    { 'mx-auto max-w-[846px] gap-x-6': isBatchChangesClassName }
                )}
            >
                {tabs.map(tab => (
                    <button
                        key={tab.key}
                        onClick={() => handleTabChange(tab.key)}
                        onKeyDown={() => handleTabChange(tab.key)}
                        tabIndex={0}
                        type="button"
                        className={classNames(
                            '!relative cursor-pointer border-b-3 border-solid border-transparent px-4 text-center font-semibold',
                            { 'border-b-violet-400 bg-transparent': tab.key === currentTab && !isBatchChangesClassName },
                            { 'text-violet-500': tab.key !== currentTab && isBatchChangesClassName },
                            { 'py-2 text-lg': !isBatchChangesClassName },
                            {
                                'py-2 text-lg !leading-[31px] text-gray-700 md:pt-2 md:pb-6 md:text-2xl':
                                    isBatchChangesClassName,
                            },
                            tab.className
                        )}
                    >
                        {tab.title}
                        {isBatchChangesClassName && (
                            <div className="absolute -bottom-1.5 left-[0px] right-[0px] flex w-full justify-center">
                                <div
                                    className={classNames({
                                        'h-[4px] w-full bg-violet-400 md:w-[90%]': tab.key === currentTab,
                                    })}
                                />
                            </div>
                        )}
                    </button>
                ))}

                {tabBarExtraContent}
            </div>

            <div
                className={classNames(
                    { 'py-6': !isBatchChangesClassName },
                    { 'pt-[33px] pb-0': isBatchChangesClassName },
                    contentClassName
                )}
            >
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
