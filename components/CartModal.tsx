'use client';

import { useState, useEffect } from 'react';

export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

interface CartModalProps {
    open: boolean;
    onClose: () => void;
}

export function useCart() {
    const [items, setItems] = useState<CartItem[]>([]);

    useEffect(() => {
        const stored = localStorage.getItem('cart');
        if (stored) {
            try { setItems(JSON.parse(stored)); } catch { /* ignore */ }
        }
    }, []);

    const save = (newItems: CartItem[]) => {
        setItems(newItems);
        localStorage.setItem('cart', JSON.stringify(newItems));
    };

    const addItem = (item: Omit<CartItem, 'quantity'>) => {
        const existing = items.find(i => i.id === item.id);
        if (existing) {
            save(items.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i));
        } else {
            save([...items, { ...item, quantity: 1 }]);
        }
    };

    const removeItem = (id: string) => {
        save(items.filter(i => i.id !== id));
    };

    const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    const count = items.reduce((sum, i) => sum + i.quantity, 0);

    return { items, addItem, removeItem, total, count };
}

export default function CartModal({ open, onClose }: CartModalProps & { children?: React.ReactNode }) {
    const { items, removeItem, total } = useCart();

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [open]);

    return (
        <>
            <div className={`cart-overlay ${open ? 'open' : ''}`} onClick={onClose} />
            <div className={`cart-drawer ${open ? 'open' : ''}`}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                    <h2>Your Cart</h2>
                    <button onClick={onClose} aria-label="Close cart" style={{
                        background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text)',
                        width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px'
                    }}>
                        ✕
                    </button>
                </div>

                {items.length === 0 ? (
                    <p style={{ color: 'var(--muted)', textAlign: 'center', marginTop: '60px' }}>Your cart is empty</p>
                ) : (
                    <>
                        {items.map(item => (
                            <div key={item.id} className="cart-item">
                                <div className="cart-item-info">
                                    <h4>{item.name}</h4>
                                    <span>€{item.price} × {item.quantity}</span>
                                </div>
                                <button className="cart-item-remove" onClick={() => removeItem(item.id)} aria-label={`Remove ${item.name}`}>
                                    ✕
                                </button>
                            </div>
                        ))}
                        <div className="cart-total">
                            <span>Total</span>
                            <span>€{total}</span>
                        </div>
                        <button className="btn" style={{ width: '100%', marginTop: '24px', textAlign: 'center' }} onClick={() => alert('Checkout is simulated. Thank you for your interest!')}>
                            Checkout
                        </button>
                    </>
                )}
            </div>
        </>
    );
}
