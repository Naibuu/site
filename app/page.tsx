'use client'

import Lanyard from '~/components/ui/lanyard'

export default function Home() {
    return (
        <div className="flex flex-col gap-8">
            <Lanyard />

            <div className="flex flex-col gap-3 text-justify leading-8 text-sm text-neutral-300 font-medium">
                <p>
                    My name is Alex. I'm a self-taught programmer and freelance
                    worker from Greece, specializing in frontend development and
                    design. Programming is a huge passion of mine, and I have
                    been hooked for multiple years now.
                </p>
                <p>
                    The first lines of code I ever wrote were for a simple
                    Discord bot I made using Python. This experience led me to
                    create other fun projects, like Minecraft mods and clients,
                    which really helped me understand how code works.
                </p>
                <p>
                    In 2021, I began making websites and haven't stopped since.
                    I've created multiple websites and notable experiences for
                    everyone. I am experienced with many important web
                    frameworks, such as Vue, React, Svelte, and more.
                </p>
            </div>
        </div>
    )
}
