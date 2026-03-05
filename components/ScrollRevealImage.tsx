'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

/**
 * ScrollRevealImage — image reveals via clip-path as the user scrolls.
 * Uses GSAP ScrollTrigger with `scrub` so the reveal is tied 1:1 to scroll position.
 * Falls back to a simple fade if reduced-motion is preferred.
 */
export default function ScrollRevealImage({
    src,
    alt,
    width = 800,
    height = 600,
}: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
}) {
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = wrapperRef.current;
        if (!el) return;

        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced) {
            el.style.clipPath = 'inset(0 0 0 0)';
            return;
        }

        let ctx: { revert: () => void } | null = null;

        const init = async () => {
            const gsapMod = await import('gsap');
            const stMod = await import('gsap/ScrollTrigger') as unknown as { ScrollTrigger: unknown };
            gsapMod.gsap.registerPlugin(stMod.ScrollTrigger as never);

            ctx = gsapMod.gsap.context(() => {
                gsapMod.gsap.fromTo(
                    el,
                    { clipPath: 'inset(0 0 100% 0)' },
                    {
                        clipPath: 'inset(0 0 0% 0)',
                        ease: 'none',
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 85%',
                            end: 'top 35%',
                            scrub: 0.6,
                        },
                    }
                );
            });
        };

        init();

        return () => {
            ctx?.revert();
        };
    }, []);

    return (
        <div
            ref={wrapperRef}
            style={{
                clipPath: 'inset(0 0 100% 0)',
                willChange: 'clip-path',
                overflow: 'hidden',
                borderRadius: '4px',
            }}
        >
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                loading="lazy"
                style={{ width: '100%', height: 'auto', display: 'block' }}
                unoptimized
            />
        </div>
    );
}
