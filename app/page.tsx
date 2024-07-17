'use client'

import Link from 'next/link'
import Lanyard from '~/components/lanyard'
import Section from '~/components/ui/section'

export default function Home() {
    return (
        <main className="flex flex-col gap-8">
            <Lanyard />

            {/** Introduction */}
            <Section>
                <h2 className="text-lg text-neutral-50 font-semibold">
                    About Me
                </h2>

                <p>
                    My name is Alex. I'm a self-taught programmer and freelance
                    worker from Greece, specializing in frontend development and
                    design. Programming is a huge passion of mine, and I have
                    been hooked for multiple years now.
                </p>

                <p>
                    The first lines of code I ever wrote were for a simple
                    Discord bot I made using Python. This experience led me to
                    create other silly projects, like Minecraft mods and
                    clients, which really helped me understand how code works.
                </p>

                <p>
                    In 2021, I began making websites and haven't stopped since.
                    I've created multiple websites and notable experiences for
                    everyone. I am experienced with many important web
                    frameworks, such as Vue, React, Svelte, and more.
                </p>
            </Section>

            {/** Skills */}
            <Section>
                <h2 className="text-lg text-neutral-50 font-semibold">
                    Skills
                </h2>

                <p>
                    As mentioned above, I am experienced with many important web
                    frameworks, such as Vue, React, Svelte, and more. Including
                    meta-frameworks such as Next.js, Nuxt, and Astro.
                </p>

                <p>
                    For programming languages, I am experienced with JavaScript,
                    TypeScript, (a bit of) Rust, and Python. I use tools such as
                    Node.js, MongoDB, Supabase, Git, and more.
                </p>
            </Section>

            {/** Contact */}
            <Section>
                <h2 className="text-lg text-neutral-50 font-semibold">
                    Contact
                </h2>

                <p>
                    Interested in working with me or just want to send a
                    message? Contact me at{' '}
                    <Link href="mailto:me@naibuu.dev" className="underline">
                        me@naibuu.dev
                    </Link>
                    . It might take a bit of time for me to respond, so please
                    be patient and do not troll. Thank you.
                </p>
            </Section>
        </main>
    )
}
