'use client'

import Button from '~/components/main/button'
import { type Slug, getProject } from '~/utils/page'

export default function Projects({ params }: Slug) {
    const data = getProject(params.slug)

    if (!data) {
        return <h1>Project not found!</h1>
    }

    return (
        <main>
            <h1 className="text-neutral-50 font-semibold">{data.title}</h1>
            <p className="text-sm text-justify">{data.excerpt}</p>
        </main>
    )
}
