'use client';

import { motion } from 'framer-motion';

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0 },
};

const slideLeft = {
    hidden: { opacity: 0, x: -36 },
    show: { opacity: 1, x: 0 },
};

const slideRight = {
    hidden: { opacity: 0, x: 36 },
    show: { opacity: 1, x: 0 },
};

const transition = (delay: number) => ({
    duration: 0.85,
    ease: 'easeOut' as const,
    delay,
});

interface HeroAnimatedProps {
    children?: React.ReactNode;
}

/** Wraps hero text items in staggered entrance animations */
export function HeroLabel({ children }: HeroAnimatedProps) {
    return (
        <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={transition(0.1)}
        >
            {children}
        </motion.div>
    );
}

export function HeroTitle({ children }: HeroAnimatedProps) {
    return (
        <motion.div
            variants={slideLeft}
            initial="hidden"
            animate="show"
            transition={transition(0.3)}
        >
            {children}
        </motion.div>
    );
}

export function HeroSubtitle({ children }: HeroAnimatedProps) {
    return (
        <motion.div
            variants={slideRight}
            initial="hidden"
            animate="show"
            transition={transition(0.55)}
        >
            {children}
        </motion.div>
    );
}

export function HeroCTA({ children }: HeroAnimatedProps) {
    return (
        <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={transition(0.8)}
        >
            {children}
        </motion.div>
    );
}
