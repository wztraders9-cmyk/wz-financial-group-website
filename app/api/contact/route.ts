import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const result = await resend.emails.send({
      from: "Elite Source Point <onboarding@resend.dev>",
      to: "info@elitesourcepoint.com",
      replyTo: email,
      subject: `Elite Source Point Enquiry - ${subject}`,
      html: `
        <h2>New Website Enquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>

        <hr />

        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });
    console.log("Resend result:", result);
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Email sending error:", error);

    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}