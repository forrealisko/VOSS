'use client';

import { useState } from 'react';
import Image from 'next/image';
import ScrollAnimation from '@/components/ScrollAnimation';
import CartModal, { useCart } from '@/components/CartModal';

const products = [
    {
        id: 'print-limited',
        name: 'Limited-Edition Print',
        price: 500,
        description: 'Archival fine-art print, 50x70cm, signed.',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80&fm=webp',
    },
    {
        id: 'book-coffee-table',
        name: 'Coffee-Table Book',
        price: 250,
        description: 'Curated collection of Tuscany-inspired shoots, 200 pages.',
        image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80&fm=webp',
    },
];

export default function ShopPage() {
    const [cartOpen, setCartOpen] = useState(false);
    const { addItem, count } = useCart();

    return (
        <div className="page-content">
            <ScrollAnimation>
                <section className="section">
                    <div style={{ textAlign: 'center', marginBottom: 'var(--v-sub)' }}>
                        <p className="meta-label animate-on-scroll">Print Shop</p>
                        <h1 className="animate-on-scroll" style={{ marginTop: '16px' }}>Limited Editions</h1>
                        <p className="animate-on-scroll" style={{ color: 'var(--muted)', marginTop: '16px', maxWidth: 'var(--max-narrow)', margin: '16px auto 0' }}>
                            Bring the artistry of Elena Voss into your home with museum-quality prints and curated publications.
                        </p>
                    </div>

                    {count > 0 && (
                        <div style={{ textAlign: 'right', marginBottom: '24px' }}>
                            <button className="btn" onClick={() => setCartOpen(true)}>
                                Cart ({count})
                            </button>
                        </div>
                    )}

                    <div className="products-grid">
                        {products.map((product) => (
                            <div key={product.id} className="product-card animate-on-scroll">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={800}
                                    height={1000}
                                    className="product-card-img"
                                    loading="lazy"
                                    unoptimized
                                />
                                <div className="product-card-body">
                                    <h3>{product.name}</h3>
                                    <div className="price">€{product.price}</div>
                                    <p>{product.description}</p>
                                    <button
                                        className="btn"
                                        onClick={() => {
                                            addItem({ id: product.id, name: product.name, price: product.price });
                                            setCartOpen(true);
                                        }}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </ScrollAnimation>

            <CartModal open={cartOpen} onClose={() => setCartOpen(false)} />
        </div>
    );
}
