import { FunctionComponent } from 'react'

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
    <section className="mx-4 row mx-lg-0">
        <h2 className="px-0 mx-auto text-md-center col-12 max-w-lg-550 mb-lg-4">{title}</h2>

        <div className="flex-wrap d-flex justify-content-between">
            {items.map((item, index) => (
                <div
                    key={`item-${index + 1}-${item.description}`}
                    className="pt-5 col-12 col-lg-4 max-w-lg-400 text-md-center px-auto"
                >
                    {item.icon && item.icon}
                    {item.subtitle}
                    <p className="mx-auto max-w-md-400">{item.description}</p>
                </div>
            ))}
        </div>
    </section>
)
