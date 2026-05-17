import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validations";
import { BRAND } from "@/lib/constants";

// In-memory rate limit: email → timestamp of last submission
const rateLimitMap = new Map<string, number>();
const RATE_LIMIT_MS = 5 * 60 * 1000; // 5 minutes

export async function POST(req: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    console.error("[contact] RESEND_API_KEY is not set");
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
  }

  try {
    const body = await req.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, phone, company, service, message } = result.data;

    // Rate limiting: block same email within 5 minutes
    const lastSubmission = rateLimitMap.get(email);
    if (lastSubmission && Date.now() - lastSubmission < RATE_LIMIT_MS) {
      return NextResponse.json(
        { error: "Please wait a few minutes before submitting again." },
        { status: 429 }
      );
    }
    rateLimitMap.set(email, Date.now());

    console.log("[contact] Submission received:", { name, email, company, service, phone });

    const resend = new Resend(process.env.RESEND_API_KEY);

    const fromAddress = process.env.RESEND_FROM_EMAIL
      ? `Corporate 360 Hub <${process.env.RESEND_FROM_EMAIL}>`
      : "Corporate 360 Hub <onboarding@resend.dev>";

    await resend.emails.send({
      from: fromAddress,
      to: [BRAND.company.email],
      reply_to: email,
      subject: `New Inquiry: ${service} from ${company}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #0B1F3A; border-bottom: 2px solid #C9A84C; padding-bottom: 10px;">
            New Contact Inquiry
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #4A5568; font-weight: 600; width: 120px;">Name:</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #4A5568; font-weight: 600;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #4A5568; font-weight: 600;">Phone:</td>
              <td style="padding: 8px 0;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #4A5568; font-weight: 600;">Company:</td>
              <td style="padding: 8px 0;">${company}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #4A5568; font-weight: 600;">Service:</td>
              <td style="padding: 8px 0;">${service}</td>
            </tr>
          </table>
          <div style="background: #F7F5F1; padding: 16px; border-radius: 8px; margin-top: 16px;">
            <p style="color: #4A5568; font-weight: 600; margin: 0 0 8px;">Message:</p>
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #9CA3AF; font-size: 12px; margin-top: 20px;">
            Submitted via ${BRAND.company.website} contact form
          </p>
        </div>
      `,
    });

    // Confirmation email to submitter
    await resend.emails.send({
      from: fromAddress,
      to: [email],
      subject: "We've received your message — Corporate 360 Hub",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #0B1F3A;">Thank you, ${name}!</h2>
          <p style="color: #4A5568;">We've received your enquiry regarding <strong>${service}</strong> and will get back to you within 24 business hours.</p>
          <p style="color: #4A5568;">In the meantime, feel free to explore our services at <a href="https://${BRAND.company.website}">${BRAND.company.website}</a>.</p>
          <p style="color: #4A5568; margin-top: 20px;">
            Best regards,<br/>
            <strong>The Corporate 360 Hub Team</strong>
          </p>
        </div>
      `,
    });

    console.log("[contact] Emails sent successfully for:", email);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[contact] Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
