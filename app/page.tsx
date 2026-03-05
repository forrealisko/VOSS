'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollAnimation from '@/components/ScrollAnimation';
import { galleryImages, categoryLabels } from '@/lib/data';
import { HeroLabel, HeroTitle, HeroSubtitle, HeroCTA } from '@/components/HeroAnimated';
import SVGDivider from '@/components/SVGDivider';
import TypewriterText from '@/components/TypewriterText';
import ScrollRevealImage from '@/components/ScrollRevealImage';

const heroImage = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80&fm=webp';

const teaserImages = galleryImages.slice(0, 12);

const featuredImages = [
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80&fm=webp', caption: 'The morning began with soft light filtering through the villa windows, casting a golden glow on the preparations.' },
  { src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80&fm=webp', caption: 'Olive groves framed the ceremony, their silver leaves catching the Tuscan breeze.' },
  { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80&fm=webp', caption: 'The garden reception unfolded under a canopy of stars and Edison bulbs.' },
  { src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80&fm=webp', caption: 'Their first dance—a moment of pure, unscripted emotion captured in golden hour light.' },
  { src: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=80&fm=webp', caption: 'The evening concluded with candlelight, laughter, and a celebration that will echo through generations.' },
];

const testimonials = [
  { quote: "Elena's vision transformed our family portrait into a heirloom masterpiece.", author: 'The Rossi Family, Milan' },
  { quote: 'Her editorial shoot elevated our brand\'s image immeasurably.', author: 'Luxe Hotel Group, Paris' },
  { quote: 'Pure artistry; every frame is perfection.', author: 'Fashion Brand X, New York' },
];

const instagramPosts = [
  'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=400&q=80&fm=webp',
  'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=400&q=80&fm=webp',
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=400&q=80&fm=webp',
  'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=80&fm=webp',
  'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80&fm=webp',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80&fm=webp',
];

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  // Parallax on hero
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const handleScroll = () => {
      if (heroRef.current) {
        const img = heroRef.current.querySelector('.hero-bg') as HTMLElement;
        if (img) {
          const scrollY = window.scrollY;
          img.style.transform = `translateY(${scrollY * 0.1}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filtered = activeFilter === 'all' ? teaserImages : teaserImages.filter(img => img.category === activeFilter);

  return (
    <>
      {/* Hero */}
      <section className="hero" ref={heroRef}>
        <Image
          src={heroImage}
          alt="Cinematic landscape of Tuscany at golden hour"
          fill
          className="hero-bg"
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          unoptimized
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <HeroLabel>
            <p className="meta-label" style={{ color: 'var(--accent)', marginBottom: '16px' }}>Fine-Art &amp; Fashion Photography</p>
          </HeroLabel>
          <HeroTitle>
            <h1>Elena Voss Studio</h1>
          </HeroTitle>
          <HeroSubtitle>
            <p>Fine-Art and Fashion Photography – Capturing Eternal Elegance in Tuscany and Beyond</p>
          </HeroSubtitle>
          <HeroCTA>
            <Link href="/gallery" className="btn">Explore Portfolio</Link>
          </HeroCTA>
        </div>
      </section>

      <SVGDivider color="var(--bg-alt)" />

      {/* Portfolio — NO ScrollAnimation wrapper (GSAP conflicts with React re-renders on filter) */}
      <div className="section-alt-wrapper">
        <section className="section" id="portfolio">
          <div style={{ textAlign: 'center', marginBottom: 'var(--v-sub)' }}>
            <h2>Portfolio</h2>
          </div>
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
          <div className="masonry-grid">
            {filtered.map((img) => (
              <div key={img.id} className="masonry-item">
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
          <div style={{ textAlign: 'center', marginTop: 'var(--v-sub)' }}>
            <Link href="/gallery" className="btn">View Full Gallery</Link>
          </div>
        </section>
      </div>

      <SVGDivider color="var(--bg)" flip />

      {/* Featured Projects */}
      <ScrollAnimation>
        <section className="featured-project section">
          <div style={{ textAlign: 'center', marginBottom: 'var(--v-sub)' }}>
            <p className="meta-label animate-on-scroll">Featured Projects</p>
            <h2 className="animate-on-scroll" style={{ marginTop: '16px' }}>A Tuscan Wedding</h2>
          </div>
          {featuredImages.map((item, i) => (
            <div key={i} className={`featured-row ${i % 2 !== 0 ? 'reverse' : ''} animate-on-scroll`}>
              <ScrollRevealImage
                src={item.src}
                alt={`Tuscan wedding scene ${i + 1}`}
              />
              <div className="featured-text">
                <TypewriterText style={{ fontStyle: 'italic', fontSize: 'clamp(16px, 3vw, 20px)' }}>
                  {item.caption}
                </TypewriterText>
              </div>
            </div>
          ))}
        </section>
      </ScrollAnimation>

      <SVGDivider color="var(--bg-alt)" />

      {/* About */}
      <div className="section-alt-wrapper">
        <ScrollAnimation>
          <section className="section">
            <div className="section-narrow" style={{ textAlign: 'center' }}>
              <p className="meta-label animate-on-scroll">About</p>
              <h2 className="animate-on-scroll" style={{ marginTop: '16px', marginBottom: 'var(--v-para)' }}>The Artist</h2>
              <p className="animate-on-scroll" style={{ fontSize: 'clamp(16px, 3vw, 20px)', color: 'var(--muted)' }}>
                Elena Voss is an award-winning photographer based in the heart of Tuscany, Italy. With features in Vogue Italia and collaborations with luxury brands, Elena specializes in fine-art portraits, editorial shoots, and private commissions for discerning clients across Europe and the US.
              </p>
              <Link href="/about" className="btn animate-on-scroll" style={{ marginTop: '24px' }}>Learn More</Link>
            </div>
          </section>
        </ScrollAnimation>
      </div>

      <SVGDivider color="var(--bg)" flip />

      {/* Testimonials */}
      <ScrollAnimation>
        <section className="section">
          <div style={{ textAlign: 'center', marginBottom: 'var(--v-sub)' }}>
            <p className="meta-label animate-on-scroll">Testimonials</p>
            <h2 className="animate-on-scroll" style={{ marginTop: '16px' }}>Client Stories</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card animate-on-scroll">
                <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                <cite>— {t.author}</cite>
              </div>
            ))}
          </div>
        </section>
      </ScrollAnimation>

      <SVGDivider color="var(--bg-alt)" />

      {/* CTA */}
      <div className="section-alt-wrapper">
        <section className="cta-section">
          <ScrollAnimation>
            <div className="section-narrow" style={{ textAlign: 'center' }}>
              <h2 className="animate-on-scroll">Ready to capture your story ?</h2>
              <Link href="/contact" className="btn animate-on-scroll" style={{ marginTop: '32px' }}>Inquire Now</Link>
            </div>
          </ScrollAnimation>
        </section>
      </div>

      <SVGDivider color="var(--bg)" flip />

      {/* Instagram */}
      <ScrollAnimation>
        <section className="section">
          <div style={{ textAlign: 'center', marginBottom: 'var(--v-sub)' }}>
            <p className="meta-label animate-on-scroll">FOLLOW MY JOURNEY</p>
            <h2 className="animate-on-scroll" style={{ marginTop: '16px' }}>@elenavossstudio</h2>
          </div>
          <div className="instagram-grid">
            {instagramPosts.map((src, i) => (
              <Link
                key={i}
                href="https://instagram.com/elenavossstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-item animate-on-scroll"
              >
                <Image
                  src={src}
                  alt={`Instagram post ${i + 1}`}
                  width={400}
                  height={400}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  unoptimized
                />
              </Link>
            ))}
          </div>
        </section>
      </ScrollAnimation>
    </>
  );
}
