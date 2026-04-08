import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message, link, source } = body as {
      name?: string;
      email?: string;
      message?: string;
      link?: string;
      source?: string;
    };

    // Basic server-side validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // Build SMTP transporter from env vars
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true", // true for port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Build a clean HTML email body
    const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body { font-family: Arial, sans-serif; color: #222; background: #f7f7f7; margin: 0; padding: 0; }
    .card { background: #fff; max-width: 560px; margin: 32px auto; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.07); }
    .header { background: #1B1D20; padding: 24px 32px; }
    .header h1 { color: #fff; margin: 0; font-size: 18px; font-weight: 600; }
    .header p { color: rgba(255,255,255,0.5); margin: 4px 0 0; font-size: 12px; }
    .body { padding: 28px 32px; }
    .row { margin-bottom: 20px; }
    .label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #999; margin-bottom: 4px; }
    .value { font-size: 14px; color: #222; line-height: 1.6; }
    .value a { color: #FF461E; text-decoration: none; }
    .divider { border: none; border-top: 1px solid #eee; margin: 20px 0; }
    .footer { background: #f7f7f7; padding: 16px 32px; font-size: 11px; color: #bbb; text-align: center; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>New Contact Form Submission</h1>
      <p>${source ? `via ${source}` : "Reputation Experts website"} &bull; ${new Date().toUTCString()}</p>
    </div>
    <div class="body">
      <div class="row">
        <div class="label">Name / Company</div>
        <div class="value">${escapeHtml(name.trim())}</div>
      </div>
      <div class="row">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:${escapeHtml(email.trim())}">${escapeHtml(email.trim())}</a></div>
      </div>
      ${
        link?.trim()
          ? `<div class="row">
        <div class="label">Google Maps / Trustpilot Link</div>
        <div class="value"><a href="${escapeHtml(link.trim())}">${escapeHtml(link.trim())}</a></div>
      </div>`
          : ""
      }
      <hr class="divider" />
      <div class="row">
        <div class="label">Message</div>
        <div class="value">${escapeHtml(message.trim()).replace(/\n/g, "<br>")}</div>
      </div>
    </div>
    <div class="footer">Reputation Experts Ltd &bull; reply directly to this email to respond</div>
  </div>
</body>
</html>`;

    await transporter.sendMail({
      from: `"Reputation Experts Website" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email.trim(),
      subject: `New enquiry from ${name.trim()} — Reputation Experts`,
      html: htmlBody,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact/route] Error sending email:", err);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}

/** Escape HTML special chars to prevent injection */
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
