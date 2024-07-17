'use client'

export default function LanyardSkeleton() {
    return (
        <div className="flex items-center justify-between animate-pulse">
            <div className="flex items-center gap-3">
                <div className="size-16 bg-neutral-700 rounded-lg select-none" />

                <div className="flex flex-col gap-2">
                    <div className="h-3 w-20 bg-neutral-700 rounded-lg select-none" />

                    <div className="h-3 w-24 bg-neutral-700 rounded-lg select-none" />
                </div>
            </div>
        </div>
    )
}
