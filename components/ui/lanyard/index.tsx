'use client'

import { useLanyard } from 'react-use-lanyard'
import LanyardSkeleton from './skeleton'
import SpotifyTrack from './spotify'

export default function Lanyard() {
    const { isLoading, data } = useLanyard({
        userId: '1120045713867423835',
    })

    if (isLoading || !data) {
        return <LanyardSkeleton />
    }

    return (
        <div className="flex items-center justify-between max-xs:flex-col max-xs:items-start max-xs:gap-2">
            <div className="flex items-center gap-3">
                <img
                    src="https://avatars.githubusercontent.com/u/81579850?s=64"
                    className="size-16 rounded-lg shadow select-none"
                    draggable={false}
                    alt="Naibuu"
                />

                <div className="flex flex-col">
                    <h1 className="text-neutral-50 font-semibold">
                        Alex Naibuu
                    </h1>

                    <p className="text-sm">Frontend Engineer</p>
                </div>
            </div>

            {data.data.spotify && (
                <div className="p-2 border border-neutral-800 rounded-lg transition hover:bg-neutral-900 max-xs:p-0 max-xs:border-none">
                    <SpotifyTrack {...data.data.spotify} />
                </div>
            )}
        </div>
    )
}
