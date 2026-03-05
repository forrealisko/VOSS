'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function StickyMobileCTA() {
    const [visible, setVisible] = useState(true);
    const lastScroll = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const current = window.scrollY;
            if (current > lastScroll.current && current > 100) {
                setVisible(false);
            } else {
                setVisible(true);
            }
            lastScroll.current = current;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`sticky-mobile-cta ${!visible ? 'hidden' : ''}`}>
            <Link href="/contact">Inquire Now</Link>
        </div>
    );
}
