import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const MAX_LENGTHS = { name: 100, email: 254, message: 5000 };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Best-effort throttle. Serverless instances each keep their own map and lose
// it on cold start, so this slows down a naive loop rather than guaranteeing a
// global limit; a shared store would be needed for that.
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const recentSubmissions = new Map();

function isRateLimited(ip) {
  const now = Date.now();

  // Drop stale entries so the map can't grow without bound.
  for (const [key, timestamps] of recentSubmissions) {
    const live = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
    if (live.length === 0) recentSubmissions.delete(key);
    else recentSubmissions.set(key, live);
  }

  const timestamps = recentSubmissions.get(ip) || [];
  if (timestamps.length >= RATE_LIMIT_MAX) return true;

  recentSubmissions.set(ip, [...timestamps, now]);
  return false;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Keep newlines out of anything that becomes a mail header.
function singleLine(value) {
  return String(value).replace(/[\r\n]+/g, ' ').trim();
}

async function getTransporter() {
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
}

/**
 * Handle contact form submissions
 * @param {Request} request The incoming request with form data
 */
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message, website } = body;

    // Honeypot: a real person never sees this field, so anything in it is a
    // bot. Report success so the bot has no signal to retry against.
    if (website) {
      return NextResponse.json({
        success: true,
        message: 'Thank you for your message! I will get back to you soon.'
      });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email and message are required' },
        { status: 400 }
      );
    }

    if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Name, email and message must be text' },
        { status: 400 }
      );
    }

    if (
      name.length > MAX_LENGTHS.name ||
      email.length > MAX_LENGTHS.email ||
      message.length > MAX_LENGTHS.message
    ) {
      return NextResponse.json(
        { error: 'One of the fields is too long' },
        { status: 400 }
      );
    }

    if (!EMAIL_PATTERN.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many messages from this address. Please try again later.' },
        { status: 429 }
      );
    }

    const safeName = singleLine(name);
    const safeEmail = singleLine(email);

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      cc: process.env.EMAIL_CC,
      replyTo: safeEmail,
      subject: `Portfolio Contact from ${safeName}`,
      text: `Name: ${safeName}\nEmail: ${safeEmail}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8b5cf6;">New Portfolio Contact</h2>
          <p><strong>From:</strong> ${escapeHtml(safeName)}</p>
          <p><strong>Email:</strong> ${escapeHtml(safeEmail)}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9fafb; border-radius: 5px;">
            <p style="margin-top: 0;"><strong>Message:</strong></p>
            <p style="white-space: pre-line;">${escapeHtml(message)}</p>
          </div>
        </div>
      `,
    };

    try {
      const transporter = await getTransporter();
      const info = await transporter.sendMail(mailOptions);

      console.log('Message sent: %s', info.messageId);

      return NextResponse.json({ 
        success: true, 
        message: 'Thank you for your message! I will get back to you soon.' 
      });
    } catch (emailError) {
      console.error('Email sending error:', emailError);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'There was an error processing your request.' },
      { status: 500 }
    );
  }
}
