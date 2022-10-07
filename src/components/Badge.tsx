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
            unchecked: 'tw-bg-gray-200 tw-text-gray-500',
            checked: 'tw-bg-gray-300 tw-text-gray-600',
            hover: 'hover:tw-bg-gray-300 hover:tw-text-gray-600',
        },
        white: {
            base: '',
            unchecked: 'tw-bg-white',
            checked: 'tw-bg-gray-500 tw-text-white',
            hover: 'hover:tw-bg-gray-200 hover:tw-text-gray-500',
        },
        'white-outlined': {
            base: 'tw-border tw-border-solid tw-border-gray-500',
            unchecked: 'tw-bg-white tw-text-gray-500',
            checked: 'tw-bg-gray-500 tw-text-white',
            hover: 'hover:tw-bg-gray-500 hover:tw-text-white',
        },
        'dark-gray': {
            base: '',
            unchecked: 'tw-bg-gray-500 tw-text-white',
            checked: 'tw-bg-gray-700 tw-text-white',
            hover: 'hover:tw-bg-gray-700 hover:tw-text-white',
        },
        blue: {
            base: 'tw-bg-blue-100 tw-text-blue-400',
            unchecked: '',
            checked: '',
            hover: 'hover:tw-bg-blue-400 hover:tw-text-blue-100',
        },
        blurple: {
            base: 'tw-bg-blurple-100 tw-text-blurple-500',
            unchecked: '',
            checked: '',
            hover: 'hover:tw-bg-blurple-500 hover:tw-text-blurple-100',
        },
        violet: {
            base: 'tw-bg-violet-100 tw-text-violet-600',
            unchecked: '',
            checked: '',
            hover: 'hover:tw-bg-violet-600 hover:tw-text-violet-100',
        },
        cerise: {
            base: 'tw-bg-cerise-100 tw-text-cerise-600',
            unchecked: '',
            checked: '',
            hover: 'hover:tw-bg-cerise-600 hover:tw-text-cerise-100',
        },
        vermillion: {
            base: 'tw-bg-vermillion-100 tw-text-vermillion-500',
            unchecked: '',
            checked: '',
            hover: 'hover:tw-bg-vermillion-500 hover:tw-text-vermillion-100',
        },
        green: {
            base: 'tw-bg-green-100 tw-text-green-500',
            unchecked: '',
            checked: '',
            hover: 'hover:tw-bg-green-500 hover:tw-text-green-100',
        },
        lemon: {
            base: 'tw-bg-lemon-100 tw-text-vermillion-500',
            unchecked: '',
            checked: '',
            hover: 'hover:tw-bg-lemon-500 hover:tw-text-lemon-100',
        },
    }

    const sizes = {
        small: 'tw-text-xs tw-px-2 tw-py-1',
        large: 'tw-text-sm tw-px-4 tw-py-[6px]',
    }

    const styles = classNames(
        'tw-inline tw-font-mono tw-align-middle tw-font-medium',
        sizes[size],
        colors[color].base,
        {
            [colors[color].unchecked]: !checked || !onClick,
            [colors[color].checked]: checked,
            [colors[color].hover]: !!onClick || !!link,
            'tw-cursor-pointer tw-transition-all tw-ease-out': !!onClick,
            'tw-rounded-full': circle,
            'tw-rounded-md': !circle,
        },
        breakWords ? 'tw-break-words' : 'tw-whitespace-nowrap'
    )

    return link ? (
        <a href={link} className={classNames('tw-no-underline', styles)} tabIndex={0}>
            {text}
            {icon && <Icon className="tw-inline tw-ml-1" size={size === 'small' ? 12 : 14} />}
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
            {icon && <Icon className="tw-inline tw-ml-1" size={size === 'small' ? 12 : 14} />}
        </div>
    )
}
