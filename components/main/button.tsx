'use client'

import type { PropsWithChildren } from 'react'

interface Props {
    onClick: () => void
}

export default function Button({
    children,
    onClick,
}: PropsWithChildren<Props>) {
    return (
        <button
            onClick={onClick}
            className="w-fit py-2 px-4 flex items-center gap-1 text-sm text-neutral-800 font-bold bg-white rounded-full outline outline-2 outline-white/10 outline-offset-2"
        >
            {children}
        </button>
    )
}
