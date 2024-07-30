'use client'

import { Fragment } from 'react'
import { Projects as Cards } from '~/data/projects'

import Section from '~/components/main/section'
import LinkCard from '~/components/main/link-card'

export default function Projects() {
    return (
        <Fragment>
            <Section>
                <h2 className="text-lg text-neutral-50 font-semibold">
                    📚 Projects
                </h2>

                <p>Here are some of my work listed in one place.</p>
            </Section>

            <div className="">
                {Cards.map((item, index) => (
                    <LinkCard
                        key={index}
                        icon="home"
                        text={item.title}
                        href={`/projects/${item.slug}`}
                    />
                ))}
            </div>
        </Fragment>
    )
}
