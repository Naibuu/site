import { Projects } from '~/data/projects'

export type Slug = {
    params: {
        slug: string
    }
}

export type Project = {
    slug: string
    /** Title */
    title: string
    /** Description */
    excerpt: string
    /** Content */
    content: string
    /** Thumbnail */
    thumbnail: string
    /** Collaborator */
    collaborator: boolean
    /** Images */
    images?: string[]
}

export const getProject = (slug: string): Project | undefined => {
    return Projects.find((project: Project) => project.slug === slug)
}
