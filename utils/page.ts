import { Projects } from '~/data/projects'

export type Slug = {
    params: {
        slug: string
    }
}

export type Project = {
    slug: string
    title: string
    excerpt: string
}

export const getProject = (slug: string): Project | undefined => {
    return Projects.find((project: Project) => project.slug === slug)
}
