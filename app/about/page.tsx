import Section from '~/components/main/section'
import { Experience } from '~/data/experience'

export default function About() {
    return (
        <Section>
            <h2 className="text-lg text-neutral-50 font-semibold">
                📚 About Me
            </h2>

            <p>
                I'm a self-taught programmer and freelance worker from Greece,
                specializing in frontend development and design. I love tech and
                open-source software (OSS) so much that most of my work is OSS.
                I have experience in multiple languages, frameworks and tools,
                such as:
            </p>

            <ul className="flex flex-wrap gap-2">
                {Experience.map((value) => (
                    <li
                        key={value}
                        className="px-2 font-semibold bg-white/10 rounded-full"
                    >
                        {value}
                    </li>
                ))}
            </ul>

            <p>
                I've worked with many people before. The most notable
                organizations I've worked with include CheatBreaker, Hybris,
                Equicord, and more!
            </p>
        </Section>
    )
}
