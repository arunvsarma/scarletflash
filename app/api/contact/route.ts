import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, company, service, message } = body;

  // Server-side validation
  if (!name?.trim() || name.trim().length < 2) {
    return NextResponse.json(
      { error: "Name must be at least 2 characters." },
      { status: 400 }
    );
  }
  if (!email?.trim() || !isValidEmail(email.trim())) {
    return NextResponse.json(
      { error: "A valid email address is required." },
      { status: 400 }
    );
  }
  if (!message?.trim() || message.trim().length < 10) {
    return NextResponse.json(
      { error: "Message must be at least 10 characters." },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === "true",
    service: "hotmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const text = [
    `Name: ${name.trim()}`,
    `Email: ${email.trim()}`,
    company?.trim() ? `Company/Project: ${company.trim()}` : "",
    service?.trim() ? `Service Interest: ${service.trim()}` : "",
    `\nMessage:\n${message.trim()}`,
  ]
    .filter(Boolean)
    .join("\n");

  const html = `
    <p><strong>Name:</strong> ${name.trim()}</p>
    <p><strong>Email:</strong> <a href="mailto:${email.trim()}">${email.trim()}</a></p>
    ${company?.trim() ? `<p><strong>Company/Project:</strong> ${company.trim()}</p>` : ""}
    ${service?.trim() ? `<p><strong>Service Interest:</strong> ${service.trim()}</p>` : ""}
    <p><strong>Message:</strong></p>
    <p style="white-space:pre-line">${message.trim()}</p>
  `;

  try {
    await transporter.sendMail({
      from: `"ScarletFlash Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO_EMAIL ?? "arun.sarma@live.in",
      replyTo: email.trim(),
      subject: `New enquiry from ${name.trim()}`,
      text,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Mail error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
