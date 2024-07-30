'use client'

import type { PropsWithChildren } from 'react'
import Navbar from '~/components/layout/navbar'

export default function Layout({ children }: PropsWithChildren) {
    return (
        <main className="flex flex-col gap-6">
            <div className="pt-6 pb-1 flex justify-between items-center">
                <Navbar />
            </div>
            {children}
        </main>
    )
}
