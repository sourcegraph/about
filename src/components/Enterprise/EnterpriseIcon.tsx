import { FunctionComponent } from 'react'

import classNames from 'classnames'

export const EnterpriseIcon: FunctionComponent<{ src: string; alt: string; className?: string }> = ({
    src,
    alt,
    className,
}) => (
    <div className={classNames(className)}>
        <img className="max-h-full max-w-full" alt={alt} src={src} />
    </div>
)
