import { Link } from 'gatsby'
import * as _ from 'lodash'
import ChevronDownIcon from 'mdi-react/ChevronDownIcon'
import * as React from 'react'
import { eventLogger } from '../EventLogger'

interface DropdownProps {
    title: string
    options: string[]
}

export default class Dropdown extends React.Component<any, any> {
    private wrapperRef: Element

    constructor(props: DropdownProps) {
        super(props)
        this.setWrapperRef = this.setWrapperRef.bind(this)
        this.handleClickOutside = this.handleClickOutside.bind(this)

        this.state = {
            open: false,
            selected: this.props.initial || -1,
        }
    }

    public componentDidMount(): void {
        document.addEventListener('click', this.handleClickOutside)
    }
    public componentWillUnmount(): void {
        document.removeEventListener('click', this.handleClickOutside)
    }

    public toggleDropdown(): void {
        this.setState({
            active: !this.state.active,
        })
    }

    public handleClick(i: number, option: string): void {
        this.setState({
            selected: i,
        })
        this.toggleDropdown()
        if (option === 'server') {
            eventLogger.trackServerLinkClicked('header')
        } else if (option === 'code search') {
            eventLogger.trackCodeSearchLinkClicked('header')
        } else if (option === 'code intelligence') {
            eventLogger.trackCodeIntelligenceLinkClicked('header')
        } else if (option === 'saved searches') {
            eventLogger.trackSavedQueriesLinkClicked('header')
        } else if (option === 'integrations') {
            eventLogger.trackIntegrationsLinkClicked('header')
        } else if (option === 'Data Center') {
            eventLogger.trackDataCenterLinkClicked('header')
        }
    }

    public handleClickOutside(e: Event): void {
        if (this.wrapperRef && !this.wrapperRef.contains(e.target as HTMLElement)) {
            this.setState({
                active: false,
            })
        }
    }

    public setWrapperRef(node: Element): void {
        this.wrapperRef = node
    }

    public renderOptions(): JSX.Element {
        if (!this.props.options) {
            return
        }

        return this.props.options.map((option: string, i: number) => {
            const link = '/products/' + _.kebabCase(option)
            const words = option.split(' ')
            words[0] = _.upperFirst(words[0])
            option = words.join(' ')
            return (
                <Link to={link} key={i}>
                    <li
                        // tslint:disable-next-line:jsx-no-lambda
                        onClick={evt => this.handleClick(i, option)}
                        key={i}
                        className={
                            'link bt b--light-11 dim ph3 pv2 f5 gray-9 dropdown__list-item ' +
                            (i === this.state.selected ? 'dropdown__list-item--active' : '')
                        }
                    >
                        {option}
                    </li>
                </Link>
            )
        })
    }

    public render(): JSX.Element | null {
        return (
            <div className="relative z-1" ref={this.setWrapperRef} onClick={this.onDropdownClick}>
                <div className="d-flex link dim pa2 ma2 f5 gray-9 dropdown__toggle dropdown__list-item">
                    <span id="products-header">{this.props.title}</span>
                    <span className="ml1 fill-gray-7 h15 w15">
                        <ChevronDownIcon />
                    </span>
                </div>
                <ul className={'list br2 dropdown__list ' + (this.state.active ? 'dropdown__list--active' : '')}>
                    {this.renderOptions()}
                </ul>
            </div>
        )
    }

    private onDropdownClick = () => {
        eventLogger.trackProductsDropdownClicked('header')
        this.toggleDropdown()
    }
}
