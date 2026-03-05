'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface ScrollAnimationProps {
    children: ReactNode;
    className?: string;
    stagger?: number;
}

export default function ScrollAnimation({ children, className = '', stagger = 0.1 }: ScrollAnimationProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced) {
            // Show elements immediately
            if (ref.current) {
                const elements = ref.current.querySelectorAll('.animate-on-scroll');
                elements.forEach(el => {
                    (el as HTMLElement).style.opacity = '1';
                    (el as HTMLElement).style.transform = 'translateY(0)';
                });
            }
            return;
        }

        let gsapModule: typeof import('gsap') | null = null;
        let ScrollTriggerModule: { ScrollTrigger: unknown } | null = null;

        const initGSAP = async () => {
            gsapModule = await import('gsap');
            ScrollTriggerModule = await import('gsap/ScrollTrigger') as unknown as { ScrollTrigger: unknown };
            gsapModule.gsap.registerPlugin(ScrollTriggerModule.ScrollTrigger as never);

            if (!ref.current) return;

            const elements = ref.current.querySelectorAll('.animate-on-scroll');
            elements.forEach((el, i) => {
                gsapModule!.gsap.fromTo(
                    el,
                    { opacity: 0, y: 24 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.7,
                        ease: 'power3.out',
                        delay: i * stagger,
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 88%',
                            toggleActions: 'play none none none',
                        },
                    }
                );
            });
        };

        initGSAP();

        return () => {
            if (gsapModule) {
                import('gsap/ScrollTrigger').then((mod) => {
                    const ST = mod.ScrollTrigger as unknown as { getAll: () => Array<{ kill: () => void }> };
                    ST.getAll().forEach((t) => t.kill());
                });
            }
        };
    }, [stagger]);

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}
