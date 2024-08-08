import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: 'https://naibuu.dev',
            lastModified: new Date(),
        },
        {
            url: 'https://naibuu.dev/about',
            lastModified: new Date(),
        },
        {
            url: 'https://naibuu.dev/support',
            lastModified: new Date(),
        },
    ]
}
