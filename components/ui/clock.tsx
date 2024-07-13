'use client'

import { useState, useEffect } from 'react'
import Icon from './icon'

export default function Clock() {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 60000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="px-4 h-8 flex gap-1 items-center text-sm text-neutral-300 font-medium border border-neutral-800 rounded-full">
            <Icon icon="clock" size={16} className="stroke-neutral-400" />
            {time.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
            })}
        </div>
    )
}
