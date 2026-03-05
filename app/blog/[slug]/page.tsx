import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/blog-data';
import type { Metadata } from 'next';

interface BlogPostPageProps {
    params: { slug: string };
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) return {};
    return {
        title: `${post.title} – Elena Voss Studio`,
        description: post.excerpt,
    };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) notFound();

    return (
        <article className="blog-post">
            <Link href="/blog" style={{ display: 'inline-block', marginBottom: '24px' }}>
                <span className="meta-label">← Back to Journal</span>
            </Link>

            <Image
                src={post.image}
                alt={post.title}
                width={1200}
                height={675}
                className="blog-post-hero"
                priority
                unoptimized
            />

            <p className="blog-meta meta-label">{post.date}</p>
            <h1>{post.title}</h1>

            <div className="blog-post-body">
                {post.body.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                ))}
            </div>
        </article>
    );
}
