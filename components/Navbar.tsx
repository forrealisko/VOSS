'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'Me' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setDrawerOpen(false);
    }, [pathname]);

    useEffect(() => {
        if (drawerOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [drawerOpen]);

    return (
        <>
            <nav className="navbar" id="navbar">
                <Link href="/" className="navbar-logo">VOSS.</Link>

                <ul className="navbar-links">
                    {links.map(l => (
                        <li key={l.href}>
                            <Link href={l.href} style={pathname === l.href ? { borderBottom: '1px solid var(--accent)' } : undefined}>
                                {l.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="navbar-right">
                    <Link href="/contact" className="btn navbar-inquire">
                        Inquire
                    </Link>

                    <button
                        className={`hamburger ${drawerOpen ? 'open' : ''}`}
                        onClick={() => setDrawerOpen(!drawerOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>

            {/* Mobile Drawer */}
            <div
                className={`mobile-drawer-overlay ${drawerOpen ? 'open' : ''}`}
                onClick={() => setDrawerOpen(false)}
            />
            <div className={`mobile-drawer ${drawerOpen ? 'open' : ''}`}>
                {links.map(l => (
                    <Link key={l.href} href={l.href} onClick={() => setDrawerOpen(false)}>
                        {l.label}
                    </Link>
                ))}
            </div>
        </>
    );
}
