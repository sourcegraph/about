import React from 'react'
import ArrowUpIcon from 'mdi-react/ArrowUpIcon'
import ArrowDownIcon from 'mdi-react/ArrowDownIcon'
import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'

interface CarouselProps {
    className?: string
    backgroundClass: string
    items: [
        {
            id: string
            backgroundClass: string
            buttonLabel: string
            headerClass: string
            text: string
            itemClass: string
        }
    ]
}

export default class CustomCarousel extends React.Component<CarouselProps> {
    constructor(props: CarouselProps) {
        super(props)
        this.showCurrentValue = this.showCurrentValue.bind(this)
        this.decrementList = this.decrementList.bind(this)
        this.incrementList = this.incrementList.bind(this)
        this.getBoxClassNames = this.getBoxClassNames.bind(this)

        this.state = {
            items: props.items,
            currentItem: props.items[0],
            previousItem: {},
            backgroundClass: props.backgroundClass,
        }
    }

    public showCurrentValue = currentItem => {
        // If the user clicked on the currently selected item then do nothing.
        if (currentItem == this.state.currentItem) {
            return
        }

        // Change backgroundClass
        this.setState({ backgroundClass: currentItem.backgroundClass })

        // Show currently clicked item
        currentItem.headerClass = 'active'
        currentItem.itemClass = 'd-block'
        this.setState({ currentItem: currentItem })

        // Hide previous item
        let previousItem = this.state.currentItem
        previousItem.headerClass = ''
        previousItem.itemClass = 'd-none'
        this.setState({ previousItem: previousItem })
    }

    public getBoxClassNames = () => {
        return `custom-carousel row ${this.state.backgroundClass || ''}`
    }

    public decrementList = () => {
        let currentItemId = this.state.currentItem.id

        if (currentItemId > 0) {
            currentItemId--
        } else {
            currentItemId = 2
        }

        this.showCurrentValue(this.state.items[currentItemId])
    }

    public incrementList = () => {
        let currentItemId = this.state.currentItem.id

        if (currentItemId < 2) {
            currentItemId++
        } else {
            currentItemId = 0
        }

        this.showCurrentValue(this.state.items[currentItemId])
    }

    public render(): JSX.Element | null {
        return (
            <div className={this.getBoxClassNames()}>
                <div className="carousel-nav col-lg-3 col-md-2 ml-lg-7 ml-md-5">
                    <ArrowUpIcon
                        className="ml-lg-6 mb-4"
                        onClick={() => {
                            this.decrementList()
                        }}
                    />
                    <ul className="ml-lg-3">
                        {this.props.items.map(item => (
                            <li
                                className={item.headerClass}
                                key={item.id}
                                onClick={() => {
                                    this.showCurrentValue(item)
                                }}
                            >
                                {item.buttonLabel}
                            </li>
                        ))}
                    </ul>
                    <ArrowDownIcon
                        className="ml-lg-6 mt-4"
                        onClick={() => {
                            this.incrementList()
                        }}
                    />
                </div>
                <div className="col-lg-6 col-md-8 col-sm-12 mt-lg-5 ml-md-6">
                    {this.props.items.map(item => (
                        <div key={item.id} className={item.itemClass}>
                            <h1 className="display-2 mb-lg-4">{item.buttonLabel}</h1>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>

                <div className="carousel-nav-mobile mx-auto">
                    <ArrowLeftIcon
                        className="mr-4"
                        onClick={() => {
                            this.decrementList()
                        }}
                    />
                    <ArrowRightIcon
                        className="ml-4"
                        onClick={() => {
                            this.incrementList()
                        }}
                    />
                </div>
            </div>
        )
    }
}
