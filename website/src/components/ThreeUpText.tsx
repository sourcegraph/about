import React, { FunctionComponent } from 'react'

interface Item {
    icon?: React.ReactNode
    subtitle: React.ReactNode
    description: string
}

interface Props {
    title: string
    items: Item[]
}

export const ThreeUpText: FunctionComponent<Props> = ({ title, items }) => (
    <section>
        <h2 className="text-center display-3 font-weight-bold">{title}</h2>

        <div className="mb-5 d-flex flex-wrap justify-content-between">
            {items.map((item, index) => (
                <div
                    key={`item-${index + 1}-${item.description}`}
                    className="col-sm-12 col-md-3 min-w-350 text-center pt-5"
                >
                    {item.icon && item.icon}
                    {item.subtitle}
                    <p className="max-w-md-400 max-w-lg-250 max-w-xl-250 mx-auto">{item.description}</p>
                </div>
            ))}
        </div>
    </section>
)
