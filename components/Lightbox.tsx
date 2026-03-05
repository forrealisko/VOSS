'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { GalleryImage } from '@/lib/data';

interface LightboxProps {
    images: GalleryImage[];
    currentIndex: number;
    onClose: () => void;
}

export default function Lightbox({ images, currentIndex, onClose }: LightboxProps) {
    const [activeIndex, setActiveIndex] = useState(currentIndex);
    const overlayRef = useRef<HTMLDivElement>(null);
    const touchStartX = useRef(0);
    const touchStartY = useRef(0);

    const currentImage = images[activeIndex];

    // Related shots: up to 5 around current
    const relatedIndices: number[] = [];
    for (let i = Math.max(0, activeIndex - 2); i <= Math.min(images.length - 1, activeIndex + 2); i++) {
        if (i !== activeIndex) relatedIndices.push(i);
    }

    const navigate = useCallback((dir: number) => {
        setActiveIndex(prev => {
            const next = prev + dir;
            if (next < 0) return images.length - 1;
            if (next >= images.length) return 0;
            return next;
        });
    }, [images.length]);

    // Keyboard navigation
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') navigate(-1);
            if (e.key === 'ArrowRight') navigate(1);
        };
        window.addEventListener('keydown', handleKey);
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', handleKey);
            document.body.style.overflow = '';
        };
    }, [onClose, navigate]);

    // GSAP entrance animation
    useEffect(() => {
        const initAnim = async () => {
            try {
                const { gsap } = await import('gsap');
                if (overlayRef.current) {
                    gsap.fromTo(overlayRef.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.4, ease: 'cubic-bezier(0.45,0,0.55,1)' });
                }
            } catch (e) { /* gsap not available */ }
        };
        initAnim();
    }, []);

    // Touch/swipe handling
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
        touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        const dx = e.changedTouches[0].clientX - touchStartX.current;
        const dy = e.changedTouches[0].clientY - touchStartY.current;
        if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
            navigate(dx < 0 ? 1 : -1);
        }
    };

    return (
        <>
            <div className="lightbox-overlay" onClick={onClose} />
            <div
                className="lightbox"
                ref={overlayRef}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <button className="lightbox-close" onClick={onClose} aria-label="Close lightbox">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                <Image
                    src={currentImage.src}
                    alt={currentImage.alt}
                    width={1200}
                    height={800}
                    className="lightbox-main-image"
                    priority
                    unoptimized
                />

                <div className="lightbox-caption">
                    <h3>{currentImage.title}</h3>
                    <p className="meta-label">{currentImage.category === 'private' ? 'Private Commissions' : currentImage.category}</p>
                </div>

                <div className="lightbox-thumbs">
                    {relatedIndices.map(i => (
                        <Image
                            key={images[i].id}
                            src={images[i].src}
                            alt={images[i].alt}
                            width={80}
                            height={80}
                            className={`lightbox-thumb ${i === activeIndex ? 'active' : ''}`}
                            onClick={() => setActiveIndex(i)}
                            unoptimized
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
