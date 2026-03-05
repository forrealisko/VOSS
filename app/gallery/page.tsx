'use client';

import { useState } from 'react';
import Image from 'next/image';
import ScrollAnimation from '@/components/ScrollAnimation';
import Lightbox from '@/components/Lightbox';
import { galleryImages, categoryLabels } from '@/lib/data';

export default function GalleryPage() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [tappedId, setTappedId] = useState<number | null>(null);

    const filtered = activeFilter === 'all'
        ? galleryImages
        : galleryImages.filter(img => img.category === activeFilter);

    const openLightbox = (index: number) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    const handleTap = (id: number) => {
        setTappedId(prev => prev === id ? null : id);
    };

    return (
        <div className="page-content">
            <ScrollAnimation>
                <section className="section">
                    <div style={{ textAlign: 'center', marginBottom: 'var(--v-sub)' }}>
                        <p className="meta-label animate-on-scroll">Portfolio</p>
                        <h1 className="animate-on-scroll" style={{ marginTop: '16px' }}>Gallery</h1>
                    </div>

                    {/* Desktop Filter Bar */}
                    <div className="filter-bar" style={{ justifyContent: 'center' }}>
                        {Object.entries(categoryLabels).map(([key, label]) => (
                            <button
                                key={key}
                                className={`filter-btn ${activeFilter === key ? 'active' : ''}`}
                                onClick={() => setActiveFilter(key)}
                            >
                                {label}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Dropdown */}
                    <select
                        className="filter-dropdown"
                        value={activeFilter}
                        onChange={(e) => setActiveFilter(e.target.value)}
                        aria-label="Filter gallery by category"
                    >
                        {Object.entries(categoryLabels).map(([key, label]) => (
                            <option key={key} value={key}>{label}</option>
                        ))}
                    </select>

                    {/* Masonry Grid */}
                    <div className="masonry-grid">
                        {filtered.map((img, idx) => (
                            <div
                                key={img.id}
                                className={`masonry-item animate-on-scroll ${tappedId === img.id ? 'tapped' : ''}`}
                                onClick={() => openLightbox(idx)}
                                onTouchStart={() => handleTap(img.id)}
                                role="button"
                                tabIndex={0}
                                aria-label={`View ${img.title}`}
                                onKeyDown={(e) => { if (e.key === 'Enter') openLightbox(idx); }}
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    width={800}
                                    height={1000}
                                    loading="lazy"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    unoptimized
                                />
                                <div className="masonry-item-overlay">
                                    <h4>{img.title}</h4>
                                    <span className="meta-label">{img.category === 'private' ? 'Private Commissions' : img.category}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </ScrollAnimation>

            {lightboxOpen && (
                <Lightbox
                    images={filtered}
                    currentIndex={lightboxIndex}
                    onClose={() => setLightboxOpen(false)}
                />
            )}
        </div>
    );
}
