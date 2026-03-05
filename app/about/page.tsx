import type { Metadata } from 'next';
import Image from 'next/image';
import ScrollAnimation from '@/components/ScrollAnimation';

export const metadata: Metadata = {
    title: 'About – Elena Voss Studio',
    description: 'Learn about Elena Voss, an award-winning fine-art and fashion photographer based in Tuscany, Italy.',
};

const testimonials = [
    { quote: "Elena's vision transformed our family portrait into a heirloom masterpiece.", author: 'The Rossi Family, Milan' },
    { quote: 'Her editorial shoot elevated our brand\'s image immeasurably.', author: 'Luxe Hotel Group, Paris' },
    { quote: 'Pure artistry; every frame is perfection.', author: 'Fashion Brand X, New York' },
];

export default function AboutPage() {
    return (
        <div className="page-content">
            {/* Hero Image */}
            <div className="about-hero">
                <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1600&q=80&fm=webp"
                    alt="Elena Voss, fine-art photographer in Tuscany"
                    fill
                    priority
                    sizes="100vw"
                    style={{ objectFit: 'cover' }}
                    unoptimized
                />
            </div>

            {/* Bio */}
            <ScrollAnimation>
                <div className="about-content">
                    <p className="meta-label animate-on-scroll">About</p>
                    <h1 className="animate-on-scroll" style={{ marginTop: '16px', marginBottom: 'var(--v-para)' }}>Elena Voss</h1>
                    <p className="animate-on-scroll">
                        Elena Voss is an award-winning photographer based in the heart of Tuscany, Italy. With features in Vogue Italia and collaborations with luxury brands, Elena specializes in fine-art portraits, editorial shoots, and private commissions for discerning clients across Europe and the US. Her work blends cinematic storytelling with timeless sophistication, creating images that whisper luxury.
                    </p>

                    {/* Press */}
                    <div className="animate-on-scroll" style={{ marginTop: 'var(--v-sub)' }}>
                        <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', marginBottom: '24px' }}>Press</h2>
                        <p style={{ color: 'var(--muted)', marginBottom: '24px' }}>Featured in Vogue Italia, Harper&apos;s Bazaar, and Elle Decor.</p>
                        <ul className="press-list">
                            <li>Vogue Italia — &quot;The New Masters of Light&quot;</li>
                            <li>Harper&apos;s Bazaar — &quot;Photographers Redefining Luxury&quot;</li>
                            <li>Elle Decor — &quot;Tuscany Through the Lens&quot;</li>
                        </ul>
                    </div>
                </div>
            </ScrollAnimation>

            {/* Testimonials */}
            <ScrollAnimation>
                <section className="section">
                    <div style={{ textAlign: 'center', marginBottom: 'var(--v-sub)' }}>
                        <p className="meta-label animate-on-scroll">Testimonials</p>
                        <h2 className="animate-on-scroll" style={{ marginTop: '16px' }}>What Clients Say</h2>
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

            {/* Philosophy */}
            <ScrollAnimation>
                <section className="section">
                    <div className="section-narrow" style={{ textAlign: 'center' }}>
                        <p className="meta-label animate-on-scroll">Philosophy</p>
                        <h2 className="animate-on-scroll" style={{ marginTop: '16px', marginBottom: 'var(--v-para)', fontWeight: 300, fontStyle: 'italic' }}>
                            &ldquo;My approach: Timeless luxury through cinematic storytelling.&rdquo;
                        </h2>
                        <p className="animate-on-scroll" style={{ color: 'var(--muted)' }}>
                            Every session begins with understanding the soul of the story. Whether documenting a wedding, crafting an editorial, or creating a private portrait, I believe that the most powerful images emerge from the intersection of light, emotion, and place. My work is not about capturing moments—it is about elevating them into art.
                        </p>
                    </div>
                </section>
            </ScrollAnimation>
        </div>
    );
}
