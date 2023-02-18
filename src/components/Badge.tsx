import { ElementType, FunctionComponent } from 'react'

import classNames from 'classnames'

interface Badge {
    text: string
    size: 'small' | 'large'
    color?:
        | 'light-gray'
        | 'white'
        | 'white-outlined'
        | 'dark-gray'
        | 'blue'
        | 'blurple'
        | 'violet'
        | 'cerise'
        | 'vermillion'
        | 'green'
        | 'lemon'
    link?: string
    icon?: ElementType
    onClick?: () => void
    checked?: boolean
    circle?: boolean
    breakWords?: boolean
}

/**
 * This is our Badge component from the DLS.
 *
 * @param props - component props
 * @param props.text - badge text
 * @param props.size - the size of the badge
 * @param props.color - the color of the badge
 * @param props.link - a link for an anchor tag
 * @param props.icon - the icon to use beside the text
 * @param props.onClick - an onClick function
 * @param props.checked - the controlled checked state
 * @param props.circle - whether it's a basic or circle radius badge
 * @param props.breakWords - whether to break words or not for longer text
 */
export const Badge: FunctionComponent<Badge> = ({
    text,
    size,
    color = 'light-gray',
    link,
    icon,
    onClick,
    checked,
    circle,
    breakWords,
}) => {
    const Icon: ElementType = icon || 'div'

    const colors = {
        'light-gray': {
            base: '',
            unchecked: 'bg-gray-200 text-gray-500',
            checked: 'bg-gray-300 text-gray-600',
            hover: 'hover:bg-gray-300 hover:text-gray-600',
        },
        white: {
            base: '',
            unchecked: 'bg-white',
            checked: 'bg-gray-500 text-white',
            hover: 'hover:bg-gray-200 hover:text-gray-500',
        },
        'white-outlined': {
            base: 'border border-solid border-gray-500',
            unchecked: 'bg-white text-gray-500',
            checked: 'bg-gray-500 text-white',
            hover: 'hover:bg-gray-500 hover:text-white',
        },
        'dark-gray': {
            base: '',
            unchecked: 'bg-gray-500 text-white',
            checked: 'bg-gray-700 text-white',
            hover: 'hover:bg-gray-700 hover:text-white',
        },
        blue: {
            base: 'bg-blue-100 text-blue-400',
            unchecked: '',
            checked: '',
            hover: 'hover:bg-blue-400 hover:text-blue-100',
        },
        blurple: {
            base: 'bg-blurple-100 text-blurple-500',
            unchecked: '',
            checked: '',
            hover: 'hover:bg-blurple-500 hover:text-blurple-100',
        },
        violet: {
            base: 'bg-violet-100 text-violet-600',
            unchecked: '',
            checked: '',
            hover: 'hover:bg-violet-600 hover:text-violet-100',
        },
        cerise: {
            base: 'bg-cerise-100 text-cerise-600',
            unchecked: '',
            checked: '',
            hover: 'hover:bg-cerise-600 hover:text-cerise-100',
        },
        vermillion: {
            base: 'bg-vermillion-100 text-vermillion-500',
            unchecked: '',
            checked: '',
            hover: 'hover:bg-vermillion-500 hover:text-vermillion-100',
        },
        green: {
            base: 'bg-green-100 text-green-500',
            unchecked: '',
            checked: '',
            hover: 'hover:bg-green-500 hover:text-green-100',
        },
        lemon: {
            base: 'bg-lemon-100 text-vermillion-500',
            unchecked: '',
            checked: '',
            hover: 'hover:bg-lemon-500 hover:text-lemon-100',
        },
    }

    const sizes = {
        small: 'text-xs px-2 py-1',
        large: 'text-sm px-4 py-[6px]',
    }

    const styles = classNames(
        'inline font-mono align-middle font-medium',
        sizes[size],
        colors[color].base,
        {
            [colors[color].unchecked]: !checked || !onClick,
            [colors[color].checked]: checked,
            [colors[color].hover]: !!onClick || !!link,
            'cursor-pointer transition-all ease-out': !!onClick,
            'rounded-full': circle,
            'rounded-md': !circle,
        },
        breakWords ? 'break-words' : 'whitespace-nowrap'
    )

    return link ? (
        <a href={link} className={classNames('no-underline', styles)} tabIndex={0}>
            {text}
            {icon && <Icon className="ml-1 inline" size={size === 'small' ? 12 : 14} />}
        </a>
    ) : (
        <div
            className={styles}
            onClick={onClick}
            onKeyDown={onClick}
            tabIndex={0}
            role={onClick ? 'button' : undefined}
        >
            {text}
            {icon && <Icon className="ml-1 inline" size={size === 'small' ? 12 : 14} />}
        </div>
    )
}
