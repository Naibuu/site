'use client'

import Link from 'next/link'
import { Icon } from './icon'

interface Props {
    icon: Icon
    text: string
    href: string
}

export default function LinkCard({ icon, text, href }: Props) {
    return (
        <Link
            href={href}
            className="w-full h-32"
            target={href.startsWith('https://') ? '_blank' : '_self'}
        >
            <div className="size-full p-4 flex items-end border border-neutral-800 bg-neutral-800/20 rounded-lg outline outline-2 outline-white/0 transition-all hover:outline-white">
                <div className="flex items-center gap-1 text-sm font-medium">
                    <Icon icon={icon} size={14} />
                    {text}
                </div>
            </div>
        </Link>
    )
}
