import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const adminEmail = process.env.ADMIN_EMAIL;

console.log("RESEND_API_KEY:", process.env.RESEND_API_KEY);
console.log("ADMIN_EMAIL:", process.env.ADMIN_EMAIL);

export async function POST(req, res) {
  const { name, email, subject, message } = await req.json();
  console.log( name, email, subject, message);

  try {
    const data = await resend.emails.send({
      from: 'delivered@resend.dev',
      to: [adminEmail],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>New message from:</p>
          <p>{name}</p>
          <p>{email}</p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
