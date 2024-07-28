'use client'

import { motion } from 'framer-motion'

interface Props {
    text: string
    className?: string
    duration: number
}

export default function TextBlur({ text, className, duration }: Props) {
    const texts = text.split(' ')

    const words = texts.map((word, index) => (
        <motion.span
            key={index}
            initial={{ opacity: 0.6, filter: 'blur(3px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{
                type: 'spring',
                duration,
                delay: 0.1 * index,
            }}
        >
            {word}{' '}
        </motion.span>
    ))

    return <div className={className}>{words}</div>
}
