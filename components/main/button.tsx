'use client'

import type { HTMLAttributes, PropsWithChildren } from 'react'
import classNames from 'classnames'

interface Props extends HTMLAttributes<HTMLButtonElement> {
    type: Button
    full?: boolean
}

export type Button = 'primary' | 'secondary'

export function Button({
    children,
    full,
    type,
    ...rest
}: PropsWithChildren<Props>) {
    return (
        <button
            className={classNames(
                full ? 'w-full' : 'w-fit',
                'py-2 px-4 flex justify-center items-center gap-1 text-sm font-bold rounded-full outline outline-2 outline-offset-2 transition-colors',
                {
                    'text-neutral-800 bg-white hover:bg-neutral-200 outline-white/10':
                        type === 'primary',
                    'text-neutral-200 bg-neutral-700 hover:bg-neutral-600 outline-white/5':
                        type === 'secondary',
                },
            )}
            {...rest}
        >
            {children}
        </button>
    )
}

export default Button
