'use client'

import { useEffect, useState } from 'react'

export const useMousePosition = (onMove?: (event: MouseEvent) => void) => {
    const [position, setPosition] = useState<{
        x: number | null
        y: number | null
        target: Element | null
    }>({
        x: null,
        y: null,
        target: null,
    })

    useEffect(() => {
        const mouseListener = (event: MouseEvent) => {
            onMove?.(event)

            setPosition({
                x: event.clientX,
                y: event.clientY,
                target: event.target as Element,
            })
        }

        document.addEventListener('mousemove', mouseListener)

        return () => {
            document.removeEventListener('mousemove', mouseListener)
        }
    }, [onMove])

    return position
}
