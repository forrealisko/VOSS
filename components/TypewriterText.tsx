'use client';

import { useEffect, useRef, useState, CSSProperties, ReactNode } from 'react';

/**
 * TypewriterText
 *
 * On scroll into view, types out children text character by character.
 * Falls back to instant display if reduced-motion is preferred.
 */
export default function TypewriterText({
    children,
    speed = 28,
    style,
}: {
    children: ReactNode;
    speed?: number;
    style?: CSSProperties;
}) {
    const ref = useRef<HTMLParagraphElement>(null);
    const [visible, setVisible] = useState(false);
    const [displayedCount, setDisplayedCount] = useState(0);
    const fullText = typeof children === 'string' ? children : String(children ?? '');

    // Observe intersection
    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced) {
            setVisible(true);
            setDisplayedCount(fullText.length);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [fullText.length]);

    // Type out characters
    useEffect(() => {
        if (!visible || displayedCount >= fullText.length) return;

        const timer = setTimeout(() => {
            setDisplayedCount(prev => prev + 1);
        }, speed);

        return () => clearTimeout(timer);
    }, [visible, displayedCount, fullText.length, speed]);

    return (
        <p ref={ref} style={{ ...style, minHeight: '1.6em' }}>
            {visible ? fullText.slice(0, displayedCount) : '\u00A0'}
            {visible && displayedCount < fullText.length && (
                <span
                    style={{
                        display: 'inline-block',
                        width: '2px',
                        height: '1em',
                        background: 'var(--accent)',
                        marginLeft: '2px',
                        verticalAlign: 'text-bottom',
                        animation: 'blink 0.8s step-end infinite',
                    }}
                />
            )}
        </p>
    );
}
