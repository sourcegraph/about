import { ElementType, FunctionComponent } from 'react'

import classNames from 'classnames'

interface Badge {
    text: string
    size: 'small' | 'large'
    color:
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
    icon?: ElementType
    onClick?: () => void
    checked?: boolean
    circle?: boolean
}

/**
 * This is our Badge component from the DLS.
 *
 * @param props - component props
 * @param props.text - badge text
 * @param props.size - the size of the badge
 * @param props.color - the color of the badge
 * @param props.icon - the icon to use beside the text
 * @param props.onClick - an onClick function
 * @param props.checked - the controlled checked state
 * @param props.circle - whether it's a basic or circle radius badge
 */
export const Badge: FunctionComponent<Badge> = ({ text, size, color, icon, onClick, checked, circle }) => {
    const Icon: ElementType = icon || 'div'

    const colors = {
        'light-gray': {
            base: '',
            unchecked: 'tw-bg-gray-200 tw-text-gray-500',
            checked: 'tw-bg-gray-300',
            hover: 'hover:tw-bg-gray-300',
        },
        white: {
            base: '',
            unchecked: 'tw-bg-white',
            checked: 'tw-bg-gray-100',
            hover: 'hover:tw-bg-gray-100',
        },
        'white-outlined': {
            base: 'tw-border tw-border-solid tw-border-gray-500',
            unchecked: 'tw-bg-white tw-text-gray-500',
            checked: 'tw-bg-gray-500 tw-text-white',
            hover: 'hover:tw-bg-gray-500 hover:tw-text-white',
        },
        'dark-gray': {
            base: 'tw-text-white',
            unchecked: 'tw-bg-gray-500',
            checked: 'tw-bg-gray-700',
            hover: 'hover:tw-bg-gray-700',
        },
        blue: {
            base: 'tw-bg-blue-100 tw-text-blue-400',
            unchecked: '',
            checked: '',
            hover: '',
        },
        blurple: {
            base: 'tw-bg-blurple-100 tw-text-blurple-500',
            unchecked: '',
            checked: '',
            hover: '',
        },
        violet: {
            base: 'tw-bg-violet-100 tw-text-violet-600',
            unchecked: '',
            checked: '',
            hover: '',
        },
        cerise: {
            base: 'tw-bg-cerise-100 tw-text-cerise-600',
            unchecked: '',
            checked: '',
            hover: '',
        },
        vermillion: {
            base: 'tw-bg-vermillion-100 tw-text-vermillion-500',
            unchecked: '',
            checked: '',
            hover: '',
        },
        green: {
            base: 'tw-bg-green-100 tw-text-green-500',
            unchecked: '',
            checked: '',
            hover: '',
        },
        lemon: {
            base: 'tw-bg-lemon-100 tw-text-vermillion-500',
            unchecked: '',
            checked: '',
            hover: '',
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
            [colors[color].hover]: !!onClick,
            'tw-cursor-pointer tw-transition-all tw-ease-out': !!onClick,
            'tw-rounded-full': circle,
            'tw-rounded-md': !circle,
        }
    )

    return (
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
