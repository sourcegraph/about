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
            <div className="tw-flex-row tw-text-center xs:tw-flex xs:tw-text-left tw-items-center tw-justify-center tw-border-b tw-border-solid tw-border-b-gray-200">
                {tabs.map((tab, index) => (
                    <div
                        key={tab.title}
                        onClick={() => setCurrentTab(index)}
                        onKeyDown={() => setCurrentTab(index)}
                        role="button"
                        tabIndex={0}
                        className={classNames(
                            'tw-border-b-3 tw-border-solid tw-border-transparent tw-px-4 tw-py-2 tw-cursor-pointer tw-text-lg tw-font-semibold tw-text-center',
                            { 'tw-border-b-violet-400 tw-bg-transparent': currentTab === index }
                        )}
                    >
                        {tab.title}
                    </div>
                ))}
            </div>

            <div className="tw-py-6">
                {tabs.map((tab, index) => (
                    <div
                        key={tab.title}
                        className={classNames({
                            'tw-block': currentTab === index,
                            'tw-hidden': currentTab !== index,
                        })}
                    >
                        {tab.content}
                    </div>
                ))}
            </div>
        </div>
    )
}
