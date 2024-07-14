'use client'

import Clock from '../ui/clock'
import Icon from '../ui/icon'

export default function Navbar() {
    return (
        <div className="pb-6 flex gap-2 justify-end items-center">
            <Clock />
            <button
                onClick={() => null}
                className="px-4 h-8 border border-neutral-800 rounded-full transition hover:bg-neutral-800"
            >
                <Icon icon="command" size={16} className="stroke-neutral-400" />
            </button>
        </div>
    )
}
