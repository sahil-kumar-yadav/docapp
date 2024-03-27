// 4.10

import { Resend } from 'resend';
import { Email } from './email';
import { NextResponse } from 'next/server';
import { EmailTemplate } from '@/emails';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    // save
    const respose = await req.json()
    try {
        const data = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: [respose.data.Email],
            subject: 'Appointment Booking Confirmation',
            react: EmailTemplate({ respose }),
        })

        return NextResponse.json({ data })
    } catch (error) {
        return NextResponse.json({ error })
    }
}

