//import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';
const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'Surekha <saisurekhat24@gmail.com>',
      to: ['saisurekhat24@gmail.com'],
      subject: 'Hello world',
      react: (
        <>
          <p>Email body</p>
        </>
      ),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
