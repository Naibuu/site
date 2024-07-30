'use client'

import { type Slug, getProject } from '~/utils/page'
import Section from '~/components/main/section'
import Icon from '~/components/main/icon'

export default function Project({ params }: Slug) {
    const data = getProject(params.slug)

    if (!data) {
        return <h1>Project not found!</h1>
    }

    const content = data.content
        .split('\n')
        .map((text, index) => <p key={index}>{text}</p>)

    return (
        <div className="flex justify-between items-start gap-6 max-sm:flex-col-reverse">
            <Section>
                <h2 className="text-lg text-neutral-50 font-semibold">
                    {data.title}
                </h2>

                {content}
            </Section>

            <div className="flex flex-col items-center gap-2">
                <div className="w-[220px] max-sm:w-full">
                    <img
                        src={data.thumbnail}
                        className="rounded-lg"
                        draggable={false}
                    />
                </div>

                {data.collaborator && (
                    <span className="flex items-center gap-1 text-[12px] font-medium text-green-500">
                        <Icon
                            icon="capture"
                            size={16}
                            className="stroke-green-500"
                        />
                        Worked as a remote collaborator
                    </span>
                )}
            </div>
        </div>
    )
}
