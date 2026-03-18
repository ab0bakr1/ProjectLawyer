import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, caseType, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "missing_fields" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"موقع المكتب" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_TO,
    subject: `رسالة جديدة من ${name}`,
    html: `
      <div dir="rtl" style="font-family: Arial; padding: 20px;">
        <h2>رسالة جديدة من الموقع</h2>
        <p><strong>الاسم:</strong> ${name}</p>
        <p><strong>الإيميل:</strong> ${email}</p>
        <p><strong>نوع القضية:</strong> ${caseType || "لم يحدد"}</p>
        <p><strong>الرسالة:</strong> ${message}</p>
      </div>
    `,
  });

  return NextResponse.json({ success: true });
}
