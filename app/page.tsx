'use client'

import { Fragment } from 'react'
import Section from '~/components/main/section'
import LinkCard from '~/components/main/link-card'

export default function Home() {
    return (
        <Fragment>
            <Section>
                <h1 className="text-white text-lg font-medium">
                    👋 Hey there!
                </h1>

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

            <div className="flex flex-1 gap-3">
                {/** Projects */}
                <LinkCard icon="stars" text="Projects" href="/projects" />

                {/** Support */}
                <LinkCard icon="support" text="Support & Tip" href="/support" />
            </div>
        </Fragment>
    )
}
