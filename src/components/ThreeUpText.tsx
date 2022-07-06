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
    <section className="row mx-lg-0 mx-4">
        <h2 className="text-md-center col-12 max-w-lg-550 mx-auto mb-lg-4 px-0 font-weight-bold">{title}</h2>

        <div className="d-flex flex-wrap justify-content-between">
            {items.map((item, index) => (
                <div key={`item-${index + 1}-${item.description}`} className="col-12 col-lg-4 text-md-center pt-5 px-0">
                    {item.icon && item.icon}
                    {item.subtitle}
                    <p className="max-w-md-400 mx-auto">{item.description}</p>
                </div>
            ))}
        </div>
    </section>
)
