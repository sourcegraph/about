import { FunctionComponent, useMemo, memo } from 'react'

import { Icon as LucideIcon, IconNode } from 'lucide-react'
import dynamicIconImports from 'lucide-react/dynamicIconImports'
import dynamic from 'next/dynamic'

interface BaseIconProps {
    color?: string
    size?: number
    className?: string
    fill?: string
}

interface DynamicIconProps extends BaseIconProps {
    Component: React.ComponentType<BaseIconProps>
}

interface StaticIconProps extends BaseIconProps {
    iconNode: IconNode
}

interface IconProps extends BaseIconProps {
    name?: keyof typeof dynamicIconImports
    iconNode?: IconNode
}

export const loadDynamicIcon = (name: keyof typeof dynamicIconImports): React.ComponentType<BaseIconProps> | null => {
    if (dynamicIconImports[name]) {
        const DynamicIcon = dynamic(dynamicIconImports[name], {
            ssr: false,
        })
        const DynamicIconWithDisplayName: React.NamedExoticComponent<BaseIconProps> = memo((props: BaseIconProps) => (
            <DynamicIcon {...props} />
        ))
        DynamicIconWithDisplayName.displayName = 'DynamicIcon'
        return DynamicIconWithDisplayName
    }
    return null
}

export const DynamicIcon: FunctionComponent<DynamicIconProps> = ({ Component, color, size, className, fill }) => {
    if (!Component) {
        return null
    }
    return <Component color={color} size={size} className={className} fill={fill} />
}

export const StaticIcon: FunctionComponent<StaticIconProps> = ({ iconNode, color, size, className, fill }) => (
    <LucideIcon color={color} size={size} iconNode={iconNode} className={className} fill={fill} />
)

export const Icon: FunctionComponent<IconProps> = ({ name, color, size, className, iconNode, fill = 'none' }) => {
    const DynamicLucideIcon = useMemo(() => {
        if (name && !iconNode) {
            return loadDynamicIcon(name)
        }
        return null
    }, [name, iconNode])

    if (name && !iconNode) {
        if (DynamicLucideIcon) {
            return (
                <DynamicIcon
                    Component={DynamicLucideIcon}
                    color={color}
                    size={size}
                    className={className}
                    fill={fill}
                />
            )
        }
        console.error(`Icon component could not find an icon with name: ${String(name)}`)
        return null
    }

    if (iconNode && !name) {
        return <StaticIcon iconNode={iconNode} color={color} size={size} className={className} fill={fill} />
    }

    console.error('Icon component requires either a "name" or "iconNode" prop, but not both.')
    return null
}
