'use client'

import type { PropsWithChildren } from 'react'

export default function Section({ children }: PropsWithChildren) {
    return (
        <div className="flex flex-col gap-3 text-justify leading-8 text-sm text-neutral-300 font-medium max-xs:text-left">
            {children}
        </div>
    )
}
