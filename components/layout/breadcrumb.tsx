'use client'

import { Fragment } from 'react'
import { toUppercaseFirstLetter } from '~/utils/string'

import { usePathname } from 'next/navigation'
import Icon from '../main/icon'
import Link from 'next/link'

export default function Breadcrumb() {
    const pathname = usePathname()
    const paths = pathname.split('/').filter((path: string) => path)

    const crumbs = paths.map((path, index) => {
        const href = `/${paths.slice(0, index + 1).join('/')}`

        return (
            <Fragment key={index}>
                <Link
                    href={href}
                    className="px-2 py-1 rounded hover:bg-white/10"
                >
                    {toUppercaseFirstLetter(path)}
                </Link>

                {index !== paths.length - 1 && (
                    <Icon icon="chevron" size={12} />
                )}
            </Fragment>
        )
    })

    return (
        <div className="flex items-center gap-1 font-medium text-sm">
            <Link href="/" className="px-2 py-1 rounded hover:bg-white/10">
                <Icon icon="home" size={16} />
            </Link>
            <Icon icon="chevron" size={12} /> {crumbs.length > 0 && crumbs}
        </div>
    )
}
