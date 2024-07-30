'use client'

import { Fragment } from 'react'
import { usePathname } from 'next/navigation'

import classNames from 'classnames'
import { toUppercaseFirstLetter } from '~/utils/string'

import Link from 'next/link'
import Icon from '~/components/main/icon'

export default function Navbar() {
    const pathname = usePathname()
    const paths = pathname.split('/').filter((path: string) => path)

    const breadcrumbs = paths.map((path, index) => {
        const href = `/${paths.slice(0, index + 1).join('/')}`
        const active = index === paths.length - 1

        return (
            <Fragment key={index}>
                <Link
                    href={href}
                    className={classNames(
                        active && 'text-white',
                        'p-2 rounded hover:bg-white/10',
                    )}
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
            {paths.length === 0 ? (
                <Fragment>
                    <Link
                        href="/"
                        className="p-2 flex items-center gap-2 rounded hover:bg-white/10"
                    >
                        <Icon icon="home" size={16} />
                        Home
                    </Link>
                </Fragment>
            ) : (
                <Fragment>
                    <Link
                        href="/"
                        className="p-2 flex items-center gap-2 rounded hover:bg-white/10"
                    >
                        <Icon icon="home" size={16} />
                        Home
                    </Link>
                    <Icon icon="chevron" size={12} /> {breadcrumbs}
                </Fragment>
            )}
        </div>
    )
}
