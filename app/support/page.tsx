'use client'

import Link from 'next/link'
import Section from '~/components/main/section'
import Button from '~/components/main/button'
import Icon from '~/components/main/icon'

export default function Support() {
    return (
        <Section>
            <h2 className="text-lg text-neutral-50 font-semibold">
                ❣️ Support
            </h2>

            <p>
                Enjoying my work? If you find it unique and valuable, consider
                supporting me on my Ko-fi page. Your generosity is greatly
                appreciated and helps me continue create new things.
            </p>

            <Link
                href="https://ko-fi.com/naibuu"
                target="_blank"
                className="mt-2"
            >
                <Button type="primary">
                    <Icon
                        icon="support"
                        size={18}
                        className="stroke-neutral-800"
                    />
                    Support on Ko-fi
                </Button>
            </Link>
        </Section>
    )
}
