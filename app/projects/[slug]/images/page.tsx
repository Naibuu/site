'use client'

import { type Slug, getProject } from '~/utils/page'

export default function ProjectImages({ params }: Slug) {
    const data = getProject(params.slug)

    if (!data) {
        return <h1>Project not found!</h1>
    }

    return (
        <div className="flex flex-col gap-3">
            {data.images &&
                data.images.map((item, index) => (
                    <img key={index} src={item} className="rounded" />
                ))}
        </div>
    )
}
