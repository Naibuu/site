import { Plus_Jakarta_Sans } from 'next/font/google'
import type { PropsWithChildren } from 'react'

import './globals.css'
export * from './metadata'

import SpeedInsights from '~/components/speed-insights'
import Navbar from '~/components/layout/navbar'

const font = Plus_Jakarta_Sans({
    subsets: ['latin'],
})

export default function Layout({ children }: PropsWithChildren) {
    return (
        <html lang="en">
            <body className={font.className}>
                <SpeedInsights />
                <Navbar />
                {children}
            </body>
        </html>
    )
}
