import type { HTMLAttributes } from 'react'

type Props = HTMLAttributes<SVGElement> & {
    size: number
    icon: Icon
}

export type Icon = 'command' | 'clock' | 'search' | 'close'

const Paths: Record<
    Icon,
    {
        path: string[]
    }
> = {
    command: {
        path: [
            'M9 9V6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9H9ZM9 9V15M9 9H15M9 15V18C9 19.6569 7.65685 21 6 21C4.34315 21 3 19.6569 3 18C3 16.3431 4.34315 15 6 15H9ZM9 15H15M15 15H18C19.6569 15 21 16.3431 21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18V15ZM15 15V9M15 9V6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6C21 7.65685 19.6569 9 18 9H15Z',
        ],
    },
    clock: {
        path: [
            'M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z',
        ],
    },
    search: {
        path: [
            'M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z',
        ],
    },
    close: {
        path: ['M17 7L7 17M7 7L17 17'],
    },
}

export function Icon({ size, icon, ...rest }: Props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            {...rest}
        >
            {Paths[icon].path.map((d, index) => (
                <path key={index} d={d} />
            ))}
        </svg>
    )
}

export default Icon
