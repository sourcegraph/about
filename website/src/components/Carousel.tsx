import React from 'react'
import ArrowUpIcon from 'mdi-react/ArrowUpIcon'
import ArrowDownIcon from 'mdi-react/ArrowDownIcon'

interface CarouselProps {
	className?: string
	items: [
		{
			id: string,
			buttonLabel: string,
			imageUrl: string,
			text:string,
			className: string,
			itemClassName: string
		}
	]
}

export default class Carousel extends React.Component<CarouselProps> {
	constructor(props: CarouselProps) {
		super(props)
console.log(0, props)
		this.showCurrentValue = this.showCurrentValue.bind(this)
		this.state = {
			currentItem: props.items[0],
			previousItem: {}
		}
	}

	public showCurrentValue = (currentItem) => {
console.log(1, currentItem);
		// Show currently clicked item
		currentItem.className = "active"
		currentItem.itemClassName = "d-block"
console.log(2, currentItem);
		this.setState({currentItem: currentItem})
		
		// Hide previous item
		let previousItem = this.state.currentItem
console.log(3, previousItem);
		previousItem.className = ""
		previousItem.itemClassName = "d-none"
console.log(4, previousItem);
		this.setState({previousItem: previousItem})
	}

	public render(): JSX.Element | null {
		return (
            <div className={`carousel row ${this.props.className || ''}`}>
                <div className="col-lg-4">
                	<ul>
                    	{this.props.items.map(item => (
                    		<li className={item.className} key={item.id} onClick={() => {this.showCurrentValue(item)}}>{item.buttonLabel}</li>
                    	))}
                    </ul>
                </div>
                <div className="col-lg-6">
                	{this.props.items.map(item => (
                		<div key={item.id} className={item.itemClassName}>
		                    <div className="text-uppercase">We Value</div>
		                    <h1 id="header" className="display-2">{item.buttonLabel}</h1>
		                    <p id="paragraph">
		                        {item.text}
		                    </p>
		                    <img src={item.imageUrl} />
		                </div>
	                ))}
                </div>
            </div>
		)
	}
}
