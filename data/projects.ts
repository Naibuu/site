import { Project } from '~/utils/page'

// TODO: add more projects
export const Projects: Project[] = [
    {
        slug: 'hybris',
        title: 'Hybris',
        excerpt:
            'Hybris is an open-source Minecraft modpack that integrates methods for universal modding within the API, providing an extensible and flexible experience.',
        content:
            "Hybris is an open-source Minecraft modpack that integrates methods for universal modding within the API, providing an extensible and flexible experience. It also introduces a never-before-seen social system embedded into the game, featuring a Discord invite-to-game feature, parties, cosmetics, and more!\n\nMy role was to help design the logo and all the interfaces seen in the client and launcher, as well as develop the launcher. As shown below, we went with a minimalistic look similar to OneConfig and Lunar Client. For the logo, we drew inspiration from Delta Client and Discord's partner badge.",
        thumbnail:
            'https://raw.githubusercontent.com/Naibuu/ignore-this/master/site/projects/hybris/thumbnail.png',
        collaborator: true,
        images: [
            'https://raw.githubusercontent.com/Naibuu/ignore-this/master/site/projects/hybris/ss1.png',
            'https://raw.githubusercontent.com/Naibuu/ignore-this/master/site/projects/hybris/ss2.png',
        ],
    },
]
