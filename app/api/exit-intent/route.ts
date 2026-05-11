import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { BRAND } from "@/lib/constants";
import { z } from "zod";

const schema = z.object({ email: z.string().email() });

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = schema.safeParse(body);
    if (!result.success) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }
    const { email } = result.data;

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: `Corporate 360 Hub <noreply@${BRAND.company.website}>`,
      to: [BRAND.company.email],
      reply_to: email,
      subject: `New Lead (Exit Intent): ${email}`,
      html: `<div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:20px">
        <h2 style="color:#0B1F3A;border-bottom:2px solid #C9A84C;padding-bottom:10px">New Exit Intent Lead</h2>
        <p style="color:#4A5568">Email: <strong>${email}</strong></p>
        <p style="color:#9CA3AF;font-size:12px">Captured via free consultation popup on ${BRAND.company.website}</p>
      </div>`,
    });

    await resend.emails.send({
      from: `Corporate 360 Hub <noreply@${BRAND.company.website}>`,
      to: [email],
      subject: "Your Free Business Consultation — Corporate 360 Hub",
      html: `<div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:20px">
        <h2 style="color:#0B1F3A">Thank you for your interest!</h2>
        <p style="color:#4A5568">We've received your request for a free business consultation and will reach out within 24 hours.</p>
        <p style="color:#4A5568;margin-top:20px">Best regards,<br/><strong>The Corporate 360 Hub Team</strong></p>
      </div>`,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
