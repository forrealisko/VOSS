import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ScrollAnimation from '@/components/ScrollAnimation';
import { blogPosts } from '@/lib/blog-data';

export const metadata: Metadata = {
    title: 'Journal – Elena Voss Studio',
    description: 'Behind-the-scenes stories, editorial insights, and the art of luxury photography.',
};

export default function BlogPage() {
    return (
        <div className="page-content">
            <ScrollAnimation>
                <section className="section">
                    <div style={{ textAlign: 'center', marginBottom: 'var(--v-sub)' }}>
                        <p className="meta-label animate-on-scroll">Journal</p>
                        <h1 className="animate-on-scroll" style={{ marginTop: '16px' }}>Stories &amp; Insights</h1>
                    </div>

                    <div className="blog-grid">
                        {blogPosts.map((post) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card animate-on-scroll">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    width={800}
                                    height={450}
                                    loading="lazy"
                                    unoptimized
                                />
                                <p className="meta-label" style={{ marginBottom: '8px' }}>{post.date}</p>
                                <h3>{post.title}</h3>
                                <p>{post.excerpt}</p>
                            </Link>
                        ))}
                    </div>
                </section>
            </ScrollAnimation>
        </div>
    );
}
