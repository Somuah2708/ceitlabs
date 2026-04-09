import { Resend } from "resend";

export async function POST(request) {
  try {
    const body = await request.json();
    const name = (body?.name || "").trim();
    const email = (body?.email || "").trim();
    const company = (body?.company || "").trim();
    const message = (body?.message || "").trim();

    if (!name || !email || !message) {
      return Response.json(
        { message: "Please complete name, email, and project brief." },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return Response.json(
        { message: "Please provide a valid work email." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || "centralinnovativetech@gmail.com";
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL || "CEIT Contact <hello@ceitlabs.com>";

    if (!apiKey) {
      return Response.json(
        {
          message:
            "Contact service is not configured yet. Please add RESEND_API_KEY in your environment.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const safeCompany = company ? company : "Not provided";
    const safeMessage = message
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\n/g, "<br />");

    const emailResult = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `New CEIT lead from ${name}`,
      text: [
        "New CEIT contact request",
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${safeCompany}`,
        "Message:",
        message,
      ].join("\n"),
      html: `
        <h2>New CEIT Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${safeCompany}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    if (emailResult.error) {
      console.error("[CEIT Contact Send Error]", emailResult.error);

      const devDetails =
        process.env.NODE_ENV !== "production"
          ? ` (${emailResult.error.message || "No provider details"})`
          : "";

      return Response.json(
        {
          message:
            "We could not send your message right now. Please use the direct email link below." +
            devDetails,
        },
        { status: 502 }
      );
    }

    return Response.json(
      {
        message:
          "Message received. We will reach out within 24 hours with next steps.",
      },
      { status: 200 }
    );
  } catch {
    return Response.json(
      { message: "Could not process your request. Please try again." },
      { status: 500 }
    );
  }
}
