'use client'

import TextBlur from '~/components/animation/text-blur'
import TextSection from '~/components/text-section'
import LinkCard from '~/components/main/link-card'

// TODO: Make sure this is displayed as a default page.
export default function BetaHome() {
    return (
        <main className="flex flex-col gap-6">
            <div className="flex flex-col items-start gap-3">
                <TextBlur
                    className="text-lg font-medium"
                    text="Hey there!"
                    duration={1}
                />

                <TextSection>
                    <p>
                        My name is Alex. I'm a self-taught programmer and
                        freelance worker from Greece, specializing in frontend
                        development and design. Programming is a huge passion of
                        mine, and I have been hooked for multiple years now.
                    </p>

                    <p>
                        The first lines of code I ever wrote were for a simple
                        Discord bot I made using Python. This experience led me
                        to create other silly projects, like Minecraft mods and
                        clients, which really helped me understand how code
                        works.
                    </p>

                    <p>
                        In 2021, I began making websites and haven't stopped
                        since. I've created multiple websites and notable
                        experiences for everyone. I am experienced with many
                        important web frameworks, such as Vue, React, Svelte,
                        and more.
                    </p>
                </TextSection>
            </div>
            <div className="flex flex-1 gap-3">
                <LinkCard icon="stars" text="Projects" href="/projects" />
                <LinkCard icon="capture" text="Showcase" href="/showcase" />
                <LinkCard
                    icon="briefcase"
                    text="Commission"
                    href="/commission"
                />
            </div>
        </main>
    )
}
