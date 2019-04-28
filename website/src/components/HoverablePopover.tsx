/*
 * Usage:
 * <HoverablePopover
 *    component={<div>Holy guacamole! I'm Sticky.</div>}
 *    placement="top"
 *    onMouseEnter={() => { }}
 *    delay={200}
 * >
 *   <div>Show the sticky tooltip</div>
 * </HoverablePopover>
 */

import PropTypes from 'prop-types'
import React from 'react'
import { Overlay, Popover } from 'react-bootstrap'

export default class HoverablePopover extends React.Component {
    constructor(props) {
        super(props)

        this.handleMouseEnter = this.handleMouseEnter.bind(this)
        this.handleMouseLeave = this.handleMouseLeave.bind(this)

        this.state = {
            showPopover: false,
        }
    }

    handleMouseEnter() {
        const { delay, onMouseEnter } = this.props

        this.setTimeoutConst = setTimeout(() => {
            this.setState({ showPopover: true }, () => {
                if (onMouseEnter) {
                    onMouseEnter()
                }
            })
        }, delay)
    }

    handleMouseLeave() {
        clearTimeout(this.setTimeoutConst)
        this.setState({ showPopover: false })
    }

    componentWillUnmount() {
        if (this.setTimeoutConst) {
            clearTimeout(this.setTimeoutConst)
        }
    }

    render() {
        const { component, children, placement } = this.props

        const child = React.Children.map(children, child =>
            React.cloneElement(child, {
                onMouseEnter: this.handleMouseEnter,
                onMouseLeave: this.handleMouseLeave,
                ref: node => {
                    this._child = node
                    const { ref } = child
                    if (typeof ref === 'function') {
                        ref(node)
                    }
                },
            })
        )[0]

        return (
            <React.Fragment>
                {child}
                <Overlay
                    show={this.state.showPopover}
                    placement={placement}
                    target={this._child}
                    shouldUpdatePosition={true}
                >
                    <Popover
                        onMouseEnter={() => {
                            this.setState({ showPopover: true })
                        }}
                        onMouseLeave={this.handleMouseLeave}
                        id="popover"
                    >
                        {component}
                    </Popover>
                </Overlay>
            </React.Fragment>
        )
    }
}

HoverablePopover.defaultProps = {
    delay: 0,
}

HoverablePopover.propTypes = {
    delay: PropTypes.number,
    onMouseEnter: PropTypes.func,
    children: PropTypes.element.isRequired,
    component: PropTypes.node.isRequired,
}
