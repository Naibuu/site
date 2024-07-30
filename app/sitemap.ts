import type { MetadataRoute } from 'next'
import { Projects } from '~/data/projects'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const urls = [
        {
            url: 'https://naibuu.dev',
            lastModified: new Date(),
        },
        {
            url: 'https://naibuu.dev/projects',
            lastModified: new Date(),
        },
        {
            url: 'https://naibuu.dev/support',
            lastModified: new Date(),
        },
    ]

    Projects.forEach((item) => {
        urls.push({
            url: `https://naibuu.dev/projects/${item.slug}`,
            lastModified: new Date(),
        })
    })

    return urls
}
