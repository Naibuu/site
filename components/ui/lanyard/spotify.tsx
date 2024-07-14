'use client'

import Link from 'next/link'
import type { Spotify } from 'react-use-lanyard'
import { trimString, replaceString } from '~/utils/string'

export default function SpotifyTrack({
    track_id,
    song,
    artist,
    album_art_url,
    album,
}: Spotify) {
    return (
        <Link
            href={'https://open.spotify.com/track/' + track_id}
            target="_blank"
            className="flex items-center gap-2 active:scale-[.97]"
        >
            <img
                src={album_art_url}
                className="size-10 rounded shadow select-none max-xs:size-8"
                draggable={false}
                alt={album}
            />

            <div className="flex flex-col">
                <h3 className="text-sm text-neutral-50 font-medium">
                    {trimString(song, 20)}
                </h3>

                <p className="text-[10px] text-neutral-300">
                    by {trimString(replaceString(artist, ';', ','), 24)}
                </p>
            </div>
        </Link>
    )
}
