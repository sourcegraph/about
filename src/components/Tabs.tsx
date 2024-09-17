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
    isWideSpacing?: boolean
    title?: string
    titleClassName?: string
    isScrollable?: boolean
}

export const Tabs: FunctionComponent<Tabs> = ({
    tabs,
    title,
    navClassName,
    contentClassName,
    titleClassName,
    tabBarExtraContent,
    tabsWrapperClassName,
    onTabChange,
    activeTabKey: controlledActiveTabKey,
    isWideSpacing,
    isScrollable = false,
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
        <div>
            {title && (
                <h2 className={classNames('mb-[45px] text-center text-gray-700 md:mb-16', titleClassName)}>{title}</h2>
            )}
            <div className={tabsWrapperClassName}>
                <div className={classNames('flex ', { ' lg:px-[108px]': isScrollable })}>
                    <div
                        className={classNames(
                            'flex-row border-b border-solid border-b-gray-200 text-center md:min-w-fit  xs:flex xs:text-left',
                            navClassName,
                            { 'mx-auto max-w-[846px] gap-x-6': isWideSpacing },
                            {
                                'flex w-full overflow-scroll whitespace-nowrap sm:items-center sm:justify-center':
                                    isScrollable,
                            },
                            { 'items-center justify-center xs:flex': !isScrollable }
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
                                    '!relative cursor-pointer border-b-3 border-solid border-transparent px-4 pt-2 pb-[38px] text-center text-lg font-semibold md:pb-[25px]',
                                    {
                                        'border-b-violet-400 bg-transparent': tab.key === currentTab && !isWideSpacing,
                                    },
                                    {
                                        '!leading-[31px] text-gray-700 md:pt-2 md:pb-6 md:text-2xl': isWideSpacing,
                                    },
                                    { 'min-w-[100px] shrink-0': isScrollable },
                                    tab.className
                                )}
                            >
                                {tab.title}
                                {isWideSpacing && (
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
                </div>

                <div
                    className={classNames(
                        { 'py-6': !isWideSpacing && !isScrollable },
                        { 'pt-[33px] pb-0': isWideSpacing },
                        { 'pt-6 pb-5': isScrollable && !isWideSpacing },
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
        </div>
    )
}
