'use client';

import { useState, FormEvent } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ScrollAnimation from '@/components/ScrollAnimation';

interface FormData {
    name: string;
    email: string;
    phone: string;
    date: Date | null;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
}

export default function ContactPage() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        date: null,
        message: '',
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const validate = (): boolean => {
        const newErrors: FormErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email';
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setSubmitting(true);
        try {
            await fetch('/api/inquiry', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    date: formData.date?.toISOString() || null,
                }),
            });
            setSubmitted(true);
        } catch {
            // silent fail for demo
        }
        setSubmitting(false);
    };

    if (submitted) {
        return (
            <div className="page-content">
                <section className="section">
                    <div className="section-narrow" style={{ textAlign: 'center' }}>
                        <div className="form-success">
                            Thank you for your inquiry. Elena will respond within 48 hours.
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    return (
        <div className="page-content">
            <ScrollAnimation>
                <section className="section">
                    <div className="section-medium">
                        <div style={{ textAlign: 'center', marginBottom: 'var(--v-sub)' }}>
                            <p className="meta-label animate-on-scroll">Get in Touch</p>
                            <h1 className="animate-on-scroll" style={{ marginTop: '16px' }}>Contact</h1>
                            <p className="animate-on-scroll" style={{ color: 'var(--muted)', marginTop: '16px' }}>
                                Interested in working together? Share your vision and Elena will be in touch.
                            </p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--gap)' }} className="contact-grid">
                            <form onSubmit={handleSubmit} className="animate-on-scroll">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="Your full name"
                                    />
                                    {errors.name && <div className="form-error">{errors.name}</div>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="your@email.com"
                                    />
                                    {errors.email && <div className="form-error">{errors.email}</div>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="date">Preferred Date</label>
                                    <DatePicker
                                        selected={formData.date}
                                        onChange={(date: Date | null) => setFormData({ ...formData, date })}
                                        placeholderText="Select a date"
                                        minDate={new Date()}
                                        id="date"
                                        dateFormat="MMMM d, yyyy"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        placeholder="Tell us about your vision..."
                                        rows={5}
                                    />
                                    {errors.message && <div className="form-error">{errors.message}</div>}
                                </div>

                                <button type="submit" className="btn" disabled={submitting} style={{ width: '100%', textAlign: 'center' }}>
                                    {submitting ? 'Sending...' : 'Submit Inquiry'}
                                </button>
                            </form>

                            <div className="animate-on-scroll" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                                <div>
                                    <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>Studio</h3>
                                    <p style={{ color: 'var(--muted)' }}>
                                        Elena Voss Studio<br />
                                        Tuscany, Italy
                                    </p>
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>Contact</h3>
                                    <p style={{ color: 'var(--muted)', marginBottom: '8px' }}>
                                        <a href="mailto:info@elenavossstudio.com">info@elenavossstudio.com</a>
                                    </p>
                                    <p style={{ color: 'var(--muted)' }}>
                                        <a href="tel:+390551234567">+39 055 1234567</a>
                                    </p>
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>Follow</h3>
                                    <p style={{ color: 'var(--muted)', marginBottom: '8px' }}>
                                        <a href="https://instagram.com/elenavossstudio" target="_blank" rel="noopener noreferrer">Instagram</a>
                                    </p>
                                    <p style={{ color: 'var(--muted)' }}>
                                        <a href="https://pinterest.com/elenavossstudio" target="_blank" rel="noopener noreferrer">Pinterest</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollAnimation>

            {/* Map */}
            <div className="map-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d369579.0178524375!2d10.98!3d43.32!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a2bf69e0f0e6d%3A0x93c86de06f2ad51!2sTuscany%2C%20Italy!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                    title="Elena Voss Studio Location - Tuscany, Italy"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                />
            </div>
        </div>
    );
}
