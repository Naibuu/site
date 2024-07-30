import { Plus_Jakarta_Sans } from 'next/font/google'
import type { PropsWithChildren } from 'react'

import './globals.css'
export * from './metadata'

import SpeedInsights from '~/components/speed-insights'
import Layout from '~/components/layout/layout'

const font = Plus_Jakarta_Sans({
    subsets: ['latin'],
})

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang="en">
            <body className={font.className}>
                <SpeedInsights />
                <Layout>{children}</Layout>
            </body>
        </html>
    )
}
