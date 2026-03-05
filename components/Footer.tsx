import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <div>
                    <h4>Studio</h4>
                    <p style={{ marginBottom: '8px' }}>Elena Voss Studio</p>
                    <p>Tuscany, Italy</p>
                </div>
                <div>
                    <h4>Connect</h4>
                    <p style={{ marginBottom: '8px' }}>
                        <Link href="https://instagram.com/elenavossstudio" target="_blank" rel="noopener noreferrer">
                            Instagram
                        </Link>
                    </p>
                    <p style={{ marginBottom: '8px' }}>
                        <Link href="https://pinterest.com/elenavossstudio" target="_blank" rel="noopener noreferrer">
                            Pinterest
                        </Link>
                    </p>
                    <p style={{ marginBottom: '8px' }}>
                        <Link href="mailto:info@elenavossstudio.com">
                            info@elenavossstudio.com
                        </Link>
                    </p>
                    <p>
                        <Link href="tel:+390551234567">
                            +39 055 1234567
                        </Link>
                    </p>
                </div>
                <div>
                    <h4>Explore</h4>
                    <p style={{ marginBottom: '8px' }}><Link href="/gallery">Portfolio</Link></p>
                    <p style={{ marginBottom: '8px' }}><Link href="/shop">Print Shop</Link></p>
                    <p style={{ marginBottom: '8px' }}><Link href="/blog">Journal</Link></p>
                    <p><Link href="/contact">Contact</Link></p>
                </div>
            </div>
            <div className="footer-bottom">
                © 2023 Elena Voss Studio. All rights reserved. Tuscany, Italy.
            </div>
        </footer>
    );
}
