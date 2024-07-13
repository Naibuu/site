'use client'

import { RefObject, useEffect } from 'react'

export const useOutsideClick = (
    ref: RefObject<HTMLElement>,
    onOutsideClick: () => void,
) => {
    useEffect(() => {
        function clickListener(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                onOutsideClick()
            }
        }

        document.addEventListener('mousedown', clickListener)

        return () => {
            document.removeEventListener('mousedown', clickListener)
        }
    }, [ref])
}
