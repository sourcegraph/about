import { FunctionComponent, ReactNode, useState } from 'react'

import MinusIcon from 'mdi-react/MinusIcon'
import PlusIcon from 'mdi-react/PlusIcon'

interface Accordion {
    items: Item[]
}

interface Item {
    title: string;
    content: string | ReactNode;
}

export const Accordion: FunctionComponent<Accordion> = ({ items }) => {
    const [activeKey, setActiveKey] = useState<number | null>(null)

    return (
        <>
            {items.map((item, index) => (
                <div key={item.title} className="tw-border-t-1 tw-border-gray-200 tw-max-w-2xl tw-mb-sm">
                    <button className="tw-cursor-pointer tw-pr-sm tw-w-full tw-flex tw-justify-between tw-items-center" type="button" onClick={() => setActiveKey(activeKey !== index ? index : null)} onKeyDown={() => setActiveKey(activeKey !== index ? index : null)}>
                        <h4 className="tw-text-start tw-mt-sm">{item.title}</h4>
                        <span className="tw-text-gray-400 tw-font-normal tw-mt-xs">
                            {activeKey === index ? <MinusIcon /> : <PlusIcon />}
                        </span>
                    </button>
                    {activeKey === index && <div className="tw-max-w-xl tw-mt-xs">{item.content}</div>}
                </div>
            ))}
        </>
    )
}
