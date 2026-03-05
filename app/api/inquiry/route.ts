import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const { name, email, phone, date, message } = body;

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required.' },
                { status: 400 }
            );
        }

        // Simulate sending (log to console)
        console.log('=== New Inquiry ===');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Phone:', phone || 'Not provided');
        console.log('Preferred Date:', date || 'Not specified');
        console.log('Message:', message);
        console.log('===================');

        return NextResponse.json({
            success: true,
            message: 'Thank you for your inquiry. Elena will respond within 48 hours.',
        });
    } catch {
        return NextResponse.json(
            { error: 'Invalid request body.' },
            { status: 400 }
        );
    }
}
