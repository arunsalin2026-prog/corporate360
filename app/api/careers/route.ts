import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { BRAND } from "@/lib/constants";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const role = formData.get("role") as string;
    const message = (formData.get("message") as string | null) ?? "";
    const cv = formData.get("cv") as File | null;

    if (!name || !phone || !email || !role) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (!cv) {
      return NextResponse.json({ error: "CV is required" }, { status: 400 });
    }

    if (cv.size > MAX_FILE_SIZE) {
      return NextResponse.json({ error: "CV must be under 5MB" }, { status: 400 });
    }

    if (!ALLOWED_TYPES.includes(cv.type)) {
      return NextResponse.json({ error: "CV must be a PDF or Word document" }, { status: 400 });
    }

    console.log("[careers] Application received:", { name, email, role, phone, cvName: cv.name, cvSize: cv.size });

    const resend = new Resend(process.env.RESEND_API_KEY);
    const cvBase64 = Buffer.from(await cv.arrayBuffer()).toString("base64");

    await resend.emails.send({
      from: `Corporate 360 Hub Careers <noreply@${BRAND.company.website}>`,
      to: [BRAND.company.email],
      reply_to: email,
      subject: `New Job Application: ${role} — ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #0B1F3A; border-bottom: 2px solid #C9A84C; padding-bottom: 10px;">
            New Job Application
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #4A5568; font-weight: 600; width: 120px;">Name:</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #4A5568; font-weight: 600;">Phone:</td>
              <td style="padding: 8px 0;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #4A5568; font-weight: 600;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #4A5568; font-weight: 600;">Role Applied:</td>
              <td style="padding: 8px 0;">${role}</td>
            </tr>
          </table>
          ${message ? `
          <div style="background: #F7F5F1; padding: 16px; border-radius: 8px; margin-top: 16px;">
            <p style="margin: 0 0 8px; font-weight: 600; color: #4A5568;">Cover Message:</p>
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>` : ""}
          <p style="color: #9CA3AF; font-size: 12px; margin-top: 20px;">CV attached: ${cv.name}</p>
        </div>
      `,
      attachments: [{ filename: cv.name, content: cvBase64 }],
    });

    // Confirmation email to applicant
    await resend.emails.send({
      from: `Corporate 360 Hub <noreply@${BRAND.company.website}>`,
      to: [email],
      subject: "Application Received — Corporate 360 Hub",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #0B1F3A;">Thank you, ${name}!</h2>
          <p style="color: #4A5568;">We've received your application for <strong>${role}</strong> and will review it carefully.</p>
          <p style="color: #4A5568;">We'll be in touch within 2 business days if your profile is a strong match.</p>
          <p style="color: #4A5568; margin-top: 20px;">
            Best regards,<br/>
            <strong>The Corporate 360 Hub Team</strong>
          </p>
        </div>
      `,
    });

    console.log("[careers] Emails sent successfully for:", email);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[careers] Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
